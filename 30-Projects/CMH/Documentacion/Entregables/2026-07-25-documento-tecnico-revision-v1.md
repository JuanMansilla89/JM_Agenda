---
fecha: 2026-07-25
tipo: entregable
proyecto: CMH
fuente: ASTAY Systems
tags: [cmh, arquitectura, revision-tecnica]
---
# Documento Técnico — Sesión de Revisión de Arquitectura
### Nexo 360 Operation + Mantenimiento 360 — Consorcio Minero Horizonte (CMH), Unidad Parcoy

**Preparado por:** Juan Mansilla / ASTAY Systems
**Fecha:** 25 de julio de 2026
**Para:** Líderes técnicos y arquitecto de software de ASTAY — documento de pre-lectura para sesión de revisión

**Fuentes utilizadas (única base de este documento, sin información adicional):**
- `Documentacion/Referencias/TDR_Nexo_360_Operation_Mantenimiento_360_CM_Parcoy_VF.md`
- `Documentacion/Entregables/2026-07-26-alcance-requisitos-tecnicos-v1.md`
- `Documentacion/Reuniones/2026-07-22-analisis-reunion-licitacion.md`
- `Documentacion/Entregables/2026-07-25-arquitectura-tecnica-v1.md`
- `Documentacion/Entregables/2026-07-25-consultas-comite-especialistas-v1.md`
- Plantilla oficial de pliego de consultas CMH (`Formato de consultas - CCMH_LIC_P060_2026.docx`) y `2026-07-25-pliego-consultas-formal-v1.docx`

---

## 1. Objetivo del documento

Presentar, para revisión de los líderes técnicos y el arquitecto de software de ASTAY, las decisiones, criterios y supuestos técnicos que se están considerando actualmente para el proyecto, con base en la información recibida y analizada hasta la fecha. El objetivo es que el equipo pueda cuestionar, complementar o validar cada punto antes de que se fijen en el diseño y en la propuesta técnica.

Cada decisión se presenta con su justificación y con el supuesto o dependencia del que depende, distinguiendo explícitamente entre **requisitos confirmados por el cliente** y **supuestos de ASTAY pendientes de confirmación**.

---

## 2. Contexto del proyecto

- **Cliente:** Consorcio Minero Horizonte (CMH), Unidad Parcoy — proceso de licitación TDR-N360-OP-01.
- **Objetivo del servicio:** diseño, desarrollo, implementación, capacitación y soporte de un software propio "Nexo 360 Operation" (planificación, asignación, órdenes de trabajo, cierre de guardia) y el módulo "Mantenimiento 360" (equipos, disponibilidad, preventivos/correctivos).
- **Modalidad contractual:** Tercerización de Servicios (Ley 29245, DL 1038, DS 006-2008-TR), confirmada por la plantilla oficial de pliego de consultas de CMH.
- **Estado del proceso:** sesión de overview de licitación el 22-jul-2026 con al menos 4 proveedores (ASTAY, BT System Chile, Altamira Technology, Grupo Edín/BIM); pliego de consultas formal ya remitido a CMH, con vencimiento de respuesta 2026-07-27.
- **Escala de referencia (TDR):** ~360 personas por guardia, ~100 equipos, 5 contratistas principales, 3 zonas, ~1.400 m de profundidad; solución pensada para ser replicable a las otras 4 unidades de CMH (Trujillo, Puno, Cerro de Pasco, y una unidad en Colombia).

---

## 3. Componentes de la solución

| Componente | Descripción |
|---|---|
| Plataforma web de gestión | Cubre Nexo 360 Operation y Mantenimiento 360 como módulos de una misma plataforma, con pantallas de sala COM y sala de guardia. |
| Aplicación tablet (campo) | App para jefes de sección/guardia y personal de mantenimiento en interior mina, con capacidad offline (Store & Forward). |
| Capa de integración | SAP (PM/MM), Microsoft Entra ID (SSO), y puntos de preparación para integraciones futuras (tracking, Deswik, "SCOM", control de campamentos, sistema antifatiga). |

---

## 4. Decisiones técnicas y supuestos, por tema

### 4.1 Arquitectura de despliegue

| Punto | Detalle |
|---|---|
| Decisión asumida | Backend monolito modular (dominios: Planificación, Frentes, Asignación, OT, Mantenimiento, Administración), no microservicios. |
| Justificación | Para ~100 usuarios concurrentes (TDR §7), el costo operativo de orquestar microservicios no se justifica; un monolito con límites de dominio claros permite migrar después si el volumen crece. |
| Frontend/backend | Frontend web responsive (SPA) y app tablet consumen el mismo API REST — evita duplicar lógica de negocio. |
| Ambientes | Dev, QA/UAT, Producción (requisito explícito del TDR §7). |
| **Supuesto pendiente de confirmación** | CMH proveería los ambientes de infraestructura (dicho verbalmente en la reunión del 22-jul), en tensión con el TDR (Anexo B, ítem G, "cotizar si aplica"). Incluido en el pliego de consultas formal enviado. |
| **Pendiente de decisión del cliente** | Ubicación del despliegue (nube privada, nube pública autorizada u on-premise) — el TDR lo deja abierto; la arquitectura se diseña agnóstica de proveedor cloud (containerizada) para no bloquear esa decisión. |

### 4.2 Modelo de usuarios, roles y segregación de accesos

| Punto | Detalle |
|---|---|
| Decisión asumida | Matriz de roles × permisos × módulo (COM, Jefe de Sección, Programador, Mantenimiento, SSOMA, Contratistas, Administradores), aplicada a nivel de API, no solo de interfaz. |
| Justificación | El TDR (N360-20) exige parametrización de roles, permisos, catálogos y empresas contratistas; debe quedar completamente configurable. |
| Segregación CMH/contratistas | Mínimo privilegio por defecto: cada contratista ve y edita únicamente los datos de su propia empresa, filtrado por `empresa_id` en el API. |
| **Supuesto pendiente de confirmación** | SSO vía Microsoft Entra ID solo para usuarios CMH; contratistas con cuenta local gestionada por la plataforma. El TDR no aclara si Entra ID debe federar también a contratistas — incluido en el pliego de consultas. |
| Diseño multi-unidad | Partición lógica por `unidad_minera_id` desde el diseño inicial, para replicar a otras unidades de CMH sin rediseño de esquema. |

### 4.3 Escalabilidad y dimensionamiento

| Punto | Detalle |
|---|---|
| Requisito confirmado (no supuesto) | 500 usuarios registrados, 100 usuarios concurrentes, impresión masiva por guardia, tableros sin degradación significativa (TDR §7). |
| Decisión asumida | Diseño con capacidad de escalado (auto-scaling o sobre-aprovisionamiento) alrededor de las ventanas de cambio de guardia (6am/6pm), en vez de dimensionar para carga constante. |
| Decisión asumida | Impresión masiva de OT como proceso asíncrono (cola de trabajos). |
| Decisión asumida | Sincronización de tablets tras reconexión procesada por lotes, no writes directos concurrentes. |
| Decisión asumida | Cache de lectura para los tableros COM de 12/24/48h. |

### 4.4 Estrategia offline-first (app tablet)

| Punto | Detalle |
|---|---|
| Requisito confirmado (no supuesto) | Modo "Store & Forward" — almacenamiento local y sincronización automática diferida (TDR §7). |
| Decisión asumida | Operan 100% offline: registro de avance/OT, checklist de equipo, cierre de labor/turno, mensajes SSOMA de la guardia en curso. Requieren conectividad: consulta de maestros actualizados, tableros COM en tiempo real. |
| **Propuesta de ASTAY, pendiente de confirmación** | Resolución de conflictos de sincronización: "último cambio gana" con registro de auditoría de la versión descartada. Incluida en el pliego de consultas; el cliente podría preferir resolución manual para campos críticos. |
| **Dato no definido por el cliente** | Duración típica y peor caso de desconexión a soportar — pendiente en el pliego de consultas; sin esta cifra, el dimensionamiento de almacenamiento local en el dispositivo es una estimación propia de ASTAY. |

### 4.5 Integración SAP

| Punto | Detalle |
|---|---|
| **Dato no definido por el cliente** | El propio Luis Chang (TI, CMH) confirmó en la reunión del 22-jul que el mecanismo de integración (archivos planos, staging o API REST) no está definido. |
| Decisión asumida por ASTAY | Diseñar el primer alcance sobre exportación por archivos/staging, dejando la puerta abierta a evolucionar hacia API si CMH lo confirma más adelante. |
| **Datos no definidos por el cliente** | Versión de SAP (ECC vs. S/4HANA), transacciones/objetos PM y MM específicos en alcance, y existencia de ambiente SAP de pruebas (sandbox/QA) — los tres incluidos en el pliego de consultas. |
| Aclaración del cliente (confirmada) | CMH indicó explícitamente que "no hace uso 100% del módulo de mantenimiento dentro de SAP", lo que matiza el alcance real de esta integración. |

### 4.6 Seguridad y cumplimiento

| Punto | Detalle |
|---|---|
| Base normativa | Estándar corporativo TTD-ES-001 (TDR §14.1), de cumplimiento obligatorio. |
| **Limitación reconocida** | El mapeo de seguridad del documento de arquitectura se basa únicamente en el resumen que el TDR hace del estándar, ya que el documento completo aún no ha sido compartido por CMH — solicitado en el pliego de consultas. |
| Decisión asumida | Auditoría de eventos funcionales/técnicos, cifrado en tránsito, controles de validación para cargas masivas (Excel/CSV) — según lo explícito del TDR. |
| **Dato no definido por el cliente** | Plataforma de SIEM/SOC de CMH y formato esperado de logs — incluido en el pliego de consultas. |

---

## 5. Supuestos críticos pendientes de confirmación por CMH

Estos son los puntos donde ASTAY ya tomó una posición de diseño sin que el cliente lo haya confirmado por escrito, y que ya fueron incluidos en el pliego de consultas formal (vence 2026-07-27):

1. Quién provee los ambientes de infraestructura (Dev/QA/Prod).
2. Si el SSO de Entra ID federa también a los contratistas.
3. Mecanismo de integración SAP (archivos/staging/API).
4. Política de resolución de conflictos en la sincronización offline.
5. Quién asume los costos de viáticos/movilización a la unidad minera (contradicción detectada entre lo dicho verbalmente en la reunión del 22-jul y el TDR §12.2/Anexo B).

---

## 6. Preguntas para la sesión de revisión

Estas preguntas buscan abrir la discusión con los líderes técnicos y el arquitecto; no reemplazan sus propias observaciones:

1. ¿Está de acuerdo el equipo con la elección de monolito modular, considerando el plan de CMH de replicar la solución a otras 4 unidades mineras, o preferirían evaluar una arquitectura orientada a microservicios desde ahora?
2. ¿La segregación de contratistas por `empresa_id` a nivel de API es suficiente, o el equipo considera necesario un modelo de aislamiento más estricto (por ejemplo, esquemas separados)?
3. ¿La propuesta de "último cambio gana + auditoría" para conflictos offline es la más adecuada para este contexto operacional, o el equipo prefiere proponer una alternativa antes de que el cliente responda?
4. Ante la falta de definición del mecanismo de integración SAP, ¿el enfoque de "archivos/staging primero, evolutivo a API después" es el que el equipo recomendaría mantener en la propuesta técnica?
5. ¿Qué riesgos adicionales, no contemplados en este documento, identifica el equipo en el diseño multi-unidad o en el dimensionamiento de escalabilidad?

---

## 7. Documentos de referencia para profundizar

- TDR completo: `Documentacion/Referencias/TDR_Nexo_360_Operation_Mantenimiento_360_CM_Parcoy_VF.md`
- Documento de alcance y requisitos técnicos: `Documentacion/Entregables/2026-07-26-alcance-requisitos-tecnicos-v1.md`
- Análisis de la reunión de licitación (22-jul): `Documentacion/Reuniones/2026-07-22-analisis-reunion-licitacion.md`
- Arquitectura técnica de referencia (documento fuente de este análisis): `Documentacion/Entregables/2026-07-25-arquitectura-tecnica-v1.md`
- Pliego de consultas formal enviado a CMH: `Documentacion/Entregables/2026-07-25-pliego-consultas-formal-v1.docx`
