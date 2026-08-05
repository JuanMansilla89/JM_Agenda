# Gestión de disponibilidad y mantenimiento de flota minera subterránea: proceso, estándares y benchmark de mercado

## 1. Definiciones y cálculo estándar de disponibilidad y utilización

La industria minera distingue explícitamente entre disponibilidad física (PA) y disponibilidad mecánica (MA), una separación que no existe de forma tan marcada en manufactura clásica. La disponibilidad mecánica (MA) mide si el equipo es capaz de operar mecánicamente, excluyendo únicamente el tiempo perdido por razones mecánicas y eléctricas (mantenimiento y reparación), mientras que la disponibilidad física (PA) considera el tiempo perdido por cualquier motivo dentro de las horas programadas de trabajo (HP), incluyendo demoras operacionales, falta de operador o condiciones de sitio. La fórmula estándar es MA = (HP − M − R) / HP × 100, donde M es tiempo de mantenimiento y R es tiempo de reparación; y PA = (HNO) / HP × 100, donde HNO son las horas netas de operación reportadas por el operador. Un ejemplo típico: la disponibilidad mecánica de un equipo crítico puede ser 89%, pero si la disponibilidad física es solo 76% por demoras operacionales, el problema no es de mantenimiento sino de gestión operativa — de ahí la importancia de reportar ambos indicadores por separado en el módulo.[^1][^2]

MTBS (mean time between shutdowns) y su análogo MTBF (mean time between failures) se calculan como el tiempo total de operación dividido entre el número de fallas/detenciones, y MTTR (mean time to repair) como el tiempo total de reparación dividido entre el número de reparaciones. La relación fundamental de disponibilidad inherente es Availability = MTBF / (MTBF + MTTR), y su variante operacional usa MDT (mean down time, que incluye logística y espera de repuestos) en lugar de MTTR puro: Operational Availability = MTBF / (MTBF + MDT). Esta distinción es crítica para el módulo: MTTR mide solo el tiempo activo de reparación, mientras que MDT captura también el tiempo de espera de repuestos y movilización del mecánico — variable que el diseño debe registrar por separado para no subestimar el impacto del backlog de repuestos en la disponibilidad real.[^3][^4][^5][^1]

Sobre OEE, existe consenso en que aplicarlo tal cual viene de manufactura (Availability × Performance × Quality) distorsiona la lectura en minería, porque el "cuello de botella" no siempre es el equipo medido, las pérdidas de producción no deben expresarse solo en tiempo, y el componente de "calidad" no debe fijarse en 100% sino medirse contra granulometría/tonelaje real. Por ello algunos especialistas prefieren hablar de "Production OEE" en vez de OEE puro, enfocándose en la correlación directa entre el indicador y el tonelaje/mineral movido en lugar del uso aislado del activo. Para efectos prácticos, la fórmula aplicada a equipos mineros normalmente descompone Availability como razón de tiempo operativo sobre tiempo planificado (excluyendo tiempo perdido por fallas, cambios de turno o esperas), Performance como toneladas reales/hora sobre toneladas máximas teóricas por ciclo, y Quality como tonelaje que cumple especificación sobre tonelaje total.[^6][^7][^8]

En cuanto a estados operacionales, el modelo de "Time Usage Model" (TUM), ampliamente adoptado en operaciones subterráneas, define una jerarquía clara: cada equipo tiene en todo momento un único "Critical Status" (ej. perforando, reubicándose, en standby, en servicio de 250 horas, en falla de motor). Las categorías principales son:[^9]

| Estado | Definición operacional | Control | Fuente |
|---|---|---|---|
| Operativo/Utilizado | Fuente de poder encendida, equipo bajo control de operaciones | Operaciones | [^9][^10] |
| Standby | Fuente de poder apagada, pero operaciones tiene la potestad de encenderlo cuando lo requiera | Operaciones | [^9] |
| Taller/Mantenimiento (Service) | Equipo retirado voluntariamente por mantenimiento periódico (diario, 250h, 1000h) | Mantenimiento | [^9][^10] |
| Panne/Breakdown | El equipo deja de operar o no puede iniciar por una condición no programada que exige intervención de mantenimiento | Mantenimiento | [^9] |
| Preventivo | Mantenimiento programado por horómetro o calendario, dentro de Scheduled Maintenance Time | Mantenimiento (planificado) | [^10] |

La transición entre "operativo" y "mantenimiento" ocurre en el momento en que se reporta el problema hasta que mantenimiento accede al equipo (esto se contabiliza como tiempo de mantenimiento); una vez completada la reparación, el equipo vuelve a "disponible" y el tiempo hasta que reinicia trabajo se clasifica como "utilizado" o "standby", dependiendo de si operaciones lo pone en marcha inmediatamente. Esta regla — "una vez terminada la reparación, el equipo está disponible de nuevo, y el periodo hasta que reinicia trabajo es costo de operaciones, no de mantenimiento" — es clave para el diseño de las transiciones de estado del módulo, porque define exactamente el punto de corte entre responsabilidad de taller y responsabilidad de despacho/operaciones.[^9]

## 2. Proceso de transición de estado de equipo en tiempo real

El estándar de la industria (documentado en el marco TUM) asigna la responsabilidad de reportar el cambio de estado según quién controla el equipo en cada momento: el operador reporta el inicio de una falla o solicitud de servicio (breakdown/service request), el despachador/controlador de tráfico confirma el cambio de "operativo" a "standby" cuando no hay trabajo disponible, y el personal de mantenimiento confirma la recepción del equipo (inicio de "maintenance hours") y su liberación posterior. El "Rule 5" del TUM establece explícitamente que un equipo está en Standby cuando la fuente de poder está apagada y operaciones tiene la potestad de encenderlo — es decir, la transición Standby↔Operativo no requiere aprobación de mantenimiento, solo de despacho.[^9]

La latencia entre el evento real y su reflejo en el sistema es uno de los mayores puntos de fricción en operaciones que dependen de reporte manual. Las soluciones de mercado como Opsima, que se integran sobre Wenco FMS, capturan eventos de mantenimiento discutidos por radio/comunicación de mina y los correlacionan con los datos de flota para dar una "superposición de disponibilidad" (Availability Overlay) casi en tiempo real, evitando depender exclusivamente del reporte manual tardío del mecánico. Modular Mining (Komatsu DISPATCH) resuelve esto de forma nativa: su API pública ofrece acceso de lectura en tiempo real a cambios de estado y ciclo del equipo, y también acceso de escritura para actualizar el estado de ubicación y condición de vía, lo que permite que sistemas de mantenimiento de terceros escriban directamente el estado en el motor de asignación sin intermediarios manuales.[^11][^12]

Para el módulo del cliente, el patrón recomendado por la evidencia de mercado es un modelo de "doble validación por criticidad de la transición": las transiciones que reducen disponibilidad (Operativo → Panne, Operativo → Taller) deben poder registrarse de inmediato por el operador o el despachador sin esperar aprobación (para no ocultar información de riesgo), mientras que las transiciones que aumentan disponibilidad (Taller/Panne → Operativo) requieren confirmación explícita de un mecánico o supervisor de taller antes de que el estado "oficial" cambie — replicando la lógica de que solo mantenimiento puede certificar que el equipo está apto para operar.[^10][^9]

## 3. Planificación de mantenimiento preventivo y correctivo, y priorización de backlog

La programación preventiva en flota minera se estructura en dos ejes paralelos: por horómetro (intervalos de 250h, 500h, 1000h típicos en motores diésel, hidráulicos y transmisiones) y por calendario (inspecciones diarias obligatorias pre-turno, mantenimiento semanal/mensual). La normativa de referencia (equivalente a MSHA en EE.UU., aplicable conceptualmente a la lógica de auditoría que exige el cliente) obliga a inspecciones pre-turno documentadas con timestamp, ubicación y operador, y a una "cadena de custodia" defecto→orden de trabajo→reparación→retorno a servicio completamente trazable. Esta cadena de custodia es exactamente el flujo que el módulo debe modelar como ciclo de vida de la orden de mantenimiento: reporte de defecto (operador) → apertura de solicitud/notificación → evaluación y priorización → planificación (repuestos + mano de obra) → ejecución → cierre técnico → retorno a servicio.[^13][^14][^15]

El proceso de "solicitud de taller" de principio a fin sigue el patrón estándar de CMMS/EAM: notificación de avería o necesidad → conversión a orden de trabajo (si se aprueba) → asignación de recursos (repuestos, mano de obra, herramientas especiales) → ejecución → cierre técnico (registro de horas, causas, componentes usados) → cierre administrativo/costeo. El "Work Order Cycle Time" (tiempo desde el reporte del defecto hasta el cierre técnico) es el KPI de proceso más usado para medir la eficiencia de este ciclo completo.[^1]

Cuando el backlog excede la capacidad de taller, la práctica estándar de la industria no usa "primer llegado, primer servido" sino un índice de prioridad multiplicativo: Priority Index = Criticidad del Activo × Prioridad de la Orden de Trabajo, donde ambos factores se puntúan típicamente en una escala de 1 a 100. La criticidad del activo se determina de antemano (impacto en producción, costo de reposición, disponibilidad de equipos redundantes), y la prioridad de la orden de trabajo se asigna caso por caso considerando seguridad, impacto operacional y antigüedad de la solicitud. Una matriz de priorización comúnmente usada en la industria combina explícitamente estas dos dimensiones:[^16][^17][^18]

| Criticidad del activo | Severidad del impacto | Nivel de prioridad | Acción típica |
|---|---|---|---|
| Alta | Alta | P1 – Inmediata | Atender dentro de horas o mismo turno[^18] |
| Alta | Media | P2 – Urgente | Programar en la primera disponibilidad[^18] |
| Media | Alta | P2 – Urgente | Adelantar con recursos planificados[^18] |
| Media | Media | P3 – Planificada | Incluir en programación de corto plazo[^18] |
| Baja | Alta/Baja | P3/P4 | Monitorear o diferir a parada programada[^18] |

Los criterios estándar de priorización identificados consistentemente en la evidencia de mercado son, en orden de precedencia: seguridad/cumplimiento regulatorio (siempre máxima prioridad), criticidad del equipo para producción, impacto operacional/costo de la demora, y finalmente antigüedad de la solicitud como factor de desempate cuando los demás criterios son similares. Es importante notar que la fecha límite comprometida nunca debe primar sobre la criticidad — priorizar por "fecha de vencimiento" sin ponderar criticidad es identificado como una mala práctica común.[^19][^17][^18][^16]

## 4. Gestión de backlog de repuestos y relación con MM

La integración estándar entre un CMMS/EAM y SAP MM sigue un patrón de proceso consistente documentado por múltiples fuentes independientes: al crear la orden de mantenimiento y asignar un componente (repuesto), el sistema genera automáticamente una reserva de material que se refleja en el módulo de inventario (MM). Si el material está en stock, el almacén ve la reserva, realiza la salida de mercancía (goods issue) y el costo se traslada automáticamente a la orden de mantenimiento. Si el material no está en stock o es un ítem no almacenable, el componente marcado como "procurement type: External" dispara automáticamente una solicitud de pedido (purchase requisition) en MM, que luego se convierte en orden de compra y sigue el ciclo de recepción de mercancía.[^20][^21][^22][^23][^24]

A nivel de proceso (no solo técnico), el patrón identificado es: el planificador de mantenimiento identifica la necesidad de material al planificar la orden; el sistema crea automáticamente la reserva o la solicitud de pedido sin intervención manual adicional; el área de almacén/compras aprueba y ejecuta la salida o la compra; y cuando un repuesto no disponible bloquea una intervención, la práctica estándar es que la orden quede en estado "esperando material" y el planificador reprograme o busque alternativas (canibalización de otro equipo, repuesto de contratista, compra de emergencia) — este bloqueo se documenta explícitamente como parte del "Work Order Cycle Time" para medir el impacto del lead time de repuestos en el MTTR/MDT global. Prometheus Group, un proveedor especializado que se posiciona explícitamente como capa de planificación sobre SAP/Maximo (no reemplazo del EAM), automatiza este ciclo de planificación semanal con su solución GWOS-AI, comprimiendo tareas de 7-9 horas de planificación manual en SAP PM a minutos, pero manteniendo un modelo de "confirmación humana requerida" antes de que cualquier cambio se escriba de vuelta al ERP — un patrón de gobernanza relevante para el módulo del cliente, donde el motor de asignación de turnos también debería requerir puntos de control antes de consumir cambios críticos.[^25][^26]

## 5. Gestión de equipos de contratista vs. propios

La diferencia de proceso entre flota propia y de contratista se centra en tres ejes: vigencia documental, habilitación de acceso, y responsabilidad de la ejecución del mantenimiento. Los sistemas especializados en compliance de contratistas mineros (como FleetRabbit) modelan un ciclo de vida de cuatro etapas aplicable a cualquier equipo/operador de contratista: prealificación (verificación de licencias, seguros, historial de seguridad antes de aprobar el ingreso), onboarding (inducción específica del sitio y verificación de capacitación regulatoria antes de la movilización), monitoreo activo (seguimiento continuo de vencimiento de certificaciones, condición del equipo y desempeño de seguridad mientras el contratista está en sitio), y cierre (documentación de la revisión de desempeño y desactivación de accesos). Este ciclo de vencimientos documentales (certificaciones, seguros, inspecciones) debe registrarse de forma centralizada porque las auditorías regulatorias pueden solicitarlo en cualquier momento sin previo aviso.[^27]

La distinción crítica de modelado sin duplicar procesos es que el equipo (propio o de contratista) comparte el mismo modelo de estado operacional/disponibilidad (operativo, taller, standby, panne, preventivo descrito en la sección 1), pero se diferencia por un atributo de "responsable de mantenimiento" y un set adicional de validaciones de vigencia documental que bloquean la transición a "operativo" si el contratista no tiene documentación vigente. Es decir, el maestro de equipos debe tener un único modelo de datos de disponibilidad, con un flag de propiedad/responsabilidad de mantenimiento que determina qué reglas de habilitación documental aplican antes de permitir el despacho — exactamente el enfoque descrito en las normas de seguridad de equipos pesados mineros, que aplican el mismo estándar operacional a equipos propios y de terceros pero mantienen registros de responsabilidad separados.[^28]

## 6. Ubicación y tracking de equipos en minería subterránea

La evolución típica de tracking en minería subterránea sigue una progresión de madurez: registro manual por nivel/sector (bitácora o reporte de despacho) → beacons BLE de bajo costo como puntos de referencia fijos → tags activos que combinan Wi-Fi/BLE para posicionamiento continuo → sistemas RTLS de precisión submétrica → integración con detección de proximidad y control de tráfico automatizado. Los beacons BLE, con batería de 3-4 años, se instalan en puntos donde la señal de red es débil o donde se necesita mayor precisión, y los tags activos (montados en personas o vehículos) leen estos beacons y transmiten la posición vía Wi-Fi o celular a un motor de localización central.[^29][^30]

Entre los proveedores líderes en subterráneo: Newtrax (parte de Sandvik) es reconocido por su plataforma de datos de minería (Mining Data Platform) y su sistema de detección de proximidad y prevención de colisiones (APDS), diseñado para ser "OEM-agnostic" — es decir, integrable con flota mixta de distintas marcas. Mine Site Technologies (MST Global) ofrece un ecosistema de tracking en tiempo real que permite monitorear tráfico de equipos, ciclos de equipo, control de acceso y operación remota de infraestructura crítica (ventiladores, puertas) — con más de 30 años de experiencia específica en subterráneo. Modular Mining ofrece DISPATCH Underground, desplegado desde 1991, como la única tecnología de gestión minera "totalmente integrada" para operaciones subterráneas, con componentes de hardware robustecidos para el ambiente subterráneo y su módulo MineCare para mantenimiento predictivo/RCM.[^31][^32][^33][^34]

| Proveedor | Tecnología base | Enfoque diferenciador |
|---|---|---|
| Newtrax (Sandvik) | Wi-Fi/BLE, plataforma de datos MDP | Prevención de colisiones OEM-agnostic[^32][^34] |
| MST Global (Mine Site Technologies) | RTLS propio, control de infraestructura | Integración hardware+software con 30+ años en subterráneo[^33] |
| Modular Mining DISPATCH Underground | Terminales de campo robustecidos, GPS donde aplica | Plataforma unificada despacho+mantenimiento (MineCare) desde 1991[^31] |

Sobre arquitectura de datos que permita iniciar con registro manual y migrar a tracking automatizado sin rediseñar el modelo: la clave identificada en la evidencia es modelar la ubicación como un evento con metadato de "fuente" (manual/beacon/tag/GNSS) y "confianza"/precisión asociada, en lugar de un campo de texto libre fijo. Este patrón es exactamente el que usa el enfoque de "overlay" de integraciones como Opsima, que correlaciona reportes de comunicación de mina (equivalente a reporte manual) con datos de flota estructurados, permitiendo que ambas fuentes coexistan en el mismo modelo de datos mientras la automatización se despliega gradualmente.[^11]

## 7. Marcos y estándares de gestión de activos aplicables

ISO 55000/55001 es el estándar de sistema de gestión (no una checklist de mantenimiento): define gestión de activos como la actividad coordinada para "realizar valor de los activos", balanceando costo, riesgo y desempeño a lo largo de todo el ciclo de vida — desde la identificación de la necesidad hasta la disposición. La versión 2024 introdujo ajustes de alineación con la estructura armonizada Annex SL y clarificaciones sobre liderazgo y planificación. El estándar es explícitamente aplicable a sectores de activos intensivos como minería, dado el alto valor de los activos de producción y el riesgo de seguridad asociado.[^35][^36][^37]

SAE JA1011 (criterios de evaluación para procesos RCM) y JA1012 (guía que amplifica esos criterios) establecen siete preguntas mínimas que cualquier proceso debe responder para llamarse "RCM": funciones y estándares de desempeño del activo en su contexto operacional, formas de falla funcional, causas de cada falla, efectos de cada falla, consecuencias/clasificación del riesgo de cada falla, tareas proactivas para predecir o prevenir cada falla, y qué hacer si no existe una tarea proactiva adecuada.[^38][^39][^40]

Sobre aplicabilidad a una operación de ~80 equipos: RCM completo (siguiendo estrictamente las 7 preguntas de JA1011 para cada modo de falla de cada componente) es un esfuerzo de análisis considerable, tradicionalmente asociado a flotas grandes o activos de muy alta criticidad (turbinas, plantas de proceso). Para una operación de 80 equipos de flota pesada, la práctica de mercado recomendada —consistente con cómo Modular Mining posiciona su módulo MineCare ("mantenimiento predictivo y RCM")— es aplicar RCM de forma selectiva y escalada: RCM formal completo solo a los equipos de mayor criticidad (los que, si fallan, detienen producción o representan riesgo de seguridad alto), y para el resto de la flota usar un enfoque simplificado de "criticidad × modo de falla" que toma prestados los principios de las 7 preguntas sin el rigor documental completo de un análisis RCM certificado. ISO 55001, en cambio, no es sobredimensionado para 80 equipos en sí mismo — es un marco de gobernanza de decisiones (qué política de mantenimiento, cómo priorizar inversión) más que un proceso operativo diario, por lo que sus principios (trazabilidad de decisiones, gestión de riesgo del activo, mejora continua) sí son aplicables como marco de referencia de diseño del módulo, incluso sin buscar certificación formal.[^36][^39][^37][^31]

## 8. Benchmark de soluciones de mercado

| Proveedor | Modelo de disponibilidad en tiempo real | Integración con planificación de operación | Patrón de integración con SAP PM/MM |
|---|---|---|---|
| SAP PM (nativo) | Estado del equipo gestionado vía "system conditions"/notificaciones; puede bloquear producción marcando reserva PM[^22] | Nativo dentro del mismo ERP; no requiere puente | Es la fuente; MM se integra vía reservas automáticas y PR por componente no-stock[^20][^21][^22] |
| IBM Maximo (EAM) | Repositorio único de estado de activo y desempeño a lo largo del ciclo de vida; para transporte, combina telemetría AVL con datos de activo[^41][^42] | Se integra con sistemas de despacho/programación vía arquitectura abierta orientada a servicios (SOA)[^42] | Coexiste como EAM alternativo a SAP; requiere integración vía interfaces/servicios | 
| Komatsu Modular Mining (DISPATCH + MineCare) | Estado y ciclo del equipo en tiempo real vía terminales de campo; MineCare da mantenimiento predictivo/RCM y KPIs en tiempo real[^31] | Integración nativa: mismo proveedor gestiona despacho y mantenimiento; API pública ofrece lectura/escritura de estado de equipo a terceros[^12][^31] | API pública basada en OpenAPI/AsyncAPI (REST+WebSockets) permite integración bidireccional con ERP para configuración, posicionamiento y estados de producción[^12] |
| Trimble/Wenco FMS | "Maintenance Monitor" da estado en tiempo real, ubicación, causa de falla y horómetro de cualquier equipo, incluso multi-OEM[^43] | Integración nativa despacho-mantenimiento vía Maintenance Monitor; terceros (Opsima) agregan capa de correlación cuando el reporte de mantenimiento es manual/por radio[^43][^11] | Wenco no es nativamente SAP; requiere integraciones de terceros para overlay de disponibilidad y coordinación de PM[^11] |
| RPMGlobal (Fleet/Maintenance, DLCC) | Costeo de ciclo de vida dinámico (Dynamic Lifecycle Costing Calculator) pronostica en tiempo real cada evento de mantenimiento futuro y su costo/desempeño esperado[^44] | Se posiciona como conector end-to-end entre planificación operacional, simulación y programación con mantenimiento y costeo[^44] | Explícitamente diseñado para "conectar sistemas de forma seamless" en el stack empresarial, incluyendo SAP[^44] |
| Prometheus Group | No es EAM en sí; capa de planificación/programación sobre SAP/Maximo/Oracle | Su solución GWOS-AI comprime planificación semanal SAP PM de 7-9h a minutos, con aprobación humana antes de escribir en el ERP[^26] | Integración bidireccional directa y en vivo con SAP ECC y S/4HANA; se recomienda cuando ya existe EAM y se busca reforzar solo scheduling[^26][^25] |
| GE Digital APM | Digital twin de activo con analítica avanzada para desempeño, confiabilidad y riesgo operacional; reporta incrementos de disponibilidad de hasta 20% en generación de energía[^45][^46] | Se integra a nivel de "Operations Performance Management" combinando KPIs de proceso, planta, flota y empresa en tiempo real[^47] | Se posiciona como suite complementaria (no reemplazo) del ERP, conectando fuentes de datos dispares vía analítica[^45][^47] |

El patrón más relevante para el diseño del cliente es que los proveedores especializados en minería (Modular Mining, Wenco, RPMGlobal) resuelven el acoplamiento disponibilidad-planificación de forma nativa porque el mismo proveedor construye ambos módulos, mientras que los EAM genéricos (SAP PM, Maximo) requieren un puente de integración explícito (API o capa de terceros como Opsima/Prometheus) para alimentar disponibilidad en tiempo real a un motor de planificación externo — exactamente el escenario del cliente, donde el módulo de disponibilidad debe actuar como ese puente hacia el motor de asignación de Nexo 360.[^12][^26][^11]

## 9. El acoplamiento disponibilidad-planificación como problema de proceso

Las operaciones maduras no confían en que la disponibilidad "simplemente esté correcta"; instrumentan controles de calidad de dato explícitos. Los conceptos de "stale data" (dato obsoleto) documentados en la práctica de observabilidad de datos aplican directamente: un dato es obsoleto cuando su antigüedad excede el requerimiento de su uso previsto, y la práctica recomendada es definir SLAs de frescura diferenciados por criticidad — activos críticos pueden requerir alertas tras solo minutos sin actualización, mientras que activos menos sensibles al tiempo toleran ventanas más amplias. Esto se traduce directamente en una regla de "última actualización aceptable" por estado y por criticidad del equipo antes de que ese dato pueda ser consumido con confianza por otro sistema.[^48][^49]

La práctica de gobernanza de datos recomienda asignar un "propietario" (owner) explícito por cada dato crítico y definir políticas de actualización basadas en la importancia del dato, además de auditorías regulares que comparen registros actuales contra la fuente original para detectar staleness que el monitoreo automático pudiera pasar por alto. Aplicado a disponibilidad de flota: cada estado de equipo debe tener un timestamp de última actualización, un responsable del último cambio, y un umbral de "antigüedad máxima aceptable" diferenciado por estado (un equipo marcado "operativo" hace 12 horas sin ningún evento de ciclo es más sospechoso que un equipo en "taller" hace 12 horas, que es normal).[^50]

El patrón de gobernanza observado en Prometheus Group —donde ninguna actualización se escribe al ERP sin confirmación humana— es aplicable en sentido inverso al módulo de disponibilidad: no toda transición de estado debe fluir automáticamente al motor de asignación sin puntos de control, especialmente cuando el dato proviene de fuente manual o de baja confiabilidad.[^26]

## Implicaciones de diseño

**Modelo de estados y transiciones.** El módulo debe adoptar el modelo de estado único (Critical Status) del Time Usage Model: cada equipo tiene siempre exactamente un estado activo entre operativo, standby, taller, panne y preventivo, con reglas de transición diferenciadas por quién puede iniciarlas (operador/despacho para transiciones "operativo↔standby"; mecánico/supervisor de taller para transiciones que devuelven el equipo a "operativo" desde taller o panne). Las transiciones que reducen disponibilidad deben poder registrarse de inmediato sin aprobación (para no ocultar riesgo); las que aumentan disponibilidad deben requerir confirmación de mantenimiento antes de considerarse "oficiales".[^9]

**Separación PA/MA como regla de negocio, no solo de reporte.** El motor de Nexo 360 no debería consumir un único número de "disponibilidad", sino al menos dos: disponibilidad mecánica (si el equipo es apto para operar) y disponibilidad física/operacional (si además hay condiciones para operarlo — operador, acceso, sin demoras). Esto evita que una demora operacional se malinterprete como problema de mantenimiento y viceversa, replicando la distinción PA/MA estándar de la industria.[^2][^1]

**Diseño de la interfaz de disponibilidad hacia el motor de asignación.** Para que el acoplamiento sea confiable, la interfaz que consume Nexo 360 debería exponer, por cada equipo, no solo el estado actual sino: (a) timestamp de última actualización y fuente del dato (operador/mecánico/despacho/automático); (b) un flag de "confianza" o "antigüedad aceptable" que marque el dato como estancado si excede un umbral definido por estado y criticidad, siguiendo el patrón de SLAs de frescura diferenciados; (c) el estado "oficial" separado del estado "propuesto" cuando la transición aún no ha sido confirmada por el rol correspondiente. El motor de asignación debe recibir explícitamente si un dato está fuera del SLA de frescura para decidir si lo usa o solicita confirmación, en lugar de asumir que todo dato recibido es válido — replicando el patrón de "aprobación humana antes de impactar el sistema consumidor" observado en integraciones maduras SAP PM.[^49][^26][^48]

**Priorización de backlog como regla explícita, no discrecional.** El diseño debe incorporar un índice de prioridad calculado (criticidad del activo × prioridad/severidad de la orden), con seguridad y cumplimiento regulatorio siempre en la cúspide, y antigüedad de la solicitud únicamente como criterio de desempate — nunca como criterio primario. La criticidad del activo debe ser un atributo de maestro validado con operaciones, no solo con mantenimiento, replicando la práctica recomendada de involucrar a operaciones en la definición de criticidad.[^17][^18][^16]

**Repuestos y bloqueo de intervención.** El flujo debe modelar explícitamente el estado "orden esperando material" como un sub-estado del ciclo de la orden de mantenimiento, distinto de "en ejecución" o "cerrada", de forma que el tiempo de espera de repuesto se mida y reporte por separado dentro del MTTR/MDT — siguiendo el patrón estándar SAP PM-MM de reserva automática para stock y generación automática de solicitud de pedido para no-stock. La arquitectura debe permitir resolución alternativa (canibalización, préstamo entre unidades, compra de emergencia) como excepciones documentadas al flujo estándar.[^24][^20]

**Contratistas vs. propios sin duplicar el modelo.** Un único modelo de estado de disponibilidad debe aplicarse a todo equipo, propio o de contratista, diferenciado únicamente por un atributo de "responsable de mantenimiento" y un conjunto de validaciones de vigencia documental (certificaciones, seguros, habilitación) que actúan como precondición adicional antes de permitir la transición a "operativo" — siguiendo el ciclo de prealificación-onboarding-monitoreo-cierre identificado en sistemas de compliance de contratistas mineros.[^27]

**Ubicación evolutiva sin rediseño.** El modelo de datos de ubicación debe registrar cada posición como un evento con metadato de fuente (manual/beacon/tag/GNSS) y nivel de confianza/precisión asociado, no como un campo fijo de texto libre. Esto permite iniciar con registro manual por nivel/sector y migrar gradualmente a tracking automatizado (BLE, RTLS, tags activos tipo Newtrax o MST Global) sin cambiar la estructura subyacente, replicando el patrón de "overlay" que correlaciona fuentes heterogéneas dentro de un mismo modelo.[^29][^11]

**Aplicación escalada de RCM.** Dado el tamaño de flota (~80 equipos), se recomienda reservar el rigor completo de SAE JA1011/JA1012 (las siete preguntas RCM) para el subconjunto de equipos de mayor criticidad, y aplicar una versión simplificada de "criticidad × modo de falla" al resto de la flota, evitando sobredimensionar el esfuerzo de análisis sin perder los principios de decisión basada en riesgo que aporta el marco. Los principios de ISO 55001 (trazabilidad de decisiones, balance costo-riesgo-desempeño, mejora continua) deberían adoptarse como marco de gobernanza de diseño del módulo aunque no se busque certificación formal, dado que aplican independientemente de la escala de la flota.[^39][^37][^36][^31]

---

## References

1. [Mining Equipment Maintenance KPIs to Track](https://honestdig.io/blog/mining-equipment-maintenance-kpis) - Learn which mining equipment maintenance KPIs matter, including OEE, MTBF, MTTR, PM compliance, avai...

2. [Mechanical vs Physical Availability Explained | PDF](https://fr.scribd.com/document/821858383/AVAILABILITY-MECHANICS-pptx) - mechanical availability is the availability minus the downtime due to mechanical reasons, while phys...

3. [How to Calculate MTBF and MTTR](https://reliamag.com/guides/how-to-calculate-mtbf-mttr/) - The two metrics combine to produce availability: Availability = MTBF / (MTBF + MTTR). The formulas a...

4. [Availability MTBF Interactive Calculator](https://www.firgelliauto.com/blogs/calculators/availability-mtbf-calculator) - The standard formula, A = MTBF/(MTBF + MTTR), comes from the real-world pattern of operation, breakd...

5. [How OEE, MTBF & MTTR Help Reduce Downtime](https://www.checkproof.com/blog/predictive-maintenance/downtime-reduction-how-oee-mtbf-mttr-help-you-stay-ahead/) - The MTBF Formula MTBF = Total Operating Time/Number of Failures A higher MTBF indicates a more relia...

6. [Is Overall Equipment Effectiveness (OEE) in Mining ...](https://www.linkedin.com/pulse/overall-equipment-effectiveness-oee-mining-different-chris-curtis) - OEE in mining is different to OEE in manufacturing, but still just as powerful if not more so, parti...

7. [Evaluation of overall equipment effectiveness (OEE) for ...](https://dergipark.org.tr/en/download/article-file/3715971) - by S Toraman · Cited by 6 — Overall Equipment Efficiency, OEE, Analysis provides performance managem...

8. [How is overall equipment effectiveness (OEE) calculated ...](https://www.miningdoc.tech/question/how-is-overall-equipment-effectiveness-oee-calculated-and-used-to-drive-improvement-in-mining-fleets/) - OEE stands for Overall Equipment Effectiveness, and it refers to a metric that represents the effici...

9. [Challenging the Norms — Time Usage Model ...](https://www.ausimm.com/globalassets/bulletin/challenging-the-norms---time-usage-model-for-mobile-underground-mining-equipment.pdf) - The fundamental definition of an equipment unit being on Standby is that the source of power is turn...

10. [Analysis of the mining equipment replacement time. A case ...](https://buleria.unileon.es/bitstream/handle/10612/22817/Analysis_mining_equipment_replacement_time.pdf?sequence=1) - Mining equipment is subjected to degradation throughout its operation lifetime, being the definition...

11. [Wenco FMS Integration](https://opsima.com/integrations/wenco-fms) - Opsima adds real-time maintenance availability to Wenco FMS fleet data. Dispatchers know which machi...

12. [Fleet Management Software Integration](https://www.e-mj.com/departments/operating-strategies/fleet-management-software-integration/) - Built in conjunction with MineWare to integrate two Komatsu technology solutions: Modular Mining's P...

13. [Mining Equipment Maintenance | Tips to Minimize Downtime](https://startpac.com/blog/mining-equipment-maintenance/) - Preventive Maintenance This means servicing equipment on a schedule regardless of its current condit...

14. [Preventive Maintenance for Mining Equipment](https://amaccompany.com/preventive-maintenance-for-mining-equipment/) - It is the scheduled inspection, lubrication, and servicing of machines before problems occur, rather...

15. [Mining Heavy Equipment Fleet Management: Complete Guide ...](https://heavyvehicleinspection.com/blog/post/mining-heavy-equipment-fleet-management-complete-guide) - This guide covers the unique challenges of mining fleet management, critical equipment types, inspec...

16. [Mastering Maintenance Backlog Management: A Complete ...](https://www.maintainnow.app/learn/guides/mastering-maintenance-backlog-management-a-complete-guide) - Prioritizing tasks based on urgency and impact on operations is critical. Common priority levels inc...

17. [Maintenance Backlog: Take Control with a Priority Index](https://www.prometheusgroup.com/resources/posts/maintenance-backlog-take-control-with-a-priority-index) - Priority Index = Asset Criticality x Work Order Priority. Now multiply the asset criticality score b...

18. [Backlog Work Orders: How to Reduce, Organize, and ...](https://www.zapium.com/blog/backlog-work-orders/) - Work order backlog and planned maintenance percentage are directly linked: Industry shows best-in-cl...

19. [Align Work Order Prioritization for Maintenance Workflows](https://unison.ycp.com/insights/articles/align-work-order-prioritization-for-maintenance-workflows) - Conducting thorough assessments to determine the criticality of assets and prioritize maintenance ba...

20. [How PM and MM talk to each other in SAP | Avnikant Singh](https://www.linkedin.com/posts/avnikant007_how-pm-and-mm-talk-to-each-other-in-sap-activity-7367745464688930818-KtOy) - A breakdown occurs, the technician raises a work order in PM.
Now, the moment you assign a spare par...

21. [Avnikant Singh - SAP PM Integration Series](https://www.linkedin.com/posts/avnikant007_sap-pm-integration-series-day-2-sap-pm-activity-7482984798383181825-xnq6) - A maintenance order without spare parts is just a piece of paper. This is why SAP PM and SAP MM are ...

22. [PM Integrations with Other Modules](https://community.sap.com/t5/enterprise-resource-planning-q-a/pm-integrations-with-other-modules/qaq-p/3298009) - Dear Experts, Can u all pls list out what are all the major INTEGRATION of Plant Maintenance module ...

23. [SAP PM: Spare Parts and Inventory Management](https://locusit.com/learning/erp-corporate-trainings/sap-pm-spare-parts-and-inventory-management/) - Proper integration of SAP PM with Materials Management (MM) enables seamless tracking, procurement, ...

24. [SAP MM-PM Integration Overview | PDF](https://www.scribd.com/document/873077244/MM-PM-Integration) - The reservation and goods issue of materials for PA maintenance orders. Purchase requisition generat...

25. [Prometheus Group vs SAP EAM](https://www.selecthub.com/eam-software/prometheus-group-vs-sap-eam/) - Pick Prometheus Group if you want a maintenance-first platform that layers cleanly onto an existing ...

26. [AI in SAP Maintenance Planning: Prometheus Group's ...](https://sapinsider.org/blogs/ai-sap-maintenance-planning-prometheus-gwos-ai/) - Prometheus Group's GWOS-AI cuts weekly SAP PM scheduling from hours to minutes and closes the planne...

27. [Best Mining Contractor Compliance Management Software ...](https://fleetrabbit.com/industry/mining-fleet-software/best-mining-contractor-compliance-management-software-2026) - FleetRabbit centralizes contractor certifications, equipment approvals, and safety performance in on...

28. [Heavy Mining Equipment Safety Standards | PDF](https://www.scribd.com/document/944610681/Heavy-and-Mining-Equipment-Standard-pdf) - This document establishes the responsibilities and requirements for the safe operation of heavy and ...

29. [How to pick the right tags for tracking in underground mining](https://www.epiroc.com/es-pe/digital-solutions/digital-transformation-zone/how-to-pick-tags-for-mining) - Positioning tags read BLE beacons that act as reference points and then use Wi-Fi or cellular to com...

30. [Mine Worker Positioning and Safety with RTLS - WIPELOT](https://wipelot.io/underground-miner-tracking-and-safety) - An underground miner tracking system is a safety solution that uses Real-Time Location Systems (RTLS...

31. [Modular Mining Systems](https://en.wikipedia.org/wiki/Modular_Mining_Systems) - Over the next two years, Modular Mining developed and successfully implemented the DISPATCH system, ...

32. [#sandvik #newtrax #mininginnovation ...](https://www.linkedin.com/posts/sandvik-mining_sandvik-newtrax-mininginnovation-activity-7334128935196114944-B5w5) - Enhance underground safety and operational efficiency with Newtrax's OEM-agnostic Advanced Proximity...

33. [Real-Time Tracking for Safer Underground Mining ...](https://www.linkedin.com/posts/mstglobal_mstglobal-mets-mining-activity-7477215898613940224-sZZV) - With advanced tracking, operations can now: ✅ Monitor and manage equipment traffic in real time ✅ Tr...

34. [Proven in demanding underground environments across ...](https://www.facebook.com/SandvikMining/videos/proven-in-demanding-underground-environments-across-africa-australia-europe-and-/1996169637792858/) - The system integrates seamlessly with mixed fleets, making it a reliable OEM-agnostic safety solutio...

35. [What is ISO 55001? Asset Management System ...](https://www.glocertinternational.com/resources/guides/what-is-iso-55001-asset-management/) - ISO 55001 is the international standard that specifies the requirements for establishing, implementi...

36. [ISO 55000 & ISO 55001: Understanding Standards & ...](https://www.assetivity.com.au/articles/asset-management/iso-55000-and-iso-55001-understanding-the-standards-and-their-limitations/) - ISO 55001 provides a logical framework for developing an Asset Management system, ensuring that crit...

37. [ISO 55001: Requirements](https://tractian.com/en/glossary/iso-55001) - It specifies the mandatory requirements an organization must satisfy to establish, implement, mainta...

38. [JA1010, JA1011, JA1012 update](https://www.ercbv.eu/ja1011-ja1012-update/) - Reliability Centered Maintenance (RCM) is used worldwide. Any proces may be called an “RCM Proces” w...

39. [SAE JA1011 Standard - Evaluation Criteria for Reliability](https://consciousreliability.com/sae-ja1011-standard-evaluation-criteria-for-reliability-centered-maintenance-rcm-processes/) - The purpose of the standard SAE JA1011, published in 1999, is to set out the criteria that any proce...

40. [What is Reliability Centered Maintenance (RCM)?](https://reliabilityacademy.com/articles/preventive-maintenance/what-is-reliability-centered-maintenance) - The JA1011 outlines the requirements a process must adhere to if it's allowed to call itself an RCM ...

41. [IBM Maximo for Transportation](https://www.naviam.io/industries/transportation) - Solution Enterprise Asset Management (Maximo EAM) Tracks asset performance, maintenance schedules, a...

42. [Fleet Optimization With IBM Maximo For Transportation](https://www.scribd.com/doc/60965322/plugin-TTS00371USEN) - Efficiencies, savings and new opportunities for fleet management · Fleet Optimization with IBM Maxim...

43. [Wenco International Mining Systems' Post](https://www.linkedin.com/posts/wenco-international-mining-systems_fleetmanagement-wenco-wencominefms-activity-7205946824258441216-lvV3) - Empower your maintenance team by integrating Maintenance Monitor to your Wenco

44. [RPMGlobal: Mining Software Solutions | PDF | Simulation](https://www.scribd.com/document/538955938/Rpm-Global) - RPMGlobal is a global leader in mining software solutions and services, It provides intelligent desi...

45. [GE Digital Asset Performance Management (APM)](https://sourceforge.net/software/compare/GE-Digital-APM-vs-Geminai/) - Featuring Digital Twin analytics, work process automation and built-in GE industry expertise, APM pr...

46. [Asset Performance Management | GE News](https://www.ge.com/news/taxonomy/term/8694?page=1) - GE Digital's APM recognized for leadership in capabilities across Oil & Gas, Utilities, Mining, and ...

47. [Asset Performance Management from GE Digital ...](https://www.wabteccorp.com/Operations-Performance-Management.pdf?inline) - The Wabtec and GE Digital collaboration brings together decades of mining vertical expertise with be...

48. [Stale Data: Causes, Detection, and How to Set Freshness ...](https://tacnode.io/post/what-is-stale-data) - Stale data is information that looks valid but no longer reflects reality. It's caused by batch pipe...

49. [Data Quality Alerts: Setup, Best Practices & Reducing Fatigue](https://atlan.com/know/data-quality-alerts/) - Data quality alerts are automated notifications that trigger when data fails to meet predefined qual...

50. [Stale Data: How to Identify and Mitigate its Impact](https://www.acceldata.io/blog/how-to-identify-and-eliminate-stale-data-to-optimize-business-decisions) - This article helps you uncover the true cost of stale data, investigate its root causes, and offer a...

