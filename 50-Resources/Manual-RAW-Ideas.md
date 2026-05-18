# Manual — RAW Ideas

**Propósito:** Capturar ideas sin filtro. Procesar después, nunca durante la captura.
**Ubicación:** `00-Inbox/RAW-Ideas/`
**Index:** [[INDEX]] (en `00-Inbox/RAW-Ideas/`)

---

## Principio fundamental

Una idea capturada imperfectamente vale infinitamente más que una idea perfecta que no se capturó. La regla es: **escribe primero, juzga después**.

El sistema tiene dos modos separados: **captura** y **procesamiento**. Nunca hagas los dos al mismo tiempo.

---

## Captura — cómo crear una RAW Idea

### Opción rápida (menos de 30 seg)
1. Abre [[NUEVA-IDEA]] (tiene aliases: `nueva-idea`, `captura`, `idea`)
2. Escribe la idea en el campo **Idea:**
3. Cierra el archivo — ya está capturada

Más tarde (EOD o Weekly) mueve el contenido a una nota real en `RAW-Ideas/`.

### Opción completa (con template)
1. Crea una nueva nota en la subcarpeta correcta de `00-Inbox/RAW-Ideas/`
2. Aplica el template `RAW-Idea` con Templater
3. Completa solo los campos que sean obvios — el resto déjalo vacío

### Nombre de archivo
Siempre: `YYYY-MM-DD-slug-corto.md`

Ejemplos:
```
2026-05-18-shadow-mode-kafka-alternativa.md
2026-05-20-refactor-gis-schema-versionado.md
```

Slug = 3-5 palabras, minúsculas, guiones. Sin acentos.

---

## Subcarpetas — cuándo usar cada una

| Carpeta | Qué va aquí |
|---------|------------|
| `proyectos/` | Ideas relacionadas con DataTwin, GIS, GPS y proyectos de clientes |
| `arquitectura/` | Decisiones técnicas, patrones, trade-offs de diseño |
| `personal/` | Ideas de carrera, aprendizaje, productividad personal |
| `sin-clasificar/` | Cuando no sabes dónde va — siempre es válido empezar aquí |

Si dudas entre `proyectos/` y `arquitectura/`: ¿la idea requiere escribir código o cambiar un sistema existente? → `proyectos/`. ¿Es más una reflexión o un patrón de diseño? → `arquitectura/`.

---

## Frontmatter — campos importantes

```yaml
categoria: proyectos          # proyectos | arquitectura | personal | sin-clasificar
proyecto_relacionado: DataTwin  # nombre del proyecto si aplica, o vacío
procesada: false              # NUNCA cambiar a true durante la captura
```

El campo `procesada` solo pasa a `true` cuando la idea ha sido convertida en tarea, proyecto, o archivada conscientemente.

---

## Procesamiento — durante el Weekly Review

Durante el [[Manual-Weekly-Review]], la sección `🧠 Procesamiento de RAW Ideas` lista todas las ideas con `procesada: false`. Para cada una, tomar **una** de estas 4 decisiones:

### Decisión 1: Convertir en tarea
La idea tiene una acción concreta y corta. Crea una tarea en el proyecto correspondiente:
```
- [ ] [descripción] 📅 YYYY-MM-DD ⏫ #datatwin
```
Luego cambia `procesada: true` en el frontmatter de la idea.

### Decisión 2: Convertir en proyecto
La idea es demasiado grande para una tarea. Crea una nota en `30-Projects/<NombreProyecto>/` usando el template `Project Note`. Añade una card al Kanban correspondiente en Backlog.

Cambia `procesada: true` en la idea y pon un link al proyecto:
```
→ Convertida en proyecto: [[NombreProyecto]]
```

### Decisión 3: Archivar
La idea ya no es relevante, fue superada por eventos, o la implementaste sin anotarlo. Cambia `procesada: true`, mueve el archivo a `60-Archive/RAW-Ideas/` (crea la carpeta si no existe).

### Decisión 4: Necesita más contexto
Déjala en `RAW-Ideas/` con `procesada: false`, pero añade una nota al final del archivo explicando qué información falta. Esto evita que quede huérfana sin contexto.

---

## Señales de que el sistema está funcionando

- El INDEX muestra menos de 10 ideas sin procesar la mayoría de las semanas
- Cada Weekly Review procesa al menos el 50% de las ideas acumuladas
- Las ideas en `proyectos/` tienen link a un Kanban o proyecto real

## Señales de que algo está roto

| Síntoma | Qué hacer |
|---------|-----------|
| +20 ideas sin procesar | Añadir procesamiento como item fijo en el Weekly |
| Todas las ideas en `sin-clasificar/` | Reclasificar en batch durante un Weekly Review |
| Ideas duplicadas | Buscar antes de capturar; las duplicadas se archivan |
| `procesada: false` en ideas de hace 2+ meses | Decisión forzada: tarea, proyecto, o archivo |

---

*Ver también: [[Manual-Weekly-Review]] · [[Manual-Daily-Note]] · [[Manual-Proyectos-Kanban]]*
