---
fecha: 2026-07-27
tipo: reunion
proyecto: CMH
participantes: [Juan Mansilla, Sergio Cisneros, Oswaldo Aspilcueta, Elio Rodriguez]
modalidad: virtual
tags: [cmh, nexo360, arquitectura, revision-tecnica]
---

# Análisis de Reunión — Revisión Técnica de Definición (equipo interno ASTAY)

**Fuente:** `Documentacion/Reuniones/CMH-Review_Definicion.md` (transcripción automática, Teams, ~57 min)
**Referencias cruzadas:** `Documentacion/Entregables/2026-07-25-pliego-consultas-formal-v1.qmd`, `2026-07-25-consultas-comite-especialistas-v1.md`, `2026-07-25-arquitectura-tecnica-v1.md`, `Documentacion/Referencias/TDR_Nexo_360_Operation_Mantenimiento_360_CM_Parcoy_VF.md`

**Reunión:** Sesión técnica interna del equipo ASTAY para cerrar posiciones de arquitectura y consolidar las preguntas críticas antes de enviar el **pliego de consultas formal** (vence hoy, 2026-07-27).
**Participantes:** Juan Mansilla (gerente técnico), Sergio Cisneros (comercial), Oswaldo Aspilcueta (arquitectura/integraciones), Elio Rodriguez (desarrollo).

---

## 1. Temas tratados

1. Alcance de dispositivo de campo: tablet confirmada verbalmente, pero pendiente doble-check en el TDR sobre si es tablet estricta o web responsive genérica, y sobre plataforma (iPad/Android).
2. Integración SAP: versión (ECC/S4HANA, cloud/on-premise), quién desarrolla el conector, mecanismo (API vs. archivos), disponibilidad de ambiente sandbox.
3. Límite técnico explícito del sistema: recibe información desde tablets (llenado manual), no telemetría de equipos — declarar esto como límite de alcance para evitar scope creep futuro.
4. Ausencia total de mockups/wireframes — decisión de generar un primer borrador de UX interno (con Milagros) para poder dimensionar el proyecto.
5. Estrategia de ejecución: 8 meses son razonables, pero se recomienda enfoque de sprints con MVP temprano (2-3 meses) en vez de entrega monolítica al mes 8.
6. Escala operativa: ~360 personas/guardia, ~100 usuarios concurrentes, ~100 equipos, 5 contratistas, 3 zonas; sin internet en mina (proyecto de iluminación/conectividad en curso).
7. Arquitectura de despliegue: monolito modular (no microservicios) dado el tamaño del proyecto.
8. Multiunidad/multitenant: decisión de **no** incluirlo en el alcance ni en criterios de aceptación de esta primera etapa; si se pide a futuro, sería con bases de datos separadas por unidad bajo un mismo core, nunca una BD compartida.
9. Reglas de negocio críticas a definir desde el inicio (core): segregación de roles/permisos por módulo, mínimo privilegio por contratista, federación de acceso de contratistas, manejo de colas/reconexión, resolución de conflictos de sincronización (dos usuarios editando el mismo estado), integridad transaccional del store & forward.
10. El TDR pide un "recomendador", no solo un optimizador simple — alcance ambiguo, depende de si habrá acceso a internet (cloud vs. on-premise) y afecta fuertemente el costo.
11. Modelo de despliegue de infraestructura: el TDR deja abierto nube privada / nube pública autorizada / on-premise sin definir una. Postura interna: es transparente para el equipo (ya se ha trabajado con los tres esquemas: Las Bambas, ambiente de test AWS, Quellaveco on-premise) trabajando con contenedores.
12. Caso de negocio del tracking de personas/equipos — cuestionado como no confirmado; se advierte el riesgo de comprometerse a algo que el propio cliente no tiene 100% mapeado, y cómo se negociarían adendas si se pide después.
13. Pentest exigido por el TDR — hay que averiguar costo y nivel/tipo exigido.
14. Ambientes de desarrollo/pruebas/producción: el TDR indica que el proveedor los provee, pero no aclara si el ambiente de **producción** termina siendo de CMH o de ASTAY — punto identificado como crítico porque cambia el modelo comercial completo (ver sección 4).
15. Horas-hombre de traspaso de código/conocimiento al equipo de CMH — no cuantificado, pendiente de preguntar.
16. Lenguajes y stack: el TDR deja que CMH elija el lenguaje "más adecuado" entre lo que proponga el proveedor — riesgo de que pidan Angular en vez de React/Next. Postura: proponer .NET (microservicios backend), Python, Node, frontend React/Next; base de datos PostgreSQL o SQL Server.
17. Gestión del cambio (plan, mapa de usuarios, capacitación por rol) — se resuelve durante el proyecto, no requiere pregunta en el pliego.
18. Entregables y criterios de aceptación: sin mockups ni número de reportes/pantallas definido por el cliente, es difícil dimensionar el proyecto — se necesita que CMH indique un aproximado, o ASTAY deberá proponerlo y fijar un límite explícito.
19. Sprint reviews quincenales — confirmado que es metodología Scrum estándar, sin mayor duda.
20. Forma de pago — sugerencia interna de proponer pago por entregable en vez de solo al cierre del proyecto (decisión comercial interna, no pregunta al cliente).

---

## 2. Decisiones tomadas (posición interna ASTAY)

| Decisión | Responsable | Estado |
|---|---|---|
| Arquitectura de campo offline-first, patrón Store & Forward (no tiempo real), por falta de conectividad garantizada en interior mina | Juan Mansilla / Oswaldo Aspilcueta | ✅ Confirmada como posición de diseño |
| No incluir soporte multiunidad/multitenant en el alcance ni en criterios de aceptación de esta primera etapa | Juan Mansilla | ✅ Confirmada |
| Si se pide multiunidad a futuro: bases de datos separadas por unidad bajo un mismo core (nunca una BD compartida para las 4-5 minas) | Oswaldo Aspilcueta | ✅ Confirmada como recomendación de arquitectura |
| Arquitectura monolítica modular, no microservicios, dado el tamaño y escala del proyecto | Juan Mansilla | ✅ Confirmada |
| Declarar explícitamente como límite técnico que el sistema consume datos de tablets (llenado manual), no telemetría de equipos | Juan Mansilla | ✅ Confirmada — pendiente redactarlo en la propuesta/pliego |
| Asumir integración SAP en modo batch (no tiempo real), condicionado a confirmación de versión/tipo de SAP | Juan Mansilla / Oswaldo Aspilcueta | 🔄 Working assumption, sujeta a confirmación por escrito de CMH |
| Modelo de despliegue de infraestructura (nube privada/pública/on-premise) es transparente para el equipo si se trabaja con contenedores | Oswaldo Aspilcueta | ✅ Confirmada como postura técnica |
| Stack propuesto: backend .NET/Python/Node, frontend React/Next, base de datos PostgreSQL o SQL Server | Juan Mansilla / Oswaldo Aspilcueta | ✅ Confirmada como propuesta preliminar (riesgo comercial si CMH exige otro stack) |
| Generar un primer borrador de UX con Milagros para poder dimensionar tiempos y pantallas | Juan Mansilla | ⏳ Pendiente de agendar |
| Explorar internamente propuesta de pago por entregable en vez de pago único al cierre (mes 8) | Sergio Cisneros | 🔄 Pendiente de conversación interna (no es consulta al cliente) |

---

## 3. Preguntas nuevas para el pliego de consultas (no están en el borrador del 25-jul)

Se comparó esta reunión contra `2026-07-25-pliego-consultas-formal-v1.qmd` (34 preguntas técnicas + 16 administrativas + 13 legales). La mayoría de los temas discutidos hoy **ya están cubiertos** por ese borrador (SAP, TTD-ES-001, offline, motor de asignación, infraestructura, stack, mockups). Sin embargo, surgieron **puntos nuevos, no incluidos todavía**:

1. **Modelo "proyecto" vs. "servicio" (el hallazgo más importante de la reunión)** — el TDR pide entrega de código fuente completo, pero también exige que los ambientes de producción cumplan seguridad/disponibilidad. Si CMH espera que ASTAY además opere, monitoree y dé mantenimiento continuo a la plataforma en producción después de la entrega, el proyecto deja de ser un desarrollo "llave en mano" puntual y pasa a ser un servicio tipo SaaS/PaaS con costo recurrente (Oswaldo lo estimó en el equivalente a ~4 personas adicionales a tiempo completo). **No hay pregunta en el pliego actual que aclare esto explícitamente.**
2. **Titularidad del ambiente de producción** — el TDR pide "ambientes de desarrollo, pruebas, producción, control de versiones y despliegue documentado" pero no aclara si el ambiente productivo termina siendo de CMH o de ASTAY. Relacionado con el punto 1 y con las preguntas 28-30 del pliego actual (que preguntan por infraestructura en general, pero no específicamente por la titularidad del ambiente de producción ni la responsabilidad de operación post-entrega).
3. **Horas-hombre y duración del traspaso** de código/conocimiento al equipo técnico de CMH al cierre del proyecto — no está preguntado en el pliego actual.
4. **Nivel/tipo de pentest exigido** por el estándar TTD-ES-001 (interno/externo, alcance, frecuencia) — mencionado en el TDR pero ni el pliego ni el documento de consultas del comité de especialistas lo preguntan directamente; solo aparece en el checklist DevSecOps interno.
5. **Número aproximado de reportes/pantallas/interfaces** que CMH espera ver en la plataforma — dado que no existen mockups, esta cifra ayudaría a acotar el alcance ("pintar la cancha"). No está en el pliego actual (la pregunta 32 solo pide mockups/wireframes existentes, no una cifra aproximada de pantallas esperadas).

---

## 4. Riesgos identificados

- **Riesgo comercial mayor: ambigüedad proyecto vs. servicio.** Si el pliego no aclara la operación post-entrega de producción, ASTAY corre el riesgo de cotizar un proyecto de desarrollo y descubrir después de firmado que se espera un servicio operado con SLA — esto puede representar ~4 FTEs adicionales de costo recurrente no presupuestado.
- **Riesgo de dimensionamiento sin mockups.** El equipo reconoce no tener "con qué dimensionar el tamaño del proyecto" — sin un número aproximado de pantallas/reportes de parte de CMH, ASTAY deberá fijar el límite de alcance unilateralmente en la propuesta, con riesgo de negociación posterior si CMH lo considera insuficiente.
- **Riesgo de integración SAP con perfil no disponible.** Ninguno de los presentes ha programado directamente sobre SAP (solo integraciones vía OData/CPI); si CMH exige desarrollo del lado SAP (no solo integración), se necesitaría un perfil especializado que el equipo no tiene hoy.
- **Riesgo de alcance por tracking sin caso de negocio confirmado.** Se identifica que el proyecto de tracking está en licitación separada y sin mapeo completo por parte del cliente — comprometerse a una interfaz específica ahora podría generar retrabajo o disputa de adicionales más adelante.
- **Riesgo de conflicto de datos en sincronización offline.** La regla propuesta ("el que registra al final decide") es una hipótesis de trabajo, no validada con el cliente; además persiste la duda técnica sobre cómo garantizar integridad transaccional en el store & forward.

---

## 5. Citas textuales relevantes

> **Juan Mansilla**, sobre el límite del alcance: "Esta plataforma recibe información de tablets. No está pensada para recibir telemetría de equipos, porque el volumen es diferente." (min. 14:56)

> **Oswaldo Aspilcueta**, sobre el nombre correcto del modelo comercial: "SAS, ese es un SAS, un software as a services... O un PaaS, mejor dicho, porque sería como plataforma." (min. 47:43-47:51)

> **Juan Mansilla**, sobre el impacto de costo de operar la plataforma: "A nivel de costo es como tener cuatro personas más chambeando a tiempo completo. Y no estoy hablando de cachimbitos, gente ya seria." (min. 46:03-46:58)

> **Oswaldo Aspilcueta**, sobre decisión de multiunidad: "Ahí sería base de datos distribuida... eso es lo que nosotros recomendaríamos, no una sola base de datos para las cuatro o 5 minas." (min. 36:28-36:44)

> **Sergio Cisneros**, sobre el pentest: "Algo que leí por ahí también era un pen test, no sé si alguien me puede aclarar qué es un pentest." (min. 17:46-17:51)

---

## Acciones siguientes

- [ ] Incorporar al pliego de consultas formal (vence hoy) la pregunta sobre operación/custodia de la plataforma en producción post-entrega y su implicancia en el modelo comercial (proyecto vs. servicio) 📅 2026-07-27 🔺 #cmh #datatwin
- [ ] Incorporar al pliego pregunta sobre titularidad del ambiente de producción y horas-hombre estimadas para el traspaso de código/conocimiento a CMH 📅 2026-07-27 🔺 #cmh
- [ ] Incorporar al pliego pregunta sobre nivel/tipo de pentest exigido por el estándar TTD-ES-001 📅 2026-07-27 🔼 #cmh
- [ ] Incorporar al pliego pregunta sobre número aproximado de reportes/pantallas esperadas, dado que no hay mockups 📅 2026-07-27 🔼 #cmh
- [ ] Agendar sesión de primer borrador de UX con Milagros para poder dimensionar tiempos del proyecto 📅 2026-08-04 🔼 #cmh
- [ ] Conversar internamente estrategia de pago por entregable en vez de pago único al cierre (mes 8) — responsable: @Sergio-Cisneros 📅 2026-08-04 🔼 #cmh

---

**Nota metodológica:** ~15 minutos finales de la transcripción (min. 29-33) corresponden a conversación informal del equipo sin relación con el proyecto — se excluyeron del análisis.
