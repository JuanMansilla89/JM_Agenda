---
fecha: 2026-07-14
proyecto: DataTwin - Quellaveco
tipo: auditoria
estado: diagnóstico — no modifica aún los documentos 01-05
clasificacion: confidencial
---

# Auditoría de Cumplimiento — Anexo X de Seguridad de la Información
## Doble control: Documentos 01–05 vs. `Standard_terms_ES.md`

> Este documento es un diagnóstico. No modifica los documentos 01–05. Los cambios propuestos (Entregable 6) deben aplicarse en una pasada posterior, una vez validados por Gerencia.

---

# Entregable 1 — Dictamen Ejecutivo

## Conclusión general

Los cinco documentos constituyen una base seria y bien estructurada de cumplimiento, con buena fidelidad en las obligaciones de mayor severidad (plazos de 24h para incidentes, 72h/14 días para parches, 10 días para pentest postincidente sin costo para el cliente, WPA2 como mínimo). **No se detectó ninguna reducción de plazo contractual ni conversión de una obligación en recomendación opcional de forma explícita**, salvo un caso de tono (G.16 en Doc 01, ver Hallazgo H-07).

El problema principal no es de intención sino de **granularidad**: el Documento 01 agrupa sistemáticamente entre 2 y 4 obligaciones atómicas distintas bajo una sola evaluación (ver Sección "Validación de fidelidad contractual" del anexo original, cláusula de cifrado citada textualmente como ejemplo por el solicitante). Esto no invalida el contenido, pero impide certificar cobertura "Completa" en varios puntos porque no queda evidencia de que cada obligación individual tenga responsable, evidencia y criterio de aceptación propios.

El segundo problema es de **propietario faltante**: la Matriz de Responsabilidad Compartida (Doc 05) no tiene fila para capacitación/RR.HH., background checks, entorno físico, retención legal post-servicio ni cumplimiento general de políticas del cliente (SYS-01) — es decir, existen obligaciones del anexo original sin dueño explícito en el documento cuyo propósito específico es no dejar ninguna obligación sin dueño.

El tercer problema es de **consistencia entre documentos**: el Plan de 90 días (Doc 03) no incluye acción explícita para capacitación formal (HR-03), retención de logs/cadena de custodia, ni prueba de restauración de backups — pese a que Doc 01 y Doc 04 sí los mencionan como necesarios.

## Nivel de alineamiento

**68% — Razonablemente alineado con brechas.**

No se otorga un nivel superior porque persisten obligaciones sin evidencia operativa (más allá de la intención documentada) y porque la matriz de responsabilidad — el documento que precisamente debe cerrar la trazabilidad de propietarios — tiene vacíos de cobertura.

## Principales fortalezas

- Fidelidad correcta en los plazos críticos (24h, 72h, 14 días, 10 días, WPA2, 90 días de contraseña).
- Modelo de gobierno mínimo (comité + SGSI + roles) es realista y no subestima el requisito de "equipo dedicado".
- Buena distinción entre lo que ASTAY controla (desarrollo, VPN, endpoints) y lo que administra el cliente (producción, red, AD).
- El Plan de 90 días tiene hitos, entregables y responsables verificables, no es aspiracional.

## Principales brechas

1. Agrupación de obligaciones atómicas distintas en evaluaciones únicas (Doc 01), especialmente en D.3 (cifrado + protección + claves — el ejemplo textual del solicitante).
2. Ausencia de fila propia para capacitación, background checks, entorno físico y retención legal en la Matriz de Responsabilidad (Doc 05).
3. Plan de 90 días no agenda: capacitación formal, retención/cadena de custodia de logs, ni prueba de restauración de backups.
4. No existe acción explícita para validar contractualmente con Quellaveco la interpretación de "equipo dedicado" que Doc 01 propone.
5. Los 10 tipos de ataque listados textualmente en el anexo (Injection, XSS, IDOR, CSRF, etc.) no están individualmente trazados a un control específico — se cubren de forma genérica vía SAST/DAST.
6. La prohibición de almacenar contraseñas en cookies/archivos temporales (sub-cláusula específica del anexo) no aparece tratada en ningún documento.

## Riesgos críticos

- **Riesgo contractual:** si Quellaveco audita punto por punto el anexo, la ausencia de evidencia individualizada en los puntos agrupados puede leerse como incumplimiento, no como cumplimiento agrupado.
- **Riesgo financiero:** el pentest postincidente sin costo para el cliente (I.4) depende de una bolsa de contingencia que aún no está presupuestada ni asegurada — es una obligación de pago inmediato ante un evento que no se puede planificar en el tiempo.
- **Riesgo de gobernanza:** el modelo de "equipo dedicado" mínimo es una interpretación de ASTAY, no un acuerdo confirmado con el cliente; si Quellaveco no la acepta, toda la Fase 1 del plan de 90 días queda en riesgo de rediseño.

## Decisiones requeridas por Gerencia

1. Aprobar o rechazar la interpretación de "equipo dedicado" antes de presentarla a Quellaveco.
2. Aprobar presupuesto de contingencia y/o seguro de ciberresponsabilidad para el pentest postincidente de 10 días.
3. Definir si la Matriz de Responsabilidad Compartida se completa antes o después de enviarla al cliente para negociación.

## Contrataciones externas recomendadas

- vCISO fraccional (ya identificado en Doc 01/02).
- Proveedor de pentest anual + cláusula de activación urgente postincidente (ya identificado).
- Ninguna contratación adicional detectada como crítica en esta auditoría.

## Riesgos que requieren negociación contractual

- Confirmar con Quellaveco si "equipo dedicado" acepta el modelo fraccional/comité.
- Confirmar SLA de parches para componentes bajo administración del cliente (G.24/DEV-34) — actualmente es una intención de coordinación, no un acuerdo.
- Confirmar quién asume el costo del pentest de producción cuando la infraestructura es del cliente (H.1/VUL).

---

# Entregable 2 — Matriz Maestra de Trazabilidad

> Matriz completa de requisitos atómicos. Cobertura clasificada según la escala del solicitante: Completo / Parcial / Implícito / No cubierto / No aplica / Requiere validación / Requiere acuerdo con el cliente.

## A. Organización de la Seguridad de la Información

| ID | Requisito original resumido | Doc. | Ubicación | Cobertura | Evidencia propuesta | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| ORG-01 | Equipo dedicado de seguridad de la información | 01,02,03,05 | 01 §A.1 | Parcial | Resolución, organigrama, RACI | Falta validación contractual del término "dedicado" con el cliente | Incluir en Fase 1 del Plan 90 días una acción específica de validación con Quellaveco |
| ORG-02 | Gobernanza vía comité liderado por C-Level | 01,02,03 | 01 §A.1, 03 Fase 1 | Parcial | Acta constitutiva, términos de referencia | Comité aún no constituido (es plan, no hecho) | Ejecutar Fase 1 y registrar primera acta |
| ORG-03 | Establecer un SGSI para evaluar riesgos | 01 | 01 §A.2 | Parcial | Certificado, alcance, SoA | Alcance del ISO 27001 no confirmado para DataTwin/Quellaveco | Confirmar alcance certificado antes de declarar cumplimiento |
| ORG-04 | Gestionar evaluación y tratamiento de riesgos | 01 | 01 §A.2 | Parcial | Matriz de riesgos, plan de tratamiento | Evaluación de riesgos específica de Quellaveco no ejecutada aún | Ejecutar como parte de Fase 1 |
| ORG-05 | Mejora continua de la seguridad de la información | 01 | 01 §A.2 (implícito en "revisión semestral") | Implícito | Actas de revisión por la dirección | No hay mecanismo explícito de mejora continua más allá de revisión semestral | Definir ciclo PDCA explícito o remitir a proceso ISO ya certificado |

## B. Seguridad de Recursos Humanos

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| HR-01 | Verificación de antecedentes de empleo previo | 01 | 01 §B.1 | Parcial | Checklist de selección, registros | **Agrupado con HR-02** — no evaluado individualmente | Separar en dos evaluaciones independientes en Doc 01 |
| HR-02 | Verificación de certificados educativos | 01 | 01 §B.1 | Parcial | Registros de validación | Igual que HR-01, sin evaluación propia | Igual que arriba |
| HR-03 | Capacitación formal en seguridad y protección de datos | 01,04(indirecto) | 01 §B.2 | Parcial | Plan anual, registros de asistencia | **No tiene acción en el Plan de 90 días (Doc 03)** | Agregar acción explícita en Fase 2 o 3 del Plan 90 días |

## C. Terceros

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| TPR-01 | Ningún tercero sin autorización escrita de la Compañía | 01,03,05 | 01 §C.1, 05 fila "Terceros de ASTAY" | Parcial | Inventario, NDA, autorizaciones | Falta el inventario real de terceros (es plan) | Ejecutar Fase 2 del Plan 90 días |

## D. Seguridad de Datos y Control de Acceso

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| DAC-01 | Prohibición absoluta de usar Datos/Info. Confidencial en pruebas de seguridad | 01,04 | 01 §D.1, 04 "Ambientes" | Parcial | Política, datasets sintéticos | Política aún no formalizada | Formalizar política explícita en Fase 3 |
| DAC-02 | Separar Datos/Info. Confidencial de otros clientes | 01,04,05 | 01 §D.2 | Parcial | Diagramas, inventario | Declarado pero sin auditoría de verificación aún | Ejecutar revisión trimestral propuesta |
| DAC-03 | Cifrado en tránsito | 01 | 01 §D.3 (agrupado) | **Requiere validación** | Configuración TLS | **Agrupado con DAC-04/05/06 — ejemplo textual citado por el solicitante como caso a NO agrupar** | Desagregar D.3 en 4 evaluaciones independientes |
| DAC-04 | Cifrado en reposo | 01 | 01 §D.3 (agrupado) | **Requiere validación** | Config. de disco/BD | Igual que arriba | Igual que arriba |
| DAC-05 | Protección contra pérdida/destrucción/corrupción/alteración | 01 | 01 §D.3 (agrupado) | Implícito | — | Igual que arriba | Igual que arriba |
| DAC-06 | Confidencialidad y acceso limitado a claves de cifrado | 01 | 01 §D.3 (agrupado) | **Requiere validación** | Inventario de claves, gestor de secretos | Igual que arriba; además no hay evidencia de "custodio" nombrado | Definir custodio explícito de claves en la desagregación |
| DAC-07 | Transferencias solo por canales seguros | 01 | 01 §D.4 (agrupado) | Parcial | Política, VPN | Agrupado con DAC-08/09 | Separar evaluación |
| DAC-08 | Prohibición de adjuntos sin cifrar y FTP | 01,04(implícito) | 01 §D.4 | Parcial | Política de transferencia | No hay control técnico (DLP) confirmado, solo "cuando sea viable" | Definir si DLP es obligatorio o aceptar como riesgo residual documentado |
| DAC-09 | Informar de inmediato a la Compañía sobre uso de medios no autorizados | 01 | 01 §D.4 (mencionado solo en plan, no evaluado como obligación propia) | **No cubierto como evaluación independiente** | — | Es una obligación de notificación con plazo implícito ("de inmediato") sin dueño ni SLA definido | Crear entrada propia con responsable y plazo ("inmediato" = mismo día hábil) |
| DAC-10 | Aprobación previa de la Compañía para centros de datos/ubicaciones | 01,05 | 01 §D.5 | Parcial | Arquitectura aprobada, actas | Correcto, sin brecha de agrupación | Mantener |
| DAC-11 | Credenciales nominativas, uso exclusivo | 01 | 01 §D.6 | Parcial | Matriz de accesos | — | Ejecutar revisión trimestral |
| DAC-12 | Contraseñas robustas | 01 | 01 §D.7 (agrupado) | Parcial | Política de contraseñas | Agrupado con DAC-13/14 | Separar evaluación (menor severidad, ítems muy relacionados) |
| DAC-13 | Cambio de contraseña cada 90 días máximo | 01 | 01 §D.7 | Parcial | Config. de directorio | **Correctamente preservado el plazo contractual** (90 días), buena fidelidad | Mantener |
| DAC-14 | Contraseñas confidenciales, no predecibles | 01 | 01 §D.7 | Implícito | — | — | — |
| DAC-15 | No copiar/almacenar Datos en dispositivos no aprobados | 01,04 | 01 §D.8 | Parcial | Inventario, EDR/MDM | — | Ejecutar aprobación formal de equipos |
| DAC-16 | Eliminación segura de equipos y medios | 01 | 01 §D.9 | **Requiere formalización** | Certificados de destrucción | Sin procedimiento documentado aún | Priorizar en Fase 2 |

## E. Entorno Físico

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| PHY-01 | Medidas de seguridad física contra acceso no autorizado | 01 | 01 §E.1 (agrupado) | Parcial | Control de acceso, CCTV | Agrupado con PHY-02; **sin fila en Matriz de Responsabilidad (Doc 05)** | Agregar fila "Entorno físico ASTAY" en Doc 05 |
| PHY-02 | Protección contra riesgos climáticos/incendio/plagas/sismo/inundación | 01 | 01 §E.1 | Implícito | Plan de continuidad, simulacros | Igual que arriba | Igual que arriba |

## F. Comunicaciones y Operaciones

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| COM-01 | Seguridad física y lógica de la red | 01 | 01 §F.1 | Parcial | Segmentación, hardening | Genérico, sin distinguir qué es de ASTAY vs. cliente en el propio F.1 | Especificar por capa (endpoint ASTAY vs. red cliente) |
| COM-02 | No corromper/borrar Datos de la Compañía | 01 | 01 §F.2 | Parcial | Matriz de permisos, backups | — | Ejecutar Fase 3 |
| COM-03 | Firewalls que protejan de amenazas externas, con prueba de eficacia | 01 | 01 §F.3 (agrupado) | **Requiere acuerdo con el cliente** | Reglas de firewall | Agrupado con COM-04; producción es del cliente | Separar y solicitar evidencia formal a Quellaveco |
| COM-04 | Política de firewall deny-by-default | 01,04 | 01 §F.3, 04 "Infraestructura" | Parcial | Configuración | — | — |
| COM-05 | Instalar y mantener software antivirus | 01 | 01 §F.4 (agrupado) | Parcial | Consola EDR | **4 obligaciones (COM-05/06/07/08) en una sola evaluación** | Separar; es el segundo caso más claro de sobre-agrupación después de D.3 |
| COM-06 | Mantener actualizados los archivos de definición de virus | 01 | 01 §F.4 | Implícito | Estado de firmas | Igual que arriba | Igual que arriba |
| COM-07 | No introducir a sabiendas malware | 01 | 01 §F.4 | Implícito | — | Es una obligación de conducta del Personal, no solo técnica — no tiene control de RR.HH. asociado (p.ej. cláusula en contrato de personal) | Agregar cláusula de conducta en contrato/código de ética |
| COM-08 | Precauciones razonables contra introducción de malware | 01 | 01 §F.4 | Implícito | — | Igual que arriba | Igual que arriba |
| COM-09 | Prohibición de almacenamiento en dispositivos móviles salvo permiso y cifrado | 01,04 | 01 §F.5 | Parcial | Política MDM | Correcto, sección propia | Mantener |
| COM-10 | Seguridad de redes inalámbricas, mínimo WPA2, separación lógica | 01,04(implícito) | 01 §F.6 | Parcial | Configuración WPA2/3 | **Buena fidelidad — no reduce el mínimo contractual** | Mantener |
| COM-11 | Parches críticos dentro de 72 horas | 01,03,04 | 01 §F.7, 03 Fase 2, 04 "Infraestructura" | Parcial | Dashboard de parches | **Plazo preservado correctamente en los 3 documentos** | Mantener; verificar consistencia con DEV-34 (ver Hallazgo H-05) |
| COM-12 | Otros parches dentro de 14 días calendario | 01,03,04 | Igual que arriba | Parcial | Igual que arriba | Igual que arriba | Igual que arriba |
| COM-13 | Registro de parches aplicados | 01,04 | 01 §F.7, 04 | Parcial | Tickets, logs de parcheo | — | — |

## G. Desarrollo de Sistemas

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| DEV-01 | Separación lógica desarrollo/producción | 01,04 | 01 §G.1, 04 "Ambientes" | Parcial | Diagrama de arquitectura | — | — |
| DEV-02 | Validar datos de entrada del cliente antes de procesarlos | 01,04(implícito) | 01 §G.2 | Parcial | Esquemas de validación | — | — |
| DEV-03 | Pruebas de seguridad de aplicaciones antes de liberar | 01,04 | 01 §G.3, 04 "Repositorios" | Parcial | Pipeline, reportes SAST/DAST | — | — |
| DEV-04 | Uso de herramientas de prueba de vulnerabilidades antes del release | 01,04 | Igual que arriba | Parcial | Igual que arriba | — | — |
| DEV-05 | Protección frente a los 10 ataques comunes listados textualmente | 01,04 | 01 §G.3 (genérico) | **Implícito / no trazado individualmente** | Reporte SAST/DAST | Ninguno de los 10 tipos (Injection, XSS, Broken Auth, IDOR, CSRF, Security Misconfig, Insecure Crypto Storage, Failure to Restrict URL Access, Insufficient TLS, Invalidated Redirects) se traza a un control específico | Agregar tabla de mapeo OWASP Top 10 → control/herramienta en Doc 01 o Doc 04 |
| DEV-06 | Uso de Active Directory de la Compañía como repositorio maestro | 01,04 | 01 §G.4, 04 "Aplicación" | **Requiere acuerdo con el cliente** | Integración Entra ID | Dependencia total del cliente, correctamente marcada | Mantener, dar seguimiento como riesgo de cronograma |
| DEV-07 | Contraseñas almacenadas/transmitidas siempre cifradas | 01 | 01 §G.5 | Parcial | Revisión de código, secret manager | — | — |
| DEV-08 | Autenticación sobre HTTPS con criptografía robusta | 01,04 | 01 §G.6, 04 "Aplicación" | **Requiere acuerdo con el cliente** | Certificado, config TLS | Dependencia compartida correctamente marcada | Mantener |
| DEV-09 | Publicación de Datos vía HTTPS + SSL | 01,04 | Igual que arriba | Parcial | — | — | — |
| DEV-10 | Redirección automática HTTP→HTTPS | 01,04 | 01 §G.7, 04 | Parcial | Configuración de proxy | — | — |
| DEV-11 | Certificados SSL de autoridad confiable, hostname correcto, anti-DoS | 01 | 01 §G.8 | **Requiere acuerdo con el cliente** | Certificado | — | — |
| DEV-12 | Prohibición de cifrados/protocolos SSL débiles o anónimos | 01,04 | 01 §G.8 (implícito) | Implícito | Config. TLS | No mencionado explícitamente el término "cifrados anónimos/débiles" en la evaluación, solo "configuración robusta de TLS" | Añadir referencia explícita a deshabilitar cifrados anónimos/débiles |
| DEV-13 | No hard-code de credenciales; **no almacenarlas en cookies o archivos temporales** | 01,04(parcial) | 01 §G.9, 04 "Repositorios" | **Parcial — la mitad no cubierta** | Secret scanning | **La prohibición de almacenar en cookies/archivos temporales no aparece en ningún documento** (solo se cubre "no hard-code") | Agregar explícitamente al checklist DevSecOps y a G.9 |
| DEV-14 | Backups/temporales no disponibles vía servidores web | 01,04 | 01 §G.10 | Parcial | Hardening, escaneo de rutas | — | — |
| DEV-15 | Solo servicios de sistema requeridos ejecutándose | 01,04 | 01 §G.10 (agrupado) | Parcial | Baseline CIS | Agrupado con DEV-14 (relacionado, severidad baja) | — |
| DEV-16 | Tokens de sesión únicos, no predecibles, resistentes a ingeniería inversa | 01,04 | 01 §G.11 | Parcial | Config. de sesión | — | — |
| DEV-17 | Expiración de sesión al finalizar o 30 min de inactividad | 01,04 | 01 §G.11, 04 "Aplicación" | Parcial | **Plazo de 30 min preservado correctamente** | — | — |
| DEV-18 | Tokens de sesión no basados en información personal del usuario | 01 | 01 §G.11 (agrupado) | Implícito | — | No se menciona explícitamente esta sub-regla | Agregar como criterio de revisión de código |
| DEV-19 | Mensajes de error sin valores por defecto | 01,04 | 01 §G.12 | Parcial | Configuración de errores | — | — |
| DEV-20 | No mostrar SO/versiones/IP/stack traces | 01,04 | 01 §G.12 (agrupado) | Parcial | Headers, logs | — | — |
| DEV-21 | Acceso remoto seguro para admin/soporte | 01,04 | 01 §G.13 | Parcial | VPN, bastion host | — | — |
| DEV-22 | Cambio de credenciales/usuarios por defecto en producción | 01,04 | 01 §G.14 | **Requiere acuerdo con el cliente** | Escaneo de baseline | Producción es del cliente | — |
| DEV-23 | Deshabilitar servicios/puertos/kits no usados en servidores expuestos | 01,04 | 01 §G.15 | **Requiere acuerdo con el cliente** | Baseline CIS | — | — |
| DEV-24 | Interfaces admin restringidas + renombrar directorios/archivos por defecto | 01,04 | 01 §G.16 | **Parcial — tono debilitado** | Config. de acceso | **Ver Hallazgo H-07**: el comentario de Doc 01 presenta el renombrado como opcional ("puede reducir"), cuando el anexo lo exige como obligación ("must be renamed") | Reformular el comentario para no sugerir opcionalidad |
| DEV-25 | Cifrado de todas las BD (prod/staging/dev) | 01,04 | 01 §G.17 | **Requiere acuerdo con el cliente (prod)** | Config. de cifrado | — | — |
| DEV-26 | Cifrado de todos los backups de esas BD | 01,04 | 01 §G.17 (agrupado) | Igual | — | Agrupado con DEV-25, severidad baja (relacionado) | — |
| DEV-27 | Cifrado de comunicaciones entre BD, app y servidor web | 01,04 | 01 §G.18 | Parcial | TLS interno | — | — |
| DEV-28 | Permisos correctos, prevención de directory traversal | 01,04 | 01 §G.19 | Parcial | RBAC, pruebas SAST/DAST | — | — |
| DEV-29 | Controles certificados; sistemas web-facing en DMZ | 01 | 01 §G.20 | **Requiere acuerdo con el cliente** | Arquitectura, acta de validación | Correctamente marcado como dependencia principal del cliente, sin declarar cumplimiento unilateral (buena práctica) | Mantener |
| DEV-30 | Firewalls restringen entrada/salida hacia/desde DMZ | 01 | 01 §G.20 (agrupado) | Igual | — | Agrupado con DEV-29 | — |
| DEV-31 | BD no en mismo segmento que servidores web, nunca expuesta a internet | 01,04 | 01 §G.21 | **Requiere acuerdo con el cliente** | Diagrama de red | — | — |
| DEV-32 | No usar datos productivos en desarrollo/pruebas | 01,03,04 | 01 §G.22, 03 Fase 3, 04 "Ambientes" | Parcial | Política de datos sintéticos | Marcado correctamente como "riesgo relevante" en Doc 01, no minimizado | — |
| DEV-33 | Prohibición de pruebas en servidores de producción | 01,04 | 01 §G.23, 04 "Ambientes" | Parcial | Plan de pruebas, ventana de cambio | — | — |
| DEV-34 | Mantener sistema/aplicaciones y parches actualizados en sistemas en vivo (14d/72h) | 01 | 01 §G.24 | **Requiere acuerdo con el cliente** | SLA conjunto | **Ver Hallazgo H-05**: es la misma obligación de COM-11/12 aplicada a "sistemas en vivo"; los documentos no aclaran si es una sola obligación o dos independientes | Unificar tratamiento de parches (F.7 + G.24) en una sola política con dos ámbitos (ASTAY / cliente) |
| DEV-35 | Limitar y validar entradas del usuario | 01,04 | 01 §G.25 | Parcial | Validación de esquema | — | — |
| DEV-36 | Escaneo antimalware de archivos/objetos cargados | 01,04 | 01 §G.25 (agrupado), 04 "Aplicación" | Parcial | Sandbox/AV | Agrupado con DEV-35 en Doc 01, severidad baja | — |

## H. Pruebas de Vulnerabilidades

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| VUL-01 | Escaneo de vulnerabilidades regular | 01,03,04 | 01 §H.2, 04 "Vulnerabilidades" | Parcial | Reportes de escaneo | — | — |
| VUL-02 | Pruebas de penetración regulares del entorno de prestación del servicio | 01,03,04 | 01 §H.1 (agrupado con VUL-03/04/05/06) | Parcial | Contrato, informe | 6 obligaciones distintas en una sola evaluación H.1 | Separar en sub-ítems: proveedor externo, frecuencia, atención de hallazgos, disponibilidad de resultados |
| VUL-03 | A cargo de organización externa líder del mercado | 01 | 01 §H.1 | Parcial | Contrato con proveedor | Criterio "líder del mercado" no está definido operacionalmente | Definir criterios de selección (certificaciones, referencias, cobertura) |
| VUL-04 | Frecuencia no menor a anual | 01,04 | 01 §H.1, 04 | Parcial | Calendario de pentest | — | — |
| VUL-05 | Atender adecuadamente los hallazgos | 01,04 | 01 §H.1, 04 "Retest" | Parcial | Plan de acción, retest | — | — |
| VUL-06 | Resultados y plan de acción disponibles a la Compañía de inmediato cuando lo solicite | 01 | 01 §H.1 (mencionado, sin SLA) | **Implícito** | — | "De inmediato" no está definido en horas/días hábiles | Definir SLA de entrega de resultados (ej. 5 días hábiles desde solicitud) |
| VUL-07 | Pruebas de seguridad regulares/periódicas sobre TODAS las aplicaciones y código | 01,04 | 01 §H.2 | Parcial | Pipeline DevSecOps | — | — |
| VUL-08 | Programa de gestión de vulnerabilidades | 01,03,04 | 01 §H.2, 03 Fase 3 | Parcial | Registro, SLA, métricas | — | — |
| VUL-09 | Resultados de pruebas de seguridad disponibles a la Compañía de inmediato | 01 | 01 §H.2 (agrupado con VUL-07/08) | Implícito | — | Mismo problema de VUL-06 | Igual que VUL-06 |

## I. Gestión de Incidentes de Seguridad de la Información

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| INC-01 | Cooperar para establecer procedimiento de reporte de brechas | 01,03,04 | 01 §I.1 | Parcial | Playbook, matriz de contactos | — | — |
| INC-02 | Notificar TODAS las brechas dentro de 24 horas desde el descubrimiento | 01,02,03,04 | 01 §I.2 | Parcial | Reloj de incidente, plantilla | **Plazo preservado correctamente en los 4 documentos** | Mantener — es el punto de mayor consistencia cruzada del set |
| INC-03 | Coordinar investigación inmediatamente tras notificación | 01 | 01 §I.3 (agrupado) | Parcial | Procedimiento conjunto | Agrupado con INC-04/05/06 | Separar si se requiere certificar cobertura completa |
| INC-04 | Asistir en cualquier investigación | 01 | 01 §I.3 | Implícito | — | Igual que arriba | — |
| INC-05 | Facilitar entrevistas con Personal y otros involucrados | 01 | 01 §I.3 | Implícito | — | Igual que arriba | — |
| INC-06 | Poner a disposición registros, logs, archivos y materiales relevantes | 01,04 | 01 §I.3, 04 "Datos y secretos" | Parcial | Retención de logs | **Retención de logs no tiene acción en Plan 90 días (ver Hallazgo H-04)** | Agregar acción explícita en Doc 03 |
| INC-07 | Pentest postincidente por tercero asegurado/competente/independiente, sin costo para el cliente | 01,02,03,05 | 01 §I.4 | Parcial | Contrato marco, seguro | Presupuesto y seguro aún no contratados — es el riesgo financiero más alto del set (ver Dictamen) | Priorizar contratación de seguro de ciberresponsabilidad en Fase 2 |
| INC-08 | Pentest programado dentro de 10 días desde notificación escrita | 01,03 | 01 §I.4 | Parcial | Procedimiento de activación urgente | **Plazo preservado correctamente** | Mantener |

## J. Derecho de Auditoría y Monitoreo

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| AUD-01 | Proporcionar información sobre instalaciones, procedimientos y Personal a solicitud de la Compañía | 01,03 | 01 §J.1, 03 Fase 2 "audit pack" | Parcial | Audit pack | **Sin fila propia en Matriz de Responsabilidad (Doc 05)** | Agregar fila "Derecho de auditoría" en Doc 05 |

## K. Administración de Sistemas

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| SYS-01 | Cumplir con TODAS las políticas, estándares y procedimientos de seguridad del cliente | 01 | 01 §K.1 | **Requiere validación** | Catálogo de políticas del cliente | Depende de un catálogo que ASTAY aún no ha recibido; **sin fila en Doc 05** | Solicitar catálogo formalmente; agregar fila en Doc 05 |

## L. Fin del Servicio

| ID | Requisito | Doc. | Ubicación | Cobertura | Evidencia | Brecha | Acción correctiva |
|---|---|---|---|---|---|---|---|
| EOS-01 | Acordar qué información debe recuperarse y en qué formato | 01,05 | 01 §L.1, 05 "Fin de servicio" | Parcial | Exit plan | — | — |
| EOS-02 | Devolver la información según lo acordado | 01,05 | 01 §L.2 | Parcial | Acta de entrega | — | — |
| EOS-03 | Eliminar de forma segura tras confirmación de que la info es utilizable/completa | 01 | 01 §L.2 (agrupado) | Parcial | Procedimiento de borrado | Agrupado con EOS-02/04 | — |
| EOS-04 | Confirmación formal de que no queda ningún dato | 01,05 | 01 §L.2 | Parcial | Certificado de destrucción | — | — |
| EOS-05 | Notificar período de retención si existe obligación legal | 01 | 01 §L.3 | **Requiere validación** | Registro de base legal | **Sin fila en Doc 05** (retención legal post-servicio) | Agregar fila específica en Doc 05 |
| EOS-06 | Notificar cualquier acceso a los datos posterior al fin del acuerdo | 01 | 01 §L.3 (agrupado) | Implícito | Registro de accesos | Igual que arriba | Igual que arriba |
| EOS-07 | Eliminar datos al vencer el período de retención + confirmación formal | 01 | 01 §L.3 (agrupado) | Implícito | Certificado de destrucción final | Igual que arriba | Igual que arriba |

---

# Entregable 3 — Hallazgos Priorizados

| # | Severidad | Requisito afectado | Documento | Descripción | Riesgo | Corrección | Responsable sugerido | Plazo | Evidencia de cierre |
|---|---|---|---|---|---|---|---|---|---|
| H-01 | **Crítico** | DAC-03 a DAC-06 | Doc 01 §D.3 | Cuatro obligaciones distintas (cifrado en tránsito, cifrado en reposo, protección de claves, acceso limitado a claves) evaluadas como una sola — es el ejemplo textual citado por el solicitante como caso que NO debe agruparse | Ante auditoría del cliente, no hay evidencia de que cada sub-obligación tenga control propio | Desagregar D.3 en 4 secciones independientes, cada una con responsable, evidencia y criterio de aceptación | Responsable SGSI / Arquitectura | 15 días | Doc 01 actualizado con 4 secciones D.3.1–D.3.4 |
| H-02 | **Alto** | HR-03 | Doc 03 | El Plan de 90 días no incluye ninguna acción para implementar/formalizar la capacitación formal en seguridad, pese a que Doc 01 (§B.2) y la lista de "Prioridad 3" la identifican como pendiente | La obligación queda documentada pero sin fecha de ejecución | Agregar línea de acción en Fase 2 o 3 del Plan 90 días | RR.HH. / Responsable SGSI | Antes de día 60 | Acción visible en el Gantt/tabla de Doc 03 |
| H-03 | **Alto** | Matriz Doc 05 (múltiples IDs) | Doc 05 | Sin fila propia para: capacitación/RR.HH. (HR-03), background checks (HR-01/02), entorno físico (PHY-01/02), derecho de auditoría (AUD-01), retención legal post-servicio (EOS-05/06/07), cumplimiento de políticas del cliente (SYS-01) | El propio objetivo de la matriz ("ninguna obligación sin propietario") queda incumplido en 6 dominios | Agregar las 6 filas faltantes con la misma estructura (ASTAY/Cliente/Compartido) | Responsable SGSI | 15 días | Doc 05 v2 con 6 filas nuevas |
| H-04 | **Medio** | INC-06 | Doc 03, Doc 04 | Doc 04 exige "logs de seguridad centralizados y con retención definida"; Doc 03 no agenda ninguna acción para implementar retención/cadena de custodia | Inconsistencia entre lo que el checklist exige y lo que el plan ejecuta | Agregar acción en Fase 3 del Plan 90 días: definir período de retención y cadena de custodia | DevSecOps / Responsable SGSI | Antes de día 60 | Política de retención de logs documentada |
| H-05 | **Medio** | COM-11/12 vs. DEV-34 | Doc 01 §F.7 y §G.24 | El anexo original menciona el SLA de parches dos veces (una general en "Comunicaciones y Operaciones", otra específica para "sistemas en vivo" en "Desarrollo de Sistemas"); Doc 01 los trata como brechas separadas (F.7 y G.24) sin aclarar si es la misma obligación con dos ámbitos o dos obligaciones independientes | Riesgo de doble conteo o de que una quede sin dueño al pensarse cubierta por la otra | Unificar en una sola política de gestión de parches con dos ámbitos declarados (ASTAY / cliente) y referencia cruzada explícita entre F.7 y G.24 | Responsable SGSI / TI | 15 días | Política de parches única, referenciada desde ambas secciones |
| H-06 | **Medio** | DEV-13 | Doc 01 §G.9, Doc 04 | La prohibición de almacenar contraseñas en cookies o archivos temporales (sub-cláusula explícita del anexo) no aparece en ningún documento; solo se cubre la prohibición de hard-code | Un hallazgo de pentest sobre este punto específico no tendría control preexistente que lo prevenga | Agregar ítem explícito en checklist DevSecOps (Doc 04) y en G.9 (Doc 01) | DevSecOps | 30 días | Ítem agregado y verificado en próximo escaneo SAST |
| H-07 | **Bajo** | DEV-24 | Doc 01 §G.16 | El comentario "Cambiar nombres por defecto puede reducir ataques oportunistas" presenta como opcional una acción que el anexo exige de forma imperativa ("must be renamed") | Riesgo de interpretación — no es una reducción de alcance deliberada, pero el tono podría leerse como tal en una auditoría | Reformular el comentario para dejar explícito que el renombrado es obligatorio, no solo recomendable | Responsable SGSI | Próxima revisión de Doc 01 | Texto corregido |
| H-08 | **Bajo** | ORG-01 | Doc 01, Doc 03 | No existe acción explícita para validar con Quellaveco la interpretación de "equipo dedicado" (comité + roles fraccionales) antes de operar bajo ese modelo | Si el cliente no acepta la interpretación, el modelo de gobierno completo (Fase 1) requeriría rediseño tardío | Agregar como primera acción de Fase 1: "Validar con Quellaveco la interpretación de 'equipo dedicado'" | CTO / Comercial | Antes de iniciar Fase 1 | Confirmación escrita del cliente o acta de reunión |
| H-09 | **Mejora recomendada** | VUL-06, VUL-09 | Doc 01 §H.1, §H.2 | "De inmediato" (para entrega de resultados de pentest/pruebas de seguridad a la Compañía) no está traducido a un SLA operativo | Ambigüedad ante una solicitud real del cliente | Definir SLA interno (ej. 5 días hábiles) y documentarlo | Responsable SGSI | 30 días | SLA documentado en Doc 01 |
| H-10 | **Mejora recomendada** | DEV-05 | Doc 01 §G.3, Doc 04 | Los 10 tipos de ataque listados textualmente en el anexo no se trazan individualmente a un control (se cubren de forma genérica vía SAST/DAST) | Dificulta demostrar cobertura punto por punto ante auditoría | Agregar tabla de mapeo "ítem del anexo → herramienta/control" | DevSecOps | 30 días | Tabla incorporada a Doc 04 |

---

# Entregable 4 — Revisión por Documento

## Documento 01 — Anexo Comentado

**Fortalezas:** cobertura casi completa de las 11 secciones del anexo; buena distinción de responsabilidad compartida; no minimiza plazos críticos; incluye plan de acción y evidencias por ítem; conclusión ejecutiva realista (no declara cumplimiento total).

**Brechas:** agrupación de obligaciones atómicas en D.3, F.4, F.3, D.4, D.7 (ver Hallazgos H-01 y análisis por sección); tono opcional en G.16 (H-07); sub-cláusula de cookies/temp files no cubierta (H-06); los 10 tipos de ataque de G.3 no trazados individualmente (H-10).

**Contenido faltante:** SLA operativo para "disponibilidad inmediata" de resultados (H.1/H.2); acción de validación contractual del término "equipo dedicado".

**Contenido redundante:** ninguno relevante — F.7 y G.24 no son redundantes sino potencialmente la misma obligación sin aclarar (H-05), se recomienda unificar, no eliminar.

**Contenido incorrecto:** no se detectó contenido que contradiga el anexo original.

**Secciones que deben modificarse:** D.3 (desagregar), G.9 (agregar cookies/temp files), G.16 (ajustar tono), F.7/G.24 (unificar referencia cruzada).

## Documento 02 — Resumen Ejecutivo

**Fortalezas:** conciso, apto para C-Level; no minimiza los riesgos principales; preserva correctamente los plazos de 24h y 10 días; incluye mensaje explícito para el cliente separando responsabilidades.

**Brechas:** no menciona la rotación de contraseñas de 90 días ni el mínimo WPA2 — aceptable en un resumen ejecutivo, pero dado que ambos son plazos contractuales explícitos, su ausencia total (ni siquiera como nota al pie) puede dejar a Gerencia sin visibilidad de compromisos operativos concretos que sí aparecen en el contrato.

**Contenido faltante:** cifra o rango de inversión estimado (el documento pide "aprobar presupuesto" sin dar magnitud, lo que dificulta una decisión de Gerencia en una sola lectura).

**Contenido redundante:** ninguno.

**Contenido incorrecto:** ninguno.

**Recomendación puntual:** agregar una línea de "compromisos operativos con plazo fijo" (24h, 72h/14d, 90d, 10d, WPA2) como recordatorio ejecutivo, y un rango estimado de inversión.

## Documento 03 — Plan de 90 Días y RACI

**Fortalezas:** estructura por fases con entregables verificables; RACI sin ambigüedad de "Accountable" (un solo A por fila); prioriza correctamente gobierno antes que técnica; incluye ejercicio de incidente y revisión de comité al cierre.

**Brechas:** faltan acciones explícitas para capacitación formal (H-02), retención de logs/cadena de custodia (H-04), prueba de restauración de backups, y validación contractual de "equipo dedicado" (H-08).

**Contenido faltante:** seguimiento posterior a los 90 días (el plan termina en la revisión de comité del día 90, sin mecanismo de continuidad explícito más allá de esa fecha).

**Contenido redundante:** ninguno.

**Contenido incorrecto:** ninguno; los plazos contractuales (72h/14 días) no se sustituyen por el plazo general de 90 días — correcto.

**Secciones que deben modificarse:** Fase 2 (agregar capacitación), Fase 3 (agregar retención de logs y prueba de restauración), Fase 1 (agregar validación de "equipo dedicado" como primera acción).

## Documento 04 — Checklist DevSecOps

**Fortalezas:** cobertura técnica amplia y bien organizada por capas (repositorios, ambientes, aplicación, datos/secretos, infraestructura, vulnerabilidades/incidentes); ítems verificables tipo checklist, no aspiracionales; consistente con Doc 01 y Doc 03 en plazos de parches y pentest.

**Brechas:** no incluye la prohibición específica de contraseñas en cookies/archivos temporales (H-06); no incluye renombrado de directorios/archivos administrativos por defecto (relacionado con H-07); retención de logs mencionada sin período definido (relacionado con H-04).

**Contenido faltante:** ítem de "criterios de bloqueo de despliegue" no está tan explícito como "quality gate" (aparece implícito en "Quality gates para vulnerabilidades críticas y altas", aceptable).

**Contenido redundante:** ninguno.

**Contenido incorrecto:** ninguno.

**Secciones que deben modificarse:** "Aplicación" (agregar cookies/temp files) y "Vulnerabilidades e incidentes" (definir período de retención de logs).

## Documento 05 — Matriz de Responsabilidad Compartida

**Fortalezas:** buena separación ASTAY/Cliente/Compartido en los dominios que sí cubre; incluye condiciones de negociación explícitas y útiles (5 puntos finales); no declara cumplimiento unilateral sobre infraestructura del cliente — coherente con Doc 01 §G.20.

**Brechas:** faltan 6 filas completas (ver Hallazgo H-03): capacitación/RR.HH., background checks, entorno físico, derecho de auditoría, retención legal post-servicio, cumplimiento de políticas del cliente.

**Contenido faltante:** las 6 filas mencionadas.

**Contenido redundante:** ninguno.

**Contenido incorrecto:** ninguno.

**Secciones que deben modificarse:** agregar las 6 filas al final de la tabla principal, antes de "Condiciones que deben incluirse en la negociación".

---

# Entregable 5 — Matriz de Consistencia Cruzada

| Código | Documentos involucrados | Inconsistencia | Riesgo | Corrección propuesta |
|---|---|---|---|---|
| INC-X1 | 01, 03, 04 | Doc 04 exige retención de logs "definida"; Doc 03 no agenda ninguna acción para definirla | El control queda declarado pero sin fecha de cumplimiento | Agregar acción en Doc 03 Fase 3 (igual a H-04) |
| INC-X2 | 01, 03 | Doc 01 marca "capacitación formal" (B.2) como pendiente y Prioridad 3; Doc 03 no la agenda en ninguna fase | Un compromiso ya identificado como brecha no tiene fecha de cierre | Agregar a Fase 2/3 (igual a H-02) |
| INC-X3 | 01, 05 | Doc 01 tiene evaluación individual para background checks (B.1), entorno físico (E.1), derecho de auditoría (J.1) y retención post-servicio (L.3); Doc 05 no tiene fila para ninguno de los cuatro | La matriz de responsabilidad, que debería ser el resumen operativo del anexo comentado, pierde 4 dominios en la traducción | Agregar las filas faltantes (igual a H-03) |
| INC-X4 | 01, 04 | Doc 01 (G.9) y Doc 04 ("Repositorios") cubren "prohibición de hard-code" pero ninguno cubre "no almacenar en cookies o archivos temporales" | Brecha compartida, no es un documento cubriendo lo que el otro omite — es una omisión real en el conjunto | Agregar en ambos (igual a H-06) |
| INC-X5 | 01 (interno: F.7 y G.24) | La misma obligación de parches (72h/14 días) aparece dos veces en el anexo original y dos veces en Doc 01 sin indicar si es una sola política con dos ámbitos o dos políticas | Riesgo de doble conteo o de vacío si cada sección asume que la otra ya lo resuelve | Unificar con referencia cruzada (igual a H-05) |
| INC-X6 | 01, 02 | Doc 02 no menciona el plazo de rotación de contraseñas (90 días) ni WPA2, ambos presentes y bien tratados en Doc 01 | Nivel de detalle inconsistente entre el documento técnico y el resumen para Gerencia | Ver recomendación en revisión de Doc 02 |
| INC-X7 | 03, 05 | Doc 03 Fase 1 incluye "Crear matriz de responsabilidad ASTAY–Quellaveco" como entregable de los primeros 15 días, pero Doc 05 (ya elaborado) tiene brechas de cobertura (H-03) — el entregable de Fase 1 y el documento ya existente no están sincronizados en alcance | Se podría dar por completada la Fase 1 con un documento incompleto | Actualizar Doc 05 antes de marcar el hito de Fase 1 como cerrado |

No se detectaron: responsabilidades contradictorias para un mismo control (ningún caso de dos documentos asignando el mismo control a responsables distintos e incompatibles), ni acciones sin respaldo contractual, ni actividades duplicadas más allá de INC-X5 (que es ambigüedad, no duplicación real).

---

# Entregable 6 — Lista Consolidada de Correcciones

| Prioridad | Documento | Sección | Cambio requerido | Texto o enfoque recomendado |
|---|---|---|---|---|
| 1 | 01 | D.3 | Desagregar en 4 sub-secciones | "D.3.1 Cifrado en tránsito", "D.3.2 Cifrado en reposo", "D.3.3 Protección contra pérdida/destrucción/corrupción/alteración", "D.3.4 Confidencialidad y acceso limitado a claves de cifrado (custodio, rotación, prohibición de almacenamiento en código/mensajería)" — cada una con su propio estado, plan y evidencia |
| 1 | 05 | Nueva fila | Agregar "Capacitación y RR.HH." | ASTAY: Responsable · Cliente: Informado · Condición: Programa anual con evidencia de asistencia y evaluación |
| 1 | 05 | Nueva fila | Agregar "Background checks" | ASTAY: Responsable · Cliente: Puede exigir evidencia · Condición: Proporcional al rol, conforme a normativa laboral |
| 1 | 05 | Nueva fila | Agregar "Entorno físico (oficinas ASTAY)" | ASTAY: Responsable · Cliente: Sin acceso · Condición: N/A |
| 1 | 05 | Nueva fila | Agregar "Derecho de auditoría" | ASTAY: Provee audit pack · Cliente: Solicita y revisa · Condición: SLA de entrega a definir |
| 1 | 05 | Nueva fila | Agregar "Retención legal post-servicio" | ASTAY: Notifica período y custodia · Cliente: Informado de cualquier acceso posterior · Condición: Base legal documentada |
| 1 | 05 | Nueva fila | Agregar "Cumplimiento de políticas del cliente" | ASTAY: Cumple una vez recibido el catálogo · Cliente: Entrega catálogo vigente · Condición: Evaluación de impacto ante cambios |
| 2 | 03 | Fase 1 | Agregar primera acción | "Validar con Quellaveco la interpretación de 'equipo dedicado' (comité + roles fraccionales + vCISO) antes de operar bajo este modelo" — Responsable: CTO/Comercial |
| 2 | 03 | Fase 2 o 3 | Agregar acción de capacitación | "Diseñar y ejecutar programa formal de capacitación en seguridad (inducción + anual + módulo DataTwin)" — Responsable: RR.HH./SGSI |
| 2 | 03 | Fase 3 | Agregar acción de retención de logs | "Definir período de retención y cadena de custodia de logs de seguridad" — Responsable: DevSecOps/SGSI |
| 2 | 03 | Fase 3 | Agregar prueba de restauración | "Ejecutar prueba de restauración de backups y documentar resultado" — Responsable: Infraestructura |
| 2 | 01 | G.9 | Agregar sub-cláusula faltante | "El Proveedor debe asegurar que las contraseñas no se almacenen en cookies ni archivos temporales, además de no codificarlas de forma fija (hard-code)." |
| 2 | 04 | Aplicación | Agregar ítem | "- [ ] Contraseñas y secretos no almacenados en cookies ni archivos temporales." |
| 2 | 01 | G.16 | Reformular tono | Reemplazar "Cambiar nombres por defecto puede reducir ataques oportunistas, pero no sustituye..." por "El anexo exige renombrar directorios y archivos administrativos por defecto; esta acción es obligatoria y complementaria a la autenticación y segmentación, no un sustituto de estas." |
| 3 | 01 | F.7 / G.24 | Unificar referencia cruzada | Agregar nota en ambas secciones: "Ver política única de gestión de parches (Anexo Técnico X), que cubre tanto el ámbito general de comunicaciones (F.7) como los sistemas en vivo (G.24)." |
| 3 | 01 | H.1 / H.2 | Definir SLA de disponibilidad de resultados | "Los resultados de pruebas de seguridad y pentest se pondrán a disposición de la Compañía dentro de un plazo máximo de 5 días hábiles desde su solicitud formal." |
| 3 | 01 | G.3 | Agregar tabla de mapeo OWASP | Tabla de 2 columnas: ítem del anexo (Injection, XSS, IDOR, CSRF, etc.) → control/herramienta que lo mitiga (SAST, DAST, WAF, revisión de código, etc.) |
| 4 | 02 | Riesgos principales | Agregar nota de compromisos operativos | "Compromisos con plazo fijo ya vigentes: notificación de incidentes (24h), parches críticos (72h) y estándar (14 días), pentest postincidente (10 días, sin costo para el cliente), rotación de contraseñas (90 días), cifrado inalámbrico mínimo WPA2." |
| 4 | 03 | Cierre | Agregar seguimiento post-90 días | "A partir del día 90, el Comité de Seguridad revisa el estado de cumplimiento con frecuencia trimestral, según lo establecido en el modelo de gobierno (Doc 01 §4)." |

---

# Entregable 7 — Controles Adicionales Recomendados

> Separados explícitamente por tipo, conforme a la regla de no presentar buenas prácticas como obligación contractual.

## Requisito contractual (ya exigido en el anexo, solo requiere formalización)

- Los ya identificados en la Matriz Maestra como "Parcial" o "Requiere formalización".

## Control habilitador (necesario para operar el cumplimiento, aunque no esté nombrado explícitamente en el anexo)

- Inventario y clasificación de activos (habilita DAC-02, DAC-15, D.9, G.17).
- Gestión centralizada de secretos (habilita D.3.4, G.5, G.9, G.18).
- Logging centralizado con retención definida (habilita INC-06, J.1).
- Gestión de cambios con aprobación/rollback (habilita F.2, G.24).
- Gestión de excepciones con aprobación C-Level (habilita el tratamiento consistente de cualquier desviación temporal a los controles anteriores).

## Buena práctica recomendada (no exigida por el anexo, mejora la postura general)

- Tablero de cumplimiento (dashboard) con métricas de seguridad.
- Ejercicios de simulación de phishing.
- Evaluación formal de riesgo de proveedores SaaS de terceros (más allá de lo exigido para "terceros" con acceso a datos).
- Continuidad de negocio (BCP/DRP) más allá de la prueba puntual de restauración de backups.

**Advertencia:** ninguno de los ítems de "buena práctica recomendada" debe presentarse a Quellaveco como obligación contractual — son mejoras de postura de ASTAY, no exigencias del Anexo X.

---

# Entregable 8 — Resultado Final

## Veredicto

**Requiere correcciones antes de presentar al cliente.**

## Condiciones para alcanzar la aprobación

1. Cerrar el Hallazgo H-01 (desagregación de D.3) — es el caso citado textualmente como ejemplo de lo que no debe hacerse.
2. Completar las 6 filas faltantes en la Matriz de Responsabilidad Compartida (H-03).
3. Incorporar las 3 acciones faltantes en el Plan de 90 días: capacitación (H-02), retención de logs (H-04), validación de "equipo dedicado" (H-08).
4. Corregir el tono de G.16 (H-07) y completar la sub-cláusula de cookies/archivos temporales (H-06) en Doc 01 y Doc 04.

Una vez incorporadas estas cuatro condiciones, el conjunto documental está en condición de pasar a **"Aprobado con observaciones"** para envío a revisión interna de Gerencia, previo a cualquier presentación formal a Quellaveco/Anglo American.

---

*Auditoría elaborada como diagnóstico. No se modificó ningún contenido de los documentos 01–05. Todas las conclusiones están referenciadas a una cláusula específica de `Standard_terms_ES.md`.*
