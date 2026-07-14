---
fecha: 2026-07-12
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Compañía Minera Volcan — Unidad Animón (subterránea, UG), "Volcan en Línea"
url: 
tags: [cmh]
---

# Referencia — Reporte de Shotcrete (Volcan)

**Proyecto:** CMH
**Fuente:** Compañía Minera Volcan, Unidad Animón (UG) — reporte "Volcan en Línea"
**Archivo:** `Reporte de Lanzado de shotcrete - 26-04 TD.pdf`
**Tipo:** reporte operacional diario — sostenimiento (shotcrete)

---

## Cómo aplica al proyecto

Tercer tipo de reporte operacional de la misma familia que los reportes de disparos — confirma el patrón de Volcan de un reporte independiente por **proceso crítico** (voladura, shotcrete, y por extensión probablemente otros como limpieza/acarreo). Para CMH, esto es evidencia de que el "Sistema_Productividad" probablemente necesita cubrir varios procesos de la operación, no solo un reporte genérico de cambio de guardia — el diseño final dependerá de cuáles procesos prioriza CMH en el levantamiento técnico.

## Estructura del reporte

1. **Tipo de lanzado (m3 del día)** — Avance, Sobre malla avance, Resane pasivo, con total general.
2. **Detalle por zona y labor** — desglose por contratista/zona (AESA, INTER) y labor (código de frente), con m3 por tipo de lanzado.
3. **Lanzado por guardia (m3)** — serie temporal (Noche/Día por fecha) con línea de referencia/objetivo.
4. **Acumulado a la fecha** — Plan mensual vs. Plan a la fecha vs. Ejecutado vs. Diferencia (aquí: ejecutado 612.4 m3 sobre un plan a la fecha de 574.7 m3, +37.7 de adelanto).
5. **Desechos durante la guardia** — tabla de material de desecho por zona/labor (vacía en este ejemplo).
6. **Mantenimientos durante la guardia** — equipo, motivo de inoperatividad, hora inicio/fin (vacía en este ejemplo, pero confirma que el reporte captura tiempo de parada de equipo cuando ocurre).

## Tipos de lanzado observados (taxonomía)

Avance · Sobre malla avance · Resane pasivo · Desecho · Refugio · Mortero · Resane operativo (estos últimos tres aparecen en el gráfico acumulado aunque no tuvieron actividad en el turno reportado — confirma que la taxonomía es fija/predefinida, no ad-hoc).

## Patrón relevante para el diseño de CMH

- **Plan mensual → plan a la fecha → ejecutado → diferencia** es el mismo patrón de seguimiento acumulado que en los reportes de disparos, aplicado a una unidad de medida distinta (m3 en vez de # disparos). Si CMH necesita más de un proceso cubierto, este patrón de cálculo (plan prorrateado a la fecha vs. ejecutado acumulado) es reutilizable como plantilla genérica.
- La sección de "Mantenimientos durante la guardia" (aunque vacía aquí) muestra que el sistema captura **tiempo de inoperatividad de equipo con hora de inicio/fin** — dato clave para calcular disponibilidad, y coincide con el interés explícito de CMH en la digitalización del cambio de guardia (que necesita saber qué equipos quedan operativos al cierre).

---
*Archivo fuente: `Commit_ref/Reporte de Lanzado de shotcrete - 26-04 TD.pdf`*
