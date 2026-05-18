# Manual — Proyecto GIS / Block Model

**Propósito:** Convenciones para trabajo PostGIS, modelado espacial y gestión del block model de Quellaveco.
**Kanban:** [[GIS-BlockModel-board]]
**Nota de proyecto:** `30-Projects/GIS-BlockModel/`
**Tag:** `#gis`

---

## Qué es este proyecto

Gestión y análisis del modelo de bloques del pit de Quellaveco usando PostGIS. Incluye: schema design, particionamiento, queries espaciales, integración con datos LiDAR/UAV, y soporte a modelos de planificación minera.

---

## Estructura de notas en 30-Projects/GIS-BlockModel/

```
30-Projects/GIS-BlockModel/
  GIS-BlockModel.md          ← Nota principal: objetivo, ADRs, riesgos
  DDL/                       ← Notas de cambios de schema (no el DDL en sí, que va en repo)
  Queries/                   ← Queries complejas documentadas con contexto
  Datos/                     ← Fuentes de datos, formatos, frecuencia de actualización
```

---

## Convenciones de nomenclatura

### Notas DDL (cambios de schema)
```
ddl-2026-05-18-particionamiento-block-model.md
ddl-2026-04-10-indice-gist-pit-boundary.md
```
Formato: `ddl-YYYY-MM-DD-descripcion.md`

**Cada nota DDL debe incluir:**
- El cambio en sí (qué tabla, qué columna, qué índice)
- La justificación (por qué se hizo este cambio)
- El impacto en performance esperado
- Si requiere migración de datos existentes
- Estado: `pendiente | en-progreso | aplicado-dev | aplicado-prod`

### Notas de queries
```
query-volumen-por-bench.md
query-interseccion-zona-activa.md
```
Formato: `query-descripcion.md`

---

## Flujo para cambios de schema (DDL)

1. **Crea una nota DDL** en `DDL/` antes de escribir el SQL
2. **Documenta el por qué** — el SQL lo leerá cualquiera, el contexto no
3. Crea una card en [[GIS-BlockModel-board]] en "En curso"
4. Aplica el cambio en **dev primero** y documenta el resultado de performance
5. Para cambios en prod: requiere autorización de Jaime (permisos de escritura)
6. Actualiza el estado en la nota DDL al final: `aplicado-prod`

---

## Convenciones PostGIS

### Sistemas de coordenadas
- **CRS estándar del proyecto:** WGS84 / UTM Zone 19S (EPSG:32719)
- Todos los datos de entrada deben transformarse a este CRS antes de insertar
- Siempre verificar con `ST_SRID()` antes de operaciones espaciales entre tablas

### Versionado del block model
El particionamiento por versión usa `LIST`:
```sql
PARTITION BY LIST (version_id)
```
Cada versión del modelo de bloques es una partición separada. Nunca actualices datos en una versión existente — crea una nueva versión.

### Índices espaciales
- Todo geometry column debe tener un índice GiST
- Naming convention: `idx_<tabla>_<columna>_gist`
- Ejemplo: `idx_block_model_geom_gist`

### Bounding box de Quellaveco (referencia rápida)
```
Longitud: ~-70.55 a ~-70.45
Latitud:  ~-16.95 a ~-16.85
UTM 19S:  aprox. 340000–350000 E, 8130000–8140000 N
```
Usar para filtros rápidos antes de ST_Intersects.

---

## Fuentes de datos espaciales

| Fuente | Formato | Frecuencia | Responsable de entrega |
|--------|---------|-----------|----------------------|
| Levantamiento UAV/LiDAR | LAS/LAZ | Trimestral o post-blast | Equipo surveying Quellaveco |
| Shapefile pit boundary | SHP | Por campaña de minado | Equipo surveying |
| Block model actualizado | CSV/formato propietario | Por planificación | Equipo planning |

**Cuando llegan datos nuevos:**
1. Crear nota en `Datos/` con: fecha de entrega, fuente, formato, CRS original, cobertura
2. Documentar el proceso de importación (comandos shp2pgsql, GDAL, etc.)
3. No sobreescribir versiones anteriores — crear nueva versión o nueva partición

---

## Qué va en el vault vs en el repo

| Aquí (vault) | En el repo |
|-------------|-----------|
| Justificación de cada cambio DDL | El SQL del cambio |
| Notas de análisis de performance | Scripts de benchmark |
| Fuentes de datos y provenance | Scripts de importación |
| Queries complejas con contexto | Queries como views o funciones |

---

## Checklist antes de aplicar un cambio en prod

- [ ] Aplicado y probado en dev
- [ ] Performance documentada (EXPLAIN ANALYZE)
- [ ] Backup o plan de rollback definido
- [ ] Autorización de Jaime para escritura en prod
- [ ] Nota DDL actualizada con estado `aplicado-prod`

---

*Ver también: [[Manual-Proyectos-Kanban]] · [[Manual-GPS-Pipeline]] · [[GIS-BlockModel-board]]*
