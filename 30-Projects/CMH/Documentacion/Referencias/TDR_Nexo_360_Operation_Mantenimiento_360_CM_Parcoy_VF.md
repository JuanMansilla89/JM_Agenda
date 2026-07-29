---
tipo: referencia
proyecto: CMH
fuente: "Consorcio Minero Horizonte S.R.L. — Gerencia de Operaciones"
codigo: TDR-N360-OP-01
version: "0"
fecha-emision: 2026-06
tags: [cmh, tdr, nexo360, mantenimiento360, parcoy]
---

# TDR — Nexo 360 Operation y Mantenimiento 360
**Consorcio Minero Horizonte S.R.L. · Gerencia de Operaciones**

| Campo | Descripción |
|-------|-------------|
| Empresa que invita | Consorcio Minero Horizonte S.R.L. |
| Área solicitante | Gerencia de Operaciones |
| Documento base | Proyecto Nexo 360 Operation V00 / Rol del COM / Formato TDR CMH |
| Fecha de emisión | Junio 2026 |
| Versión | 0 — Documento para cotización técnica y económica |

## Control de versiones

| Versión | Elaborado por | Revisado / Aprobado por | Fecha | Comentarios |
|---------|---------------|--------------------------|-------|-------------|
| 1 | Jorge Vassallo, Emilio Sanchez | Gerencia de Operaciones | Junio 2026 | Documento base para solicitud de cotización a empresa desarrolladora de software |

---

## Índice

1. Información General
2. Antecedentes y Contexto Operacional
3. Objetivos del Proyecto
4. Alcance General del Proyecto
5. Alcance Funcional de Nexo 360 Operation
6. Alcance Funcional del Módulo Mantenimiento 360
7. Requerimientos Técnicos, Tecnológicos y de Integración
8. Metodología, Fases y Cronograma Referencial
9. Gobierno del Proyecto y Roles de Contraparte
10. Experiencia Mínima y Equipo Requerido del Proveedor
11. Entregables y Criterios de Aceptación
12. Requisitos para la Propuesta Técnica y Económica
13. Seguridad, Salud Ocupacional, Medio Ambiente y Acceso a Faena
14. Propiedad Intelectual, Confidencialidad, Datos y Ciberseguridad
15. Garantías, Soporte, Niveles de Servicio y Penalidades
16. Criterios de Evaluación de Propuestas
17. Adhesión
- Anexo A — Matriz Resumida de Cumplimiento Funcional
- Anexo B — Formato Referencial de Cotización Económica

---

## 1. Información General

Este documento constituye los Términos de Referencia que, gestionados por la Gerencia Corporativa de Tecnología y Transformación Digital de grupo empresarial minero Consorcio Minero Horizonte S.R.L. (en adelante CMH), rigen el proceso de solicitud de cotización, evaluación, adjudicación y posterior ejecución del diseño, desarrollo, implementación, capacitación y soporte de una solución de software propia para el grupo.

### 1.1 Nombre del servicio requerido

Diseño, desarrollo, implementación, capacitación y soporte del software propio "Nexo 360 Operation" y del módulo "Mantenimiento 360", para la programación, gestión, control, seguimiento y cierre de guardia de nuestra operación subterránea, incluyendo la administración de equipos propios y de contratistas, y la preparación de interfaces de descarga de información compatible con SAP y otros sistemas mineros usados en nuestras unidades mineras.

Se deja constancia que el software desarrollado y sus fuentes serán de propiedad de CMH, con todos los derechos sobre el mismo, y por lo tanto podrá ser usado por cualquier empresa minera del grupo para su proceso de cambio de guardia. La empresa que desarrolle este software no podrá comercializarlo sin autorización expresa y escrita de CMH.

### 1.2 Confidencialidad

Toda información proporcionada por CMH, la que pueda recolectar el proveedor de las áreas de negocio, así como las bases de datos, prototipos, diagramas, algoritmos, códigos fuente, documentación, parametrizaciones, entregables y resultados generados durante el servicio, tendrán carácter estrictamente confidencial y serán propiedad de CMH. El proveedor no podrá divulgar, publicar, reutilizar, licenciar, entrenar modelos externos ni usar dicha información para fines distintos del objeto del servicio, sin autorización expresa y escrita de CMH.

### 1.3 Objetivo del servicio

Contratar una empresa especializada en desarrollo de software de aplicaciones empresariales, con experiencia demostrable en sistemas operacionales, minería, mantenimiento y/o gestión de activos, para transformar el modelo Nexo 360 Operation en una solución tecnológica operable por el COM (Control Operacional Mina) de cada Unidad Minera.

### 1.4 Ubicación y características del lugar de ejecución

Para el desarrollo del software, el proveedor debe usar como referencia la Unidad Minera Parcoy, el cual se ubica en el distrito de Parcoy, provincia de Pataz, región La Libertad, Perú. Se trata de una operación aurífera subterránea, con alta dispersión de frentes, múltiples contratistas, operación continua, zonas de trabajo diferenciadas, recursos móviles y necesidad de alta coordinación guardia a guardia. Parte del servicio podrá ejecutarse remotamente; sin embargo, el proveedor deberá considerar visitas presenciales a la UM Parcoy para el levantamiento funcional, pruebas, capacitación y puesta en marcha.

Toda la recopilación y estructuración de información en terreno para la lógica del cambio de guardia debe ser 100% en español, sin tecnicismos o nombres de grupos/roles en inglés para la interacción con los operadores de mina.

---

## 2. Antecedentes y Contexto Operacional

Nexo 360 Operation es concebido como un sistema de planificación operativa integrada y entrega de guardia para minería subterránea. Su propósito es elevar el estándar de planificación, coordinación, seguridad, trazabilidad y control de la ejecución guardia a guardia, integrando planificación mensual, semanal, diaria y por guardia; disponibilidad real de personal y equipos; estado de frentes; participación de áreas de soporte; emisión formal de órdenes de trabajo; y cierre de guardia para retroalimentar la guardia siguiente.

La operación de la U.M. Parcoy presenta un alto componente manual, limitada integración entre áreas, baja trazabilidad del estado de los frentes y fuerte dependencia de criterios dispersos para asignar personas, equipos y prioridades. La solución requerida deberá evitar la simple digitalización de formatos actuales y deberá proponer un modelo operativo futuro optimizado, estandarizado y trazable, considerando la realidad de la operación subterránea, la participación del COM, la disponibilidad real de recursos, el cierre de guardia y la retroalimentación para la guardia siguiente.

| Parámetro operacional referencial | Magnitud / condición |
|----------------------------------|----------------------|
| Trabajadores por guardia al interior mina | Aproximadamente 360 personas |
| Equipos mina | Aproximadamente 80 equipos |
| Vehículos de apoyo | Aproximadamente 20 camionetas o vehículos de apoyo |
| Contratistas principales | Al menos 5 |
| Zonas de operación | Zona 1, Zona 2 y Zona 3 |
| Profundidad máxima referencial | Aproximadamente 1.400 m |
| Áreas involucradas | Planeamiento, Operaciones Mina, Geología, Topografía, Protección Industrial, SSOMA, Mantenimiento, Contratistas, TI y Gerencia de Operaciones |

### 2.1 Rol esperado del COM

El COM — Control Operacional Mina — será el usuario articulador del sistema. Debe centralizar la información del turno, canalizar desvíos, apoyar a Jefes de Sección y Jefes de Guardia, gestionar la comunicación con áreas de soporte y habilitar la gestión Short Interval Control (SIC). La solución deberá permitir al COM operar con visibilidad de 12, 24 y 48 horas, con tableros por zona, estado de frentes, estado de equipos, ubicación de recursos (para cuando exista tracking de personas), programa de producción/desarrollo y alertas de desviación.

| Rol / actor | Función esperada en el proceso Nexo 360 |
|-------------|----------------------------------------|
| Jefe de Sección | Define prioridades, valida programación del turno, resuelve desvíos críticos y toma decisiones operacionales. |
| COM / Supervisor SIC | Hace seguimiento del programa, anticipa retrasos, alerta desvíos, asesora al Jefe de Sección y mantiene la visualización operacional. |
| Programador producción / desarrollo | Transforma el plan semanal en programas de turno y visión 48 h, considerando viabilidad y restricciones. |
| Programador mantenimiento | Asegura disponibilidad de equipos, coordina quiebres del plan con mantenimiento y actualiza estado de flota. |
| Jefes de Guardia / Residentes | Generan, reciben y ejecutan órdenes de trabajo; supervisan ejecución en terreno y reportan cierre. |
| Áreas de soporte | Atienden requerimientos de mantenimiento, servicios, ventilación, bombeo, energía, radiocomunicaciones, topografía, geología, SSOMA y otros. |

---

## 3. Objetivos del Proyecto

### 3.1 Objetivo general

Diseñar, desarrollar, implementar y estabilizar una plataforma multiusuario propia que permita a la Unidad Minera planificar, programar, asignar recursos, monitorear, reprogramar, emitir órdenes de trabajo y cerrar guardias de manera trazable, integrada, segura y orientada a la mejora de productividad.

### 3.2 Objetivos específicos

- Integrar la planificación mensual, semanal, diaria y por guardia con la ejecución operacional real.
- Administrar la disponibilidad diaria de trabajadores, equipos, cuadrillas y contratistas.
- Registrar el estado real de los frentes al cierre de cada guardia y usarlo como insumo obligatorio de la guardia siguiente.
- Asignar recursos según prioridad, habilidad, ubicación, condición operativa, compatibilidad equipo-tarea y restricciones de seguridad.
- Emitir órdenes de trabajo individuales y/o por cuadrilla, imprimibles y trazables.
- Habilitar la gestión del COM bajo lógica SIC, con alertas de desviación y tableros ejecutivos.
- Incorporar a SSOMA como actor preventivo y operativo dentro de la preparación de guardia.
- Implementar un módulo Mantenimiento 360 para disponibilidad, mantenimiento y trazabilidad de flota propia y contratista.
- Preparar interfaces de exportación y/o integración compatible con SAP y otros sistemas mineros (como Deswik) para información de mantenimiento, disponibilidad y activos.
- Construir una base histórica robusta para análisis, control operacional y mejora continua.
- Elaborar el modelo documental de procesos para estandarizar entradas, salidas, responsables, controles y criterios de aceptación.
- Elaborar manuales e instructivos operativos y capacitar a usuarios clave antes de la puesta en producción.

---

## 4. Alcance General del Proyecto

El proveedor deberá considerar un servicio integral, bajo modalidad llave en mano funcional, que incluya el levantamiento, diseño, desarrollo, pruebas, capacitación, y ==soporte==. La solución deberá ser propia de CMH, parametrizable y escalable.

En el presente documento se especifican las funcionalidades deseadas para el sistema "Nexo 360 Operation" y del módulo "Mantenimiento 360", por lo que antes de iniciar el desarrollo, el proveedor debe incluir una etapa previa de levantamiento de información AS-IS, análisis funcional detallado, modelamiento TO BE, diseño de integraciones, validación de flujos operativos y aprobación formal por CMH.

| Componente | Alcance mínimo |
|-----------|---------------|
| Levantamiento funcional (AS-IS) | Talleres, entrevistas, observación de guardias, levantamiento de datos maestros, flujos, roles, restricciones, reglas de negocio, criterios de aceptación funcional. |
| Diseño funcional y técnico (TO-BE) | Especificación funcional, prototipos de pantallas, arquitectura, modelo de datos, perfiles, flujos, integraciones y plan de pruebas. |
| Desarrollo Nexo 360 Operation | Módulos de planificación, frentes, recursos, asignación, órdenes de trabajo (OT), seguimiento, reprogramación, cierre, reportabilidad y tableros COM. |
| Desarrollo Mantenimiento 360 | Módulos de maestro de equipos, disponibilidad, planes preventivos, correctivos, historial, indicadores, ubicación y exportación compatible SAP. |
| Implementación | Parametrización, carga inicial de datos, pruebas, piloto, ajustes, capacitación y despliegue progresivo. |
| Soporte y garantía | Mesa de ayuda, corrección de errores, estabilización, garantía funcional y soporte post puesta en marcha. |
| Documentación | Manual de usuario, manual administrador, manual técnico, diccionario de datos, documentación API/exportaciones, guía de operación y plan de continuidad. |

### 4.1 Fuera de alcance inicial (salvo cotización separada)

- Construcción de salas físicas de entrega de guardia.
- Implementación física de red Wi-Fi o conectividad interior mina.
- Sistema de tracking de personas y equipos, salvo interfaces que sí deben incluirse para futura integración.
- Compra de computadores, pantallas, impresoras, UPS o equipamiento de sala.
- Licencias SAP o modificaciones dentro de SAP, salvo las interfaces y archivos/API de intercambio.

---

## 5. Alcance Funcional de Nexo 360 Operation

El sistema deberá operar como plataforma central de coordinación de guardia. Deberá tomar el plan semanal/mensual aprobado, cruzarlo con el cierre de la guardia anterior, estado de frentes, disponibilidad de personas/equipos, restricciones de seguridad y prioridades operativas, para proponer o facilitar la programación de la guardia.

| ID | Módulo / función | Requerimiento mínimo | Criticidad |
|----|-----------------|---------------------|------------|
| N360-01 | Gestión de planes | Carga, edición, importación y versionamiento de plan mensual, semanal, diario y por guardia; con trazabilidad de cambios, identificación de frentes, metas, prioridades, restricciones, responsables, estado del plan y relación con la programación de guardia. | Obligatorio |
| N360-02 | Estado de frentes | Registro de condición de frente: disponible, bloqueado, requiere sostenimiento, requiere ventilación, requiere bombeo, pendiente geología/topografía, listo para perforación, carguío, disparo, limpieza, relleno u otros estados parametrizables. | Obligatorio |
| N360-03 | Maestro de labores | Administrar mina, zona, nivel, rampa, labor, frente, tipo de trabajo, método de explotación, contratista responsable y criticidad. | Obligatorio |
| N360-04 | Maestro de personal | Administrar trabajadores CMH y contratistas, rol, especialidad, habilidades, autorizaciones, guardia, empresa, disponibilidad, restricciones y vigencia documental. | Obligatorio |
| N360-05 | Maestro de cuadrillas | Definir cuadrillas por empresa, jefe, composición, habilidades, disponibilidad y asignación histórica. | Obligatorio |
| N360-06 | Disponibilidad diaria | Registrar asistencia, personal no disponible, equipos disponibles/no disponibles, camionetas, recursos de soporte y restricciones relevantes antes de la programación. | Obligatorio |
| N360-07 | Motor de asignación | Asignar o sugerir asignación de personas, cuadrillas y equipos a labores según prioridad, habilidad, compatibilidad, zona, tiempos de traslado, restricción y disponibilidad. | Obligatorio |
| N360-08 | Programación 12/24/48 hr | Visualizar y secuenciar programa de turno, próximas 24 hr y visión 48 hr para producción, desarrollo, servicios y mantenimiento. | Obligatorio |
| N360-09 | Órdenes de trabajo | Emitir OT por persona, cuadrilla o equipo, con labor, tarea, prioridad, instrucción, riesgos, controles, herramientas, materiales, responsables, horario y observaciones. Debe permitir impresión masiva. | Obligatorio |
| N360-10 | Entrega de guardia | Pantalla de sala con prioridades, restricciones, estado de frentes, equipos, recursos, mensajes SSOMA y plan por zona. | Obligatorio |
| N360-11 | Seguimiento intraturno / SIC | Registrar avances y desvíos por intervalos cortos; alertar retrasos, falta de recursos, bloqueos, fallas de equipo y quiebres de plan. | Obligatorio |
| N360-12 | Reprogramación | Permitir reprogramar recursos durante la guardia, dejando trazabilidad de motivo, autorizador, hora, impacto y nueva asignación. | Obligatorio |
| N360-13 | Gestión de desvíos | Registrar desvío, causa, responsable, área de soporte requerida, tiempo de respuesta, acción correctiva y cierre. | Obligatorio |
| N360-14 | Cierre de guardia | Cierre estructurado por labor/tarea/OT con cumplimiento, avance, recursos usados, observaciones, incidentes, restricciones y recomendaciones para la guardia siguiente. | Obligatorio |
| N360-15 | SSOMA integrado | Registrar mensajes preventivos, restricciones de seguridad, controles críticos, campañas, alertas ambientales y observaciones para la entrega de guardia. | Obligatorio |
| N360-16 | Reportabilidad | Dashboards por zona, contratista, frente, equipo, persona, cumplimiento de plan, causas de desviación, tiempos improductivos, cierre pendiente y productividad. | Obligatorio |
| N360-17 | Auditoría | Trazabilidad de cambios por usuario, fecha, hora, valor anterior/nuevo, comentarios y autorizaciones. | Obligatorio |
| N360-18 | Importación/Exportación | Carga masiva desde Excel/CSV y exportación de reportes a Excel/PDF/CSV. | Obligatorio |
| N360-19 | Integración futura | Arquitectura preparada para integrar tracking de personas/equipos, estaciones de reporte, conectividad mina, BI corporativo y SAP. | Deseable / Preparación obligatoria |
| N360-20 | Administración | Parametrización de roles, usuarios, permisos, catálogos, estados, prioridades, plantillas, turnos y empresas contratistas. | Obligatorio |

---

## 6. Alcance Funcional del Módulo Mantenimiento 360

Mantenimiento 360 será un módulo integrado a Nexo 360 Operation para entregar disponibilidad real de equipos, ubicación, condición, mantenimiento preventivo/correctivo y trazabilidad de flota propia y de contratistas. El módulo deberá ser compatible con descarga de datos desde y hacia SAP, bajo especificación técnica que será validada con CMH.

| ID | Módulo / función | Requerimiento mínimo | Criticidad |
|----|-----------------|---------------------|------------|
| M360-01 | Maestro de equipos | Registrar equipos propios y contratistas: código, placa, serie, tipo, marca, modelo, año, empresa, zona, capacidad, estado, criticidad, horómetro/kilometraje y documentación. | Obligatorio |
| M360-02 | Estado y disponibilidad | Registrar estados: operativo, asignado, standby, mantenimiento preventivo, correctivo, panne, espera repuesto, espera mecánico, baja, observación. | Obligatorio |
| M360-03 | Ubicación de equipos | Registrar ubicación física por zona/nivel/labor/punto de control, con actualización manual y preparación para integración futura con tracking. | Obligatorio |
| M360-04 | Plan preventivo | Crear planes de mantenimiento por calendario, horómetro, kilometraje o ciclos; alertas de vencimiento; programación diaria/semanal. | Obligatorio |
| M360-05 | Correctivos y solicitudes | Crear avisos/solicitudes de mantenimiento desde COM, jefe de guardia o mantenimiento; priorizar; asignar responsable; registrar diagnóstico y cierre. | Obligatorio |
| M360-06 | Órdenes de mantenimiento | Administrar OT de mantenimiento con equipo, falla, tarea, responsable, repuestos, mano de obra, inicio/fin, causa, acción y estado. | Obligatorio |
| M360-07 | Backlog | Gestionar backlog por criticidad, antigüedad, repuestos, impacto operacional y responsable. | Obligatorio |
| M360-08 | Disponibilidad para programación | Entregar a Nexo 360 Operation disponibilidad real de equipos antes de asignación de guardia. | Obligatorio |
| M360-09 | Indicadores | Disponibilidad mecánica, utilización, MTBF, MTTR, cumplimiento preventivo, backlog, detenciones, fallas recurrentes, disponibilidad por contratista/flota/zona. | Obligatorio |
| M360-10 | Historial de equipo | Historial completo de mantenimientos, fallas, disponibilidad, cambios de estado, ubicación, repuestos, observaciones y adjuntos. | Obligatorio |
| M360-11 | Adjuntos | Permitir adjuntar fotos, documentos, checklists, reportes técnicos y evidencias de cierre. | Deseable |
| M360-12 | SAP compatible | Exportar datos maestros, disponibilidad, avisos, OT, consumos, horómetros, estados y cierres en estructura compatible con SAP PM/MM o interfaz definida por CMH. | Obligatorio |
| M360-13 | Contratistas | Diferenciar flotas por empresa contratista, responsable, contrato, disponibilidad comprometida y cumplimiento. | Obligatorio |
| M360-14 | Alertas | Alertas por vencimiento preventivo, equipo crítico indisponible, OT vencida, falta de cierre, falla repetitiva o información incompleta. | Obligatorio |

---

## 7. Requerimientos Técnicos, Tecnológicos y de Integración

| Tema | Requerimiento |
|------|--------------|
| Arquitectura | Web responsive o híbrida, multiusuario, modular, escalable, con base de datos centralizada y despliegue en infraestructura definida por CMH: nube privada, nube pública autorizada u on-premise. |
| Usuarios y permisos | Control de acceso por usuario, perfil, área, empresa, rol, zona y función. Debe contemplar usuarios CMH y contratistas. |
| Base de datos | Motor robusto, respaldos automáticos, trazabilidad transaccional, diccionario de datos y procedimientos de recuperación. |
| Interfaz | Interfaz en español, orientada a operación mina, rápida, simple, con pantallas de sala COM, sala de guardia y pantallas de edición. |
| Rendimiento | Debe soportar al menos 500 usuarios registrados, 100 usuarios concurrentes, impresión masiva por guardia y consultas de tableros sin degradación significativa. El proveedor deberá proponer dimensionamiento. |
| Seguridad | Autenticación segura, cifrado de comunicaciones, gestión de sesiones, perfiles, auditoría, respaldos, segregación de ambientes, hardening y cumplimiento de políticas TI CMH. La solución deberá cumplir obligatoriamente con el estándar TTD-ES-001 Estándar de Seguridad para Adquisición, Desarrollo y Mantenimiento de Sistemas, así como con las políticas, lineamientos de arquitectura, infraestructura, identidad, ciberseguridad y operación TI vigentes en CMH. |
| Integraciones | API REST o servicios equivalentes para integración con SAP, sistemas de control de accesos, sistemas de tracking, BI, asistencia, conectividad mina y repositorios corporativos. |
| SAP | El proveedor incluirá una interfaz de exportación compatible SAP y una opción de integración más avanzada si CMH entrega especificación SAP PM/MM. Debe considerar archivos CSV/XLSX estructurados, API/staging tables o conectores según arquitectura aprobada. |
| Offline / baja conectividad | La solución debe soportar el modo "Store & Forward" (almacenamiento local y sincronización automática diferida) para dispositivos o pantallas que operen en zonas transitorias sin conectividad. |
| Impresión | Plantillas de OT y reportes imprimibles en alto volumen, por sala, zona, contratista, cuadrilla, persona y equipo. |
| Reportería | Dashboards operacionales y exportación a Excel/PDF/CSV; se valorará compatibilidad con Power BI u otra herramienta corporativa. |
| Ambientes | Desarrollo, pruebas/UAT y producción, con control de versiones y despliegue documentado. |
| Código fuente | Entrega de código fuente, repositorio, documentación técnica, scripts de base de datos y procedimientos de compilación/despliegue a CMH al cierre de cada hito relevante. Nota: El proveedor deberá proponer los lenguajes de programación a utilizar, y será CMH quien elija el más adecuado. |

---

## 8. Metodología, Fases y Cronograma Referencial

El proveedor deberá proponer una metodología ágil-controlada, con hitos formales de aprobación por CMH. Se espera una implementación total referencial de ocho meses, con piloto al mes seis, sin perjuicio de que el postor pueda proponer una alternativa optimizada.

| Etapa | Nombre | Plazo referencial | Entregable principal |
|-------|--------|------------------|---------------------|
| 1 | Diagnóstico y levantamiento operacional | Mes 1 | Diseño AS-IS: Mapa de proceso actual, matriz de datos maestros, reglas de negocio, restricciones, usuarios y roles. |
| 2 | Diseño funcional y técnico | Mes 2 | Diseño TO-BE: análisis funcional, modelo de procesos, prototipos, flujos end-to-end y plan de pruebas. Arquitectura, modelo de datos, matriz de integraciones, diseño SAP-compatible, seguridad, ambientes, APIs, cargas masivas, plan de pruebas y plan de despliegue. |
| 3 | Desarrollo MVP | Meses 3-4 | MVP funcional de Nexo 360 Operation, entorno de pruebas, flujo de asignación, OT, cierre y visualización básica. |
| 4 | Parametrización y carga de datos maestros | Meses 4-5 | Datos de trabajadores, equipos, cuadrillas, contratistas, frentes, prioridades, habilidades y plantillas cargados y validados. |
| 5 | Pruebas integrales y validación | Mes 5 | Pruebas funcionales, roles, impresión, cierre, reportes, exportaciones, correcciones y aprobación para piloto. |
| 6 | Piloto controlado en una zona | Mes 6 | Reporte de piloto operativo asistido, hallazgos, medición de uso, ajustes requeridos y validación operacional. |
| 7 | Ajustes, capacitación y estabilización | Mes 7 | Corrección de hallazgos, manuales, capacitación, reforzamiento y versión estable. |
| 8 | Implementación total | Mes 8 | Despliegue en modelo completo, soporte en terreno, arranque controlado y monitoreo intensivo. |
| 9 | Soporte post-puesta en marcha | Mes 8 en adelante | Mesa de ayuda, corrección de incidentes, mejoras menores, estabilización y transferencia. |

El proveedor deberá incluir un programa de Gestión del Cambio para el proyecto, incluyendo el plan, mapa de usuarios impactados, estrategia de comunicación, red de usuarios clave, capacitación por rol, gestión de resistencias, medición de adopción y reforzamiento.

### 8.1 Modalidad de trabajo

- Talleres de levantamiento presenciales y remotos con Operaciones Mina, Planeamiento, COM, Mantenimiento, SSOMA, Geología, Topografía, TI y contratistas.
- Sprint reviews o demostraciones quincenales durante desarrollo.
- Comité semanal de avance con contraparte operativa y técnica.
- Validación formal por hito antes de pasar a la siguiente fase.
- Plan de gestión del cambio, capacitación y soporte a usuarios clave.

---

## 9. Gobierno del Proyecto y Roles de Contraparte

| Rol CMH | Responsabilidad |
|---------|----------------|
| Gerencia de Operaciones | Patrocinio, priorización, resolución de decisiones operacionales y aprobación de hitos críticos. |
| COM | Usuario dueño del proceso diario, validación de pantallas, tableros, programación, SIC y cierre. |
| Planeamiento Mina | Validación de estructura de planes, frentes, prioridades, secuencias y metas. |
| Operaciones Mina / Jefes de Sección | Validación de programación, reglas de asignación, desvíos, cierre y usabilidad en guardia. |
| Mantenimiento | Dueño funcional del módulo Mantenimiento 360, datos de equipos, disponibilidad, planes, indicadores y SAP. |
| SSOMA | Validación de mensajes preventivos, restricciones, controles críticos y participación en entrega de guardia. |
| TI | Arquitectura tecnológica, seguridad, integración, infraestructura, ambientes, repositorio y soporte corporativo. |
| Contratistas | Suministro y validación de datos de personal, equipos, cuadrillas, disponibilidad y cierres según permisos definidos. |

---

## 10. Experiencia Mínima y Equipo Requerido del Proveedor

El postor deberá acreditar experiencia real en desarrollo de software empresarial y, preferentemente, en minería, mantenimiento industrial, gestión de activos, planificación operacional, dispatch, control de flota, SAP PM/MM, analítica de datos, y/o sistemas para operación minera 24/7.

| Perfil mínimo | Cantidad | Experiencia mínima | Responsabilidad |
|--------------|---------|-------------------|----------------|
| Jefe de Proyecto / Scrum Master | 1 | 8 años en proyectos de software empresarial; deseable minería | Plan, hitos, coordinación, riesgos, reportes y cumplimiento contractual. |
| Líder funcional minería / operaciones | 1 | 8 años en operaciones mina, planificación o sistemas mineros | Traducir proceso operacional a reglas funcionales y validar usabilidad. |
| Analista funcional senior | 1-2 | 5 años en levantamiento de procesos y especificaciones | Historias de usuario, flujos, casos de uso, pruebas UAT. |
| Arquitecto de software | 1 | 8 años en arquitectura web, integraciones y seguridad | Definir arquitectura, escalabilidad, integración, rendimiento y despliegue. |
| Líder backend / base de datos | 1 | 5 años | Modelo de datos, APIs, lógica de negocio, performance y auditoría. |
| Desarrolladores frontend/backend | 2-4 | 3 años | Construcción de módulos, pantallas, servicios e integración. |
| Especialista SAP / integración | 1 | 5 años; deseable SAP PM/MM | Diseñar exportaciones/interfaz compatible SAP. |
| QA / Tester | 1-2 | 3 años | Plan de pruebas, casos, defectos, evidencia y regresión. |
| Especialista UX/UI | 1 | 3 años; deseable sistemas industriales | Diseño de pantallas simples para operación y sala COM. |
| Soporte y capacitación | 1-2 | 3 años | Manuales, capacitación, mesa de ayuda y soporte post go-live. |

---

## 11. Entregables y Criterios de Aceptación

Los entregables deberán presentarse en formato digital editable y versionado. CMH podrá observar, rechazar o solicitar ajustes cuando existan inconsistencias funcionales, técnicas, documentales o de calidad.

| Etapa | Entregables mínimos | Criterio de aceptación |
|-------|--------------------|-----------------------|
| Licitación | Propuesta técnica y propuesta económica separadas; cronograma; metodología; CVs; experiencia; arquitectura preliminar; supuestos y exclusiones. | Documentación completa y alineada al TDR. |
| Levantamiento | Mapa de proceso actual, matriz de datos, mapa de roles, reglas de negocio, backlog inicial, riesgos y oportunidades. | Aprobación por Operaciones, COM, Mantenimiento, SSOMA y TI. |
| Diseño | Modelo TO-BE, análisis funcional detallado, prototipos, modelo de datos, arquitectura, flujos, matriz de permisos, diseño SAP/exportación, matriz de roles y permisos. | Aprobación formal de diseño por usuarios clave y TI. |
| Desarrollo MVP | Módulos MVP operativos, ambiente de pruebas, código versionado, manual preliminar y evidencia de pruebas. | Demostración funcional satisfactoria y defectos críticos corregidos. |
| Mantenimiento 360 | Módulo operativo de equipos, disponibilidad, mantenimiento, backlog, indicadores y exportación SAP compatible. | Validación por Mantenimiento y TI; prueba de exportación correcta. |
| Pruebas integrales | Plan de pruebas, casos, evidencias, defectos, matriz de trazabilidad de requerimientos, acta UAT, validación de roles y permisos, evidencia de pruebas de seguridad, revisión de vulnerabilidades y plan de remediación. | Defectos críticos y altos cerrados; aceptación para piloto. |
| Piloto | Reporte de piloto, uso real, tiempos, hallazgos, capacitación, ajustes priorizados y plan de despliegue. | Acta de piloto validado por Gerencia/COM. |
| Despliegue | Sistema productivo, usuarios, permisos, datos maestros cargados, manuales, capacitación, plan de soporte, manuales de usuario por rol y administrador, evidencia de remediación de vulnerabilidades críticas y altas. | Go-live aprobado y operación asistida. |
| Cierre | Código fuente, documentación técnica, manuales, diccionario de datos, respaldo, acta de transferencia, garantía y soporte. Procedimientos de operación segura, respaldo, recuperación, actualización y rollback. | Acta de conformidad final. |

### 11.1 Criterios mínimos de aceptación funcional

- El sistema debe permitir completar el flujo end-to-end: plan → disponibilidad → asignación → emisión de OT → seguimiento → reprogramación → cierre → alimentación de guardia siguiente.
- La asignación y cierre deben quedar trazados por usuario, fecha y hora.
- Las OT deben imprimirse y/o exportarse por sala, zona, cuadrilla, persona y equipo.
- Mantenimiento 360 debe entregar disponibilidad de equipos a Nexo 360 Operation antes de programar la guardia.
- La información requerida para SAP debe exportarse en formato acordado, con pruebas de lectura/validación por CMH.
- Los tableros COM deben mostrar estado de frentes, plan 12/24/48 hr, equipos, prioridades, desvíos y KPIs por zona.
- El sistema debe contar con manuales, capacitación y usuarios administradores entrenados.
- Para iniciar el Desarrollo es necesario que se valide y apruebe formalmente el diseño funcional y prototipado, asegurando que la solución esté alineada al 100% con las expectativas operativas, tecnológicas y de gestión del proyecto.

---

## 12. Requisitos para la Propuesta Técnica y Económica

Las propuestas deberán presentarse en dos archivos separados: Propuesta Técnica y Propuesta Económica. El postor deberá explicitar supuestos, exclusiones, licencias, infraestructura requerida, modalidad de despliegue, perfiles, dedicación, garantías y plazos.

### 12.1 Propuesta técnica mínima

- Comprensión del problema operacional y enfoque propuesto para Nexo 360 Operation y Mantenimiento 360.
- Metodología de levantamiento, diseño, desarrollo, pruebas, piloto, capacitación y soporte.
- Arquitectura tecnológica propuesta, ambientes, base de datos, ciberseguridad, respaldo y continuidad.
- Detalle funcional por módulo, indicando cumplimiento de cada requerimiento del Anexo A.
- Enfoque para integración/exportación compatible SAP.
- Cronograma detallado con hitos, ruta crítica, dedicación de recursos y dependencias CMH.
- Organigrama del equipo, CVs, experiencia comprobable y dedicación estimada.
- Plan de pruebas, UAT, control de calidad, gestión de defectos y criterios de aceptación.
- Plan de capacitación y gestión del cambio para COM, jefes de sección, jefes de guardia, mantenimiento, SSOMA, TI y contratistas.
- Plan de soporte post implementación, niveles de servicio y garantía.
- Riesgos, supuestos, exclusiones y requerimientos a CMH.
- Matriz de cumplimiento del estándar TTD-ES-001, indicando cumplimiento, brechas, exclusiones, evidencias y excepciones requeridas.
- Enfoque de desarrollo seguro, gestión de vulnerabilidades, pruebas de seguridad y remediación.

### 12.2 Propuesta económica mínima

La propuesta económica deberá presentarse desagregada para permitir comparación entre postores y decisión modular. Deberá incluir impuestos, moneda, forma de pago, validez de oferta, licencias, gastos de viaje, soporte, garantía y costos recurrentes.

| Ítem | Descripción | Cotizar separado | Observación |
|------|------------|-----------------|-------------|
| A | Nexo 360 Operation | Sí | Levantamiento, diseño, desarrollo, pruebas, piloto, despliegue y documentación del sistema operacional. |
| B | Mantenimiento 360 | Sí | Módulo de disponibilidad, mantenimiento de equipos propios/contratistas, historial, KPIs y administración de mantenciones. |
| C | Interfaz/exportación SAP | Sí | Mínimo exportación compatible SAP; opcional integración avanzada vía API/staging/conector. |
| D | Migración y carga inicial de datos | Sí | Datos maestros iniciales de personas, equipos, frentes, contratistas, cuadrillas y catálogos. |
| E | Capacitación y gestión del cambio | Sí | Sesiones, manuales, material y acompañamiento. |
| F | Soporte post go-live | Sí | Mesa de ayuda, soporte funcional/técnico, SLA, bolsa de horas y garantía. |
| G | Infraestructura/licencias | Sí, si aplica | Cloud, servidores, base de datos, herramientas, dominios, certificados, licencias de terceros. |
| H | Visitas a mina / viáticos | Sí | Separar costos de viaje, estadía, movilización y días en faena. |
| I | Mejoras opcionales | Sí | Tracking, Power BI, app móvil, offline, IA, módulos adicionales u otras funcionalidades. |

---

## 13. Seguridad, Salud Ocupacional, Medio Ambiente y Acceso a Faena

El servicio es principalmente de desarrollo de software; sin embargo, las actividades presenciales en faena deberán cumplir con las políticas, estándares y procedimientos de CMH, así como con la legislación peruana aplicable en seguridad y salud ocupacional, incluyendo la Ley N° 29783 y normativa sectorial vigente. El proveedor deberá considerar inducción, documentación de ingreso, seguros, EPP, exámenes y autorizaciones que CMH requiera para visitas a la UM Parcoy.

| Tipo de actividad | Aplica al servicio | Consideración |
|------------------|-------------------|---------------|
| Trabajo de oficina / sala COM / talleres | Sí | Levantamiento, reuniones, capacitación, pruebas y soporte. |
| Ingreso a interior mina | Eventual | Solo si CMH lo autoriza; requerirá inducción, EPP, permisos, acompañamiento y cumplimiento de estándares. |
| Trabajos eléctricos o instalaciones | No, salvo cotización separada | Si el proveedor incluye equipamiento, deberá cotizar y cumplir normativa correspondiente. |
| Manipulación de datos sensibles | Sí | Debe cumplir confidencialidad, ciberseguridad y protección de información operacional. |
| Actividades ambientales de campo | No aplica | El proveedor deberá evitar cualquier impacto ambiental durante su presencia en faena. |

---

## 14. Propiedad Intelectual, Confidencialidad, Datos y Ciberseguridad

- El software desarrollado, su código fuente, base de datos, configuraciones, documentación, interfaces, manuales, prototipos, reglas de negocio y parametrizaciones serán de propiedad de CMH, salvo componentes de terceros previamente declarados y aprobados.
- El proveedor no podrá incorporar librerías, componentes, servicios cloud, modelos de IA o software de terceros con licencias incompatibles con el uso corporativo de CMH.
- Toda información operacional, personal, contractual, de seguridad, mantenimiento o producción será propiedad de CMH.
- El proveedor deberá firmar acuerdos de confidencialidad y cumplir las políticas TI/seguridad de la información de CMH.
- El sistema deberá contar con auditoría de usuarios, respaldo, recuperación, control de acceso, cifrado en tránsito y segregación de ambientes.
- La oferta deberá indicar ubicación de datos, proveedor cloud si aplica, mecanismos de respaldo, RPO/RTO propuestos y procedimiento de salida/entrega de datos al término del contrato.

### 14.1 Requisitos específicos de ciberseguridad para Nexo 360 Operation y Mantenimiento 360

El proveedor deberá cumplir obligatoriamente con el estándar corporativo TTD-ES-001 Estándar de Seguridad para Adquisición, Desarrollo y Mantenimiento de Sistemas. Como parte de su propuesta técnica, deberá entregar una matriz de cumplimiento del estándar, indicando para cada requisito: cumple, cumple parcialmente, no cumple, no aplica, evidencia propuesta, responsable y observaciones.

Sin perjuicio de lo establecido en el estándar, para esta solución se deberá considerar como mínimo:

- Integración con el directorio corporativo de CMH, preferentemente Entra ID / Azure AD, mediante SSO bajo estándares SAML 2.0, OpenID Connect u otro mecanismo aprobado por TI y Ciberseguridad.
- No se permitirá el uso de cuentas genéricas para administración, soporte, operación regular, auditoría o trazabilidad, salvo excepción formal aprobada por CMH.
- Gestión de roles y permisos basada en mínimo privilegio, considerando usuarios CMH, contratistas, administradores funcionales, administradores técnicos y soporte proveedor.
- Registro de auditoría de eventos funcionales y técnicos relevantes, incluyendo accesos, cambios de permisos, cambios de programación, reprogramaciones, cierres de guardia, cambios de disponibilidad, modificación de datos maestros, cargas masivas, exportaciones SAP y acciones administrativas.
- Capacidad de integración de logs con las plataformas corporativas de monitoreo, SIEM o SOC definidas por CMH.
- Controles de seguridad para cargas masivas, archivos Excel/CSV, adjuntos, documentos, imágenes y evidencias, incluyendo validación de tipo de archivo, tamaño, contenido, permisos y protección contra archivos maliciosos.
- Protección de APIs, interfaces, exportaciones, staging tables o conectores mediante autenticación, autorización, trazabilidad y mecanismos seguros aprobados por CMH.
- Declaración completa de librerías, frameworks, componentes de terceros, dependencias open source, servicios cloud, herramientas de IA, motores de base de datos y licencias utilizadas.
- Procedimientos operativos de despliegue, backup, restore y documentación técnica y funcional completa, según lo establecido en el estándar.

---

## 15. Garantías, Soporte, Niveles de Servicio y Penalidades

- El proveedor deberá incluir una garantía mínima de 6 meses desde la puesta en producción, cubriendo defectos funcionales, corrección de errores, fallas de integración, problemas de rendimiento atribuibles al desarrollo, inconsistencias de datos generadas por el sistema y ajustes menores necesarios para estabilizar la operación.
- El proveedor deberá incluir en su propuesta un modelo de soporte, garantía y niveles de servicio para la etapa de piloto, puesta en marcha, estabilización y operación regular de la solución Nexo 360 Operation y Mantenimiento 360.
- El soporte deberá cubrir atención funcional y técnica, corrección de errores, asistencia a usuarios, resolución de incidentes, revisión de integraciones, apoyo en carga de datos, atención de problemas de rendimiento, soporte a reportes, respaldo ante fallas y acompañamiento durante la estabilización post go-live.
- El proveedor deberá proponer una mesa de ayuda con canales formales de atención, registro de tickets, clasificación por criticidad, tiempos de respuesta, tiempos objetivo de solución, responsables, mecanismos de escalamiento, reportes periódicos de atención y cierre formal de incidentes.

**Niveles de servicio mínimos:**

- **Incidente crítico:** sistema productivo indisponible o imposibilidad de programar, emitir órdenes de trabajo o cerrar guardia. Tiempo de respuesta máximo: 2 horas. Tiempo objetivo de solución: 8 horas o workaround operativo.
- **Incidente alto:** función clave afectada, como asignación de recursos, disponibilidad de equipos, emisión de OT, cierre de guardia, exportación SAP-compatible o tablero COM. Tiempo de respuesta máximo: 4 horas. Tiempo objetivo de solución: 24 horas.
- **Incidente medio:** falla funcional con alternativa manual o impacto acotado. Tiempo de respuesta máximo: 1 día hábil. Tiempo objetivo de solución: 5 días hábiles.
- **Incidente bajo:** consulta, mejora menor, ajuste visual o requerimiento no bloqueante. Tiempo de respuesta máximo: 2 días hábiles. Tiempo de solución según priorización acordada.

Durante el piloto y la puesta en marcha, el proveedor deberá considerar soporte intensivo funcional y técnico, con disponibilidad extendida según la criticidad de la operación, incluyendo seguimiento de incidentes, capacitación de refuerzo, acompañamiento a usuarios clave, medición de uso y transferencia de conocimiento a CMH.

El proveedor deberá incluir un procedimiento de escalamiento para incidentes críticos, indicando responsables, horarios de atención, canales de comunicación, niveles de escalamiento, tiempos máximos de atención y mecanismos de contingencia operativa.

El incumplimiento reiterado de los niveles de servicio, la no atención de incidentes críticos o altos dentro de los plazos acordados, o la falta de disponibilidad del equipo de soporte comprometido podrá estar sujeto a penalidades contractuales definidas por CMH.

### 15.1 Modalidad de soporte recomendada

| Etapa | Tipo de soporte | Recomendación |
|-------|----------------|---------------|
| Piloto | Soporte asistido | Acompañamiento diario, idealmente con presencia funcional. |
| Go-live | Soporte intensivo | Atención extendida durante las primeras semanas. |
| Estabilización | Soporte funcional y técnico | 6 meses posteriores al despliegue. |
| Operación regular | Mesa de ayuda | Atención por tickets con SLA. |
| Evolutivo | Bolsa de horas | Para mejoras, nuevos reportes o ajustes no cubiertos por garantía. |

### 15.2 Penalidades referenciales a considerar en la oferta/contrato

- Retraso injustificado en hitos aprobados.
- Incumplimiento de entregables obligatorios.
- No corrección de defectos críticos o altos dentro del plazo acordado.
- Incumplimiento de confidencialidad o políticas de seguridad de información.
- No disponibilidad del equipo clave comprometido sin reemplazo equivalente aprobado por CMH.
- Fallas recurrentes de calidad que impidan avance de UAT o piloto.
- El detalle económico de penalidades será definido por Abastecimiento/Legal de CMH en el contrato final. El proveedor deberá declarar su aceptación a la aplicación de penalidades razonables asociadas al cumplimiento de plazo, calidad y continuidad del servicio.

---

## 16. Criterios de Evaluación de Propuestas

| Criterio | Peso referencial | Aspectos a evaluar |
|---------|-----------------|-------------------|
| Comprensión operacional y solución funcional | 25% | Alineamiento con minería subterránea, COM, guardia, frentes, asignación, cierre y mantenimiento. |
| Experiencia y equipo | 20% | Proyectos similares, experiencia en minería/mantenimiento/SAP, calidad de CVs y dedicación. |
| Arquitectura técnica y ciberseguridad | 20% | Escalabilidad, modelo de despliegue, integración con identidad corporativa, SSO/MFA, control de acceso por roles, segregación de ambientes, seguridad de APIs/exportaciones, protección de datos, logging/auditoría, integración con SIEM/SOC, respaldo/recuperación, desarrollo seguro, gestión de vulnerabilidades, soporte remoto seguro, propiedad del código fuente y cumplimiento del estándar TTD-ES-001. |
| Metodología y cronograma | 15% | Claridad de fases, hitos, piloto, UAT, gestión de cambio y soporte. |
| Propuesta económica | 15% | Costo total, desagregación, licencias, soporte, recurrencia y flexibilidad modular. |
| Valor agregado | 5% | BI, tracking future-ready, UX, offline, analítica, buenas prácticas y transferencia. |

---

## 17. Adhesión

El presente documento establece los requerimientos mínimos de la solución. Será responsabilidad del proveedor realizar las validaciones, levantamientos, análisis e ingeniería necesarios para garantizar la implementación integral, puesta en marcha y correcto funcionamiento de la solución solicitada.

En consecuencia, cualquier actividad, servicio, suministro, licencia, equipo, accesorio, infraestructura, configuración, integración, permiso, recurso humano o material que resulte necesario para cumplir con los objetivos del proyecto, aun cuando no se encuentre expresamente indicado en este documento, deberá ser considerado e incluido dentro de la propuesta técnica y económica del proveedor, sin generar costos adicionales para la Compañía.

La modalidad de contratación será llave en mano, por lo que el proveedor será responsable de entregar una solución completamente operativa, probada y aceptada por la Compañía.

La presentación de la propuesta implicará que el proveedor ha revisado y comprendido el alcance del proyecto, la información suministrada y las condiciones operativas de la unidad minera, renunciando a presentar reclamos posteriores por omisiones previsibles o requerimientos técnicos necesarios para el cumplimiento de los objetivos establecidos.

---

## Anexo A — Matriz Resumida de Cumplimiento Funcional

El postor deberá devolver esta matriz indicando: Cumple / Cumple parcialmente / No cumple / Requiere desarrollo / Incluido en estándar / Costo adicional, agregando comentarios cuando corresponda.

| ID | Función | Criticidad | Respuesta postor | Comentarios |
|----|---------|------------|-----------------|-------------|
| N360-01 | Gestión de planes | Obligatorio | | |
| N360-02 | Estado de frentes | Obligatorio | | |
| N360-03 | Maestro de labores | Obligatorio | | |
| N360-04 | Maestro de personal | Obligatorio | | |
| N360-05 | Maestro de cuadrillas | Obligatorio | | |
| N360-06 | Disponibilidad diaria | Obligatorio | | |
| N360-07 | Motor de asignación | Obligatorio | | |
| N360-08 | Programación 12/24/48 h | Obligatorio | | |
| N360-09 | Órdenes de trabajo | Obligatorio | | |
| N360-10 | Entrega de guardia | Obligatorio | | |
| N360-11 | Seguimiento intraturno / SIC | Obligatorio | | |
| N360-12 | Reprogramación | Obligatorio | | |
| N360-13 | Gestión de desvíos | Obligatorio | | |
| N360-14 | Cierre de guardia | Obligatorio | | |
| N360-15 | SSOMA integrado | Obligatorio | | |
| N360-16 | Reportabilidad | Obligatorio | | |
| N360-17 | Auditoría | Obligatorio | | |
| N360-18 | Importación/Exportación | Obligatorio | | |
| N360-19 | Integración futura | Deseable / Preparación obligatoria | | |
| N360-20 | Administración | Obligatorio | | |
| M360-01 | Maestro de equipos | Obligatorio | | |
| M360-02 | Estado y disponibilidad | Obligatorio | | |
| M360-03 | Ubicación de equipos | Obligatorio | | |
| M360-04 | Plan preventivo | Obligatorio | | |
| M360-05 | Correctivos y solicitudes | Obligatorio | | |
| M360-06 | Órdenes de mantenimiento | Obligatorio | | |
| M360-07 | Backlog | Obligatorio | | |
| M360-08 | Disponibilidad para programación | Obligatorio | | |
| M360-09 | Indicadores | Obligatorio | | |
| M360-10 | Historial de equipo | Obligatorio | | |
| M360-11 | Adjuntos | Deseable | | |
| M360-12 | SAP compatible | Obligatorio | | |
| M360-13 | Contratistas | Obligatorio | | |
| M360-14 | Alertas | Obligatorio | | |

---

## Anexo B — Formato Referencial de Cotización Económica

| Partida | Descripción | Precio fijo (USD) | Precio mensual / recurrente (USD) | Plazo / dedicación | Comentarios |
|---------|------------|:-----------------:|:---------------------------------:|:-----------------:|-------------|
| 1 | Levantamiento y diseño funcional/técnico | | | | |
| 2 | Desarrollo Nexo 360 Operation | | | | |
| 3 | Desarrollo Mantenimiento 360 | | | | |
| 4 | Interfaz / exportación compatible SAP | | | | |
| 5 | Migración y carga inicial de datos maestros | | | | |
| 6 | Pruebas QA/UAT y piloto | | | | |
| 7 | Capacitación y gestión del cambio | | | | |
| 8 | Implementación total / go-live | | | | |
| 9 | Soporte post puesta en marcha y garantía | | | | |
| 10 | Licencias de terceros / infraestructura cloud / servidores | | | | |
| 11 | Visitas a mina, viáticos y logística | | | | |
| 12 | Mejoras opcionales | | | | |

---

*Nota final: El presente TDR busca recibir propuestas comparables y técnicamente robustas. CMH podrá adjudicar el alcance completo o por módulos, modificar prioridades, solicitar demostraciones, realizar reuniones aclaratorias y negociar el alcance final antes de la firma contractual.*
