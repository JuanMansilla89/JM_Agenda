---
project: Las-Bambas
status: active
stage: propuesta-tecnica-en-elaboracion
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
| Modelamiento de Pila | Propuesta técnica lista para envío | Completar sección económica + enviar a William | 2026-05-30 |
| Reportabilidad | Propuesta técnica v2.0 en revisión | Completar sección económica + enviar a William | 2026-05-30 |

## Objetivo

Desarrollo de dos soluciones técnicas para la operación minera Las Bambas: (1) **Modelamiento de Pila** — sistema de modelamiento 3D volumétrico de pilas de mineral; (2) **Reportabilidad y Dashboards** — plataforma centralizada de KPIs operacionales y reportes automáticos. Ambos proyectos requieren propuesta técnica y, posteriormente, propuesta económica.

## Sub-proyectos

| Sub-proyecto | Nota | Propuesta Técnica |
|-------------|------|------------------|
| Modelamiento de Pila | [[Modelamiento-Pila]] | `Modelamiento-Pila/Documentacion/Entregables/2026-05-18-propuesta-tecnica-v1.qmd` |
| Reportabilidad y Dashboards | [[Reportabilidad]] | `Reportabilidad/Documentacion/Entregables/Sistema de reportabilidad - MMG Las Bambas.qmd` |

## Tareas activas (nivel proyecto)

- [ ] Presentar ambas propuestas técnicas a William 📅 2026-05-30 🔺 #lasbambas
- [ ] Coordinar workshop de descubrimiento con Las Bambas post-aprobación técnica 📅 2026-06-06 ⏫ #lasbambas

## Tareas completadas

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

---
*Última actualización: 2026-05-24*
