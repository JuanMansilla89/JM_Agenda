# Modelamiento Dinámico de la Pila de Mineral Grueso (COS) en Plantas Concentradoras de Cobre: Deep Research para Gemelo Digital Mine-to-Mill

***

## Resumen Ejecutivo

La pila de mineral grueso (*Coarse Ore Stockpile*, COS) es el nexo físico y temporal entre la chancadora primaria y el molino SAG en una planta concentradora de cobre. A pesar de su posición estratégica en la cadena mine-to-mill, su modelamiento dinámico ha sido el componente más desatendido en los sistemas de control y gemelos digitales industriales hasta muy recientemente. Las investigaciones del Julius Kruttschnitt Mineral Research Centre (JKMRC) publicadas entre 2022 y 2023 en *Minerals Engineering* constituyen el estado del arte académico más avanzado, con un modelo de autómata celular continuo (CCA) que discretiza la pila en una grilla 3D de celdas y simula la formación, la segregación granulométrica y el ciclo completo de carga/descarga con velocidad suficiente para aplicaciones en tiempo real. En paralelo, Servin, Vesterlund y Wallin (2021) formalizaron en *Minerals* la arquitectura de pseudo-partículas para gemelos digitales mine-to-mill, demostrando integración con el sistema de control ABB en un entorno simulado.[^1][^2][^3][^4]

En el plano industrial, BHP reportó en 2025 una **reducción del 70% en las pérdidas de producción mensuales debidas a granulometría** en Escondida mediante un gemelo digital de la cadena de valor con control predictivo del SAG. IntelliSense.io documentó reducciones de variabilidad de feed de 5–8% y recuperación de 0,04 g/t de ley media en pilas ROM mediante su aplicación SIO de modelamiento 3D de bloques en tiempo real. Paradyn Systems redujo la variabilidad Cu:S de 0,4 a 0,03 en una mina de cobre mediante optimización del reclaim de stockpile. NTWIST reporta que sin tracking en tiempo real las mineras pueden perder entre 1% y 3% de metal anual por reconciliaciones incorrectas.[^5][^6][^7][^8][^9]

Estos resultados posicionan el modelamiento dinámico de la pila COS como una de las oportunidades de mayor impacto en la cadena mine-to-mill, con retornos de inversión documentados en el rango de 3–6 meses.

***

## Marco Teórico y Estado del Arte

### El Problema Central: La Pila como Caja Negra Dinámica

Históricamente, la pila COS ha sido tratada como un "depósito promediador": su representación computacional se limitaba a una masa escalar con un único valor ponderado de atributos. Esta simplificación ignora tres fenómenos físicos con impacto operacional directo:[^10][^3][^1]

1. **Heterogeneidad espacial interna**: el mineral depositado por el tripper en distintos momentos y posiciones ocupa zonas diferenciadas de la pila. La ley Cu, dureza (Axb) y PSD varían espacialmente de forma significativa.

2. **Segregación granulométrica**: durante el apilamiento, las partículas gruesas migran hacia la periferia (*trajectory segregation*) y las finas se concentran en el núcleo (*surface stratification*). El efecto es que la PSD del feed SAG varía según qué zona de la pila se extrae.[^3][^1]

3. **Retardo temporal variable y distribución de tiempos de residencia (RTD)**: el tiempo que un lote de mineral permanece en la pila no es constante; depende de su posición de depósito, el nivel de la pila, los feeders activos y el régimen de flujo (funnel flow vs. mass flow). El SAG no recibe el mineral en el orden estricto en que fue depositado.[^11][^12]

La combinación de estos tres efectos implica que el feed SAG puede presentar variaciones de ley, dureza y PSD que no son predecibles desde el modelo de bloques de mina sin un modelo dinámico de la pila. El estudio de tracking mine-to-mill de la CRC ORE señala que el inventario de la pila y las propiedades del material depositado son aún un "desafío significativo" a pesar de la instrumentación moderna.[^10]

### Evolución del Estado del Arte (Línea de Tiempo)

| Período | Hito clave | Referencia |
|---------|------------|------------|
| 2003–2012 | Primeros modelos de balance de masa de pila con tracking de ley por bloque | [^10] |
| 2012 | Modelamiento de flujo y PSD en pila de mineral granular (DEM/Tara) | [^13] |
| 2012 | SmartTag RFID en Telfer (Newcrest): primera medición experimental RTD en COS industrial | [^14] |
| 2021 | Servin et al.: arquitectura de pseudo-partículas para gemelo digital mine-to-mill, integración ABB | [^4] |
| 2022 | JKMRC CCA Part 1: modelo 3D CA para formación con segregación por stratification, velocidad real-time | [^1][^15] |
| 2023 | JKMRC CCA Part 2: ciclo completo carga/descarga con trajectory segregation y validación industrial | [^3][^16] |
| 2023–2025 | IntelliSense.io SIO: implementación industrial de modelo 3D de bloques con ROI documentado | [^7][^8][^17] |
| 2024–2025 | NTWIST OreMax, Paradyn BlendOpt: soluciones industriales con integración de modelos de pila y optimización de reclaim | [^18][^6][^19] |
| 2025 | BHP Escondida: gemelo digital de cadena de valor + MPC SAG → –70% en pérdidas de producción por granulometría | [^5] |
| 2025 | JKMRC Seminar: "Connecting the Mine with the Mill using the JKMRC Stockpile Model" (aplicaciones industriales del CCA) | [^20][^21] |

### Brechas de Conocimiento Identificadas

A pesar del progreso, la literatura identifica los siguientes vacíos:[^22][^4][^3]

- **Calibración con datos reales de planta**: la mayoría de los modelos CCA han sido validados a escala laboratorio o con datos de pilas ROM abiertas, no con pilas cerradas COS de concentradoras
- **RTD dinámica**: los modelos RTD existentes asumen distribuciones estacionarias, pero la RTD de la pila varía con el nivel y la configuración de feeders activos
- **Efectividad real del RFID en COS cerradas**: el estudio de Ye et al. (2022-23) mostró que con pocos tags por lote, la tasa de recuperación de tags en COS puede ser baja, limitando la calibración experimental[^22]
- **Integración con control en tiempo real**: solo el trabajo de Servin et al. (2021) demostró integración directa con un sistema de control, y fue en entorno simulado, no en una planta real de cobre[^4]

***

## Taxonomía de Enfoques de Modelamiento por Complejidad

### Nivel 1: Modelos Lumped (Balance de Masa Global)

Tratan la pila como un sistema de parámetros concentrados sin resolución espacial ni distribución de tiempos. Son la base computacional de cualquier implementación y el punto de partida obligado.[^10]

- **FIFO puro**: el mineral sale en el mismo orden que entró. Equivale a un reactor de flujo pistón (PFR) ideal. Ignora mezcla y zonas muertas.
- **Delay dependiente del nivel**: \( \tau(t) = M_{live}(t)/Q_{SAG}(t) \). Heurística práctica y calibrable con datos estándar de planta.
- **Perfect mixing (CSTR)**: concentración de salida = promedio ponderado del inventario. Sobreestima la mezcla.
- **Balance de masa con atributos**: extiende el balance escalar a un vector de propiedades; atributo de salida = media ponderada del inventario activo.

### Nivel 2: Modelos con Distribución de Tiempos de Residencia (RTD)

Capturan la distribución estadística de tiempos de tránsito sin resolver la geometría interna.[^12][^23][^11]

- **N-CSTR (tanques en serie)**: la RTD sigue una distribución gamma parametrizada por N y τ̄. N=1: mezcla perfecta; N→∞: flujo pistón. Para pilas COS: N típico entre 2 y 6.
- **Dispersión axial**: parametrizada por el número de Péclet (Pe = ūL/D_ax). Equivalente a N-CSTR para dispersión moderada.
- **Modelo de dos compartimentos (live/dead)**: zona activa con intercambio hacia zona muerta. Captura live stock y dead stock con constantes de intercambio k_AD y k_DA.

### Nivel 3: Tracking de Micro-Batches (Pseudo-Partículas)

Discretizan el flujo en unidades lógicas de masa con vector de atributos, siguiendo el enfoque de Servin et al. (2021). Habilitan trazabilidad explícita de origen de mineral hasta SAG feed sin asumir mezcla global.[^4]

### Nivel 4: Modelos Espaciales 2.5D / Compartimentales

Discretizan la pila en capas y sectores (o voxels cúbicos). Cada celda tiene masa y atributos propios. Capturan heterogeneidad espacial y permiten extracción diferenciada por posición de feeder.[^24][^8][^17]

### Nivel 5: Autómatas Celulares 3D (CCA/CA)

Estado del arte académico (JKMRC, 2022–2023). Grilla 3D de celdas con reglas de transición física que simulan formación, segregación granulométrica y descarga dinámica. Suficientemente rápido para tiempo real.[^2][^1][^3]

### Nivel 6: DEM (Discrete Element Method) + Surrogate Models

DEM: máxima fidelidad física, impracticable en tiempo real para escala industrial. Uso para calibración offline y generación de datos de entrenamiento de surrogates. Surrogate (redes neuronales, modelos de bajo orden) entrenado sobre simulaciones DEM/CCA: alta precisión, baja latencia.[^25][^26][^27][^28]

***

## Metodologías Principales: Revisión Técnica con Formulaciones

### RTD N-CSTR: Formulación Completa

La función de densidad de probabilidad de la RTD para N tanques en serie es:[^29][^30]

\[
E(t; N, \bar{\tau}) = \frac{N}{\bar{\tau}} \cdot \frac{\left(\frac{Nt}{\bar{\tau}}\right)^{N-1}}{\Gamma(N)} \cdot \exp\!\left(-\frac{Nt}{\bar{\tau}}\right)
\]

donde \( \Gamma(N) \) es la función gamma (permite N no entero). Para el tiempo medio de residencia dinámico:

\[
\bar{\tau}(t) = \frac{M_{live}(t)}{Q_{SAG}(t)} = \frac{\varphi \cdot V(L(t)) \cdot \rho_{ap}}{Q_{SAG}(t)}
\]

La salida de cualquier atributo es la convolución:

\[
C_{SAG}(t) = \int_0^t C_{in}(t - \xi) \cdot E(\xi; N, \bar{\tau}(t))\, d\xi
\]

Los parámetros se calibran minimizando el error entre la predicción y los datos de LIMS en SAG feed. El número equivalente de compartimentos se estima desde el cociente de momentos:[^31]

\[
N = \frac{\bar{\tau}^2}{\sigma^2}
\]

### Modelo Live/Dead Stock con Intercambio

Las ecuaciones diferenciales del sistema de dos compartimentos son:[^32][^11]

\[
\frac{dM_A}{dt} = Q_{in}(t) - Q_{SAG}(t) + k_{DA} M_D - k_{AD} M_A
\]

\[
\frac{dM_D}{dt} = k_{AD} M_A - k_{DA} M_D
\]

La fracción de live stock \( \varphi \) para una pila cónica con feeder central se obtiene analíticamente:[^33]

\[
\varphi = \frac{\tan^2(\alpha)}{\left[\tan(\alpha) + \tan(\beta)\right]^2}
\]

donde \( \alpha \) es el ángulo de reposo dinámico (~38°–42° para COS cobre) y \( \beta \) el ángulo de extracción (~48°–55°). Para múltiples feeders distribuidos, \( \varphi \) crece de forma no lineal.

### Autómata Celular Continuo (CCA) JKMRC

El CCA divide el volumen de la pila en una grilla 3D de celdas \( c_{ijk} \), cada una con masa y distribución de tamaños de partícula (PSD) propias. En cada paso de tiempo ΔT:[^1][^3]

1. **Fase de depósito**: el material del tripper/stacker se asigna a la celda superficial en la posición angular y radial de descarga.
2. **Redistribución por ángulo de reposo**: las celdas con altura excedente al cono de equilibrio transfieren material a celdas adyacentes de menor altura.
3. **Segregación durante redistribución**: al redistribuirse, las partículas gruesas migran radialmente hacia afuera (*trajectory segregation*) y las finas se concentran en la celda original (*surface stratification*).[^3]
4. **Fase de extracción**: cada feeder activo extrae masa de su zona de influencia (cono de extracción con ángulo β), usando una función de peso que decae con la distancia al eje del feeder.
5. **Consolidación post-extracción**: el material de capas superiores desciende gravitacionalmente para llenar el espacio generado.

La Part 2 del JKMRC validó industrialmente este ciclo completo y mostró que el modelo predice adecuadamente el perfil superficial de la pila y la distribución de tamaño en la descarga.[^16][^3]

### Pseudo-Partículas (Servin et al., 2021)

El marco de Servin, Vesterlund y Wallin (2021) trata el flujo de mineral como una colección de pseudo-partículas digitales, cada una representando un gran conjunto de partículas reales. Cada pseudo-partícula:[^4]

- Transporta un vector de propiedades: PSD, mineralogía, dureza, origen del blast block
- Su posición y velocidad se actualizan combinando datos de sensores, telemática de equipos y modelos de simulación
- En zonas sin sensores (como el interior de la pila), la posición se estima con un modelo de flujo granular simplificado

El trabajo demostró el concepto en un simulador de mina integrado con el sistema de control ABB 800xA mediante comunicación OPC-UA, permitiendo que el controlador del SAG acceda en tiempo real al atributo de dureza del mineral que está en tránsito por la pila.[^4]

***

## Comparación de Metodologías

| Metodología | Física representada | Seg. granulométrica | Resolución espacial | Datos mínimos | Precisión atributos | Costo computacional | Aplicabilidad industrial hoy |
|-------------|--------------------|--------------------|--------------------|--------------|--------------------|---------------------|------------------------------|
| FIFO / Delay fijo | Retardo constante | No | No | Flujos + timestamp | Muy baja | Trivial | Alta (baseline) |
| Delay dependiente nivel | Retardo variable | No | No | Flujos + nivel | Baja | Trivial | Alta (V1) |
| RTD N-CSTR | Mezcla parcial + dispersión | No | No | + LIMS muestras | Media | < 5 ms | Alta (V2) |
| 2 compartimentos live/dead | Zonas activa/muerta | No | Parcial (2 zonas) | + geometría + encuestas | Media | < 5 ms | Alta (V2) |
| Micro-batches (pseudo-part.) | Trazabilidad lagrangiana | No (implícito) | No geométrica | + modelo bloques mina | Media-alta | 5–50 ms | Alta (V2) |
| Modelo 2.5D por capas/sectores | Flujo por zonas | Simplificada | Capas + sectores | + posición stacker + topografía | Alta | 10–100 ms | Alta (V3) |
| CCA 3D (JKMRC) | Formación + descarga + segregación | Completa (2 mecanismos) | Grilla 3D completa | + PSD detallada + topografía dinámica | Muy alta | 100–500 ms | Naciente (V4) |
| DEM completo | Física partícula a partícula | Completa | Completa | Propiedades mecánicas | Máxima | Semanas (offline) | Solo calibración |
| Surrogate ML + DEM/CCA | Mapeado del espacio DEM/CCA | Heredada del modelo base | Heredada | Simulaciones previas + datos online | Alta | < 1 ms (inferencia) | Alta potencial (V4) |

***

## Datos Requeridos y Pipeline

### Datos Operacionales por Nivel de Modelo

| Señal | Fuente típica | Frecuencia mínima | Req. V1 | Req. V2 | Req. V3 | Req. V4 |
|-------|-------------|-------------------|---------|---------|---------|---------|
| Flujo chancado (tph) | Pesómetro correa / DCS | 1 min | ✅ | ✅ | ✅ | ✅ |
| Flujo SAG (tph) | Pesómetro correa / DCS | 1 min | ✅ | ✅ | ✅ | ✅ |
| Nivel de pila (% o m) | Radar/ultrasonido | 1 min | ✅ | ✅ | ✅ | ✅ |
| Estados equipos (chancadora, correas, feeders) | DCS | 1 min | ✅ | ✅ | ✅ | ✅ |
| Densidad aparente (t/m³) | Estimada / laboratorio | Por turno | ✅ | ✅ | ✅ | ✅ |
| Geometría de pila (planos) | Ingeniería | Una vez | ✅ | ✅ | ✅ | ✅ |
| Ley Cu en feed SAG | LIMS | ≥ 4/turno | ⬜ | ✅ | ✅ | ✅ |
| Dureza (Axb, BWI) mineral | LIMS / laboratorio | Por turno | ⬜ | ✅ | ✅ | ✅ |
| PSD en correa o muestra | LIMS / sensor | ≥ 2/turno | ⬜ | ✅ | ✅ | ✅ |
| Humedad del mineral | Sensor correa / LIMS | ≥ 2/turno | ⬜ | ✅ | ✅ | ✅ |
| Origen del mineral (pit, fase) | FMS/dispatch | Por evento | ⬜ | ✅ | ✅ | ✅ |
| Posición stacker/tripper | Encoder / DCS | 1 min | ⬜ | ⬜ | ✅ | ✅ |
| Topografía de pila (periódica) | Drone/LIDAR | Mensual | ⬜ | ⬜ | ✅ | ✅ |
| Topografía continua (radar/LIDAR) | Sistema fijo | < 1 h | ⬜ | ⬜ | ⬜ | ✅ |
| Datos RFID/trazadores | Campaña RFID | Por campaña | ⬜ | ⬜ | ⬜ | ✅ |

### Arquitectura del Pipeline de Datos

```
[SCADA/DCS/PI] ──► [Capa de validación: rango, tasa de cambio, completitud]
                          │
           ┌──────────────┴──────────────┐
      [Señales OK]                 [Dato inválido]
           │                            │
    [Motor del modelo]           [Imputación + alerta]
     V1 → V2 → V3                      │
           │                     [Log de calidad]
    [Base de datos de          
     estados y predicciones]    
           │
    [API REST / OPC-UA] ──► [Dashboard operadores]
                       ──► [Controlador SAG / APC]
                       ──► [Sistema de planificación mina]
```

El pipeline debe garantizar sincronización temporal de todas las señales y manejo de gaps de datos. Una estrategia robusta mantiene el modelo corriendo con la última información válida y registra la calidad del dato para ponderar la confianza en las predicciones.[^34][^24]

***

## Estrategias de Calibración y Validación

### Calibración desde Datos Históricos

**Paso 1 — Curva nivel–volumen–masa**: usar series históricas de nivel medido, flujos acumulados y densidad aparente nominal para ajustar \( V(L) \) mediante regresión no lineal. Verificar con encuestas topográficas si están disponibles.[^33]

**Paso 2 — Fracción live stock (φ)**: estimación analítica inicial (ecuación de live/dead) + refinamiento empírico observando la masa remanente cuando la pila alcanza el mínimo operacional.[^33]

**Paso 3 — Parámetros RTD (N, τ̄)**: optimización minimizando \( \sum_t [C_{SAG,obs}(t) - C_{SAG,pred}(t)]^2 \) sobre datos históricos de ley Cu en SAG feed vs. ley del mineral entrante desde modelo de bloques. Split 70/30 calibración/validación.[^23][^12]

**Paso 4 — Constantes de intercambio (k_AD, k_DA)**: ajustadas desde el comportamiento transitorio de atributos durante cambios significativos de nivel de pila.

**Paso 5 — Parámetros espaciales V3**: mapa de influencia de feeders (ángulo de extracción β, distribución lateral) ajustado mediante optimización sobre predicciones de mezcla vs. datos LIMS.

### Calibración Experimental con Trazadores RFID

La campaña de trazadores RFID es el estándar de referencia para validar la RTD de la pila COS. El estudio de Ye et al. (2022–23) analizó numéricamente la efectividad del rastreo RFID en pilas COS simuladas con DEM y encontró que la tasa de recuperación de tags depende críticamente del número de tags por lote, el tamaño del lote y el régimen de flujo.[^14][^22]

Protocolo recomendado para una campaña mínima:

1. Instalar antena lectora RFID UHF (860–960 MHz) en la correa de alimentación SAG, bajo el chute de carga
2. Inyectar 300–500 tags (cápsulas plásticas ~50×25 mm) en el chute de descarga de la chancadora durante 4–6 h de operación continua
3. Registrar timestamp de cada lectura en la antena SAG
4. Construir histograma de tiempos de tránsito (\( \tau_k = t_{SAG,k} - t_{in,k} \)) → RTD experimental
5. Ajustar N y τ̄ al histograma. Calcular KS test o χ² para bondad de ajuste
6. Comparar RTD experimental con predicción del modelo

Operaciones como Newcrest Telfer usaron SmartTag (Metso) con este protocolo y obtuvieron perfiles de RTD con tiempos modales de 2–4 h para pilas COS de concentradoras.[^14]

### Criterios de Aceptación del Modelo

| KPI | Umbral V2 | Umbral V3 | Período evaluación |
|-----|-----------|-----------|-------------------|
| Error balance de masa | < 3% mensual | < 2% mensual | Mensual |
| R² ley Cu SAG feed (1 h) | ≥ 0.60 | ≥ 0.70 | Por turno |
| R² ley Cu SAG feed (4 h) | ≥ 0.45 | ≥ 0.55 | Por turno |
| RMSE nivel pila | < 5% escala | < 4% escala | Por hora |
| Reducción σ ley Cu feed | ≥ 10% vs baseline | ≥ 20% vs baseline | Mensual |
| Cobertura RFID tags recuperados | — | ≥ 60% por campaña | Por campaña |

***

## Casos de Uso Industriales con Resultados Cuantitativos

### BHP Escondida — Digital Twin de Cadena de Valor con MPC SAG

BHP implementó un gemelo digital de la cadena de valor completa (mina a planta) en Escondida, la mayor mina de cobre del mundo. El sistema combina análisis de datos avanzado con modelos predictivos del SAG y control predictivo basado en modelos (MPC). El resultado reportado: **reducción del 70% en las pérdidas de producción mensuales debidas a granulometría del feed**. En el mismo período, Escondida alcanzó throughput récord en el concentrador.[^35][^36][^5]

### IntelliSense.io SIO — Modelo 3D de Bloques de Pila ROM

IntelliSense.io SIO usa modelos 3D de bloques (resolución 3,25×3,25×3,25 m) integrados con datos de despacho y tracking de material en tiempo real. Casos documentados:[^7][^37][^8][^17]

- **Reducción de variabilidad de feed**: 5–8% en minera de cobre (2024)
- **Recuperación de ley**: incremento de 0,80 g/t a 0,84 g/t en 400.000 t reclamadas mediante selective mining (dic 2023–feb 2024)
- **Reducción de eventos de contaminantes en feed**: 71% de reducción de picos de contaminación entre 2021 y 2024
- **Detección de material fuera de especificación**: identificación de 100.000 t de waste depositado accidentalmente en una pila de mineral de alta ley, evitando envío de material diluido al SAG

El modelo SIO opera en modo near real-time y usa AI para corregir imperfecciones en los datos integrados de sistemas de mina.[^24]

### Paradyn Systems — BlendOpt para Mine-to-Mill en Mina de Cobre

Paradyn BlendOpt optimizó la estrategia de reclaim de stockpiles ROM en una mina de cobre subterránea. Resultado: **reducción de la variabilidad Cu:S de 0,4 a 0,03**, mejora del grado de concentrado y aumento de la recuperación. El modelo considera capacidades de chancado, capacidades de pila ROM y de crushed ore bin, programación de haulage y restricciones de calidad del feed.[^6][^38]

### ROVJOK — Mine-to-Mill Analytics para Gran Mina de Cobre Latinoamericana

Rovjok co-desarrolló con una gran mina de cobre latinoamericana un sistema de analytics mine-to-mill integrando datos de mina y planta en un modelo analítico unificado. Resultados: **5–10% de mejora en throughput del molino** y **~10% de reducción en consumo de energía**, con modelos ML de predicción de throughput con >90% de accuracy.[^39]

### NTWIST OreMax — Gestión Dinámica de Inventario de Pila

NTWIST reporta que la ausencia de tracking dinámico en tiempo real puede resultar en pérdidas de 1–3% de metal anual por reconciliaciones incorrectas. Su sistema OreMax integra datos de GPS de camiones, escaneos de drone y análisis geológico en un modelo 3D de pila con reconciliación continua. Casos en clientes mineros reportan precisión de inventario de ±2–3%.[^9][^18]

***

## Riesgos Técnicos, Limitaciones y Vacíos de Conocimiento

### Riesgos Técnicos en Implementación

| Riesgo | Probabilidad | Impacto | Mitigación recomendada |
|--------|-------------|---------|----------------------|
| Sensor de nivel de pila no confiable (radar sucio, interferencias) | Media-alta | Alto | Estimador de nivel redundante por balance acumulado; mantenimiento periódico del sensor |
| Modelo de bloques de mina sin atributos geometalúrgicos (solo ley Cu) | Media | Alto | Iniciar con ley Cu; escalar a Axb/BWI cuando el modelo geológico mejore |
| Densidad aparente variable (función de humedad, tipo de mineral) | Alta | Medio | Sensor de humedad en correa; tabla de corrección densidad-humedad |
| Cambios en patrón de descarga del stacker no registrados | Media | Alto (V3) | Encoder de posición en tripper; lectura automática desde DCS |
| RFID: baja tasa de recuperación de tags en pilas densas | Media-alta | Medio | Aumentar número de tags (>500); usar frecuencias de lectura más altas |
| Deriva del modelo por cambios en mineralogía o tipo de mineral | Media | Medio | Re-calibración automática periódica (ventana deslizante RLS) |
| Integración de datos heterogéneos (SCADA, LIMS, FMS con timestamps distintos) | Alta | Medio | Pipeline de sincronización temporal dedicado; buffer de alineación |
| Resistencia operacional: operadores que no confían en la predicción del modelo | Alta | Alto | Dashboards intuitivos; período de validación paralela (modelo + operación manual) |

### Limitaciones Fundamentales

**RTD dinámica**: los modelos N-CSTR asumen que los parámetros N y τ̄ son estacionarios, pero en la práctica cambian con el nivel de la pila, el número de feeders activos y el régimen de flujo. Un modelo con RTD estrictamente estacionaria puede ser impreciso durante transitorios operacionales (llenado/vaciado rápido de la pila).[^12]

**Segregación en pilas no cónicas**: los modelos analíticos de live/dead stock y de segregación han sido desarrollados principalmente para geometrías cónicas regulares. Las pilas COS industriales frecuentemente tienen geometrías irregulares, múltiples puntos de descarga y fondos perfilados, lo que complica la aplicación directa de las fórmulas teóricas.[^40][^3]

**Transporte de finos húmedos**: la humedad modifica drásticamente el comportamiento granular, especialmente para fracciones finas. Los modelos granulares sin cohesión (CCA, DEM estándar) no capturan adecuadamente el comportamiento de mineral húmedo, que puede generar "bridging", obstrucciones y flujo canalizado impredecible.[^3]

### Vacíos de Conocimiento (Oportunidades de I+D)

1. **RTD dinámica dependiente del nivel**: desarrollar una formulación paramétrica de E(t; N(L), τ̄(L)) que actualice los parámetros RTD en tiempo real según el estado de la pila.

2. **Validación experimental del modelo CCA en COS de concentradoras de cobre**: el modelo JKMRC fue validado con datos limitados; se requiere una campaña exhaustiva en planta industrial real con COS bajo condiciones de operación representativas.[^1][^3]

3. **Efecto de humedad en la RTD**: caracterizar experimentalmente cómo la humedad del mineral modifica la fracción de live stock, el patrón de flujo y la distribución de tiempos de residencia.

4. **Surrogate models para CCA en tiempo real**: entrenar y validar redes neuronales o modelos de regresión de bajo orden sobre simulaciones CCA parametrizadas para inferencia en tiempo real con actualización online.[^25][^4]

5. **Integración con control predictivo (MPC) del SAG**: cerrar el ciclo de retroalimentación usando el modelo COS como predictor de feed dentro del horizonte de control del MPC, siguiendo el camino demostrado en Escondida.[^5]

***

## Arquitectura Propuesta para Solución Industrial

### Diagrama General de la Solución

```
┌─────────────────────────────────────────────────────────────────────┐
│                        FUENTES DE DATOS                             │
│  [SCADA/PI] [LIMS] [FMS/Dispatch] [Modelo Bloques Mina] [Topografía]│
└────────────────────────────┬────────────────────────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────────┐
│                    PIPELINE DE DATOS                                 │
│  Validación · Sincronización · Imputación · Logging de calidad       │
└────────────────────────────┬────────────────────────────────────────┘
                             │
       ┌─────────────────────┼──────────────────────┐
       │                     │                      │
┌──────▼──────┐    ┌─────────▼──────────┐   ┌──────▼────────────────┐
│   MODELO V1  │    │     MODELO V2       │   │      MODELO V3         │
│ Balance masa │    │ RTD + Live/Dead     │   │  Grilla 2.5D           │
│ Nivel-Masa  │───►│ + Micro-Batches    │──►│ Capas × Sectores      │
│ FIFO + delay │    │ + Convolución RTD  │   │ + Segregación          │
└─────────────┘    └────────────────────┘   └───────────────────────┘
                             │
┌────────────────────────────▼────────────────────────────────────────┐
│                   MOTOR DE PREDICCIÓN                                │
│  Predicción de atributos SAG feed [+1h, +4h, +8h]                  │
│  Alertas: material fuera de spec · Contaminantes · Alta dureza      │
│  Balance de masa y metal [diario, mensual]                           │
└────────────────────────────┬────────────────────────────────────────┘
                             │
       ┌─────────────────────┼──────────────────────┐
       │                     │                      │
┌──────▼──────┐    ┌─────────▼──────────┐   ┌──────▼────────────────┐
│  DASHBOARD   │    │  API REST / OPC-UA  │   │  MÓDULO CALIBRACIÓN   │
│ Operadores   │    │  → Controlador SAG  │   │  RLS automático        │
│ Supervisores │    │  → Planificación    │   │  Backtest periódico    │
└─────────────┘    └────────────────────┘   └───────────────────────┘
```

### Stack Tecnológico Industrial Recomendado

| Capa | Tecnología recomendada | Justificación |
|------|----------------------|---------------|
| Lenguaje core | Python 3.11+ | Ecosistema científico, integración con PI y herramientas de análisis |
| Cómputo numérico | NumPy, SciPy | RTD, convolución, optimización de parámetros |
| Pipeline de datos | Pandas, PyArrow | Series temporales industriales |
| Integración PI | OSIsoft PI Web API (`osipi`) | Estándar en planta minera |
| Integración SCADA | OPC-UA | Protocolo industrial estándar |
| API de modelos | FastAPI | Microservicio REST de alto rendimiento |
| Base de datos | TimescaleDB o InfluxDB | Series temporales con indexación temporal |
| Dashboard | Power BI DirectQuery o Plotly Dash | Visualización operacional |
| Contenedores | Docker + Kubernetes | Despliegue robusto y escalable |
| Monitoreo | Prometheus + Grafana | KPIs del modelo en producción |

### Roadmap de Implementación Industrial

| Fase | Duración | Objetivo | Entregable clave |
|------|----------|----------|-----------------|
| **Fase 1: Quick Win** | 4–6 semanas | Modelo V1 operacional | Balance de masa + delay nivel + dashboard básico |
| **Fase 2: Prototipo V2** | 8–12 semanas | RTD + live/dead + micro-batches | Predicción ley Cu 1h con R²>0.6; alertas de material |
| **Fase 3: Piloto Industrial V3** | 3–6 meses | Modelo espacial 2.5D validado | Reducción σ ley feed ≥10%; reconciliación mensual |
| **Fase 4: Evolución V4** | 6–12 meses | CCA surrogate + campaña RFID | Gemelo digital COS integrado; paper/ponencia técnica |

***

## Proveedores, Soluciones y Tecnologías Industriales

| Proveedor | Producto | Tipo de modelo | Casos documentados |
|-----------|---------|---------------|-------------------|
| IntelliSense.io | SIO (Stockpile & Inventory Optimization) | 3D bloques, near real-time, AI para corrección de datos | [^7][^8][^17][^37] |
| NTWIST | OreMax | AI + drone scan + datos GPS despacho, modelo 3D probabilístico | [^18][^9] |
| Paradyn Systems | BlendOpt | Optimización de reclaim + calidad feed, integración con planificación corto plazo | [^6][^38] |
| Maptek | MaterialMRT | Trazabilidad mine-to-mill con modelo de bloques de mina integrado | [^41][^42] |
| Metso | SmartTag RFID | Trazadores físicos para medición experimental de RTD | [^43][^14] |
| GroundHog | ROM Loader | Grade control y blend management en tiempo real para pilas ROM | [^44] |
| JKMRC / Universidad de Queensland | CCA Model | Modelo 3D de investigación (no producto comercial aún) | [^1][^3][^20] |
| Rovjok | Mine-to-Mill Analytics | ML para predicción de throughput y analytics integrado | [^39] |

***

## Referencias Clave Comentadas

**Ye, Z., Hilden, M.M., Yahyaei, M. (2022).** *A 3D cellular automata ore stockpile model – Part 1.* Minerals Engineering, 187, 107816.[^15][^1]
Describe el modelo CCA para formación de pila con segregación por *surface stratification*. Primera publicación del grupo JKMRC que demuestra velocidad suficiente para tiempo real.

**Ye, Z., Hilden, M.M., Yahyaei, M. (2023).** *A 3D cellular automata ore stockpile model – Part 2.* Minerals Engineering, 200, 108156.[^16][^3]
Extiende el CCA al ciclo completo de carga/descarga con *trajectory segregation*. Incluye validación industrial. Es el referente académico más avanzado disponible al momento de esta investigación.

**Servin, M., Vesterlund, F., Wallin, E. (2021).** *Digital twins with distributed particle simulation for mine-to-mill material tracking.* Minerals, 11(5), 524.[^4]
Propone la arquitectura de pseudo-partículas para gemelos digitales mine-to-mill. Demuestra integración con ABB 800xA. 21 citas en Scopus.

**Ye, Z. et al. (2022–2023).** *A numerical sensitivity study – The effectiveness of RFID-based ore tracking through a simulated coarse ore stockpile.* Powder Technology.[^22]
Primer análisis cuantitativo de la viabilidad del tracking RFID en COS. Resultado clave: la efectividad es "pobre" con pocos tags por lote, pero mejora significativamente con mayor densidad de tags.

**BHP (2025).** *The Role of Digital Twins and AI in Enhancing Decision-Making in the Mining Industry.*[^5]
Describe el gemelo digital de cadena de valor en Escondida con MPC del SAG. Resultado: –70% en pérdidas de producción por granulometría. Referencia industrial de mayor impacto en este dominio.

**IntelliSense.io (2024).** *Stockpile & Inventory Optimization Case Study FY24.*[^8][^17][^7]
Documentación de casos industriales reales con resultados cuantitativos: variabilidad de feed –5–8%, recuperación de ley +0,04 g/t, reducción de contaminantes –71%.

**Hilden, M.M. (2025).** *Connecting the Mine with the Mill using the JKMRC Stockpile Model.* JKMRC Friday Seminars, 21 Nov 2025.[^21][^20]
Presentación de última generación del modelo CCA con aplicaciones industriales. Disponible como webinar JKMRC.

**McKee, I. (2013).** *Understanding Mine to Mill.* CRC ORE.[^45]
Marco clásico para entender el concepto mine-to-mill. Describe la problemática de trazabilidad de mineral en stockpile como desafío abierto incluso con instrumentación moderna.

**Saavedra et al. (2025).** *Blending Characterization for Effective Management in Mining Operations.* Minerals, 15(9), 891.
Revisión reciente de metodologías de blending con énfasis en ML y data-driven. Destaca la importancia de datos de calidad y plataformas de adquisición en tiempo real.[^4]

---

## References

1. [A 3D cellular automata ore stockpile model - Part 1 - NASA ADS](https://ui.adsabs.harvard.edu/abs/2022MiEng.18707816Y/abstract) - This paper describes a 3D cellular automaton (CA) for modelling ore pile formation that incorporates...

2. [Mohsen Yahyaei's Post - LinkedIn](https://www.linkedin.com/posts/mohsen-yahyaei-404b7536_a-3d-cellular-automata-ore-stockpile-model-activity-7070668511336951808-noHa) - Our new paper is out ! Our team has published a second paper on our dynamic stockpile/bin model. Thi...

3. [A 3D cellular automata ore stockpile model – Part 2](https://www.sciencedirect.com/science/article/pii/S089268752300170X) - This paper describes a 3D cellular automaton (CA) for dynamically modelling ore piles with continuou...

4. [Digital Twins with Distributed Particle Simulation for Mine-to-Mill ...](https://ouci.dntb.gov.ua/en/works/4zpR23a9/) - The particle-based representation enables material tracking along the chain of processes. Each digit...

5. [$name - BHP](https://www.bhp.com/es/news/bhp-insights/2025/02/the-role-of-digital-twins-and-ai-in-enhancing-decision-making-in-the-mining-industry) - A digital twin of the Escondida value chain and GenAI models inform ore blasting and blending strate...

6. [Copper Mine to Mill | Case Study - Paradyn Systems](https://www.paradynsystems.com/en/copper-mine-to-mill-optimisation.html) - Discover how BlendOpt reduced Cu:S variability from 0.4 to 0.03, improved concentrate grade, and inc...

7. [Stockpile & Inventory Optimization Case Study - IntelliSense.io](https://www.intellisense.io/2024/10/stockpile-inventory-optimization-case-study/) - The Stockpile & Inventory Optimization (SIO) application was employed to generate near real-time 3D ...

8. [[PDF] Stockpile and Inventory Optimization - IntelliSense.io](https://www.intellisense.io/wp-content/uploads/2025/10/SIO-Case-Study_Selective-Mining.pdf) - Over the months of December 2023 and. February 2024, 400,000 tonnes of ore were reclaimed from the m...

9. [How AI Fixes Stockpile Uncertainty in Open-Pit Mines - NTWIST](https://ntwist.com/blog/ai-stockpile-tracking-mining) - New advances in AI, drone-based scanning, and digital modeling now allow mining operations to track ...

10. [[PDF] Tracking and Quantifying Value from 'Mine to Mill' Improvement](https://www.smctesting.com/documents/mine-to-mill/Tracking%20and%20quatifying%20value%20from%20mine%20to%20mill%20improvement.pdf) - ABSTRACT. 'Mine to Mill' improvement involves optimising the chain of rock breakage processes from t...

11. [13. Distribution of Residence Times for Chemical Reactors](https://websites.umich.edu/~elements/fogler&gurmen/html/course/lectures/thirteen/index.htm) - We shall use the RTD to characterize existing (i.e. real) reactors and then use it to predict exit c...

12. [[PDF] Leveraging Residence Time Distribution (RTD) Models to ...](https://pqri.org/wp-content/uploads/2022/05/9-Krull-PQRI-RTD-Models-17May22-FINAL.pdf) - Residence Time Distribution Models. • RTDs commonly fitted to two models o Axial Dispersion Model. ▫...

13. [[PDF] Modelling of material flow and size distribution of ore in a stockpile ...](https://minedocs.com/17/Tara_Other_09212012.pdf) - This study aims to understand the material behaviour of ore inside a coarse ore stockpile by using d...

14. [[PDF] using smarttagtm to track ore in process integration and optimization ...](https://www.saimm.co.za/Conferences/Pt2012/871-892_Isokangas.pdf) - The difference in tag detection times between the SAG mill feed and primary crusher antennae can be ...

15. [A 3D cellular automata ore stockpile model – Part 1](https://www.sciencedirect.com/science/article/abs/pii/S0892687522004265) - por Z Ye · 2022 · Mencionado por 12 — This paper describes a 3D cellular automaton (CA) for modellin...

16. [A 3D cellular automata ore stockpile model - Part 2 - NASA ADS](https://ui.adsabs.harvard.edu/abs/2023MiEng.20008156Y/abstract) - This paper describes a 3D cellular automaton (CA) for dynamically modelling ore piles with continuou...

17. [Stockpile & Inventory Optimization - Major Copper Mine](https://www.intellisense.io/2021/10/digital-stockpile-case-study/) - Case Study - Digital Stockpile App uses 3D modelling to track when and where material parcels are de...

18. [Ore Stockpile Management Software | OreMax by NTWIST](https://ntwist.com/oremax) - OreMax by NTWIST provides ore stockpile management software that turns variability into predictable ...

19. [ROM Pad Blending Optimization with AI - NTWIST](https://ntwist.com/blog/ai-rom-pad-blending-optimization) - Tighter adherence to blend plans reduces variability, improving mill throughput and recovery. Reduce...

20. [JKMRC Friday Seminars 2025 - Sustainable Minerals Institute](https://smi.uq.edu.au/event/session/14730) - This presentation describes how the model works and its applications in process optimisation, stockp...

21. [JKMRC Friday Seminars 2025 - Sustainable Minerals Institute](https://smi.uq.edu.au/event/14555/jkmrc-friday-seminars-2025) - Connecting the Mine with the Mill using the JKMRC Stockpile Model. 21 November 2025 9:00am–10:00am. ...

22. [A laboratory-scale characterisation test for quantifying the ...](https://www.sciencedirect.com/science/article/abs/pii/S089268752200440X) - por Z Ye · 2022 · Mencionado por 8 — This paper presents a numerical study of copper ore tracking th...

23. [[PDF] measuring and modelling of residence time distributions in - LUTPub](https://lutpub.lut.fi/bitstream/10024/165025/1/Valtteri_Sipila_Master_Thesis.pdf) - Process optimization through residence time distribution provides impactful information about flow m...

24. [Stockpile & Inventory Optimization (SIO) - IntelliSense.io](https://www.intellisense.io/applications/stockpile-inventory-optimization/) - The Stockpile & Inventory Optimization Solution provides near real-time, 3D ore control models to op...

25. [AI-powered surrogate models bring real-time simulation to ...](https://materials.imdea.org/ai-powered-surrogate-models-bring-real-time-simulation-to-composite-manufacturing/) - The surrogate models employed achieve orders-of-magnitude speed-ups over conventional simulations, o...

26. ["Discrete Element Method for Mining Industrial Applications: Solving ...](https://openscholarship.wustl.edu/eng_etds/1148/) - The discrete element method (DEM) is a widely used numerical approach for simulating and analyzing t...

27. [A stage-wise DEM framework for quantifying discharge and mixing ...](https://www.sciencedirect.com/science/article/abs/pii/S0032591026004833) - This study developed a unified framework for quantifying discharge and mixing dynamics in coarse ore...

28. [[PDF] Surrogate Modeling Based On Dynamic Numerical Simulation and ...](https://www.scipedia.com/wd/images/f/f7/Draft_Content_505991148p4424.pdf) - Machine learning surrogates, once trained, can achieve simulations by orders of magnitude faster tha...

29. [Tanks in Series — rtdpy 0.6.0 documentation - GitHub Pages](https://merck.github.io/rtdpy/NCstr.html) - Tanks in Series¶ ... Return maximum output signal due to square disturbances. Uses method from [Garc...

30. [[PDF] Web17.4 The Tanks-in-Series (T-I-S) One-Parameter Model](https://public.websites.umich.edu/~elements/5e/17chap/Fogler_Ch17_Web_17.4_Tanks-in-Series.pdf) - We will analyze the RTD to determine the number of ideal tanks, n, in series that will give approxim...

31. [[PDF] Residence Time Distribution of Three Stirred- Tank Reactors in Series](http://www.jmess.org/wp-content/uploads/2017/05/JMESSP13420342.pdf) - The aim of the study is to design three stirred-tank reactors in series with improved features and e...

32. [Residence time distribution (RTD) revisited - PMC - NIH](https://pmc.ncbi.nlm.nih.gov/articles/PMC7532993/) - Residence Time Distribution (RTD) theory is revisited and tracer technology discussed. The backgroun...

33. [[PDF] Live volume of conical stockpile reclaimed by gravity](https://rsdjournal.org/rsd/article/download/28908/25055/332357) - This article addresses the live volume fraction of conical stockpile recovered through underground h...

34. [In the era of digital twins - Mining Doc](https://www.miningdoc.tech/2024/12/04/in-the-era-of-digital-twins/) - This article explores the methodology for applying digital twins in mining, highlighting the benefit...

35. [A Look at Mining Giant BHP's Performance in H2 2025](https://miningdigital.com/news/how-bhp-has-made-its-mine-in-chile-fully-autonomous) - BHP reports strong operational performance in the second half of calendar year 2025 (H2 CY25), with ...

36. [BHP now expects nearly 2M tonnes copper production after record ...](https://www.northernminer.com/news/bhp-now-expects-nearly-2m-tonnes-copper-production-after-record-escondida-throughput/1003890259/) - BHP now expects nearly 2M tonnes copper production after record Escondida throughput. Chile's Escond...

37. [Reduce Ore Feed Variability and Contaminant Events - IntelliSense.io](https://www.intellisense.io/2023/08/reduce-ore-feed-variability-and-contaminants-events/) - The increased traceability and predictability of the method helped reduce contaminant peaks events b...

38. [[PDF] Optimising from Copper Mine to Mill - Paradyn Systems](https://www.paradynsystems.com/assets/docs/cs_copper_mine_to_mill.pdf) - The ROM was stockpiled by stope with in-situ Cu:S between 0.1 and 0.5. Limited ROM stockpile capacit...

39. [Mine-to-mill analytics and mill optimisation - ROVJOK](https://rovjok.com/casestudy/mine-to-mill-analytics-and-mill-optimisation/) - Rovjok's mine-to-mill analytics solution boosted a copper mine's revenue through machine learning an...

40. [Importance of coarse-ore stockpile design in mining mega-projects](https://jenike.com/importance-of-coarse-ore-stockpile-design-in-mining-mega-projects/) - With a properly designed stockpile, the live storage capacity is high enough to provide coarse ore a...

41. [Smart material tracking - Maptek](https://www.maptek.com/forge/december_2020/smart-material-tracking/) - 'MaterialMRT provides quality and quantity control of discontinuous material flows from in situ rock...

42. [MaterialMRT real time tracking - Maptek](https://www.maptek.com/forge/march_2022/materialmrt_real_time_tracking/) - MaterialMRT traces each parcel of material directly fed into the plant, or to and from a stockpile, ...

43. [[PDF] Metso SmartTag - The Next Generation and Beyond](https://www.semanticscholar.org/paper/Metso-SmartTag-The-Next-Generation-and-Beyond-Wortley-Nozawa/d0f296365d0e63ba632a18ed0cf9256bd4a3fe9c) - SmartTag is a radio frequency identifi cation (RFID) based technology designed to allow tracking of ...

44. [Ore Blending and Grade Control at ROM Stockpile - Groundhog Apps](https://groundhogapps.com/ore-blending-and-grade-control-at-rom-stockpile-2/) - The ROM Loader Software by GroundHog is designed to streamline these operations, offering precise tr...

45. [[PDF] UNDErsTaNDINg - MINE TO MILL - 911Metallurgist](http://911metallurgist.com/C/What-is-mine-to-mill.pdf) - Part B - Selected Case Studies contains a number of case studies which demonstrate the range of Mine...

