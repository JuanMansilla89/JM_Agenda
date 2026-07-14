---
fecha: 2026-07-12
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Compañía Minera Volcan (vía commit.works) — operación subterránea (UG)
url: 
tags: [cmh]
---

# Referencia — Catálogo de Tareas por Equipo (Volcan)

**Proyecto:** CMH
**Fuente:** Compañía Minera Volcan — operación subterránea (UG)
**Archivo:** `Tareas operaciones mina .xlsm - Tareas a registrar .pdf`
**Tipo:** catálogo / taxonomía de tareas (plantilla de configuración)

---

## Cómo aplica al proyecto

Este archivo no es un reporte de resultados — es la **taxonomía maestra** que alimenta al sistema: la lista cerrada de combinaciones "Equipo necesario → Tarea" que un operador puede seleccionar al registrar una actividad. Es exactamente el tipo de catálogo que CMH necesitará definir para Parcoy antes de digitalizar el cambio de guardia (sin esto, cada operador registraría las tareas con nombres distintos y el sistema no podría agregarlas).

## Contenido — catálogo completo

| Equipo necesario | Tareas asociadas |
|-------------------|-------------------|
| Jumbo / Empernador | Perforación de taladros de servicios |
| Mixer | Traslado a planta, Espera en planta, Espera de robot |
| Robot | Espera de mixer |
| Scoop | Limpieza de RB, Limpieza de pozas, Mantenimiento de vía, Traslado de componentes/materiales, Carguío a volquete, Traslado de carga al pique |
| Winche | Izaje de personal, Izaje de mineral, Izaje de desmonte |
| Todos (cualquier equipo/cuadrilla) | Ingreso de personal, Espera de frente de trabajo, Demora operativa, Traslado a labor, Traslado, Refrigerio, Otros, Capacitación, Abastecimiento de combustible, Lavado de equipos, Test antifatiga |

## Por qué importa este nivel de detalle

- Distingue tareas **productivas** (perforación, limpieza, izaje) de tareas **no productivas pero necesarias** (traslado, refrigerio, capacitación, test antifatiga) — esta separación es la base para calcular indicadores de utilización/disponibilidad reales, no solo horas trabajadas.
- La categoría **"Todos"** cubre demoras operativas genéricas — en el diseño de CMH, esto debería mapear directamente al catálogo de "causas de demora" que el cliente ya tenga o necesite construir (comparar con el patrón de catálogo de causas visto en el proyecto Cozamin, `30-Projects/Cozamin/`, que usa un catálogo de 91 códigos de demora — mismo problema, otra mina).
- Al ser un archivo `.xlsm` (con macros) exportado a PDF, el original probablemente vive en Excel como tabla de validación (dropdown) — confirmar con CMH si ya tienen un catálogo similar para Parcoy o si debe construirse desde cero en el levantamiento técnico.

## Pregunta para la reunión técnica con CMH

¿Existe hoy un catálogo cerrado de tareas/equipos para el cambio de guardia en Parcoy, o el registro actual es texto libre? La respuesta determina si el levantamiento debe incluir un ejercicio de estandarización de taxonomía antes de diseñar la solución.

---
*Archivo fuente: `Commit_ref/Tareas operaciones mina .xlsm - Tareas a registrar .pdf`*
