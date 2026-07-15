# Matriz preliminar de responsabilidad compartida
## ASTAY — Quellaveco / Anglo American

| Dominio | ASTAY | Cliente | Compartido / condición |
|---|---|---|---|
| SGSI corporativo | Responsable | Recibe evidencia | Cliente puede auditar según contrato |
| Gobierno y comité C-Level | Responsable | Informado | Alinear puntos de contacto |
| Desarrollo seguro | Responsable | Revisa/aprueba requisitos | Criterios de aceptación conjuntos |
| Repositorios y CI/CD | Responsable | Sin acceso salvo acuerdo | Evidencias disponibles |
| Ambientes de desarrollo y QA ASTAY | Responsable | Autoriza ubicación/datos | No usar datos productivos |
| Infraestructura productiva | Configura aplicación y entrega baseline | Responsable de plataforma y red | Cambios coordinados |
| Active Directory / Entra ID | Integra aplicación | Provee y administra directorio | Pruebas y roles conjuntos |
| DNS y certificados productivos | Define requisitos y valida | Provee/administra, salvo acuerdo | Renovación coordinada |
| Firewall, DMZ y segmentación productiva | Define puertos y valida | Implementa/administra | Evidencia o aceptación |
| Base de datos productiva | Configuración lógica y seguridad de aplicación | Hosting, red y sistema operativo según arquitectura | Parcheo coordinado |
| Backups productivos | Define requerimientos de consistencia y prueba | Ejecuta/administra si está en su infraestructura | Restauraciones conjuntas |
| Endpoints ASTAY | Responsable | Puede exigir baseline | Equipos aprobados |
| VPN/acceso remoto | Cumple controles y usa cuentas nominativas | Provee/autoriza acceso a su red | MFA, logging y revocación |
| Soporte | Responsable por su personal y procedimiento | Provee ventanas y contactos | Gestión conjunta de incidentes |
| Parches de aplicación | Responsable | Aprueba ventana productiva | SLA 72 h/14 días |
| Parches de SO/infraestructura cliente | Recomienda y alerta | Responsable | Definir SLA y evidencia |
| Vulnerabilidades de código | Responsable | Informado | Plan de remediación |
| Pentest sobre componentes ASTAY | Responsable y financia | Recibe resultados | Alcance acordado |
| Pentest sobre producción cliente | Coordina y participa | Autoriza y facilita | Reglas de engagement |
| Terceros de ASTAY | Responsable y solicita autorización | Autoriza cuando acceden a datos/sistemas | NDA y mínimo privilegio |
| Incidentes | Detecta, contiene y notifica | Coordina respuesta en su entorno | Reporte máximo 24 h |
| Logs de aplicación | Configura y preserva según alcance | Provee infraestructura/retención si aplica | Acceso para investigación |
| Fin de servicio | Elimina datos y accesos bajo su control | Valida devolución y completitud | Acta de cierre |

## Condiciones que deben incluirse en la negociación

1. ASTAY no debe declarar cumplimiento sobre infraestructura que no administra sin evidencia del cliente.
2. Los cambios en políticas del cliente deben ser comunicados, evaluados y planificados.
3. Las pruebas de seguridad en producción requieren autorización y ventana formal.
4. Las demoras del cliente en accesos, certificados, red o ventanas de parcheo deben quedar registradas como dependencias.
5. Toda excepción debe tener riesgo, control compensatorio, plazo y aceptación formal.
