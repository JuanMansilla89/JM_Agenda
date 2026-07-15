---
project: Ciberseguridad
parent: DataTwin
status: active
stage: definicion-de-alcance
owner: "Juan Mansilla"
stakeholders: [Jaime]
start-date: 2026-07-14
tags: [datatwin, ciberseguridad]
onedrive: ""
---

# Ciberseguridad — DataTwin

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Apertura del sub-proyecto | ✅ Realizada (14/07/2026) |
| Alcance del Plan de Ciberseguridad | ⏳ Por definir |
| Levantamiento de arquitectura actual (superficie de ataque) | ⏳ Pendiente |
| Evaluación de riesgos | ⏳ Pendiente |
| Políticas y controles | ⏳ Pendiente |
| Plan de respuesta a incidentes | ⏳ Pendiente |

## Objetivo

Elaborar un **Plan de Ciberseguridad** integral para la plataforma DataTwin (gemelo digital de Quellaveco), que cubra la protección de la arquitectura de datos, las integraciones con sistemas OT/IT (GIS/PostGIS, GPS/Flink-Kafka) y los controles de acceso e identidad necesarios para operar de forma segura en un entorno minero.

## Tareas activas

- [ ] Definir el alcance del plan: sistemas, datos y componentes de DataTwin en el perímetro de seguridad 📅 2026-07-21 🔺 #datatwin #ciberseguridad
- [ ] Mapear la arquitectura actual de DataTwin y sus integraciones (OT/IT) como base del análisis de superficie de ataque 📅 2026-07-28 ⏫ #datatwin #ciberseguridad

## Tareas completadas

- [x] Apertura del sub-proyecto Ciberseguridad dentro de DataTwin ✅ 2026-07-14 #datatwin #ciberseguridad

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-14 | El plan de ciberseguridad se aborda como sub-proyecto propio de DataTwin, con su propia carpeta de documentación | Se espera generar múltiples entregables (assessment, políticas, plan de respuesta) independientes del resto de la plataforma | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Alcance del plan aún no definido — riesgo de sobre-extenderse o dejar brechas sin cubrir | Alta | Alto | Definir alcance explícito (sistemas, datos, integraciones) antes de iniciar el levantamiento |
| Integración OT/IT (GIS, GPS) puede introducir superficies de ataque no consideradas en un plan de ciberseguridad genérico de TI | Media | Alto | Levantamiento específico de arquitectura OT/IT antes de definir controles |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/DataTwin/Ciberseguridad/Documentacion"
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

[📁 Carpeta DataTwin — Ciberseguridad](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Proyecto padre: [[DataTwin]]

---
*Última actualización: 2026-07-14*
