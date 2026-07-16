---
tipo: equipo
nombre: "Analítica, Data Science & Producto"
lider: "Alí Meres"
integrantes: [Alí Meres, Nataly Bejarano, Flor Vargas, Carlos Mendoza K., Gustavo Lozano, Fabián Albuajar, Leslie Espinoza]
proposito: "Capacidad analítica avanzada, ciencia de datos, evolución funcional de productos y validación de modelos mineros."
capacidades: [Forecasting, Modelos analíticos, Data Science, Machine Learning, MLOps, Evolución de capacidades analíticas]
productos_bajo_responsabilidad: ["[[MineStock]]"]
iniciativas_activas: ["[[Forecasting]]", "[[MineStock]]", "[[MineStock-POC]]"]
capacidad_estimada: "7 personas (3 Negocio, 2 Data Science, 1 Eng. Datos/MLOps + líder)"
riesgos: ["Gustavo Lozano (Data Scientist) con salida próxima — riesgo alto sobre continuidad de Forecasting", "Leslie Espinoza asignada temporalmente a BI Quellaveco — cuello de botella"]
ultima_revision: 2026-07-16
---

# Analítica, Data Science & Producto

> Fuente base: [[Equipo-ASTAY]] (40-Areas/Equipo), actualizado 2026-06-19.

## Propósito

Capacidad analítica avanzada, ciencia de datos, evolución funcional de productos y validación de modelos mineros.

## Líder
- Alí Ivan Meres Vargas — Business Analytics Technical Lead

## Integrantes

**Sub-equipo Negocio (3):** Nataly Bejarano, Flor Vargas, Carlos Mendoza K.
**Sub-equipo Data Science (2):** Gustavo Lozano ⚠️ (riesgo salida), Fabián Albuajar
**Sub-equipo Eng. Datos & MLOps (1):** Leslie Espinoza ⚠️ (asignada temporalmente a BI Quellaveco)

## Capacidades

- Forecasting
- Modelos analíticos
- Data Science
- Machine Learning
- MLOps
- Evolución de capacidades analíticas

> Nota de diseño: estas capacidades se manejan como el mandato permanente del equipo, no como iniciativas independientes. Solo **Forecasting** tiene hoy objetivo y resultado esperado concretos — por eso es la única que se elevó a nota de iniciativa propia (ver [[Forecasting]]). ML/MLOps/evolución analítica se elevan a iniciativa individual solo cuando tengan un objetivo definido.

## Productos / sistemas bajo responsabilidad

- [[MineStock]] (producto interno; Alí y Nataly como owners de negocio según matriz de gobierno de [[Equipo-ASTAY]])
- [[MineStock-POC]] (despliegue comercial del producto MineStock en Chinalco Toromocho — confirmado en planning 2026-07-16)

## Iniciativas activas

```dataview
TABLE estado, prioridad, horizonte, proximo_hito
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE contains(lider_iniciativa, "Alí")
SORT prioridad DESC
```

## Riesgos

| Riesgo | Impacto | Mitigación sugerida |
|---|---|---|
| Gustavo Lozano (Data Scientist) con salida próxima | 🔴 Alto — afecta continuidad de Forecasting | Documentar modelos, pipelines y criterios; definir backup owner |
| Leslie Espinoza absorbida por BI Quellaveco | 🔴 Alto — cuello de botella en Eng. Datos/MLOps | Formalizar asignación temporal o definir reemplazo funcional |
| Carlos Mendoza K. con doble asignación (Analítica + Quellaveco) | 🟡 Medio | Clarificar % de dedicación y prioridad |

## Próximas decisiones

- [ ] Confirmar con Alí el ownership real de Forecasting, MineStock y Data Science (ya confirmado 2026-06-18 en [[Equipo-ASTAY]] — validar que sigue vigente)
- [ ] Definir backup owner para Forecasting ante salida de Gustavo Lozano
