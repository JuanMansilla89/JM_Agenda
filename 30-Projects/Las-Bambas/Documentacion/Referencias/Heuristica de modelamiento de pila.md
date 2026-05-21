## 1) Contexto operacional

En una planta de cobre después de chancadora primaria, la pila gruesa cumple tres funciones centrales: **buffer** entre mina/chancado y molienda, **desacople dinámico** entre equipos con disponibilidades distintas, y **mezcla/blending parcial** del mineral antes de alimentar los molinos. En la práctica, además, la pila actúa como un activo de almacenamiento con zonas activas y zonas de baja movilidad, por lo que no todo el tonelaje almacenado tiene el mismo comportamiento dinámico. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0169743904001066?utm_source=chatgpt.com "How much would a blending stockpile reduce variation? - ScienceDirect"))

Operacionalmente, conviene distinguir entre **live stock** y **dead stock**. El live stock es la fracción realmente recuperable en la ventana operativa normal; el dead stock es la masa residual o de muy baja movilidad que permanece por restricciones geométricas y patrón de flujo. En sistemas de descarga gravitacional sobre tolvas o feeders, los patrones reales tienden a parecerse más a **funnel flow** o **mixed flow** que a mass flow ideal, lo que explica por qué aparecen zonas muertas y tiempos de residencia amplios. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0009250918305979?utm_source=chatgpt.com "A review on gravity flow of free-flowing granular solids in silos – Basics and practical aspects - ScienceDirect"))

Las variables mínimas relevantes son: nivel o perfil de pila, caudal de alimentación desde chancado, caudal de extracción hacia feeders/SAG, PSD o al menos fracción coarse/fine, humedad, densidad aparente, estado operativo de correa/feeder/chancadora, y atributos de calidad como ley Cu, Mo, dureza o índices geometalúrgicos. Tu enfoque actual ya integra nivel de pila, ventanas de 30 min, masa estimada y toneladas SAG, lo cual es una buena base para evolucionar a un modelo dinámico más rico.

## 2) Enfoques de modelamiento

### a) Modelos simplificados

**FIFO / pseudo-FIFO.**  
Es el punto de partida más común porque es simple, explicable y computacionalmente barato. La idea es que el material entra y sale conservando aproximadamente el orden de llegada. Tu heurística actual cae en esta familia: calcula la “masa por delante” en chancadora, correa, pila y feeders, y desde ahí estima el retardo hasta SAG. Sin embargo, en pilas reales este supuesto falla porque el material descargado cerca del eje de extracción puede salir antes que material apilado antes pero ubicado en los flancos, y porque la descarga genera conos de flujo con zonas estancadas. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0032591023007234?utm_source=chatgpt.com "A numerical sensitivity study – The effectiveness of RFID-based ore tracking through a simulated coarse ore stockpile and the impacts of key process variables - ScienceDirect"))

**Modelos de tiempo de residencia.**  
Sustituyen la lógica determinista de “primero entra, primero sale” por una **distribución de tiempos de residencia**. En vez de asignar a cada tonelada un solo delay, se le asigna una probabilidad (E(\tau)) de salir después de un tiempo (\tau). Esto representa mucho mejor una pila real, donde coexistien material joven y viejo en la descarga. La literatura de flujo granular muestra justamente que el patrón de descarga determina el ancho de la RTD; funnel flow produce RTD más ancha y más cola larga que mass flow. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0009250918305979?utm_source=chatgpt.com "A review on gravity flow of free-flowing granular solids in silos – Basics and practical aspects - ScienceDirect"))

**Balance de masa dinámico (ODEs / DAEs).**  
Es el siguiente escalón industrial. La variable de estado es la masa almacenada:  
[  
\frac{dM(t)}{dt}=F_{in}(t)-F_{out}(t)  
]  
y si se rastrea una propiedad (g) (ley, dureza, humedad), una formulación lumped sería:  
[  
\frac{d(M\bar g)}{dt}=F_{in}g_{in}-F_{out}g_{out}  
]  
El reto no está en la ecuación de masa, sino en cómo cerrar (g_{out}): con FIFO, mezcla perfecta, mezcla parcial o modelo espacial. Los entornos de simulación dinámica industriales suelen basarse en esta familia de ecuaciones diferenciales o discretización temporal equivalente. METSIM, por ejemplo, describe su dinámica como una aproximación de flujosheets dinámicos con paso temporal corto respecto al tiempo de residencia dominante. ([METSIM](https://metsim.com/products/dynamic-simulation-heap-leaching-module/?utm_source=chatgpt.com "Dynamic Simulation & Heap Leaching Module - METSIM"))

**Modelos basados en nivel.**  
Usan sensores de nivel como proxy del inventario y del tiempo de permanencia. Es la familia donde hoy estás operando: nivel → masa estimada → tiempo de residencia por regresión. Es un enfoque válido cuando no hay topografía continua ni instrumentación espacial de la pila, pero su robustez cae cuando cambia la densidad aparente, la geometría efectiva, el patrón de descarga o la PSD. Tus propios documentos lo reconocen al asumir densidad constante y construir la relación a partir de medianas y regresión lineal/polinomial.

### b) Modelos de mezcla

**Perfect mixing.**  
La pila se trata como un tanque perfectamente mezclado:  
[  
g_{out}(t)=\bar g(t)  
]  
Es útil para análisis rápidos y control de primer nivel, pero suele ser demasiado difusivo: sobremezcla el sistema y subestima la persistencia de lotes. Para una pila gruesa pre-SAG suele ser físicamente demasiado optimista. ([MDPI](https://www.mdpi.com/2075-163X/11/5/524?utm_source=chatgpt.com "Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking | MDPI"))

**Partial mixing.**  
Es la opción intermedia más pragmática. Se divide la masa en una fracción bien mezclada y otra convectiva o estratificada. Puede escribirse como:  
[  
g_{out}(t)=\alpha, g_{\text{conv}}(t)+(1-\alpha),\bar g(t)  
]  
donde (\alpha) se calibra con trazadores, reconciliación metalúrgica o campañas RFID. Esta familia suele capturar mejor la realidad de pilas con funnel flow y mezcla limitada. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0032591023007234?utm_source=chatgpt.com "A numerical sensitivity study – The effectiveness of RFID-based ore tracking through a simulated coarse ore stockpile and the impacts of key process variables - ScienceDirect"))

**Modelos de dispersión / mezcla axial.**  
Representan el avance del material no solo por convección sino también por dispersión:  
[  
\frac{\partial c}{\partial t}+v\frac{\partial c}{\partial x}=D\frac{\partial^2 c}{\partial x^2}  
]  
Conceptualmente son muy útiles para pasar de FIFO puro a “plug flow con dispersión”, y suelen ser una buena abstracción para colas, correas y, de forma agregada, para la fracción activa de una pila. No reemplazan el modelamiento granular interno, pero sí mejoran mucho la trazabilidad de atributos. La idea de usar RTD ancha y dispersión para sistemas con funnel/mixed flow está bien respaldada por la literatura de flujo granular y de tracking en stockpiles. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0009250918305979?utm_source=chatgpt.com "A review on gravity flow of free-flowing granular solids in silos – Basics and practical aspects - ScienceDirect"))

**Blending y tracking de ley.**  
Cuando el objetivo ya no es solo tonelaje sino **atributos** —ley, dureza, Axb, humedad, contaminantes— el stockpile debe tratarse como una unidad de transformación estadística: no cambia el metal contenido, pero sí la distribución temporal de salida. Trabajos sobre blending stockpiles muestran que la pila reduce variación a escalas moderadas, aunque puede introducir ciclos de variabilidad asociados al patrón de reclaim. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0169743904001066?utm_source=chatgpt.com "How much would a blending stockpile reduce variation? - ScienceDirect"))

### c) Modelos físicos

**DEM.**  
El método de elementos discretos es el estándar de mayor fidelidad para granularidad. Resuelve interacciones partícula-partícula y partícula-equipo, permitiendo capturar segregación, formación de cono de descarga, funnel flow, zonas estancadas y sensibilidad a tamaño de partícula, altura de descarga y geometría. Estudios recientes muestran explícitamente la segregación coarse/fine en stockpiles y el impacto de la composición granulométrica y la altura de alimentación. ([MDPI](https://www.mdpi.com/2076-3417/12/23/12449?utm_source=chatgpt.com "Segregation Modeling in Stockpile Using Discrete Element Method"))

Su problema es costo computacional y calibración. Para uso operativo continuo en una planta, DEM puro suele ser excesivo si pretendes correr en tiempo real con toneladas reales y meses de operación. Se usa mejor como **motor de calibración off-line**: derivar parámetros efectivos de dispersión, zonas activas, dead stock y RTD; luego trasladarlos a un surrogate model. ([MDPI](https://www.mdpi.com/2075-163X/11/5/524?utm_source=chatgpt.com "Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking | MDPI"))

**Modelos geométricos 3D de pila.**  
Representan la pila como volumen, superficie o voxels/celdas con atributos de masa y calidad. Son muy útiles cuando existe escaneo de superficie, LIDAR, radar multicapa o reconciliación topográfica periódica. Hay literatura de modelamiento 3D continuo para quality calculation y gestión de stockpiles con geometría explícita y slicing de reclaim. ([ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0301751615000952?utm_source=chatgpt.com "3D stockpile modelling and quality calculation for continuous stockpile management - ScienceDirect"))

**Segmentación espacial (layers / slices / cells).**  
Es probablemente la mejor relación valor/complejidad. La pila se discretiza en capas, sectores radiales o celdas 3D; cada celda almacena masa y atributos; la alimentación deposita material en una región; la extracción remueve según una regla de flujo calibrada. Los modelos 3D de autómata celular para stockpiles demuestran precisamente que se puede capturar formación, segregación y descarga dinámica con costo compatible con aplicaciones casi en tiempo real y digital twins. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0892687522004265?utm_source=chatgpt.com "A 3D cellular automata ore stockpile model – Part 1: Simulation of size segregation - ScienceDirect"))

### d) Modelos híbridos industriales

En simuladores comerciales de procesos, el enfoque dominante históricamente ha sido **flowsheet dinámico + inventarios lumped + lógica de control**, más que una física granular detallada del stockpile. JKSimMet se posiciona como simulador de circuitos de conminución y clasificación, fuerte en balances, fitting y performance de equipos, pero no como motor detallado de granularidad interna de stockpiles. ([JKTech](https://jktech.com.au/products/software?utm_source=chatgpt.com "Software - JKTech - University of Queensland")) METSIM sí explicita su enfoque de dinámica temporal basada en timestep y controladores/schedules, lo que lo hace cercano a modelos inventario–caudal–retardo. ([METSIM](https://metsim.com/products/dynamic-simulation-heap-leaching-module/?utm_source=chatgpt.com "Dynamic Simulation & Heap Leaching Module - METSIM"))

El salto reciente en digital twins mineros no ha sido reemplazar eso con DEM puro, sino usar **representaciones por pseudo-partículas o partículas distribuidas + reducción de orden + sensores en línea**. El trabajo de “Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking” es especialmente relevante para tu caso: modela transporte mine-to-mill, usa pseudo-partículas para rastrear lotes y advierte explícitamente que **FIFO o perfect mixing no son adecuados** cuando el material se dispersa sobre una pila y luego descarga por cono/funnel. ([MDPI](https://www.mdpi.com/2075-163X/11/5/524?utm_source=chatgpt.com "Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking | MDPI"))

## 3) Trazabilidad del material: chancadora → pila → SAG

La cadena física que debes modelar no es una sola unidad, sino una secuencia de estados:

[  
\text{Camión} \rightarrow \text{Chancadora} \rightarrow \text{Correa de descarga} \rightarrow \text{Pila} \rightarrow \text{Feeders} \rightarrow \text{Correa SAG} \rightarrow \text{Molino}  
]

Tu modelo actual ya incorpora esa lógica de “masa por delante” incluyendo chancadora, correa, pila y feeders. El problema es que solo la parte de correas se comporta razonablemente como transporte convectivo casi determinista; la pila introduce mezcla, dispersión, zonas muertas y trayectorias no uniformes. Por eso, si quieres trazabilidad seria de variables de mina hasta SAG, debes separar conceptualmente tres regímenes:

1. **Transporte convectivo de baja mezcla**: chancadora y correas.
    
2. **Almacenamiento granular con mezcla parcial**: pila.
    
3. **Extracción controlada y readvance convectivo**: feeders y correa SAG.  
    Esto es consistente con la literatura de digital twins mine-to-mill y con la evidencia de que el stockpile es el principal “blind spot” del tracking de material. ([MDPI](https://www.mdpi.com/2075-163X/11/5/524?utm_source=chatgpt.com "Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking | MDPI"))
    

### Limitaciones del FIFO en pilas reales

FIFO falla por cuatro razones duras:
- la descarga genera un **cono de flujo** y no una remoción uniforme del volumen; ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0032591023007234?utm_source=chatgpt.com "A numerical sensitivity study – The effectiveness of RFID-based ore tracking through a simulated coarse ore stockpile and the impacts of key process variables - ScienceDirect"))
- aparecen **stagnant zones / dead stock** en sectores periféricos o cerca de muros; ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0009250918305979?utm_source=chatgpt.com "A review on gravity flow of free-flowing granular solids in silos – Basics and practical aspects - ScienceDirect"))
- la alimentación genera **dispersión y segregación** al depositarse sobre la superficie; ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0892687522004265?utm_source=chatgpt.com "A 3D cellular automata ore stockpile model – Part 1: Simulation of size segregation - ScienceDirect"))
    
- el lote que cae cerca del eje de extracción puede salir antes que material depositado antes en otras zonas. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0032591023007234?utm_source=chatgpt.com "A numerical sensitivity study – The effectiveness of RFID-based ore tracking through a simulated coarse ore stockpile and the impacts of key process variables - ScienceDirect"))
    

### Cómo incorporar tiempo de residencia, mezcla, recirculación y masa muerta

La forma más operativa es modelar la pila como una unidad con:
- inventario total (M),
- inventario activo (M_a),
- inventario muerto (M_d),
- distribución de edad (A(\tau,t)),
- distribución de atributos (q(\mathbf{x},t)) o equivalente por celdas.

Un esquema mínimo podría ser:

$$
M(t)=M_a(t)+M_d(t)
$$

$$
\frac{dM_a}{dt}=F_{in}(t)-F_{out}(t)-\phi_{ad}(t)+\phi_{da}(t)  
$$

donde ($\phi_{ad}) y (\phi_{da}$) representan transferencia entre zona activa y semi-estancada si quieres un modelo de dos compartimentos. Para trazabilidad de un atributo (g):

$$
\frac{d(M_a \bar g_a)}{dt}=F_{in}g_{in}-F_{out}g_{out}-\phi_{ad}g_a+\phi_{da}g_d  
$$

Si quieres algo más físico sin irte a DEM, la mejora de mayor retorno es una **RTD dependiente del nivel**:  
$$
g_{out}(t)=\int_0^\infty g_{in}(t-\tau),E(\tau \mid h(t),F_{in},F_{out}),d\tau  
$$
Aquí (E(\tau)) cambia con el nivel de pila, tasas de entrada/salida y modo operativo. Ese salto ya te saca del FIFO rígido y sigue siendo implementable en producción.

## 4) Relación nivel – masa – tiempo

### Cómo estimar masa desde nivel

Hay cuatro familias:

**1. Regresión empírica nivel → masa.**  
Es lo que hoy tienes. Funciona cuando el régimen operativo es estable y la geometría efectiva no cambia demasiado. Tus documentos mencionan construcción de medianas por intervalos de nivel, banda de dispersión y regresión lineal/polinomial.

**2. Modelo geométrico.**  
Si conoces la geometría base y la superficie de la pila, puedes usar:  
$$
M=\rho_b , V(h)  
$$
donde (V(h)) es el volumen ocupado para un nivel (h), y (\rho_b) es densidad aparente. Esto mejora mucho frente a regresión pura, pero exige mejor geometría y manejo explícito de la densidad.

**3. Modelo geométrico + topografía/surface sensing.**  
Radar/LIDAR/escáner de perfil permiten corregir deriva del modelo. El trabajo de digital twin con pseudo-partículas señala precisamente que el modelo de superficie debe corregirse con mediciones online para evitar drift del estado. ([MDPI](https://www.mdpi.com/2075-163X/11/5/524?utm_source=chatgpt.com "Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking | MDPI"))

**4. Modelo espacial por celdas.**  
La masa se calcula como suma de celdas ocupadas:  
$$
M=\sum_i \rho_{b,i} V_i  
$$
y la relación con nivel pasa a ser derivada, no primaria.

### Relación nivel–tiempo de residencia

Empíricamente suele existir correlación positiva: más nivel, mayor inventario activo, mayor edad media del material. Pero esa relación rara vez es lineal universal. Depende de live stock, posición del punto de descarga, caudal de extracción y patrón de flujo. Tu heurística usa justamente una regresión entre nivel y tiempo de estancia, lo que es coherente como aproximación de primer orden.

La limitación es que **igual nivel no implica igual edad media ni igual RTD** si cambió el patrón operativo. Dos escenarios con 70% de nivel pueden tener tiempos de residencia distintos si cambió el reclaim rate, hubo paradas, o el material entró con otra PSD/humedad. La literatura reciente sobre stockpiles dinámicos y simulación distribuida muestra precisamente que la historia operacional importa, no solo el estado instantáneo. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S089268752300170X?utm_source=chatgpt.com "A 3D cellular automata ore stockpile model – Part 2: Simulation and industrial validation of dynamic discharging and trajectory segregation mechanisms - ScienceDirect"))

### Limitación de asumir densidad constante

Es una simplificación fuerte. La densidad aparente cambia con PSD, humedad, compactación, segregación y localización dentro de la pila. En una pila coarse ore, coarse/fine no se distribuyen homogéneamente; por tanto, una única (\rho_b) introduce sesgo en (M(h)). Estudios de segregación y modelos CA/DEM muestran que el apilamiento genera distribución espacial no uniforme de tamaños, y eso afecta propiedades volumétricas y de flujo. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0892687522004265?utm_source=chatgpt.com "A 3D cellular automata ore stockpile model – Part 1: Simulation of size segregation - ScienceDirect"))

## 5) Problemas reales en pilas

### Segregación coarse/fin
Es probablemente el fenómeno más importante que un modelo heurístico temporal no captura. En apilamiento por gravedad, las partículas gruesas tienden a rodar hacia la periferia y las finas a concentrarse más cerca del centro o de ciertas capas, dependiendo del mecanismo dominante. Esto altera tanto la granulometría del reclaim como atributos correlacionados con tamaño o litología. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0892687522004265?utm_source=chatgpt.com "A 3D cellular automata ore stockpile model – Part 1: Simulation of size segregation - ScienceDirect"))

### Zonas muertas
En descarga tipo funnel o mixed flow, parte del material cerca de bordes o zonas bajas puede permanecer casi inmóvil hasta que la pila baja lo suficiente o cambia la geometría del cono de extracción. Eso ensancha la RTD y produce colas largas de residencia. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0009250918305979?utm_source=chatgpt.com "A review on gravity flow of free-flowing granular solids in silos – Basics and practical aspects - ScienceDirect"))

### Método de apilamiento
Cone-shell, chevron y windrow no son equivalentes. Fuentes de ingeniería de stockyards muestran que **chevron** y especialmente **windrow** tienden a mejorar homogenización frente a cone-shell, mientras que cone-shell presenta más riesgo de segregación y menor blending efficiency. ([ScienceDirect](https://www.sciencedirect.com/topics/engineering/stockyard?utm_source=chatgpt.com "Stockyard - an overview | ScienceDirect Topics"))

### Impacto en feed SAG
La consecuencia no es solo geometalúrgica; es operacional. Si la pila entrega pulsos de coarse ore, cambios de humedad o variación de dureza/ley, el SAG lo ve como perturbación de throughput, power draw y estabilidad del circuito. La literatura de material tracking en digital twins enfatiza justamente que el valor del tracking no está en saber “de qué camión vino”, sino en anticipar cómo la composición temporal del feed afecta desempeño energético y metalúrgico. ([MDPI](https://www.mdpi.com/2075-163X/11/5/524?utm_source=chatgpt.com "Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking | MDPI"))

## 6) Casos de uso industriales y nivel de precisión

En práctica industrial, lo más común no es encontrar un “gemelo DEM completo” de la pila coarse ore corriendo online. Lo habitual es uno de estos tres niveles:

**Nivel 1: Inventario + delays + blending promedio.**  
Es el estándar más extendido por costo/beneficio. Funciona bien para reconciliación y reporting operativo.

**Nivel 2: RTD / mezcla parcial / tracking de lotes.**  
Se usa cuando el negocio necesita trazabilidad de calidad o variabilidad del feed. Aquí ya entran pseudo-partículas, batch tracking o RFID/surrogates.

**Nivel 3: Modelo granular calibrado.**  
DEM o CA 3D calibrado con datos de planta, usualmente off-line o en forma reducida para operación.

La evidencia publicada muestra que los modelos 3D CA pueden predecir altura y sesgo granulométrico durante meses de operación industrial, y además se promueven como suficientemente rápidos para aplicaciones cercanas a tiempo real. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S089268752300170X?utm_source=chatgpt.com "A 3D cellular automata ore stockpile model – Part 2: Simulation and industrial validation of dynamic discharging and trajectory segregation mechanisms - ScienceDirect")) Tu heurística actual, con precisión de ~80% y alta variabilidad, está en una zona razonable de madurez para un **Nivel 1.5**: ya es más que un balance estático, pero todavía no representa mezcla ni estructura interna.

## 7) Propuesta de arquitectura para un digital twin de pila

Mi recomendación corporativa es **no saltar directo a DEM online**. El roadmap de mayor retorno sería:

### V1 — Modelo dinámico lumped con RTD dependiente del nivel

Componentes:
- balance de masa dinámico,
- cálculo de inventario por nivel,
- separación live/dead stock,
- RTD paramétrica (E(\tau \mid h, F_{in}, F_{out})),
- tracking de atributos promedio y por lotes discretos.

Ventaja: bajo costo, rápida implementación, ya mejora de forma material tu heurística actual.

### V2 — Modelo de compartimentos o celdas 2.5D
Componentes
- pila discretizada en sectores/capas,
- reglas de depósito sobre superficie,
- reglas de reclaim por cono de extracción    
- mezcla parcial entre celdas,
- tracking por pseudo-partículas o micro-batches.

Ventaja: capta historia espacial, funnel flow y sesgo de salida sin llegar al costo de DEM.

### V3 — Gemelo híbrido calibrado con física granular
Componentes:
- campañas DEM/CA off-line,
- calibración de parámetros efectivos de segregación, dispersión, dead stock y patrón de reclaim,
- surrogate en línea embebido en el twin.

Ventaja: máxima consistencia física sin pretender correr DEM crudo en producción 24/7. Este enfoque está alineado con la tendencia de digital twins con pseudo-partículas y reducción de orden. ([MDPI](https://www.mdpi.com/2075-163X/11/5/524?utm_source=chatgpt.com "Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking | MDPI"))

### Variables mínimas requeridas
Para V1:
- timestamp unificado,
- caudal desde chancadora,
- caudal a feeders/SAG,
- nivel de pila,
- estados operativos de chancadora/correas/feeders,
- densidad aparente base,
- estimación de dead stock.

Para V2:
- todo lo anterior, más
- geometría/base de la pila,
- posición/patrón de descarga,
- ubicación/configuración de feeders,
- PSD coarse/fine o al menos fracciones gruesa/fina,
- topografía o perfil periódico.

Para V3:
- todo lo anterior, más
- campañas de calibración con trazadores/RFID,
- parámetros de contacto/material si se usa DEM,
- validación de residencia y segregación bajo distintos regímenes.

### Trade-off precisión vs complejidad

|Enfoque|Realismo físico|Complejidad|Costo computacional|Explicabilidad|Uso recomendado|
|---|--:|--:|--:|--:|---|
|FIFO / delay fijo|Bajo|Muy bajo|Muy bajo|Muy alto|Quick wins, reporting|
|RTD + balance dinámico|Medio|Bajo|Bajo|Alto|Producción online|
|Compartimentos / celdas|Medio-alto|Medio|Medio|Medio-alto|Digital twin operativo|
|CA 3D|Alto|Medio-alto|Medio|Medio|Surrogate avanzado / near real-time|
|DEM puro|Muy alto|Muy alto|Muy alto|Medio|Calibración off-line|

La tabla resume bien el caso de negocio: para una pila coarse ore pre-SAG, el mejor punto de equilibrio suele ser **RTD + compartimentos**, calibrado con campañas físicas. ([ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0892687522004265?utm_source=chatgpt.com "A 3D cellular automata ore stockpile model – Part 1: Simulation of size segregation - ScienceDirect"))

## 8) Recomendación final

La recomendación técnica neta es esta:

1. **Mantén tu heurística actual como baseline operacional**, porque ya entrega valor y usa señales disponibles.
2. **Reemplaza el supuesto FIFO rígido por una RTD dependiente del nivel y del régimen operativo.** Ese es el salto con mejor ROI.
3. **Separa explícitamente live stock y dead stock.** No lo dejes implícito solo en una masa muerta fija; conviértelo en parámetro de modelo calibrable.
4. **Introduce una discretización mínima de la pila** en capas/sectores o micro-batches para rastrear atributos de calidad, no solo tiempo.
5. **Usa DEM o CA 3D solo como herramienta de calibración y validación**, no como motor online principal, salvo que el alcance del producto justifique ese costo.
6. **Valida con campañas de trazadores o reconciliación de lotes**: sin esto, cualquier mejora seguirá siendo elegante pero no auditable.k

En términos de arquitectura de producto, yo implementaría:
- **V1 en producción**: balance dinámico + RTD + live/dead stock + tracking de batches.
- **V2 en I+D aplicada**: pila 2.5D por celdas.
- **V3 para diferenciación competitiva**: surrogate calibrado por CA/DEM.

Ese stack te mueve desde una **heurística temporal** hacia un **gemelo de almacenamiento granular físicamente consistente**, sin romper viabilidad computacional ni cronograma.

### Diagrama conceptual

```text
Camiones / mina
   ↓
Chancadora primaria
   ↓  (delay casi convectivo)
Correa descarga
   ↓
Pila coarse ore
   ├─ depósito sobre superficie
   ├─ segregación coarse/fine
   ├─ mezcla parcial
   ├─ zonas activas
   └─ dead stock / funnel flow
   ↓
Feeders / reclaim
   ↓
Correa alimentación SAG
   ↓
Molino SAG
```

### Fórmula de arquitectura recomendada

```text
Salida a SAG(t)
= Convolución[Entrada chancadora(t), RTD_pila(t)]
+ corrección por mezcla parcial
+ corrección por dead stock
+ corrección por estado operativo
```

Si quieres, el siguiente paso lo convierto en un **diseño técnico implementable**: entidades del modelo, ecuaciones discretizadas cada 1–5 min, parámetros calibrables, estrategia de validación y pseudocódigo para Python o C#.