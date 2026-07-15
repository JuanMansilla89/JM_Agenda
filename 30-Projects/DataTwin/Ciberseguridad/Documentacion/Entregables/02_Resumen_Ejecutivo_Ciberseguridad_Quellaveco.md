# Resumen Ejecutivo — Cumplimiento del Anexo de Seguridad Quellaveco

## Diagnóstico

ASTAY cuenta con una base de cumplimiento relevante: SGSI certificado, segregación de ambientes por cliente, acceso mediante VPN y producción desplegada en infraestructura de Quellaveco. No obstante, el anexo requiere evidencias operativas, gobierno formal y obligaciones contractuales específicas que no se cubren únicamente con la certificación ISO.

## Riesgos principales

1. Falta de evidencia de un equipo dedicado y comité de seguridad liderado por C-Level.
2. Responsabilidades ambiguas entre ASTAY y Quellaveco sobre producción, red, firewall, certificados, backups, parches y pentesting.
3. Posibles brechas en gestión de terceros, background checks y capacitación formal.
4. Ausencia o evidencia insuficiente de DevSecOps, gestión continua de vulnerabilidades y pentest anual externo.
5. SLA exigente de parches: críticos en 72 horas y estándar en 14 días.
6. Obligación de notificar incidentes en 24 horas y financiar un pentest postincidente dentro de 10 días.
7. Necesidad de plan formal de devolución y eliminación de datos al cierre del servicio.

## Modelo mínimo recomendado

- Sponsor C-Level: CTO o Gerencia General.
- Responsable formal del SGSI / Information Security Officer.
- Coordinador DevSecOps.
- Representante de Infraestructura y Soporte.
- Representante de RR. HH. y Legal/Contratos.
- Proveedor externo de vCISO fraccional, si no existe capacidad interna suficiente.
- Proveedor independiente para pentest anual y activación postincidente.

## Decisiones requeridas por la dirección

1. Aprobar el Comité de Seguridad y su mandato.
2. Designar responsable del SGSI y asignar dedicación efectiva.
3. Aprobar presupuesto para vCISO/pentest/EDR/herramientas DevSecOps, según brecha.
4. Aprobar matriz de responsabilidad compartida para negociar con Quellaveco.
5. Aprobar el SLA de parches y gestión de excepciones.
6. Aprobar protocolo de incidentes y reserva de contingencia contractual.

## Mensaje para el cliente

ASTAY asume responsabilidad por el desarrollo seguro, los ambientes bajo su control, los equipos del personal, los accesos remotos, el soporte, los proveedores y el SGSI. La infraestructura productiva, red, segmentación, directorio, certificados y otros componentes administrados por Quellaveco deben documentarse como responsabilidades del cliente o conjuntas, con evidencias y aceptación formal.
