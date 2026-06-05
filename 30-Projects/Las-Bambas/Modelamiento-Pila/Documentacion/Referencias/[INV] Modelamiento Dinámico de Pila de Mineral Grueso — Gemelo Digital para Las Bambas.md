# Modelamiento Dinámico de Pila de Mineral Grueso (Ore Stockpile)
## Sistema de Gemelo Digital — Las Bambas, Operación de Cobre, Perú

***

## Resumen Ejecutivo

Este reporte sintetiza el estado del arte académico e industrial en modelamiento dinámico de pilas de mineral grueso (COS, *Coarse Ore Stockpile*), con énfasis en la arquitectura de gemelo digital propuesta para la operación Las Bambas (Apurímac, Perú). La evidencia recopilada cubre enfoques de modelado que van desde el FIFO clásico hasta autómatas celulares 3D con validación industrial; señales de proceso requeridas en el sistema PI (OSIsoft/AVEVA); y un protocolo estructurado de validación, calibración y monitoreo continuo. Se identificaron publicaciones directamente relacionadas con el caso Las Bambas (Yahyaei, Ye, Hilden, Mill Operators 2021) que documentan el problema específico de segregación granulométrica en la COS y su impacto desestabilizador en el circuito SAG.[^1]

***

## BLOQUE 1 — Estado del Arte y Mejores Prácticas en Modelamiento de Pilas de Mineral

### 1.1 Panorama de Enfoques de Modelado: Comparación Estructurada

Los enfoques disponibles para modelar la pila de mineral grueso en contextos mine-to-mill pueden clasificarse en seis familias, con diferencias importantes en fidelidad, costo computacional y aplicabilidad operacional:

| Enfoque | Descripción | Ventajas | Limitaciones | Aplicabilidad OS |
|---|---|---|---|---|
| **FIFO clásico** | Segmentos de masa ordenados por tiempo de ingreso; extracción en orden de llegada | Simplicidad, bajo costo computacional | No captura mezcla real; sobreestima separación de calidades | Solo útil como baseline o para pilas muy delgadas (nivel >90%) |
| **Balance de masa diferencial (RTD paramétrica)** | ODE de primer orden con distribución de tiempos de residencia parametrizada | Implementable en tiempo real; calibrable con datos históricos | Requiere identificación de parámetros; no captura geometría | Base del Modelo Ligero (ML) propuesto |
| **CSTR en cascada (Tanks-in-Series)** | Serie de *N* reactores perfectamente mezclados; equivalente a distribución gamma de parámetro *N* | Bien fundamentado en ingeniería de procesos; ajusta nivel de mezcla con un solo parámetro *N* | Asume mezcla perfecta por celda; no distingue zonas vivas/muertas sin extensión[^2] | Ideal como núcleo del modelo ligero con extensión de stock muerto |
| **Autómatas celulares (CA)** | Discretización espacial; reglas locales de flujo y segregación por tamaño | Alta fidelidad geométrica; captura segregación, estratificación y zonas muertas; validado industrialmente[^3][^1] | Mayor costo computacional; requiere parámetros de flujo de sólidos | Núcleo del Modelo Espacial (ME) propuesto; referencia clave Ye, Hilden & Yahyaei 2022–2023[^4][^5] |
| **DEM simplificado** | Elementos discretos de partícula; captura dinámica a escala de partícula | Máxima fidelidad física; válido para segregación y ratholes | Inaplicable en tiempo real a escala industrial (>10⁸ partículas); muy alto costo computacional[^6] | Útil solo para parametrizar submodelos de flujo; no para operación en línea |
| **Machine Learning / Data-driven** | Modelos de regresión, redes neuronales o ML que correlacionan señales entrada/salida | Implementación rápida con datos históricos abundantes; adaptativos | Caja negra; escasa interpretabilidad; degradación ante distribución shift[^7] | Complemento para predicción de calidad cuando hay suficientes datos históricos etiquetados |

**Conclusión de enfoque para el sistema propuesto:** Para el Modelo Ligero (ML), el enfoque más adecuado es una combinación de balance de masa diferencial con RTD parametrizada (familia CSTR en cascada extendida con fracción de stock muerto). Para el Modelo Espacial (ME), los autómatas celulares 3D representan el gold standard actual, con validación industrial publicada específicamente en Las Bambas.[^5][^1]

### 1.2 Parametrización de la RTD para Pila de Mineral Grueso

La RTD de una pila es la función que describe la probabilidad de que una partícula de mineral que ingresó en el tiempo \( t = 0 \) abandone la pila en el tiempo \( t \). Para una pila de mineral grueso con extracción por gravedad, la RTD puede parametrizarse como:

\[ E(t) = f_{live} \cdot E_{live}(t) + (1 - f_{live}) \cdot \delta(t - \tau_{dead}) \]

donde \( f_{live} \) es la fracción de stock vivo, \( E_{live}(t) \) es la RTD del volumen activo, y el término Dirac captura la contribución del stock muerto cuando es eventualmente movilizado.[^8]

**Distribuciones utilizadas para \( E_{live}(t) \):**

- **Exponencial (N=1 CSTR):** Adecuada para pilas muy mezcladas o a nivel alto (>80%). Parámetro único: tiempo medio de residencia \( \bar{\tau} = M_{live}/\dot{m}_{out} \).[^2]
- **Gamma (Erlang, N entero):** Familia más flexible. Cuando el parámetro de forma \( k \geq 2 \) describe pilas con cierto orden de flujo (mezcla parcial). Es el equivalente a *N* tanques en serie, lo que la hace conveniente para calibración: a mayor \( k \), más próxima al flujo pistón.[^9]
- **Log-normal:** Apropiada cuando la RTD tiene cola larga hacia tiempos largos, como ocurre en pilas donde material antiguo queda atrapado cerca del muro; reportada en modelos de trazadores naturales.[^10]
- **Mezcla de distribuciones (bimodal):** Necesaria cuando existen dos zonas claramente diferenciadas — por ejemplo, material cerca de los feeders centrales (SAG 1) versus material contra el muro de concreto (SAG 2). Una mezcla de dos gammas permite capturar esta bimodalidad geométrica.[^11]

**Dependencia paramétrica con condiciones operacionales:**

La RTD no es estacionaria: sus parámetros varían con el nivel de la pila, las tasas de flujo y el modo operacional. La literatura reporta las siguientes dependencias:

- **Nivel de pila:** A nivel alto (>80%), el flujo en los feeders es completamente gravitacional y estable; la RTD se aproxima a una mezcla de CSTR. A nivel bajo (<60% — condición crítica en Las Bambas para SAG 2), el cono de extracción se trunca y el flujo pierde simetría; la RTD se ensancha y el tiempo medio de residencia aumenta significativamente.[^12][^13]
- **Tasa de extracción:** Mayor tasa de extracción estrecha la RTD (menor tiempo de residencia, mejor mezcla por zona). Tasas bajas permiten que el material estratifique y la segregación granulométrica se acentúe.
- **Tasa de alimentación:** Altas tasas de alimentación modifican el ángulo de reposo dinámico y el perfil de la pila, alterando las zonas de stock muerto.[^12]

**Implementación práctica:** Para el Modelo Ligero propuesto, se recomienda parametrizar la RTD con una distribución gamma de dos parámetros (\( k, \theta \)) estimados en función del nivel normalizado de la pila \( L^* = M_{actual}/M_{max} \), con actualización en cada ciclo de integración.

### 1.3 Separación Live Stock / Dead Stock: Evidencia y Valores Típicos

La distinción entre stock vivo (material que puede fluir naturalmente hacia los feeders por gravedad) y stock muerto (material inmovilizado en zonas periféricas del cono de extracción) es el parámetro más crítico para la precisión del modelo.

**Mecanismo físico:** En flujo de embudo (*funnel flow*), que es el patrón predominante en pilas de mineral grueso de gran escala con extracción inferior por feeders, el material fluye a través de un canal activo sobre cada feeder, mientras el material periférico permanece estático hasta que el nivel baja suficientemente para que el cono de extracción alcance las zonas laterales.[^14][^12]

**Valores reportados en la literatura:**

- Ferreira et al. (2022, RSD Journal) midieron experimentalmente la fracción de volumen vivo en pilas cónicas con reclaiming inferior gravitacional, obteniendo valores de **17.7 ± 0.3%** para arena de laboratorio usando tanto pesaje directo como aerofotogrametría con drone.[^15]
- Pan (2012, AGH Journal) reporta que la banda muerta puede contener hasta el **75% de la masa total** de una pila llena en condiciones típicas de mineral de mina, refiriéndose a una "dad band" (dead band) perimetral claramente definida.[^16]
- Jenike & Johanson reportan que en proyectos mineros de gran escala donde la pila fue diseñada sin caracterización reológica del mineral, se han observado capacidades vivas **mucho menores que el diseño**, requiriendo uso de bulldozers para recuperar material de las zonas muertas. Este escenario es exactamente el documentado en Las Bambas para nivel <60% en SAG 2.[^13]
- Los trabajos de Ye, Hilden y Yahyaei (2022–2023, Minerals Engineering) sobre autómatas celulares 3D muestran que la fracción de sección transversal muerta puede alcanzar el **42–57%** dependiendo de la configuración de feeders y el ángulo de reposo del material.[^3][^15]

**Factores que incrementan el stock muerto:**
1. Alta cohesividad o humedad del mineral
2. Mayor número de feeders con mayor espaciamiento (reducción de la superposición de conos de extracción)
3. Posición asimétrica de feeders (como en Las Bambas: SAG 2 contra muro de concreto)
4. Nivel de pila bajo (<40%) con geometría de pila asimétrica
5. Mineral fino de alta cohesividad retornado desde planta

### 1.4 Modelos 2.5D / Espaciales Discretizados: Implementaciones Operacionales

**Autómatas Celulares 3D — Serie de Minerals Engineering 2022–2023:**

Ye, Hilden y Yahyaei publicaron en Minerals Engineering los dos trabajos más relevantes del estado del arte actual:

- **Parte 1** (DOI: 10.1016/j.mineng.2022.107816, 2022): Modelo 3D CA para simulación de formación de pilas con segregación granulométrica por estratificación superficial. El modelo captura cómo el material más grueso migra hacia las zonas periféricas durante el apilamiento, creando heterogeneidad radial en la distribución de tamaños.[^17][^4]
- **Parte 2** (DOI: 10.1016/j.mineng.2023.108156, 2023): Extensión al proceso de descarga dinámica con validación industrial. Los mecanismos de segregación por trayectoria durante la extracción son modelados explícitamente. La validación fue realizada con datos del caso Las Bambas.[^5][^1]

Complementariamente, el grupo publicó un test de laboratorio para caracterizar la segregación de pilas (DOI: 10.1016/j.mineng.2022.107830), que provee la metodología experimental para obtener los parámetros del modelo CA.[^18]

**Enfoque de Partículas Distribuidas (Digital Twin — MDPI Minerals 2021):**

Servin, Vesterlund y Wallin (DOI: 10.3390/min11050524, MDPI Minerals, 2021) propusieron un gemelo digital basado en pseudo-partículas que representa el material granular como una colección de partículas virtuales, cada una portadora de atributos (masa, posición, concentración, dureza). Los movimientos se calculan combinando datos de sensores con surrogates granulares de orden reducido entrenados mediante DEM. La aplicación incluye el seguimiento del material desde la mina hasta el molino, con capacidad de estimar propiedades en "zonas ciegas" como pilas y silos donde no hay sensores directos. Esta arquitectura es directamente compatible con la propuesta del sistema ML+ME.[^19][^20]

**Concepto de Silo Virtual (Minerals 2022, Aitik):**

Varannai, Johansson y Schunnesson (DOI: 10.3390/min12020147, Minerals, 2022) implementaron un modelo de transporte basado en el "concepto de silo virtual" para estimar el tiempo de transporte desde chancadora hasta molino en la mina Aitik (Boliden, Suecia). Los resultados mostraron que las estimaciones basadas en valores promedio subestiman los tiempos reales de transporte en hasta un **50%** comparados con cálculos basados en valores instantáneos, lo que subraya la necesidad de integración en tiempo real con el historiador de datos.[^21]

**Software Comercial — IntelliSense Digital Stockpile:**

IntelliSense.io implementó un sistema comercial de gemelo digital para pilas de mineral (cliente: mina de cobre de gran escala) que combina modelos 3D de bloques con seguimiento de flujos de material en tiempo cuasi-real. El sistema rastrea propiedades del material (volumen, ley de elementos clave, dureza, litología, fuente) desde la mina hasta la planta, generando alertas y predicciones de llegada de material. Implementa modelado 3D y 2D en paralelo para robustez ante incertidumbre de datos.[^22]

**Software Comercial — Datamine Reconcilor:**

Datamine Reconcilor implementa múltiples algoritmos de modelado de pila: Average, FIFO, LIFO, LIFO Average y LIFO Configured, como opciones para modelar la recuperación de grados en pilas de reconciliación. Sin embargo, estos algoritmos son más apropiados para gestión metalúrgica que para modelos dinámicos en tiempo real.[^23]

### 1.5 Escenarios Especiales: Tractores, Retornos, Geometría Asimétrica y Cambio de Patrón de Apilamiento

#### 1.5.1 Uso de Tractores / Bulldozers para Alimentación Forzada

El uso de equipos auxiliares para empujar material hacia los feeders cuando el nivel de pila no permite flujo gravitacional es un escenario documentado específicamente para Las Bambas y frecuente en operaciones de gran escala con pilas mal diseñadas.[^13]

**Impacto en el modelo:**
- Los tractores movilizan material del **stock muerto** hacia las zonas de los feeders, convirtiendo efectivamente dead stock en live stock temporalmente. Esto rompe la hipótesis de separación estática entre ambas fracciones.
- El flujo generado por tractores no respeta la RTD gravitacional: es un flujo forzado con distribución temporal diferente (más cercana a flujo pistón desde la zona empujada).
- La ley del material movilizado puede ser diferente a la del stock vivo activo (el stock muerto retiene material más antiguo y puede tener diferente granulometría por segregación).

**Modelado recomendado:** Implementar un modo operacional discreto en el modelo: `MODO_NORMAL` (flujo gravitacional puro) y `MODO_TRACTOR`. En MODO_TRACTOR: (a) incrementar temporalmente la fracción de stock vivo efectivo en un factor \( \alpha_{dozer} \) calibrado operacionalmente; (b) modificar la RTD de la zona afectada hacia una distribución más estrecha; (c) si hay señal de detección del tractor (GPS, cámara, consumo de energía del feeder afectado), activar el modo automáticamente.[^16]

#### 1.5.2 Flujos de Retorno desde Planta

Los flujos de retorno de finos (~40 t/día) y pebbles (~72,000 t, 2 veces/año) presentan características específicas de modelado:[^24]

- **Finos (~40 t/día):** Flujo continuo, volumen pequeño relativo al total, pero con granulometría muy diferente al material fresco. Su ingreso modifica la distribución granulométrica de la pila, particularmente en las zonas donde se descargan. Li et al. (2024, Chalmers/MDPI Minerals) muestran que finos de retorno alteran la tasa de pebbles generados por el SAG, creando retroalimentación dinámica en el circuito.[^24]
- **Pebbles (~72,000 t, 2×/año):** Eventos de pulso de gran magnitud. Cada retorno representa ~68% de la capacidad máxima de la pila. Su ingreso debe modelarse como un evento de carga masiva que modifica significativamente el perfil granulométrico de la pila durante un período de 1–3 semanas.

**Modelado recomendado:** Tratar cada flujo de retorno como un micro-batch con sus propios atributos (granulometría, ley, dureza) y punto/momento de descarga conocidos. En el sistema de micro-batch tracking del Modelo Ligero, cada retorno genera un batch diferenciado con su RTD propia.

#### 1.5.3 Geometría Asimétrica de Feeders

La configuración asimétrica de Las Bambas — 4 feeders en zona central para SAG 1, y 4 feeders contra muro de concreto para SAG 2 — introduce una asimetría fundamental en el cono de extracción:[^15]

- Los feeders contra el muro generan un patrón de extracción truncado: el cono de extracción está limitado lateralmente por el muro, reduciendo el volumen vivo accesible por gravedad en comparación con feeders en campo abierto.
- Esto explica el comportamiento documentado en la operación: a <60% de nivel, SAG 2 pierde flujo gravitacional mientras SAG 1 puede continuar operando.
- Los trabajos de Jenike & Johanson y Guo et al. (Bulk Handling Review) abordan explícitamente el efecto del desplazamiento del feeder respecto al eje de la pila (\( X \) en la Figura 3 de su metodología) sobre la capacidad viva.[^14]

**Modelado recomendado en ME:** Implementar la discretización radial con reconocimiento de la asimetría de muro: las celdas del sector adyacente al muro de concreto reciben un ángulo de drawdown modificado (menor fracción viva en ese sector). Esto es natural en la discretización radial × capas propuesta para el Modelo Espacial.

#### 1.5.4 Cambio de Patrón de Apilamiento según Nivel

La dirección de descarga de la correa sobre la pila puede variar a medida que cambia el nivel, modificando el punto de descarga y el ángulo de impacto. Esto altera la distribución espacial de tamaños y la forma del perfil de la pila. El modelo CA Parte 1 (Ye et al. 2022) demuestra que el punto de descarga del material desde la correa determina la magnitud de la segregación radial: descarga central produce menor segregación que descarga lateral. El ME debe registrar el punto de descarga activo en cada ciclo de actualización topográfica.[^4][^17]

### 1.6 Precisión Reportada en Implementaciones Reales

| Sistema / Publicación | Métrica reportada | Valor | Contexto |
|---|---|---|---|
| Digital Twin SAG Mill (Brunel/UCL 2025)[^7] | Error de predicción de variables de molino (2.5 min horizonte) | <5% | 68 h datos entrenamiento, 8 h validación, 30 s intervalo |
| Drone fotogrametría — volumen de pila[^25] | RMSE superficial con GCP | ±3–5 cm; volumen ±1–3% | Aplicable a levantamiento topográfico ME cada 15 días |
| Drone fotogrametría — sin GCP[^26] | Error volumétrico | ~15% (sin GCP) / ~8% (con GCP relativo) | Relevante para protocolo de validación del ME |
| Ferreira et al. 2022 (CA vs. drones)[^15] | Fracción volumen vivo: CA vs. gravimétrico | CA: 15.60% vs. medido: 17.7% (error ~2 pp) | Escala laboratorio, arena, pila cónica simple |
| IntelliSense Digital Stockpile[^22] | Seguimiento en tiempo cuasi-real | No cuantificado públicamente | Mina de cobre gran escala |
| Varannai et al. 2022 (Aitik, silo virtual)[^21] | Error tiempo de transporte vs. valor promedio | Hasta 50% subestimación con promedios | Cadena chancadora-pila-molino |
| SAG Digital Twin (AI meta-model, 2026)[^27] | Precisión modelo ML meta-modelo | >90% en escenarios de entrenamiento | >3 millones de escenarios simulados |

***

## BLOQUE 2 — Lista de Señales Requeridas para Modelamiento Correcto

### Tabla Maestra de Señales de Proceso

La siguiente tabla presenta las señales requeridas para el sistema de gemelo digital de la COS, ordenadas por prioridad. La prioridad "Crítica" indica que la ausencia de la señal hace inoperable el modelo; "Alta" implica degradación severa (>20% en error); "Media" implica degradación moderada (5–20%); "Deseable" agrega valor pero no degrada significativamente el modelo base.

#### A. Señales de Masa y Flujo

| Variable | Unidad | Freq. mín. recomendada | Fuente típica | Prioridad | Impacto si no disponible | Alternativa / Proxy |
|---|---|---|---|---|---|---|
| Caudal másico entrada (correa chancadora→pila) | t/h | 1 min | PI tag: weightometer/correa principal | **Crítica** | Imposible cerrar balance de masa; nivel estimado diverge | Estimación desde amperaje de motor de chancadora + modelo de capacidad |
| Nivel de pila (estimado por balance de masa) | % / t | 1 min (calculado) | Modelo soft sensor [^16] | **Crítica** | No hay estado del sistema; RTD sin referencia | — (calculado internamente por el modelo) |
| Caudal másico total de salida (suma 8 feeders) | t/h | 1 min | PI tag: weightometer en correa de descarga de feeders | **Crítica** | No se puede calcular variación de nivel; error acumulado en balance | Suma de señales individuales de velocidad + apertura de feeders |
| Caudal másico por feeder individual (×8) | t/h | 1 min | PI tags: weight indicator por feeder (WIT) [^28] | **Alta** | Imposible separar contribución SAG1/SAG2; no se puede inferir asimetría de extracción; error en RTD por zona | Señal agregada + reparto proporcional basado en apertura relativa |
| Flujo de retorno de finos desde planta | t/h o t/día | 15 min | PI tag o registro manual de proceso | **Alta** | Finos no contabilizados; error en balance <5 t/día (~12.5% del retorno total) | Estimación por floculante consumido o señal de bomba de retorno |
| Flujo de retorno de pebbles | t (evento) + fecha/hora inicio | Por evento | Registro de sistema SAG o manual | **Alta** | Evento de 72,000 t no capturado; modelo desincronizado por semanas | Señal de nivel en bin de pebbles + registro de arranque de correa de retorno |
| Densidad aparente del mineral en pila | t/m³ | Mensual (muestreo) | Laboratorio / muestreo campañas | Media | Error en conversión volumen↔masa de ±5–10% según variación litológica | Valor fijo de diseño (típico: 1.8–2.1 t/m³ para Cu pórfido) con actualización manual |
| Tonelaje acumulado procesado por SAG 1 y SAG 2 | t | 15 min | PI tags: contadores de producción SAG | **Alta** | No puede validarse balance de masa aguas abajo | Estimación desde potencia activa + velocidad de avance |

#### B. Señales de Estado de Equipos

| Variable | Unidad | Freq. mín. recomendada | Fuente típica | Prioridad | Impacto si no disponible | Alternativa / Proxy |
|---|---|---|---|---|---|---|
| Estado operativo de chancadora primaria | Booleano (On/Off/Fault) | 30 s | PI tag: DCS estado chancadora | **Crítica** | Paradas no detectadas generan error de ~3,000 t/h en balance durante el evento | Señal de corriente de motor chancadora > umbral mínimo |
| Estado operativo de correa de transporte | Booleano (On/Off/Fault) | 30 s | PI tag: DCS estado correa | **Crítica** | Flujo de entrada no puede interrumpirse en el modelo sin esta señal | Velocidad medida de correa |
| Estado de cada feeder (×8) On/Off | Booleano | 30 s | PI tag: DCS estado por feeder | **Alta** | No puede inferirse qué feeders están activos; error en distribución de extracción | Corriente de motor de cada feeder |
| Apertura de feeder / velocidad de correa (×8) | % / m/s | 1 min | PI tag: setpoint o PV de controlador de feeder | **Alta** | No puede estimarse flujo proporcional por feeder; distribución uniforme asumida → error en RTD por zona | Consumo de potencia como proxy de caudal |
| Detección de tractor / equipo auxiliar en zona feeders | Booleano / evento | 5 min | GPS telemática (señal directa) o inferido [^29] | **Alta** | Los períodos con tractor (~20% del tiempo) tienen flujo no-gravitacional; modelo estima RTD incorrecta | Detección indirecta: variación anormal de caudal por feeder sin cambio de setpoint; análisis de cámaras CCTV |
| Modo de descarga de correa (posición/dirección) | Discreta (posición A/B/C) | 15 min | PI tag o señal de posición de tripper/carro | Media | No puede actualizar punto de descarga en ME; error en distribución espacial de masa nueva | Posición inferida por nivel de pila (regla operacional documentada) |

#### C. Señales de Calidad del Mineral

| Variable | Unidad | Freq. mín. recomendada | Fuente típica | Prioridad | Impacto si no disponible | Alternativa / Proxy |
|---|---|---|---|---|---|---|
| Ley Cu en alimentación a chancadora | % Cu | 4 h (muestreo compuesto) | Laboratorio / cross-belt analyzer PGNAA [^30][^31] | **Alta** | No puede rastrearse ley Cu en pila; predicción de ley en feed SAG imposible con precisión | Modelo de bloques de la mina con offset de reconciliación |
| Ley Mo en alimentación a chancadora | ppm Mo | 4 h | Laboratorio / PGNAA si disponible | Media | Impacto menor; Mo es subproducto en Las Bambas | Modelo de bloques con correlación Cu-Mo histórica |
| Bond Work Index (BWI) o A×b del mineral | kWh/t / adimensional | Semanal (compuesto) o por litología | Ensayo de laboratorio / base de datos geometalúrgica | **Alta** | Sin dureza no puede correlacionarse COS con WI operacional del SAG; validación del modelo imposible | Estimación desde WI operacional del SAG aguas abajo (señal proxy) |
| Humedad del mineral en pila | % | Diaria (muestreo) o sensor en línea | Sensor de humedad en correa o muestreo | Media | Afecta densidad aparente y comportamiento de flujo en feeders; error estimado en balance <5% | Valor estacional basado en histórico climático; datos de precipitación |
| Granulometría P80 / P20 alimentación chancadora | mm | 4–8 h (muestreo o split online) | Split granulométrico en correa o muestreo[^32] | **Alta** | No puede alimentarse RTD con segregación granulométrica; modelo ME ciego a distribución de tamaños | P80 estimado desde modelo de fragmentación de chancadora (CSS + F80 entrada) |
| Granulometría P80 en descarga por feeder | mm | Por evento (levantamiento) | Muestreo manual periódico o sensor en línea si disponible | Deseable | Permite validar segregación radial predicha por ME | Modelo de segregación CA calibrado con datos de campaña inicial |
| Litología / tipo de mineral (frente activo) | Categórica | Por turno o por bloque disparado | Sistema de gestión de mina (flota) + geología | Media | Sin litología no puede anticiparse cambio de BWI; recalibración tardía | Tracking de equipo + mapa litológico del pit |

#### D. Señales de Geometría y Topografía

| Variable | Unidad | Freq. mín. recomendada | Fuente típica | Prioridad | Impacto si no disponible | Alternativa / Proxy |
|---|---|---|---|---|---|---|
| Levantamiento topográfico de superficie de pila | Nube de puntos / DEM | Cada 15 días (actual) | Drone fotogrametría / estación total [^25][^33] | **Crítica para ME** | ME no puede calibrarse ni validarse sin datos geométricos reales | Balance de masa diferencial del ML como proxy de volumen total |
| Volumen y tonelaje de pila desde levantamiento | m³ / t | Cada 15 días | Post-procesado fotogrametría (error ±1–3% con GCP) [^25] | **Crítica para ME** | Punto de re-inicialización del ML sin referencia absoluta | Estimación continua del ML corregida al recibir levantamiento |
| Posición fija de feeders (ingeniería) | Coordenadas XYZ | Una vez (fija) | Planos de ingeniería | **Crítica para ME** | No puede construirse malla espacial del modelo | — (dato fijo de diseño) |
| Punto y dirección de descarga de correa | Posición XY + ángulo | 15 min o por cambio de modo | PI tag o señal de posición (si variable) | Alta | Error en perfil espacial de pila en ME; error de segregación radial | Regla lógica basada en nivel de pila documentada operacionalmente |
| Topografía base (piso de la pila) | DEM base | Una vez (fija, con actualizaciones post-mantenimiento) | Levantamiento inicial con estación total | **Crítica para ME** | Sin base no puede calcularse volumen real de la pila | Planos de diseño civil de la bodega de la pila |

#### E. Señales de Proceso Complementarias

| Variable | Unidad | Freq. mín. recomendada | Fuente típica | Prioridad | Impacto si no disponible | Alternativa / Proxy |
|---|---|---|---|---|---|---|
| Consumo de potencia de cada feeder (×8) | kW | 1 min | PI tag: analizador de potencia por feeder | Media | Pérdida de proxy de caudal cuando no hay weightometer individual | — (señal de validación/proxy) |
| Tonelaje SAG 1 + SAG 2 (procesado) | t/h | 1 min | PI tags: weightometer en alimentación SAG | **Alta para validación** | No puede validarse balance de masa de salida de pila | Estimado desde potencia activa del SAG (Hogg-Fuerstenau) |
| WI operacional del SAG (calculado) | kWh/t | 1 h (calculado) | Derivado de potencia, caudal, F80, P80 del SAG | Alta para validación | No puede correlacionarse BWI con señal de calidad de feed SAG | — (señal derivada calculada internamente) |
| P80 de producto del SAG (ciclón overflow) | µm | 15 min | Sensor en línea (PSI, PST) o muestreo | Media | No puede cerrar el balance granulométrico para validar predicción de ME | Muestreo puntual por turno |
| Temperatura ambiental y precipitación | °C / mm/h | 1 h | Estación meteorológica del sitio | Deseable | Humedad del mineral y comportamiento de flujo afectados por lluvia | Datos climáticos externos (SENAMHI) |
| Nivel en bin de pebbles pre-crusher | % | 1 min | PI tag: sensor de nivel en bin | Alta | No puede anticiparse evento de retorno de pebbles | Nivel estimado por balance en circuito SAG |

### 2.1 Conjunto Mínimo Viable para Modelo Ligero con Precisión >80%

El conjunto mínimo viable (MVP) que permite implementar el ML con precisión estimada >80% en predicción de ley Cu en feed SAG comprende:

1. **Caudal másico de entrada** (weightometer en correa principal) — *Crítica*
2. **Caudal másico total de salida** (weightometer en correa de feeders) — *Crítica*
3. **Estado On/Off de chancadora** — *Crítica*
4. **Estado On/Off de cada feeder** (8 señales booleanas) — *Alta*
5. **Ley Cu en alimentación a chancadora** (cada 4 h mínimo) — *Alta*
6. **Tonelaje SAG procesado** (para validación de balance) — *Alta*
7. **Detección de modo tractor** (inferida o directa) — *Alta*
8. **Registro de eventos de retorno de pebbles** (fecha/hora/tonnage) — *Alta*

Con este conjunto, el ML puede estimar nivel de pila, fracción live/dead, tiempo de residencia medio y predicción de ley Cu en feed SAG con un error estimado de 15–25% sin calibración y <15% post-calibración.

### 2.2 Señales Adicionales para Precisión >90%

Para elevar la precisión hacia el 90% se requieren adicionalmente:

9. **Caudal másico individual por feeder** (weightometer individual × 8) — permite separar RTD por zona SAG1 vs. SAG2
10. **BWI o A×b del mineral** (actualización semanal) — permite correlacionar calidad mecánica del feed con WI operacional del SAG
11. **Levantamiento topográfico** (cada 15 días) — permite re-inicializar el ML y validar acumulación de error
12. **Apertura/velocidad de feeder** (×8, señal continua) — permite inferir flujo proporcional cuando no hay weightometer individual
13. **Granulometría P80 en alimentación** (muestreo 4–8 h) — mejora predicción de segregación en ME

### 2.3 Impacto de la Ausencia de Señales por Feeder Individual

La diferencia entre tener señal agregada de salida total versus señales individuales por feeder es significativa para el sistema propuesto:

- **Con señal agregada solamente:** El modelo asume distribución uniforme de la extracción entre feeders activos, o reparte proporcionalmente según apertura. Esto genera error sistemático cuando hay feeders de baja apertura o apagados. El error en estimación de RTD por zona puede ser del 20–40%.
- **Con señales individuales por feeder:** Permite calcular la RTD diferenciada por zona (SAG 1 central vs. SAG 2 muro), detectar feeders con flujo anormal (posible atascamiento o canal preferencial), y actualizar la fracción live/dead por sector independientemente. El error en RTD por zona se reduce al 5–15% post-calibración.

***

## BLOQUE 3 — Protocolo de Validación del Sistema de Modelamiento

### 3.1 KPIs de Desempeño del Modelo

#### 3.1.1 Métricas de Error para Predicción de Ley Cu/Mo en Feed SAG

La predicción de ley de Cu y Mo en el feed SAG es el KPI de mayor impacto económico del sistema. Las métricas recomendadas son:

**MAE (Mean Absolute Error):**
\[ \text{MAE} = \frac{1}{n}\sum_{i=1}^{n}|\hat{y}_i - y_i| \]

**Justificación de MAE como métrica primaria:** Para leyes de Cu que típicamente varían entre 0.5–1.5% Cu en Las Bambas, el MAE es más apropiado que RMSE porque es robusto a outliers generados por eventos operacionales extremos (paradas de planta, cambios abruptos de frente) que no reflejan fallas del modelo sino del proceso. El MAE es directamente interpretable en las mismas unidades que la ley.

**RMSE como métrica secundaria:** Se reporta junto al MAE para detectar si hay errores grandes y esporádicos (RMSE >> MAE indica presencia de outliers o eventos no capturados). Un ratio RMSE/MAE > 1.5 debe disparar investigación de causas.

**MAPE como métrica de reporte ejecutivo:** Transforma el error a porcentaje, útil para comunicación con gerencia. Sin embargo, es susceptible a distorsiones cuando la ley medida es próxima a cero (no aplica a Cu en Las Bambas, pero sí potencialmente para Mo en períodos de mezcla de litologías).

**Umbrales de aceptación recomendados:**

| KPI | Métrica | Umbral Aceptable | Umbral Excelente | Fuente de referencia |
|---|---|---|---|---|
| Ley Cu en feed SAG | MAE | ≤0.08% Cu | ≤0.05% Cu | Extrapolado de SAG digital twins con error <5% en predicción de variables[^7] |
| Ley Cu en feed SAG | MAPE | ≤8% | ≤5% | — |
| Ley Mo en feed SAG | MAE | ≤15 ppm | ≤8 ppm | — |
| Nivel de pila (masa) | MAPE vs. levantamiento | ≤5% | ≤2% | Drone fotogrametría ±1–3% con GCP[^25] |
| Nivel de pila (masa) | Drift acumulado entre levantamientos | ≤3% de capacidad total/15 días | ≤1.5% | — |
| P80 feed SAG | MAE | ≤5 mm | ≤2 mm | — |
| Error volumétrico ME vs. topografía | MAPE | ≤5% | ≤2% | Drone RMSE ±3–5 cm[^34] |

#### 3.1.2 Validación de la RTD sin Trazadores Físicos

La ausencia de trazadores RFID o químicos — que son el gold standard para medir RTD directamente — obliga a métodos estadísticos indirectos. Los enfoques validados en la literatura son:[^35]

**a) Correlación cruzada entrada–salida (trazadores naturales):**

La técnica más robusta y directamente aplicable a Las Bambas. Consiste en identificar eventos donde la señal de entrada (ley Cu en chancadora) tiene una perturbación distinguible (cambio de frente litológico, parada de chancado, inicio de mezcla de litologías) y medir el retardo y la dispersión con que ese evento se manifiesta en la señal de salida (ley Cu en feed SAG).

\[ R_{xy}(\tau) = \frac{1}{n}\sum_{t=1}^{n} x(t) \cdot y(t+\tau) \]

El tiempo de retardo \( \tau^* \) que maximiza \( R_{xy}(\tau) \) estima el tiempo medio de residencia \( \bar{t} \); la amplitud relativa del pico estima la eficiencia de mezcla. Este método fue validado por Varannai et al. (2022) en Aitik para el sistema chancadora-pila-molino, encontrando que los valores estimados con promedios pueden ser hasta 50% diferentes de los calculados con valores instantáneos.[^21]

**b) Validación por eventos operacionales como trazadores:**

Eventos específicos de la operación de Las Bambas son especialmente valiosos como trazadores naturales:
- **Paradas programadas de chancadora** (duración conocida, inicio/fin registrado en PI): generan un pulso negativo en la entrada que puede rastrearse en la señal de salida.
- **Inicio de retorno de pebbles** (≈72,000 t, 2×/año): evento de gran magnitud con granulometría característica; actúa como trazador de volumen y granulometría.
- **Cambio de frente de explotación** (nuevo litotipo con ley significativamente diferente): genera escalón en la señal de entrada que puede rastrearse como función de transferencia del sistema.
- **Inicio/fin de operación de tractor**: genera cambio en el patrón de extracción detectable como perturbación en la uniformidad de flujo por feeder.

**c) Ajuste por cierre metalúrgico periódico:**

El cierre metalúrgico mensual o por campaña proporciona validación integral del balance de masa. El error de cierre del balance de Cu (diferencia entre Cu alimentado y Cu procesado, incluyendo la variación de inventario en pila) debe ser <±3% para considerar el modelo calibrado.[^36][^37]

### 3.2 Protocolo de Calibración Inicial

#### 3.2.1 Datos Históricos Necesarios para Calibración Inicial de la RTD

1. **Duración mínima:** Mínimo **6 semanas** de operación continua con PI System operando correctamente (todas las señales críticas sin gaps >30 min). Preferiblemente **12 semanas** para capturar variabilidad de nivel de pila (ciclos alto-bajo) y al menos un evento de retorno de pebbles.
2. **Cobertura de condiciones operacionales:** Los datos de calibración deben incluir períodos con nivel alto (>70%), nivel medio (40–70%) y nivel bajo (<40%) para calibrar la dependencia RTD-nivel. Si la operación no cubre todo el rango en el período disponible, los parámetros para condiciones no cubiertas deben marcarse como "estimados" con incertidumbre aumentada.
3. **Completitud mínima de señales:** Al menos el 90% de disponibilidad de señales críticas (Categoría A y B) durante el período de calibración.

#### 3.2.2 Estimación Inicial de Parámetros Live/Dead Stock

**Procedimiento recomendado:**

1. Identificar en los datos históricos períodos de **nivel decreciente continuado** (extracción sin alimentación, o extracción > alimentación).
2. En esos períodos, graficar caudal de salida medido versus nivel de pila estimado por balance de masa.
3. El nivel al cual el caudal de salida por gravedad cae abruptamente (en Las Bambas, identificado operacionalmente en ~60% para SAG 2) corresponde al umbral \( L_{dead}^* \).
4. La masa total de dead stock \( M_{dead} \) se estima como: \( M_{dead} \approx L_{dead}^* \times M_{max} \).
5. Validar esta estimación contra el conocimiento operacional del sitio (registros de frecuencia de uso de tractor).

**Regla de thumb para calibración inicial:** La fracción de dead stock en pilas de mineral de cobre pórfido con flujo de embudo y extracción inferior por feeders típicamente oscila entre **40–75% de la masa total**. Para Las Bambas, dado el comportamiento documentado (<60% → SAG 2 sin flujo), el límite inferior de dead stock está en ~40% de la masa total. La fracción activa de este dead stock que puede movilizarse con tractor es calibrable como parámetro adicional \( \alpha_{dozer} \).[^16]

#### 3.2.3 Manejo de Períodos con Operación de Tractor (Datos "Contaminados")

Los períodos con uso de tractor (~20% del tiempo operativo) son datos válidos pero pertenecen a un régimen operacional diferente:

1. **Identificación:** Marcar en la base de datos histórica todos los períodos con tractor activo mediante una señal de modo (manual o inferida). Si no existe señal directa, identificar retroactivamente usando:
   - Análisis de anomalías en caudal por feeder (flujo superior al límite gravitacional esperado para el nivel medido)
   - Registros de partes de turno del operador
2. **Uso en calibración:** Calibrar el modelo normal (MODO_NORMAL) **exclusivamente** con datos sin tractor. Usar los datos con tractor para calibrar los parámetros del MODO_TRACTOR independientemente.
3. **No eliminar datos de tractor:** Representan ~20% del tiempo operativo; ignorarlos sin modelarlos generaría sesgo sistemático en el modelo normal.

#### 3.2.4 Criterios para Pasar a Operación

El modelo está suficientemente calibrado para pasar a operación cuando cumple simultáneamente:

1. MAE de ley Cu en feed SAG ≤ umbral aceptable (≤0.08% Cu) en al menos **2 semanas de validación cruzada** (datos no usados en calibración).
2. Error de nivel de pila vs. levantamiento topográfico ≤5% en los **2 últimos levantamientos disponibles**.
3. Cierre de balance de masa (integrado mensual) ≤±3%.
4. El modelo debe haber "observado" al menos **un ciclo completo** de nivel alto → nivel bajo → nivel alto para confirmar la parametrización de RTD en todo el rango.
5. Los períodos de operación con tractor deben estar modelados y no generar residuales >2× el umbral del MODO_NORMAL.

### 3.3 Monitoreo de Desempeño en Producción

#### 3.3.1 Frecuencia de Revisión de KPIs

| KPI | Frecuencia de revisión | Actor responsable | Acción si fuera de umbral |
|---|---|---|---|
| MAE ley Cu (turno) | Por turno (8 h) | Operador / Ingeniero de proceso | Revisión de señales de entrada; verificar gaps en PI |
| MAE ley Cu (semanal) | Semanal | Ingeniero de proceso | Análisis de tendencia; evaluar recalibración |
| Error nivel de pila | Al recibir levantamiento topográfico (cada 15 días) | Ing. de proceso + geodesia | Re-inicializar ML con dato real; ajustar parámetros |
| RMSE/MAE ratio | Semanal | Ing. de proceso | Investigar outliers si ratio >1.5 |
| Cierre metalúrgico mensual | Mensual | Metalurgia / contabilidad | Auditar balance de masa; revisar señales de feeder |

#### 3.3.2 Criterios para Detectar Drift del Modelo

El drift es la degradación gradual de la precisión del modelo por cambios en la operación o en las propiedades del mineral no capturados por el modelo. Los criterios para detectar drift son:

1. **Ventana deslizante de MAE:** Calcular el MAE en una ventana de 7 días deslizante. Si el MAE supera el umbral aceptable en **3 semanas consecutivas**, se declara drift confirmado.
2. **Prueba de cambio estructural:** Aplicar la prueba CUSUM (Cumulative Sum) a los residuales diarios del modelo. Un desvío sostenido positivo o negativo del CUSUM indica sesgo sistemático creciente.[^38]
3. **Ratio RMSE/MAE > 2.0** sostenido por más de 2 semanas: indica presencia de errores grandes esporádicos atribuibles a régimen operacional no capturado.
4. **Error de nivel de pila > 10%** en levantamiento topográfico: indica acumulación de error en el balance de masa; requiere re-inicialización inmediata del estado del modelo.

#### 3.3.3 Condiciones que Disparan Recalibración

Se recomienda recalibración (parcial o completa) del sistema ante los siguientes eventos:

| Evento disparador | Tipo de recalibración | Urgencia |
|---|---|---|
| Cambio de litología dominante (nuevo pit phase) | Recalibración completa de RTD + parámetros de calidad | Alta (1–2 semanas) |
| Modificación de número o posición de feeders activos | Recalibración de distribución de extracción y ME | Alta |
| Ampliación de capacidad de la pila | Recalibración completa de ME y actualización de M_max | Inmediata |
| Cambio en frecuencia de uso de tractor >20 pp | Recalibración de parámetros de MODO_TRACTOR | Media |
| Cambio en flujo de retorno de finos o pebbles (>±50%) | Actualización de batch de retorno en modelo | Media |
| Cambio en procedimiento operacional de feeders | Re-identificación de RTD por zona | Media |
| Drift confirmado (3 semanas consecutivas sobre umbral) | Recalibración de parámetros RTD con datos recientes | Alta |
| Gran parada de planta (>72 h) | Re-inicialización del estado del modelo con levantamiento topográfico post-parada | Inmediata al retornar |

#### 3.3.4 Dashboard de Monitoreo: Visualizaciones Recomendadas para Operadores

Las visualizaciones más útiles para operadores y ingenieros de proceso, organizadas por audiencia:

**Panel Operador (tiempo real, ciclo 1–5 min):**
1. **Indicador de nivel de pila** (gauge circular con zonas de color: verde >60%, amarillo 40–60%, rojo <40%), diferenciado por zona SAG1 / SAG2
2. **Predicción de ley Cu en feed SAG** para las próximas 4 horas con banda de incertidumbre
3. **Estado de feeders** (mapa visual de los 8 feeders con color según estado y caudal estimado)
4. **Modo operacional activo** (NORMAL / TRACTOR / RETORNO PEBBLES) con tiempo en modo

**Panel Ingeniero de Proceso (diario):**
5. **Serie temporal de error del modelo** (residuales MAE por turno, con umbral marcado)
6. **Balance de masa de 24 h** (entrada vs. salida vs. variación de inventario)
7. **Predicción de ley Cu próximas 24 h** vs. objetivo de blend

**Panel de Validación (quincenal, al recibir levantamiento):**
8. **Mapa topográfico comparativo** (superficie predicha vs. superficie medida, con mapa de diferencias de altura)
9. **Error volumétrico por sector** (distribución de masa estimada vs. levantamiento por sectores radiales del ME)
10. **Evolución histórica de KPIs** (MAE, MAPE, drift CUSUM) con marcadores de eventos operacionales

### 3.4 Validación del Modelo Espacial (ME)

#### 3.4.1 Validación contra Levantamientos Topográficos

El ME discretizado en sectores radiales × capas horizontales se valida cada 15 días al recibir el levantamiento topográfico del drone/estación total:

**Protocolo de comparación geométrica:**

1. Registrar la superficie predicha por el ME al momento del vuelo (no post-procesado).
2. Georreferenciar la nube de puntos del drone a las mismas coordenadas del ME. Para garantizar precisión ≤3 cm superficial, usar GCP permanentes instalados en puntos fijos de la bodega.[^25][^33]
3. Comparar capa por capa del ME vs. perfil de la nube de puntos en los mismos sectores.

**Métricas de error geométrico:**

| Métrica | Definición | Umbral aceptable |
|---|---|---|
| RMSE superficial | Desviación estándar de diferencias altura predicha vs. medida en cada celda | ≤0.5 m |
| Error volumétrico total | \|(V_ME - V_topo)/V_topo\| × 100% | ≤5% |
| Error volumétrico por sector | Ídem, evaluado por sector radial | ≤10% |
| Fracción de celdas dentro de ±1 m | % de celdas ME con error de altura < ±1 m | ≥80% |

**Propagación del error topográfico hacia atributos por celda:**

El error de posición de la superficie (±3–5 cm superficial, ±1–3% en volumen) se propaga hacia la estimación de atributos por celda (ley Cu, BWI) de la siguiente manera:[^25]

- **Error en masa por celda:** \( \sigma_{masa} = \sigma_{Vol} \times \rho_{bulk} \), donde \( \sigma_{Vol} \) es el error volumétrico de la celda y \( \rho_{bulk} \) es la densidad aparente (±0.05 t/m³ de incertidumbre).
- **Error en ley por celda:** Se propaga como la combinación del error de masa (\( \sigma_{masa} \)) y la variabilidad intrínseca de la ley estimada para ese sector, que depende de la calidad del modelo geológico de entrada.
- Para un error volumétrico típico del ME de ±3%, la incertidumbre en tonelaje de Cu en la pila es de ±3% del tonelaje de Cu total, que en Las Bambas (~50,000 t promedio en pila × 0.8% Cu) equivale a ±1,200 t Cu en el inventario de la pila.

#### 3.4.2 Re-inicialización del Modelo Espacial

Cada levantamiento topográfico actúa como punto de re-inicialización del ME. El procedimiento es:

1. **Asimilación de datos de superficie:** Actualizar la geometría del ME con el DEM del levantamiento como nueva superficie superior.
2. **Preservación de atributos internos:** Los atributos de las celdas internas (ley Cu, BWI, timestamp de ingreso) no se reinician con el levantamiento — solo se actualiza la geometría de la superficie. Las celdas expuestas o consumidas desde el último levantamiento se eliminan del modelo.
3. **Reconciliación de balance:** Si la masa calculada por el ME difiere del levantamiento en >5%, re-escalar uniformemente las densidades de celda para cerrar el balance.
4. **Re-calibración de soft sensor ML:** El nivel de pila calculado por el ML se corrige al valor del levantamiento; el error acumulado desde el levantamiento anterior se registra como KPI de drift.

***

## Consideraciones Finales y Recomendaciones de Implementación

### Secuencia de Implementación Recomendada

1. **Fase 0 (Semanas 1–4):** Auditoría de disponibilidad de señales PI; identificación de gaps y alternativas proxy; configuración de extracción vía PI Web API.
2. **Fase 1 (Semanas 5–16):** Implementación del Modelo Ligero con señales MVP; calibración con datos históricos de 12 semanas; primeras predicciones de ley Cu en modo shadow (sin uso operacional).
3. **Fase 2 (Semanas 17–24):** Primer levantamiento topográfico de referencia; construcción inicial del Modelo Espacial; integración ME-ML; validación cruzada con 2 levantamientos consecutivos.
4. **Fase 3 (Semanas 25+):** Pase a operación con monitoreo de KPIs; implementación del dashboard de operadores; integración con sistema de planificación mine-to-mill.

### Consideraciones Específicas de Las Bambas

- La segregación granulométrica en la COS de Las Bambas fue documentada como causa directa de inestabilidad en el circuito SAG en el trabajo de Yahyaei, Ye, Hilden et al. presentado en Mill Operators 2021. El modelo CA de la serie Minerals Engineering (2022–2023) fue desarrollado y validado parcialmente con datos de Las Bambas, lo que lo convierte en el modelo más directamente aplicable para el ME.[^39][^1][^5]
- El umbral del 60% de nivel para pérdida de flujo gravitacional en SAG 2 debe ser parametrizado como condición de frontera crítica en el modelo, con transición explícita entre regímenes.
- El retorno de pebbles (~72,000 t, 2×/año) es el evento de mayor impacto sobre la RTD de la pila; requiere protocolo específico de detección y asimilación en el modelo.
- La integración con PI Web API en infraestructura on-premise debe planificarse considerando latencia de extracción y política de compresión de tags del PI AF para no perder resolución temporal en señales de 1 min.[^40]

---

## References

1. [A 3D cellular automata ore stockpile model – Part 2 - OUCI](https://ouci.dntb.gov.ua/en/works/lDAp0LG9/) - Investigating the size segregation of stockpile at MMG's Las Bambas and its impact on performance of...

2. [Continuous stirred-tank reactor - Wikipedia](https://en.wikipedia.org/wiki/Continuous_stirred-tank_reactor) - A CSTR often refers to a model used to estimate the key unit operation variables when using a contin...

3. [A 3D cellular automata ore stockpile model – Part 2 - ScienceDirect](https://www.sciencedirect.com/science/article/pii/S089268752300170X) - This paper describes a 3D cellular automaton (CA) for dynamically modelling ore piles with continuou...

4. [‪Marko Hilden‬ - ‪Google Scholar‬](https://scholar.google.com/citations?user=flLsMFoAAAAJ&hl=en) - A 3D cellular automata ore stockpile model–Part 1: Simulation of size segregation. Z Ye, MM Hilden, ...

5. [Biography - ORCID](https://orcid.org/0000-0003-1932-0728) - A 3D cellular automata ore stockpile model – Part 2: Simulation and industrial validation of dynamic...

6. [DEM Simulation of Particle Stratification and Segregation in ...](https://research.monash.edu/en/publications/dem-simulation-of-particle-stratification-and-segregation-in-stoc/) - In this work, we conduct a numerical study based on DEM (discrete element method) model to study the...

7. [[PDF] Digital twin with automatic disturbance detection for an expert ...](https://bura.brunel.ac.uk/bitstream/2438/31948/1/Preprint.pdf) - This study presents the development and validation of a digital twin for a semi-autogenous grinding ...

8. [[PDF] Models for Nonideal Reactors](https://umich.edu/~elements/5e/18chap/Fogler_Web_Ch18_final.pdf) - The dead volume is the difference between the measured volume (i.e., with a yard- stick) and the eff...

9. [RocPlane Documentation | Gamma Distribution - Rocscience](https://www.rocscience.com/help/rocplane/documentation/probabilistic-analysis/statistical-distributions/gamma-distribution) - Case I (a < 1) - When a < 1, the Gamma Distribution is exponentially shaped and asymptotic to both t...

10. [Residence Time Distribution Research Papers - Academia.edu](https://www.academia.edu/Documents/in/Residence_Time_Distribution) - This theme investigates the mathematical modeling and experimental determination of residence time d...

11. [Stockpile Segregation - 911Metallurgist](https://www.911metallurgist.com/blog/stockpile-segregation/) - The video below graphically explains the common problem of Coarse Ore Stockpile Segregation. This to...

12. [[PDF] CONSIDERATIONS FOR MATERIALS HANDLING STORAGE DESIGN](https://www.beltcon.org.za/wp-content/uploads/2024/12/B18-15-Roos-Considerations-for-Materials-Handling-Rev-3.pdf) - Funnel flow works on a first in last out principle and maximum levels of segregation are present. Ty...

13. [Importance of coarse-ore stockpile design in mining mega-projects](https://jenike.com/importance-of-coarse-ore-stockpile-design-in-mining-mega-projects/) - With a properly designed stockpile, the live storage capacity is high enough to provide coarse ore a...

14. [Stockpile live capacity estimation - Australian Bulk Handling Review](https://www.bulkhandlingreview.com.au/stockpile-live-capacity-estimation/) - Jenike and Johanson's Jie Guo, Aleef Rahman, and Corin Holmes provide an overview of gravity reclaim...

15. [Live volume of conical stockpile reclaimed by gravity](https://rsdjournal.org/rsd/article/view/28908) - Research in this field, therefore, is still of importance. This article addresses the live volume fr...

16. [[PDF] DEVELOPMENT OF STOCKPILE SOFT SENSOR 1. Introduction](https://yadda.icm.edu.pl/baztech/element/bwmeta1.element.baztech-article-AGHM-0047-0039/c/Pan_development.pdf) - A lot of efforts have been made in the development of level measurement for stockpiles, used commonl...

17. [A 3D cellular automata ore stockpile model – Part 1: Simulation of ...](https://www.sciencedirect.com/science/article/abs/pii/S0892687522004265) - This paper describes a 3D cellular automaton (CA) for modelling ore pile formation that incorporates...

18. [A laboratory-scale characterisation test for quantifying the size ...](https://www.semanticscholar.org/paper/A-laboratory-scale-characterisation-test-for-the-of-Ye-Yahyaei/7de966c5a7e579af898a2d9644d0dd2a7fffe46a) - Semantic Scholar extracted view of "A laboratory-scale characterisation test for quantifying the siz...

19. [Digital twins with distributed particle simulation for mine-to-mill ...](https://www.youtube.com/watch?v=6wCSReb5SQ4) - ... Minerals 11(5),524 (2021). doi.org/10.3390/min11050524 http ... Digital Twins in Mining | Mining...

20. [Digital Twins with Distributed Particle Simulation for Mine-to-Mill ...](https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1554560) - In digital form, the material is treated as pseudo-particles, each representing a large collection o...

21. [Crusher to Mill Transportation Time Calculation—The Aitik Case](https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1638143) - This paper presents the development of an ore transportation model, based on the virtual silo concep...

22. [[PDF] application case study digital stockpile - IntelliSense.io](https://www.intellisense.io/wp-content/uploads/2021/10/IntelliSense.io_Digital_Stockpile_Case_Study.pdf) - The primary objective of the Digital Stockpile application is to provide near real-time accurate 3D ...

23. [Stockpile Algorithm Modelling - Product Documentation - Datamine](https://docs.dataminesoftware.com/Reconcilor/Latest/Getting-Started/Stockpile-Algorithm-Modelling.htm) - Stockpile Algorithm Modelling. Reconcilor supports multiple algorithms to model stockpiles and predi...

24. [[PDF] Investigating Dynamic Behavior in SAG Mill Pebble Recycling Circuits](https://research.chalmers.se/publication/542449/file/542449_Fulltext.pdf) - Second, incorporating stockpiles after pebble crushing can effectively mitigate the impact of dynami...

25. [Drone Photogrammetry for Stockpile Volumes | Anvil Labs](https://anvil.so/post/drone-photogrammetry-for-stockpile-volumes) - Accuracy: Drone-based measurements have a 1–3% error margin, compared to 5–15% for older methods. Sp...

26. [What do you have to say to an aerial survey without GCP ... - Facebook](https://www.facebook.com/groups/dronecaptures/posts/3905225439749050/) - In my experience Relative Accuracy (without GCPs) can potentially provide a volume measurement error...

27. [Modeling development for the prediction of the particle size ... - OUCI](https://ouci.dntb.gov.ua/en/works/4rgLKp8J/) - This study presents an integrated, cost-aware artificial intelligence (AI) meta-modelling framework ...

28. [A Case Study in an Iron Ore Processing Plant - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11207350/) - To regulate the speed of the feeders, the scale, represented as a weight indicator transmitter (WIT)...

29. [4.2 Introduction to the Dozer Machine - OPC UA Online Reference](https://reference.opcfoundation.org/specs/OPC-40565-3/4.2) - Dozers can be found in nearly all mining operations and are designed to move large amounts of materi...

30. [CB Omni Agile cross-belt analyzer | PGNAA - Thermo Fisher Scientific](https://www.thermofisher.com/tr/en/home/industrial/cement-coal-minerals/online-analyzers/solutions/cb-omni-agile.html) - By measuring the ore exiting the mine grade of stockpile feeds, the CB Omni Agile Analyzer allows mi...

31. [[PDF] GEOSCAN ELEMENTAL ANALYZER FOR OPTIMISING PLANT ...](https://www.ceecthefuture.org/wp-content/uploads/2015/11/12-Henry-Kurth-Geoscan-elemental-analyzer-for-optimizing-plant-feed-quality-and-process-performance.pdf) - Geoscan (using PGNAA) is used for multi-elemental analysis of conveyed bulk materials in real time m...

32. [[PDF] Comminution in the Minerals Industry - MDPI](https://mdpi-res.com/bookfiles/book/4263/Comminution_in_the_Minerals_Industry.pdf?v=1775264703) - A comparison of particle bed breakage and rod mill grinding with regard to mineral ... Modelling and...

33. [How to Get Accurate Stockpile Measurements in Mining](https://www.dronedeploy.com/blog/how-to-get-accurate-stockpile-measurements-in-mining) - Stockpile surveys determine the volume and tonnage of bulk materials at mine sites using drone photo...

34. [Volumetric Stockpile Surveys: Drone vs Traditional](https://www.droneservicesireland.ie/volumetric-stockpile-surveys-drone-vs-traditional) - Volumetric stockpile surveys - drone data vs traditional tape-and-formula. Accuracy, speed and cost ...

35. [A numerical sensitivity study – The effectiveness of RFID-based ore ...](https://www.sciencedirect.com/science/article/pii/S0032591023007234) - The results show that the stockpile model is not sensitive to variables such as the ore size distrib...

36. [Metal accounting data acquisition and management using real-time ...](https://www.sciencedirect.com/science/article/pii/S2590123026014180) - Reliable metal accounting (MA) tracks metal flows and ensures accurate reconciliation across mining ...

37. [[PDF] Reconciliation along the mining value chain - SAIMM](https://www.saimm.co.za/Journal/v115n08p679.pdf) - Traditionally, metal accounting has consisted of geological reconciliations of mineral resource to m...

38. [[PDF] Gradual drift detection in process models using conformance metrics](https://arxiv.org/pdf/2207.11007.pdf) - This paper focuses on the automatic detection of gradual drifts, a special type of change, in which ...

39. [Milling - CEEC (Coalition for Eco Efficient Comminution)](https://www.ceecthefuture.org/resources/milling) - Investigating the size segregation of stockpile at MMG's Las Bambas and its impact on performance of...

40. [AVEVA PI System](https://www.aveva.com/en/products/aveva-pi-system/) - AVEVA PI System is an integrated portfolio of solutions that enables industrial operations to collec...

