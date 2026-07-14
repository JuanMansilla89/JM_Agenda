---
fecha: 2026-07-12
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Compañía Minera Volcan — Unidad Animón (subterránea, UG), generado por commit.works
url: 
tags: [cmh]
---

# Referencia — Volcan, Informe Fin de Turno (commit.works)

**Proyecto:** CMH
**Fuente:** Compañía Minera Volcan, Unidad Animón (UG) — reporte generado por la plataforma **commit.works**
**Archivo:** `VOLCAN - Reporte Fin de Turno - 28-8 DÍA.pdf` (6 páginas, turno del 28-Ago-2022)
**Tipo:** reporte operacional (fin de turno / cambio de guardia)

---

## Cómo aplica al proyecto

Este es el **entregable final** del ciclo de cambio de guardia que CMH quiere digitalizar: un informe estructurado por labor (frente de trabajo), con actividad planificada vs. real, responsable, equipo asignado y comentario de desviación. Es el ejemplo más concreto de "qué debería producir" el Sistema_Productividad de CMH al cierre de cada guardia.

## Resumen de la estructura

**Encabezado:** fecha, turno, Jefe de Guardia (dos nombres — entrante/saliente), lista de procesos involucrados (Mantto Eléctrico, Servicios, Mantto Mecánico, Op Mina), sección de notas de seguridad.

**Cuerpo, agrupado por zona** (Intermedia, Profundización, T.L. = Taladros Largos, N/A):

Por cada **Labor** (código de frente, ej. `TJ-500-4375-MILA-D`), una tabla de actividades con columnas:

| Campo | Contenido |
|-------|-----------|
| Actividad | Nombre de la tarea (Limpieza_Min, Desate, Sostenimiento Shotcrete Primario, Fraguado, Perforación, Carguío, Voladura...) |
| Horario | Ventana planificada (ej. 08:45 AM – 09:40 AM) |
| Recursos | Equipo (código) + operador asignado, cuando aplica |
| Objetivo | Meta planificada, con unidad (Ton min, m3, MP, ML desate, Pernos, m2) |
| Real | Valor ejecutado real |
| % | % de cumplimiento |
| Comentarios | Motivo de desviación en texto libre (ej. *"CIA INTERMEDIA NO PROGRAMO SU LABOR"*, *"IESA NO PROGRAMO ESTA LABOR"*) |

**Página final — "Real de Equipo por Labor":** vista invertida, organizada por equipo (Empernador, Jumbo, Raptor, Scaler, Scoop), mostrando estado final del equipo (Operativo), labores planeadas vs. reales, y resultado por labor. Permite auditar utilización de equipos independientemente del frente de trabajo.

## Catálogo de actividades observado

Limpieza (Min/Des), Desate, Sostenimiento (Shotcrete Primario/Secundario, Perno, Perno + Malla), Fraguado (1, 2), Perforación (Avance, T.L Sección), Carguío (Avance, Pivot, Breasting, no programado), Voladura (Avance, Pivot, Breasting, no programada), Relleno Hidráulico, Relleno Detrítico, Emplacado Cable Bolting.

## Patrones relevantes para el diseño de CMH

- **Objetivo vs. Real vs. % vs. Comentario obligatorio en desviación** — mismo patrón que en `volcan-estado-futuro-cambio-guardia-ref.md` (validación al 90% con motivo). Es el núcleo funcional que CMH necesita replicar.
- **Multi-contratista**: el reporte distingue explícitamente qué contratista (CIA, IESA, AESA) no programó o no ejecutó una labor — relevante si CMH opera con contratistas en Parcoy (confirmar en reunión técnica).
- **Trazabilidad de equipo + operador** por actividad — permite tanto vista por frente como vista por equipo, sin duplicar captura.
- Las actividades **"no programado"** (Carguío/Voladura no programada) sugieren que el sistema permite registrar trabajo no planificado, no solo medir cumplimiento contra un plan cerrado.

---
*Archivo fuente: `Commit_ref/VOLCAN - Reporte Fin de Turno - 28-8 DÍA.pdf`*
