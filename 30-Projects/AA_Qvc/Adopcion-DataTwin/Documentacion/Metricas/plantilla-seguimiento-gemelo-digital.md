# Plantilla — Seguimiento de Adopción Gemelo Digital

> Convertido automáticamente desde `plantilla_seguimiento_gemelo_digital.xlsx`. Las filas de plantilla totalmente vacías (preparadas para cargar datos futuros) se omiten y se indican como rango disponible.

## Hoja: Dashboard

| Dashboard de inserción - Gemelo Digital |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|
| Usuarios registrados =COUNTA(Usuarios!B2:B201) |  | Contactados =COUNTIF(Usuarios!K2:K201,"E - Contactado")+COUNTIF(Usuarios!K2:K201,"P - Programado")+COUNTIF(Usuarios!K2:K201,"R - Reunión realizada")+COUNTIF(Usuarios!K2:K201,"C - Cerrado")+COUNTIF(Usuarios!K2:K201,"A - Activo") |  | Sesiones realizadas =COUNTIF(Usuarios!K2:K201,"R - Reunión realizada") |  | Calificación promedio =IFERROR(AVERAGEIF(Usuarios!N2:N201,">0"),"") |  |
| Fecha | Gemelo estable | Usuarios contactados | Sesiones realizadas | Calificación promedio | Solicitudes escaladas | Casos de uso | Mensaje ejecutivo |
| Cobertura de contacto |  | Contactados / usuarios registrados |  |  |  |  |  |
| Cobertura de inducción |  | Sesiones realizadas / usuarios registrados |  |  |  |  |  |
| Usuarios activos |  | Estado A - Activo |  |  |  |  |  |
| Casos de uso identificados |  | Procesos documentados |  |  |  |  |  |
| Solicitudes escaladas |  | Escalamiento formal |  |  |  |  |  |

*(10 filas de plantilla vacías, listas para cargar datos)*

## Hoja: Usuarios

| ID | Nombre | Apellido | Correo electrónico | Cargo | Área | Régimen | Fecha primer contacto | Fecha última interacción | Medio último contacto | Estado | Fecha reunión | Duración reunión (min) | Calificación | Último acceso conocido | Observaciones | Próxima acción | Fecha próxima acción | Caso de uso identificado | Responsable seguimiento | Grabación autorizada | Link grabación |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Usuario | Ejemplo | usuario.ejemplo@cliente.com | Supervisor | Operaciones Mina | 4x3 | 2026-07-18 00:00:00 | 2026-07-18 00:00:00 | Teams | E - Contactado |  |  |  |  | Pendiente agendar sesión | Coordinar inducción | 2026-07-19 00:00:00 | Reparto de guardia | John Ramos | No |  |

*(199 filas de plantilla vacías, listas para cargar datos)*

## Hoja: Interacciones

| Fecha | Usuario ID | Nombre usuario | Área | Medio | Tipo interacción | Estado resultado | Minutos | Calificación | Observación clave | Solicitud recibida | Escalado a | Próxima acción | Fecha próxima acción | Caso de uso | Gemelo estable |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Hoja: Catalogos

| Estados | Medios | Areas | Regimen | Calificacion | SiNo |
|---|---|---|---|---|---|
| E - Contactado | Correo | Operaciones Mina | Administrativo | 1 | Sí |
| P - Programado | Teams | Geotecnia | 4x3 | 2 | No |
| R - Reunión realizada | Llamada | Perforación y Voladura | 7x7 | 3 |  |
| NR - Sin respuesta | Reunión Teams | Desarrollo Mina | 14x7 | 4 |  |
| RC - Requiere contacto posterior | Otro | Planeamiento | Otro | 5 |  |
| O - Observaciones |  | Mantenimiento |  |  |  |
| ES - Solicitud escalada |  | IM |  |  |  |
| C - Cerrado |  | Contratistas |  |  |  |
| A - Activo |  | Gerencia |  |  |  |
| I - Inactivo |  | Otra |  |  |  |
