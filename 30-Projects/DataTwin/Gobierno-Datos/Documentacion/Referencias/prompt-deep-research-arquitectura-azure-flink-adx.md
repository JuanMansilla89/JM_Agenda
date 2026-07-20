---
tipo: referencia
tema: prompt-deep-research
proyecto: Gobierno-Datos
fecha: 2026-07-17
tags: [datatwin, gobierno-datos, arquitectura, azure, flink, adx, prompt-ia]
---

# Prompt — Deep Research: Arquitectura de ejecución híbrida para DataTwin sobre Azure (Flink + ADX)

> Construido sobre las decisiones de arquitectura híbrida (DBT/microbatch + Data Capture/CDC) que quedaron cerradas en la reunión del 2026-07-17 — ver [[2026-07-17-reunion-gobierno-datos-arquitectura]] y la tabla de Decisiones clave en [[Gobierno-Datos]]. El objetivo es aterrizar esa dirección en un stack concreto sobre Microsoft Azure, tomando a Flink (ya usado hoy para el pipeline GPS) como motor base y evaluando específicamente el rol de Azure Data Explorer (ADX).

## Prompt

```
Contexto:

ASTAY Systems opera DataTwin, una plataforma de gemelo digital para operaciones
mineras (tajo abierto y subterráneas). Hoy usa Apache Flink como motor de
procesamiento en tiempo real para el pipeline de posicionamiento GPS (Kafka →
Flink), y está formalizando una arquitectura de datos en capas para el resto de
fuentes (Mine Metrics / MyMetrics, Forecasting):

  espejo (raw, 1:1 con la fuente) → staging (mapeo a un modelo canónico/CDM) →
  Marts (reglas de negocio / métricas) → Serving (vistas de consumo)

Ya se decidió que la arquitectura debe ser HÍBRIDA:
- DBT/microbatch para la mayoría de fuentes SQL (Dispatch / sistemas de gestión
  de flota, SQL Server o PostgreSQL en distintas versiones según cliente,
  ej. v11 a v18), con delay aceptable de minutos (3-7 min según el cliente).
- Data Capture / CDC para fuentes de alta frecuencia, principalmente GPS
  (actualización cada 5-30 segundos en origen), porque DBT no es viable para
  tiempo real y consultar (polling) constante consume más recursos que CDC.

Restricciones de negocio que la arquitectura debe respetar:
- Nunca impactar las bases de producción del cliente (antecedente: caídas de
  servidor por sobrecarga en un cliente minero).
- Debe ser multi-fuente / multi-tenant: cada mina/cliente tiene su propio
  proveedor de sistema de gestión de flota, versión de base de datos y método
  de acceso (BD directa, WebSocket API, webhook). Incorporar una fuente nueva
  debe ser rápido (meta interna: días, no meses) y no debe requerir tocar Marts
  ni Serving, solo el mapeo de staging.
- Calidad de datos GPS es baja en la mayoría de los casos y requiere curado
  antes de correr algoritmos adicionales (ej. análisis de velocidad).
- Empresa de servicios con recursos limitados: la solución debe ser
  operable y costeable para un producto que se vende a múltiples clientes
  mineros, no una plataforma de un solo tenant con presupuesto ilimitado.

Objetivo de esta investigación:

Diseñar y fundamentar una arquitectura de ejecución para DataTwin sobre
Microsoft Azure, que tome a Flink como motor base de streaming/CDC y evalúe
específicamente el rol de Azure Data Explorer (ADX/Kusto) dentro de esa
arquitectura híbrida. Necesito que la investigación responda, con fuentes y
comparaciones concretas:

1. Integración de Apache Flink en Azure: ¿cuáles son las opciones reales para
   correr Flink en Azure hoy (HDInsight, Azure Databricks, AKS self-managed,
   Confluent Cloud sobre Azure, u otras), con sus tradeoffs de costo,
   operación y madurez? ¿Cuándo tendría sentido reemplazar/complementar Flink
   con servicios nativos de Azure (Stream Analytics, Azure Functions con
   Event Hubs triggers) para partes específicas del pipeline?

2. Rol de Azure Data Explorer (ADX) en esta arquitectura: ¿qué tan bien encaja
   ADX como capa de "espejo"/serving para datos de alta frecuencia y series de
   tiempo (GPS, tags/señales de planta, telemetría)? ¿Cómo se compara con
   alternativas (ADLS Gen2 + Delta/Parquet, Azure SQL, Cosmos DB) para este
   caso de uso específico (ingestión CDC, consultas casi en tiempo real,
   retención de historiales cortos vs. largos)? ¿Cómo se conecta Flink a ADX
   (sink nativo, Event Hubs como intermediario, Kusto ingestion connectors)?

3. CDC multi-fuente heterogénea en Azure: opciones concretas para capturar
   cambios (insert/update/delete) desde SQL Server y múltiples versiones de
   PostgreSQL (v11 a v18) sin tocar las bases de producción del cliente —
   comparar Azure Data Factory CDC, Debezium (self-managed o vía Azure Event
   Hubs/Kafka Connect), CDC nativo de SQL Server, y logical replication de
   PostgreSQL — con foco en qué tan bien soportan versiones antiguas de
   Postgres y bajo impacto en el origen.

4. Diseño de la capa "espejo" multi-tenant en Azure: comparar un esquema
   único multi-fuente vs. un esquema/base por fuente (la pregunta abierta que
   quedó sin resolver en el equipo), evaluando ADLS Gen2, Azure SQL Managed
   Instance, y ADX como opciones de almacenamiento del espejo, con criterios
   de aislamiento entre clientes, costo de escalar a un cliente nuevo, y
   facilidad de mantenimiento.

5. Dónde corre DBT en esta arquitectura: comparar DBT contra Microsoft
   Fabric/Synapse Warehouse, Azure Databricks, y el adaptador dbt-kusto (DBT
   sobre ADX/KQL) — ¿conviene un solo motor para staging/Marts, o dividir por
   tipo de dato (relacional en Synapse/Databricks, series de tiempo en ADX)?

6. Propuesta de arquitectura de referencia (estilo Lambda o Kappa) que una
   todo lo anterior: ingesta (Event Hubs/IoT Hub/CDC connectors) → Flink
   (streaming, curado de GPS, cálculos de velocidad) → ADX (capa caliente de
   series de tiempo) + ADLS/Synapse vía DBT (capa fría/batch) → capa de
   Serving unificada para consumo (Power BI, APIs del gemelo). Que la
   propuesta respete explícitamente las capas ya definidas (espejo → staging
   → CDM → Marts → Serving).

7. Costos y operación: modelo de pricing de ADX (por clúster) vs. alternativas
   por consumo, costo aproximado de correr Flink gestionado vs. self-managed
   en Azure, y qué tan bien escala esta arquitectura para incorporar clientes
   nuevos rápidamente sin rediseñar cada vez (próximo caso conocido: cliente
   con Dispatch vía WebSocket API + base de datos).

8. Casos de referencia / arquitecturas similares: ejemplos documentados
   (whitepapers de Microsoft, casos de industria minera/IoT industrial, blogs
   técnicos) que combinen Flink + Azure Data Explorer + Data Lake en
   arquitecturas híbridas batch/streaming, y qué problemas reportan haber
   encontrado.

Formato de entrega esperado:
- Tablas comparativas por cada decisión (opción vs. opción, con columnas de
  costo, latencia, madurez, esfuerzo operativo).
- Una arquitectura de referencia recomendada, descrita por capas (espejo,
  staging, CDM, Marts, Serving) con los servicios de Azure sugeridos en cada
  una y por qué.
- Riesgos u objeciones conocidas de usar ADX específicamente para este caso
  (ej. límites de PostgreSQL antiguo, costo de clústers pequeños, curva de
  aprendizaje de KQL para el equipo).
- Fuentes citadas (documentación oficial de Azure, papers, casos de uso
  reales) para cada recomendación.
```

## Notas

- El prompt asume que Flink ya es la elección correcta (se usa hoy para GPS) y enfoca la investigación en cómo encaja ADX en la mezcla, no en cuestionar Flink desde cero. Si más adelante se quiere una comparación abierta (Flink vs. alternativas nativas de Azure desde cero), ajustar el punto 1.
- El diseño único vs. por-fuente del "espejo" sigue siendo la pregunta abierta del equipo (Wilber/Pablo/José) — este research puede informar esa decisión pero no la reemplaza.
