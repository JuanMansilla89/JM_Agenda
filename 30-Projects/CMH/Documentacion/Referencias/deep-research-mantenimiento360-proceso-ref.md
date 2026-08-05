---
fecha: 2026-08-04
tipo: referencia
subtipo: deep-research
proyecto: CMH
fuente: "Deep Research — ejecución del prompt 2 (Mantenimiento 360) de 2026-08-03-prompts-deep-research-nexo360-mantenimiento360.md"
url:
tags: [cmh, deep-research, mantenimiento360, mineria-subterranea, disponibilidad-flota]
---

# Referencia — Deep Research: Proceso de Gestión de Disponibilidad y Mantenimiento de Flota Minera Subterránea (Mantenimiento 360)

**Proyecto:** CMH
**Fuente:** Investigación de mercado y proceso operacional, ejecutada a partir del Prompt 2 (`2026-08-03-prompts-deep-research-nexo360-mantenimiento360.md`)
**Tipo:** deep research / benchmark de mercado y proceso de negocio

> Nota: existe otra investigación equivalente sobre el mismo tema, obtenida por una fuente distinta (Perplexity), en `Design Process/disponibilidad-flota-minera.md` y su duplicado de nombre largo. Este documento es complementario — parte de fuentes y ángulos distintos (más foco en TUM/PA-MA, benchmark SAP PM/MM detallado, ISO 55000/SAE JA1011 aplicabilidad a 80 equipos) — no se fusionaron para no alterar ninguno de los dos originales.

**Alcance:** Diseño del módulo de mantenimiento/disponibilidad de flota (fuente de verdad de disponibilidad) para plataforma de digitalización de una unidad minera subterránea aurífera en Perú (~80 equipos pesados propios/contratistas + ~20 vehículos de apoyo), con integración obligatoria SAP PM/MM y consumo de disponibilidad por el motor de asignación de guardias.

**Nota metodológica del propio research:** la evidencia combina tres capas de calidad distinta, marcadas explícitamente en cada sección: (a) estándares formales (ISO, SAE) — alta autoridad, bajo detalle operativo; (b) documentación de producto de proveedores (Komatsu/Modular, Wenco, RPMGlobal, Prometheus, SAP, GE Vernova) — alta relevancia, sesgo comercial; (c) contenido de agregadores/blogs de CMMS (Oxmaint, Tractian, FleetRabbit, Cryotos, etc.) — útil para triangular prácticas de la industria pero de autoría no verificable, usado solo cuando coincide entre múltiples fuentes independientes.

---

## 1. Definiciones y cálculo estándar de disponibilidad, utilización, MTBS, MTTR y su relación con OEE

### 1.1 Definiciones operacionales

En minería (a diferencia de manufactura) la jerga estándar — originada en la industria de equipos Caterpillar/Komatsu y adoptada ampliamente en Chile/Perú — distingue varios niveles de "disponibilidad" que **no son sinónimos**:

| Métrica | Definición operacional | Fórmula típica |
|---|---|---|
| **Disponibilidad Física / Physical Availability (PA)** | % del tiempo calendario (horas nominales) en que el equipo NO está detenido por mantenimiento (programado o no programado). Es el techo máximo de horas que Operaciones podría usar el equipo. | PA = (Horas Nominales − Horas Mantenimiento) / Horas Nominales |
| **Disponibilidad Mecánica / Mechanical Availability (MA)** | % del tiempo en que el equipo está mecánica y eléctricamente listo para operar, sobre el tiempo controlable (excluye a veces demoras no atribuibles a mantenimiento). Métrica "pura" de la función mantenimiento. | MA = Horas Operativas Disponibles / (Horas Operativas Disponibles + Horas Detenido por Mantenimiento) |
| **Utilización / Use of Availability (UA)** | % del tiempo disponible (PA) que efectivamente se usó en producción — descuenta standby, espera de operador, cambio de turno, refrigerio, espera de equipo auxiliar. | UA = Horas Trabajadas / Horas Disponibles |
| **Rendimiento Efectivo / Effective Utilization (EU)** | UA aplicada sobre el total de horas nominales — combina PA × UA. | EU = PA × UA |
| **MTBS — Mean Time Between Shutdowns** | Tiempo operativo promedio entre **paradas** (programadas + no programadas), no necesariamente "fallas" en sentido estricto — de ahí que en minería se prefiera "Shutdowns/Stoppages" sobre "Failures" (MTBF es más propio de manufactura con definición estricta de falla funcional). | MTBS = Horas Operadas / N° de Paradas |
| **MTTR — Mean Time To Repair** | Tiempo activo de reparación promedio por evento, incluyendo detección, diagnóstico, espera de repuesto, tiempo administrativo y prueba de reingreso — no solo "llave en mano". | MTTR = Horas Totales de Reparación / N° de Eventos |
| **Índice de Disponibilidad** | Fórmula clásica de confiabilidad aplicada a flota. | Disponibilidad = MTBS / (MTBS + MTTR) |

Fuente formal de referencia de la industria: el documento "2019 Caterpillar Mining Equipment Management Metrics" es el estándar de facto citado por consultoras y CMMS especializados en minería para las definiciones de PA/MA/UA — [2019 Caterpillar Mining Equipment Management Metrics Document V4.pdf](https://www.slideshare.net/slideshow/2019-caterpillar-mining-equipment-management-metrics-document-v4pdf/251857185). Comparar contra formulaciones genéricas de MTBF/MTTR en [ReliaMag – How to Calculate MTBF and MTTR](https://reliamag.com/guides/how-to-calculate-mtbf-mttr/) y [TeroTAM – Correlate MTTR, MTBF and Availability](https://terotam.com/blog/correlate-mttr-mtbf-and-availability-for-better-decision-making).

En terminología hispanoamericana (Chile/Perú, la que usará tu usuario final) los mismos conceptos se nombran **DF (Disponibilidad Física)**, **DM (Disponibilidad Mecánica)**, **UEF/Utilización Efectiva de Flota**, y aparecen consistentemente en estudios académicos peruanos y chilenos: la tesis de la Universidad Nacional San Cristóbal de Huamanga sobre Cerro Lindo usa exactamente esta terminología — [Evaluación de KPI's: Disponibilidad mecánica, utilización y productividad — U.M. Cerro Lindo](https://repositorio.unsch.edu.pe/items/b81eb737-0368-4b38-8b35-455a46ff338d) — y el benchmark de productividad de la gran minería del cobre chilena — [Estudio de productividad en la gran minería del cobre (CNEP/Matrix Consulting)](https://www.cnep.cl/wp-content/uploads/2018/06/Nota-t%C3%A9cnica-3.-Estudio-de-productividad-en-la-gran-miner%C3%ADa-del-cobre-%E2%80%93-Benchmark-de-indicadores-de-productividad-MatrixConsulting.pdf). También ver [MineAcademy — Disponibilidad vs Utilización](https://mineacademy.mx/disponibilidad-vs-utilizacion/) y [RedCapacitación Chile — Guía de Planificación de Mantenimiento de Maquinaria Minera](https://redcapacitacion.cl/articulo/guia-de-planificacion-de-mantenimiento-de-maquinaria-minera-gestion-de-activos-y-disponibilidad/7312).

### 1.2 Los cinco estados que pediste (operativo, taller, standby, panne, preventivo) — modelo de estado consolidado

Cruzando las fuentes anteriores con la documentación operacional de mina ("Disponibilidad Equipos Operaciones Mina" — [scribd.com/document/720176797](https://www.scribd.com/document/720176797/Disponibilidad-equipos-operaciones-mina-2023)), el modelo de estados típico de la industria se resuelve así (mapeado a tus 5 estados):

```
HORAS NOMINALES (24h del período)
│
├── HORAS DE MANTENIMIENTO (fuera de PA)
│   ├── PANNE (correctivo no programado / breakdown)
│   └── PREVENTIVO (mantenimiento programado por horómetro/calendario)
│
└── HORAS DISPONIBLES (= PA, dentro de PA)
    ├── OPERATIVO (trabajando: produciendo, trasladando, etc.)
    └── STANDBY / RESERVA (disponible pero no usado: falta de operador,
        falta de equipo auxiliar, no requerido por programa,
        espera en cambio de turno, refrigerio)
```

**"Taller"** en la práctica de mina subterránea es una ubicación física/estado compuesto, no un estado único — un equipo "en taller" puede estar en **PANNE** (correctivo) o en **PREVENTIVO** (programado), y ambos restan de PA. La distinción PANNE vs PREVENTIVO es la que separa **MA** (qué tan seguido y cuánto duran las paradas) de la planificación de capacidad de taller. Esta jerarquía (Nominal → Disponible/No Disponible → Operativo/Standby dentro de Disponible; No Disponible → Programado/No Programado) es el árbol estándar usado en la industria — confirmado también en el glosario de RedCapacitación y en el documento scribd citado.

### 1.3 OEE en minería vs manufactura

La diferencia crítica: en manufactura, OEE = Disponibilidad × Rendimiento × Calidad, donde "Calidad" mide producto defectuoso. En minería no existe "producto defectuoso" en ese sentido — la literatura académica (Elevli & Elevli, ampliamente citado) redefine OEE minero como **Disponibilidad × Utilización × Eficiencia de Rendimiento**, y propone benchmarks distintos: Disponibilidad >90%, Rendimiento >90%, Calidad >95%, con un OEE objetivo >77% para palas — notablemente distinto del "85% world-class" de manufactura discreta. Ver [ResearchGate — Performance Measurement of Mining Equipments by Utilizing OEE](https://www.researchgate.net/publication/47517712_Performance_Measurement_of_Mining_Equipments_by_Utilizing_OEE), [Groundhog Apps — Understanding OEE](https://groundhogapps.com/understanding-overall-equipment-effectiveness/), [LinkedIn — Is OEE in Mining different to Manufacturing OEE? (Chris Curtis)](https://www.linkedin.com/pulse/overall-equipment-effectiveness-oee-mining-different-chris-curtis), y el estudio reciente sobre incertidumbre estocástica en OEE de flota — [ScienceDirect — Quantifying operational uncertainties in mining machinery fleet productivity using stochastic OEE](https://www.sciencedirect.com/science/article/abs/pii/S0301420726000462).

Otra diferencia estructural relevante para tu diseño: **en minería la utilización de un equipo depende de la utilización de otros** (ej. un cargador depende de que haya camiones disponibles) — hay interdependencia de flota que no existe en una línea de manufactura, lo cual es exactamente el problema que resuelve (o rompe) el acoplamiento con el motor de asignación de guardias (ver punto 9).

---

## 2. Proceso de transición de estado de un equipo en tiempo real

### 2.1 Proceso tallado

```
ACTOR: Operador de equipo (en cabina) o Mecánico (en taller) o Despacho/Control
   │
   ├─[A] DETECCIÓN DEL EVENTO
   │     • Operador detecta falla/anomalía en pre-uso o durante turno (checklist,
   │       alarma de tablero, ruido anómalo)
   │     • Mecánico completa una intervención y quiere reingresar el equipo
   │     • Sistema de telemetría/SCADA detecta condición fuera de rango (si existe)
   │
   ├─[B] REPORTE INICIAL (actor: Operador u operador de Despacho)
   │     • Operador reporta por radio/app a Despacho: "equipo X queda parado"
   │     • Despacho anota código de causa preliminar (mecánica, eléctrica,
   │       operacional, espera)
   │     DECISIÓN: ¿Es una parada que requiere taller?
   │        → SÍ: se genera Aviso/Notificación de mantenimiento (ver punto 3)
   │        → NO (ej. espera de turno): equipo pasa a STANDBY, no a PANNE
   │
   ├─[C] CAMBIO DE ESTADO EN EL SISTEMA (actor: Despacho o el propio sistema)
   │     • Despacho cambia el estado del equipo de OPERATIVO → PANNE/TALLER
   │       con timestamp, operador, ubicación al momento de la baja
   │     • Este es el patrón documentado en la API de Modular Mining DISPATCH:
   │       "the API enables the sharing of key information as equipment location
   │       at the time the unit was put into 'down' status, and the name of the
   │       operator who put the unit down"
   │
   ├─[D] VALIDACIÓN / CONFIRMACIÓN (actor: Supervisor de mantenimiento o
   │     Jefe de guardia — punto de control de calidad de dato)
   │     • En operaciones maduras, el cambio de estado del operador es
   │       "provisional" hasta que Mantenimiento confirma diagnóstico y
   │       categoriza correctamente (evita que un simple ajuste quede
   │       registrado como falla mayor, o viceversa)
   │     DECISIÓN: ¿El diagnóstico requiere reclasificación de causa/duración
   │     estimada? → Ajusta el registro sin necesariamente revertir el estado
   │
   ├─[E] REPARACIÓN / EJECUCIÓN
   │     • Mecánico ejecuta trabajo, consume tiempo (alimenta MTTR)
   │
   ├─[F] LIBERACIÓN / REINGRESO A OPERACIÓN (actor: Mecánico + Supervisor
   │     de taller, firma de conformidad)
   │     • Check final de salida de taller (checklist de liberación)
   │     • Firma de supervisor de mantenimiento certificando reingreso seguro
   │     • Este patrón de firma/checklist de reingreso está documentado en
   │       procedimientos operativos mineros peruanos/chilenos (IPERC,
   │       checklist digital, cambio de turno)
   │     DECISIÓN: ¿Pasa prueba de ruta/funcional?
   │        → SÍ: estado → STANDBY (disponible, no operativo aún)
   │        → NO: vuelve a taller, no se libera
   │
   └─[G] REASIGNACIÓN OPERACIONAL (actor: Despacho / motor de asignación)
         • Solo cuando el equipo está en STANDBY liberado, Despacho lo asigna
           a una tarea → pasa a OPERATIVO
```

### 2.2 Latencia y validación antes de impactar la disponibilidad "oficial"

Este es el punto más crítico para el diseño porque describe exactamente el riesgo que el módulo debe mitigar. La evidencia de la industria muestra dos patrones **opuestos**, y ambos ocurren en la práctica real:

1. **Patrón "confianza ciega en el reporte manual" (frágil):** el tablero de despacho sigue mostrando el equipo como activo porque nadie actualizó el sistema — "the dispatch board can still show equipment as active because nobody updated the system, leading to situations where dispatch allocates loads to a truck that's been broken down for hours, with operators only discovering this when calling dispatch directly" — este es el modo de falla documentado en [Groundhog Apps — Dispatch Operator Handbook](https://groundhogapps.com/dispatch-operator-handbook/). Es exactamente el riesgo que amenaza al motor de asignación de guardias si el módulo no impone control de frescura del dato (ver punto 9).

2. **Patrón "umbral automático + alerta" (más maduro):** "equipment sitting beyond a defined time threshold is flagged automatically, and the dispatch platform can suggest or trigger a new task immediately" — la disponibilidad no depende únicamente del reporte humano, sino de un umbral de inactividad no explicada. Ver también [Komatsu — DISPATCH Fleet Management case study](https://www.komatsu.com/en-us/case-studies/dispatch-fleet-management-system-helps-mine-optimize-its-haulage).

**Comparación de enfoques:**

| Enfoque | Quién reporta | Latencia típica | Validación antes de "oficializar" |
|---|---|---|---|
| Manual puro (radio + digitación en despacho) | Operador → Despacho | Minutos a horas (dependiente de disciplina operacional) | Ninguna automática; depende de que el despachador registre bien |
| Dispatch systems (Modular DISPATCH, Wenco) | Operador desde cabina (botón/pantalla en equipo) → sistema | Segundos a minutos (evento push) | Cambio de estado inmediato, pero **atribuible** (queda registrado quién y dónde) — la validación ocurre después, vía revisión de Mantenimiento |
| Telemetría/SCADA automática | Sensor/controlador de equipo | Segundos | Alta confianza en el hecho "se detuvo", baja confianza en la **causa** — requiere codificación posterior por Mantenimiento |

**Conclusión de proceso:** en toda la evidencia revisada, el patrón consistente es: (1) el cambio de estado **debe** poder ocurrir de inmediato para no bloquear producción/seguridad, pero (2) la **causa/categoría** del cambio de estado (qué tipo de parada, si es imputable a mantenimiento o a operación) se confirma después, sin bloquear el estado en sí. Esto es clave: separar "¿está disponible o no?" (debe ser instantáneo) de "¿por qué no está disponible y cuánto va a durar?" (puede refinarse después).

Fuentes: [Komatsu DISPATCH case study](https://www.komatsu.com/en-us/case-studies/dispatch-fleet-management-system-helps-mine-optimize-its-haulage), [Wenco — Asset Management](https://www.wencomine.com/our-solutions/asset-management), [Groundhog Apps — Dispatch Operator Handbook](https://groundhogapps.com/dispatch-operator-handbook/).

---

## 3. Planificación de mantenimiento preventivo/correctivo y priorización del backlog

### 3.1 Programación preventiva por horómetro/calendario en flota subterránea

El patrón estándar identificado (múltiples fuentes coinciden):

- Los disparadores de PM se configuran por **horas de operación**, no por fecha calendario, porque la utilización de un sector varía semana a semana — "PM triggers should be set by operating hours rather than calendar dates" ([Oxmaint — Underground Mining Equipment Maintenance Guide](https://oxmaint.com/blog/post/underground-mining-equipment-maintenance-guide)).
- Los sistemas maduros usan disparadores **"lo que ocurra primero"** (either/or): horómetro **O** calendario **O** toneladas/kilómetros — de modo que un equipo de bajo uso igual reciba mantenimiento preventivo por antigüedad del último service.
- Cadencia típica documentada para un equipo tipo jumbo/rozadora subterránea: inspecciones cada turno (picas, aspersión), inspecciones semanales (caja de cambios, fajas), service completo cada 250–500 horas.
- El cumplimiento (compliance) de PM basado en horómetro/telemetría automática se reporta >95%, contra 60-70% en programación manual/calendario — cifra citada por [Oxmaint — Underground Mining Equipment Maintenance Guide](https://oxmaint.com/blog/post/underground-mining-equipment-maintenance-guide), [Cryotos — 24/7 Mining Equipment Maintenance Plan](https://www.cryotos.com/blog/mining-maintenance-schedule-24-7-operations). (Nota: cifra de fuente comercial no verificable independientemente, tratar como orden de magnitud, no como dato duro.)

### 3.2 Ciclo de vida de la solicitud/orden de trabajo (proceso tallado, de principio a fin)

```
ACTOR: Origen de la necesidad (operador / sensor / disparador PM / inspección)
   │
   ├─[1] SOLICITUD / AVISO (Notificación en términos SAP PM)
   │     • Se registra la necesidad: quién, qué equipo, síntoma, ubicación
   │     • Estado inicial: "no revisado / no priorizado"
   │
   ├─[2] REVISIÓN Y APROBACIÓN (actor: Planificador/Supervisor de mantenimiento)
   │     • Valida que la solicitud es legítima y necesaria
   │     • Asigna prioridad (ver 3.3) y clasifica tipo: correctivo vs preventivo
   │     DECISIÓN: ¿Es una condición de seguridad inminente?
   │        → SÍ: bypass de cola normal, ejecución inmediata
   │        → NO: entra al backlog priorizado
   │
   ├─[3] PLANIFICACIÓN (actor: Planificador)
   │     • Adjunta repuestos requeridos (BOM/lista de materiales), permisos,
   │       instrucciones técnicas, tiempo estimado
   │     DECISIÓN: ¿Repuestos disponibles en almacén?
   │        → NO: bloquea programación hasta resolver (ver punto 4)
   │
   ├─[4] PROGRAMACIÓN (actor: Planificador + Jefe de taller)
   │     • Asigna ventana de taller, técnico(s), bahía/posición
   │     • Se convierte formalmente en Orden de Trabajo (Work Order) desde
   │       la Solicitud/Aviso — distinción explícita: "A work request is the
   │       initial submission... it has not yet been reviewed, prioritized,
   │       or scheduled" vs. "A work order is the approved, assigned, and
   │       scheduled maintenance task"
   │
   ├─[5] EJECUCIÓN (actor: Técnico/Mecánico)
   │     • Registra hallazgos, horas, repuestos consumidos
   │
   └─[6] CIERRE (actor: Técnico + Supervisor)
         • Confirmación técnica, cierre administrativo, liquidación de costos
         • Alimenta historial del equipo (para MTBS/MTTR y análisis de causa raíz)
```

Fuente consolidada del ciclo de vida genérico: [Tractian — Work Order glossary](https://tractian.com/en/glossary/work-order), [Oxmaint — Work Order Management Best Practices](https://oxmaint.com/blog/post/blog-post-work-order-management-best-practices).

### 3.3 Priorización del backlog cuando hay más solicitudes que capacidad de taller

Criterios estándar identificados de forma consistente en toda la evidencia (industria general de mantenimiento + minería específicamente):

1. **Impacto en seguridad** — máxima prioridad, puede tener autoridad de "override" sobre la cola normal (un riesgo de lesión inminente supera cualquier otro criterio).
2. **Criticidad del equipo/activo** — clasificación previa (ver ABC, sección 3.4) que determina el "peso base" de cualquier solicitud sobre ese equipo.
3. **Impacto en producción** — cuánta producción se pierde por cada hora que el equipo permanece detenido; en minería subterránea esto se agrava si el equipo es un cuello de botella de ciclo (ej. único jumbo disponible en un frente).
4. **Antigüedad de la solicitud** — mecanismo de escalamiento: una solicitud de baja prioridad que envejece mucho debe forzar revisión, para que no quede indefinidamente postergada.
5. **Cumplimiento normativo/ambiental** — plazos regulatorios fijos.

Un ejemplo de riesgo documentado por postergación de backlog en un activo crítico: "si la orden de inspección de un molino SAG se acumula durante semanas en el backlog, podría pasar inadvertida una grieta crítica en su revestimiento, aumentando el riesgo de una detención no planificada de millones de dólares" — [RedCapacitación Chile — Qué es un backlog en mantenimiento de maquinaria pesada](https://redcapacitacion.cl/articulo/que-es-un-backlog-en-mantenimiento-de-maquinaria-pesada-y-como-gestionarlo/7470). Ver también [Concel Group — Gestión de continuidad operacional ante fallas críticas](https://concelgroup.com/gestion-de-continuidad-operacional-en-mineria-ante-fallas-criticas-planes-tecnicos-para-asegurar-la-produccion/) y modelos de scoring 1-5 por factor con "override" automático en score máximo de seguridad — [Oxmaint — Work Order Prioritization Best Practices](https://oxmaint.com/blog/post/work-order-prioritization-best-practices), [PropelApps — Maintenance Backlog: 5 Key Ways to Prioritize](https://www.propelapps.com/blog/maintenance-backlog).

### 3.4 Clasificación de criticidad ABC (input obligatorio para priorizar)

Método estándar de la industria (no exclusivo de minería, pero universalmente adoptado como precondición de todo lo anterior):

- **A (crítico):** falla detiene producción o representa riesgo de seguridad — requiere estrategia preventiva/predictiva.
- **B (medio):** interrumpe parcialmente, incrementa costos 10-20%.
- **C (bajo):** sin impacto significativo — puede gestionarse de forma reactiva/correctiva sin mayor penalización.

En SAP PM esto existe nativamente como el **indicador ABC** en el maestro de equipo, configurable en SPRO, que se copia automáticamente a notificaciones y órdenes — [Vaibhaverp — Equipment Master in SAP PM](https://vaibhaverp.com/equipment-master-in-sap-pm/), [Tutorialspoint — SAP PM Equipment Master Record](https://www.tutorialspoint.com/sap_pm/sap_pm_equipment_master_record.htm). Ver también [Accendo Reliability — Equipment Criticality ABC](https://accendoreliability.com/doing-equipment-criticality-is-as-simple-as-abc-2/) y [Tractian — Matrix of Criticality](https://tractian.com/en/blog/learn-all-about-the-matrix-of-criticality).

---

## 4. Gestión de backlog de repuestos y relación con SAP MM

### 4.1 Proceso tallado (planificación de mantenimiento ↔ disponibilidad de repuestos)

```
ACTOR: Planificador de mantenimiento (al planificar la Orden, punto 3.2 paso [3])
   │
   ├─[A] VERIFICACIÓN DE DISPONIBILIDAD (Availability Check en SAP PM)
   │     • El sistema chequea stock del repuesto requerido contra el maestro
   │       de materiales/spare parts (bloquea liberación/ejecución de la
   │       orden si falla la verificación, configurable)
   │     DECISIÓN: ¿Hay stock suficiente?
   │        → SÍ: se crea Reserva (Reservation) contra el almacén,
   │          la orden puede programarse con confianza
   │        → NO: sigue a [B]
   │
   ├─[B] RESOLUCIÓN DE FALTANTE (actor: Planificador → Comprador/Almacén)
   │     • Si el ítem es de stock (tipo L) y está bajo punto de reorden,
   │       MRP genera automáticamente Solicitud de Pedido (PR) / Orden de
   │       Compra (PO)
   │     • Si el ítem es no-stock (tipo N) o se requiere expeditar,
   │       se reclasifica y se genera PR directa vinculada a la orden
   │       de mantenimiento (no pasa por inventario general)
   │     DECISIÓN: ¿Lead time del repuesto es compatible con la urgencia
   │     de la orden (según criticidad/seguridad, punto 3.3)?
   │        → NO compatible y es crítico: escalamiento — compra urgente,
   │          repuesto de otro almacén/equipo (canibalización), o
   │          proveedor alterno
   │        → Compatible: la orden queda "pendiente de material",
   │          visible en el backlog con causa explícita
   │
   ├─[C] APROBACIÓN DE COMPRA (actor: Comprador/Gerencia según monto)
   │     • Conversión PR → PO (ME21N en términos SAP), aprobación según
   │       nivel de autorización/monto
   │
   ├─[D] RECEPCIÓN (actor: Almacén)
   │     • Entrada de mercancía (Goods Receipt / MIGO) — puede ir directo
   │       a la orden (sin pasar por stock general) si es material no-stock
   │
   └─[E] REPROGRAMACIÓN DE LA ORDEN (actor: Planificador)
         • Con material disponible, la orden vuelve a la cola de
           programación normal del taller
```

Fuente del flujo técnico SAP MM/PM: hilos de [SAP Community — Purchase Requisition from Maintenance Order](https://community.sap.com/t5/enterprise-resource-planning-q-a/purchase-requisition-from-maintenance-order-issue/qaq-p/9449299), [SAP Blog — Spare Parts Management in SAP Plant Maintenance](https://blogs.sap.com/2016/02/22/spare-parts-management-in-sap-plant-maintenance/), [SAP Help Portal — Maintenance Order System Statuses](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/e72f747389b340229f7fa343975bfa57/fffdec9b483b4f7f8347e797a6641acd.html), y proceso comercial resumido en [Oxmaint — SAP PM Integration with CMMS](https://oxmaint.com/sap-integration/sap-pm-integration-cmms-benefits-best-practices) y [Oxmaint — SAP EWM Integration for MRO Inventory](https://oxmaint.com/sap-integration/sap-ewm-mro-inventory-management).

### 4.2 Patrón de integración CMMS ↔ SAP MM (no solo técnico, de proceso)

El patrón repetido en toda la evidencia (independiente del proveedor de CMMS) es:

1. **SAP MM permanece como sistema de registro (system of record) del inventario y compras** — el CMMS/EAM externo (si existe) **no duplica** el stock, solo consulta y reserva.
2. **El movimiento de material dispara actualización contable en tiempo real** — cuando se registra consumo de repuesto en la orden, se genera automáticamente un movimiento tipo 261 (salida a orden de mantenimiento) en SAP MM.
3. **La orden de mantenimiento es el objeto que amarra todo:** equipo (PM) + repuesto (MM) + costo (FI/CO) + mano de obra (HR) — "that single event should ripple through five other systems."

Esto es directamente relevante para la arquitectura: **si la plataforma NO es SAP, debe posicionarse como cliente/consumidor de SAP PM/MM para repuestos y compras, no como sistema paralelo de inventario** — la reserva y el maestro de materiales deben vivir en SAP, el módulo solo debe reflejar el estado (disponible/reservado/pendiente) para efectos de bloquear o no la programación del taller.

Fuentes: [Osapiens — SAP CMMS Integration](https://osapiens.com/maintenance/cmms/sap-cmms-integration/), [Oxmaint — CMMS and SAP Integration Guide](https://oxmaint.com/blog/post/blog-post-cmms-erp-sap-integration-guide).

---

## 5. Gestión de equipos de contratistas vs. propios

### 5.1 Diferencias de proceso identificadas

La evidencia pública específica sobre este punto es la más delgada de las nueve secciones (predominan fuentes genéricas de fleet/rental, no específicas de subterránea aurífera peruana), pero el patrón es consistente:

| Dimensión | Equipo propio | Equipo de contratista |
|---|---|---|
| **Responsabilidad del mantenimiento** | Interna, ejecutada por el propio taller/CMMS del cliente | Generalmente del contratista, regida por SLA — "vendor accountability is strengthened using Service Level Agreements outlining requirements and responsibilities for servicing and maintaining vehicles and equipment" |
| **Vigencia documental** | Gestionada como parte del ciclo de vida normal del activo | Gestión de **prequalificación** — historial de habilitación, certificaciones, inspecciones portables entre sitios: "contractors who prequalify once and keep records current can mobilize across multiple client sites without rebuilding documentation each time" |
| **Habilitación operativa** | Vinculada al propio equipo (checklist de pre-uso, mantenimiento al día) | Doble control: habilitación del **equipo** + habilitación del **operador/empresa contratista** (a menudo verificada por plataformas de prequalificación separadas) |
| **Visibilidad para el cliente mina** | Total (registro directo) | Riesgo documentado: "contractor vehicles... move through sites without documentation, compliance records go unchecked, and when an incident occurs involving a subcontractor's asset, operators discover they have no visibility, no history, and full liability" |
| **Términos contractuales que definen respuesta** | N/A (interno) | Alcance de activos cubiertos, tiempos de respuesta SLA, cobertura de repuestos, frecuencia de PM, obligaciones de reporte, condiciones de término |

Fuentes: [FleetRabbit — Best Mining Contractor Safety Management Software](https://fleetrabbit.com/industry/mining-fleet-software/best-mining-contractor-safety-management-software-2026), [Hubner Australia — Fleet Maintenance and Certification Policies in Mining](https://hubner.au/fleet-maintenance-and-certification-policies/), [RTA Fleet — Best Practices: Contractors & Vendors](https://rtafleet.com/blog/fleet-management-best-practices-part-6-section-2-contracting-and-vendor-management). Como referencia de un manual corporativo real de gestión de contratistas en minería peruana/andina: [Nexa Resources — Manual de Gestión de SSMA para Empresas Contratistas](https://www.nexaresources.com/wp-content/uploads/2026/01/Manual-de-Gestion-de-SSMA-para-Empresas-Contratistas.pdf).

### 5.2 Cómo los sistemas de mercado modelan la distinción sin duplicar procesos

Ningún proveedor revisado (SAP PM, Maximo, Modular Mining, Wenco) publica documentación pública detallada sobre un modelo diferenciado propio/contratista más allá del **maestro de equipo con un campo de "propietario/tipo de tenencia"** y reglas de negocio condicionadas por ese campo. El patrón inferido —consistente con cómo SAP PM modela "equipment" con jerarquía de ubicación técnica y centro de costo— es:

- **Un único modelo de equipo/estado** (mismo esquema de disponibilidad, mismos 5 estados) para propio y contratista — el motor de asignación de guardias no debería tener que saber si el equipo es propio o de contratista para consumir disponibilidad.
- **Un atributo de "responsable de mantenimiento"** (interno / contratista X) que determina **quién puede cerrar el ciclo de vida de la orden de trabajo** y qué reglas de vigencia documental aplican, sin bifurcar el flujo de estados operativo/taller/standby.
- **Vigencia documental como una capa de validación previa a la disponibilidad**, no como un estado de disponibilidad en sí — es decir, un equipo con documentación vencida no debería tener un "estado" especial, sino bloquear su transición a OPERATIVO (una regla de negocio, no un estado nuevo).

---

## 6. Ubicación y tracking de equipos en minería subterránea

### 6.1 Evolución típica: de registro manual por nivel/sector a tracking automatizado

Aunque la evidencia no documenta explícitamente "casos de migración" paso a paso, el patrón de la industria (confirmado por la coexistencia de ambos modos en múltiples proveedores) es:

**Fase 1 — Manual por sector/nivel:** el despachador o el propio operador registra manualmente en qué nivel/frente/sector se encuentra el equipo, actualizado por radio o en cada cambio de tarea. Sin infraestructura adicional.

**Fase 2 — WiFi tag tracking:** se instala infraestructura WiFi ya existente para comunicaciones (o se despliega dedicada) y se adjunta un tag WiFi de bajo consumo al equipo/persona — reporta posición por triangulación entre puntos de acceso, sin requerir GPS (que no funciona bajo tierra). Ejemplo: [MST Global — Safety & Tracking / ImPact Wi-Fi Tags](https://mstglobal.com/technology/safety-tracking/), con batería de hasta 4 años, resistente a agua/polvo, certificado para áreas peligrosas — [Fierce Sensors — Integrated WiFi Tracking for Mining](https://www.fiercesensors.com/components/integrated-wifi-tracking-provides-real-time-location-visibility-for-mining).

**Fase 3 — Proximidad/RF dedicada + detección de colisión:** redes peer-to-peer sub-GHz que además de posición proveen alertas de proximidad entre vehículos y personas — el líder de mercado es **Newtrax** (ahora parte de Sandvik), con su red patentada **MineHop** y su plataforma **Newtrax Mining Data Platform (MDP)** — [Sandvik — Mixed fleet telemetry / Newtrax MDP](https://www.mining.sandvik/en/digital-solutions/operations-and-connected-fleet/mixed-fleet-telemetry/), [Newtrax — Proximity detection and collision avoidance](https://newtrax.com/products/proximity-ranging-sensor), caso de referencia en oro subterráneo: [Gold Fields deploying Newtrax tracking — Invincible UG gold mine](https://im-mining.com/2018/04/21/gold-fields-deploying-newtrax-tracking-proximity-systems-invincible-ug-gold-mine/) (relevante porque es exactamente el tipo de operación — mina de oro subterránea — de este contexto).

**Fase 4 — UWB (Ultra-Wideband):** mayor precisión (centimétrica/sub-centimétrica) que WiFi/RFID/Bluetooth, mejor penetración a través de obstáculos, usado cuando se requiere posicionamiento fino (ej. para colisión) más que solo "en qué sector está". Ver revisión académica: [A review of positioning technologies for personnel and equipment in underground mines (Tandfonline, 2025)](https://www.tandfonline.com/doi/full/10.1080/17538947.2025.2506493).

**Infraestructura de red de base:** cada vez más minas subterráneas despliegan **redes industriales privadas** (WiFi industrial o LTE/5G privado) como capa de transporte compartida entre voz, datos operacionales y tracking — Nokia y Cisco son los proveedores citados con mayor presencia: [Nokia — Mining / dedicated industrial device connectivity](https://www.dac.nokia.com/industry/mining/), [Mining Review — Cisco's Industrial Wireless Powers the Future of Mining](https://www.miningreview.com/news/digging-deeper-ciscos-industrial-wireless-powers-the-future-of-mining/) (Cisco URWB).

### 6.2 Proveedores líderes en tracking subterráneo — comparación

| Proveedor | Tecnología base | Diferenciador | Fuente |
|---|---|---|---|
| **Newtrax (Sandvik)** | RF sub-GHz peer-to-peer (MineHop) + integración con lámparas mineras | Combina tracking + detección de proximidad/colisión + telemetría de flota mixta (OEM-agnóstico) en una sola plataforma (MDP) | [Sandvik MDP](https://www.mining.sandvik/en/digital-solutions/operations-and-connected-fleet/mixed-fleet-telemetry/), [Heilbronn mine — Advanced Proximity Detection](https://im-mining.com/2025/01/20/heilbronn-mine-enhances-safety-with-oem-agnostic-newtrax-advanced-proximity-detection-system/) |
| **MST Global (Mine Site Technologies)** | WiFi tags sobre infraestructura WiFi existente | Reutiliza red WiFi ya desplegada para comunicaciones (no requiere infraestructura RF adicional exclusiva); ecosistema HELIX de gestión centralizada | [MST Global — Safety & Tracking](https://mstglobal.com/technology/safety-tracking/), [MST Global — Portable WiFi Connectivity](https://mstglobal.com/portable-wi-fi-connectivity/) |
| **Nokia / Cisco (infraestructura, no tracking per se)** | Redes privadas industriales (LTE/5G, URWB) como capa de transporte | No son proveedores de tracking en sí, sino de la red sobre la cual corren soluciones de tracking/IoT de terceros | [Nokia Mining](https://www.dac.nokia.com/industry/mining/), [Cisco URWB — Mining Review](https://www.miningreview.com/news/digging-deeper-ciscos-industrial-wireless-powers-the-future-of-mining/) |

### 6.3 Arquitectura de datos para migrar de manual a automatizado sin rediseñar el modelo

No se encontró documentación pública de un caso explícito de "migración paso a paso", pero el patrón de diseño estándar de geofencing (documentado en implementaciones IoT industriales) es directamente aplicable como abstracción de datos:

- **Modelo de "Zona/Ubicación" desacoplado de la fuente de posición:** un `GeoFenceZone`/ubicación (nivel, sector, frente) con identificador propio, nombre, y — cuando exista tracking automático — coordenadas/geometría. En fase manual, la "zona actual" del equipo es simplemente un campo de texto/referencia poblado manualmente por el despachador; en fase automática, el mismo campo se puebla por el evento de entrada/salida de geofence — **el modelo de datos (equipo → zona actual, con timestamp y fuente del dato) no cambia, solo cambia quién/qué lo actualiza.**
- El patrón "cuando un activo trackeado entra o sale de un geofence, el sistema dispara una acción automática (alerta, notificación, cambio de estado)" es el mecanismo natural para automatizar sin rediseñar: la zona automatizada simplemente reemplaza al actor humano como "quien reporta la ubicación", usando el mismo campo destino.
- Referencia de patrón: [ThingsBoard — Geofencing-Based Excavator & Truck Tracking for Clay Mines](https://thingsboard.io/use-cases/site-fleet-tracking/), [Pozyx — Top Geofencing Examples Boosting Industrial Ops](https://www.pozyx.io/newsroom/top-geofencing-examples).

**Implicación directa de diseño:** el modelo de datos de ubicación debe tener, desde el día uno (aunque el tracking sea 100% manual): `equipo_id`, `zona_id` (referencia a catálogo de niveles/sectores, no texto libre), `timestamp_actualizacion`, `fuente` (manual/automático/tag_id), `reportado_por` (usuario o sistema). Esto permite que el día que se instale Newtrax/MST/UWB, el mismo campo `fuente` cambie de "manual" a "automático" sin tocar el esquema ni el consumidor (el motor de asignación de guardias solo necesita `zona_id` + `timestamp_actualizacion`, nunca necesita saber cómo se originó el dato).

---

## 7. Marcos y estándares de gestión de activos: ISO 55000/55001 y SAE JA1011/JA1012

### 7.1 ISO 55000 / 55001 / 55002

- **ISO 55000** — vocabulario, visión general y principios (documento marco, no certificable). [ISO 55000:2024](https://www.iso.org/standard/83053.html) / [texto completo OBP](https://www.iso.org/obp/ui/en/#!iso:std:83053:en).
- **ISO 55001** — requisitos certificables del sistema de gestión de activos (el "debe" auditable). [ISO 55001:2024](https://www.iso.org/standard/83054.html) (existe también versión 2014 aún vigente en muchas certificaciones: [ISO 55001:2014](https://www.iso.org/standard/55089.html)).
- **ISO 55002** — guía de aplicación práctica de ISO 55001 (el "cómo"). [ISO 55002:2018](https://www.iso.org/standard/70402.html).

**Aplicabilidad a minería:** confirmada explícitamente por múltiples fuentes — "ISO 55000 frameworks manage mobile equipment fleets and fixed processing plants, optimize maintenance strategies for equipment in harsh operating environments" — y existe literatura académica específica sobre extender PAS 55/ISO 55000 a gestión de activos minerales (más allá de equipos, incluyendo el recurso mineral en sí): [Extending the application of PAS 55/ISO 55000 to mineral asset management (SciELO)](https://scielo.org.za/scielo.php?script=sci_arttext&pid=S2225-62532016001100009).

**¿Es sobredimensionado para ~80 equipos?** La evidencia indica que **no necesariamente** — el estándar está explícitamente diseñado para escalar: "for smaller facilities, the depth and formality of the asset management system is scaled appropriately... smaller organisations can also apply their principles in a scaled and practical way", y se recomienda usar **ISO 55002 como punto de partida práctico** (con su evaluación de madurez) antes de perseguir certificación formal. Fuentes: [Kynection — Key ISO 55000 Requirements](https://www.kynection.com.au/iso-55000-explained-2026-guide-to-asset-management-standards/), [CIM.io — A guide to ISO 55000](https://www.cim.io/blog/a-guide-to-iso-55000-creating-effective-asset-management).

**Traducción práctica al diseño del módulo (sin perseguir certificación):** ISO 55001 exige que el sistema de gestión de activos tenga: (a) política y objetivos de gestión de activos vinculados a objetivos del negocio, (b) un plan de gestión de activos (SAMP) que priorice según riesgo, (c) trazabilidad del ciclo de vida del activo, (d) gestión de riesgos vinculada a decisiones de mantenimiento, y (e) mejora continua basada en desempeño medido. Para 80 equipos, esto se traduce concretamente en: maestro de equipo completo y único (punto 5.2), criticidad ABC obligatoria (punto 3.4), historial de intervención trazable (para MTBS/MTTR reales, no estimados), y un ciclo de revisión periódica de la estrategia de mantenimiento por criticidad — no requiere el aparataje documental completo de una operación certificada.

### 7.2 SAE JA1011 / JA1012 (RCM)

- **SAE JA1011** — "Evaluation Criteria for Reliability-Centered Maintenance (RCM) Processes": define el criterio mínimo (las 7 preguntas clásicas) que cualquier proceso debe cumplir para poder llamarse RCM. [SAE JA1011](https://www.sae.org/standards/ja1011-a-guide-reliability-centered-maintenance-rcm-standard) / [Tractian — SAE JA1011 glossary](https://tractian.com/en/glossary/sae-ja1011).
- **SAE JA1012** — guía complementaria que amplía y clarifica cómo aplicar JA1011 correctamente en la práctica. [SAE JA1012](https://www.sae.org/standards/ja1012-a-guide-reliability-centered-maintenance-rcm-standard) / [SAE Mobilus — JA1012_201108](https://saemobilus.sae.org/standards/ja1012_201108-a-guide-reliability-centered-maintenance-rcm-standard).

Las siete preguntas de JA1011 (resumen operativo):
1. ¿Cuáles son las funciones y estándares de desempeño del activo?
2. ¿De qué formas puede fallar en cumplir esas funciones?
3. ¿Qué causa cada falla?
4. ¿Qué ocurre cuando falla?
5. ¿Por qué importa cada falla?
6. ¿Qué tarea sistemática puede prevenir o mitigar la falla?
7. ¿Qué hacer si no existe una tarea preventiva adecuada? (→ rediseño, o correr a falla de forma controlada)

Fuente: [Wikipedia — Reliability-centered maintenance](https://en.wikipedia.org/wiki/Reliability-centered_maintenance).

**¿Aplicable a flota de 80 equipos, o sobredimensionado?** RCM formal completo (análisis exhaustivo función-por-función de cada modo de falla) es costoso en horas-analista y típicamente se reserva para **activos fijos críticos de alto costo de falla** (plantas, sistemas de ventilación principal, izaje) más que para flota móvil replicada (múltiples jumbos idénticos, por ejemplo). La evidencia respalda un enfoque **RCM "liviano" o dirigido**, no RCM formal sobre cada equipo: "RCM delivers the most value where failures are costly, risky, or complex... the most practical point of application for a fleet has to do with predictive analytics: studying past failures to determine causes, trends, and warning signs" — es decir, para flota móvil el valor de RCM se obtiene mejor vía **análisis de patrones de falla histórica agregados por familia de equipo** (todos los jumbos del mismo modelo comparten estrategia) que vía análisis RCM individual por unidad. Fuente: [Fleet Maintenance — How fleets can benefit from RCM](https://www.fleetmaintenance.com/shop-operations/shop-management/article/21096040/how-fleets-can-benefit-from-reliability-centered-maintenance).

**Conclusión de aplicabilidad para esta escala:** Ni ISO 55001 certificado ni RCM formal exhaustivo son necesarios ni recomendables como precondición para lanzar el módulo. Sí son recomendables como **principios de diseño** — criticidad explícita (ISO 55001-lite + RCM pregunta 1-5 aplicada por familia de equipo, no por unidad), estrategia de mantenimiento diferenciada por criticidad (RCM pregunta 6-7), y trazabilidad de historial (base para MTBS/MTTR reales) — sin la carga de certificación o de un ejercicio RCM formal de meses.

---

## 8. Benchmark de soluciones de mercado

| Proveedor | Cómo modela disponibilidad en tiempo real | Integración con planificación de operación | Patrón de integración con SAP PM/MM |
|---|---|---|---|
| **SAP PM (nativo)** | Estado de equipo vía Notificaciones (Avisos) y Órdenes de Mantenimiento; "system status" configurable (CRTD, REL, TECO, etc.) más "user status" personalizable; el indicador ABC en el maestro de equipo alimenta criticidad. Ver [SAP Help — Maintenance Order System Statuses](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/e72f747389b340229f7fa343975bfa57/fffdec9b483b4f7f8347e797a6641acd.html). | No tiene motor de planificación operacional/despacho nativo — requiere integración con sistemas de dispatch (Modular, Wenco) u otros. Su fuerza es el backbone de datos maestros y financiero. | Es la fuente de verdad — MM/FI se integran nativamente dentro del mismo ERP; terceros (CMMS externos, Prometheus, RPMGlobal AMT4SAP) se conectan **hacia** SAP, no al revés. |
| **IBM Maximo** | EAM genérico multi-industria (petróleo, minería, manufactura); usado en minería vía casos como el proyecto OREN de Shell/IBM. Evidencia pública específica de minería subterránea con detalle de modelado de estado es escasa — [IBM Maximo Application Suite](https://www.ibm.com/products/maximo). | Requiere integración externa para dispatch/asignación operacional (no es su función nativa). | Existe integración vía conectores/middleware estándar; no se encontró documentación pública específica de un patrón SAP MM ↔ Maximo detallado, lo que sugiere que las implementaciones de coexistencia suelen ser custom por proyecto. |
| **Komatsu Modular Mining DISPATCH / MineCare** | Mantiene un "gemelo digital en vivo" de la mina (equipos, ubicaciones, caminos). El estado "down" queda registrado con ubicación exacta y operador que reportó la baja — trazabilidad explícita del cambio de estado ("the API enables the sharing of key information as equipment location at the time the unit was put into 'down' status, and the name of the operator who put the unit down"). **MineCare** es el módulo de mantenimiento en tiempo real dedicado, con versión SaaS Cloud reciente. | Es el caso de integración **más estrecho** entre disponibilidad y planificación operacional del benchmark: DISPATCH es simultáneamente el sistema de despacho operacional y el que expone el estado "down"/disponible — el acoplamiento es nativo, no una integración entre dos productos separados. | Vía **Core API**, expone datos hacia sistemas supervisorios/ERP incluyendo SAP explícitamente mencionado como ejemplo. Fuentes: [Komatsu DISPATCH](https://www.komatsu.com/en-us/technology/smart-mining/loading-and-haulage/dispatch), [Komatsu — Asset management (MineCare)](https://www.komatsu.com/en-us/technology/smart-mining/asset-management), [Modular Mining — Wikipedia](https://en.wikipedia.org/wiki/Modular_Mining_Systems) |
| **Trimble / Wenco FMS** | "Downtime tracker delivers real-time updates on the maintenance process — from the first down status until trucks are ready for scheduling" — modela explícitamente el ciclo completo baja→taller→disponible como un flujo trackeado end-to-end, con mantenimiento basado en condición (condition-based). | Al igual que Modular, Wenco integra dispatch operacional y mantenimiento como parte de la misma suite (FMS + Asset Management), no como sistemas separados. | Documentación pública menos explícita sobre conectores SAP específicos que Modular/RPMGlobal; se infiere integración vía interfaces estándar de la industria. Fuentes: [Wenco — Asset Management](https://www.wencomine.com/our-solutions/asset-management), [Wenco — Wikipedia](https://en.wikipedia.org/wiki/Wenco_International_Mining_Systems) |
| **RPMGlobal (AMT / AMT4SAP)** | No es un sistema de estado operacional en tiempo real por sí mismo — es un motor de **costeo y ciclo de vida** (Dynamic Life Cycle Costing) que **consume** datos de disponibilidad de otros sistemas (a bordo, FMS, SAP) para reproyectar disponibilidad, costos de mantenimiento y necesidades de recursos. | No hace dispatch; se posiciona explícitamente como **complemento** de SAP para presupuesto/costeo de mantenimiento, con más de 20 conectores lógicos hacia SAP. | Es el caso más explícito y documentado públicamente de **coexistencia deliberada con SAP** (no reemplazo): AMT4SAP "is designed to complement a miner's existing SAP solution." Fuentes: [RPMGlobal — AMT4SAP](https://rpmglobal.com/product/amt4sap/), [RPMGlobal launches asset management software for SAP — Australian Mining](https://www.australianmining.com.au/rpmglobal-launches-asset-management-software-for-sap/) |
| **Prometheus Group** | No modela estado operacional de flota — es una capa de UX/planificación **sobre** SAP PM/Maximo: "reads and writes directly to SAP PM/EAM modules... your maintenance data stays in SAP as the system of record while technicians use a modern interface." | No aplica (no es sistema de despacho); su valor es resolver la debilidad reconocida de SAP PM nativo en planificación/programación visual de backlog. | El patrón de integración más "puro" de front-end sobre SAP como sistema de registro — útil como referencia de **qué NO reconstruir** si el módulo debe apoyarse en SAP PM/MM (evitar duplicar el maestro y el registro contable). Fuentes: [Prometheus Group — SAP ERP Integration](https://www.prometheusgroup.com/erp-sap) |
| **GE Digital APM (ahora GE Vernova)** | Enfocado en confiabilidad predictiva/gemelo digital analítico más que en estado operacional en tiempo real. | No es un sistema de despacho operacional; su rol es la capa analítica/predictiva de estrategia de mantenimiento. | Integración documentada hacia SAP a nivel de planes de mantenimiento y estrategia de activos. Fuentes: [GE Digital — APM](https://www.ge.com/digital/applications/asset-performance-management-power-generation) |

### Lectura transversal del benchmark

Se observan **dos arquetipos claramente distintos**, relevantes para posicionar el módulo del proyecto:

1. **Arquetipo "dispatch-céntrico" (Modular DISPATCH/MineCare, Wenco):** el sistema de disponibilidad **es parte del mismo producto** que hace la planificación operacional — no hay "acoplamiento" entre dos sistemas porque es un solo sistema. Esto es lo más cercano a lo que el cliente está pidiendo (disponibilidad como precondición del motor de asignación), pero en estos casos ambos módulos son del mismo vendor.
2. **Arquetipo "capa sobre SAP" (Prometheus, RPMGlobal AMT4SAP, GE APM):** el sistema explícitamente NO reemplaza a SAP PM/MM como registro de verdad — se posiciona como front-end, motor de costeo o capa analítica que lee/escribe hacia SAP. Este es el arquetipo que aplica al caso, dado que SAP PM/MM es obligatorio: **el módulo debe comportarse como una capa operacional en tiempo real (arquetipo 1, tipo Dispatch) que además respeta a SAP PM/MM como sistema de registro para maestro de equipo/repuestos/costos (arquetipo 2, tipo Prometheus/RPMGlobal)** — un híbrido, no uno u otro.

---

## 9. El acoplamiento disponibilidad-planificación como problema de proceso

### 9.1 El riesgo central, documentado en la evidencia

El fallo típico ya citado en el punto 2 es el resumen perfecto del problema: **"the dispatch board can still show equipment as active because nobody updated the system, leading to situations where dispatch allocates loads to a truck that's been broken down for hours"** ([Groundhog Apps — Dispatch Operator Handbook](https://groundhogapps.com/dispatch-operator-handbook/)). Trasladado al contexto del proyecto: si el motor de asignación de guardias programa un equipo basándose en una disponibilidad desactualizada o mal reportada, la falla se propaga directamente a la planificación del turno siguiente — exactamente el riesgo que el cliente identificó al hacer de este módulo una precondición mandatoria.

### 9.2 Controles de calidad de dato identificados como prácticas de la industria

De la literatura sobre monitoreo de frescura de datos (data freshness/staleness), aplicable directamente a este problema aunque no sea literatura minera específica:

- **Umbrales de frescura diferenciados por tipo de dato ("freshness SLA"):** "you define how stale is too stale... a real-time events table might need a 15-minute threshold... the most common mistake is setting the same threshold for every table." Traducido: el umbral de "última actualización aceptable" para el estado OPERATIVO/PANNE de un equipo (que puede cambiar en minutos) debe ser mucho más estricto que el umbral para, por ejemplo, la vigencia documental de un contratista (que cambia en semanas). Fuente: [Tacnode — What is Stale Data: Causes, Detection, and How to Set Freshness SLAs](https://tacnode.io/post/what-is-stale-data).
- **Alertas automáticas de "estancamiento" (stale flag), no solo dashboards pasivos:** "the monitor sends an alert... before stale data reaches decision-making processes" — el sistema debe alertar proactivamente cuando un equipo lleva más de X tiempo sin actualización de estado, en lugar de esperar que alguien note el problema mirando un tablero.
- **Evitar fatiga de alarma:** "most mining condition monitoring systems still trigger on the first threshold crossing, then trigger again minutes later, and again after that, flooding operators with repetitive notifications that carry very little context or urgency" — advertencia específica de la industria minera sobre over-alerting, aplicable al diseño de las alertas de disponibilidad estancada. Fuente: [Dingo — Why mining teams are drowning in maintenance data](https://www.dingo.com/insights/mining-maintenance-data-overload/).
- **Trazabilidad de quién y desde dónde se reportó el cambio** (visto en el punto 2, Modular Mining Core API) como mecanismo de accountability que desalienta reportes tardíos o erróneos.
- **"Single source of truth" explícito para el motor de asignación:** "a robust equipment scheduling system serves as the single source of truth for all resource allocation decisions... all assignments live in one system to eliminate version conflicts and guesswork" — refuerza el requisito explícito del cliente de que disponibilidad sea fuente de verdad única, no un dato replicado/cacheado en el motor de asignación.

Fuentes adicionales: [Siffletdata — Data Freshness in Data Observability](https://www.siffletdata.com/blog/data-freshness), [itemit — Best Practices of Equipment Scheduling](https://itemit.com/blog/best-practices-equipment-scheduling/).

### 9.3 Cómo las operaciones maduras evitan que un dato malo arruine el turno siguiente (síntesis)

Combinando el patrón de Modular DISPATCH (atribución + timestamp obligatorios en cada cambio de estado) con las prácticas de freshness SLA y el principio "single source of truth", el patrón maduro consolidado es:

1. Todo cambio de estado es **atribuido** (quién, desde dónde, cuándo) — nunca anónimo.
2. Cada estado tiene un **umbral de frescura propio** — no todos los estados "envejecen" al mismo ritmo (STANDBY puede ser aceptable por horas; PANNE recién reportado necesita confirmación de causa en minutos).
3. Existe una **señal explícita de "dato estancado"** separada del propio valor de disponibilidad — el motor de asignación no solo debe recibir "operativo/taller/standby", sino también "hace cuánto se actualizó" y una bandera de confianza.
4. La **causa/categoría del estado puede refinarse después sin bloquear el estado en sí** (ver punto 2.2) — se prioriza la velocidad de reflejar "¿está disponible o no?" sobre la exactitud inmediata del detalle.
5. El diseño evita alertar en cada mínimo cambio (fatiga de alarma) pero sí escala agresivamente cuando el dato lleva demasiado tiempo sin refrescar.

---

## 10. Implicaciones de diseño (recomendaciones de proceso y reglas de negocio)

Estas recomendaciones son de **proceso y reglas de negocio**, no de arquitectura técnica.

### 10.1 Modelo de estados: separar "estado" de "causa/detalle"

- Define el estado de disponibilidad como un campo de **baja cardinalidad y cambio inmediato**: OPERATIVO / STANDBY / TALLER-PREVENTIVO / TALLER-CORRECTIVO(PANNE) / [opcional: NO-DISPONIBLE-DOCUMENTAL para vigencia vencida]. Este campo debe poder cambiar en segundos, sin esperar aprobación.
- Modela por separado un campo de **causa/categoría de la parada**, que puede quedar como "pendiente de diagnóstico" al momento del cambio de estado y refinarse después por Mantenimiento sin revertir ni bloquear el estado principal.
- Regla de negocio explícita: **el motor de asignación de guardias nunca debe esperar a que la causa esté confirmada para conocer el estado** — solo necesita el estado y su timestamp.

### 10.2 Reglas de transición y quién puede reportar cada transición

- Define explícitamente qué actor puede iniciar cada transición: Operador (OPERATIVO→PANNE por reporte de falla), Despacho (cualquier estado→STANDBY por decisión operacional), Mecánico/Supervisor de taller (TALLER→STANDBY solo tras checklist de liberación firmado — nunca directo a OPERATIVO, la asignación a OPERATIVO es exclusiva del motor de asignación/despacho).
- Toda transición debe registrar obligatoriamente: quién, cuándo, desde qué ubicación/rol, y (si aplica) evidencia mínima (checklist, firma).
- La transición TALLER→STANDBY (reingreso) requiere el checklist de liberación como precondición dura, no opcional — replicando el patrón de firma de supervisor de taller documentado en procedimientos mineros peruanos/chilenos.

### 10.3 Priorización de backlog como motor de reglas, no como campo libre

- Todo equipo debe tener criticidad ABC asignada en el maestro **antes** de poder generar solicitudes de mantenimiento — es un prerequisito de datos maestros, no una decisión caso a caso.
- La prioridad efectiva de una orden = función de (criticidad del equipo, impacto en seguridad reportado, antigüedad de la solicitud) con una regla de "override" automático cuando el impacto en seguridad es máximo (bypass de cola).
- Implementa una regla de escalamiento automático por antigüedad: una solicitud que supera un umbral de días sin atenderse debe re-priorizarse o notificarse a un rol superior, para que el backlog no oculte riesgos crecientes (el caso del molino SAG citado en el punto 3.3 es la advertencia de qué pasa si no existe esta regla).

### 10.4 Repuestos: nunca bloquear el registro del problema, sí bloquear la promesa de fecha

- Una solicitud de mantenimiento debe poder registrarse y clasificarse **aunque no se sepa aún si hay repuesto disponible** — el chequeo de disponibilidad de material es un paso posterior de planificación, no una precondición para registrar el problema.
- Cuando falta repuesto, la orden debe quedar en un estado explícito de "pendiente de material" (no simplemente "en cola"), visible para quien prioriza el backlog, con la causa y el lead time estimado — para que la priorización considere realista lo que se puede resolver esta semana vs. lo que depende de una importación.
- SAP MM permanece como fuente única de verdad de stock/reserva/compra — el módulo consulta y refleja el estado de la reserva, no mantiene su propio inventario paralelo.

### 10.5 Contratistas: mismo modelo de estado, atributo adicional de responsabilidad

- No duplicar el flujo de estados de disponibilidad para equipo de contratista — usar el mismo modelo de 5 estados para propio y contratista, agregando un atributo de "responsable de mantenimiento" que determina quién ejecuta y cierra la orden, y qué reglas de vigencia documental aplican.
- La vigencia documental (SOAT, certificación, inspección técnica) debe modelarse como una **regla de bloqueo de la transición a OPERATIVO**, no como un estado adicional — un equipo con documentación vencida simplemente no puede pasar a OPERATIVO aunque esté mecánicamente listo, y el sistema debe explicar por qué (para no generar confusión operacional).

### 10.6 Ubicación: diseñar el campo de "fuente" desde el día uno

- Aunque el tracking sea 100% manual al inicio, el modelo de ubicación debe incluir desde el principio: zona/nivel/sector como referencia a catálogo estructurado (no texto libre), timestamp de actualización, y fuente del dato (manual/automático).
- Esto permite que la migración futura a tracking automatizado (Newtrax, MST, UWB) sea un cambio de "quién puebla el campo", no un rediseño del esquema ni del consumidor (motor de asignación de guardias).

### 10.7 Estándares (ISO 55000, SAE JA1011/1012): adoptar principios, no perseguir certificación

- No se requiere certificación ISO 55001 ni un ejercicio RCM formal por unidad de equipo para este alcance (~80 equipos). Sí conviene adoptar como principios de diseño: criticidad explícita y obligatoria en el maestro, estrategia de mantenimiento diferenciada por criticidad (y por familia de equipo, no por unidad individual), y trazabilidad completa de historial de intervención — precondiciones para que MTBS/MTTR reales (no estimados) alimenten decisiones futuras de estrategia de mantenimiento.

### 10.8 Diseño específico de la interfaz de disponibilidad que consume el motor de asignación de guardias

Esta es la recomendación más directamente accionable, dado que es el punto explícito del cliente:

1. **El motor de asignación nunca debe consultar "estado actual" sin también recibir "hace cuánto se actualizó" y una bandera de confianza del dato.** Un estado sin edad conocida es, en la práctica, un dato no confiable para programar una guardia.
2. **Define un umbral de frescura aceptable por estado**, no uno único para todos: p. ej. un STANDBY de hace 6 horas puede ser aceptable (el equipo probablemente sigue disponible), pero un OPERATIVO de hace 6 horas sin ningún evento intermedio debería disparar una bandera de "verificar" antes de que el motor de asignación confíe en él para el turno siguiente.
3. **El motor de asignación debe recibir una señal explícita de "disponibilidad estancada/no confiable"**, separada del valor de estado en sí — de modo que la regla de negocio de la asignación pueda decidir excluir ese equipo de la programación automática hasta que se confirme, en lugar de asumir el último estado conocido como verdad.
4. **Todo cambio de estado que afecte la disponibilidad "oficial" debe quedar atribuido** (usuario/rol/ubicación/timestamp) — esto no es solo trazabilidad para auditoría, es lo que permite que Mantenimiento y Despacho confíen mutuamente en los cambios de estado del otro sin tener que re-verificar por radio, que es exactamente el modo de falla documentado en el punto 2.2.
5. **La causa detallada de la indisponibilidad puede llegar después y no debe bloquear la señal de disponibilidad** — el motor de asignación de guardias solo necesita saber "disponible / no disponible / cuándo se actualizó por última vez / qué tan confiable es ese dato ahora", nunca debe esperar a que Mantenimiento termine de diagnosticar para saber si puede o no programar el equipo.
6. **Ningún cambio "silencioso":** cualquier transición de estado que afecte disponibilidad debe ser observable (evento), no solo un valor sobrescrito en una tabla — de forma que quien programa la guardia pueda ver el historial reciente de cambios de un equipo específico si necesita entender por qué su disponibilidad cambió justo antes del cierre de programación del turno.

---

## Índice de fuentes citadas (consolidado)

**Estándares formales**
- [ISO 55000:2024](https://www.iso.org/standard/83053.html) / [texto OBP](https://www.iso.org/obp/ui/en/#!iso:std:83053:en)
- [ISO 55001:2024](https://www.iso.org/standard/83054.html) / [ISO 55001:2014](https://www.iso.org/standard/55089.html)
- [ISO 55002:2018](https://www.iso.org/standard/70402.html)
- [SAE JA1011](https://www.sae.org/standards/ja1011-a-guide-reliability-centered-maintenance-rcm-standard)
- [SAE JA1012](https://www.sae.org/standards/ja1012-a-guide-reliability-centered-maintenance-rcm-standard)
- [Wikipedia — Reliability-centered maintenance](https://en.wikipedia.org/wiki/Reliability-centered_maintenance)

**Definiciones y métricas de flota minera**
- [Caterpillar — Mining Equipment Management Metrics Document V4 (2019)](https://www.slideshare.net/slideshow/2019-caterpillar-mining-equipment-management-metrics-document-v4pdf/251857185)
- [ReliaMag — How to Calculate MTBF and MTTR](https://reliamag.com/guides/how-to-calculate-mtbf-mttr/)
- [ResearchGate — Performance Measurement of Mining Equipments by Utilizing OEE](https://www.researchgate.net/publication/47517712_Performance_Measurement_of_Mining_Equipments_by_Utilizing_OEE)
- [UNSCH — Evaluación de KPI's Cerro Lindo, Perú](https://repositorio.unsch.edu.pe/items/b81eb737-0368-4b38-8b35-455a46ff338d)
- [CNEP/Matrix Consulting — Estudio de productividad gran minería del cobre](https://www.cnep.cl/wp-content/uploads/2018/06/Nota-t%C3%A9cnica-3.-Estudio-de-productividad-en-la-gran-miner%C3%ADa-del-cobre-%E2%80%93-Benchmark-de-indicadores-de-productividad-MatrixConsulting.pdf)
- [RedCapacitación Chile — Guía de Planificación de Mantenimiento de Maquinaria Minera](https://redcapacitacion.cl/articulo/guia-de-planificacion-de-mantenimiento-de-maquinaria-minera-gestion-de-activos-y-disponibilidad/7312)
- [Scribd — Disponibilidad equipos operaciones mina 2023](https://www.scribd.com/document/720176797/Disponibilidad-equipos-operaciones-mina-2023)

**Transición de estado / dispatch**
- [Komatsu — DISPATCH Fleet Management case study](https://www.komatsu.com/en-us/case-studies/dispatch-fleet-management-system-helps-mine-optimize-its-haulage)
- [Komatsu — Asset management (MineCare)](https://www.komatsu.com/en-us/technology/smart-mining/asset-management)
- [Groundhog Apps — Dispatch Operator Handbook](https://groundhogapps.com/dispatch-operator-handbook/)
- [Wenco — Asset Management](https://www.wencomine.com/our-solutions/asset-management)

**Mantenimiento preventivo/correctivo y backlog**
- [Oxmaint — Underground Mining Equipment Maintenance Guide](https://oxmaint.com/blog/post/underground-mining-equipment-maintenance-guide)
- [Tractian — Maintenance Backlog glossary](https://tractian.com/en/glossary/maintenance-backlog)
- [Oxmaint — Work Order Prioritization Best Practices](https://oxmaint.com/blog/post/work-order-prioritization-best-practices)
- [RedCapacitación Chile — Qué es un backlog en mantenimiento de maquinaria pesada](https://redcapacitacion.cl/articulo/que-es-un-backlog-en-mantenimiento-de-maquinaria-pesada-y-como-gestionarlo/7470)
- [Accendo Reliability — Equipment Criticality ABC](https://accendoreliability.com/doing-equipment-criticality-is-as-simple-as-abc-2/)

**SAP PM/MM**
- [SAP Help Portal — Maintenance Order System Statuses](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/e72f747389b340229f7fa343975bfa57/fffdec9b483b4f7f8347e797a6641acd.html)
- [SAP Blog — Spare Parts Management in SAP Plant Maintenance](https://blogs.sap.com/2016/02/22/spare-parts-management-in-sap-plant-maintenance/)
- [Vaibhaverp — Equipment Master in SAP PM](https://vaibhaverp.com/equipment-master-in-sap-pm/)
- [Osapiens — SAP CMMS Integration](https://osapiens.com/maintenance/cmms/sap-cmms-integration/)

**Contratistas**
- [FleetRabbit — Best Mining Contractor Safety Management Software](https://fleetrabbit.com/industry/mining-fleet-software/best-mining-contractor-safety-management-software-2026)
- [Nexa Resources — Manual de Gestión de SSMA para Empresas Contratistas](https://www.nexaresources.com/wp-content/uploads/2026/01/Manual-de-Gestion-de-SSMA-para-Empresas-Contratistas.pdf)

**Tracking subterráneo**
- [Sandvik — Newtrax Mining Data Platform / Mixed fleet telemetry](https://www.mining.sandvik/en/digital-solutions/operations-and-connected-fleet/mixed-fleet-telemetry/)
- [International Mining — Gold Fields Newtrax, Invincible UG gold mine](https://im-mining.com/2018/04/21/gold-fields-deploying-newtrax-tracking-proximity-systems-invincible-ug-gold-mine/)
- [MST Global — Safety & Tracking](https://mstglobal.com/technology/safety-tracking/)
- [Tandfonline — Review of positioning technologies underground mines (2025)](https://www.tandfonline.com/doi/full/10.1080/17538947.2025.2506493)

**Benchmark de proveedores**
- [RPMGlobal — AMT4SAP](https://rpmglobal.com/product/amt4sap/)
- [Prometheus Group — SAP ERP Integration](https://www.prometheusgroup.com/erp-sap)
- [GE Digital — APM](https://www.ge.com/digital/applications/asset-performance-management-power-generation)
- [IBM — Maximo Application Suite](https://www.ibm.com/products/maximo)

**Calidad de dato / acoplamiento**
- [Tacnode — What is Stale Data / Freshness SLAs](https://tacnode.io/post/what-is-stale-data)
- [Dingo — Why mining teams are drowning in maintenance data](https://www.dingo.com/insights/mining-maintenance-data-overload/)

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
