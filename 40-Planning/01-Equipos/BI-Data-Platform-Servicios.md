---
tipo: equipo
nombre: "BI / Data Platform & Servicios"
lider: "Ignacio Uribe / Erick Tocasca"
integrantes: [Ignacio Uribe, Erick Tocasca, Nícolas Rodríguez, Wilmer Ccarita, Jhonatan Almora, Oliver Rojas, Marilin Sandoval, Jean Cordova, Juan Vasquez, Carlomaria Bastidas, Kenny Larijo, Keyssi Echevarría, José Almonacid, Tony Canahua]
proposito: "BI, reportabilidad, pipelines de datos y dashboards operacionales."
capacidades: [BI corporativo, BI local / Gemelo de Planta, Reportabilidad, Pipelines de datos]
productos_bajo_responsabilidad: ["[[Gemelo-Planta-Quellaveco]]"]
iniciativas_activas: ["[[Gemelo-Planta-Quellaveco]]"]
capacidad_estimada: "14 personas (incl. equipo Quellaveco, Ignacio) + 7 personas (Erick)"
riesgos: ["BI consume capacidad de Desarrollo sin planificación explícita", "Roles formales no reflejan operación real (doble vista organigrama/operativo necesaria)"]
ultima_revision: 2026-07-16
---

# BI / Data Platform & Servicios

> Fuente base: [[Equipo-ASTAY]] (40-Areas/Equipo), actualizado 2026-06-19. Dos sub-líderes con reporte directo a Gerencia Técnica.

## Propósito

BI, reportabilidad, pipelines de datos y dashboards operacionales.

## Líder
- Jose Ignacio Uribe Perea — Operations Manager (BI Corporativo Anglo American, 14 personas)
- Erick Gerardo Tocasca Tocasca — Business Intelligence Lead (BI Local · Gemelo Planta Quellaveco, 7 personas)

## Integrantes

**Equipo Soporte Corporativo (3, bajo Ignacio):** Nícolas Rodríguez, Wilmer Ccarita, Jhonatan Almora
**Equipo Analítica Quellaveco (3, bajo Ignacio):** Oliver Rojas, Marilin Sandoval (matrix→Reportes A), Jean Cordova (matrix→Reportes B)
**Reportes A (3, bajo Erick):** Juan Vasquez, Carlomaria Bastidas, Kenny Larijo
**Reportes B (3, bajo Erick):** Keyssi Echevarría, José Almonacid, Tony Canahua

**Asignaciones matriciales entrantes a Erick:** Leslie Espinoza (temporal, ⚠️), Carlos Mendoza K. (temporal)

## Capacidades

- BI Corporativo Anglo American
- BI Local — Gemelo de Planta Quellaveco
- Reportabilidad
- Pipelines de datos y dashboards operacionales

## Productos / sistemas bajo responsabilidad

- [[Gemelo-Planta-Quellaveco]] — add-on de DataTwin (resuelto en planning 2026-07-16), objetivo específico aún por detallar

## Iniciativas activas

```dataview
TABLE estado, prioridad, horizonte, proximo_hito
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE contains(lider_iniciativa, "Ignacio") OR contains(lider_iniciativa, "Erick")
SORT prioridad DESC
```

## Riesgos

| Riesgo | Impacto | Mitigación sugerida |
|---|---|---|
| BI consume capacidad de Desarrollo sin planificación explícita | 🟡 Medio/Alto | Crear RACI y calendario de capacidad compartida |
| Roles formales no reflejan operación real | 🔴 Alto | Mantener doble vista: organigrama formal + mapa operativo |

## Próximas decisiones

- [ ] Confirmar con Ignacio y Erick la separación BI corporativo / BI local / Gemelo Planta (ya confirmado 2026-06-18 en [[Equipo-ASTAY]] — validar que sigue vigente)
- [x] ~~Resolver ambigüedad DataTwin Quellaveco vs. Gemelo Planta Quellaveco~~ — resuelto en planning 2026-07-16: es add-on de DataTwin
- [ ] Detallar con Erick/Ignacio el objetivo específico del add-on Gemelo Planta Quellaveco (ver [[Gemelo-Planta-Quellaveco]])
