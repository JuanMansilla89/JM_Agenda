---
project: DataTwin
status: active
stage: plataforma-en-desarrollo
owner: "Juan Mansilla"
stakeholders: [Jaime]
start-date: 2026-07-14
tags: [datatwin]
onedrive: ""
repo: ""
lider_iniciativa: "Oswaldo Aspilcueta / Elio Rodríguez"
horizonte: "proximas-2-semanas"
prioridad: "alta"
etiqueta: "En Curso"
---

# DataTwin

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Apertura del apartado DataTwin en el vault | ✅ Realizada (14/07/2026) |
| Plan de Ciberseguridad | 🔺 Iniciando — ver [[Ciberseguridad]] |
| Gemelo Planta Quellaveco (add-on BI/reportabilidad) | ⏳ Objetivo específico por definir con Erick/Ignacio — ver [[Gemelo-Planta-Quellaveco]] |
| Arquitectura general de la plataforma (documentación) | 🔺 En curso como sub-proyecto — ver [[Gobierno-Datos]] |
| Gobierno de Datos (mapeo de flujos + arquitectura en capas, multi-fuente) | 🔺 Iniciando — ver [[Gobierno-Datos]] |
| Integración con GIS/PostGIS block models | ⏳ Pendiente — ver [[GIS-BlockModel]] |
| Integración con GPS Flink pipeline | ⏳ Pendiente — ver [[GPS-Pipeline]] |

## Objetivo

Consolidar la documentación, arquitectura y decisiones de **DataTwin**, la plataforma de gemelo digital para la operación de Quellaveco, que integra el modelo de bloques (GIS/PostGIS) y los pipelines de posicionamiento GPS (Flink/Kafka) en una capa unificada de datos y visualización operacional.

## Sub-proyectos

| Sub-proyecto | Nota | Estado |
|-------------|------|--------|
| Ciberseguridad | [[Ciberseguridad]] | 🔺 Iniciando |
| Gobierno de Datos | [[Gobierno-Datos]] | 🔺 Iniciando — mapeo de flujos + arquitectura en capas, multi-fuente |

## Tareas activas

- [ ] Definir alcance inicial del Plan de Ciberseguridad para DataTwin 📅 2026-07-21 🔺 #datatwin

## Tareas completadas

- [x] Apertura del apartado DataTwin en el vault (project note + sub-proyecto Ciberseguridad) ✅ 2026-07-14 #datatwin

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-14 | Ciberseguridad se estructura como sub-proyecto de DataTwin, no como carpeta de referencias suelta | Se espera que genere múltiples entregables propios (assessment, políticas, controles) en el tiempo | #decision |
| 2026-07-16 | Gemelo Planta Quellaveco es un add-on de DataTwin, no una iniciativa independiente | Confirmado por Juan Mansilla en el primer planning — ejecutado por Erick/Ignacio (BI) como complemento al core liderado por Oswaldo/Elio | #decision |
| 2026-07-17 | Gobierno de Datos se abre como sub-proyecto propio de DataTwin (mapeo de flujos + arquitectura en capas, multi-fuente) | Reunión de revisión de arquitectura con Elio/Wilber/Pablo/José — genera entregables propios (mapeo completo, cronograma, ADRs de arquitectura) independientes del resto de la plataforma | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Arquitectura y decisiones de DataTwin no documentadas hasta ahora | Alta | Medio | Usar este apartado para consolidar retroactivamente ADRs y decisiones ya tomadas |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/DataTwin/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |
| 💻 Código | `Documentacion/Codigo/` | *(libre — arquitectura, ADRs, contratos de datos)* |

**Convención de nombres:**
- Reunión: `YYYY-MM-DD-reunion-[tema].md`
- Comunicación: `YYYY-MM-DD-[email|msg]-[remitente]-[tema].md`
- Referencia: `[tema]-ref.md`
- Entregable: `YYYY-MM-DD-[tipo]-[version].qmd`

## 💻 Repositorio y código

> **Repo:** *(pegar URL en frontmatter `repo:` y aquí abajo)*

| Recurso | Ubicación |
|---------|-----------|
| Repositorio de la plataforma | `repo:` en frontmatter — pendiente |
| ADRs y decisiones de arquitectura | `Documentacion/Codigo/` — pendiente |

## ☁️ OneDrive

[📁 Carpeta DataTwin](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Sub-proyectos relacionados dentro de DataTwin: [[Ciberseguridad]], [[Gobierno-Datos]]
- Add-on de DataTwin (planning): [[Gemelo-Planta-Quellaveco]]
- Proyectos técnicos relacionados (top-level, no sub-proyectos): [[GIS-BlockModel]], [[GPS-Pipeline]]

---
*Última actualización: 2026-07-17*
