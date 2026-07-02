---
project: GNSS_Palas
parent: Antamina
status: active
stage: prelicitacion-espera-rfp
owner: "Juan Mansilla"
stakeholders: [James, David Velazco, Metatec]
start-date: 2026-06-02
tags: [antamina, gnss]
onedrive: ""
---

# GNSS_Palas — Antamina

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Kickoff con James y David Velazco | ✅ Realizado 2026-06-02 |
| Reunión conjunta ASTAY + Metatec (comercial) | ✅ Realizada (equipo comercial — Juan en campo) |
| Espera del RFP oficial de Antamina | 🔴 Bloqueado — principal cuello de botella |
| Definición modelo de participación con Metatec | ⏳ Pendiente — depende de bases del RFP |
| Metodología y propuesta técnica | ⏳ Bloqueado — requiere RFP |
| Envío al cliente | ⏳ Bloqueado — requiere RFP |

## Objetivo

Evaluar el desempeño GPS de las palas de Antamina, cuantificar el impacto de negocio de las brechas encontradas y definir una hoja de ruta de mejora, en respuesta a un proceso de licitación formal (RFP). El proyecto se enmarca en la iniciativa de Trazabilidad de Antamina. ASTAY lidera como integrador de la solución y traductor de brechas técnicas a términos de negocio; Metatec aporta experiencia especializada en análisis GNSS/GPS aplicado a equipos mineros.

## Tareas activas

- [ ] Dar seguimiento a emisión del RFP esta semana (contacto con cliente) 📅 2026-07-04 🔺 #antamina #gnss
- [ ] Analizar RFP inmediatamente tras su publicación — alcance, criterios de evaluación, bases 📅 2026-07-11 🔺 #antamina #gnss
- [ ] Definir modelo de participación con Metatec según bases del RFP (subcontratista / partner / otro) 📅 2026-07-11 ⏫ #antamina #gnss #decision
- [ ] Revisar requisitos de homologación y declaración de alianzas en el RFP 📅 2026-07-11 ⏫ #antamina #gnss
- [ ] Preparar metodología de implementación y arquitectura de solución (post-RFP) 📅 2026-07-18 🔼 #antamina #gnss #arquitectura
- [ ] Elaborar propuesta técnica y económica 📅 2026-07-25 🔼 #antamina #gnss #blocked

## Tareas completadas

- [x] Kickoff con James y David Velazco — alineamiento de alcance y objetivos 📅 2026-06-02 ✅ 2026-06-02 #antamina #gnss
- [x] Reunión conjunta ASTAY (equipo comercial) + Metatec — presentación mutua, evaluación de colaboración 📅 2026-06-29 ✅ 2026-06-29 #antamina #gnss

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-06-02 | ASTAY lidera como integrador; Metatec como especialista técnico GPS | James quiere evaluación agnóstica — no que Provision valide su propio hardware | #decision |
| 2026-06-02 | Canal de comunicación directo: James ↔ Juan Mansilla | Simplificar coordinación, antes pasaba por Frank | #decision |
| 2026-06-02 | Propuesta técnica solo después de reunión conjunta con Metatec | Sin alineamiento con especialista técnico no hay base sólida para la metodología | #decision |
| 2026-06-29 | No iniciar propuesta técnica hasta recibir RFP | Antamina emitirá RFP formal — el alcance, criterios y bases no están definidos aún | #decision |
| 2026-06-29 | El proceso es un RFP (no RFQ) | Cliente solicita propuesta integral de solución y metodología, no solo cotización | #decision |
| 2026-06-29 | Modelo de participación con Metatec a definir post-RFP | Las bases del proceso determinarán si se puede subcontratar, declarar alianzas o qué esquema conviene | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| RFP se retrasa indefinidamente o no se publica | Media | Alto | Seguimiento semanal comercial; mantener relación con James |
| Antamina exige homologación específica de partners o subcontratistas | Media | Alto | Revisar bases del RFP en cuanto se publique |
| El RFP exige que experiencia técnica pertenezca exclusivamente al contratista principal | Media | Alto | Evaluar si ASTAY puede sustentar experiencia propia o necesita otro modelo |
| Modelo de participación con Metatec incompatible con bases del proceso | Media | Alto | Analizar bases antes de comprometerse con Metatec |
| Acceso a BD Komatsu restringido por política | Alta | Alto | Antamina construye réplica — seguimiento con David Velazco |
| Metatec no registrada en Antamina | Baja | Medio | ASTAY sí está registrada — puede facilitar logística |
| Propuesta queda desalineada de lo que Metatec puede medir | Media | Alto | Alinear con Metatec post-RFP antes de escribir metodología |
| Impacto del centilleo (scintillation) subestimado | Baja | Medio | Solicitar historial de eventos a Komatsu/Modular |
| Errores de mantenimiento (swap de antenas/sensores) no documentados | Media | Alto | Incluir protocolo de verificación post-mantenimiento en propuesta |

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
*Última actualización: 2026-06-29 — reunión con Metatec realizada por equipo comercial; proyecto bloqueado esperando RFP oficial de Antamina*
