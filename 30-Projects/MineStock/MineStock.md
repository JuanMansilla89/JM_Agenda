---
project: MineStock
status: active
stage: en-progreso
owner: "Juan Mansilla"
stakeholders: [Milagros, Carlos, Alí]
start-date: 2026-05-18
tags: [minestock]
onedrive: ""
lider_iniciativa: "Alí Meres"
horizonte: "proximas-2-semanas"
prioridad: "alta"
etiqueta: "En Curso"
---

# MineStock

## Estado actual

| Aspecto | Estado |
|---------|--------|
| Reestructuración UX con Milagros | ⏳ Pendiente |
| Alineamiento historias de usuario con Carlos y Alí | ⏳ Pendiente |

## Objetivo

Producto de gestión de inventario para minería. Dos frentes activos: (1) reestructuración UX con Milagros — nueva estructura de navegación, perfiles y dashboards; (2) alineamiento de historias de usuario con Carlos y Alí — backlog refinado, gaps funcionales, priorización MVP.

## Tareas activas

- [ ] Agendar reunión UX con Milagros para hoy mismo 📅 2026-05-18 🔺 #minestock #hoy
- [ ] Reunión con Milagros: definir nueva estructura UX, navegación, modularidad, perfiles usuario, dashboards 📅 2026-05-18 ⏫ #minestock #hoy
- [ ] Revisión historias de usuario con Carlos y Alí: redundancias, ambigüedades, dependencias backend, MVP vs nice-to-have 📅 2026-05-18 ⏫ #minestock #hoy
- [ ] Producir backlog UX + criterios de rediseño (output reunión Milagros) 📅 2026-05-18 🔼 #minestock #hoy
- [ ] Producir backlog refinado + prioridades + historias bloqueadas (output Carlos/Alí) 📅 2026-05-18 🔼 #minestock #hoy

## Tareas completadas

## Frentes UX

Revisar con Milagros:
- Navegación general del producto
- Modularidad por perfil de usuario
- Dashboards operacionales
- Pain points actuales identificados
- Criterios de rediseño

## Frentes Producto — Historias de Usuario

Revisar con Carlos y Alí:
- Redundancias en historias actuales
- Historias ambiguas → clarificar criterios de aceptación
- Dependencias de backend no resueltas
- Separar MVP de nice-to-have

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-05-18 | Reestructuración UX antes de avanzar en desarrollo | Sin dirección UX clara el desarrollo genera retrabajo | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| MineStock sin dirección UX clara | Alta | Alto | Reunión Milagros hoy + backlog unificado |
| Backlog historias sin priorización → scope creep | Media | Alto | Sesión con Carlos y Alí → MVP vs nice-to-have explícito |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/MineStock/Documentacion"
WHERE file.name != ".gitkeep"
SORT file.mtime DESC
```

| Tipo | Carpeta | Template |
|------|---------|----------|
| 📋 Reunión | `Documentacion/Reuniones/` | `Doc-Reunion` |
| 📧 Email / mensaje | `Documentacion/Comunicaciones/` | `Doc-Comunicacion` |
| 🌐 Referencia | `Documentacion/Referencias/` | `Doc-Referencia` |
| 📄 Entregable | `Documentacion/Entregables/` | `Quarto-Word.qmd` |

## ☁️ OneDrive

[📁 Carpeta MineStock](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Output UX: backlog UX + criterios de rediseño + responsables
- Output historias: backlog refinado + prioridades + historias bloqueadas

---
*Tiempo estimado hoy: Milagros 1h (16:30–17:30) + Carlos/Alí 1h30 (17:30–19:00)*
