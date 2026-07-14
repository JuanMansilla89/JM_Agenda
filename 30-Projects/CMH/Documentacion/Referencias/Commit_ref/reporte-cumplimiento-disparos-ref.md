---
fecha: 2026-07-12
tipo: referencia
subtipo: documento-externo
proyecto: CMH
fuente: Compañía Minera Volcan — Unidad Animón (subterránea, UG), "Volcan en Línea"
url: 
tags: [cmh]
---

# Referencia — Reportes de Cumplimiento de Disparos Programados (AESA / CIA)

**Proyecto:** CMH
**Fuente:** Compañía Minera Volcan, Unidad Animón (UG) — reportes "Volcan en Línea", por contratista
**Archivos:** `AESA - 26-04.pdf`, `CIA - 26-04.pdf`
**Tipo:** reporte operacional diario — cumplimiento de voladura (disparos)

---

## Cómo aplica al proyecto

Ambos PDFs son el mismo tipo de reporte (cumplimiento de disparos/voladuras programadas) emitido por separado **por contratista** (AESA y CIA), ambos operando en la misma mina subterránea. Es un ejemplo de cómo una operación UG divide la reportabilidad de productividad por responsable ejecutor — relevante si CMH en Parcoy también trabaja con más de un contratista.

## Estructura común de ambos reportes

1. **Cumplimiento de disparos programados por día/guardia** — gráfico de barras Programados vs. Ejecutados.
2. **Detalle de cumplimientos y desviaciones** por turno (Día/Noche) y por labor (código de frente, ej. `AC-000-4025-VOFE-1`), con ✅/❌ y campo de detalle en texto libre para la desviación (ej. *"LABOR INUNDADA"*, *"DEMORAS POR TRABAJOS VENTILACIÓN"*, *"RAPTOR 07 INOPERATIVO"*).
3. **Disparos ejecutados y distribución de responsabilidades acumuladas** — # disparos y metros acumulados por contratista, con % de distribución (en el ejemplo AESA: 50%/50% entre CIA y AESA).

## Diferencia entre los dos archivos

- **AESA** desglosa por turno (Día/Noche) con una sección adicional de "Desquinche" (labor de ensanche) separada de los disparos de avance.
- **CIA** desglosa además por **tipo de labor**: "Intermedia" vs. "Taladros Largos" (TL) — con tablas de cumplimiento independientes para cada tipo, ya que taladros largos es una técnica de perforación distinta (mayor longitud, otro ciclo).

## Catálogo de causas de desviación observadas

Labor inundada · Demoras por trabajos de ventilación · Se prioriza relleno de subnivel · Equipo inoperativo (ej. "Raptor 07 inoperativo") — mismo patrón de "catálogo de causas en texto libre" visto en `volcan-reporte-fin-turno-ref.md` y en el proyecto Cozamin (`30-Projects/Cozamin/`). Sugiere que, en la madurez actual de Volcan, las causas todavía no están codificadas (serían strings libres, no un catálogo cerrado) — punto a validar con CMH: ¿prefieren texto libre o catálogo cerrado de causas para Parcoy?

## Cómo usar esto en la propuesta de CMH

- Ejemplo de **reportabilidad por contratista** — si Parcoy trabaja con contratistas, el Sistema_Productividad debería poder filtrar/agregar por responsable igual que estos reportes.
- El indicador clave aquí es simple y replicable: **# programado vs. # ejecutado**, con desviación explicada — un patrón mínimo viable razonable para una primera etapa del sistema de CMH, antes de escalar a KPIs más sofisticados.

---
*Archivos fuente: `Commit_ref/AESA - 26-04.pdf`, `Commit_ref/CIA - 26-04.pdf`*
