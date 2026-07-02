---
fecha: 2026-06-28
tipo: referencia
subtipo: video
proyecto: BHP_Aster
fuente: YouTube — Aster
url: https://www.youtube.com/watch?v=47d40syVNXA
tags: [bhp-aster, datatwin, congestion, mineria]
---

# Referencia — Desafíos Open Aster - Operaciones Mina

**Proyecto:** BHP_Aster
**Fuente:** Aster — YouTube
**URL:** https://www.youtube.com/watch?v=47d40syVNXA
**Tipo:** Video — presentación / caso de uso

---

## Resumen

Desafío **"Gestión inteligente de tráfico mina"** planteado por Aster (BHP Chile). El problema central es la brecha entre la planificación teórica ideal (match pala-camión en condiciones óptimas) y las condiciones dinámicas reales del rajo: congestiones en rutas, detenciones imprevistas y colas. El sistema de dispatch actual no logra evitar cuellos de botella ni tomar decisiones en tiempo real cuando las condiciones cambian (ej. pala fuera de servicio). Agregar más equipos a una fase no se traduce en mayor productividad global.

## Puntos clave extraídos

- **Brecha planificación vs. realidad:** el plan asume configuración óptima (match pala-camión), pero en la práctica surgen congestiones y colas no previstas
- **Límite del dispatch actual:** el sistema busca optimizar la flota pero no evita cuellos de botella ni reacciona bien a cambios en tiempo real
- **Más equipos ≠ más productividad:** han comprobado que sumar flota a una fase no mejora el flujo global — el problema es de gestión, no de cantidad
- **Diseño geométrico de rutas:** las intersecciones (tipo rotonda) son un factor crítico de atascamiento; hay estudios previos pero siguen abiertos a evaluar brechas de diseño
- **Sistema de referencia:** Módular (sistema de administración de flota actualmente en operación)
- **Restricción de ciberseguridad:** no quieren dispositivos externos (ej. celulares comerciales) — prefieren soluciones sobre infraestructura existente

## Requerimientos para la solución esperada

| Requerimiento | Descripción |
|--------------|-------------|
| Gestión en tiempo real | Sistema o simulación que evalúe condiciones cambiantes y entregue recomendaciones minuto a minuto para minimizar congestión y maximizar flujo continuo |
| Herramienta de planificación | No solo reactiva — debe ayudar a planificadores en la configuración inicial de equipos por fase |
| Integración con sistemas actuales | Debe integrarse con Módular (sistema de administración de flota existente) |
| Aprovechamiento de tecnología existente | Preferencia por soluciones sobre sistemas ya disponibles — sin dispositivos externos comerciales (barrera de ciberseguridad) |
| Evaluación de diseño de rutas | Apertura a identificar brechas en diseño geométrico de caminos (intersecciones, capacidad vs. plan de producción) |

## Cómo aplica al proyecto

El DataTwin tiene capacidad directa para atacar este desafío:
- **Gemelo digital del rajo:** modelar el estado en tiempo real de rutas, flota y palas
- **Simulación de escenarios:** evaluar configuraciones alternativas antes de implementarlas (herramienta de planificación)
- **Integración con Módular:** definir contrato de datos como pilar del piloto
- **KPIs objetivo del piloto:** tiempo de ciclo camión, tasa de congestión por intersección, productividad por fase, colas activas

## Limitaciones o advertencias

- Confirmar si el desafío ya tiene un proceso de selección de proveedores activo o si es una convocatoria abierta
- La restricción de ciberseguridad (sin dispositivos externos) debe quedar explícita en la propuesta técnica
- Validar versión y API disponible de Módular antes de comprometer integración

---
*Archivo: `30-Projects/BHP_Aster/Documentacion/Referencias/`*
