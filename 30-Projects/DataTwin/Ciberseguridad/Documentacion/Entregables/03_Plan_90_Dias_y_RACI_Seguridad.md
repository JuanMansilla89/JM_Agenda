# Plan de Cumplimiento de Seguridad — 90 días

## Fase 1: Gobierno y alcance — Días 0 a 15

| Acción | Responsable principal | Entregable |
|---|---|---|
| Constituir Comité de Seguridad liderado por C-Level | Gerencia / CTO | Resolución y términos de referencia |
| Designar Responsable del SGSI | Gerencia / CTO | Nombramiento y perfil |
| Confirmar alcance de certificación ISO | Responsable SGSI | Informe de cobertura |
| Crear matriz de responsabilidad ASTAY–Quellaveco | CTO / Arquitectura / Legal | RACI contractual |
| Inventariar activos, datos, ambientes y terceros | SGSI / TI / Ingeniería | Inventario aprobado |
| Crear registro inicial de brechas | SGSI | Plan de tratamiento |

## Fase 2: Controles contractuales — Días 16 a 30

| Acción | Responsable principal | Entregable |
|---|---|---|
| Formalizar gestión de terceros | Legal / SGSI | Registro, NDA y autorizaciones |
| Formalizar background checks | RR. HH. / Legal | Procedimiento y checklist |
| Aprobar protocolo de incidentes de 24 h | SGSI / Soporte / Legal | Playbook y contactos |
| Aprobar política de parches 72 h/14 días | TI / DevSecOps | Procedimiento y tablero |
| Crear plan de salida y borrado | SGSI / Ingeniería | Exit plan |
| Preparar paquete de auditoría | SGSI | Audit pack |

## Fase 3: DevSecOps y protección técnica — Días 31 a 60

| Acción | Responsable principal | Entregable |
|---|---|---|
| Activar SAST, SCA, secret scanning y escaneo de contenedores | DevSecOps | Pipeline con quality gates |
| Verificar TLS, certificados, sesiones y hardening | Arquitectura / Backend / Infraestructura | Informe técnico |
| Confirmar MFA, VPN, EDR y cifrado de endpoints | TI / Soporte | Reporte de cobertura |
| Formalizar gestor de secretos | DevSecOps / Arquitectura | Inventario y migración |
| Prohibir datos productivos en pruebas | Ingeniería / Data | Política y datasets sintéticos |
| Implementar gestión de vulnerabilidades | SGSI / DevSecOps | Registro y SLA |

## Fase 4: Validación independiente — Días 61 a 90

| Acción | Responsable principal | Entregable |
|---|---|---|
| Contratar y ejecutar pentest externo | SGSI / Compras | Informe y plan de acción |
| Remediar hallazgos críticos/altos | Ingeniería / TI | Evidencia de cierre |
| Ejecutar retest | Proveedor externo | Informe de retest |
| Realizar ejercicio de incidente | SGSI / Soporte / Dirección | Acta y lecciones aprendidas |
| Celebrar revisión del comité | Comité de Seguridad | Aprobación de cierre y riesgos residuales |
| Entregar evidencias acordadas al cliente | CTO / SGSI | Paquete de cumplimiento |

# RACI resumido

| Dominio | C-Level | Responsable SGSI | DevSecOps | TI/Soporte | RR. HH./Legal | Cliente | Tercero especializado |
|---|---|---|---|---|---|---|---|
| Gobierno | A | R | C | C | C | I | C |
| Riesgos SGSI | A | R | C | C | C | I | C |
| Secure SDLC | I | A | R | C | I | C | C |
| Endpoints/VPN/EDR | I | A | C | R | I | C | C |
| Producción cliente | I | C | C | C | I | A/R | C |
| Terceros | I | A | C | C | R | C/A cuando exige autorización | C |
| Incidentes | A | R | C | R | C | R compartido | C/R forense |
| Pentest | A | R | C | C | C | C/A para producción | R |
| RR. HH. | I | C | I | I | A/R | I | C |
| Auditoría | A | R | C | C | C | C | C |

**Leyenda:** R = ejecuta; A = aprueba/responde; C = consultado; I = informado.
