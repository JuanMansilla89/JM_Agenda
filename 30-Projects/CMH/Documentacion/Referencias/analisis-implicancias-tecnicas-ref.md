---
fecha: 2026-07-26
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Análisis interno ASTAY
url: 
tags: [cmh]
---
# Referencia — Análisis de implicancias técnicas (Nexo 360 + Mantenimiento 360)

**Proyecto:** CMH
**Fuente:** Análisis interno ASTAY, a partir de [[nexo360-mantenimiento360-requerimientos-ref]]
**URL / ubicación:** —
**Tipo:** análisis interno / preparación técnica

---

## Resumen

Análisis interno de las brechas y riesgos técnicos que introduce el documento de requerimientos de CMH, para uso del equipo ASTAY antes de la reunión técnica de levantamiento y antes de preparar la propuesta de alto nivel / orden de magnitud. No es para envío al cliente.

## Puntos clave extraídos

### 1. Integración SAP (PM/MM) — obligatoria
- CMH no especifica versión de SAP (ECC vs. S/4HANA), lo que cambia radicalmente el mecanismo de integración disponible (BAPI/IDoc/RFC en ECC vs. APIs OData/REST nativas en S/4HANA).
- El documento deja abiertas tres vías: archivos planos, tablas de staging, o APIs REST — "según determine la arquitectura TI de CMH". Esto implica que **la decisión no depende de ASTAY**; se necesita que CMH defina su arquitectura de integración antes de poder dimensionar el esfuerzo con precisión.
- Riesgo: subestimar el esfuerzo si se asume API REST y termina siendo integración batch por archivos planos (más simple) o viceversa (más compleja, requiere middleware).
- Pregunta pendiente para la reunión técnica: ¿qué módulos/transacciones específicas de PM/MM deben integrarse? (ej. avisos de mantenimiento, órdenes, backlog de repuestos vía MM).

### 2. SSO con Microsoft Entra ID (SAML 2.0 / OIDC)
- Requerimiento estándar y bien soportado por la mayoría de stacks modernos (Auth0, MSAL, Keycloak como broker, etc.).
- Riesgo bajo técnicamente, pero implica dependencia de que CMH provisione el tenant/app registration a tiempo — puede convertirse en cuello de botella de cronograma si no se coordina temprano.
- Debe confirmarse si CMH exige un IdP único (solo Entra ID) o si se requiere federación con otros directorios (contratistas externos, ~5 empresas principales en mina).

### 3. Cumplimiento TTD-ES-001 (estándar corporativo de desarrollo seguro)
- No se conoce el contenido completo del estándar — es un documento interno de CMH que debe solicitarse.
- Implicancias ya declaradas: sin cuentas genéricas, RBAC de mínimo privilegio, logs completos de auditoría transaccional.
- Riesgo: el estándar puede incluir requisitos adicionales no mencionados (ej. pentesting obligatorio, SAST/DAST, retención de logs, cifrado en reposo) que afecten el esfuerzo y el costo. **Solicitar el documento TTD-ES-001 completo en la reunión técnica.**

### 4. Capacidad offline (Store & Forward)
- Es el requerimiento técnicamente más exigente del documento: sincronización diferida confiable en un entorno con ~360 personas y ~80 equipos operando en interior mina con conectividad intermitente.
- Implica diseño cuidadoso de: resolución de conflictos (last-write-wins vs. merge), cola de sincronización, límites de almacenamiento local (IndexedDB/similar), y UX que comunique claramente el estado "sin sincronizar" a los usuarios de campo.
- Es especialmente crítico para el Bloque A (registro de avances SIC, cierre de guardia) donde la pérdida o duplicación de datos de un turno tiene impacto operacional directo.
- Pregunta pendiente: ¿cuál es la duración típica y peor caso de desconexión? (afecta cuánto debe retener el buffer local antes de forzar sincronización o alertar).

### 5. Motor de asignación y turnos (Bloque A, ítem 4)
- Es el componente de mayor complejidad algorítmica: sugerencia automatizada considerando prioridad, compatibilidad técnica, ubicación y seguridad — se acerca a un problema de optimización/scheduling con restricciones, no un CRUD simple.
- Depende de datos confiables de disponibilidad (Bloque B) como precondición ("mandatorio" según el documento) — esto crea un acoplamiento fuerte entre ambos bloques desde el día uno, no se puede entregar Nexo 360 Operation de forma aislada sin Mantenimiento 360 al menos en su función de disponibilidad.
- Pregunta pendiente: ¿el motor debe ser determinístico/basado en reglas explícitas, o se espera algún grado de optimización automática (ej. minimizar tiempos muertos)? Afecta fuertemente el esfuerzo de desarrollo.

### 6. Dimensionamiento y concurrencia
- 500 usuarios registrados / 100 concurrentes "sin degradación en consultas ni impresiones masivas" es una carga moderada para una arquitectura web estándar bien diseñada (no requiere arquitectura distribuida especializada), pero la "impresión masiva por zona antes de ingresar a mina" (OTs con riesgos SSOMA) sí requiere diseño específico de generación de documentos en lote (ej. generación async de PDFs, cola de impresión) para no bloquear la aplicación en los picos de inicio de guardia.

## Cómo aplica al proyecto

Este análisis debe usarse para:
1. Preparar preguntas específicas y técnicas para la reunión técnica de levantamiento (versión de SAP, contenido de TTD-ES-001, peor caso de desconexión, alcance exacto del motor de asignación).
2. Informar el dimensionamiento de esfuerzo de la propuesta de alto nivel — varios ítems (SAP, offline, motor de asignación) tienen rangos de esfuerzo muy amplios según cómo se resuelvan las preguntas abiertas, por lo que la orden de magnitud inicial debería presentarse con escenarios (mínimo/máximo) más que un número único.
3. Evaluar si ASTAY tiene o necesita reforzar capacidad específica en: integración SAP, diseño de sincronización offline-first, y motores de scheduling/optimización.

## Limitaciones o advertencias

Este es un análisis preliminar basado únicamente en el documento de requerimientos; varias conclusiones (esfuerzo, riesgo) deben validarse o ajustarse tras la reunión técnica con las áreas de negocio y TI de CMH.

---
*Archivo: `Documentacion/Referencias/` del proyecto CMH*
