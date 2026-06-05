---
tipo: referencia
fuente: "INV-Modelamiento Dinámico de Pila; INV-Modelamiento TAGs; Variables M2M Equipo técnico"
proyecto: Modelamiento-Pila
fecha: 2026-06-05
---

# Arquitectura y Lista de TAGs — Sistema de Modelamiento de Pila OS
## Mine-to-Mill — Las Bambas

---

## 1. Objetivo del sistema

El sistema de modelamiento de pila OS busca **relacionar la información de calidad y tonelaje que proviene de mina** —modelo de bloques, despacho de camiones, datos de chancadora— **con la información que recibe planta** —feed SAG, potencia, granulometría— de manera que sea posible **comparar lo que entró a la pila con lo que llegó a molienda**.

La pila de mineral grueso (Ore Stockpile, OS) es el elemento que introduce mezcla, estratificación, segregación granulométrica y retardos variables entre ambos extremos. Modelar su comportamiento es la clave para cerrar la brecha entre lo que la mina produce y lo que el molino SAG procesa.

---

## 2. Cadena de trazabilidad modelada

```
MINA
├─ Modelo de Bloques: ley Cu/Mo, dureza BWI, litología por bloque
└─ FMS / Despacho: tonelaje, frente activo, destino por turno
        ↓
Chancadora Primaria
├─ TPH procesado
├─ Producto: P80, ley Cu/Mo (muestreo o analizador en línea)
├─ Estado: en operación / parada / falla
└─ Rock Breaker: operación ante bolones (impacta topsize de entrada a pila)
        ↓
Correa de transporte chancadora → Pila
├─ Flujo másico (weightometer) — compuerta de entrada del modelo
└─ Punto de descarga sobre la pila (central / lateral según nivel)
        ↓
PILA ORE STOCKPILE (OS)          ← núcleo del modelo
├─ Live stock   — fracción activa con flujo gravitacional disponible
├─ Dead stock   — zonas inmovilizadas (periferias, contra muro SAG2)
├─ Segregación coarse/fine por zona radial y por capa
├─ Micro-batches rastreables: masa + ley Cu/Mo + dureza + PSD + timestamp
├─ MODO_NORMAL       — nivel OS > 60%, 8 feeders con flujo gravitacional
├─ MODO_TRACTOR      — nivel OS ≤ 60%, SAG2 sin flujo natural (~20% del tiempo operativo)
↑  Flujos de retorno desde planta:
├─ Retorno de finos:    ~40 t/día (continuo)
└─ Retorno de pebbles:  ~72,000 t, 2×/año (evento de campaña)
        ↓
Feeders (8 en total)
├─ SAG 1: feeders F1–F4 — zona central, flujo gravitacional disponible en todos los niveles
└─ SAG 2: feeders F5–F8 — contra muro de concreto, flujo natural solo cuando nivel OS > 60%
        ↓
Molinos SAG 1 + SAG 2
├─ TPH feed (entrada por línea)
├─ Ley Cu/Mo feed (analizador o muestreo)
├─ P80 feed y producto
├─ Potencia activa (→ WI operacional)
└─ Generación de pebbles (retroalimenta a pila)
        ↓
COMPARACIÓN MINA VS. PLANTA
└─ Ley Cu/Mo predicha por modelo  vs.  ley Cu/Mo real medida en feed SAG
└─ P80 predicho por modelo         vs.  P80 real medido en feed SAG
└─ Masa acumulada en pila (modelo) vs.  volumen real (levantamiento topográfico)
```

---

## 3. Componentes del sistema de modelamiento

### 3.1 Ingestión de datos

| Componente | Descripción |
|-----------|-------------|
| Conector PI Web API | Lectura en tiempo real de todos los TAGs de proceso desde el historiador PI de Las Bambas. Ciclo de consulta: 1 min para señales de flujo y estado; 30 s para señales de estado de equipos. |
| Conector FMS / Mina | Ingesta de los datos del modelo de bloques y despacho por turno: ley Cu/Mo, litología, tonelaje, frente activo. Es la fuente de los atributos de calidad que se asignan a cada micro-batch que ingresa a la pila. |
| Ingesta topográfica | Procesamiento del levantamiento DEM o nube de puntos cada 15 días. Re-inicializa la geometría del Modelo Espacial y corrige la masa acumulada en el Modelo Ligero. |
| Ingesta de laboratorio / LIMS | Carga de resultados analíticos por muestra compuesta: ley Cu/Mo, BWI/dureza. Complementa o reemplaza al analizador en línea cuando no está disponible. |

### 3.2 Motor de balance de masa — Modelo Ligero (ML)

Ejecuta en ciclos de 1–5 minutos sobre CPU. Mantiene el estado actualizado de la pila y predice los atributos del feed SAG con un horizonte de 2–4 horas.

| Módulo | Función |
|--------|---------|
| Balance de masa diferencial | Integra flujo de entrada (correa chancadora) y salida (feeders) para calcular masa, nivel y volumen de pila en tiempo real. Incorpora flujos de retorno (finos y pebbles) como entradas diferenciadas. |
| Separación live / dead stock | Gestiona dos fracciones de masa: fracción activa disponible por gravedad (live) y fracción inmovilizada en zonas periféricas o contra el muro de SAG2 (dead). Los parámetros se calibran con datos históricos. |
| RTD parametrizada por régimen | Distribuye el tiempo de residencia del material en la pila según el nivel actual, el caudal de entrada/salida y el régimen operativo activo. MODO_NORMAL y MODO_TRACTOR tienen parámetros RTD distintos. |
| Tracking de micro-batches | Rastrea unidades discretas de masa con sus atributos (ley Cu/Mo, dureza BWI, granulometría PSD, litología, timestamp de ingreso) desde la correa de entrada hasta el feed SAG. |
| Gestión de regímenes | Conmuta entre MODO_NORMAL y MODO_TRACTOR según señal directa (GPS/FMS del equipo auxiliar) o inferida (nivel OS ≤ umbral + recuperación anormal en feeders SAG2). |
| Predicción feed SAG | Calcula los atributos esperados del feed SAG por línea (SAG1 / SAG2) con horizonte configurable (1–4 h), convolucionando la RTD sobre la cola de micro-batches activos. |

### 3.3 Motor espacial — Modelo Espacial (ME)

Ejecuta bajo demanda al recibir cada levantamiento topográfico. Discretiza la pila en sectores radiales × capas horizontales. Su resultado calibra los parámetros del ML para el período siguiente.

| Módulo | Función |
|--------|---------|
| Grilla 2.5D | Divide la pila en celdas (sectores radiales × capas horizontales). Cada celda almacena masa, ley Cu/Mo, dureza, PSD y timestamp de ingreso. |
| Reglas de depósito | Actualiza las celdas superficiales al recibir material nuevo desde la correa. Incorpora el punto de descarga activo para calcular la distribución espacial del material. |
| Reglas de extracción diferenciada | Simula el cono de extracción por gravedad sobre cada uno de los 8 feeders. Geometría diferenciada: F1–F4 (SAG1, zona central, cono completo) vs. F5–F8 (SAG2, contra muro, cono truncado). |
| Asimilación topográfica | Actualiza la superficie superior del modelo con el DEM del levantamiento. Reconcilia el volumen calculado con el volumen medido. Registra el error acumulado desde el levantamiento anterior como KPI de drift. |
| Calibración ML ← ME | Los parámetros de live/dead stock del ML se actualizan con los valores derivados del ME al cierre de cada levantamiento. |

### 3.4 Persistencia y publicación

| Componente | Función |
|-----------|---------|
| SQL Server | Estados del sistema por ciclo, cola de micro-batches activos, histórico de predicciones y valores reales medidos, registro de eventos (tractor, pebbles, paradas), KPIs de desempeño del modelo. |
| API REST | Publica: estado actual de pila (masa, live/dead, nivel, régimen activo), predicción de atributos feed SAG por horizonte y por línea, KPIs del modelo, historial de eventos. Acceso controlado dentro de la red de la operación. |

---

## 4. Lista de TAGs requeridos

### Categoría A — Entradas a la pila: información de mina y chancadora

Estas señales representan la **información de mina** que ingresa al modelo. Son el origen de cada micro-batch rastreado a través de la pila.

| N° | TAG / Variable | Unidad | Freq. mín. | Fuente | Prioridad | Justificación |
|----|---------------|--------|-----------|--------|:---------:|---------------|
| A1 | Flujo másico de entrada — weightometer correa chancadora → pila | t/h | 1 min | PI — weightometer / correa principal | **Crítica** | Compuerta de entrada del balance de masa. Cada lectura de este tag "nace" un micro-batch en el modelo con los atributos de calidad del frente activo. Sin esta señal, el balance de masa es inoperable desde el primer ciclo. |
| A2 | TPH de chancadora | t/h | 1 min | PI — DCS chancadora / weightometer | **Crítica** | Variable principal del flujo de entrada. Si no hay weightometer independiente en la correa, este es el valor directo. Proxy alternativo de A1. |
| A3 | Estado operativo chancadora primaria | 0/1/Fault | 30 s | PI — DCS chancadora | **Crítica** | Las paradas de chancadora son los trazadores naturales más valiosos para calibrar la RTD: generan un pulso negativo de entrada que puede rastrearse hasta el feed SAG. Sin esta señal, los períodos de no-alimentación son invisibles y el balance acumula miles de toneladas de error. |
| A4 | Estado correa de transporte chancadora → pila | 0/1/Fault | 30 s | PI — DCS correa | **Crítica** | Complementa A3. La correa puede estar detenida mientras chancadora está en operación. Necesaria para el corte preciso del flujo de entrada al modelo. |
| A5 | Potencia de chancadora | kW | 1 min | PI — analizador de potencia chancadora | **Alta** | Proxy de TPH cuando el weightometer falla. También detecta cambios de dureza del mineral: mayor potencia para igual throughput indica mineral más duro, lo que impacta el P80 de producto y la generación de pebbles aguas abajo. |
| A6 | Estado de Rock Breaker | 0/1/Fault | 30 s | PI — DCS rock breaker | **Alta** | El rock breaker opera ante bolones que exceden el topsize de la chancadora. Su activación indica mineral con mayor fragmentación gruesa, lo que modifica la distribución granulométrica de la correa y, por tanto, el perfil de segregación dentro de la pila. |
| A7 | Ley Cu en alimentación a chancadora (frente activo) | % Cu | 4 h (muestreo compuesto) o 15 min (analizador online) | PI — analizador PGNAA en correa / LIMS | **Alta** | Atributo de calidad primario asignado a cada batch que ingresa a la pila. Es la representación directa de la información de mina en el sistema. Sin esta señal, el modelo puede rastrear masa pero no puede predecir ley Cu en el feed SAG, que es el KPI central de comparación mina vs. planta. |
| A8 | Ley Mo en alimentación a chancadora | ppm Mo | 4 h (muestreo) o 15 min (analizador) | PI — PGNAA / LIMS | **Alta** | Complemento de A7 para trazabilidad completa de Mo. Relevante cuando los frentes tienen variación de Mo significativa. |
| A9 | Modelo de Bloques y despacho FMS por turno | ley Cu/Mo, litología, BWI, t/turno | Por turno | FMS / sistema gestión de mina (SIG, FleetHaul u equivalente) | **Alta** | Fuente primaria de los atributos de calidad cuando no hay analizador en línea. Permite asignar ley, litología y dureza a cada batch según el frente activo que alimentó chancadora en ese turno. Es el nexo directo entre la información de mina y el modelo de pila: sin este dato, la trazabilidad se interrumpe en la entrada. |
| A10 | Granulometría P80 / P20 en producto de chancadora | mm | 4–8 h (muestreo) o analizador online | PI — analizador de imagen en correa / LIMS | **Alta** | La distribución granulométrica de entrada determina el patrón de segregación espacial dentro de la pila: material grueso migra hacia las periferias durante el apilamiento, creando heterogeneidad radial que el Modelo Espacial necesita rastrear. Sin este dato, el ME opera ciego a la distribución de tamaños. |
| A11 | Posición / punto de descarga de la correa sobre la pila | x/y/modo | Por cambio de modo o 15 min si motorizado | PI — encoder de tripper o carro de descarga / registro operacional | **Alta** | El punto de descarga determina qué sector de la pila recibe material nuevo y cómo se distribuye la segregación radial. Descarga central produce menor segregación que descarga lateral. El ME requiere esta información en cada ciclo de actualización para distribuir correctamente los atributos por celda. |
| A12 | Dureza del mineral — BWI o índice A×b por litología | kWh/t o adim. | Semanal (compuesto por litología) | LIMS / base de datos geometalúrgica / FMS | **Alta** | Permite rastrear no solo ley sino la calidad mecánica del mineral a lo largo de la cadena. Cuando un batch de mayor dureza llega al SAG, el modelo predice mayor consumo de potencia y menor throughput. La comparación mina vs. planta no está completa sin este atributo. |
| A13 | Coordenadas de bahías de descarga de chancadoras | x/y/z (fijo) | Estático — actualizar si cambia la infraestructura | Planos de ingeniería / topografía de sitio | **Alta** | Define el punto exacto donde el material cae sobre la correa hacia la pila. Necesario para el cálculo del retardo convectivo en la correa y para el ME cuando existe más de una línea de chancado. |
| A14 | Litología / tipo de mineral por frente activo | categórica | Por turno o por bloque disparado | FMS / geología mina | **Media** | Permite anticipar cambios de BWI y ley antes de que el laboratorio los confirme. Segmenta el histórico del modelo por litología, habilitando calibración diferenciada de la RTD según el tipo de roca. |
| A15 | Humedad del mineral en correa | % | Diaria o por muestreo | Sensor de humedad en correa / muestreo laboratorio | **Media** | Afecta la densidad aparente del material en la pila y el comportamiento de flujo en los feeders: humedades altas incrementan la cohesividad, el dead stock y el riesgo de ratholing. Impacta el balance de masa cuando se trabaja en base húmeda vs. base seca. |

---

### Categoría B — Estado interno de la pila

Variables de estado del modelo. Describen el inventario, la geometría y el régimen operativo de la pila en tiempo real.

| N° | TAG / Variable | Unidad | Freq. mín. | Fuente | Prioridad | Justificación |
|----|---------------|--------|-----------|--------|:---------:|---------------|
| B1 | Nivel de pila OS | % o m | 1 min | PI — sensor radar / ultrasónico / láser en bodega | **Crítica** | Variable de estado central. El nivel determina el régimen operativo activo (>60% = flujo gravitacional SAG2; ≤60% = MODO_TRACTOR para SAG2). Condiciona la RTD, la fracción live/dead y la predicción de feed SAG. Es la señal que activa la alerta operacional de nivel crítico. |
| B2 | Masa de pila (calculada — soft sensor) | t | 1 min (calculado) | Motor ML (cálculo interno) | **Crítica** | Calculada por el balance diferencial. Se corrige con el levantamiento topográfico cada 15 días. Es la variable principal para el cierre del balance mina → pila → SAG. La desviación entre masa calculada y masa del levantamiento es el KPI de drift del modelo. |
| B3 | Volumen de pila — levantamiento topográfico DEM | m³ | Cada 15 días | Drone fotogrametría / estación total → DEM | **Crítica para ME** | Punto de re-inicialización del ME y corrección del ML. Permite validar si la masa acumulada en el modelo se corresponde con la geometría real de la pila. Un error volumétrico >5% respecto al levantamiento anterior dispara reconciliación del balance de masa. |
| B4 | Topografía base — piso de la pila (fija) | DEM | Una vez, actualizar post-mantenimiento | Levantamiento inicial con estación total | **Crítica para ME** | Define el plano de referencia inferior del ME. Sin la topografía base no se puede calcular el volumen real de la pila ni construir la malla espacial. Dato de infraestructura, no de proceso. |
| B5 | Posición de los 8 feeders — coordenadas XYZ (fijas) | m | Estático, actualizar si cambia la ingeniería | Planos de ingeniería civil / topografía de instalaciones | **Crítica para ME** | El ME necesita la posición de cada feeder para calcular el cono de extracción y su zona de influencia en la grilla. La asimetría SAG2 contra el muro de concreto solo puede representarse correctamente si la geometría de feeders está explícita en el modelo. |
| B6 | Estado / presencia de tractor o equipo auxiliar en zona de feeders SAG2 | 0/1 o evento | 5–10 min o inferido | GPS telemática del equipo (FMS) / inferencia desde PI (recuperación anormal SAG2 a nivel bajo) | **Alta** | Las Bambas opera en MODO_TRACTOR aproximadamente el 20% del tiempo operativo. Este modo tiene una RTD diferente al flujo gravitacional: el tractor moviliza dead stock hacia los feeders SAG2, modificando el patrón de extracción. Sin esta señal, el modelo mezcla los dos regímenes y la RTD calibrada pierde precisión para ambos. |
| B7 | Densidad aparente del mineral en pila | t/m³ | Mensual o por cambio de litología dominante | Laboratorio / muestreo de campaña | **Alta** | Convierte el volumen medido por topografía en masa. Una variación de ±0.1 t/m³ genera ±5–10% de error en la masa estimada. Necesaria para cerrar el balance mina → pila con las unidades correctas. |

---

### Categoría C — Extracción de la pila hacia SAG

Controlan y registran la salida de material de la pila hacia los molinos. Son el "otro extremo" del balance de masa.

| N° | TAG / Variable | Unidad | Freq. mín. | Fuente | Prioridad | Justificación |
|----|---------------|--------|-----------|--------|:---------:|---------------|
| C1 | Flujo másico de salida total — weightometer correa de feeders | t/h | 1 min | PI — weightometer en correa de descarga de feeders | **Crítica** | Cierre del balance de masa. Junto con A1, permite calcular la variación de inventario de la pila en cada ciclo. Sin esta señal, el nivel de pila acumula error indefinidamente y el modelo diverge. |
| C2 | Estado operativo de cada feeder — F1 a F8 | 0/1 | 30 s | PI — DCS por feeder | **Alta** | Determina cuántos y cuáles feeders están activos en cada ciclo. Feeders apagados no aportan flujo y su zona de la pila no se consume. Crítico para distinguir si SAG2 está extrayendo material por gravedad o si está detenido. |
| C3 | Velocidad / apertura de cada feeder — F1 a F8 | % / Hz / mm/s | 1 min | PI — setpoint o PV del controlador de feeder | **Alta** | Permite estimar el flujo proporcional de cada feeder cuando no hay weightometer individual. También detecta feeders a mínima apertura (canal preferencial o ratholing). Sin esta señal, la distribución de extracción entre feeders se asume uniforme, error que puede alcanzar el 20–40% en la RTD por zona. |
| C4 | Flujo másico por feeder individual — F1 a F4 (SAG1) y F5 a F8 (SAG2) | t/h | 1 min | PI — weightometer individual WIT por feeder | **Alta** | Señal que habilita calcular la RTD por zona: SAG1 central (flujo estable, cono completo) vs. SAG2 contra muro (flujo truncado a niveles bajos). Sin señales individuales, el modelo asume reparto uniforme entre feeders activos, introduciendo error sistemático de 20–40% en la RTD diferenciada por línea SAG. |
| C5 | Potencia del motor de cada feeder — F1 a F8 | kW | 1 min | PI — analizador de potencia MCC por feeder | **Media** | Proxy de caudal cuando no hay weightometer individual (C4). Mayor potencia = mayor carga en la correa del feeder. Permite detectar feeders con carga anormal: sobrecarga puede indicar bloqueo; carga baja inesperada puede indicar canal preferencial o vaciado de zona. |

---

### Categoría D — Flujos de retorno desde planta

Material que regresa a la pila desde el circuito SAG. Ignorarlos genera error sistemático en el balance de masa y en los atributos rastreados.

| N° | TAG / Variable | Unidad | Freq. mín. | Fuente | Prioridad | Justificación |
|----|---------------|--------|-----------|--------|:---------:|---------------|
| D1 | Flujo de retorno de finos desde planta | t/h o t/día | 15 min o evento | PI — tag de correa o bombeo de retorno / registro manual por turno | **Alta** | ~40 t/día de material fino retorna a la pila de forma continua. Aunque es pequeño en volumen relativo, altera la distribución granulométrica de la zona de descarga y el balance de masa acumulado. El modelo lo incorpora como un micro-batch diferenciado con atributos de material fino (sin ley individual asignable). |
| D2 | Tonelaje de campaña de retorno de pebbles — evento total | t (total evento) + hora inicio / fin | Por evento | PI — sistema de manejo de pebbles + registro de producción SAG / LIMS | **Alta** | Eventos de ~72,000 t (2×/año). Cada retorno representa aproximadamente el 68% de la capacidad máxima de la pila. Su impacto en el perfil granulométrico y en el balance de masa es masivo. El modelo diverge significativamente si este evento no es capturado. Además, es el trazador natural de mayor magnitud disponible para calibrar la RTD: el cambio de PSD y masa en la pila es directo y cuantificable. |
| D3 | Flujo másico de retorno de pebbles durante campaña | t/h | 1 min durante campaña activa | PI — weightometer en correa de retorno de pebbles | **Alta** | Permite al modelo incorporar el retorno de pebbles como un flujo continuo con sus atributos propios (material grueso de rechazo de molino, PSD diferente al mineral primario), no solo como un evento total. |
| D4 | Nivel en bin de pebbles pre-crusher | % | 1 min | PI — sensor de nivel en bin de pebbles | **Alta** | Permite anticipar el evento de retorno de pebbles antes de que ocurra: cuando el bin llena, el retorno es inminente. El sistema puede emitir una alerta operacional y preparar los parámetros del modelo para el evento. |
| D5 | TPH de generación de pebbles — descarga SAG | t/h | 1 min | PI — weightometer en correa de pebbles o cálculo desde balance SAG | **Alta** | Tasa de generación de pebbles en tiempo real. Alta generación de pebbles indica material de mayor dureza en la pila, lo que permite correlacionar la calidad del material en pila con la respuesta del SAG. También permite anticipar el llenado del bin (D4). |

---

### Categoría E — Información de planta: validación en SAG

La **información de planta**: lo que realmente recibe y procesa el SAG. El sistema la compara con lo predicho por el modelo para cuantificar el desempeño de la trazabilidad mine-to-mill.

| N° | TAG / Variable | Unidad | Freq. mín. | Fuente | Prioridad | Justificación |
|----|---------------|--------|-----------|--------|:---------:|---------------|
| E1 | TPH de ingreso a SAG 1 + SAG 2 — por línea | t/h | 1 min | PI — weightometer en correa de alimentación SAG | **Alta** | Validación del caudal de salida de la pila por línea. Permite cerrar el balance mina → pila → SAG. La suma debe cuadrar con el flujo total de salida de feeders (C1). Desviaciones persistentes indican error en señales de feeder o en el balance. |
| E2 | Ley Cu en feed SAG — por línea o combinado | % Cu | 15 min (analizador en línea) o turno (muestreo) | PI — analizador PGNAA o LIMS | **Alta** | **KPI primario del sistema de modelamiento.** Es la comparación directa entre lo que la mina produjo (rastreado a través de la pila) y lo que realmente llegó al molino. Si el modelo funciona correctamente, la ley Cu predicha debe converger con esta medición dentro del horizonte de predicción. |
| E3 | Ley Mo en feed SAG | ppm Mo | 15 min (analizador) o turno | PI — PGNAA / LIMS | **Alta** | Ídem E2 para Mo. Validación de trazabilidad del segundo elemento de interés económico. |
| E4 | Potencia activa SAG 1 + SAG 2 — por línea | kW | 1 min | PI — analizador de potencia SAG | **Alta** | Permite calcular el WI operacional del SAG y compararlo con el BWI esperado del material según el tracking de batches en la pila. Es la validación de la calidad mecánica del mineral rastreado desde mina: la comparación mina (dureza BWI) vs. planta (WI operacional SAG) cuantifica cuánto de la variabilidad de molienda es explicable por la composición de la pila. |
| E5 | Granulometría P80 en feed SAG | mm | 5–15 min (analizador online) o turno (muestreo) | PI — analizador de imagen en correa SAG / muestreo | **Alta** | Validación de la granulometría predicha por el modelo (tracking de segregación en pila). Permite comparar el P80 que el modelo predice que llegará al SAG con el P80 real medido. Es la señal de validación del Modelo Espacial en su componente de segregación granulométrica. |
| E6 | TPH de salida SAG 1 + SAG 2 — por línea | t/h | 1 min | PI — weightometer en descarga SAG o ciclones | **Alta** | Cierre del balance de masa aguas abajo de la pila. La diferencia entrada/salida del SAG corresponde a la variación de inventario en molienda y la generación de pebbles. Necesaria para la reconciliación metalúrgica completa. |
| E7 | WI operacional del SAG — calculado por línea | kWh/t | 1 h (cálculo interno del sistema) | Derivado de potencia SAG + TPH + F80 + P80 | **Alta** | Indicador integrado de la dureza del material que está procesando el SAG en tiempo real. Compararlo con el BWI rastreado desde mina (A12) permite cuantificar la precisión del modelo en la dimensión de calidad mecánica. |
| E8 | P80 de producto del SAG — ciclón overflow | µm | 15 min (sensor PSI/PST) o turno (muestreo) | PI — sensor online / LIMS | **Media** | Permite cerrar el balance granulométrico completo: P80 entrada mina → P80 feed SAG → P80 producto SAG. Útil para reconciliación metalúrgica y para evaluar el impacto de la composición de la pila sobre la eficiencia de molienda. |

---

## 5. Resumen de prioridades

| Categoría | TAGs | Crítica | Alta | Media |
|-----------|:----:|:-------:|:----:|:-----:|
| A — Entradas (mina / chancadora) | 15 | 4 | 8 | 3 |
| B — Estado interno de pila | 7 | 5 | 2 | — |
| C — Extracción feeders → SAG | 5 | 1 | 3 | 1 |
| D — Flujos de retorno | 5 | — | 5 | — |
| E — Validación en SAG (planta) | 8 | — | 7 | 1 |
| **TOTAL** | **40** | **10** | **25** | **5** |

### Conjunto mínimo viable — modelo operativo con precisión estimada >80%

Con este conjunto el modelo puede estimar nivel de pila, live/dead stock, tiempo de residencia medio y predecir ley Cu en feed SAG:

| TAG | Variable |
|-----|----------|
| A1 | Flujo másico entrada — weightometer correa chancadora |
| A2 | TPH chancadora |
| A3 | Estado chancadora primaria |
| A4 | Estado correa de transporte |
| A7 | Ley Cu en alimentación a chancadora |
| A9 | Modelo de bloques / FMS por turno |
| B1 | Nivel de pila OS |
| B3 | Levantamiento topográfico DEM (cada 15 días) |
| B6 | Detección de tractor / régimen MODO_TRACTOR |
| C1 | Flujo másico de salida total — weightometer feeders |
| C2 | Estado On/Off de cada feeder (×8) |
| D2 | Tonelaje y evento de retorno de pebbles |
| D4 | Nivel en bin de pebbles |
| E1 | TPH feed SAG por línea |
| E2 | Ley Cu en feed SAG |

### Señales adicionales para precisión >90%

Agregar a lo anterior: A8, A10, A11, A12, B7, C3, C4, D1, D3, D5, E3, E4, E5, E7.

---

## 6. Vacíos de información a confirmar en Discovery

Los siguientes puntos deben verificarse con el equipo de automatización de Las Bambas durante la fase de Discovery antes de comprometer el diseño final del sistema:

| Punto | Descripción | Impacto en modelo |
|-------|-------------|------------------|
| Weightometers individuales por feeder | ¿Existen tags WIT individuales para F1–F8 o solo weightometer agregado en correa de descarga? | Determina si la RTD puede diferenciarse por zona SAG1 vs. SAG2 desde el inicio |
| Analizador en línea en correa de entrada | ¿Hay PGNAA u otro analizador en línea de ley Cu/Mo en la correa chancadora → pila? | Si no existe, la ley de entrada depende del modelo de bloques + laboratorio (frecuencia 4 h vs. 15 min) |
| Señal GPS / FMS del tractor | ¿Está disponible señal de telemetría GPS del equipo auxiliar en el FMS? | Si no existe, el MODO_TRACTOR debe inferirse desde nivel de pila + comportamiento anormal de feeders SAG2 |
| Sensor de nivel de pila | ¿Existe sensor de nivel (radar / ultrasónico / láser) en la bodega de la pila OS? | Si no existe, el nivel se calcula exclusivamente por balance de masa (mayor acumulación de error entre levantamientos) |
| Señal de retorno de finos | ¿Existe tag de flujo en la línea de retorno de finos desde planta a la pila? | Si no existe, se modela como entrada fija manual configurable por el operador |
| Tags de apertura / velocidad por feeder | ¿Están disponibles en PI los setpoints o PV de velocidad de cada feeder individualmente? | Si no existen, la distribución de flujo por feeder se estima solo por estado On/Off (C2), con menor precisión |
| Frecuencia de levantamientos topográficos | ¿La frecuencia actual de levantamiento con drone es cada 15 días y puede mantenerse durante el proyecto? | Determina la frecuencia de re-inicialización del ME y la frecuencia de corrección del ML |

---

*Preparado por: Juan Mansilla — ASTAY Systems*
*Fecha: 2026-06-05*
*Fuentes: INV-Modelamiento Dinámico de Pila de Mineral Grueso; INV-Modelamiento TAGs; Variables M2M Equipo técnico*
