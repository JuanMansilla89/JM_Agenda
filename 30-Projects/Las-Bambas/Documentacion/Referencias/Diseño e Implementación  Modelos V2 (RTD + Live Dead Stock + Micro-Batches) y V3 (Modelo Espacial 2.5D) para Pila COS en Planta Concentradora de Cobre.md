# Diseño e Implementación: Modelos V2 (RTD + Live/Dead Stock + Micro-Batches) y V3 (Modelo Espacial 2.5D) para Pila COS en Planta Concentradora de Cobre

***

## Resumen Ejecutivo

Este documento desarrolla en profundidad técnica los modelos **V2** y **V3** para la pila de mineral grueso (*Coarse Ore Stockpile*, COS) ubicada entre la chancadora primaria y la alimentación al molino SAG en una planta concentradora de cobre.

El modelo **V2** combina tres componentes que se implementan en capas acumulativas: (1) la **Distribución de Tiempos de Residencia** (RTD) paramétrica mediante el modelo de *N* tanques en serie (N-CSTR), que caracteriza la dispersión y mezcla del mineral a nivel global; (2) la separación explícita de **live stock / dead stock** con intercambio dinámico entre zonas, cuantificando la fracción volumétrica activa en función de la geometría de la pila y la posición de los feeders; y (3) el **tracking de micro-batches** con vector de atributos completo (ley Cu, Axb, BWI, PSD, humedad, origen), que sustituye el balance global por trazabilidad individual de lotes.[^1][^2][^3][^4][^5]

El modelo **V3** extiende el V2 añadiendo **discretización espacial 2.5D** de la pila en capas horizontales y sectores laterales, permitiendo representar explícitamente la heterogeneidad interna del material, la segregación granulométrica durante el apilamiento y los patrones de extracción diferenciados por posición de feeder. Este nivel corresponde a la arquitectura que implementan industrialmente sistemas como IntelliSense.io SIO y NTWIST OreMax como modelos 3D de bloques en tiempo real.[^6][^7][^8]

***

## Parte 1 — Modelo V2: RTD + Live/Dead Stock + Micro-Batches

### 1.1 Arquitectura General del Modelo V2

El V2 opera en tres capas interdependientes que se ejecutan secuencialmente en cada paso de tiempo \( \Delta t \):

```
┌─────────────────────────────────────────────┐
│  CAPA 1: Balance de masa + nivel (herencia V1)│
│  M(t+Δt) = M(t) + [Qin - Qout] · Δt         │
│  L(t) = f⁻¹(V(t)) = f⁻¹(M(t)/ρap)          │
└───────────────┬─────────────────────────────┘
                │
┌───────────────▼─────────────────────────────┐
│  CAPA 2: Live/Dead Stock                     │
│  V_live = φ · V_total                        │
│  φ = f(geometría, N_feeders, posición)       │
│  τ_live = V_live · ρap / Qout               │
└───────────────┬─────────────────────────────┘
                │
┌───────────────▼─────────────────────────────┐
│  CAPA 3: RTD + Micro-Batch Tracking          │
│  Cola de micro-batches → extracción ponderada│
│  Convolución C_out(t) = C_in * E(τ; N, τ̄)  │
└─────────────────────────────────────────────┘
```

### 1.2 Distribución de Tiempos de Residencia (RTD) — Fundamentos y Parametrización

#### 1.2.1 Definición y Propiedades

La RTD \( E(t) \) es la distribución de probabilidad que describe el tiempo que una unidad de masa de mineral permanece dentro de la pila COS antes de ser extraída por los feeders:[^9][^10]

\[
\int_0^{\infty} E(t)\, dt = 1
\]

Sus momentos estadísticos definen las características del sistema:[^3][^10]
- **Tiempo medio de residencia**: \( \bar{\tau} = \int_0^{\infty} t \cdot E(t)\, dt \)
- **Varianza**: \( \sigma^2 = \int_0^{\infty} (t - \bar{\tau})^2 \cdot E(t)\, dt \)
- **Función de distribución acumulada**: \( F(t) = \int_0^t E(\xi)\, d\xi \), que representa la fracción de material que ha salido antes del tiempo \( t \)

La relación entre los momentos permite determinar los parámetros del modelo:[^11][^3]

\[
N = \frac{\bar{\tau}^2}{\sigma^2}
\]

donde \( N \) es el número equivalente de compartimentos (no necesariamente entero). Para \( N = 1 \): mezcla perfecta (CSTR ideal). Para \( N \to \infty \): flujo pistón (FIFO puro). Una pila COS industrial típica opera con \( N \) entre 2 y 6, según la geometría y el régimen de extracción.[^1]

#### 1.2.2 Modelo N-CSTR (Tanques en Serie) — Formulación Completa

La función de densidad para el modelo de \( N \) tanques en serie es:[^12][^13]

\[
E(t) = \frac{N}{\bar{\tau}} \cdot \frac{\left(\frac{Nt}{\bar{\tau}}\right)^{N-1}}{(N-1)!} \cdot \exp\!\left(-\frac{Nt}{\bar{\tau}}\right)
\]

Esta expresión puede generalizarse a valores no enteros de \( N \) reemplazando \( (N-1)! \) por la función gamma \( \Gamma(N) \):

\[
E(t) = \frac{N}{\bar{\tau}} \cdot \frac{\left(\frac{Nt}{\bar{\tau}}\right)^{N-1}}{\Gamma(N)} \cdot \exp\!\left(-\frac{Nt}{\bar{\tau}}\right)
\]

La implementación discreta para paso de tiempo \( \Delta t \) evalúa \( E(k\Delta t) \) para \( k = 0, 1, 2, \ldots, T_{max}/\Delta t \) y normaliza la distribución resultante.[^12]

#### 1.2.3 RTD Dinámica (Tiempo Medio Variable)

En la pila COS el nivel varía continuamente, por lo que \( \bar{\tau}(t) \) no es constante. El tiempo medio de residencia del live stock es:

\[
\bar{\tau}(t) = \frac{V_{live}(t) \cdot \rho_{ap}(t)}{Q_{out}(t)} = \frac{M_{live}(t)}{Q_{out}(t)}
\]

La RTD dinámica se actualiza en cada paso de tiempo. Para conservar la propiedad de normalización cuando \( \bar{\tau} \) cambia, se recalcula la distribución completa y se aplica al tracking de micro-batches.[^3]

#### 1.2.4 Modelo de Dispersión Axial (alternativa)

Una alternativa al N-CSTR es el modelo de dispersión axial, que describe la RTD mediante el número de Péclet o Bodenstein \( Pe = \bar{u}L/D_{ax} \):[^3]

\[
E(\theta) = \sqrt{\frac{Pe}{4\pi\theta}} \cdot \exp\!\left(-\frac{(1-\theta)^2 Pe}{4\theta}\right)
\]

donde \( \theta = t/\bar{\tau} \) es el tiempo adimensional. Para \( Pe \to \infty \): flujo pistón; para \( Pe \to 0 \): mezcla perfecta. La relación con N-CSTR es aproximada: \( N \approx Pe/2 \) para dispersión moderada. Se recomienda el N-CSTR para implementación práctica por su mayor simplicidad computacional.[^14][^3]

### 1.3 Live Stock y Dead Stock — Cuantificación y Modelado

#### 1.3.1 Definiciones Operacionales

- **Live stock** \( V_{live} \): volumen de mineral que puede ser recuperado gravitacionalmente por los feeders en condiciones normales de operación. Es la fracción activa que participa del flujo.[^2]
- **Dead stock** \( V_{dead} \): volumen remanente que no fluye hacia los feeders bajo operación normal. Permanece estático formando zonas periféricas o de bajo ángulo de talud.[^15][^2]
- **Fracción de live stock** \( \varphi \): relación entre el volumen activo y el total.

\[
\varphi = \frac{V_{live}}{V_{total}} = \frac{V_{live}}{V_{live} + V_{dead}}
\]

#### 1.3.2 Estimación Analítica de la Fracción Live Stock

Para una pila cónica con un solo feeder central y extracción gravitacional, la fracción de volumen vivo se calcula según:[^2]

\[
\varphi = \frac{[\tan(\alpha)]^2}{[\tan(\alpha) + \tan(\beta)]^2}
\]

donde \( \alpha \) es el ángulo de reposo dinámico del mineral (ángulo de formación de la pila durante apilamiento, típicamente 35°–40° para mineral COS) y \( \beta \) es el ángulo de reclaim estático (ángulo del cono de extracción, típicamente 45°–55°).[^2]

Para feeders de sección rectangular con apertura finita, la fórmula se extiende a:[^2]

\[
\varphi = \frac{8 \cdot \left\{[\frac{D}{2}\tan(\alpha) + r\tan(\beta)] \cdot \left[\frac{D-2r}{2(1+\tan(\beta)/\tan(\alpha))} + r\right]^2 - r^3\tan(\beta)\right\}}{D^3 \tan(\alpha)}
\]

donde \( D \) es el diámetro de la pila, \( r = \sqrt{B_{ef} \times L / \pi} \) es el radio equivalente de la apertura del feeder (con \( B_{ef} \) el ancho efectivo y \( L \) la longitud), \( \alpha \) el ángulo de reposo y \( \beta \) el ángulo de extracción.[^2]

**Valores de referencia para mineral COS de cobre** (basados en propiedades típicas de granulometría gruesa, -100mm +0mm):[^16][^2]
- Ángulo de reposo \( \alpha \): 35°–42°
- Ángulo de reclaim \( \beta \): 45°–52°
- Fracción live stock \( \varphi \): 15%–35% para un feeder central único
- Para 2–4 feeders distribuidos: \( \varphi \): 35%–60% (incremento no lineal con el número de puntos de extracción)

#### 1.3.3 Modelo de Dos Compartimentos con Intercambio Dinámico

El modelo de dos compartimentos captura el intercambio lento de masa entre la zona activa (live) y la zona pasiva (dead):[^9][^1]

**Zona activa (A):**

\[
\frac{dM_A}{dt} = Q_{in}(t) - Q_{out}(t) + k_{DA} \cdot M_D - k_{AD} \cdot M_A
\]

**Zona muerta (D):**

\[
\frac{dM_D}{dt} = k_{AD} \cdot M_A - k_{DA} \cdot M_D
\]

donde:
- \( M_A(t) \): masa en zona activa (live stock) [ton]
- \( M_D(t) \): masa en zona muerta (dead stock) [ton]
- \( k_{AD} \): constante de transferencia activa→muerta [1/min] (flujo hacia dead zone cuando la pila crece)
- \( k_{DA} \): constante de transferencia muerta→activa [1/min] (reactivación de dead zone cuando la pila baja)

En equilibrio estacionario: \( k_{AD} \cdot M_A^{eq} = k_{DA} \cdot M_D^{eq} \), lo que implica \( k_{AD}/k_{DA} = M_D^{eq}/M_A^{eq} = (1-\varphi)/\varphi \).[^1]

**Balance de atributos en cada compartimento:**

\[
\frac{d(M_A \cdot a_A)}{dt} = Q_{in} \cdot a_{in} - Q_{out} \cdot a_A + k_{DA} \cdot M_D \cdot a_D - k_{AD} \cdot M_A \cdot a_A
\]

\[
\frac{d(M_D \cdot a_D)}{dt} = k_{AD} \cdot M_A \cdot a_A - k_{DA} \cdot M_D \cdot a_D
\]

El atributo de salida hacia SAG es \( a_{out}(t) = a_A(t) \), ya que solo la zona activa alimenta los feeders.

#### 1.3.4 Variación Dinámica de φ con el Nivel

La fracción live stock no es constante. Depende del nivel \( L(t) \):[^17][^16]

- A nivel **alto** (pila llena): \( \varphi \approx \varphi_{ref} \) (valor de diseño)
- A nivel **bajo** (menos de 20% de capacidad): \( \varphi \) puede crecer transitoriamente (el material de dead zone se activa), pero también puede decrecer si el flujo se canaliza en *funnel flow*
- Durante el llenado rápido: parte del material ingresado va directo a dead zone (efecto de stratification)

Curva de calibración empírica recomendada:

\[
\varphi(L) = \varphi_{min} + (\varphi_{max} - \varphi_{min}) \cdot \left(\frac{L}{L_{max}}\right)^\gamma
\]

con \( \gamma \approx 0.5 \) para flujo tipo funnel flow y \( \gamma \approx 1.0 \) para expanded flow.[^17]

### 1.4 Micro-Batch Tracking — Diseño del Sistema

#### 1.4.1 Concepto y Justificación

El micro-batch tracking (denominado *distributed particle simulation* o *pseudo-particle tracking* en la literatura especializada) discretiza el flujo continuo de mineral en unidades lógicas de masa que transportan individualmente sus atributos geometalúrgicos. Esto permite rastrear el origen y las propiedades de cada fracción de mineral desde chancado hasta SAG feed, sin asumir mezcla perfecta ni propagar un único promedio ponderado.[^4][^5]

#### 1.4.2 Estructura del Micro-Batch

Cada micro-batch \( b_k \) tiene los siguientes atributos:

```python
@dataclass
class MicroBatch:
    id: str                   # UUID único
    t_in: float               # timestamp de entrada a pila [s]
    t_out: Optional[float]    # timestamp de salida [s], None si en pila
    mass: float               # masa del batch [ton]
    attributes: dict          # atributos del mineral:
                              #   cu_grade: float    [%Cu]
                              #   axb: float         [parámetro impacto-abrasión]
                              #   bwi: float         [Bond Work Index, kWh/t]
                              #   psd_p80: float     [P80 de PSD, mm]
                              #   moisture: float    [humedad, %]
                              #   origin_block: str  [ID bloque de mina]
                              #   origin_pit: str    [pit/fase/banco]
    position: str             # 'active' o 'dead'
    layer: int                # capa lógica (para V2 simplificado)
    weight: float             # peso de extracción (actualizado en cada paso)
```

El tamaño del micro-batch es un parámetro de diseño. Se recomienda \( \Delta m = Q_{in} \cdot \Delta t \), creando un nuevo batch por cada paso de tiempo o por cada evento discreto de descarga del tripper.[^4]

#### 1.4.3 Lógica de Extracción y Pesos de Reclaim

El peso de extracción \( w_k(t) \) de cada micro-batch determina su probabilidad de ser seleccionado para salir hacia SAG en el instante \( t \). Este peso es función de:[^18][^4]

\[
w_k(t) = f\left(\text{posición}_k,\ \text{antigüedad}_k,\ \text{nivel}(t),\ \text{feeders activos}(t)\right)
\]

Las reglas de extracción se pueden configurar según el modelo de flujo asumido:

| Régimen de flujo | Regla de peso \( w_k \) |
|-----------------|------------------------|
| FIFO puro (plug flow) | \( w_k \propto \delta(t - t_{in,k} - \bar{\tau}) \) — sale exactamente en \( \bar{\tau} \) |
| RTD N-CSTR | \( w_k \propto E(t - t_{in,k}; N, \bar{\tau}(t)) \) — probabilidad según RTD actual |
| Extracción LIFO (funnel flow) | \( w_k \propto (t - t_{in,k})^{-1} \) — el material más reciente sale antes |
| Mixto activo/muerto | \( w_k \propto E(t-t_{in,k}) \cdot \mathbb{1}[\text{batch en zona activa}] \) |

#### 1.4.4 Algoritmo de Extracción en Cada Paso de Tiempo

```python
def extract_batches(batches: list[MicroBatch], 
                    Q_out: float,       # flujo de extracción [ton/min]
                    dt: float,          # paso de tiempo [min]
                    rtd_params: dict,   # {N, tau_live}
                    t_current: float) -> list[MicroBatch]:
    """
    Extrae masa equivalente a Q_out*dt de la cola de micro-batches,
    ponderada por la RTD N-CSTR actual.
    """
    mass_to_extract = Q_out * dt
    extracted = []
    
    # 1. Calcular pesos de extracción según RTD
    for b in batches:
        if b.position == 'active':
            age = t_current - b.t_in
            b.weight = ncstr_pdf(age, rtd_params['N'], rtd_params['tau_live'])
    
    # 2. Normalizar pesos
    total_w = sum(b.weight for b in batches if b.position == 'active')
    
    # 3. Extraer masa proporcionalmente a los pesos
    remaining_to_extract = mass_to_extract
    while remaining_to_extract > 0 and any_active_batches(batches):
        # Selección estocástica o determinística ponderada por w_k
        batch = weighted_select(batches)
        extract_mass = min(batch.mass, remaining_to_extract)
        
        new_batch = split_batch(batch, extract_mass)
        new_batch.t_out = t_current
        extracted.append(new_batch)
        
        batch.mass -= extract_mass
        remaining_to_extract -= extract_mass
        
        if batch.mass < EPSILON:
            batches.remove(batch)
    
    return extracted
```

#### 1.4.5 Cálculo del Atributo de Salida hacia SAG

El atributo de salida en cada paso es el promedio ponderado por masa de los batches extraídos:

\[
a_{SAG}(t) = \frac{\sum_{k \in \text{extraídos}(t)} m_k \cdot a_k}{\sum_{k \in \text{extraídos}(t)} m_k}
\]

Con ventana móvil para suavizar la predicción:

\[
a_{SAG}^{smooth}(t) = \frac{\int_{t-W}^t a_{SAG}(\xi) \cdot Q_{out}(\xi)\, d\xi}{\int_{t-W}^t Q_{out}(\xi)\, d\xi}
\]

donde \( W \) es la ventana de promediado (típicamente 5–15 min para predicción a corto plazo).[^8]

### 1.5 Estimación y Calibración de Parámetros RTD

#### 1.5.1 Estimación desde Datos Operacionales Históricos

Sin campaña de trazadores, los parámetros RTD se pueden estimar retrospectivamente desde datos históricos de atributos de mineral, aprovechando variaciones naturales de calidad:[^10][^3]

**Paso 1 — Identificar eventos de transición**: seleccionar períodos donde el mineral entrante cambió significativamente de atributo (e.g., cambio de frente de chancado con diferente ley Cu).

**Paso 2 — Ajustar RTD a la curva de respuesta de salida**: dado el perfil de entrada \( C_{in}(t) \) (del modelo de bloques de mina o laboratorio) y el perfil de salida medido \( C_{out}(t) \) (muestras LIMS en SAG feed), encontrar \( N \) y \( \bar{\tau} \) que minimizan:

\[
\text{minimize}_{N,\bar{\tau}}\quad \sum_{t} \left[C_{out}(t) - \int_0^t C_{in}(t-\xi) \cdot E(\xi; N, \bar{\tau})\, d\xi\right]^2
\]

**Paso 3 — Validación cruzada**: usar 70% de los datos para calibración y 30% para validación. Reportar RMSE y R² por atributo.

#### 1.5.2 Estimación desde Varianza de la Señal

En ausencia de datos suficientes, el número de compartimentos equivalentes puede estimarse desde la relación señal-varianza:[^11][^3]

\[
N \approx \frac{\bar{\tau}^2}{\sigma^2_{output} - \sigma^2_{input}}
\]

Donde \( \sigma^2_{input} \) y \( \sigma^2_{output} \) son las varianzas temporales de la señal de atributo en la entrada y salida, respectivamente, para un período de nivel estable.

#### 1.5.3 Estimación desde Campaña RFID

La estimación más confiable se obtiene con trazadores físicos. Con SmartTag (Metso) o tecnologías equivalentes:[^19][^20]

1. Instalar 200–500 tags RFID pasivos (UHF, 860–960 MHz) en el chute de descarga de la chancadora
2. Instalar antena lectora en la correa de alimentación SAG (debajo del chute de carga)
3. Registrar el tiempo de tránsito de cada tag: \( \tau_k = t_{read,k} - t_{inject,k} \)
4. Construir el histograma de tiempos de tránsito → RTD experimental
5. Ajustar parámetros N y \( \bar{\tau} \) al histograma observado

Campañas en operaciones reales han mostrado distribuciones de tiempos de residencia entre 30 minutos y 8+ horas, con la moda típica entre 2 y 4 horas.[^20]

#### 1.5.4 Re-calibración Periódica Automática

Con el sistema operando, implementar re-calibración automática usando un filtro de mínimos cuadrados recursivos (RLS) sobre una ventana deslizante de K períodos de observación:

\[
\hat{\theta}_{t+1} = \hat{\theta}_t + K_t \cdot \left[C_{out}(t) - \hat{C}_{out}(t|\hat{\theta}_t)\right]
\]

Activar alerta cuando el error de predicción excede 2σ durante 5+ pasos consecutivos, indicando posible cambio en el régimen de flujo de la pila.

***

## Parte 2 — Modelo V3: Modelo Compartimental Espacial 2.5D

### 2.1 Concepto y Justificación

El modelo V3 extiende el V2 añadiendo **resolución espacial** a la representación de la pila. En lugar de tratar toda la zona activa como un compartimento homogéneo, la pila se discretiza en una grilla de celdas (**capas × sectores**) donde cada celda tiene su propia masa y vector de atributos.[^7][^6][^8]

El término "2.5D" indica que la discretización es completa en el plano vertical (altura) y en el plano radial/angular (sectores), pero el modelo no resuelve la mecánica continua de fluido entre celdas con la precisión de un solver CFD o DEM. En su lugar, utiliza **reglas simplificadas de flujo gravitacional** basadas en el ángulo de reposo y la proximidad a los feeders.[^21][^2]

Esta arquitectura corresponde exactamente a la usada por IntelliSense.io SIO, que construye un "3D block model" de la pila calibrado con escaneos topográficos, rastreando propiedades por celda en tiempo real.[^22][^6][^8]

### 2.2 Discretización Espacial de la Pila

#### 2.2.1 Sistema de Coordenadas y Grid

La pila COS se define en coordenadas cilíndricas \( (r, \theta, z) \) discretizadas:

- \( N_z \) **capas horizontales** de espesor \( \Delta z \) (eje vertical, índice \( i \))
- \( N_r \) **anillos concéntricos** de ancho radial \( \Delta r \) (índice \( j \))
- \( N_\theta \) **sectores angulares** de apertura \( \Delta\theta = 2\pi/N_\theta \) (índice \( k \))

Cada celda \( (i, j, k) \) es un voxel de volumen:

\[
\Delta V_{ijk} = \frac{1}{2}\left[(r_j + \Delta r)^2 - r_j^2\right] \cdot \Delta\theta \cdot \Delta z
\]

Para la mayoría de las pilas COS con extracción subterránea por hoppers, el sistema se puede simplificar a capas \( (N_z) \) y sectores \( (N_s) \) cilíndricos sin resolución radial interna, reduciendo la grilla a \( N_z \times N_s \) celdas. Para una pila con 4 feeders y 10 capas: 40 celdas totales, computacionalmente trivial.

#### 2.2.2 Parámetros de Discretización Recomendados

| Parámetro | Valor inicial recomendado | Criterio de selección |
|-----------|--------------------------|----------------------|
| \( N_z \) (capas verticales) | 8–15 | \( \Delta z \approx H_{max}/N_z \approx 2\text{–}4 \text{ m} \) |
| \( N_s \) (sectores) | 4–8 (uno por cuadrante o por feeder) | Igual al número de feeders o múltiplo de él |
| \( N_r \) (anillos radiales) | 2–4 | Para capturar segregación núcleo/periferia |
| \( \Delta t \) (paso de tiempo) | 1–5 min | Resolución de datos PI/SCADA |
| Masa mínima por celda | 1 ton | Por debajo: celda "vacía" |

#### 2.2.3 Inicialización del Estado de la Pila

El estado inicial de la grilla 2.5D se construye desde datos disponibles:

```python
class StockpileGrid:
    def __init__(self, Nz: int, Ns: int, Nr: int,
                 geometry: StockpileGeometry,
                 feeder_positions: list[FeedPosition]):
        # Grilla de celdas: [capa, sector, anillo]
        self.cells = np.zeros((Nz, Ns, Nr), dtype=CellState)
        
        # Inicializar desde perfil de nivel medido
        self.initialize_from_level(level_pct=current_level)
        
        # Asignar atributos iniciales desde promedio de inventario
        self.initialize_attributes(default_attributes=plant_average)
        
        # Calcular mapa de influencia de feeders
        self.feeder_influence = compute_influence_map(
            feeder_positions, geometry
        )
```

### 2.3 Modelo de Apilamiento (Stacking)

#### 2.3.1 Lógica de Depósito del Tripper/Stacker

Cuando la chancadora opera y el tripper/stacker descarga mineral sobre la pila, el material se deposita siguiendo el patrón de posicionamiento del tripper. La celda receptora se determina por la posición angular y radial del punto de descarga:[^23][^21]

```python
def deposit_batch(batch: MicroBatch, 
                  stacker_pos: StackerPosition,
                  grid: StockpileGrid):
    """
    Deposita el micro-batch en la celda superficial correspondiente.
    La capa superficial es la más alta con masa > 0 en ese sector.
    """
    sector = pos_to_sector(stacker_pos.angle, grid.Ns)
    ring = pos_to_ring(stacker_pos.radius, grid.Nr)
    surface_layer = grid.get_surface_layer(sector, ring)
    
    # Agregar masa y ponderar atributos en la celda
    grid.cells[surface_layer, sector, ring].add_batch(batch)
    
    # Aplicar redistribución por ángulo de reposo
    # (material en exceso del ángulo de reposo fluye a celdas adyacentes)
    grid.apply_repose_angle_rule(surface_layer, sector, ring)
```

#### 2.3.2 Regla del Ángulo de Reposo para Redistribución

Cuando se deposita material en una celda, si la altura local excede la altura del cono de equilibrio (ángulo de reposo), el material excedente se redistribuye a celdas adyacentes de menor altura:[^21][^2]

\[
\Delta h_{excess} = h_{ij} - h_{eq}(r_j, \alpha)
\]

\[
\Delta h_{eq}(r_j, \alpha) = h_{center} - r_j \cdot \tan(\alpha)
\]

Donde \( h_{center} \) es la altura en el eje de apilamiento, \( r_j \) el radio de la celda y \( \alpha \) el ángulo de reposo dinámico. El exceso fluye hacia la celda de menor \( h \) en la vecindad (regla de autómata celular simplificado).[^2]

#### 2.3.3 Modelo de Segregación Simplificado

Durante el apilamiento, la segregación granulométrica genera que las partículas más gruesas migren hacia la periferia (mayor radio) y las más finas se concentren en el núcleo central. Modelo simplificado de dos fracciones:[^24][^21]

```python
def apply_segregation(batch: MicroBatch,
                      target_cell: (layer, sector, ring),
                      grid: StockpileGrid,
                      segregation_factor: float = 0.15):
    """
    Redistribuye fracción de finos hacia celda central y gruesos hacia periferia.
    segregation_factor: fracción [0-1] del contenido que se redistribuye.
    """
    fines_fraction = batch.attributes['psd_fines_pct']  # % < 10mm
    coarse_fraction = 1.0 - fines_fraction
    
    # Finos: van preferentemente al anillo central (ring=0)
    fines_to_center = batch.mass * fines_fraction * segregation_factor
    coarse_to_perimeter = batch.mass * coarse_fraction * segregation_factor
    
    # Depositar en celdas correspondientes con atributos modificados
    grid.cells[target_cell].add_mass(
        batch.mass * (1 - segregation_factor), batch.attributes)
    grid.cells[layer, sector, 0].add_mass(
        fines_to_center, fines_rich_attributes(batch))
    grid.cells[layer, sector, -1].add_mass(
        coarse_to_perimeter, coarse_rich_attributes(batch))
```

### 2.4 Modelo de Extracción (Reclaim)

#### 2.4.1 Mapa de Influencia de Feeders

Cada feeder activo extrae material preferentemente de las celdas de su zona de influencia. El mapa de influencia \( \Phi_{ij}^{(f)} \) asigna a cada celda una probabilidad de ser reclamada por el feeder \( f \):[^8][^16]

\[
\Phi_{ij}^{(f)} = g\left(d_{ij}^{(f)}, h_{ij}, \alpha_{reclaim}\right)
\]

donde \( d_{ij}^{(f)} \) es la distancia horizontal de la celda \( (i,j) \) al feeder \( f \), \( h_{ij} \) es la altura de la celda sobre el nivel del feeder, y \( \alpha_{reclaim} \) es el ángulo de extracción del material.

Implementación práctica:

```python
def compute_influence_map(feeder_positions: list[FeedPosition],
                          grid: StockpileGrid,
                          alpha_reclaim: float = 50.0) -> np.ndarray:
    """
    Calcula la influencia de cada feeder sobre cada celda de la grilla.
    La influencia decae con la distancia al feeder y aumenta con la proximidad
    a la zona de flujo cónico (funnel flow).
    """
    influence = np.zeros((len(feeder_positions), grid.Nz, grid.Ns, grid.Nr))
    
    for f_idx, feeder in enumerate(feeder_positions):
        for i, j, k in grid.iterate_cells():
            # Vector 3D de celda a feeder
            dist_h = horizontal_distance(grid.cell_center(i,j,k), feeder.pos)
            height_above = grid.cell_height(i) - feeder.elevation
            
            # Verificar si la celda está dentro del cono de influencia
            if height_above > 0:
                cone_radius = height_above * tan(alpha_reclaim_rad)
                if dist_h <= cone_radius:
                    # Peso proporcional a la proximidad al eje del cono
                    influence[f_idx, i, j, k] = 1.0 - (dist_h / cone_radius)**2
    
    return influence
```

#### 2.4.2 Protocolo de Extracción por Paso de Tiempo

```python
def reclaim_step(grid: StockpileGrid,
                 active_feeders: list[int],
                 Q_out: float,
                 dt: float) -> list[MicroBatch]:
    """
    Extrae masa equivalente a Q_out*dt de las celdas de la grilla,
    ponderada por el mapa de influencia de los feeders activos.
    """
    mass_to_extract = Q_out * dt
    extracted_batches = []
    
    # Combinar influencias de feeders activos
    combined_influence = sum(
        grid.feeder_influence[f] for f in active_feeders
    )
    
    # Normalizar solo para celdas con masa > 0
    combined_influence = np.where(
        grid.mass > 0, combined_influence, 0
    )
    total_influence = combined_influence.sum()
    if total_influence > 0:
        combined_influence /= total_influence
    
    # Extraer proporcionalmente a la influencia
    for cell in grid.cells_by_influence_desc(combined_influence):
        if mass_to_extract <= 0:
            break
        
        cell_extract = min(cell.mass * combined_influence[cell.idx],
                           mass_to_extract)
        if cell_extract > EPSILON:
            batch = cell.extract_mass(cell_extract)
            extracted_batches.append(batch)
            mass_to_extract -= cell_extract
    
    # Redistribuir la pila después de la extracción
    grid.settle_after_extraction()
    
    return extracted_batches
```

#### 2.4.3 Consolidación Post-Extracción

Después de cada extracción, las celdas superiores de la grilla deben "asentarse" para representar el colapso gravitacional del material:[^21][^2]

```python
def settle_after_extraction(grid: StockpileGrid):
    """
    Propaga el material hacia abajo aplicando la regla del ángulo de reposo.
    El material en celdas superiores desciende si la celda inferior tiene
    espacio disponible (nivel < ángulo de reposo).
    """
    for layer in range(grid.Nz - 1, 0, -1):  # de arriba hacia abajo
        for sector in range(grid.Ns):
            for ring in range(grid.Nr):
                cell_below = grid.cells[layer-1, sector, ring]
                cell_above = grid.cells[layer, sector, ring]
                
                if cell_above.mass > 0 and cell_below.has_capacity():
                    transfer_mass = min(cell_above.mass,
                                       cell_below.available_capacity())
                    cell_below.absorb(cell_above, transfer_mass)
                    cell_above.mass -= transfer_mass
```

### 2.5 Integración V2 + V3: Flujo de Atributos

El modelo V3 hereda y extiende el V2. La diferencia clave es que en V3 el balance de atributos se hace **por celda** en lugar de por compartimento global:

| Aspecto | V2 | V3 |
|---------|----|----|
| Unidad de seguimiento | Micro-batch en cola temporal | Celda (i,j,k) en grilla 3D |
| Representación espacial | Ninguna (compartimento único) | Explícita por capa/sector/anillo |
| Segregación | No capturada | Capturada por reglas de redistribución |
| Extracción | RTD probabilística global | Mapa de influencia por feeder |
| Datos adicionales | Solo flujos y atributos de entrada | + Posición stacker + geometría pila |
| Costo computacional | < 1 ms por paso | 10–500 ms por paso (según N_celdas) |

### 2.6 Balance de Atributos en la Grilla

El balance de atributos en cada celda \( (i,j,k) \) es:

\[
\frac{d(m_{ijk} \cdot a_{ijk})}{dt} = \dot{m}_{in,ijk} \cdot a_{in,ijk} - \dot{m}_{out,ijk} \cdot a_{ijk}
+ \sum_{\text{nbr}} J_{ijk,nbr} \cdot a_{nbr}
\]

donde \( J_{ijk,nbr} \) es el flujo de intercambio entre celdas adyacentes (gravedad + redistribución por ángulo de reposo) y \( a_{ijk} \) es el atributo promedio en la celda. Para 
calcular \( a_{ijk} \) se mantiene la media ponderada por masa de todos los micro-batches que han contribuido a esa celda:

\[
a_{ijk}(t) = \frac{\sum_k m_k \cdot a_k \cdot \mathbb{1}[\text{batch } k \text{ en celda}(i,j,k)]}{\sum_k m_k \cdot \mathbb{1}[\text{batch } k \text{ en celda}(i,j,k)]}
\]

***

## Parte 3 — Datos de Entrada, Pipeline y Validación

### 3.1 Pipeline de Datos

Ambo modelos requieren un pipeline de datos confiable. La arquitectura recomendada es:

```
[SCADA/DCS/PI] ──► [Data Validation Layer] ──► [State Estimator V2/V3]
     │                    │                           │
  timestamps           Gap filling               Balance de masa
  flujos               Outlier removal           RTD Update
  estados              Unit conversion            Celda update
  nivel                Timestamp align           Atributo update
     │
[LIMS]       ──► [Attribute Mapper]  ──► [Micro-batch attributes]
[FMS/Dispatch] ──► [Block Model Link] ──► [Origin tracking]
```

#### 3.1.1 Validaciones Críticas por Variable

| Variable | Validación recomendada | Acción ante dato inválido |
|----------|----------------------|--------------------------|
| Flujo chancado (tph) | Rango físico [0, Q_max]; rate-of-change < 300 tph/min | Sustituir por promedio últimos 5 min o 0 si equipo en falla |
| Flujo SAG (tph) | Consistencia con velocidad correa × carga pesómetro | Usar pesómetro como fuente primaria |
| Nivel pila (%) | Rango [^25]; variación máxima consistente con balance de masa | Re-estimar desde balance de masa acumulado |
| Densidad aparente (t/m³) | Rango [1.4, 2.2] para mineral Cu; correlación con humedad | Mantener último valor válido con alerta de calidad |
| Estados equipos | Booleano o multi-estado discreto | Inferir desde señales de corriente/velocidad |
| Atributos LIMS | Frecuencia mínima 4 muestras/turno; rango físico | Interpolación lineal entre muestras |

### 3.2 Calibración del Modelo V2

#### 3.2.1 Secuencia de Calibración Recomendada

**Paso 1 — Curva nivel–volumen–masa** (semana 1)

Utilizar registros históricos de radar/ultrasonido de nivel, pesómetros de correa y densidad aparente estimada:

\[
M_{est}(t) = \int_0^t [Q_{in}(\xi) - Q_{out}(\xi)] \, d\xi + M_0
\]

Ajustar \( V(L) \) minimizando el error entre \( M_{est} \) y \( \rho_{ap} \cdot V(L(t)) \).

**Paso 2 — Fracción live stock φ** (semana 2)

Estimar analíticamente usando las ecuaciones de la Sección 1.3.2, luego refinar empíricamente: cuando la pila llega a nivel mínimo y se detiene la extracción, la masa remanente observable es el dead stock.

**Paso 3 — Parámetros RTD (N, τ̄)** (semanas 2–4)

Ajustar mediante optimización sobre datos históricos (ver Sección 1.5.1). Valor inicial: \( N = 3 \), \( \bar{\tau} = M_{live}/\bar{Q}_{out} \).

**Paso 4 — Constantes de intercambio (k_AD, k_DA)** (semanas 3–5)

\[
\frac{k_{AD}}{k_{DA}} = \frac{1-\varphi}{\varphi}
\]

El producto \( k_{AD} \cdot k_{DA} \) controla la velocidad de intercambio. Calibrar desde la respuesta transitoria de atributos cuando el nivel cambia significativamente.

#### 3.2.2 Criterios de Aceptación

| KPI | Umbral de aceptación | Período de evaluación |
|-----|---------------------|----------------------|
| RMSE balance de masa | < 3% del inventario promedio | Mensual |
| R² ley Cu SAG feed (1h) | > 0.60 | Por turno |
| R² ley Cu SAG feed (4h) | > 0.45 | Por turno |
| RMSE nivel de pila | < 5% de la escala | Por hora |
| Coverage dead stock | ±20% vs estimación inicial | Trimestral |

### 3.3 Calibración del Modelo V3

#### 3.3.1 Levantamiento Geométrico y Topografía

El modelo V3 requiere una caracterización geométrica inicial y actualización periódica:

1. **Relevamiento topográfico inicial**: usando drone fotogramétrico o LIDAR terrestre, obtener nube de puntos de la pila. Procesar con QGIS, CloudCompare o software equivalente para obtener DEM.[^2]
2. **Cálculo del volumen inicial por sector**: integrar el DEM sobre la grilla \( (r, \theta) \) para obtener \( V_{ijk}(t_0) \) y así \( M_{ijk}(t_0) = \rho_{ap} \cdot V_{ijk}(t_0) \)
3. **Actualización periódica**: relevamiento mensual o ante cambios operacionales significativos (cambio de punto de descarga, mantenimiento de feeder)

#### 3.3.2 Calibración del Mapa de Influencia de Feeders

El ángulo de extracción \( \alpha_{reclaim} \) y la distribución de influencia entre celdas se calibran comparando la distribución predicha de atributos en SAG feed contra muestras LIMS:

```python
def calibrate_influence_map(grid: StockpileGrid,
                             historical_data: DataFrame,
                             n_iterations: int = 1000):
    """
    Optimiza alpha_reclaim y la distribución lateral de influencia
    minimizando el error de predicción de atributos en SAG feed.
    """
    optimizer = scipy.optimize.minimize(
        fun=simulation_error,
        x0=[50.0, *initial_weights],   # alpha_reclaim + pesos laterales
        args=(grid, historical_data),
        method='L-BFGS-B',
        bounds=[(30, 65)] + [(0, 1)] * n_feeders
    )
    return optimizer.x
```

### 3.4 Estrategia de Validación Completa

#### 3.4.1 Validación en Retroceso (Backtesting)

Usando los últimos 6–12 meses de datos históricos, ejecutar la simulación del modelo V2/V3 y comparar predicciones contra observaciones reales:

- Seleccionar eventos de control históricos: períodos con datos de LIMS frecuentes (≥ 8 muestras/turno)
- Ejecutar el modelo en modo "replay" con los inputs históricos
- Calcular métricas por atributo y por horizonte de predicción (15 min, 1h, 4h)

#### 3.4.2 Validación con Trazadores RFID

Campaña mínima recomendada para un piloto industrial:[^26][^20]

| Parámetro | Valor recomendado |
|-----------|------------------|
| Número de tags por campaña | 200–500 tags |
| Tecnología | UHF RFID pasivo (860-960 MHz), cápsula plástica 50×25mm |
| Punto de inyección | Chute de salida chancadora primaria |
| Puntos de lectura | Correa de alimentación SAG (antena bajo chute de carga) |
| Duración de campaña | 48–72 h continuas (cubre al menos 2 cambios de nivel) |
| Procesamiento | Histograma de tiempos tránsito → ajuste RTD → actualización parámetros |
| Frecuencia | Campaña anual o ante cambios operacionales mayores |

#### 3.4.3 Validación Continua Operacional

Durante la operación normal, el modelo se valida automáticamente mediante:

1. **Panel de reconciliación diaria**: balance de masa (toneladas chancadas vs. toneladas consumidas SAG ± inventario)
2. **Error de predicción de atributos**: comparar predicción de ley Cu en feed SAG (1h y 4h) contra muestra LIMS del turno
3. **Alerta de deriva**: si el error de predicción medio (últimas 24h) > umbral, lanzar re-calibración

***

## Parte 4 — Implementación y Stack Tecnológico

### 4.1 Arquitectura de Software Recomendada

La implementación de V2/V3 para entorno industrial se recomienda en **Python 3.11+** con las siguientes librerías principales:

| Módulo | Librería | Justificación |
|--------|----------|---------------|
| Core del modelo | NumPy, SciPy | Eficiencia numérica para grilla 2.5D y convolución RTD |
| Pipeline de datos | Pandas, PyArrow | Ingesta y procesamiento de series temporales |
| Integración PI/SCADA | `osipi` (PI Web API) o OPCUA | Conexión a historización industrial |
| Optimización calibración | SciPy optimize, Optuna | Ajuste de parámetros N, τ, φ |
| API REST | FastAPI | Exposición del modelo como microservicio |
| Serialización estado | MessagePack o Pickle | Snapshot periódico del estado del modelo |
| Dashboard | Power BI (DirectQuery) o Dash | Visualización para operadores |
| Logging/observabilidad | Prometheus + Grafana | Monitoreo de KPIs del modelo en producción |
| Almacenamiento de eventos | TimescaleDB o InfluxDB | Base de datos de series temporales |

### 4.2 Estructura de Módulos

```
cos_model/
├── core/
│   ├── mass_balance.py        # Balance de masa discreto (base V1)
│   ├── level_volume.py        # Curva nivel-volumen-masa
│   ├── rtd.py                 # RTD N-CSTR, parámetros, convolución
│   ├── live_dead_stock.py     # Dos compartimentos, φ dinámico
│   └── micro_batch.py         # Definición y gestión de micro-batches
├── v2/
│   ├── model_v2.py            # Modelo V2 integrado
│   ├── extractor.py           # Lógica de extracción ponderada por RTD
│   └── attribute_tracker.py   # Balance de atributos + convolución
├── v3/
│   ├── grid.py                # Grilla 2.5D: celdas, capas, sectores
│   ├── stacking.py            # Modelo de apilamiento + segregación
│   ├── reclaim.py             # Extracción por mapa de influencia
│   ├── geometry.py            # Ángulo de reposo, curva nivel-volumen
│   └── model_v3.py            # Modelo V3 integrado
├── calibration/
│   ├── rtd_calibrator.py      # Ajuste N, τ desde históricos/RFID
│   ├── phi_estimator.py       # Estimación live/dead stock
│   └── validator.py           # Backtesting y métricas de validación
├── api/
│   ├── main.py                # FastAPI endpoints
│   ├── schemas.py             # Pydantic models para I/O
│   └── state_manager.py       # Serialización y recuperación de estado
└── data/
    ├── pi_connector.py        # Integración OSIsoft PI
    ├── lims_connector.py      # Integración LIMS
    └── blockmodel_loader.py   # Carga modelo de bloques de mina
```

### 4.3 API REST — Endpoints Principales

```
POST /api/v1/model/step          # Avanzar el modelo un paso de tiempo
GET  /api/v1/state/summary       # Estado actual: masa, nivel, delay, live/dead
GET  /api/v1/forecast/{horizon}  # Predicción de atributos SAG feed en N minutos
GET  /api/v1/grid/snapshot       # Snapshot del estado 2.5D de la pila (V3)
POST /api/v1/calibrate           # Disparar re-calibración de parámetros
GET  /api/v1/metrics/kpis        # KPIs de rendimiento del modelo
POST /api/v1/events/batch        # Inyectar evento manual (e.g., cambio de frente)
```

### 4.4 Consideraciones de Desempeño

| Operación | Tiempo estimado por paso | Requisito de hardware mínimo |
|-----------|--------------------------|-----------------------------|
| Balance de masa V1 | < 0.01 ms | Cualquier servidor |
| RTD + convolución V2 | 1–5 ms | 4 cores, 8 GB RAM |
| Tracking 1000 micro-batches V2 | 5–20 ms | 4 cores, 8 GB RAM |
| Grilla 2.5D 10×8×3=240 celdas V3 | 10–50 ms | 8 cores, 16 GB RAM |
| Calibración RTD (1000 iteraciones) | 2–10 s | 8 cores, puede correr offline |

Para paso de tiempo \( \Delta t = 1 \) min, todos los modelos cumplen el requisito de tiempo real con hardware estándar de servidor industrial.

***

## Parte 5 — Casos de Uso y Valor Operacional

### 5.1 Predicción de Atributos en Feed SAG con Horizonte de 1–4 Horas

El modelo V2/V3 puede generar una predicción de ley Cu, Axb, PSD y humedad en el feed SAG para los próximos 1–4 h, usando el estado actual de la pila y el plan de chancado (flujo y origen del mineral). Esta predicción permite:[^27][^8]

- Ajustar anticipadamente la tasa de alimentación del SAG para mantener un throughput óptimo
- Alertar al operador de feed de alta dureza antes de su llegada
- Informar la estrategia de blending al planificador de turno

IntelliSense.io reportó una reducción de variabilidad de feed de 5–8% en un cliente minero usando este tipo de predicción basada en modelo de bloque 3D de pila.[^27]

### 5.2 Control de Blending y Estabilización de Ley

El modelo V3 permite seleccionar qué feeders activar para maximizar la homogeneidad del blend extraído. Si se conoce la distribución espacial de atributos en la pila (e.g., zona A con ley Cu alta, zona B con baja), se puede optimizar la combinación de feeders para lograr un blend más uniforme.[^28][^7][^8]

### 5.3 Detección de Material Fuera de Especificación

Mediante el tracking de origen de micro-batches, el modelo puede anticipar la llegada de material de alta dilución, alta humedad o material contaminado. La alerta se emite con la antelación equivalente al delay temporal del modelo.[^25]

### 5.4 Reconciliación de Inventario y Trazabilidad Mine-to-Mill

El estado del modelo provee en todo momento la estimación más precisa del inventario de pila: masa total, masa live, masa dead y distribución de atributos. Esto permite:[^29][^30]

- Cerrar el balance de masa y metal mensual con mayor precisión
- Identificar discrepancias entre toneladas despachadas desde mina y toneladas procesadas en planta
- Generar informes auditables de trazabilidad mineral origin-to-SAG

---

## References

1. [Residence time distribution (RTD) revisited - PMC - NIH](https://pmc.ncbi.nlm.nih.gov/articles/PMC7532993/) - Residence Time Distribution (RTD) theory is revisited and tracer technology discussed. The backgroun...

2. [[PDF] Live volume of conical stockpile reclaimed by gravity](https://rsdjournal.org/rsd/article/download/28908/25055/332357) - This article addresses the live volume fraction of conical stockpile recovered through underground h...

3. [[PDF] Leveraging Residence Time Distribution (RTD) Models to ...](https://pqri.org/wp-content/uploads/2022/05/9-Krull-PQRI-RTD-Models-17May22-FINAL.pdf) - Residence Time Distribution Models. • RTDs commonly fitted to two models o Axial Dispersion Model. ▫...

4. [Digital Twins with Distributed Particle Simulation for Mine- ...](https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1554560&language=sv) - Digital Twins with Distributed Particle Simulation for Mine-to-Mill Material Tracking ... In digital...

5. [[PDF] Digital twins with distributed particle simulation for mine-to-mill ...](https://www.semanticscholar.org/paper/1ef2481909e3cec828ca16bf24ee0750207e017f) - A material-oriented approach to digital twins with a particle representation of the granular media e...

6. [3D Block Modelling of a 130 Million Tonnes Long-Term Stockpile](https://www.linkedin.com/posts/intellisense-io_3d-block-modelling-of-a-130-million-tonnes-activity-7123205365311098880-TqNQ) - Did you know that IntelliSense.io successfully modeled a stockpile exceeding 130 million tonnes? Thr...

7. [Ore Stockpile Management Software | OreMax by NTWIST](https://ntwist.com/oremax) - OreMax by NTWIST provides ore stockpile management software that turns variability into predictable ...

8. [Stockpile & Inventory Optimization (SIO) - IntelliSense.io](https://www.intellisense.io/applications/stockpile-inventory-optimization/) - The Stockpile & Inventory Optimization Solution provides near real-time, 3D ore control models to op...

9. [13. Distribution of Residence Times for Chemical Reactors](https://websites.umich.edu/~elements/fogler&gurmen/html/course/lectures/thirteen/index.htm) - We shall use the RTD to characterize existing (i.e. real) reactors and then use it to predict exit c...

10. [[PDF] measuring and modelling of residence time distributions in - LUTPub](https://lutpub.lut.fi/bitstream/10024/165025/1/Valtteri_Sipila_Master_Thesis.pdf) - Process optimization through residence time distribution provides impactful information about flow m...

11. [[PDF] Residence Time Distribution of Three Stirred- Tank Reactors in Series](http://www.jmess.org/wp-content/uploads/2017/05/JMESSP13420342.pdf) - The aim of the study is to design three stirred-tank reactors in series with improved features and e...

12. [Tanks in Series — rtdpy 0.6.0 documentation - GitHub Pages](https://merck.github.io/rtdpy/NCstr.html) - Tanks in Series¶ ... Return maximum output signal due to square disturbances. Uses method from [Garc...

13. [[PDF] Web17.4 The Tanks-in-Series (T-I-S) One-Parameter Model](https://public.websites.umich.edu/~elements/5e/17chap/Fogler_Ch17_Web_17.4_Tanks-in-Series.pdf) - We will analyze the RTD to determine the number of ideal tanks, n, in series that will give approxim...

14. [Residence time distribution of powders in a vertical single screw ...](https://www.sciencedirect.com/science/article/abs/pii/S1674200125002755) - From experimental RTDs, the model parameters were fitted and the prediction of RTD using axial dispe...

15. [Concrete Silo Flow Patterns | Mass Flow Silos - Marietta Silos](https://www.mariettasilos.com/silo-flow-patterns) - The cone angle used in mass flow silos is between 68-72 degrees, depending on the material being sto...

16. [[PDF] selection and sizing of feeders, bins and stockpile - 911Metallurgist](https://www.911metallurgist.com/wp-content/uploads/2016/02/SELECTION-AND-SIZING-OF-FEEDERS-BINS-AND-STOCKPILES.pdf) - F_u-nnel flow occurs when the hopper walls are not sufficiently steep and smooth to force solid to s...

17. [Mass Flow or Funnel Flow- What do you Have? - Jenike & Johanson](https://jenike.com/mass-flow-funnel-flow/) - When looking at the top surface, if the granules at the wall are moving [1], then you have mass flow...

18. [Digital Twins with Distributed Particle Simulation for Mine-to-Mill ...](https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1554560) - The particle-based representation enables material tracking along the chain of processes. Each digit...

19. [[PDF] Metso SmartTag - The Next Generation and Beyond](https://www.semanticscholar.org/paper/Metso-SmartTag-The-Next-Generation-and-Beyond-Wortley-Nozawa/d0f296365d0e63ba632a18ed0cf9256bd4a3fe9c) - SmartTag is a radio frequency identifi cation (RFID) based technology designed to allow tracking of ...

20. [[PDF] using smarttagtm to track ore in process integration and optimization ...](https://www.saimm.co.za/Conferences/Pt2012/871-892_Isokangas.pdf) - The difference in tag detection times between the SAG mill feed and primary crusher antennae can be ...

21. [A 3D cellular automata ore stockpile model – Part 2](https://www.sciencedirect.com/science/article/pii/S089268752300170X) - This paper describes a 3D cellular automaton (CA) for dynamically modelling ore piles with continuou...

22. [[PDF] IntelliSense.io AI for metal recovery - AusIMM](https://www.ausimm.com/globalassets/communities/branches/kalgoorlie/kalgoorlie-feb-2024-tech-talk_-intellisense.io-ai-for-metal-recovery.pdf) - Crushed Ore Stockpiles. ○. Tracks flow rate and particle size ... Real time 3D stockpile block model...

23. [A 3D cellular automata ore stockpile model - Part 1 - NASA ADS](https://ui.adsabs.harvard.edu/abs/2022MiEng.18707816Y/abstract) - This paper describes a 3D cellular automaton (CA) for modelling ore pile formation that incorporates...

24. [[PDF] Prediction of segregation in funnel and mass flow discharge (2016)](https://www.research.unipd.it/retrieve/e14fb269-6d75-3de1-e053-1705fe0ac030/Santomaso_CES2016.pdf) - Abstract. In this paper we present a model to predict the onset and evolution of segregation during ...

25. [Save $200K by detecting contaminants in crushed stockpiles](https://www.intellisense.io/2025/02/save-200k-by-detecting-contaminants-in-crushed-stockpiles/) - A high-resolution Crushed Ore Stockpile (COS) block model was developed, providing detailed insights...

26. [A numerical sensitivity study – The effectiveness of RFID-based ore ...](https://www.sciencedirect.com/science/article/pii/S0032591023007234) - RFID tag tracking can contribute to estimating the residence time for different ore batches that are...

27. [Case Study: Decrease Plant Feed Variability by 5-8% - IntelliSense.io](https://www.intellisense.io/2023/08/decreased-plant-feed-variability-by-5-8/) - The Stockpile & Inventory Optimization Application is one of a suite of real-time decision-making ap...

28. [Automatic search strategy for ROM stockpile recovery optimisation](https://www.ceecthefuture.org/resources/automatic-search-strategy-for-rom-stockpile-recovery-optimisation) - This paper considers a stockyard with available mineral information in the stockpiles using load and...

29. [Smart material tracking - Maptek](https://www.maptek.com/forge/december_2020/smart-material-tracking/) - 'MaterialMRT provides quality and quantity control of discontinuous material flows from in situ rock...

30. [MaterialMRT real time tracking - Maptek](https://www.maptek.com/forge/march_2022/materialmrt_real_time_tracking/) - MaterialMRT traces each parcel of material directly fed into the plant, or to and from a stockpile, ...

