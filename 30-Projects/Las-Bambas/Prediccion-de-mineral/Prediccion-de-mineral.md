---
project: Prediccion-de-mineral
parent: Las-Bambas
status: active
stage: seguimiento-propuesta
owner: "Juan Mansilla"
stakeholders: [Mario Rojas]
start-date: 2026-05-28
tags: [lasbambas, prediccion-mineral]
onedrive: ""
repo: ""
lider_iniciativa: "William Carpio"
horizonte: "este-trimestre"
prioridad: "media"
etiqueta: "C_propuesta"
---

# Predicción de Mineral — Las Bambas

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Frontend — visor 3D (Ore Projector) | ✅ Demo realizado — código en `Documentacion/Codigo/Ore_Projector/` |
| Demo a Mario Rojas — presentación en sitio | ✅ Realizado 2026-06-26 |
| Seguimiento propuesta técnico-económica | 🔺 En curso — contacto: Mario Rojas |
| Propuesta técnica | ✅ Elaborada (14/07/2026) — [[2026-07-14-propuesta-tecnica-v1]] |
| Propuesta económica | ✅ Elaborada (14/07/2026) — [[2026-07-14-propuesta-economica-v1]] — USD 48,913.92 |
| Integración con datos reales de Las Bambas | ⏳ Pendiente |
| Backend / API de datos | ⏳ Pendiente |
| Repositorio externo (repo:) | ⏳ Pendiente — pegar URL en frontmatter |

## Objetivo

Herramienta de visualización y proyección de clasificación de mineral para el modelo de bloques de Las Bambas. Permite cargar el modelo de bloques 3D, trazar polígonos de contorno mineral/desmonte por banco, y proyectar la clasificación desde datos reales (banco 1) hacia bancos inferiores (2–4), con edición manual y exportación de resultados.

## Tareas activas

- [ ] Enviar propuesta técnico-económica completa a Mario Rojas 📅 2026-07-16 🔺 #lasbambas
- [ ] Definir fuentes de datos reales: modelo de bloques + sondajes Las Bambas 📅 2026-07-21 🔼 #lasbambas
- [ ] Registrar URL del repositorio en frontmatter `repo:` 📅 2026-07-21 🔼 #lasbambas

## Tareas completadas

- [x] Apertura del sub-proyecto Predicción de Mineral 📅 2026-05-28 ✅ 2026-05-28 #lasbambas
- [x] Cargar código frontend Ore Projector en vault ✅ 2026-05-28 #lasbambas
- [x] Preparar y ensayar demo Ore Projector ✅ 2026-06-25 #lasbambas
- [x] Demo a Mario Rojas — presentación Ore Projector en sitio ✅ 2026-06-26 #lasbambas
- [x] Redactar propuesta técnica del sistema completo ✅ 2026-07-14 #lasbambas
- [x] Elaborar propuesta económica ✅ 2026-07-14 #lasbambas

## Arquitectura del frontend — Ore Projector

### Descripción

Visor 3D de modelo de bloques minero con flujo de trabajo guiado:

```
Modelo de bloques → Sondajes prod. → Sondajes diamantina
     → Polígonos de contorno → Histórico → Proyección → Edición → Exportar
```

Soporta 4 bancos (niveles) de profundidad. El banco 1 contiene datos reales; los bancos 2–4 son proyectados. Permite clasificar bloques como `mineral`, `desmonte` o `sin clasificar`, con origen automático o manual.

### Stack tecnológico

| Componente | Tecnología | Notas |
|-----------|-----------|-------|
| Framework UI | React 18 + TypeScript | Vite, shadcn/ui, Tailwind CSS |
| Visualización 3D | React Three Fiber + Three.js | Viewer3D.tsx — bloques, sondajes, polígonos |
| Gestión de estado | `useProjectStore` (hook custom) | Estado global del proyecto y flujo de trabajo |
| Gráficos / analytics | Recharts | Dashboard de estadísticas |
| Formularios | React Hook Form + Zod | Validación de cargas de datos |
| Routing | React Router DOM v6 | Páginas: Index (visor) + Dashboard |
| Build / test | Vite + Vitest + Playwright | Tests unitarios + e2e |

### Componentes clave

| Componente | Archivo | Función |
|-----------|---------|---------|
| `Viewer3D` | `components/mining/Viewer3D.tsx` | Canvas 3D — bloques, sondajes, polígonos, drawing |
| `BlockDetailPanel` | `components/mining/BlockDetailPanel.tsx` | Panel info de bloque seleccionado |
| `CoordHUD` | `components/mining/CoordHUD.tsx` | HUD de coordenadas del cursor |
| `LithologyLegend` | `components/mining/LithologyLegend.tsx` | Leyenda de litologías |
| `Sidebar` | `components/mining/Sidebar.tsx` | Navegación y controles laterales |
| `ViewerControls` | `components/mining/ViewerControls.tsx` | Controles de vista y filtros |
| `ViewerToolbar` | `components/mining/ViewerToolbar.tsx` | Toolbar de modos de edición |

### Tipos de dominio principales

Definidos en `src/types/mining.ts`:
- `Block` — bloque del modelo con `classification`, `grade`, `confidence`, `level` (banco), `lithology`
- `Drillhole` + `DrillInterval` — sondajes (producción / diamantina) con intervalos de litología
- `BoundaryPoly` — polígono de contorno mineral/desmonte por banco
- `ChangeRecord` — registro de auditoría de reclasificaciones
- `ProjectState` / `ProjectSummary` — estado completo del proyecto

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-28 | Sub-proyecto con `Documentacion/Codigo/` para trazabilidad técnica | Proyecto incluye código frontend — arquitectura y decisiones técnicas deben vivir en el vault | #decision |
| 2026-05-28 | Frontend primero (Ore Projector) con datos mockeados | Validar UX y flujo de trabajo antes de conectar a datos reales de Las Bambas | #decision |
| 2026-07-14 | Banco fuente se identifica por cobertura real de datos, no por posición fija en la secuencia | El análisis exploratorio (`05_proyeccion`) mostró que el banco con mejor cobertura de CU no es el primero de la secuencia | #decision |
| 2026-07-14 | Proyección: nearest neighbor (NN) espacial como línea base, validado sobre datos demo; evaluar IDW/kriging solo si geología de Las Bambas lo requiere | Evita sobre-invertir en geoestadística avanzada sin evidencia de que NN es insuficiente | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Formato de datos de modelo de bloques incompatible | Alta | Alto | Definir contrato de datos (CSV/JSON) con Las Bambas antes de integración |
| Performance del visor 3D con modelo real (miles de bloques) | Media | Alto | Benchmark con datos sintéticos representativos; considerar instanced meshes |
| Alcance de la proyección automática subestimado | Media | Alto | Validar con William qué algoritmo de proyección espera |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Las-Bambas/Prediccion-de-mineral/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |
| 💻 Código | `Documentacion/Codigo/` | *(libre — arquitectura, API contracts, wireframes)* |

## 💻 Repositorio y código

> **Repo:** *(pegar URL en frontmatter `repo:` y aquí abajo)*

| Recurso | Ubicación |
|---------|-----------|
| Repositorio frontend | `repo:` en frontmatter — pendiente |
| API contract | `Documentacion/Codigo/` — pendiente |
| Arquitectura de componentes | `Documentacion/Codigo/` — pendiente |
| Wireframes / mockups | `Documentacion/Codigo/` — pendiente |

## ☁️ OneDrive

[📁 Carpeta Las Bambas — Predicción de Mineral](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Sub-proyectos relacionados: [[Modelamiento-Pila]], [[Reportabilidad]]
- Documentación de código en `Documentacion/Codigo/`

---
*Última actualización: 2026-06-28*
