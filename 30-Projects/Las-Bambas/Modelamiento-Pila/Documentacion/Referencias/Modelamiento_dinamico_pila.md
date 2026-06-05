# Modelamiento Dinámico y Gemelo Digital de Pilas de Mineral Grueso: Estado del Arte, Señales de Proceso y Protocolo de Validación en Las Bambas

El modelamiento dinámico de pilas de mineral grueso (Ore Stockpile, OS) en operaciones mineras de cobre de gran escala representa una disciplina crítica dentro de la integración geometalúrgica de mina a planta (*mine-to-mill*). La variabilidad física y química del mineral extraído de los frentes de minado, al ser depositada de manera intermitente en la pila de almacenamiento, experimenta fenómenos de mezcla dispersiva y segregación granulométrica severa. Estos fenómenos alteran la consistencia del flujo de alimentación a los circuitos de molienda semiautógena (SAG), impactando directamente en la estabilidad de la planta concentradora y en la recuperación metalúrgica global.

## Bloque 1 — Estado del arte y mejores prácticas en modelamiento de pilas de mineral

El desarrollo de gemelos digitales para la optimización de la molienda requiere una caracterización matemática rigurosa del flujo granular masivo dentro de la pila de almacenamiento. La literatura científica y las mejores prácticas de la industria minera global distinguen entre varios enfoques de modelamiento, cada uno equilibrando de forma distinta la precisión espacial y el costo computacional.

### Comparativa de enfoques de modelamiento en la industria

* **Enfoque FIFO Clásico (First-In, First-Out):** Este modelo asume un comportamiento de flujo pistón puro (*plug flow*) en el cual el primer material en ingresar por la parte superior de la pila es exactamente el primero en ser extraído por los alimentadores inferiores.1 En la práctica operativa de pilas de mineral grueso, este enfoque resulta excesivamente simplista.1 Ignora de forma sistemática la existencia de zonas de estancamiento (*dead stock*), la mezcla hidrodinámica del flujo granular y los fenómenos de segregación granulométrica.1 Su única ventaja radica en la simplicidad de cálculo en sistemas de control tradicionales, pero introduce desfaces temporales críticos y errores de ley inadmisibles cuando los niveles de la pila fluctúan.1
* **Distribución de Tiempos de Residencia (RTD) Paramétrica:** Representa matemáticamente el tránsito del mineral a través de funciones de densidad de probabilidad probabilísticas.1 Mapea el flujo granular combinando zonas de flujo pistón e intervalos de mezcla dispersiva calibrados experimentalmente.1 Es computacionalmente eficiente, permitiendo su ejecución en CPU en ciclos de tiempo real de fracciones de segundo.2 Sin embargo, carece de resolución tridimensional para modelar la asimetría de los alimentadores o los patrones de segregación local sobre la superficie de la pila.
* **Modelos de Celda Mixta (CSTR en cascada / Mixers-in-Series):** Adaptado de la teoría clásica de reactores químicos, este enfoque modela el volumen dinámico de la pila como una serie de tanques continuamente agitados interconectados entre sí.3 Es altamente flexible para simular la atenuación de variaciones de alta frecuencia en la ley de alimentación y dureza del mineral.2 No obstante, al ser un modelo unidimensional o simplificado, no se asocia directamente con la geometría física real de la pila, dificultando la integración de datos topográficos tridimensionales complejos.
* **Modelos de Autómatas Celulares (CA) 3D:** Representan el estado del arte en el modelamiento espacial para gemelos digitales de tiempo real.4 Este enfoque divide el volumen total de la pila en una grilla tridimensional de celdas discretas (vóxeles).4 Cada celda interactúa localmente con sus vecinas mediante reglas físicas de transición simplificadas que gobiernan la transferencia de masa, el ángulo de reposo y la clasificación granulométrica.8 El modelo de Autómatas Celulares Continuos (CCA) del *Julius Kruttschnitt Mineral Research Centre* (JKMRC) permite simular de forma acoplada tanto la segregación superficial durante el apilamiento como la descarga dinámica gravitacional.4 Su velocidad computacional es excepcionalmente alta, haciéndolo ideal para la toma de decisiones en tiempo real y lazos de control predictivo.5
* **Método de Elementos Discretos (DEM) Simplificado:** Resuelve las ecuaciones fundamentales del movimiento mecánico de Newton para cada partícula individual o agrupaciones de partículas (*super-particles*) dentro de la pila.10 Ofrece la máxima fidelidad física en la caracterización de la segregación y el desarrollo de perfiles de velocidad del flujo granular.10 Sin embargo, su demanda computacional es masiva, requiriendo procesamiento especializado en clústeres de GPU de alto rendimiento durante horas o días para simular solo unos minutos de operación real, lo que invalida su uso en plataformas operativas en línea. Su aplicación se limita a estudios de diseño mecánico y calibración offline de otros modelos más ligeros.11
* **Enfoques de Machine Learning (ML):** Utilizan redes neuronales artificiales (como LSTM o arquitecturas recursivas) para predecir las propiedades del flujo de salida basándose únicamente en el histórico de señales de entrada. Son efectivos para capturar patrones no lineales en condiciones de operación estacionaria, pero muestran una baja capacidad de generalización ante cambios drásticos en los dominios geometalúrgicos de la mina y no garantizan intrínsecamente la conservación física de la masa o el volumen dentro del sistema.

### Parametrización correcta de una RTD para pilas de mineral

La modelación hidrodinámica de una pila de mineral mediante RTD se basa en caracterizar la respuesta temporal del sistema a un impulso de entrada. En la industria metalúrgica, el modelo más representativo para describir este tránsito granular es la combinación de flujo pistón con mezcladores ideales en serie.3 La función de distribución del tiempo de residencia ![](data:image/png;base64...) se parametriza mediante la siguiente expresión basada en la distribución Gamma generalizada 3:

![](data:image/png;base64...)

Donde ![](data:image/png;base64...) representa el tiempo de retardo asociado al flujo pistón puro (tránsito a través del canal de flujo activo), ![](data:image/png;base64...) es el tiempo medio de mezcla en las celdas activas, ![](data:image/png;base64...) representa el parámetro de forma equivalente al número de reactores ideales en serie 3, ![](data:image/png;base64...) es la función matemática Gamma, y ![](data:image/png;base64...) es la función escalón unitario que garantiza que no exista flujo de salida antes del tiempo de tránsito mínimo.

La dinámica del material granular hace que los parámetros de la RTD varíen de manera significativa según las condiciones de operación de la pila 1:

* **Influencia del nivel de la pila:** Cuando la pila mantiene niveles elevados (>80% de su capacidad geométrica), la masa compactada de mineral grueso actúa como un estabilizador físico de los canales de flujo. El comportamiento se aproxima predominantemente al de flujo pistón.1 A niveles críticamente bajos (<40%), la altura de caída directa desde la correa sobre la boca de los alimentadores elimina la columna amortiguadora, provocando una transición abrupta hacia un comportamiento de mezcla completa acelerada (![](data:image/png;base64...)), aumentando la dispersión y favoreciendo cortocircuitos hidráulicos del mineral fresco.1
* **Influencia de la tasa de alimentación:** Un incremento sostenido en el tonelaje de entrada acelera la velocidad de consolidación y empuje del mineral en la zona de descarga activa, contrayendo el tiempo de residencia medio y desplazando la distribución temporal hacia la izquierda.
* **Influencia de la tasa de extracción:** La activación selectiva de los alimentadores altera de forma directa la morfología del canal de flujo. Una tasa de extracción elevada en múltiples alimentadores ensancha el cono activo disminuyendo la variabilidad granulométrica del mineral extraído, mientras que la operación de un único alimentador induce un flujo canalizado de alta velocidad (chimenea o *ratholing*), reduciendo drásticamente el tiempo de residencia efectivo y aumentando el error de estimación del modelo si este no discrimina espacialmente la extracción.

### Modelamiento de la separación Live Stock / Dead Stock

En pilas de mineral operadas por gravedad en modo de flujo embudo o *funnel flow*, la masa total acumulada se divide de forma estricta en una zona activa de escurrimiento libre (*live stock*) y una masa lateral estática auto-soportada (*dead stock*) que actúa como talud de contención natural.12

La delimitación de estas zonas depende del ángulo de reposo dinámico del material (![](data:image/png;base64...)), que define la geometría exterior generada durante el acopio, y el ángulo estático de reclamo (![](data:image/png;base64...)), que define el límite del deslizamiento gravitacional interno hacia los alimentadores una vez que se retira material por la base de la pila.13

A través de estudios experimentales combinando fotogrametría aérea por dron y modelamiento geométrico analítico, se ha determinado de manera precisa la fracción de volumen útil o activo (![](data:image/png;base64...)) para sistemas de almacenamiento granular cónico bajo flujo gravitacional.13 Utilizando la metodología de análisis de Ferreira et al. (2022), para un sistema con una descarga central de radio equivalente ![](data:image/png;base64...) y un diámetro total de pila ![](data:image/png;base64...), la fracción útil de almacenamiento se formula analíticamente de la siguiente manera 13:

![](data:image/png;base64...)

Los valores experimentales reportados en la literatura técnica demuestran la ineficiencia intrínseca del reclamo por gravedad pura.12 Ferreira et al. (2022) determinaron mediante ensayos controlados a escala que las pilas cónicas de arena fina presentan una fracción de volumen útil promedio de **17.74% ![](data:image/png;base64...) 0.0037%** (con un coeficiente de variación de 2.08%), mientras que la arena media reportó un promedio de **17.79% ![](data:image/png;base64...) 0.0046%** (coeficiente de variación de 2.71%).13

En la práctica industrial con mineral grueso fragmentado y húmedo, la fracción de *live stock* gravitacional típica en pilas cónicas se sitúa en un rango estrecho de **15% a 30%** de la capacidad geométrica total del acopio.12 Para el caso de Las Bambas, con una capacidad nominal confirmada de ~105,000 t, el volumen útil recuperable por gravedad natural oscila únicamente entre las 15,750 y 31,500 toneladas sólidas, quedando el 70% a 85% restante inmovilizado de manera pasiva en forma de *dead stock* a menos que intervenga un equipo auxiliar mecánico.12

### Modelos espaciales discretizados implementados en la industria

La necesidad de simular la asimetría física y los gradientes metalúrgicos tridimensionales dentro de la pila impulsó la adopción de modelos espaciales de tipo autómata celular continuo (CCA) en entornos industriales.4 Destacan especialmente los desarrollos de Ye, Hilden y Yahyaei (2022-2023) en el JKMRC, enfocados en simular el comportamiento dinámico de pilas industriales de gran escala con segregación acoplada por trayectoria de descarga e inundación gravitacional.4

Este modelo de CCA, comúnmente programado sobre entornos de cálculo híbrido (como MATLAB/Simulink acoplado a bases de datos en GPU), divide el espacio tridimensional en una matriz densa de bloques de volumen discreto.7 Cada bloque o celda almacena un arreglo continuo de atributos del mineral:

* Masa y fracción granulométrica por malla (desde mineral fino hasta rocas de tamaño crítico).8
* Atributos químicos: leyes de cobre (%Cu) y molibdeno (%Mo).
* Atributos mecánicos y metalúrgicos: humedad y dureza mineralógica expresada en términos del índice de trabajo de Bond (Bond Work Index, BWi) o parámetros de fragmentación por caída libre (![](data:image/png;base64...)).2

La transferencia espacial de masa entre las celdas se resuelve aplicando reglas de balance de conservación diferencial basadas en diferencias finitas y en el cumplimiento de los ángulos locales de talud natural de las partículas.7 A diferencia de los modelos planos 2D que provocan una caída instantánea de los finos hacia los alimentadores distorsionando el balance temporal, la discretización 3D o 2.5D de sectores radiales por capas horizontales modela correctamente los flujos preferenciales de descenso y la retención del mineral en las paredes de fricción interna.7 La validación del modelo utilizando datos de proceso de la planta concentradora de Las Bambas demostró una alta concordancia con las mediciones reales de altura y granulometría registradas en los feeders de la molienda SAG.6

### Tratamiento de escenarios específicos en la operación

El desarrollo de un gemelo digital preciso para la operación de Las Bambas requiere modelar matemáticamente los siguientes comportamientos físicos complejos:

#### 1. Uso de tractores para alimentación forzada (Operación no gravitacional)

Debajo de un nivel de pila del 60%, el flujo de mineral hacia el circuito del SAG 2 se detiene de forma natural debido a la asimetría del acopio y el soporte del muro de concreto. Para mantener la continuidad operacional de la molienda, se utilizan tractores de oruga (típicamente Caterpillar D10/D11) para empujar mecánicamente el mineral desde el *dead stock* lateral hacia el área de influencia directa de los feeders del SAG 2.16 Este empuje forzado destruye el talud natural del cono de descarga y moviliza masa inactiva.

En el Modelo Ligero (ML), este comportamiento se integra en la ecuación diferencial de balance de masa de la zona activa (![](data:image/png;base64...)):

![](data:image/png;base64...)

Donde ![](data:image/png;base64...) y ![](data:image/png;base64...) son los caudales másicos de entrada y salida locales de la zona del feeder ![](data:image/png;base64...), ![](data:image/png;base64...) es el número de unidades activas detectadas en la zona de alimentación, ![](data:image/png;base64...) es el coeficiente empírico de transferencia forzada de masa (![](data:image/png;base64...) nominal de empuje de la hoja del tractor ajustado por tipo de material), y ![](data:image/png;base64...) es una función de acoplamiento de la posición espacial del tractor con respecto al feeder. En el Modelo Espacial (ME), la actividad del tractor se simula aplicando un operador morfológico de suavizado topográfico local sobre la malla tridimensional, recortando la elevación en las zonas de empuje laterales e inyectando esa masa de forma directa en las celdas superiores del cono activo de descarga.17

#### 2. Flujos de retorno de material fino y pebbles

La faja de alimentación de la pila recibe, además del flujo de mineral fresco de la chancadora primaria, retornos intermitentes de finos de planta (~40 t/día) y pebbles chancados (~72,000 t distribuidas en dos campañas masivas anuales). El retorno de finos altera localmente el empaquetamiento granular aumentando la densidad aparente del mineral.13 Las campañas de pebbles, al ingresar como un flujo concentrado de mineral de alta dureza y granulometría acotada, deben rastrearse en el modelo dinámico como "micro-batches" discretos integrados en la corriente de entrada.2 Al depositarse, la distribución espacial de estos finos y pebbles experimenta una segregación por trayectoria: las partículas finas se asientan directamente debajo del eje vertical del punto de descarga de la faja móvil, mientras que los pebbles e intermedios ruedan hacia el perímetro exterior de la pila.5 De acuerdo con Prado y Ferreira (2022), esta variación granulométrica altera de manera local la porosidad del lecho (![](data:image/png;base64...)), la cual se calcula a partir de la pendiente granulométrica o parámetro de forma ![](data:image/png;base64...) de la distribución Rosin-Rammler del material 13:

![](data:image/png;base64...)

La porosidad espacial modificada retroalimenta al autómata celular alterando localmente la velocidad de drenaje de las celdas durante la descarga de finos o pebbles.

#### 3. Geometría asimétrica de feeders

La base de la pila de Las Bambas cuenta con 8 feeders divididos en dos configuraciones espaciales críticas: 4 feeders dispuestos en la zona central abierta que alimentan de forma simétrica al SAG 1, y 4 feeders instalados de forma adyacente a un muro de contención de concreto estructural para alimentar al SAG 2. El muro de concreto actúa como una barrera rígida de fricción infinita que interrumpe la simetría radial del talud natural de mineral. El Modelo Espacial (ME) integra este muro como una condición de contorno de flujo nulo (![](data:image/png;base64...)) en las coordenadas correspondientes. Esta restricción de flujo reduce a la mitad el volumen de cono de extracción dinámico disponible para los feeders del SAG 2, acelerando la formación prematura de chimeneas de flujo y consolidando un volumen masivo de *dead stock* lateral que detiene el flujo natural cuando la pila cae por debajo de su 60% de capacidad total.

#### 4. Cambio del patrón de apilamiento según nivel

A medida que la pila se llena de mineral, la altura de caída libre desde la faja transportadora de alimentación hasta la superficie disminuye gradualmente. Si la faja cuenta con una posición de descarga fija, el vértice del cono de alimentación permanece constante pero el radio de segregación granulométrica por rodadura varía dinámicamente: a menor altura de caída (niveles de pila altos), el mineral grueso tiene menor energía cinética para rodar, concentrándose de forma más homogénea en el cuerpo de la pila.10 A gran altura de caída (niveles de pila bajos), la segregación se agudiza, desplazando selectivamente el mineral grueso de mayor diámetro hacia el perímetro exterior de la pila de manera radial.5 Si la faja posee un sistema móvil de apilamiento (*shuttle*), el punto central de la coordenada de inyección de masa en el Modelo Espacial (ME) se desplaza de forma dinámica en tiempo real según la señal del sensor de posición física del shuttle, redefiniendo las coordenadas de las capas horizontales del autómata celular tridimensional.

### Umbrales de precisión en implementaciones reales de la industria

La precisión predictiva de los gemelos digitales de pilas de mineral grueso se mide comparando los indicadores del modelo con sistemas físicos instrumentados y levantamientos de calibración específicos:

* **Precisión Volumétrica (Masa Global):** El error relativo porcentual en la masa o volumen estimado de la pila frente a levantamientos de referencia con drones o estaciones de escaneo láser se mantiene típicamente en un rango de ![](data:image/png;base64...) **2% a ![](data:image/png;base64...) 5%** en implementaciones de primer nivel mundial.13
* **Precisión en Leyes de Cobre y Molibdeno a la descarga:** Los modelos que utilizan tracking dinámico de micro-lotes (*micro-batches*) y RTD calibradas obtienen coeficientes de determinación de ![](data:image/png;base64...) y un Error Medio Absoluto Porcentual (MAPE) de **3% a 6%** bajo condiciones normales de operación del acopio.
* **Precisión Granulométrica (P80 de alimentación):** Debido a los complejos mecanismos de percolación de partículas finas y rodadura de bloques gruesos en la superficie de la pila, la predicción de la granulometría de salida (P80) de los feeders individuales exhibe un MAPE aceptable de **8% a 12%** en validaciones de planta concentradora.7

## Bloque 2 — Lista de señales requeridas para el modelamiento correcto

La siguiente tabla estructurada detalla y prioriza las variables físicas e instrumentales indispensables para soportar el funcionamiento acoplado del Modelo Ligero (ML) y el Modelo Espacial (ME) del gemelo digital de la pila de mineral de Las Bambas.

| **Nombre de la variable** | **Unidad de medida** | **Frecuencia mínima** | **Fuente típica** | **Prioridad** | **Impacto si no está disponible** | **Alternativa o proxy** |
| --- | --- | --- | --- | --- | --- | --- |
| **Caudal másico de salida por feeder (8 variables individuales)** | t/h | 5 s | Pesómetro individual por correa de feeder | **Crítica** | Imposibilidad absoluta de realizar el balance de masa local y el tracking de micro-lotes por feeder. Pérdida del control de mezcla. | Corriente o velocidad de variador (RPM) del motor del feeder multiplicada por la curva de descarga calibrada (![](data:image/png;base64...)). |
| **Caudal másico de entrada a la pila** | t/h | 10 s | Pesómetro de correa de descarga de chancadora primaria | **Crítica** | Pérdida de la variable de acumulación principal (![](data:image/png;base64...)). El modelo dinámico diverge inmediatamente en balance volumétrico global. | Tonelaje estimado de despacho de mina (conteo de camiones en tolva) o consumo de potencia de la chancadora. |
| **Nivel de la pila (Instrumentación física)** | m o % | 10 s | Sensores de nivel físicos (Radar, Ultrasonido o Cuerda electro-mecánica) | **Crítica** | Pérdida del punto de referencia de masa para corrección de deriva matemática del balance neto de masa. | Integración continua en lazo abierto del tonelaje neto (![](data:image/png;base64...)) corregido por la densidad aparente estimada del lecho. |
| **Estado operativo de cada feeder (8 variables individuales)** | Binario (0/1) | 1 s | Señal de contactor en MCC / DCS de planta concentradora | **Alta** | El modelo asume erróneamente flujo dinámico en feeders detenidos debido a ruido o carga estática en los pesómetros de salida. | Corriente analógica del motor del alimentador superior a un umbral mínimo (![](data:image/png;base64...)). |
| **Presencia y posición de tractor de empuje** | Binario (0/1) por zona | 30 s | Sistema de despacho satelital de mina (GPS de alta precisión en tractores) | **Alta** | El modelo espacial no registra el movimiento forzado de material, subestimando severamente el flujo de mineral hacia el SAG 2. | Correlación operacional: Detección de caudal de salida en feeders de SAG 2 continuo con nivel general de pila inferior al 60%. |
| **Granulometría de entrada (PSD)** | % pasante por malla / P80 | 1 min | Sistema óptico analizador de imágenes en faja de alimentación (Split/WipWare) | **Alta** | Imposibilidad de modelar el fenómeno de segregación granulométrica superficial de la pila. El P80 de salida se asume estático. | Curva granulométrica teórica basada en el tipo de litología alimentada y el set-point de apertura de la chancadora primaria (![](data:image/png;base64...)). |
| **Flujos de retorno de pebbles desde planta** | t/h | 10 s | Pesómetro de faja de recirculación de pebbles chancados | **Alta** | Error de masa y descalibración geometalúrgica severa. Las campañas de pebble introducen flujos concentrados de alta dureza y granulometría regular. | Estimación analítica a partir del balance metalúrgico del circuito de molienda SAG (tasa de evacuación de pebbles por trommel). |
| **Leyes de Cu y Mo de alimentación** | % | Por lote de camión / correa | Modelo de bloques de mina correlacionado con despacho / Analizador de correa en línea (PGNAA) | **Media** | Pérdida de la capacidad de predicción de leyes de cabeza en el feed de los SAG 1 y 2. Sin valor de reconciliación en tiempo real. | Promedio de ley del frente de minado cargado en las últimas 2 horas de acuerdo con el sistema de despacho a la chancadora. |
| **Humedad del mineral grueso** | % | 1 h | Analizador de humedad por microondas en correa / Muestreo de laboratorio | **Media** | Desviación en el cálculo de masa seca neta. Alteración de los ángulos de reposo dinámicos y fluidez granular en el modelo espacial. | Valor constante estacional de diseño (por ejemplo, 4.0% en temporada seca, 6.5% en temporada húmeda de la cordillera peruana). |
| **Dureza del mineral (Bond Work Index / SPI)** | kWh/t | Por campaña de minado | Modelo de bloques geometalúrgico de mina / Ensayos metalúrgicos en muestras | **Media** | Pérdida de predictibilidad sobre el requerimiento de energía específica en los molinos SAG aguas abajo. | Estimación retrospectiva inversa basada en el consumo específico de energía operativa del molino SAG bajo carga estable. |
| **Consumo de corriente de cada feeder (8 variables)** | A | 10 s | Centros de Control de Motores (MCC) de alimentadores | **Media** | Pérdida de indicador físico secundario de torque mecánico útil y deslizamiento o atascamiento de mineral en el cajón de descarga. | Señal binaria de estado de marcha del motor sin indicación analógica de carga o esfuerzo motriz. |
| **Levantamiento topográfico de superficie de pila** | Archivo vectorial / DEM | 15 días | Archivo de nube de puntos por fotogrametría de dron o escaneo láser terrestre | **Media** | Pérdida de la calibración quincenal obligatoria de la topografía 2.5D simulada por el Modelo Espacial (ME) en el servidor de GPU. | Ninguno. El Modelo Espacial (ME) opera en lazo abierto en base a integraciones matemáticas, acumulando un mayor margen de error de deriva. |
| **Flujos de retorno de finos de planta** | t/h | 10 s | Flujómetro e indicador de densidad de pulpa de finos de retorno | **Deseable** | Pequeña desviación local de la masa fina y de leyes de cobre en la zona de descarga activa. | Tasa de flujo fija parametrizada según el promedio diario histórico de retorno (~40 t/día). |
| **Posición física del Shuttle de descarga de correa** | m | 10 s | Codificador de posición de la faja móvil sobre la pila | **Deseable** | Error en la localización espacial del vértice del cono de alimentación en el ME, distorsionando las capas geometalúrgicas. | Suposición de descarga en punto central de la pila (posición de reposo por diseño mecánico). |

### Conjunto Mínimo Viable (CMV) para el Modelo Ligero (Precisión >80%)

Para implementar y operar el Modelo Ligero (ML) con un nivel de confianza superior al 80% en el balance de masa global y el rastreo de micro-lotes de ley de cobre, se requiere un conjunto mínimo de señales físicas integradas en tiempo real:

1. **Caudal másico de entrada a la pila** desde la correa de chancado primario.
2. **Caudal másico de salida individual por feeder** (o proxy calibrado de velocidad de motores VSD para los 8 alimentadores).
3. **Estado de marcha On/Off de los 8 alimentadores**.
4. **Señal de nivel físico de la pila** (radar o ultrasonido central) para forzar la autocalibración matemática diaria del volumen del lecho.
5. **Leyes promedio diarias de cobre y molibdeno** del mineral alimentado a la chancadora provenientes de la planificación de mina a corto plazo.

Este conjunto de variables permite resolver de manera continua las ecuaciones diferenciales de masa por reactor (CSTR en cascada acoplados con retardo temporal) 3, garantizando la conservación de masa sólida y el tracking dinámico de frentes de minado a bajo costo computacional en CPU.

### Señales complementarias para alcanzar una precisión del 90%

Para escalar el Gemelo Digital a un nivel de alta fidelidad (>90% de precisión en ley y granulometría de salida), se deben integrar de manera mandatoria las siguientes señales físicas y operativas:

1. **Granulometría en línea de entrada (PSD por imágenes en correa)** para parametrizar de forma dinámica la segregación del mineral sobre la pila en el Modelo Espacial.5
2. **Señales de telemetría GPS e indicación de estado de los tractores (Dozers)** en la pila, permitiendo automatizar la modelación de la remoción forzada del *dead stock* lateral hacia el SAG 2.
3. **Sincronización con el modelo de bloques de mina y sistema de despacho de camiones** para indexar de manera precisa y en tiempo real la dureza (BWi) y ley metalúrgica detallada de cada lote de mineral que ingresa a la chancadora.1
4. **Importación automatizada de los levantamientos topográficos por dron** cada 15 días para realizar la corrección y reconciliación volumétrica del Modelo Espacial (ME) 2.5D ejecutado en GPU.13

### Impacto de la ausencia de señales individuales de flujo por feeder

La agregación o falta de sensores individuales de flujo en los feeders (por ejemplo, contar únicamente con un pesómetro en la faja de alimentación global del SAG 1 y otro para el SAG 2) destruye críticamente la precisión del Gemelo Digital introduciendo los siguientes efectos negativos:

* **Pérdida de resolución espacial del cono de descarga:** El modelo se ve obligado a asumir una extracción uniforme y simétrica en todos los feeders activos (![](data:image/png;base64...)). Esto es físicamente falso, ya que los alimentadores centrales tienen tasas de descarga gravitacional natural más veloces que aquellos localizados en la periferia o junto al muro de concreto.
* **Falla en la predicción de la segregación granulométrica:** Dado que el material grueso se acumula preferentemente en los bordes exteriores de la pila (alimentando a los feeders externos) y los finos se concentran en el núcleo central (alimentando a los feeders centrales) 5, la ausencia de pesómetros individuales impide predecir el impacto granulométrico cuando la operación de planta apaga selectivamente feeders centrales por mantenimiento o control operacional, provocando oscilaciones drásticas e inexplicables en el P80 de alimentación al SAG.7

## Bloque 3 — Protocolo de validación de resultados del modelo

El siguiente protocolo de ingeniería establece los métodos, indicadores clave de desempeño (KPIs) y procedimientos de control necesarios para validar, calibrar e implementar el sistema de Gemelo Digital dinámico de la pila de mineral grueso de Las Bambas.

### 3.1 KPIs de desempeño del modelo

La calidad predictiva del sistema de modelamiento se evaluará utilizando los siguientes indicadores y umbrales de aceptación de la industria minera:

1. **Predicción de Ley de Cu y Mo en la alimentación a los Molinos SAG:**
   * *Métrica principal:* Error Porcentual Absoluto Medio (MAPE) evaluado en base horaria en promedios móviles de 2 horas.
   * *Fórmula:*
     ![](data:image/png;base64...)
   * *Justificación:* El MAPE es preferible al error absoluto medio (MAE) o al error cuadrático medio (RMSE) para el control de leyes ya que proporciona una escala relativa directa de la desviación del modelo, independientemente de si la ley de cabeza del mineral en ese momento de la campaña es baja (![](data:image/png;base64...)) o alta (![](data:image/png;base64...)). El RMSE, al elevar al cuadrado los errores residuales, se ve excesivamente penalizado por desviaciones puntuales (*outliers*) asociadas al ruido instrumental del muestreador de planta o a errores locales del modelo de bloques de mina, sin reflejar con precisión la fidelidad predictiva general del flujo.
   * *Umbral de aceptación:* **MAPE ![](data:image/png;base64...) 5.0%** en base diaria; coeficiente de determinación ![](data:image/png;base64...).
2. **Predicción de Granulometría (P80) en los feeders de alimentación al SAG:**
   * *Métrica principal:* Error Medio Absoluto (MAE) expresado en milímetros.
   * *Fórmula:*
     ![](data:image/png;base64...)
   * *Justificación:* Dado que el P80 fluctúa típicamente en un rango de tamaño físico de interés operacional para la eficiencia de la molienda (![](data:image/png;base64...)), el MAE entrega una métrica dimensional directa y físicamente interpretable por los ingenieros de molienda y metalurgistas de planta.
   * *Umbral de aceptación:* **MAE ![](data:image/png;base64...) 12.0 mm** en promedios de faja agregados por línea SAG; **MAE ![](data:image/png;base64...) 18.0 mm** para alimentadores individuales.7
3. **Estimación de Masa de la Pila (Inventario dinámico global):**
   * *Métrica principal:* Error Relativo de Inventario Sólido (ERIS) evaluado quincenalmente contra el levantamiento físico de dron.
   * *Fórmula:*
     ![](data:image/png;base64...)
   * *Justificación:* Compara directamente la masa seca integrada por el modelo dinámico frente a la masa volumétrica real calculada multiplicando el volumen obtenido en la nube de puntos del dron por la densidad aparente del lecho granular.13
   * *Umbral de aceptación:* **ERIS ![](data:image/png;base64...) 3.0%** de la masa total de la pila.13
4. **Distribución de Tiempos de Residencia (RTD):**
   * *Métrica principal:* Error Cuadrático Medio Normalizado (NRMSE) entre la respuesta de concentración medida del "trazador natural" a la salida de los feeders y el perfil simulado por el modelo de RTD.
   * *Umbral de aceptación:* **NRMSE ![](data:image/png;base64...) 0.15** (equivalente a un ajuste de fidelidad dinámica superior al 85% de la dinámica transitoria granular).

### 3.2 Metodología de validación sin trazadores físicos

En ausencia de trazadores sintéticos costosos o invasivos (RFID/químicos), el Gemelo Digital se validará sistemáticamente mediante técnicas estadísticas avanzadas utilizando las variables de operación de Las Bambas como trazadores naturales de proceso:

1. **Aprovechamiento de paradas operacionales críticas como trazadores de impulso (Delta de Dirac):** Cuando la chancadora primaria experimenta una parada abrupta por mantenimiento programado, la faja de alimentación de la pila se vacía instantáneamente. Este evento operacional genera una señal de caída de flujo a cero de tipo impulso o escalón de vaciado. El tiempo transcurrido desde el momento en que se detiene la alimentación de mineral fresco hasta que el nivel de la pila decae y el flujo de mineral fino o grueso en los feeders del SAG cambia, permite estimar directamente la respuesta dinámica de vaciado y verificar experimentalmente los parámetros de retardo de flujo pistón (![](data:image/png;base64...)) del modelo sin perturbar la operación normal de molienda.
2. **Monitoreo de transiciones drásticas en dominios metalúrgicos:** El cambio controlado de frentes de carguío en la mina mina (por ejemplo, el paso de un mineral skarn de cobre de ley promedio de ![](data:image/png;base64...) a un dominio de alta ley de bornita de ![](data:image/png;base64...) o con marcadas diferencias en el Bond Work Index) actúa como un trazador de escalón natural.1 Al registrarse la hora exacta de vaciado del camión con mineral de alta ley en la chancadora primaria, se monitorea el arribo de este frente de ley o dureza a la descarga de la pila mediante la respuesta del analizador de cobre en línea y la energía específica de molienda del molino SAG.1 El ajuste de las curvas temporales de arribo predichas por el gemelo digital contra las lecturas de planta permite calibrar dinámicamente la RTD del sistema en tiempo real.1
3. **Algoritmo automático de correlación cruzada de alta frecuencia:** Se implementa un cálculo continuo de correlación cruzada estadística entre la granulometría de entrada (PSD de faja medido por Split/WipWare) y variables directas del molino SAG aguas abajo (presión hidrostática de descansos de molino, consumo de potencia del motor del molino SAG, y tonelaje de pebbles de molienda evacuados).1 El desfase temporal dinámico (![](data:image/png;base64...)) que maximiza la función de correlación cruzada estadística representa el tiempo de residencia medio real del mineral granular para el nivel operativo instantáneo de la pila 1:
   ![](data:image/png;base64...)
   Este valor medido en continuo se compara con la salida de tiempo medio de residencia integrado por la RTD paramétrica para ajustar dinámicamente el factor de forma del canal activo de la pila.
4. **Balance de cierre metalúrgico periódico:** Se realiza mensualmente un balance estadístico retrospectivo de masa fina de cobre procesada en la planta de flotación (calculada como: ![](data:image/png;base64...) obtenida mediante balance de concentrado y colas finales). Este tonelaje neto de cobre metálico fino se contrasta con la suma matemática de los micro-lotes de ley de cobre simulados y extraídos por el Gemelo Digital durante el mismo período mensual, garantizando la consistencia y no generación/pérdida de metal dentro del simulador tridimensional del acopio.

### 3.3 Protocolo de calibración inicial del modelo

Antes del despliegue del Gemelo Digital en el entorno de producción en tiempo real del servidor de GPU on-premises, se debe ejecutar la siguiente metodología de calibración inicial:

1. **Preparación de base de datos histórica limpia:** Se requiere extraer del historiador de planta (PI System vía PI Web API) un conjunto de datos continuos de alta frecuencia de **al menos 45 a 60 días de operación continua** de la pila y la molienda de Las Bambas.7
2. **Aislamiento de períodos estáticos gravitacionales (Exclusión de tractores):** Para calibrar los parámetros mecánicos del flujo gravitacional natural de la pila, se deben identificar y filtrar todos los periodos históricos donde los tractores de empuje (*dozers*) estuvieron en operación activa (analizando el estado de telemetría de despacho de mina o aislando eventos con nivel de pila menor al 60% donde el SAG 2 mantuvo molienda estable). La calibración inicial de los ángulos de reposo dinámico (![](data:image/png;base64...)) y estático de reclamo (![](data:image/png;base64...)) debe realizarse exclusivamente sobre datos hidrodinámicos gravitacionales "no contaminados".
3. **Procedimiento para estimación inicial de parámetros de Live / Dead Stock:**
   * *Paso A:* Utilizar los ensayos de escala y referencias empíricas de la literatura minera para fijar un ángulo de reposo dinámico de partida ![](data:image/png;base64...) y un ángulo estático de reclamo de partida ![](data:image/png;base64...).14
   * *Paso B:* Aplicar la formulación de volumen útil de Ferreira et al. (2022) para definir un coeficiente de live stock inicial correspondiente al **18%** de la capacidad geométrica de la pila cónica de Las Bambas.13
   * *Paso C:* Correr el Modelo Espacial (ME) en modo retrospectivo sobre la base histórica limpia de 45 días utilizando estos ángulos de partida para generar el perfil topográfico de referencia.
4. **Optimización paramétrica de la RTD del Modelo Ligero:** Se ejecuta un algoritmo de ajuste no lineal de mínimos cuadrados (algoritmo Levenberg-Marquardt o Nelder-Mead) para estimar de manera óptima el número equivalente de reactores en serie (![](data:image/png;base64...)) y el retardo del flujo pistón (![](data:image/png;base64...)).3 El algoritmo minimiza recursivamente la diferencia entre la ley de cobre horaria simulada a la salida de los feeders y la ley de cobre medida por el muestreador metalúrgico en el rebose del hidrociclón del molino SAG (ajustada por el tiempo hidráulico del circuito de molienda).
5. **Criterio formal de aceptación para paso a operación en producción:** El modelo se catalogará como "Calibrado de forma inicial" y apto para ser conectado en lazo de lectura con PI System únicamente cuando cumpla en simultáneo con:
   * Un MAPE de predicción de leyes de cobre para un conjunto de validación histórica independiente de 15 días inferior al 6.5%.
   * Un error volumétrico de masa global menor al 3.0% frente al último levantamiento topográfico de dron disponible.13
   * Cero divergencias numéricas en el integrador de balance de masa seca tras una simulación continua de 48 horas.

### 3.4 Monitoreo de desempeño en producción

Para asegurar que el Gemelo Digital no sufra de degradación predictiva a lo largo de las campañas operativas, se establece el siguiente esquema de mantenimiento continuo en producción:

1. **Frecuencia recomendada para revisión de KPIs operacionales:**
   * *Frecuencia diaria (Automatizada):* El sistema procesa de forma automática un script al final de cada jornada calculando el MAPE diario de ley de Cu/Mo, el MAE del P80 de alimentación y la consistencia matemática del balance diario de masa. Los resultados se exportan como tags internos al PI System para visibilidad de la jefatura de metalurgia.
   * *Frecuencia quincenal (Manual/Ingeniería):* Un ingeniero metalurgista o administrador del gemelo digital revisará de manera formal la concordancia volumétrica del modelo espacial contra el último reporte fotogramétrico del dron.13
2. **Criterios y algoritmos para detectar deriva del modelo (Model Drift):** Se implementa el método estadístico de suma acumulativa (**CUSUM**) sobre los errores residuales diarios del balance neto de masa (![](data:image/png;base64...)).13 Si el valor acumulado CUSUM sobrepasa un umbral crítico de control parametrizado en un intervalo de confianza de tres desviaciones estándar (![](data:image/png;base64...)) de la calibración inicial durante 5 días seguidos, el sistema activará de forma automática una alarma en el dashboard indicando la presencia de "Model Drift" e identificando un potencial cambio no registrado en la densidad aparente del mineral, compactación excesiva por humedad o fallas de calibración en los pesómetros de salida.
3. **Gatillos y condiciones que disparan una recalibración forzada del sistema:**
   * **Gatillo A (Estructural):** Cambios mecánicos en la infraestructura física de la pila de Las Bambas (reemplazo o rediseño de las faldas de los feeders, ensanchamiento físico de las tolvas de descarga inferior o reemplazo de la faja de alimentación).
   * **Gatillo B (Geométrico):** Una desviación quincenal del volumen dinámico estimada en comparación con el levantamiento del dron superior al ![](data:image/png;base64...) 5.0% sostenida por más de dos mediciones de dron consecutivas.13
   * **Gatillo C (Litológico):** Transición a un nuevo dominio geológico principal de minado en Las Bambas que modifique de forma permanente la dureza promedio del mineral (un cambio sostenido mayor al 20% en el Bond Work Index medido en el circuito de molienda por más de 7 días).
4. **Dashboard de monitoreo de desempeño recomendado para operadores:** Para asegurar que la herramienta asista efectivamente a la toma de decisiones, se diseña un entorno visual dinámico e interactivo (Páginas Web HTML5 integradas en PI Vision o paneles locales en sala de control) que despliega los siguientes componentes gráficos:
   * *Renderizado 3D dinámico de la pila:* Una vista espacial interactiva que represente la elevación simulada por el autómata celular, coloreando con tonos cálidos las zonas de mineral activo en movimiento gravitacional continuo (*live stock*) y con tonos grises y fríos el talud inactivo estático (*dead stock*).18
   * *Barra predictiva "Look-Ahead" de alimentación:* Un visualizador de tendencia temporal que muestre con 2 horas de anticipación la ley proyectada de cobre y molibdeno, el P80 estimado de entrada 7 y la dureza metalúrgica (BWi) del mineral que ingresará a cada línea del molino SAG. Esto permite a los operadores pre-ajustar preventivamente el set-point de carga de bolas, velocidad de rotación o agua de molienda antes del impacto físico del cambio litológico en el molino.
   * *Semáforo de alarmas de flujo:* Alertas visuales sobre la boca de cada uno de los 8 feeders para prevenir eventos de atascamiento (*bridging*) o chimeneas estáticas (*ratholes*), detectando automáticamente condiciones anómalas donde el feeder está activo operando a alta corriente pero con flujo másico real tendiendo a cero en el pesómetro de salida.

### 3.5 Validación específica del Modelo Espacial (ME)

La precisión geométrica del Modelo Espacial (ME) de sectores radiales por capas horizontales ejecutado bajo demanda en el servidor con GPU se validará sistemáticamente mediante el siguiente procedimiento de control espacial contra la fotogrametría del dron 13:

1. **Alineación de mallas en entorno SIG / CAD local:** Al recibir el archivo raster de elevación (formato geoTIFF o archivo de puntos ASCII) procesado a partir del levantamiento fotogramétrico por dron de Las Bambas 13, se alinea el sistema de coordenadas locales con la grilla del Modelo Espacial.
2. **Cálculo de error de elevación por celda espacial:** El Modelo Espacial calcula de forma automatizada para cada celda bidimensional en el plano horizontal (![](data:image/png;base64...)) la desviación de elevación absoluta ![](data:image/png;base64...):

![](data:image/png;base64...)

1. **Métricas de aprobación espacial requeridas:**
   * Al menos el **85% de las celdas activas** de la pila deben reportar un error absoluto de elevación ![](data:image/png;base64...).
   * El error cuadrático medio global de la superficie estimada por el modelo frente a la nube de puntos del dron debe ser inferior a ![](data:image/png;base64...).
2. **Algoritmo de reconciliación espacial y corrección de propagación de error:** Los errores en la estimación de la masa y el volumen de la pila se acumulan a lo largo del ciclo quincenal de simulación en lazo abierto. Esta diferencia volumétrica distorsiona la ubicación tridimensional exacta de los frentes metalúrgicos (leyes, durezas) asignados a cada celda.7 Para corregir esta desviación, cada vez que se carga un levantamiento topográfico real de dron, el Gemelo Digital ejecuta un proceso de reconciliación espacial retrospectivo (*back-propagation volumétrico*) 7:
   * El modelo espacial ajusta las masas contenidas en cada celda del autómata celular multiplicando un factor de escala correctivo de masa residual de manera uniforme a lo largo de las capas tridimensionales del lecho.7
   * La corrección geométrica resguarda de forma estricta la ley mineralógica asignada a cada bloque de mineral.7 Al corregirse la topografía del cono, las leyes de cobre e índices de trabajo de Bond asignados a las capas internas se re-alinean espacialmente con la nueva cota del dron, evitando que el error de balance acumulado altere las estimaciones de ley y granulometría profunda antes de que el mineral sea finalmente extraído por los alimentadores inferiores de los molinos SAG.7

#### Works cited

1. Tracking Hardness and Size: Measuring and Monitoring ROM Ore Properties at Highland Valley Copper - WipWare, accessed June 4, 2026, <https://www.wipware.com/wp-content/uploads/2018/01/Measuring-ROM-Highland-Valley-Copper.pdf>
2. Process simulation to determine blending and residence time distribution in mineral processing plants | Request PDF - ResearchGate, accessed June 4, 2026, <https://www.researchgate.net/publication/362905199_Process_simulation_to_determine_blending_and_residence_time_distribution_in_mineral_processing_plants>
3. AN EVALUATION OF THE EFFECT OF BLAST-GENERATED FRAGMENT SIZE DISTRIBUTION ON THE UNIT COSTS OF A MINING OPERATION, USING MODELIN - CORE, accessed June 4, 2026, <https://files01.core.ac.uk/download/pdf/276264317.pdf>
4. A 3D cellular automata ore stockpile model – Part 2: Simulation and industrial validation of dynamic discharging and trajectory segregation mechanisms - UQ eSpace, accessed June 4, 2026, [https://espace.library.uq.edu.au/view/UQ:ae822a5](https://espace.library.uq.edu.au/view/UQ%3Aae822a5)
5. A 3D cellular automata ore stockpile model - Part 1: Simulation of size segregation, accessed June 4, 2026, <https://ui.adsabs.harvard.edu/abs/2022MiEng.18707816Y/abstract>
6. Developing a 3-D dynamic stockpile/bin model with size segregation for dry comminution circuit | Request PDF - ResearchGate, accessed June 4, 2026, <https://www.researchgate.net/publication/363439870_Developing_a_3-D_dynamic_stockpilebin_model_with_size_segregation_for_dry_comminution_circuit>
7. Developing a 3-D dynamic stockpile/bin model with ... - UQ eSpace, accessed June 4, 2026, [https://espace.library.uq.edu.au/view/UQ:40c2222/s4449954\_phd\_thesis.pdf](https://espace.library.uq.edu.au/view/UQ%3A40c2222/s4449954_phd_thesis.pdf)
8. Cellular Automata in Bulk Stacking Simulation | PDF | Friction | Mass - Scribd, accessed June 4, 2026, <https://www.scribd.com/document/651298328/47301ec76efc01908befd674d8176ab8>
9. recrystallization, simulation, grain growth, FEM, recovery, texture, microstructure, Potts, Monte Carlo, stored energy, grain boundary, crystal plasticity - Dierk Raabe, accessed June 4, 2026, <https://www.dierk-raabe.com/resources/reprints/cellular-automata/>
10. Segregation Modeling in Stockpile Using Discrete Element Method | Semantic Scholar, accessed June 4, 2026, <https://www.semanticscholar.org/paper/Segregation-Modeling-in-Stockpile-Using-Discrete-G%C3%B3mez-Skrzypkowski/adaec41c89d8ba702a6eb1abbe5d53311f75bd87>
11. Determination of the Angle of Repose and Coefficient of Rolling Friction for Wood Pellets, accessed June 4, 2026, <https://www.mdpi.com/2073-4395/12/2/424>
12. Calculating Stockpile Capacity - 911Metallurgist, accessed June 4, 2026, <https://www.911metallurgist.com/blog/calculating-stockpile-capacity/>
13. Live volume of conical stockpile reclaimed by gravity - Research, Society and Development, accessed June 4, 2026, <https://rsdjournal.org/rsd/article/download/28908/25055/332357>
14. Live volume of conical stockpile reclaimed by gravity - ResearchGate, accessed June 4, 2026, <https://www.researchgate.net/publication/360149507_Live_volume_of_conical_stockpile_reclaimed_by_gravity>
15. Successfully scale up solids handling - ResearchGate, accessed June 4, 2026, <https://www.researchgate.net/publication/282885965_Successfully_scale_up_solids_handling>
16. Drag Feeders & Reclaim Feeders - McLanahan, accessed June 4, 2026, <https://www.mclanahan.com/products/drag-feeders-reclaim-feeders>
17. Stockpile Dozer Trap Reclaim Feeder | PDF | Belt (Mechanical) - Scribd, accessed June 4, 2026, <https://www.scribd.com/document/705383014/Robust-Stockpile-Reclaim-Dozer-Trap>
18. Coal Quality Management Model For Dome Storage (DS-CQMM) - WVU Research Repository - West Virginia University, accessed June 4, 2026, <https://researchrepository.wvu.edu/cgi/viewcontent.cgi?article=2940&context=faculty_publications>