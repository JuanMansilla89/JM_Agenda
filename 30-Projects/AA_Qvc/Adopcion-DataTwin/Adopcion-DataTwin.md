---
project: Adopcion-DataTwin
parent: AA_Qvc
status: active
stage: carga-de-usuarios-pendiente
owner: "Juan Mansilla"
stakeholders: [William Carpio]
start-date: 2026-07-19
tags: [aa_qvc, adopcion, datatwin]
onedrive: ""
lider_iniciativa: "William Carpio"
horizonte: "proximas-2-semanas"
prioridad: "media"
etiqueta: "En Curso"
---

# Adopción DataTwin — AA_Qvc

## Estado actual

| Aspecto                                                            | Estado                                                                                                                                      |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Apertura del sub-proyecto                                          | ✅ Realizada (19/07/2026)                                                                                                                    |
| Material de inducción de usuarios (guion + presentación)           | ✅ Cargado (19/07/2026) — ver `Planes/`                                                                                                      |
| Procedimiento de primer acercamiento/soporte/inserción de usuarios | ✅ Cargado (19/07/2026) — ver `Definiciones/`                                                                                                |
| Plantilla de seguimiento de métricas                               | ✅ Cargada (19/07/2026) — ver `Metricas/`                                                                                                    |
| Documentos convertidos a Markdown                                  | ✅ Realizado (19/07/2026) — pandoc (docx) + scripts python-pptx/openpyxl (pptx/xlsx)                                                         |
| Métricas de adopción definidas y completadas en la tabla           | ✅ Resuelto — ya vienen definidas en la plantilla (hoja Dashboard)                                                                           |
| Roles y responsables del proceso                                   | 🔺 Equipo de soporte 12x7 identificado (Edgard y Jhon) — pendiente confirmación formal con William Carpio                                   |
| Responsable y frecuencia de reporte                                | ✅ Resuelto — reporte diario, equipo de soporte 12x7, supervisión de William Carpio (Customer Success Lead)                                  |
| Línea base de adopción                                             | ⏳ Pendiente — el registro maestro de usuarios (`Usuarios` en la plantilla) está vacío salvo 1 fila de ejemplo; falta cargar usuarios reales |
| URL oficial del Gemelo Digital en el material de inducción         | ⏳ Pendiente — queda como placeholder `[pegar URL oficial del Gemelo Digital]` en la presentación                                            |

## Objetivo
Medir y hacer seguimiento periódico de qué tan adoptado está el uso de DataTwin entre los usuarios de Quellaveco: definir métricas, línea base, responsables y cadencia de reporte, y centralizar en un solo lugar las reuniones, planes, métricas y definiciones asociadas a este seguimiento.

## Tareas activas
- [x] Pegar la URL oficial del Gemelo Digital en la presentación de inducción (queda como placeholder) #aa_qvc #adopcion 🔺 ✅ 2026-07-19
- [ ] Cargar usuarios reales en el registro maestro (`Usuarios` de la plantilla) — hoy solo tiene 1 fila de ejemplo 🔺 #aa_qvc #adopcion
- [ ] Levantar primera línea base (baseline) de adopción una vez cargados los usuarios reales 🔼 #aa_qvc #adopcion
- [ ] Confirmar formalmente con William Carpio que Edgard y Jhon son el equipo real de soporte 12x7 (el guion usa "John Ramos" como ejemplo genérico — no coincide, corregir el documento) 🔼 #aa_qvc #adopcion

## Tareas completadas
- [x] Apertura del sub-proyecto Adopción DataTwin dentro de AA_Qvc ✅ 2026-07-19 #aa_qvc #adopcion
- [x] Cargar y organizar material inicial (guion + presentación de inducción, procedimiento de inserción de usuarios, plantilla de seguimiento) ✅ 2026-07-19 #aa_qvc #adopcion
- [x] Convertir los 4 documentos a Markdown y revisar su contenido para completar métricas/roles ✅ 2026-07-19 #aa_qvc #adopcion

## Métricas de adopción
> Definidas en la hoja `Dashboard` de `plantilla_seguimiento_gemelo_digital.xlsx` (ver [[plantilla-seguimiento-gemelo-digital]]), calculadas sobre el registro maestro de usuarios (hoja `Usuarios`).

| Métrica                    | Definición                                                                   | Fuente / cálculo                                                | Frecuencia                       | Último valor                                                |
| -------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| Cobertura de contacto      | Contactados / usuarios registrados                                           | `Usuarios` — estados E/P/R/C/A sobre el total                   | Diaria (reporte diario sugerido) | Sin datos reales aún (plantilla vacía salvo 1 fila ejemplo) |
| Cobertura de inducción     | Sesiones realizadas / usuarios registrados                                   | `Usuarios` — estado "R - Reunión realizada"                     | Diaria                           | Sin datos reales aún                                        |
| Usuarios activos           | Usuarios en estado "A - Activo"                                              | `Usuarios` — columna Estado                                     | Diaria                           | Sin datos reales aún                                        |
| Calificación promedio      | Promedio de aceptación (escala 1-5) reportada en cada sesión                 | `Usuarios` — columna Calificación                               | Diaria                           | Sin datos reales aún                                        |
| Casos de uso identificados | N° de procesos operativos documentados donde se usa o podría usarse DataTwin | `Usuarios` — columna "Caso de uso identificado"                 | Diaria                           | Sin datos reales aún                                        |
| Solicitudes escaladas      | N° de solicitudes canalizadas a los responsables (William / Melanie / Jesús) | `Usuarios` / `Interacciones` — estado "ES - Solicitud escalada" | Diaria                           | Sin datos reales aún                                        |

**Estados de seguimiento por usuario** (catálogo fijo): E-Contactado, P-Reunión programada, R-Reunión realizada, NR-Sin respuesta, RC-Requiere contacto posterior, O-Con observaciones, ES-Solicitud escalada, C-Proceso de inducción cerrado, A-Activo, I-Inactivo.

## Roles y responsabilidades
> Definidos en `PROCEDIMIENTO DE PRIMER ACERCAMIENTO...` (ver [[procedimiento-primer-acercamiento-soporte-insercion-usuarios]]).

| Rol | Responsable | Responsabilidad |
|---|---|---|
| Equipo de soporte 12x7 | Edgard y Jhon — pendiente confirmación formal con William Carpio | Contacto inicial, sesiones de inducción, registro de interacciones, reporte diario |
| Customer Success Lead (ASTAY) | William Carpio | Supervisar la campaña, revisar tendencias de adopción, priorizar observaciones, coordinar con el cliente |
| Recepción de solicitudes — ASTAY | William Carpio | Canalizar solicitudes de configuración/mejora |
| Recepción de solicitudes — cliente | Melanie, Jesús | Canalizar solicitudes desde el lado del cliente |

**Principio de comunicación clave:** el soporte no debe dar a entender que la plataforma está incompleta ni comprometer alcance, fechas o funcionalidades nuevas — solo acompañar, registrar y canalizar.

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-19 | Adopción DataTwin se estructura como sub-proyecto propio de AA_Qvc, con carpetas dedicadas para reuniones, planes, métricas y definiciones | Es un frente de seguimiento recurrente, distinto en naturaleza del resto de AA_Qvc (cronograma/Gantt/vista) | #decision |
| 2026-07-19 | Las métricas y el proceso de adopción no se definen desde cero — se adoptan las ya definidas en la plantilla y el procedimiento cargados por el equipo de soporte | Evita duplicar trabajo ya hecho; el procedimiento ya cubre roles, estados, cadencia y comunicación | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Registro maestro de usuarios vacío (solo 1 fila de ejemplo) — sin línea base real todavía | Alta | Alto | Cargar usuarios reales de Quellaveco antes de reportar cualquier métrica |
| Responsable operativo del soporte 12x7 no confirmado (solo hay un nombre de ejemplo en el guion) | Media | Alto | Confirmar con William Carpio quién ejecuta el día a día |
| Riesgo de comunicación: dar a entender que la plataforma está incompleta puede dañar la percepción de adopción | Media | Medio | Reforzar principios de comunicación del procedimiento con todo el equipo de soporte |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado"
FROM "30-Projects/AA_Qvc/Adopcion-DataTwin/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Contenido |
|------|---------|-----------|
| 📋 Reuniones | `Documentacion/Reuniones/` | Notas de reuniones de seguimiento de adopción |
| 📐 Planes | `Documentacion/Planes/` | Planes de adopción / change management |
| 📊 Métricas | `Documentacion/Metricas/` | Reportes y datos de métricas de adopción |
| 📖 Definiciones | `Documentacion/Definiciones/` | Definiciones de métricas, glosario, criterios de medición |

### Índice de documentos cargados (2026-07-19)

Cada documento original se mantiene junto a su versión `.md` (convertida con pandoc para los `.docx`, y con scripts basados en `python-pptx`/`openpyxl` para `.pptx`/`.xlsx`).

| Archivo original | Versión Markdown | Carpeta | Contenido |
|---|---|---|---|
| `plantilla_seguimiento_gemelo_digital.xlsx` | [[plantilla-seguimiento-gemelo-digital]] | `Metricas/` | Plantilla de seguimiento: hojas Dashboard (KPIs), Usuarios (registro maestro), Interacciones (log de contactos), Catálogos (listas de estados/áreas/etc.) |
| `guion_sesion_induccion_gemelo_digital.docx` | [[guion-sesion-induccion-gemelo-digital]] | `Planes/` | Guion operativo para conducir la sesión de inducción (15-20 min) |
| `presentacion_induccion_gemelo_digital.pptx` | [[presentacion-induccion-gemelo-digital]] | `Planes/` | Presentación de apoyo para la sesión de inducción (3 diapositivas) |
| `PROCEDIMIENTO DE PRIMER ACERCAMIENTO, SOPORTE E INSERCIÓN DE USUARIOS.docx` | [[procedimiento-primer-acercamiento-soporte-insercion-usuarios]] | `Definiciones/` | Procedimiento formal: objetivo, alcance, roles, estados de seguimiento, cadencia de reporte |

**Convención de nombres:**
- Reunión: `YYYY-MM-DD-reunion-[tema].md`
- Plan: `YYYY-MM-DD-plan-[tema].md`
- Métrica/reporte: `YYYY-MM-DD-metricas-[periodo].md`
- Definición: `[tema]-definicion.md`

## ☁️ OneDrive

[📁 Carpeta AA_Qvc — Adopción DataTwin](https://astaysystems.sharepoint.com/:f:/s/ProjectTechnology-DataTwin/IgC1ZfpbMTCNS4bmmDicS7MVAd8wPMmpNn1MXh1SX0l0u_c?email=jmansilla%40astaysystems.com&e=H2gviB)

## Recursos y referencias

- Proyecto padre: [[AA_Qvc]]

---
*Última actualización: 2026-07-19*
