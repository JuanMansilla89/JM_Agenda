---
fecha: 2026-08-04
tipo: referencia
subtipo: deep-research
proyecto: CMH
fuente: "Deep Research — ejecución del prompt 1 (Nexo 360 Operation) de 2026-08-03-prompts-deep-research-nexo360-mantenimiento360.md"
url:
tags: [cmh, deep-research, nexo360, mineria-subterranea, sic]
---

# Referencia — Deep Research: Proceso de Planificación y Control de Guardia en Minería Subterránea (Nexo 360 Operation)

**Proyecto:** CMH
**Fuente:** Investigación de mercado y proceso operacional, ejecutada a partir del Prompt 1 (`2026-08-03-prompts-deep-research-nexo360-mantenimiento360.md`)
**Tipo:** deep research / benchmark de mercado y proceso de negocio

---

*Investigación de mercado y proceso operacional — complemento a la investigación previa sobre metodología SIC genérica ([[short-interval-control-ref]]). Preparado para el diseño de plataforma de digitalización de guardia, operación aurífera subterránea, Perú (~360 personas interior mina, ~80 equipos).*

---

## 1. Ciclo de vida del plan de guardia: de mensual a turno

### 1.1 Jerarquía de planeamiento

La literatura de planeamiento minero subterráneo confirma una cascada de cuatro a cinco horizontes que se retroalimentan entre sí:

```
Plan de vida de mina (LOM)
   └─> Plan ANUAL/trimestral (mediano plazo, ~3 meses)
         └─> Plan MENSUAL — geometría + labores/frentes disponibles del período
               └─> Plan SEMANAL — verifica secuencias vs. plan mensual
                     └─> Plan DIARIO — technician de mina ajusta con info real de frentes
                           └─> Plan de GUARDIA/TURNO — "reparto de guardia", horizonte ~10h
```

El plan mensual "consiste en una geometría que considera varios parámetros operacionales para su preparación y pone a disposición las labores/frentes que compondrán el programa de producción de la guardia" — es decir, el mensual no asigna cuadrillas, solo *habilita* el universo de frentes elegibles. El semanal/diario lo elabora un **técnico de minado (mining technician)**, quien "informa qué frentes están disponibles en el período y verifica la calidad del mineral presente y la productividad histórica de los equipos existentes" ([Groundhog Apps – Art of Short-Term Scheduling](https://groundhogapps.com/art-of-short-term-scheduling/); [F1000Research – short-term mine planning optimization](https://f1000research.com/articles/13-1107); [Deswik – Underground Metals Planning](https://www.deswik.com/capabilities/underground-metals/planning)).

### 1.2 El "reparto de guardia" — evidencia de campo (mina Orcopampa, Buenaventura, Perú)

La fuente más operacionalmente concreta encontrada es un artículo de *Revista Seguridad Minera* que describe el **reparto de guardia** en la mina subterránea de oro Orcopampa (Buenaventura) — prácticamente el mismo tipo de operación que el cliente de este proyecto. El proceso tiene **dos fases separadas, con roles y horarios explícitos**:

**Fase 1 — Reparto con Supervisores** (6:00–6:30 turno día / 6:00–6:30 turno noche)
- Participantes: Superintendente de Mina, Jefes de Mina/Jefes de Turno, Gerente de Seguridad/Ing. de Seguridad, Superintendente de Geología, representantes de contratistas (ECM).
- Orden de exposición fijo: **Seguridad** (notas relevantes y labores críticas) → **Control de Calidad** → **Mantenimiento Mecánico** → **Mantenimiento Eléctrico** → **ECMs** (contratistas) → **Residente de Piques** → **Planeamiento** → **Ventilación**.
- Un secretario documenta "todas las participaciones (órdenes de trabajo, acciones correctivas y pedidos)" en PowerPoint y lo distribuye por correo.

**Fase 2 — Reparto con Colaboradores** (6:30–8:00, mismo patrón día/noche)
- El **Residente de la ECM (contratista) dirige** el reparto operativo; los supervisores de la titular *verifican cumplimiento sin dar órdenes directas* (separación clara entre quien ejecuta y quien supervisa).
- Se comunica: estado de avances en exploración/preparación/operación, incidentes previos con acciones correctivas, **planos de labores** con nombre y cargo de los directores/responsables de cada frente, órdenes de trabajo del turno anterior.
- El **Jefe de Guardia saliente** "expone y reporta en los planos a través de la multimedia todos los pormenores" al Jefe de Guardia/Turno entrante — coordinación explícita turno-a-turno.
- Cierra con **arenga de seguridad** antes de bajar a mina.

Registro: un supervisor anota en el "cuaderno del reparto de guardia" las órdenes de trabajo y notas de seguridad; actos y condiciones se cargan a una interfaz PowerPoint integrada a una base de datos SQL Server (CMBSAA) y se distribuyen en tres copias (responsable, generador, departamento de seguridad).

Fuente: [Revista Seguridad Minera – Reparto de guardia interactivo en la mina Orcopampa](https://revistaseguridadminera.com/gestion-seguridad/reparto-de-guardia/)

Esto es evidencia directa de que **el "reparto de guardia" en minería subterránea peruana es un evento presencial, jerárquico y en dos capas** (supervisores → colaboradores), no solo un documento que se genera automáticamente. Cualquier plataforma digital debe modelar este ritual social, no reemplazarlo silenciosamente.

### 1.3 Validación contra restricciones y qué pasa cuando el plan no se puede cumplir

Un hallazgo crítico viene de un artículo de gestión de producción subterránea (Abacus): los supervisores frecuentemente crean el programa del turno siguiente **"sin conocer el estado real de los recursos en el lugar a programar (equipos, servicios, materiales, personal, estado del ciclo de minado o condiciones del lugar)"**. Esto produce que **solo entre el 30% y 60% de las órdenes de trabajo resulten realmente ejecutables sin demoras**, y que la "asignación efectiva de trabajo" (poder empezar la actividad sin esperar por recursos faltantes) tenga "un impacto negativo de hasta 35% en la capacidad de producción y hasta 20% en costos" ([Checklist Abacus – Gestión integral de la producción en una mina subterránea](https://checklistapp.abacus.mx/blog/gestion-integral-de-la-produccion-en-una-mina-subterranea/)).

Esto confirma que el problema central que el "motor de validación" del plan de guardia debe resolver **no es solo optimizar**, sino **verificar la ejecutabilidad real** contra: frentes liberados (ver §6 sobre secuenciamiento), dotación disponible, disponibilidad de equipos, condiciones geotécnicas/ventilación — antes de comprometer el plan.

Los sistemas de mercado abordan el "plan que no se puede cumplir" con **replanificación asistida en tableta, incluso offline, mientras el supervisor está bajo tierra**:
- **ORDO** permite "planificar y replanificar sobre la marcha usando tabletas bajo tierra, con control touchscreen y drag-and-drop para retrasar, extender o adelantar tareas" y "preparar el handover para el siguiente turno mientras aún se está bajo tierra" ([ORDO – Shift Planning for Mining Shift Supervisors](https://www.ordodeploy.com/shift-planning-for-mining-shift-supervisors/)).
- **Micromine Pitram Shift Planner**: "los supervisores son notificados cuando una tarea está en riesgo de retraso, las dependencias entre tareas se muestran gráficamente permitiendo identificar el efecto de un retraso fácilmente, y las tareas pueden reprogramarse o reasignarse en tiempo real durante el turno" ([Micromine – Pitram Shift Planner](https://www.micromine.com/pitram-taking-shift-planner-to-the-next-level/)).
- **RPMGlobal ShiftManager**: "actualiza a los usuarios para ser ágiles y responder proactivamente a cambios intra-turno actualizando en tiempo real" ([RPMGlobal – ShiftManager](https://rpmglobal.com/product/shiftmanager/)).

### 1.4 Diagrama de flujo textual (síntesis)

```
Ing. Planeamiento (mensual) → habilita universo de labores/frentes con secuencia de dependencia
   ↓
Técnico de minado (semanal) → asigna frentes candidatos por semana, valida producción histórica de equipos
   ↓
Técnico de minado / Jefe de Guardia saliente (diario/pre-turno) → arma propuesta de plan de turno
   ↓
DECISIÓN: ¿el frente está liberado? (geotecnia/ventilación) ¿hay dotación? ¿hay equipo calificado disponible?
   ├─ SÍ → plan se confirma en Reparto de Guardia (fase supervisores)
   └─ NO → escalar a Jefe de Mina/Superintendente → reasignar frente o degradar actividad (ej. solo desate, no avance)
   ↓
Reparto de Guardia con colaboradores → Jefe de Guardia saliente informa contexto al entrante → asignación de cuadrillas
   ↓
Ejecución (ver §4)
   ↓
Cierre de guardia → retroalimenta el próximo ciclo (ver §5)
```

---

## 2. El motor de asignación de cuadrillas y equipos a labores/frentes

### 2.1 Reglas y prioridades típicas

La evidencia de producto confirma consistentemente cuatro categorías de reglas:

1. **Compatibilidad/calificación operador–equipo**: **Micromine Pitram** tiene un módulo explícito de "Operator Qualifications" que "rastrea y valida el entrenamiento de operadores cuando son asignados a una pieza de equipo... vinculado al modelo de equipo". Crucialmente: **"si alguien no está calificado, no hay forma de asignarlo a ese equipo en DA o Mobile"** — es una regla dura, no una advertencia blanda. Existe una función "Alarm on Override" (si se fuerza la asignación de alguien sin calificación vigente, se dispara un popup a todas las instancias notificadas) y "Sliding Extension Days" para manejar vencimientos de certificación en curso ([Micromine Pitram – How to Set Up Operator Qualifications](https://micromine-pitram.zendesk.com/hc/en-us/articles/25807320997145-How-to-Set-Up-Operator-Qualifications)).
2. **Ubicación/continuidad de labor**: Deswik.ShiftPlanner permite "ver actividades del turno previo, próximo turno o próxima semana" para mantener continuidad de la misma cuadrilla en el mismo frente ([Deswik.ShiftPlanner App Store](https://apps.apple.com/us/app/deswik-shiftplanner/id6443614488)).
3. **Seguridad/certificaciones de riesgo**: integrado al flujo de PETAR/IPERC (ver §3).
4. **Prioridad de recursos**: Commit Works CiteOps tiene un módulo específico llamado **"My Shift Resourcing"** para carga de personal con habilidades/calificaciones verificadas ("Personnel managed with verified skills and qualifications") ([Commit Works – My Shift Resourcing](https://www.commit.works/citeops/my-shift-resourcing/)).

### 2.2 ¿Reglas explícitas, heurísticas o IA/ML?

**Hallazgo central: el nivel de automatización en minería subterránea es mayoritariamente humano-asistido (rule-based + drag-and-drop), no despacho automático como en tajo abierto — con una excepción notable: block caving.**

- **Tajo abierto**: dispatch systems como DISPATCH clásico usan "algoritmos propietarios probados" para optimización de ruta camión-pala en tiempo real, altamente automatizado ([Mining-Technology – DISPATCH Fleet Management](https://www.mining-technology.com/products/dispatch-fleet-management/)). La lógica de despacho ahí es sobre *rutas*.
- **Subterráneo (genérico, desarrollo/producción convencional)**: la asignación es predominantemente un **"magnet board" digital** — el patrón de UX más repetido en la investigación es literalmente "una pizarra magnética modernizada": ORDO describe su producto así, permitiendo "ver todos los miembros de cuadrilla disponibles y sus roles de un vistazo" y asignar por drag-and-drop ([ORDO](https://www.ordodeploy.com/shift-planning-for-mining-shift-supervisors/)). Deswik.ShiftPlanner: "revisar y ajustar el plan, asignar equipos y personas" manualmente con apoyo de validación ([Deswik.ShiftPlanner](https://apps.apple.com/us/app/deswik-shiftplanner/id6443614488)).
- **Excepción — block caving con motor de optimización real**: **Deswik ORB**, desplegado en los Panel Cave 1 y 2 de **Cadia Valley (Newcrest)** en Australia, es descrito como **"el primer sistema de Short Interval Control altamente automatizado para minas subterráneas de roca dura"**. ORB evalúa "más de mil millones de estrategias de tiro potenciales" (draw strategies) usando matemática industrial/optimización, respeta restricciones geotécnicas y operacionales, y envía **"decisiones de despacho autónomo de LHD en tiempo real directo a los operadores vía tabletas a bordo con comunicación bidireccional"**. Resultados: +20% productividad, +17% cumplimiento del draw plan ([Deswik – World's first highly automated SIC system for hard-rock UG mines](https://www.deswik.com/casestudies/world-s-first-highly-automated-short-interval-control-system-for-hard-rock-underground-mines); [Deswik – ORB product page](https://www.deswik.com/products/orb); [AusIMM – Real time LHD dispatch optimisation at Cadia](https://www.ausimm.com/publications/conference-proceedings/fourth-international-future-mining-conference-2019/real-time-lhd-dispatch-optimisation-at-newcrests-cadia-valley-operations/)).

  Esto es clave para el diseño: **la automatización total del motor de asignación en subterráneo solo se justifica hoy cuando el problema es matemáticamente tratable y de alto volumen repetitivo (drawpoints de un cave, decenas de LHD, miles de ciclos/día)**. En una operación de vetas/estructuras narrow-vein con ~80 equipos y variabilidad geotécnica alta (como describe el contexto del cliente), el patrón de mercado dominante es **reglas explícitas + recomendación + decisión humana final del supervisor**, no un optimizador autónomo.

- **IA/ML**: aún incipiente y mayormente en predictive maintenance/geología, no en asignación de cuadrillas. Un reporte de adopción de IA muestra que **"más del 56% de los despliegues de IA en minería se enfocan en operaciones de tajo abierto"**, con subterráneo rezagado por "limitaciones de comunicación y localización que dificultan el despliegue de sistemas totalmente autónomos" y por el costo prohibitivo de conectividad confiable bajo tierra ([Discovery Alert – AI-Driven Automation Mine Management](https://discoveryalert.com.au/ai-driven-automation-mine-management-2026/)).

### 2.3 La analogía "control de tráfico aéreo" (Hexagon)

Hexagon posiciona su motor de coordinación UG Pro explícitamente como control de tráfico aéreo subterráneo: *"Miners and machinery can resemble commercial aviation but flying in the darkness of an underground environment"* (Carl Brackpool, Hexagon). El sistema: (1) rastrea ubicación/movimiento de todos los activos y personas, (2) monitorea actividades a nivel de tarea, (3) modifica flujos de trabajo en tiempo real, (4) asegura espaciado/timing en intersecciones de tráfico (cruces de galería). Caso citado: una mina de oro sudamericana redujo 6% el "tiempo perdido no contabilizado" y subió productividad de 35 a 39.54 ton/hora en 4 meses ([Hexagon Mining Blog – Air traffic control in an underground environment](https://blog.hexagonmining.com/3357-2/)).

### 2.4 Comparación de enfoques de motor de asignación

| Proveedor | Enfoque | Automatización | Evidencia |
|---|---|---|---|
| Deswik.ShiftPlanner | Manual asistido, drag-and-drop | Baja–media (recomendaciones + validación) | [App Store](https://apps.apple.com/us/app/deswik-shiftplanner/id6443614488) |
| Deswik ORB | Optimización matemática autónoma | Alta (solo en block caving) | [Case study Cadia](https://www.deswik.com/casestudies/world-s-first-highly-automated-short-interval-control-system-for-hard-rock-underground-mines) |
| Micromine Pitram | Reglas duras de calificación/certificación | Media (bloqueo automático, resto manual) | [Zendesk – Operator Qualifications](https://micromine-pitram.zendesk.com/hc/en-us/articles/25807320997145-How-to-Set-Up-Operator-Qualifications) |
| Commit Works CiteOps | Recursos por habilidad/calificación verificada | Media, "magnet board" digital | [My Shift Resourcing](https://www.commit.works/citeops/my-shift-resourcing/) |
| ORDO | "Magnet board" digital puro | Baja–media | [ORDO](https://www.ordodeploy.com/shift-planning-for-mining-shift-supervisors/) |
| Hexagon UG Pro | Coordinación tipo "ATC", tracking continuo | Media–alta en visibilidad, decisión humana en asignación | [Blog Hexagon](https://blog.hexagonmining.com/3357-2/) |
| RPMGlobal XECUTE/ShiftManager | Plan vivo multi-usuario, feeds de FMS en tiempo real | Media | [XECUTE](https://rpmglobal.com/product/xecute/) |

---

## 3. Flujo de la Orden de Trabajo con riesgos SSOMA (contexto Perú: IPERC/PETAR)

### 3.1 Marco regulatorio peruano

Bajo el **D.S. 024-2016-EM** (Reglamento de Seguridad y Salud Ocupacional en Minería, modificado por D.S. 023-2017-EM y D.S. 034-2023-EM):

- Los **supervisores del titular y de las empresas contratistas están obligados a realizar inspecciones diarias al inicio de cada turno**, impartiendo las medidas de seguridad relevantes a sus trabajadores.
- **PETAR (Permiso Escrito para Trabajo de Alto Riesgo)** es obligatorio para todo trabajo de alto riesgo identificado en la matriz **IPERC**: espacios confinados, trabajo en caliente, excavaciones ≥1m, trabajo en altura, trabajo eléctrico de alta tensión, entre otros.

Fuente: [Gob.pe – D.S. 024-2016-EM](https://www.gob.pe/institucion/osinergmin/normas-legales/741887-024-2016-em); resumen normativo en [Instituto de Seguridad](https://www.institutodeseguridad.edu.pe/curso/decreto-supremo-024-2016-em/).

### 3.2 Proceso PETAR — procedimiento de una operación real (Buenaventura, El Brocal)

El procedimiento oficial de Buenaventura (`P-COR-SIB-04.10`) confirma reglas de negocio muy específicas y directamente accionables para el diseño de la OT:

- El PETAR debe elaborarse **"en original y copia para cada turno (día y/o noche)"**. **Si cambian los responsables o el lugar de trabajo, se debe preparar un nuevo PETAR para ese turno** — es decir, el permiso **no es reutilizable entre guardias ni transferible entre responsables**, aunque la tarea siga siendo la misma.
- Debe estar **firmado por el Supervisor de la Empresa Ejecutora y por el Jefe de Área donde se realiza el trabajo**, y entregado/firmado por cada turno de trabajo.
- Todo trabajo de alto riesgo identificado en el IPERC **requiere obligatoriamente** PETAR, autorizado y firmado por cada guardia por el Supervisor y el Jefe de Área.

Fuente: [Buenaventura – Procedimiento PETAR](https://buenaventura.com/wp-content/uploads/2024/10/P-COR-SIB-04.10-Permiso-Escrito-para-Trabajos-de-Alto-Riesgo-PETAR_V01.pdf); contexto general en [Instituto Ambiental Perú](https://institutoambiental.pe/que-es-permiso-escrito-para-trabajos-de-alto-riesgo-petar/) y [Consitec Perú](https://consitecperu.com/vocabulario-sst/petar-permiso-escrito-para-trabajos-de-alto-riesgo).

### 3.3 Flujo integrado OT + IPERC + PETAR (síntesis del caso Orcopampa + normativa)

```
Planeamiento/Jefe de Guardia saliente → identifica actividad del frente para el próximo turno
   ↓
¿La actividad está en la matriz IPERC como alto riesgo?
   ├─ NO → Orden de trabajo estándar (con IPERC de línea base del frente)
   └─ SÍ → se exige generar PETAR NUEVO para ESE turno específico
              ↓
        Supervisor ejecutor + Jefe de Área firman PETAR (obligatorio, no delegable)
              ↓
        Reparto de guardia: OT + PETAR se comunican verbalmente + se registran en cuaderno/planos
              ↓
        [PROCESO NO DOCUMENTADO PÚBLICAMENTE CON DETALLE — impresión masiva por zona]
              ↓
        Ejecución en campo con permiso físico portado
              ↓
        Cierre: verificación de ejecución + PETAR se archiva junto al reporte de guardia
```

**Nota de brecha de evidencia**: no se encontró documentación pública específica sobre el mecanismo de **"impresión masiva por zona"** de órdenes de trabajo antes del ingreso a mina (se buscó explícitamente en español e inglés). Esto aparece ser una práctica operativa interna/tácita de las minas, no documentada por proveedores de software ni en papers — probablemente porque hoy se resuelve con impresoras de oficina y coordinación manual antes de que el software lo automatice. Es una oportunidad de diferenciación de producto, no un patrón de mercado ya resuelto. Recomendación: validarlo directamente con el cliente vía entrevista de proceso, no asumir un patrón externo.

---

## 4. Seguimiento intraturno y reasignación en caliente

### 4.1 Disparadores típicos de reasignación

De la evidencia agregada, los eventos que disparan reasignación intra-turno son:
- Falla/avería de equipo ("equipment failure is a common problem... resulting in significant delays and reductions in production efficiency" — [MDPI Sustainability – Dynamic Scheduling Model for Underground Metal Mines under Equipment Failure Conditions](https://doi.org/10.3390/su15097306)).
- Retraso de tarea que dispara alerta ("supervisors are notified when a task is at risk of delay" — Pitram Shift Planner).
- Condición de ventilación/gas post-voladura que no despeja a tiempo (ver §6.2).
- Hallazgo geotécnico no previsto en el frente.
- Incidente de seguridad.

### 4.2 Comunicación en zonas de conectividad intermitente

Patrones de mercado consistentes:
- **Store-and-forward**: Hexagon UG Pro está "desarrollado específicamente para minas que carecen de redes de datos bajo tierra, optimizando la eficiencia usando tabletas que almacenan y reenvían información crítica entre supervisores y trabajadores vía puntos de acceso de red" ([Hexagon – MineOperate UG Pro](https://hexagon.com/products/hxgn-mineoperate-ug-pro)).
- **Mensajería directa operador-supervisor**: Micromine Pitram "mejora la comunicación en campo con mensajería directa al operador, permitiendo identificación y mitigación en tiempo real de problemas del turno" ([Mining-Technology – Micromine Pitram](https://www.mining-technology.com/contractors/fleet-management-software/micromine-pitram/)).
- **Redes mesh/multi-tecnología**: Newtrax conecta dispositivos "a cualquier red disponible en la mina incluyendo leaky feeder, WiFi y LTE", con red mesh MineHop® que permite detección de proximidad, control remoto de ventilación y transmisión de datos incluso en "zonas GPS-denied mediante redes mesh y procesamiento local" ([Sandvik/Newtrax – MDP Worker Lifeline and Proximity Detection](https://www.mining.sandvik/en/digital-solutions/operations-and-connected-fleet/mixed-fleet-telemetry/newtrax-mdp---worker-lifeline-and-proximity-detection/)).

### 4.3 Trazabilidad de desvíos — brecha de evidencia parcial

La evidencia confirma el *qué* pero es débil en el *cómo se audita*:
- **Quién decide**: el dispatcher/supervisor de turno tiene la autoridad operativa inmediata; "dispatchers document and justify variances in the compliance between planned and actual results during their shift" ([búsqueda agregada sobre rol de dispatcher subterráneo]).
- **Qué se registra**: la práctica de campo (Orcopampa) muestra que las desviaciones y acciones correctivas se registran en el cuaderno de reparto de guardia y se cargan a una base de datos (CMBSAA/SQL Server), no solo como texto libre.
- **Cómo se audita después**: no se encontró un estándar de industria público y explícito para el proceso de auditoría post-hoc de desvíos (más allá de reuniones de revisión de turno / root cause analysis genérico). Esto sugiere que **el diseño de "quién aprueba una reasignación en caliente" y "cómo se cierra el ciclo de auditoría" es terreno de reglas de negocio específicas del cliente**, no un patrón universal de mercado — punto a definir explícitamente con el cliente (¿el Jefe de Guardia puede reasignar sin escalar? ¿hasta qué umbral de HH o de riesgo requiere aprobación del Superintendente?).

---

## 5. Cierre de guardia estructurado y retroalimentación al turno entrante

### 5.1 Contenido estándar del cierre (evidencia consolidada)

De múltiples fuentes (plantillas de la industria + caso Orcopampa + Mineware), el cierre de guardia estándar contiene:

| Categoría | Contenido específico | Fuente |
|---|---|---|
| Avances | Exploración, preparación, operación (por frente) | [Orcopampa](https://revistaseguridadminera.com/gestion-seguridad/reparto-de-guardia/) |
| Incidentes | Con acciones correctivas explícitas | [Orcopampa](https://revistaseguridadminera.com/gestion-seguridad/reparto-de-guardia/); [SafetyCulture – Production Supervisor Shift Handover Checklist](https://safetyculture.com/library/mining/production-supervisor-shift-handover-golding-swc-z6tossysuirq2e86) |
| Consumos | Cutter bits, mangueras hidráulicas, inventario de motores de tramo | [SafetyCulture/Yourco – Shift Report Format Guide](https://www.yourco.io/blog/shift-report-format) |
| Equipos | Estado, ubicación, entrega/recepción, "digger relocation start points" | [SafetyCulture – Supervisor Shift Report](https://safetyculture.com/library/mining/supervisor-shift-report-oliqN) |
| Restricciones pendientes | Órdenes de trabajo no ejecutadas del turno anterior, planos de labores con responsables | [Orcopampa](https://revistaseguridadminera.com/gestion-seguridad/reparto-de-guardia/) |
| Seguridad | Notas de seguridad y labores críticas expuestas primero en el reparto | [Orcopampa](https://revistaseguridadminera.com/gestion-seguridad/reparto-de-guardia/) |

### 5.2 Cómo el mercado asegura que el cierre realmente informe el turno siguiente (no solo se archive)

Este es el punto donde la investigación identificó el mecanismo más concreto: **el cierre no es un formulario que se guarda, es un evento de traspaso obligatorio y estructurado con presencia física/verbal + respaldo digital**:

- **Orcopampa**: el Jefe de Guardia saliente **expone y reporta en los planos vía multimedia todos los pormenores** directamente al entrante — nunca es solo un documento leído después.
- **ORDO**: permite al supervisor **"configurar los parámetros del siguiente turno mientras aún está bajo tierra"**, visualizar cómo la planificación actual afecta el siguiente turno y el semanal, generar **reportes de varianza plan-vs-real**, y crear **notas de reunión vinculadas** que documentan la discusión de handover — el traspaso queda estructuralmente conectado al próximo plan, no como archivo separado ([ORDO](https://www.ordodeploy.com/shift-planning-for-mining-shift-supervisors/)).
- **Deswik.ShiftPlanner**: "acceso a toda la información de contexto necesaria... ver actividades del turno previo, próximo turno o próxima semana" — la continuidad es una vista, no un reporte estático.
- **RPMGlobal ShiftManager**: plan único integrado basado en web al que todos los departamentos acceden — evita que el cierre "quede en un silo" de un departamento.

**Implicación de diseño clave**: el patrón de mercado ganador no es "generar un PDF de cierre de guardia", sino **hacer que el cierre alimente directamente los campos editables del plan del turno siguiente** (frentes con restricción pendiente pre-cargados, equipos no disponibles pre-marcados, incidentes abiertos visibles en la pantalla de planificación del siguiente turno).

---

## 6. Diferencias específicas: minería subterránea vs. tajo abierto

### 6.1 Unidad de control

- **Tajo abierto**: la unidad de control es la **ruta/ciclo camión-pala** (route optimization); "software como K-MINE integra despacho de flota con modelos 3D de pit para optimización de acarreo dinámica y consciente del diseño" ([K-MINE](https://k-mine.com/mining-software/mine-planning/)); DISPATCH clásico optimiza asignación camión-pala en tiempo real.
- **Subterráneo**: la unidad de control es la **labor/frente** (heading, stope, drawpoint). "En minas metálicas subterráneas, la lógica de despacho se desplaza hacia la coordinación cargador-camión en galerías confinadas de acarreo, en lugar de optimización de ruta de tajo abierto" — es coordinación espacial de tráfico en un grafo de túneles fijo y confinado, no un espacio abierto continuo ([síntesis de fuentes de fleet management comparadas](https://groundhogapps.com/open-pit-mining-fleet-management-system/)).

### 6.2 Dependencias de secuencia entre actividades

Evidencia académica y técnica confirma que el subterráneo tiene **dependencias de secuencia mucho más rígidas y de mayor impacto en seguridad** que el tajo abierto:

- **Ventilación**: puede representar hasta el 50% del consumo energético de una mina subterránea, y es "a menudo no considerada adecuadamente en etapas tempranas del ciclo de planeamiento" pese a ser crítica para operar con seguridad ([MDPI/ScienceDirect research on ventilation-constrained UG scheduling](https://papers.acg.uwa.edu.au/p/1710_11_Zhang/); [Colorado School of Mines – Underground Production Scheduling with Ventilation Constraints](https://repository.mines.edu/server/api/core/bitstreams/ad627e59-59bc-43a5-9156-bb500e6af03c/content)).
- **Reingreso post-voladura**: tras una voladura, se requiere un **período de despeje de gases** que obliga al personal a permanecer en superficie "dos o más horas", con procedimientos modernos usando monitores de gas electrónicos para probar todas las ubicaciones potencialmente afectadas antes de autorizar el reingreso — esto bloquea literalmente el siguiente paso del ciclo de minado hasta que se cumple la condición ([Ventsim – Practical prediction of blast fume clearance and workplace re-entry times](https://ventsim.com/wp-content/uploads/2019/04/Blast_fume_clearance_reentry_times.pdf); [Airfinders – Procedures for mitigating safety risks post-blast](https://www.airfinders.ca/wp-content/uploads/2021/07/Procedures-for-mitigating-safety-risks-associated-with-post-blast-re-entry-times.pdf)).
- **Sostenimiento**: la geotecnia gobierna cuándo un frente puede avanzar; "las tareas geotécnicas son gobernadas por el programa de minado y se actualizan tras cada reunión de planeamiento" — es decir, el sostenimiento no es una tarea paralela sino una **precondición dura** para liberar el frente al siguiente ciclo ([AMC Consultants – Establishing effective geotechnical processes for underground mines](https://www.amcconsultants.com/experience/establishing-effective-geotechnical-processes-for-underground-mines)).
- La investigación académica confirma explícitamente que "las herramientas de programación tradicionales aplicadas a minería subterránea fallan por falta de herramientas integradas para gestionar redes de desarrollo y dependencias complejas, así como poca precisión al contabilizar restricciones de ventilación e infraestructura" ([AusIMM Bulletin – Resource-driven scheduling](https://www.ausimm.com/bulletin/bulletin-articles/resource-driven-scheduling-rethinking-mine-scheduling-from-the-ground-down/)).

**Implicación directa**: un frente/labor no es "disponible" solo por estar en el plan mensual — pasa por una máquina de estados con precondiciones secuenciales (voladura → tiempo de espera de gas → medición de gas OK → sostenimiento verificado → liberado para siguiente actividad), y el motor de validación del plan de guardia debe modelar explícitamente estas dependencias, no solo choques de recursos.

### 6.3 Cómo los proveedores adaptan el producto (no "achican" el de tajo abierto)

Evidencia clara de que los líderes tienen **líneas de producto y arquitecturas separadas**, no una versión reducida:

- **Hexagon**: HxGN MineOperate se divide en variantes explícitamente distintas — **OP Pro/OP Foundation** (superficie, con guiado de máquina y GPS de alta precisión) vs. **UG Pro**, descrito como "el único FMS subterráneo modular para rastrear máquinas, mineros y flujos de trabajo a nivel de turno", **diseñado específicamente para minas sin redes de datos subterráneas** ([Hexagon – MineOperate UG Pro](https://hexagon.com/products/hxgn-mineoperate-ug-pro); [Mining Magazine – Hexagon introduces HxGN MineOperate UG Pro](https://www.miningmagazine.com/fleets/news/1340189/hexagon-introduces-hxgn-mineoperate-ug-pro)).
- **Deswik**: tiene una línea de capacidades dedicada — "Integrated planning solutions for underground metals" — separada de sus soluciones de superficie ([Deswik – Underground Metals Planning](https://www.deswik.com/capabilities/underground-metals/planning)).
- **RPMGlobal**: **Underground Metals Solution (UGMS)** con motor de programación propio para "stope prioritisation" y haulage subterráneo, distinto de XPAC (mine scheduling de superficie) y su Underground Coal Solution (UGCS) para carbón ([RPMGlobal – Software](https://rpmglobal.com/software/)).
- **GEOVIA**: Surpac soporta ambos, pero el módulo de programación de desarrollo/stopes subterráneos usa **"algoritmos heurísticos de programación basada en objetivos (target-based scheduling)"** distintos de la programación de superficie ([Paramina – GEOVIA MineSched](https://paramina.com/geovia-products/geovia-minesched/)).

---

## 7. Benchmark de soluciones de mercado

### 7.1 Posicionamiento de mercado (referencia independiente)

El **IDC MarketScape: Worldwide Mining Short Interval Control Mine Scheduling Software 2021–2022** — la única evaluación de analista independiente encontrada específicamente para esta categoría — nombra **Líderes**: Commit Works, Hexagon, RPMGlobal. **Major Players**: Datamine, Deswik, GroundHog, Maptek, Micromine, MineRP, Polymathian ([IDC](https://www.idc.com/getdoc.jsp?containerId=prAP48516921)).

### 7.2 Perfil por proveedor

**Commit Works (CiteOps, ex-Fewzion)**
- Cubre todo el ciclo: "desde planificación operativa semanal hasta diaria, de turno y planificación/ejecución en tiempo real". Módulo **"My Shift Resourcing"** gestiona personal "con habilidades y calificaciones verificadas".
- Conectividad: "diseñado para entornos remotos, subterráneos, deskless o con conectividad intermitente", con **creación de tareas offline** y **sync en background**. Incluye **dark mode** explícitamente pensado para "condiciones de poca luz, perfecto para entornos subterráneos o de turno nocturno".
- Diferenciador: mejoras de 25–50% de desempeño reportadas en <3 meses de implementación; clientes incluyen BHP, Rio Tinto, BMA, Peabody.
- Fuentes: [CiteOps](https://www.commit.works/citeops/); [My Shift Resourcing](https://www.commit.works/citeops/my-shift-resourcing/); [Release Notes 25.4 Mobile App](https://fewzion-library.commit.works/en/articles/10740118-release-notes-25-4-citeops-mobile-app); [Underground Hardrock](https://commit.works/underground-hardrock/); [Pathways to High Performance with SIC](https://commit.works/pathways-mine-short-term-interval-control/)

**Micromine Pitram**
- Desplegado en 60+ sitios, 14 países, 5 idiomas. Módulos: fleet/production monitoring, shift planning, materials management, inventory, **operator qualification management** (regla dura de bloqueo por no-calificación).
- Subterráneo: personas y equipos rastreados vía sistema de terceros que envía posiciones al servidor Pitram vía "Pitram connectors". **Pitram Connect Shift Planner** da acceso móvil a supervisores bajo tierra.
- Diferenciador: mensajería directa operador↔control room↔supervisor para SIC coordinado en campo.
- Fuentes: [Micromine Pitram](https://www.micromine.com/pitram/); [Mining Technology – Micromine Pitram](https://www.mining-technology.com/contractors/fleet-management-software/micromine-pitram/); [Zendesk – Operator Qualifications](https://micromine-pitram.zendesk.com/hc/en-us/articles/25807320997145-How-to-Set-Up-Operator-Qualifications); [MSTA Canada – Pitram Connect](https://mstacanada.ca/wp-content/uploads/2022/09/Micromine-Pitram-Connect.pdf)

**Deswik (ShiftPlanner / OPS / ORB)**
- **Deswik.ShiftPlanner**: app dedicada para supervisores subterráneos con validación de plan, asignación drag-and-drop, visibilidad de turnos previo/próximo.
- **Deswik.OPS**: conecta planeamiento con ejecución, "resource leveling engine" para maximizar utilización de equipos, combinación de scheduling manual y reglas automatizadas. Operator App extiende OPS al operador de campo.
- **Deswik ORB**: motor de optimización autónomo para block caving (Cadia Valley), único caso identificado de despacho subterráneo verdaderamente autónomo en la evidencia recopilada.
- Diferenciador: única solución con evidencia pública de "SIC altamente automatizado" en roca dura subterránea, aunque limitado al caso de caving.
- Fuentes: [Deswik OPS](https://www.deswik.com/products/ops); [Deswik Underground Metals Planning](https://www.deswik.com/capabilities/underground-metals/planning); [Deswik ORB product](https://www.deswik.com/products/orb); [Cadia case study](https://www.deswik.com/casestudies/world-s-first-highly-automated-short-interval-control-system-for-hard-rock-underground-mines)

**RPMGlobal (ShiftManager / XECUTE / XACT / UGMS)**
- **ShiftManager**: "planificación y ejecución de corto plazo en tiempo real, cada tarea planeada, medida y reportada", plan único integrado basado en web, actualización en tiempo real ante cambios intra-turno, app móvil nativa online/offline.
- **XECUTE**: entorno de planeamiento vivo multi-usuario con feeds de FMS y GPS de alta precisión; mueve >11M toneladas/día a nivel mundial.
- **XACT**: programación de corto plazo colaborativa entre departamentos.
- **UGMS (Underground Metals Solution)**: motor de programación propio para stope prioritisation subterráneo.
- Fuentes: [ShiftManager](https://rpmglobal.com/product/shiftmanager/); [ShiftManager – Put the Plan in your Hand](https://rpmglobal.com/shiftmanager-put-the-plan-in-your-hand/); [XECUTE](https://rpmglobal.com/product/xecute/); [XACT](https://rpmglobal.com/product/xact/)

**Hexagon HxGN MineOperate (UG Pro / OP Pro / OP Foundation)**
- **UG Pro**: "el único FMS subterráneo modular" para máquinas, mineros y flujos de turno; construido para minas **sin red de datos subterránea**, usando tabletas store-and-forward; rastrea estado de equipo continuamente (no en intervalos de 20 min).
- Analogía de posicionamiento: "control de tráfico aéreo" subterráneo — coordinación espacial en tiempo real para prevenir colisiones y optimizar la secuencia en cruces de galería.
- Caso citado: mina de oro sudamericana, +4.5 pts de productividad (35→39.5 t/h) en 4 meses, -6% tiempo perdido no contabilizado.
- Fuentes: [MineOperate UG Pro](https://hexagon.com/products/hxgn-mineoperate-ug-pro); [Air traffic control blog](https://blog.hexagonmining.com/3357-2/); [Mining Magazine – Hexagon introduces UG Pro](https://www.miningmagazine.com/fleets/news/1340189/hexagon-introduces-hxgn-mineoperate-ug-pro)

**Epiroc (6th Sense / Mobilaris Mining Intelligence / Underground Mine Manager)**
- 6th Sense es el paraguas de digitalización/automatización de Epiroc; incluye "Underground Manager 2.0" dentro de la familia Insight.
- **Mobilaris Mining Intelligence** (antes Mobilaris Onboard, adquirida/integrada tras alianza con Vale en Canadá): posicionamiento en tiempo real de alta precisión, "Shift Support" para planificar, monitorear y actuar durante el turno, visualización de tráfico desde la cabina del vehículo para seguridad y flujo. Tecnología agnóstica de OEM, +40 instalaciones globales, >10 años de trayectoria.
- Fuentes: [Epiroc – Mine scheduling](https://www.epiroc.com/en-tz/products/digital-solutions/mine-planning/mine-scheduling); [Mining.com – Epiroc introduces 6th Sense](https://www.mining.com/epiroc-introduces-6th-sense-for-smarter-mining/); [Epiroc – Mobilaris Mining Intelligence](https://www.epiroc.com/en-us/products/digital-solutions/safety-solutions/mobilaris-mining-intelligence); [Mining.com – Vale selects Mobilaris and Epiroc](https://www.mining.com/vale-selects-mobilaris-and-epiroc-for-digital-transformation-in-canada/)

**Newtrax (ahora parte de Sandvik)**
- No es un motor de asignación de guardia per se, sino la capa de **conectividad y seguridad** que otros sistemas consumen: Mining Data Platform (MDP), red mesh **MineHop®**, Worker Lifeline (alertas de emergencia por caída/impacto), Advanced Proximity Detection System con zonas dinámicas. Se conecta a "cualquier red disponible... leaky feeder, WiFi y LTE" y sostiene funcionalidad en zonas GPS-denied vía mesh + procesamiento local.
- Fuentes: [Sandvik/Newtrax MDP Worker Lifeline](https://www.mining.sandvik/en/digital-solutions/operations-and-connected-fleet/mixed-fleet-telemetry/newtrax-mdp---worker-lifeline-and-proximity-detection/); [Newtrax ADPS](https://www.mining.sandvik/en/digital-solutions/safety-and-environment/proximity-detection-and-collision-avoidance/advanced-proximity-detection-system/)

**GEOVIA (Surpac / MineSched / InSite)**
- Surpac soporta tajo abierto y subterráneo; **MineSched** provee programación de avance de desarrollo y producción de stopes vía algoritmos heurísticos de target-based scheduling específicos para subterráneo. **InSite** da visibilidad de producción in-shift y reconciliación de materiales.
- Fuentes: [GEOVIA Surpac](https://www.3ds.com/products/geovia/surpac); [Paramina – GEOVIA MineSched](https://paramina.com/geovia-products/geovia-minesched/)

**Otros proveedores relevantes identificados (no listados por el cliente, evidencia pública fuerte)**
- **Maptek Evolution (Epoch)**: módulo de scheduling de corto plazo/táctico que permite "gestionar múltiples actividades, tareas y equipos, aplicar diferentes tipos de dependencias para definir secuencias de minado", con evaluación rápida del plan ante cambios de recursos del día ([Maptek Evolution](https://www.maptek.com/products/evolution/)).
- **Sandvik OptiMine (Scheduler and Task Management)**: módulos de Location Tracking 3D, Scheduler con despacho automatizado a operadores subterráneos, visualizador 3D — diseñado específicamente (no adaptado) para subterráneo.
- **MST Global HELIX Dispatch**: SIC con digital twin geoespacial en tiempo real ("HELIX 3D Connect"), asignación de descarga automática de material para evitar mezcla, gestión de seguridad embebida ([MST Global – HELIX Dispatch](https://mstglobal.com/navigating-the-future/)).
- **ORDO**: especializado en shift planning subterráneo tipo "magnet board" digital con foco fuerte en UX offline para supervisor bajo tierra ([ORDO](https://www.ordodeploy.com/)).

---

## 8. Patrones de UX y operación en campo con conectividad intermitente

*(Foco en proceso/experiencia, no en arquitectura técnica de sincronización — ya cubierto por otra investigación.)*

### 8.1 Qué puede hacer el supervisor sin conexión

Consolidando la evidencia de producto (Commit Works, ORDO, RPMGlobal, Hexagon UG Pro):
- **Ver el plan vigente** (última versión sincronizada).
- **Registrar avance/progreso de tareas** y crear nuevas tareas — Commit Works confirma explícitamente "offline task creation is supported".
- **Replanificar/reasignar** localmente vía drag-and-drop (ORDO), incluyendo preparar el plan del siguiente turno mientras aún está bajo tierra.
- **Ver contexto histórico cacheado** del turno previo (Deswik.ShiftPlanner).

### 8.2 Qué debe esperar (no se puede hacer offline)

- Notificar a **otros departamentos** de un impacto cruzado (RPMGlobal ShiftManager: "notify other departments... these tasks displayed in the nominated processes to ensure awareness" — esto requiere que el dato llegue al servidor central).
- Acciones que dependen de **datos de otros actores en tiempo real** (ej. confirmación de disponibilidad de un equipo que otro supervisor está usando).
- **Cierre formal** que dispare el flujo de aprobación (ej. PETAR con firma cruzada Supervisor+Jefe de Área).

### 8.3 Cómo se comunica el estado de sincronización — principios de diseño encontrados

De las guías de UX offline-first (aplicables al patrón, no a la arquitectura):
- **No hacer que el indicador de "sin conexión" parezca un error**: "avoid making the connectivity status bar look like an error state" — usar íconos/colores neutros, no rojo de alarma, para el estado normal "trabajando offline" ([web.dev – Offline UX design guidelines](https://web.dev/articles/offline-ux-design-guidelines)).
- **Confirmar la sincronización visualmente**: "show sync confirmation by changing the icon to a checkmark and changing the color and text in the status bar" cuando el dato efectivamente llega al servidor — el supervisor necesita saber positivamente que su reasignación "ya se ve" en el sistema central, no asumirlo.
- **Estados discretos y nombrados, no un simple binario conectado/desconectado**: el patrón de Dynamics 365 Field Service (referencia general de la industria de field service) usa badges explícitos: *Connected, Not connected, Syncing data, Pending changes from device, Error, Warning* — cada uno con tratamiento visual distinto ([Microsoft Learn – Offline sync status](https://learn.microsoft.com/en-us/dynamics365/release-plan/2023wave1/service/dynamics365-field-service/offline-sync-status-dynamics-365-field-service-mobile)).
- **No detallar reintentos técnicos al usuario**: "avoid going into detail about when sync is going to retry connecting to the internet" — el supervisor de turno no necesita ni quiere saber la mecánica de reintento, solo el estado actual y la confianza de que eventualmente sincronizará.
- **Feedback inmediato + cola visible**: "immediate UI feedback when users submit data, marking records as 'pending sync' in a local queue" — la acción se siente completa de inmediato para el usuario aunque el dato aún no viajó.

### 8.4 Adaptaciones específicas al contexto subterráneo (más allá de UX genérica offline)

- **Dark mode como decisión de UX de seguridad/ergonomía, no solo estética**: Commit Works lo justifica explícitamente por "reducir fatiga visual en condiciones de poca luz, perfecto para entornos subterráneos o turno nocturno" — un patrón que las apps de campo de superficie no necesitan priorizar de la misma forma.
- **Tableta como form factor dominante, no smartphone**: consistente en Hexagon UG Pro ("tableta industrial común"), Deswik (Operator App en tableta), ORDO (touchscreen tableta) — refleja el uso con guantes, en cabinas de equipo o de pie en galería, no en bolsillo.
- **Comunicación directa operador↔supervisor como capa separada de la sincronización de datos**: Micromine Pitram distingue explícitamente "direct-to-operator messaging" de la sincronización del plan — es decir, el canal de "avísame algo urgente ahora" no depende de que el plan completo sincronice; son dos flujos de datos con distinta prioridad y tamaño de payload.

---

## Implicaciones de diseño

*Traducción de los hallazgos a reglas de negocio y proceso — sin arquitectura técnica.*

1. **Modelar el "reparto de guardia" como evento de dos fases, no como una sola pantalla de asignación.** La evidencia de campo (Orcopampa) y el patrón repetido en varios proveedores (RPMGlobal, Deswik) muestran una fase de coordinación entre supervisores/áreas de soporte (seguridad, mantenimiento, geología, ventilación exponen primero) seguida de una fase de reparto operativo con la cuadrilla. El producto debería soportar un flujo de "reunión de reparto" con orden de exposición configurable por área, no solo una lista de asignaciones.

2. **Separar "plan propuesto" de "plan ejecutable" con un gate explícito de validación de recursos.** Dado que la industria reporta que solo 30–60% de las OT resultan ejecutables sin demora cuando se planifica sin conocer el estado real de recursos, el motor de plan de guardia debe forzar una verificación explícita (frente liberado / dotación disponible / equipo calificado disponible) **antes** de que el plan se considere "confirmado", con un estado intermedio tipo "propuesto — pendiente de validación" visible para todos los roles del reparto.

3. **Tratar la liberación de un frente como máquina de estados con precondiciones de secuencia, no como disponibilidad binaria.** El frente pasa por estados encadenados (voladura → tiempo de espera de gas → medición OK → sostenimiento verificado → liberado). El motor de asignación debe bloquear —o al menos advertir fuertemente— la asignación de cuadrilla a un frente que no ha cumplido su precondición de secuencia, replicando el patrón de bloqueo duro que usa Micromine Pitram para calificaciones de operador (no permitir la asignación, no solo advertir).

4. **La regla de calificación operador–equipo debe ser un bloqueo duro con override auditado, siguiendo el patrón de mercado (Pitram).** Permitir asignar a alguien sin certificación vigente solo mediante una anulación explícita que dispara notificación y queda registrada — nunca una asignación silenciosa.

5. **No apuntar a un motor de optimización autónomo de asignación en la primera versión, salvo que el cliente tenga un contexto de alto volumen/repetitivo (ej. block caving).** La evidencia de mercado muestra que el patrón dominante en subterráneo convencional (vetas/estructuras, desarrollo+producción mixta) es "magnet board" digital con reglas duras + recomendación, con decisión final humana del supervisor. La automatización total (tipo Deswik ORB) solo se ha justificado en operaciones de caving con miles de ciclos repetitivos por día — no es el patrón esperable para ~80 equipos en frentes heterogéneos.

6. **El PETAR/IPERC debe generarse por turno y por responsable, nunca reutilizarse.** Regla de negocio explícita del cliente peruano (Buenaventura): un cambio de responsable o de lugar de trabajo obliga a un PETAR nuevo para ese turno específico. El sistema debe invalidar automáticamente un PETAR si cambia cualquiera de esas dos variables, en vez de dejarlo "abierto" indefinidamente.

7. **El cierre de guardia debe pre-cargar campos del plan del turno siguiente, no solo archivarse como reporte.** El patrón ganador (ORDO, Orcopampa) es que las restricciones pendientes, incidentes abiertos y equipos no disponibles del cierre aparezcan automáticamente como datos editables en la pantalla de planificación del turno entrante — el traspaso debe ser estructural, no un documento adicional que alguien tiene que ir a leer.

8. **Diseñar explícitamente el proceso de "impresión/distribución física de OT y permisos por zona antes del ingreso" con el cliente, no asumir un patrón de mercado — esta es una brecha de evidencia pública confirmada.** Ningún proveedor documenta públicamente este flujo con detalle; probablemente porque hoy se resuelve de forma manual/artesanal en la mayoría de operaciones. Es una oportunidad real de diferenciación, pero requiere validación de proceso directa con el cliente (¿quién imprime? ¿en qué punto del reparto? ¿cuántas copias? ¿qué pasa si se reasigna después de imprimir?).

9. **Definir explícitamente el umbral de autoridad para reasignación en caliente y su registro de auditoría — otra brecha de evidencia de mercado.** No existe un estándar público claro de "quién puede reasignar sin escalar" en subterráneo. Se recomienda definir con el cliente niveles de decisión (ej. Jefe de Guardia decide sin escalar hasta X HH o X nivel de riesgo; por encima requiere aprobación de Superintendente), y que cada reasignación quede registrada con responsable, motivo, hora y plan original vs. plan modificado — replicando el patrón de "documentar y justificar variancias" que ya hacen los dispatchers de mercado, pero formalizándolo como campo obligatorio, no como nota libre.

10. **Diseñar el indicador de sincronización con estados nombrados y sin apariencia de error para el estado offline normal.** Siguiendo el patrón de Field Service estándar (Connected / Not connected / Syncing / Pending / Error / Warning) y evitando alarmar al supervisor cuando simplemente está trabajando sin señal — que es su condición normal de trabajo, no una falla.

11. **Priorizar tableta como form factor principal de campo, con modo oscuro por defecto en turno noche/interior mina**, siguiendo el patrón consistente de Hexagon, Deswik y Commit Works — decisión de ergonomía y seguridad visual, no solo de marca.

12. **Separar el canal de "alerta urgente operador↔supervisor" del canal de "sincronización del plan completo".** El patrón de Micromine Pitram de mensajería directa como capa distinta sugiere que la plataforma debería priorizar el envío de mensajes cortos/alertas por sobre la sincronización de datos voluminosos cuando la conectividad es limitada — la reasignación urgente debe llegar antes que el resto del plan actualizado.

---

## Notas sobre brechas de evidencia

- El texto completo de la **Guía GMG "Implementing Short Interval Control in Underground Mining Operations"** no pudo extraerse (el PDF no fue legible por las herramientas de fetch disponibles), pero su contenido temático se confirmó vía coberturas periodísticas ([Mining Magazine](https://www.miningmagazine.com/underground/news/1364771/planning-gmgs-sic-guide), [International Mining](https://im-mining.com/2019/06/06/gmg-publishes-new-short-interval-control-guideline/), [AMSJ](https://www.amsj.com.au/short-interval-control-guidelines-published/)): confirma un modelo conceptual con 6 niveles de madurez de datos, desde reporte manual a fin de turno hasta mitigación de desvíos casi en tiempo real. Se recomienda que el equipo de diseño intente obtener el PDF directamente (URL: `gmggroup.org/wp-content/uploads/2024/07/20181015_SIC-GMG-UM-v01-r01.pdf` o su alternativa `.../2024/08/Guideline-for-Implementing-Short-Interval-Control.pdf`) para extracción manual, ya que es probablemente la fuente primaria más completa sobre el punto 1 y 6.
- El proceso exacto de "impresión masiva de OT por zona" y el "quién autoriza reasignación en caliente / cómo se audita" quedaron como brechas confirmadas de evidencia pública (ver implicaciones #8 y #9) — requieren descubrimiento directo con el cliente, no benchmarking externo.

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
