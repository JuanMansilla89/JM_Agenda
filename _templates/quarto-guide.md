# Quarto — Guía de uso (Word export)

| Archivo | Rol |
|---------|-----|
| `_quarto.yml` | Config central — settings aplicados a todos los `.qmd` del vault |
| `_templates/Quarto-Word.qmd` | Template de contenido — estructura de documento |
| `_templates/Quarto-Estilo.qmd` | Showcase de todos los elementos de formato |
| `_templates/create-reference.sh` | Genera `custom-reference.docx` base para editar en Word |
| `_templates/custom-reference.docx` | Estilos personalizados (generado + editado en Word) |

**Salida:** `.docx` en `_output/` (configurable en `_quarto.yml`)

---

## Flujo básico

### 1. Crear un documento nuevo
Copia el template a la carpeta del proyecto:
```bash
cp "_templates/Quarto-Word.qmd" "30-Projects/MiProyecto/nombre-documento.qmd"
```

### 2. Editar el documento
Abre el `.qmd` en VS Code (con la extensión Quarto instalada) o en cualquier editor de texto. Los archivos `.qmd` son Markdown estándar — Obsidian los abre sin problema para editar.

### 3. Renderizar a Word
```bash
# Desde la raíz del vault
quarto render "30-Projects/MiProyecto/nombre-documento.qmd" --to docx

# Si quieres ver el resultado al instante (preview en browser)
quarto preview "30-Projects/MiProyecto/nombre-documento.qmd"
```

El `.docx` se genera en la misma carpeta que el `.qmd`.

---

## Personalizar estilos Word (reference-doc)

Para que el Word generado use tus propios estilos (fuentes, colores, cabeceras de empresa):

### Paso 1 — Generar el reference base
```bash
quarto pandoc -o _templates/custom-reference.docx \
  --print-default-data-file reference.docx
```

### Paso 2 — Editar los estilos en Word
1. Abre `_templates/custom-reference.docx` en Word
2. Modifica los estilos: **Heading 1**, **Heading 2**, **Normal**, **Table**, **Code Block**, **Title**, **Subtitle**
3. Guarda el archivo (no cambies el nombre)

### Paso 3 — Activar en el template
En el YAML del `.qmd`, descomentar la línea:
```yaml
format:
  docx:
    # reference-doc: _templates/custom-reference.docx   ← quitar el #
    reference-doc: _templates/custom-reference.docx
```

---

## Opciones YAML más usadas

```yaml
format:
  docx:
    toc: true                    # tabla de contenidos
    toc-depth: 3                 # niveles en el TOC
    number-sections: true        # 1. 1.1 1.2...
    reference-doc: ref.docx      # estilos personalizados
    fig-width: 6                 # ancho de figuras (pulgadas)
    fig-height: 4                # alto de figuras
    page-width: 6.5              # ancho de página útil

execute:
  echo: false        # no mostrar código fuente en el Word
  warning: false     # no mostrar warnings de R/Python
  freeze: auto       # no re-ejecutar código si no cambió
```

---

## Tipos de documentos — cuándo usar qué

| Tipo | Template base | Ajustes |
|------|--------------|---------|
| Propuesta técnica | `Quarto-Word.qmd` | Agregar sección Alcance económico |
| Reporte de proyecto | `Quarto-Word.qmd` | Agregar sección KPIs y estado |
| Documento de alcance BIM | `Quarto-Word.qmd` | Agregar tabla LOD y exclusiones |
| ADR / Decisión técnica | `Quarto-Word.qmd` | Reducir a 2-3 secciones |
| Informe de compatibilidad | `Quarto-Word.qmd` | Agregar sección de tests y evidencia |

---

## Dónde guardar los .qmd

Los documentos Quarto van dentro de la carpeta del proyecto correspondiente:

```
30-Projects/MarCobre/
  MarCobre.md                  ← nota Obsidian del proyecto
  alcance-bim-marcobre.qmd     ← documento Quarto
  alcance-bim-marcobre.docx    ← Word generado (no versionear si es grande)

30-Projects/Las-Bambas/
  Las-Bambas.md
  reporte-estado-2026-05.qmd
  reporte-estado-2026-05.docx
```

### .gitignore recomendado para .docx
Si usas Obsidian Git, los `.docx` generados pueden inflar el repo. Agregar a `.gitignore`:
```
*.docx
!_templates/custom-reference.docx   # excepto el reference doc
```

---

## Comandos de referencia rápida

```bash
# Renderizar a Word
quarto render archivo.qmd --to docx

# Renderizar a PDF (requiere LaTeX o typst)
quarto render archivo.qmd --to pdf

# Renderizar a HTML
quarto render archivo.qmd --to html

# Preview en vivo (recarga al guardar)
quarto preview archivo.qmd

# Ver versión instalada
quarto --version

# Verificar instalación completa
quarto check
```

---

*Ver también: [[Manual-Proyectos-Kanban]] · [[CLAUDE]]*
