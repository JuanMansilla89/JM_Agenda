---
project: MarCobre
status: active
stage: propuesta-tecnica-lista
owner: "Juan Mansilla"
stakeholders: [Jaime]
start-date: 2026-05-18
tags: [marcobre]
onedrive: ""
lider_iniciativa: "Oswaldo Aspilcueta"
horizonte: "este-trimestre"
prioridad: "media"
etiqueta: "C_propuesta"
---

# MarCobre — Propuesta BIM/Gemelo Digital MINSUR

## Estado actual

**Propuesta técnica: LISTA para revisión** — la sección económica (precio Etapa 1) está pendiente.

| Aspecto | Estado |
|---------|--------|
| Cuestionario cliente (MINSUR) | ✅ Respondido |
| 5 preguntas clave de alcance | ✅ Definidas |
| Propuesta técnica v1 | ✅ Redactada — `Documentacion/Entregables/2026-05-18-propuesta-v1.qmd` |
| Revisión interna de propuesta | ⏳ Mañana 2026-05-19 |
| Sección económica (precio Etapa 1) | ⏳ Pendiente — completar en revisión de mañana |
| Envío al cliente | ⏳ Bloqueado hasta cerrar precio |

## Objetivo

Ganar la propuesta técnico-económica para el proyecto de Portal Visual BIM / Gemelo Digital de MINSUR en Fundición y Refinería Pisco. Enfoque en dos etapas: **Discovery/Assessment** (6 semanas, cotizar ahora) → **Materialización y Desarrollo** (cotizar al cierre del Discovery).

## Tareas activas

- [ ] Revisar propuesta técnica v1 con equipo — ajustes finales de contenido 📅 2026-05-19 🔺 #marcobre
- [ ] Definir y completar sección económica: precio Etapa 1 (USD) 📅 2026-05-19 🔺 #marcobre
- [ ] Renderizar propuesta a Word: `quarto render 2026-05-18-propuesta-v1.qmd --to docx` 📅 2026-05-19 ⏫ #marcobre
- [ ] Enviar propuesta técnico-económica completa a MINSUR 📅 2026-05-19 ⏫ #marcobre #blocked

## Tareas completadas

- [x] Revisar cuestionario BIM recibido 📅 2026-05-18 ✅ 2026-05-18 #marcobre
- [x] Responder las 5 preguntas clave de alcance 📅 2026-05-18 ✅ 2026-05-18 #marcobre
- [x] Redactar propuesta técnica v1 (Etapa 1 Discovery + Etapa 2 referencial) 📅 2026-05-18 ✅ 2026-05-18 #marcobre

## 5 Preguntas clave — RESPONDIDAS

| # | Pregunta | Respuesta del cliente |
|---|----------|-----------------------|
| 1 | ¿Para qué quiere BIM? | Gestión documental, mantenimiento, ingeniería y soporte a decisiones operativas. Nivel 3 — Modelo Técnico Coordinado. |
| 2 | ¿Cuál es el alcance real? | Fundición y Refinería Pisco. Civil, mecánico, tuberías, eléctrico e instrumentación. Activos críticos de proceso. |
| 3 | ¿Qué LOD esperan? | LOD 200–300. Tolerancia centimétrica para activos críticos. ASTAY propone LOD 300 para críticos / LOD 200 para secundarios. |
| 4 | ¿Qué entregables esperan? | IFC + Revit + Portal web (Unity WebGL) + Planos referenciales + Navegación 3D + Integración SharePoint. |
| 5 | ¿Cómo será capturada la información? | MINSUR entrega nube de puntos (100%, completan el 60% restante). Insumos: DWG, IFC, Navisworks, maqueta preliminar. |

> **Decisión:** El cliente es MINSUR — Fundición y Refinería Pisco. "MarCobre" es el código interno del proyecto en este vault.

## Propuesta técnica — resumen

**Archivo:** `Documentacion/Entregables/2026-05-18-propuesta-v1.qmd`
**Render:** `quarto render 2026-05-18-propuesta-v1.qmd --to docx`

| Componente propuesto | Detalle |
|---------------------|---------|
| Etapa 1 — Discovery/Assessment | 6 semanas, equipo de 6 perfiles, 2 visitas a terreno en Pisco, 15 entregables |
| Etapa 2 — Materialización | Referencial — alcance y precio se cierran en Etapa 1 |
| LOD referencial | LOD 300 activos críticos / LOD 200 secundarios (a confirmar en campo) |
| Viewer web | Unity WebGL (a confirmar según restricciones TI MINSUR) |
| Despliegue | Azure / híbrido / on-premise (a definir en Etapa 1) |
| Equipo Etapa 1 | PM, Líder Técnico, Analista de Negocio, Esp. BIM, Técnico BIM, Analista Funcional |
| HH referenciales Etapa 1 | ~760 HH en 6 semanas |
| **Precio Etapa 1** | **USD [PENDIENTE]** |

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Estructurar en Discovery + Materialización separados | Validar info antes de comprometer desarrollo — reduce retrabajo y deuda técnica | #decision |
| 2026-05-18 | LOD 300 máx — confirmar en campo, no comprometer en propuesta | Calidad real de la info no está validada — el LOD se define post-assessment | #decision |
| 2026-05-18 | Etapa 2 referencial — precio solo después del Discovery | Sin assessment no hay base técnica sólida para cotizar desarrollo | #decision |
| 2026-05-19 | Precio Etapa 1 | ⏳ Pendiente definir mañana en revisión interna | |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| MINSUR solicita precio cerrado para Etapa 2 antes del Discovery | Media | Alto | Explicar que sin assessment hay riesgo de subestimación — Discovery lo protege a ellos también |
| Precio Etapa 1 fuera del rango presupuestal de MINSUR | Media | Alto | Confirmar si hay un techo presupuestal antes de enviar |
| Demora en aprobación interna MINSUR | Media | Medio | Propuesta incluye base para business case interno |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/MarCobre/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión con cliente | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje / Teams | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Doc externo / norma / referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Propuesta / cotización / entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |

**Convención de nombres:**
- Reunión: `YYYY-MM-DD-reunion-[tema].md`
- Comunicación: `YYYY-MM-DD-[email|msg]-[remitente]-[tema].md`
- Referencia: `[tema]-ref.md`
- Entregable: `YYYY-MM-DD-[tipo]-[version].qmd`

## ☁️ OneDrive

[📁 Carpeta MarCobre](https://teams.cloud.microsoft/l/message/19:2eb092d7-431c-4d73-8d80-7a958ff2aa64_dfb7673f-3537-46a5-9401-2e56d54a2572@unq.gbl.spaces/1779136756726?context=%7B%22contextType%22%3A%22chat%22%7D)

## Recursos y referencias

- Cuestionario respondido: `Documentacion/Reuniones/Cuestionario_Técnico_Gemelo_Digital_BIM_Resuelto.md`
- Base de conocimiento MINSUR: `Documentacion/Referencias/Proyecto BIM_ Gemelo Digital para Plantas MINSUR.md`
- Concepto LOD: `Documentacion/Referencias/Concepto de LOD.md`
- **Propuesta técnica v1:** `Documentacion/Entregables/2026-05-18-propuesta-v1.qmd`

---
*Actualizado: 2026-05-18 — propuesta técnica redactada, pendiente precio y revisión interna mañana*
