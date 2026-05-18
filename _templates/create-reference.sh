#!/usr/bin/env bash
# =============================================================================
# create-reference.sh
# Genera el archivo base custom-reference.docx para personalizar estilos Word.
# Ejecutar UNA SOLA VEZ desde la raíz del vault.
# =============================================================================

set -e

VAULT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUTPUT="$VAULT_ROOT/_templates/custom-reference.docx"

echo ""
echo "=== Generando custom-reference.docx ==="
echo "Destino: $OUTPUT"
echo ""

# Extraer el reference.docx base de pandoc
quarto pandoc -o "$OUTPUT" --print-default-data-file reference.docx

echo "✓ Archivo generado: $OUTPUT"
echo ""
echo "==================================================================="
echo "  SIGUIENTES PASOS — Abre el archivo en Word y edita estos estilos:"
echo "==================================================================="
echo ""
echo "  Menú Word: Inicio → Estilos → Clic derecho → Modificar"
echo ""
echo "  ESTILO              USAR PARA                  SUGERENCIA"
echo "  ─────────────────────────────────────────────────────────────"
echo "  Title               Título principal           Calibri 24pt Bold"
echo "  Subtitle            Subtítulo                  Calibri 14pt Gris"
echo "  Heading 1           Sección principal (##)     Calibri 16pt Bold Azul"
echo "  Heading 2           Subsección (###)           Calibri 13pt Bold"
echo "  Heading 3           Sub-subsección (####)      Calibri 11pt Bold Itálica"
echo "  Normal              Texto de párrafo           Calibri 11pt"
echo "  First Paragraph     Primer párrafo de sección  igual a Normal"
echo "  Verbatim Char       Código en línea \`code\`     Consolas 10pt Gris claro"
echo "  Source Code         Bloque de código           Consolas 9pt, fondo #F5F5F5"
echo "  Table               Tablas                     Calibri 10pt"
echo "  Caption             Leyendas de figura/tabla   Calibri 9pt Itálica Gris"
echo "  Block Text          Citas en bloque (> quote)  Calibri 11pt Itálica, borde izq"
echo ""
echo "  IMPORTANTE:"
echo "  - No borres ni renombres estilos existentes — pandoc los necesita"
echo "  - Solo modifica la apariencia (fuente, color, tamaño, espacio)"
echo "  - Guarda el archivo con el mismo nombre: custom-reference.docx"
echo ""
echo "  COLORES SUGERIDOS (estilo técnico profesional):"
echo "  - Heading 1: #1F3864  (azul marino oscuro)"
echo "  - Heading 2: #2E5090  (azul corporativo)"
echo "  - Código inline background: #F0F0F0"
echo "  - Tabla header: #1F3864 texto blanco"
echo ""
echo "  Después de guardar, todos los .qmd del vault usarán tu estilo."
echo "==================================================================="
echo ""
