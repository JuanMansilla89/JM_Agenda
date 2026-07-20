## Recomendación ejecutiva

Para GEML/DataTwin plantearía una arquitectura **híbrida con entrenamiento desacoplado e inferencia predominantemente on-premise**:
- **Flink continúa como motor de procesamiento en streaming**, cálculo de variables operacionales y orquestación de eventos.
- Los modelos se entrenan en una zona con mayor capacidad computacional, que puede estar en nube o en un entorno corporativo central.
- El resultado del entrenamiento se empaqueta como un artefacto versionado e inmutable.
- El artefacto se transfiere al entorno minero mediante un proceso controlado, incluso manual.
- La inferencia se ejecuta localmente, cerca de Flink y de las fuentes OT.
- La nube no debería formar parte del camino crítico de inferencia, salvo para modelos excepcionalmente pesados y cuando exista conectividad confiable.

Esto evita que una pérdida de internet interrumpa alertas, predicciones o recomendaciones operacionales.

---

# 1. Arquitectura objetivo

```text
                    ZONA DE DESARROLLO / ENTRENAMIENTO
┌───────────────────────────────────────────────────────────────────┐
│ Git / Azure DevOps                                                │
│      │                                                            │
│      ▼                                                            │
│ Pipeline CI                                                       │
│ - pruebas                                                         │
│ - entrenamiento                                                   │
│ - validación                                                      │
│ - conversión ONNX                                                 │
│ - generación de imagen OCI                                        │
│      │                                                            │
│      ▼                                                            │
│ MLflow                                                            │
│ - experimentos                                                    │
│ - métricas                                                        │
│ - modelos                                                         │
│ - versiones                                                       │
│ - aprobación                                                      │
│      │                                                            │
│      ▼                                                            │
│ Release Bundle firmado                                            │
│ model.onnx + metadata + imagen + checksums + configuración         │
└───────────────────────────┬───────────────────────────────────────┘
                            │
                 Transferencia controlada
              VPN / DMZ / repositorio / medio manual
                            │
                            ▼
                         ON-PREMISE
┌───────────────────────────────────────────────────────────────────┐
│ Harbor o registro OCI interno                                     │
│ MLflow on-premise / registro operacional                          │
│ PostgreSQL                                                        │
│ Almacenamiento de artefactos                                      │
│                                                                   │
│ Fuentes OT → Flink → Feature Pipeline → Servicio de inferencia    │
│                                      │                            │
│                                      ▼                            │
│                              Predicción / Score                   │
│                                      │                            │
│                                      ▼                            │
│                   Motor de reglas y recomendaciones               │
│                                      │                            │
│                       Alertas / API / Gemelo Digital               │
│                                                                   │
│ Monitoreo: Prometheus + Grafana + Evidently                       │
└───────────────────────────────────────────────────────────────────┘
```

## Principio central
**Azure DevOps debería gestionar código, pipelines y releases, pero no debería ser el runtime del modelo.**
En una operación sin internet, el runtime debe quedar dentro de la infraestructura on-premise. La nube puede participar en:
- entrenamiento;
- pruebas;
- gestión del código;
- generación de artefactos;
- validación;
- aprobación de versiones.

Pero la predicción operacional debe continuar funcionando aunque Azure DevOps o internet no estén disponibles.

---

# 2. Separación de responsabilidades
## Apache Flink
Flink debería encargarse de:
- consumir señales OPC UA, PI, FMS, bases de datos y APIs internas;
- limpiar y normalizar señales;
- calcular ventanas temporales;
- generar features operacionales;
- detectar eventos que requieren inferencia;
- invocar el modelo;
- aplicar reglas simples posteriores;
- publicar resultados, alertas y recomendaciones.

No recomiendo convertir cada modelo en lógica interna de Flink. Eso genera fuerte acoplamiento entre:
- versión de Flink;
- librerías Python o Java;
- versión del modelo;
- dependencias;
- ciclo de despliegue.

La excepción serían modelos pequeños, estables y de baja complejidad que puedan ejecutarse mediante ONNX Runtime directamente dentro de un operador Java de Flink.

## Servicio de inferencia
El servicio de inferencia debe:
- cargar una versión específica del modelo;
- validar el esquema de entrada;
- ejecutar la predicción;    
- devolver score, confianza y metadata;
- registrar latencia, errores y versión;
- permitir rollback;
- exponer endpoints de salud;
- mantener trazabilidad.

## Motor de recomendaciones

La recomendación no debería salir directamente del modelo sin una capa de control.

La arquitectura debería separar:

```text
Predicción → Evaluación de restricciones → Recomendación → Validación operacional
```

Ejemplo:

```text
Modelo:
"Existe 82 % de probabilidad de sobreconsumo energético."

Reglas:
- No reducir velocidad si el tonelaje está por debajo del mínimo.
- No modificar setpoint si existe una alarma de seguridad.
- No recomendar valores fuera del rango autorizado.

Recomendación:
"Reducir el setpoint de velocidad entre 2 % y 3 % durante los próximos 15 minutos."

Explicación:
- carga alta;
- granulometría estable;
- presión dentro de rango;
- oportunidad estimada de ahorro: 4,2 %.
```

---

# 3. Flujo MLOps propuesto

## Etapa 1: preparación de datos
Flink procesa las señales y genera datasets consistentes:
- timestamp UTC;
- identificador de activo;
- features;
- variables objetivo;
- calidad de señal;
- versión de lógica de transformación.

Los datos históricos para entrenamiento deberían quedar en:
- PostgreSQL/TimescaleDB para volúmenes moderados;
- Parquet sobre almacenamiento de objetos o filesystem distribuido para grandes volúmenes.

Para entrenamiento masivo, es preferible leer archivos Parquet particionados que consultar millones de filas repetidamente desde TimescaleDB.

## Etapa 2: entrenamiento
El entrenamiento puede realizarse:
- en una estación central con GPU;
- en nube;
- en un clúster corporativo;
- temporalmente en Azure Machine Learning, si estuviera disponible;
- en servidores on-premise dedicados.

El pipeline debe registrar:

- dataset o rango temporal utilizado;
    
- commit del código;
    
- hiperparámetros;
    
- métricas;
    
- artefactos;
    
- dependencias;
    
- modelo resultante;
    
- firma del modelo;
    
- esquema de entrada y salida.
    

## Etapa 3: registro y validación

Recomiendo **MLflow** como componente central.

MLflow puede desplegarse de manera self-hosted y proporciona tracking de experimentos y registro de modelos. Su registro open source permite manejar versiones, tags, descripciones y estados o aliases de despliegue. ([MLflow AI Platform](https://mlflow.org/docs/latest/self-hosting/?utm_source=chatgpt.com "Self Hosting Overview | MLflow AI Platform"))

El flujo de estados puede ser:

```text
Development
   ↓
Validated
   ↓
Approved
   ↓
Production Candidate
   ↓
Production
   ↓
Archived
```

Cada modelo debe tener como mínimo:

- `model_name`;
    
- `model_version`;
    
- `process`;
    
- `asset_type`;
    
- `training_dataset`;
    
- `feature_schema_version`;
    
- `code_commit`;
    
- `framework`;
    
- `runtime`;
    
- `validation_metrics`;
    
- `approval`;
    
- `expiration_date`.
    

## Etapa 4: empaquetado

Cada release debería generar un paquete autocontenido:

```text
model-release/
├── model.onnx
├── model.yaml
├── input_schema.json
├── output_schema.json
├── thresholds.yaml
├── requirements.lock
├── docker-image.tar
├── validation-report.html
├── example-input.json
├── example-output.json
├── SHA256SUMS
└── signature.sig
```

La imagen y el modelo deben ser identificados por versión exacta:

```text
energy-optimizer:1.4.2
model-version: 17
feature-schema: 3.1
```

No debería utilizarse `latest` en producción.

## Etapa 5: transferencia a la mina

En conectividad restringida, el proceso puede ser deliberadamente semiautomático:

1. Se aprueba el modelo.
2. Azure DevOps genera el release bundle.
3. Se calculan hashes y firma.
4. El paquete se transfiere a una DMZ o medio autorizado.
    
5. Seguridad valida el paquete.
    
6. Se importa la imagen al registro interno.
    
7. Se registra la versión en MLflow on-premise.
    
8. Se despliega inicialmente en modo sombra.
    
9. Se valida.
    
10. Se promueve a producción.
    

Esta operación manual no elimina MLOps. MLOps no significa necesariamente despliegue completamente automatizado; significa que el proceso es **reproducible, versionado, validado, auditable y reversible**.

---

# 4. Opciones para ejecutar inferencia on-premise

## Opción A: modelo embebido en Flink

```text
Flink Operator → ONNX Runtime → Predicción
```

### Uso recomendado
- regresión;
- clasificación;
- XGBoost;
- Random Forest;
- modelos pequeños de PyTorch;
- redes neuronales moderadas;
- latencias muy bajas;
- alta frecuencia de inferencia.

### Ventajas
- mínima latencia;
- sin salto HTTP;
- despliegue compacto;
- menor infraestructura;
- alta disponibilidad ligada al job de Flink.

### Desventajas
- actualización del modelo más compleja;
- reinicio o actualización del job;
- riesgo de dependencias;
- modelo y procesamiento quedan acoplados;
- observabilidad menos independiente.

ONNX Runtime permite ejecutar modelos provenientes de PyTorch, TensorFlow/Keras, scikit-learn y otros frameworks, en CPU o aceleradores, y dispone de APIs para Java, Python, C++, C# y otros lenguajes. ([onnxruntime.ai](https://onnxruntime.ai/docs/?utm_source=chatgpt.com "ONNX Runtime | onnxruntime"))

**Aplicación en GEML:** excelente para modelos simples y críticos en tiempo real.

---

## Opción B: microservicio de inferencia

```text
Flink → REST/gRPC → BentoML/FastAPI + ONNX Runtime
```

### Uso recomendado

- mayoría de modelos de planta y mina;
    
- múltiples versiones;
    
- actualizaciones frecuentes;
    
- necesidad de rollback;
    
- escalamiento independiente;
    
- modelos Python.
    

### Ventajas

- desacoplamiento;
    
- ciclo de vida independiente;
    
- despliegue sencillo;
    
- fácil versionamiento;
    
- health checks;
    
- posibilidad de canary;
    
- mayor gobernanza.
    

### Desventajas

- añade latencia de red;
    
- requiere gestionar contenedores;
    
- debe definirse correctamente el timeout y fallback.
    

**BentoML** permite empaquetar código, dependencias, configuración y modelo como una unidad reproducible, y exponerlo mediante APIs. ([BentoML Documentation](https://docs.bentoml.com/en/latest/build-with-bentoml/services.html?utm_source=chatgpt.com "Create online API Services - BentoML"))

**Aplicación en GEML:** esta sería mi opción base.

---

## Opción C: plataforma de serving sobre Kubernetes

```text
Flink → KServe → Runtime ONNX / sklearn / XGBoost / PyTorch
```

### Uso recomendado

- decenas o cientos de modelos;
    
- múltiples operaciones mineras;
    
- GPU compartida;
    
- autoscaling;
    
- canary deployments;
    
- alta disponibilidad avanzada;
    
- equipos DevOps/MLOps maduros.
    

KServe estandariza el despliegue de inferencia sobre Kubernetes y gestiona networking, health checking, escalamiento y diferentes runtimes de modelos. También soporta despliegues on-premise. ([kserve.github.io](https://kserve.github.io/website/?utm_source=chatgpt.com "KServe - GitHub Pages"))

### Desventajas

- mayor complejidad operacional;
    
- requiere Kubernetes bien administrado;
    
- incrementa la curva de soporte;
    
- probablemente excesivo para una primera etapa.
    

**Aplicación en GEML:** objetivo de mediano plazo, no necesariamente punto de partida.

---

# 5. Stack open source recomendado

|Capacidad|Recomendación inicial|Alternativa escalable|
|---|---|---|
|Procesamiento streaming|Apache Flink|Apache Flink|
|Experiment tracking|MLflow|MLflow|
|Model registry|MLflow OSS|MLflow OSS|
|Metadata|PostgreSQL|PostgreSQL|
|Artefactos|NFS o almacenamiento S3 compatible|Almacenamiento de objetos|
|Formato de modelo|ONNX|ONNX / MLflow format|
|Runtime|ONNX Runtime|Triton / KServe|
|API de inferencia|BentoML o FastAPI|KServe|
|Contenedores|Docker/Podman|Kubernetes|
|Registro de imágenes|Harbor|Harbor|
|Monitoreo técnico|Prometheus + Grafana|Prometheus + Grafana|
|Drift y calidad|Evidently|Evidently + jobs programados|
|Orquestación training|Python + pipeline CI|Argo Workflows|
|Feature store|No inicialmente|Feast|
|CI/CD|Azure DevOps|Azure DevOps o GitLab CE|
|Secrets|archivos/variables protegidas|HashiCorp Vault|

Harbor es un registro open source para imágenes y artefactos, con políticas, control de acceso, escaneo y mecanismos de confianza sobre imágenes. ([goharbor.io](https://goharbor.io/?utm_source=chatgpt.com "Harbor"))

Evidently puede ejecutarse como librería Python o de manera self-hosted y permite monitorear drift de variables y predicciones, incluso cuando todavía no se dispone de la variable real para calcular el desempeño final. ([Documentation](https://docs.evidentlyai.com/metrics/preset_data_drift?utm_source=chatgpt.com "Data Drift - Documentation"))

---

# 6. ¿Necesita GEML un Feature Store?

No lo incorporaría en la primera versión.

Feast separa conceptualmente:

- un offline store para construir datasets históricos;
    
- un online store para servir features de baja latencia. ([docs.feast.dev](https://docs.feast.dev/?utm_source=chatgpt.com "Introduction | Feast: the Open Source Feature Store"))
    

Sin embargo, en su arquitectura Flink ya puede cumplir una parte importante de esa función:

- cálculo de ventanas;
    
- agregaciones;
    
- normalización;
    
- publicación de features actuales;
    
- persistencia en TimescaleDB.
    

Inicialmente utilizaría:

```text
Feature definitions en Git
        +
Flink para features online
        +
Parquet/TimescaleDB para features históricas
        +
versionado de feature_schema
```

Incorporaría Feast cuando exista alguno de estos escenarios:

- muchos modelos comparten las mismas variables;
    
- aparecen inconsistencias entre entrenamiento e inferencia;
    
- se necesitan features online reutilizables;
    
- existen más de 15–20 modelos productivos;
    
- distintos equipos desarrollan modelos simultáneamente;
    
- se necesita point-in-time correctness de manera sistemática.
    

---

# 7. Arquitectura para recomendaciones

Un sistema de recomendación industrial debería tener cuatro niveles.

## Nivel 1: estimación

El modelo calcula:

- probabilidad;
    
- valor futuro;
    
- anomalía;
    
- consumo esperado;
    
- recuperación esperada;
    
- riesgo operativo.
    

## Nivel 2: optimización

Un optimizador determina la mejor acción posible:

```text
maximizar recuperación
minimizar energía
minimizar variabilidad
sujeto a restricciones operacionales
```

Tecnologías posibles:

- SciPy Optimize;
    
- OR-Tools;
    
- Pyomo;
    
- reglas heurísticas;
    
- optimización bayesiana;
    
- control predictivo, cuando corresponda.
    

## Nivel 3: reglas de seguridad y negocio

Antes de publicar la recomendación:

- validar rangos;
    
- validar estado del equipo;
    
- excluir instrumentos con mala calidad;
    
- comprobar restricciones de seguridad;
    
- aplicar límites de cambio;
    
- evitar recomendaciones contradictorias;
    
- verificar vigencia temporal.
    

## Nivel 4: presentación y feedback

El gemelo presenta:

- recomendación;
    
- impacto estimado;
    
- nivel de confianza;
    
- variables explicativas;
    
- vigencia;
    
- modelo utilizado;
    
- opción aceptar/rechazar;
    
- razón de rechazo.
    

Ese feedback debe regresar al sistema:

```text
recommendation_generated
recommendation_accepted
recommendation_rejected
recommendation_executed
observed_result
```

Con ello se puede medir el verdadero valor del modelo, no solamente su precisión matemática.

---

# 8. Modos de ejecución recomendados

Cada modelo debería declarar un modo operacional.

## Tiempo real síncrono

Flink espera la respuesta.

```text
Evento → Inferencia → Resultado → Alerta
```

Uso:

- riesgo inmediato;
    
- anomalías críticas;
    
- clasificación de estados;
    
- predicciones con respuesta inferior a segundos.
    

Debe existir un timeout estricto y fallback.

## Tiempo real asíncrono

Flink publica una solicitud y continúa.

```text
Flink → inference_request
Servicio → inference_result
Flink consume resultado
```

Uso:

- recomendaciones;
    
- modelos algo más lentos;
    
- procesos donde 5–30 segundos son aceptables.
    

Es más resiliente y desacoplado.

## Batch o microbatch

```text
Cada 5/15/30 minutos → dataset → inferencia → resultados
```

Uso:

- optimización energética;
    
- recuperación metalúrgica;
    
- mantenimiento predictivo;
    
- consumo de bolas;
    
- pronóstico de granulometría;
    
- evaluación de estabilidad.
    

Para la mayoría de recomendaciones de planta, este modo probablemente sea suficiente.

---

# 9. Manejo de modelos complejos en nube

No establecería la regla:

> “Si el modelo es complejo, la inferencia debe estar en la nube”.

La complejidad de entrenamiento no implica necesariamente complejidad de inferencia.

Un modelo puede requerir:

- varias GPU;
    
- días de entrenamiento;
    
- millones de registros;
    

y, una vez entrenado, ejecutar la inferencia en CPU en pocos milisegundos.

La decisión debe tomarse con base en:

|Variable|Evaluación|
|---|---|
|Tamaño del artefacto|MB o GB|
|Memoria requerida|RAM/VRAM|
|Latencia|milisegundos o segundos|
|Frecuencia|inferencias por segundo|
|Hardware|CPU/GPU|
|Disponibilidad requerida|99 %, 99,9 %|
|Dependencia de internet|permitida o no|
|Criticidad|informativa, operacional, seguridad|
|Sensibilidad de datos|OT, proceso, producción|
|Costo de nube|transferencia y cómputo|

Para una operación minera con baja conectividad:

- **entrenamiento pesado:** nube o centro corporativo;
    
- **inferencia moderada:** on-premise;
    
- **inferencia extremadamente pesada:** servidor GPU on-premise antes que nube, si el resultado es operacionalmente crítico;
    
- **nube:** únicamente cuando la latencia y disponibilidad no sean críticas.
    

---

# 10. Despliegue seguro sin internet

Propongo un mecanismo denominado **Model Release Bundle**.

## Controles mínimos

1. Artefacto versionado.
    
2. Hash SHA-256.
    
3. Firma digital.
    
4. SBOM de la imagen.
    
5. Escaneo de vulnerabilidades.
    
6. Dependencias bloqueadas.
    
7. Dataset de prueba.
    
8. resultado esperado.
    
9. reporte de validación.
    
10. aprobación formal.
    
11. rollback documentado.
    
12. registro de quién importó el artefacto.
    

## Importación

```bash
podman load -i energy-model-1.4.2.tar
```

Luego:

```bash
podman tag energy-model:1.4.2 harbor.interno/ml/energy-model:1.4.2
podman push harbor.interno/ml/energy-model:1.4.2
```

El despliegue on-premise nunca debería instalar dependencias desde internet. Las imágenes deben llegar completamente construidas, probadas y escaneadas.

---

# 11. Modelo de operación por cada modelo

Cada modelo debería tener una ficha operacional:

```yaml
model:
  name: sag_energy_optimizer
  version: 1.4.2
  process: concentradora
  asset: sag_mill
  owner: analytics_team
  runtime: onnxruntime
  deployment_mode: asynchronous
  refresh_frequency: 5m

inputs:
  schema_version: 3.1
  max_data_age_seconds: 120
  required_signal_quality: GOOD

inference:
  timeout_ms: 2000
  cpu: "2"
  memory: "4Gi"
  fallback: rules_engine

monitoring:
  drift_window: 7d
  performance_metric: mae
  warning_threshold: 0.12
  critical_threshold: 0.20

governance:
  approved_by: model_committee
  valid_until: 2027-01-31
  rollback_version: 1.3.8
```

Esto permite que cada modelo tenga su propio ciclo de vida sin alterar la arquitectura general del gemelo.

---

# 12. Roadmap recomendado

## Fase 1: arquitectura mínima sostenible

Implementaría:

- MLflow;
    
- PostgreSQL;
    
- almacenamiento local/NFS;
    
- ONNX;
    
- ONNX Runtime;
    
- BentoML o FastAPI;
    
- Docker/Podman;
    
- Prometheus;
    
- Grafana;
    
- integración Flink vía REST o gRPC;
    
- despliegue manual versionado.
    

Esta fase puede operar sin Kubernetes.

## Fase 2: gobierno y observabilidad

Agregar:

- Harbor;
    
- Evidently;
    
- firma de artefactos;
    
- dashboards de modelos;
    
- modo sombra;
    
- canary manual;
    
- feedback de recomendaciones;
    
- catálogo de modelos.
    

## Fase 3: escalamiento

Cuando aumente el número de modelos:

- Kubernetes;
    
- KServe;
    
- Argo Workflows;
    
- GitOps;
    
- Feast;
    
- autoscaling;
    
- despliegue canary automatizado;
    
- GPU pool.
    

Argo Workflows tiene sentido solamente si ya existe Kubernetes, dado que opera como un motor de workflows nativo de contenedores mediante recursos de Kubernetes. ([Argo Workflows](https://argo-workflows.readthedocs.io/en/latest/?utm_source=chatgpt.com "Argo Workflows - The workflow engine for Kubernetes"))

---

# Decisión recomendada para GEML

La configuración que considero más equilibrada es:

```text
ENTRENAMIENTO
Azure DevOps
+ Python
+ MLflow
+ almacenamiento histórico Parquet
+ recursos de cómputo cloud o centrales

EMPAQUETADO
ONNX
+ BentoML
+ imagen OCI
+ bundle firmado

TRANSFERENCIA
Proceso manual o semiautomático
+ DMZ
+ validación de hashes

ON-PREMISE
Flink
+ TimescaleDB/PostgreSQL
+ MLflow
+ Harbor
+ BentoML/ONNX Runtime
+ Prometheus/Grafana
+ Evidently

RECOMENDACIONES
Modelo predictivo
+ optimizador
+ motor de restricciones
+ explicación
+ feedback operacional
```

No empezaría con KServe, Feast ni una plataforma Kubernetes completa. Comenzaría con **MLflow + ONNX Runtime + BentoML + PostgreSQL + Flink**, porque cubre el ciclo MLOps fundamental, mantiene bajo el costo operacional, funciona sin internet y deja un camino claro de evolución.