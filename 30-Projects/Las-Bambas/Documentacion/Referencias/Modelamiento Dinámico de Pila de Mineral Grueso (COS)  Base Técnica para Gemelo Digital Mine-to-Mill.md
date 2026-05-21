
## Resumen Ejecutivo

La pila de mineral grueso (*Coarse Ore Stockpile*, COS) ubicada entre la chancadora primaria y la alimentación al molino SAG es uno de los elementos con mayor impacto operacional en una planta concentradora de cobre. Funciona simultáneamente como buffer de desacople, almacenamiento temporal, zona de mezcla parcial y modificador de la distribución temporal de calidad del mineral que llega al SAG. A pesar de su centralidad, su modelamiento dinámico ha sido históricamente simplificado o ignorado en los sistemas de control y gemelos digitales de plantas.

Esta investigación sustenta una propuesta de I+D para desarrollar un modelo dinámico de pila COS aplicable dentro de un gemelo digital mine-to-mill. Se identifican tres niveles de complejidad, desde heurísticas básicas (balance de masa, FIFO, delay dependiente del nivel) hasta modelos avanzados (autómatas celulares 3D, DEM, surrogate models calibrados). La evidencia técnica y académica más relevante proviene del grupo JKMRC (Universidad de Queensland), que publicó entre 2022 y 2025 el modelo de autómata celular continuo (CCA) para pilas con segregación granulométrica, y del trabajo de Servin et al. (2021) sobre gemelos digitales con partículas distribuidas para trazabilidad mine-to-mill. La industria ya cuenta con soluciones como IntelliSense.io SIO, NTWIST y Maptek MaterialMRT que implementan modelos 3D de bloques en tiempo real.[^1][^2][^3][^4][^5][^6][^7][^8][^9][^10][^11]

La arquitectura de solución propuesta evoluciona en cuatro versiones (V1–V4), con un quick win alcanzable en 4–6 semanas y una evolución hacia modelo espacial avanzado en 6–12 meses. Los datos mínimos requeridos para V1 son accesibles con instrumentación estándar de planta.

***

## Marco Conceptual

### El Rol de la Pila COS en el Circuito Mine-to-Mill

La pila COS es un sistema dinámico de almacenamiento granular que introduce un **retardo temporal variable** entre la alimentación desde chancado y el consumo por el SAG. Sus funciones operacionales incluyen:[^12][^13]

- **Buffer operacional**: desacopla las tasas de producción de chancado (típicamente discontinua, 12–18 h/día) del consumo continuo del SAG (24 h/día)
- **Almacenamiento temporal**: niveles típicos entre 4 h y 72 h de autonomía, dependiendo de la geometría y el diseño
- **Mezcla parcial (blending)**: homogeniza diferencias de ley, dureza, PSD y humedad entre distintos lotes de mineral
- **Modificador de la distribución temporal**: transforma el patrón de llegada de mineral al SAG, expandiendo o comprimiendo el histograma temporal de atributos

La correcta representación de estos procesos es fundamental para predecir la variabilidad del feed SAG y, por extensión, la performance del circuito de molienda. La fluctuación en la distribución granulométrica de alimentación es el segundo factor más importante (tras la dureza del mineral) en la performance de molinos AG/SAG.[^14][^12]

### Fenómenos Físicos Relevantes

Los fenómenos internos que determinan el comportamiento de la pila COS incluyen:[^2][^15][^16]

1. **Segregación granulométrica**: durante el apilamiento, las partículas gruesas migran hacia la periferia y las finas se concentran en el núcleo central (stratification y trajectory segregation)[^15][^17]
2. **Patrones de flujo**: según la geometría del hopper de descarga y las propiedades del material, el flujo puede ser *funnel flow* (canalización central con zonas muertas), *mass flow* (todo el material en movimiento, FIFO aproximado) o *mixed/expanded flow*[^18][^19]
3. **Stock vivo vs. stock muerto**: el volumen activo (*live stock*) es aquel que efectivamente participa del flujo hacia los feeders; el volumen pasivo (*dead stock*) queda retenido en zonas donde el flujo no alcanza[^20][^21]
4. **Retardo temporal y distribución de tiempos de residencia (RTD)**: el tiempo que un lote de mineral permanece en la pila varía según su posición de entrada, el nivel de la pila, el número de feeders activos y el patrón de descarga[^22][^23]
5. **Efectos de humedad y densidad aparente**: la humedad modifica la fluidez del material granular, el ángulo de reposo y la densidad aparente, afectando directamente la relación nivel–volumen–masa[^24][^20]

***

## Taxonomía de Modelos por Complejidad

### Nivel 1 – Heurísticas Básicas

Estos modelos operan con principios simples de balance de masa y retardo temporal. Son computacionalmente triviales y calibrables con datos operacionales estándar.[^25][^26]

**FIFO puro (First-In First-Out)**
El mineral es consumido en el mismo orden en que fue ingresado. Equivale a un reactor de flujo pistón (*plug flow*). Apropiado cuando la capacidad de pila es pequeña y la extracción es uniforme. La principal limitación es que no captura mezcla, zonas muertas ni segregación.[^27]

**Delay fijo**
Se asume un retardo constante \( \tau \) entre entrada y salida:

$$\[ y(t) = u(t - \tau) \]$$

donde \( u(t) \) es la entrada desde chancado e \( y(t) \) es la salida hacia SAG. Simple e implementable, pero inadecuado para niveles variables de pila.[^25]

**Delay dependiente del nivel**
El retardo \( \tau(t) \) se estima a partir del nivel de pila \( L(t) \) y la tasa de consumo \( Q_{SAG}(t) \):

$$ \tau(t) = \frac{M(t)}{Q_{SAG}(t)} = \frac{V(t) \cdot \rho_{ap}}{Q_{SAG}(t)}$$

Esta es la formulación base de la heurística operacional descrita en el contexto de este proyecto.

**Balance de masa discreto**
El estado de la pila se actualiza a cada paso de tiempo \( \Delta t \):

$$M(t + \Delta t) = M(t) + [Q_{in}(t) - Q_{out}(t)] \cdot \Delta t$$

donde \( Q_{in} \) es el flujo desde chancado y \( Q_{out} \) es el consumo por feeders/SAG.

**Relación nivel–volumen–masa**
Para pilas cónicas o de geometría conocida, la relación nivel–volumen es no lineal:[^28]

$$V(L) = \frac{\pi}{3} L^2 \cdot \tan^2(\alpha) \cdot L = \frac{\pi}{3} L^3 \tan^2(\alpha)$$

para pila cónica ideal con ángulo de reposo \( \alpha \). En pilas reales, esta relación se calibra empíricamente mediante topografía laser/radar y registros históricos de nivel y masa.[^29]

**Modelo simple de consumo hacia SAG**
La salida hacia SAG se modela como función del estado de feeders activos y velocidad de correa:

$$ Q_{SAG}(t) = \sum_{i=1}^{n_f} f_i(t) \cdot C_i$$

donde \( f_i(t) \) es el estado del feeder \( i \) (0/1 o fracción de velocidad) y \( C_i \) es su capacidad nominal.

***

### Nivel 2 – Heurísticas de Complejidad Media

Estos modelos incorporan la distribución de tiempos de residencia (RTD), la distinción entre stock vivo y muerto, y el seguimiento de atributos del mineral.[^23][^22][^24]

**Distribución de Tiempos de Residencia (RTD)**
La RTD \( E(t) \) describe la fracción de material que ingresa en \( t=0 \) y sale en el intervalo \([t, t+dt]\):[^22]

$$ \int_0^{\infty} E(t)\, dt = 1 $$

La salida de cualquier propiedad \( C_{out}(t) \) es la convolución de la entrada \( C_{in}(t) \) con la RTD:

\[ C_{out}(t) = \int_0^{t} C_{in}(t - \tau)\, E(\tau)\, d\tau = (C_{in} * E)(t) \]

Las formas paramétricas más comunes para la RTD de una pila son:[^23][^22]

- **Distribución gamma** (modelo de tanques en serie con \( N \) compartimentos): \( E(t) = \frac{N(Nt/\bar{\tau})^{N-1} e^{-Nt/\bar{\tau}}}{\bar{\tau}(N-1)!} \)
- **Distribución log-normal**: captura la asimetría típica de sistemas con zonas muertas
- **Modelo dispersión axial**: \( E(t) \) derivada del número de Bodenstein \( Bo = uL/D_{ax} \)[^30]

**Live Stock y Dead Stock**
El volumen total de la pila se segmenta en:[^21][^20]

\[ V_{total} = V_{live} + V_{dead} \]

El *dead stock* es el volumen que no participa del flujo activo y se estima como fracción del volumen total según la geometría de la pila y la posición de los feeders. El *live stock* efectivo determina el tiempo de residencia mínimo y máximo.[^13][^20]

**Modelo de Dos Compartimentos (Activo/Muerto)**
Extensión directa del modelo RTD:

\[ \frac{dC_A}{dt} = \frac{Q}{\alpha V}(C_{in} - C_A) + k(C_D - C_A) \]

\[ \frac{dC_D}{dt} = k(C_A - C_D) \]

donde \( \alpha \) es la fracción de volumen activo, \( C_A \) y \( C_D \) son concentraciones en zona activa y muerta, y \( k \) es la constante de intercambio entre zonas.[^22][^23]

**Pseudo-partículas (micro-batches)**
El flujo de mineral se discretiza en unidades lógicas (*pseudo-partículas* o *micro-batches*) que transportan atributos (ley Cu, dureza, PSD, humedad, origen). Cada micro-batch \( b_k \) tiene:[^5][^9]
- masa \( m_k \)
- timestamp de entrada \( t_{in,k} \)
- vector de atributos \( \mathbf{a}_k = \{Cu, Axb, BWI, PSD, H_2O, ...\} \)
- estado: en pila, en tránsito, consumido

La extracción puede seguir una lógica probabilística ponderada por posición, nivel y patrón de feeder. Este enfoque fue formalizado por Servin et al. (2021) en su arquitectura de gemelo digital mine-to-mill.[^31][^5]

**Calibración con datos históricos**
Los parámetros del modelo RTD (\( \bar{\tau} \), \( N \), fracción dead stock) se calibran mediante mínimos cuadrados ajustando la salida predicha del modelo a series históricas de consumo SAG, nivel de pila y datos de laboratorio.[^32]

***

### Nivel 3 – Modelos Avanzados

Representan el estado del arte. Requieren mayor potencia computacional y datos adicionales, pero ofrecen precisión espacial y temporal superior.[^3][^33][^34][^2]

**Autómatas Celulares 3D (Cellular Automata, CA)**
El JKMRC desarrolló entre 2022 y 2025 un modelo de autómata celular continuo (CCA) que divide el volumen de la pila en una grilla 3D de celdas, cada una con propiedades independientes:[^35][^6][^2][^3]

- **Part 1 (Ye, Hilden, Yahyaei, 2022)**: modela la formación de la pila con segregación granulométrica durante el apilamiento (*surface stratification*)[^36][^3]
- **Part 2 (2023)**: extiende el modelo al ciclo completo de alimentación y descarga, incorporando dos mecanismos de segregación: *trajectory segregation* y *surface stratification*[^37][^2]
- Velocidad de simulación suficiente para tiempo real, habilitando aplicaciones en control de procesos y gemelos digitales[^6][^3]

**Método de Elementos Discretos (DEM)**
El DEM simula cada partícula individualmente con leyes de contacto físico:[^38][^39]
- Permite estudiar segregación coarse/fine durante apilamiento y extracción[^17][^15]
- Cuantifica zonas de funnel flow, mass flow y dead zones[^34][^40]
- Estudio clave: Ye et al. (2022) utilizó DEM para evaluar la efectividad del rastreo por RFID en una pila COS simulada[^33][^41]
- Limitación principal: costo computacional prohibitivo para tiempo real en pilas industriales (>10^9 partículas)

**Surrogate Models calibrados con CA/DEM**
Para operación online, los modelos CA/DEM se usan como generadores de datos de entrenamiento para surrogates rápidos (redes neuronales, modelos de bajo orden):[^42][^43]
- Se ejecutan múltiples simulaciones CA/DEM offline para mapear el espacio de parámetros
- El surrogate predice el comportamiento de la pila (RTD, segregación, live/dead stock) en milisegundos[^44]
- Servin et al. (2021) denominan este enfoque *granular surrogate* e integraron un prototipo con el sistema de control ABB[^42]

**Discretización 2.5D/3D por sectores o capas**
Alternativa intermedia entre el modelo compartimental y el CA completo:
- La pila se divide en \( N_x \times N_y \times N_z \) celdas (voxels)[^45]
- Cada celda lleva atributos de mineral y masa
- El flujo entre celdas sigue reglas simplificadas (gravedad, ángulo de reposo, posición de feeders)
- Implementado industrialmente por IntelliSense.io SIO como "3D block model" de pila COS[^7][^21]

***

## Revisión Técnica de Metodologías

### Comparación de Paradigmas de Modelamiento

| Paradigma | Descripción | Analogía en ingeniería química | Supuesto clave |
|-----------|-------------|-------------------------------|----------------|
| FIFO puro | Primero en entrar, primero en salir | Reactor flujo pistón (PFR) ideal | Sin mezcla axial, sin dead stock |
| Perfect mixing | Mezcla perfecta e instantánea | CSTR ideal | Concentración uniforme = weighted average |
| Plug flow con dispersión | PFR con dispersión axial | PFR con número de Bodenstein finito | Mezcla parcial proporcional a Bo |
| RTD paramétrica | Distribución de tiempos de residencia | Tanques en serie (N-CSTR) | RTD estacionaria y estable |
| Compartimentos | Zonas activa + muerta con intercambio | 2-CSTR en paralelo | k_exchange calibrable |
| Pseudo-partículas | Tracking de micro-batches | Lagrangiano discreto | Trayectorias diferenciables |
| Autómata celular 3D | Grilla espacial con reglas de transición | Lattice-Boltzmann (análogo) | Discretización suficiente, reglas locales |
| DEM | Física de cada partícula | Dinámica molecular | Fuerzas de contacto representativas |

### Modelamiento del Flujo a SAG

El flujo de mineral desde pila hacia SAG atraviesa la siguiente cadena:[^46][^35]

1. **Extracción por feeders**: la tasa de cada feeder \( f_i \) es controlada por velocidad o apertura; la extracción preferencial según posición del feeder determina qué zona de la pila se consume
2. **Correa SAG**: introduce un retardo de transporte \( \tau_{belt} = L_{belt}/v_{belt} \), usualmente del orden de 1–5 minutos
3. **Mezcla en chute de descarga**: si múltiples feeders descargan en una misma correa, ocurre mezcla física de micro-batches
4. **Llegada al molino**: el mineral llega con un delay total \( \tau_{total} = \tau_{pila} + \tau_{belt} \)

El delay de pila \( \tau_{pila} \) es función del volumen activo, la tasa de consumo y la posición de los feeders. En condiciones de funnel flow con un solo feeder, el mineral más cercano al feeder tiene \( \tau \approx 0 \), mientras que el material en zonas muertas puede tener \( \tau \to \infty \).[^16][^18]

### Segregación Granulométrica: Mecanismos y Efectos

Durante el apilamiento, ocurren dos mecanismos principales de segregación:[^2][^15][^17]

- **Surface stratification**: capas de diferente PSD se forman durante el avance del frente de material; partículas finas penetran los intersticios de la capa mientras las gruesas ruedan hacia la periferia
- **Trajectory segregation**: partículas lanzadas desde el tripper tienen trayectorias diferentes según tamaño y densidad; las más gruesas aterrizan más lejos del centro

El efecto neto es que la periferia de la pila acumula material más grueso, mientras el núcleo central contiene más finos. Esto tiene consecuencias directas sobre la PSD del feed SAG: cuando el nivel de pila baja y se consume material de la periferia, el SAG recibe temporalmente mineral más grueso.[^47][^12][^15][^2]

### Efectos de Humedad y Densidad Aparente

La humedad del mineral COS afecta la operación en múltiples dimensiones:[^24][^20]
- Modifica la densidad aparente \( \rho_{ap} \) (relación nivel–masa)
- Altera el ángulo de reposo y la fluidez del material
- Puede causar apelmazamiento (*caking*) que reduce el live stock
- Cambia la capacidad de peso en correa y consumo de energía

Un modelo robusto debe incluir al menos la corrección de densidad aparente en función de humedad medida o estimada.

***

## Ecuaciones y Formulaciones

### Balance de Masa Discreto (base de toda V1+)

\[ M_{k+1} = M_k + (Q_{in,k} - Q_{out,k}) \cdot \Delta t \]

\[ L_{k+1} = f^{-1}(V_{k+1}) = f^{-1}(M_{k+1}/\rho_{ap}) \]

donde \( f(L) \) es la curva nivel–volumen calibrada para la geometría de la pila.

### Balance de Atributos (tracking de propiedades)

Para cada atributo \( a \) (ley Cu, Axb, BWI, PSD, humedad):

\[ \frac{d(M \cdot a)}{dt} = Q_{in} \cdot a_{in}(t) - Q_{out} \cdot a_{out}(t) \]

\[ a_{out}(t) = \frac{\sum_k m_k \cdot a_k \cdot w_k(t)}{\sum_k m_k \cdot w_k(t)} \]

donde \( w_k(t) \) son pesos que reflejan la probabilidad de extracción del micro-batch \( k \) en el instante \( t \) (función de posición, nivel y feeders activos).

### RTD Paramétrica (Modelo N-CSTR en Serie)

\[ E(t) = \frac{1}{\bar{\tau}} \frac{N(Nt/\bar{\tau})^{N-1} e^{-Nt/\bar{\tau}}}{(N-1)!} \]

Para \( N = 1 \): mezcla perfecta (CSTR). Para \( N \to \infty \): flujo pistón (FIFO). El tiempo medio de residencia es:

\[ \bar{\tau} = \frac{V_{live}}{\bar{Q}_{out}} \]

La varianza de la distribución es \( \sigma^2 = \bar{\tau}^2/N \), que permite estimar el número de compartimentos equivalentes desde datos experimentales de trazadores.[^48][^22]

### Convolución Entrada–RTD–Salida

\[ C_{out}(t) = \int_0^t C_{in}(t-\tau)\, E(\tau; N, \bar{\tau})\, d\tau \]

Implementable eficientemente con la Transformada de Laplace o convolución discreta en dominio temporal.[^23][^22]

### Modelo de Dos Compartimentos con Intercambio

\[ \frac{dM_A}{dt} = Q_{in} - Q_{out} + k_{DA} M_D - k_{AD} M_A \]

\[ \frac{dM_D}{dt} = k_{AD} M_A - k_{DA} M_D \]

con \( k_{AD}/k_{DA} = \alpha_D/\alpha_A \) en equilibrio, donde \( \alpha_A + \alpha_D = 1 \).

### Función de Reclaim (Extracción por Feeders)

La tasa de extracción de cada zona de la pila se puede modelar como:

\[ Q_{reclaim,i}(t) = Q_{SAG}(t) \cdot \phi_i(L, pos_i, N_{feeders}) \]

donde \( \phi_i \) es la función de influencia del feeder \( i \) sobre la zona de la pila, que depende de la geometría y puede calibrarse con datos de RFID o trazadores.[^33][^32]

### Métricas de Calibración y Error

- **RMSE de nivel**: \( RMSE_L = \sqrt{\frac{1}{T}\sum_t (L_{pred} - L_{obs})^2} \)
- **RMSE de atributos**: \( RMSE_a = \sqrt{\frac{1}{T}\sum_t (a_{pred} - a_{obs})^2} \)
- **Error de retardo temporal**: calibrado con campañas de trazadores RFID, midiendo el tiempo de tránsito de tags entre antenna de crusher y antenna de SAG feed[^32]
- **Coeficiente de determinación R²** para cada atributo rastreado

***

## Flujo de Trabajo Industrial

### Diagnóstico y Levantamiento (Semanas 1–2)

1. Inventario de instrumentación existente: sensores de nivel, flujos, estados de equipo
2. Revisión de arquitectura de datos: PI, SCADA, DCS, laboratorio (LIMS)
3. Caracterización geométrica de la pila: planos, altura máxima, radio, número y posición de feeders, tripper/stacker
4. Revisión de logs históricos: nivel, flujos de chancado, consumo SAG, estados operativos
5. Identificación de gaps de datos críticos

### Baseline FIFO y Calibración Nivel–Masa (Semanas 3–6)

1. Implementación del balance de masa discreto con delay dependiente del nivel
2. Curva de calibración nivel–volumen–masa (regresión sobre datos históricos de pesaje y radar)
3. Validación cruzada: comparar masa estimada vs. datos de encuesta topográfica si disponibles
4. Implementación del modelo simple de consumo SAG con estados de feeders

### Implementación RTD y Live/Dead Stock (Semanas 7–12)

1. Estimación inicial de fracción live/dead stock a partir de geometría de la pila y posición de feeders
2. Ajuste de RTD paramétrica (modelo N-CSTR) a datos históricos de variabilidad de salida
3. Implementación del modelo de dos compartimentos
4. Inicio del tracking de atributos primarios (ley Cu estimada, PSD si hay sensor de correa)

### Tracking de Atributos y Validación Histórica (Meses 3–6)

1. Integración con modelo de bloques de mina (origen del mineral, ley Cu, dureza Axb)
2. Implementación de micro-batch tracking con propagación de atributos
3. Validación histórica: predicción vs. valores de laboratorio en SAG feed
4. Refinamiento de parámetros RTD y fracción dead stock mediante optimización

### Escalamiento a Modelo Espacial (Meses 6–12)

1. Discretización 2.5D de la pila en sectores o capas
2. Implementación de lógica de flujo entre celdas (gravitación, ángulo de reposo)
3. Calibración con topografía periódica (laser/LIDAR/radar si disponible)
4. Integración de modelo de segregación granulométrica (simplificado o CCA)

### Integración en Gemelo Digital y Campañas de Trazabilidad (12+ meses)

1. Integración del modelo COS con el gemelo digital completo mine-to-mill
2. Campaña de trazadores RFID (SmartTag o equivalente) para validación experimental[^49][^32]
3. Calibración del surrogate model con datos CA/DEM si se desarrolla modelo avanzado
4. Dashboard operacional en tiempo real para operadores y supervisores

***

## Arquitectura de Solución Propuesta

### V1: Modelo Dinámico Lumped (Quick Win, 4–6 semanas)

**Componentes:**
- Balance de masa discreto (\( \Delta t = 1 \) min o menos)
- Relación nivel–volumen–masa calibrada (lookup table o polinomio)
- Delay dependiente del nivel: \( \tau(t) = M(t)/Q_{SAG}(t) \)
- FIFO corregido: cola temporal de micro-batches con atributos básicos (ley Cu de modelo de bloques, Axb estimado)
- Tracking de estados operativos (chancadora, correas, feeders)
- Dashboard básico: nivel, masa, delay estimado, feed estimado al SAG

**Datos requeridos:** timestamp, flujo chancado, flujo SAG, nivel pila, estados operativos, densidad aparente nominal.

**Salidas:** masa en pila, delay temporal actual, estimación de atributos en feed SAG en próximos 30–60 min.

***

### V2: RTD + Live/Dead Stock + Micro-Batches (Prototipo Operacional, 8–12 semanas)

**Componentes adicionales:**
- RTD paramétrica (modelo N-CSTR) con parámetros calibrados (\( N, \bar{\tau} \))
- Separación live/dead stock con intercambio \( k_{exchange} \)
- Micro-batch tracking: cola de batches con vector de atributos completo
- Convolución entrada–RTD–salida para propagación de atributos
- Modelo probabilístico de salida hacia feeders (función de posición e historial)
- Calibración automática periódica contra datos de laboratorio LIMS

**Datos adicionales:** muestras de laboratorio en feed SAG (ley, dureza), PSD en correa si disponible, origen del mineral desde fleet management.

**Salidas:** predicción de ley Cu, Axb, PSD estimada y humedad en feed SAG con horizonte de 1–4 h.

***

### V3: Modelo Compartimental o Espacial 2.5D (Piloto Industrial, 3–6 meses)

**Componentes adicionales:**
- Discretización de la pila en \( N_z \) capas y/o \( N_s \) sectores laterales
- Cada celda (capa × sector) con masa y vector de atributos propio
- Reglas de flujo entre celdas según gravedad, ángulo de reposo y posición de feeders
- Modelo simplificado de segregación por capas durante apilamiento (PSD más fino en capas centrales)
- Integración con medición topográfica periódica (perfil de pila)
- Detección de zonas de bajo flujo (dead zones)

**Datos adicionales:** geometría 3D de pila (surveying inicial), posición del tripper/stacker, topografía periódica (radar o LIDAR si disponible).

**Salidas:** visualización del estado interno de la pila (calidad por zona), predicción de efecto blending, alertas de material fuera de especificación.

***

### V4: Surrogate Calibrado con CA/DEM + Campañas RFID (Evolución Avanzada, 6–12 meses)

**Componentes adicionales:**
- Modelo CCA (Continuous Cellular Automata) basado en metodología JKMRC, calibrado con datos industriales[^35][^6]
- Surrogate model (red neuronal o modelo de bajo orden) entrenado con simulaciones CCA/DEM offline[^43][^42]
- Ejecución del surrogate en tiempo real: predicción de RTD dinámica y segregación
- Integración con campañas de trazadores RFID (SmartTag, MetTrac o equivalente) para validación experimental[^50][^49]
- Soft-sensor de PSD en feed SAG basado en el modelo de pila
- Módulo de reconciliación tonelaje + metal para cierre de balance

**Datos adicionales:** topografía 3D continua (LIDAR/radar instalado), campaña RFID (≥200 tags/campaña), parámetros DEM calibrados del mineral (Axb, Bond Wi, PSD).

**Salidas completas:** gemelo digital COS en tiempo real con trazabilidad completa mine-to-mill, predicción de calidad SAG feed con incertidumbre, soporte a planificación mina-planta.

***

## Datos Requeridos por Nivel

| Dato | V1 | V2 | V3 | V4 |
|------|----|----|----|-----|
| Timestamp (1 min) | ✅ | ✅ | ✅ | ✅ |
| Caudal chancado (tph) | ✅ | ✅ | ✅ | ✅ |
| Caudal hacia SAG (tph) | ✅ | ✅ | ✅ | ✅ |
| Nivel de pila (m o %) | ✅ | ✅ | ✅ | ✅ |
| Densidad aparente (t/m³) | ✅ (nominal) | ✅ | ✅ | ✅ |
| Estados operativos (chancadora, correas, feeders) | ✅ | ✅ | ✅ | ✅ |
| Geometría de pila | ✅ (básica) | ✅ | ✅ | ✅ |
| Posición y número de feeders | ✅ | ✅ | ✅ | ✅ |
| Ley Cu del mineral (modelo de bloques/LIMS) | ⬜ | ✅ | ✅ | ✅ |
| Dureza (Axb, BWI) del mineral | ⬜ | ✅ | ✅ | ✅ |
| PSD en correa o laboratorio | ⬜ | ✅ | ✅ | ✅ |
| Humedad del mineral | ⬜ | ✅ | ✅ | ✅ |
| Origen del mineral (pit, fase, banco) | ⬜ | ✅ | ✅ | ✅ |
| Patrón de descarga del tripper/stacker | ⬜ | ⬜ | ✅ | ✅ |
| Topografía/perfil de pila (periódico) | ⬜ | ⬜ | ✅ | ✅ |
| Topografía continua (radar/LIDAR) | ⬜ | ⬜ | ⬜ | ✅ |
| Datos RFID/trazadores | ⬜ | ⬜ | ⬜ | ✅ |
| Parámetros DEM calibrados | ⬜ | ⬜ | ⬜ | ✅ |

***

## Estrategia de Validación

### Validación Cuantitativa por Nivel

**V1:** Comparación de masa predicha vs. pesaje de correa acumulado; error de balance de masa < 5% mensual; correlación de ley Cu estimada vs. muestras LIMS en SAG feed.

**V2:** Validación de la RTD mediante análisis retrospectivo (input-output con atributos conocidos); calibración de \( N \) y \( \bar{\tau} \) mediante optimización; \( R^2 > 0.7 \) para atributos claves en predicción 1 h.

**V3:** Validación espacial mediante comparación del perfil de pila predicho vs. topografía medida (surveying semestral); distribución de zonas live/dead vs. observaciones operacionales.

**V4:** Campaña de trazadores RFID: instalación de 200–500 tags en mineral saliendo de chancadora, lectura en antenas de correa SAG; ajuste de RTD experimental y comparación con modelo. Métodos alternativos incluyen trazadores radioactivos (Na-24) para medición RTD directa.[^48][^33][^32]

### Validación Operacional

- Panel de reconciliación mensual: balance de masa y metal (tonelaje + ley Cu) con cierre < 3%[^51]
- Alertas operacionales: detección de material fuera de especificación antes de llegar al SAG[^10]
- KPI de variabilidad de feed: desviación estándar de ley Cu y Axb en feed SAG antes y después del modelo[^52]

***

## Tabla Comparativa de Enfoques

| Enfoque | Descripción resumida | Supuestos clave | Datos mínimos | Precisión esperada | Complejidad implementación | Costo computacional | Ventajas principales | Limitaciones principales | Aplicabilidad industrial | Nivel recomendado |
|---------|---------------------|-----------------|---------------|-------------------|---------------------------|--------------------|--------------------|--------------------------|--------------------------|-------------------|
| FIFO puro | Cola temporal sin mezcla | Sin dead stock, sin segregación | Flujo in/out + timestamp | Baja (ignora mezcla) | Muy baja | Trivial | Simple, determinístico | No captura blending ni zonas muertas | Alta (punto de partida) | V1 baseline |
| Delay dependiente nivel | τ = M(t)/Q_SAG | Mezcla instantánea implícita | Nivel + flujos | Baja-media | Muy baja | Trivial | Intuitivo, calibrable con datos estándar | No segrega atributos en el tiempo | Alta | V1 operacional |
| Perfect mixing (CSTR) | Concentración uniforme en pila | Mezcla perfecta e instantánea | Flujos + atributos entrada | Baja (sobreestima mezcla) | Baja | Trivial | Cota inferior de variabilidad | Irrealista para pilas grandes | Alta | Referencia comparativa |
| RTD N-CSTR | Distribución de tiempos de residencia | RTD estacionaria, homogénea | Flujos + campaña de trazadores | Media | Media | Baja | Captura mezcla parcial, calibrable | No capta heterogeneidad espacial | Alta | V2 núcleo |
| 2 compartimentos | Zona activa + zona muerta | k_exchange constante | Flujos + estimación dead stock | Media | Media | Baja | Modela live/dead stock explícitamente | Parámetros difíciles de medir directamente | Alta | V2 complemento |
| Micro-batches / pseudo-partículas | Tracking de batches con atributos | Trayectorias simplificadas | Flujos + modelo de bloques | Media-alta | Media | Media | Trazabilidad explícita de atributos | Requiere modelo de bloques actualizado | Media-alta | V2–V3 |
| Modelo espacial 2.5D / capas | Pila discretizada en celdas | Flujo simplificado entre celdas | Geometría + flujos + topografía | Media-alta | Alta | Media | Captura heterogeneidad espacial | Parametrización compleja | Media | V3 |
| Autómata celular 3D (CA/CCA) | Grilla 3D con reglas de transición física | Discretización suficiente | Geometría + PSD + flujos | Alta | Muy alta | Media-alta (real time posible) | Captura segregación, flujo real, apto gemelo digital | Requiere calibración DEM del mineral | Naciente (JKMRC) | V4 |
| DEM completo | Física partícula a partícula | Modelo de contacto calibrado | Propiedades mecánicas partículas | Muy alta | Extrema | Muy alto (no real-time) | Resolución máxima de segregación y flujo | Escala industrial inviable en tiempo real | Laboratorio/calibración | V4 (offline) |
| Surrogate ML calibrado CA/DEM | Red neuronal entrenada sobre simulaciones | Extrapolación limitada al espacio entrenado | Simulaciones previas + datos online | Alta | Alta (setup) / Baja (inferencia) | Muy baja (inferencia) | Tiempo real, alta precisión | Requiere reentrenamiento ante cambios | Alta potencial | V4 online |

***

## Roadmap de Implementación

### Fase 1: Quick Win (Semanas 1–6)

**Objetivo:** modelo dinámico V1 operacional en planta piloto.

- Levantamiento de datos e instrumentación existente (semana 1–2)
- Desarrollo e implementación del balance de masa discreto con delay dependiente del nivel (semana 2–4)
- Calibración de la curva nivel–volumen–masa (semana 3–4)
- Dashboard básico integrado al sistema de historización (PI/SCADA) (semana 4–6)
- Validación de balance de masa con datos históricos de 3 meses (semana 5–6)

**Entregable:** modelo V1 en operación con KPIs de validación. Presentación a operaciones.

**Inversión estimada:** bajo (principalmente horas de ingeniería y desarrollo software).

***

### Fase 2: Prototipo Operacional (Semanas 7–14)

**Objetivo:** modelo V2 con RTD, live/dead stock y tracking de atributos.

- Estimación de parámetros RTD (\( N, \bar{\tau} \)) desde datos históricos (semana 7–8)
- Implementación de micro-batch tracking con atributos de modelo de bloques (semana 8–10)
- Integración con LIMS y modelo de bloques de mina (semana 9–12)
- Calibración y validación cruzada del tracking de ley Cu (semana 11–14)
- Implementación de alertas de material fuera de especificación (semana 13–14)

**Entregable:** prototipo V2 validado con \( R^2 > 0.7 \) en predicción de atributos. Reducción demostrable de variabilidad de feed SAG.

***

### Fase 3: Piloto Industrial (Meses 4–6)

**Objetivo:** modelo V3 con discretización espacial integrado en operaciones.

- Relevamiento topográfico de la pila y digitalización de geometría (mes 4)
- Implementación del modelo 2.5D por capas/sectores (mes 4–5)
- Integración con datos de patrón de descarga del stacker/tripper (mes 5)
- Validación operacional con panel de reconciliación mensual (mes 5–6)
- Entrenamiento de operadores y supervisores en uso del dashboard (mes 6)

**Entregable:** piloto V3 en operación. Documentación técnica completa. Caso de negocio para expansión.

***

### Fase 4: Evolución Avanzada (Meses 7–12)

**Objetivo:** modelo V4 con surrogate CA/DEM y campaña de trazabilidad RFID.

- Desarrollo o licenciamiento del modelo CCA (en colaboración con JKMRC u otro) (mes 7–9)
- Campaña de trazadores RFID: instalación, lectura y análisis de resultados (mes 8–10)
- Entrenamiento de surrogate model con simulaciones CCA calibradas (mes 9–11)
- Integración completa en gemelo digital mine-to-mill (mes 10–12)
- Publicación de resultados / presentación en conferencia técnica (mes 12+)

**Entregable:** gemelo digital COS V4 en operación. Paper técnico o presentación SME/Procemin/IMPC.

***

## Casos de Uso Industriales

### Predicción de Calidad del Feed SAG

La integración del modelo COS con el modelo de bloques de mina permite predecir con 1–4 h de anticipación los atributos del mineral que llegará al SAG: ley Cu, Axb, BWI, PSD, humedad. Esto habilita ajustes proactivos en los parámetros del SAG (velocidad de molino, nivel de llenado, adición de agua, tamaño de bola) antes de que el mineral llegue.[^53][^52][^7]

IntelliSense.io reportó una reducción de variabilidad de feed del 5–8% en un caso de estudio de planta, con un retorno de inversión estimado en 1.4 M USD/año y payback de 3.3 meses.[^54][^52]

### Trazabilidad Mine-to-Mill y Reconciliación

El tracking de micro-batches desde el origen en mina (blast block ID) hasta el feed SAG permite cerrar el balance de tonelaje y metal con mayor precisión. Maptek MaterialMRT reporta que sin este tipo de sistemas, la reconciliación mine-to-mill puede presentar discrepancias de hasta 2% en metal, con impacto significativo en el balance de inventarios.[^11][^55][^51]

### Detección de Material Fuera de Especificación

El modelo 3D de la pila COS permite generar alertas cuando material con características no deseadas (alta dilución, material de baja ley, presencia de contaminantes) se aproxima a los feeders de extracción. IntelliSense.io documenta un caso donde este mecanismo evitó pérdidas por 200,000 USD al detectar contaminantes en la pila antes de que llegaran al SAG.[^10]

### Predicción de Dureza y Parámetros Geometalúrgicos

Si el modelo de bloques de mina incluye parámetros geometalúrgicos (Axb, BWI, DWi), su propagación a través del modelo COS permite estimar la dureza del mineral que llegará al SAG, habilitando ajuste anticipado de la tasa de alimentación para mantener un consumo de energía objetivo.[^56][^57]

***

## Riesgos Técnicos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Instrumentación insuficiente (sin sensor de nivel confiable) | Media | Alto | Instalar radar de nivel o utilizar estimación por balance acumulado |
| Modelo de bloques de mina sin atributos geometalúrgicos | Media | Alto | Iniciar con solo ley Cu; escalar cuando el modelo de bloques mejore |
| Densidad aparente variable no medida | Alta | Medio | Aplicar corrección estadística por humedad y tipo de mineral |
| Patrones de extracción no registrados (feeders sin telemetría) | Media | Medio | Retroestimar desde datos de correa SAG |
| Cambio de geometría de pila no detectado | Baja | Alto | Relevamientos topográficos periódicos (mensual o semanal) |
| Deriva del modelo RTD ante cambios en mineralogía | Media | Medio | Re-calibración periódica automática o basada en alertas estadísticas |
| Integración de datos de múltiples sistemas (SCADA, LIMS, FMS) | Alta | Medio | Data pipeline robusto con validación de datos y logging de gaps |
| Resistencia operacional a adoptar el modelo | Media | Alto | Involucramiento temprano de operadores, dashboards intuitivos |

***

## Oportunidades de Diferenciación Tecnológica

### Aplicación del Modelo CCA JKMRC en Industria

El modelo CCA del JKMRC representa el estado del arte académico en modelamiento de pilas COS. Su integración dentro de un gemelo digital mine-to-mill como surrogate entrenado es una oportunidad real de diferenciación, dado que actualmente solo existen implementaciones en modo investigación.[^3][^6][^2][^35]

### Integración con Gemelos Digitales SAG Existentes

El trabajo de Servin et al. (2021) demostró la integración del modelo COS con el sistema de control ABB a través de la arquitectura de pseudo-partículas y granular surrogates. Esta integración permite conectar el modelo de pila directamente con el controlador del SAG, cerrando el ciclo de retroalimentación predictiva.[^5][^42]

### Propagación de Incertidumbre

Un diferenciador clave respecto a soluciones existentes es la propagación explícita de incertidumbre desde el modelo de bloques de mina hasta el feed SAG. Cada atributo de cada micro-batch puede llevar una distribución de probabilidad en lugar de un valor puntual, siguiendo el enfoque probabilístico de NTWIST.[^8][^1]

### Soft-Sensor de PSD en Feed SAG

La combinación del modelo de segregación con el modelo de flujo permite estimar la distribución granulométrica del mineral en el feed SAG sin necesidad de un sensor físico en la correa, funcionando como soft-sensor de PSD validado periódicamente.[^46][^6]

### Integración con Planificación Mina-Planta

El modelo COS puede servir como interfaz entre el modelo de planificación de corto plazo de mina y el plan de producción de planta, cuantificando el efecto de blending que la pila introduce y permitiendo optimizar la estrategia de apilamiento para alcanzar objetivos de calidad de feed.[^58][^1]

***

## Bibliografía Comentada

Las siguientes referencias constituyen el núcleo técnico de esta investigación:

**Ye, Z., Hilden, M.M., Yahyaei, M. (2022).** *A 3D cellular automata ore stockpile model – Part 1: Simulation of size segregation.* Minerals Engineering, 187, 107816.[^36][^3]
*Primera parte del modelo CCA del JKMRC. Describe la formación de la pila con segregación. Suficientemente rápido para aplicaciones en tiempo real.*

**Ye, Z., Hilden, M.M., Yahyaei, M. (2023).** *A 3D cellular automata ore stockpile model – Part 2.* Minerals Engineering.[^37][^2]
*Extiende el modelo al ciclo completo de alimentación y descarga con dos mecanismos de segregación. Validación industrial incluida.*

**Servin, M., Vesterlund, F., Wallin, E. (2021).** *Digital twins with distributed particle simulation for mine-to-mill material tracking.* Minerals, 11(5), 524.[^9][^31][^5]
*Propone la arquitectura de pseudo-partículas para gemelos digitales mine-to-mill. Introduce el concepto de granular surrogate. Demostración de integración con sistema de control ABB.*

**Ye, Z. et al. (2023).** *A numerical sensitivity study – The effectiveness of RFID-based ore tracking through a simulated coarse ore stockpile.* Powder Technology.[^41][^33]
*Combina DEM y modelo COS para evaluar la viabilidad de rastreo RFID en pilas industriales. Cuantifica el efecto de variables operacionales sobre la efectividad del tracking.*

**Hilden, M.M. (2025).** *Connecting the Mine with the Mill using the JKMRC Stockpile Model.* JKMRC Friday Seminar.[^6][^35]
*Presentación de última generación del modelo CCA en aplicaciones de optimización de proceso, diseño de stockpile y desarrollo de soft-sensors. Disponible en YouTube.*

**Isokangas, E. et al. (2012).** *Using SmartTag™ to track ore in process integration and optimization at Newcrest Mining's Telfer Operation.* Proceedings Precious Metals 2012.[^32]
*Caso de uso clásico de RFID para medición de tiempo de residencia en COS entre crusher y SAG feed. Línea base para validación experimental del modelo.*

**Jenike & Johanson (2025).** *Importance of coarse-ore stockpile design in mining mega-projects.*[^13]
*Referencia práctica sobre live storage capacity, flow patterns y consecuencias económicas del mal diseño de pilas COS.*

**IntelliSense.io (2024).** *Stockpile & Inventory Optimization (SIO).*[^7][^21][^10]
*Solución industrial que implementa modelos 3D de bloques de pila con tracking de tiempo de residencia, live/dead zones y alertas de material. Casos reales con ROI documentado.*

**Maptek (2022).** *MaterialMRT real-time tracking.*[^55][^11]
*Sistema de trazabilidad mine-to-mill con integración a modelo de bloques de mina, fleet management y análisis en correa. Referencia para arquitectura de datos.*

**NTWIST (2025).** *Real-Time Stockpile Modeling & Dynamic Ore Inventory Tracking.*[^1][^8]
*Enfoque probabilístico 3D con GPS truck data y scans topográficos. Precisión de ±2–3% en volumen de inventario. Referencia para arquitectura de datos y blending.*

**Freeport Minerals Corp (2023).** *US Patent 20230419226A1: System and method for determining estimated remaining mineral in a stockpile.*[^59]
*Patente de sistema de estimación de mineral remanente en pila usando machine learning supervisado. Indica la dirección de patentamiento en el área.*

**Ortiz, J.M. et al. (2021).** *Progress towards geometallurgical digital twins.* Queen's University.[^57]
*Marco conceptual para gemelos digitales geometalúrgicos que integran el modelo de bloques de mina con el desempeño de planta. Contextualización del rol del modelo COS.*

---

## References

1. [How Real-Time Stockpile Modeling Transforms Blending Decisions](https://ntwist.com/blog/real-time-stockpile-modeling-blending-optimization) - Model your stockpiles in real time to reduce blending guesswork and feed variability. Discover how N...

2. [A 3D cellular automata ore stockpile model – Part 2](https://www.sciencedirect.com/science/article/pii/S089268752300170X) - This paper describes a 3D cellular automaton (CA) for dynamically modelling ore piles with continuou...

3. [A 3D cellular automata ore stockpile model - Part 1 - NASA ADS](https://ui.adsabs.harvard.edu/abs/2022MiEng.18707816Y/abstract) - This paper describes a 3D cellular automaton (CA) for modelling ore pile formation that incorporates...

4. [Material tracking & reconciliation - Maptek](https://www.maptek.com/products/resource_tracking/) - Cloud-ready system for tracking quality and inventory of discontinuous material flows from in situ r...

5. [Digital Twins with Distributed Particle Simulation for Mine- ...](https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1554560&language=sv) - Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking ... In digital...

6. [JKMRC Friday Seminars 2025 - Sustainable Minerals Institute](https://smi.uq.edu.au/event/session/14730) - This presentation describes how the model works and its applications in process optimisation, stockp...

7. [Stockpile & Inventory Optimization (SIO) - IntelliSense.io](https://www.intellisense.io/applications/stockpile-inventory-optimization/) - The Stockpile & Inventory Optimization Solution provides near real-time, 3D ore control models to op...

8. [Why Dynamic Ore Inventory Tracking Is the New Standard - NTWIST](https://ntwist.com/blog/dynamic-ore-inventory-tracking-stockpile-control) - The cost isn't just operational — it's strategic. Without real-time stockpile inventory, you're plan...

9. [[PDF] Digital twins with distributed particle simulation for mine-to-mill ...](https://www.semanticscholar.org/paper/1ef2481909e3cec828ca16bf24ee0750207e017f) - A material-oriented approach to digital twins with a particle representation of the granular media e...

10. [Save $200K by detecting contaminants in crushed stockpiles](https://www.intellisense.io/2025/02/save-200k-by-detecting-contaminants-in-crushed-stockpiles/) - A high-resolution Crushed Ore Stockpile (COS) block model was developed, providing detailed insights...

11. [Smart material tracking - Maptek](https://www.maptek.com/forge/december_2020/smart-material-tracking/) - 'MaterialMRT provides quality and quantity control of discontinuous material flows from in situ rock...

12. [[PDF] Single Stage SAG/AG Milling Design - Orway Mineral Consultants](https://orway.squarespace.com/s/Single-STAGE-SAG-AG-MILLING-DESIGN.pdf) - Consistency of feed distribution is important for optimal performance of a single stage S/AG mill. C...

13. [Importance of coarse-ore stockpile design in mining mega-projects](https://jenike.com/importance-of-coarse-ore-stockpile-design-in-mining-mega-projects/) - With a properly designed stockpile, the live storage capacity is high enough to provide coarse ore a...

14. [Influence of feed size on AG/SAG mill performance - Academia.edu](https://www.academia.edu/901477/Influence_of_feed_size_on_AG_SAG_mill_performance) - Fluctuations in feed size distribution are second only to ore competence variation in their influenc...

15. [Segregation Modeling in Stockpile Using Discrete Element Method](https://www.semanticscholar.org/paper/Segregation-Modeling-in-Stockpile-Using-Discrete-G%C3%B3mez-Skrzypkowski/adaec41c89d8ba702a6eb1abbe5d53311f75bd87) - 2025. This study introduces a comprehensive calibration technique for discrete element method (DEM) ...

16. [[PDF] selection and sizing of feeders, bins and stockpile - 911Metallurgist](https://www.911metallurgist.com/wp-content/uploads/2016/02/SELECTION-AND-SIZING-OF-FEEDERS-BINS-AND-STOCKPILES.pdf) - F_u-nnel flow occurs when the hopper walls are not sufficiently steep and smooth to force solid to s...

17. [DEM Simulation of Particle Stratification and Segregation ... - YouTube](https://www.youtube.com/watch?v=UW1A-X8zznE) - ... segregation processes. In this work, we conduct a numerical study based on DEM (discrete element...

18. [Mass Flow or Funnel Flow- What do you Have? - Jenike & Johanson](https://jenike.com/mass-flow-funnel-flow/) - When looking at the top surface, if the granules at the wall are moving [1], then you have mass flow...

19. [Jenike & Johanson Mass Flow Funnel Flow Discussion - YouTube](https://www.youtube.com/watch?v=qneDHMWeZ70) - Jenike & Johanson - hopper flow pattern discussion. Material handling engineer describes the two typ...

20. [[PDF] Online Smart Sensor to Measure Stockpiles used in Mineral ...](https://ujcontent.uj.ac.za/view/pdfCoverPage?instCode=27UOJ_INST&filePid=135526790007691&download=true) - The stockpile smart sensor can help estimate accurate residual time for different group of ores char...

21. [[PDF] IntelliSense.io AI for metal recovery - AusIMM](https://www.ausimm.com/globalassets/communities/branches/kalgoorlie/kalgoorlie-feb-2024-tech-talk_-intellisense.io-ai-for-metal-recovery.pdf) - Crushed Ore Stockpiles. ○. Tracks flow rate and particle size ... Real time 3D stockpile block model...

22. [Using Residence Time Distributions (RTDs) to Address the ... - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4759219/) - Residence time distribution (RTD) play an important role in raw material traceability as it characte...

23. [A review of the Residence Time Distribution (RTD) applications in ...](https://www.academia.edu/26656484/A_review_of_the_Residence_Time_Distribution_RTD_applications_in_solid_unit_operations) - This review traces current applications of the residence time theory in various solid unit operation...

24. [PROJECT: HDR9 (PhD)](https://iocr.com.au/portfolio/project-hdr9-phd/) - A numerical sensitivity study – The effectiveness of RFID-based ore tracking through a simulated coa...

25. [[PDF] Measuring ROM at Highland Valley Copper - WipWare](https://www.wipware.com/wp-content/uploads/2018/01/Measuring-ROM-Highland-Valley-Copper.pdf) - The tracking system will provide an objective and inferential measurement of ore hardness than can b...

26. [Stockpile Management and the Implications to the Balance Sheet](https://minebright.com/reconciliation-stockpiles/) - Geologists have control on how stockpile's metal balance is calculated which has a direct effect on ...

27. [Plug flow reactor model - Wikipedia](https://en.wikipedia.org/wiki/Plug_flow_reactor_model) - The plug flow reactor model (PFR, sometimes called continuous tubular reactor, CTR, or piston flow r...

28. [[PDF] Live volume of conical stockpile reclaimed by gravity](https://rsdjournal.org/rsd/article/download/28908/25055/332357) - This article addresses the live volume fraction of conical stockpile recovered through underground h...

29. [Ore Stockpile Metering](https://en.goslam.com/duitijiliang/17) - This technology can quickly obtain 3D point cloud data of piles through the integration of laser rad...

30. [Comparison between dispersion and plug-flow models for fixed-bed ...](https://www.osti.gov/biblio/6974546) - The axial dispersion model is widely used to represent the flow of fluid inside packed-bed reactors,...

31. [Digital Twins with Distributed Particle Simulation for Mine-to-Mill ...](https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1554560) - The particle-based representation enables material tracking along the chain of processes. Each digit...

32. [[PDF] using smarttagtm to track ore in process integration and optimization ...](https://www.saimm.co.za/Conferences/Pt2012/871-892_Isokangas.pdf) - The difference in tag detection times between the SAG mill feed and primary crusher antennae can be ...

33. [A numerical sensitivity study – The effectiveness of RFID-based ore ...](https://www.sciencedirect.com/science/article/pii/S0032591023007234) - RFID tag tracking can contribute to estimating the residence time for different ore batches that are...

34. [Modelling of material flow and size distribution of ore in a stockpile ...](https://resolver.tudelft.nl/uuid:6a78c2c6-d1e5-4e43-a507-468bb3eeda67) - This study aims to understand the material behaviour of ore inside a coarse ore stockpile by discret...

35. [Connecting the Mine with the Mill using the JKMRC Stockpile Model](https://www.youtube.com/watch?v=l6uvBv-otRg) - Speaker Dr Marko Hilden Abstract Mine sites move massive quantities of rock and ore and store it in ...

36. [A 3D cellular automata ore stockpile model – Part 1](https://www.sciencedirect.com/science/article/abs/pii/S0892687522004265) - por Z Ye · 2022 · Mencionado por 12 — This paper describes a 3D cellular automaton (CA) for modellin...

37. [A 3D cellular automata ore stockpile model – Part 2: Simulation and ...](https://www.semanticscholar.org/paper/A-3D-cellular-automata-ore-stockpile-model-%E2%80%93-Part-Ye-Hilden/f7045cf73f7728e18b429c948e5293e3dd0f88f4) - A 3D cellular automata ore stockpile model – Part 1: Simulation of size segregation · Engineering, M...

38. ["Discrete Element Method for Mining Industrial Applications: Solving ...](https://openscholarship.wustl.edu/eng_etds/1148/) - The discrete element method (DEM) is a widely used numerical approach for simulating and analyzing t...

39. [[PDF] Modelling of material flow and size distribution of ore in a stockpile ...](https://minedocs.com/17/Tara_Other_09212012.pdf) - This study aims to understand the material behaviour of ore inside a coarse ore stockpile by using d...

40. [A stage-wise DEM framework for quantifying discharge and mixing ...](https://www.sciencedirect.com/science/article/abs/pii/S0032591026004833) - This study developed a unified framework for quantifying discharge and mixing dynamics in coarse ore...

41. [A laboratory-scale characterisation test for quantifying the ...](https://www.sciencedirect.com/science/article/abs/pii/S089268752200440X) - por Z Ye · 2022 · Mencionado por 8 — This paper presents a numerical study of copper ore tracking th...

42. [Digital twins with distributed particle simulation for mine-to-mill ...](https://www.youtube.com/watch?v=6wCSReb5SQ4) - Servin, F. Vesterlund, and E. Wallin. Digital twins with distributed particle simulation for mine-to...

43. [[PDF] Surrogate Modeling Based On Dynamic Numerical Simulation and ...](https://www.scipedia.com/wd/images/f/f7/Draft_Content_505991148p4424.pdf) - Machine learning surrogates, once trained, can achieve simulations by orders of magnitude faster tha...

44. [AI-powered surrogate models bring real-time simulation to ...](https://materials.imdea.org/ai-powered-surrogate-models-bring-real-time-simulation-to-composite-manufacturing/) - The surrogate models employed achieve orders-of-magnitude speed-ups over conventional simulations, o...

45. [Optimal stockpile voxel identification based on reclaimer minimum ...](https://www.sciencedirect.com/science/article/abs/pii/S0301751610001419) - An automatic optimal reclaiming system to reclaim iron ore from stockpiles using the bucket wheel re...

46. [JK Webinar: Dynamic simulation of Industrial Stockpiles and Bins ...](https://www.youtube.com/watch?v=HgAeTMQqJh4) - Stockpiles and ore bins are essential as a buffer between the mine and the process plant or between ...

47. [Mine-to-Mill: The influence of feed size on AG/SAG milling - YouTube](https://www.youtube.com/watch?v=f8EJoU7b8mI) - The role of the intermediate stockpile between the primary crusher and AG/SAG mill is also described...

48. [[PDF] Radiotracer Residence Time Distribution Method for Industrial and ...](https://www-pub.iaea.org/MTCD/Publications/PDF/TCS-31_web.pdf) - The tracer for solid phase has to follow tail transport, so should be non-floating ore material. Na-...

49. [[PDF] Metso SmartTag - The Next Generation and Beyond](https://www.semanticscholar.org/paper/Metso-SmartTag-The-Next-Generation-and-Beyond-Wortley-Nozawa/d0f296365d0e63ba632a18ed0cf9256bd4a3fe9c) - SmartTag is a radio frequency identifi cation (RFID) based technology designed to allow tracking of ...

50. [Tracking - Mineral Processing](https://www.at-minerals.com/en/artikel/at_2012_03_Tracking-1389644.html) - SmartTag is an RFID (Radio Frequency Identification) based technology designed to allow tracking of ...

51. [[PDF] RFID ORE TRACKING - Autorun Technologies](https://autoruntech.com/arwp/wp-content/uploads/2021/02/Autorun-Metrac-Digital-Brochure.pdf) - MetTrac is a mine site ore tracking system using Radio Frequency Identification technology to place ...

52. [Case Study: Decrease Plant Feed Variability by 5-8% - IntelliSense.io](https://www.intellisense.io/2023/08/decreased-plant-feed-variability-by-5-8/) - The Stockpile & Inventory Optimization Application is one of a suite of real-time decision-making ap...

53. [Digital twin with automatic disturbance detection for an expert ... - arXiv](https://arxiv.org/html/2503.04225v1) - This study presents the development and validation of a digital twin for a semi-autogenous grinding ...

54. [[PDF] Stockpile and Inventory Optimization](https://8974619.fs1.hubspotusercontent-na1.net/hubfs/8974619/SIO_Case_Study_FY24.pdf) - Gains in plant are expected to be around. $1.4M/year. • Return on investment of 3.3 months. • Better...

55. [MaterialMRT real time tracking - Maptek](https://www.maptek.com/forge/march_2022/materialmrt_real_time_tracking/) - MaterialMRT traces each parcel of material directly fed into the plant, or to and from a stockpile, ...

56. [Advanced Geometallurgical Characterization – Mini Pilot Plant ...](https://www.sgs.com/es-pe/noticias/2023/01/advanced-geometallurgical-characterization) - As a result, the Digital Twin allows an MPP metallurgical performance to be predicted under operatio...

57. [[PDF] Progress towards geometallurgical digital twins1](https://geomet.engineering.queensu.ca/wp-content/uploads/2021-01-Ortiz-Progress.pdf) - A geometallurgical digital twin (GDT) can be created by combining realistic models of the different ...

58. [Automatic search strategy for ROM stockpile recovery optimisation](https://www.ceecthefuture.org/resources/automatic-search-strategy-for-rom-stockpile-recovery-optimisation) - This paper considers a stockyard with available mineral information in the stockpiles using load and...

59. [US20230419226A1 - System and method for determining ...](https://patents.google.com/patent/US20230419226A1/en) - Determining the primary ore map for the stockpile may include adding flow data, irrigation data and ...

