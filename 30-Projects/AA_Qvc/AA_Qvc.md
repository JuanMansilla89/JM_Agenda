---
project: AA_Qvc
status: active
stage: en-progreso
owner: "Juan Mansilla"
stakeholders: []
start-date: 2026-05-18
tags: [aa_qvc]
onedrive: ""
lider_iniciativa: "William Carpio"
horizonte: "proximas-2-semanas"
prioridad: "alta"
etiqueta: "En Curso"
---

# AA_Qvc

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Revisión cronograma y Gantt | ⏳ Pendiente |
| Decisión sobre la "vista" | ⏳ Pendiente |
| Adopción DataTwin | 🔺 Iniciando como sub-proyecto — ver [[Adopcion-DataTwin]] |

## Objetivo

Validar el plan de AA_Qvc: coherencia de fechas de cierre, entregables e hitos críticos. Revisar consistencia del Gantt operativo, identificar desviaciones, actividades vencidas y hitos sin owner. Tomar decisión sobre el estado de la "vista". Producir cronograma corregido.

## Sub-proyectos

| Sub-proyecto | Nota | Estado |
|-------------|------|--------|
| Adopción DataTwin | [[Adopcion-DataTwin]] | 🔺 Iniciando — métricas, línea base y responsable por definir |

## Tareas activas

- [ ] Revisar cronograma actual: hitos críticos, desviaciones, fechas irreales 📅 2026-05-18 ⏫ #aa_qvc #hoy
- [ ] Identificar dependencias externas que afectan fechas de cierre 📅 2026-05-18 🔼 #aa_qvc #hoy
- [ ] Producir cronograma corregido + riesgos + acciones de mitigación 📅 2026-05-18 🔼 #aa_qvc #hoy
- [ ] Revisar Gantt: actividades vencidas, responsables, hitos sin owner, dependencias técnicas 📅 2026-05-18 🔼 #aa_qvc #hoy
- [ ] Validar que el Gantt refleja estado real (no solo planificado) 📅 2026-05-18 🔼 #aa_qvc #hoy
- [ ] Tomar decisión sobre la "vista": continuar / congelar / rediseñar / escalar 📅 2026-05-18 🔼 #aa_qvc #hoy

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Validar coherencia del plan antes de comprometer fechas externas | Fechas irreales generan expectativas incorrectas | #decision |
| 2026-05-18 | Decisión pendiente sobre la "vista" | Sin decisión explícita el equipo no sabe si continuar o parar | #decision ⏳ |
| 2026-07-19 | Adopción DataTwin se abre como sub-proyecto propio de AA_Qvc, con carpetas dedicadas para reuniones, planes, métricas y definiciones | Frente de seguimiento recurrente, distinto en naturaleza del resto de AA_Qvc (cronograma/Gantt/vista) | #decision |

## Tareas completadas

## La "Vista" — Contexto

Puede ser: vista GIS / vista operacional / vista frontend / disponibilidad-render. Validar:
- Estado actual y performance
- Dependencia de backend
- Prioridad real para el cliente
- Impacto si se congela

**Opciones de decisión:** continuar | congelar | rediseñar | escalar

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Fechas de cierre incompatibles con realidad operativa | Media | Alto | Revisión manual del cronograma + repriorización |
| Dependencias externas no identificadas | Media | Medio | Listar explícitamente en cronograma corregido |
| Gantt desalineado con realidad operativa | Alta | Alto | Revisión manual + redefinir prioridades hoy |
| "Vista" sin decisión = equipo paralizado | Media | Medio | Decidir hoy, documentar en esta nota |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/AA_Qvc/Documentacion"
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

[📁 Carpeta AA_Qvc](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Output cronograma: corregido + riesgos + acciones de mitigación
- Output Gantt: lista de desviaciones + repriorización
- Output vista: decisión documentada con justificación
- Sub-proyecto relacionado: [[Adopcion-DataTwin]] (reuniones, planes, métricas y definiciones de adopción de DataTwin)

---
*Tiempo estimado hoy: cronograma 45 min (11:15–12:00) + Gantt/Vista 1h (12:00–13:00)*
