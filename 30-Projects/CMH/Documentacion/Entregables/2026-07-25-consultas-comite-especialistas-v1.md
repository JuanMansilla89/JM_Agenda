---
fecha: 2026-07-25
tipo: entregable
proyecto: CMH
fuente: ASTAY Systems
tags: [cmh, consultas, pliego]
---
# Consultas al Cliente — Revisión de Comité de Especialistas
### Nexo 360 Operation + Mantenimiento 360 — Consorcio Minero Horizonte (CMH), Unidad Parcoy

**Preparado por:** ASTAY Systems
**Fecha:** 25 de julio de 2026
**Para:** Uso interno ASTAY — insumo para el pliego de consultas formal (vence 2026-07-27)

**Metodología:** revisión exhaustiva del TDR, el documento de alcance, el análisis de la reunión de licitación del 22-jul y la arquitectura técnica de referencia (25-jul), desde la perspectiva de un comité de cuatro especialistas: **consultor técnico** (proceso operacional y funcional), **arquitecto de software minero** (arquitectura de integración e infraestructura), **especialista legal** y **especialista administrativo**. Las preguntas se agrupan en tres categorías según a quién debe dirigirse la respuesta dentro de CMH, no según quién la formula.

---

## 1. Consultas Técnicas

### 1.1 Integración SAP

1. ¿Qué versión de SAP está en uso — ECC o S/4HANA? (TDR §7 no lo especifica; condiciona el tipo de conector disponible.)
2. ¿Qué transacciones/objetos específicos de PM y MM entran en el alcance (avisos, órdenes de mantenimiento, backlog de repuestos, maestro de equipos)?
3. El mecanismo de integración quedó sin definir en la reunión del 22-jul (archivos/staging/API, según lo confirmó el propio Luis Chang). ¿Existe una definición preliminar de TI de CMH, aunque no sea final, para dimensionar el primer alcance?
4. ¿El conector o adaptador del lado SAP lo desarrolla CMH, o se espera que ASTAY lo construya sobre un acceso que CMH habilite?
5. ¿Existe un ambiente SAP de pruebas (sandbox/QA) disponible para las pruebas de integración durante el proyecto, o solo se probará contra producción?
6. ¿Se espera sincronización en tiempo real o por lotes (batch) para el intercambio con SAP en esta primera fase?

### 1.2 Seguridad y cumplimiento (estándar TTD-ES-001)

7. ¿Podrían compartir el documento completo del estándar TTD-ES-001? El TDR solo lo resume (§14.1) y es la base de la matriz de cumplimiento que se debe entregar en la propuesta técnica.
8. ¿El SSO con Microsoft Entra ID debe federar también a los contratistas principales, o solo a personal CMH? (Punto explícitamente no aclarado en el TDR ni en la reunión.)
9. Si los contratistas no se federan vía Entra ID, ¿qué mecanismo de autenticación/MFA exige CMH para esas cuentas?
10. ¿Qué plataforma de SIEM/SOC utiliza CMH, y en qué formato espera recibir los logs de auditoría (Syslog, JSON, API específica)?

### 1.3 Conectividad y modo offline

11. ¿Cuál es la duración típica y el peor caso de desconexión en interior mina que debe soportar la app de campo (Store & Forward)?
12. Ante un conflicto de datos al sincronizar (ej. dos ediciones del mismo registro), ¿qué política prefiere CMH: último cambio prevalece, resolución manual, u otra? (Ver arquitectura técnica §5 — propuesta preliminar sujeta a validación.)
13. ¿Cuál es el cronograma real y la cobertura esperada por zona del proyecto de conectividad Wi-Fi interior mina mencionado como "inicia el próximo mes"? Condiciona qué tan crítico es el diseño offline en el corto plazo.
14. ¿Qué dispositivos exactos (marca/modelo) y sistema operativo se usarán para la app de campo — se confirmó "tablets" en la reunión, pero no la plataforma (Android/iOS/Windows)?
15. ¿Qué navegadores y versiones mínimas debe soportar la plataforma web (sala COM, sala de guardia, oficinas)?

### 1.4 Motor de asignación y reglas de negocio

16. ¿Se espera un motor de asignación basado en reglas explícitas, o algún grado de optimización automática (N360-07)?
17. ¿Es viable un primer alcance con disponibilidad de equipos ingresada manualmente, antes de integrar Mantenimiento 360 en tiempo real?
18. ¿Cuáles son las reglas de prioridad cuando compiten dos labores por el mismo recurso (persona o equipo)?
19. ¿Qué reglas de seguridad deben bloquear una asignación (ej. competencia vencida, equipo no habilitado, documentación vencida de contratista)?

### 1.5 Datos maestros e histórico

20. ¿Qué tiempo de retención se requiere para el histórico de guardias? ¿Existe un SLA de disponibilidad del sistema ya definido?
21. ¿Cuál es el volumen y la frecuencia de actualización esperados para cada maestro (personal, equipos, frentes, cuadrillas)?
22. ¿Existe ya una estructura/jerarquía documentada del maestro de labores/frentes y del maestro de equipos, o se levanta por primera vez en el proyecto?

### 1.6 Integraciones con sistemas adyacentes (identificados en la reunión del 22-jul, no descritos en el TDR)

23. ¿Qué es exactamente el sistema "SCOM" mencionado en la reunión, qué datos expone y con qué mecanismo de integración cuenta (API, base de datos, archivos)?
24. ¿Qué versión de Deswik se usa y qué tipo de integración se espera (lectura de plan, exportación de avance, u otra)?
25. ¿Cuál es el alcance y cronograma real del proyecto de "control de campamentos"? ¿Debe considerarse como fuente de datos desde el MVP o es una integración de fase posterior?
26. Sobre la "solución de control de sueño/antifatiga" mencionada por el cliente: ¿cuál es su nombre correcto, está ya contratada con un tercero, y qué tipo de integración se espera con Nexo 360 (solo lectura de alertas, bidireccional, u otra)?
27. El proyecto de tracking de personas/equipos ya está en licitación separada según lo indicado en la reunión — ¿su cronograma obliga a considerar su interfaz desde el diseño inicial, o basta con la preparación arquitectónica genérica que ya contempla el TDR (N360-19)?

### 1.7 Infraestructura y arquitectura de despliegue

28. En la reunión del 22-jul, Luis Chang indicó verbalmente que CMH proveería los ambientes de infraestructura. ¿Pueden confirmar esto por escrito, y precisar la modalidad (nube privada, nube pública autorizada u on-premise)?
29. Si CMH provee la infraestructura, ¿en qué formato esperan recibir los prerequisitos técnicos de ASTAY (documento de especificaciones, reunión de arquitectura conjunta, otro)?
30. ¿Existe ya una cuenta/suscripción cloud corporativa (Azure, AWS, GCP) donde deba desplegarse la solución, o esa decisión está pendiente?

### 1.8 Material de referencia existente

31. ¿Existe un documento de alcance o especificación más detallada del cual el TDR sea un resumen?
32. ¿Hay mockups, wireframes o prototipos — aunque sean internos o de baja fidelidad — de Nexo 360 Operation o de Mantenimiento 360?
33. ¿CMH evaluó o descartó alguna solución de mercado antes de optar por desarrollo a medida? ¿Qué brecha encontraron?
34. ¿Hay benchmarks, informes o visitas a otras operaciones que hayan influido en la definición de este alcance?

---

## 2. Consultas Administrativas

### 2.1 Proceso de licitación y cronograma

1. El plazo del pliego de consultas ya se movió una vez (de "este viernes" a 2026-07-27). ¿Pueden confirmar el cronograma actualizado completo del proceso, incluidas las fechas de comunicación de finalistas y de la visita a mina?
2. ¿Cuál es el mecanismo formal para comunicar qué proveedores avanzan como finalistas tras el filtro previo?
3. ¿Qué formato exacto se espera para la propuesta técnica y la propuesta económica (plantilla, extensión máxima, idioma, moneda)?
4. ¿Cuál es la fecha límite definitiva de presentación de la propuesta completa?
5. Para la visita a mina de los finalistas: ¿qué modalidad y duración se contempla, y quién coordina la logística?

### 2.2 Recursos, dedicación y gobernanza

6. ¿Se espera dedicación full-time o part-time del equipo propuesto por perfil (Jefe de Proyecto, Arquitecto, Analista funcional, etc.)?
7. ¿Qué disponibilidad real de la contraparte de CMH (COM, Planeamiento, Mantenimiento, SSOMA, TI) puede comprometerse durante el levantamiento, para planificar un cronograma realista?
8. ¿Existe un presupuesto de referencia o rango esperado para el proyecto? (Pregunta abierta desde el documento de alcance, sin respuesta aún.)
9. ¿Cuál es la fecha límite u horizonte esperado de implementación real, más allá del "referencial 8 meses" indicado en el TDR?
10. ¿Quién será el Product Owner o contraparte única de decisión de CMH durante la ejecución del proyecto?

### 2.3 Costeo, facturación y modelo de soporte

11. ¿En qué moneda debe presentarse la propuesta económica (soles o dólares) y bajo qué forma de pago (hitos, mensual, contra entregable)?
12. ¿La propuesta económica debe incluir impuestos, o se indican aparte?
13. En la reunión del 22-jul, Luis Chang indicó verbalmente que "los gastos de subida [a mina] son con respecto a CMH", lo cual contradice el TDR (§12.2 y Anexo B, ítem H) que pide cotizarlos por separado. ¿Pueden confirmar por escrito quién asume estos costos?
14. ¿El modelo de soporte post go-live (mesa de ayuda, bolsa de horas, SLA) se licita junto con el desarrollo, o se cotiza y contrata por separado una vez finalizada la implementación?

### 2.4 Gestión del cambio y capacitación

15. ¿CMH cuenta con un equipo interno de gestión del cambio con el cual coordinar, o se espera que el proveedor lo lidere de forma completa?
16. ¿Qué modalidad se espera para las capacitaciones — presencial en Parcoy, remota, o mixta — y con qué disponibilidad de los usuarios clave?

---

## 3. Consultas Legales

### 3.1 Propiedad intelectual y componentes de terceros

1. El TDR establece que el software y su código fuente son 100% propiedad de CMH (§1.1, §14). ¿Se reconoce la exclusión estándar de propiedad sobre componentes de terceros con licencia propia (librerías open source, frameworks), que seguirán bajo sus licencias originales aunque se declaren en el inventario de dependencias?
2. Para la app de campo, si se usan componentes nativos de las plataformas Apple/Google (según el sistema operativo que finalmente se confirme), ¿hay alguna restricción particular de CMH sobre el uso de tiendas de aplicaciones o distribución (ej. MDM corporativo, distribución interna vs. tienda pública)?

### 3.2 Confidencialidad y datos

3. ¿Se firmará un acuerdo de confidencialidad (NDA) específico antes de iniciar la fase de levantamiento, dado que implica acceso a información operacional y datos de personal?
4. ¿Existe una exigencia de ubicación geográfica para los datos (Perú, LATAM u otra), que condicione la elección del proveedor cloud en la arquitectura?
5. ¿Existe ya un procedimiento formal de CMH para la entrega/salida de datos al término del contrato, o se definirá específicamente para este proyecto?

### 3.3 Modalidad contractual, garantías y penalidades

6. El TDR indica modalidad "llave en mano" (§4, §17). ¿Se contratará bajo precio fijo, tiempo y materiales, o un modelo mixto por hitos?
7. El TDR señala que las penalidades serán definidas por Abastecimiento/Legal en el contrato final (§15.2). ¿Es posible recibir un borrador de las cláusulas de penalidad antes de la propuesta final, para poder evaluarlas o negociarlas con anticipación?
8. La garantía mínima de 6 meses (TDR §15) — ¿se cuenta desde el piloto (mes 6) o desde la implementación total (mes 8)?
9. ¿Qué tratamiento contractual tendrá la responsabilidad de ASTAY si una integración falla por causas atribuibles a un sistema de terceros fuera de su control (ej. el sistema antifatiga, el proyecto de tracking, o el proyecto de campamentos, todos aún en definición por parte de CMH)?

### 3.4 Cumplimiento normativo y SST

10. Para las visitas a mina, ¿qué alcance exacto tienen las obligaciones de SST del proveedor bajo la Ley N° 29783 (inducciones, seguros, exámenes médicos, EPP) — hay un procedimiento u onboarding documentado que puedan compartir con anticipación?
11. Dado que el sistema maneja datos personales de trabajadores propios y de contratistas, ¿qué requisitos específicos de la Ley de Protección de Datos Personales del Perú aplican al tratamiento de esta información por parte del proveedor?

### 3.5 Subcontratación y seguros

12. ¿Se permite subcontratar perfiles específicos (por ejemplo, el especialista SAP PM/MM) o se exige que todo el equipo sea personal directo de ASTAY?
13. ¿CMH exige alguna póliza de responsabilidad civil o seguro específico al proveedor durante la ejecución del contrato?

---

## Próximos pasos

1. Priorizar para el pliego de consultas formal (vence 2026-07-27) las preguntas marcadas como críticas para el dimensionamiento económico: infraestructura (T-28), viáticos (A-13), SSO de contratistas (T-8), mecanismo SAP (T-3) y presupuesto de referencia (A-8).
2. El resto de las preguntas técnicas de detalle pueden reservarse para la etapa de levantamiento funcional si el pliego de consultas tiene límite de extensión.
3. Las preguntas legales conviene canalizarlas también hacia el área de Abastecimiento/Legal de CMH (Jocelyn Pérez), no solo hacia TI.

---

*Documento preparado por ASTAY Systems — uso interno, insumo para el pliego de consultas a CMH.*
