---
kanban-plugin: board
---

## Backlog

- [ ] Integrar datos LiDAR con modelo de bloques PostGIS
- [ ] Crear índice espacial GiST en tabla block_model
- [ ] Script de validación topológica de polígonos de pit

## En curso

- [ ] DDL particionamiento LIST por versión en tabla block_model #gis ⏫
- [ ] Optimizar query ST_Intersects para área pit activa (~2M registros) #gis 🔼

## En revisión

- [ ] Revisar migración PostGIS 3.3 → 3.4 en ambiente dev #gis
- [ ] PR: función PL/pgSQL calcular volumen por bench #gis

## Bloqueado

- [ ] Datos topo actualizados del pit — pendiente levantamiento UAV #blocked #gis
- [ ] Permisos escritura en schema prod PostGIS #blocked #gis

## Done

- [x] Schema inicial PostGIS: tablas pit_boundary, bench, block_model
- [x] Importar shapefile pit Quellaveco Q4-2025
- [x] Validar extensión PostGIS activa en RDS

%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false]}
```
%%
