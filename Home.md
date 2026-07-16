Vamos con la # 🏠 Home — DataTwin Vault

> **Bienvenido.** Hoy es `$= dv.date('today').toFormat('cccc, dd MMMM yyyy')`.

---

## 📅 Nota del día

```dataview
LIST
FROM "10-Daily"
WHERE file.name = dateformat(date(today), "yyyy-MM-dd")
LIMIT 1
```

→ [[<% tp.date.now("YYYY-MM-DD") %>]] · [[40-Areas/ToDo-Central|📋 ToDo Central]] · [[20-Weekly/<% tp.date.now("YYYY-[W]WW") %>|🗓️ Weekly Review <% tp.date.now("YYYY-[W]WW") %>]] · [[40-Planning/00-Dashboard-Planning|📊 Dashboard Planning]]

---

## 🗂️ Proyectos activos — notas recientes

```dataview
TABLE file.mtime AS "Modificado", status AS "Estado"
FROM "30-Projects"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
LIMIT 5
```

---

## 📊 Resumen tareas por proyecto

```dataview
TABLE length(filter(file.tasks, (t) => !t.completed)) AS "⬜ Abiertas",
      length(filter(file.tasks, (t) => t.completed)) AS "✅ Cerradas"
FROM "30-Projects"
WHERE file.tasks
SORT file.folder ASC
```

---

## 🧠 Ideas sin procesar

```dataview
TABLE fecha, categoria
FROM "00-Inbox/RAW-Ideas"
WHERE procesada = false AND tipo = "idea-raw"
SORT fecha DESC
LIMIT 5
```

[→ Ver todas](00-Inbox/RAW-Ideas/INDEX.md)

---

## 🔥 Tareas urgentes ahora

```dataview
TASK
WHERE !completed
AND (
  due = date(today)
  OR contains(tags, "#hoy")
  OR priority = "highest"
  OR priority = "high"
)
SORT priority DESC, due ASC
LIMIT 10
```

---

*Vault: JM_Agenda · Quellaveco / DataTwin · Actualizado: `$= dv.date('today').toFormat('yyyy-MM-dd')`*
