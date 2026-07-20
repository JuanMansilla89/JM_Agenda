---
project: Gobierno-Datos
parent: DataTwin
status: active
stage: mapeo-de-flujos-en-curso
owner: "Juan Mansilla"
stakeholders: [Elio Rodriguez, Wilber Torres, Pablo Quispe, Jose Tello, Oswaldo Aspilcueta]
start-date: 2026-07-17
tags: [datatwin, gobierno-datos, arquitectura]
onedrive: ""
lider_iniciativa: "Elio Rodríguez / Wilber Torres"
horizonte: "proximas-2-semanas"
prioridad: "alta"
etiqueta: "En Curso"
---

# Gobierno de Datos — DataTwin

> Gobierno de datos del gemelo digital con **múltiples fuentes**: cada mina/cliente (Las Bambas, Quellaveco, Toquepala-Cuajone, próximamente Antapacay) expone sus datos con proveedor, base de datos, versión y método de acceso distintos. El objetivo de este sub-proyecto es que esa heterogeneidad se resuelva una sola vez (en la capa de staging/mapeo a CDM) y no se repita en cada integración nueva.

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Apertura del sub-proyecto | ✅ Realizada (17/07/2026) |
| Reunión de revisión de arquitectura de datos | ✅ Realizada (17/07/2026) — [[2026-07-17-reunion-gobierno-datos-arquitectura]] |
| Arquitectura en capas propuesta (espejo → staging/CDM → Marts → Serving, sobre DBT) | 🔺 En desarrollo por Wilber — ~22 campos migrados a la fecha |
| Definición híbrida DBT (microbatch) + Data Capture/CDC (near real-time) | ⏳ Por validar en sync Wilber/Pablo/José (17/07, 4pm) |
| Mapeo completo de flujos actuales de Mine Metrics / MyMetrics (incluye Forecasting) | ⏳ En curso — Elio, Wilber, Pablo, José |
| Cronograma / estimado de esfuerzo de la migración completa | ⏳ Pendiente — meta aspiracional de Juan: ~15 días, sin comprometer aún |

## Objetivo

Establecer gobernanza y claridad total sobre la arquitectura de datos del gemelo digital DataTwin, que integra **múltiples fuentes heterogéneas** (una por mina/cliente: distintos proveedores de sistema de gestión de flota, SQL Server o PostgreSQL en distintas versiones, GPS vía base de datos o vía API/webhook). Mapear el 100% de los flujos actuales (Mine Metrics/MyMetrics, Forecasting, GPS) y definir una arquitectura objetivo en capas — espejo/raw → staging → CDM canónico → Marts → Serving — con un enfoque híbrido DBT (microbatch) + Data Capture/CDC (near real-time), de forma que sumar una fuente/cliente nuevo (próximo: Antapacay) solo requiera un mapeo de staging, sin tocar Marts ni Serving.

## Fuentes contempladas (multi-fuente)

| Cliente / mina | Sistema origen | Tipo de acceso | Particularidad |
|---|---|---|---|
| Las Bambas | MineStar / Data Publish | Vista/consulta SQL (espejo ya existe del lado del cliente) | Referencia de cómo debería verse el espejo para el resto |
| Quellaveco | Dispatch (SQL) | Consultas/vistas | ~3-4 min de delay en el origen |
| Toquepala-Cuajone | Hexagon MineOps (PostgreSQL v11) | BD directa, candidato a Data Capture | Versión antigua de Postgres vs. v18 actual — compatibilidad de CDC por validar |
| Antapacay (próximo) | Dispatch | WebSocket API + base de datos | Dos canales a contemplar en el diseño |
| GPS (varía por proveedor) | BD (Hexagon MineOps) o API/webhook (Modular) | Alta frecuencia (5-30 s) | Calidad de datos baja en la mayoría de casos (~95% en Las Bambas); requiere curado antes de correr algoritmos (ej. velocidad) |

## Tareas activas

### Hoy (2026-07-17)

- [ ] Mapear el 100% de los flujos actuales de Mine Metrics, incluyendo Forecasting como consumidor 🔺 📅 2026-07-17 #datatwin #gobierno-datos
- [ ] Sincronizar diseño del "espejo" (¿único multi-fuente o uno por fuente?, ¿por esquema o por tabla?) — Wilber con Pablo y José, 4pm 🔺 📅 2026-07-17 #datatwin #gobierno-datos

### Esta semana

- [ ] Entregar cronograma/estimado de esfuerzo de la migración completa a la arquitectura en capas ⏫ 📅 2026-07-24 #datatwin #gobierno-datos
- [ ] Revisar con Oswaldo el estado del tema GPS 🔼 📅 2026-07-21 #datatwin #gobierno-datos
- [ ] Validar si la fuente de series de tiempo de planta que ha pedido Leslie ya está contemplada por Wilber 🔼 📅 2026-07-24 #datatwin #gobierno-datos
- [ ] Revisar con Pablo el estado del análisis de velocidades (hecho en Java) 🔼 📅 2026-07-24 #datatwin #gobierno-datos

## Tareas completadas

- [x] Apertura del sub-proyecto Gobierno de Datos dentro de DataTwin ✅ 2026-07-17 #datatwin #gobierno-datos
- [x] Reunión de revisión de arquitectura de datos con Elio, Wilber, Pablo y José ✅ 2026-07-17 #datatwin #gobierno-datos

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-17 | Arquitectura de datos en capas: espejo (raw, 1:1 con la fuente) → staging (mapeo al CDM canónico) → Marts (reglas de negocio/métricas) → Serving (vistas de consumo, sin tablas propias) | Permite que un cliente/mina nuevo se adhiera remapeando solo el staging al CDM, sin tocar Marts ni Serving | En validación — propuesta de Wilber, ~22 campos migrados; diseño del espejo (único vs. por fuente) se cierra en el sync de hoy |
| 2026-07-17 | La arquitectura debe ser híbrida: DBT/microbatch para la mayoría de fuentes, Data Capture (CDC) para fuentes de alta frecuencia como GPS | DBT no es viable para tiempo real; además el origen de datos de los clientes (Quellaveco ~3-4 min de delay, Las Bambas ~7 min variable) tampoco lo permite en la mayoría de casos | Cerrada — dirección confirmada por Juan en la reunión |
| 2026-07-17 | El gemelo no debe impactar las bases de producción del cliente — preferir vistas/consultas controladas o Data Capture antes que exigir más recursos a la BD origen | Antecedente: caídas de servidores en Las Bambas por sobrecarga; los proveedores de sistemas de gestión de flota dimensionan sus servidores al mínimo | Cerrada — principio ya vigente, reafirmado |
| 2026-07-17 | El mapeo de flujos debe cubrir el 100% de Mine Metrics/MyMetrics, incluyendo Forecasting, sin asumir nada por defecto | Forecasting depende de fuentes de MyMetrics no mapeadas hasta ahora — riesgo de estar entregando datos de mala calidad sin saberlo | Cerrada — directiva explícita de Juan, sin ambigüedad |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Diseño del "espejo" (único vs. por fuente, esquema vs. tabla) aún sin resolver | Media | Medio | Definir en la sincronización Wilber/Pablo/José del 17/07 |
| [[Forecasting]] depende de fuentes de MyMetrics no mapeadas — riesgo de datos de baja calidad sin detectar | Alta | Alto | Incluir Forecasting explícitamente en el mapeo completo |
| Calidad de datos GPS de Las Bambas (~95% de los casos de baja calidad, según Juan) | Alta | Alto | Reforzar el curado de GPS que ya inició Wilber antes de correr algoritmos (ej. análisis de velocidad) sobre esos datos |
| Diferencias de versión de PostgreSQL entre clientes (ej. Toquepala-Cuajone en v11 vs. v18 actual) pueden romper el enfoque de Data Capture | Media | Alto | Validar compatibilidad de CDC por versión de origen antes de generalizar el enfoque |
| Sin cronograma/estimado de esfuerzo comprometido — riesgo de que la migración se extienda indefinidamente | Alta | Alto | Exigir estimado concreto (meta aspiracional: ~15 días) antes de iniciar ejecución |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/DataTwin/Gobierno-Datos/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |

**Convención de nombres:**
- Reunión: `YYYY-MM-DD-reunion-[tema].md`
- Comunicación: `YYYY-MM-DD-[email|msg]-[remitente]-[tema].md`
- Referencia: `[tema]-ref.md`
- Entregable: `YYYY-MM-DD-[tipo]-[version].qmd`

## ☁️ OneDrive

[📁 Carpeta DataTwin — Gobierno de Datos](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Proyecto padre: [[DataTwin]]
- Grabación original de la reunión: `40-Planning/03-Sesiones-Planning/Records/Revision_Arquitoria_Datos.md`
- Prompt de deep research (arquitectura Azure — Flink + ADX): [[prompt-deep-research-arquitectura-azure-flink-adx]]

---
*Última actualización: 2026-07-17*
