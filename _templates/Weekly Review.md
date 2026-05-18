---
week: <% tp.date.now("YYYY-[W]WW") %>
date-start: <% tp.date.now("YYYY-MM-DD", -tp.date.now("e") + 1) %>
date-end: <% tp.date.now("YYYY-MM-DD", 7 - tp.date.now("e")) %>
status: open
---

# 🗓️ Weekly Review — <% tp.date.now("YYYY-[W]WW") %>

**Período:** <% tp.date.now("YYYY-MM-DD", -tp.date.now("e") + 1) %> → <% tp.date.now("YYYY-MM-DD", 7 - tp.date.now("e")) %>

---

## ✅ Cerrado esta semana

```dataview
TASK
WHERE completed AND completion >= date("<% tp.date.now("YYYY-MM-DD", -tp.date.now("e") + 1) %>") AND completion <= date("<% tp.date.now("YYYY-MM-DD", 7 - tp.date.now("e")) %>")
SORT completion DESC
```

## 🔄 En progreso

```dataview
TASK
WHERE !completed AND status = "in-progress"
SORT due ASC
GROUP BY file.folder
```

## 🚧 Bloqueado

```dataview
TASK
WHERE !completed AND tags contains "#blocked"
SORT due ASC
```

## 🎯 Foco semana siguiente

1. 
2. 
3. 

## 💡 Lecciones aprendidas

- 
- 

## 📋 Kanban — Tarjetas movidas a Done esta semana

```dataview
TABLE file.name AS "Proyecto", file.mtime AS "Última modificación"
FROM "_kanban"
SORT file.mtime DESC
```

## 🧠 Procesamiento de RAW Ideas

```dataview
TABLE fecha, categoria, proyecto_relacionado
FROM "00-Inbox/RAW-Ideas"
WHERE procesada = false AND tipo = "idea-raw"
SORT fecha ASC
```

Para cada idea sin procesar, decidir:
- [ ] Convertir en tarea → agregar a ToDo-Central con Tasks syntax
- [ ] Convertir en proyecto → crear nota en 30-Projects/ con template Project Note
- [ ] Archivar → cambiar `procesada: true` y mover a 60-Archive/
- [ ] Necesita más contexto → dejar en RAW-Ideas con nota adicional

---
← Semana anterior | [[Home]] | Semana siguiente →
