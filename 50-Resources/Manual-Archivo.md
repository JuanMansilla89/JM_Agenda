# Manual — Archivo (60-Archive)

**Propósito:** Definir qué, cuándo y cómo archivar para que el vault no se infle con contenido muerto.

---

## Principio

El archivo no es la basura. Es una biblioteca de decisiones y contexto histórico. Antes de archivar, pregunta: ¿esto podría ser útil como referencia en 6 meses? Si sí → archivo. Si no → borra directamente.

---

## Qué se archiva

| Tipo | Cuándo archivar |
|------|----------------|
| Proyecto completo | Cuando `status: done` y no hay tareas abiertas |
| Nota de proyecto pausado | Después de 4 semanas sin actividad |
| Daily Notes | Después de 60 días (automáticamente obsoletas) |
| Weekly Reviews | Después de 90 días |
| RAW Ideas procesadas | Cuando `procesada: true` y no necesitas verla más |
| Recursos desactualizados | Cuando una versión nueva los reemplaza |

---

## Qué NO se archiva (se borra)

- Drafts incompletos que nunca tomaron forma
- Notas duplicadas
- Capturas del inbox que ya se procesaron como tareas (la tarea es el registro)
- Notas de reuniones sin decisiones ni acciones

---

## Estructura de 60-Archive

```
60-Archive/
  60-Archive/Daily/        ← Daily Notes antiguas
  60-Archive/Weekly/       ← Weekly Reviews cerradas
  60-Archive/Proyectos/    ← Proyectos terminados o pausados
  60-Archive/RAW-Ideas/    ← Ideas procesadas
```

Estas subcarpetas no existen aún — créalas la primera vez que necesites archivar algo de cada tipo.

---

## Cómo archivar paso a paso

### Archivar un proyecto
1. Verifica que no haya tareas abiertas en `## Tareas activas` de la nota del proyecto
2. Cambia en la nota del proyecto: `status: done`
3. Mueve la carpeta: `30-Projects/<Nombre>/` → `60-Archive/Proyectos/<Nombre>/`
4. Busca links rotos con Obsidian (menú: `Options → Files and links → Detect all files not linked`)

### Archivar Daily Notes en batch
Cada 2 meses, mueve las notas de `10-Daily/` que tengan más de 60 días a `60-Archive/Daily/`. Mantén siempre los últimos 30 días en `10-Daily/`.

### Archivar RAW Ideas
Sólo mueve las que tienen `procesada: true`. Las que tienen `procesada: false` aunque sean viejas deben pasar primero por una decisión en el [[Manual-Weekly-Review]].

---

## Reglas para no romper el vault al archivar

1. **Nunca borres un archivo que tenga links entrantes** (otros archivos que lo referencian). Primero actualiza los links o acepta que quedarán rotos.
2. **No muevas archivos desde el explorador del sistema operativo** — usa el explorador de Obsidian para que los links se actualicen automáticamente.
3. **Preserva la estructura de subcarpetas** al mover proyectos. Si `30-Projects/DataTwin/` tiene 5 notas, el destino es `60-Archive/Proyectos/DataTwin/` con las mismas 5 notas.

---

## Frecuencia recomendada

| Acción | Frecuencia |
|--------|-----------|
| Archivar RAW Ideas procesadas | En cada Weekly Review |
| Archivar Daily Notes batch | Cada 2 meses |
| Archivar Weekly Reviews | Cada trimestre |
| Revisar proyectos pausados | Mensual |

---

*Ver también: [[Manual-Proyectos]] · [[Manual-Weekly-Review]]*
