---
fecha: 2026-07-12
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Commit Works / GMG / ABB
url: 
tags: [cmh]
---
# Referencia — Short Interval Control en minería
**Proyecto:** CMH
**Fuente:** Commit Works, Global Mining Guidelines Group (GMG), ABB
**Tipo:** artículo / metodología

---

## Cómo aplica al proyecto

CMH busca digitalizar el **cambio de guardia** en Parcoy — SIC es el marco metodológico de referencia para diseñar qué información debe capturarse y qué decisiones debe habilitar la solución en cada intervalo/turno, más allá de solo reemplazar el registro manual por uno digital.

## 1. Definición

El **Short Interval Control —SIC—** es un sistema de gestión operacional que divide el turno en intervalos breves, normalmente de **2 a 4 horas**, para comparar continuamente el desempeño real contra el plan, identificar desviaciones y ejecutar acciones correctivas antes de que termine el turno.

Su objetivo no es generar más reportes, sino **reducir el tiempo entre la aparición de una desviación, su detección y la decisión operacional**.

Commit Works lo define como una metodología basada en seguimiento continuo, intervalos cortos, soporte a decisiones, colaboración transversal y mejora continua. GMG lo caracteriza como un proceso estructurado para identificar y actuar sobre oportunidades de mejora en la eficacia y eficiencia de los procesos. ([Commit Works](https://commit.works/short-interval-control/ "Short Interval Control for Mining - Commit Works"))

### Diferencia frente al control tradicional

|Control tradicional|Short Interval Control|
|---|---|
|Evaluación al cierre del turno o del día|Evaluación varias veces dentro del turno|
|Reporta lo que ya ocurrió|Busca recuperar el plan mientras todavía es posible|
|KPIs agregados diarios|KPIs por hora, intervalo, equipo, frente o proceso|
|Plan relativamente estático|Plan dinámico, sujeto a reasignaciones|
|Análisis predominantemente retrospectivo|Control preventivo y correctivo|
|Responsabilidad concentrada en planificación|Participación de operación, despacho, mantenimiento y áreas de soporte|

Un reporte horario por sí solo **no constituye SIC**. Para que exista SIC, la información debe desencadenar una decisión, una acción, un responsable y un seguimiento.

---

## 2. Principios fundamentales

### Intervalos cortos

El turno se descompone en ventanas suficientemente breves para reaccionar, pero suficientemente amplias para obtener una señal operacional representativa.

El intervalo adecuado depende del proceso:
- Carguío y acarreo: 30 minutos a 2 horas.
- Perforación, desarrollo o sostenimiento: 2 a 4 horas.
- Chancado y planta: 15 minutos a 1 hora.
- Actividades discretas subterráneas: por ciclo, labor o hito operacional.

Commit Works utiliza como referencia habitual intervalos de 2 a 4 horas, aunque reconoce que su duración debe adaptarse a la naturaleza del proceso. ([Commit Works](https://commit.works/short-interval-control/ "Short Interval Control for Mining - Commit Works"))

### Monitoreo continuo
Se requiere conocer, con una latencia compatible con la decisión:
- avance físico;
- toneladas y leyes;
- ciclos realizados;
- estados y ubicación de equipos;
- demoras y pérdidas;
- disponibilidad de recursos;
- cumplimiento del programa;
- restricciones activas;
- proyección de cierre del turno.

La captura puede evolucionar desde radio, pizarras y formularios manuales hasta FMS, aplicaciones móviles, sensores y plataformas integradas. GMG señala que el modelo debe adaptarse a la madurez digital: una mina avanzada puede actuar casi en tiempo real, mientras que una operación menos madura puede comenzar con consolidaciones periódicas o de fin de turno. ([Commit Works](https://commit.works/short-interval-control/ "Short Interval Control for Mining - Commit Works"))

### Decisiones rápidas dentro del turno
La métrica debe estar acompañada de una regla de actuación. Por ejemplo:
> Si la proyección de toneladas al final del turno cae por debajo del 90 % del objetivo y existe capacidad disponible, reasignar camiones o modificar destinos.

ABB describe SIC como un circuito rápido de retroalimentación que permite analizar y mitigar variaciones durante el turno, en lugar de esperar al cierre. ([ABB Group](https://new.abb.com/mining/digital-applications/operations-management-system-oms-for-mining/digitalization-of-short-interval-control-%28sic%29-and-production-scheduling-in-mining "Digitalization of Short Interval Control (SIC) and Production Scheduling in mining - ABB Ability™ Operations Management System for mining (Digital applications for mining) Ability™ Operations Management System for mining | ABB"))

### Colaboración transversal
SIC conecta a:
- supervisores de turno;
- control mina o despacho;
- planificación;
- mantenimiento;
- geología y control de leyes;
- geotecnia;
- ventilación;
- contratistas;
- operadores de campo.

La plataforma tecnológica debe proporcionar una versión común de la situación operacional, pero la coordinación sigue siendo un proceso de gestión. ([Commit Works](https://commit.works/short-interval-control/ "Short Interval Control for Mining - Commit Works"))

### Mejora continua
Las desviaciones no deben limitarse a una explicación. Deben alimentar:
1. una contramedida inmediata;
2. un análisis de causa;
3. una acción preventiva;
4. una mejora de estándares, tiempos o reglas de planificación.

GMG destaca que las contramedidas efectivas permiten reducir la recurrencia de problemas y mejorar la capacidad de anticipar resultados. ([Global Mining Guidelines Group](https://gmggroup.org/guideline-for-implementing-short-interval-control-in-underground-mining-operations/ "Guideline for Implementing Short Interval Control in Underground Mining Operations - Global Mining Guidelines Group"))

## 3. Componentes de un sistema SIC
### 3.1 Plan operacional ejecutable
El punto de partida debe ser un plan desagregado por:
- turno e intervalo;
- ubicación o frente;
- equipo y operador;
- actividad;
- material o destino;
- volumen;
- secuencia;
- duración;
- restricciones y dependencias.

Un plan semanal o diario agregado no es suficiente. SIC necesita convertirlo en compromisos controlables dentro del turno.

### 3.2 Captura de ejecución
Las fuentes habituales son:
- FMS o sistema de despacho;
- sistemas de perforación;
- posicionamiento GNSS o tracking subterráneo;
- SCADA, PLC, historian u OPC;
- sistemas de mantenimiento;
- aplicaciones móviles;
- reportes de operadores;
- control de acceso y personal;
- información de geología, ventilación y geotecnia.

La captura manual sigue siendo válida en etapas iniciales, siempre que tenga reglas, responsables y periodicidad.

### 3.3 KPIs por intervalo
Los indicadores deben ser pocos y accionables. Una estructura recomendable es:
**Resultado**
- toneladas;
- metros perforados o desarrollados;
- mineral enviado;
- ley o calidad;
- cumplimiento del plan.

**Drivers**
- ciclos por hora;
- productividad por equipo;
- tiempo de ciclo;
- utilización;
- disponibilidad;
- velocidad;
- colas;
- tiempo efectivo en frente.

**Pérdidas y restricciones**
- equipos detenidos;
- falta de operador;
- espera por tronadura;
- falta de servicios;
- congestión;
- frente no liberado;
- indisponibilidad de ventilación;
- espera por mantenimiento.

### 3.4 Reuniones de intervalo
Una revisión SIC debe durar idealmente entre **10 y 20 minutos** y responder:
1. ¿Dónde estamos frente al plan?
2. ¿Cuál es la proyección de cierre?
3. ¿Qué desviaciones son recuperables?    
4. ¿Cuál es la causa dominante?
5. ¿Qué decisión se tomará?
6. ¿Quién ejecutará la acción?
7. ¿Cuándo se verificará?
La reunión no debe convertirse en una revisión extensa de KPIs ni en una sesión de resolución técnica detallada.

### 3.5 Acciones correctivas
Ejemplos:
- reasignar camiones o equipos auxiliares;
- cambiar un equipo de frente;
- modificar una secuencia;
- utilizar un frente alternativo;
- priorizar mantenimiento de corta duración;
- cambiar destinos de descarga;
- ajustar el blend;
- adelantar una actividad habilitante;
- escalar una restricción a otra área.

### 3.6 Reprogramación dinámica

La decisión debe modificar el plan operativo vigente. En sistemas maduros, el cambio se registra en un OMS o scheduler y se distribuye automáticamente a supervisores, controladores y dispositivos móviles.

ABB denomina este enfoque **closed-loop scheduling**: integrar planificación de alto nivel con control operacional de bajo nivel para ajustar recursos y mantener el cumplimiento del plan. ([ABB Group](https://new.abb.com/mining/digital-applications/operations-management-system-oms-for-mining/digitalization-of-short-interval-control-%28sic%29-and-production-scheduling-in-mining "Digitalization of Short Interval Control (SIC) and Production Scheduling in mining - ABB Ability™ Operations Management System for mining (Digital applications for mining) Ability™ Operations Management System for mining | ABB"))

## 4. Flujo de SIC durante un turno
### 1. Preparación del turno
Se recibe el plan de corto plazo y se valida:
- disponibilidad de equipos;
- dotación;
- labores liberadas;
- condiciones de seguridad;
- mantenimiento programado;
- restricciones de materiales y servicios;
- capacidad de chancado, transporte o extracción.

### 2. Definición de objetivos
El potencial diario se convierte en metas por turno e intervalo.
Ejemplo:
- Meta del turno: 60 000 t.
- Intervalo: 3 horas.
- Meta base por intervalo: 15 000 t.
- Distribución por pala, ruta, material y destino.

No necesariamente todos los intervalos tienen la misma meta. Deben considerar cambios de guardia, tronaduras, traslados, mantenimiento y disponibilidad prevista.

### 3. Ejecución y captura
Durante el intervalo se registran:
- producción;
- avance;
- tiempos;
- estados;
- pérdidas;
- calidad;
- restricciones.

### 4. Comparación plan–real–proyección
No basta con mostrar el acumulado. Deben calcularse:
- desviación del intervalo;
- desviación acumulada;
- tendencia;
- producción perdida;
- potencial recuperable;
- proyección al cierre;
- nivel de riesgo del plan.

### 5. Revisión SIC
El equipo analiza las excepciones relevantes. Se priorizan las desviaciones que:
- comprometen el resultado del turno;
- afectan el cuello de botella;
- tienen posibilidad de recuperación;
- requieren coordinación entre áreas.

### 6. Acción y reprogramación
Las decisiones se convierten en tareas con responsable, plazo y resultado esperado.

### 7. Verificación
En el siguiente intervalo se valida:
- si la acción fue ejecutada;
- si tuvo el efecto esperado;
- si la desviación fue recuperada;
- si debe mantenerse, modificarse o escalarse.

### 8. Cierre del turno
Se consolida:
- cumplimiento final;
- pérdidas recuperables y no recuperables;
- acciones abiertas;
- causas recurrentes;
- restricciones para el siguiente turno;
- aprendizajes para planificación.

Así, el plan pasa de ser un documento estático a un **sistema vivo de compromisos, medición, decisión y reajuste**.

## 5. Beneficios principales
### Mayor cumplimiento del plan
SIC incrementa la probabilidad de alcanzar el plan porque las desviaciones se gestionan cuando aún existe capacidad de recuperación. GMG identifica entre sus beneficios la mejora de procesos, OEE, gestión de recursos y soporte de supervisión desde sala de control. ([Global Mining Guidelines Group](https://gmggroup.org/guideline-for-implementing-short-interval-control-in-underground-mining-operations/ "Guideline for Implementing Short Interval Control in Underground Mining Operations - Global Mining Guidelines Group"))

### Reducción de pérdidas dentro del turno
Permite actuar sobre:
- esperas;
- equipos mal asignados;
- congestión;
- baja productividad;
- frentes no disponibles;
- desbalance entre procesos;
- fallas de coordinación.

El valor principal no proviene de medir mejor la pérdida, sino de **acortar su duración**.

### Mayor productividad y utilización
Commit Works indica que algunas operaciones reportan mejoras de productividad del orden de 10 % a 20 % tras implementar SIC. Sin embargo, este rango procede de una fuente comercial y no debe utilizarse como business case universal sin establecer una línea base propia y controlar cambios concurrentes. ([Commit Works](https://commit.works/short-interval-control-in-mining-driving-operational-excellence/ "Short Interval Control in Mining: Driving Operational Excellence - Commit Works"))

### Mejora de OEE
En minería, el OEE debe adaptarse cuidadosamente. SIC puede impactar sus tres componentes:
- **Disponibilidad:** reducción de detenciones y mejor coordinación con mantenimiento.
- **Rendimiento:** menor tiempo de ciclo y mayor productividad efectiva.
- **Calidad:** mejor control de mineral, ley, dilución, destino y reproceso.

### Mayor conciencia situacional
Una visión común de plan, real, proyección, restricciones y acciones reduce discusiones sobre cuál dato es correcto y orienta la conversación hacia la recuperación del resultado.

ABB ilustra este principio con el caso de una actividad de perforación que pierde una ronda de voladura: la falla se reporta, el supervisor recibe la alerta, se evalúan alternativas mediante análisis what-if y se toma una decisión sin esperar al cierre del turno. ([ABB Group](https://new.abb.com/mining/digital-applications/operations-management-system-oms-for-mining/digitalization-of-short-interval-control-%28sic%29-and-production-scheduling-in-mining "Digitalization of Short Interval Control (SIC) and Production Scheduling in mining - ABB Ability™ Operations Management System for mining (Digital applications for mining) Ability™ Operations Management System for mining | ABB"))

## 6. Datos, sistemas y arquitectura digital
### Sistemas principales
**FMS**
Gestiona flota móvil, asignaciones, ciclos, estados, ubicaciones, tiempos y destinos. Es fundamental en tajo abierto, pero no reemplaza al SIC.

**OMS o plataforma SIC**
Orquesta:
- plan de turno;
- actividades;
- recursos;
- cumplimiento;
- restricciones;
- acciones;
- reprogramación.

**Sistemas OT e IoT**
Aportan señales de:
- equipos fijos;
- chancadoras;
- fajas;
- bombeo;
- ventilación;
- energía;
- instrumentación
- sensores ambientales y geotécnicos.

**Dashboards y aplicaciones**
Distribuyen información por rol:
- sala de control;
- supervisor;
- operador;
- mantenimiento;
- planificación;
- gerencia.

### Arquitectura de referencia
```text
Planificación minera / mantenimiento / geología
                       │
FMS / SCADA / OPC / IoT / apps móviles / tracking
                       │
         Integración OT-IT y procesamiento
     APIs | eventos | streaming | ETL/ELT | reglas
                       │
      Plataforma operacional de datos en tiempo real
       eventos | estados | ciclos | series temporales
                       │
      Modelo contextualizado de la operación minera
 equipos | frentes | actividades | materiales | tiempo
                       │
       Motor de KPIs, alertas y proyección del turno
                       │
        OMS / SIC / Scheduler / Digital Twin
                       │
 Sala de control | móvil | dashboards | reporting
                       │
       Acciones, reasignaciones y nuevo plan vigente
```

### Rol del digital twin
El gemelo digital no sustituye al SIC. Actúa como una capa de contexto y soporte a decisiones.
Puede:
- representar el estado actual de equipos, frentes y procesos;
- vincular plan, ubicación y ejecución;
- visualizar restricciones espacialmente;
- proyectar el cierre del turno;
- simular escenarios de reasignación;
- evaluar impactos sobre producción, calidad y congestión;
- conservar trazabilidad de decisiones.

El valor surge cuando existe un circuito cerrado:

> observar → detectar → diagnosticar → simular → decidir → ejecutar → verificar.

Un gemelo que únicamente visualiza activos en 3D no constituye SIC.

## 7. Cultura y modelo de gestión
La tecnología mejora velocidad y trazabilidad, pero SIC es principalmente una **disciplina operacional**.

### Factores de éxito
- Sponsor operacional con autoridad.
- Responsabilidad clara del supervisor de turno.
- Metas aceptadas y entendidas.
- Un único dato operacional.
- Reuniones breves y estructuradas.
- Participación del personal de primera línea.
- Registro de decisiones y compromisos.
- Escalamiento rápido de restricciones.
- Seguimiento de acciones en el siguiente intervalo.
- Análisis de causas recurrentes fuera de la reunión SIC.

### Accountability
Cada desviación relevante debe tener:
- causa;
- acción;
- responsable;
- hora objetivo;
- resultado esperado;
- estado;
- validación.

Accountability no significa buscar culpables. Significa hacer explícito quién coordina la recuperación del plan.

### Causas frecuentes de fracaso
1. **Tratar SIC como un proyecto de dashboard.**  
    Se visualizan desviaciones, pero nadie decide.
2. **Exceso de KPIs.**  
    El equipo pierde foco y la reunión se convierte en reporte.
3. **Datos tardíos o poco confiables.**  
    Se discute la cifra en lugar de actuar.
4. **Ausencia de facultad para reprogramar.**  
    El supervisor identifica el problema, pero no puede reasignar recursos.
5. **Falta de participación del frente.**  
    Las causas se interpretan desde la oficina sin contexto operacional.
6. **Intervalos arbitrarios.**  
    Una periodicidad demasiado corta genera ruido; una demasiado larga elimina capacidad de respuesta.
7. **No cerrar acciones.**  
    Las mismas restricciones aparecen en cada turno.
8. **Metas técnicamente inalcanzables.**  
    SIC no corrige un plan sin capacidad, recursos o condiciones habilitantes.

## 8. Minería subterránea frente a tajo abierto

|Dimensión|Minería subterránea|Tajo abierto|
|---|---|---|
|Proceso dominante|Red de actividades interdependientes|Flujo continuo de carguío y acarreo|
|Restricciones|Accesos, ventilación, sostenimiento, servicios, secuencia y disponibilidad de frentes|Flota, rutas, congestión, destinos, chancado y condiciones de caminos|
|Datos|Frecuentemente fragmentados y con conectividad limitada|Mayor disponibilidad de telemetría y FMS|
|Unidad de control|Labor, frente, ciclo o actividad|Equipo, ruta, material, origen y destino|
|Horizonte SIC|2–4 horas o por hito|30 minutos–2 horas, según proceso|
|Reprogramación|Cambio de secuencia, frente, cuadrilla o equipo|Reasignación de camiones, palas, rutas o destinos|
|Riesgo principal|Propagación de retrasos entre actividades dependientes|Desbalance de flota y pérdida de capacidad del sistema|
|KPI clave|Avance, cumplimiento de actividades, tiempo efectivo en frente|Toneladas, ciclos, utilización, colas, productividad y cumplimiento de destino|

### Buenas prácticas subterráneas
- Controlar actividades habilitantes, no solo toneladas.
- Modelar relaciones de precedencia.
- Mantener frentes alternativos listos.
- Incluir ventilación, servicios y sostenimiento en el tablero SIC.
- Utilizar aplicaciones con operación offline cuando la conectividad sea intermitente.
- Medir tiempo efectivo en frente y pérdida por traslados.

GMG plantea explícitamente una implementación progresiva según seis niveles de madurez, desde procesos básicos hasta operaciones altamente automatizadas. ([Global Mining Guidelines Group](https://gmggroup.org/guideline-for-implementing-short-interval-control-in-underground-mining-operations/ "Guideline for Implementing Short Interval Control in Underground Mining Operations - Global Mining Guidelines Group"))

### Buenas prácticas en tajo abierto
- Integrar plan de movimiento con FMS.    
- Controlar cumplimiento por pala, material y destino, no solo toneladas totales.
- Gestionar el sistema por su cuello de botella.
- Utilizar proyecciones de cierre y no únicamente valores acumulados.
- Incluir chancado, botaderos y stockpiles dentro del mismo balance.
- Detectar congestión y colas antes de que se conviertan en pérdida sostenida.

## 9. Lineamientos de implementación

Una secuencia de despliegue recomendable es:

### Fase 1: diagnóstico
- Mapear el proceso actual de planificación y control.
- Identificar decisiones que actualmente se toman demasiado tarde.
- Medir latencia y calidad de datos.
- Seleccionar un cuello de botella.
- Establecer una línea base.

### Fase 2: diseño operacional
- Definir intervalos.
- Seleccionar entre 5 y 10 KPIs.
- Diseñar reglas de excepción.
- Establecer participantes y facultades.
- Crear el flujo de reuniones y escalamiento.

### Fase 3: piloto
- Aplicar SIC en una flota, nivel, área o proceso.
- Operar inicialmente con la tecnología disponible.
- Registrar acciones y resultados.
- Ajustar indicadores y frecuencia.

### Fase 4: digitalización
- Automatizar captura.
- Integrar FMS, OMS y sistemas OT.
- Implementar alertas y proyección.
- Habilitar visualización móvil y en sala de control.
- Incorporar reprogramación y trazabilidad.

### Fase 5: escalamiento
- Extender a procesos aguas arriba y aguas abajo.
- Conectar mantenimiento y planificación.
- Estandarizar taxonomías de pérdidas.
- Incorporar simulación y digital twin.
- Institucionalizar la revisión de causas recurrentes.

## Conclusión

SIC es el mecanismo que conecta la planificación de corto plazo con la realidad operacional del turno. Su propósito es detectar tempranamente las desviaciones, movilizar a las áreas responsables y reajustar el uso de recursos mientras todavía existe oportunidad de cumplir el plan.

La plataforma tecnológica es un habilitador. El resultado depende principalmente de tres capacidades:
1. **Visibilidad confiable y oportuna de la operación.**
2. **Autoridad y disciplina para actuar dentro del turno.**
3. **Aprendizaje sistemático para evitar la repetición de pérdidas.**

La mejor implementación no comienza con una arquitectura compleja. Comienza identificando una decisión operacional relevante que hoy se toma tarde y construyendo alrededor de ella un ciclo disciplinado de **plan–real–proyección–acción–verificación**.