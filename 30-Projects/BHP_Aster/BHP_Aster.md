---
project: BHP_Aster
status: active
stage: preseleccionado-propuesta-piloto
owner: "Juan Mansilla"
stakeholders: [Deivi Ramos]
start-date: 2026-06-28
tags: [bhp-aster]
onedrive: ""
---

# BHP_Aster — Escondida | BHP

## Estado actual

**Canal:** Open Aster 2026 — Desafío "Gestión inteligente de tráfico mina" — **Escondida | BHP**, Atacama, Chile
**Estado ASTAY:** ✅ Preseleccionada

| Hito del proceso | Estado | Fecha |
|-----------------|--------|-------|
| Preselección Open Aster 2026 | ✅ Confirmada | 2026-06-16 |
| Faena del piloto | ✅ Confirmada — Escondida \| BHP | — |
| Envío presentación para feedback | ✅ Enviada | 2026-06-23 |
| Formulario preguntas previo al webinar | ⏳ Pendiente — recuperar link | Antes del webinar |
| Confirmación tanda de webinar | ⏳ Pendiente — Open Aster informa | Próximamente |
| Webinar (tanda 1) | ⏳ Condicional | 7–9 jul 2026 |
| Webinar (tanda 2) | ⏳ Condicional | 14–15 jul 2026 |
| Sesión con Experto de Pilotaje (tanda 1) | ⏳ Condicional | 13–24 jul 2026 |
| Sesión con Experto de Pilotaje (tanda 2) | ⏳ Condicional | 20–31 jul 2026 |
| Presentación ante Comité Evaluador | ⏳ Pendiente | 27 jul – 7 ago 2026 |
| Anuncio oficial de seleccionados | ⏳ Pendiente | 31 ago 2026 |

---

## Objetivo

Implementar un piloto del **Gemelo Digital DataTwin** para Escondida | BHP, respondiendo al desafío **"Gestión inteligente de tráfico mina"** del proceso Open Aster 2026. El piloto busca cerrar la brecha entre la planificación teórica (match pala-camión en condiciones ideales) y las condiciones dinámicas del rajo, entregando recomendaciones en tiempo real al Centro Integrado de Operaciones (CIO) para minimizar congestión, eliminar cuellos de botella y maximizar el flujo continuo de camiones CAEX — operando como capa complementaria y desacoplada sobre los sistemas existentes (Módular/FMS).

**Meta aspiracional:** reducción de hasta **20%** en tiempos de conducción dentro de la mina.

---

## Contexto técnico clave (del Q&A oficial BHP)

| Aspecto | Definición confirmada |
|---------|----------------------|
| Foco de la solución | Flota **CAEX** (alto tonelaje) — no vehículos livianos |
| Alcance piloto | Una flota/fase/corredor definido → escalar al resto |
| Receptor de recomendaciones | **Centro Integrado de Operaciones (CIO)** |
| Fuente de datos principal | **Módular** — DBs relacionales, datos históricos/agregados (no raw real-time) |
| Red de comunicaciones | **LTE privado** — requiere diseño resiliente con buffering y procesamiento local |
| Integración | **Solo lectura, desacoplada** — sin modificar sistemas productivos |
| IA | **Permitida** — con governance, trazabilidad y explicabilidad de modelos |
| Stack tecnológico BHP | **Multi-cloud: Microsoft + AWS** |
| Open Source | Permitido en piloto — debe cumplir governance y ciberseguridad BHP |
| Hardware en cabina CAEX | Sistemas cerrados — si se requieren pantallas, **la startup las provee** |
| GPS vehículos livianos | Solo para seguridad — **no reutilizable** para tráfico |
| Instalación de hardware/sensores | Permitida mediante proceso de gestión del cambio |

---

## Tareas activas

- [ ] Confirmar a qué tanda de webinar pertenece ASTAY 📅 2026-07-01 🔺 #bhp-aster
- [ ] Revisar borrador consultas técnicas webinar y enviar por formulario Open Aster 📅 2026-07-04 ⏫ #bhp-aster
- [ ] Recuperar y documentar criterios de evaluación del Comité de Selección (adjunto del correo 2026-06-16) 📅 2026-06-29 ⏫ #bhp-aster
- [ ] Revisar documento de apoyo para sesión con experto de pilotaje (link pendiente del correo) 📅 2026-07-05 🔼 #bhp-aster
- [ ] Definir alcance exacto del piloto: flota CAEX, zona/fase, KPIs de congestión, duración 📅 2026-07-05 ⏫ #bhp-aster
- [ ] Preparar presentación para sesión con experto de pilotaje 📅 2026-07-11 🔺 #bhp-aster

## Tareas completadas

- [x] Apertura del proyecto BHP_Aster en el vault ✅ 2026-06-28 #bhp-aster
- [x] Documentar desafío Open Aster — video y Q&A oficial ✅ 2026-06-28 #bhp-aster
- [x] Envío de presentación para feedback a Open Aster ✅ 2026-06-23 #bhp-aster

---

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-06-28 | Piloto acotado (una flota/fase) antes de despliegue completo | Validar valor del DataTwin en entorno real antes de comprometer escala — requisito del proceso Open Aster | #decision |
| 2026-06-28 | Faena = Escondida \| BHP, Atacama, Chile | Confirmado por Q&A oficial — área usuaria es Escondida, rajo abierto | #decision |
| 2026-06-28 | Receptor de recomendaciones = CIO (no cabina CAEX) | Sistemas de cabina son cerrados; camiones autónomos no tienen operador; CIO centraliza decisiones | #decision |
| 2026-06-28 | Integración solo lectura sobre Módular | Restricción de ciberseguridad OT BHP — sin acoplamiento a sistemas productivos | #decision |
| 2026-06-28 | DataTwin como complemento al Dispatch, no reemplazo | BHP no tiene preferencia de solución, pero sin riesgos adicionales — narrativa de complemento protege la propuesta | #decision |

---

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Módular entrega datos agregados/históricos — no raw real-time | Alta | Alto | Diseñar el modelo con latencia tolerable; usar buffering y procesamiento local |
| Cobertura LTE privado no uniforme en todo el trazado | Alta | Medio | Diseño resiliente: procesamiento local + buffering; no asumir conectividad continua |
| Archivos DXF/DWG de rutas no disponibles en fase inicial | Alta | Medio | Construir modelo de red vial desde datos Módular y entrada manual en piloto |
| Expectativa de recomendaciones automáticas vs. soporte a decisión | Media | Alto | Posicionar explícitamente como apoyo al CIO — no control autónomo |
| Sistemas de cabina CAEX cerrados → sin canal de alertas al operador | Media | Medio | Propuesta debe incluir HMI propio si se requiere feedback al operador |
| Meta del 20% como compromiso contractual | Media | Alto | Tratar como aspiracional; proponer KPIs intermedios verificables en piloto |
| Datos bajo NDA — no disponibles hasta firma | Media | Medio | Diseñar propuesta con datos públicos y supuestos conservadores; NDA en kick-off |

---

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/BHP_Aster/Documentacion"
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

[📁 Carpeta BHP_Aster](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Plataforma base: DataTwin — Gemelo Digital ASTAY Systems
- Faena: Escondida | BHP — Atacama, Chile (rajo abierto)
- Contacto proceso: openaster@asteraceleradora.com / Deivi Ramos <deivi.ramos@asteraceleradora.com>
- [[desafios-open-aster-operaciones-mina-ref|Video: Desafíos Open Aster - Operaciones Mina]] — contexto del desafío
- [[2026-06-16-email-openaster-actualizacion-proceso|Email 2026-06-16: Actualización proceso Open Aster]] — calendario oficial
- [[consultas-bhp-escondida-respuestas-ref|Q&A Oficial BHP Escondida]] — restricciones técnicas, datos, sistemas, arquitectura
- [[informe-ejecutivo-open-aster-2026-ref|Informe Ejecutivo Gerencia Técnica]] — compromisos, cronograma, recomendaciones

---
*Última actualización: 2026-06-28 — preselección confirmada, presentación enviada, Q&A e informe ejecutivo documentados*
