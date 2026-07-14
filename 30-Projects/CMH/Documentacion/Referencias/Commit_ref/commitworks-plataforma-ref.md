---
fecha: 2026-07-12
tipo: referencia
subtipo: captura-pantalla-software
proyecto: CMH
fuente: commit.works — plataforma usada por Compañía Minera Volcan (Unidad Animón, UG)
url: https://animon-volcan.commit.works
tags: [cmh]
---

# Referencia — Plataforma commit.works (capturas Volcan/Animón)

**Proyecto:** CMH
**Fuente:** commit.works, instancia de Compañía Minera Volcan — Unidad Animón (subterránea, UG)
**Archivos:** `Commit_1.png` (Tablero de Planificación), `Commit_2.png` (Programador)
**Tipo:** capturas de pantalla de software comercial (benchmark de mercado)

---

## Cómo aplica al proyecto

Estas dos capturas muestran el **software comercial real** (commit.works) que genera los reportes de la carpeta `Commit_ref/` (disparos, shotcrete, fin de turno). Son la evidencia de que existe una solución de mercado ya operando en minería subterránea peruana (Volcan) para el mismo tipo de problema que CMH plantea — útil como referencia de alcance funcional al conversar con CMH sobre "qué es razonable" en una primera etapa, y como posible competidor/benchmark a mencionar en la propuesta.

## Commit_1.png — Tablero de Planificación

URL visible: `https://animon-volcan.commit.works/Client/#processplan`

Vista semanal por día (ej. "Mantto Mecánico Volcan", JUE 2 May – MIÉ 8 May 2024), con por cada día:
- **KPI**: Objetivo vs. Valor realizado (barra roja/verde según cumplimiento).
- **Personal**: filas STAFF / ELEC / MECA — Requerido vs. Disponible vs. No disponible.
- **Equipos**: filas por tipo (Tractor, Jumbo, Scoop, Utilitario) — Requerido vs. Disponible.
- **Tareas del día**: tarjetas de color con descripción de la tarea y tag de contratista (FERREYROS, VOLCAN, RESEMIN).
- Panel lateral de "Tareas Pendientes" con acciones añadir/eliminar.

## Commit_2.png — Programador (Scheduler)

URL visible: `https://animon-volcan.commit.works/Client/#scheduler`

Vista tipo Gantt: filas = **Ubicaciones** (códigos de labor, ej. `RP-4325-VGAB-1`) con columna **Etapa** (DESARROLLO, PREPARACIÓN); columnas = tiempo en bloques horarios a través de varios días. Cada barra de color representa una actividad programada, con etiquetas cortas (ej. "Fraguac...", "Lim...", "100% Fr."). Controles de zoom (24/48h), navegación por semana, e impresión.

## Qué revela sobre el sistema (para la propuesta de CMH)

- La solución separa claramente **dos vistas**: planificación semanal por KPI/recursos (tablero) vs. programación detallada por tiempo (scheduler) — un patrón de UX a considerar si CMH quiere algo más que un solo dashboard plano.
- El campo de **personal disponible/requerido por especialidad** (STAFF/ELEC/MECA) y de **equipos por tipo** sugiere que el dimensionamiento de cuadrillas es un dato de primera clase en el sistema, no un derivado — pregunta abierta para la reunión técnica: ¿CMH necesita este nivel de control de dotación en el cambio de guardia, o solo el registro de lo ejecutado?
- Multi-contratista visible directamente en las tarjetas de tarea (FERREYROS, VOLCAN, RESEMIN) — confirma el mismo patrón de reportabilidad por contratista visto en `reporte-cumplimiento-disparos-ref.md`.

---
*Archivos fuente: `Commit_ref/Commit_1.png`, `Commit_ref/Commit_2.png`*
