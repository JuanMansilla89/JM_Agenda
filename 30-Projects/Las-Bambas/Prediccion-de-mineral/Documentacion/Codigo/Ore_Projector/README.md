# Ore Projector — Visor 3D de Modelo de Bloques

Aplicación web para visualizar y editar el modelo de bloques de Las Bambas (Zona Chalcobamba, Tajo 2 · Bancos 4480–4435). Permite cargar datos de sondajes, polígonos de límite mineral/estéril, correr una proyección automática hacia bancos más profundos y reclasificar bloques manualmente.

---

## Levantar el proyecto

### Requisitos

- Node.js ≥ 18 (o Bun ≥ 1.0)
- npm (incluido con Node) o bun

### Instalación y arranque

```bash
# Clonar / posicionarse en el directorio del proyecto
cd <ruta-al-repo>

# Instalar dependencias
npm install
# o con bun:
bun install

# Levantar en modo desarrollo
npm run dev
# o:
bun dev
```

La app queda disponible en **http://localhost:5173**

### Otros comandos

| Comando | Descripción |
|---|---|
| `npm run build` | Build de producción en `/dist` |
| `npm run preview` | Previsualizar el build de producción |
| `npm run test` | Correr tests unitarios (Vitest) |
| `npm run lint` | Chequeo ESLint |

---

## Cómo funciona

### Vista general

La app sigue un **flujo de trabajo en pasos** que se maneja desde el panel lateral izquierdo. Cada paso carga una capa de datos sobre el visor 3D central.

```
Cargar modelo → Sondajes prod. → Sondajes diamantina → Límites → Histórico → Proyección → Edición → Exportar
```

### Los datos

El dataset de demostración está en `src/data/lasBambasDemo.ts` y contiene datos reales de Las Bambas:

- **Sistema de coordenadas:** E 786650±60 m, N 8443900±60 m · escala 5 m/unidad
- **Bancos:**
  - L1 = 4480 m (real, alta confianza)
  - L2 = 4465 m (real, confianza media)
  - L3 = 4450 m (real, baja confianza)
  - L4 = 4435 m (proyectado)
- **Cutoff CuT:** 0.30 % para clasificar mineral
- **Litologías:** OX (Óxido), MX (Mixto), SU (Sulfuro), BX (Brecha), ES (Estéril)

### Estructura de un bloque

Cada bloque tiene: coordenadas (x, y, z), nivel de banco (1–4), `classification` (mineral / waste / unclassified), ley de cobre (`grade`), tonelaje, litología y nivel de confianza.

### Flujo paso a paso

1. **Cargar modelo de bloques** — Se cargan todos los bloques del banco 1 al 4. Los bancos L2–L4 aparecen en gris (sin clasificar) hasta correr la proyección.

2. **Cargar sondajes de producción** — Sondajes cortos (profundidad ~3 m) distribuidos en malla triangular, muestran ley por intervalo.

3. **Cargar sondajes de diamantina** — Sondajes profundos (~14–20 m), 7 pozos en posiciones estratégicas.

4. **Cargar límites** — Se cargan los polígonos que delimitan zonas de mineral y estéril sobre el banco activo.

5. **Cargar histórico** — Activa datos históricos de referencia.

6. **Correr proyección** — Propaga la clasificación original (`originalClassification`) de cada bloque hacia los bancos más profundos, asignando nivel de confianza por profundidad (medio/bajo). Los bloques del banco L1 no cambian.

7. **Editar** — Modo clasificación manual: se pueden seleccionar bloques individualmente o en grupo y asignarles mineral/estéril/sin-clasificar. Cada cambio queda registrado en el log de cambios con timestamp y usuario.

8. **Exportar** — Último paso del flujo (exportación de resultados).

### Herramientas del visor

- **Vista 3D / Top / Side** — cambiar perspectiva de la cámara.
- **Navegación de bancos** — subir/bajar entre L1–L4 desde los controles de la derecha.
- **Polígonos de límite** — dibujar nuevos polígonos, editar vértices, reclasificar mineral↔estéril, snap automático a vértices cercanos.
- **Filtros** — filtrar bloques por clasificación (mineral/estéril/todos) o por origen (real/proyectado/todos).
- **Detalle de bloque** — clic en un bloque abre el panel derecho con sus atributos completos.
- **Leyenda de litologías** — toggle de visibilidad y highlight por tipo.
- **HUD de coordenadas** — muestra la posición del cursor en unidades de escena.

---

## Estructura del proyecto

```
src/
├── components/mining/     # Componentes específicos del visor minero
│   ├── Viewer3D.tsx        # Canvas 3D principal (Three.js / R3F)
│   ├── Sidebar.tsx         # Panel lateral con pasos del flujo
│   ├── ViewerControls.tsx  # Controles de banco y polígonos
│   ├── ViewerToolbar.tsx   # Filtros y modos de vista
│   ├── BlockDetailPanel.tsx# Panel de detalle de bloque seleccionado
│   ├── LithologyLegend.tsx # Leyenda de litologías
│   ├── CoordHUD.tsx        # HUD de coordenadas
│   └── ProjectHeader.tsx   # Cabecera con nombre y estado
├── data/
│   └── lasBambasDemo.ts    # Dataset real Las Bambas (bloques, sondajes, polígonos)
├── hooks/
│   └── useProjectStore.ts  # Estado global de la aplicación (sin Redux)
├── lib/
│   ├── lithology.ts        # Definición y colores de litologías
│   └── survey.ts           # Utilidades de sistema de coordenadas
├── types/
│   └── mining.ts           # Tipos TypeScript (Block, Drillhole, BoundaryPoly, etc.)
└── pages/
    └── Index.tsx            # Página principal que ensambla todos los componentes
```

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| UI | Radix UI + shadcn/ui + Tailwind CSS |
| Estado | React hooks (useProjectStore) |
| Tests | Vitest + Testing Library |
