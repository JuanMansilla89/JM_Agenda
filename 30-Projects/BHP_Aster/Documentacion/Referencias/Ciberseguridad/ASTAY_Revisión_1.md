# Análisis documental para reunión técnica con BHP  
## Piloto temporal del Gemelo Digital DataTwin

### Documentos analizados

1. **Proceso de Gestión de Demanda MoC – Tecnología Escondida**.
2. **Estándar Global de Tecnología y Seguridad Informática TECH-GSTD-00005, versión 7.0, del 8 de diciembre de 2023**. 

### Contexto adicional conocido (fuente interna ASTAY — no proviene de los documentos anteriores)

Lo que sigue proviene del **Q&A oficial BHP Escondida** y la documentación interna del proceso **Open Aster 2026** (ver `30-Projects/BHP_Aster/BHP_Aster.md`), no de los dos documentos de ciberseguridad/MoC analizados. Se mantiene señalado como fuente distinta para no mezclar lo que BHP ha confirmado por el canal comercial/técnico de Open Aster con lo que falta confirmar por el canal formal de gobierno (MoC/Ciberseguridad).

---

# 1. Resumen ejecutivo

## Objetivo del piloto

**Conocido — fuente: Q&A oficial BHP Escondida, proceso Open Aster 2026.** No proviene de los dos documentos de ciberseguridad/MoC analizados.

Implementar un piloto del **Gemelo Digital DataTwin** para Escondida | BHP, respondiendo al desafío **"Gestión inteligente de tráfico mina"** del proceso Open Aster 2026. El piloto busca cerrar la brecha entre la planificación teórica (match pala-camión en condiciones ideales) y las condiciones dinámicas del rajo, entregando recomendaciones en tiempo real al **Centro Integrado de Operaciones (CIO)** para minimizar congestión, eliminar cuellos de botella y maximizar el flujo continuo de camiones **CAEX** — operando como capa complementaria y desacoplada sobre los sistemas existentes (Módular/FMS), sin reemplazar el Dispatch.

**Meta aspiracional:** reducción de hasta **20%** en tiempos de conducción dentro de la mina (tratada como aspiracional, no como compromiso contractual).

Contexto técnico confirmado por BHP (Q&A oficial):

| Aspecto | Definición confirmada |
|---------|----------------------|
| Foco de la solución | Flota CAEX (alto tonelaje) — no vehículos livianos |
| Alcance piloto | Una flota/fase/corredor definido → escalar al resto |
| Receptor de recomendaciones | Centro Integrado de Operaciones (CIO) |
| Fuente de datos principal | Módular — DBs relacionales, datos históricos/agregados (no raw real-time) |
| Red de comunicaciones | LTE privado |
| Integración | Solo lectura, desacoplada — sin modificar sistemas productivos |
| IA | Permitida — con governance, trazabilidad y explicabilidad de modelos |
| Stack tecnológico BHP | Multi-cloud: Microsoft + AWS |
| Open Source | Permitido en piloto — sujeto a governance y ciberseguridad BHP |
| Hardware en cabina CAEX | Sistemas cerrados — si se requieren pantallas, las provee la startup |
| GPS vehículos livianos | Solo para seguridad — no reutilizable para tráfico |
| Instalación de hardware/sensores | Permitida **mediante proceso de gestión del cambio** — conecta directamente con el flujo MoC analizado en esta revisión |

Lo que sigue **sin especificar**, y no puede resolverse con esta información adicional porque pertenece al canal formal de gobierno (MoC/Ciberseguridad) y no al canal comercial de Open Aster: número y estado de la demanda en ServiceNow, SME asignados, resultado de CIA/TPCRM/TSA, clasificación de riesgo y complejidad, y en general todo lo listado en las secciones 4 y 8 de este documento.

## Alcance identificado

El alcance documental identificado se limita a dos componentes:

### A. Gestión y validación de la demanda tecnológica

Cuando se solicita una validación tecnológica dentro de un MoC:

1. se registra una demanda tecnológica en ServiceNow;
2. se determina si el MoC tiene un componente de tecnología;
3. si existe dicho componente, se asignan especialistas de:
   - Technology Escondida;
   - Panel de Arquitectura;
   - Ciberseguridad;
4. cada especialidad ejecuta su proceso de evaluación;
5. la validación tecnológica se cierra cuando las ramas correspondientes han sido validadas.  

### B. Cumplimiento del Estándar Global

El Estándar Global indica que debe ser seguido por:

- todos los proyectos que implementen soluciones tecnológicas;
- cualquier persona que adquiera productos o servicios capaces de introducir riesgos de ciberseguridad;
- actividades relacionadas con TI y TO dentro de los Assets y Funciones de BHP. 

**Interpretación (confirmada con el contexto Q&A oficial):** DataTwin se conectará a Módular (fuente de datos de BHP), operará sobre infraestructura multi-cloud de BHP (Microsoft + AWS) y contempla instalación de hardware/sensores vía MoC — el proyecto **sí se encuentra dentro del ámbito del Estándar Global**. Lo que los documentos de ciberseguridad/MoC no confirman es qué requerimientos específicos (TSA, TPCRM, CIA, DPIA, AAR/LEAP) ya fueron declarados aplicables para este piloto en particular.

## Entregables esperados

Los documentos no establecen entregables funcionales ni técnicos de DataTwin.

Los posibles documentos o evaluaciones mencionados dentro del proceso son:

- TSA;
- TPCRM;
- CIA Assessment;
- DPIA;
- AISA;
- HLD;
- LLD;
- AAR;
- LEAP.  

No se especifica cuáles deberán ser preparados para este piloto, quién debe producir cada uno, su formato, nivel de detalle, fecha de entrega ni mecanismo de aprobación.

## Responsabilidades identificadas

| Actor | Responsabilidad documentada |
|---|---|
| Solicitante de la demanda | Ingresar la solicitud de demanda tecnológica en ServiceNow. |
| SME de Technology Escondida | Determinar si existe impacto operativo en los sistemas tecnológicos y validar o continuar el proceso de demanda tecnológica. |
| SME del Panel de Arquitectura | Evaluar si se utilizan sistemas existentes, si se desarrolla una nueva solución y si el impacto presenta bajo riesgo y complejidad. |
| SME de Ciberseguridad | Evaluar la participación de proveedores externos, los procesos TPCRM/DPIA, el CIA Assessment y emitir la validación de ciberseguridad. |
| Función de Tecnología | Coordinar requerimientos tecnológicos, gestionar contrataciones tecnológicas, aprobar tecnologías, orientar seguridad y participar en cambios y ciclo de vida. |
| TAB | Evaluar y aprobar la Solicitud de Evaluación de Arquitectura. |
| Seguridad Informática | Determinar evaluaciones TPCRM, verificar correcciones y controles de compensación y establecer la calificación de riesgo de terceros. |
| Abastecimiento | Completar los cuestionarios TPCRM correspondientes en GCMS para proveedores o participaciones contractuales. |
| Tercero o proveedor | Corregir las brechas detectadas en una evaluación TPCRM. |
| Dueño del Servicio de Tecnología | Aprobar una eventual transición de la solución a operaciones. |
| Propietario del contrato | Responder a Seguridad Informática durante las reevaluaciones TPCRM. |
| ASTAY / DataTwin (conocido — Q&A oficial, no del Estándar/MoC) | Proveedor externo que implementa el Gemelo Digital DataTwin, conectado en solo lectura a Módular, operando sobre infraestructura multi-cloud BHP (Microsoft + AWS) vía LTE privado, entregando recomendaciones al CIO. |

Las responsabilidades de los SME se desprenden del flujo MoC.  Las responsabilidades de Technology, Seguridad Informática, Abastecimiento y terceros se encuentran en el Estándar Global.  

**No especificado en la documentación:** el rol funcional de ASTAY/DataTwin es conocido por el Q&A oficial de Open Aster (ver fila anterior), pero **ninguno de los dos documentos de ciberseguridad/MoC analizados asigna a ASTAY responsabilidades formales de cumplimiento** (quién prepara TSA/TPCRM/CIA/DPIA, quién los aprueba, plazos). Tampoco se especifica el área usuaria de BHP ni el responsable interno BHP del piloto.

## Criterios de éxito mencionados

**No se especifican criterios de éxito para el piloto en los documentos de ciberseguridad/MoC.**

Por fuera de estos documentos, el Q&A oficial de Open Aster sí menciona una meta aspiracional: **reducción de hasta 20% en tiempos de conducción dentro de la mina** — tratada internamente por ASTAY como aspiracional y no como compromiso contractual (ver Riesgo documentado en `BHP_Aster.md`). No hay KPIs intermedios ni criterios de aceptación formales definidos por BHP, ni en el Q&A ni en los documentos de ciberseguridad.

El Estándar Global menciona objetivos generales de protección de:

- confidencialidad;
- integridad;
- disponibilidad. 

También indica que una transición a operaciones debe satisfacer expectativas de calidad, costos, plazo de lanzamiento y cumplimiento. Sin embargo, el documento no indica que el piloto vaya a realizar una transición a operaciones ni define valores medibles para estos criterios. 

---

# 2. Glosario

## Términos del proceso MoC

| Término | Definición según el documento | Explicación sencilla | Referencia |
|---|---|---|---|
| MoC | Proceso en el que se solicita y valida una demanda que puede incluir un componente tecnológico. | Mecanismo de BHP para evaluar un cambio antes de aprobarlo. El documento no desarrolla el significado completo de la sigla. |  |
| Demanda tecnológica | Solicitud registrada en ServiceNow cuando un MoC requiere evaluación de tecnología. | Registro formal para que Technology revise una necesidad o cambio. |  |
| ServiceNow | Plataforma utilizada para ingresar la solicitud de demanda tecnológica. | Sistema donde se registra y gestiona la solicitud. |  |
| SME | Especialista asignado para validar la demanda desde Technology Escondida, Arquitectura o Ciberseguridad. | Experto responsable de revisar un aspecto específico. |  |
| AAR | Architecture Assessment. Evaluación utilizada cuando una nueva solución no presenta bajo riesgo y complejidad. | Revisión de arquitectura para soluciones que requieren una evaluación más completa. |  |
| LEAP | Proceso de aprobación de excepción de bajo riesgo. | Ruta de aprobación para una solución clasificada como de bajo riesgo y complejidad. |  |
| TSA | Technical Security Assessment o Evaluación Técnica de Seguridad. | Evaluación para determinar instrucciones y requerimientos de seguridad. |   |
| TPCRM | Third Party Cyber Risk Management o Gestión de Riesgos de Seguridad Informática de Terceros. | Evaluación del riesgo generado por un proveedor externo. |   |
| DPIA | En el flujo se denomina Data Protection Impact Assessment y en el listado Data Privacy Impact Assessment. | Evaluación relacionada con el impacto sobre protección o privacidad de datos. La denominación exacta requiere confirmación. |   |
| CIA Assessment | Evaluación de confidencialidad, integridad y disponibilidad. | Clasifica el impacto y criticidad de un sistema tecnológico. |   |
| AISA | Architecture Impact Self Assessment. | Autoevaluación del impacto arquitectónico. El documento solo lo enumera y no explica su aplicación. |  |
| HLD | High Level Design. | Diseño de alto nivel. El documento no define su contenido requerido. |  |
| LLD | Low Level Design. | Diseño de bajo nivel. El documento no define su contenido requerido. |  |

## Términos del Estándar Global

| Término | Definición contextual | Explicación sencilla | Referencia |
|---|---|---|---|
| TI | Tecnología de la Información. | Sistemas y servicios tecnológicos empresariales. |  |
| TO | Tecnología Operativa. Incluye actividades que afectan seguridad, fiabilidad, eficiencia de planta, calidad del producto o cumplimiento. | Tecnología relacionada con la operación industrial. |  |
| PCN | Process Control Network o Red de Control de Procesos. | Red utilizada para sistemas de control de procesos. |  |
| TAB | Technology Architecture Board o Junta de Arquitectura Tecnológica. | Órgano que evalúa y aprueba solicitudes de arquitectura. |  |
| GEAR | Repositorio de Aplicaciones Globales de BHP. | Catálogo de aplicaciones aprobadas por Technology. |  |
| GCMS | Sistema Global de Gestión de Contratos. | Sistema donde Abastecimiento completa cuestionarios TPCRM. |  |
| CAR | Automatización e Informes de Seguridad Informática. | Medio mediante el cual se confirma la finalización de preguntas TPCRM. |  |
| RFX | Solicitud utilizada dentro de un proceso contractual con terceros. | Proceso formal de solicitud a proveedores. El documento no expande la sigla. |  |
| RRR | Calificación de riesgo residual. | Nivel de riesgo que permanece después de aplicar controles. |  |
| IAAS | Infraestructura como servicio. | Modalidad de infraestructura en nube. |  |
| PAAS | Plataforma como servicio. | Modalidad de plataforma tecnológica en nube. |  |
| MDM | Solución de Gestión de Dispositivos Móviles. | Plataforma BHP donde deben registrarse dispositivos móviles conectados a TI. |  |
| MFA | Autenticación multifactor. | Uso de más de un factor para autenticar cuentas administrativas y accesos remotos. |  |
| OTP | Contraseña de un solo uso incluida como mecanismo MFA. | Código temporal utilizado durante la autenticación. |  |
| ERP | Planificación de recursos empresariales; actualmente SAP según el documento. | Sistema empresarial del cual pueden exportarse datos. |  |
| Datos | Información accedida, consumida, creada o captada mediante soluciones tecnológicas. | Información procesada por una solución. |  |
| Controles de compensación | Controles implementados cuando una brecha TPCRM no puede corregirse. | Medidas alternativas para reducir el riesgo a un nivel aceptable. |  |
| Cuenta privilegiada | Cuenta sujeta a revisiones de acceso y MFA administrativo. | Cuenta con permisos elevados. |  |
| Medios extraíbles | USB, discos externos, tarjetas SD, medios sólidos o dispositivos móviles conectables. | Dispositivos portátiles utilizados para transportar datos. |  |
| Riesgo de participación | Calificación asignada a la relación con un tercero. | Nivel de riesgo asociado al producto, servicio, datos o acceso proporcionado al proveedor. |  |

---

# 3. Requerimientos identificados

## 3.1. Gestión de demanda MoC

| Requerimiento | Origen | Responsable identificado | Estado |
|---|---|---|---|
| Ingresar la solicitud de demanda tecnológica en ServiceNow. | Flujo MoC. | Solicitante no identificado nominalmente. | Explícito. |
| Determinar si el MoC tiene un componente de tecnología. | Flujo MoC. | No especificado. | Explícito. |
| Asignar SME de Technology Escondida, Arquitectura y Ciberseguridad cuando exista componente tecnológico. | Flujo MoC. | No especificado. | Explícito. |
| Evaluar si existe impacto operativo sobre sistemas tecnológicos. | Rama Technology Escondida. | SME Technology Escondida. | Explícito. |
| Continuar el proceso de demanda tecnológica cuando exista impacto operativo. | Rama Technology Escondida. | SME Technology Escondida. | Explícito. |
| Evaluar si la demanda incluye una nueva solución tecnológica o utiliza sistemas existentes. | Rama Arquitectura. | SME del Panel de Arquitectura. | Explícito. |
| Ejecutar AAR y TSA cuando una nueva solución no sea de bajo riesgo y complejidad. | Rama Arquitectura. | Responsabilidad de ejecución no especificada. | Explícito y condicionado. |
| Ejecutar LEAP cuando la nueva solución tenga bajo riesgo y complejidad. | Rama Arquitectura. | Responsabilidad de ejecución no especificada. | Explícito y condicionado. |
| Ejecutar TPCRM y DPIA cuando la implementación incluya proveedores externos. | Rama Ciberseguridad. | Responsabilidad exacta no especificada en el flujo. | Explícito y condicionado. |
| Ejecutar CIA Assessment. | Rama Ciberseguridad. | Responsabilidad exacta no especificada. | Explícito. |
| Obtener las validaciones de Technology Escondida, Arquitectura y Ciberseguridad antes del cierre tecnológico del MoC. | Cierre del flujo. | SME correspondientes. | Interpretación directa del flujo. |

Fuente del flujo y sus decisiones: 

## 3.2. Coordinación, adquisición y autorización tecnológica

| Requerimiento | Responsable | Estado |
|---|---|---|
| Contactar a la Función de Tecnología para coordinar los requerimientos tecnológicos. | Solicitante o responsable de introducir tecnología. | Explícito. |
| No realizar compras ni firmar contratos tecnológicos directamente con proveedores. | Solicitante o área de negocio. | Explícito. |
| Canalizar compras y contratos tecnológicos mediante la Función de Tecnología. | Función de Tecnología. | Explícito. |
| No utilizar hardware ni software no autorizado. | Participantes del proyecto. | Explícito. |
| Utilizar únicamente aplicaciones aprobadas incluidas en GEAR. | Participantes del proyecto. | Explícito. |
| Enviar TPCRM para contratos nuevos o renovaciones. | Responsable no individualizado. | Explícito y condicionado a contrato nuevo o renovación. |



## 3.3. Arquitectura y seguridad

| Requerimiento | Responsable | Estado |
|---|---|---|
| Enviar una Solicitud de Evaluación de Arquitectura a TAB. | No especificado. | Explícito para desarrollo o implementación de soluciones. |
| Enviar una TSA. | No especificado. | Explícito para desarrollo o implementación de soluciones. |
| Corregir las deficiencias identificadas antes de implementar. | Equipo responsable de la solución, no individualizado. | Explícito. |
| Evaluar y gestionar las brechas que no puedan corregirse. | No especificado. | Explícito. |
| Usar la plataforma de nube aprobada por BHP para IAAS y PAAS. | Equipo responsable de la solución. | Condicionado al uso de IAAS o PAAS. |
| Implementar seguridad por diseño. | Equipo responsable de la solución. | Explícito. |
| Abordar riesgos de seguridad abiertos durante cada fase del ciclo de desarrollo. | Equipo responsable de la solución. | Explícito. |



## 3.4. Datos

| Requerimiento | Responsable | Estado |
|---|---|---|
| Obtener datos directamente del sistema. | Responsable de la solución. | Explícito. |
| Usar informes sin modificar, cuando estén disponibles, para evaluar el desempeño. | Responsable de análisis. | Explícito y condicionado a disponibilidad. |
| Mantener sobre datos exportados desde ERP las mismas restricciones de acceso del sistema ERP. | Responsable de la solución externa. | Explícito y condicionado a datos ERP. |



## 3.5. Segregación TI/TO y acceso remoto

| Requerimiento | Responsable | Estado |
|---|---|---|
| Diseñar infraestructura y aplicaciones TO para mantener las actividades de seguridad y productividad cuando TI o servicios empresariales no estén disponibles. | Responsable del diseño TO. | Condicionado a actividades TO. |
| Mantener la segregación entre TI y TO siempre que sea posible. | Responsable del diseño. | Condicionado a uso de TI/TO. |
| Usar métodos de acceso remoto de terceros aprobados por Technology. | BHP y proveedor externo. | Condicionado a acceso remoto. |
| No conectar directamente a proveedores externos con redes TO, especialmente PCN tradicionales. | BHP y proveedor externo. | Condicionado a participación de proveedor y redes TO. |



## 3.6. Controles generales para sistemas tecnológicos

Para todos los sistemas tecnológicos, el estándar exige:

- enviar un formulario CIA;
- implementar los controles correspondientes;
- evaluar y gestionar brechas no corregibles;
- aplicar mínimo privilegio y limitar temporalmente los accesos;
- utilizar MFA para cuentas administrativas y accesos remotos;
- revisar accesos según la criticidad CIA;
- habilitar registros de seguridad;
- cumplir los objetivos acordados de continuidad mediante respaldos;
- mantener protección de seguridad, parches y controles antimalware. 

Todos estos requerimientos son **explícitos en el estándar**, pero el documento no especifica su implementación concreta para DataTwin ni cuáles controles resultarán del CIA o TSA.

## 3.7. Gestión de terceros

Para proveedores nuevos, Abastecimiento debe completar el cuestionario TPCRM de incorporación en GCMS. Para proveedores existentes, el cuestionario depende de si la participación se realiza mediante contrato/RFX o fuera de ellos. Seguridad Informática puede activar una evaluación de control detallada. 

Las brechas resultantes deben ser corregidas por el tercero. Cuando no sea posible, deben establecerse controles de compensación y Seguridad Informática debe verificar su efectividad. 

## 3.8. Requerimientos cuya aplicabilidad no puede determinarse

No puede determinarse documentalmente si aplican al piloto:

- requerimientos específicos de TO;
- restricciones sobre datos ERP;
- uso de IAAS o PAAS;
- conexión de dispositivos móviles;
- medios extraíbles;
- transición a operaciones;
- continuidad y respaldos específicos;
- revisiones periódicas de accesos;
- reevaluación periódica TPCRM;
- DPIA;
- AAR o LEAP;
- AISA, HLD o LLD.

La aplicabilidad depende de características del piloto que no están descritas.

---

# 4. Preguntas para la reunión

## Prioridad alta

### 1. ¿El piloto ya cuenta con una solicitud de demanda tecnológica registrada en ServiceNow?

- **Información faltante:** número, estado y responsable de la demanda.
- **Por qué es necesaria:** el proceso MoC comienza con dicho registro.
- **Decisión dependiente:** confirmar si el proceso formal de validación ya fue iniciado o aún debe iniciarse.

### 2. ¿BHP ha determinado formalmente que el MoC posee un componente de tecnología?

- **Información faltante:** resultado de la primera decisión del flujo.
- **Por qué es necesaria:** determina si corresponde asignar los tres SME.
- **Decisión dependiente:** activar o cerrar la validación tecnológica.
- **Contexto conocido (Q&A oficial, no confirma esta decisión formal):** presumible que sí, dado que DataTwin se conecta a Módular, opera sobre infraestructura multi-cloud BHP y contempla instalación de hardware/sensores — pero esto no reemplaza la determinación formal de BHP.

### 3. ¿Qué SME de Technology Escondida, Arquitectura y Ciberseguridad fueron asignados?

- **Información faltante:** nombres, roles y canales de coordinación.
- **Por qué es necesaria:** cada SME debe emitir una validación diferente.
- **Decisión dependiente:** definir con quién se revisará cada requerimiento y aprobación.

### 4. ¿El SME de Technology Escondida ha determinado si existe impacto operativo en sistemas tecnológicos?

- **Información faltante:** clasificación y fundamento del impacto.
- **Por qué es necesaria:** el flujo indica que, si existe impacto, debe continuar el proceso de demanda tecnológica.
- **Decisión dependiente:** confirmar la ruta y actividades del proceso de demanda.

### 5. ¿El Panel de Arquitectura considera DataTwin una nueva solución tecnológica o el uso de un sistema existente?

- **Información faltante:** clasificación arquitectónica de la solución.
- **Por qué es necesaria:** define la ruta de evaluación de Arquitectura.
- **Decisión dependiente:** validación directa o evaluación adicional.

### 6. Si se considera una nueva solución, ¿BHP la ha clasificado como de bajo riesgo y complejidad?

- **Información faltante:** clasificación de riesgo y complejidad.
- **Por qué es necesaria:** el flujo presenta dos rutas excluyentes.
- **Decisión dependiente:** realizar LEAP o realizar AAR y TSA.

### 7. ¿Cuáles de los documentos enumerados fueron declarados aplicables al piloto?

Consultar específicamente por:

- TSA;
- TPCRM;
- CIA;
- DPIA;
- AISA;
- HLD;
- LLD;
- AAR;
- LEAP.

- **Información faltante:** matriz de aplicabilidad.
- **Por qué es necesaria:** el documento indica expresamente que el prerrequisito es conocer su aplicabilidad.
- **Decisión dependiente:** definir los documentos que deben prepararse y evitar generar entregables no solicitados.
- **Inferencia razonable, no confirmada:** por ser ASTAY proveedor externo (TPCRM aplicaría) implementando una solución nueva conectada a Módular (TSA probablemente aplicaría). No hay base documental para inferir DPIA, AISA, HLD, LLD, AAR o LEAP.

### 8. ¿Quién debe preparar, completar, revisar y aprobar cada documento aplicable?

- **Información faltante:** asignación de responsabilidades.
- **Por qué es necesaria:** los documentos nombran evaluaciones, pero no asignan todas las actividades.
- **Decisión dependiente:** distribución de responsabilidades entre BHP, Astay, Abastecimiento, Technology y Seguridad Informática.

### 9. ¿La implementación será clasificada como una participación con proveedor nuevo o proveedor existente?

- **Información faltante:** situación contractual de Astay.
- **Por qué es necesaria:** el proceso TPCRM cambia según la clasificación.
- **Decisión dependiente:** tipo de cuestionario y responsable de iniciarlo.
- **Contexto conocido:** ASTAY llega a BHP Escondida a través del proceso de innovación **Open Aster 2026** (aceleradora), no de un proceso de compras/RFX tradicional previo — probablemente calificaría como proveedor **nuevo**, pero esto no está confirmado ni resuelve si Open Aster cuenta como el "contrato/RFX" al que refiere el Estándar Global.

### 10. ¿La participación se encuentra bajo contrato o proceso RFX?

- **Información faltante:** modalidad contractual.
- **Por qué es necesaria:** para proveedores existentes, el responsable y el mecanismo TPCRM dependen de esta condición.
- **Decisión dependiente:** gestión en GCMS por Abastecimiento o confirmación mediante CAR por un representante BHP.
- **Contexto conocido:** la relación actual es a través de Open Aster (proceso de innovación/aceleradora), no un RFX de compras convencional — punto específico a aclarar con BHP, ya que el Estándar Global no contempla explícitamente esta modalidad.

### 11. ¿Se ha iniciado el TPCRM y cuál es su estado?

- **Información faltante:** cuestionario, evaluación, brechas y aprobaciones.
- **Por qué es necesaria:** el flujo MoC lo vincula con implementaciones de proveedores externos.
- **Decisión dependiente:** determinar si existen deficiencias que deban corregirse antes de la implementación.

### 12. ¿Se ha realizado el CIA Assessment y cuál fue la calificación de criticidad?

- **Información faltante:** máximos niveles CIA y controles derivados.
- **Por qué es necesaria:** la criticidad determina controles y frecuencia de revisión de accesos.
- **Decisión dependiente:** aplicar los controles de acceso y revisión que correspondan.

### 13. ¿Existe una TSA iniciada o aprobada para el piloto?

- **Información faltante:** estado, instrucciones de seguridad y brechas.
- **Por qué es necesaria:** el estándar exige TSA para soluciones tecnológicas y el flujo la incluye en una ruta arquitectónica.
- **Decisión dependiente:** conocer los controles obligatorios antes de implementar.

## Preguntas sobre el alcance técnico no documentado

### 14. ¿El piloto utilizará entornos TI, TO o ambos?

- **Información faltante:** clasificación formal del entorno.
- **Por qué es necesaria:** determina la aplicabilidad de segregación TI/TO, acceso remoto y PCN.
- **Decisión dependiente:** identificar qué requerimientos de la sección 1.2 aplican.
- **Contexto conocido (parcial, no resuelve la clasificación formal):** DataTwin consulta Módular (dato histórico/agregado) y entrega recomendaciones al CIO sobre tráfico de camiones CAEX — toca tanto el dominio de datos (TI) como el de operación minera (TO). La clasificación formal sigue siendo de BHP.

### 15. ¿El proveedor requerirá acceso remoto al entorno tecnológico de BHP?

- **Información faltante:** aprobación formal del método de acceso.
- **Por qué es necesaria:** el estándar exige métodos aprobados, MFA y prohíbe acceso directo a redes TO.
- **Decisión dependiente:** definir si deben activarse los controles documentados de acceso remoto.
- **Contexto conocido:** sí — según el Q&A oficial, la conectividad es vía **LTE privado**. Falta confirmar si este método ya está aprobado por la Función de Tecnología de BHP y si aplica MFA sobre este canal.

### 16. ¿DataTwin tendrá acceso directo a redes, sistemas o datos de BHP?

- **Información faltante:** confirmación formal para efectos de calificación TPCRM.
- **Por qué es necesaria:** es uno de los factores utilizados para calificar el riesgo TPCRM.
- **Decisión dependiente:** clasificación de riesgo de la participación y eventual reevaluación.
- **Contexto conocido:** según el Q&A oficial, la integración es **solo lectura y desacoplada** sobre Módular, sin modificar sistemas productivos ni conexión directa a redes de TO/PCN — esto debería jugar a favor de una calificación de riesgo menor, pero la calificación formal la determina BHP.

### 17. ¿Qué datos serán accedidos, consumidos, creados o capturados por DataTwin?

- **Información faltante:** clasificación de sensibilidad de los datos para efectos de TPCRM/CIA.
- **Por qué es necesaria:** permite determinar la aplicación de los requerimientos de datos y la sensibilidad considerada en TPCRM.
- **Decisión dependiente:** alcance de acceso, restricciones y evaluaciones relacionadas con datos.
- **Contexto conocido:** datos de **Módular** — bases de datos relacionales, históricos/agregados de match pala-camión y tráfico CAEX (no datos raw en tiempo real). Falta la clasificación formal de sensibilidad/confidencialidad de estos datos.

### 18. ¿Alguno de los datos provendrá de un ERP de BHP?

- **Información faltante:** confirmación formal.
- **Por qué es necesaria:** el estándar exige mantener las mismas restricciones de acceso del ERP sobre los datos exportados.
- **Decisión dependiente:** aplicar o descartar este requerimiento.
- **Contexto conocido:** la fuente confirmada es Módular, no el ERP (SAP) mencionado en el Estándar — no parece aplicar directamente, pero debe confirmarse si Módular cruza o se alimenta de datos SAP.

### 19. ¿El piloto utilizará IAAS o PAAS?

- **Información faltante:** confirmación de que la plataforma usada es la aprobada formalmente por BHP para este piloto.
- **Por qué es necesaria:** el estándar obliga a utilizar la plataforma de nube aprobada por BHP cuando se requieren estos servicios.
- **Decisión dependiente:** determinar si esta exigencia es aplicable.
- **Contexto conocido:** sí — el stack tecnológico de BHP es **multi-cloud (Microsoft + AWS)** según el Q&A oficial. Falta confirmar si este es exactamente el mismo entorno aprobado al que refiere el Estándar Global para IAAS/PAAS.

### 20. ¿El piloto contempla dispositivos móviles o medios extraíbles?

- **Información faltante:** presencia de estos componentes.
- **Por qué es necesaria:** activaría requerimientos específicos de MDM, aprobación para TO o declaración de medios extraíbles.
- **Decisión dependiente:** aplicar o descartar dichos controles.
- **Contexto conocido (parcial):** el Q&A oficial no menciona dispositivos móviles ni medios extraíbles, pero sí confirma que la **instalación de hardware/sensores está permitida mediante proceso de gestión del cambio (MoC)** — debe aclararse si el piloto contempla instalar sensores/hardware en campo.

### 21. ¿El piloto contempla una transición formal a operaciones?

- **Información faltante:** proceso y fecha formal de transición.
- **Por qué es necesaria:** la aprobación del Dueño del Servicio de Tecnología se exige para transiciones a operaciones.
- **Decisión dependiente:** determinar si esta aprobación forma parte del alcance actual.
- **Contexto conocido:** el piloto está explícitamente acotado a una flota/fase/corredor, con expectativa de **escalar al resto** si resulta exitoso — es decir, sí se contempla una transición eventual, pero sin fecha ni proceso formal descrito por BHP.

### 22. ¿Cuál es la duración formal del piloto y qué ocurre con accesos y datos al finalizar?

- **Información faltante:** fechas y condición de cierre.
- **Por qué es necesaria:** el estándar limita accesos al tiempo respaldado por el requisito comercial y exige borrar datos de medios extraíbles cuando ya no sean necesarios.
- **Decisión dependiente:** definir vigencia de cuentas, accesos y actividades de cierre aplicables.

---

# 5. Ambigüedades

## 5.1. Aplicabilidad de los documentos

El documento MoC indica que el prerrequisito es conocer la aplicabilidad de TSA, TPCRM, CIA, DPIA, AISA, HLD y LLD, pero no presenta el resultado de esa evaluación. 

## 5.2. Diferencia entre DPIA de protección y privacidad

El flujo utiliza la denominación **Data Protection Impact Assessment**, mientras el listado utiliza **Data Privacy Impact Assessment**. No se puede determinar si son el mismo documento o dos denominaciones distintas.  

## 5.3. TSA en dos rutas documentales

La TSA aparece:

- en el flujo de Arquitectura cuando una nueva solución no presenta bajo riesgo y complejidad;
- como requerimiento general al desarrollar o implementar soluciones tecnológicas.

No se aclara si una solución que sigue LEAP queda exenta de TSA o si el Estándar Global igualmente obliga a realizarla.  

## 5.4. CIA en el flujo y en el estándar

El flujo de Ciberseguridad muestra que el CIA Assessment se ejecuta tanto con proveedor externo como sin él. El Estándar Global indica que debe enviarse para todos los sistemas tecnológicos. No se indica si ya fue iniciado ni quién debe completarlo para este piloto.  

## 5.5. Criterio de bajo riesgo y complejidad

No se definen:

- los criterios;
- la escala;
- la autoridad que clasifica;
- la evidencia necesaria;
- el resultado del piloto.

## 5.6. Concepto de “impacto operativo”

El flujo pregunta si existe impacto operativo en sistemas tecnológicos, pero no define qué se considera impacto ni cómo se evalúa.

## 5.7. Nueva solución frente a sistema existente

No se define si una solución de proveedor instalada temporalmente en infraestructura BHP se considera:

- nueva solución tecnológica;
- sistema existente;
- extensión de un sistema existente.

## 5.8. Alcance de “antes de la implementación”

El estándar exige corregir deficiencias antes de la implementación, pero no aclara si “implementación” incluye:

- instalación inicial;
- configuración del piloto;
- habilitación a usuarios;
- puesta en operación;
- transición productiva.

## 5.9. Alcance de seguridad por diseño

Se exige seguridad por diseño, pero el documento entregado no contiene los controles específicos, evidencias o criterios de aceptación asociados.

## 5.10. Versión y vigencia del estándar

El documento indica:

- versión 7.0 del 8 de diciembre de 2023;
- última revisión el 20 de septiembre de 2023;
- siguiente revisión “por confirmar”;
- revisión obligatoria al menos cada 12 meses. 

Por ello, la documentación no permite confirmar si esta sigue siendo la versión vigente para el piloto en 2026.

---

# 6. Ejemplos contextuales

## Ejemplo 1: componente tecnológico en un MoC

Si la solicitud asociada al piloto incluye instalar o utilizar DataTwin dentro de un entorno BHP, el responsable del flujo deberá determinar si eso constituye un componente tecnológico.

El ejemplo solo representa la decisión mostrada en el flujo. El documento no confirma cuál será la respuesta para DataTwin.

## Ejemplo 2: sistema existente frente a nueva solución

- Si BHP clasifica DataTwin como utilización de un sistema ya aprobado, el flujo muestra una validación por el SME del Panel de Arquitectura.
- Si BHP lo clasifica como una nueva solución, debe evaluarse su riesgo y complejidad para definir la ruta AAR/TSA o LEAP.

Esto explica las alternativas del flujo, pero no determina la clasificación del piloto.

## Ejemplo 3: proveedor externo

Si Astay participa como proveedor externo, el flujo muestra TPCRM y DPIA antes del CIA Assessment. Sin embargo, no se puede concluir documentalmente qué modalidad TPCRM corresponde hasta conocer si Astay es proveedor nuevo, existente, bajo contrato o bajo RFX.

## Ejemplo 4: criticidad CIA

Si el CIA Assessment asigna un máximo de severidad igual o superior a 4, las cuentas privilegiadas y las cuentas de usuario final deben revisarse trimestralmente. Si el máximo es 1, ambas revisiones son anuales. 

El documento no proporciona la calificación CIA del piloto.

## Ejemplo 5: acceso remoto

Si el proveedor debe conectarse remotamente al entorno BHP:

- debe utilizar un método aprobado por Technology;
- debe utilizar MFA;
- no puede conectarse directamente a una red TO, especialmente a una PCN tradicional.  

No está documentado si el piloto requerirá acceso remoto.

## Ejemplo 6: brecha TPCRM

Si una evaluación TPCRM detecta una deficiencia, el tercero debe corregirla. Si no puede hacerlo, deben establecerse controles de compensación y Seguridad Informática debe verificar que reduzcan el riesgo a un nivel aceptable. 

---

# 7. Riesgos documentales

## Riesgo 1: no se ha definido la aplicabilidad de evaluaciones y documentos

- **Causa:** el documento enumera TSA, TPCRM, CIA, DPIA, AISA, HLD y LLD, pero no identifica cuáles aplican.
- **Impacto potencial:** no es posible determinar los entregables ni aprobaciones requeridas antes de implementar.
- **Referencia:** 

## Riesgo 2: no se conoce la ruta de Arquitectura

- **Causa:** no se ha indicado si DataTwin es una nueva solución ni si se clasifica como de bajo riesgo y complejidad.
- **Impacto potencial:** no puede definirse si corresponde AAR/TSA, LEAP o validación directa.
- **Referencia:** 

## Riesgo 3: no se conoce el resultado del CIA Assessment

- **Causa:** la documentación exige CIA para los sistemas tecnológicos, pero no contiene la evaluación del piloto.
- **Impacto potencial:** no pueden determinarse la criticidad, los controles aplicables ni la frecuencia de revisión de accesos.
- **Referencia:** 

## Riesgo 4: no se conoce el estado TPCRM

- **Causa:** el piloto involucra un proveedor externo según el contexto entregado, pero los documentos no indican clasificación, cuestionario, evaluación ni resultado.
- **Impacto potencial:** no puede determinarse si existen brechas que deban resolverse antes de implementar.
- **Referencia:** 

## Riesgo 5: ambigüedad en la denominación DPIA

- **Causa:** se utilizan las expresiones Data Protection Impact Assessment y Data Privacy Impact Assessment.
- **Impacto potencial:** podría solicitarse o prepararse un documento con alcance diferente al esperado por BHP.
- **Referencia:**  

## Riesgo 6: versión del estándar sin vigencia confirmada

- **Causa:** la siguiente revisión figura “por confirmar”, aunque el estándar debe revisarse al menos cada 12 meses.
- **Impacto potencial:** los requerimientos analizados podrían no corresponder a la versión vigente utilizada por BHP para la aprobación del piloto.
- **Referencia:** 

## Riesgo 7: falta de definición de TI y TO para el piloto

- **Causa:** no se describe el entorno donde se instalará DataTwin.
- **Impacto potencial:** no puede determinarse la aplicabilidad de segregación, acceso remoto de terceros y restricciones sobre PCN.
- **Referencia:** 

## Riesgo 8: ausencia de responsables operativos del piloto

- **Causa:** los documentos definen actores de gobernanza, pero no responsables específicos de DataTwin.
- **Impacto potencial:** no puede asignarse formalmente la elaboración de documentos, atención de observaciones ni aprobación de decisiones.

---

# 8. Información pendiente

No puede determinarse con los documentos entregados:

1. Objetivo funcional del piloto.
2. Alcance funcional de DataTwin.
3. Casos de uso incluidos.
4. Duración y fechas del piloto.
5. Criterios de éxito.
6. Entregables técnicos o funcionales de DataTwin.
7. Sistemas fuente involucrados.
8. Datos que serán utilizados.
9. Clasificación de los datos.
10. Usuarios y perfiles de acceso.
11. Infraestructura asignada.
12. Clasificación del entorno como TI, TO o ambos.
13. Uso de nube, IAAS o PAAS.
14. Necesidad de acceso remoto.
15. Método de acceso remoto aprobado.
16. Existencia de conexiones a PCN.
17. Uso de dispositivos móviles.
18. Uso de medios extraíbles.
19. Número y estado de la demanda en ServiceNow.
20. Resultado de la evaluación de componente tecnológico.
21. SME asignados.
22. Existencia de impacto operativo.
23. Clasificación como nueva solución o sistema existente.
24. Clasificación de riesgo y complejidad.
25. Aplicabilidad de AAR.
26. Aplicabilidad de LEAP.
27. Aplicabilidad y estado de TSA.
28. Aplicabilidad y estado de TPCRM.
29. Aplicabilidad y estado de DPIA.
30. Resultado del CIA Assessment.
31. Aplicabilidad de AISA.
32. Aplicabilidad de HLD.
33. Aplicabilidad de LLD.
34. Responsable de cada documento.
35. Formatos y plantillas oficiales.
36. Fechas de entrega y aprobación.
37. Situación contractual de Astay.
38. Clasificación como proveedor nuevo o existente.
39. Existencia de contrato o RFX.
40. Brechas de seguridad identificadas.
41. Controles de compensación requeridos.
42. Aplicación concreta de registros de seguridad.
43. Requerimientos concretos de respaldo y continuidad.
44. Requerimientos de parches y antimalware para DataTwin.
45. Repositorio GEAR y estado de aprobación de DataTwin.
46. Posible transición del piloto a operaciones.
47. Dueño del Servicio de Tecnología.
48. Proceso de cierre y retiro de accesos.
49. Tratamiento de datos al finalizar el piloto.
50. Confirmación de que TECH-GSTD-00005 versión 7.0 sigue vigente.

### Ítems con contexto conocido (Q&A oficial Open Aster), pero sin confirmación formal de BHP vía MoC/Ciberseguridad

Los siguientes ítems de la lista anterior ya tienen un contexto conocido por ASTAY (fuente: `BHP_Aster.md`, Q&A oficial), aunque **no han sido confirmados formalmente por BHP a través del proceso MoC/Ciberseguridad**, por lo que se mantienen en la lista de pendientes:

- **1–2** (objetivo y alcance funcional): conocido — Gemelo Digital DataTwin, tráfico CAEX, recomendaciones al CIO.
- **7–8** (sistemas fuente y datos): conocido — Módular, datos históricos/agregados.
- **13–14** (uso de nube y acceso remoto): conocido — multi-cloud Microsoft + AWS, acceso vía LTE privado.
- **15** (método de acceso remoto aprobado): parcialmente conocido — LTE privado confirmado; falta aprobación formal de Technology BHP.
- **37–38** (situación contractual y clasificación de proveedor): contexto conocido — vínculo vía Open Aster (aceleradora), no RFX tradicional; clasificación formal pendiente.

El resto de los ítems (SME asignados, ServiceNow, CIA/TPCRM/TSA, clasificación de riesgo y complejidad, AAR/LEAP, medios extraíbles, transición a operaciones, vigencia del estándar, etc.) **no tiene contexto conocido** y depende enteramente de la respuesta de BHP.

---

# 9. Resumen para la reunión

## Puntos que deben comprenderse antes de la reunión

El **piloto en sí ya es conocido por ASTAY** (Gemelo Digital DataTwin sobre tráfico CAEX, integrado en solo lectura a Módular vía LTE privado, sobre infraestructura multi-cloud Microsoft + AWS de BHP — ver `BHP_Aster.md`). Lo que **no describe la documentación de ciberseguridad/MoC entregada** es el estado de avance de ese piloto dentro del marco de gobernanza de BHP. Ese marco es el que potencialmente debe seguirse:

1. registro y clasificación de la demanda en ServiceNow;
2. revisión por Technology Escondida;
3. revisión por Arquitectura;
4. revisión por Ciberseguridad;
5. evaluación de terceros;
6. evaluación CIA;
7. resolución de brechas antes de implementar.

La prioridad no debe ser diseñar arquitectura adicional, sino determinar qué rutas y documentos BHP ya declaró aplicables.

## Preguntas prioritarias para BHP

1. ¿Cuál es el número y estado de la demanda en ServiceNow?
2. ¿Qué SME fueron asignados?
3. ¿DataTwin fue clasificado como nueva solución o sistema existente?
4. ¿Cuál es su clasificación de riesgo y complejidad?
5. ¿Corresponde AAR/TSA o LEAP?
6. ¿Qué documentos del listado son obligatorios para este piloto?
7. ¿Quién prepara y quién aprueba cada documento?
8. ¿Cuál es el estado de TPCRM?
9. ¿Cuál es el resultado del CIA Assessment?
10. ¿El entorno será TI, TO o ambos?
11. ¿Se requerirá acceso remoto del proveedor?
12. ¿Qué datos y sistemas serán utilizados?
13. ¿Cuál es la versión vigente del Estándar Global?

## Decisiones que no pueden tomarse todavía

Hasta recibir respuesta de BHP no puede definirse:

- la ruta de aprobación de Arquitectura;
- la documentación que debe preparar Astay;
- los controles concretos de seguridad;
- el modelo de acceso;
- los requerimientos asociados a TI/TO;
- la aplicabilidad de DPIA;
- la aplicación de IAAS o PAAS;
- las revisiones de acceso;
- los controles derivados del CIA;
- las actividades derivadas de TPCRM;
- la posibilidad de iniciar la implementación;
- las actividades de transición a operaciones;
- las condiciones de cierre del piloto.

## Conclusión ejecutiva

Los documentos establecen que una solución tecnológica de un proveedor externo debe pasar por validaciones de Technology, Arquitectura y Ciberseguridad. ASTAY ya conoce el **alcance funcional** del piloto (Q&A oficial Open Aster) y puede anticipar razonablemente que, como proveedor externo con acceso remoto (LTE privado) e integración a Módular, al menos **TPCRM y TSA** serán relevantes. Sin embargo, los documentos analizados no contienen evidencia de que dichas evaluaciones hayan sido iniciadas o completadas formalmente para DataTwin, ni de que BHP haya clasificado la solución dentro del flujo MoC.

La reunión debe orientarse principalmente a obtener la **matriz de aplicabilidad**, el **estado de las evaluaciones**, la **clasificación de la solución** y la **asignación de responsabilidades** — usando el contexto funcional ya conocido por ASTAY como punto de partida, no como sustituto de la confirmación formal de BHP. Hasta contar con esas respuestas, no existe evidencia documental suficiente para definir los controles específicos ni los entregables regulatorios del piloto.