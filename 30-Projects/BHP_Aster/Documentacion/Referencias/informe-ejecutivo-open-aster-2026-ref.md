---
fecha: 2026-06-16
tipo: referencia
subtipo: informe-interno
proyecto: BHP_Aster
fuente: ASTAY Systems — Gerencia Técnica
url: ""
tags: [bhp-aster, informe, cronograma, piloto, gemelo-digital]
---

# Referencia — Informe Ejecutivo Gerencia Técnica — Open Aster 2026

**Proyecto:** BHP_Aster
**Fuente:** ASTAY Systems — documento interno para Gerencia Técnica
**Fecha:** 16 de junio de 2026
**Tipo:** Informe ejecutivo interno — síntesis del desafío + compromisos + cronograma

---

## Mensaje central

> ASTAY debe preparar una propuesta de pilotaje clara, acotada y técnicamente defendible, orientada a demostrar que un Gemelo Digital puede complementar los sistemas actuales de despacho y planificación para anticipar congestión, mejorar el flujo de camiones y apoyar decisiones operacionales en tiempo real.

---

## Estado: ASTAY preseleccionada

ASTAY fue **preseleccionada** en el proceso Open Aster 2026 para el desafío de Operaciones Mina: *"Transformar la gestión del tráfico mina para flujo continuo"*.

**Meta aspiracional:** optimizar hasta **20%** los tiempos de conducción dentro de la mina.

---

## Compromisos de la postulación

| Compromiso | Descripción | Consideración técnica |
|-----------|-------------|----------------------|
| Monitoreo operacional | Visualizar flota, rutas, velocidades, detenciones, tiempos de ciclo y puntos de acumulación | Requiere datos de posición, estado, ciclo, velocidad y eventos |
| Detección y predicción de congestión | Identificar patrones de colas, saturación, pérdida de continuidad y cuellos de botella | Requiere modelo de red vial, reglas operacionales e histórico mínimo para calibración |
| Recomendaciones tácticas | Sugerir acciones para rutas, prioridades, configuración de equipos y decisiones de corto plazo | Posicionar como soporte a la decisión, no como control automático |
| Integración desacoplada | Operar como capa complementaria, sin reemplazar ni intervenir sistemas críticos | Consumo de datos en modalidad lectura y bajo reglas de ciberseguridad OT |
| Piloto acotado y escalable | Validar valor en una flota, zona, fase o corredor crítico | Evitar comprometer implementación full en la etapa de selección |

---

## Cronograma completo Open Aster 2026

| Fecha | Hito | Acción ASTAY | Estado |
|-------|------|-------------|--------|
| 22 jun – 17 jul 2026 | Acompañamiento para propuesta de pilotaje | Ajustar propuesta técnica con equipo Aster | 🔄 En curso |
| 23 jun 2026 | Envío de presentación para feedback | Presentación enviada ✅ | ✅ Completado |
| Antes del webinar | Formulario de preguntas | Enviar dudas sobre datos, integración, alcance, KPIs | ⏳ Pendiente |
| 7, 8 y 9 jul 2026 | Webinar primera tanda | Participar si el desafío queda en esta tanda | ⏳ Condicional |
| 14 y 15 jul 2026 | Webinar segunda tanda | Participar si el desafío queda en esta tanda | ⏳ Condicional |
| 13 – 24 jul 2026 | Sesiones con experto de pilotaje — primera tanda | Defender alcance, factibilidad, integración y KPIs | ⏳ Condicional |
| 20 – 31 jul 2026 | Sesiones con experto de pilotaje — segunda tanda | Defender alcance, factibilidad, integración y KPIs | ⏳ Condicional |
| 27 jul – 7 ago 2026 | Presentación ante comité evaluador | Presentar propuesta finalista ante comité BHP/Escondida | ⏳ Pendiente |
| 31 ago 2026 | Anuncio oficial de seleccionados | Esperar resultados y paso a etapa de pilotaje | ⏳ Pendiente |

---

## Requerimientos técnicos del piloto

- **Alcance piloto:** definir flota, zona, fase o corredor crítico, usuarios responsables y horizonte de prueba
- **Ambiente controlado:** habilitar ambiente autorizado para ejecutar la solución de forma segura
- **Datos operacionales:** posiciones, estados, ciclos, velocidades, esperas, detenciones, rutas, asignaciones y eventos
- **Red vial mina:** rutas, nodos, intersecciones, rampas, restricciones y puntos críticos
- **Reglas y KPIs:** acordar reglas operacionales, criterios de aceptación y medición de impacto
- **Validación operacional:** involucrar a CIO, Dispatch/Control Mina y Planificación

---

## Riesgos técnicos identificados

| Riesgo | Mitigación |
|--------|-----------|
| Disponibilidad y calidad de datos operacionales | Acordar contrato de datos en kick-off del piloto |
| Restricciones de integración con FMS / Módular | Diseñar capa desacoplada read-only desde el inicio |
| Expectativa de recomendaciones automáticas | Posicionar explícitamente como soporte a la decisión humana |
| Sobredimensionar alcance hacia toda la mina | Delimitar a una flota/fase en la propuesta de selección |
| Meta del 20% como compromiso duro | Tratarla como aspiracional; medir indicadores intermedios verificables |

---

## Recomendaciones para Gerencia Técnica

1. Propuesta técnicamente simple, defendible y acotada
2. No comprometer implementación full durante selección
3. Criterios de aceptación claros y verificables desde el inicio
4. Narrativa: DataTwin complementa Dispatch y Planificación, no los reemplaza
5. Participar con especialistas en integración, datos, mina, planificación y producto en sesiones técnicas

---
*Archivo: `30-Projects/BHP_Aster/Documentacion/Referencias/`*
