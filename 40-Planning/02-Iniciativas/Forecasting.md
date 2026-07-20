---
tipo: iniciativa
tipo_iniciativa: "producto"
estado: "en-curso"
prioridad: "alta"
horizonte: "proximas-2-semanas"
etiqueta: "En Curso"
lider_iniciativa: "Alí Meres"
equipo_participante: ["[[Analitica-DataScience-Producto]]"]
sponsor: "William Carpio"
colaboradores: [Gustavo Lozano, Fabián Albuajar]
validador: "Por confirmar"
proyecto_relacionado: ""
producto_relacionado: "Forecasting"
fecha_inicio: "por-definir"
fecha_objetivo: "sin-fecha-comprometida"
frecuencia_revision: "por-definir"
ultima_actualizacion: 2026-07-16
---

# Forecasting

> Iniciativa interna sin nota propia hasta ahora — extraída de la "Matriz de gobierno por iniciativa" en [[Equipo-ASTAY]]. Owner de negocio: Alí; DS + Desarrollo ejecutan; Customer Success: William.

## Objetivo

Por definir con Alí — capacidad de forecasting/modelos predictivos para operaciones mineras, ejecutada por el sub-equipo de Data Science.

## Resultado esperado

Por definir.

## Próximo hito

Por definir.

## Dependencias

- Continuidad de Gustavo Lozano (Data Scientist) — ver riesgo abajo.
- **Fuentes de datos de Mine Metrics/MyMetrics (dominio DataTwin):** detectado en la reunión de arquitectura de datos del 2026-07-17 (ver [[2026-07-17-planning]]) que Forecasting consume cálculos/fuentes de Mine Metrics directamente, sin mapeo ni validación formal — riesgo de estar recibiendo datos de mala calidad del origen sin saberlo. Se incluyó explícitamente en el alcance del mapeo de [[Gobierno-Datos]].

## Bloqueos

Ninguno registrado formalmente, pero existen dos **riesgos críticos**:
1. Continuidad: Gustavo Lozano (ejecutor principal según el organigrama) tiene salida próxima marcada ⚠️ en [[Equipo-ASTAY]]. Sin documentación de modelos/pipelines ni backup owner, esto podría convertirse en bloqueo real.
2. Dependencia no mapeada de fuentes de Mine Metrics (ver Dependencias arriba) — pendiente de que [[Gobierno-Datos]] complete el mapeo; puede requerir coordinación directa entre Alí Meres y el equipo de Ingeniería (Elio/Wilber).

## Decisiones pendientes

- [ ] Definir backup owner para Forecasting ante la salida de Gustavo Lozano 🔺
- [ ] Confirmar objetivo, resultado esperado y horizonte con Alí en el primer planning
- [ ] Confirmar con Alí Meres si la dependencia de fuentes Mine Metrics requiere una acción coordinada, una vez que [[Gobierno-Datos]] entregue el mapeo completo

## Próximas acciones

- [ ] Documentar modelos, pipelines y criterios actuales de Forecasting antes de la salida de Gustavo Lozano
