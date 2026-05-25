# Decision Box Framework — Metodología para el Diseño de Reportabilidad Operacional en un IROC Minero

> **Versión:** 1.0 — Marco Metodológico Completo para Etapa Discovery & Definition  
> **Aplicación:** IROC Minero · Operaciones de Mediana y Gran Escala · Transformación Digital

***

## Resumen Ejecutivo

La mayoría de los proyectos de reportabilidad operacional en minería fracasan no por razones tecnológicas, sino por una razón más profunda: se construyen respuestas antes de haber entendido las preguntas. Se diseñan dashboards antes de comprender qué decisión debe tomar cada rol. El resultado es un ecosistema de visualizaciones ricas en datos pero pobres en valor decisional.

El **Decision Box Framework (DBF)** es una metodología estructurada para el diseño de sistemas de reportabilidad orientados a la decisión, específicamente desarrollada para contextos de alta complejidad operacional como un IROC minero. Su premisa central es que cada actor de la operación —independientemente de su nivel jerárquico o área funcional— tiene un conjunto acotado de decisiones que debe tomar en un horizonte temporal definido. La "caja de decisión" es el instrumento que entrega, exactamente, la información mínima, suficiente y accionable para tomar esas decisiones y ejecutar esas acciones, en el momento correcto, con la granularidad correcta.[^1][^2]

El framework integra cinco corrientes metodológicas validadas: **Needs Assessment** para identificar brechas reales de información; **Jobs To Be Done (JTBD)** para entender el trabajo que cada rol necesita completar; **Decision Rights Frameworks (RACI/RAPID/DACI)** para estructurar quién decide, ejecuta y escala; **Management Operating System (MOS) y Short Interval Control (SIC)** para conectar reportes con cadencias de control; y **Levels of Work** para alinear granularidad de información con nivel de decisión.[^3][^4][^5][^6][^7][^8][^9][^10][^11][^12][^13][^14][^15]

La etapa de Discovery & Definition que sustenta este framework tiene una duración recomendada de **8 semanas** y produce como entregable primario una colección de cajas de decisión documentadas, una matriz de roles × decisiones × información, y un backlog priorizado de iniciativas de reportabilidad.

***

## Marco Conceptual: Fundamentos del Decision Box Framework

### 1. Needs Assessment: Del Dato a la Brecha de Información

Un Needs Assessment es un proceso sistemático para identificar la brecha entre condiciones actuales y condiciones deseadas. En el contexto de un sistema de reportabilidad minera, esta brecha se manifiesta de tres maneras:[^4][^8][^16]

- **Brecha de disponibilidad:** la información existe en algún sistema pero no llega al rol que la necesita, en el momento en que la necesita.
- **Brecha de relevancia:** la información llega, pero no es la correcta para la decisión que el rol debe tomar.
- **Brecha de accionabilidad:** la información llega y es relevante, pero no está formulada de modo que active una acción específica.

El Needs Assessment operacional en el contexto del DBF utiliza cinco técnicas de elicitación de requisitos: entrevistas estructuradas por rol y nivel; observación en campo durante un turno completo (job shadowing); análisis de documentos y reportes actuales; talleres de mapeo de decisiones; y análisis de incidentes operacionales para detectar cuándo la falta de información contribuyó a una decisión tardía o incorrecta.[^17][^18][^19]

### 2. Jobs To Be Done: El Trabajo Real de Cada Rol

La teoría Jobs To Be Done (JTBD), desarrollada por Clayton Christensen, establece que los usuarios no "quieren un dashboard" — contratan herramientas para completar un trabajo específico y hacer progreso en una circunstancia concreta. Esta reencuadración es crítica en minería: cuando un supervisor de turno dice "quiero un reporte de disponibilidad de equipos", el trabajo real que intenta completar es: "necesito saber si tengo suficiente flota operativa para cumplir el plan de las próximas 4 horas y qué debo hacer si no la tengo".[^6][^20][^21][^13]

El JTBD distingue tres tipos de componentes en cada trabajo:[^22][^3]
- **Job funcional:** la tarea concreta que el rol debe completar (e.g., reasignar camiones ante una falla imprevista).
- **Job contextual:** las circunstancias específicas en que ese trabajo ocurre (turno nocturno, zona de baja ley, presión de cumplimiento del plan mensual).
- **Criterios de éxito:** los indicadores que le dicen al rol que completó su trabajo correctamente.

En el DBF, la unidad de análisis primaria no es el dashboard ni el KPI — es el **Job**. Cada caja de decisión documenta, antes de cualquier diseño de visualización, el trabajo que el rol necesita completar.

### 3. Decision Rights: Quién Decide, Ejecuta y Escala

Los frameworks de derechos de decisión — RACI, RAPID y DACI — resuelven la pregunta de ownership en contextos de múltiples actores interdependientes. En un IROC, esta pregunta es especialmente crítica: cuando hay congestión en el acarreo, ¿quién tiene autoridad para cambiar el destino de los camiones? ¿El controlador del IROC, el supervisor de turno en pista, o el superintendent de mina?[^5][^9]

La distinción operativa entre los tres frameworks es:[^9][^5]
- **RACI** (Responsible, Accountable, Consulted, Informed): para definir ownership sobre entregables y tareas repetitivas.
- **DACI** (Driver, Approver, Contributors, Informed): para decisiones dentro de un proyecto con un aprobador claro.
- **RAPID** (Recommend, Agree, Perform, Input, Decide): para decisiones complejas con múltiples stakeholders con poder de veto real, como decisiones de paro de planta o cambio de plan semanal.

En el contexto del DBF, cada caja de decisión incorpora una micro-matriz de derechos que responde: ¿quién puede actuar directamente?, ¿quién debe ser consultado?, ¿cuándo y a quién se escala?, ¿quién debe ser informado del resultado?[^23]

### 4. Management Operating System y Short Interval Control

Un Management Operating System (MOS) es la estructura de cadencias — reuniones, reportes, revisiones — que conecta la ejecución diaria con los objetivos tácticos y estratégicos. No es un software: es el sistema nervioso de gobierno operacional de la organización.[^11][^12]

El Short Interval Control (SIC) es el componente del MOS que opera en el nivel de turno, dividiendo el shift en intervalos de 2-4 horas con revisiones estructuradas. El Global Mining Guidelines Group (GMG) publicó la guía formal de implementación de SIC para minería, que describe un modelo conceptual con tres componentes: plan de intervalo, monitoreo de progreso y revisión de desvíos con acción correctiva. Implementaciones documentadas reportan mejoras de productividad de 10-20% post-implementación de SIC.[^10][^12][^24][^25]

La conexión entre SIC y reportabilidad es directa: el SIC no funciona sin información operacional en tiempo real, pero la información en tiempo real no genera valor sin el ciclo estructurado de revisión que provee el SIC. El DBF diseña las cajas de decisión de los Niveles N1 y N2 explícitamente alineadas con la cadencia del SIC.[^26][^10]

### 5. Levels of Work: Granularidad Correcta para el Nivel Correcto

La Stratified Systems Theory establece que distintos niveles de trabajo requieren distintos horizontes temporales, distintas complejidades de decisión y distintas granularidades de información. No es que el Gerente de Operaciones necesite "menos datos" que el supervisor de turno — necesita datos de una granularidad diferente, con un horizonte diferente y asociados a decisiones de naturaleza diferente.[^14][^15]

En el DBF, cada caja de decisión pertenece a un nivel de trabajo que determina a priori: la granularidad mínima de datos aceptable, el horizonte temporal del indicador, la frecuencia de actualización requerida y el tipo de acción que la información debe activar.

### 6. Decision Intelligence: El Marco Integrador

Decision Intelligence (DI) es el enfoque que integra ciencia de datos, teoría de decisiones y ciencias del comportamiento para convertir datos en decisiones accionables — no en reportes descriptivos. La DI distingue tres tipos de analítica: descriptiva ("¿qué pasó?"), predictiva ("¿qué pasará?") y prescriptiva ("¿qué debería hacer?"). Un sistema de reportabilidad maduro para IROC debe aspirar a proveer los tres tipos, con cada capa asociada a un nivel de trabajo distinto.[^27][^28][^29]

La regla de oro de diseño de dashboards orientados a la decisión es: **si la información no activa una acción, no pertenece al dashboard**. Esta regla, aparentemente simple, elimina hasta el 60% del contenido de los dashboards típicos en operaciones mineras y es el punto de partida del DBF.[^30][^31][^32]

***

## El IROC Minero: Contexto de Aplicación

Un IROC (Integrated Remote Operations Center) es una instalación centralizada que utiliza tecnologías digitales avanzadas para monitorear, coordinar y optimizar operaciones mineras en tiempo real o casi real. Representa la evolución desde el control supervisorio tradicional hacia un hub operacional integrado con capacidades de decisión inter-funcional.[^33][^1]

McKinsey identificó que el principal diferenciador entre IROCs exitosos y fallidos no es tecnológico, sino organizacional. Los fracasos más documentados comparten un patrón: el IROC fue construido como una "sala de pantallas" que visualiza datos, pero nunca fue diseñado con autoridad de decisión clara ni con cadencias de control definidas. El resultado: un IROC que "nadie usa" porque no tiene un rol articulado en el flujo de decisiones de la operación.[^2]

Los cinco factores de éxito que McKinsey identificó en IROCs de alto desempeño son:[^2]
1. Caso de negocio claro con valor cuantificado (no solo "digitalización").
2. Integración organizacional: el IROC tiene autoridad de decisión definida, no solo rol consultivo.
3. Rediseño del operating model: nuevas cadencias, nuevos roles, nuevos protocolos.
4. Talento y cultura: atracción de perfiles analíticos con comprensión operacional minera.
5. Tecnología como habilitador: integración de sistemas fuente en una única fuente de verdad (SSOT).

ABB identifica que muchas cosas deben ocurrir en el plano de procesos y personas antes de decidir qué tecnologías asociar al IROC. El DBF es precisamente el proceso estructurado para hacer ese trabajo previo de manera rigurosa.[^34]

***

## Definición Formal: Decision Box Framework (DBF)

### Qué es una Caja de Decisión

Una **Caja de Decisión Operacional** (Decision Box) es la unidad fundamental del sistema de reportabilidad diseñado mediante el DBF. Se define como:

> *Un artefacto metodológico que documenta, para un rol operacional específico en un nivel de trabajo definido, el conjunto mínimo y suficiente de información necesaria para tomar una decisión específica o ejecutar una acción específica, incluyendo el contexto en que esa decisión ocurre, los criterios de éxito, los derechos de acción y el mecanismo de escalamiento.*

Una caja de decisión **no es** un dashboard, ni un reporte, ni un KPI. Es el plano desde el cual se diseñan esos artefactos. Primero se define la caja; luego se diseña la visualización.

### Los Siete Atributos de una Caja

Toda caja de decisión se define por siete atributos:

| # | Atributo | Pregunta que responde | Ejemplo |
|---|----------|----------------------|---------|
| 1 | **Rol** | ¿Para quién? | Controlador IROC |
| 2 | **Job funcional (JTBD)** | ¿Qué trabajo necesita completar? | Detectar congestión en circuito de acarreo y corregirla antes de impactar chancador |
| 3 | **Nivel de trabajo (LoW)** | ¿Con qué horizonte temporal y granularidad? | N2 — Control de turno, intervalo 2h |
| 4 | **Información mínima suficiente** | ¿Qué necesita ver exactamente? | Tonelaje actual vs. proyectado, cola de espera en chancador, equipos en standby disponibles |
| 5 | **Trigger de acción** | ¿Qué condición activa la decisión? | Cola de espera > 3 camiones por más de 20 min O ritmo proyectado < 85% del plan |
| 6 | **Acción posible** | ¿Qué puede hacer con esa información? | Reasignar camiones, activar equipo de backup, alertar supervisor, escalar a superintendent |
| 7 | **Decision rights** | ¿Quién decide, ejecuta, escala, informa? | Decide: Controlador; Escala a: Supervisor turno; Informa a: Jefe de turno |

### Principios de Diseño del DBF

**P1 — Accionabilidad antes que visibilidad:** La información que no activa una decisión o acción no pertenece a ninguna caja. Si un KPI no tiene un umbral definido y una acción asociada a ese umbral, es ruido informacional.[^32][^30]

**P2 — Mínimo suficiente, no máximo posible:** Cada caja contiene la información mínima necesaria para tomar la decisión. La sobre-información genera carga cognitiva que reduce la calidad y velocidad de la decisión. Un dashboard eficaz limita los elementos visibles simultáneamente — el límite recomendado es 5-7 métricas primarias por pantalla.[^31][^35]

**P3 — Granularidad correcta por nivel:** La caja de un Controlador IROC (N2) muestra datos de intervalo de 2 horas. La caja del Superintendent (N4) muestra acumulados semanales. Mezclar granularidades en la misma caja destruye el foco decisional.

**P4 — Separación rol-persona:** La caja es del rol, no de la persona. Cuando cambia el titular del rol, la caja permanece. Este principio garantiza la trascendencia del sistema ante rotaciones de personal.[^23]

**P5 — Trazabilidad entre cajas:** Las cajas de distintos niveles están conectadas. La información que activa una escalada del N2 al N3 define el input de la caja del N3. El sistema de reportabilidad es un grafo de cajas conectadas, no una colección de dashboards independientes.

**P6 — Semántica compartida:** Los términos usados en cada caja (ley cabeza, tonelaje seco, disponibilidad mecánica) se definen en el Data Dictionary único. Una misma variable no puede aparecer con definiciones distintas en dos cajas distintas.

**P7 — Cajas diseñadas junto a los usuarios, no para ellos:** El proceso de discovery que produce las cajas incluye observación y co-diseño con los titulares reales de cada rol. Las cajas no son documentadas por analistas de datos ni por áreas de TI — son validadas operacionalmente por quienes las usan.[^17][^30]

***

## Proceso Metodológico: Discovery & Definition en 8 Semanas

### Visión general del proceso

```
Semana 1-2: Entendimiento del contexto
    └── Kick-off, mapeo de stakeholders, inventario de sistemas

Semana 3-4: Elicitación de Jobs y Decisiones
    └── Entrevistas, job shadowing, análisis de incidentes

Semana 5: Síntesis y modelado
    └── Mapa de decisiones, árbol de escalamiento, brechas de información

Semana 6: Co-diseño de cajas
    └── Talleres por nivel de trabajo, validación de atributos

Semana 7: Validación cruzada
    └── Coherencia entre cajas, RACI operacional, Data Dictionary inicial

Semana 8: Cierre y entregables
    └── Backlog priorizado, propuesta de arquitectura, roadmap
```

### Semana 1-2: Entendimiento del Contexto Operacional

**Objetivo:** Comprender la operación, sus sistemas, sus procesos y su situación actual de reportabilidad.

Actividades:
- Kick-off con liderazgo: definir alcance de la cadena de valor incluida en el scope del IROC.
- Inventario de sistemas fuente: FMS, PI System, SCADA, CMMS, ERP, MES. Para cada sistema: qué datos produce, a qué frecuencia, en qué formato, quiénes lo acceden actualmente.
- Inventario de reportes actuales: recopilar todos los reportes, dashboards y documentos de turno existentes. Categorizar por frecuencia (turno, diario, semanal, mensual) y por consumidor.
- Análisis AS-IS de la cadencia operacional: ¿cuáles son las reuniones actuales? ¿Qué información se lleva a cada reunión? ¿Cómo se produce esa información?
- Mapeo del organigrama operacional y los roles clave del IROC proyectado.

Entregables: Inventario de sistemas y datos, inventario de reportes actuales, mapa de roles operacionales, agenda de entrevistas.

### Semana 3-4: Elicitación de Jobs y Decisiones

**Objetivo:** Descubrir el trabajo real que cada rol necesita completar, las decisiones críticas y los dolores informativos actuales.

Actividades:
- **Entrevistas estructuradas por rol** (60-90 min por entrevistado): usar el formato JTBD para extraer jobs, contextos, fricciones y criterios de éxito. Preguntas clave:
  - "Descríbeme tu turno ideal. ¿Qué necesitas saber en los primeros 15 minutos?"
  - "¿Cuándo fue la última vez que tomaste una mala decisión por falta de información? ¿Qué información te faltó?"
  - "¿Qué reportes recibes actualmente que no lees? ¿Por qué?"
  - "¿Cuándo y cómo decides escalar un problema? ¿Qué información necesitas para tomar esa decisión de escalada?"
- **Job shadowing:** observación silenciosa durante un turno completo, tomando nota de cada momento en que el operador busca información, y cuánto tiempo tarda en encontrarla.
- **Análisis de incidentes operacionales:** revisar los últimos 6-12 meses de informes de desvío, paros no programados y miss de producción. Para cada uno: ¿la información estaba disponible? ¿llegó a tiempo? ¿llegó al rol correcto?
- **Taller de mapeo de decisiones críticas:** sesión grupal (1.5h) por nivel de trabajo donde los participantes identifican las 5-7 decisiones más críticas que toman en su horizonte temporal.

Entregables: Inventario de Jobs por rol, mapa de decisiones críticas por nivel, catálogo de fricciones informacionales, análisis de incidentes con causa raíz informacional.

### Semana 5: Síntesis y Modelado

**Objetivo:** Convertir los hallazgos de la elicitación en un modelo estructurado de decisiones, flujos de información y brechas.

Actividades:
- **Mapa de decisiones:** visualización del árbol de decisiones operacionales de la operación, desde tiempo real hasta táctica de sitio, con los nodos de escalamiento entre niveles.
- **Análisis de brechas de información:** para cada decisión crítica identificada, comparar la información que el rol necesita (Job) con la información actualmente disponible. Clasificar la brecha: disponibilidad / relevancia / accionabilidad.
- **Matriz de dependencias información-decisión:** tabla que conecta cada decisión con su fuente de datos, la latencia aceptable, el formato requerido y el rol que la consume.
- **Árbol de escalamiento operacional:** desde N1 (tiempo real) hasta N4 (táctico), documentando en qué condición cada caja escala al nivel superior y quién tiene autoridad para decidir en cada nivel.

Entregables: Mapa de decisiones, análisis de brechas, árbol de escalamiento, matriz de dependencias.

### Semana 6: Co-diseño de Cajas de Decisión

**Objetivo:** Documentar las cajas de decisión en talleres colaborativos con los titulares de cada rol.

Actividades:
- Talleres de co-diseño por nivel de trabajo (2-3 horas por nivel). Participantes: titulares del rol, observadores funcionales, facilitador metodológico.
- Formato de taller: presentar los hallazgos de la elicitación → validar el Job principal → acordar información mínima suficiente → definir triggers de acción → definir decision rights (micro-RACI/DACI).
- Para cada caja: completar la plantilla estándar (ver sección "Plantilla de Documentación").
- Priorización de cajas por valor operacional: las cajas que bloquean mayor valor (decisiones críticas con mayor brecha) se priorizan en el backlog.

Entregables: Set de cajas documentadas por nivel de trabajo, priorizadas por valor operacional.

### Semana 7: Validación Cruzada y Gobierno

**Objetivo:** Asegurar coherencia semántica, trazabilidad entre niveles y ausencia de duplicidades.

Actividades:
- **Validación cruzada de cajas:** revisar que las cajas de distintos niveles usen los mismos nombres de variables y las mismas definiciones. Construir el borrador del Data Dictionary.
- **Test de trazabilidad vertical:** para cada KMI del nivel N5, trazar hacia abajo el árbol de drivers hasta encontrar la caja de N1 o N2 que alimenta ese indicador. Si hay ruptura en la trazabilidad, documentar la brecha.
- **Test de no duplicidad:** identificar si dos cajas de dos roles distintos contienen la misma información. Si es así: ¿deben? ¿Con la misma granularidad o con distintas? ¿Están coordinadas en su definición?
- **Definición de la cadencia MOS:** para cada nivel de trabajo, documentar la reunión del MOS en que se consume la información de las cajas, quién la lidera, qué decisiones toma y qué sigue a la reunión.
- **Asignación formal de Data Owners:** para cada variable crítica, asignar el rol funcional responsable de su calidad y oportunidad.

Entregables: Data Dictionary v1.0, test de trazabilidad, cadencia MOS documentada, matriz de Data Owners.

### Semana 8: Cierre, Backlog y Propuesta de Arquitectura

**Objetivo:** Convertir los hallazgos en un backlog priorizado de iniciativas y una propuesta de arquitectura técnica de alto nivel.

Actividades:
- **Backlog de iniciativas:** cada brecha identificada se convierte en una historia de usuario o iniciativa. Se priorizan por valor operacional × esfuerzo de implementación.
- **Propuesta de arquitectura conceptual:** basada en los sistemas fuente inventariados y las cajas documentadas, proponer la arquitectura de integración de datos necesaria para habilitar las cajas de mayor prioridad.
- **Presentación ejecutiva:** resumen de hallazgos, cajas de mayor valor, roadmap de implementación en 3 fases (corto, mediano, largo plazo).
- **Acuerdo de governance:** documento que formaliza roles de Data Owner, Data Steward, cadencias de revisión y proceso de actualización del sistema de cajas.

Entregables: Backlog priorizado, arquitectura conceptual, roadmap, presentación ejecutiva, acuerdo de governance.

***

## Plantilla: Documentación de una Caja de Decisión

```
╔══════════════════════════════════════════════════════════╗
║           CAJA DE DECISIÓN OPERACIONAL                   ║
╠══════════════════════════════════════════════════════════╣
║ ID Caja:        [DBF-XXX]                                ║
║ Nombre:         [Nombre descriptivo de la caja]          ║
║ Versión:        [Fecha + responsable de actualización]   ║
╠══════════════════════════════════════════════════════════╣
║ ROL:            [Rol operacional, no persona]            ║
║ NIVEL (LoW):    [N1 / N2 / N3 / N4 / N5]                ║
║ HORIZONTE:      [Tiempo real / Turno / Diario / etc.]    ║
╠══════════════════════════════════════════════════════════╣
║ JOB FUNCIONAL (JTBD)                                     ║
║ ¿Qué trabajo necesita completar este rol?                ║
║ [Descripción en formato: "Cuando [situación], necesito   ║
║  [acción] para [resultado esperado]"]                    ║
╠══════════════════════════════════════════════════════════╣
║ INFORMACIÓN MÍNIMA SUFICIENTE                            ║
║ Variables requeridas:                                    ║
║  · Variable 1: [nombre canónico] [unidad] [fuente]       ║
║  · Variable 2: [nombre canónico] [unidad] [fuente]       ║
║  · Variable N: ...                                       ║
║ Granularidad: [por equipo / por sector / por planta]     ║
║ Frecuencia de actualización: [cada X minutos/horas]      ║
╠══════════════════════════════════════════════════════════╣
║ TRIGGERS DE ACCIÓN                                       ║
║ · Trigger 1: [Condición] → [Acción requerida]            ║
║ · Trigger 2: [Condición] → [Acción requerida]            ║
║ · Trigger escalada: [Condición] → [Escalar a: rol]       ║
╠══════════════════════════════════════════════════════════╣
║ DECISION RIGHTS (micro-DACI)                             ║
║ Driver:      [Rol que gestiona el progreso]              ║
║ Approver:    [Rol con autoridad de decisión final]       ║
║ Contributors:[Roles que aportan información/input]       ║
║ Informed:    [Roles que deben ser notificados]           ║
╠══════════════════════════════════════════════════════════╣
║ CONEXIONES CON OTRAS CAJAS                               ║
║ · Alimentada por: [ID Caja origen]                       ║
║ · Alimenta a:     [ID Caja destino]                      ║
║ · Escala a:       [ID Caja de nivel superior]            ║
╠══════════════════════════════════════════════════════════╣
║ CRITERIOS DE ÉXITO                                       ║
║ "Este rol completó su Job cuando..."                     ║
║  · [Criterio funcional 1]                                ║
║  · [Criterio funcional 2]                                ║
╠══════════════════════════════════════════════════════════╣
║ CADENCIA MOS                                             ║
║ Reunión en que se consume:  [Nombre de la reunión]       ║
║ Frecuencia de la reunión:   [Cada turno / diaria / etc.] ║
║ Output de la reunión:       [Decisión/acción esperada]   ║
╚══════════════════════════════════════════════════════════╝
```

***

## Matriz de Roles × Cajas para un IROC Minero

La siguiente tabla describe las cajas primarias por rol y nivel de trabajo para un IROC minero estándar:

| Rol | Nivel (LoW) | Cajas Primarias | Job Funcional Central | Horizonte |
|-----|-------------|-----------------|----------------------|-----------|
| Controlador IROC | N1-N2 | Continuidad mina-planta, Congestión acarreo, Estado de activos tiempo real | Detectar y corregir desviaciones del plan de turno antes de que impacten el circuito completo | Continuo → 2-4h |
| Supervisor turno mina | N2 | Cumplimiento plan turno, Disponibilidad flota, Seguridad turno | Ejecutar el plan de turno asignado, gestionar desvíos en < 1h y hacer handover con información completa | Turno (8-12h) |
| Supervisor planta | N2 | Estabilidad de planta, Alimentación chancado, Rendimiento molienda-flotación | Mantener la estabilidad del proceso dentro de parámetros y activar ajustes antes de perder recuperación | Turno + acumulado diario |
| Mantenimiento | N2-N3 | Disponibilidad equipos críticos, Backlog de trabajo, Eventos de falla | Asegurar disponibilidad mecánica comprometida, priorizar recursos de mantención ante múltiples fallas simultáneas | Turno → semanal |
| Planificación corto plazo | N3 | Reconciliación diaria, Cumplimiento semanal vs. plan, Ore control | Detectar desvíos entre planificado y ejecutado para ajustar la secuencia de las próximas 2 semanas | Diario → semanal |
| Superintendent mina/planta | N3-N4 | Integración mina-planta, Tendencias de performance, Análisis de causas | Identificar tendencias adversas antes de que se conviertan en miss de producción mensual | Diario → mensual |
| Gerente de Operaciones | N4-N5 | Plan vs. real semanal/mensual, Driver trees de costos, Forecast de producción | Tomar decisiones de rebalanceo del plan ante desvíos que comprometen el presupuesto trimestral | Semanal → trimestral |

***

## Ejemplos de Cajas Completas

### Caja 1: Cumplimiento del Plan de Turno

**ID:** DBF-001  
**Rol:** Controlador IROC / Supervisor de turno mina  
**Nivel:** N2 — Control de turno  
**Horizonte:** Revisión cada 2 horas (SIC) + cierre de turno

**Job funcional (JTBD):** *"Cuando estoy a mitad de turno, necesito saber si el ritmo actual de producción me permite cumplir el plan del turno, para decidir si debo reasignar equipos o activar contingencias antes de que sea demasiado tarde."*

**Información mínima suficiente:**
- Tonelaje acumulado del turno hasta ahora (t) vs. tonelaje esperado a esta hora del turno (t). Fuente: FMS/Dispatch.
- Proyección estadística de tonelaje al cierre del turno basada en ritmo actual (t). Calculado: FMS.
- % de cumplimiento proyectado (tonelaje proyectado / tonelaje planificado turno × 100).
- Estado de disponibilidad de camiones: operativos / en mantención / en standby (n camiones). Fuente: FMS/CMMS.
- Match factor actual: ratio cargador/camión en cada frente. Fuente: FMS.
- Eventos abiertos de turno: fallas activas, detenidos por seguridad. Fuente: FMS/registro turno.

**Triggers de acción:**
- Cumplimiento proyectado < 90% → reasignar camiones de frentes secundarios a frente crítico.
- Cumplimiento proyectado < 80% → alertar supervisor turno + activar equipo backup.
- Cumplimiento proyectado < 70% al 75% del turno → escalar a Superintendent mina.
- Match factor < 0.85 por más de 30 min → intervención inmediata en asignación.

**Decision rights (DACI):**
- Driver: Controlador IROC.
- Approver (para reasignación de flota mayor): Supervisor de turno.
- Contributors: Dispatch, operadores de frente (por radio).
- Informed: Superintendent, Jefe de turno.

**Conexiones:** Alimentada por Caja DBF-006 (Estado de activos tiempo real). Escala a Caja DBF-011 (Integración mina-planta). Alimenta al DOR (Daily Operating Report).

**Criterios de éxito:** "El turno cierra con ≥ 90% de cumplimiento del plan. Si no se alcanza, la causa raíz está documentada y la acción correctiva para el turno siguiente está registrada."

**Cadencia MOS:** SIC review cada 2h; reunión de handover al cierre de turno; input al DOR matutino.

***

### Caja 2: Continuidad Mina-Planta

**ID:** DBF-002  
**Rol:** Controlador IROC  
**Nivel:** N2 — Control de turno con visión integrada  
**Horizonte:** Continuo con revisión cada 4h

**Job funcional (JTBD):** *"Durante el turno, necesito detectar cualquier desbalance entre el ritmo de entrega de material de mina y la capacidad de absorción de la planta, para actuar antes de que se genere sobrealimentación que detenga el chancador o subalimentación que baje el rendimiento del molino."*

**Información mínima suficiente:**
- Nivel de stockpile ROM (toneladas): actual vs. mínimo operacional vs. máximo de capacidad. Fuente: topografía/sensores ROM.
- Tph de entrega de camiones al ROM (tph última hora). Fuente: FMS.
- Tph de alimentación al chancador primario (tph última hora). Fuente: PI System/SCADA.
- Nivel de stockpile de finos (stockpile post-chancado). Fuente: sensores/balanza.
- Estado chancador: operando / detenido (y causa si detenido). Fuente: SCADA.
- Tph de alimentación al SAG (tph última hora). Fuente: PI System.

**Triggers de acción:**
- Nivel ROM < 30% de capacidad mínima operacional → alertar a supervisor de turno mina para priorizar entrega.
- Nivel ROM > 95% capacidad → reducir ritmo de entrega (instrucción a dispatch).
- Tph alimentación chancador > 110% capacidad nominal por > 20 min → riesgo de sobrecarga → alertar operador de planta.
- Diferencia tph entrega ROM vs. tph consumo chancador > ± 15% por más de 1h → desbalance sostenido → escalar a supervisor planta.

**Decision rights (DACI):**
- Driver: Controlador IROC.
- Approver: Supervisor de planta (para ajuste de parámetros de chancado).
- Contributors: Dispatch (lado mina), operador de planta (lado proceso).
- Informed: Superintendent mina, Superintendent planta.

**Criterios de éxito:** "El nivel de ROM se mantiene entre 30-85% de capacidad durante todo el turno. No se registran detenciones del chancador por sobre/subalimentación."

***

### Caja 3: Congestión y Acarreo

**ID:** DBF-003  
**Rol:** Controlador IROC / Dispatch  
**Nivel:** N1-N2 — Tiempo real con SIC de turno  
**Horizonte:** Continuo (alertas) + revisión cada 2h

**Job funcional (JTBD):** *"Cuando aparece congestión en el circuito de acarreo, necesito identificar el cuello de botella (frente de carga, ruta, ROM, chancador), cuantificar el impacto en tonelaje perdido y ejecutar la reasignación de equipos en los próximos 10 minutos."*

**Información mínima suficiente:**
- Tiempos de ciclo promedio por ruta (min): actual vs. objetivo. Fuente: FMS.
- Cola de espera en chancador: número de camiones en cola y tiempo promedio de espera. Fuente: FMS.
- Cola de espera en frentes de carga: tiempo promedio de espera en cada excavadora. Fuente: FMS.
- Disponibilidad de rutas: estado de vías (abiertas/cerradas/restricción velocidad). Fuente: FMS.
- Productividad por excavadora: tph en última hora vs. objetivo. Fuente: FMS.
- Camiones en standby disponibles para reasignación. Fuente: FMS.

**Triggers de acción:**
- Cola chancador > 3 camiones × 15 min → reasignar camiones a stockpile alternativo.
- Tiempo de ciclo promedio > 115% del objetivo por 30 min → revisar y ajustar rutas.
- Excavadora con productividad < 70% objetivo → investigar causa (falla vs. falta de camiones).
- Ruta cerrada en ruta crítica → activar ruta alternativa inmediatamente.

**Decision rights:** Driver: Dispatch. Approver (para cambio de destino mayor): Controlador IROC. Informed: Supervisor turno.

***

### Caja 4: Disponibilidad de Equipos Críticos

**ID:** DBF-004  
**Rol:** Supervisor de Mantenimiento IROC / Planner de mantenimiento  
**Nivel:** N2-N3 — Turno + visión diaria-semanal  
**Horizonte:** Turno actual + próximas 24-48h

**Job funcional (JTBD):** *"Durante y al final del turno, necesito conocer el estado real de disponibilidad de la flota crítica (camiones, excavadoras, perforadoras, equipos de planta), el backlog de trabajo de mantención pendiente y los equipos en riesgo de falla en las próximas 24-48h, para priorizar recursos y evitar fallas no programadas que impacten el plan."*

**Información mínima suficiente:**
- Disponibilidad mecánica real por familia de equipo (%) vs. comprometida. Fuente: CMMS/FMS.
- Equipos en mantención activa: equipo, tipo de intervención, hora estimada de retorno. Fuente: CMMS.
- Equipos en riesgo predictivo: alertas de mantenimiento predictivo activas (vibración, temperatura, presión). Fuente: PI System/telemetría OEM.
- Backlog de órdenes de trabajo: OT críticas pendientes (por prioridad). Fuente: CMMS.
- Disponibilidad proyectada para el turno siguiente. Calculado: CMMS.
- Consumo de repuestos críticos vs. stock disponible. Fuente: ERP/almacén.

**Triggers de acción:**
- Disponibilidad mecánica real < 85% (umbral según tipo de operación) → activar plan de contingencia de mantenimiento.
- Alerta predictiva Nivel 3 en equipo crítico → programar ventana de mantenimiento en próximas 8h.
- OT crítica > 24h sin ejecutar → escalar a Superintendent mantenimiento.
- Stock de repuesto crítico en nivel mínimo → activar orden de emergencia a proveedores.

**Decision rights:** Driver: Planner de mantenimiento. Approver: Superintendent de mantenimiento. Contributors: Técnicos de turno, Controlador IROC (para coordinar ventanas). Informed: Superintendent mina/planta.

***

### Caja 5: Estabilidad de Planta

**ID:** DBF-005  
**Rol:** Supervisor de Planta / Operador de sala de control  
**Nivel:** N2 — Turno, revisión continua-SIC  
**Horizonte:** Continuo (parámetros) + acumulado turno

**Job funcional (JTBD):** *"Durante el turno, necesito mantener los parámetros del proceso dentro de rangos que aseguren la máxima recuperación metalúrgica, detectar desviaciones antes de que se traduzcan en pérdida de recuperación y actuar para restablecer la estabilidad sin detener el circuito."*

**Información mínima suficiente:**
- Parámetros SAG: potencia demandada (kW), tph alimentación, P80 descarga, nivel de carga (%). Fuente: SCADA/PI System.
- Parámetros flotación: pH por celda, densidad de pulpa, flujo de aire, nivel de espuma. Fuente: SCADA.
- Ley de cabeza en alimentación a planta (g/t Cu o Au). Fuente: analizador en línea o LIMS.
- Recuperación estimada en tiempo real (% Cu o Au en concentrado). Fuente: analizador de concentrado.
- Consumo de reactivos (g/t): colector, espumante, cal. Fuente: dosificadores instrumentados.
- Estado de equipos críticos de planta: bombas, compresores, espesadores. Fuente: SCADA.

**Triggers de acción:**
- Potencia SAG < 80% o > 105% del punto de operación óptimo → ajuste de alimentación.
- pH flotación fuera de rango ± 0.3 unidades por > 15 min → ajuste de dosificación de cal.
- Recuperación estimada < umbral de alerta (definir según mineral) → investigación inmediata de causa.
- Falla de bomba crítica → activar backup y notificar a supervisor.

**Decision rights:** Driver: Operador sala de control. Approver: Supervisor de planta. Informed: Controlador IROC, Superintendent planta.

***

### Caja 6: Reconciliación Diaria / Semanal

**ID:** DBF-006  
**Rol:** Planificador de corto plazo / Geólogo de producción  
**Nivel:** N3 — Operacional integrado  
**Horizonte:** Cierre diario + revisión semanal

**Job funcional (JTBD):** *"Al cierre del día, necesito comparar el tonelaje y ley real movido contra el modelo geológico planificado, para detectar desvíos de dilución o pérdida de ley, cuantificar el impacto en metal contenido y ajustar la secuencia de minado de los próximos días antes de que el desvío se acumule."*

**Información mínima suficiente:**
- Tonelaje movido real por sector/blast block vs. planificado. Fuente: FMS + topografía.
- Ley media real cabeza vs. ley estimada del modelo de bloques. Fuente: LIMS (muestras composite) + modelo geológico.
- F1 del día: Producción real mina / Modelo de reservas para bloques minados.
- F2 del día: Alimentación a planta / Producción real mina.
- Metal contenido real vs. planificado (t Cu o kg Au). Calculado.
- Varianza acumulada semanal: tonelaje, ley y metal contenido.

**Triggers de acción:**
- F1 < 0.95 → investigar dilución no controlada o sobreestimación de modelo → ajuste de ore control.
- Ley real < 92% de ley planificada por 3 días consecutivos → revisar modelo de bloques en esa área.
- Metal contenido acumulado semana < 90% de plan → escalar a Superintendent + reunión táctica de rebalanceo.
- F2 < 0.97 → revisar proceso de pesaje o pérdidas en stockpile ROM.

**Decision rights (RAPID):** Recommend: Geólogo de producción. Agree: Jefe de Planificación. Perform: Supervisor turno (ajuste secuencia). Input: Geólogo de mina. Decide: Superintendent mina.

**Cadencia MOS:** Input al DOR diario; revisión semanal en reunión de planificación corto plazo; insumo al reporte mensual de reconciliación.

***

## Matriz Completa: Roles IROC × Cajas × Cadencia MOS

| Rol | Cajas Primarias (ID) | Reunión MOS | Frecuencia | Output de la Reunión |
|-----|---------------------|-------------|------------|---------------------|
| Controlador IROC | DBF-001, 002, 003 | SIC Review + Handover | Cada 2-4h + fin turno | Reasignación de flota, ajustes de despacho, escaladas |
| Supervisor turno mina | DBF-001, 004 | Reunión de turno | Inicio y fin de turno | Plan de turno actualizado, incidentes documentados |
| Supervisor planta | DBF-002, 005 | Revisión de proceso | Continua + fin turno | Ajustes de parámetros, alertas de estabilidad |
| Mantenimiento | DBF-004 | Reunión de mantenimiento | Diaria | Priorización de OT, disponibilidad proyectada |
| Planificación CP | DBF-006 | Daily Operating Review | Diaria (07:00) | DOR con F1/F2, ajuste de secuencia semanal |
| Superintendent mina/planta | DBF-001, 002, 006 | Reunión diaria de producción | Diaria | Decisiones tácticas de corto plazo, escaladas estratégicas |
| Gerente Operaciones | DBF-006 + agregados N4 | Reunión táctica semanal | Semanal | Rebalanceo de plan, decisiones de presupuesto, reporte a corporativo |

***

## Backlog Tipo: Iniciativas Resultantes del DBF Discovery

El proceso de Discovery produce las siguientes categorías de iniciativas, priorizadas por valor operacional y complejidad de implementación:[^36]

### Prioridad Alta — Quick Wins (0-3 meses)

| ID | Iniciativa | Caja asociada | Valor operacional |
|----|-----------|---------------|------------------|
| B-01 | Integrar FMS con dashboard de cumplimiento de turno en tiempo real (SIC digital) | DBF-001 | Reducción de miss de turno por intervención tardía |
| B-02 | Panel de balance ROM en tiempo real (nivel stockpile + tph delivery vs. consumo) | DBF-002 | Eliminación de paros por sobrealimentación |
| B-03 | Alert automático de cola de espera > umbral en chancador | DBF-003 | Reducción de tiempo perdido por congestión |
| B-04 | Dashboard de disponibilidad mecánica con alertas predictivas | DBF-004 | Mejora de disponibilidad por intervención preventiva |

### Prioridad Media — Habilitadores Core (3-9 meses)

| ID | Iniciativa | Caja asociada | Valor operacional |
|----|-----------|---------------|------------------|
| B-05 | Integración CMMS → IROC dashboard (estado OT + disponibilidad proyectada) | DBF-004 | Reducción de fallas no programadas |
| B-06 | Cálculo automático F1/F2 diario con LIMS + FMS + topografía | DBF-006 | Reconciliación temprana y ajuste de ore control |
| B-07 | Analizador en línea integrado a caja de estabilidad de planta | DBF-005 | Mejora de recuperación metalúrgica por acción temprana |
| B-08 | DOR automatizado: consolidación de turnos en reporte diario estructurado | DBF-001 a 006 | Eliminación de horas-hombre en preparación de reportes |

### Prioridad Estructural — Arquitectura de Largo Plazo (9-24 meses)

| ID | Iniciativa | Valor estratégico |
|----|-----------|-----------------|
| B-09 | Data Dictionary centralizado con Data Owners asignados | Consistencia semántica y trazabilidad |
| B-10 | Bus de integración operacional: PI System + FMS + CMMS → Data Warehouse | Single Source of Truth para todas las cajas |
| B-11 | Value Driver Trees automatizados desde AISC hasta señales de proceso | Trazabilidad N5 → N1 |
| B-12 | MOS digital: cadencias de reuniones integradas con cajas de decisión y trazabilidad de acciones | Cierre del loop decisión-acción-resultado |

***

## Presentación Comercial: Lenguaje para Propuesta Técnica

Las siguientes formulaciones están diseñadas para comunicar el valor del DBF en el contexto de una propuesta técnica a operaciones mineras:

**Sobre el problema que resuelve:**
> *"La mayoría de las operaciones mineras ya tienen datos. El problema no es la cantidad de información disponible — es que esa información no llega en el formato correcto, al rol correcto, en el momento correcto y con la claridad suficiente para activar una acción. El resultado es una operación que toma decisiones tardías basadas en información fragmentada, y equipos que invierten tiempo buscando datos en lugar de actuando sobre ellos."*

**Sobre el enfoque metodológico:**
> *"Antes de diseñar un solo dashboard, esta metodología responde tres preguntas por cada rol crítico de la operación: ¿qué decisiones tiene que tomar? ¿Qué información necesita exactamente para tomarlas? ¿En qué condición debe actuar y a quién debe escalar? El sistema de reportabilidad es la respuesta a esas preguntas — no al revés."*

**Sobre el valor de la etapa Discovery:**
> *"Una etapa de Discovery bien ejecutada es la diferencia entre un sistema de reportabilidad que la operación usa y uno que termina siendo una sala de pantallas ignorada. McKinsey documentó que el principal factor de fracaso en IROCs no es técnico — es la falta de claridad sobre qué decisiones debe tomar el IROC y con qué autoridad. El Discovery resuelve exactamente ese problema."*[^2]

**Sobre la durabilidad del sistema:**
> *"El sistema que diseñamos no depende de personas específicas, de un organigrama en particular, ni de las herramientas tecnológicas vigentes hoy. Está construido sobre procesos de negocio, niveles de decisión y flujo de valor operacional. Cuando roten los superintendentes, cuando cambien los sistemas, el framework de cajas de decisión permanece y guía el rediseño."*

**Sobre el Short Interval Control:**
> *"El SIC es hoy el mecanismo de control operacional más validado en minería. Implementaciones documentadas reportan mejoras de productividad de 10-20% al cerrar el loop de decisión dentro del turno. Nuestras cajas de decisión de N1-N2 están diseñadas explícitamente para habilitar este ciclo: plan → monitoreo → desvío → acción → ajuste."*[^12][^24]

**Sobre la propuesta de valor diferencial:**
> *"No proponemos más dashboards. Proponemos un sistema donde cada visualización tiene un dueño, un propósito decisional específico, un trigger de acción definido y un mecanismo de escalamiento. La diferencia entre un dashboard y una caja de decisión es la diferencia entre mostrar datos y producir decisiones."*

***

## Bibliografía y Fuentes de Referencia

### Frameworks Metodológicos

- **Jobs To Be Done (JTBD):** Clayton Christensen, *Competing Against Luck* (2016). Christensen Institute: [christenseninstitute.org/theory/jobs-to-be-done/]. Tony Ulwick, Outcome-Driven Innovation: [jobs-to-be-done.com]. Nielsen Norman Group, *Personas vs. Jobs-to-be-Done* (2017).[^21][^13][^22]
- **Needs Assessment:** R. Watkins, *A Guide to Assessing Needs* (World Bank, 2012). SafetyCulture: *Needs Assessment: Importance and Process*. Prosci: *Needs Assessments: Definition, Guide and Best Practices*.[^8][^37][^16]
- **Decision Rights (RACI/RAPID/DACI):** Asana: *RAPID Decision Making Framework*. Quire.io: *RACI, DACI, RAPID: Which Ownership Framework Fits Your Team*. DecTrack: *Decision Models Compared: RACI, DACI, RAPID*.[^7][^5][^9]
- **Stratified Systems Theory / Levels of Work:** Ninety.io: *How the Stratified Systems Theory Works*. Synchronous Solutions: *Requisite Organization vs. Stratified Systems Theory*.[^15][^14]

### Mining Operations y IROC

- **McKinsey & Company:** *Remote Operating Centers in Mining: Unlocking Their Full Potential* (2020).[^2]
- **ABB Ability OMS:** *Digitalizing Short Interval Control & Production Scheduling* (2026). *10 Lessons from 10 Years of Remote Operations Centers* (2026).[^10][^34]
- **Shimaponda-Nawa et al. (2024):** *Integrated and Intelligent Remote Operation Centres (I2ROCs)*, ScienceDirect.[^33]
- **Global Mining Guidelines Group (GMG):** *Guideline for Implementing Short Interval Control in Underground Mining Operations* (2019).[^24][^25]
- **Commit Works:** *Short Interval Control — Driving Operational Excellence* (2024).[^12]
- **Groundhog Apps:** *Empowering Mining Operations with Short Interval Control* (2024).[^26]
- **Micromine Pitram:** *Could Short Interval Control Be the Key to Increase Operational Efficiency?* (2025).[^38]
- **Connected Mine:** *A Simple Guide to Building Integrated Data Dashboards for Mining Operations* (2026).[^36]

### Dashboard Design y Decision Intelligence

- **Smashing Magazine:** *From Data to Decisions: UX Strategies for Real-Time Dashboards* (2025).[^31]
- **Notitia:** *Business Intelligence Dashboard Examples — Design-Led* (2025).[^30]
- **AWS:** *What is Operational Intelligence?* (2026).[^39]
- **Lingarogroup:** *Decision Intelligence: The New Era of Data-Driven Decision-Making*.[^27]
- **Information Requirements Analysis (IRA):** theintactone.com (2025). B.C.A. Study Guide. Wikipedia, *Requirements Analysis*.[^40][^18][^19]

---

## References

1. [Transforming Mining through Remote & Agentic Intelligence](https://www.linkedin.com/pulse/integrated-remote-operation-centres-irocs-mining-through-guerin-ozqmc) - An IROC is a centralized facility that leverages advanced digital technologies to monitor, control, ...

2. [Remote operating centers in mining: Unlocking their full ...](https://www.mckinsey.com/industries/metals-and-mining/our-insights/remote-operating-centers-in-mining-unlocking-their-full-potential) - Mining companies are reimagining their operating models to provide more productive and enjoyable rem...

3. [Jobs To Be Done Framework Explained with Real Product Examples](https://www.productleadership.com/blog/jobs-to-be-done-framework-explained/) - Jobs To Be Done explains customer decisions through progress and context. The framework strengthens ...

4. [Needs Assessments](https://innovativeresearchinsights.com/consulting-services/needs-assessments/) - A needs assessment is a systematic process used to determine and address the needs, or “gaps” betwee...

5. [Decision Models Compared: RACI, DACI, RAPID & More - DecTrack](https://dectrack.com/en/blog/decision-models-raci-daci-rapid) - Plain English: RACI brings operational clarity, DACI brings momentum, RAPID brings structure to comp...

6. [How to use the jobs to be done (JTBD) framework to identify outcomes](https://contentsquare.com/blog/jobs-to-be-done/) - The jobs to be done (JTBD) framework helps product teams discover what people are trying to accompli...

7. [RAPID decision making framework: roles, steps & tips - Asana](https://asana.com/resources/rapid-decision-making) - RAPID is an acronym for assigning decision-making roles: Recommend, Agree, Perform, Input, and Decid...

8. [Needs Assessment: Importance and Process](https://safetyculture.com/topics/needs-assessment) - The assessment phase helps identify the gaps or needs within an organization. Various methods and to...

9. [RACI, DACI, RAPID: Which Ownership Framework Fits Your Team](https://quire.io/blog/p/raci-daci-rapid-ownership-frameworks.html) - TL;DR: RACI is for work. DACI is for decisions inside a project. RAPID is for the rare cross-organiz...

10. [Digitalizing short interval control & production scheduling ...](https://new.abb.com/mining/digital-applications/operations-management-system-oms-for-mining/digitalization-of-short-interval-control-(sic)-and-production-scheduling-in-mining) - Short Interval Control allows mine operators to monitor and review operational plans and performance...

11. [The Power of Short Interval Control: Transforming Mining ...](https://www.linkedin.com/pulse/power-short-interval-control-transforming-mining-hour-shedd-mba-bs-puxqe) - Implementing Short Interval Control shifts mining from a reactive to a proactive culture. By empower...

12. [Short Interval Control - Driving Operational Excellence](https://commit.works/short-interval-control-in-mining-driving-operational-excellence/) - In mining, SIC involves breaking down shift activities into shorter time intervals, typically 2-4 ho...

13. [Jobs to Be Done Theory - Clayton Christensen Institute](https://www.christenseninstitute.org/theory/jobs-to-be-done/) - Definition. Jobs to Be Done is a lens that reveals the circumstances—or forces—that drive people and...

14. [How the Stratified Systems Theory Works - Ninety.io](https://www.ninety.io/founders-framework/articles/the-stratified-systems-theory-sst-and-time-span-of-discretion-framework) - Stratified Systems Theory (or SST) is a framework for designing organizational hierarchies and roles...

15. [What's the Difference Between Requisite Organization and Stratified ...](https://synchronoussolutions.com/whats-the-difference-between-requisite-organization-and-stratified-systems-theory/) - SST is essentially a scientific model of how organizations and human work levels function. Requisite...

16. [Needs Assessments: Definition, Guide and Best Practices](https://www.prosci.com/blog/needs-assessment) - A needs assessment is a structured process for identifying and addressing gaps between current perfo...

17. [Needs Analysis Methodologies](https://www.linkedin.com/top-content/training-development/training-needs-assessment-methods/needs-analysis-methodologies/) - Needs analysis methodologies are structured approaches used to identify and understand the requireme...

18. [Unit-2: Information Requirement Analysis - B.C.A study](https://bcastudyguide.com/unit-2-information-requirement-analysis/) - Information Requirements Analysis is the process of determining the data and information needs of an...

19. [Requirements analysis - Wikipedia](https://en.wikipedia.org/wiki/Requirements_analysis) - Requirements analysis focuses on the tasks that determine the needs or conditions to meet the new or...

20. [Jobs to Be Done: Definition, Examples, and Framework for Your ...](https://www.coursera.org/articles/jobs-to-be-done) - Jobs to be done (JTBD) refers to a business theory, framework, and perspective on why customers buy ...

21. [Personas vs. Jobs-to-Be-Done - NN/G](https://www.nngroup.com/articles/personas-jobs-be-done/) - The Jobs-to-Be-Done framework is a representations of user needs born out of qualitative user resear...

22. [Jobs-to-be-Done: A Framework for Customer Needs | by Tony Ulwick](https://jobs-to-be-done.com/jobs-to-be-done-a-framework-for-customer-needs-c883cbf61c90) - Put Jobs-to-be-Done Theory (JTBD) into practice with Outcome-Driven Innovation (ODI). Access framewo...

23. [RACI Matrix - Umbrex](https://umbrex.com/resources/frameworks/strategy-frameworks/raci-matrix/) - RACI stands for Responsible, Accountable, Consulted, and Informed. It maps each deliverable or decis...

24. [Publication: Guideline for Implementing Short Interval ...](https://gmggroup.org/publication-guideline-implementing-short-interval-control-underground-mining-operations/) - The Global Mining Guidelines Group (GMG) has published the Guideline for Implementing Short Interval...

25. [Short interval control guidelines published](https://www.amsj.com.au/short-interval-control-guidelines-published/) - This new Global Mining Guidelines Group guideline provides a roadmap to increase the speed and likel...

26. [Empowering Mining Operations with Short Interval Control](https://groundhogapps.com/short-interval-control/) - Short Interval Control (or SIC) is a framework of structured processes that help you identify and ac...

27. [Decision Intelligence: The New Era of Data-Driven ...](https://lingarogroup.com/blog/decision-intelligence-the-new-era-of-data-driven-decision-making) - Decision intelligence is about leveraging data on how decisions are made to continue improving the d...

28. [Decision Intelligence: Benefits & Components 2026](https://improvado.io/blog/what-is-decision-intelligence) - Decision intelligence (DI) is a modern analytical approach that combines various elements of data pr...

29. [Decision Intelligence: What is it and Why](https://conversight.ai/blog/what-is-decision-intelligence-and-why-decision-intelligence-matter-now/) - Decision Intelligence (DI) helps organizations leverage data, technology, and human expertise to mak...

30. [Business Intelligence Dashboard Examples | Design-Led - Notitia](https://www.notitia.com.au/post/business-intelligence-dashboard) - See business intelligence dashboard examples, design best practices, and how to build dashboards peo...

31. [From Data To Decisions: UX Strategies For Real-Time Dashboards](https://www.smashingmagazine.com/2025/09/ux-strategies-real-time-dashboards/) - Personalization options such as custom metric selection, alert preferences, and update pacing help m...

32. [Mine Safety Dashboard: Essential KPIs and Metrics for Risk ...](https://www.linkedin.com/posts/sudam-behera-14759727_mines-safety-dashboard-1-define-the-purpose-activity-7418508806688645120-8vTf) - Mines Safety Dashboard 1️⃣ Define the Purpose of the Safety Dashboard Mine Head / Ops Head Trend ana...

33. [Integrated and intelligent remote operation centres (I2ROCs)](https://www.sciencedirect.com/science/article/pii/S0892687523005794) - por M Shimaponda-Nawa · 2024 · Mencionado por 44 — In this work, we focus on the role that integrate...

34. [10 Lessons from 10 Years of Remote Operations Centers](https://new.abb.com/industrial-software/connected-workforce/10-lessons-from-10-years-of-remote-operations-centers) - Many things need to happen first on the processes and people side, before deciding on the technologi...

35. [Dashboard Design for Timely Responses | PDF | Usability - Scribd](https://www.scribd.com/document/864491019/Unit-5-DEV) - Reduce Cognitive Load: Limit dashboard content to only what's essential;. don't overwhelm users with...

36. [A Simple Guide to Building Integrated Data Dashboards for Mining ...](https://connectedmine.com.au/content-hub/a-simple-guide-to-building-integrated-data-dashboards-for-mining-operations) - Begin by pinpointing the critical data required for informed decision-making. This step involves com...

37. [A Guide to Assessing Needs - Documents & Reports](https://documents1.worldbank.org/curated/en/644051468148177268/pdf/663920PUB0EPI00essing09780821388686.pdf) - por R Watkins · Mencionado por 401 — A Guide to Assessing Needs. Analyze. The analysis process links...

38. [Could Short Interval Control Be the Key to Increase Operational ...](https://www.micromine.com/pitram-short-interval-control/) - By integrating and reporting this data in real-time, SIC enables mining companies to make informed d...

39. [What is Operational Intelligence (OI)?](https://aws.amazon.com/what-is/operational-intelligence/) - Operational intelligence (OI) is the process of collecting and analyzing real-time operations data t...

40. [Information Requirement Analysis - the intact one](https://theintactone.com/2025/09/15/information-requirement-analysis/) - The primary goal of IRA is to understand what information is required, by whom, in what format, and ...

