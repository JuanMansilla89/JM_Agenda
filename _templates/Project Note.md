---
project: <% tp.file.title %>
status: active
owner: ""
stakeholders: []
start-date: <% tp.date.now("YYYY-MM-DD") %>
tags: []
onedrive: ""
---

# <% tp.file.title %>

## Objetivo

> Describir el objetivo principal del proyecto en 2-3 oraciones.

## Kanban

→ [[_kanban/<% tp.file.title %>-board]]

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| <% tp.date.now("YYYY-MM-DD") %> |  |  | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
|        | Media        | Alto    |            |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/<% tp.file.title %>/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |

**Convención de nombres:**
- Reunión: `YYYY-MM-DD-reunion-[tema].md`
- Comunicación: `YYYY-MM-DD-[email|msg]-[remitente]-[tema].md`
- Referencia: `[tema]-ref.md`
- Entregable: `YYYY-MM-DD-[tipo]-[version].qmd`

## ☁️ OneDrive

[📁 Carpeta del proyecto](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- 
- 

---
*Última actualización: <% tp.date.now("YYYY-MM-DD") %>*
