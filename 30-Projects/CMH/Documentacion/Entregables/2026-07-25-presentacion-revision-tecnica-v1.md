---
fecha: 2026-07-25
tipo: entregable
proyecto: CMH
fuente: ASTAY Systems
tags: [cmh, arquitectura, revision-tecnica, presentacion]
---
# Presentación — Sesión de Revisión Técnica
### Nexo 360 Operation + Mantenimiento 360 — CMH, Unidad Parcoy

*Documento de apoyo para la sesión de revisión con líderes técnicos y arquitecto de software. Basado íntegramente en `2026-07-25-documento-tecnico-revision-v1.md`.*

---

## Objetivo de la sesión

- Revisar las decisiones técnicas y supuestos que ASTAY está considerando actualmente para el proyecto.
- Distinguir entre **requisitos confirmados por el cliente** y **supuestos propios pendientes de confirmación**.
- Recoger preguntas, observaciones y cuestionamientos del equipo antes de avanzar en el diseño.

---

## Contexto del proyecto

- Cliente: CMH, Unidad Parcoy — licitación TDR-N360-OP-01.
- Objetivo: software propio para cambio de guardia (Nexo 360 Operation) + módulo de mantenimiento de flota (Mantenimiento 360).
- Modalidad contractual: Tercerización de Servicios (Ley 29245).
- Estado: sesión de overview con 4 proveedores (22-jul); pliego de consultas formal enviado, vence 2026-07-27.
- Escala de referencia: ~360 personas/guardia, ~100 equipos, 5 contratistas, 3 zonas; solución pensada para replicarse a otras 4 unidades de CMH.

---

## Componentes de la solución

1. **Plataforma web de gestión** — Nexo 360 Operation + Mantenimiento 360 como módulos de una misma plataforma.
2. **Aplicación tablet (campo)** — offline-first (Store & Forward).
3. **Capa de integración** — SAP (), Entra ID, y preparación para futuros (tracking, Deswik, SCOM, campamentos, antifatiga).

---

## Decisión: Arquitectura de despliegue

- Backend **monolito modular**, no microservicios.
- Justificación: ~100 usuarios concurrentes no justifican el costo operativo de microservicios; migrable después si crece.
- API REST único para web y tablet.
- Ambientes Dev / QA-UAT / Producción.

**Supuesto pendiente:** ¿CMH provee la infraestructura? (dicho verbalmente, contradice el TDR) → en el pliego de consultas.

---

## Decisión: Usuarios y segregación de accesos

- Matriz de roles × permisos × módulo, aplicada a nivel de API.
- Mínimo privilegio por contratista (filtro por `empresa_id`).
- Diseño multi-unidad desde el inicio (partición lógica por unidad minera).

**Supuesto pendiente:** ¿Entra ID federa también a los contratistas, o usan cuenta local?

---

## Decisión: Escalabilidad

- Requisito confirmado: 500 usuarios registrados / 100 concurrentes (TDR).
- Diseño alrededor de los picos de cambio de guardia (6am / 6pm), no carga constante.
- Impresión masiva de OT → cola asíncrona.
- Sincronización de tablets tras reconexión → por lotes.

---

## Decisión: Offline-first (app tablet)

- Requisito confirmado: modo Store & Forward.
- Operan 100% offline: avance de OT, checklist de equipo, cierre de labor/turno, mensajes SSOMA.
- Requieren conexión: maestros actualizados, tableros COM en tiempo real.

**Propuesta ASTAY, pendiente de validar:** resolución de conflictos = "último cambio gana + auditoría".
**Dato faltante:** duración/peor caso de desconexión a soportar.

---

## Decisión: Integración SAP

- El propio cliente confirmó que el mecanismo de integración **no está definido** (archivos / staging / API).
- Enfoque asumido por ASTAY: **archivos/staging primero**, evolutivo hacia API.
- Faltan: versión de SAP, objetos PM/MM en alcance, ambiente de pruebas.
- Dato confirmado: CMH "no hace uso 100% del módulo de mantenimiento dentro de SAP".

---

## Decisión: Seguridad y cumplimiento

- Base normativa: estándar TTD-ES-001 (obligatorio).
- **Limitación:** solo tenemos el resumen del TDR — el documento completo del estándar aún no fue compartido.
- Auditoría de eventos, cifrado en tránsito, validación de cargas masivas — según lo explícito del TDR.
- Falta: plataforma SIEM/SOC de CMH y formato de logs esperado.

---

## Supuestos críticos pendientes (resumen)

| # | Supuesto | Estado |
|---|---|---|
| 1 | Quién provee la infraestructura | En pliego de consultas |
| 2 | SSO Entra ID federa a contratistas | En pliego de consultas |
| 3 | Mecanismo de integración SAP | En pliego de consultas |
| 4 | Resolución de conflictos offline | En pliego de consultas |
| 5 | Quién asume viáticos a mina | En pliego de consultas |

---

## Preguntas para discutir hoy

1. ¿Monolito modular es la elección correcta dado el plan de replicar a 4 unidades más?
2. ¿La segregación por `empresa_id` a nivel de API es suficiente, o se requiere mayor aislamiento?
3. ¿"Último cambio gana + auditoría" es la mejor propuesta para conflictos offline?
4. ¿El enfoque "archivos primero, API después" para SAP es el que debemos sostener en la propuesta?
5. ¿Qué riesgos no están cubiertos todavía en este análisis?

---

## Próximos pasos

- Recoger observaciones del equipo técnico y del arquitecto.
- Incorporar ajustes al documento de arquitectura antes de la propuesta técnica.
- Dar seguimiento a las respuestas de CMH al pliego de consultas (vence 2026-07-27).
