# Manual — Proyectos y Kanban

**Propósito:** Cómo iniciar, gestionar y cerrar proyectos. Cómo mantener los Kanban sin que se conviertan en ruido.

---

## Anatomía de un proyecto en este vault

Cada proyecto tiene exactamente dos artefactos:

| Artefacto | Ubicación | Para qué |
|-----------|-----------|----------|
| Nota de proyecto | `30-Projects/<Nombre>/` | Objetivo, decisiones, riesgos, recursos |
| Kanban board | `_kanban/<Nombre>-board.md` | Estado de trabajo en curso |

Los dos se referencian mutuamente. La nota tiene un link al board; las cards del board tienen tags del proyecto (`#datatwin`, `#gis`, `#gps`, etc.).

---

## Proyectos activos y sus artefactos

| Proyecto | Nota | Kanban | Tag |
|----------|------|--------|-----|
| DataTwin | `30-Projects/DataTwin/` | [[DataTwin-board]] | `#datatwin` |
| GIS / Block Model | `30-Projects/GIS-BlockModel/` | [[GIS-BlockModel-board]] | `#gis` |
| GPS Pipeline | `30-Projects/GPS-Pipeline/` | [[GPS-Pipeline-board]] | `#gps` |

---

## Iniciar un nuevo proyecto

1. Crea una carpeta en `30-Projects/<NombreProyecto>/`
2. Crea la nota del proyecto con template `Project Note` — filename = nombre del proyecto
3. Crea el board en `_kanban/<NombreProyecto>-board.md` — copia la estructura de un board existente
4. Añade el proyecto a la tabla de arriba en este manual
5. Añade el tag del proyecto a `CLAUDE.md` en la sección de tags

**No crees el proyecto si no tienes al menos un objetivo claro y una tarea inicial en Backlog.** Un proyecto vacío es ruido.

---

## Las 5 columnas del Kanban — semántica exacta

### Backlog
Todo lo que quieres hacer pero no está activo. Puede tener cientos de cards. No tiene fecha. No tiene prioridad urgente. Es el repositorio de intenciones.

**Regla:** Una card en Backlog no bloquea a nadie ni genera ansiedad. Si la ves y sientes urgencia, muévela a "En curso".

### En curso
Lo que estás trabajando **ahora mismo, esta semana**. Límite recomendado: **3 cards por proyecto**. Si tienes más de 3, estás disperso — mueve las demás de vuelta a Backlog o a "Bloqueado".

**Regla:** Todo lo que está "En curso" debe tener una tarea activa en alguna Daily Note o en ToDo-Central con fecha.

### En revisión
Trabajo terminado que necesita validación externa (PR abierto, esperando feedback de Duane, esperando aprovación de Jaime). No es tu responsabilidad activa — pero sí debes hacer seguimiento.

**Regla:** Una card no puede estar en "En revisión" más de 1 semana sin que hagas follow-up.

### Bloqueado
Trabajo que no puede avanzar por una dependencia externa. Siempre debe tener una nota en la card con:
- Quién/qué bloquea
- Fecha en que se reportó el bloqueo
- Acción de escalación si aplica

Tag obligatorio: `#blocked`

### Done
Cards completadas. No se borra — es el historial. Cada semana el Dataview del Weekly Review las captura.

**Convención:** Las cards Done se marcan `[x]` en el Kanban. No borres cards de Done a menos que sean duplicados.

---

## Mover cards — cuándo y cómo

| Movimiento | Cuándo |
|------------|--------|
| Backlog → En curso | Al inicio de la semana, en el Weekly Review |
| En curso → En revisión | Cuando creas el PR / mandas el artefacto para revisión |
| En revisión → Done | Cuando el PR se mergea / el artefacto se aprueba |
| En curso → Bloqueado | Inmediatamente al identificar el bloqueo |
| Bloqueado → En curso | Cuando el bloqueo se resuelve |
| Cualquiera → Backlog | Si cambiaron las prioridades |

---

## Decisiones clave (tabla ADR)

Cada nota de proyecto tiene una sección `## Decisiones clave` con esta tabla:

```markdown
| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Usar Avro en lugar de JSON para eventos GPS | Compresión + schema registry | #decision ✅ |
```

**Regla:** Cualquier decisión que cambiaría el diseño si se revirtiera → documéntala en la tabla. Las decisiones pequeñas no necesitan estar aquí.

---

## Cerrar / archivar un proyecto

1. Mueve todas las cards activas a Done o de vuelta a Backlog (si se descontinúan)
2. Cambia el frontmatter de la nota del proyecto: `status: done`
3. Mueve la carpeta del proyecto a `60-Archive/<NombreProyecto>/`
4. Mueve el board a `60-Archive/_kanban/<NombreProyecto>-board.md`
5. Actualiza los links rotos en [[Home]] si los hay

---

## Errores comunes

| Error | Consecuencia | Corrección |
|-------|-------------|------------|
| Más de 5 cards "En curso" | Ilusión de progreso, nada termina | Limitar a 3, resto a Backlog |
| Cards en Bloqueado sin nota de bloqueo | No sabes qué resolvió el bloqueo | Añadir nota con quién/qué/cuándo |
| Tareas en Daily sin card en Kanban | Se pierde visibilidad del proyecto | Crear la card o vincular |
| Proyecto sin nota — solo Kanban | Sin objetivo ni contexto | Crear nota con template |

---

*Ver también: [[Manual-Daily-Note]] · [[Manual-Weekly-Review]] · [[CLAUDE]]*
