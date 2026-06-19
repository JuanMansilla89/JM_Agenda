---
project: MineStock-POC
parent: Chinalco
status: active
stage: propuesta-tecnica-lista-para-envio
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
| Propuesta técnica POC v1 | ✅ Elaborada 2026-06-05 |
| Propuesta técnica POC v2 | ✅ Elaborada 2026-06-05 — terminología coherente con arquitectura empresarial |
| Arquitectura empresarial y funcional | ✅ Documento de referencia elaborado 2026-06-05 |
| Word export propuesta v2 | ✅ Generado en `_output/` |
| Envío propuesta al cliente | ⏳ Pendiente |

## Objetivo

Prueba de Concepto (POC) del producto **MineStock** para Chinalco — operación Toromocho. Contacto: **Yuri Ramírez**. El POC demuestra las capacidades de estimación, inventario, calidad y reportes desplegadas dentro de la red del cliente (On-Premise Toromocho), en un horizonte de **1 mes** (3 semanas de implementación + despliegue, 1 semana de evaluación). El criterio de éxito es demostrar el valor operacional de la solución para habilitar el paso a una etapa de licenciamiento.

## Tareas activas

- [ ] Revisión interna propuesta POC v2 📅 2026-06-20 🔼 #chinalco #minestock
- [ ] Enviar propuesta v2 a Yuri Ramírez — Chinalco Toromocho 📅 2026-06-20 🔺 #chinalco #minestock

## Tareas completadas

- [x] Apertura del sub-proyecto en el vault ✅ 2026-06-05 #chinalco
- [x] Elaborar propuesta técnica POC v1 ✅ 2026-06-05 #chinalco #minestock
- [x] Elaborar propuesta técnica POC v2 (terminología unificada) ✅ 2026-06-05 #chinalco #minestock
- [x] Elaborar arquitectura empresarial y funcional MineStock ✅ 2026-06-05 #chinalco #minestock
- [x] Exportar propuesta v2 a Word ✅ 2026-06-05 #chinalco #minestock

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-06-05 | Modalidad POC antes de implementación full | Reducir riesgo de adopción, demostrar valor en entorno real del cliente | #decision |
| 2026-06-05 | Terminología: Dominio / Componente / Motor / Función (no "Módulo") | Coherencia con arquitectura empresarial del producto | #decision #arquitectura |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Datos de entrada no disponibles en formato requerido | Alta | Alto | Definir formato y fuente de carga inicial en kick-off |
| Alcance POC mal acotado → scope creep | Media | Alto | Delimitar capacidades y criterios de éxito en propuesta |
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

- [x] `2026-06-05-propuesta-tecnica-poc-v1.qmd` — Propuesta técnica POC MineStock v1 ✅ 2026-06-05
- [x] `2026-06-05-propuesta-tecnica-poc-v2.qmd` — v2: terminología coherente con arquitectura empresarial ✅ 2026-06-05
- [x] `2026-06-05-propuesta-tecnica-poc-v2.docx` — Word export generado en `_output/` ✅ 2026-06-05
- [x] `minestock-arquitectura-empresarial-ref.md` — Arquitectura empresarial y funcional ✅ 2026-06-05
- [ ] Reporte de resultados del POC — al cierre Semana 4

## ☁️ OneDrive

[📁 Carpeta Chinalco — MineStock POC](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Producto base: [MineStock](../../MineStock/MineStock.md)
- Arquitectura empresarial y funcional: [minestock-arquitectura-empresarial-ref.md](Documentacion/Referencias/minestock-arquitectura-empresarial-ref.md)

---
*Última actualización: 2026-06-18*
