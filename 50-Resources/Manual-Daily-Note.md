# Manual — Daily Note

**Propósito:** Estructura el día, captura sin fricción, cierra limpio.
**Tiempo estimado:** 5 min al abrir + 10 min EOD.

---

## Cuándo abrir la nota del día

Cada mañana laboral, antes de abrir Slack o el correo. Si ya existe la nota del día (`10-Daily/YYYY-MM-DD.md`), ábrela directamente desde [[Home]]. Si no existe, créala con el template `Daily Note` vía Templater.

**Nombre de archivo:** `10-Daily/2026-05-18.md` — siempre ISO, siempre en `10-Daily/`.

---

## Flujo matutino (5 min)

### 1. Revisa las tareas activas del proyecto principal del día
Antes de escribir nada, abre la nota del proyecto más activo. Revisa su sección `## Tareas activas` e identifica qué está pendiente y si hay algo bloqueado (`#blocked`) que necesita acción.

### 2. Completa Top 3
Escribe exactamente 3 tareas. No 4, no 2. Regla: si las 3 no caben en un día real, al menos 1 está mal dimensionada.

Usa siempre syntax Tasks:
```
- [ ] Descripción de la tarea 📅 2026-05-18 ⏫ #datatwin
```

### 3. Revisa los Time Blocks
Ajusta el bloque de 10:00 con el proyecto concreto del día. Day Planner usará estos items si el plugin está activo.

---

## Durante el día

### Inbox rápido — regla de oro
**No procesar, solo capturar.** Si surge algo en una reunión, una idea, un to-do nuevo: va al inbox rápido como bullet. El procesamiento es en el EOD o en el Weekly.

Formato libre, sin emoji, sin fecha. Ejemplo:
```
- preguntar a Duane sobre esquema Avro v2
- revisar latencia Kafka broker prod
```

Si la idea es más elaborada → usar [[NUEVA-IDEA]] y luego mover a `RAW-Ideas/`.

### Reuniones y decisiones
Para cada reunión documenta al menos: hora, participantes, y **una acción siguiente concreta** con dueño. Si no hay acción siguiente, no fue una reunión productiva.

---

## EOD Review (10 min)

Al cerrar el día, completa la sección `🔁 EOD Review`:

1. ¿Cuáles de las Top 3 se completaron? Márcalas `[x]`.
2. ¿Qué quedó pendiente? ¿Por qué? Escribe 1 línea por item.
3. ¿Hay items del Inbox que deben convertirse en tareas reales? → Muévelos al proyecto correspondiente con syntax Tasks y fecha.
4. ¿Algo que deba estar en RAW-Ideas? → Crea la nota con template.

---

## Qué NO va en la Daily Note

| Esto no va aquí | Va en |
|-----------------|-------|
| Decisiones de arquitectura | `30-Projects/<proyecto>/` o `40-Areas/Arquitectura/` |
| Ideas elaboradas | `00-Inbox/RAW-Ideas/` con template RAW-Idea |
| Documentación técnica | `50-Resources/Tecnologia/` |
| Tareas sin fecha clara | Tareas activas del proyecto, sin fecha aún |

---

## Errores comunes

- **Más de 3 items en Top 3.** Viola la restricción intencional. Mueve el exceso a Tareas activas del proyecto.
- **Inbox con 20+ items sin procesar.** Señal de que falta un EOD. Procesa antes del Weekly.
- **Daily Note como scratchpad técnico.** Las decisiones de código no van aquí — van en la nota del proyecto.

---

*Ver también: [[Manual-Weekly-Review]] · [[Manual-RAW-Ideas]] · [[Manual-Proyectos]]*
