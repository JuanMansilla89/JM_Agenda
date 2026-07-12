# 📋 ToDo Central

> Dashboard central de todas las tareas. Actualizado automáticamente por Dataview.

---

## 🔥 Hoy — Urgente y Prioritario

```dataview
TASK
WHERE !completed AND (due = date(today) OR tags contains "#hoy")
SORT priority DESC, due ASC
```

---

## 📌 Todas las tareas abiertas — por proyecto

```dataview
TASK
WHERE !completed AND file.path != "_templates"
SORT due ASC, priority DESC
GROUP BY file.folder
```

---

## 🚧 Bloqueado

```dataview
TASK
WHERE !completed AND tags contains "#blocked"
SORT due ASC
```

---

## ✅ Completado — últimos 7 días

```dataview
TASK
WHERE completed AND completion >= date(today) - dur(7 days)
SORT completion DESC
GROUP BY file.folder
```

---

*→ [[Home]]*
