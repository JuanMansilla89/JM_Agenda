# 📚 Manuales del Vault

> Referencia de convenciones y flujos para mantener el vault ordenado y útil.

---

## Flujos del vault

| Manual | Cuándo usarlo |
|--------|--------------|
| [[Manual-Daily-Note]] | Cómo abrir, llenar y cerrar la nota diaria |
| [[Manual-Weekly-Review]] | Proceso completo del review semanal (~30 min) |
| [[Manual-RAW-Ideas]] | Capturar ideas sin filtro y procesarlas en el Weekly |
| [[Manual-Proyectos]] | Iniciar, gestionar y cerrar proyectos |
| [[Manual-Archivo]] | Qué archivar, cuándo, y cómo sin romper links |

## Proyectos técnicos

| Manual | Proyecto | Tag |
|--------|----------|-----|
| [[Manual-DataTwin]] | Plataforma gemelo digital, FastAPI, dbt | `#datatwin` |
| [[Manual-GIS-BlockModel]] | PostGIS, block model, datos espaciales Quellaveco | `#gis` |
| [[Manual-GPS-Pipeline]] | Flink jobs, Kafka topics, pipeline GPS flota | `#gps` |

---

## Decisiones de diseño del vault

| Principio | Regla práctica |
|-----------|---------------|
| Un lugar por tipo de contenido | Diario → `10-Daily/`. Ideas → `RAW-Ideas/`. Código no → repo. |
| Capturar primero, procesar después | Inbox y RAW-Ideas existen para esto. No perfeccionar durante la captura. |
| Decisiones documentadas | Si tomaste una decisión técnica con Duane → va en la tabla ADR del proyecto. |
| Límite de foco | Máximo 3 tareas activas "en curso real" por proyecto a la vez. |
| Archivo sobre borrar | Si algo puede ser útil en 6 meses, archívalo. Si no, borra. |

---

*→ [[Home]] · [[40-Areas/ToDo-Central|ToDo Central]] · [[CLAUDE]]*
