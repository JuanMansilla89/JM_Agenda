---
project: Agnico_Eagle
status: active
stage: presentacion-comercial-en-elaboracion
owner: "Juan Mansilla"
stakeholders: [Frank Echegaray]
start-date: 2026-07-13
tags: [agnico-eagle]
onedrive: ""
lider_iniciativa: "William Carpio"
horizonte: "este-trimestre"
prioridad: "media"
etiqueta: "C_propuesta"
---

# Agnico_Eagle — Gemelo de Planta (Pinos Altos, México)

## Estado actual

| Hito | Estado | Fecha |
|------|--------|-------|
| Primer contacto / reunión de alcance con equipo comercial | ✅ Realizada — [[2026-07-13-reunion-gemelo-planta-alcance-comercial]] | 2026-07-13 |
| Presentación comercial corta (2-3 slides, sin cifras) | 🔺 En elaboración — mockup a cargo de Juan | Meta: 2026-07-17 |
| Envío de la presentación al cliente | ⏳ Pendiente | — |
| Segunda reunión técnica con el cliente | ⏳ Pendiente de agendar tras envío | — |
| Levantamiento de necesidades técnico | ⏳ Pendiente | — |
| Propuesta técnica/económica | ⏳ Pendiente | — |

## Objetivo

Ofrecer a Agnico Eagle (operación **Pinos Altos**, México — ~90% subterránea/10% tajo, oro y plata, molienda + lixiviación en pilas) un **servicio de "Gemelo de Planta"**: una plataforma de integración de datos de planta (gobierno de datos, disponibilidad de datos, alertas configurables, reportabilidad de KPIs), sobre la cual opcionalmente se pueden montar modelos de IA construidos junto con los expertos de proceso del cliente. No es el mismo producto que el gemelo de mina/acarreo de DataTwin (que no aplica a esta operación mayormente subterránea), y no incluye simulación real todavía — el objetivo inmediato es una presentación comercial conceptual, sin comprometer alcance ni cifras.

## Tareas activas

- [ ] Preparar presentación comercial corta (2-3 slides, "capacity", sin cifras) — mockup a cargo de Juan Mansilla 🔺 📅 2026-07-17 #agnico-eagle
- [ ] Decidir si se suma Luis al esfuerzo (reunión Juan-Luis) 🔼 📅 2026-07-14 #agnico-eagle
- [ ] Confirmar con el cliente fecha para la segunda reunión técnica, tras enviar la presentación 🔼 #agnico-eagle
- [ ] Indagar capacidad real de inversión del cliente antes de la reunión técnica 🔼 #agnico-eagle
- [ ] Validar con el cliente la estructura real de planta (flotación + lixiviación es hipótesis de Juan, no confirmada) 🔽 #agnico-eagle

## Tareas completadas

- [x] Apertura del proyecto Agnico_Eagle en el vault ✅ 2026-07-17 #agnico-eagle
- [x] Reunión de alcance con equipo comercial (Frank, Julissa, Sergio) ✅ 2026-07-13 #agnico-eagle
- [x] Archivar grabación/transcripción y nota de reunión procesada ✅ 2026-07-17 #agnico-eagle

## Decisiones clave

| Fecha | Decisión | Justificación | Estado |
|-------|----------|---------------|--------|
| 2026-07-17 | Se abre como proyecto comercial independiente (etapa `C_propuesta`) | Nuevo cliente, servicio para Planta, aún en etapa de levantamiento con el equipo comercial | #decision |
| 2026-07-13 | "Gemelo de Planta" se posiciona comercialmente como servicio de plataforma de integración (datos + alertas + KPIs), no como simulación/gemelo completo | ASTAY no tiene hoy capacidad predictiva real de planta ni experiencia administrando PI/OPC UA; evita sobre-prometer | #decision |
| 2026-07-13 | La presentación inicial no debe incluir cifras ni comprometer alcance total — mantenerla conceptual | A mayor ticket, menor probabilidad de cierre (según Juan); alcance detallado se define en una segunda reunión técnica | #decision |
| 2026-07-13 | Representación visual no necesariamente en 3D — evaluar 2D funcional por costo | Sin activos gráficos reutilizables (todo lo existente está bajo NDA de Quellaveco); 2D puede ser igual o más funcional y más barato | #decision |

## Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Cliente pide "gemelo de planta" pero ASTAY no tiene hoy capacidad de simulación/predicción real para planta | Alta | Alto | Posicionar explícitamente como plataforma de integración + alertas, no simulación; escalar a modelos de IA solo si el cliente aporta experto de proceso |
| Ticket de proyecto completo podría llegar a ~2M USD (3-4x un gemelo de mina estándar) — a mayor ticket, menor probabilidad de cierre | Media | Alto | No dar cifras en la presentación inicial; acotar alcance base y ofrecer extensiones "según demanda" |
| Sin activos gráficos reutilizables (todo bajo NDA de Quellaveco) | Alta | Medio | Generar mockup nuevo (posible imagen de planta con IA + elementos) a cargo de Juan |
| Madurez real de instrumentación de planta del cliente (PI/OPC UA) desconocida | Alta | Medio | Indagar en la segunda reunión técnica antes de comprometer "casi tiempo real" |
| Estructura de planta (flotación + lixiviación) es una hipótesis de Juan, no confirmada por el cliente | Media | Bajo | Validar en la reunión técnica siguiente |

## 📎 Documentación

```dataview
TABLE file.mtime AS "Modificado", tipo AS "Tipo", fuente AS "Fuente"
FROM "30-Projects/Agnico_Eagle/Documentacion"
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

[📁 Carpeta Agnico_Eagle](PENDIENTE — pegar URL de OneDrive)

## Recursos y referencias

- Cliente: Agnico Eagle, operación Pinos Altos (México)
- Tipo de proyecto: Servicio de Gemelo de Planta (comercial, presentación en elaboración)
- Equipo comercial ASTAY en esta cuenta: Frank Echegaray, Julissa Mejia, Sergio Cisneros
- Sponsor del cliente: Martín Esparza
- Posible apoyo técnico futuro: Luis (ya trabaja con [[Goldfield]] en modelos predictivos), Carlos María
- Transcripción completa: `Documentacion/Referencias/2026-07-13-transcripcion-reunion-gemelo-planta.md`

---
*Última actualización: 2026-07-17*
