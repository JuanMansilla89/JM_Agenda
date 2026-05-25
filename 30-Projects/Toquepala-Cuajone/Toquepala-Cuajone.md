---
project: Toquepala-Cuajone
status: active
stage: validacion-tecnica
owner: "Juan Mansilla"
stakeholders: []
start-date: 2026-05-18
tags: [toquepala]
onedrive: ""
---

# Toquepala + Cuajone

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Revisión completitud de queries | ⏳ Pendiente |
| Validación compatibilidad PostgreSQL 9 | ⏳ Pendiente |

## Objetivo

Confirmar completitud de las queries del sistema y validar compatibilidad técnica con PostgreSQL 9. Identificar queries faltantes, dependencias rotas y riesgos de compatibilidad.

## Tareas activas

- [ ] Revisar todas las queries: faltantes, compatibilidad, performance, origen de datos, procs almacenados 📅 2026-05-18 ⏫ #toquepala #hoy
- [ ] Producir checklist: OK / faltantes / observaciones por query 📅 2026-05-18 ⏫ #toquepala #hoy
- [ ] Validar compatibilidad PostgreSQL 9: version exacta, PostGIS, funciones SQL, vistas materializadas, extensiones, drivers 📅 2026-05-18 🔺 #toquepala #hoy
- [ ] Producir documento: compatible/no compatible + riesgos + recomendación técnica 📅 2026-05-18 🔺 #toquepala #hoy

## Tareas completadas

## Riesgo crítico: PostgreSQL 9

PostgreSQL 9 puede romper compatibilidad, limitar features y afectar performance. Evaluar:

| Componente | Riesgo con PG9 | Estado |
|------------|---------------|--------|
| PostGIS | Versión compatible? | Por validar |
| Vistas materializadas | Disponibles en PG9? | Por validar |
| Extensiones usadas | Compatibles con PG9? | Por validar |
| Drivers de conexión | Versión correcta? | Por validar |
| Funciones SQL avanzadas | Window functions, CTEs recursivas? | Por validar |

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Validación de compatibilidad PG9 es bloqueante para avance | Incompatibilidad silenciosa puede romper el sistema en producción | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Incompatibilidad PostgreSQL 9 con stack actual | Alta | Crítico | Validar hoy, documentar restricciones, recomendar upgrade |
| Queries faltantes no detectadas hasta QA | Media | Alto | Checklist exhaustiva contra spec de módulos |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Toquepala-Cuajone/Documentacion"
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

[📁 Carpeta Toquepala-Cuajone](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Output queries: checklist con estados
- Output PostgreSQL: doc compatibilidad + recomendación técnica

---
*Nota: trabajo GIS relacionado con Quellaveco está en [[GIS-BlockModel]] (PostGIS block model). Este proyecto cubre el stack de queries y compatibilidad de BD para Toquepala-Cuajone.*

*Tiempo estimado hoy: queries 1h (14:00–15:00) + PostgreSQL 30-45min (15:00–15:45)*
