---
project: Reportabilidad
parent: Las-Bambas
status: active
stage: propuesta-tecnica-en-elaboracion
owner: "Juan Mansilla"
stakeholders: [William]
start-date: 2026-05-18
tags: [lasbambas, reportabilidad, dashboards]
onedrive: ""
---

# Reportabilidad y Dashboards — Las Bambas

## Estado actual

**Propuesta técnica: EN ELABORACIÓN** — la sección económica se hará después de aprobación técnica.

| Aspecto | Estado |
|---------|--------|
| Definición de KPIs y alcance | ✅ Borrador en nota de proyecto |
| Propuesta técnica v1 | ⏳ En elaboración — `Documentacion/Entregables/2026-05-18-propuesta-tecnica-v1.qmd` |
| Revisión interna de propuesta | ⏳ Pendiente |
| Propuesta económica | ⏳ Bloqueado hasta aprobación técnica |
| Envío a William | ⏳ Objetivo: 2026-05-30 |

## Objetivo

Propuesta técnica para el sistema de reportabilidad y dashboards en Las Bambas. Plataforma de visualización y reporte operacional que consolida datos de producción, equipos y procesos en tiempo real, con generación automática de informes.

## Kanban

→ [[Las-Bambas-Reportabilidad-board]]

## Tareas activas

- [ ] Elaborar propuesta técnica v1 — Sistema de Reportabilidad 📅 2026-05-25 🔺 #lasbambas #hoy
- [ ] Levantar requerimientos de KPIs y métricas clave del cliente 📅 2026-05-25 ⏫ #lasbambas
- [ ] Definir stack de visualización y backend de datos 📅 2026-05-28 ⏫ #lasbambas #arquitectura
- [ ] Estimar esfuerzo y cronograma del proyecto 📅 2026-05-28 🔼 #lasbambas

## Tareas completadas

- [x] Apertura del sub-proyecto Reportabilidad y Dashboards 📅 2026-05-18 ✅ 2026-05-18 #lasbambas

## Alcance técnico (borrador)

### Problema
Las Bambas necesita un sistema centralizado de reportabilidad que unifique datos de producción, equipos, calidad y logística en dashboards operacionales y reportes automáticos, reemplazando procesos manuales en Excel.

### Solución propuesta
- **Capa de datos**: integración con fuentes existentes (SCADA, ERP, bases operacionales, sensores IoT)
- **Data warehouse operacional**: modelo dimensional para KPIs de producción
- **Dashboards en tiempo real**: visualización de métricas operacionales clave
- **Reportes automáticos**: generación y distribución programada de reportes (diario, semanal, mensual)
- **Alertas y thresholds**: notificaciones cuando KPIs salen de rango

### KPIs objetivo (a validar con cliente)
| KPI | Fuente de datos | Frecuencia |
|-----|----------------|-----------|
| Tonelaje procesado | Sistema de pesaje | Tiempo real |
| Ley de cabeza Cu/Mo | Lab LIMS | Diario |
| Disponibilidad de equipos | SCADA / SAP PM | Tiempo real |
| Recovery de flotación | Control de proceso | Por turno |
| Consumo de agua / energía | Medidores | Por hora |

### Stack tecnológico propuesto
| Componente | Tecnología |
|-----------|-----------|
| Ingesta de datos | Kafka / Flink (streaming) + Airflow (batch) |
| Data warehouse | TimescaleDB / DuckDB |
| API de métricas | FastAPI |
| Dashboards | Grafana / Apache Superset / Redash |
| Reportes automáticos | Python (Jinja2 + WeasyPrint / Quarto) |
| Distribución | Email + Teams webhook |

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Iniciar con propuesta técnica antes de económica | Necesidad de validar KPIs y fuentes de datos antes de cotizar | #decision |
| 2026-05-18 | Evaluar Grafana vs Superset vs solución custom | Depende de licenciamiento y capacidades de cliente | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Fuentes de datos fragmentadas o sin API | Alta | Alto | Auditoría de fuentes en fase de descubrimiento |
| KPIs no acordados entre áreas del cliente | Alta | Medio | Workshop de definición de KPIs con stakeholders clave |
| Latencia de datos vs expectativa de "tiempo real" | Media | Alto | Definir SLA de latencia por KPI en propuesta |
| Dependencia de integración con sistemas legados | Alta | Alto | Proponer conectores estándar (OPC-UA, JDBC, REST) |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Las-Bambas/Reportabilidad/Documentacion"
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

- [ ] `2026-05-18-propuesta-tecnica-v1.qmd` — Propuesta Técnica v1 (en elaboración)
- [ ] Propuesta Económica v1 (posterior a propuesta técnica aprobada)

## ☁️ OneDrive

[📁 Carpeta Las Bambas — Reportabilidad](PENDIENTE — pegar URL de OneDrive)

---
*Última actualización: 2026-05-18*
