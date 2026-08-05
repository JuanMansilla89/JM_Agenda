---
fecha: 2026-08-04
tipo: referencia
subtipo: prompt-deep-research
proyecto: CMH
fuente: Preparado por ASTAY para uso en herramienta de Deep Research
url:
tags: [cmh, deep-research, nexo360, mantenimiento360, mineria-subterranea]
---

# Prompt de Deep Research — Minería subterránea: Operaciones y Mantenimiento integrados

**Proyecto:** CMH
**Diferencia frente a los dos prompts anteriores** (`2026-08-03-prompts-deep-research-nexo360-mantenimiento360.md`): aquellos investigan cada bloque **por separado** (Nexo 360 Operation vs. Mantenimiento 360). Este prompt investiga el **punto de encuentro entre ambos procesos** — cómo operaciones y mantenimiento funcionan como un solo sistema en minería subterránea, específicamente el acoplamiento obligatorio que CMH exige: la disponibilidad de Mantenimiento 360 debe alimentar al motor de asignación de Nexo 360 antes de programar cada guardia. Úsalo como tercera investigación, después de las dos anteriores, para no duplicar contenido de proceso ya cubierto en detalle allí.

**Contexto que debe adjuntarse al ejecutar el prompt:** `nexo360-mantenimiento360-requerimientos-ref.md`, `analisis-implicancias-tecnicas-ref.md`, `short-interval-control-ref.md`, y los resultados ya generados de los dos prompts anteriores (una vez ejecutados).

---

## Prompt

```
Actúa como consultor especialista en operaciones mineras subterráneas, con experiencia conjunta en Short Interval Control / OMS (gestión de operación) y CMMS/EAM (gestión de mantenimiento y activos), específicamente en cómo estas dos disciplinas se integran como un solo sistema de gestión en minas subterráneas.

CONTEXTO
Estoy diseñando una plataforma de software para una unidad minera subterránea aurífera en Perú (~360 personas en interior mina, ~80 equipos de flota pesada, ~20 vehículos de apoyo), compuesta por dos módulos obligatorios e integrados:
- Nexo 360 Operation: planificación y control de guardia (planes de turno, maestro de labores/frentes, motor de asignación de cuadrillas y equipos, órdenes de trabajo con SSOMA, seguimiento intraturno, cierre de guardia).
- Mantenimiento 360: disponibilidad dinámica de equipos (operativo, taller, standby, panne, preventivo) y gestión de mantenimiento preventivo/correctivo, backlog de repuestos, integrado con SAP PM/MM.

El requerimiento del cliente es explícito y no negociable: la disponibilidad de equipos de Mantenimiento 360 es un dato MANDATORIO que debe estar disponible y confiable ANTES de que el motor de asignación de Nexo 360 pueda programar la guardia. Esto crea un acoplamiento fuerte desde el primer día entre ambos módulos — no se puede entregar uno de forma aislada del otro, al menos en su función de disponibilidad.

Ya cuento con dos investigaciones separadas y detalladas: una sobre el proceso de planificación/control de guardia (Nexo 360) y otra sobre el proceso de disponibilidad/mantenimiento de flota (Mantenimiento 360), cada una con su propio benchmark de mercado. NO repitas el contenido de esas investigaciones. Este research debe enfocarse exclusivamente en el PUNTO DE ENCUENTRO entre ambos procesos.

OBJETIVO DE LA INVESTIGACIÓN
Entender y "tallar" (detallar paso a paso, con roles, entradas, salidas, tiempos y puntos de decisión) cómo operan minas subterráneas y proveedores de software líderes el acoplamiento entre disponibilidad de flota y planificación operacional, específicamente:

1. **El contrato de datos entre disponibilidad y planificación**: qué información mínima necesita el proceso de planificación de guardia desde mantenimiento (no solo "disponible/no disponible", sino qué atributos adicionales son estándar: disponibilidad proyectada a futuro, tiempo estimado de retorno a operación, criticidad de la indisponibilidad, disponibilidad parcial/con restricciones), y con qué anticipación mínima antes del inicio de guardia debe "congelarse" ese dato para que la planificación pueda usarlo con confianza.

2. **Gobernanza de la fuente única de verdad ("single source of truth") de disponibilidad**: en operaciones maduras, ¿quién es dueño del dato de disponibilidad cuando dos procesos distintos (mantenimiento y operación) lo necesitan y potencialmente lo actualizan? Qué mecanismos usan los sistemas líderes para evitar que operación y mantenimiento trabajen con versiones distintas del estado de un mismo equipo (reportes duplicados, actualizaciones tardías, conflictos de estado).

3. **Manejo de la brecha temporal y el riesgo de dato obsoleto**: cómo diseñan los sistemas de mercado alertas o reglas de degradación cuando el dato de disponibilidad usado para planificar la guardia tiene más de X minutos/horas de antigüedad — qué umbrales son prácticos en minería subterránea (donde el reporte suele ser manual o semi-manual) frente a lo que sería ideal en un entorno con tracking automatizado.

4. **El escenario de cambio de estado durante el turno ya planificado**: qué ocurre cuando un equipo asignado en el plan de guardia cambia de estado (falla, entra a mantenimiento no programado) después de que la guardia ya inició — cómo los sistemas de mercado propagan ese evento desde mantenimiento hacia el motor de asignación/reprogramación de operación, y qué nivel de automatización vs. intervención humana (supervisor de turno, despacho) es típico en ese flujo.

5. **Modelos de plataforma integrada vs. plataformas separadas con integración**: identifica y compara proveedores/soluciones que ofrecen operación y mantenimiento en una sola plataforma unificada frente a los que mantienen sistemas separados (OMS/scheduler por un lado, CMMS/EAM por otro) conectados vía integración — con evidencia de cuál enfoque predomina en minería subterránea y por qué (por ejemplo: RPMGlobal con suite integrada Fleet+Scheduling, Hexagon Mining HxGN con múltiples módulos, SAP con PM nativo pero operación en sistemas externos, Komatsu Modular Mining con Dispatch+Maintenance). Señala explícitamente las ventajas/riesgos de cada modelo para una implementación "llave en mano" nueva como la de CMH.

6. **Priorización cuando el motor de asignación no encuentra suficiente disponibilidad**: qué reglas de negocio usan las operaciones para decidir qué se sacrifica cuando la disponibilidad reportada por mantenimiento es insuficiente para cubrir el plan de guardia (reprogramar labores, usar equipo de contratista, degradar el plan, escalar a un rol específico) — y quién tiene la autoridad de tomar esa decisión según buenas prácticas de la industria.

7. **Impacto de la disponibilidad offline/manual en la confiabilidad del acoplamiento**: dado que CMH exige capacidad offline crítica (Store & Forward) para operar con conectividad intermitente en interior mina, investiga cómo las operaciones subterráneas con captura manual o semi-manual de disponibilidad (antes de tener tracking automatizado) mantienen la confiabilidad de este acoplamiento sin generar sobre-optimismo o sobre-pesimismo en la planificación — qué prácticas de gestión (no solo tecnología) mitigan el riesgo de "dato de disponibilidad de mala calidad rompe la guardia completa".

8. **Métricas de éxito del acoplamiento mismo** (no de cada módulo por separado): qué indicadores usan operaciones maduras para medir si la integración disponibilidad-planificación está funcionando bien (ej. % de guardias replanificadas por disponibilidad incorrecta, tiempo entre cambio de estado real y reflejo en el plan, % de equipos asignados que terminan no disponibles al momento de operar) — esto es relevante porque CMH no ha definido criterios de éxito para el piloto/proyecto y estas métricas podrían proponerse como parte del diseño.

QUÉ NO INVESTIGAR (ya cubierto en los dos prompts anteriores)
- El proceso interno de planificación de guardia de Nexo 360 en sí mismo (motor de asignación, OT, SSOMA, cierre de guardia).
- El proceso interno de mantenimiento de Mantenimiento 360 en sí mismo (preventivo/correctivo, backlog de repuestos, integración SAP MM).
- Definiciones generales de SIC, PA/MA/MTBS/MTTR, o marcos ISO 55000/RCM de forma aislada.

FORMATO DE ENTREGA ESPERADO
Un informe estructurado por cada uno de los 8 puntos anteriores, con:
- El flujo de acoplamiento "tallado" paso a paso (actor → dato/evento → decisión → siguiente paso), mostrando explícitamente dónde cruza la frontera entre mantenimiento y operación.
- Comparación entre al menos 2-3 enfoques o proveedores de mercado cuando exista evidencia pública, con foco específico en minería subterránea (no solo tajo abierto).
- Fuentes citadas (guías de la industria, documentación de producto, casos de estudio).
- Al final, una sección de "implicaciones de diseño" enfocada específicamente en: (a) qué debe contener el contrato de datos entre ambos módulos, (b) qué reglas de negocio de gobernanza de disponibilidad debe implementar ASTAY, y (c) qué métricas de acoplamiento proponer a CMH como criterio de éxito del piloto.
```

---

## Cómo usar este prompt

1. Ejecutar **después** de los dos prompts de `2026-08-03-prompts-deep-research-nexo360-mantenimiento360.md`, adjuntando también sus resultados como contexto (para que el research no repita proceso ya tallado y se concentre en el acoplamiento).
2. Guardar el resultado como `Documentacion/Referencias/deep-research-acoplamiento-operacion-mantenimiento-ref.md`, siguiendo el template `Doc-Referencia`.
3. Los tres resultados combinados (Nexo 360, Mantenimiento 360, acoplamiento) forman el insumo completo de proceso de mercado para diseñar la solución de CMH — junto con `nexo360-mantenimiento360-requerimientos-ref.md` y `analisis-implicancias-tecnicas-ref.md` como el alcance específico exigido por el cliente.

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
