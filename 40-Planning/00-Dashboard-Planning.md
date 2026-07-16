---
tipo: dashboard-planning
ultima_revision: 2026-07-16
---

# 📊 Dashboard Planning — ASTAY

> Capa ejecutiva de planificación, visibilidad y alineamiento. No reemplaza [[ToDo-Central]] (tareas operativas) ni [[Equipo-ASTAY]] (organigrama fuente). Corre sobre Dataview — ver `40-Planning/00-Dashboard-Planning.md` para el diagnóstico y arquitectura completos en la conversación que lo originó.

---

## 🚦 Salud del portafolio (etiqueta)

> Comercial (`C_*`) = todavía en pipeline de venta. Sin prefijo = ya en desarrollo/entrega. Ver [[Equipo-ASTAY]] para contexto de equipos.

```dataview
TABLE length(rows) AS "N°", rows.file.link AS "Proyectos"
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
GROUP BY etiqueta
```

## 🚨 Atención inmediata — en peligro, detenidos o replanteamiento

```dataview
TABLE etiqueta, lider_iniciativa, prioridad, horizonte
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE etiqueta = "En Peligro" OR etiqueta = "Detenido" OR etiqueta = "C_detenido" OR etiqueta = "Replanteamiento"
SORT etiqueta ASC
```

## Iniciativas activas

```dataview
TABLE lider_iniciativa AS "Líder", etiqueta, prioridad, horizonte
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE etiqueta != "Cancelado" AND etiqueta != "C_Cancelado"
SORT prioridad DESC
```

## Iniciativas por líder

```dataview
TABLE length(rows) AS "N° iniciativas", rows.file.link AS "Iniciativas"
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
GROUP BY lider_iniciativa
```

## Iniciativas por equipo

```dataview
LIST
FROM "40-Planning/01-Equipos"
```

## Iniciativas en riesgo o bloqueadas (taxonomía fina de `40-Planning/02-Iniciativas`)

> Solo aplica a notas de iniciativa que usan el campo `estado` (Forecasting, Gemelo-Planta-Quellaveco). Para el resto de proyectos ver "🚨 Atención inmediata" arriba, basado en `etiqueta`.

```dataview
TABLE estado, lider_iniciativa, proximo_hito
FROM "40-Planning/02-Iniciativas"
WHERE estado = "en-riesgo" OR estado = "bloqueada"
```

## Próximos hitos

```dataview
TABLE proximo_hito, horizonte, lider_iniciativa
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE proximo_hito
SORT horizonte ASC
```

## Decisiones pendientes

```dataview
LIST
FROM "40-Planning/04-Decisiones"
WHERE !completed
```

## Iniciativas sin fecha

```dataview
TABLE lider_iniciativa, estado
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE horizonte = "sin-fecha-definida"
```

## Iniciativas sin responsable

```dataview
TABLE estado, prioridad
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE lider_iniciativa = "Por confirmar"
```

## Distribución por tipo

```dataview
TABLE length(rows) AS "N°"
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
GROUP BY tipo_iniciativa
```

## Distribución por horizonte

```dataview
TABLE length(rows) AS "N°"
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
GROUP BY horizonte
```

---

## ⚠️ Puntos de atención abiertos

1. ~~13 de 19 proyectos sin líder~~ — **resuelto en planning 2026-07-16** (ver [[03-Sesiones-Planning/2026-07-16-planning]]), pendiente validar con los 6 líderes de área que no participaron en la sesión.
2. ~~Ambigüedad Gemelo Planta Quellaveco vs. DataTwin~~ — **resuelta 2026-07-16**: es add-on de DataTwin (ver [[04-Decisiones/2026-07-16-decision-gemelo-planta-add-on]]). Objetivo específico del add-on sigue pendiente.
3. **Prioridad/horizonte se fijaron por regla general** (propuesta/prospecto → media/este-trimestre; en-ejecución → alta/próximas-2-semanas), no iniciativa por iniciativa — 15 de 21 no se revisaron individualmente. Pendiente afinar en próxima sesión con líderes.
4. **Skalydra no está instalado** en este vault — el dashboard corre hoy sobre Dataview; cuando se instale Skalydra, estas mismas propiedades YAML deberían ser consumibles sin cambios.
5. Riesgo de continuidad de **Forecasting** (salida próxima de Gustavo Lozano) sigue sin backup owner definido.
6. **Etiqueta de salud agregada 2026-07-16** (`C_propuesta`/`C_detenido`/`C_Cancelado` para comercial, `En Curso`/`En Peligro`/`Detenido`/`Replanteamiento`/`OK`/`Cancelado` para desarrollo) a las 21 iniciativas, derivada de su `stage` actual — ningún proyecto quedó en `En Peligro`, `Detenido`, `Replanteamiento` ni `Cancelado` todavía porque no había evidencia de eso en el vault; validar y actualizar manualmente conforme cambie la realidad de cada uno.

---

## Sesiones de planning

```dataview
TABLE fecha, participantes
FROM "40-Planning/03-Sesiones-Planning"
SORT fecha DESC
```

## Últimas decisiones

```dataview
TABLE fecha, responsable, impacto
FROM "40-Planning/04-Decisiones"
SORT fecha DESC
LIMIT 10
```
