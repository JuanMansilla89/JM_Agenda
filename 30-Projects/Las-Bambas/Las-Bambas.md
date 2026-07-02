---
project: Las-Bambas
status: active
stage: en-ejecucion
owner: "Juan Mansilla"
stakeholders: [William]
start-date: 2026-05-18
tags: [lasbambas]
onedrive: ""
---

# Las Bambas

## Estado actual

| Sub-proyecto | Estado | Próximo hito | Fecha |
|-------------|--------|-------------|-------|
| Modelamiento de Pila | 🔄 Seguimiento comercial | Respuesta cliente — Frank Echegaray | 2026-06-25 |
| Reportabilidad | 🔄 Seguimiento comercial | Respuesta cliente — comercial | 2026-06-25 |
| Predicción de Mineral | 🔄 Seguimiento propuesta | Respuesta cliente — Mario Rojas | 2026-07-05 |

## Objetivo

Desarrollo de dos soluciones técnicas para la operación minera Las Bambas: (1) **Modelamiento de Pila** — sistema de modelamiento 3D volumétrico de pilas de mineral; (2) **Reportabilidad y Dashboards** — plataforma centralizada de KPIs operacionales y reportes automáticos. Ambos proyectos requieren propuesta técnica y, posteriormente, propuesta económica.

## Sub-proyectos

| Sub-proyecto | Nota | Propuesta Técnica |
|-------------|------|------------------|
| Modelamiento de Pila | [[Modelamiento-Pila]] | `Modelamiento-Pila/Documentacion/Entregables/2026-05-18-propuesta-tecnica-v1.qmd` |
| Reportabilidad y Dashboards | [[Reportabilidad]] | `Reportabilidad/Documentacion/Entregables/Sistema de reportabilidad - MMG Las Bambas.qmd` |
| Predicción de Mineral | [[Prediccion-de-mineral]] | *(pendiente)* |

## Tareas activas (nivel proyecto)

- [ ] Hacer seguimiento propuesta técnico-económica Predicción de Mineral con Mario Rojas 📅 2026-07-05 🔺 #lasbambas
- [ ] Seguimiento propuestas Modelamiento-Pila y Reportabilidad con comercial 📅 2026-07-05 🔼 #lasbambas

## Tareas completadas

- [x] Demo Ore Projector a Mario Rojas ✅ 2026-06-26 #lasbambas

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Separar en dos sub-proyectos: Modelamiento de Pila y Reportabilidad | Alcances, equipos y timelines son independientes | #decision |
| 2026-05-18 | Propuesta técnica primero, económica después | Alinear solución con necesidad real antes de cotizar | #decision |

## Riesgos generales

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Propuestas no alineadas con prioridad real del cliente | Media | Alto | Validar con William antes de elaborar propuesta económica |
| Recursos insuficientes para dos proyectos paralelos | Media | Alto | Definir secuencia si Las Bambas aprueba ambos simultáneamente |

## 📎 Documentación general del proyecto

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Las-Bambas/Documentacion"
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

[📁 Carpeta Las Bambas](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- [[Modelamiento-Pila]] — propuesta técnica v1, stack PostGIS + TimescaleDB
- [[Reportabilidad]] — propuesta técnica v2.0, sistema de reportabilidad operacional
- [[Prediccion-de-mineral]] — inicio, incluye código frontend

---
*Última actualización: 2026-06-28*
