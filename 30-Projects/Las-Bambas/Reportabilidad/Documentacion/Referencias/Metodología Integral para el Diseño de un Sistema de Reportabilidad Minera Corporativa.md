# Metodología Integral para el Diseño de un Sistema de Reportabilidad Minera Corporativa

> **Versión:** 1.0 — Marco Conceptual y Operacional para Minería de Mediana y Gran Escala  
> **Enfoque:** Cadena de Valor End-to-End · Levels of Work · Gobierno de Datos · Trazabilidad

***

## 1. Fundamentos Filosóficos del Sistema

La mayoría de los sistemas de reportabilidad minera fracasan no por falta de datos, sino por exceso de datos sin estructura de significado. Los reportes se diseñan alrededor de áreas organizacionales, personas con nombre o herramientas tecnológicas vigentes en un momento dado. El resultado es un sistema frágil: cuando cambia el organigrama, cuando sale un superintendente clave o cuando se migra de sistema, la reportabilidad colapsa o se fragmenta.

El principio rector de esta metodología es que **la información debe fluir a través de los procesos de negocio, no a través de las personas ni de las estructuras organizacionales**. Los reportes son instrumentos de gobernanza operacional, no productos de un área de control de gestión. Son la materialización tangible de la inteligencia colectiva de la operación sobre su propio estado y devenir.

Esta metodología adopta tres axiomas fundacionales:

1. **Trascendencia estructural:** Un reporte bien diseñado debe producir la misma información con independencia de quién lo genere, qué sistema lo alimente y qué área lo consuma.
2. **Continuidad de valor:** La información debe rastrearse desde el tiro de perforación hasta el valor de metal producido, sin rupturas semánticas ni temporales.
3. **Jerarquía de decisión:** Cada dato tiene un nivel natural de decisión al que pertenece; ni la sobre-agregación ni la sobre-granularidad sirven al tomador de decisiones.

***

## 2. Marco Conceptual: Levels of Work (LoW) en Minería

### 2.1 Fundamento teórico

La Stratified Systems Theory (SST), desarrollada por Elliott Jaques, establece que en toda organización existen niveles de trabajo diferenciados por su complejidad, horizonte temporal y tipo de decisión. En minería, este concepto se traduce en una jerarquía no de personas ni de cargos, sino de **procesos de decisión** con distintos horizontes de control y distintas granularidades de información.[^1][^2]

La siguiente estructura de cinco niveles es la más adecuada para minería de mediana y gran escala integrada (mina + planta + infraestructura):

| Nivel | Denominación | Horizonte | Naturaleza de la Decisión |
|-------|-------------|-----------|--------------------------|
| **N5** | Estratégico Corporativo | Anual – 5 años | Asignación de capital, portafolio de activos, política corporativa |
| **N4** | Táctico de Sitio | Trimestral – Anual | Plan de producción, presupuesto operacional, plan de mantenimiento mayor |
| **N3** | Operacional Integrado | Semanal – Mensual | Plan de corto plazo, integración mina-planta, reconciliación |
| **N2** | Control de Turno | Turno – Diario | Despacho, control de proceso, gestión de desviaciones inmediatas |
| **N1** | Tiempo Real / Ejecución | Segundos – Horas | Alarmas, reacción automática, control de estado de activos |

### 2.2 Caracterización completa de cada nivel

#### Nivel N5 — Estratégico Corporativo

- **Objetivo:** Asegurar la sostenibilidad del activo y la creación de valor a largo plazo.
- **Tipo de decisiones:** Inversión en expansión, cambio de método minero, políticas ESG, guidance público, asignación de recursos entre sitios.
- **Granularidad de datos:** Agregados mensuales o trimestrales por tonelada de mineral procesado, costo total de operación (AISC), reservas y recursos actualizados.
- **Frecuencia de reporte:** Mensual consolidado, trimestral con análisis de desvío vs. presupuesto, anual con reconciliación mine-to-mill completa.
- **KPIs principales:** AISC (All-In Sustaining Cost), producción de metal fino, recuperación metalúrgica global, stripping ratio, tasa de exploración vs. depleción, TRIFR corporativo, emisiones de GEI.
- **Consumidores:** Directorio, CEO, CFO, Gerentes de Operación Corporativos.
- **Sistemas fuente consolidados:** ERP (SAP/Oracle), sistemas geológicos (Leapfrog/Datamine), informes de planta agregados.

#### Nivel N4 — Táctico de Sitio

- **Objetivo:** Asegurar el cumplimiento del plan trimestral y ajustar el plan mensual ante desviaciones.
- **Tipo de decisiones:** Rebalanceo del plan de minado, reasignación de flota, programación de paradas mayores, ajuste de mezcla de mineral, activación de planes de contingencia.
- **Granularidad de datos:** Diaria y semanal, desagregados por área de extracción, flotación, chancado; con comparativo plan vs. real.
- **Frecuencia de reporte:** Informe diario de producción, reporte semanal de performance, reunión mensual de revisión táctica.
- **KPIs principales:** Tonelaje movido vs. plan, ley media cabeza vs. plan, disponibilidad mecánica de flota crítica, ratio de dilución, cost per tonne movido, F1/F2/F3 de reconciliación minera.[^3][^4]
- **Consumidores:** Gerente de Mina, Gerente de Planta, Superintendentes de Área, Jefe de Planificación Minera.
- **Sistemas fuente:** FMS/Dispatch, PI System, MES de planta, sistema de mantenimiento (SAP PM/Ellipse).

#### Nivel N3 — Operacional Integrado

- **Objetivo:** Conectar la ejecución semanal con el plan mensual; asegurar la continuidad del flujo mina-planta-relaves.
- **Tipo de decisiones:** Ajuste diario de secuencia de minado, cambio de destino de material, priorización de mantenimiento, gestión de stockpiles intermedios.
- **Granularidad de datos:** Por turno y por día; desagregados por equipo, frente de trabajo, circuito de procesamiento.
- **Frecuencia de reporte:** Reporte de turno, informe diario operacional (Daily Operating Report - DOR), reunión diaria de producción.
- **KPIs principales:** Metros perforados/turno, tonelaje carguío/acarreo por turno, alimentación a planta tph, recuperación por circuito, OEE de equipos críticos, eventos de seguridad turno.
- **Consumidores:** Superintendent de Mina, Jefe de Turno, Controlador de Mina (Dispatch), Jefe de Planta.
- **Sistemas fuente:** FMS en tiempo real, SCADA/DCS de planta, sistema de perforación, weighometers, analizadores en línea.

#### Nivel N2 — Control de Turno

- **Objetivo:** Ejecutar el plan de turno y gestionar desviaciones en tiempo de reacción < 2 horas (Short Interval Control).[^5][^6][^7]
- **Tipo de decisiones:** Reasignación inmediata de camiones, activación de equipo de backup, ajuste de parámetros de proceso, respuesta a incidentes de seguridad.
- **Granularidad de datos:** Por equipo, por ciclo operacional, por intervalo de 1-2 horas.
- **Frecuencia de reporte:** Cada 2-4 horas (SIC review), reporte de término de turno.
- **KPIs principales:** Cumplimiento de plan de turno (%), match factor camión-cargador, tonelaje actual vs. proyectado al fin de turno, tiempos de ciclo, eventos HSEQ.
- **Consumidores:** Dispatch, supervisores de turno, operadores senior, personal de proceso.
- **Sistemas fuente:** FMS/Dispatch (Modular DISPATCH, Komatsu Minestar, Wenco), sistemas de control de proceso, tablets de supervisión de turno.[^8][^9]

#### Nivel N1 — Tiempo Real / Ejecución

- **Objetivo:** Proveer visibilidad continua del estado de activos y procesos para acción inmediata o automática.
- **Tipo de decisiones:** Alarmas de proceso, dispatch automático, detección de fallas tempranas, alertas de seguridad.
- **Granularidad de datos:** Segundos a minutos; señales de sensores, telemetría de equipos, lecturas de instrumentación.
- **Frecuencia de reporte:** Continua (streaming); dashboards en tiempo real en sala de control y despacho.
- **KPIs principales:** Estado de disponibilidad de equipo (UP/DOWN/STANDBY), nivel de stockpile intermedio, presión/flujo/temperatura de proceso, posición GPS de flota, alertas de mantenimiento predictivo.
- **Consumidores:** Sala de control, sistema de dispatch, sistemas de mantenimiento predictivo, operadores en cabina.
- **Sistemas fuente:** PI System (OSIsoft/AVEVA), PLC/SCADA, sensores IoT, FMS GPS, sistemas de telemetría de equipos OEM.

***

## 3. Visión Basada en Cadena de Valor Minera End-to-End

### 3.1 Principio de diseño

El sistema de reportabilidad **no se estructura por áreas funcionales** (no existe un "reporte del área de mantenimiento" ni un "reporte del área de geología"). En su lugar, se estructura por **procesos de la cadena de valor**, donde cada proceso tiene inputs medibles, transformaciones cuantificables y outputs trazables.[^10][^11]

La cadena de valor minera integrada se define así:

```
[Exploración/Geología] → [Planificación Minera] → [Perforación] → [Voladura]
     → [Carguío] → [Acarreo] → [ROM/Chancado Primario] → [Chancado Secundario/Terciario]
     → [Molienda] → [Clasificación] → [Flotación] → [Espesamiento]
     → [Relaves] → [Producto Final / Concentrado]
         ↕                  ↕                    ↕
   [Dispatch/FMS]    [Mantenimiento]    [Gestión Ambiental]
         ↕                  ↕                    ↕
   [Seguridad HSEQ]  [Servicios Mina]    [Costos Operacionales]
```

Cada nodo de la cadena tiene:
- **Variables de entrada** (inputs): lo que recibe del proceso anterior.
- **Variables de transformación**: parámetros propios del proceso.
- **Variables de salida** (outputs): lo que entrega al proceso siguiente.
- **Variables de estado**: condición actual del proceso (operando/detenido/en falla).

### 3.2 Conectores de proceso (interfaces críticas)

Las rupturas de información ocurren principalmente en las **interfaces entre procesos**, no dentro de los procesos mismos. El sistema de reportabilidad debe definir explícitamente cada interfaz como un **punto de medición y transferencia**:

| Interfaz | Proceso Origen | Proceso Destino | Variables Críticas de Transferencia |
|----------|---------------|----------------|-------------------------------------|
| Voladura → Carguío | Blast design | Excavación | Fragmentación real, tonelaje en pile, ley estimada blast-hole |
| Carguío → Acarreo | Excavadora | Camión | Toneladas por pase, destino asignado (ore/waste/stockpile) |
| Acarreo → ROM | Camión | Chancador primario | Toneladas entregadas, ley estimada, humedad |
| ROM → Chancado | Stockpile ROM | Circuito chancado | Tph alimentación, P80 producto, ley cabeza |
| Chancado → Molienda | Circuito finos | SAG/Ball Mill | Tph, P80, densidad, consumo específico energía |
| Molienda → Flotación | Slurry | Celdas flotación | D80, densidad pulpa, pH, % sólidos |
| Flotación → Espesamiento | Concentrado rougher | Circuito limpieza/espesado | % recuperación Cu/Au/Mo, ley concentrado |
| Planta → Relaves | Proceso | Depósito de relaves | Toneladas de relave, densidad, parámetros ambientales |
| Geología → Planificación | Modelo de bloques | Plan de minado | Ley estimada por bloque, tonelaje, tipo de mineral |
| Mantenimiento → Dispatch | CMMS | FMS | Disponibilidad programada por equipo, ventanas de mantención |

### 3.3 Ownership funcional transversal

Cada proceso tiene un **Process Owner** (no el jefe de área, sino el rol funcional responsable del proceso). Este ownership es:

- **Independiente del organigrama:** el Process Owner puede ser un Ingeniero de Procesos que reporta al Gerente de Planta, pero es owner del proceso "Molienda SAG" con independencia de las reorganizaciones.
- **Definido por entregables:** el Process Owner es responsable de la calidad, oportunidad y consistencia de los datos que su proceso produce.
- **Vinculado a interfaces:** el Process Owner acepta formalmente los inputs de la interfaz anterior y certifica sus outputs hacia la interfaz siguiente.

***

## 4. Modelo de Información: Entidades, Taxonomía y Ontología Operacional

### 4.1 Entidades fundamentales del modelo de datos

Un sistema de reportabilidad minera debe construirse sobre un modelo de datos coherente con las siguientes entidades centrales:

**Entidades de Espacio Físico:**
- **Site:** La operación completa (mina + planta + infraestructura).
- **Mining Area:** Rajo, nivel subterráneo, sector de minado.
- **Bench/Level:** Nivel de banco o nivel de explotación subterránea.
- **Blast Block:** Bloque de voladura con atributos geológicos y productivos.
- **Process Unit:** Unidad de proceso (SAG Mill 1, Flotación Celda 3, Chancador Cónico A).
- **Stockpile:** Pila de material intermedio con atributos de tonelaje y ley estimada.

**Entidades de Activos:**
- **Equipment:** Camión, excavadora, perforadora, molino, bomba. Con atributos: modelo, antigüedad, capacidad nominal, estado actual.
- **Component:** Neumático, balde, motor, reductor. Sub-entidad de Equipment.
- **Work Order:** Orden de trabajo de mantenimiento. Vinculada a Equipment, con estado y costo.

**Entidades de Material:**
- **Material Type:** Ore (de alta ley, marginal, submarginal), waste, overburden, concentrado.
- **Material Movement:** Registro de movimiento de material con origen, destino, tonelaje, timestamp y equipo que lo ejecutó.
- **Sample:** Muestra de control de leyes. Vinculada a blast block, Sample Point, timestamp y analítica.

**Entidades de Tiempo:**
- **Shift:** El ciclo básico de trabajo. Atributos: fecha, turno (día/noche), crew, supervisor.
- **Operational Cycle:** Ciclo operacional elemental (ciclo de carguío-acarreo, ciclo perforación).
- **Planned Downtime Event / Unplanned Downtime Event:** Eventos de detención con causa, duración y equipo afectado.

**Entidades de Plan:**
- **Life of Mine Plan (LoM):** Horizonte plurianual.
- **Annual Budget Plan:** Compromiso financiero anual.
- **Quarterly Operating Plan:** Plan operacional de 18-24 meses con horizonte trimestral.
- **Monthly Plan:** Plan de 13 semanas con compromisos mensuales.
- **Weekly Schedule:** Secuencia semanal de bloques a minar y actividades de planta.
- **Shift Plan:** Plan de turno con asignación de tareas y equipos.

### 4.2 Taxonomía operacional (ontología de nomenclatura)

La consistencia semántica es la principal causa de conflicto en sistemas de reportabilidad maduros. La taxonomía resuelve preguntas como: ¿es "tonelaje seco" o "tonelaje húmedo"? ¿"disponibilidad mecánica" incluye mantenimiento programado? ¿La "ley de cabeza" es tomada en el alimentador o en el muestreador de pulpa?

**Principios de la taxonomía:**
1. **Nombre único por variable:** Cada variable tiene exactamente un nombre canónico registrado en el Data Dictionary.
2. **Unidad de medida normalizada:** Las variables tienen unidades base (tonelada seca métrica, % Cu, m³/h, kWh/t) y las conversiones son explícitas y documentadas.
3. **Punto de medición explícito:** El nombre de una variable incluye su punto de medición (e.g., `Head_Grade_Cu_SAGFeed_Analyser1` vs. `Head_Grade_Cu_BlazeHole_Composite`).
4. **Timestamp estándar:** Toda variable lleva timestamp en UTC con zona horaria local documentada. No se acepta timestamp ambiguo o sin timezone.[^12][^13]
5. **Estado de calidad de dato (Data Quality Flag):** Cada lectura lleva un flag: `Measured` / `Estimated` / `Interpolated` / `Default` / `Bad_Input`.

### 4.3 Flujos de información del modelo

**Flujo de Material (físico):**
Blast block → Material Movement (carguío) → Material Movement (acarreo) → Stockpile/ROM → Process Feed → Product/Tailing

Este flujo es la columna vertebral de la reconciliación mine-to-mill.[^14][^15]

**Flujo de Producción (valor):**
Tonelaje habilitado (geología) → Tonelaje planificado → Tonelaje volado → Tonelaje acarreado → Tonelaje alimentado a planta → Tonelaje procesado → Metal contenido recuperado

**Flujo Temporal:**
Tiempo disponible → Tiempo operativo programado → Tiempo productivo → Tiempo de pérdidas operacionales (por categoría de causa)

Este flujo es la base del cálculo de OEE y disponibilidad.[^16][^17]

**Flujo de Decisiones:**
Evento operacional detectado → Nivel de decisión pertinente → Acción tomada → Resultado medido → Actualización de plan/forecast

**Flujo Financiero:**
Costo unitario de proceso → Driver de costo por actividad → Costo total por tonelada → EBITDA operacional → Costo de sostenimiento (AISC)[^18]

***

## 5. Dimensión Temporal: Coherencia entre Horizontes

### 5.1 La pirámide de horizonte temporal

Un error frecuente en reportabilidad es tratar cada horizonte temporal como un sistema aislado. La metodología propone un modelo de **cascada temporal** en el que cada horizonte se ancla en el inmediatamente superior y se descompone en el inmediatamente inferior.

```
LoM (Life of Mine)
    └── Budget Anual
            └── Plan Trimestral (18-24m rolling)
                    └── Plan Mensual (13-week rolling)
                            └── Plan Semanal (2 semanas)
                                    └── Plan de Turno
                                            └── SIC (2-4 horas)
                                                    └── Tiempo Real
```

### 5.2 Tabla de horizonte, granularidad y coherencia

| Horizonte | Granularidad Mínima | Ciclo de Revisión | Foco Principal | Reconciliación con horizonte superior |
|-----------|--------------------|--------------------|----------------|---------------------------------------|
| Tiempo Real | Segundos – minutos | Continua | Estado de activos, alarmas, despacho | No aplica |
| SIC (2-4h) | Por intervalo de 2h | Cada 2-4 horas | Cumplimiento de turno, intervención rápida | Acumula al reporte de turno |
| Turno | Por turno (8-12h) | Al cierre de turno | Performance del equipo de turno | Acumula al DOR diario |
| Diario | Por día calendario | Al inicio del día siguiente | Producción diaria, desvío acumulado | Acumula al plan semanal |
| Semanal | Por semana | Lunes (cierre semana anterior) | Cumplimiento semanal vs. plan mensual | Compara vs. presupuesto semanal |
| Mensual | Por mes | Primeros 3 días hábiles del mes siguiente | Reconciliación operacional, análisis de causas | Compara vs. plan mensual y presupuesto |
| Trimestral | Por trimestre | Primeros 10 días del trimestre siguiente | Plan vs. real, ajuste de forecast | Compara vs. budget anual; actualiza LoM |
| Anual | Por año | Enero del año siguiente | Reconciliación mine-to-mill completa, auditoría | Compara vs. LoM, actualiza reservas |

### 5.3 Reglas de coherencia temporal

1. **Invarianza de agregación:** La suma de los valores diarios de una variable debe coincidir con el valor mensual reportado. Cualquier discrepancia debe ser explicada y documentada.
2. **Freeze period:** Una vez que un período es cerrado (turno, día, semana, mes), sus datos se bloquean. Solo se pueden hacer correcciones a través de un proceso formal de ajuste con trazabilidad de auditoría.
3. **Forecast rolling:** El plan es siempre un "rolling forecast": cada semana, el plan de las próximas 13 semanas se revisa y actualiza, manteniendo trazabilidad de las versiones.[^18]
4. **Trazabilidad planificación-ejecución:** Para cada KPI, el sistema debe mostrar: Presupuesto original → Forecast actualizado → Real → Varianza (cantidad) → Varianza (precio/eficiencia).
5. **Estampa temporal de corte (cut-off):** Cada período de reporte tiene un cut-off time definido (e.g., el turno de día cierra a las 00:00 UTC-5; el día cierra a las 07:00 horas locales). Este cut-off se documenta y es consistente en todos los sistemas.

***

## 6. Arquitectura Conceptual del Sistema de Reportabilidad

### 6.1 Las tres capas de la arquitectura

La arquitectura del sistema se organiza en tres capas funcionales que corresponden a los estándares ISA-95 y a los principios de Manufacturing Operations Management (MOM):[^19][^20]

**Capa 1 — Captura y Adquisición (OT Layer):**
PI System (AVEVA/OSIsoft), FMS/Dispatch, PLC/SCADA, Sensores IoT, Telemetría de equipos. Datos crudos, alta frecuencia, sin contexto de negocio.

**Capa 2 — Contexto e Integración (MES/MOM Layer):**
MES de planta, Sistema de despacho con módulo de producción, CMMS integrado (SAP PM), Sistema de gestión de muestras, Bus de integración. Datos con contexto operacional, enriquecidos con metadatos de proceso.

**Capa 3 — Decisión e Inteligencia (Business Layer):**
ERP (SAP/Oracle), Plataformas BI (Power BI, Tableau), Data Warehouse Minero, Modelos de reconciliación, Dashboards por nivel de trabajo. Datos agregados, validados y con semántica de negocio.

### 6.2 Principios de interoperabilidad

Los sistemas fuente nunca deben ser el sistema de reporte. La integración debe seguir estos principios:[^21][^22]

- **No duplicación de master data:** El equipo CAT-785C con ID "EQ-0234" tiene un único registro maestro en el CMMS; todos los demás sistemas referencian ese ID.
- **Event-driven architecture en tiempo real:** Los eventos operacionales (falla de equipo, cambio de destino de material, alarma de proceso) se emiten como eventos con timestamp, ID de activo y código de causa. No se transmiten bloque de datos periódicamente, sino eventos cuando ocurren.
- **API contracts documentados:** Cada integración entre sistemas tiene un contrato de interfaz documentado (campos, formato, frecuencia, SLA de latencia, protocolo de error).
- **Semantic layer compartida:** El Data Dictionary es el árbitro de todos los conflictos de nomenclatura entre sistemas. Si el FMS llama "payload" a lo que el MES llama "tonelaje_cargado", el semantic layer traduce y normaliza.

### 6.3 Sistemas de integración en minería

| Sistema | Rol en el Sistema de Reportabilidad | Datos Clave Aportados |
|---------|------------------------------------|-----------------------|
| FMS/Dispatch (Modular, Minestar, Wenco)[^9] | Nivel N1-N2 | Ciclos de equipos, posición GPS, productividad horaria, asignaciones |
| PI System (AVEVA OSIsoft) | Nivel N1-N3 | Señales de proceso, datos de sensores, historial de variables de proceso |
| SCADA/DCS | Nivel N1 | Estado en tiempo real de procesos de planta (molinos, celdas, bombas) |
| MES de Planta | Nivel N2-N3 | Producción por turno, downtime categorizado, OEE, trazabilidad de lotes[^16] |
| SAP PM / Ellipse (CMMS) | Nivel N2-N4 | Disponibilidad mecánica, costos de mantenimiento, órdenes de trabajo |
| Sistema Geológico (Leapfrog, GEMS, Vulcan) | Nivel N4-N5 | Modelo de bloques, leyes estimadas, reservas actualizadas |
| Sistema Topográfico (Surpac, survey drones) | Nivel N3-N4 | Levantamientos de avance, volúmenes reales, reconciliación geométrica |
| ERP (SAP FI/CO, Oracle) | Nivel N4-N5 | Costos, presupuesto, contratos, proveedores, CAPEX/OPEX |
| Plataformas BI (Power BI, Tableau) | Nivel N3-N5 | Dashboards de gestión, análisis de tendencias, driver trees |
| Sistema LIMS | Nivel N2-N4 | Resultados de análisis de muestras, control de calidad de productos |

***

## 7. Sistema de KPIs: Jerarquía Leading–Lagging y Value Driver Trees

### 7.1 Principio de jerarquía de KPIs

El error más común en reportabilidad es la sobrecarga de KPIs. La metodología propone una estructura KMI → KPI → KAI:[^23][^24]

- **KMI (Key Management Indicator):** 4-6 indicadores de resultado estratégico. Responden "¿estamos creando valor?". Pertenecen al Nivel N5.
- **KPI (Key Performance Indicator):** 8-12 indicadores de desempeño de proceso. Responden "¿cómo está funcionando el proceso?". Pertenecen a los Niveles N3-N4.
- **KAI (Key Activity Indicator):** Indicadores de actividad de frente o equipo. Responden "¿qué está haciendo el equipo ahora?". Pertenecen a los Niveles N1-N2.

### 7.2 Distinción Leading vs. Lagging

| Tipo | Descripción | Ejemplo en Minería |
|------|-------------|-------------------|
| **Lagging** | Resultado ya ocurrido. Confirma qué pasó. No permite acción preventiva. | Producción de Cu fino del mes, TRIFR mensual, costo/t real |
| **Leading** | Precursor del resultado. Permite intervención antes del desvío. | Metros perforados acumulados vs. plan (hoy), disponibilidad mecánica proyectada fin de turno, tiempo de cola de camiones en chancador |

Un sistema maduro tiene al menos 2 indicadores leading por cada lagging crítico.

### 7.3 Value Driver Trees (VDT): descomposición causal de KPIs

El enfoque KPMG de Value Driver Trees es la forma más efectiva de conectar los KPIs de los distintos niveles. Un VDT descompone un KPI corporativo hasta sus drivers operacionales accionables:[^18]

```
AISC ($/oz Au)                                    [N5 — KMI]
    ├── Costo operacional total ($)
    │       ├── Costo de minado ($/t movida)      [N4 — KPI]
    │       │       ├── Costo combustible/t
    │       │       │       ├── Consumo L/h por equipo   [N2 — KAI]
    │       │       │       └── Rendimiento km/L
    │       │       └── Costo de perforación/m
    │       └── Costo de procesamiento ($/t procesada) [N4 — KPI]
    │               ├── Consumo energía kWh/t
    │               │       ├── Potencia demandada SAG  [N1 — KAI]
    │               │       └── F80 alimentación
    │               └── Consumo reactivos g/t
    └── Producción de Au fino (oz)
            ├── Tonelaje procesado (tph × horas)   [N3 — KPI]
            └── Recuperación Au (%)                 [N3 — KPI]
                    ├── Ley cabeza Au (g/t)         [N2 — KAI]
                    └── pH en flotación             [N1 — KAI]
```

***

## 8. Modelo de Reconciliación y Trazabilidad

### 8.1 Reconciliación mine-to-mill: el hilo conductor del sistema

La reconciliación minera es la práctica de comparar valores estimados con valores medidos en distintos puntos de la cadena de valor. Es el mecanismo de control de calidad del sistema de información operacional. Sin reconciliación, los reportes son opiniones; con reconciliación, son evidencia.[^25][^26][^14]

### 8.2 Marco de factores F y R

El estándar de la industria combina los F-Factors de Parker con los R-Factors extendidos propuestos por Snowden Optiro:[^15][^4][^3]

**F-Series (Parker):**
- **F1 = Producción Mina / Modelo de Reservas:** Mide la precisión del modelo geológico y el control de ley en mina. F1 < 0.95 indica problemas de dilución no controlada o sobreestimación del modelo.
- **F2 = Alimentación a Planta / Producción Mina:** Mide pérdidas entre el punto de carguío y la entrada a planta (dilución no planificada, ore loss, errores de pesaje). F2 deseado ≈ 1.00 ± 0.02.
- **F3 = F1 × F2:** Capacidad global de la operación para recuperar el tonelaje, ley y metal contenido estimado en reservas.[^3]

**R-Series (extensión para recursos):**
- **R1 = Reservas / Recursos:** Impacto de los factores modificadores en la conversión recurso-reserva.
- **R2 = Producción Mina / Recursos:** Efectividad global desde el modelo de recursos hasta la ejecución minera.
- **R3 = Alimentación Planta / Recursos:** Trazabilidad completa desde exploración hasta planta.

### 8.3 Protocolo de reconciliación operacional

La reconciliación no es un proceso mensual; es un proceso continuo con distintas frecuencias según el nivel:

| Frecuencia | Tipo de Reconciliación | Responsable | Acción ante Desvío |
|------------|----------------------|-------------|-------------------|
| Diaria | Material balances por sector de minado | Geólogo de producción | Ajuste de ore control en turno siguiente |
| Semanal | F1 por pit/sector, comparativo plan vs. real tonelaje-ley | Jefe de Planificación + Geólogo | Revisión del modelo de ore control |
| Mensual | F1, F2, F3 completos + balance metalúrgico de planta | Jefe de Planta + Geología + Planificación | Actualización del modelo de bloques si F1 < 0.90 |
| Trimestral | R1, R2, R3 + reconciliación de reservas depletadas | Gerente Técnico + Gerencia de Operación | Actualización de reservas, revisión de LoM |

### 8.4 Manejo de desviaciones operacionales

Toda desviación material (definir umbral por KPI) debe seguir el protocolo:

1. **Detección:** Sistema alerta automáticamente cuando una variable cruza el umbral de desviación.
2. **Clasificación:** La desviación se clasifica como: Operacional / Planificación / Geología / Mantenimiento / Proceso / Externa.
3. **Cuantificación:** Se calcula el impacto en metal o tonelaje perdido.
4. **Causa raíz:** Análisis estructurado (5-Why o Fishbone) documentado en el sistema.
5. **Acción correctiva:** Con responsable, fecha límite y métrica de verificación.
6. **Cierre y aprendizaje:** La causa-acción se archiva como "lección aprendida" en la base de conocimiento operacional.

***

## 9. Gobierno de Datos y Ownership Operacional

### 9.1 Modelo de roles de gobernanza

La gobernanza de datos en minería no es una función de IT; es una responsabilidad operacional distribuida:[^27][^28][^12]

**Data Owner (Dueño de Dato):**
- Responsable de la existencia y definición de la variable.
- Aprueba cambios en la definición, unidad o punto de medición.
- Ejemplo: el Process Owner de "Molienda" es el Data Owner de `SAG_Mill_Feed_tph`.

**Data Steward (Custodio de Dato):**
- Responsable de la calidad y oportunidad del dato en el sistema.
- Detecta y resuelve anomalías en el flujo de datos.
- Ejemplo: el Ing. de Procesos de turno es el Data Steward de las variables de su circuito.

**Data Consumer (Consumidor):**
- Usa el dato para tomar decisiones. No puede modificar el dato; puede cuestionar su calidad formalmente.

**Data Governance Board:**
- Instancia que resuelve conflictos entre Data Owners sobre definiciones compartidas.
- Aprueba cambios al Data Dictionary.
- Se reúne mensualmente; presidida por el Gerente de Operación o Gerente Técnico.

### 9.2 Data Dictionary: el árbitro semántico

Todo sistema de reportabilidad debe contar con un Data Dictionary centralizado, versionado y mantenido activamente. Para cada variable (tag), el diccionario registra:

| Campo | Descripción |
|-------|-------------|
| ID único | Código único de la variable (e.g., `PLNT-SAG1-FEED-TPH-001`) |
| Nombre canónico | Nombre completo sin abreviaciones ambiguas |
| Unidad de medida | Unidad SI normalizada |
| Punto de medición | Descripción física del sensor o fuente |
| Sistema fuente | Sistema que origina el dato (PI, FMS, LIMS...) |
| Frecuencia de actualización | Cada cuánto se actualiza el dato |
| Data Owner | Rol funcional responsable |
| Data Steward | Rol operacional custodio |
| Rango válido | Mín/máx esperado; fuera de rango → flag `Bad_Input` |
| Método de cálculo | Si es calculado, la fórmula documentada |
| Versión | Fecha de última modificación y autor |

***

## 10. Matriz Completa: Niveles de Trabajo × Atributos

| Nivel | Nombre | Horizonte | Objetivos | Tipo de Decisiones | KPIs Representativos | Usuarios | Sistemas Fuente | Tipo de Reporte |
|-------|--------|-----------|-----------|-------------------|----------------------|----------|----------------|-----------------|
| N5 | Estratégico Corporativo | Anual – 5 años | Creación de valor sostenida, gobierno corporativo | Capital, política, portafolio | AISC, producción metal fino, TRIFR, stripping ratio, reservas | Directorio, CEO, CFO, VP Operaciones | ERP, sistemas geológicos, BI consolidado | Informe mensual ejecutivo, reporte trimestral a directorio, reporte anual |
| N4 | Táctico de Sitio | Trimestral – Anual | Cumplimiento de plan operacional y presupuesto | Rebalanceo de plan, paradas mayores, ajuste de mezcla | Tonelaje vs. plan, ley cabeza vs. plan, disponibilidad flota, F1/F2/F3, costo/t | Gerentes de Mina/Planta, Superintendentes, Jefe Planificación | FMS agregado, PI System, CMMS, ERP | Reporte semanal de operaciones, reporte mensual operacional, reunión táctica |
| N3 | Operacional Integrado | Semanal – Mensual | Continuidad del flujo mina-planta, integración de interfaces | Ajuste secuencia minado, priorización mantenimiento, destino de material | Avance perforación/voladura, tph planta, OEE circuito molienda, ore control ley | Superintendent Mina/Planta, Jefe de Turno, Controlador Dispatch | FMS, SCADA/DCS, CMMS, sistema muestras | Daily Operating Report (DOR), reunión diaria de producción |
| N2 | Control de Turno | Turno – Diario | Ejecución del plan de turno, gestión de desviaciones < 2h | Reasignación inmediata, activación backup, ajuste parámetros | % cumplimiento plan turno, match factor, cola chancador, eventos HSEQ turno | Dispatch, Supervisores de turno, Jefe de Proceso | FMS tiempo real, SCADA, tablets de supervisión | Reporte de turno, SIC board, informe de handover |
| N1 | Tiempo Real/Ejecución | Segundos – Horas | Visibilidad continua de activos y procesos | Alarmas, dispatch automático, detección fallas | Estado UP/DOWN/STANDBY, posición GPS, nivel stockpile, alertas mantenimiento | Sala de control, dispatch, operadores | PI System, PLC/SCADA, FMS GPS, sensores OEM | Dashboard tiempo real, sistema de alarmas, telemetría |

***

## 11. Framework de Implementación Progresiva

### 11.1 Enfoque de madurez por etapas

La implementación debe ser incremental, basada en valor demostrado, no en funcionalidad técnica. Se propone un modelo de cuatro fases con horizonte de 24-36 meses:[^27]

**Fase 1 — Fundaciones (meses 1-6):**
- Definir la cadena de valor end-to-end con sus interfaces críticas.
- Construir el Data Dictionary inicial con las 50-80 variables más críticas.
- Establecer el DOR (Daily Operating Report) estándar para los Niveles N2-N3.
- Definir los Data Owners y Data Stewards para los procesos principales.
- Implementar estándares de timestamp y Data Quality Flags en sistemas existentes.
- Construir el primer Value Driver Tree del proceso más crítico (típicamente molino SAG → planta → concentrado).

**Fase 2 — Conectividad (meses 6-12):**
- Implementar la integración FMS → Data Warehouse (flujo de material).
- Conectar PI System con el nivel de reporte N3-N4.
- Construir los primeros dashboards por proceso (no por área organizacional).
- Implementar Short Interval Control digital con datos del FMS.[^29][^6]
- Establecer el protocolo de reconciliación F1, F2, F3 mensual.

**Fase 3 — Integración (meses 12-24):**
- Integrar el CMMS al flujo de reportabilidad (disponibilidad real vs. planificada).
- Construir el modelo de reconciliación trimestral con R-Factors.
- Implementar el reporte táctico N4 con Value Driver Trees Tier-0 y Tier-1.
- Establecer la gobernanza formal: Data Governance Board operativo.
- Integrar los costos operacionales (ERP) al reporte de performance operacional.

**Fase 4 — Optimización (meses 24-36):**
- Cierre del ciclo: conectar el LoM y el presupuesto anual con la ejecución diaria (N5 → N1 trazable).
- Implementar modelos predictivos sobre la base de datos histórica consolidada.
- Desarrollar el digital twin operacional sobre la infraestructura de datos construida.[^30][^31]
- Auditar y certificar la calidad de datos del Data Dictionary completo.
- Establecer benchmarking externo de KPIs críticos.

***

## 12. Riesgos Comunes y Factores de Falla

### 12.1 Riesgos estructurales del sistema

| Riesgo | Descripción | Impacto | Mitigación |
|--------|-------------|---------|-----------|
| **Silos de información** | Cada área construye su propia fuente de verdad. Los datos del FMS no conversan con los del CMMS ni con el ERP. | Reconciliaciones imposibles, decisiones contradictorias entre áreas[^32] | Arquitectura de datos con Single Source of Truth (SSOT) por variable; Data Dictionary como árbitro |
| **Sobrecarga de KPIs** | Proliferación de indicadores sin jerarquía. "Si todo es importante, nada es importante." | Parálisis de análisis, reuniones ineficientes, ruido informacional[^23] | Limitar a 4-6 KMI en N5, 8-12 KPI en N3-N4, 5-8 KAI por proceso en N1-N2 |
| **Métricas inconsistentes** | Dos sistemas reportan "disponibilidad mecánica" con definiciones distintas. | Conflictos entre Mantenimiento y Operaciones; desconfianza en el dato[^10] | Data Dictionary con definición única; Data Governance Board que resuelve conflictos |
| **Duplicidad de reportes** | Múltiples reportes paralelos producidos por distintas áreas con datos que no cuadran. | Horas-hombre desperdiciadas; confusión en la toma de decisiones | Un único DOR; un único reporte semanal; un único reporte mensual. Suprimir los paralelos |
| **Falta de reconciliación** | Se reporta producción por turno pero no se reconcilia con la planta. Diferencias acumuladas se "descubren" a fin de mes. | Sorpresas operacionales y financieras; pérdida de credibilidad del sistema | Protocolo de reconciliación diaria-semanal-mensual; F1/F2/F3 como KPI de proceso |
| **Granularidad temporal incorrecta** | Se usa data de turno para decisiones estratégicas o, peor, se usan agregados mensuales para decisiones operacionales. | Decisiones desconectadas de la realidad; falsa precisión o falsa macrovisión | La tabla de horizontes temporales es prescriptiva; cada nivel solo consume datos de su granularidad |
| **Ownership difuso** | Nadie es dueño de la variable `Recovery_Au_%`. Cuando está mal, todos señalan a otro. | Datos de mala calidad sin responsable; el problema persiste indefinidamente[^12] | Matriz de Data Owners asignada a roles funcionales (no personas). Vinculada a evaluación de desempeño |
| **Dependencia de personas clave** | El reporte mensual existe porque "Juan lo sabe hacer". Cuando Juan se va, el reporte desaparece. | Fragilidad sistémica; pérdida de continuidad operacional | Reportes definidos como procesos documentados, no como archivos de alguien |
| **Capas de BI sin modelo de datos** | Se construye el dashboard antes del modelo de datos. El dashboard se cae cuando cambia el sistema fuente. | Costo alto de mantenimiento; dashboards obsoletos frecuentes | Invertir primero en el modelo de datos (Data Dictionary + arquitectura de integración), luego en la capa de visualización |
| **Timestamp inconsistente** | Un sistema cierra el turno a las 00:00, otro a las 07:00. Los datos no suman. | Imposibilidad de reconciliar entre sistemas; errores en el DOR[^13] | Protocolo global de cut-off times, timezone en UTC con conversión documentada |

***

## 13. Buenas Prácticas de la Industria

### 13.1 Prácticas validadas en minería de gran escala

**Management Operating System (MOS):** El MOS es la estructura de reuniones, reportes y cadencias de control que conecta los niveles de trabajo. No es un software; es un sistema de gobernanza operacional. Las mineras Tier-1 (Rio Tinto, BHP, Newmont, Freeport) tienen MOS estandarizados a nivel corporativo. Las claves de su éxito: reuniones breves, datos pre-validados, foco en acción y no en análisis, jerarquía de escalación clara.[^18]

**Driver-Based Reporting:** El reporte no describe "qué pasó" sino "por qué pasó y cuánto costó". Los Value Driver Trees conectan el resultado financiero con sus drivers operacionales procesales de forma causal. Este enfoque permite a los ejecutivos hacer preguntas productivas: "¿cuánto perdemos por cada punto de disponibilidad del SAG?".[^18]

**Short Interval Control (SIC):** Adoptado ampliamente en minería subterránea y en crecimiento en minería a cielo abierto, el SIC es el mecanismo de control más efectivo a nivel de turno. Requiere un plan de turno factible, monitoreo digital cada 2-4 horas y capacidad de ajustar el plan en tiempo real con datos del FMS.[^7][^5][^29]

**Mine-to-Mill Reconciliation como KPI de proceso:** Las mineras más eficientes en recuperación metalúrgica (p.ej., operaciones de cobre en Chile, oro en Australia Occidental) tratan los F-Factors como KPIs operacionales de primer nivel. La reconciliación no es un ejercicio de auditoría sino un mecanismo de mejora continua.[^33][^26][^14]

**Governance by design:** En manufactura avanzada (Toyota, POSCO, Vale), la gobernanza de datos está construida en el proceso de operación, no añadida encima. Cada registro de producción tiene un owner, un validador y un receptor definido antes de que ocurra, no después.

### 13.2 Prácticas de manufactura avanzada aplicables a minería

- **Andon en piso de fábrica → SIC digital en mina:** La metodología Lean de activar una señal visual cuando el proceso se desvía del estándar es análoga al SIC con alertas automáticas del FMS.
- **Single Minute Exchange of Die (SMED) → mantenimiento en ventana:** La reducción del tiempo de parada por mantenimiento es un driver directo de disponibilidad mecánica, con la misma lógica de estandarización de procesos.
- **SIPOC para definir interfaces:** La herramienta SIPOC (Supplier-Input-Process-Output-Customer) es exactamente el marco adecuado para definir las interfaces de la cadena de valor minera y los contratos de datos entre procesos.
- **Hoshin Kanri para cascada de objetivos:** El método japonés de despliegue de política conecta los objetivos estratégicos (N5) con los indicadores de actividad diaria (N1-N2), el equivalente exacto a la estructura LoW propuesta.

***

## 14. Arquitectura Conceptual: Diagrama de Referencia

El siguiente esquema describe la arquitectura conceptual del sistema completo, donde las capas tecnológicas sirven a los niveles de decisión y la cadena de valor es el eje transversal de organización.

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                         CADENA DE VALOR END-TO-END                          ║
║  Exploración → Planificación → Perforación → Voladura → Carguío → Acarreo  ║
║             → Chancado → Molienda → Flotación → Relaves → Producto          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                    NIVELES DE TRABAJO Y DECISIÓN                             ║
║  N5 Estratégico  │  N4 Táctico  │  N3 Operacional  │  N2 Turno  │  N1 RT   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                         CAPA DE REPORTABILIDAD                               ║
║   [Reporte Anual] [Reporte Trimestral] [DOR Diario] [SIC Turno] [Dashboard] ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                    MODELO DE DATOS Y GOBERNANZA                              ║
║           Data Dictionary · Data Owners · Semantic Layer · SSOT              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                         CAPA DE INTEGRACIÓN                                  ║
║        API/Bus de Integración · Event Streaming · ETL/ELT · OPC-UA           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                        CAPA DE SISTEMAS FUENTE                               ║
║  FMS/Dispatch │ PI System │ SCADA/DCS │ MES │ CMMS │ ERP │ LIMS │ Geología  ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

***

## Resumen Ejecutivo del Marco Metodológico

Esta metodología propone un sistema de reportabilidad minera corporativa estructurado en cinco **Levels of Work** (N1 a N5), cada uno con horizonte temporal, granularidad de datos, tipo de decisión y consumidores definidos con precisión. El sistema se organiza sobre la **cadena de valor end-to-end** — desde la geología hasta el producto final — y no sobre estructuras organizacionales, garantizando su trascendencia ante cambios de personal, reorganizaciones y migraciones tecnológicas.[^34][^1]

La columna vertebral analítica es el **modelo de reconciliación mine-to-mill** con factores F y R, que convierte los reportes de producción en evidencia verificable. La **dimensión temporal** se gestiona mediante una pirámide de horizontes vinculados, con reglas explícitas de coherencia y freeze periods que previenen inconsistencias entre datos de turno, diarios y mensuales.[^4][^15][^3]

La **gobernanza de datos** asigna ownership funcional a cada variable operacional — no a personas sino a roles — y se sostiene sobre un Data Dictionary versionado que actúa como árbitro semántico de todo el sistema. La **implementación progresiva** en cuatro fases (Fundaciones → Conectividad → Integración → Optimización) permite construir valor demostrable en cada etapa, reduciendo el riesgo de proyectos tecnológicos de gran escala sin retorno visible.[^12][^27]

---

## References

1. [How the Stratified Systems Theory Works - Ninety.io](https://www.ninety.io/founders-framework/articles/the-stratified-systems-theory-sst-and-time-span-of-discretion-framework) - Stratified Systems Theory (or SST) is a framework for designing organizational hierarchies and roles...

2. [What's the Difference Between Requisite Organization and Stratified ...](https://synchronoussolutions.com/whats-the-difference-between-requisite-organization-and-stratified-systems-theory/) - SST is essentially a scientific model of how organizations and human work levels function. Requisite...

3. [Reconciliation Principles in Mining Industry (HParker, 2014) - Studocu](https://www.studocu.com/pe/document/universidad-nacional-de-ingenieria/mineria/reconciliation-principles-in-mining-industry-hparker-2014/131246576) - One of the advantages of the F3 metric is that it removes the effect of ore control sampling (grade)...

4. [Reconciled Metal Variance and the Implications to Royalties and ...](https://minebright.com/reconciliation-royalties/) - R and F reconciliation factors: metal can be distributed to the ore sources to minimize the R2, and ...

5. [Short Interval Control with groundHog | PDF - Slideshare](https://www.slideshare.net/slideshow/short-interval-control-with-groundhog/92272476) - Short Interval Control (SIC) is a framework designed to enhance shift task management in underground...

6. [What's in your Short Interval Control (SIC) Burger - OpsKit](https://opskit.app/whats-in-your-short-interval-control-sic-burger/) - By incorporating real-time data from FMS and other sources, the system should enable supervisors to ...

7. [Empowering Mining Operations with Short Interval Control](https://groundhogapps.com/short-interval-control/) - Short Interval Control (or SIC) is a framework of structured processes that help you identify and ac...

8. [DISPATCH Fleet Management System - Mining Technology](https://www.mining-technology.com/products/dispatch-fleet-management/) - The DISPATCH system is the most trusted FMS in the industry. In open-pit environments, the DISPATCH ...

9. [Fleet Management & Dispatch — 23 Tools - Mining Software](https://www.miningsoftwarereviews.com/category/fleet-management-dispatch) - Compare 23 systems for truck dispatch, GPS tracking, machine guidance, fleet optimisation, and produ...

10. [Operations Reporting & KPIs - Bedrock MG](https://www.bedrockmg.com/what-we-do/operations-reporting-kpis) - Typical factors include but are not limited to – inaccurate mining material movements, downtime even...

11. [Mining Industry Value Chain: Deep Dive - Flevy.com](https://flevy.com/blog/mining-industry-value-chain-deep-dive/) - A value chain is the connected system that converts geology into reliable product and cash. The mini...

12. [Top Data Governance Principles to Improve Compliance - LeapXpert](https://www.leapxpert.com/data-governance-principles/) - Discover the complete guide to 8 data governance principles: best practices for data quality, securi...

13. [What is a data governance strategy? Key components & KPIs](https://data.world/blog/data-governance-strategy/) - Discover what a data governance strategy is and learn how to develop and measure its effectiveness. ...

14. [INSIGHTS: Mine-to-mill reconciliation - Appian Capital Advisory](https://appiancapitaladvisory.com/insights-mine-to-mill-reconciliation/) - Typically, all mines have good reconciliation programs that can report on the key performance indica...

15. [MINE RECONCILIATION STANDARDISATION – R Factor Series -](https://snowdenoptiro.com/mine-reconciliation-standardisation-r-factor-series/) - By incorporating both F and R Series factors into the reconciliation framework, mine operators can g...

16. [Mining production and downtime management - PIMS, MES ... - ABB](https://new.abb.com/mining/digital-applications/knowledge-manager/pims-mes) - Identify how downtime is affecting your production targets, support your decisions on what actions t...

17. [What key performance indicators (KPIs) are typically ... - Mining Doc](https://www.miningdoc.tech/question/what-key-performance-indicators-kpis-are-typically-used-to-measure-a-mines-operational-efficiency/) - Safety metrics: the Total Recordable Injury Frequency Rate (TRIFR) is a critical lagging indicator. ...

18. [[PDF] KPMG Mining Operations](https://assets.kpmg.com/content/dam/kpmgsites/au/pdf/2023/mining-in-focus-mining-operations-report.pdf) - ORGANISATION ACHIEVE BEST PRACTICE. 01. STRUCTURED. PLANNING. 02. DRIVER-BASED. REPORTING. 03. MANAG...

19. [Exploring ISA-95 Standards in Manufacturing | IoT For All](https://www.iotforall.com/exploring-isa95-standards-in-manufacturing) - The Manufacturing Automation Pyramid is a conceptual representation of the ISA-95 hierarchy, often a...

20. [ISA-95 framework and layers - Siemens](https://www.siemens.com/en-us/technology/isa-95-framework-layers/) - ISA-95 incorporates the layers model of technology and business processes for manufacturing enterpri...

21. [ERP and MES Integration Insights | PDF - Scribd](https://www.scribd.com/doc/118784249/12PO-MP-4-4-pdf) - This document discusses the integration of enterprise resource planning (ERP) systems with plant-flo...

22. [MES System – What it is and how it supports production management](https://explitia.com/blog/mes-system-what-it-is-and-how-it-supports-production-management/) - Production Monitoring – MES tracks all machine and operator performance parameters, detecting errors...

23. [Top 10 Key Operational KPIs Every Operations Manager Should Track](https://tbmcg.co.uk/resources/blog/top-10-key-operational-kpis-every-operations-manager-should-track/) - Discover the ten operational KPIs that give you a clear view of performance, reliability, and effici...

24. [18 Performance levels - Mining Topic | ZVENIA](https://www.zvenia.com/mining/performance-levels) - Focuses on performance frameworks, maturity models, and operational excellence. Content on KPIs, per...

25. [Introduction to Mine Reconciliation – minebright Inc.](https://minebright.com/introduction-to-mine-reconciliation/) - Mine reconciliation provides the essential feedback that keeps a mining operation aligned with its g...

26. [AusIMM web; Mine Reconciliation Standardization. - LinkedIn](https://www.linkedin.com/pulse/ausimm-web-mine-reconciliation-standardization-ian-wollff) - The better-known F-Series Factors compares the reserve model with mine production and with plant / m...

27. [Data Governance Best Practices: Complete Guide - OvalEdge](https://www.ovaledge.com/blog/data-governance-best-practices) - Learn the top data governance best practices. Explore proven strategies for compliance, data quality...

28. [Data Governance Framework: Examples & Best Practices - Cyera](https://www.cyera.com/blog/data-governance-framework) - Learn best practices and examples for building a data governance framework that ensures compliance, ...

29. [Short Interval Control for Mining - Commit Works](https://commit.works/short-interval-control/) - Short Interval Control uses real-time management, enabling organisations to make quick, informed dec...

30. [Digital Twins and the Mining Industry - IntechOpen](https://www.intechopen.com/chapters/1181056) - Digital twins utilize data-driven and physics-based models and advanced analytics to optimize cost, ...

31. [Exploring digital twin systems in mining operations: A review](https://www.sciencedirect.com/science/article/pii/S2950555024000582) - This study provides valuable insights into fully integrated digital twin mining systems, which will ...

32. [When KPIs are measured in silos. | Marcos de Paiva Bueno - LinkedIn](https://www.linkedin.com/posts/marcos-de-paiva-bueno_when-kpis-are-measured-in-silos-every-department-activity-7298430706056097794-BVom) - I've seen siloed KPIs hurt mining operations everywhere in my experience. Breaking them down require...

33. [Enhancing underground mine reconciliation: A unified F and R ...](https://www.ausimm.com/community-events-archive/enhancing-underground-mine-reconciliation-a-unified-f-and-r-series-framework/) - To meet these expectations, reconciliation frameworks must bridge the gap between reported resources...

34. [[PDF] AN OVERVIEW OF STRATIFIED SYSTEMS THEORY](https://cdn.archive.celafoundation.ca/wp-content/uploads/2023/08/An-overview-of-stratifies-systems-theory.pdf) - Stratified Systems Theory [551] is a set of concepts and principles, rigorously researched over a fo...

