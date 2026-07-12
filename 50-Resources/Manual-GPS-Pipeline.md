# Manual — Proyecto GPS Pipeline

**Propósito:** Convenciones para el pipeline Flink/Kafka de posicionamiento GPS de flota en Quellaveco.
**Nota de proyecto:** `30-Projects/GPS-Pipeline/`
**Tag:** `#gps`

---

## Qué es este proyecto

Pipeline de streaming para procesar eventos GPS de la flota de Quellaveco (camiones, palas, equipos auxiliares). Stack: Kafka (topics, Kafka Connect), Apache Flink (jobs en Java/Python), PostgreSQL para persistencia, S3 para checkpointing.

---

## Estructura de notas en 30-Projects/GPS-Pipeline/

```
30-Projects/GPS-Pipeline/
  GPS-Pipeline.md            ← Nota principal
  Flink-Jobs/                ← Una nota por Flink job: propósito, inputs, outputs, config
  Kafka/                     ← Topics, schemas, particionamiento, retención
  Monitoreo/                 ← Métricas clave, alertas, SLAs de latencia
```

---

## Convenciones de nomenclatura

### Notas de Flink Jobs
```
job-gps-position-enricher.md
job-geofence-alert-detector.md
job-gps-deduplicator.md
```
Formato: `job-[nombre-del-job-en-kebab].md`

**Cada nota de job debe incluir:**
- Input topics y output topics
- State backend usado (RocksDB, in-memory)
- Frecuencia de checkpointing
- Paralelismo configurado
- Qué hace el Shadow Mode si está implementado

### Notas de Kafka topics
```
topic-gps-raw-positions.md
topic-gps-enriched-events.md
```
Formato: `topic-[nombre-del-topic].md`

---

## Convenciones Kafka

### Naming de topics
```
[dominio]-[entidad]-[estado]
```
Ejemplos:
- `gps-raw-positions` — posiciones crudas del GPS
- `gps-enriched-events` — posiciones enriquecidas con zona/bench
- `gps-alerts-geofence` — alertas de geofencing
- `fleet-equipment-status` — estado de equipos (compartido con DataTwin)

### Configuración estándar de topics GPS
| Parámetro | Valor | Justificación |
|-----------|-------|---------------|
| Particiones | 12 | Número de equipos activos típico en Quellaveco |
| Replication factor | 3 | Alta disponibilidad |
| Retención | 7 días | Reprocessing window para debugging |
| Cleanup policy | delete | No compactación en topics de posición |

---

## Convenciones Flink

### Checkpointing
- Intervalo estándar: **30 segundos**
- State backend: **RocksDB** (para jobs con state grande, e.g. deduplicación)
- Storage: **S3** — path: `s3://datatwin-checkpoints/flink/<job-name>/`
- Retention: 3 checkpoints

### Shadow Mode (validación paralela)
Cuando implementas un job nuevo que reemplaza lógica existente, usar Side Output para correr ambos en paralelo:

```
Input → [Nuevo job] → Output principal
                   → Side Output → topic-shadow-[nombre] → comparación
```

Documentar en la nota del job:
- Métricas de comparación (% de discrepancias)
- Threshold para considerar el nuevo job "listo para producción"
- Fecha estimada de apagado del job legacy

### Naming de Flink jobs
```
GpsPositionEnricher
GeofenceAlertDetector
GpsDeduplicator
```
Formato: PascalCase, verbo o nombre descriptivo. El nombre en el cluster debe coincidir con el nombre de la clase Java/módulo Python.

---

## Monitoreo y SLAs

| Métrica | SLA | Dónde monitorear |
|---------|-----|-----------------|
| Latencia end-to-end GPS → DataTwin | < 2 segundos | Flink UI / Grafana |
| Kafka consumer lag | < 1000 mensajes | Kafka UI |
| Checkpoint duration | < 10 segundos | Flink UI |
| Eventos GPS por minuto | Línea base: ~500/min | Grafana |

**Cuando la latencia Kafka > 500ms:**
1. Verificar consumer lag por partición
2. Revisar configuración de batch.size y linger.ms en producers
3. Verificar si el broker está bajo carga inusual
4. Crear tarea con tag `#blocked` en `Tareas activas` si no se puede resolver localmente

---

## Flujo para agregar un nuevo Flink job

1. **Crea nota** en `Flink-Jobs/job-[nombre].md` con: inputs, outputs, lógica de transformación, config
2. **Crea la tarea** en `## Tareas activas` de `GPS-Pipeline.md`
3. **Implementa localmente** con Flink mini-cluster de desarrollo
4. **Valida con Shadow Mode** si reemplaza lógica existente
5. **Documenta en la nota**: paralelismo final, checkpointing, métricas observadas
6. **Deploy a staging** → validar latencia y consumer lag
7. Marca la tarea como completada cuando esté en producción y estable por 48h

---

## Qué va en el vault vs en el repo

| Aquí (vault) | En el repo |
|-------------|-----------|
| Propósito y diseño de cada job | Código Flink |
| Justificación de configuración (por qué 12 particiones) | Config files |
| Log de issues de latencia y sus causas | Tests de integración |
| Métricas observadas durante validación | Scripts de deploy |

---

## Checklist para deploy de un Flink job a producción

- [ ] Job probado localmente contra data real (no solo generada)
- [ ] Shadow Mode ejecutado ≥48h sin discrepancias críticas
- [ ] Checkpointing configurado y probado (simular fallo y recovery)
- [ ] Nota del job actualizada con config final
- [ ] Alertas de latencia configuradas en Grafana
- [ ] Consumer lag validado post-deploy

---

*Ver también: [[Manual-Proyectos]] · [[Manual-DataTwin]]*
