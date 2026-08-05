---
fecha: 2026-08-04
tipo: referencia
subtipo: deep-research
proyecto: CMH
fuente: "Deep Research — ejecución del prompt de 2026-08-04-prompt-deep-research-integrado-operaciones-mantenimiento.md"
url:
tags: [cmh, deep-research, nexo360, mantenimiento360, acoplamiento, mineria-subterranea]
---

# Referencia — Deep Research: Acoplamiento Disponibilidad–Planificación (Mantenimiento 360 ↔ Nexo 360)

**Proyecto:** CMH
**Fuente:** Investigación de mercado y proceso operacional, ejecutada a partir del prompt de acoplamiento (`2026-08-04-prompt-deep-research-integrado-operaciones-mantenimiento.md`) — tercera investigación de la serie, construida sobre [[deep-research-nexo360-proceso-ref]] y [[deep-research-mantenimiento360-proceso-ref]]
**Tipo:** deep research / benchmark de mercado y proceso de negocio

> Nota metodológica del propio research: la evidencia pública específica de "minería subterránea + acoplamiento disponibilidad-planificación" es escasa y fragmentada — es un tema de arquitectura interna que los proveedores rara vez documentan en detalle público. Donde la evidencia directa es sólida se cita; donde se trianguló desde evidencia adyacente (tajo abierto, CMMS genérico, arquitectura de software general) se marca explícitamente como **síntesis razonada**, no como hecho reportado. Hallazgo particularmente valioso y muy reciente (octubre 2025): el *Newtrax Control Room Editor* de Sandvik, lanzado específicamente para resolver el problema de datos manuales/híbridos en subterráneo.

---

## 1. El contrato de datos entre disponibilidad y planificación

### Flujo tallado

```
Mantenimiento (CMMS/SAP PM)
   → [evento: cambio de estado de equipo o actualización de pronóstico]
   → Capa de disponibilidad (Mantenimiento 360)
   → [publica: estado + atributos + timestamp + confianza]
   → FRONTERA: contrato de datos
   → Motor de asignación (Nexo 360)
   → [consume snapshot congelado en T-freeze antes del reparto]
   → Plan de guardia publicado
```

La evidencia de mercado es consistente en que el dato mínimo "disponible/no disponible" es insuficiente para planificación seria. Tres señales corroboran esto:

- **AMT4SAP (RPMGlobal)** no se limita a exponer un estado binario: su motor de *Dynamic Life Cycle Costing* toma inputs en tiempo real de sistemas de monitoreo a bordo, FMS, el plan de mina y SAP, y "reforecasts future usage, availability, further maintenance costs and future resource requirements" — es decir, expone una **disponibilidad proyectada a futuro**, no solo el estado actual. [RPMGlobal AMT4SAP](https://rpmglobal.com/softwares/amt4sap) / [Mining Technology – AMT4SAP](https://www.mining-technology.com/contractors/data//pressreleases/amt4sap/)
- La literatura de MTTR es explícita en que el tiempo de retorno a operación no es un número simple: **solo 30–40% del MTTR total es trabajo de reparación manual**; el 60–70% restante es demora organizacional (detección, respuesta, diagnóstico, verificación). Esto es evidencia directa de por qué un "ETA de retorno a operación" fiable requiere que el CMMS exponga el estado del *proceso* de reparación (diagnosticado / repuesto pedido / en reparación / en verificación), no solo "en taller". [Douglas Machine — MTTR](https://www.douglas-machine.com/what-is-mean-time-to-repair-mttr-and-what-drives-it-up-or-down/) / [ServiceChannel — Repair Time](https://servicechannel.com/glossary/repair-time/)
- Síntesis de mercado (Fleetrabbit/Opsima) sobre el problema raíz que este proyecto busca resolver: *"most production schedules are built on an assumed fleet size without ever asking how many of those units will genuinely be available when the shift starts... maintenance teams track uptime for their own purposes, production teams build schedules for theirs, and the two numbers rarely talk to each other until a plan falls apart mid-shift."* [Fleetrabbit — Availability Management for Production Planning](https://fleetrabbit.com/industry/mining-fleet-software/best-mining-equipment-availability-management-software-production-planning-2026)

### Atributos estándar identificados (evidencia + síntesis)

| Atributo | Evidencia |
|---|---|
| Estado actual (5 estados TUM) | Ya validado en [[deep-research-mantenimiento360-proceso-ref]] |
| **Disponibilidad proyectada a futuro** (ventana de turno / próximas N horas) | AMT4SAP DLCC engine — reforecast continuo |
| **ETA / tiempo estimado de retorno a operación** | Implícito en MTTR con desglose organizacional vs. reparación — el ETA fiable requiere exponer *en qué fase* del proceso de reparación está el equipo, no solo un número |
| **Criticidad de la indisponibilidad** | Síntesis razonada — no hay estándar público, pero se infiere de la práctica de "asset health alarms" contra especificaciones predefinidas en MineCare (alarmas por severidad) |
| **Disponibilidad parcial / con restricciones (derate)** | Sin estándar de mercado documentado públicamente para subterráneo — **gap de evidencia**; tratar como extensión propia del contrato |

### Momento de "congelar" el dato (freeze)

Evidencia indirecta pero consistente desde prácticas de shift handover:
- El walk-down de equipo estructurado por el saliente de turno comienza **30–45 minutos antes del fin del turno**, con el propósito explícito de confirmar estado operativo y cerrar loops de inspección abiertos. [Unison Mining — Shift Change Optimization](https://unisonmining.com/shift-change-optimization-and-handover-process/)
- La inspección pre-turno de equipo toma típicamente **15–30 minutos** dependiendo de la complejidad del equipo. [Heavy Vehicle Inspection — Pre-Shift Checklist Guide](https://heavyvehicleinspection.com/blog/post/mining-equipment-pre-shift-inspection-checklist-guide)
- El desempeño operativo cae **20–40%** durante la última hora del turno saliente y la primera hora del turno entrante — la ventana de transición es estructuralmente el momento de mayor riesgo de datos desactualizados. [Unison Mining](https://unisonmining.com/shift-change-optimization-and-handover-process/)

**Síntesis razonada**: ventana de congelamiento de disponibilidad de **T-30 a T-45 minutos antes del reparto**, coincidente con el walk-down de mantenimiento saliente — no un instante arbitrario, sino anclado al mismo evento físico de handover que ya hace mantenimiento. No se encontró un umbral numérico publicado específicamente para "freeze del plan de guardia" en subterráneo; es el gap de evidencia más grande de los 8 puntos.

---

## 2. Gobernanza de la fuente única de verdad (SSOT)

### Flujo tallado

```
Arquetipo A (single-vendor / dispatch-céntrico):
Sensor/operador → FMS (DISPATCH) ⇄ CMMS (MineCare)   [mismo modelo de datos, mismo vendor]
   → No hay "frontera" que cruzar — el equipo es UNA entidad con dos vistas

Arquetipo B (capa sobre SAP):
Mantenimiento actualiza SAP PM (system of record)
   → Prometheus Group lee/escribe directo en SAP
   → Expone a operación "one source of truth" vía la misma capa
   → SAP sigue siendo el árbitro final del estado "oficial"
```

- **MineCare + DISPATCH (Modular Mining)**: la integración nativa "reduces the need for manual operational data correlation" y logra "consolidation of operations, location, and OEM data" — al ser un solo proveedor con un solo modelo de datos subyacente, **no existe conflicto de propiedad del dato**: mantenimiento y operación leen la misma tabla. [Mining Technology — MineCare](https://www.mining-technology.com/products/minecare-maintenance/)
- **Prometheus Group**: se posiciona explícitamente como capa que "promotes one source of truth and real-time access to information" pero **no reemplaza** el sistema de registro — "maintenance data stays in SAP as the system of record while technicians use a modern interface" — resuelve la gobernanza manteniendo un único árbitro (SAP) y prohibiendo que la capa de UI se convierta en una segunda fuente. [Prometheus Group — Mining & Metals](https://www.prometheusgroup.com/industries/mining-metals)
- **OptiMine (Sandvik)**: consolida datos de todos los activos y personas "into a single source delivering real-time insights", incluyendo equipos no-Sandvik vía integración OEM-agnóstica — mismo patrón que MineCare/DISPATCH pero extendido a flota mixta. [Sandvik — Mixed Fleet Telemetry](https://www.mining.sandvik/en/digital-solutions/operations-and-connected-fleet/mixed-fleet-telemetry/)

### Comparación de 3 enfoques de gobernanza

| Enfoque | Quién es dueño del dato | Mecanismo anti-divergencia |
|---|---|---|
| Single-vendor integrado (DISPATCH+MineCare, OptiMine+Newtrax) | El equipo (asset) es una entidad única en un modelo de datos compartido | No hay sincronización — es la misma tabla |
| Capa sobre SAP (Prometheus, AMT4SAP) | SAP PM permanece como *system of record* explícito | La capa de planificación **lee y escribe** contra SAP en tiempo real, nunca cachea de forma autoritativa |
| **Plataforma nueva unificada (caso CMH)** | Ninguno de los dos módulos "es dueño" — se requiere una tercera entidad: el *dominio de disponibilidad* | Debe diseñarse explícitamente (ver Implicaciones de diseño) |

**Síntesis razonada para Mantenimiento 360 + Nexo 360**: dado que ambos módulos se construyen como parte de la misma plataforma nueva (no productos de mercado separados), el patrón más cercano a la evidencia es el **Arquetipo A** (single-vendor): el estado de disponibilidad de un equipo debería ser una **entidad de dominio compartida** (no una tabla replicada), con Mantenimiento 360 como único *writer* autorizado y Nexo 360 como *reader* + *proponente de reservas* (puede "solicitar" un equipo pero no cambiar su estado de disponibilidad). Esto evita recrear el problema del Arquetipo B sin necesitar la complejidad de integrar productos de terceros.

---

## 3. La brecha temporal en el instante de congelar el plan de guardia

Punto con la evidencia más débil de los 8 — no se encontraron benchmarks públicos de "umbral de staleness en el cierre de programación de guardia" específico para minería.

- Principios generales de *data freshness SLA*: sistemas críticos usan umbrales de **5–15 minutos** de warning y **~30 minutos** de error para datos que alimentan decisiones en tiempo real; recomendación explícita de la industria de datos: "freshness thresholds should be tailored to specific use cases rather than using a single global threshold." [Tacnode — Stale Data / Freshness SLAs](https://tacnode.io/post/what-is-stale-data)
- Evidencia operativa concreta de umbral de acción (de valor, no de tiempo, pero confirma gatillos automáticos duros en el momento de decisión): en war rooms de producción, *"availability drops below the 85% world-class threshold trigger immediate supervisor response."* [Opsima — Mining Industry KPIs](https://opsima.com/blog/kpis/mining-industry-kpis/)

**Síntesis razonada**: en ausencia de estándar publicado, anclar el umbral de staleness al **estado del equipo**:
- Equipo en **OPERATIVO/STANDBY** con último evento > umbral (≈60–90 min, alineado a la ventana de walk-down de 30–45 min + margen) al momento del freeze → se marca **"disponibilidad no confirmada"**, tratado como riesgo, no como verdad.
- Equipo en **TALLER/PANNE** no tiene el mismo problema porque su transición hacia disponible requiere confirmación activa de mantenimiento — el riesgo de staleness es asimétrico: afecta más a los equipos que el plan *asume* disponibles que a los que ya sabe indisponibles.

---

## 4. Cambio de estado durante el turno ya planificado (re-planificación en caliente)

### Flujo tallado

```
Evento de campo (falla / avería)
   → Operador/sensor reporta (Newtrax IoT, prestart checklist, o llamada a control room)
   → Mantenimiento 360 registra transición operativo→panne [INMEDIATA, sin aprobación]
   → FRONTERA cruzada: evento publicado hacia Nexo 360
   → Motor de asignación NO reasigna automáticamente (evidencia: Pitram)
   → Control room / despachador humano decide reasignación
   → Supervisor de turno confirma/ejecuta en campo
```

- **Pitram (Micromine)**: el sistema de despacho se dispara con eventos concretos (descarga de camión, paso por waypoint, o acción manual del operador de control room). Crucialmente: **"when a truck is locked the Pitram dispatch system will not attempt to reallocate the truck automatically"** — el sistema de mercado líder en subterráneo **no reasigna automáticamente por defecto**; requiere intervención del despachador. [Micromine — Dispatch System](https://webhelp.micromine.com/pm/latest/English/pmfleet/IDH_DSP_OVERVIEW.htm)
- El supervisor de mina reporta averías al *General Foreman* como parte de su rol de monitoreo — confirma la cadena humana: operador → supervisor → control room, no un flujo puramente automático.
- Impacto documentado de no reaccionar rápido: una falla no planificada puede inmovilizar una sección completa por **8–24 horas a USD 5,000–15,000/hora** en producción perdida.
- Investigación académica confirma que la "reprogramación óptima" es aún mayormente un problema de investigación, no práctica extendida: *"in underground mines, mobile mining equipment is mostly scheduled instinctively, and in case of unexpected events, it is hard for miners to rapidly find solutions to reschedule and adapt changes"* — de ahí propuestas de "decision support instrument", no optimizador autónomo pleno. [PLOS One — Intelligent Scheduling for Underground Mobile Mining Equipment](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0131003)
- Trabajos relacionados (fase de investigación, no producto comercial extendido): [MDPI Sustainability — Dynamic Scheduling under Equipment Failure](https://doi.org/10.3390/su15097306), [MDPI Sustainability — Rescheduling based on Random Breakdown Simulation](https://www.mdpi.com/2071-1050/14/6/3448), [Springer MMEL — Deviation-Minimization Approach](https://link.springer.com/article/10.1007/s42461-023-00802-5).

### Comparación de nivel de automatización

| Sistema | Nivel de automatización en reprogramación en caliente |
|---|---|
| Pitram (Micromine) | Semi-automático — dispara por eventos operacionales pero **respeta locks manuales**; reasignación de equipo bloqueado requiere acción humana |
| Modular DISPATCH+MineCare | El evento de mantenimiento se propaga a operación como cambio de estado consumible; la decisión de reasignación queda con despacho |
| Investigación académica (deviation-minimization, rescheduling) | Propone algoritmos de optimización, pero reconoce que la práctica actual en subterráneo es mayormente instintiva/manual |

**Conclusión**: la práctica de mercado madura es **notificación event-driven inmediata + decisión humana en el control room/despacho** — consistente con el patrón "magnet board digital con reglas duras" de [[deep-research-nexo360-proceso-ref]] — el sistema debe **bloquear** la asignación inválida pero no **decidir sólo** a qué frente redirigir la cuadrilla huérfana.

---

## 5. Arquitectura de integración para una plataforma NUEVA unificada

Punto con menor evidencia de "caso de estudio publicado" — no se encontró documentación de arquitectura de referencia pública de un proveedor que haya construido *desde cero* un módulo de operación y uno de mantenimiento como una sola plataforma para minería subterránea.

**Evidencia indirecta más fuerte — caso Newtrax/OptiMine (2021→2025)**: Sandvik fusionó OptiMine (operación) con Newtrax (IoT/telemetría, antes independiente) en **un solo producto integrado**, precisamente para eliminar la fricción de integrar dos sistemas separados. Arquitectura resultante: "IoT devices... automatically collect real-time data and send it to the OptiMine platform for further analysis" — **arquitectura basada en eventos desde el edge hacia una plataforma central**, no polling batch. [Mining Technology — OptiMine/Newtrax](https://www.mining-technology.com/contractors/drilling/sandvik-mining/pressreleases/optimine-newtrax-underground/) / [Sandvik](https://www.mining.sandvik/en/news-and-media/news-archive/2021/09/optimine-integrates-newtrax-offering-for-the-most-comprehensive-oem-agnostic-digital-suite-for-underground-hard-rock-mining/)

- Más reciente (octubre 2025): **Newtrax Control Room Editor** — "real-time cross-checking of manually entered data with automated sensor data" y "extends read-and-write capabilities underground" — confirma que incluso los proveedores líderes siguen invirtiendo en 2025 en resolver el problema exacto de este proyecto. [Sandvik — Control Room Editor](https://www.mining.sandvik/en/news-and-media/news-archive/2025/10/sandvik-introduces-newtrax-control-room-editor-for-improved-manual-data-management-in-underground-mines/) / [International Mining](https://im-mining.com/2025/10/02/sandviks-newtrax-control-room-editor-improved-manual-data-management-underground/)

**Principios de arquitectura general (EDA) aplicables** (sin evidencia mining-specific, pero estándar de industria de software para este acoplamiento): event-driven architecture con event bus loosely-coupled ([Confluent — EDA](https://www.confluent.io/learn/event-driven-architecture/), [Red Hat — EDA](https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture)); patrón "Kafka como digital twin" — usar el log de eventos como representación autoritativa del estado físico del activo ([Kai Waehner — Kafka as Digital Twin](https://www.kai-waehner.de/blog/2019/11/28/apache-kafka-industrial-iot-iiot-build-an-open-scalable-reliable-digital-twin/)).

### Comparación de patrones (síntesis razonada)

| Patrón | Adecuación para Nexo 360 ↔ Mantenimiento 360 |
|---|---|
| **Tabla compartida** (mismo esquema de BD, misma transacción) | Más simple, pero acopla fuertemente el ciclo de deploy de ambos módulos |
| **Polling periódico** | Introduce latencia artificial en el punto crítico (freeze de guardia) — desaconsejado |
| **Webhook/API síncrona en el momento de consulta** | Frágil ante la conectividad intermitente ya asumida en el punto 7 (offline-first) |
| **Event-driven / cola de mensajes con estado materializado local** (recomendado) | Mantenimiento 360 publica eventos de cambio de estado; Nexo 360 mantiene una **vista materializada local** (read model) que se actualiza por evento, permitiendo operar offline con el último estado conocido + su timestamp/confianza — coherente con Store & Forward ya exigido y con el patrón Newtrax Control Room Editor |

---

## 6. Priorización cuando la disponibilidad es insuficiente

### Flujo tallado

```
Motor de asignación detecta déficit (demanda de guardia > disponibilidad confirmada)
   → Escalación tier 1: supervisor de turno intenta resolver dentro de su autoridad
     (reordenar labores, usar standby, degradar alcance menor)
   → Si excede su autoridad → Escalación tier 2: reunión de producción /
     "war room" diaria (cross-funcional: mina, mantenimiento, seguridad)
   → Si aún no resuelto → Escalación tier 3: gerente de planta/superintendente
```

- Estructura de escalación por tiers documentada en la práctica de "war room" de operaciones: reuniones de pie a nivel de línea → reunión de producción cross-funcional a nivel de planta → solo los ítems que exceden la autoridad del gerente de producción escalan al director de planta. [Aziz Bamar — Production Meeting](https://www.azizbamar.com/production-meeting/)
- Reglas de priorización de equipo en escasez (planificación de minado subterráneo): la asignación prioritaria se dirige a los **puntos de extracción donde la brecha entre producción real y meta es mayor** — no "primero en pedir, primero en servir". [Queen's University — Vehicle Coordination Policies for Underground](https://queensu.scholaris.ca/server/api/core/bitstreams/2ea01049-cfaf-417c-b7a2-d29745d870c4/content)
- Separación operativa entre planes de desarrollo y de producción sugiere que la primera decisión de triage no es "qué frente sacrificar" sino "qué categoría de trabajo (desarrollo vs. producción) absorbe el déficit" — el desarrollo suele degradarse primero porque no impacta el flujo de mineral inmediato.

### Jerarquía de "sacrificio" identificada (razonada a partir de la evidencia)

1. Reordenar/diferir labores de **desarrollo** (menor impacto inmediato en producción)
2. Activar **standby** o reserva interna antes que contratista (menor costo)
3. Degradar el plan de **producción** en frentes de menor brecha vs. meta
4. Escalar a contratista / equipo externo (mayor costo, última opción típica)
5. Escalar la decisión misma cuando excede la autoridad del supervisor de turno → reunión de producción → superintendente/gerente de planta

**Autoridad**: el supervisor de turno tiene autoridad limitada para resolver localmente; decisiones que afectan el plan global de guardia o involucran costo adicional (contratista) requieren escalar — el diseño debe contemplar un **rol explícito de "autoridad de degradación de guardia"** en el sistema, no asumir que el supervisor de turno decide solo.

---

## 7. Disponibilidad offline/manual y el riesgo de romper la guardia completa

Hallazgo más fuerte y reciente de toda la investigación: el **Newtrax Control Room Editor** (octubre 2025) es la respuesta directa del mercado a este problema exacto.

### Flujo tallado

```
Método legado (pre-tracking automatizado):
Operador → llamada radial/telefónica a control room
   → Operador de control room transcribe manualmente → "susceptible to bias and inaccuracy"

Método actual líder de mercado (Newtrax Control Room Editor, 2025):
Operador reporta manualmente (cuando no hay sensor disponible)
   + Sensor IoT reporta automáticamente (cuando existe)
   → Control Room Editor CRUZA ambas fuentes en tiempo real
   → Discrepancias se resuelven activamente, no se asume la fuente manual como verdad ciega
   → Dato "digitizado" con read-and-write extendido a subterráneo
```

- Confirmación del problema: el reporte manual periódico "can be susceptible to bias and inaccuracy" frente a captura automática (síntesis de literatura académica agregada sobre calidad de datos de producción subterránea).
- Muchas minas subterráneas aún dependen de formularios de papel, handover en pizarra y registros en archivadores — las consecuencias del enfoque analógico bajo tierra son más severas que en superficie porque los vacíos de información crean puntos ciegos de seguridad en entornos donde los peligros son invisibles.
- **Solución de mercado más reciente y aplicable**: Newtrax Control Room Editor permite "real-time cross-checking of manually entered data with automated sensor data" y "digitises manual workflows and extends read-and-write capabilities underground." [Sandvik — Newtrax Control Room Editor](https://www.mining.sandvik/en/news-and-media/news-archive/2025/10/sandvik-introduces-newtrax-control-room-editor-for-improved-manual-data-management-in-underground-mines/) / [International Mining](https://im-mining.com/2025/10/02/sandviks-newtrax-control-room-editor-improved-manual-data-management-underground/)
- **Prometheus Group** aborda el mismo problema desde el ángulo CMMS: reconoce operación "at the bottom of mines where there is limited connectivity to the ERP system" y diseña **modo desconectado** con búsqueda de información de equipo offline — la captura manual/offline debe ser *estructurada* (formularios con campos válidos), no *libre*. [Prometheus Group — Mining & Metals](https://www.prometheusgroup.com/industries/mining-metals)

### Prácticas de gestión (no solo tecnología) — síntesis razonada

1. **Verificación cruzada activa** (patrón Control Room Editor): cuando existe telemetría parcial, usarla para *validar* — no solo complementar — el reporte manual; discrepancias se marcan, no se resuelven silenciosamente a favor de una fuente.
2. **Walk-down estructurado obligatorio** en la ventana de 30–45 min pre-cierre de turno como punto de captura manual disciplinado, no ad-hoc.
3. **Checklists estructurados de pre-start** (evidencia DISPATCH Underground) — pass/fail por ítem, no reporte narrativo libre.
4. **Atribución obligatoria** (usuario/rol/timestamp) para todo dato manual — permite auditar sesgos sistemáticos de un turno/reportante particular.
5. **Degradar automáticamente la confianza del dato manual con el tiempo** (freshness SLA) — un reporte manual de hace 4 horas sin corroboración debe perder peso en el motor de asignación aunque nadie lo haya desmentido.

---

## 8. Métricas de éxito del acoplamiento mismo

No se encontró un estándar de mercado publicado que mida específicamente "la calidad del acoplamiento disponibilidad-planificación" (todos los KPIs públicos miden cada módulo por separado). Coherente con el insight ya citado en el punto 1 — el propio mercado confirma implícitamente que **la métrica de acoplamiento no existe todavía como práctica estándar**, lo cual es una oportunidad de diferenciación para este proyecto, no una omisión de la investigación.

- *"Shift exceptions including availability drops below the 85% world-class threshold trigger immediate supervisor response"* — confirma que la industria ya opera con umbrales de disparo automático a nivel de turno, patrón replicable para una métrica de "brecha disponibilidad prometida vs. entregada". [Opsima — Mining Industry KPIs](https://opsima.com/blog/kpis/mining-industry-kpis/)
- El propio GMG confirma que el sector **aún está estandarizando el Time Usage Model para subterráneo** (proyecto activo de GMG Underground Mining Working Group, actualización de noviembre 2024/2025) — ni siquiera los estados base están 100% estandarizados para underground todavía, mucho menos las métricas de acoplamiento. [GMG — Time Usage Model for Underground Mining Update](https://www.youtube.com/watch?v=Fw9pHNZ29ns) / [GMG TUM Workshop 2025](https://gmggroup.org/updating-mining-tum-kpi-definitions-workshop-20251118/)

### Métricas propuestas (síntesis de diseño, no copiadas de un estándar existente)

| Métrica | Qué mide | Fuente de datos |
|---|---|---|
| **% de guardias replanificadas por disponibilidad incorrecta** | Fallas del contrato de datos en el freeze | Comparar plan congelado vs. eventos de cambio de estado ocurridos en la ventana [T-freeze, T-inicio-guardia] |
| **Tiempo entre evento real de cambio de estado y su reflejo en el plan** | Latencia del acoplamiento | Timestamp de evento de mantenimiento vs. timestamp de actualización visible en Nexo 360 |
| **% de equipos asignados que terminan no disponibles al iniciar la operación real** | Precisión del "congelamiento" — el KPI más directo de confianza en el acoplamiento | Comparar estado congelado en T-freeze vs. estado real en T-inicio-turno |
| **Brecha entre disponibilidad proyectada y disponibilidad oficial confirmada** | Calidad del pronóstico de mantenimiento (punto 1) | Delta entre el dato "proyectado" y el dato "oficial" al momento de uso |
| **Tasa de reasignación en caliente por causa de mantenimiento vs. por causa operativa** | Aísla si el acoplamiento (vs. otras causas) es el origen de la inestabilidad del plan | Clasificación de causa raíz en cada evento de reprogramación intraturno |

---

## Implicaciones de diseño

### (a) Qué debe contener el contrato de datos entre Mantenimiento 360 y Nexo 360

1. **Estado actual** (los 5 estados TUM ya validados) + **timestamp del último cambio**.
2. **Disponibilidad proyectada a futuro**: ventana mínima cubriendo la duración de la guardia siguiente, no solo el instante presente.
3. **ETA de retorno a operación** expresado con **fase del proceso de reparación** (diagnóstico / esperando repuesto / en reparación / en verificación), no como número aislado.
4. **Criticidad de la indisponibilidad** (alta/media/baja) — campo nuevo a definir por el equipo, sin estándar de mercado encontrado; debe mapearse a las prioridades del punto 6.
5. **Disponibilidad parcial/con restricciones (derate)** — campo nuevo, gap de evidencia; modelarlo como un sub-estado cruzando con OPERATIVO en vez de forzarlo dentro del modelo de 5 estados.
6. **Bandera de confianza** + **origen del dato** (sensor automático / reporte manual estructurado / control room) — necesario para reconciliación tipo Newtrax Control Room Editor.
7. **Estado oficial vs. propuesto** aplicado al instante de freeze: el snapshot congelado debe distinguir qué porcentaje de la flota asignada tenía estado "oficial" vs. "no confirmado" al momento del reparto.

### (b) Reglas de negocio de gobernanza de disponibilidad

1. **Mantenimiento 360 es el único *writer* autorizado del estado de disponibilidad** — Nexo 360 puede *solicitar/reservar* pero nunca sobrescribir el estado de un equipo.
2. **Ventana de congelamiento anclada al walk-down físico**: freeze en T-30/T-45 min antes del reparto.
3. **Todo equipo con estado OPERATIVO/STANDBY y staleness > umbral al momento del freeze se marca automáticamente como "no confirmado"**, con advertencia visual explícita al planificador.
4. **Arquitectura event-driven con vista materializada local en Nexo 360**: cada cambio de estado en Mantenimiento 360 se publica como evento; Nexo 360 mantiene su propia copia de lectura actualizada por evento, compatible con Store & Forward.
5. **Reasignación en caliente es semi-automática, no autónoma**: el sistema notifica inmediatamente y bloquea la asignación inválida, pero la decisión de a qué frente redirigir cuadrilla/equipo huérfano requiere confirmación humana (supervisor de turno o despacho), con escalación definida.
6. **Jerarquía de sacrificio predefinida** para déficit de disponibilidad: 1) diferir desarrollo, 2) activar standby interno, 3) degradar producción priorizando frentes con mayor brecha vs. meta, 4) contratista, 5) escalar a rol de "autoridad de degradación de guardia" — este rol debe existir explícitamente en el modelo de permisos.
7. **Captura manual siempre estructurada** (checklist/campos válidos, nunca texto libre) con atribución obligatoria y degradación de confianza por tiempo, replicando el patrón Control Room Editor.

### (c) Métricas de acoplamiento a proponer como criterio de éxito del piloto

1. **% de equipos asignados en el plan congelado que terminan no disponibles al momento real de iniciar la guardia** — indicador más directo de si el acoplamiento cumple su propósito central (mandato explícito del cliente).
2. **Tiempo medio entre el evento real de cambio de estado y su reflejo visible en Nexo 360** — mide la latencia técnica del acoplamiento.
3. **% de guardias que requirieron replanificación atribuible específicamente a disponibilidad incorrecta o tardía** (vs. otras causas: clima, seguridad, personal).
4. **% de equipos en el snapshot congelado marcados como "no confirmado" (staleness) al momento del freeze** — métrica de proceso que anticipa el riesgo antes de que se materialice en una guardia fallida; la más útil para intervención temprana durante el piloto.

---

## Limitación reconocida (del propio research)

El agente reportó haber agotado el presupuesto de búsquedas antes de profundizar más en el punto 5 (caso de arquitectura de referencia específico para plataforma nueva greenfield) y en más benchmarks numéricos para los puntos 6/8. Recomienda una segunda ronda de investigación enfocada en: (i) casos de estudio de implementación greenfield con arquitectura event-driven documentada públicamente, y (ii) el resultado del workshop GMG de noviembre 2025 sobre TUM/KPIs actualizado, que podría publicar métricas de acoplamiento estandarizadas que hoy no existen.

## Fuentes citadas (consolidado)

- [RPMGlobal — AMT4SAP](https://rpmglobal.com/softwares/amt4sap)
- [Mining Technology — RPMGlobal AMT4SAP press release](https://www.mining-technology.com/contractors/data//pressreleases/amt4sap/)
- [Prometheus Group — Mining & Metals](https://www.prometheusgroup.com/industries/mining-metals)
- [Mining Technology — MineCare Maintenance Management System](https://www.mining-technology.com/products/minecare-maintenance/)
- [Sandvik — Mixed Fleet Telemetry (OptiMine)](https://www.mining.sandvik/en/digital-solutions/operations-and-connected-fleet/mixed-fleet-telemetry/)
- [Mining Technology — OptiMine integrates Newtrax](https://www.mining-technology.com/contractors/drilling/sandvik-mining/pressreleases/optimine-newtrax-underground/)
- [Sandvik — OptiMine/Newtrax integration announcement](https://www.mining.sandvik/en/news-and-media/news-archive/2021/09/optimine-integrates-newtrax-offering-for-the-most-comprehensive-oem-agnostic-digital-suite-for-underground-hard-rock-mining/)
- [Sandvik — Newtrax Control Room Editor (oct 2025)](https://www.mining.sandvik/en/news-and-media/news-archive/2025/10/sandvik-introduces-newtrax-control-room-editor-for-improved-manual-data-management-in-underground-mines/)
- [International Mining — Newtrax Control Room Editor](https://im-mining.com/2025/10/02/sandviks-newtrax-control-room-editor-improved-manual-data-management-underground/)
- [Micromine — Pitram Dispatch System](https://webhelp.micromine.com/pm/latest/English/pmfleet/IDH_DSP_OVERVIEW.htm)
- [Unison Mining — Shift Change Optimization and Handover Process](https://unisonmining.com/shift-change-optimization-and-handover-process/)
- [Heavy Vehicle Inspection — Pre-Shift Inspection Checklist Guide](https://heavyvehicleinspection.com/blog/post/mining-equipment-pre-shift-inspection-checklist-guide)
- [Douglas Machine — What is MTTR](https://www.douglas-machine.com/what-is-mean-time-to-repair-mttr-and-what-drives-it-up-or-down/)
- [ServiceChannel — What is Repair Time](https://servicechannel.com/glossary/repair-time/)
- [Fleetrabbit — Mining Equipment Availability Management Software for Production Planning](https://fleetrabbit.com/industry/mining-fleet-software/best-mining-equipment-availability-management-software-production-planning-2026)
- [Opsima — Mining Industry KPIs: 30 Metrics + Formulas](https://opsima.com/blog/kpis/mining-industry-kpis/)
- [Tacnode — Stale Data: Causes, Detection, and How to Set Freshness SLAs](https://tacnode.io/post/what-is-stale-data)
- [Confluent — Event-Driven Architecture (EDA): A Complete Introduction](https://www.confluent.io/learn/event-driven-architecture/)
- [Red Hat — What is event-driven architecture?](https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture)
- [Kai Waehner — Apache Kafka as Digital Twin for Open, Scalable, Reliable IIoT](https://www.kai-waehner.de/blog/2019/11/28/apache-kafka-industrial-iot-iiot-build-an-open-scalable-reliable-digital-twin/)
- [PLOS One — Intelligent Scheduling for Underground Mobile Mining Equipment](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0131003)
- [MDPI Sustainability — A Dynamic Scheduling Model for Underground Metal Mines under Equipment Failure Conditions](https://doi.org/10.3390/su15097306)
- [MDPI Sustainability — Rescheduling Plan Optimization of Underground Mine Haulage Equipment Based on Random Breakdown Simulation](https://www.mdpi.com/2071-1050/14/6/3448)
- [Springer MMEL — A Deviation-Minimization Approach to Short-Term Underground Mine Schedule Optimization](https://link.springer.com/article/10.1007/s42461-023-00802-5)
- [Queen's University — On the design and selection of vehicle coordination policies for underground mining](https://queensu.scholaris.ca/server/api/core/bitstreams/2ea01049-cfaf-417c-b7a2-d29745d870c4/content)
- [Aziz Bamar — How To Run A Production Meeting That Works](https://www.azizbamar.com/production-meeting/)
- [Global Mining Guidelines Group — Home / Working Groups](https://gmggroup.org/)
- [GMG — Time Usage Model for Underground Mining Project Update (nov 2024)](https://www.youtube.com/watch?v=Fw9pHNZ29ns)
- [GMG — Workshop: Updating the Mining Time Usage Model, KPIs and Definitions (nov 2025)](https://gmggroup.org/updating-mining-tum-kpi-definitions-workshop-20251118/)
- [Mining Technology — DISPATCH Underground Fleet Management System](https://www.mining-technology.com/products/dispatch-ug-fleet/)

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
