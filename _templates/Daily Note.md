---
date: <% tp.date.now("YYYY-MM-DD") %>
day-of-week: <% tp.date.now("dddd") %>
energy: 3
focus-area: ""
---

# 📅 <% tp.date.now("YYYY-MM-DD") %> — <% tp.date.now("dddd") %>

## 🎯 Top 3 del día

- [ ] <% tp.date.now("YYYY-MM-DD") %> Tarea 1 📅 <% tp.date.now("YYYY-MM-DD") %> ⏫
- [ ] <% tp.date.now("YYYY-MM-DD") %> Tarea 2 📅 <% tp.date.now("YYYY-MM-DD") %> 🔼
- [ ] <% tp.date.now("YYYY-MM-DD") %> Tarea 3 📅 <% tp.date.now("YYYY-MM-DD") %> 🔼

## ⏰ Time Blocks

- [ ] 09:00 Stand-up / revisión tareas activas
- [ ] 10:00 Deep work — [proyecto del día]
- [ ] 12:00 Lunch
- [ ] 13:00 Reuniones / sync
- [ ] 15:00 Deep work bloque 2
- [ ] 17:00 EOD Review + captura inbox

## 📥 Inbox rápido

- 

## 🔗 Reuniones y decisiones

| Hora | Reunión / Decisión | Participantes | Acción siguiente |
|------|--------------------|---------------|------------------|
|      |                    |               |                  |

## 📊 Progreso proyectos

```dataview
TASK
WHERE !completed AND due = date("<% tp.date.now("YYYY-MM-DD") %>")
SORT due ASC
GROUP BY file.folder
```

## 🔁 EOD Review — ¿Qué quedó pendiente?

- 
- 
- 

---
📆 Semana: [[<% tp.date.now("YYYY-[W]WW") %>]]
