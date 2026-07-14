---
fecha: 2026-07-26
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Consorcio Minero Horizonte S.R.L. (CMH) — Gerencia Corporativa de Tecnología y Transformación Digital
url: 
tags: [cmh]
---
# Referencia — Requerimientos Nexo 360 Operation + Mantenimiento 360

**Proyecto:** CMH
**Fuente:** CMH — Gerencia Corporativa de Tecnología y Transformación Digital
**URL / ubicación:** Documento entregado por el cliente, archivo original "Req Nexo 360 UG - Jul26"
**Tipo:** especificación técnica / documento de alcance funcional

---

## Resumen

Documento de requerimientos entregado directamente por CMH para la Unidad Minera Parcoy (operación aurífera subterránea). Define el alcance de una plataforma web modular y multiusuario ("llave en mano funcional") compuesta por dos núcleos obligatorios:

- **Bloque A — Nexo 360 Operation:** planificación integrada y control de guardia (lógica SIC).
- **Bloque B — Módulo Mantenimiento 360:** disponibilidad y gestión de flota, integrado con el Bloque A.

Va considerablemente más allá de las "consultas técnicas de alto nivel" enviadas por ASTAY el 14/07/2026 — es en la práctica un documento de alcance funcional y técnico casi completo, con requerimientos de integración, seguridad y dimensionamiento ya definidos por CMH.

## Puntos clave extraídos

**Alcance y propiedad**
- Software, código fuente, bases de datos y documentación serán propiedad exclusiva de CMH; prohibida su comercialización o reutilización por el proveedor.
- Interfaz, documentación e interacciones de terreno 100% en español.

**Dimensionamiento (línea base)**
- ~360 personas en interior mina; ~80 equipos de flota pesada; ~20 vehículos de apoyo.
- Mínimo 500 usuarios registrados, 100 concurrentes, sin degradación en consultas ni impresiones masivas.

**Bloque A — Nexo 360 Operation**
1. Gestión de planes mensuales/semanales/diarios/por guardia (carga, edición, import masivo vía Excel/CSV).
2. Estado de frentes y maestro de labores (disponible, bloqueado, sostenimiento, perforación, voladura, limpieza, etc.).
3. Maestros de personal y cuadrillas (roles, habilidades, contratistas, historial).
4. Motor de asignación y turnos: sugerencia automatizada según prioridad, compatibilidad técnica, ubicación y seguridad.
5. Órdenes de Trabajo (OT) con riesgos SSOMA asociados + impresión masiva por zona antes de ingreso a mina.
6. Seguimiento intraturno (SIC): avances por intervalo, trazabilidad de desvíos, reasignación en caliente.
7. Cierre de guardia estructurado: captura final (avances, incidentes, consumos) que retroalimenta la planificación del turno entrante.

**Bloque B — Módulo Mantenimiento 360**
1. Maestro e historial de equipos (propios y contratistas): marcas, horómetros, criticidad, vigencia documental.
2. Disponibilidad dinámica de equipos (operativo, taller, standby, panne, preventivo) — **mandatorio** que alimente al motor de Nexo 360 antes de programar la guardia.
3. Planes preventivos/correctivos y backlog: programación por horómetro/calendario, solicitudes de taller, órdenes de mantenimiento, backlog de repuestos.
4. Ubicación de equipos: registro manual por niveles, con arquitectura preparada para lectura automatizada futura.

**Requerimientos tecnológicos y de arquitectura**
- Web responsive o híbrida, orientada a salas de control operativa (COM).
- Despliegue sobre ambientes definidos por CMH (nube privada, nube pública autorizada u on-premise), con separación Dev/QA-UAT/Prod.
- **Capacidad offline crítica:** lógica "Store & Forward" (almacenamiento local en navegador/dispositivo + sincronización diferida) para zonas de baja conectividad en interior mina.
- **Integración SAP obligatoria** (módulos PM/MM): archivos planos estructurados, tablas de staging o APIs REST, según determine la arquitectura TI de CMH.
- **Seguridad e identidad:** SSO obligatorio con Microsoft Entra ID / Azure AD (SAML 2.0 / OpenID Connect); cumplimiento estricto del estándar corporativo **TTD-ES-001** (sin cuentas genéricas, RBAC de mínimo privilegio, logs completos de auditoría transaccional).

## Cómo aplica al proyecto

Este documento cambia sustancialmente el estado del proyecto: ya no es una necesidad genérica de "digitalizar el cambio de guardia", sino un alcance funcional detallado con nombre de producto ("Nexo 360 Operation" + "Mantenimiento 360"), dos bloques obligatorios integrados, e integraciones corporativas no negociables (SAP PM/MM, Entra ID, TTD-ES-001).

Esto responde y amplía por adelantado varias de las preguntas enviadas en [[2026-07-14-consultas-tecnicas-v1|Consultas Técnicas y Funcionales]] (alcance, roles, seguridad, escalabilidad) y debería usarse como insumo principal — junto con [[short-interval-control-ref]] — para preparar la propuesta de alto nivel / orden de magnitud.

Ver análisis técnico derivado en [[analisis-implicancias-tecnicas-ref]].

## Limitaciones o advertencias

- El documento no especifica versión/módulo SAP exacto (ECC vs. S/4HANA), lo cual afecta significativamente el diseño de la interfaz PM/MM — debe confirmarse en la reunión técnica.
- No define aún el modelo de facturación/contratación (customización vs. servicio especializado), tema que sigue abierto según la reunión del 10/07.
- El texto original presenta artefactos de conversión de PDF (ej. "O(cid:431)line"); se interpretó como "Offline" por contexto.
- No se especifica el volumen de datos históricos a conservar ni SLA de disponibilidad — pendiente de la reunión técnica.

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
