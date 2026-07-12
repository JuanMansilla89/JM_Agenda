---
project: Cozamin
status: active
stage: propuesta-en-elaboracion
owner: "Juan Mansilla"
stakeholders: [Frank Echegaray]
start-date: 2026-07-01
tags: [cozamin]
onedrive: ""
---

# Cozamin

## Estado actual

| Hito | Estado | Fecha |
|------|--------|-------|
| Primer contacto | ✅ Realizado | — |
| Levantamiento de necesidades | ⏳ En progreso | — |
| Propuesta técnica en elaboración | 🔄 En curso | 2026-07-01 |
| Propuesta enviada | ⏳ Pendiente | — |
| Adjudicación | ⏳ Pendiente | — |

---

## Objetivo

Implementar una solución de **reportabilidad operacional** para Mina Cozamin. El alcance, enfoque y stack tecnológico se definirán en la propuesta técnica en elaboración.

---

## Tareas activas

- [ ] Agregar componente económico (horas, tarifas, bolsa de horas) a la propuesta técnica 📅 2026-07-11 🔺 #cozamin
- [ ] Validar con el cliente el alcance final de los 6 reportes (incluir/descartar geología y planta) 📅 2026-07-07 ⏫ #cozamin
- [ ] Completar estructura de toma de decisiones y stakeholders adicionales (Cozamin/Capstone) 📅 2026-07-07 🔼 #cozamin

## Tareas completadas

- [x] Apertura del proyecto Cozamin en el vault ✅ 2026-07-01 #cozamin
- [x] Elaborar propuesta técnica (contrato paraguas) — v1 extendida, con Anexos A/B/C ✅ 2026-07-02 #cozamin

---

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-01 | Solución basada en ecosistema Microsoft (Power BI + Power Automate), no aplicación web a medida | Implementación más rápida y costo-eficiente; el cliente ya evaluó y descartó una plataforma web básica de un tercero por baja adopción | ✅ Confirmada |
| 2026-07-01 | Iniciar con Escenario Mínimo Viable (Quick Win) diseñado para escalar hacia Escenario Base con SQL Server/Azure SQL | Evita rehacer el trabajo de la primera etapa; entrega valor rápido sin sobredimensionar la solución | ✅ Confirmada |
| 2026-07-02 | Alcance inicial de la propuesta técnica se basa en los 6 libros Excel de la carpeta Excel Base, no en los 4-5 reportes mencionados verbalmente por el cliente | Los 6 libros son la única fuente documental confirmada; el número final se validará en Fase 0 | 🔄 Pendiente de validar con cliente |

---

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Alcance de propuesta no acotado — riesgo de sobre-prometer | Media | Alto | Definir entregables por fases antes de enviar |
| Stakeholder decisor no identificado aún | Media | Alto | Mapear estructura en próxima reunión |

---

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Cozamin/Documentacion"
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

[📁 Carpeta Cozamin](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Operación: Mina Cozamin
- Tipo de proyecto: Reportabilidad operacional
