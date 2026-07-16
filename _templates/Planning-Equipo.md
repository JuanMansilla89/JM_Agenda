---
tipo: equipo
nombre: "<% tp.file.title %>"
lider: ""
integrantes: []
proposito: ""
capacidades: []
productos_bajo_responsabilidad: []
iniciativas_activas: []
capacidad_estimada: "por-definir"
riesgos: []
ultima_revision: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

## Propósito

## Líder
-

## Integrantes

## Capacidades

## Productos / sistemas bajo responsabilidad

## Iniciativas activas

```dataview
TABLE estado, prioridad, horizonte, proximo_hito
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE contains(lider_iniciativa, this.lider)
SORT prioridad DESC
```

## Riesgos

## Próximas decisiones
