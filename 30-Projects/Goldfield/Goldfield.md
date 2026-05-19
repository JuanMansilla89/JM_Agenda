---
project: Goldfield
status: active
owner: ""
stakeholders: [Goldfield commercial team]
start-date: 2026-05-18
tags: [goldfield]
onedrive: ""
---

# Goldfield

## Objetivo

Validar el estado comercial y técnico del pipeline con Goldfield: confirmar si hubo entrevistas, reuniones o feedback, definir próximos pasos, identificar riesgos de timing.

## Kanban

→ [[Goldfield-board]]

## Tareas activas

- [ ] Revisar Teams / Outlook / notas para consolidar estado del pipeline Goldfield 📅 2026-05-18 🔺 #goldfield #hoy
- [ ] Documentar estado resumido: stakeholders, pendientes de respuesta, riesgos de timing 📅 2026-05-18 🔺 #goldfield #hoy
- [ ] Definir próxima acción concreta con responsable y fecha 📅 2026-05-18 ⏫ #goldfield #hoy

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Priorizar revisión de estado comercial antes de cualquier acción técnica | Sin visibilidad del pipeline no hay acción efectiva | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Riesgo de timing — ventana comercial se cierra sin acción | Alta | Alto | Revisar estado hoy, definir siguiente paso concreto |
| Falta de respuesta de stakeholders | Media | Alto | Escalar si no hay respuesta en 48h |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Goldfield/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |

## ☁️ OneDrive

[📁 Carpeta Goldfield](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Revisar: Teams, Outlook, notas de reuniones previas
- Output esperado: estado resumido + próxima acción + responsable + fecha

---
*Tiempo estimado hoy: 30 min (08:30–09:00)*
