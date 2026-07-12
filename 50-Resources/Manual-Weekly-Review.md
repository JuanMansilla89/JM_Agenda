# Manual — Weekly Review

**Propósito:** Cerrar la semana limpio, revisar bloqueos, definir foco siguiente.
**Cuándo:** Lunes por la mañana, antes del primer deep work. ~30 min.
**Archivo:** `20-Weekly/YYYY-[W]WW.md` — ejemplo: `20-Weekly/2026-W21.md`

---

## Crear la nota de la semana

Si no existe aún, créala con Templater usando el template `Weekly Review`. El nombre de archivo sigue el formato ISO week: `2026-W21.md`.

El template auto-calcula `date-start` y `date-end` desde la fecha actual. Verificar que sean lunes y domingo correctos.

---

## Flujo paso a paso (~30 min)

### Paso 1 — Revisar Daily Notes de la semana anterior (5 min)
Abre cada nota de `10-Daily/` del lunes al viernes pasado. Para cada una:
- ¿Qué quedó pendiente en EOD Review?
- ¿Qué items del Inbox no se procesaron?

No copies el contenido — solo extrae acciones concretas.

### Paso 2 — Sección ✅ Cerrado esta semana
El bloque Dataview lo llena automáticamente con las tareas completadas (`[x]`). Si el query muestra poco, es señal de que las tareas no se están marcando como completadas en los archivos correctos.

### Paso 3 — Sección 🔄 En progreso
Revisa cada tarea que aparece aquí. Para cada una decide:
- ¿Sigue siendo relevante esta semana?
- ¿Tiene dueño y fecha?
- ¿Está en la sección Tareas activas de la nota del proyecto correspondiente?

Si una tarea lleva más de 2 semanas "en progreso" sin avance → revisar si está bloqueada o si es demasiado grande y debe descomponerse.

### Paso 4 — Sección 🚧 Bloqueado
Para cada item `#blocked`, escribe explícitamente:
- Quién puede desbloquear (Jaime, Duane, proveedor externo)
- Qué acción tuya está pendiente (¿lo estás esperando o lo olvidaste?)

### Paso 5 — Procesar RAW Ideas (ver [[Manual-RAW-Ideas]])
La sección `🧠 Procesamiento de RAW Ideas` lista todas las ideas con `procesada: false`. Para cada una, tomar una decisión. No dejar ninguna sin decisión al terminar el Weekly.

### Paso 6 — Sección 🎯 Foco semana siguiente
Escribe exactamente 3 ítems. No son tareas específicas — son áreas de foco. Ejemplo:
1. Cerrar PR del particionamiento GIS
3. Sync con Duane sobre arquitectura DataTwin

### Paso 7 — Cerrar la semana anterior
Una vez completado el review, cambia el frontmatter de la nota anterior:
```yaml
status: closed
```

---

## Qué hace que un Weekly Review falle

| Síntoma | Causa | Solución |
|---------|-------|----------|
| Dataview vacío en "Cerrado" | Las tareas no se marcaron `[x]` | Marcar completadas antes del review |
| Lista de "En progreso" enorme | Tareas never-ending sin fecha | Poner fecha o dejarla sin priorizar en Tareas activas |
| RAW Ideas acumulándose semanas | No se procesa el inbox | Reservar 5 min fijos en el flujo |
| "Bloqueado" siempre los mismos items | No se escala el bloqueo | Crear tarea explícita de escalación |

---

## Diferencia entre Weekly Review y Daily Note

| | Daily Note | Weekly Review |
|--|------------|---------------|
| Frecuencia | Cada día laboral | Lunes por la mañana |
| Horizonte | Hoy | La semana |
| Foco | Ejecutar | Reflexionar + planear |
| Duración | 5+10 min | 30 min |
| Archivo | `10-Daily/` | `20-Weekly/` |

---

*Ver también: [[Manual-Daily-Note]] · [[Manual-RAW-Ideas]] · [[Manual-Proyectos]]*
