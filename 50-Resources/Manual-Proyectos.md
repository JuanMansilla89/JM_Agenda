# Manual — Proyectos

**Propósito:** Cómo iniciar, gestionar y cerrar proyectos en el vault.

---

## Anatomía de un proyecto en este vault

Cada proyecto tiene un único artefacto: la **nota de proyecto** en `30-Projects/<Nombre>/`, con el frontmatter y las secciones estándar definidas en `CLAUDE.md` (Estado actual, Objetivo, Tareas activas, Tareas completadas, Decisiones clave, Riesgos, Documentación, OneDrive, Recursos).

El trabajo en curso vive en la sección `## Tareas activas` de esa misma nota (syntax Tasks plugin), no en un artefacto separado. `40-Areas/ToDo-Central.md` agrega esas tareas en un dashboard único vía Dataview.

---

## Iniciar un nuevo proyecto

1. Crea una carpeta en `30-Projects/<NombreProyecto>/`
2. Crea la nota del proyecto con template `Project Note` — filename = nombre del proyecto
3. Añade el tag del proyecto a `CLAUDE.md` en la sección de tags
4. Crea las 4 subcarpetas de `Documentacion/` (`Reuniones/`, `Comunicaciones/`, `Referencias/`, `Entregables/`) con `.gitkeep`

**No crees el proyecto si no tienes al menos un objetivo claro y una tarea inicial en `Tareas activas`.** Un proyecto vacío es ruido.

---

## Gestionar el trabajo en curso

Todas las tareas de un proyecto viven en `## Tareas activas` de su nota, con syntax Tasks plugin y fecha:

```
- [ ] Descripción 📅 2026-07-12 ⏫ #datatwin
```

**Límite recomendado:** 3 tareas activas "en curso real" por proyecto a la vez. Si tienes más, estás disperso — el resto debería tener fecha futura o estar sin priorizar.

Cuando una tarea se completa, márcala `[x]` y muévela a `## Tareas completadas` con su fecha de cierre. No se borra — es el historial que revisa el Weekly Review.

Para trabajo bloqueado por una dependencia externa, usa el tag `#blocked` y anota en la tarea o en `Riesgos`:
- Quién/qué bloquea
- Fecha en que se reportó el bloqueo
- Acción de escalación si aplica

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

1. Cierra o reubica todas las tareas de `Tareas activas` (a `Tareas completadas` o de vuelta a pendiente si se descontinúan)
2. Cambia el frontmatter de la nota del proyecto: `status: completed`
3. Mueve la carpeta del proyecto a `60-Archive/<NombreProyecto>/` (ver [[Manual-Archivo]])
4. Actualiza los links rotos en [[Home]] si los hay

---

## Errores comunes

| Error | Consecuencia | Corrección |
|-------|-------------|------------|
| Más de 3-4 tareas activas simultáneas por proyecto | Ilusión de progreso, nada termina | Priorizar y posponer el resto sin fecha inmediata |
| Tareas `#blocked` sin nota de bloqueo | No sabes qué resolvió el bloqueo | Añadir nota con quién/qué/cuándo en Riesgos o en la tarea |
| Tareas completadas que nunca se mueven a `Tareas completadas` | Se pierde el historial, el Weekly Review no las captura bien | Mover al cerrar, no dejarlas `[x]` sueltas en Activas |
| Proyecto sin nota — solo tareas sueltas en Daily | Sin objetivo ni contexto | Crear nota con template `Project Note` |

---

*Ver también: [[Manual-Daily-Note]] · [[Manual-Weekly-Review]] · [[CLAUDE]]*
