---
project: Ciberseguridad
parent: DataTwin
status: active
stage: definicion-de-alcance
owner: "Juan Mansilla"
stakeholders: [Jaime]
start-date: 2026-07-14
tags: [datatwin, ciberseguridad]
onedrive: ""
lider_iniciativa: "Juan Mansilla"
horizonte: "este-trimestre"
prioridad: "media"
etiqueta: "En Curso"
---

# Ciberseguridad — DataTwin

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Apertura del sub-proyecto | ✅ Realizada (14/07/2026) |
| Anexo X (requisitos del cliente) traducido y disponible | ✅ [[Standard_terms_ES]] |
| 5 entregables de cumplimiento elaborados (01–05) | ✅ Anexo comentado, resumen ejecutivo, plan 90 días + RACI, checklist DevSecOps, matriz de responsabilidad |
| Auditoría de doble control (documentos 01–05 vs. Anexo X) | ✅ Realizada (14/07/2026) — [[06_Auditoria_Cumplimiento_Anexo_X]] — veredicto: **Requiere correcciones antes de presentar al cliente** |
| Correcciones de la auditoría aplicadas a 01–05 | ⏳ Pendiente |
| Definición del rol Coordinador DevSecOps | ✅ [[07_Definicion_Rol_DevSecOps_ASTAY]] |
| Definición del rol vCISO | ✅ [[08_Definicion_Rol_vCISO_ASTAY]] |
| Presentación a Gerencia / envío a Quellaveco | ⏳ Bloqueado hasta cerrar correcciones críticas |

## Objetivo

Elaborar un **Plan de Ciberseguridad** integral para la plataforma DataTwin (gemelo digital de Quellaveco), que cubra la protección de la arquitectura de datos, las integraciones con sistemas OT/IT (GIS/PostGIS, GPS/Flink-Kafka) y los controles de acceso e identidad necesarios para operar de forma segura en un entorno minero.

## Tareas activas

- [ ] Desagregar Doc 01 §D.3 en 4 sub-secciones (cifrado tránsito/reposo/protección/claves) 🔺 📅 2026-07-18 #datatwin #ciberseguridad
- [ ] Agregar 6 filas faltantes a la Matriz de Responsabilidad (Doc 05): capacitación, background checks, entorno físico, auditoría, retención legal, cumplimiento de políticas del cliente 🔺 📅 2026-07-18 #datatwin #ciberseguridad
- [ ] Agregar al Plan 90 días (Doc 03): acción de capacitación formal, retención de logs, validación de "equipo dedicado" con Quellaveco ⏫ 📅 2026-07-21 #datatwin #ciberseguridad
- [ ] Corregir tono de Doc 01 §G.16 y completar sub-cláusula de cookies/archivos temporales en Doc 01/04 ⏫ 📅 2026-07-21 #datatwin #ciberseguridad
- [ ] Re-auditar 01–05 tras aplicar correcciones antes de enviar a Gerencia 🔼 📅 2026-07-25 #datatwin #ciberseguridad
- [ ] Validar con RR.HH./Gerencia si los roles Coordinador DevSecOps y vCISO se cubren con personal interno, contratación nueva o servicio externo fraccional (20-40 h/mes sugeridas para vCISO) 🔼 📅 2026-07-22 #datatwin #ciberseguridad

## Tareas completadas

- [x] Apertura del sub-proyecto Ciberseguridad dentro de DataTwin ✅ 2026-07-14 #datatwin #ciberseguridad
- [x] Traducción del Anexo X al español ✅ 2026-07-14 #datatwin #ciberseguridad
- [x] Elaboración de los 5 entregables de cumplimiento (01–05) ✅ 2026-07-14 #datatwin #ciberseguridad
- [x] Auditoría de doble control de los 5 entregables contra el Anexo X ✅ 2026-07-14 #datatwin #ciberseguridad
- [x] Definición del rol Coordinador DevSecOps (perfil, competencias, certificaciones, posición organizacional) ✅ 2026-07-15 #datatwin #ciberseguridad
- [x] Definición del rol vCISO (perfil, competencias, certificaciones, dedicación fraccional sugerida) ✅ 2026-07-15 #datatwin #ciberseguridad

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-14 | El plan de ciberseguridad se aborda como sub-proyecto propio de DataTwin, con su propia carpeta de documentación | Se espera generar múltiples entregables (assessment, políticas, plan de respuesta) independientes del resto de la plataforma | #decision |
| 2026-07-14 | No se presenta el paquete de cumplimiento (01–05) a Quellaveco hasta cerrar los hallazgos críticos/altos de la auditoría | La auditoría identificó agrupación indebida de obligaciones (D.3), 6 dominios sin propietario en la matriz de responsabilidad, y 3 acciones faltantes en el plan de 90 días | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Alcance del plan aún no definido — riesgo de sobre-extenderse o dejar brechas sin cubrir | Alta | Alto | Definir alcance explícito (sistemas, datos, integraciones) antes de iniciar el levantamiento |
| Integración OT/IT (GIS, GPS) puede introducir superficies de ataque no consideradas en un plan de ciberseguridad genérico de TI | Media | Alto | Levantamiento específico de arquitectura OT/IT antes de definir controles |
| Pentest postincidente sin costo para el cliente (10 días) depende de presupuesto/seguro aún no contratado | Media | Alto | Priorizar contratación de seguro de ciberresponsabilidad y bolsa de pentest en Fase 2 del plan de 90 días |
| Interpretación de "equipo dedicado" (comité + roles fraccionales + vCISO) no validada con Quellaveco | Media | Alto | Validar con el cliente antes de operar el modelo de gobierno mínimo — ver [[06_Auditoria_Cumplimiento_Anexo_X]] |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/DataTwin/Ciberseguridad/Documentacion"
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

[📁 Carpeta DataTwin — Ciberseguridad](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Proyecto padre: [[DataTwin]]

---
*Última actualización: 2026-07-14*
