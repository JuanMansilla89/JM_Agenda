---
project: Quilla
status: active
stage: propuesta-en-elaboracion
owner: "Juan Mansilla"
stakeholders: [Eduardo Sánchez, María Inés]
start-date: 2026-06-26
tags: [quilla]
onedrive: ""
---

# Quilla — KIA Resources | Mina Chapi

## Estado actual

**Tipo de operación:** Open Pit + Underground — inicio/reactivación de producción
**Contacto comercial:** Luis Quispe (ASTAY)

| Hito | Estado | Fecha |
|------|--------|-------|
| 1ª sesión (Víctor — DataTwin) | ✅ Realizada | Previo al vault |
| 2ª sesión (María Inés — servicios) | ✅ Realizada | Previo al vault |
| 3ª sesión (Eduardo Sánchez — presentación completa) | ✅ Realizada | 2026-06-26 |
| Envío lista de preguntas técnicas a Eduardo | ✅ Enviado | 2026-06-29 |
| 2ª sesión con María Inés + Eduardo | ⏳ Pendiente — Eduardo coordina | ~2026-07-03 |
| Propuesta técnico-económica (ASIS) | ⏳ Pendiente | — |
| Adjudicación | ⏳ Pendiente | — |

---

## Objetivo

Implementar una solución de **reportabilidad operacional** para Mina Chapi (KIA Resources / Quilla), operación en inicio de producción con método Open Pit + Underground. La mina no cuenta con sistemas formales aún (solo Excel). El primer paso recomendado es un **Diagnóstico ASIS** para mapear procesos, sistemas y datos, y establecer un roadmap de reportabilidad con KPIs priorizados por área.

---

## Tareas activas

- [ ] Agendar segunda reunión con María Inés y Eduardo Sánchez 📅 2026-07-03 🔺 #quilla
- [ ] Preparar propuesta técnico-económica — ASIS como primera etapa 📅 2026-07-11 ⏫ #quilla
- [ ] Confirmar stack TI aprobado por Quilla (gobernanza, ciberseguridad) 📅 2026-07-07 🔼 #quilla

## Tareas completadas

- [x] Apertura del proyecto Quilla en el vault ✅ 2026-06-30 #quilla
- [x] Enviar lista de preguntas técnicas a Eduardo Sánchez ✅ 2026-06-29 #quilla
- [x] Reunión de presentación ASTAY con Eduardo Sánchez ✅ 2026-06-26 #quilla

---

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-06-26 | Primer paso recomendado = Diagnóstico ASIS | Mina sin sistemas formales; KPIs no definidos; procesos no documentados — ASIS para mapear y priorizar | #decision |
| 2026-06-26 | Stack objetivo: Microsoft (SharePoint + Power Automate + Power BI Desktop) | Cliente ya en ecosistema Microsoft; sin costo de licencias adicionales de ASTAY para servicios | #decision |
| 2026-06-26 | DataTwin no aplica por ahora al underground | Versión actual solo Open Pit — Underground es parte de la operación | #decision |

---

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Sin sistemas formales — todo en Excel; datos históricos escasos | Alta | Alto | Instrumentar Power Automate desde día 1 con controles de llenado; ASIS prioriza qué capturar primero |
| Procesos y KPIs aún no definidos ni documentados | Alta | Medio | ASIS como primer entregable obligatorio antes de cualquier desarrollo |
| Underground: ASTAY sin experiencia en integración de sistemas UG | Media | Medio | Enfocar propuesta en OP primero; UG como fase 2 cuando haya datos disponibles |
| Gobernanza TI no definida (stack aprobado, ciberseguridad) | Media | Medio | Confirmar con TI en primera sesión de ASIS antes de proponer arquitectura |
| Decision-maker final (María Inés) aún no ha visto propuesta completa | Media | Alto | Agendar sesión conjunta Eduardo + María Inés cuanto antes |

---

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Quilla/Documentacion"
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

[📁 Carpeta Quilla](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Operación: Mina Chapi — KIA Resources / Quilla — inicio de producción 2026
- Método: Open Pit + Underground
- Tipo de proyecto: Reportabilidad operacional → Diagnóstico ASIS → Sistema de reportabilidad + dashboards
- Contacto Quilla: Eduardo Sánchez (Supt. Planeamiento) · María Inés (Directora Servicios Técnicos)
- Contacto ASTAY comercial: Luis Quispe
- [[2026-06-26-reunion-presentacion-astay|Reunión 2026-06-26 — Presentación ASTAY]]
- [[Cuestionario Preliminar AS-IS|Cuestionario Preliminar AS-IS]] — enviado a Eduardo Sánchez el 2026-06-29
