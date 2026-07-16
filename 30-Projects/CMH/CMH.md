---
project: CMH
status: active
stage: exploracion-comercial
owner: "Juan Mansilla"
stakeholders: [Luis Chang, Sergio Cisneros]
start-date: 2026-07-12
tags: [cmh]
onedrive: ""
lider_iniciativa: "William Carpio"
horizonte: "este-trimestre"
prioridad: "media"
etiqueta: "C_propuesta"
---

# CMH

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Reunión comercial exploratoria | ✅ Realizada (10/07/2026) |
| Envío de consultas técnicas + presentación a CMH | ✅ Enviado (14-15/07/2026) |
| Recepción de documento de requerimientos Nexo 360 + Mantenimiento 360 | ✅ Recibido (26/07/2026) |
| Reunión técnica de levantamiento | ⏳ Pendiente — ahora con alcance mucho más detallado por confirmar |
| Propuesta de alto nivel / orden de magnitud | ⏳ Pendiente — insumo principal ya disponible |
| Proceso de licitación formal | ⏳ Condicional — a definir por CMH |

## Objetivo

Diseñar, desarrollar e implementar para **Consorcio Minero Horizonte (CMH)**, unidad subterránea **Parcoy**, la plataforma **Nexo 360 Operation** (planificación integrada y control de guardia, lógica SIC) junto con el módulo **Mantenimiento 360** (disponibilidad y gestión de flota) integrado a ella, mediante una solución a medida "llave en mano funcional". CMH está en etapa exploratoria previa a una eventual licitación, evaluando a ASTAY junto con otros posibles socios tecnológicos.

## Tareas activas

- [ ] Confirmar versión de SAP (ECC vs. S/4HANA) y transacciones PM/MM en alcance 📅 2026-08-04 ⏫ #cmh
- [ ] Solicitar a CMH el documento completo del estándar TTD-ES-001 📅 2026-08-04 ⏫ #cmh
- [ ] Coordinar fecha de reunión técnica de levantamiento con áreas de negocio/tecnología de CMH 📅 2026-08-04 🔼 #cmh #blocked
- [ ] Preparar propuesta de alto nivel / orden de magnitud (Bloque A + Bloque B) 📅 2026-08-11 🔺 #cmh

## Tareas completadas

- [x] Apertura del proyecto CMH en el vault ✅ 2026-07-12 #cmh
- [x] Reunión comercial exploratoria con CMH (Parcoy, cambio de guardia) ✅ 2026-07-10 #cmh
- [x] Preparar y enviar lista de consultas técnicas + presentación a CMH ✅ 2026-07-15 #cmh
- [x] Recepción y análisis del documento de requerimientos Nexo 360 + Mantenimiento 360 ✅ 2026-07-26 #cmh

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-10 | Primera etapa acotada a la unidad Parcoy (UG), con posibilidad de ampliar a otras unidades | Caso base manejable antes de escalar a todo CMH | ✅ Confirmada |
| 2026-07-10 | La solución se evaluará como customización y como servicio especializado | CMH busca comparar modalidades antes de definir alcance contractual | 🔄 Pendiente de definir |
| 2026-07-10 | ASTAY respetará las condiciones de CMH sobre propiedad, uso y no comercialización de la solución | Requisito explícito del cliente | ✅ Confirmada |
| 2026-07-10 | Antes de la reunión técnica, ASTAY debe enviar una lista breve de consultas de alto nivel | Condición impuesta por CMH para avanzar a la siguiente etapa | ✅ Confirmada |
| 2026-07-26 | El alcance real cubre dos bloques obligatorios integrados: Nexo 360 Operation (planificación y control de guardia) + Mantenimiento 360 (disponibilidad y flota) | CMH lo definió en el documento de requerimientos recibido, más detallado que lo discutido en la reunión exploratoria | ✅ Confirmada |
| 2026-07-26 | Integración con SAP (PM/MM) y SSO con Microsoft Entra ID son requisitos obligatorios, no opcionales | Exigencia explícita de la Gerencia de Tecnología de CMH y del estándar TTD-ES-001 | ✅ Confirmada |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Proceso exploratorio con múltiples proveedores compitiendo, sin garantía de avanzar a licitación | Alta | Alto | Priorizar consultas técnicas de alto impacto para diferenciarse rápido |
| Alcance aún no validado con áreas de negocio/tecnología de CMH | Alta | Alto | Reunión técnica de levantamiento antes de comprometer propuesta |
| Conectividad limitada en interior mina (proyecto Wi-Fi de CMH en curso, no operativo aún) | Media | Medio | Diseñar la primera etapa para operar sin dependencia de conectividad en tiempo real |
| Integración futura con sistemas nuevos/existentes de CMH aún sin definir | Media | Medio | Confirmar sistemas actuales y roadmap de transformación digital en la reunión técnica |
| Integración SAP (PM/MM) sin definir versión (ECC vs. S/4HANA) ni mecanismo (archivos planos, staging, API REST) | Alta | Alto | Confirmar con TI de CMH antes de estimar esfuerzo; ver [[analisis-implicancias-tecnicas-ref]] |
| Contenido del estándar TTD-ES-001 aún desconocido para ASTAY | Media | Medio | Solicitar el documento completo a CMH antes de comprometer alcance de seguridad |
| Complejidad de sincronización offline (Store & Forward) con ~360 personas y ~80 equipos en interior mina | Alta | Alto | Diseñar prueba de concepto de sincronización antes de comprometer cronograma; ver [[analisis-implicancias-tecnicas-ref]] |
| Motor de asignación (Bloque A) depende de datos de disponibilidad de Mantenimiento 360 (Bloque B) — acoplamiento fuerte desde el inicio | Media | Alto | Confirmar en reunión técnica si es viable un MVP con disponibilidad ingresada manualmente en una primera fase |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/CMH/Documentacion"
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

[📁 Carpeta CMH](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Cliente: Consorcio Minero Horizonte (CMH)
- Unidad inicial: Parcoy — método de explotación UG (subterránea)
- Tema: digitalización del cambio de guardia
- Reunión de referencia: [[2026-07-10-reunion-exploratoria-cambio-guardia]]
- Consultas técnicas enviadas a CMH: [[2026-07-14-consultas-tecnicas-v1]]
- Requerimientos del cliente (Nexo 360 + Mantenimiento 360): [[nexo360-mantenimiento360-requerimientos-ref]]
- Análisis técnico interno: [[analisis-implicancias-tecnicas-ref]]
- Guía extensa de levantamiento técnico y funcional (13 ejes, para las sesiones de trabajo con CMH): [[2026-07-26-guia-levantamiento-tecnico-v1]]
- Preguntas clave sobre material de referencia y estado de avance por módulo: [[preguntas-clave-estado-avance-ref]]
- **Documento consolidado para CMH** (alcance + requisitos técnicos, listo para enviar): [[2026-07-26-alcance-requisitos-tecnicos-v1]]
- Enfoque del proyecto y 90 preguntas técnicas (integración Bloque A/B, campo-centro de control, evidencias visuales, reportería, stack Microsoft, arquitectura, fases) + recomendación preliminar de arquitectura: [[2026-07-26-enfoque-preguntas-tecnicas-v1]]
- **15 preguntas clave** (destiladas de las 90, con justificación de por qué cada una es bloqueante): [[2026-07-26-preguntas-clave-v1]]
- Marco metodológico: [[short-interval-control-ref|Short Interval Control en minería]] (Commit Works / GMG / ABB)
- Benchmark de mercado — commit.works en Volcan/Animón (mina subterránea UG): [[volcan-estado-futuro-cambio-guardia-ref|Estado futuro cambio de guardia]] · [[volcan-reporte-fin-turno-ref|Reporte fin de turno]] · [[catalogo-tareas-equipos-ref|Catálogo de tareas por equipo]] · [[reporte-cumplimiento-disparos-ref|Cumplimiento de disparos]] · [[reporte-shotcrete-ref|Reporte de shotcrete]] · [[commitworks-plataforma-ref|Capturas de la plataforma]]

---
*Última actualización: 2026-07-26*
