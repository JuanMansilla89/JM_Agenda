---
fecha: 2026-07-22
tipo: reunion
proyecto: CMH
participantes: [Luis Chang, Jocelyn Pérez, Juan Mansilla, Sergio Cisneros]
modalidad: virtual
tags: [cmh, licitacion, nexo360]
---

# Análisis de Reunión — Overview de Licitación Nexo 360 + Mantenimiento 360

**Fuente:** `Documentacion/Reuniones/2026-07-22-reunion-overview-licitacion.md` (transcripción automática)
**Referencias cruzadas:** `Documentacion/Referencias/TDR_Nexo_360_Operation_Mantenimiento_360_CM_Parcoy_VF.md`, `Documentacion/Entregables/2026-07-26-alcance-requisitos-tecnicos-v1.md`

**Reunión:** Overview general del proceso de licitación con múltiples proveedores (ASTAY/Aztay, BT System Chile, Altamira Technology, Grupo Edín/BIM, y un quinto asistente no identificado con certeza — "Willard/Gustavo Ceballos", referido por el cliente como parte de "MR").
**Por CMH:** Luis Chang (TI, expone el TDR en representación de Gerencia de Operaciones) y Jocelyn Pérez (Abastecimiento — contratos y servicios, gestiona el proceso).
**Por ASTAY:** Juan Mansilla (gerente técnico), Sergio Cisneros (comercial).

**Nota metodológica:** el análisis usa solo las intervenciones etiquetadas "Cliente" (Luis Chang, salvo cuando se indica lo contrario) como fuente primaria del lado CMH; "Microphone" se descartó por ser transcripción duplicada del mismo audio. Las últimas ~230 líneas del archivo (tras el cierre formal de la reunión) corresponden a una conversación informal interna del equipo ASTAY, no a la reunión con el cliente — se usan solo como contexto de percepción competitiva.

---

## 1. Temas tratados

1. Apertura y presentación de asistentes por proveedor (Jocelyn Pérez modera).
2. Explicación por Luis Chang del mecanismo del proceso de licitación (overview general → pliego de consultas → filtro de finalistas → visita a mina → decisión final).
3. Contexto corporativo de CMH: 4 unidades en Perú + 1 en Colombia, 90% subterráneas; Parcoy como caso de referencia inicial, solución pensada para ser replicable.
4. Objetivo del servicio: desarrollo in-house "Nexo 360 Operation" + módulo "Mantenimiento 360"; propiedad intelectual y restricción de comercialización.
5. Parámetros operacionales de Parcoy (personal, guardias, equipos, contratistas, zonas, profundidad, antigüedad de la mina, recorrido interior mina).
6. Proyecto paralelo de conectividad de banda ancha interior mina (inicia el mes siguiente) y su relación con disponibilidad de datos en tiempo real y tracking futuro.
7. Rol del COM (usuario articulador, sala de despacho, jefes de sección/guardia, concepto SIC).
8. Repaso de objetivos del proyecto (generales y específicos).
9. Repaso de alcance general, incluyendo qué queda expresamente fuera de alcance.
10. Repaso del alcance funcional de Nexo 360 Operation (módulos).
11. Repaso del alcance funcional de Mantenimiento 360, con aclaración sobre uso parcial de SAP para mantenimiento.
12. Repaso de requerimientos técnicos, tecnológicos y de integración.
13. Repaso de metodología, fases y cronograma referencial (8 meses, piloto mes 6) y modalidad de trabajo (presencial/remoto).
14. Repaso de gobierno del proyecto, roles de contraparte y experiencia mínima del equipo proveedor.
15. Repaso de entregables, criterios de aceptación, requisitos de propuesta técnica/económica.
16. Repaso de seguridad/SSOMA/faena, propiedad intelectual, garantías/SLA/penalidades, criterios de evaluación y cláusula de adhesión.
17. Ronda de preguntas de proveedores:
    - Juan Mansilla (ASTAY): mecánica del proceso de evaluación/finalistas.
    - Speaker 10 (proveedor no identificado con certeza): tipos de guardia, sistemas existentes de personal/asistencia, casuística de bajas de guardia, sistemas de labores (Deswik/SCOM), telemetría de equipos, alcance del COM, control de fatiga/sueño.
    - Cristóbal Villaseca (BT System Chile): control de acceso/asistencia dentro o fuera de alcance, impresión de OT vs. app móvil, mecanismo de integración SAP.
    - Rafael Andrade (Grupo Edín/BIM): quién provee los ambientes de infraestructura, quién asume gastos de visitas a mina, mecanismo de integración SAP (archivos vs. API).
18. Cierre: extensión del plazo del pliego de consultas y anuncio de envío de cronograma actualizado.

---

## 2. Decisiones tomadas

| Decisión | Responsable | Fecha compromiso |
|---|---|---|
| Extender el plazo para que los proveedores presenten el pliego de consultas por escrito | Jocelyn Pérez (CMH, Abastecimiento) | 2026-07-27 (lunes) — originalmente era "este viernes" |
| Enviar por correo el cronograma actualizado del proceso de licitación a los proveedores | Jocelyn Pérez (CMH, Abastecimiento) | No especificada (comunicado como acción inmediata tras la reunión, 2026-07-22) |

No hubo otras decisiones formales acordadas en la reunión. Las respuestas de Luis Chang sobre viáticos, infraestructura y mecanismo SAP (ver sección 3) fueron **aclaraciones verbales en una sesión explícitamente calificada como "overview"**, no decisiones formalizadas — el propio cliente indicó reiteradamente que el detalle se trabajará en la fase de pliego de consultas. Se recomienda tratarlas como pendientes de confirmación por escrito, no como acuerdos cerrados.

---

## 3. Requisitos técnicos/funcionales — desglose

### 3.1 Confirman algo ya presente en el TDR o en el documento de alcance

| Tema mencionado en la reunión | ID/ubicación TDR |
|---|---|
| ~360 personas por guardia, 2 guardias (7am-7pm / 7pm-7am) | TDR §2, tabla de parámetros operacionales |
| ~100 equipos totales (equipos mina + vehículos de apoyo) | TDR §2 (80 equipos mina + 20 vehículos = 100; consistente, no es contradicción) |
| 5 contratistas principales | TDR §2 |
| 3 zonas de operación (Zona 1, 2, 3) | TDR §2 |
| Profundidad ~1.400 m | TDR §2 |
| Código fuente y propiedad intelectual 100% de CMH; prohibición de comercializar sin autorización | TDR §1.1, §14 |
| COM como usuario articulador de sala de despacho, con lógica SIC | TDR §2.1, N360-11 |
| Integración futura (tracking, conectividad) es "deseable" pero su preparación arquitectónica es obligatoria desde ya | TDR N360-19 |
| Módulo Mantenimiento 360 debe descargar/enviar datos a SAP (maestro equipos, disponibilidad, ubicación, preventivos/correctivos, OT, backlog, indicadores, historial) | TDR §6, M360-01 a M360-14 |
| Deswik como sistema minero externo a integrar | TDR §3.2 (mencionado explícitamente) |
| Metodología ágil-controlada, 8 meses referenciales, piloto en mes 6, abiertos a propuestas alternativas | TDR §8 |
| Talleres de levantamiento presenciales, con posibilidad de trabajo remoto en ciertas etapas y sprint reviews/demos | TDR §8.1 |
| Fuera de alcance: salas físicas de guardia, Wi-Fi/conectividad interior mina, equipamiento de tracking, licencias SAP | TDR §4.1 |
| Requisitos técnicos generales (web responsive, multiusuario, BD robusta, interfaz en español, estándar de seguridad propio de CMH) | TDR §7 |

### 3.2 Requisitos NUEVOS mencionados en la reunión (no están en el TDR ni en el documento de alcance)

- **Solución de "control de sueño"/antifatiga** — el cliente confirma que "va a tener la solución de [nombre no identificable con claridad en la transcripción, suena a 'Chucky']" (min 47:52). No aparece en el TDR ni en el documento de alcance. Requiere aclaración: ¿es un sistema externo ya contratado que Nexo 360 debe integrar, o se espera que el proveedor lo desarrolle?
- **Proyecto paralelo "sistema de control de campamentos"** — dará información de personal disponible (equivalente a control de acceso/asistencia), actualmente en desarrollo, con expectativa (no garantizada) de estar listo el mismo año del proyecto Nexo 360. No mencionado en TDR.
- **Proyecto de tracking de personas y equipos ya en proceso de licitación separado** — el TDR solo indica que el tracking está "fuera de alcance salvo interfaces"; la reunión añade que ya existe una licitación en curso para ese sistema.
- **Fecha de inicio del proyecto de conectividad de banda ancha interior mina**: "el próximo mes" (≈agosto 2026) — el TDR solo decía "en paralelo", sin fecha.
- **Aclaración: CMH "no hace uso 100% del módulo de mantenimiento dentro de SAP"** — matiza el alcance real de la integración SAP-Mantenimiento respecto a lo que el TDR sugiere implícitamente.
- **Nombre y rol de sistemas internos adyacentes no mencionados en el TDR**: "SCOM" (sistema in-house de labores diarias/reales) y un sistema in-house de datos de personal (propio/contratista) — relevantes como fuentes de integración.
- **Contexto de escala corporativa**: 4 unidades en Perú (Trujillo, Puno, Cerro de Pasco) + 1 en Colombia, 90% subterráneas — no cuantificado en el TDR, relevante para el argumento de "solución replicable".
- **Antigüedad de la mina (~45 años) y recorrido interior mina (~25 km)** — detalles operacionales no presentes en el TDR.
- **Mecanismo explícito de evaluación en dos etapas**: recepción de todas las propuestas (filtro previo) → selección de finalistas con mayor nivel de detalle → visita a mina para decisión final — el TDR lo insinúa de forma más genérica en su nota final; la reunión lo hace explícito.
- **Uso de tablets (no celulares) en campo** para jefes de sección/guardia, combinado con impresión obligatoria de OT — detalle de dispositivo no mencionado en el TDR.

### 3.3 Contradicciones entre lo dicho en la reunión y el TDR/documento de alcance

1. **Gastos de visitas a mina (viáticos/movilización)**: el TDR (§12.2, tabla, ítem H; Anexo B, partida 11) exige que el proveedor cotice por separado "visitas a mina, viáticos y logística". En la reunión, ante la pregunta de Rafael Andrade (Grupo Edín/BIM), Luis Chang afirma explícitamente: *"La parte de gastos de subidas es con respecto a CMH"* — es decir, CMH asumiría estos costos, contradiciendo el TDR. **Debe confirmarse por escrito**, ya que fue una respuesta verbal en sesión de overview.
2. **Provisión de infraestructura/ambientes**: el TDR (Anexo B, ítem G) indica cotizar infraestructura/licencias "si aplica", y §7 deja ambiguo quién despliega. En la reunión, Luis Chang confirma sin ambigüedad: *"nosotros tenemos que proveerles estos ambientes... es importante que ustedes nos indiquen ahí los prerequisitos que necesitan"* — esto reduce/elimina la necesidad de que ASTAY cotice infraestructura, en tensión con la redacción "cotizar si aplica" del TDR. También requiere confirmación escrita.

---

## 4. Preguntas abiertas / pendientes del cliente

Contraste contra el documento de alcance ASTAY (secciones "1. Antecedentes y estado de avance" y "2. Preguntas técnicas prioritarias"):

**Respondidas (total o parcialmente) en esta reunión:**
- *"¿'Nexo 360 Operation' y 'Mantenimiento 360' corresponden a una iniciativa ya existente o son nombres definidos para este proyecto?"* → **Respondida**: son nombres acuñados para este proyecto por la Gerencia de Operaciones.
- *"¿Mecanismo de integración SAP: archivos planos, staging, API?"* → **Parcialmente respondida**: el cliente se inclina verbalmente por un "punto de importación de archivos", pero reitera varias veces que **no está completamente definido** y se resolverá en el levantamiento. Sigue abierta en el detalle técnico.
- *"¿Existe equipo interno desarrollando algo de esto?"* → **Parcialmente respondida (indirecta)**: no se mencionó desarrollo interno del sistema Nexo 360 en sí; solo existen sistemas adyacentes (Deswik, SCOM, sistema in-house de personal) que alimentarán al nuevo sistema, no lo reemplazan.
- *"¿Existe ya un mapa AS-IS del proceso de cambio de guardia?"* → **Implícitamente respondida como NO**: el cliente enfatiza que el levantamiento in situ es una etapa inicial pendiente, sugiriendo que no existe un AS-IS formal previo.

**Siguen abiertas (no abordadas en la reunión):**
- Versión de SAP en uso (ECC vs. S/4HANA).
- Transacciones/objetos PM y MM específicos en alcance.
- Documento completo del estándar TTD-ES-001 — el cliente solo dice que "vamos a compartir" los documentos de seguridad, sin confirmar si ya fueron enviados.
- Si el SSO con Entra ID debe federar también a contratistas.
- Duración típica/peor caso de desconexión offline y política de resolución de conflictos de sincronización.
- Si el motor de asignación (N360-07) debe ser basado en reglas explícitas o con optimización automática.
- Viabilidad de un primer alcance con disponibilidad de equipos ingresada manualmente antes de integrar Mantenimiento 360 en tiempo real.
- Tiempo de retención de histórico de guardias / SLA de disponibilidad.
- Existencia de mockups/wireframes, evaluación previa de soluciones de mercado, benchmarks o visitas a otras operaciones.
- Estado de avance detallado por módulo (tabla Bloque A / Bloque B del documento de alcance).
- Hace cuánto tiempo se viene trabajando la definición interna y qué área específicamente lideró la redacción del TDR.

---

## 5. Citas textuales relevantes

> **Luis Chang (TI, CMH):** "las operaciones de la comunidad parcoy nos ha encargado justamente este sistema que nos permita realizar el cambio de guardia de una manera ágil, sobre todo por los procesos manuales que se tienen actualmente" (min. 09:49)

> **Luis Chang:** "las fuentes van a ser propiedad de [CMH]... por más indicar que este software no se puede comercializar sin autorización escrita y escrita de CMH." (min. 14:14–14:39)

> **Luis Chang**, respondiendo a Juan Mansilla sobre el mecanismo de evaluación: "es un filtro previo... vamos a recibir solamente las propuestas de todos, pero van a haber algunas finalistas que seguramente vamos a tener que tomar la decisión por cuál ya decantarnos... estas empresas que salgan ya como finalistas, podrán hacer ello con más información que se pueda relevar en la unidad." (min. 41:31–42:09)

> **Luis Chang**, sobre el módulo de mantenimiento: "tenemos la parte de cierta funcionalidad andando en SAP, no hacemos uso 100% del módulo de mantenimiento dentro de SAP, entonces seguramente va a tener integraciones" (min. 27:17)

> **Luis Chang**, sobre gastos de visitas a mina (contradice TDR §12.2/Anexo B): "La parte de gastos de subidas es con respecto a CMH." (min. 55:21)

> **Luis Chang**, sobre infraestructura: "respecto al tema de infra es correcto, nosotros tenemos que proveerles estos ambientes... es importante que ustedes nos indiquen ahí los prerequisitos que necesitan" (min. 54:29–54:45)

---

## 6. Riesgos identificados

- **Riesgo de alcance/económico**: la contradicción sobre viáticos e infraestructura (sección 3.3) fue solo verbal, en una sesión que el propio cliente calificó como "overview". Si ASTAY arma su propuesta económica asumiendo que CMH cubre esos costos y luego el pliego de consultas o el contrato final revierten a lo escrito en el TDR, hay riesgo de subestimación de costos.
- **Riesgo de dependencias entre proyectos paralelos**: la conectividad interior mina, el tracking de personas/equipos y el "sistema de control de campamentos" son todos proyectos paralelos de CMH, sin fecha de entrega garantizada, de los cuales Nexo 360 depende para funcionalidades en tiempo real (disponibilidad, asignación, tableros). El propio cliente reconoce incertidumbre.
- **Riesgo de estimación por integración SAP indefinida**: el mecanismo de integración (archivos vs. API) sigue sin definirse; Rafael Andrade (Edín/BIM) señaló explícitamente que esto dificulta estimar esfuerzo con precisión — riesgo compartido por todos los proveedores, no solo ASTAY.
- **Riesgo de coordinación con el proyecto paralelo del "COM"**: el propio Luis Chang admite que existe un proyecto paralelo de TI de "transformación operacional y excelencia operacional" definiendo el alcance real del COM, separado del TDR de Nexo 360 — riesgo de desalineación de alcance o retrabajo si no se sincroniza.
- **Riesgo competitivo/proceso**: participan al menos 4 proveedores (ASTAY, BT System Chile, Altamira, Grupo Edín/BIM) y posiblemente un quinto no identificado con certeza; solo 2 finalistas avanzan a la fase de visita a mina. El equipo de ASTAY percibió a BT System Chile (Cristóbal Villaseca) como el competidor con mejor entendimiento técnico de la integración SAP. El criterio de evaluación pondera 25% comprensión operacional y 20% experiencia/equipo (TDR §16).
- **Riesgo de plazo/proceso**: el cronograma de la licitación ya se movió una vez (extensión del pliego de consultas), lo que sugiere que las fechas del proceso podrían seguir ajustándose.
- **Riesgo de calidad de datos maestros**: control de acceso/asistencia de personal es hoy 100% manual en CMH, sin sistema, lo cual afecta directamente la confiabilidad de los datos de entrada para el motor de asignación (N360-07) hasta que el proyecto paralelo de campamentos esté operativo.

---

## Acciones siguientes

- [ ] Redactar y enviar el pliego de consultas formal a CMH (Jocelyn Pérez) con las preguntas técnicas pendientes (versión SAP, mecanismo de integración, TTD-ES-001, SSO/Entra ID y contratistas, offline, motor de asignación, retención de histórico/SLA, mockups, estado de avance por módulo) 📅 2026-07-27 🔺 #datatwin #cmh
- [ ] Solicitar confirmación por escrito sobre quién asume los gastos de viáticos/movilización a mina, dado que contradice el TDR (§12.2, Anexo B ítem H) 📅 2026-07-27 🔺 #cmh
- [ ] Solicitar confirmación por escrito de que CMH proveerá los ambientes de infraestructura (dev/QA/producción) y pedir el formato de entrega de prerequisitos técnicos 📅 2026-07-27 🔺 #cmh
- [ ] Aclarar en el pliego de consultas el alcance de la "solución antifatiga/control de sueño" mencionada por el cliente, no descrita en el TDR 📅 2026-07-27 🔼 #cmh
- [x] Actualizar el documento de alcance y requisitos técnicos con los hallazgos de esta reunión ✅ 2026-07-25
- [ ] Confirmar recepción del cronograma actualizado del proceso de licitación enviado por Jocelyn Pérez, y registrar el nuevo plazo (27 jul) 📅 2026-07-28 🔽 #cmh
- [ ] Preparar argumentario de diferenciación competitiva frente a BT System Chile, Altamira Technology y Grupo Edín/BIM, enfatizando experiencia minera y entendimiento de integración SAP — responsable: @Sergio-Cisneros 📅 2026-07-31 🔼 #cmh
- [ ] Revisar la plantilla de propuesta económica para dejar preparados ajustes en las partidas de viáticos (Anexo B, ítem H) e infraestructura (ítem G) en caso de confirmarse por escrito que CMH las asume 📅 2026-07-30 🔼 #cmh

---

**Nota sobre calidad de la transcripción:** varios nombres y una frase clave quedaron con transcripción ambigua o incierta debido a la calidad del audio/subtítulos automáticos — en particular el nombre de la "solución antifatiga/control de sueño" (suena como "Chucky" en el archivo) y la identidad exacta del quinto asistente/proveedor referido como "MR" con el interlocutor "Willard/Gustavo Ceballos". Se recomienda verificar ambos puntos directamente con el cliente o revisando la grabación original antes de tomarlos como definitivos.
