---
fecha: <% tp.date.now("YYYY-MM-DD") %>
tipo: entregable
subtipo: costeo
proyecto: 
version: v1
tags: []
---
# Costeo — <% tp.file.title %>

<%*
const nombreArchivo = tp.file.title + ".xlsx";
const carpetaDestino = tp.file.folder(true);
const rutaOrigen = "50-Resources/Costeo/Propuesta-Economica_Template.xlsx";
const rutaDestino = carpetaDestino + "/" + nombreArchivo;

const archivoOrigen = app.vault.getAbstractFileByPath(rutaOrigen);
let resultado = "";
if (archivoOrigen) {
  const existente = app.vault.getAbstractFileByPath(rutaDestino);
  if (!existente) {
    await app.vault.copy(archivoOrigen, rutaDestino);
    resultado = `✅ Copiado a \`${rutaDestino}\``;
  } else {
    resultado = `⚠️ Ya existe \`${rutaDestino}\` — no se sobreescribió.`;
  }
} else {
  resultado = `❌ No se encontró la plantilla en \`${rutaOrigen}\`. Verifica que 50-Resources/Costeo/Propuesta-Economica_Template.xlsx exista.`;
}
tR += resultado;
-%>

## Archivo de costeo

![[<% tp.file.title %>.xlsx]]

> Si el enlace no abre una vista previa, ábrelo desde el explorador de archivos del sistema (Obsidian delega archivos .xlsx a la aplicación externa asociada).

## Estado de la propuesta

| Aspecto | Valor |
|---|---|
| Modalidad | Precio fijo / Bolsa de horas / Servicio recurrente |
| Perfiles nuevos agregados a `costos` | |

### Consolidado mensual

> Copiar tal cual desde la hoja "Resumen Mensual" del `.xlsx` una vez completada la carga de HH.

| Mes | N° Personas | Horas | Costo Horario Promedio (USD/HH) | Costo Mano de Obra (USD) | Costo Total con Overhead (USD) |
|---|---|---|---|---|---|
| Mes 1 | | | | | |
| Mes 2 | | | | | |
| Mes 3 | | | | | |
| Mes 4 | | | | | |
| **TOTAL PROYECTO** | | | | | |

## Notas

-

---
*Este archivo es un punto de entrada en el vault para el costeo real, que vive en el `.xlsx` adjunto. Completa Cantidad y HH por mes en la hoja "Propuesta Modelo" del Excel; el costo por hora se trae automáticamente desde la hoja "costos".*
