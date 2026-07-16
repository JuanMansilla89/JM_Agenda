---
tipo: decision
fecha: 2026-07-16
responsable: "Juan Mansilla"
iniciativas_afectadas: ["[[DataTwin]]", "[[Gemelo-Planta-Quellaveco]]"]
impacto: "estructural — resuelve ambigüedad de dos iniciativas registradas por separado en la matriz de gobierno de Equipo-ASTAY"
---

# Decisión — Gemelo Planta Quellaveco es add-on de DataTwin

## Contexto

La "Matriz de gobierno por iniciativa" en [[Equipo-ASTAY]] listaba "DataTwin Quellaveco" y "Gemelo Planta Quellaveco" como filas separadas, con owners parcialmente distintos (William·Erick / Elio·Oswaldo para DataTwin Quellaveco; Erick·Ignacio para Gemelo Planta). El diagnóstico de Fase 2 del sistema de planning (2026-07-16) marcó esto como ambigüedad sin resolver, ya que no existía ninguna nota, entregable ni referencia de "Gemelo Planta Quellaveco" fuera de esa matriz.

## Alternativas evaluadas

1. Tratarlas como iniciativas completamente independientes, cada una con su propio objetivo y equipo.
2. Fusionar Gemelo Planta Quellaveco dentro de DataTwin, archivando la nota separada.
3. Modelar Gemelo Planta Quellaveco como add-on/componente de DataTwin — nota propia (por tener equipo ejecutor y sponsor operativo distintos del core), pero sin autonomía de objetivo respecto a DataTwin.

## Decisión

Se adopta la alternativa 3: **Gemelo Planta Quellaveco es un add-on de DataTwin**, no una iniciativa independiente. Mantiene nota propia en `40-Planning/02-Iniciativas/` (por tener equipo BI/Data Platform y sponsor propios), con `proyecto_relacionado: "[[DataTwin]]"` explícito.

## Impacto

- `Gemelo-Planta-Quellaveco.md` actualizada: líder Erick Tocasca/Ignacio Uribe, relacionada a DataTwin, ya no marcada como "alcance ambiguo".
- `DataTwin.md` actualizada: nueva fila en Estado actual y nueva decisión clave referenciando este add-on.
- Notas de equipo [[Ingenieria-Desarrollo]] y [[BI-Data-Platform-Servicios]]: ítems de "próximas decisiones" relacionados marcados como resueltos.

## Acciones derivadas

- [ ] Detallar con Erick/Ignacio el objetivo y resultado esperado específico del add-on (sigue pendiente — la decisión resuelve la estructura, no el contenido)
- [ ] Validar esta decisión con Erick, Ignacio, Oswaldo y Elio en la próxima sesión de planning (se tomó sin reunión formal de líderes)
