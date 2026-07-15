# Checklist DevSecOps — DataTwin Quellaveco

## Repositorios y código

- [ ] Repositorios privados y segregados por cliente.
- [ ] MFA obligatorio para desarrolladores y administradores.
- [ ] Branch protection y revisión obligatoria de pull requests.
- [ ] Secret scanning sobre código e historial.
- [ ] Prohibición de credenciales hard-coded.
- [ ] SAST integrado al pipeline.
- [ ] SCA y registro de dependencias/SBOM.
- [ ] Escaneo de imágenes de contenedor e IaC, si aplica.
- [ ] Quality gates para vulnerabilidades críticas y altas.

## Ambientes

- [ ] Desarrollo, QA y producción lógicamente separados.
- [ ] Cuentas y secretos distintos por ambiente.
- [ ] Producción en infraestructura del cliente.
- [ ] Sin pruebas destructivas en producción.
- [ ] Sin datos productivos en desarrollo o QA; usar datos sintéticos.
- [ ] Acceso remoto únicamente por VPN y MFA.
- [ ] Interfaces administrativas restringidas.

## Aplicación

- [ ] Integración con AD/Entra ID del cliente.
- [ ] HTTPS obligatorio y redirección HTTP→HTTPS.
- [ ] TLS robusto y certificados válidos.
- [ ] Cookies Secure, HttpOnly y SameSite.
- [ ] Expiración de sesión por 30 minutos de inactividad.
- [ ] RBAC y mínimo privilegio.
- [ ] Validación de entradas y prevención de inyección/XSS/CSRF/IDOR.
- [ ] Mensajes de error sin stack traces ni versiones.
- [ ] Directory listing deshabilitado.
- [ ] Rate limiting y controles de autenticación.
- [ ] Archivos cargados escaneados contra malware.

## Datos y secretos

- [ ] Cifrado de discos/volúmenes y backups.
- [ ] TLS entre aplicación, base de datos y servicios.
- [ ] Gestor de secretos corporativo.
- [ ] Rotación documentada de credenciales técnicas.
- [ ] Backups fuera del webroot y con prueba de restauración.
- [ ] Segregación de datos por cliente.
- [ ] Logs sin secretos ni información sensible innecesaria.

## Infraestructura y operaciones

- [ ] Firewall deny-by-default.
- [ ] Base de datos no expuesta a internet.
- [ ] Segmentación entre web, aplicación y base de datos.
- [ ] Servicios y puertos no utilizados deshabilitados.
- [ ] EDR/antimalware activo y administrado.
- [ ] Inventario de activos y versiones.
- [ ] Parches críticos en máximo 72 horas.
- [ ] Otros parches en máximo 14 días.
- [ ] Procedimiento de excepción y rollback.

## Vulnerabilidades e incidentes

- [ ] Escaneo continuo de vulnerabilidades.
- [ ] Pentest externo anual.
- [ ] Retest de hallazgos críticos/altos.
- [ ] Logs de seguridad centralizados y con retención definida.
- [ ] Procedimiento de incidente con notificación al cliente en 24 horas.
- [ ] Contactos de emergencia y escalamiento 24x7.
- [ ] Ejercicio de mesa anual.
