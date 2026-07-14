---
fecha: 2026-07-12
tipo: referencia
subtipo: diagrama-proceso
proyecto: CMH
fuente: Compañía Minera Volcan — Unidad Animón (subterránea, UG)
url: 
tags: [cmh]
---

# Referencia — Situación Futuro Operaciones Volcan (Alternativa cambio de guardia)

**Proyecto:** CMH
**Fuente:** Compañía Minera Volcan, Unidad Animón — operación **subterránea (UG)**, mismo método de explotación que Parcoy (CMH)
**Archivo:** `Alternativa - Estado Futuro Operaciones.png`
**Tipo:** diagrama de proceso (estado futuro), generado por commit.works para Volcan

---

## Cómo aplica al proyecto

Este es el material **más directamente aplicable** de toda la carpeta `Commit_ref/`: es el diseño del **proceso objetivo de cambio de guardia** de otra operación subterránea (Volcan/Animón), documentado por su proveedor tecnológico (commit.works). CMH pide exactamente esto — digitalizar su cambio de guardia en Parcoy — por lo que este diagrama es un benchmark directo de cómo un proveedor especializado en minería subterránea estructuró el mismo problema para un cliente comparable.

## Resumen

El diagrama titulado *"SITUACIÓN FUTURO – OPERACIONES VOLCAN – Alternativa (JG no van al GCOM2, llamada por Teams entre JG y CC)"* describe el flujo diario (lunes a jueves) del proceso de guardia, organizado en 3 columnas:

1. **Precondiciones** — reuniones previas (pre-planeamiento 8:00pm, plan semanal 3:00pm) que alimentan el ciclo de guardia.
2. **Diario (Programación Guardia)** — el traspaso entre Jefe de Guardia saliente y entrante (5:00–7:30am aprox.), reuniones GCOM de 2do y 3er nivel, y la programación de la guardia entrante en el sistema **CiteOps**.
3. **Diario (Durante y cierre guardia)** — supervisión en campo, reporte en tiempo real al **CC (Centro de Control)**, reunión de media guardia (12:00–12:45), y cierre de guardia (validación al 90% de tareas ejecutadas, registro de motivos de incumplimiento).

## Roles identificados

| Rol | Función en el flujo |
|-----|---------------------|
| Jefe de Guardia (saliente/entrante) | Traspaso de guardia, consulta cierre anterior en CiteOps, programa la guardia entrante |
| Jefe de Zona | Dirige reunión GCOM 2do nivel, reporta avances, comunica cambios de programación |
| CC — Centro de Control / Operador CC | Actualiza CiteOps en tiempo real, corrobora lo reportado por operadores, participa vía Teams en reuniones clave |
| Operadores y Capataces | Reportan anomalías, ejecución de tareas, ubicación/estado de equipos |

## Sistema mencionado: CiteOps

El flujo depende de un sistema (**CiteOps**) donde se registra: cierre de guardia anterior, programación de la guardia entrante, avances en tiempo real, y validación final (90% de tareas ejecutadas + motivo en notas para las no completadas). Nota: CiteOps aparece como el nombre del sistema operacional de Volcan — distinto de la plataforma **commit.works** vista en `Commit_1.png`/`Commit_2.png` (que parece ser la herramienta de planificación/scheduling del mismo proveedor). Confirmar con el cliente/proveedor si son el mismo producto o módulos distintos antes de asumir equivalencia.

## Puntos de fricción explícitos en el diagrama

- *"NO HAY IMPRESORA Y PC EN EL PIQUE"* — limitación de infraestructura anotada directamente en el diagrama, relevante para CMH dado que su conectividad en interior mina también está en desarrollo (ver minuta de reunión 2026-07-10).
- El cierre de guardia depende de una **llamada por Teams** entre Jefe de Guardia (en oficina interior mina) y el operador del CC — es decir, incluso en el "estado futuro" hay un paso manual/telefónico que la solución de CMH podría digitalizar más a fondo.

## Cómo usar esto en la propuesta de CMH

- Estructura de referencia para las **consultas técnicas** que ASTAY debe enviar a CMH (ver tarea activa en `CMH.md`): preguntar por roles equivalentes (Jefe de Guardia, Jefe de Zona/CC), si existe un sistema tipo CiteOps hoy, y en qué punto del flujo el registro sigue siendo manual.
- El bloque de "cierre de guardia con validación al 90%" es un patrón de diseño reutilizable: capturar avance real vs. plan, con motivo obligatorio para lo no completado — coincide con el patrón visto en `volcan-reporte-fin-turno-ref.md`.

---
*Archivo fuente: `Commit_ref/Alternativa - Estado Futuro Operaciones.png`*
