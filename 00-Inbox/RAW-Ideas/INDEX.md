# 🧠 RAW Ideas — Index

> Ideas capturadas sin procesar. Revisar en el Weekly Review y decidir el destino de cada una.

---

## Sin procesar

```dataview
TABLE fecha, categoria, proyecto_relacionado, tags
FROM "00-Inbox/RAW-Ideas"
WHERE procesada = false AND tipo = "idea-raw"
SORT fecha DESC
```

---

## Por categoría

```dataview
TABLE rows.file.link, rows.fecha
FROM "00-Inbox/RAW-Ideas"
WHERE tipo = "idea-raw"
GROUP BY categoria
SORT fecha DESC
```

---

## Procesadas recientemente

```dataview
TABLE fecha, categoria
FROM "00-Inbox/RAW-Ideas"
WHERE procesada = true
SORT file.mtime DESC
LIMIT 10
```

---

*→ [[Home]] · [[40-Areas/ToDo-Central|ToDo Central]] · Template: [[RAW-Idea]]*
