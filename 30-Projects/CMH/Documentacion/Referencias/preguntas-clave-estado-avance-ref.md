---
fecha: 2026-07-26
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Análisis interno ASTAY
url: 
tags: [cmh]
---
# Referencia — Preguntas clave: material de referencia y estado de avance por módulo

**Proyecto:** CMH
**Fuente:** Análisis interno ASTAY
**URL / ubicación:** —
**Tipo:** preguntas clave / preparación para reunión técnica

---

## Resumen

El documento de requerimientos de CMH ya nombra el producto ("Nexo 360 Operation" + "Mantenimiento 360"), detalla 11 funcionalidades concretas y fija cifras de dimensionamiento — un nivel de precisión que normalmente no surge de una primera reflexión, sino de trabajo interno previo. Antes de asumir que el proyecto parte de cero, conviene preguntar directamente **qué tan avanzado está** cada módulo y **qué material ya existe**, para no rehacer análisis que CMH ya tiene resuelto ni subestimar el trabajo que quedaría por normar contractualmente.

## Puntos clave extraídos

No aplica (documento de preguntas, no de hallazgos de un tercero).

## Preguntas clave

### 1. Material de referencia existente

1. ¿Existe ya un documento de alcance, RFP o especificación más detallada que el resumen recibido, del cual este documento sea un extracto?
2. ¿Hay mockups, wireframes o prototipos (aunque sean internos o de baja fidelidad) de alguno de los dos bloques?
3. ¿CMH evaluó o descartó ya alguna solución de mercado (COTS) antes de optar por desarrollo a medida? ¿Qué brecha encontraron?
4. ¿Existe un mapa de procesos (as-is) del cambio de guardia y del proceso de mantenimiento ya documentado, o se levantaría por primera vez en la reunión técnica con ASTAY?
5. ¿Hay informes, benchmarks o visitas a otras operaciones (propias o de la industria) que hayan influido en la definición de este alcance?

### 2. Estado de avance por módulo — Bloque A (Nexo 360 Operation)

Para cada funcionalidad, preguntar: ¿está en fase de idea, ya fue diseñada conceptualmente, tiene un piloto/prueba en curso, o ya existe una versión interna (Excel avanzado, macro, sistema propio) que cumple parcialmente esta función hoy?

| Funcionalidad | Estado a confirmar |
|---|---|
| Gestión de planes (mensual/semanal/diario/guardia) | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Estado de frentes y maestro de labores | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Maestros de personal y cuadrillas | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Motor de asignación y turnos | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Órdenes de Trabajo (OT) e impresión masiva | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Seguimiento intraturno (SIC) y reprogramación | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Cierre de guardia estructurado | ¿Idea / diseñado / piloto / en uso parcial hoy? |

### 3. Estado de avance por módulo — Bloque B (Mantenimiento 360)

| Funcionalidad | Estado a confirmar |
|---|---|
| Maestro e historial de equipos | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Disponibilidad dinámica de equipos | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Planes preventivos, correctivos y backlog | ¿Idea / diseñado / piloto / en uso parcial hoy? |
| Ubicación de equipos | ¿Idea / diseñado / piloto / en uso parcial hoy? |

### 4. Antecedentes internos del proyecto

6. ¿Hace cuánto tiempo viene trabajándose esta definición dentro de CMH? (la reunión del 10/07 lo sitúa dentro de un proceso de transformación digital iniciado ~6 meses atrás)
7. ¿Qué área lideró la redacción del documento de requerimientos — TI, mantenimiento, planificación mina, o un equipo mixto?
8. ¿Existe ya un equipo interno de CMH (propio o de otro proveedor) desarrollando o habiendo desarrollado algo de esto, actualmente activo o pausado?
9. ¿El nombre "Nexo 360 Operation" / "Mantenimiento 360" corresponde a un producto o iniciativa ya existente dentro de CMH, o es el nombre que se definió para este proyecto en particular?

## Cómo aplica al proyecto

Las respuestas a estas preguntas cambian la naturaleza del levantamiento técnico:

- Si los módulos están en fase de **idea**, la reunión técnica debe profundizar como un levantamiento de cero (as-is completo, ver [[2026-07-26-guia-levantamiento-tecnico-v1]]).
- Si ya existen **diseños, pilotos o sistemas parciales en uso**, el proyecto probablemente incluye un componente de migración/reemplazo que hoy no está dimensionado en ningún documento — esto debe reflejarse en riesgos y en la orden de magnitud.
- Conocer el material de referencia existente (mockups, RFP extendido, evaluaciones previas de mercado) puede ahorrar trabajo de descubrimiento y darle a ASTAY contexto sobre qué alternativas ya fueron descartadas y por qué.

## Limitaciones o advertencias

Estas preguntas son inferencias basadas en el nivel de detalle del documento recibido; es posible que CMH simplemente haya invertido tiempo en redactar bien el requerimiento sin tener avance real de producto — las respuestas deben tomarse como dato de entrada, no asumirse de antemano.

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
