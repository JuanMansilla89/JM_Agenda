---
project: MineStock-POC
parent: Chinalco
status: active
stage: propuesta-en-elaboracion
owner: "Juan Mansilla"
stakeholders: [Yuri Ramírez]
start-date: 2026-06-05
tags: [chinalco, minestock, poc]
onedrive: ""
---

# MineStock POC — Chinalco

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Apertura del sub-proyecto | ✅ 2026-06-05 |
| Propuesta técnica POC | ⏳ En elaboración |
| Envío propuesta al cliente | ⏳ Pendiente |

## Objetivo

Propuesta de Prueba de Concepto (POC) del producto **MineStock** para Chinalco — operación Toromocho. Contacto: **Yuri Ramírez**. El POC demuestra los módulos de estimación, inventario, calidad y reportes desplegados dentro de la red del cliente (On-Premise Toromocho), en un horizonte de **1 mes** (3 semanas de implementación + despliegue, 1 semana de evaluación). El criterio de éxito es demostrar el valor de la solución para habilitar el paso a una etapa de licenciamiento.

## Tareas activas

- [ ] Exportar propuesta POC v1 a Word y enviar a Yuri Ramírez 📅 2026-06-06 🔺 #chinalco #minestock
- [ ] Revisión interna propuesta POC 📅 2026-06-06 🔼 #chinalco #minestock
- [ ] Enviar propuesta a Yuri Ramírez — Chinalco Toromocho 📅 2026-06-09 🔺 #chinalco #minestock

## Tareas completadas

- [x] Apertura del sub-proyecto en el vault ✅ 2026-06-05 #chinalco
- [x] Elaborar propuesta técnica POC v1 ✅ 2026-06-05 #chinalco #minestock

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-06-05 | Modalidad POC antes de implementación full | Reducir riesgo de adopción, demostrar valor en entorno real del cliente | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Datos de entrada no disponibles en formato requerido | Alta | Alto | Definir formato y fuente de carga inicial en kick-off |
| Alcance POC mal acotado → scope creep | Media | Alto | Delimitar módulos y criterios de éxito en propuesta |
| Disponibilidad del equipo Chinalco para validación | Media | Medio | Agendar sesiones de revisión en semana 4 desde el inicio |
| Restricciones de red interna para despliegue On-Premise | Media | Medio | Confirmar requerimientos de servidor y puertos con IT de Toromocho antes de Semana 1 |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Chinalco/MineStock-POC/Documentacion"
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

- [x] `2026-06-05-propuesta-tecnica-poc-v1.qmd` — Propuesta técnica POC MineStock ✅ 2026-06-05
- [ ] `2026-06-05-propuesta-tecnica-poc-v1.docx` — Word export para envío al cliente
- [ ] Reporte de resultados del POC — al cierre Semana 4

## ☁️ OneDrive

[📁 Carpeta Chinalco — MineStock POC](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Producto base: [MineStock](../../MineStock/MineStock.md)

---
*Última actualización: 2026-06-05*
