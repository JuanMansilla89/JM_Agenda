---
project: Modelamiento-Pila
parent: Las-Bambas
status: active
stage: seguimiento-comercial
owner: "Juan Mansilla"
stakeholders: [William]
start-date: 2026-05-18
tags: [lasbambas, modelamiento-pila, gis]
onedrive: ""
lider_iniciativa: "William Carpio"
horizonte: "este-trimestre"
prioridad: "media"
etiqueta: "C_propuesta"
---

# Modelamiento de Pila — Las Bambas

## Estado actual

**En seguimiento comercial** — propuesta técnica v2 entregada. Equipo comercial (Frank Echegaray) gestiona respuesta del cliente y propuesta económica.

| Aspecto | Estado |
|---------|--------|
| Propuesta técnica v2 + Apéndice TAGs | ✅ Finalizada y exportada a Word — 2026-06-05 |
| Sesión técnica con Las Bambas | ✅ Realizada 2026-05-26 |
| Propuesta económica (documento separado) | ⏳ Pendiente — Frank Echegaray |
| Respuesta del cliente | ⏳ En seguimiento comercial |
| Envío propuesta técnica v2 al cliente | ⏳ Objetivo: 2026-06-06 |

## Objetivo

Diseño e implementación del Sistema de Modelamiento Dinámico de Pila OS (Ore Stockpile) para Las Bambas. El sistema relaciona la información de calidad y tonelaje de mina con la información de planta (feed SAG) para cerrar la brecha mine-to-mill: predecir los atributos del feed SAG con horizonte de 2–4 horas y mantener trazabilidad de ley Cu/Mo y dureza desde el frente activo hasta molienda. Incluye servidor On-Premise nuevo, dos motores de modelamiento (ML en CPU continuo + ME en GPU por levantamiento), API REST e interfaz web operacional.

## Tareas activas

- [ ] Hacer seguimiento respuesta cliente con Frank Echegaray 📅 2026-06-25 🔼 #lasbambas

## Tareas completadas

- [x] Apertura del sub-proyecto Modelamiento de Pila 📅 2026-05-18 ✅ 2026-05-18 #lasbambas
- [x] Elaborar propuesta técnica v1 — Modelamiento de Pila 📅 2026-05-25 ✅ 2026-05-20 #lasbambas
- [x] Definir stack tecnológico y arquitectura On-Premise 📅 2026-05-28 ✅ 2026-05-20 #lasbambas #arquitectura
- [x] Estimar esfuerzo y cronograma del proyecto 📅 2026-05-28 ✅ 2026-05-20 #lasbambas
- [x] Revisión interna y coherencia de propuesta ✅ 2026-05-20 #lasbambas
- [x] Exportar propuesta a Word ✅ 2026-05-20 #lasbambas
- [x] Sesión técnica de presentación de propuesta con Las Bambas ✅ 2026-05-26 #lasbambas
- [x] Generar acta de reunión sesión técnica 2026-05-26 ✅ 2026-06-04 #lasbambas
- [x] Actualizar propuesta técnica v2 con hallazgos de sesión ✅ 2026-06-04 #lasbambas
- [x] Crear arquitectura del sistema + lista de 40 TAGs requeridos con justificación ✅ 2026-06-05 #lasbambas #arquitectura
- [x] Crear flujograma Mermaid: flujo físico mine-to-SAG con TAGs + componentes del sistema ✅ 2026-06-05 #lasbambas
- [x] Agregar Apéndice D (flujograma) y Apéndice E (TAGs para validación cliente) a propuesta v2 ✅ 2026-06-05 #lasbambas
- [x] Retirar sección económica de propuesta técnica (política cliente: documentos separados) ✅ 2026-06-05 #lasbambas
- [x] Exportar propuesta técnica v2 a Word ✅ 2026-06-05 #lasbambas

## Alcance técnico

### Stack tecnológico (v2 — definido en propuesta)

| Componente | Tecnología |
|-----------|-----------|
| Motor Ligero ML | Python — CPU On-Premise, ciclo 1–5 min |
| Motor Espacial ME | Python + NVIDIA CUDA — GPU bajo demanda c/15 días |
| Persistencia | SQL Server 2022 |
| API | FastAPI + REST/JSON |
| Interfaz web | React + TypeScript (SPA, red interna) |
| Integración PI | PI Web API — REST/JSON |
| Servidor | On-Premise nuevo — provisionado por Las Bambas (specs: ASTAY) |
| SO | Windows Server 2022 |

### Condiciones operacionales específicas incorporadas en el modelo
- **MODO_TRACTOR**: SAG2 sin flujo gravitacional cuando nivel OS ≤ 60% (~20% del tiempo operativo)
- **8 feeders asimétricos**: F1–F4 SAG1 zona central / F5–F8 SAG2 contra muro de concreto
- **Flujos de retorno**: finos ~40 t/día continuos + pebbles ~72,000 t × 2/año (eventos de campaña)
- **40 TAGs requeridos** en 5 categorías (A: mina/chancadora, B: estado pila, C: feeders, D: retornos, E: validación SAG)

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Iniciar con propuesta técnica antes de económica | Alinear solución con necesidad real antes de cotizar | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Formato de datos de survey incompatible | Media | Alto | Validar formatos disponibles en cliente antes de diseñar ingesta |
| Baja frecuencia de actualización de datos | Alta | Medio | Definir SLA de actualización con cliente en propuesta |
| Complejidad de modelo 3D subestimada | Media | Alto | PoC con dataset real antes de comprometer fechas |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Las-Bambas/Modelamiento-Pila/Documentacion"
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

- [x] `2026-05-18-propuesta-tecnica-v1.qmd` — Propuesta Técnico-Económica v1 ✅ 2026-05-20
- [x] `2026-05-26-reunion-kickoff-modelamiento-pila.md` — Acta sesión técnica con Las Bambas ✅ 2026-06-04
- [x] `2026-05-26-propuesta-tecnica-v2.qmd` — Propuesta v2 con hallazgos de sesión ✅ 2026-06-04
- [x] `2026-06-05-arquitectura-tags-modelamiento-pila.md` — Arquitectura del sistema + lista de 40 TAGs requeridos con justificación (E01-b) ✅ 2026-06-05
- [x] `2026-06-05-flujograma-arquitectura-tags.md` — Flujograma Mermaid: flujo físico mine-to-SAG con TAGs + componentes del sistema ✅ 2026-06-05
- [x] `2026-05-26-propuesta-tecnica-v2.docx` — Word export para envío al cliente ✅ 2026-06-05

## ☁️ OneDrive

[📁 Carpeta Las Bambas — Modelamiento Pila](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Propuesta técnica v1: `Documentacion/Entregables/2026-05-18-propuesta-tecnica-v1.qmd`
- Referencias técnicas en `Documentacion/Referencias/`

---
*Última actualización: 2026-06-05*
