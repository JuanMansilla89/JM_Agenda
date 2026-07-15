---
fecha: 2026-07-14
proyecto: DataTwin - Quellaveco
cliente: Anglo American / Quellaveco
proveedor: ASTAY
estado: evaluación preliminar
clasificacion: confidencial
---

# Anexo de Requisitos de Seguridad de la Información
## Comentarios, brechas y planes de acción mínimos para ASTAY

## 1. Objetivo del documento

Este documento transforma el anexo contractual de seguridad en un plan de cumplimiento verificable para ASTAY. La evaluación es preliminar y deberá cerrarse con el organigrama vigente, la Declaración de Aplicabilidad del SGSI, los procedimientos internos y la matriz contractual definitiva.

## 2. Contexto operativo considerado

- ASTAY cuenta con un Sistema de Gestión de Seguridad de la Información y certificación ISO vigente, sujeto a confirmación de alcance y versión aplicable.
- La aplicación DataTwin de Quellaveco se encuentra desplegada en la red e infraestructura administrada por el cliente.
- ASTAY no opera infraestructura productiva on-premise propia para este servicio.
- ASTAY dispone de ambientes de desarrollo y QA segregados por cliente.
- El acceso a los ambientes técnicos se realiza mediante VPN y cuentas autorizadas.
- La información de cada cliente no se mezcla ni comparte con otros clientes.
- ASTAY cuenta con oficinas físicas, equipos de trabajo, personal de soporte y proveedores especializados.
- El código, los repositorios, el pipeline DevOps/DevSecOps, los equipos de usuario, los accesos remotos y los procesos de soporte permanecen bajo responsabilidad de ASTAY.

## 3. Criterio de evaluación

| Estado | Definición |
|---|---|
| Cumple preliminarmente | Existe una práctica o control declarado que satisface el requisito; falta consolidar evidencia. |
| Cumple parcialmente | Existe un control, pero requiere formalización, cobertura adicional o evidencia. |
| Brecha | No se ha identificado un control suficiente o la obligación exige una capacidad adicional. |
| Dependencia del cliente | El control se ejecuta principalmente en infraestructura del cliente; ASTAY debe documentar la dependencia, validar la configuración y obtener evidencia o aceptación. |
| No aplica directamente | El escenario descrito no ocurre actualmente, pero debe mantenerse una política preventiva y una justificación formal. |

## 4. Modelo mínimo de gobierno recomendado

El requisito de contar con un “equipo dedicado” no obliga necesariamente a crear una gerencia completa, pero sí exige una función de seguridad formal, con autoridad, responsabilidades, recursos y evidencias de operación.

### Estructura mínima

1. **Sponsor C-Level:** CTO o Gerencia General. Aprueba riesgos, presupuesto, excepciones y prioridades.
2. **Responsable del SGSI / Information Security Officer:** rol interno formal, con dedicación definida y capacidad de seguimiento transversal.
3. **Coordinador DevSecOps:** responsable de seguridad del ciclo de desarrollo, vulnerabilidades, parches y evidencias técnicas.
4. **Representante de Infraestructura y Soporte:** responsable de endpoints, VPN, accesos, antivirus/EDR, inventario y atención de incidentes.
5. **Representante de Recursos Humanos y Legal/Contratos:** responsable de antecedentes, NDA, capacitación, terceros y obligaciones contractuales.
6. **Proveedor externo especializado:** pentesting anual, apoyo de respuesta a incidentes y, si no existe capacidad interna suficiente, servicio de vCISO o asesor SGSI fraccional.

### Comité de Seguridad de la Información

- Presidencia: ejecutivo C-Level.
- Secretaría: responsable del SGSI.
- Frecuencia mínima: trimestral; mensual durante el cierre de brechas de este anexo.
- Agenda obligatoria: riesgos, incidentes, vulnerabilidades, accesos, terceros, auditorías, excepciones y planes de tratamiento.
- Evidencias: acta, asistentes, acuerdos, responsables, fechas objetivo y seguimiento.

---

# 5. Análisis detallado por requisito

## A. Organización de la Seguridad de la Información

### A.1 Equipo dedicado y comité liderado por C-Level

**Requisito:** El Proveedor debe contar con un equipo dedicado de seguridad de la información, con gobernanza mediante un comité liderado por ejecutivos C-Level.

**Evaluación preliminar:** **Cumple parcialmente.** ASTAY cuenta con un SGSI y liderazgo técnico, pero debe demostrar una función dedicada, un comité formal y una cadencia documentada.

**Comentario:** La certificación ISO ayuda, pero no reemplaza la evidencia específica del comité ni la asignación formal de roles. “Dedicado” debe interpretarse como una función con responsabilidades explícitas y capacidad operativa, no necesariamente como personal 100 % exclusivo. Esta interpretación debe validarse contractualmente con el cliente.

**Plan de acción mínimo:**

1. Emitir resolución interna que constituya el Comité de Seguridad de la Información.
2. Designar al Sponsor C-Level y al Responsable del SGSI.
3. Aprobar términos de referencia, miembros, frecuencia, quórum y autoridad.
4. Crear un RACI de seguridad para DataTwin y Quellaveco.
5. Celebrar la primera sesión y aprobar el plan de cumplimiento del anexo.
6. Contratar un servicio vCISO fraccional si la capacidad interna no cubre seguimiento, auditoría y respuesta a incidentes.

**Responsable sugerido:** CTO / Gerencia General, Responsable del SGSI.

**Evidencias:** resolución, organigrama funcional, perfiles de puesto, actas, RACI, plan anual de seguridad, contrato de vCISO si aplica.

### A.2 Sistema de Gestión de Seguridad de la Información

**Evaluación preliminar:** **Cumple preliminarmente**, condicionado a que la certificación ISO cubra la organización, los servicios tecnológicos y los activos utilizados para DataTwin.

**Comentario:** Debe validarse el alcance certificado, la vigencia del certificado, la Declaración de Aplicabilidad, la evaluación de riesgos y el plan de tratamiento. Si DataTwin o los ambientes de desarrollo/QA están fuera del alcance, deberán incorporarse o cubrirse mediante un anexo específico.

**Plan de acción mínimo:**

1. Confirmar vigencia, alcance y exclusiones de la certificación ISO 27001.
2. Incorporar los activos, procesos y proveedores de DataTwin al inventario del SGSI.
3. Ejecutar una evaluación de riesgos específica para Quellaveco.
4. Registrar controles existentes, brechas, tratamiento, propietario del riesgo y fecha objetivo.
5. Mantener revisión semestral o ante cambios relevantes de arquitectura.

**Responsable sugerido:** Responsable del SGSI, CTO, líderes técnicos.

**Evidencias:** certificado, alcance, SoA, matriz de riesgos, plan de tratamiento, auditorías internas, revisión por la dirección.

---

## B. Seguridad de Recursos Humanos

### B.1 Verificación de antecedentes y credenciales

**Evaluación preliminar:** **Por verificar / posible brecha.** No se ha confirmado un proceso documentado de background check para todo el personal asignado al servicio.

**Comentario:** La verificación debe ser proporcional al rol, legalmente válida y consistente con la normativa laboral y de protección de datos. Debe incluir, como mínimo, identidad, referencias laborales y estudios declarados. Para roles privilegiados puede incluir verificaciones adicionales permitidas por ley.

**Plan de acción mínimo:**

1. Incorporar la verificación de antecedentes al procedimiento de selección y asignación a clientes críticos.
2. Definir controles diferenciados para desarrolladores, administradores, soporte y terceros.
3. Regularizar al personal ya asignado mediante una campaña de validación documental.
4. Mantener constancia de la revisión, sin almacenar información excesiva.
5. Incluir una cláusula equivalente en contratos de proveedores y subcontratistas.

**Responsable sugerido:** Recursos Humanos, Legal, Responsable del SGSI.

**Evidencias:** procedimiento de contratación, checklist, registros de validación, consentimiento, cláusulas contractuales.

### B.2 Capacitación formal en seguridad y protección de datos

**Evaluación preliminar:** **Cumple parcialmente**, sujeto a evidencia de periodicidad, evaluación y cobertura.

**Comentario:** Una charla de inducción aislada no es suficiente. Se requiere un programa formal, medible y aplicable a personal interno y terceros.

**Plan de acción mínimo:**

1. Capacitación obligatoria al ingreso y renovación anual.
2. Módulo específico para DataTwin: manejo de datos del cliente, VPN, cuentas, incidentes, phishing, transferencia segura y prohibiciones.
3. Evaluación de conocimiento y registro de asistencia.
4. Simulaciones periódicas de phishing y refuerzo para quienes no alcancen el umbral.
5. Capacitación especializada para desarrolladores en secure coding y para soporte en respuesta a incidentes.

**Responsable sugerido:** Responsable del SGSI, RR. HH., DevSecOps.

**Evidencias:** plan anual, contenido, registros, resultados de evaluación, métricas de cumplimiento.

---

## C. Terceros

### C.1 Acceso de terceros solo con autorización escrita

**Evaluación preliminar:** **Cumple parcialmente.** ASTAY debe consolidar un registro formal de terceros, accesos y autorizaciones específicas del cliente.

**Comentario:** Aplica a consultores, subcontratistas, soporte externo, proveedores cloud, pentesters, herramientas SaaS y cualquier persona o sistema que pueda acceder a datos, código, logs o credenciales del cliente.

**Plan de acción mínimo:**

1. Crear inventario de terceros relacionados con DataTwin.
2. Clasificar si acceden a datos, sistemas, código, logs o ambientes.
3. Obtener autorización escrita del cliente antes de habilitar acceso cuando corresponda.
4. Formalizar NDA, cláusulas de seguridad, obligaciones de incidente, devolución y eliminación de datos.
5. Aplicar mínimo privilegio, cuentas nominativas, MFA y fecha de expiración.
6. Revisar accesos de terceros mensualmente y revocarlos al cierre del servicio.

**Responsable sugerido:** Legal/Compras, Responsable del SGSI, dueño del servicio.

**Evidencias:** registro de terceros, aprobaciones, contratos, NDA, matriz de accesos, evidencias de revocación.

---

## D. Seguridad de Datos y Control de Acceso

### D.1 Prohibición de usar datos del cliente para pruebas de seguridad

**Evaluación preliminar:** **Debe formalizarse.**

**Comentario:** Las pruebas de seguridad deben utilizar datos sintéticos o anonimizados y ejecutarse en ambientes autorizados. Los pentests sobre producción solo deben realizarse con autorización expresa, alcance y ventana controlada.

**Plan mínimo:** política explícita, datos sintéticos, aprobación previa para pruebas excepcionales y registro del dataset utilizado.

**Evidencias:** estándar de pruebas, plan de pentest, evidencia de datos sintéticos, autorizaciones.

### D.2 Separación de datos entre clientes

**Evaluación preliminar:** **Cumple preliminarmente.** ASTAY declara servidores de desarrollo y QA segregados por cliente y ausencia de mezcla de información.

**Comentario:** La segregación debe demostrarse en infraestructura, repositorios, bases de datos, backups, almacenamiento documental, cuentas y flujos de soporte.

**Plan mínimo:**

1. Documentar arquitectura por cliente.
2. Identificar recursos, repositorios, VPN, cuentas y almacenamiento exclusivos.
3. Prohibir datasets multicliente salvo autorización y anonimización.
4. Ejecutar revisión trimestral de segregación.

**Evidencias:** diagramas, inventario, reglas de acceso, capturas de configuración, revisión periódica.

### D.3 Cifrado en tránsito, reposo y gestión de claves

**Evaluación preliminar:** **Cumple parcialmente / dependencia compartida.** Producción está en infraestructura del cliente; ASTAY controla el cifrado de sus equipos, ambientes de desarrollo/QA, repositorios y conexiones.

**Comentario:** Debe documentarse qué capa cifra cada parte y quién gestiona las claves. Las claves no deben residir en código, archivos compartidos o mensajería.

**Plan mínimo:**

1. Elaborar estándar criptográfico corporativo.
2. Confirmar cifrado de discos de laptops y servidores de desarrollo/QA.
3. Forzar TLS en conexiones de aplicación, base de datos, repositorios y VPN.
4. Implementar gestor de secretos; prohibir secretos en código.
5. Definir custodios, rotación, respaldo y revocación de claves.
6. Obtener evidencia del cliente para cifrado de producción o registrar dependencia aceptada.

**Evidencias:** estándar, configuraciones, inventario de claves, reportes de escaneo, matriz de responsabilidad.

### D.4 Transferencias únicamente por canales seguros

**Evaluación preliminar:** **Cumple parcialmente.** Se utiliza VPN, pero debe regularse el intercambio documental y bloquear medios inseguros.

**Plan mínimo:**

- Prohibir FTP y adjuntos sin cifrar con información sensible.
- Usar repositorios corporativos autorizados, SFTP administrado, VPN o canales del cliente.
- Habilitar clasificación de información y DLP cuando sea viable.
- Definir obligación de reporte inmediato por uso accidental de medios no autorizados.

**Evidencias:** política, configuración, guía de transferencia, registros de capacitación e incidentes.

### D.5 Aprobación de centros de datos, ambientes compartidos o ubicaciones

**Evaluación preliminar:** **Dependencia compartida.** Producción es provista por el cliente; cualquier ambiente de ASTAY, cloud o tercero debe estar previamente declarado.

**Plan mínimo:** inventario de ubicaciones, aprobación escrita antes de cambios, gestión de cambios arquitectónicos y prohibición de shadow IT.

**Evidencias:** arquitectura aprobada, listado de ubicaciones, actas de cambio y autorizaciones.

### D.6 Credenciales nominativas y no compartidas

**Evaluación preliminar:** **Debe verificarse y reforzarse.**

**Plan mínimo:** cuentas nominativas, MFA, prohibición de cuentas compartidas, revisión trimestral, baja inmediata y trazabilidad de privilegios. Las cuentas técnicas deben tener propietario, propósito, rotación y uso restringido.

**Evidencias:** matriz de accesos, logs, procedimiento alta-baja-modificación, revisiones.

### D.7 Contraseñas robustas y cambio cada 90 días

**Evaluación preliminar:** **Cumple parcialmente / requiere alineamiento técnico.**

**Comentario:** El contrato exige rotación máxima de 90 días, aun cuando algunas prácticas modernas priorizan MFA y detección de compromiso. Contractualmente debe cumplirse salvo excepción escrita del cliente.

**Plan mínimo:** política de contraseñas, MFA, gestor de contraseñas, rotación de credenciales privilegiadas y técnicas, bloqueo por intentos y control de reutilización.

**Evidencias:** política, configuración de directorio, reportes de cumplimiento.

### D.8 No almacenar datos en dispositivos no aprobados

**Evaluación preliminar:** **Cumple parcialmente.** Debe existir una lista de equipos aprobados y controles técnicos.

**Plan mínimo:**

1. Inventario de activos autorizados.
2. Cifrado de disco, EDR, bloqueo USB, MDM cuando aplique y acceso por VPN.
3. Prohibición de equipos personales.
4. Aprobación expresa del cliente para equipos que almacenen o procesen datos.
5. Minimizar descargas locales y privilegiar acceso remoto controlado.

**Evidencias:** inventario, políticas, configuración EDR/MDM, aprobaciones.

### D.9 Eliminación segura de equipos y medios

**Evaluación preliminar:** **Por formalizar.**

**Plan mínimo:** procedimiento de borrado seguro, cadena de custodia, destrucción certificada cuando corresponda y acta de disposición. Para activos del cliente, aplicar su procedimiento.

**Evidencias:** procedimiento, certificados de destrucción, registros de baja.

---

## E. Entorno Físico

### E.1 Protección de edificios y salas

**Evaluación preliminar:** **Aplica a oficinas y equipos de ASTAY; producción depende del cliente.**

**Comentario:** Aunque ASTAY no aloje servidores productivos, debe proteger oficinas, estaciones de trabajo, equipos de red y cualquier medio que permita acceso al cliente.

**Plan mínimo:**

- Control de acceso físico y registro de visitantes.
- Zonas restringidas para equipos de red y activos críticos.
- CCTV o medidas equivalentes según riesgo.
- Extintores, detección de humo, plan de emergencia y mantenimiento eléctrico.
- Política de escritorio limpio y bloqueo automático.
- Evaluación básica de riesgos de incendio, sismo, inundación y continuidad.

**Evidencias:** procedimiento, registros, fotografías, mantenimiento, simulacros, plan de continuidad.

---

## F. Comunicaciones y Operaciones

### F.1 Seguridad física y lógica de redes

**Evaluación preliminar:** **Cumple parcialmente / alcance compartido.**

**Plan mínimo:** segmentación, VPN, MFA, firewall, inventario de activos, hardening, monitoreo, respaldos de configuración y revisión de reglas. Documentar qué controles son de ASTAY y cuáles del cliente.

### F.2 Prevención de corrupción o borrado de datos del cliente

**Evaluación preliminar:** **Debe formalizarse.**

**Plan mínimo:** mínimo privilegio, separación de funciones, backups, pruebas de restauración, scripts versionados, cambios aprobados, transacciones reversibles y procedimientos de rollback.

**Evidencias:** matriz de permisos, logs, plan de respaldo, pruebas de restauración, tickets de cambio.

### F.3 Firewalls y política deny-by-default

**Evaluación preliminar:** **Dependencia compartida.** ASTAY debe proteger sus redes y ambientes; el cliente controla la infraestructura productiva.

**Plan mínimo:**

- Regla por defecto de denegación.
- Revisión semestral de reglas y después de cambios relevantes.
- Escaneo o validación de exposición.
- Evidencia del cliente para producción o aceptación formal de la dependencia.

### F.4 Antivirus/EDR y prevención de malware

**Evaluación preliminar:** **Por verificar.**

**Plan mínimo:** EDR administrado en endpoints y servidores bajo control de ASTAY, actualizaciones automáticas, monitoreo centralizado, aislamiento, escaneo de archivos y procedimiento de respuesta.

**Evidencias:** consola EDR, cobertura, estado de firmas/agentes, incidentes y excepciones.

### F.5 Prohibición de almacenamiento en dispositivos móviles o portátiles

**Evaluación preliminar:** **Debe formalizarse.**

**Plan mínimo:** prohibición por defecto, bloqueo de medios removibles, excepción escrita, cifrado obligatorio, registro y borrado posterior.

### F.6 Seguridad de redes inalámbricas

**Evaluación preliminar:** **Cumple parcialmente, sujeto a configuración.**

**Plan mínimo:** WPA2-Enterprise o superior, red corporativa separada de invitados, contraseñas/credenciales gestionadas, deshabilitar WPS, revisión de firmware y segmentación.

**Comentario:** El requisito establece WPA2 como mínimo; se recomienda WPA3 cuando sea compatible.

### F.7 Parches críticos en 72 horas y estándar en 14 días

**Evaluación preliminar:** **Brecha probable si no existe un proceso medido y evidencia de cumplimiento.**

**Plan mínimo:**

1. Inventario de software y activos.
2. Fuente de alertas de vulnerabilidad.
3. Clasificación de criticidad y SLA contractual.
4. Ventana de validación rápida en QA.
5. Despliegue, rollback y evidencia.
6. Registro de excepciones aprobado por C-Level y, cuando afecte al cliente, aceptación escrita.
7. Coordinación con Quellaveco para componentes productivos administrados por el cliente.

**Evidencias:** política, dashboard, tickets, registros de parcheo, excepciones.

---

## G. Desarrollo de Sistemas

### G.1 Separación desarrollo, QA y producción

**Evaluación preliminar:** **Cumple preliminarmente.** ASTAY declara ambientes de desarrollo y QA segregados; producción reside en infraestructura del cliente.

**Plan mínimo:** diagramar la separación, restringir conectividad, usar cuentas diferentes, impedir despliegues directos y documentar promoción entre ambientes.

### G.2 Validación de datos de entrada provenientes del cliente

**Evaluación preliminar:** **Cumple parcialmente / debe evidenciarse.**

**Plan mínimo:** esquemas de validación, tipos, rangos, obligatoriedad, integridad referencial, idempotencia, manejo de errores, cuarentena y trazabilidad de registros rechazados.

### G.3 Pruebas de seguridad de aplicaciones antes de liberar

**Evaluación preliminar:** **Brecha parcial.** Un flujo DevOps debe ampliarse a DevSecOps con controles obligatorios.

**Plan mínimo:**

- SAST en cada merge o pull request.
- Escaneo de dependencias/SCA y SBOM.
- Detección de secretos.
- Escaneo de imágenes de contenedor e IaC, si aplica.
- DAST en QA para versiones mayores.
- Revisión de código para módulos críticos.
- Quality gate que bloquee vulnerabilidades críticas/altas sin excepción aprobada.

**Evidencias:** pipeline, reportes, criterios de aceptación, tickets de remediación.

### G.4 Uso de Active Directory del cliente

**Evaluación preliminar:** **Dependencia del cliente / integración requerida.**

**Plan mínimo:** integrar DataTwin con Microsoft Entra ID/Active Directory del cliente, documentar protocolos, grupos, roles, MFA, altas/bajas y cuentas de emergencia. Si existe una limitación temporal, obtener excepción escrita y roadmap.

### G.5 Contraseñas almacenadas y transmitidas de forma cifrada

**Evaluación preliminar:** **Debe verificarse.**

**Comentario:** Las contraseñas de usuarios no deben ser reversibles; deben almacenarse mediante hash robusto con salt. Las credenciales técnicas deben mantenerse en un gestor de secretos y transportarse por canales cifrados.

**Plan mínimo:** revisión de código, inventario de secretos, migración a secret manager y rotación inmediata de secretos expuestos.

### G.6 Autenticación y publicación exclusivamente por HTTPS

**Evaluación preliminar:** **Dependencia compartida.** ASTAY configura la aplicación; el cliente puede administrar DNS, certificados, balanceadores y red.

**Plan mínimo:** TLS vigente, HSTS cuando corresponda, deshabilitar protocolos/cifrados débiles, pruebas automáticas y evidencia del certificado.

### G.7 Redirección automática HTTP a HTTPS

**Evaluación preliminar:** **Debe verificarse.**

**Plan mínimo:** configurar reverse proxy o servidor web, bloquear contenido mixto y probar en cada despliegue.

### G.8 Certificados confiables y configuración segura

**Evaluación preliminar:** **Dependencia compartida.**

**Plan mínimo:** certificados de autoridad aprobada por el cliente, monitoreo de expiración, renovación anticipada, hostname correcto, cadena completa y configuración robusta de TLS.

### G.9 Prohibición de credenciales hard-coded

**Evaluación preliminar:** **Debe verificarse con tooling.**

**Plan mínimo:** secret scanning en repositorios e historial, pre-commit hooks, vault, variables protegidas y rotación ante hallazgos.

### G.10 Backups/temporales fuera del webroot y servicios mínimos

**Evaluación preliminar:** **Debe verificarse.**

**Plan mínimo:** hardening, lista blanca de servicios, revisión de rutas expuestas, bloqueo de directory listing y escaneo de artefactos antes de release.

### G.11 Tokens de sesión seguros y expiración por 30 minutos

**Evaluación preliminar:** **Debe verificarse funcionalmente.**

**Plan mínimo:** tokens aleatorios, Secure/HttpOnly/SameSite, rotación, revocación, protección replay, expiración por inactividad de 30 minutos y cierre de sesión efectivo. Alinear con AD/Entra ID.

### G.12 Mensajes de error y banners sin información sensible

**Evaluación preliminar:** **Debe verificarse.**

**Plan mínimo:** errores genéricos al usuario, detalle solo en logs protegidos, deshabilitar banners/versiones, revisar headers y controlar stack traces.

### G.13 Acceso remoto seguro para administración y soporte

**Evaluación preliminar:** **Cumple parcialmente.** ASTAY utiliza VPN, pero debe reforzar gobierno y trazabilidad.

**Plan mínimo:** VPN aprobada, MFA, cuentas nominativas, bastion/jump host cuando aplique, restricción por IP, sesiones registradas, acceso just-in-time y aprobación del cliente.

### G.14 Cambio de credenciales por defecto

**Evaluación preliminar:** **Debe verificarse mediante checklist de hardening.**

**Plan mínimo:** baseline de configuración, escaneo de credenciales por defecto, evidencia antes del pase a producción.

### G.15 Deshabilitación de servicios, puertos y herramientas no utilizados

**Evaluación preliminar:** **Dependencia compartida.**

**Plan mínimo:** baseline CIS o equivalente, inventario de puertos, escaneo, justificación de excepciones y revisión por release.

### G.16 Restricción de interfaces administrativas

**Evaluación preliminar:** **Debe verificarse.**

**Plan mínimo:** acceso solo por VPN o rangos autorizados, MFA, rutas no públicas, controles de rate limiting, monitoreo y sin exposición directa a internet.

**Comentario:** Cambiar nombres por defecto puede reducir ataques oportunistas, pero no sustituye autenticación, segmentación ni control de acceso.

### G.17 Cifrado de bases de datos y backups en todos los ambientes

**Evaluación preliminar:** **Cumple parcialmente / dependencia compartida.**

**Plan mínimo:** cifrado de disco o volumen, cifrado de backups, control de claves, pruebas de restauración, retención y eliminación. Confirmar producción con el cliente.

### G.18 Cifrado entre base de datos, aplicación y servidor web

**Evaluación preliminar:** **Debe verificarse.**

**Plan mínimo:** TLS interno, validación de certificados, prohibición de conexiones plaintext y pruebas automatizadas.

### G.19 Permisos y prevención de directory traversal

**Evaluación preliminar:** **Debe verificarse.**

**Plan mínimo:** RBAC, mínimo privilegio, validación de rutas, pruebas SAST/DAST y revisión de permisos de sistema de archivos.

### G.20 DMZ y controles certificados

**Evaluación preliminar:** **Dependencia principal del cliente.**

**Comentario:** Como producción está en infraestructura de Quellaveco, ASTAY debe entregar requisitos de arquitectura segura y validar con el cliente la existencia de DMZ, firewall y segmentación. No debe declarar cumplimiento unilateral sin evidencia del cliente.

**Plan mínimo:** arquitectura de referencia, checklist de prerequisitos, acta de validación y aceptación de riesgos/dependencias.

### G.21 Base de datos separada de servidores web y no expuesta a internet

**Evaluación preliminar:** **Dependencia compartida.**

**Plan mínimo:** subredes o segmentos separados, reglas explícitas, DB sin IP pública, escaneo de exposición y evidencia de arquitectura.

### G.22 Prohibición de datos productivos para desarrollo o pruebas

**Evaluación preliminar:** **Riesgo relevante.** La declaración de ambientes segregados por cliente no confirma que los datos sean sintéticos.

**Plan mínimo:** política de datos de prueba, generación sintética, anonimización aprobada cuando sea indispensable, prohibición de copias ad hoc y proceso de excepción.

### G.23 Prohibición de pruebas en producción

**Evaluación preliminar:** **Debe formalizarse.**

**Plan mínimo:** QA obligatorio, plan de pruebas, ventana de cambio, smoke tests limitados postdespliegue y aprobación para cualquier validación productiva.

### G.24 Parches en sistemas en vivo

**Evaluación preliminar:** **Misma brecha que F.7, con dependencia del cliente.**

**Plan mínimo:** proceso conjunto ASTAY–Quellaveco, SLA, inventario, aprobación de cambios, evidencia y excepciones.

### G.25 Validación de entradas y escaneo antimalware de archivos

**Evaluación preliminar:** **Cumple parcialmente / debe implementarse donde exista carga de archivos.**

**Plan mínimo:** whitelist de extensiones y MIME, límite de tamaño, almacenamiento temporal aislado, antivirus/sandbox, renombrado seguro, validación de contenido y rechazo auditable.

---

## H. Pruebas de Vulnerabilidades

### H.1 Escaneo y pentest anual por tercero líder

**Evaluación preliminar:** **Brecha o evidencia pendiente.**

**Comentario:** Se recomienda contratar un proveedor independiente con experiencia en aplicaciones web, infraestructura y entornos industriales/mineros. El alcance debe incluir los componentes administrados por ASTAY y coordinar el entorno productivo con el cliente.

**Plan mínimo:**

1. Contratar pentest anual independiente.
2. Definir alcance, reglas de engagement, seguro y confidencialidad.
3. Acordar con el cliente pruebas sobre infraestructura bajo su control.
4. Remediar hallazgos críticos/altos con SLA.
5. Ejecutar retest y conservar informe ejecutivo y técnico.

**Evidencias:** contrato, metodología, informe, plan de acción, retest.

### H.2 Programa continuo de gestión de vulnerabilidades

**Evaluación preliminar:** **Brecha parcial.**

**Plan mínimo:** SAST/SCA/DAST, escaneo de infraestructura, threat intelligence, priorización por riesgo, tickets, SLA, excepciones y métricas mensuales.

**Indicadores mínimos:** vulnerabilidades abiertas por severidad, edad promedio, cumplimiento de SLA, cobertura de activos y tasa de reincidencia.

---

## I. Gestión de Incidentes de Seguridad de la Información

### I.1 Procedimiento coordinado de reporte de brechas

**Evaluación preliminar:** **Cumple parcialmente si el SGSI ya incluye incidentes; falta protocolo específico con Quellaveco.**

**Plan mínimo:** matriz de contactos 24x7, categorías, canal seguro, plantilla inicial, criterios de escalamiento, roles y ejercicios de mesa.

### I.2 Notificación dentro de 24 horas

**Evaluación preliminar:** **Debe incorporarse como SLA contractual interno.**

**Comentario:** La organización debe poder detectar, clasificar y escalar un incidente antes de que expire el plazo. El reporte inicial puede ser preliminar y ampliarse después.

**Plan mínimo:** guardia o mecanismo de escalamiento, reloj de incidente, aprobación rápida y plantilla preaprobada.

### I.3 Cooperación, entrevistas y entrega de logs

**Evaluación preliminar:** **Debe formalizarse y habilitar retención suficiente.**

**Plan mínimo:** cadena de custodia, retención de logs, sincronización horaria, preservación de evidencia, responsables y procedimiento legal.

### I.4 Pentest postincidente dentro de 10 días y sin costo para el cliente

**Evaluación preliminar:** **Riesgo contractual y financiero.**

**Plan mínimo:** contrato marco o bolsa preacordada con proveedor de pentest, presupuesto de contingencia, seguro de ciberresponsabilidad y procedimiento de activación urgente.

---

## J. Derecho de Auditoría y Monitoreo

### J.1 Entrega de información sobre instalaciones, procedimientos y personal

**Evaluación preliminar:** **Cumple parcialmente mediante el SGSI, sujeto a readiness documental.**

**Plan mínimo:** crear un “audit pack” con certificado ISO, alcance, políticas, organigrama, RACI, inventario, riesgos, capacitaciones, terceros, vulnerabilidades, incidentes y continuidad. Definir reglas de confidencialidad y protección de datos del personal.

---

## K. Administración de Sistemas

### K.1 Cumplimiento de políticas y estándares del cliente

**Evaluación preliminar:** **Dependencia del cliente.** ASTAY no puede comprometer cumplimiento de documentos no recibidos o no evaluados.

**Plan mínimo:** solicitar el catálogo vigente, registrar versiones, evaluar brechas, capacitar al equipo, incorporar controles en el onboarding y gestionar excepciones por escrito.

**Recomendación contractual:** incluir que las nuevas políticas o cambios materiales estarán sujetos a evaluación de impacto, plazo razonable y acuerdo de costos cuando impliquen cambios fuera del alcance original.

---

## L. Fin del Servicio

### L.1 Acuerdo sobre información y formato de devolución

**Evaluación preliminar:** **Debe formalizarse en un plan de salida.**

**Plan mínimo:** inventario de datos y artefactos, propietario, formato, medio de entrega, validación y responsables.

### L.2 Devolución, eliminación segura y confirmación formal

**Evaluación preliminar:** **Debe formalizarse.**

**Plan mínimo:** procedimiento de offboarding, borrado de ambientes, repositorios de datos, backups y dispositivos; revocación de accesos; acta de eliminación; excepción para código genérico o propiedad intelectual claramente separada de datos del cliente.

### L.3 Retención legal posterior al servicio

**Evaluación preliminar:** **Debe incorporarse a la política de retención.**

**Plan mínimo:** identificar base legal, período, custodio, acceso restringido, registro de accesos, notificación al cliente y destrucción al vencimiento.

---

# 6. Controles adicionales recomendados

Los siguientes puntos no aparecen de forma explícita o requieren mayor precisión en el anexo. Se recomienda incorporarlos al plan de cumplimiento:

1. **Matriz de responsabilidad compartida:** separar controles de ASTAY, controles del cliente y controles conjuntos.
2. **Inventario y clasificación de activos:** datos, código, repositorios, secretos, servidores, endpoints, SaaS y terceros.
3. **MFA obligatorio:** para VPN, repositorios, cloud, correo y cuentas privilegiadas.
4. **Gestión de accesos privilegiados:** cuentas nominativas, aprobación, just-in-time, revisión y trazabilidad.
5. **Secure SDLC:** criterios de seguridad desde diseño, threat modeling, revisión de arquitectura y gates automáticos.
6. **SBOM y seguridad de cadena de suministro:** inventario de dependencias y evaluación de componentes de terceros.
7. **Gestión centralizada de logs:** eventos de autenticación, administración, cambios, errores y seguridad.
8. **Continuidad y recuperación:** RTO/RPO, backups, restauración y coordinación con el cliente.
9. **Gestión de cambios:** aprobación, pruebas, rollback y segregación de funciones.
10. **Gestión de excepciones:** plazo, riesgo, compensaciones, aprobación C-Level y aceptación del cliente cuando corresponda.
11. **Seguro de ciberresponsabilidad:** revisar cobertura por incidentes, costos forenses, pentest postincidente y responsabilidad contractual.
12. **Privacidad y protección de datos:** confirmar si se procesan datos personales y definir obligaciones específicas.
13. **Borrado remoto y MDM:** para endpoints con acceso o almacenamiento autorizado.
14. **Revisión de proveedores SaaS:** repositorios, CI/CD, ticketing, monitoreo y colaboración.
15. **Pruebas de respuesta a incidentes:** ejercicio de mesa al menos anual y previo a cambios mayores.

# 7. Priorización de brechas

## Prioridad 1 — Contractual y de gobierno

- Constituir comité C-Level y función dedicada.
- Confirmar alcance real del SGSI/ISO.
- Crear matriz de responsabilidad compartida.
- Formalizar protocolo de incidentes de 24 horas.
- Crear registro y autorización de terceros.
- Preparar evidencia para auditoría.

## Prioridad 2 — Técnica crítica

- Implementar programa DevSecOps y gestión de vulnerabilidades.
- Contratar pentest externo anual.
- Formalizar SLA de parches 72 horas/14 días.
- Confirmar cifrado, gestión de secretos, MFA y EDR.
- Validar integración con AD/Entra ID y controles HTTPS/TLS.
- Prohibir datos productivos en desarrollo y pruebas.

## Prioridad 3 — Madurez operativa

- Background checks y capacitación formal.
- Gestión de activos y medios removibles.
- Retención de logs y cadena de custodia.
- Plan de salida y eliminación segura.
- Continuidad, restauración y ejercicios.

# 8. Conclusión ejecutiva

ASTAY dispone de una base favorable por contar con un SGSI certificado, ambientes segregados por cliente, acceso por VPN y despliegue productivo dentro de la infraestructura de Quellaveco. Sin embargo, el anexo exige demostrar operación sostenida, no solo existencia de políticas.

Las brechas más probables se concentran en: gobierno C-Level formal, función dedicada, evidencia de background checks, autorización de terceros, programa DevSecOps, gestión de vulnerabilidades, pentest externo anual, SLA de parches, protocolo de incidente de 24 horas, matriz de responsabilidad compartida y plan de salida.

La alternativa mínima y eficiente es mantener el liderazgo interno, designar un responsable formal del SGSI y complementar la capacidad con un servicio externo fraccional de vCISO y un proveedor independiente de pentesting. Esto permite cumplir el requisito sin crear de inmediato una gerencia de ciberseguridad completa, siempre que el cliente acepte la estructura y se demuestre su operación mediante evidencias.
