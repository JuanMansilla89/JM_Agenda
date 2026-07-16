# Checklist DevSecOps — DataTwin Quellaveco

## Repositorios y código

- [x] Repositorios privados y segregados por cliente. ✅ 2026-07-14
- [x] MFA obligatorio para desarrolladores y administradores. ✅ 2026-07-14
- [ ] Branch protection y revisión obligatoria de pull requests.
- [ ] Secret scanning sobre código e historial.
- [ ] Prohibición de credenciales hard-coded.
- [ ] SAST integrado al pipeline.
- [ ] SCA y registro de dependencias/SBOM.
- [ ] Escaneo de imágenes de contenedor e IaC, si aplica.
- [ ] Quality gates para vulnerabilidades críticas y altas.

## Ambientes

- [x] Desarrollo, QA y producción lógicamente separados. ✅ 2026-07-14
- [x] Cuentas y secretos distintos por ambiente. ✅ 2026-07-14
- [x] Producción en infraestructura del cliente. ✅ 2026-07-14
- [ ] Sin pruebas destructivas en producción.
- [ ] Sin datos productivos en desarrollo o QA; usar datos sintéticos.
- [ ] Acceso remoto únicamente por VPN y MFA.
- [ ] Interfaces administrativas restringidas.

## Aplicación

- [x] Integración con AD/Entra ID del cliente. ✅ 2026-07-14
- [x] HTTPS obligatorio y redirección HTTP→HTTPS. ✅ 2026-07-14
- [x] TLS robusto y certificados válidos. ✅ 2026-07-14
- [x] Cookies Secure, HttpOnly y SameSite. ✅ 2026-07-14
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
