---
kanban-plugin: board
---

## Backlog

- [ ] Diseñar diagrama C4 nivel 2 para módulo de ingesta
- [ ] Documentar contrato de datos entre MineStar y DataTwin
- [ ] Revisar SLA de latencia para alertas de flota

## En curso

- [ ] Validar arquitectura Mermaid con Duane #datatwin ⏫
- [ ] Implementar endpoint FastAPI /fleet/status con paginación #datatwin 🔼

## En revisión

- [ ] PR: Pipeline dbt modelos staging camiones #datatwin
- [ ] Revisión ADR-003: estrategia de particionamiento Kafka topics #datatwin

## Bloqueado

- [ ] Acceso a ambiente staging MineStar — esperando credenciales Jaime #blocked #datatwin
- [ ] Definir esquema Avro para eventos GPS — pendiente reunión Duane #blocked #datatwin

## Done

- [x] Setup inicial repositorio DataTwin-core
- [x] Modelo ER entidades flota (camiones, palas, equipos)
- [x] Configurar Kafka Connect JDBC source para tabla positions

%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false]}
```
%%
