---
project: Modelamiento-Pila
parent: Las-Bambas
status: active
stage: propuesta-tecnica-lista-para-envio
owner: "Juan Mansilla"
stakeholders: [William]
start-date: 2026-05-18
tags: [lasbambas, modelamiento-pila, gis]
onedrive: ""
---

# Modelamiento de Pila — Las Bambas

## Estado actual

**Propuesta técnica: LISTA PARA ENVÍO** — sección económica pendiente de completar con valores reales antes de enviar.

| Aspecto | Estado |
|---------|--------|
| Definición de alcance y stack tecnológico | ✅ Definido en propuesta |
| Propuesta técnica v1 | ✅ Finalizada — `Documentacion/Entregables/2026-05-18-propuesta-tecnica-v1.qmd` |
| Exportación Word | ✅ `_output/.../2026-05-18-propuesta-tecnica-v1.docx` |
| Revisión interna de propuesta | ✅ Completada 2026-05-20 |
| Propuesta económica (precios) | ⏳ Pendiente — completar Sección 15 con valores reales |
| Envío a William | ⏳ Objetivo: 2026-05-30 |

## Objetivo

Propuesta técnica para el modelamiento 3D de pilas de mineral en Las Bambas. Incluye captura de geometría, cálculo volumétrico, gestión de calidad de material y visualización integrada en plataforma DataTwin.

## Kanban

→ [[Las-Bambas-Pila-board]]

## Tareas activas

- [ ] Completar sección económica (Sección 15) con valores reales 📅 2026-05-28 🔺 #lasbambas
- [ ] Enviar propuesta técnico-económica a William 📅 2026-05-30 🔺 #lasbambas

## Tareas completadas

- [x] Apertura del sub-proyecto Modelamiento de Pila 📅 2026-05-18 ✅ 2026-05-18 #lasbambas
- [x] Elaborar propuesta técnica v1 — Modelamiento de Pila 📅 2026-05-25 ✅ 2026-05-20 #lasbambas
- [x] Definir stack tecnológico y arquitectura On-Premise 📅 2026-05-28 ✅ 2026-05-20 #lasbambas #arquitectura
- [x] Estimar esfuerzo y cronograma del proyecto 📅 2026-05-28 ✅ 2026-05-20 #lasbambas
- [x] Revisión interna y coherencia de propuesta ✅ 2026-05-20 #lasbambas
- [x] Exportar propuesta a Word ✅ 2026-05-20 #lasbambas

## Alcance técnico (borrador)

### Problema
Las Bambas requiere visibilidad en tiempo (sub)real sobre la geometría, volumen y calidad del material apilado en pilas de mineral. Actualmente el tracking es manual o semi-manual.

### Solución propuesta
- **Captura de geometría**: integración con levantamientos topográficos (drone/LiDAR/survey GPS)
- **Modelo 3D**: representación volumétrica en PostGIS (geometría 3D, cálculo de volúmenes diferenciales)
- **Gestión de calidad**: asociar layers de ley (Cu, Mo) por zona de pila
- **API de consulta**: endpoints para consulta de volumen actual, evolución temporal, calidad por sector
- **Visualización**: integración con dashboard DataTwin (MapLibre / deck.gl)

### Stack tecnológico propuesto
| Componente | Tecnología |
|-----------|-----------|
| Almacenamiento espacial | PostGIS + TimescaleDB |
| Procesamiento geométrico | PDAL, GDAL, Shapely |
| API | FastAPI + GeoJSON |
| Visualización | MapLibre GL / deck.gl |
| Orquestación | Airflow / Prefect |

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Iniciar con propuesta técnica antes de económica | Alinear solución con necesidad real antes de cotizar | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Formato de datos de survey incompatible | Media | Alto | Validar formatos disponibles en cliente antes de diseñar ingesta |
| Baja frecuencia de actualización de datos | Alta | Medio | Definir SLA de actualización con cliente en propuesta |
| Complejidad de modelo 3D subestimada | Media | Alto | PoC con dataset real antes de comprometer fechas |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Las-Bambas/Modelamiento-Pila/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |

## Entregables

- [x] `2026-05-18-propuesta-tecnica-v1.qmd` — Propuesta Técnico-Económica v1 ✅ 2026-05-20
- [ ] Completar sección económica — valores USD reales (Sección 15)
- [ ] Enviar a William

## ☁️ OneDrive

[📁 Carpeta Las Bambas — Modelamiento Pila](PENDIENTE — pegar URL de OneDrive)

---
*Última actualización: 2026-05-20*
