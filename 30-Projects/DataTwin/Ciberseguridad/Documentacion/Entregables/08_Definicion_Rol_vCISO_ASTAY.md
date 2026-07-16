---
fecha: 2026-07-15
proyecto: DataTwin - Quellaveco
cliente: Anglo American / Quellaveco
proveedor: ASTAY
estado: definido
clasificacion: confidencial
---

# Definición del Rol vCISO — ASTAY

> Este documento formaliza el rol de "Proveedor externo especializado — vCISO" identificado en el modelo mínimo de gobierno de [[01_Anexo_Seguridad_Comentado_ASTAY|01_Anexo_Seguridad_Comentado_ASTAY]] (§4, Estructura mínima, ítem 6) y referenciado en [[02_Resumen_Ejecutivo_Ciberseguridad_Quellaveco|02_Resumen_Ejecutivo_Ciberseguridad_Quellaveco]] y en el [[06_Auditoria_Cumplimiento_Anexo_X|06_Auditoria_Cumplimiento_Anexo_X]] (Hallazgo H-08, validación de la interpretación de "equipo dedicado"). Complementa a [[07_Definicion_Rol_DevSecOps_ASTAY|07_Definicion_Rol_DevSecOps_ASTAY]]: el DevSecOps implementa y opera controles; el vCISO define el marco, supervisa el cumplimiento y gestiona el riesgo residual.

Un **vCISO — Virtual Chief Information Security Officer** es un responsable externo o fraccional que dirige la estrategia, gobierno, cumplimiento y gestión de riesgos de ciberseguridad. A diferencia del DevSecOps, no se concentra principalmente en herramientas y pipelines, sino en asegurar que la organización tenga un programa de seguridad gobernado, medible y defendible ante clientes y auditorías.

## Actividades principales de un vCISO

### 1. Gobierno de seguridad

- Diseñar y mantener el programa corporativo de seguridad de la información.
- Definir políticas, estándares, procedimientos y responsabilidades.
- Liderar o actuar como secretario técnico del Comité de Seguridad.
- Preparar información para la Gerencia, CTO y demás ejecutivos C-Level.
- Proponer prioridades, presupuesto y hoja de ruta de seguridad.
- Supervisar que las decisiones y excepciones queden formalmente aprobadas.

Para el caso de ASTAY, debería asegurar la operación del comité C-Level exigido por Anglo American y mantener sus actas, acuerdos, riesgos y planes de acción.

### 2. Gestión del SGSI

- Administrar y mejorar el Sistema de Gestión de Seguridad de la Información.
- Confirmar que el alcance de la certificación ISO incluya los procesos, activos y servicios relevantes.
- Mantener la Declaración de Aplicabilidad.
- Coordinar auditorías internas y externas.
- Gestionar no conformidades y acciones correctivas.
- Preparar revisiones por la dirección.
- Mantener el ciclo de mejora continua del SGSI.

### 3. Gestión de riesgos

- Ejecutar evaluaciones periódicas de riesgos de ciberseguridad.
- Identificar activos, amenazas, vulnerabilidades e impactos.
- Definir tratamientos, responsables, fechas y controles compensatorios.
- Mantener un registro de riesgos y excepciones.
- Escalar riesgos críticos a Gerencia.
- Coordinar la aceptación formal de riesgos residuales.

En DataTwin debería mantener una evaluación específica por cliente, diferenciando desarrollo, QA, soporte, accesos e infraestructura productiva.

### 4. Cumplimiento contractual y regulatorio

- Analizar anexos contractuales de seguridad.
- Traducir obligaciones contractuales en controles verificables.
- Mantener matrices de trazabilidad y responsabilidad.
- Revisar cumplimiento de ISO 27001, protección de datos y requisitos del cliente.
- Preparar respuestas a cuestionarios de seguridad.
- Coordinar evidencias ante auditorías o due diligence.
- Identificar cláusulas con impacto financiero, técnico o legal.

### 5. Gestión de terceros

- Definir el proceso de evaluación de proveedores y subcontratistas.
- Mantener un inventario de terceros con acceso a datos o sistemas.
- Revisar NDA, cláusulas de seguridad y obligaciones de notificación.
- Verificar que los terceros cuenten con autorización del cliente cuando corresponda.
- Evaluar riesgos de proveedores cloud, SaaS, pentesting y soporte.
- Supervisar la revocación de accesos al finalizar contratos.

### 6. Gestión de incidentes

- Diseñar el plan de respuesta a incidentes.
- Definir niveles de severidad, escalamiento y contactos.
- Asegurar capacidad de notificación al cliente dentro de los plazos contractuales.
- Coordinar incidentes entre Tecnología, Soporte, Legal, RR. HH. y cliente.
- Liderar análisis de causa raíz y seguimiento de acciones correctivas.
- Coordinar análisis forense cuando sea necesario.
- Organizar ejercicios de simulación y pruebas de mesa.
- Mantener comunicación ejecutiva durante incidentes relevantes.

El vCISO no necesariamente opera las herramientas, pero debe asegurar que la organización pueda detectar, evaluar y reportar un incidente en menos de 24 horas.

### 7. Programa de vulnerabilidades y pentesting

- Definir la política de gestión de vulnerabilidades.
- Establecer severidades, SLA y criterios de excepción.
- Supervisar SAST, DAST, SCA, escaneo de infraestructura y contenedores.
- Coordinar proveedores externos de pentesting.
- Revisar informes y priorizar remediaciones.
- Presentar riesgos pendientes al comité.
- Verificar retests y cierre de hallazgos.
- Preparar reportes para el cliente.

### 8. Supervisión de DevSecOps

- Definir los requerimientos mínimos de seguridad para el ciclo de desarrollo.
- Aprobar el Secure SDLC.
- Asegurar que existan quality gates.
- Supervisar la gestión de secretos, accesos y dependencias.
- Revisar métricas de seguridad del pipeline.
- Resolver excepciones que el DevSecOps no puede aprobar por sí solo.
- Escalar incumplimientos técnicos a la dirección.

El DevSecOps implementa y opera controles; el vCISO define el marco, supervisa el cumplimiento y gestiona el riesgo residual.

### 9. Capacitación y cultura

- Diseñar el programa anual de capacitación.
- Definir contenidos por rol.
- Coordinar formación para desarrolladores, soporte, administradores y personal general.
- Supervisar simulaciones de phishing.
- Medir cobertura, aprobación y reincidencia.
- Incorporar obligaciones de seguridad en onboarding y offboarding.

### 10. Continuidad y recuperación

- Supervisar planes de continuidad y recuperación.
- Definir requerimientos mínimos de respaldo y restauración.
- Coordinar pruebas de recuperación.
- Validar RTO y RPO con las áreas técnicas y el cliente.
- Incluir riesgos de proveedores, personal crítico e infraestructura.

### 11. Auditorías y evidencias

- Mantener un paquete de evidencias de seguridad.
- Preparar certificados, políticas, matrices, actas, registros y reportes.
- Coordinar auditorías de clientes.
- Verificar que no se declare cumplimiento sin evidencia.
- Gestionar observaciones y compromisos posteriores a auditorías.

### 12. Reporte ejecutivo

Debe presentar periódicamente indicadores como:

- riesgos abiertos por nivel;
- cumplimiento del plan de tratamiento;
- vulnerabilidades fuera de SLA;
- estado de parches;
- cobertura de capacitación;
- incidentes y tiempos de respuesta;
- terceros evaluados;
- estado de auditorías;
- excepciones activas;
- madurez del programa de seguridad.

---

## Estudios recomendados

### Formación académica

Preferentemente:

- Ingeniería de Sistemas.
- Ingeniería Informática.
- Ingeniería de Software.
- Ciencias de la Computación.
- Ingeniería de Telecomunicaciones.
- Ciberseguridad.
- Administración o gestión empresarial con especialización sólida en seguridad.
- Derecho tecnológico o protección de datos, complementado con experiencia técnica, para perfiles orientados a gobierno.

Para un vCISO, la formación técnica es importante, pero también debe entender gestión, contratos, riesgo y gobierno corporativo.

### Estudios complementarios

- Maestría o especialización en Ciberseguridad.
- Gestión de Riesgos.
- Gobierno de TI.
- Auditoría de Sistemas.
- Continuidad de Negocio.
- Protección de Datos.
- Gestión empresarial o MBA, para perfiles senior.
- Gestión de servicios de TI.

---

## Experiencia requerida

### Perfil mínimo viable

Para una empresa del tamaño y nivel de exposición contractual de ASTAY:

- Entre 7 y 10 años de experiencia total en tecnología o seguridad.
- Al menos 4 o 5 años en ciberseguridad, riesgo, auditoría o SGSI.
- Experiencia práctica con ISO 27001.
- Experiencia realizando evaluaciones de riesgos.
- Experiencia preparando auditorías y evidencias.
- Experiencia en gestión de incidentes.
- Experiencia revisando contratos o requisitos de clientes.
- Capacidad para coordinar áreas técnicas, legales y ejecutivas.

### Perfil recomendado

- Más de 10 años de experiencia.
- Al menos 5 años en posiciones de liderazgo en seguridad.
- Experiencia como CISO, Security Manager, GRC Manager, ISO o consultor senior.
- Experiencia en organizaciones B2B y clientes corporativos.
- Experiencia en tecnología, software, cloud o servicios administrados.
- Experiencia en sectores industriales, minería, energía o infraestructura crítica.
- Experiencia presentando riesgos ante directorios o ejecutivos C-Level.
- Experiencia gestionando incidentes relevantes.
- Experiencia contratando y supervisando pentests, SOC, EDR y proveedores de seguridad.
- Experiencia negociando matrices de responsabilidad compartida.

---

## Certificaciones recomendadas

### Prioridad alta

- **CISSP:** adecuada para liderazgo integral de seguridad.
- **CISM:** muy alineada con gobierno, riesgos y gestión.
- **ISO 27001 Lead Implementer:** para operar y mejorar el SGSI.
- **ISO 27001 Lead Auditor:** para auditoría y preparación de evidencias.
- **CRISC:** orientada a gestión de riesgos tecnológicos.

### Complementarias

- CCSP, para seguridad cloud.
- COBIT, para gobierno de TI.
- ITIL, para gestión de servicios e incidentes.
- CBCI o certificación equivalente de continuidad.
- CIPM, CIPP o formación equivalente en privacidad.
- Certificaciones de respuesta a incidentes o gestión de crisis.
- Certificaciones específicas de Microsoft, AWS o Azure, según la arquitectura.

Para ASTAY, una combinación razonable sería:

1. CISM o CISSP.
2. ISO 27001 Lead Implementer.
3. CRISC.
4. Formación en privacidad y contratos tecnológicos.
5. Conocimiento técnico suficiente de cloud, DevSecOps y seguridad de aplicaciones.

---

## Competencias personales

- Capacidad de comunicación ejecutiva.
- Capacidad de convertir requisitos contractuales en acciones.
- Criterio para priorizar riesgos y presupuesto.
- Capacidad de negociación con clientes y proveedores.
- Independencia para escalar incumplimientos.
- Orientación documental y a evidencias.
- Liderazgo transversal sin autoridad jerárquica directa.
- Capacidad para trabajar bajo presión durante incidentes.
- Comprensión técnica suficiente para cuestionar diseños y controles.
- Capacidad para comunicar riesgos sin generar alarmismo.

## Dedicación sugerida para ASTAY

Un modelo inicial de vCISO fraccional podría considerar:

- entre 20 y 40 horas mensuales durante operación regular;
- mayor dedicación durante los primeros 90 días de implementación;
- disponibilidad de escalamiento durante incidentes;
- participación mensual en el Comité de Seguridad;
- revisión trimestral de riesgos y controles;
- acompañamiento en auditorías y solicitudes de clientes.

El vCISO debe reportar al CTO o Gerencia General y conservar independencia funcional respecto de Desarrollo, Infraestructura y Soporte. Su desempeño debe medirse por reducción de riesgo, cumplimiento de planes, calidad de evidencias y capacidad de respuesta, no por cantidad de documentos generados.
