---
tipo: arquitectura
proyecto: Prediccion-de-mineral
actualizado: 2026-05-28
---

# Contrato de Datos — Ore Projector

Define los **4 inputs** que el sistema requiere, su formato exacto, y cómo mapean desde los datos reales de Las Bambas.

---

## Visión general del flujo de datos

```
Datos reales Las Bambas          Transformación              Ore Projector (app)
─────────────────────────        ──────────────              ───────────────────
Data_BH/collar.csv          ──►  normalizar coords    ──►   INPUT 1: Modelo de bloques
Data_BH/assay.csv           ──►  agregar por bloque   ──►   INPUT 1: Modelo de bloques
Data_BH/litho.csv           ──►  mapear litologías    ──►   INPUT 1: Modelo de bloques

Data_BH/collar.csv          ──►  1 fila = 1 pozo      ──►   INPUT 2: Sondajes producción
Data_BH/assay.csv           ──►

Data_drill/collar.csv       ──►  1 intervalo = 1 fila ──►   INPUT 3: Sondajes diamantina
Data_drill/assay.csv        ──►

area_proyeccion.dxf         ──►  extraer vértices     ──►   INPUT 4: Polígonos de contorno
```

---

## INPUT 1 — Modelo de bloques (`bloque-modelo.csv`)

El modelo de bloques es la **grilla 3D principal** del visor. Cada fila es un bloque con su posición, ley de CU y clasificación inicial.

### Esquema

| Campo | Tipo | Descripción | Fuente real |
|-------|------|-------------|-------------|
| `block_id` | string | Identificador único del bloque | generado: `{BANCO}_{TAJO}_{MALLA}` |
| `east` | float | Coordenada Este UTM (m) | `collar.EAST` |
| `north` | float | Coordenada Norte UTM (m) | `collar.NORTH` |
| `rl` | float | Cota del bloque (m.s.n.m.) | `collar.RL` |
| `banco` | int | Número de banco (nivel) | `collar.BANCO` |
| `cu_pct` | float | Ley de cobre (%) | `assay.CU` |
| `mo_ppm` | float | Ley de molibdeno (ppm) | `assay.MO` |
| `classification` | string | `mineral` / `desmonte` / `sin_clasificar` | derivado de cutoff CU |
| `lithology` | string | Código de litología | `litho.LITH1` |
| `minzone` | string | Zona mineralizada | `litho.MINZONE` |
| `has_data` | bool | `true` si el banco tiene datos reales | `true` si banco fuente |

### Reglas de transformación desde datos reales

1. **Un bloque = un BH** (los BH en Las Bambas ya son la grilla de bloques)
2. **Coordenadas**: mantener UTM — la app debe normalizar a coordenadas de escena con un origen (centroide del área)
3. **Clasificación inicial**: `mineral` si `CU >= cutoff`, `desmonte` si `CU < cutoff`, `sin_clasificar` si no hay assay
4. **Bancos con datos reales**: los que tienen assay (pct_cu > 50% de pozos con datos)
5. **Bancos proyectados**: `has_data = false`, `classification = 'sin_clasificar'`

### Mockup
Ver: `mockups/bloque-modelo.csv`

---

## INPUT 2 — Sondajes de producción (`sondajes-produccion.csv`)

Sondajes blast hole (BH) — pozos verticales cortos de la campaña activa.

### Esquema

| Campo | Tipo | Descripción | Fuente real |
|-------|------|-------------|-------------|
| `hole_id` | string | ID del pozo | `collar.HOLEID` |
| `east` | float | Este collar (m) | `collar.EAST` |
| `north` | float | Norte collar (m) | `collar.NORTH` |
| `rl` | float | Cota boca pozo (m.s.n.m.) | `collar.RL` |
| `total_depth` | float | Profundidad total (m) | `collar.EOH` |
| `banco` | int | Banco al que pertenece | `collar.BANCO` |
| `tajo` | int | Tajo | `collar.TAJO` |
| `malla` | int | Número de malla | `collar.MALLA` |
| `cu_pct` | float | Ley CU en el intervalo completo (%) | `assay.CU` |
| `mo_ppm` | float | Ley MO (ppm) | `assay.MO` |
| `au_ppm` | float | Ley AU (ppm) | `assay.AU` |
| `lithology` | string | Litología principal | `litho.LITH1` |
| `minzone` | string | Zona mineralizada | `litho.MINZONE` |
| `hardness` | int | Dureza (1-5) | `litho.HARDNESS` |

### Notas
- Los BH de Las Bambas son pozos de un **único intervalo** (from=0, to=EOH)
- La app los muestra como cilindros en el visor 3D
- Solo se cargan los BH del banco activo (banco fuente)

### Mockup
Ver: `mockups/sondajes-produccion.csv`

---

## INPUT 3 — Sondajes de diamantina (`sondajes-diamantina.csv`)

Sondajes históricos de exploración — pozos profundos con intervalos de from-to.

### Esquema

| Campo | Tipo | Descripción | Fuente real |
|-------|------|-------------|-------------|
| `hole_id` | string | ID del pozo | `collar.HOLEID` |
| `east` | float | Este collar (m) | `collar.EAST` |
| `north` | float | Norte collar (m) | `collar.NORTH` |
| `rl` | float | Cota boca pozo (m.s.n.m.) | `collar.RL` |
| `total_depth` | float | Profundidad total (m) | `collar.TOTALD` |
| `from_m` | float | Inicio del intervalo (m) | `assay.FROM` |
| `to_m` | float | Fin del intervalo (m) | `assay.TO` |
| `cu_pct` | float | Ley CU en el intervalo (%) | `assay.CU` |
| `mo_ppm` | float | Ley MO (ppm) | `assay.MO` |
| `au_ppm` | float | Ley AU (ppm) | `assay.AU` |
| `lithology` | string | Litología del intervalo | `lith.LITH2` |
| `oxdom` | string | Zona de oxidación | `lith.OXDOM` |

### Notas
- Desnormalizados: **1 fila = 1 intervalo** (un pozo tiene muchas filas)
- La app traza el perfil vertical del pozo en el visor 3D
- Se usan como referencia de continuidad geológica hacia profundidad

### Mockup
Ver: `mockups/sondajes-diamantina.csv`

---

## INPUT 4 — Polígonos de contorno (`poligonos-contorno.json`)

Polígonos que delimitan las zonas mineral/desmonte por banco.

### Esquema (GeoJSON simplificado)

```json
{
  "polygons": [
    {
      "id": "string",
      "label": "string",
      "kind": "mineral | desmonte",
      "banco": 4465,
      "version": 1,
      "points": [[este1, norte1], [este2, norte2], ...]
    }
  ]
}
```

### Fuente real
- `area_proyeccion.dxf` → extraer entidades `LWPOLYLINE` / `POLYLINE`
- Cada polígono debe tener atributo `kind` y `banco` (puede venir de la layer DXF)

### Notas
- Los puntos son coordenadas UTM (Este, Norte)
- El polígono debe ser cerrado: `first_point == last_point`
- La app los convierte a coordenadas de escena usando el mismo origen que el modelo de bloques

### Mockup
Ver: `mockups/poligonos-contorno.json`

---

## Coordenadas — normalización UTM → Escena

El visor 3D usa coordenadas de escena centradas en (0,0,0). La transformación es:

```
x_escena = (EAST  - EAST_origen)  / escala
y_escena = (NORTH - NORTH_origen) / escala
z_escena = (RL    - RL_origen)    / escala
```

**Parámetros sugeridos para Las Bambas (zona demo):**
| Parámetro | Valor |
|-----------|-------|
| `EAST_origen` | `786500` (centroide aprox.) |
| `NORTH_origen` | `8443800` (centroide aprox.) |
| `RL_origen` | `4450` (banco más bajo) |
| `escala` | `10` (10m reales = 1 unidad de escena) |

---

## Tipos TypeScript actuales vs campos requeridos

| App type | Campo actual | Campo real Las Bambas |
|----------|-------------|----------------------|
| `Block.x` | coordenada escena | `(EAST - origen) / escala` |
| `Block.y` | coordenada escena | `(RL - origen) / escala` |
| `Block.z` | coordenada escena | `(NORTH - origen) / escala` |
| `Block.level` | 1-4 | índice del banco en lista ordenada |
| `Block.grade` | CU en escala app | `CU_pct` directo |
| `Block.lithology` | código litología | `LITH1` o `MINZONE` |
| `Drillhole.type` | `'production'` | BH → `'production'` |
| `Drillhole.type` | `'diamond'` | diamantina → `'diamond'` |
| `BoundaryPoly.points` | `[x,y][]` escena | `[(EAST-origen)/escala, (NORTH-origen)/escala]` |

---

## Pendientes de definir con Las Bambas

- [ ] Cutoff de CU para clasificación mineral/desmonte
- [ ] Qué bancos son el "banco fuente" vs proyectados en cada campaña
- [ ] Layer names en el DXF que distinguen mineral vs desmonte
- [ ] Si la grilla de bloques es exactamente la grilla de BH o una grilla independiente
