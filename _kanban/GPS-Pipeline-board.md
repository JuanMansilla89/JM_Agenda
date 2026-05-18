---
kanban-plugin: board
---

## Backlog

- [ ] Diseñar esquema de alertas geofence por zona de pit
- [ ] Implementar deduplicación GPS por vehicle_id + timestamp window
- [ ] Dashboard Grafana para latencia end-to-end GPS → DataTwin

## En curso

- [ ] Implementar Shadow Mode Flink Side Output para validación paralela #gps 🔺
- [ ] Configurar Flink checkpointing en S3 (intervalo 30s) #gps ⏫

## En revisión

- [ ] Revisar lógica de smoothing GPS (Kalman filter vs moving average) #gps
- [ ] PR: Flink job GpsPositionEnricher con lookup de zona #gps

## Bloqueado

- [ ] Latencia Kafka broker > 500ms en horas pico — investigar config #blocked #gps
- [ ] Acceso métricas Flink UI en ambiente producción #blocked #gps

## Done

- [x] Setup Flink cluster local para desarrollo
- [x] Kafka topic gps-raw-positions con 12 particiones
- [x] Primer Flink job: filtrar coordenadas fuera de bounding box Quellaveco

%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false]}
```
%%
