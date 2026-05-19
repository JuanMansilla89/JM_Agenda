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
| `_kanban/` | Kanban boards, one per project. |

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

## Kanban Boards

| Project | Board file |
|---------|-----------|
| DataTwin | `_kanban/DataTwin-board.md` |
| GIS / Block Model | `_kanban/GIS-BlockModel-board.md` |
| GPS Pipeline | `_kanban/GPS-Pipeline-board.md` |

Columns: **Backlog → En curso → En revisión → Bloqueado → Done**

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
1. Read the relevant Kanban board in `_kanban/`.
2. Read the project note(s) in `30-Projects/<ProjectName>/`.
3. Check `40-Areas/ToDo-Central.md` for task status.

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

*Last updated: 2026-05-18 — added documentation standard (Doc-Reunion, Doc-Comunicacion, Doc-Referencia)*
