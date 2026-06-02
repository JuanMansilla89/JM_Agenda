
## Resumen Ejecutivo

Los sistemas GNSS instalados en palas hidráulicas y eléctricas de minería a cielo abierto constituyen la base tecnológica sobre la cual se sustentan el cumplimiento espacial del plan de minado, el control de leyes, la gestión de flota y la seguridad geotécnica. La precisión posicional no es un parámetro aislado: propaga sus errores a través de cinco niveles operacionales —posicionamiento, operación, producción, geología y geotecnia— con impactos económicos cuantificables en dilución, pérdida de mineral y productividad. Este reporte sintetiza la evidencia técnica disponible de fabricantes líderes (Komatsu/Modular Mining, Caterpillar MineStar, Hexagon Mining, Wenco, GroundHog, MineSense, NovAtel/Trimble), publicaciones académicas y casos de implementación industrial, con el objetivo de construir un marco metodológico de evaluación reproducible en operaciones reales.

***

## 1. Tecnologías GNSS Aplicadas a Palas de Carguío

### 1.1 Espectro de Soluciones de Posicionamiento

Los sistemas de guiado de palas emplean cuatro arquitecturas de posicionamiento, cada una con diferentes características de precisión, latencia y robustez:

**GNSS RTK (Real-Time Kinematic):** Constituye el estándar de facto para minería de precisión. El receptor rover en la pala recibe correcciones en tiempo real desde una estación base con posición conocida, alcanzando errores horizontales de 1–3 cm RMS y verticales de 2–4 cm RMS bajo condiciones óptimas. La norma CORS-FKP con receptores de grado geodésico (ej. Topcon Hiper HR) especifica estáticos de 3 mm + 0.1 ppm horizontal y 3.5 mm + 0.4 ppm vertical, con RTK de 10 mm + 1 ppm horizontal y 15 mm + 1 ppm vertical. El Cat MS992 (receptor del sistema MineStar Terrain for Loading) reporta 10 mm de precisión horizontal y 20 mm vertical.[^1][^2][^3][^4][^5]

**GNSS + INS (Sistema Inercial):** La integración acoplada (tightly-coupled) GNSS+INS, ejemplificada por la plataforma NovAtel SPAN, combina la precisión absoluta del GNSS con la estabilidad relativa de la IMU para proveer posición, velocidad y actitud en 3D. El sistema SPAN-SE ofrece actualización a hasta 200 Hz y mantiene la solución durante interrupciones GNSS de hasta varios minutos. En entornos mineros con obstáculos de señal (taludes, equipos), el INS actúa como puente durante la pérdida de correcciones RTK. Para excavadoras, el IMU permite calcular la posición del balde mediante la cadena cinemática del brazo usando ángulos articulares medidos por sensores de inclinación.[^6][^7][^8][^9]

**GNSS Machine Guidance:** Plataformas comerciales como Komatsu ProVision, Caterpillar MineStar Terrain, Hexagon Mining Leica J2shovel y Wenco BenchManager integran el posicionamiento GNSS con modelos digitales del terreno (DTM), planes de minado y límites de contacto mineral/desmonte. Estas plataformas publican las correcciones en la cabina del operador mediante pantallas táctiles con vistas en perfil y planta, guiando la excavación con respecto al diseño de banco.[^10][^4][^11]

**Sistemas Complementarios (Locata/JPS):** Para minas con baja visibilidad satelital (pits profundos, highwalls pronunciados), Hexagon Mining desarrolló el Leica Jigsaw Positioning System (JPS), basado en tecnología Locata, que opera como una red local de pseudolitos sin dependencia del GNSS. Este sistema puede operar de forma autónoma o como augmentation del GNSS en zonas de sombra.[^12]

### 1.2 Precisión Típica por Modo de Operación

| Modo GNSS | Precisión Horizontal (RMS) | Precisión Vertical (RMS) | Frecuencia | Condición |
|-----------|---------------------------|--------------------------|------------|-----------|
| Punto Simple L1/L2 | 1.5 m | 3–5 m | 1–10 Hz | Cielo abierto |
| DGNSS | 0.45 m | 0.8–1.5 m | 1–10 Hz | Cielo abierto |
| OmniSTAR XP | 0.1–0.15 m | 0.2–0.4 m | 1–10 Hz | Regional |
| RTK GNSS (Fix) | 1–3 cm | 2–4 cm | 1–20 Hz | Cielo abierto, <10 km base |
| RTK GNSS (Float) | 0.3–1 m | 0.5–2 m | 1–20 Hz | Convergencia parcial |
| GNSS+INS (RTK activo) | 1–3 cm | 2–5 cm | 50–200 Hz | Movimiento dinámico |
| GNSS+INS (GNSS coasting) | Deriva 0.5–2 m/min | Deriva 1–5 m/min | 50–200 Hz | Sin correcciones |
| Cat MS992 (Terrain) | 10 mm | 20 mm | N/A (spec) | RTK nominal |

*Fuentes: *[^3][^4][^7][^5][^13]

### 1.3 Seguimiento de Posición del Balde (Bucket Position Tracking)

El posicionamiento del balde no puede medirse directamente con GNSS dado que la antena se instala sobre la superestructura giratoria o el boom de la pala. Los sistemas comerciales calculan la posición del balde mediante cadena cinemática inversa: conociendo la posición y orientación de la superestructura (del GNSS dual de cabeza y un sensor de rumbo/roll), más los ángulos de las articulaciones del boom, stick y balde (sensores IMU o encoders), se integra la cadena cinemática para obtener la posición 3D de los dientes del balde.[^9][^14]

Wenco BenchManager, por ejemplo, determina el centro de rotación del equipo inscribiendo un arco con la antena GPS durante la rotación, luego califica la posición del balde midiendo los dientes izquierdo y derecho con un rover, registrando este offset como parámetros del Arm Geometry System (AGS). La empresa reporta una precisión de **30 cm o mejor** para shovels usando BenchManager con AGS. SatLab ECS-E30 PRO y ComNavTech XE100, con GNSS dual de alta precisión + IMU personalizada, especifican ±3 cm en posicionamiento del equipo, con precisión de rumbo de 0.2°, que propagado al extremo del balde resulta en errores de posición del balde del orden de 10–50 cm según la longitud del brazo.[^15][^10][^9]

***

## 2. Factores de Degradación de Precisión GNSS en Open Pit

### 2.1 Geometría Satelital y Efecto del Highwall

El principal factor de degradación GNSS en minas a cielo abierto profundas es la obstrucción del cielo por los taludes (highwalls), que reduce la visibilidad satelital y deteriora la geometría de la constelación (PDOP/VDOP elevados). Un estudio en la mina west de Fushun (China, 388 m de profundidad, 6.6 km × 2 km) demuestra que el sistema GPS solo genera PDOP de 3.6–3.3, mientras que la adición progresiva de 4 pseudolitos (PLs) ubicados en las esquinas de la mina reduce el PDOP a 0.97 y el VDOP a 0.75. El efecto de la degradación vertical es típicamente mayor que el horizontal, dado que los satélites de baja elevación (los únicos visibles desde el fondo del pit) tienen geometría subóptima para la componente vertical. La recomendación práctica es mantener PDOP < 3 para operación nominal de RTK, y PDOP < 2 para aplicaciones de precisión en grade control.[^16]

### 2.2 Multipath

Los taludes rocosos, la maquinaria pesada cercana y las instalaciones metálicas generan reflexiones de señal (multipath) que introducen errores pseudorange de hasta varios metros en receptores L1 y de 0.3–1 m incluso en receptores L1/L2 modernos. En minería, el multipath es especialmente problemático cuando la pala trabaja adyacente al highwall o bajo líneas eléctricas (en shovels eléctricas P&H). Las técnicas de mitigación incluyen máscaras de elevación (corte de satélites de baja elevación), antenas choke-ring, procesamiento Doppler para verificación de calidad y uso de multi-constelación (GPS+GLONASS+Galileo+BeiDou).[^17][^18]

### 2.3 Impacto de la Pérdida de Correcciones RTK

Cuando la solución RTK transita de Fix a Float (o solo GNSS), la degradación de precisión posicional es no lineal e inmediata. La latencia de reincialización RTK (time-to-fix) típicamente oscila entre 30 segundos y varios minutos dependiendo de la geometría satelital y la condición de inicialización. Durante este período de Float, el error horizontal puede aumentar de 1–3 cm a 0.3–1 m, suficiente para invalidar decisiones de grade control a nivel de contacto mineral. Los sistemas GNSS+INS mitigan parcialmente esta degradación: el INS mantiene la solución relativa con deriva de 0.5–2 m/min durante el coasting, suficiente para viajes cortos entre cargas pero inadecuado para excavación prolongada sin Fix RTK.[^7][^19][^6]

### 2.4 Tabla de Fuentes de Error GNSS Relevantes para Minería

| Fuente de Error | Magnitud Típica (horizontal) | Magnitud Típica (vertical) | Mitigación Principal |
|----------------|------------------------------|----------------------------|---------------------|
| Ruido de receptor | 1–5 mm | 2–10 mm | Receptor dual-freq L1/L2/L5 |
| Multipath moderado | 3–30 cm | 5–60 cm | Antenas choke-ring, máscara elevación |
| Multipath severo (highwall) | 0.3–3 m | 0.5–5 m | Pseudolitos, topografía optimizada base |
| Float RTK | 0.3–1 m | 0.5–2 m | GNSS+INS, inicialización rápida |
| Sin correcciones (SP) | 1–3 m | 3–8 m | Monitoreo de disponibilidad RTK |
| PDOP > 5 | Multiplicador ×2–×4 | Multiplicador ×3–×6 | Multi-constelación, pseudolitos |
| Error en línea base > 10 km | 1–3 cm adicionales/km | 2–5 cm adicionales/km | Bases múltiples, VRS, PPP-RTK |

*Fuentes: *[^18][^20][^13][^3][^16]

***

## 3. Impacto en Cumplimiento Espacial del Plan de Minado

### 3.1 Sobre-excavación y Sub-excavación

El error de posicionamiento GNSS en la pala se traduce directamente en desviaciones de la cota de banco y del límite de excavación diseñado. Con RTK nominal (2 cm vertical), las desviaciones de elevación de banco típicamente permanecen dentro de ±5–10 cm; con Float RTK (0.5 m vertical) o pérdida de correcciones, la sobre-excavación o sub-excavación puede alcanzar 0.3–1 m por ciclo. El sistema ProVision Machine Guidance de Komatsu/Modular Mining específicamente aborda este problema mostrando en tiempo real la elevación de la pista de oruga contra el plano de diseño, permitiendo al operador corregir gradientes de banco y reducir rework en bancos subsecuentes. Caterpillar MineStar Terrain reduce el desgaste de neumáticos y componentes de acarreo al mantener benches con la pendiente de diseño.[^4][^11][^21][^10]

### 3.2 Cumplimiento Geotécnico (Crest, Toe y Bermas)

El cumplimiento geotécnico requiere que la posición de crest, toe y bermas permanezca dentro de tolerancias definidas por el diseño de estabilidad de taludes. Un error de posicionamiento GNSS de 0.5–1 m (típico de Float RTK) puede comprometer la integridad de la cresta de banco o la berma de seguridad. La plataforma de reconciliación de IA desarrollada para open pit integra KPIs de *crest loss* y *toe flare* como indicadores de desviación geotécnica. Herramientas especializadas permiten comparar la posición 2D medida del crest y toe contra el diseño mediante análisis de nubes de puntos, con tolerancias recomendadas de ±0.5 m para cresta y ±1 m para pie de talud en operaciones estándar.[^22]

El impacto del error GNSS en geotecnia puede entenderse en términos de propagación de riesgo: una desviación sistemática de 1 m en la posición de excavación de la pala hacia el talud puede reducir el ancho de berma efectivo en el mismo monto, comprometiendo la función de retención de material caído y potencialmente violando los criterios de diseño geomecánico. La práctica recomendada es utilizar supervisión por dron o levantamiento LiDAR periódico para validar el cumplimiento geotécnico independientemente del sistema GNSS de la pala.[^23]

### 3.3 Cumplimiento de Límites Mineral/Desmonte

El sistema Cat MineStar Terrain for Loading usa identificación automática de material para clasificar cada cuchara según el polígono de control activo en el modelo digital de terreno. El sistema ProVision de Modular Mining rastrea el movimiento real del balde con respecto a límites de mineral, estratos y pendientes en tiempo real. Wenco BenchManager reduce los eventos de excavación fuera del polígono asignado: la implementación en Kansanshi Mine (Zambia) redujo los mismatches de polígono de 34% a 15% (para desviaciones >50 cm), y de 10% a 8% en términos de mismatches totales, con una tolerancia de posición de X=0.5 m, Y=0.5 m, Z=0.5 m.[^24][^25][^11][^4]

***

## 4. Impacto en Control de Leyes (Grade Control)

### 4.1 Mecanismos de Dilución y Pérdida de Mineral Vinculados al Error GNSS

El error de posicionamiento de la pala introduce cuatro mecanismos de degradación del grade control:

1. **Boundary Dig Error:** Si el balde excava más allá del límite del polígono de ore por un error GNSS de ΔX metros, incorpora un volumen de desmonte proporcional a ΔX × ancho_balde × profundidad_corte. Para una pala hidráulica con balde de 12 m³ y frente de 3 m, un error de 0.5 m puede incorporar 1.5–3 m³ de material estéril por ciclo.

2. **Material Misclassification:** Cuando el error de posicionamiento supera la anchura del contacto ore/waste (a menudo 0.5–2 m en depósitos gradacionales), el sistema de despacho puede asignar erróneamente el camión a una tolva de ore en lugar de desmonte o viceversa. El estudio de Kansanshi reporta una mejora de la calidad del material entregado al crusher de 65% a 75% tras implementar HPM con BenchManager.[^24]

3. **Blast Movement No Compensado:** Aunque no es un error GNSS per se, la falta de ajuste de polígonos post-voladura combinada con un error de posición de la pala es sinérgicamente negativa. El monitoreo de movimiento de voladura (BMM) en tres minas de cobre en Perú y Chile demostró que ignorar el movimiento de voladura (típicamente 1–5 m horizontal) conduce a pérdidas de mineral y dilución significativas cuando los polígonos no se trasladan.[^26]

4. **Ore/Waste Contact Inaccuracy:** En yacimientos con contactos subverticales o gradacionales, una incertidumbre de posición de 0.5 m en el plano horizontal puede clasificar erróneamente 5–20% del material en la franja de contacto, dependiendo del ancho de la zona transicional y la variabilidad del depósito.[^27]

### 4.2 Relaciones Cuantitativas: Error GNSS vs. Dilución

No existe una fórmula universal, dado que el impacto depende del tipo de depósito, geometría del ore body y dimensiones del equipo. Sin embargo, pueden establecerse relaciones de orden de magnitud:

Para una pala con balde de área de corte \( A_{b} \) (m²) y un error de posición \( \varepsilon \) (m) en la dirección del límite de polígono, el volumen de desmonte incorrectamente excavado por ciclo es aproximadamente:

\[ V_{dilución} \approx \varepsilon \cdot A_{b} \]

Si la producción diaria es \( N \) ciclos sobre el límite, la dilución volumétrica diaria es:

\[ D_{total} \approx N \cdot \varepsilon \cdot A_{b} \]

Para una pala con balde de 12 m³ (A_b ≈ 2 m × profundidad 1.5 m = 3 m²), 200 ciclos/día en contacto, y ε = 0.5 m, la dilución diaria sería del orden de 300 m³, equivalente a 810 toneladas asumiendo densidad 2.7 t/m³. Si el ore grade es 1.5 g/t Au y la dilución es de 0 g/t, la pérdida de metal es aproximadamente 1.2 kg Au/día, con un valor a $2,000/oz de ~$77,000/día en este escenario hipotético.

La guía práctica de Cube Consulting estima pérdidas de revenue combinadas (ore loss + dilución) de $7.7 M/año para una operación de 2 Mtpa a 1.5 g/t Au con 5% ore loss y 5% dilución a precio de $1,600/oz. Reducir estos porcentajes mediante mejor precisión posicional constituye un business case cuantificable.[^28]

### 4.3 MineSense ShovelSense: Detección de Ley en Tiempo Real

MineSense Technologies ha desarrollado ShovelSense, sistema de sensores XRF instalados directamente en el equipo de carguío que analiza y clasifica el material en cada cuchara en tiempo real. A diferencia de los sistemas GNSS puros, ShovelSense mide la ley in situ independientemente de la precisión posicional, permitiendo una segunda línea de defensa contra el misclassification cuando el error GNSS supera las tolerancias de grade control. El sistema está especialmente diseñado para depósitos donde la heterogeneidad espacial de la ley es alta a escala de balde (<1 m).[^29][^30][^31]

***

## 5. Sistemas Komatsu/Modular Mining: DISPATCH, ProVision y HPD

### 5.1 DISPATCH Fleet Management System

DISPATCH, desarrollado por Modular Mining (ahora Komatsu Technology), es el sistema FMS de código abierto más ampliamente implementado en minería a cielo abierto. Funciona mediante el algoritmo de asignación dinámica que optimiza en tiempo real la asignación de camiones a puntos de carga y descarga, minimizando tiempos de espera y maximizando producción. El sistema depende del GNSS para:[^32][^33]

- **Detección de zona de carga (Load Zone):** Un camión entra en la zona poligonal del punto de carga cuando su posición GNSS cae dentro de un radio configurable (típicamente 15–30 m) del punto de carga registrado. La precisión de este trigger depende directamente de la calidad GNSS.
- **Detección de spotting:** La posición final del camión frente a la pala se detecta por la combinación de posición GNSS + velocidad < umbral + orientación del camión.
- **Zero Spots:** Un zero spot ocurre cuando el operador del camión o la pala no presiona el botón de acción en el dispositivo móvil en el momento correcto, o cuando la posición GNSS no cae dentro de la zona predefinida. La implementación de Haul Cycle Automation (HCA) en una mina australiana (VIU Africa case study) redujo los zero spots de 3.7% a 1.9%, contribuyendo a un incremento de 6 ktonne/día en producción y ~$50M/año en revenue uplift por optimización de payload.[^34]

### 5.2 Clasificación de Eventos de Ciclo y Dependencia GNSS

La clasificación de estados operacionales en DISPATCH sigue un esquema estandarizado con los siguientes estados y su dependencia del posicionamiento:

| Estado Operacional | Detección Principal | Dependencia GNSS | Error Típico sin RTK |
|--------------------|--------------------|--------------------|----------------------|
| **Loading** | Posición en zona + Payload scale + Botón | Alta (zona poligonal) | Misclassification de zona |
| **Spotting** | Posición + velocidad < 0.5 km/h | Alta | Delay en asignación de estado |
| **Queueing/Waiting** | Posición + velocidad ≈ 0 + No en zona | Alta | Confusión con Delay si GNSS errático |
| **Hauling Loaded** | Payload > umbral + velocidad | Baja (payload dominante) | Mínimo |
| **Hauling Empty** | Payload < umbral + velocidad | Baja | Mínimo |
| **Dumping** | Posición en zona dump + Payload drop | Media | Misclassification de dump point |
| **Delay/Idle** | Sin movimiento + tiempo > umbral | Media | Falsos positivos si GNSS bouncing |
| **Shift Change** | Tiempo calendario + posición parqueo | Media | — |
| **Breakdown/Planned DT** | Manual + posición + tiempo | Baja | — |
| **Hang Time (Shovel)** | Posición pala + sin camión en zona | Alta | Subestimación si GNSS de camión impreciso |

*Fuentes: *[^35][^36][^34]

Un estudio de la Universidad de Zambia sobre FMS en Kansanshi Mine identificó que la imprecisión de posición GNSS en zonas de carga es la principal fuente de errores en la clasificación de estados de ciclo, particularmente cuando múltiples shovels operan en proximidad (<50 m entre puntos de carga).[^36]

### 5.3 ProVision Machine Guidance para Equipos de Carga

El sistema ProVision de Komatsu/Modular Mining opera sobre la plataforma GNSS de alta precisión del mismo DISPATCH, añadiendo capas de guiado posicional para operadores de palas, cargadores frontales y dozers. Las funciones específicas para equipos de carguío incluyen:[^11]

- Guiado en tiempo real de la posición del balde con respecto a límites de mineral, pendientes diseñadas y capas de material
- Visualización de la elevación de la oruga vs. el plano (cota de banco)
- Integración con el modelo digital de terreno compartido para actualización automática de límites de ore
- Integración con DISPATCH para prevención de cargas misdirected[^11]

La plataforma de Guided Spotting (ProVision Guided Spotting System) utiliza GNSS de alta precisión para guiar al conductor del camión a la posición óptima de carguío sin necesidad del cucharón colgante ("hanging bucket") como referencia visual. El sistema reporta reducción del hang time de la pala hasta 35%, contribución de 2–8 cargas adicionales por hora y aumento de productividad hasta 13%.[^37][^38][^11]

### 5.4 High Precision Digging (HPD)

High Precision Digging es una extensión de los sistemas de guiado que enfoca específicamente la excavación en contactos ore/waste con la máxima precisión posicional. En el contexto de Komatsu Smart Construction 3D Machine Guidance, el sistema compara la posición actual del balde (calculada cinemáticamente desde la antena GNSS y los sensores de articulación) con el diseño de excavación en tiempo real. La diferencia entre la posición actual y el diseño aparece color-coded en la pantalla del operador, guiándolo para aproximarse a la cota de diseño sin sobre-excavar.[^39]

***

## 6. Sistemas de Terceros: Hexagon, Wenco, GroundHog, Cat MineStar

### 6.1 Hexagon Mining — Leica J2shovel y Jigsaw

La plataforma Leica J2shovel de Hexagon Mining ofrece navegación GPS de alta precisión hasta los dientes del balde, mejorando el control de elevación de banco, reduciendo dilución y disminuyendo labores de rework. Jshovel, el módulo de producción, optimiza el throughput de la pala y habilita payload en tiempo real. El sistema Jfleet opera en arquitectura distribuida donde cada máquina rastrea y registra su propia posición, actividad y estado sin depender de un servidor central.[^12]

Hexagon también ofrece el JPS (Jigsaw Positioning System) basado en tecnología Locata como alternativa o augmentation del GNSS en zonas de sombra satelital. Este es el único sistema del mercado completamente independiente del GPS disponible comercialmente para minería.[^12]

### 6.2 Wenco BenchManager

Wenco (parte del grupo Hitachi) comercializa BenchManager como sistema GNSS de alta precisión para seguimiento de equipos, monitoreo de elevación de banco y control de calidad de mineral para cargadores y niveladoras. La precisión declarada es de **30 cm o mejor** para shovels con el Arm Geometry System. El sistema trabaja con tolerancias configurables (típicamente X=0.5 m, Y=0.5 m, Z=0.5 m) para alertar cuando la pala excava fuera del polígono asignado. La integración con el FMS de Wenco permite que la información de posición del balde retroalimente el sistema de despacho para correlacionar posición de excavación con destino del material.[^40][^41][^10][^24]

El enfoque behavioral de BenchManager para detección de ciclos es notable: el sistema lee el comportamiento del banco usando señales de velocidad, swing y patrones de ciclo de excavación para distinguir producción de operaciones de limpieza.[^42]

### 6.3 Caterpillar MineStar Terrain for Loading

Cat MineStar Terrain for Loading es la solución de guiado más detallada disponible de Caterpillar, con las siguientes especificaciones documentadas del receptor GNSS MS992:[^4]

- Precisión horizontal: **10 mm**
- Precisión vertical: **20 mm**
- Rango operativo: hasta 10 km desde la base RTK
- Constelaciones: GPS + GLONASS (con soporte multi-constelación)
- Temperatura operativa: -40°C a +70°C

Las funciones de grade control incluyen posicionamiento preciso del balde, identificación automática de material, vistas de perfil y planta del ore body, y comunicación en tiempo real entre cabina y oficina. El sistema reduce el trabajo de levantamiento topográfico al proveer datos de posición georeferenciada de la excavación en cada cuchara.[^25][^4]

### 6.4 GroundHog High Precision GPS para Open Pit

GroundHog utiliza unidades GPS RTK de alta precisión en perforadoras de voladura, excavadoras y dozers para asegurar cumplimiento con parámetros de diseño de mina. Específicamente para excavadoras, el sistema guía al operador al realizar excavaciones en zonas de contacto ore/desmonte para precisión centimétrica en estratos heterogéneos donde el grade control es crítico. GroundHog's Open Pit FMS usa GPS para seguimiento de flota en tiempo real desde un centro de control de mina. La plataforma también incluye un manual de operadores de despacho que cubre cómo el FMS mejora la productividad camión-pala y reduce tiempos de inactividad.[^43][^44][^45]

***

## 7. Impacto en Gestión de Flota y Precisión de Ciclos

### 7.1 Dependencia del GNSS en la Detección de Ciclos

Un estudio comprehensivo sobre el sistema automatizado de recolección de datos de ciclos de camiones (TCD-ADCS) en minería de carbón superficial demostró que la detección de estados del ciclo depende de cuatro fuentes de datos: posición GNSS, velocidad, payload y eventos manuales del operador. La posición GNSS juega un papel crítico en la detección de: llegada a punto de carga (Spotting), inicio de carga (Loading), inicio de viaje cargado (Hauling Loaded), llegada a punto de descarga (Dumping) y regreso vacío (Hauling Empty).[^46]

Cuando el error GNSS supera el radio de las zonas configuradas (típicamente 10–30 m), los siguientes errores ocurren sistemáticamente:
- **Falsa activación de zona:** El camión es detectado en una zona incorrecta, generando asignación de estado errónea
- **Pérdida de detección:** El camión pasa por la zona sin que el sistema lo detecte si la trayectoria real difiere de la posición GNSS
- **Registros de tiempo incorrectos:** Los timestamps de inicio/fin de estados son incorrectos, afectando el cálculo de KPIs de productividad y utilización

### 7.2 Impacto en KPIs de Productividad

| KPI | Fuente de Error GNSS | Impacto Cuantitativo |
|-----|---------------------|----------------------|
| Cycle Time | Timestamps de zona incorrectos | Subestimación/sobreestimación 1–5 min/ciclo |
| Loading Time | Detección de inicio/fin de carga por zona | Error ±30–90 s con RTK Float |
| Hang Time | Detección de ausencia de camión en zona | Sobreestimación del hang time real |
| Spotting Time | Detección de camión en posición final | Error ±15–60 s con señal degradada |
| Queue Time | Posición camión esperando fuera de zona | Confusión con Delay o Travel |
| Equipment Utilization | Clasificación correcta de estados | Error 2–5% en OEE si GNSS es errático |
| Payload Accuracy | Correlación posición-báscula | Mínimo (payload independiente del GNSS) |

*Fuentes: *[^36][^34][^46]

### 7.3 Zero Spots y Automatización del Ciclo

El fenómeno de zero spots en DISPATCH —ciclos registrados sin posición válida de carga— es directamente atribuible a errores de posicionamiento o fallas en la interacción operador-dispositivo. La implementación de Haul Cycle Automation (HCA) en una mina australiana redujo los zero spots de 3.7% a 1.9% mediante la detección automática de ciclos basada en GNSS, mejorando la calidad de datos para optimización del FMS y resultando en 6 ktonnes adicionales/día de producción.[^34]

***

## 8. Framework de Evaluación de Desempeño GNSS — 5 Niveles

Este framework metodológico permite evaluar de forma sistemática el desempeño de un sistema GNSS instalado en una pala de minería superficial, estructurado en cinco niveles jerárquicos desde el sensor hasta el impacto geológico/geotécnico.

### Nivel 1: Posicionamiento (Evaluación del Sistema GNSS)

**Objetivo:** Caracterizar la calidad de la solución de posicionamiento de la antena(s) GNSS sobre la superestructura de la pala.

**Métricas e indicadores:**

| Métrica | Definición | Tolerancia Recomendada | Método de Medición |
|---------|------------|------------------------|-------------------|
| RMSE Horizontal | RMS del error horizontal vs. referencia geodésica | ≤ 3 cm (RTK Fix) | Punto de control geodésico, estatismo simultáneo |
| RMSE Vertical | RMS del error vertical vs. referencia | ≤ 5 cm (RTK Fix) | Nivel de precisión + GNSS estático |
| RTK Fix Rate | % del tiempo en estado Fix vs. total operativo | ≥ 95% en turno | Log del receptor, clasificación Fix/Float/SP |
| Latencia posicional | Retardo entre evento real y posición reportada | ≤ 100 ms para guiado activo | Señal trigger + timestamp GNSS |
| PDOP | Dilución de precisión posicional | < 3 operacional; < 2 grade control | Log del receptor, media por turno |
| Tiempo a Fix | Tiempo de reincialización tras pérdida de Fix | ≤ 60 s en condiciones normales | Log de eventos Fix/Float, percentil 90 |
| Disponibilidad | % tiempo con solución GNSS vs. tiempo operativo | ≥ 99% | Log del receptor, horas/turno |

**Instrumentación requerida:**
- Receptor GNSS de referencia independiente (geodésico) estacionado en punto de control durante el periodo de evaluación
- Registro completo del log de solución del receptor de la pala (NMEA, RINEX o log propietario)
- Estación meteorológica local para correlación con condiciones de propagación ionosférica/troposférica

### Nivel 2: Operación (Precisión de Detección de Eventos de Ciclo)

**Objetivo:** Evaluar la calidad de la clasificación de estados operacionales y la detección de eventos de ciclo en función del posicionamiento.

**Métricas e indicadores:**

| Métrica | Definición | Tolerancia Recomendada | Método |
|---------|------------|------------------------|--------|
| Tasa de Detección de Carga | % de cucharas de producción correctamente detectadas como Loading | ≥ 98% | Revisión manual de video vs. FMS log |
| Error de Timestamp Carga | Diferencia entre timestamp FMS de inicio/fin de carga y referencia manual | ≤ 30 s | Análisis de video sincronizado con FMS log |
| Tasa de Zero Spots | % de ciclos sin posición válida de carga | ≤ 2% | Reporte DISPATCH/FMS |
| Tasa de Misclassification de Estado | % de estados clasificados incorrectamente | ≤ 3% | Revisión audit de log vs. video/operador |
| Hang Time Real vs. Reportado | Diferencia porcentual entre hang time calculado por FMS y observado | ≤ 10% | Video análisis + FMS export |
| Spotting Time Error | Diferencia entre spotting time real y reportado | ≤ 15 s | Video análisis sincronizado |

**Método de validación:** Análisis de video de alta resolución sincronizado con los logs del FMS. Se recomienda instalar una cámara fija con campo de visión completo de la zona de carguío durante períodos de 24–48 horas para construir el dataset de referencia.

### Nivel 3: Producción (Precisión de KPIs de Productividad)

**Objetivo:** Cuantificar el impacto del error GNSS en los indicadores de productividad y utilización.

**Métricas e indicadores:**

| Métrica | Cálculo | Tolerancia | Referencia |
|---------|---------|------------|-----------|
| Error en Tonelaje Reportado | (Ton_FMS - Ton_báscula) / Ton_báscula × 100% | ≤ 3% | Báscula de camión como referencia |
| Error en Tasa de Producción | (tph_FMS - tph_real) / tph_real × 100% | ≤ 5% | Comparación semanal vs. producción reconciliada |
| Error en Utilización | (OEE_FMS - OEE_real) / OEE_real × 100% | ≤ 3 pp | Revisión de clasificación de estados |
| Error en Cycle Time | (CT_FMS - CT_video) / CT_video × 100% | ≤ 5% | Video análisis |
| Factor de Utilización Reportado vs. Real | Diferencia en % uptime entre FMS y referencia | ≤ 3 pp | Cruce con sistema de mantenimiento |

### Nivel 4: Geología y Grade Control

**Objetivo:** Cuantificar el impacto del posicionamiento en la calidad del grade control y la diferenciación mineral/desmonte.

**Métricas e indicadores:**

| Métrica | Definición | Tolerancia | Método |
|---------|------------|------------|--------|
| Dig Boundary Error | Distancia media de excavación fuera del polígono de ore | ≤ 0.5 m | BenchManager/ProVision log vs. polígono GC |
| Polygon Mismatch Rate | % de cucharas excavadas fuera del polígono asignado | ≤ 10% | Log FMS + polígono de control |
| Material Misclassification Rate | % de camiones con destino incorrecto por error de zona | ≤ 2% | Reconciliación producción vs. planta |
| Dilución Operacional | Incremento de dilución atribuible a errores posicionales | Específico por mina | Comparación reconciliación histórica pre/post HPM |
| Ore Recovery | % de mineral recuperado vs. modelo geológico | Específico por mina | Reconciliación mensual modelo/mill |
| Ore/Waste Contact Accuracy | Desviación media del contacto excavado vs. diseño | ≤ 0.5 m | Levantamiento dron post-minado + modelo GC |

**Protocolos de validación:**
- Comparación de nubes de puntos fotogramétricos (dron) o LiDAR de la superficie minada vs. polígonos de grade control
- Reconciliación mensual o semanal entre el modelo de bloques, la producción del FMS y los resultados de la planta de procesamiento (factor F1, F2, F3)
- Análisis de desplazamiento sistemático entre posición GNSS de la pala y posición medida por levantamiento independiente

### Nivel 5: Geotecnia y Cumplimiento de Diseño de Banco

**Objetivo:** Evaluar el impacto del posicionamiento en el cumplimiento de los parámetros geotécnicos de diseño de taludes y bancos.

**Métricas e indicadores:**

| Métrica | Definición | Tolerancia Típica | Método |
|---------|------------|-------------------|--------|
| Desviación de Crest | Distancia entre crest real (levantada) y crest de diseño | ≤ 1.0 m | Dron/LiDAR vs. CAD diseño |
| Desviación de Toe | Distancia entre toe real y toe de diseño | ≤ 1.5 m | Dron/LiDAR |
| Ancho de Berma Real vs. Diseño | Diferencia de ancho de berma medida vs. diseñada | ≤ 0.5 m | Perfil topográfico |
| Ángulo de Talud Efectivo | Diferencia entre ángulo medido y diseñado | ≤ 2° | Perfil levantamiento |
| Cumplimiento Geotécnico % | % de bermas/crests dentro de tolerancia | ≥ 90% | Análisis estadístico levantamiento periódico |
| Crest Loss Rate | % de crests con pérdida medida > 0.5 m vs. diseño | ≤ 10% | Plataforma IA reconciliación open pit |

**Frecuencia recomendada:** Levantamiento dron quincenal para validación de cumplimiento geotécnico durante fases activas de minado. La integración con plataformas de IA para reconciliación automática (como la descrita por Parrott et al., 2023) permite automatizar el cálculo de crest loss y toe flare.[^22]

***

## 9. Síntesis de Casos de Implementación Industrial

### 9.1 Kansanshi Mine — Wenco BenchManager + HPM (Zambia, 2022)

La mina de cobre/oro Kansanshi, operada por First Quantum Minerals en Zambia, implementó High Precision Mining (HPM) mediante el algoritmo de despacho de Wenco y BenchManager para posicionamiento de balde. Los resultados documentados incluyen:[^24]

- Reducción de eventos fuera del polígono de excavación de 34% a 15% (desviaciones >50 cm)
- Reducción de mismatches totales de 10% a 8%
- Mejora en calidad de material al crusher de 65% a 75%
- Reducción de costo de minado de ~$10.3/BCM
- Mejora en reportes de flota/producción
- Tolerancias GNSS utilizadas: X=0.5 m, Y=0.5 m, Z=0.5 m

### 9.2 Fushun West Open-Pit Mine — GNSS/Pseudolites (China, 2013)

En la mina west del Grupo Minero Fushun (6.6 km × 2 km, 388 m profundidad), el sistema GNSS puro tenía PDOP de 3.6–3.3 debido a la obstrucción del cielo. La implementación de un sistema GNSS/Pseudolites optimizado con 4 PLs en las esquinas del pit redujo el PDOP a valores < 1.5 y el VDOP de 2.65 a 1.12, mejorando significativamente la precisión vertical de posicionamiento de vehículos.[^16]

### 9.3 VIU Africa (Australia) — DISPATCH HCA + Payload Optimization (2020)

La implementación de Haul Cycle Automation en DISPATCH en una mina australiana logró:[^34]
- Reducción de zero spots de 3.7% a 1.9%
- Incremento de producción de 6 ktonnes/día
- ~$50 millones USD/año en revenue uplift por optimización de payload (incremento de ~19% TKPH)
- Mejora de la calidad de datos para optimización del FMS

### 9.4 ProVision Guided Spotting — Múltiples Operaciones Globales (2019–presente)

La implementación del sistema ProVision Guided Spotting de Modular Mining en operaciones alrededor del mundo reporta consistentemente:[^47][^11]
- Reducción del hang time de pala hasta 35%
- 2–8 cargas adicionales por hora por pala
- Incremento de productividad hasta 13%
- Eliminación de la necesidad del "bucket flag" visual

***

## 10. Recomendaciones para el Diseño de un Protocolo de Evaluación GNSS

### 10.1 Diseño del Experimento de Campo

**Fase 1 — Caracterización del entorno GNSS (1–2 semanas):**
- Instalar receptor de referencia geodésico en punto de control estable dentro de la operación
- Registrar logs continuos del receptor de la pala durante al menos 3 turnos completos
- Calcular métricas de Nivel 1: Fix Rate, PDOP medio/máximo, latencia, RMSE vs. referencia
- Mapear zonas de la mina con mayor degradación GNSS (highwall proximity, cables de potencia, zonas bajo equipos)

**Fase 2 — Validación operacional (2–4 semanas):**
- Instalar cámara de referencia con timestamp GPS sincronizado para captura de eventos de ciclo
- Extraer logs de FMS (DISPATCH/Wenco/Hexagon) del mismo período
- Calcular métricas de Nivel 2: tasa de detección de carga, error de timestamp, zero spots
- Validar métricas de Nivel 3 cruzando FMS con básculas y producción del molino

**Fase 3 — Evaluación de grade control (mensual/trimestral):**
- Ejecutar levantamientos dron post-voladura y post-minado de los blocks evaluados
- Comparar polígonos de grade control (diseño) con superficie excavada real
- Calcular dilución operacional y ore recovery del período evaluado
- Comparar con métricas de Nivel 4 registradas por el FMS/sistema de guiado

**Fase 4 — Auditoría geotécnica (trimestral):**
- Levantar perfiles de crest/toe con dron o levantamiento topográfico convencional
- Calcular desviaciones respecto al diseño geotécnico
- Generar reporte de cumplimiento geotécnico según métricas de Nivel 5

### 10.2 Tolerancias Recomendadas por Aplicación

| Aplicación | Tolerancia Horizontal | Tolerancia Vertical | Sistema Mínimo Recomendado |
|-----------|----------------------|---------------------|---------------------------|
| Despacho/FMS básico | ≤ 2 m | N/A | DGNSS / GNSS autónomo + WAAS |
| Guiado de banco y cota | ≤ 0.3 m | ≤ 0.2 m | GNSS RTK Fix |
| Grade control en contacto ore/waste | ≤ 0.1 m | ≤ 0.15 m | GNSS RTK Fix + GNSS+INS |
| High Precision Digging | ≤ 0.05 m | ≤ 0.10 m | RTK Fix + cadena cinemática del brazo |
| Monitoreo geotécnico de taludes | ≤ 0.01 m | ≤ 0.01 m | GNSS estático / GNSS RTK geodésico |

*Fuentes: *[^48][^21][^3][^10][^4]

### 10.3 KPIs Consolidados del Framework

```
NIVEL 1 — POSICIONAMIENTO
├── RTK Fix Rate (%)           → meta ≥ 95%
├── RMSE Horizontal (cm)       → meta ≤ 3 cm
├── RMSE Vertical (cm)         → meta ≤ 5 cm
├── PDOP medio por turno       → meta < 3.0
├── Latencia posicional (ms)   → meta ≤ 100 ms
└── Tiempo a Fix (s)           → meta ≤ 60 s

NIVEL 2 — OPERACIÓN
├── Tasa Detección Carga (%)   → meta ≥ 98%
├── Error Timestamp (s)        → meta ≤ 30 s
├── Zero Spot Rate (%)         → meta ≤ 2%
└── Misclassification Rate (%) → meta ≤ 3%

NIVEL 3 — PRODUCCIÓN
├── Error Tonelaje (%)         → meta ≤ 3%
├── Error Productividad (%)    → meta ≤ 5%
└── Error Utilización (pp)     → meta ≤ 3 pp

NIVEL 4 — GEOLOGÍA
├── Dig Boundary Error (m)     → meta ≤ 0.5 m
├── Polygon Mismatch Rate (%)  → meta ≤ 10%
├── Material Misclass. (%)     → meta ≤ 2%
└── Ore Recovery vs. modelo    → específico por mina

NIVEL 5 — GEOTECNIA
├── Desviación Crest (m)       → meta ≤ 1.0 m
├── Desviación Toe (m)         → meta ≤ 1.5 m
├── Ancho Berma Error (m)      → meta ≤ 0.5 m
└── Cumplimiento Geotécnico %  → meta ≥ 90%
```

***

## 11. Brechas de Conocimiento y Áreas de Investigación Futura

La literatura y documentación técnica disponible presenta las siguientes brechas que representan oportunidades de investigación:

1. **Relaciones cuantitativas publicadas entre error GNSS y dilución:** La mayoría de los estudios reportan beneficios cualitativos o mejoras relativas post-implementación HPM, pero no publicaciones con la relación ε_GNSS → Δdilución cuantificada experimentalmente en condiciones controladas.

2. **Propagación de errores en la cadena cinemática del brazo:** El error de posición del balde es función del error GNSS en la antena más la propagación a través del brazo articulado. Falta un estudio sistemático de este efecto para distintas geometrías de palas hidráulicas vs. eléctricas de tipo cable.

3. **Impacto del multipath específico de minas:** La mayoría de estudios de multipath provienen de entornos urbanos. Los entornos mineros tienen características especiales (superficies reflejantes a ángulos elevados, maquinaria metálica en movimiento) que requieren caracterización específica.

4. **Degradación de GNSS en operaciones autónomas:** Con el avance de los sistemas de carguío autónomo (Komatsu AHS para camiones, y emergentes para palas), los requisitos de integridad y disponibilidad GNSS son mucho más estrictos que los sistemas de guiado asistido, y la literatura específica es escasa.

5. **Integración GNSS + LiDAR + visión para bucket tracking:** Los sistemas más avanzados están comenzando a combinar GNSS con LiDAR y visión computacional para el seguimiento del balde. La cuantificación del beneficio en términos de grade control respecto a sistemas GNSS puros está pendiente de publicación.

***

## Referencias Clave y Fuentes Primarias

Las siguientes fuentes primarias y publicaciones de referencia sustentan este reporte:

- **Cat MineStar Terrain for Loading Specifications (AEHQ6177-03, 2013):** Especificaciones del receptor MS992 — 10 mm horizontal, 20 mm vertical[^4]
- **Wenco BenchManager — "How Accurate Is High-Precision Machine Guidance?" (2024):** 30 cm o mejor para shovels con AGS[^10]
- **Kangwa & Mutambo — "Application of High Precision Mining for Optimising Load and Haul Operations at Kansanshi Mine, Zambia" (JONAS, 2022):** Caso de estudio HPM con resultados cuantificados[^24]
- **Shan, Han & Jiang — "Optimization Model of GNSS/Pseudolites Structure Design for Open-Pit Mine" (Trans. Nonferrous Met. Soc. China, 2013):** Análisis de PDOP en mina profunda de 388 m[^16]
- **Parrott et al. — "Advances in the Use of AI for Open Pit Reconciliation" (ACG, 2023):** KPIs de crest loss, toe flare y reconciliación con IA[^22]
- **Komatsu/Modular Mining — "DISPATCH Haul Cycle Automation Case Study" (VIU Africa, 2020):** Reducción de zero spots y uplift de producción[^34]
- **GroundHog — "Harnessing High-Precision GPS for Enhanced Ore Quality Control" (2024):** Metodología RTK para excavadoras y dozers[^43]
- **NovAtel SPAN (FSAS/Navtech datasheets):** Especificaciones de sistema GNSS+INS con precisiones RTK y coasting[^49][^7]
- **Hexagon Mining — Leica Jigsaw Product Catalog (2015):** Descripción de J2shovel, JPS y arquitectura Jfleet[^12]
- **Modular Mining ProVision — Mining Technology (2019):** Especificaciones y beneficios del sistema de guiado[^11]
- **Cube Consulting — "Dilution and Ore Loss: A Short Practical Guide" (2020):** Cuantificación económica de dilución y pérdida de mineral[^28]

---

## References

1. [Discover the Best Choice: RTK or GNSS for Optimal Mine Performance](https://groundhogapps.com/rtk-or-gnss/) - Mines use RTK base High Precision GPS units on Drills, Dozers and Graders in open pit mines, quarrie...

2. [RTK GNSS Benefits: How cm-Level Accuracy Transforms ...](https://www.lefixea.com/article/rtk_gnss3) - While standalone GPS positioning can sometimes reach errors of several tens of centimeters, using RT...

3. [[PDF] Network real time kinematic (CORS-FKP method) accuracy](https://www.agricultforest.ac.me/data/20230630-015%20Pirti%20and%20Kurtulgu.pdf) - The GNSS equipment used for CORS measurement consists of a pair of Topcon Hiper HR receivers (Static...

4. [[PDF] Cat® Terrain - for Loading](http://s7d2.scene7.com/is/content/Caterpillar/C10338802) - Terrain is an ideal tool for mine planning, engineering, surveying, production monitoring, bench mai...

5. [RTK vs GPS: Accuracy, Corrections & Workflows (2026 Guide)](https://rtkdata.com/blog/rtk-vs-gps-accuracy-2026/) - RTK delivers 1–2cm accuracy vs 2–5m with standard GPS. Compare FIX vs FLOAT, RTK vs PPK vs PPP, and ...

6. [NovAtel's GNSS+INS Technology Combined System with SPAN](https://insidegnss.com/novatels-gnssins-combined-system-with-span-technology-now-offered-in-rugged-ultra-compact-unit/) - NovAtel announced today that it is now delivering their market-leading SPAN® tightly-coupled GNSS+IN...

7. [[PDF] FSAS SPAN](https://www.sfsaviation.ch/files/177/SFS%20GPSIMU.pdf) - NovAtel's SPAN Technology brings together two different, but complementary technologies: GNSS positi...

8. [[PDF] SPAN-SE™](https://hexagondownloads.blob.core.windows.net/public/Novatel/assets/Documents/Papers/SPAN-SE/SPAN-SE.pdf) - The absolute accuracy of GNSS positioning and the stability of IMU gyro and accelerometer measuremen...

9. [ECS-E30 PRO Excavator Guidance System - SatLab Geosolutions](https://www.satlabgeo.com/product/ecs-e30-pro-excavator-guidance-system/) - Exceptional Accuracy. Powered by high-precision dual-GNSS and customized IMU sensors, the ECS-E30 PR...

10. [How accurate is high-precision machine guidance?](https://www.wencomine.com/post/how-accurate-is-benchmanager-2) - Many factors are at work with these systems, but we generally say 30 cm or better precision for shov...

11. [ProVision Machine Guidance System - Mining Technology](https://www.mining-technology.com/products/provision-machine-guidance/) - The ProVision system for loading equipment helps your operators increase productivity by leveraging ...

12. [[PDF] PRODUCTS TO SHAPE SMART CHANGE - Parameter 1](https://cdn.base.parameter1.com/files/base/acbm/ooh/document/2016/08/Hexagon_Mining_data_solutions_brochure.pdf) - Leica J2shovel is a high precision GPS navigation system for loaders, excavators, and shovels. With ...

13. [Comparative assessment of the application of RTK and non ... - DOAJ](https://doaj.org/article/5db9de604b2f4a7d96d54a479180c883) - The obtained results showed that the RTK technology ensures stable positioning accuracy with RMS err...

14. [Why Excavators Don't Need Reverse Kinematics (But Use AI Instead)](https://www.youtube.com/watch?v=UyrvHQAXiRE) - How does an excavator know where its bucket is in 3D space? In this video, we break down the real en...

15. [[PDF] XE100 Guidance System for Excavator - ComNavTech](https://comnavtech.com/uploads/soft/20240607/61d0b576d831425b1aa484ba14da6f19.pdf) - Accuracy. Horizontal Accuracy. ± 1.5cm. Vertical Accuracy. ± 3cm. Azimuth. 0.15°/R. Roll or Pitch. 0...

16. [[PDF] Optimization model of GNSS/pseudolites structure design for open ...](http://www.ysxbcn.com/down/2013/07_en/48-p2201.pdf) - However, the slopes of deep open-pit mines probably reduce the GNSS satellite visibility, which lead...

17. [[PDF] Improvement of GNSS Positioning Accuracy Under Urban ...](https://www.fig.net/resources/proceedings/fig_proceedings/fig2018/ppt/ts02e/TS02E_onaka_miyahara_et_al_9382_ppt.pdf) - Cutoff mask generated from sky photo is the most effective. Cutoff mask from 3D map is the second. •...

18. [[PDF] Impact of Satellite Elevation Mask in GPS+Galileo RTK Positioning](https://elib.dlr.de/134086/1/ITM20-0030.pdf) - RTK uses double difference (DD) code and carrier phase measurements, eliminating atmospheric effects...

19. [Explaining RTK GPS Accuracy: What Can You Actually Expect in the ...](https://www.lefixea.com/article/rtk109) - RTK stands for Real Time Kinematic, a high-precision positioning technique that corrects errors in G...

20. [What are the common error sources in GNSS RTK positioning and ...](https://www.uniquenav.com/blog/what-are-the-common-error-sources-in-gnss-rtk-positioning-and-how-to-mitigate-them) - Bad satellite geometry really messes with RTK accuracy. The problem happens when satellites bunch up...

21. [Machine Control Solutions & 3d Grading Control Systems - Trimble](https://www.trimble.com/en/solutions/technologies/machine-control) - How accurate are GNSS machine control solutions? GNSS solutions provide centimeter-level accuracy (t...

22. [[PDF] Advances in the use of artificial intelligence for open pit reconciliation](https://papers.acg.uwa.edu.au/d/2335_62_Parrott/62_Parrott.pdf) - Specific tools and key performance indicators for pit reconciliation have been incorporated into an ...

23. [AI can now automate a mining inspection process by detecting ...](https://www.instagram.com/reel/DUleUN8gobA/) - ... bench widths and crest-toes positions against your mine plan. By ... Design Crest Design Toe Cre...

24. [Application of High Precision Mining for Optimising Load and Haul ...](https://journals.unza.zm/index.php/JONAS/article/view/524) - This paper focuses on the use of High Precision Mining (HPM) through use of Wenco's dispatching algo...

25. [Cat® MineStar™ Terrain](https://www.cat.com/en_US/by-industry/mining/surface-mining/surface-technology/terrain.html) - MineStar Terrain for loading is a machine guidance system that delivers real-time data in the cab—on...

26. [Minimizing Mining Dilution, Ore Loss & Misclassification by ...](https://www.globalminingreview.com/whitepapers/hexagons-mining-division/minimizing-mining-dilution-ore-loss-misclassification-by-accounting-for-blast-movement/) - This paper summarises the results from three Copper mines in Peru and Chile that have measured blast...

27. [Sensor-based real-time resource model reconciliation for improved ...](https://journals.sagepub.com/doi/10.1080/14749009.2015.1107342?icid=int.sj-abstract.citing-articles.6) - With increased certainty in predicting grades for resource blocks, the frequency of misclassificatio...

28. [[PDF] Dilution and ore loss – A short practical guide | Cube Consulting](https://www.cubeconsulting.com/wp-content/uploads/2020/11/Dilution-and-ore-loss-a-practical-guide.pdf) - One of the first things a mine geologist should do is understand the potential financial losses due ...

29. [How to Make the Most of Your Orebody - MineSense](https://minesense.com/how-to-make-the-most-of-your-orebody/) - MineSense's ShovelSense technology performs ore sorting using X-ray fluorescence (XRF) sensors to an...

30. [Digital solution for estimating ore grades in real time – MineSense](https://minesense.com/minesense-technologies-digital-solution-for-estimating-ore-grades-in-real-time/) - The system called Shovelsense, unique in the world, consists of sensors that are installed on the lo...

31. [MineSense Technologies (Extemin) - MSTA CANADA](https://mstacanada.ca/extemin/minesense-technologies/) - Our signature solution is ShovelSense, a robust sensor installed on mining equipment to scan and mea...

32. [Modular Mining Systems - Wikipedia](https://en.wikipedia.org/wiki/Modular_Mining_Systems) - The DISPATCH Underground system increased productivity by detecting equipment positions in real time...

33. [Modular Mining Systems - Mine | Issue 81 | June 2019](https://mine.nridigital.com/mine_jun19/modular_mining_systems) - The DISPATCH system for open pit mines maximizes productivity and efficiency while simultaneously in...

34. [[PDF] CASE STUDY - Komatsu](https://www.komatsu.com/content/dam/komatsu/sales-and-marketing-documents/case-study/case-study-haul-cycle-automation-viu-africa-2021.pdf) - In the DISPATCH System, a zero spot is typically recorded when a truck or shovel operator fails to p...

35. [[PDF] Optimization of Truck Dispatch System in Opencast Mines by using ...](http://www.researchinventy.com/papers/IARIST-2K23/Volume%204/9,38-42.pdf) - trucks at shovel × (loading time + spotting time)) + (Number of trucks at dump) × (unloading time + ...

36. [EVALUATION OF MODULAR FLEET MANAGEMENT SYSTEMS AT ...](https://www.academia.edu/42555500/SCHOOL_OF_MINES_AND_MINERAL_SCIENCES_DEPARTMENT_OF_MINING_ENGINEERING_PROJECT_TITLE_EVALUATION_OF_MODULAR_FLEET_MANAGEMENT_SYSTEMS_AT_KANSANSHI_MINE_ZAMBIA) - DISPATCH optimises the mine operation based on real- time data. This optimisation helps mines increa...

37. [Komatsu | ProVision guided spotting](https://www.komatsu.com/en-us/technology/smart-mining/loading-and-haulage/guided-spotting) - The ProVision Guided Spotting system has the potential to: ; Add 2–8 more loads per hour by maximizi...

38. [Modular Mining, Immersive Tech Launch Guided Spotting Simulation](https://www.aggregateequipmentguide.com/article/53833-modular-mining-immersive-technologies-launch-guided-spotting-simulation-system) - "Using high-precision GPS, Guided Spotting reliably guides haul truck operators to the correct loadi...

39. [[PDF] Smart Construction 3D Machine Guidance - Komatsu Europe](https://www.komatsu.eu/-/media/projects/komatsu/brochures/3dmg/sc_3d_machine_guidance_eensb16502_2310.ashx?rev=86de4f163c6f4bf281aa3e87076fac24&hash=E0967E34ACEBB8FDA51EF6C2D2B918E0) - • Multi-constellation GNSS system ensuring centimeter accuracy. • WiFi connection between operator s...

40. [[PDF] Application of High Precision Mining as a way of optimizing loading ...](https://dspace.unza.zm/bitstreams/3e6f28c8-b691-4dbc-971b-636f6669b0b0/download) - This technology uses high precision GPS on fleet (shovels/Trucks) to improve both bench elevation an...

41. [BenchManager Installation Guide | PDF | Windows Registry - Scribd](https://www.scribd.com/document/234508260/BenchManager-Installation-Guide) - BenchManager is a high-precision GNSS equipment-tracking system that provides bench elevation monito...

42. [Not every time the bucket comes down is a load. Sometimes the ...](https://www.facebook.com/Wencomine/videos/not-every-time-the-bucket-comes-down-is-a-loadsometimes-the-operator-is-cleaning/1332521252066803/) - Wenco's BenchManager reads the bench behaviorally. Using signals like velocity, swing, and dig-cycle...

43. [Harnessing High-Precision GPS for Enhanced Ore Quality Control in ...](https://groundhogapps.com/ore-quality-control-and-dilution/) - GroundHog uses RTK based High Precision GPS units on Blast Hole Drills, Excavators and Dozers to ens...

44. [Open Pit Mine Dispatch Operators' Handbook - Groundhog Apps](https://groundhogapps.com/open-pit-mine-dispatch-operators-handbook/) - In this handbook we explain how dispatch operators can use modern Fleet Management Systems to improv...

45. [Improve Overall Equipment Effectiveness using GroundHog Mine ...](https://groundhogapps.com/improve-overall-equipment-effectiveness-using-groundhog/) - Open Pit FMS system uses GPS based Fleet Management System for real-time tracking of mining equipmen...

46. [Truck cycle and delay automated data collection system in surface ...](https://scielo.org.za/scielo.php?script=sci_arttext&pid=S2225-62532013001100014) - This paper presents the results of research on the development and application of a custom-made truc...

47. [ProVision Guided Spotting Webinar: Spot On - YouTube](https://www.youtube.com/watch?v=Cw2jf_BoB4I) - The ProVision Guided Spotting system from Modular Mining helps to optimize the mining haul cycle by:...

48. [[PDF] Monitoring of Open Pit Mines Using Combined GNSS Satellite ...](https://papers.acg.uwa.edu.au/d/708_27_Brown/27_Brown.pdf) - The higher multipath values seen in the NW quadrant are due to reflections from another structure .....

49. [[PDF] NovAtel-SPAN-Product-Line-Brochure.pdf - NavtechGPS](https://www.navtechgps.com/wp-content/uploads/NovAtel-SPAN-Product-Line-Brochure.pdf) - The absolute position and velocity accuracy of the GNSS is used to compensate for the errors in the ...

