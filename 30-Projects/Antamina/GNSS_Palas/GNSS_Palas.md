---
project: GNSS_Palas
parent: Antamina
status: active
stage: propuesta-tecnica-en-elaboracion
owner: "Juan Mansilla"
stakeholders: [James, David Velazco]
start-date: 2026-06-02
tags: [antamina, gnss]
onedrive: ""
---

# GNSS_Palas — Antamina

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Kickoff con James y David Velazco | ✅ Realizado 2026-06-02 |
| Reunión conjunta con Metatec + David | ⏳ Pendiente — James coordina |
| Metodología interna preliminar | ⏳ En preparación |
| Propuesta técnica v1 | ⏳ Bloqueado — requiere reunión con Metatec |
| Envío al cliente / RFQ | ⏳ Bloqueado |

## Objetivo

Evaluar el desempeño GPS de las palas 4100 y 4800 de Antamina en cuatro dimensiones (disponibilidad, visibilidad, cobertura y confiabilidad mecánica), cuantificar el impacto de negocio de las brechas encontradas (dilución, tonelaje, riesgo) y definir una hoja de ruta de mejora. El proyecto se enmarca en la iniciativa de Trazabilidad de Antamina. ASTAY lidera como traductor de brechas técnicas a términos de negocio; Metatec actúa como especialista técnico GPS.

## Tareas activas

- [ ] Preparar metodología preliminar y preguntas para reunión con Metatec 📅 2026-06-07 ⏫ #antamina #gnss #arquitectura
- [ ] James coordina reunión conjunta ASTAY + Metatec + David Velazco 📅 2026-06-09 ⏫ #antamina #gnss #blocked
- [ ] Elaborar propuesta técnica con metodología (post-reunión Metatec) 📅 2026-06-16 🔼 #antamina #gnss

## Tareas completadas

- [x] Kickoff con James y David Velazco — alineamiento de alcance y objetivos 📅 2026-06-02 ✅ 2026-06-02 #antamina #gnss

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-06-02 | ASTAY lidera como traductor de impacto de negocio; Metatec como especialista técnico GPS | James quiere evaluación agnóstica — no que Provision valide su propio hardware | #decision |
| 2026-06-02 | Canal de comunicación directo: James ↔ Juan Mansilla | Simplificar coordinación, antes pasaba por Frank | #decision |
| 2026-06-02 | Propuesta técnica solo después de reunión conjunta con Metatec | Sin alineamiento con especialista técnico no hay base sólida para la metodología | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Acceso a BD Komatsu restringido por política | Alta | Alto | Antamina construye réplica — seguimiento con David Velazco |
| Metatec no registrada en Antamina | Baja | Medio | ASTAY sí está registrada — puede facilitar logística |
| Propuesta queda desalineada de lo que Metatec puede medir | Media | Alto | Reunión conjunta antes de escribir metodología |
| Impacto del centilleo (scintillation) subestimado | Baja | Medio | Solicitar historial de eventos a Komatsu/Modular |
| Errors de mantenimiento (swap de antenas/sensores) no documentados | Media | Alto | Incluir protocolo de verificación post-mantenimiento en propuesta |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Antamina/GNSS_Palas/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |

**Convención de nombres:**
- Reunión: `YYYY-MM-DD-reunion-[tema].md`
- Comunicación: `YYYY-MM-DD-[email|msg]-[remitente]-[tema].md`
- Referencia: `[tema]-ref.md`
- Entregable: `YYYY-MM-DD-[tipo]-[version].qmd`

## ☁️ OneDrive

[📁 Carpeta GNSS_Palas](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Kickoff: [[2026-06-02-reunion-kickoff-gnss-palas]]
- Transcripción original: `Documentacion/Reuniones/02JUN26 Resumen ASTAY x Antamina GNSS Palas.txt`
- Marco metodológico: `Documentacion/Referencias/Evaluación del Desempeño GNSS en Palas de Minería Superficial.md`

---
*Última actualización: 2026-06-02 — kickoff realizado, pendiente reunión con Metatec*
