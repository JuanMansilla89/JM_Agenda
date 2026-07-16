---
fecha: 2026-07-15
proyecto: DataTwin - Quellaveco
cliente: Anglo American / Quellaveco
proveedor: ASTAY
estado: definido
clasificacion: confidencial
---

# Definición del Rol DevSecOps — ASTAY

> Este documento formaliza el rol de "Coordinador DevSecOps" identificado en el modelo mínimo de gobierno de [[01_Anexo_Seguridad_Comentado_ASTAY|01_Anexo_Seguridad_Comentado_ASTAY]] (§4, Estructura mínima, ítem 3) y referenciado en el RACI de [[03_Plan_90_Dias_y_RACI_Seguridad|03_Plan_90_Dias_y_RACI_Seguridad]] y en el [[04_Checklist_DevSecOps_DataTwin|04_Checklist_DevSecOps_DataTwin]].

Para ASTAY, el rol de **DevSecOps** debe ser responsable de integrar seguridad dentro del ciclo de desarrollo y despliegue de DataTwin, no solo de administrar herramientas.

## Actividades principales

### 1. Seguridad del ciclo de desarrollo

- Definir y mantener el Secure SDLC.
- Incorporar controles de seguridad desde diseño, desarrollo, pruebas y despliegue.
- Participar en revisiones de arquitectura y modelamiento de amenazas.
- Establecer criterios de seguridad para aprobar una liberación.
- Validar que desarrollo, QA y producción estén segregados.
- Evitar el uso de datos productivos en desarrollo o pruebas.

### 2. Seguridad de repositorios y código

- Configurar repositorios privados y segregados por cliente.
- Implementar protección de ramas y revisión obligatoria de pull requests.
- Ejecutar análisis SAST sobre el código.
- Implementar análisis de dependencias y vulnerabilidades de librerías.
- Generar y mantener el SBOM.
- Detectar secretos, contraseñas o tokens expuestos.
- Verificar que no existan credenciales hard-coded.
- Controlar los permisos de acceso a repositorios.

### 3. Seguridad del pipeline CI/CD

- Integrar controles de seguridad en los pipelines.
- Configurar quality gates que bloqueen despliegues con vulnerabilidades críticas o altas.
- Escanear imágenes de contenedores.
- Revisar infraestructura como código, cuando corresponda.
- Asegurar la integridad de los artefactos de despliegue.
- Gestionar variables, secretos y credenciales del pipeline.
- Mantener trazabilidad de compilaciones, aprobaciones y despliegues.

### 4. Gestión de vulnerabilidades

- Ejecutar escaneos periódicos de aplicaciones, dependencias, servidores y contenedores.
- Clasificar vulnerabilidades por severidad y riesgo.
- Crear y dar seguimiento a planes de remediación.
- Controlar el cumplimiento de los SLA:
  - vulnerabilidades y parches críticos dentro de 72 horas;
  - parches estándar dentro de 14 días.
- Gestionar excepciones y controles compensatorios.
- Coordinar pentests externos y retests.
- Preparar evidencias para auditorías del cliente.

### 5. Seguridad de aplicaciones

- Verificar controles contra:
  - inyección;
  - XSS;
  - CSRF;
  - IDOR;
  - errores de autenticación;
  - gestión insegura de sesiones;
  - configuraciones incorrectas;
  - exposición de información sensible;
  - redirecciones inseguras;
  - carga maliciosa de archivos.
- Validar HTTPS, TLS y certificados.
- Revisar configuración de sesiones, cookies y tokens.
- Validar RBAC y mínimo privilegio.
- Verificar que los mensajes de error no expongan información técnica.
- Implementar escaneo antimalware en cargas de archivos.

### 6. Gestión de secretos y accesos

- Implementar y administrar un gestor de secretos.
- Definir políticas de rotación de credenciales.
- Promover MFA para repositorios, VPN, nube y accesos administrativos.
- Verificar cuentas nominativas y prohibición de cuentas compartidas.
- Revisar periódicamente accesos privilegiados.
- Coordinar la integración con Active Directory o Microsoft Entra ID del cliente.

### 7. Infraestructura y hardening

- Definir baselines de configuración segura.
- Revisar puertos, servicios y componentes innecesarios.
- Validar firewalls con política deny-by-default.
- Verificar que las bases de datos no estén expuestas a internet.
- Validar segmentación entre web, aplicación y base de datos.
- Confirmar cifrado de discos, bases de datos, backups y comunicaciones internas.
- Coordinar con el cliente los controles de infraestructura productiva.

### 8. Incidentes y evidencias

- Apoyar la detección, análisis y contención de incidentes.
- Preservar logs y evidencias técnicas.
- Mantener trazabilidad de cambios y actividades administrativas.
- Participar en investigaciones y análisis de causa raíz.
- Apoyar el cumplimiento del plazo de notificación al cliente de 24 horas.
- Participar en ejercicios de respuesta a incidentes.

### 9. Gobierno y cumplimiento

- Reportar al responsable del SGSI o comité de seguridad.
- Mantener métricas de vulnerabilidades, parches, cobertura y cumplimiento.
- Preparar reportes para auditorías ISO y del cliente.
- Mantener actualizados procedimientos, checklists y estándares técnicos.
- Coordinar con Desarrollo, QA, Infraestructura, Soporte y Seguridad de la Información.

---

## Estudios recomendados

### Formación base

Se recomienda formación universitaria o técnica en:

- Ingeniería de Sistemas.
- Ingeniería Informática.
- Ciencias de la Computación.
- Ingeniería de Software.
- Ingeniería de Telecomunicaciones.
- Ciberseguridad.
- Carreras afines con experiencia demostrable en desarrollo e infraestructura.

Para este rol, la experiencia práctica es tan importante como el título profesional.

### Conocimientos técnicos requeridos

Debe tener dominio o experiencia comprobada en:

- Linux y administración básica de servidores.
- Redes, firewalls, VPN, DNS, TLS y certificados.
- Git y plataformas como GitHub, GitLab o Azure DevOps.
- Pipelines CI/CD.
- Docker y seguridad de contenedores.
- Kubernetes, al menos a nivel operativo, si forma parte de la arquitectura.
- Python, Bash o PowerShell.
- Desarrollo seguro de aplicaciones web y APIs.
- OWASP Top 10 y OWASP ASVS.
- Gestión de identidades, MFA, RBAC y Active Directory/Entra ID.
- Gestión de secretos.
- Análisis de vulnerabilidades.
- Logging, monitoreo y respuesta a incidentes.
- Bases de datos y cifrado de comunicaciones.
- Infraestructura cloud o híbrida.

### Herramientas deseables

- SonarQube.
- Semgrep.
- Snyk.
- Trivy.
- OWASP Dependency-Check.
- OWASP ZAP.
- Burp Suite.
- GitLeaks o TruffleHog.
- Dependabot o Renovate.
- Vault, Azure Key Vault o AWS Secrets Manager.
- DefectDojo.
- Wazuh, Microsoft Defender o soluciones EDR equivalentes.

No necesita dominar todas las herramientas, pero sí debe comprender el propósito de cada control y poder implementar un stack equivalente.

---

## Experiencia requerida

### Perfil mínimo viable

- Entre 3 y 5 años de experiencia total en tecnología.
- Al menos 2 años en DevOps, seguridad de aplicaciones, infraestructura o DevSecOps.
- Experiencia implementando pipelines CI/CD.
- Experiencia con repositorios, revisión de código y automatización.
- Participación en gestión de vulnerabilidades o pentesting.
- Experiencia documentando controles y evidencias.
- Capacidad para trabajar con equipos de desarrollo, QA y soporte.

### Perfil recomendado para liderar el programa

- Entre 5 y 8 años de experiencia.
- Al menos 3 años en DevSecOps, AppSec o Cloud Security.
- Experiencia diseñando Secure SDLC.
- Experiencia implementando SAST, SCA, DAST y secret scanning.
- Experiencia en ambientes empresariales o industriales.
- Experiencia en auditorías ISO 27001 o requisitos de clientes corporativos.
- Experiencia coordinando pentests y remediaciones.
- Conocimiento de gestión de riesgos y respuesta a incidentes.
- Capacidad para presentar métricas y riesgos ante Gerencia o comité C-Level.

---

## Certificaciones recomendadas

No todas son obligatorias. Se pueden priorizar según el alcance del rol.

### Relevantes para DevSecOps

- Certified DevSecOps Professional.
- DevSecOps Foundation.
- GitLab Certified CI/CD.
- Microsoft DevOps Engineer Expert.
- AWS Certified DevOps Engineer.
- Certified Kubernetes Security Specialist, si utilizan Kubernetes.

### Relevantes para seguridad

- Security+.
- CEH, como base general.
- OSCP, para un perfil más técnico y ofensivo.
- CSSLP, muy alineada a seguridad del desarrollo.
- CISSP, para un perfil senior o de liderazgo.
- ISO 27001 Lead Implementer o Lead Auditor.
- GIAC Cloud Security Automation, si el presupuesto lo permite.

Para ASTAY, priorizaría:

1. ISO 27001 Lead Implementer o formación equivalente.
2. Security+ o certificación base de ciberseguridad.
3. Certificación DevSecOps.
4. CSSLP o formación avanzada en seguridad de aplicaciones.
5. Certificación cloud según la plataforma utilizada.

---

## Competencias personales

- Capacidad de traducir riesgos técnicos a impacto de negocio.
- Orden documental y orientación a evidencias.
- Comunicación con perfiles técnicos, legales y ejecutivos.
- Capacidad de negociación con clientes y proveedores.
- Criterio para priorizar riesgos.
- Capacidad para definir controles pragmáticos.
- Orientación a automatización y mejora continua.
- Capacidad para cuestionar un despliegue cuando no cumple los controles mínimos.

## Posición recomendada dentro de ASTAY

El DevSecOps debería reportar funcionalmente al responsable del SGSI o al CTO y trabajar transversalmente con:

- Desarrollo.
- Arquitectura.
- QA.
- Infraestructura.
- Soporte.
- Data Engineering.
- Legal y contratos.
- Proveedores externos de pentesting.

No debería depender únicamente del líder de desarrollo, porque debe conservar independencia suficiente para bloquear o escalar riesgos de seguridad.
