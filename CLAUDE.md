# CLAUDE.md — JM_Agenda Vault Instructions

## Purpose

This is a second-brain / productivity vault for a **data architect and data engineer** working on the **DataTwin platform** at Quellaveco open-pit mine. It manages concurrent workstreams across: DataTwin, GIS/PostGIS block models, and GPS Flink pipelines.

---

## Folder Map

| Folder | Contents |
|--------|----------|
| `00-Inbox/` | Unprocessed captures. Process daily into projects or areas. |
| `10-Daily/` | Daily notes, filename `YYYY-MM-DD.md`. One per working day. |
| `20-Weekly/` | Weekly reviews, filename `YYYY-[W]WW.md` (e.g. `2026-W21.md`). |
| `30-Projects/` | One subfolder per project. Each has a Project Note + tasks. |
| `30-Projects/DataTwin/` | DataTwin platform notes, ADRs, decisions |
| `30-Projects/GIS-BlockModel/` | PostGIS schema, spatial analysis notes |
| `30-Projects/GPS-Pipeline/` | Flink/Kafka GPS pipeline notes |
| `40-Areas/` | Ongoing responsibilities (not projects). Architecture, stakeholders. |
| `40-Areas/ToDo-Central.md` | **Master task dashboard** — Dataview queries across vault. |
| `50-Resources/` | Reference material: tech docs, mining domain knowledge. |
| `60-Archive/` | Completed/inactive projects and old notes. |
| `_templates/` | Templater templates. Do not edit the `<% %>` syntax blocks. |

---

## Task Syntax (Tasks Plugin)

Always use this format when creating tasks:

```
- [ ] Task description 📅 YYYY-MM-DD ⏫
```

**Priority emojis:**
- `🔺` Urgent (highest)
- `⏫` High
- `🔼` Medium
- (no emoji) Normal
- `🔽` Low

**Special tags:**
- `#hoy` — do today
- `#blocked` — waiting on external dependency
- `#decision` — decision record
- `#arquitectura` — architecture-related
- `#datatwin` `#gis` `#gps` — project tags

**Example:**
```
- [ ] Validar esquema Avro con Duane 📅 2026-05-20 🔺 #datatwin
```

---

## Template Usage Guide

| Template | When to use | Location of output |
|----------|-------------|-------------------|
| `Daily Note.md` | Every working day, via Templater | `10-Daily/YYYY-MM-DD.md` |
| `Weekly Review.md` | Every Monday morning | `20-Weekly/YYYY-[W]WW.md` |
| `Project Note.md` | When starting a new project | `30-Projects/<ProjectName>/` |
| `Quick Capture.md` | Fast capture anytime | `00-Inbox/` |
| `Quarto-Word.qmd` | Technical reports, proposals, scope docs for Word export | `30-Projects/<ProjectName>/` |
| `Doc-Reunion.md` | Meeting transcription / notes | `30-Projects/<ProjectName>/Documentacion/Reuniones/` |
| `Doc-Comunicacion.md` | Email, WhatsApp, Teams message capture | `30-Projects/<ProjectName>/Documentacion/Comunicaciones/` |
| `Doc-Referencia.md` | External document, standard, web reference | `30-Projects/<ProjectName>/Documentacion/Referencias/` |

---

## Quarto (.qmd) documents

Template: `_templates/Quarto-Word.qmd`
Guide: `_templates/quarto-guide.md`
Reference doc (custom styles): `_templates/custom-reference.docx` (crear manualmente, ver guía)

When creating a Quarto document for a project:
1. Copy `_templates/Quarto-Word.qmd` into the project folder: `30-Projects/<Project>/filename.qmd`
2. Update YAML frontmatter: title, subtitle, author, date
3. Render to Word: `quarto render filename.qmd --to docx`
4. The `.docx` is generated in the same folder as the `.qmd`

When asked to write a technical report, proposal, or scope document:
- Create a `.qmd` file (not `.md`) in the relevant project folder
- Use the Quarto-Word template as base
- Sections: Resumen Ejecutivo → Contexto → Análisis → Conclusiones → Apéndice

---

## Instructions for Claude

### When asked about projects:
1. Read the project note(s) in `30-Projects/<ProjectName>/`.
2. Check `40-Areas/ToDo-Central.md` for task status.

### When creating tasks:
- Always use Tasks plugin syntax: `- [ ] Description 📅 YYYY-MM-DD <priority-emoji> <project-tag>`
- Place tasks in the relevant project note or daily note, not in a separate file.
- Never create tasks without a due date unless explicitly asked.

### When asked for a weekly review:
1. Read all daily notes from `10-Daily/` for the current week (Monday–Sunday).
2. Read the current week's review note from `20-Weekly/`.
3. Summarize completed tasks, blockers, and open items.

### When creating a new Daily Note:
- Filename: `10-Daily/YYYY-MM-DD.md`
- Use the `_templates/Daily Note.md` template as base.
- Replace all `<% %>` Templater expressions with concrete values.

### When asked to archive something:
- Move files to `60-Archive/` preserving subfolder structure.
- Update any internal links that pointed to the moved file.

### When creating project documentation (meetings, emails, references):
- Place files in `30-Projects/<ProjectName>/Documentacion/<subfolder>/`
- Subfolders: `Reuniones/` | `Comunicaciones/` | `Referencias/` | `Entregables/`
- Use naming conventions:
  - Meeting: `YYYY-MM-DD-reunion-[tema].md` (template: `Doc-Reunion`)
  - Email/message: `YYYY-MM-DD-[email|msg]-[remitente]-[tema].md` (template: `Doc-Comunicacion`)
  - Reference: `[tema]-ref.md` (template: `Doc-Referencia`)
  - Deliverable/proposal: `YYYY-MM-DD-[tipo]-[version].qmd` (template: `Quarto-Word.qmd`)
- Every new project must have these 4 subfolders created with a `.gitkeep` file each.

---

## Project Structure Standard

### Project note frontmatter (required fields)

Every project note must have this frontmatter, **in this order**:

```yaml
---
project: <ProjectName>          # matches folder name exactly
status: active | completed | paused
stage: <current-stage>          # e.g. propuesta-tecnica-en-elaboracion | propuesta-enviada | en-ejecucion
owner: "Juan Mansilla"
stakeholders: [Name1, Name2]
start-date: YYYY-MM-DD
tags: [project-tag]
onedrive: ""                    # paste URL when available
---
```

### Project note required sections (in this order)

1. `## Estado actual` — status table showing what's done / pending (like MarCobre pattern)
2. `## Objetivo` — 2-3 sentence goal statement
3. `## Tareas activas` — open tasks with Tasks plugin syntax
4. `## Tareas completadas` — checked tasks with completion date
5. `## Decisiones clave` — decision log table
6. `## Riesgos` — risk table
7. `## 📎 Documentación` — Dataview query + naming table
8. `## ☁️ OneDrive` — link placeholder
9. `## Recursos y referencias` — links to key files

### Sub-project structure

Use sub-project folders when a client project has **2+ independent deliverables** with separate proposals, timelines, or teams.

```
30-Projects/<Client>/
├── <Client>.md                    ← parent note: lists sub-projects, status table, cross-cutting tasks
├── Documentacion/                 ← docs for the client relationship (not a specific sub-project)
│   ├── Reuniones/
│   ├── Comunicaciones/
│   ├── Referencias/
│   └── Entregables/
├── <SubProject-A>/
│   ├── <SubProject-A>.md          ← sub-project note (same frontmatter standard + parent: <Client>)
│   └── Documentacion/
│       ├── Reuniones/
│       ├── Comunicaciones/
│       ├── Referencias/
│       └── Entregables/
│           └── YYYY-MM-DD-propuesta-tecnica-v1.qmd
└── <SubProject-B>/
    ├── <SubProject-B>.md
    └── Documentacion/
        └── Entregables/
            └── YYYY-MM-DD-propuesta-tecnica-v1.qmd
```

Sub-project note frontmatter adds `parent: <Client>` field.

### QMD (Quarto) YAML standard

**Always use this exact YAML block** for all `.qmd` proposals and reports:

```yaml
---
title: "Document Title"
subtitle: "Subtitle — Client Name"
author: "ASTAY Systems"
date: "YYYY-MM-DD"
format:
  docx:
    reference-doc: "<relative-path-to>/_templates/custom-reference.docx"
    toc: true
    toc-depth: 2
    number-sections: true
lang: es
---
```

**Reference-doc path** (count levels from file to vault root):
- File at `30-Projects/<Project>/Documentacion/Entregables/` → `"../../../../_templates/custom-reference.docx"` (4 levels)
- File at `30-Projects/<Client>/<SubProject>/Documentacion/Entregables/` → `"../../../../../_templates/custom-reference.docx"` (5 levels)

**Never use:** `date: today`, `date-format`, `author` as multi-line block, `highlight-style`, `fig-width`, `execute:` block.

### QMD section hierarchy

- `#` (H1) — top-level sections: `Resumen Ejecutivo`, `1. Contexto`, `2. Solución`, `Apéndice`
- `##` (H2) — subsections: `1.1 Contexto operacional`, `2.3 Modelo de datos`, `A. Glosario`
- `###` (H3) — only if truly needed for third-level nesting

With `number-sections: true`, Quarto adds numbers automatically. Never add manual numbers inside headers.

---

## Dataview Query Conventions

- Use `TABLE` syntax for multi-column views.
- Use `TASK` for task queries.
- Always filter out `_templates` folder: `WHERE file.path != "_templates"`.
- Date comparisons use `date(today)`, `date("YYYY-MM-DD")`, `dur(7 days)`.
- Group by folder with `GROUP BY file.folder`.

---

## Key Stakeholders

- **Jaime** — primary stakeholder, access/credentials decisions
- **Duane's team** — architecture reviews, schema validation

---

## RAW Ideas system

Location: `00-Inbox/RAW-Ideas/`
Index: `00-Inbox/RAW-Ideas/INDEX.md`
Template: `_templates/RAW-Idea.md`

Subcarpetas: `proyectos/` | `arquitectura/` | `personal/` | `sin-clasificar/`

When the user says "tengo una idea" or "anota esto" or "quiero capturar":
1. Ask: ¿categoría? (proyectos / arquitectura / personal / sin-clasificar)
2. Ask: ¿proyecto relacionado? (opcional)
3. Create a new note in the correct subfolder using RAW-Idea.md template
4. Filename: `YYYY-MM-DD-[slug-de-la-idea].md`

Processing rule: during Weekly Review, list all notes where `procesada = false`
and prompt user to decide fate of each one (tarea / proyecto / archivo / pendiente).

---

*Last updated: 2026-05-24 — removed Kanban boards per project; updated project note required sections*
