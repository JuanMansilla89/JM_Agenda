---
fecha: 2026-08-03
tipo: referencia
subtipo: prompt-deep-research
proyecto: CMH
fuente: Preparado por ASTAY para uso en herramienta de Deep Research
url:
tags: [cmh, deep-research, nexo360, mantenimiento360]
---

# Prompts de Deep Research — Nexo 360 Operation y Mantenimiento 360

**Proyecto:** CMH
**Objetivo:** generar dos investigaciones profundas independientes, una por cada bloque de solución que CMH exige (Bloque A — Nexo 360 Operation, Bloque B — Mantenimiento 360), para **entender y tallar el proceso operacional real que CMH quiere digitalizar** — no la arquitectura técnica — de modo que el diseño de la solución de ASTAY se apoye en estándares y prácticas de mercado, y no solo en el documento de requerimientos del cliente.

**Por qué dos prompts separados:** aunque ambos bloques están acoplados (Mantenimiento 360 alimenta de disponibilidad a Nexo 360), son dos procesos de negocio distintos con estándares de mercado distintos (SIC/gestión de operación vs. gestión de activos/mantenimiento) y deben investigarse con foco propio antes de diseñar la integración entre ambos.

**Contexto que debe pegarse o adjuntarse al ejecutar cada prompt:** `nexo360-mantenimiento360-requerimientos-ref.md` y `analisis-implicancias-tecnicas-ref.md` (ambos en `Documentacion/Referencias/`), que ya detallan lo que CMH pidió explícitamente. Para el Bloque A también existe `short-interval-control-ref.md`, con una investigación previa sobre SIC ya realizada — el nuevo research no debe repetir esa base, sino profundizar en lo que ese documento no cubre (ver notas al final de cada prompt).

---

## Prompt 1 — Nexo 360 Operation (Bloque A): planificación integrada y control de guardia

```
Actúa como consultor especialista en operaciones de minería subterránea y sistemas de gestión de turno (Short Interval Control / OMS).

CONTEXTO
Estoy diseñando una plataforma de software para digitalizar el proceso de planificación y control de guardia ("cambio de guardia") de una unidad minera subterránea aurífera en Perú (método de explotación UG, ~360 personas en interior mina, ~80 equipos de flota pesada). El cliente ya definió un alcance funcional propio (planes mensuales/semanales/diarios/por guardia, maestro de labores y frentes, maestro de personal y cuadrillas, motor de asignación de turnos, órdenes de trabajo con riesgos SSOMA, seguimiento intraturno, cierre de guardia estructurado), pero antes de diseñar la solución necesito entender a fondo el PROCESO operacional real detrás de esos requerimientos — no solo la lista de funcionalidades — y contrastarlo contra cómo lo resuelven las operaciones mineras subterráneas líderes y los proveedores de software especializados.

Ya cuento con una investigación previa sobre la metodología Short Interval Control (SIC) genérica (definición, principios, KPIs, flujo de turno, cultura, madurez). NO repitas esa base conceptual. Enfócate en lo que sigue.

OBJETIVO DE LA INVESTIGACIÓN
Entender y "tallar" (detallar paso a paso, con roles, entradas, salidas y puntos de decisión) el proceso real de planificación y control de guardia en minería subterránea, específicamente para:

1. **El ciclo de vida del plan de guardia**, desde el plan mensual hasta el plan operativo del turno: quién lo genera, con qué anticipación, cómo se valida contra restricciones (frentes liberados, dotación, disponibilidad de equipos, condiciones geotécnicas/ventilación), y qué pasa cuando el plan no puede cumplirse antes de empezar el turno.

2. **El proceso de asignación de cuadrillas y equipos a labores/frentes** ("motor de asignación"): qué reglas y prioridades usan los sistemas líderes del mercado (compatibilidad técnica operador-equipo, certificaciones, ubicación, seguridad, continuidad de labor entre turnos), si suelen ser motores basados en reglas explícitas, heurísticas de optimización, o asistidos por IA/ML, y qué nivel de automatización vs. decisión humana es típico en minería subterránea (a diferencia de tajo abierto, donde el despacho suele ser más automatizado).

3. **El flujo de la Orden de Trabajo (OT) con riesgos SSOMA asociados**: cómo se genera, qué información de seguridad debe llevar (IPERC, permisos de trabajo, checklist), cómo se distribuye e imprime antes del ingreso a mina (proceso de "impresión masiva por zona"), y cómo se cierra/verifica su ejecución.

4. **El seguimiento intraturno y la reasignación en caliente**: qué eventos disparan una reasignación durante el turno, cómo se comunica al personal en campo (especialmente en zonas con conectividad intermitente), y qué trazabilidad de desvíos es estándar en la industria (quién decide, qué se registra, cómo se audita después).

5. **El cierre de guardia estructurado y su retroalimentación al turno entrante**: qué información de cierre es estándar (avances, incidentes, consumos, equipos entregados/recibidos, restricciones pendientes) y cómo los sistemas de mercado aseguran que esta información realmente informe la planificación del siguiente turno (no solo quede archivada).

6. **Diferencias específicas de minería subterránea vs. tajo abierto** en este proceso: unidad de control (labor/frente vs. ruta/equipo), dependencias de secuencia entre actividades (ventilación, sostenimiento, servicios), y cómo los proveedores de software adaptan sus productos a este contexto (no simplemente "achican" un producto de tajo abierto).

7. **Benchmark de soluciones de mercado** que digitalizan este proceso específico en minería subterránea (no solo SIC genérico de tajo abierto): Commit Works, Micromine Pitram, Deswik, Maptek Evolution/BlastLogic, RPMGlobal, Hexagon Mining HxGN, Epiroc (6th Sense / Underground Mine Manager), Newtrax, GEOVIA. Para cada uno que encuentres con evidencia pública suficiente: qué cubre de este proceso, cómo modela el motor de asignación, cómo maneja la conectividad intermitente en interior mina, y qué diferenciadores tiene frente a competidores.

8. **Patrones de UX y operación en campo con conectividad intermitente**: cómo diseñan estos sistemas la experiencia de un supervisor de turno que debe operar con conexión intermitente (no solo la arquitectura técnica offline-first, sino el proceso: qué puede hacer sin conexión, qué debe esperar, cómo se le comunica el estado de sincronización).

QUÉ NO INVESTIGAR (ya cubierto)
- Definición y principios generales de SIC (intervalos, KPIs, reuniones de intervalo) — ya investigado.
- Arquitectura técnica de sincronización offline (Store & Forward, IndexedDB, resolución de conflictos) — es un tema de diseño técnico interno, no de proceso de negocio.

FORMATO DE ENTREGA ESPERADO
Un informe estructurado por cada uno de los 8 puntos anteriores, con:
- El proceso "tallado" paso a paso (diagrama de flujo textual: actor → acción → decisión → siguiente paso).
- Comparación entre al menos 2-3 enfoques o proveedores de mercado cuando exista evidencia pública.
- Fuentes citadas (papers, guías de la industria como GMG, documentación de producto de los proveedores, casos de estudio).
- Al final, una sección de "implicaciones de diseño" que traduzca los hallazgos en recomendaciones concretas para el equipo de diseño de producto (sin proponer arquitectura técnica, solo proceso y reglas de negocio).
```

**Nota:** este prompt asume que quien lo ejecuta puede adjuntar `short-interval-control-ref.md` como contexto de lo ya sabido, para que el research no repita la base conceptual de SIC.

---

## Prompt 2 — Mantenimiento 360 (Bloque B): disponibilidad y gestión de flota

```
Actúa como consultor especialista en gestión de activos y mantenimiento de flota pesada en minería subterránea (CMMS/EAM, disponibilidad y confiabilidad).

CONTEXTO
Estoy diseñando el módulo de mantenimiento y disponibilidad de flota para una plataforma que digitaliza la operación de una unidad minera subterránea aurífera en Perú (~80 equipos de flota pesada propios y de contratistas, ~20 vehículos de apoyo). El cliente exige que este módulo entregue disponibilidad dinámica de equipos (operativo, taller, standby, panne, preventivo) como precondición MANDATORIA para que otro módulo (motor de asignación de turnos) pueda programar la guardia — es decir, es un módulo de "fuente de verdad" de disponibilidad, no solo un CMMS aislado. También exige integración obligatoria con SAP (módulos PM/MM) y manejo de maestro/historial de equipos (marcas, horómetros, criticidad, vigencia documental), planes preventivos/correctivos, backlog de repuestos y ubicación de equipos (inicialmente manual, con arquitectura preparada para tracking automatizado futuro).

Antes de diseñar la solución necesito entender a fondo el PROCESO real de gestión de disponibilidad y mantenimiento de flota en minería — no solo la lista de funcionalidades — y contrastarlo contra estándares de gestión de activos y cómo lo resuelven los proveedores de software especializados en minería.

OBJETIVO DE LA INVESTIGACIÓN
Entender y "tallar" (detallar paso a paso, con roles, entradas, salidas y puntos de decisión) el proceso de gestión de disponibilidad y mantenimiento de flota minera, específicamente para:

1. **Definiciones y cálculo estándar de disponibilidad y utilización de flota minera**: disponibilidad física (PA), disponibilidad mecánica (MA), utilización, MTBS (mean time between shutdowns), MTTR, y cómo estos indicadores se relacionan con OEE en el contexto de equipos mineros (no manufactura). Cuál es la definición operacional exacta de cada estado (operativo, taller, standby, panne, preventivo) usada en la industria y cómo se transiciona entre ellos.

2. **El proceso de transición de estado de un equipo en tiempo real**: quién reporta el cambio de estado (operador, mecánico, despacho), con qué latencia se refleja en el sistema, y qué validaciones/aprobaciones existen antes de que un cambio de estado impacte la disponibilidad "oficial" que consume otro sistema (en este caso, el motor de asignación de Nexo 360).

3. **Planificación de mantenimiento preventivo y correctivo**: cómo se estructura la programación por horómetro/calendario en flota minera subterránea, cómo se gestionan las solicitudes de taller y órdenes de mantenimiento de principio a fin, y cómo se prioriza el backlog cuando hay más solicitudes que capacidad de taller — qué criterios de priorización son estándar en la industria (criticidad del equipo, impacto en producción, riesgo de seguridad, antigüedad de la solicitud).

4. **Gestión de backlog de repuestos y su relación con MM**: cómo los sistemas de mercado conectan la planificación de mantenimiento con la disponibilidad de repuestos (reserva, pedido, lead time), y qué patrones de integración son típicos entre un CMMS/EAM y SAP MM (no solo a nivel técnico, sino de proceso: quién solicita, quién aprueba, cómo se resuelve un repuesto no disponible que bloquea una intervención).

5. **Gestión de equipos de contratistas vs. propios**: qué diferencias de proceso existen (vigencia documental, habilitación, responsabilidad del mantenimiento) y cómo los sistemas de mercado modelan esta distinción sin duplicar procesos.

6. **Ubicación y tracking de equipos en minería subterránea**: cómo evoluciona típicamente una operación desde registro manual por nivel/sector hacia tracking automatizado (WiFi/BLE beacons, RFID, UWB, tracking GNSS donde aplica), qué proveedores lideran este tracking en subterránea (Newtrax, Mine Site Technologies, Wi-Fi based systems tipo Nokia/Cisco industrial), y qué arquitectura de datos permite que un sistema empiece con registro manual y migre a automatizado sin rediseñar el modelo de datos.

7. **Marcos y estándares de gestión de activos aplicables**: ISO 55000/55001 (gestión de activos), SAE JA1011/JA1012 (RCM - Reliability Centered Maintenance), y cómo estos marcos se traducen en prácticas concretas de mantenimiento preventivo/predictivo para flota minera pesada — qué tan aplicables son a una operación de esta escala (~80 equipos) o si son marcos sobredimensionados para el caso.

8. **Benchmark de soluciones de mercado** especializadas en gestión de flota y mantenimiento minero: SAP PM (nativo), IBM Maximo, Komatsu Modular Mining (Dispatch/AHS con módulo de mantenimiento), Trimble/Wenco, RPMGlobal (Fleet/Maintenance), Prometheus Group, GE Digital APM. Para cada uno con evidencia pública suficiente: cómo modela el estado de disponibilidad en tiempo real, cómo se integra con sistemas de planificación de operación (equivalente al motor de asignación de Nexo 360), y qué patrones de integración usan con SAP PM/MM cuando coexisten.

9. **El acoplamiento disponibilidad-planificación como problema de proceso, no solo de datos**: cómo las operaciones maduras evitan que una disponibilidad desactualizada o mal reportada arruine la planificación del turno siguiente — qué controles de calidad de dato, reglas de "última actualización aceptable" o alertas de disponibilidad estancada son prácticas comunes.

FORMATO DE ENTREGA ESPERADO
Un informe estructurado por cada uno de los 9 puntos anteriores, con:
- El proceso "tallado" paso a paso (diagrama de flujo textual: actor → acción → decisión → siguiente paso).
- Comparación entre al menos 2-3 enfoques o proveedores de mercado cuando exista evidencia pública.
- Fuentes citadas (estándares ISO/SAE, guías de la industria, documentación de producto de los proveedores, casos de estudio).
- Al final, una sección de "implicaciones de diseño" que traduzca los hallazgos en recomendaciones concretas para el equipo de diseño de producto (sin proponer arquitectura técnica, solo proceso y reglas de negocio) — incluyendo explícitamente cómo debería diseñarse la interfaz de disponibilidad que consume el motor de asignación de Nexo 360 para que ese acoplamiento sea confiable.
```

---

## Cómo usar estos prompts

1. Ejecutar cada prompt en la herramienta de Deep Research disponible (adjuntando los documentos de contexto indicados).
2. Guardar el resultado de cada investigación como una nueva nota de referencia en `Documentacion/Referencias/` (p. ej. `deep-research-nexo360-proceso-ref.md` y `deep-research-mantenimiento360-proceso-ref.md`), siguiendo el template `Doc-Referencia`.
3. Usar ambos resultados, junto con `nexo360-mantenimiento360-requerimientos-ref.md` y `analisis-implicancias-tecnicas-ref.md`, como insumo para la reunión técnica de levantamiento y para el diseño de la solución (arquitectura, modelo de datos, reglas de negocio del motor de asignación y de disponibilidad).

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
