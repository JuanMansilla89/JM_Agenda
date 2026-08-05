# Flujos Mermaid detallados de los procesos de disponibilidad y mantenimiento de flota minera
Estos diagramas descomponen paso a paso los procesos identificados en la investigación previa, con actores, decisiones y puntos de control explícitos. Cada flujo incluye el diagrama renderizado y el código Mermaid correspondiente para copiar y pegar directamente en cualquier editor compatible (Mermaid Live Editor, GitHub, Notion, Obsidian, etc.).
## Transición de estado de un equipo en tiempo real
![](images/image_1.png)
Este flujo cubre el ciclo completo: reporte de evento por operador/despacho, apertura de notificación de mantenimiento, confirmación de recepción por el mecánico, ejecución, y retorno certificado a disponibilidad, incluyendo el bloqueo por falta de repuesto.
```mermaid
flowchart TD
    A[Operador detecta anomalia o inicia equipo] --> B{Tipo de evento}
    B -->|Falla no programada| C[Operador reporta Panne via app/radio]
    B -->|Fin de turno / sin trabajo| D[Despacho marca Standby]
    B -->|Cumple horometro/calendario| E[Sistema genera alerta Preventivo]
    C --> F[Sistema crea notificacion de mantenimiento]
    E --> F
    F --> G[Mecanico confirma recepcion del equipo]
    G --> H[Estado cambia a Taller/Mantenimiento]
    H --> I[Mecanico ejecuta diagnostico y reparacion]
    I --> J{Reparacion completa?}
    J -->|No, falta repuesto| K[Orden en espera de material]
    K --> I
    J -->|Si| L[Mecanico certifica retorno a servicio]
    L --> M[Estado cambia a Disponible]
    M --> N[Despacho decide Operativo o Standby]
    D --> N
```
## Ciclo de vida de la orden de mantenimiento y priorización de backlog
![](images/image_2.png)
Cubre desde la solicitud (preventiva o correctiva) hasta el cierre administrativo, incluyendo el cálculo del índice de prioridad (criticidad × severidad) cuando la demanda excede la capacidad de taller.
```mermaid
flowchart TD
    A[Solicitud de mantenimiento: preventivo o correctivo] --> B[Planificador evalua solicitud]
    B --> C{Repuestos y mano de obra disponibles?}
    C -->|Si| D[Se crea Orden de Trabajo programada]
    C -->|No| E[Orden entra a Backlog priorizado]
    E --> F[Calculo Priority Index = Criticidad x Severidad]
    F --> G{Capacidad de taller disponible?}
    G -->|No| E
    G -->|Si| D
    D --> H[Asignacion de mecanico y turno]
    H --> I[Ejecucion de la intervencion]
    I --> J[Registro de horas, causas y componentes]
    J --> K[Cierre tecnico de la orden]
    K --> L[Cierre administrativo y costeo]
    L --> M[Equipo retorna a estado Disponible]
```
## Integración de repuestos con MM (reserva, compra, bloqueo)
![](images/image_3.png)
Detalla la creación automática de reserva cuando hay stock, la generación de solicitud de pedido cuando no lo hay, el ciclo de compra/recepción, y el manejo de la intervención bloqueada por falta de material con sus alternativas.
```mermaid
flowchart TD
    A[Planificador agrega componente a la Orden] --> B{Material en stock?}
    B -->|Si| C[Sistema crea Reserva automatica en MM]
    C --> D[Almacen ejecuta Salida de Mercancia]
    D --> E[Costo se refleja en la Orden de Mantenimiento]
    B -->|No| F[Sistema genera Solicitud de Pedido]
    F --> G[Comprador aprueba y crea Orden de Compra]
    G --> H[Proveedor entrega repuesto - lead time]
    H --> I[Recepcion de Mercancia]
    I --> D
    E --> J{Intervencion puede continuar?}
    J -->|No, bloqueada| K[Orden marcada Esperando Material]
    K --> L[Buscar alternativa: canibalizacion o compra emergencia]
    L --> J
    J -->|Si| M[Mecanico finaliza intervencion]
```
## Gestión diferenciada de equipos propios vs. contratistas
![](images/image_4.png)
Muestra cómo un mismo modelo de estados operacionales aplica a ambos tipos de equipo, diferenciado por las validaciones de vigencia documental que bloquean la transición a "Operativo" en el caso de contratistas.
```mermaid
flowchart TD
    A[Equipo ingresa a operacion] --> B{Propio o Contratista?}
    B -->|Propio| C[Aplica reglas estandar de mantenimiento interno]
    B -->|Contratista| D[Verificar prealificacion: licencias y seguros]
    D --> E{Documentacion vigente?}
    E -->|No| F[Bloquear transicion a Operativo]
    F --> G[Notificar a contratista para regularizar]
    G --> E
    E -->|Si| H[Habilitar ingreso y onboarding de sitio]
    C --> I[Maestro unico de equipo con flag responsable mantenimiento]
    H --> I
    I --> J[Equipo sigue el mismo modelo de estados operativo/taller/panne]
    J --> K[Monitoreo continuo de vencimientos documentales]
    K --> L{Vencimiento proximo?}
    L -->|Si| F
    L -->|No| J
```
## Evolución de ubicación: de registro manual a tracking automatizado
![](images/image_5.png)
Modela el evento de ubicación con metadato de fuente (manual, BLE, RTLS, GNSS) y nivel de confianza, permitiendo que coexistan múltiples fuentes en el mismo modelo de datos durante la migración gradual.
```mermaid
flowchart TD
    A[Evento de ubicacion generado] --> B{Fuente del dato}
    B -->|Manual| C[Despacho registra nivel/sector por radio]
    B -->|Beacon BLE| D[Tag activo lee beacon de referencia]
    B -->|RTLS/UWB| E[Motor de localizacion calcula posicion precisa]
    B -->|GNSS externo| F[Receptor GNSS reporta coordenadas]
    C --> G[Evento se guarda con metadato fuente y confianza]
    D --> G
    E --> G
    F --> G
    G --> H[Modelo de datos unico de ubicacion por equipo]
    H --> I{Nivel de confianza suficiente?}
    I -->|No| J[Marcar ubicacion como referencial]
    I -->|Si| K[Ubicacion disponible para despacho y mantenimiento]
    J --> K
    K --> L[Migracion gradual: mas equipos con tracking automatico]
```
## Interfaz de disponibilidad consumida por el motor de asignación de Nexo 360
![](images/image_6.png)
Detalla las validaciones antes de que un cambio de estado se considere "oficial", el cálculo separado de PA/MA, la evaluación de frescura del dato contra el SLA definido, y cómo el motor de asignación recibe o excluye equipos con dato estancado.
```mermaid
flowchart TD
    A[Cambio de estado o ubicacion capturado] --> B[Validaciones segun tipo de transicion]
    B --> C{Reduce disponibilidad?}
    C -->|Si| D[Se aplica de inmediato sin aprobacion]
    C -->|No, aumenta disponibilidad| E[Requiere confirmacion de mecanico/supervisor]
    E --> F{Confirmado?}
    F -->|No| G[Estado queda Propuesto, no oficial]
    F -->|Si| H[Estado pasa a Oficial]
    D --> H
    H --> I[Sistema calcula PA y MA por separado]
    I --> J[Sistema evalua antiguedad del dato vs SLA de frescura]
    J --> K{Dato dentro de SLA?}
    K -->|No| L[Marca equipo como Dato Estancado]
    K -->|Si| M[Publica disponibilidad confiable]
    L --> N[Motor Nexo 360 recibe alerta y decide usar o excluir equipo]
    M --> O[Motor Nexo 360 consume disponibilidad para programar guardia]
```
## Consideraciones para dimensionamiento técnico
Cada diagrama representa un subsistema con complejidad de desarrollo distinta que debe estimarse por separado:

- El flujo de transición de estado y la interfaz hacia Nexo 360 son el núcleo del módulo "fuente de verdad" — requieren máquina de estados con reglas de permisos por rol, timestamps de auditoría y cálculo en tiempo real de PA/MA.
- El flujo de orden de mantenimiento y backlog requiere motor de reglas de priorización configurable y trazabilidad completa de ciclo de vida (equivalente funcional a un CMMS).
- La integración con MM es la de mayor riesgo de integración externa, dado que depende de disponibilidad de APIs/BAPIs de SAP y de procesos de aprobación que viven parcialmente fuera del sistema (compras, almacén).
- El flujo de contratistas añade una capa de reglas de compliance documental con vencimientos y notificaciones, relativamente independiente del núcleo de disponibilidad.
- El flujo de ubicación es el de menor complejidad inicial (registro manual) pero su arquitectura de datos debe anticiparse desde el día uno para no requerir rediseño al incorporar tracking automatizado.