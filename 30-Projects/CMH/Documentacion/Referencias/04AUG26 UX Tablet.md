 para ## Aplicación móvil/tablet de terreno — Nexo 360 Operation + Mantenimiento 360

Actúa como un **Senior Product Designer, UX Architect, Business Analyst y Frontend Engineer**, especializado en minería subterránea, planificación de guardias, Short Interval Control, mantenimiento de flota, gestión de disponibilidad y aplicaciones industriales offline-first.

Tu objetivo es analizar toda la documentación adjunta y construir una **aplicación frontend de terreno, tablet-first, avanzada, coherente y completamente navegable**, que integre en un solo producto dos espacios funcionales:

1. **Nexo 360 Operation**, para la ejecución y supervisión de actividades operativas durante la guardia.
2. **Mantenimiento 360**, para la atención, ejecución y cierre de actividades de mantenimiento de equipos.

Este proyecto corresponde exclusivamente a la aplicación de terreno.

No construyas dentro de este proyecto la plataforma web de planificación, administración y control. No incluyas dashboards ejecutivos, gestión de usuarios, administración de maestros, auditoría avanzada ni configuraciones corporativas propias de escritorio.

---

# 1. Fuente de verdad

Antes de construir cualquier pantalla:

1. Lee completamente todos los archivos adjuntos.
2. Utiliza el documento de alcance y requisitos técnicos como fuente principal.
3. Utiliza los documentos de procesos, diagramas e investigaciones únicamente para:
    - Comprender el dominio.
    - Diseñar escenarios realistas.
    - Identificar dependencias.
    - Proponer una experiencia de usuario coherente.
    - Detectar decisiones pendientes.
4. No conviertas automáticamente un benchmark o práctica de mercado en un requerimiento confirmado.
5. Clasifica internamente cada elemento como:
    - Requerimiento explícito.
    - Información verbal.
    - Referencia de benchmark.
    - Supuesto de diseño.
    - Regla pendiente de validación.
    - Dato pendiente de definición.
6. No inventes procesos, reglas, permisos, integraciones, campos o indicadores no sustentados.
7. Cuando falte información, utiliza supuestos mínimos para completar la experiencia visual.
8. No detengas la construcción para solicitar aclaraciones.
9. No presentes los supuestos como decisiones definitivas del cliente.

---

# 2. Estructura del producto

Construye **una sola aplicación de terreno**, con navegación y funcionalidades adaptadas al perfil del usuario.
Debe contener dos espacios claramente diferenciados.

## A. Espacio Operaciones

Orientado a:
- Operadores.
- Jefes de guardia.
- Jefes de sección.
- Supervisores de operaciones.
- Personal de despacho o control operativo, cuando corresponda.

Debe permitir consultar y ejecutar el plan de guardia, recibir órdenes de trabajo, registrar avances, reportar restricciones, gestionar incidencias y realizar el cierre operativo.

## B. Espacio Mantenimiento

Orientado a:
- Técnicos.
- Mecánicos.
- Supervisores de mantenimiento.
    
- Personal responsable de diagnosticar, intervenir y liberar equipos.
    

Debe permitir recibir avisos, ejecutar órdenes, registrar diagnósticos, intervenciones, tiempos, componentes, materiales, pruebas y certificaciones de retorno a servicio.

## C. Funciones compartidas

Ambos espacios deben compartir:

- Perfil de usuario.
    
- Guardia activa.
    
- Fecha y turno.
    
- Zona o sección.
    
- Estado de conexión.
    
- Última sincronización.
    
- Cola de cambios pendientes.
    
- Notificaciones.
    
- Evidencias.
    
- Observaciones.
    
- Historial básico.
    
- Consulta del estado de equipos.
    
- Cambio de perfil demostrativo.
    

La navegación debe cambiar según el rol.

No muestres todos los módulos a todos los usuarios.

---

# 3. Dispositivo y contexto de uso

Diseña la aplicación con enfoque:

- **Tablet-first**.
    
- Orientación horizontal como experiencia principal.
    
- Uso táctil.
    
- Uso en interior mina.
    
- Conectividad intermitente.
    
- Turnos diurnos y nocturnos.
    
- Interacciones rápidas.
    
- Reducción de digitación.
    
- Posible uso con guantes.
    
- Alto contraste.
    
- Información priorizada por contexto.
    

También debe responder correctamente en tablet vertical y smartphone, pero el smartphone será una experiencia secundaria.

Utiliza:

- Botones grandes.
    
- Áreas táctiles amplias.
    
- Formularios cortos.
    
- Selectores rápidos.
    
- Escaneo o selección simulada de equipos.
    
- Acciones principales persistentes.
    
- Navegación inferior o lateral compacta.
    
- Tipografía legible.
    
- Estados identificados mediante texto, icono y color.
    
- Confirmaciones para acciones críticas.
    
- Feedback inmediato después de guardar.
    

Incluye:

- Modo claro.
    
- Modo oscuro demostrativo para interior mina o turno noche.
    

El modo oscuro debe tratarse como decisión de UX, no como definición oficial de marca.

---

# 4. Inicio y contexto operacional

La aplicación debe iniciar con una pantalla que permita:

1. Seleccionar un perfil demostrativo.
    
2. Mostrar nombre mock.
    
3. Mostrar rol.
    
4. Mostrar empresa.
    
5. Mostrar guardia activa.
    
6. Mostrar zona o sección asignada.
    
7. Mostrar estado de conexión.
    
8. Mostrar última sincronización.
    
9. Mostrar cambios pendientes.
    
10. Ingresar al espacio disponible según el rol.
    

Cuando un usuario tenga acceso a Operaciones y Mantenimiento, permite cambiar de espacio desde un selector claramente visible.

No implementar autenticación real.

---

# 5. Espacio Nexo 360 Operation

## 5.1 Navegación

Incluye como mínimo:

- Inicio.
    
- Mi guardia.
    
- Mis órdenes.
    
- Actividades.
    
- Labores.
    
- Equipos.
    
- Incidencias.
    
- Restricciones.
    
- Cierre.
    
- Sincronización.
    

No incluir:

- Gestión de usuarios.
    
- Administración de catálogos.
    
- Configuración general.
    
- Gestión corporativa de equipos.
    
- Reportes ejecutivos.
    
- Auditoría completa.
    
- Planificación mensual o semanal detallada.
    

---

## 5.2 Inicio de Operaciones

Muestra:

- Guardia actual.
    
- Horario.
    
- Zona o sección.
    
- Responsable.
    
- Actividades asignadas.
    
- Actividades pendientes.
    
- Actividades en ejecución.
    
- Actividades bloqueadas.
    
- Órdenes pendientes de recepción.
    
- Restricciones abiertas.
    
- Incidencias activas.
    
- Equipos asignados.
    
- Estado de sincronización.
    

Incluye acciones rápidas:

- Iniciar actividad.
    
- Registrar avance.
    
- Reportar incidencia.
    
- Reportar restricción.
    
- Reportar falla de equipo.
    
- Consultar mis órdenes.
    
- Cerrar actividad.
    

---

## 5.3 Mi guardia

Construye una vista cronológica y compacta con:

- Actividad.
    
- Orden de trabajo.
    
- Prioridad.
    
- Estado.
    
- Labor o frente.
    
- Zona.
    
- Equipo asignado.
    
- Responsable.
    
- Hora planificada.
    
- Avance.
    
- Restricciones.
    
- Dependencias.
    
- Estado de recepción.
    

Estados conceptuales:

- Pendiente.
    
- Lista para iniciar.
    
- En ejecución.
    
- Pausada.
    
- Bloqueada.
    
- Reprogramada.
    
- Completada.
    
- Parcial.
    
- No ejecutada.
    
- Transferida.
    

La taxonomía debe mantenerse desacoplada en datos mock para permitir cambios posteriores.

---

## 5.4 Mis órdenes de trabajo

Permite:

- Consultar órdenes asignadas.
    
- Buscar por código, actividad o labor.
    
- Filtrar por estado.
    
- Abrir el detalle.
    
- Confirmar recepción.
    
- Revisar instrucciones.
    
- Iniciar actividad.
    
- Registrar avance.
    
- Registrar observación.
    
- Adjuntar evidencia.
    
- Pausar.
    
- Reportar bloqueo.
    
- Completar.
    
- Consultar historial.
    

Cada orden debe mostrar:

- Código.
    
- Guardia.
    
- Actividad.
    
- Labor o frente.
    
- Zona y sección.
    
- Responsable.
    
- Cuadrilla.
    
- Equipo.
    
- Prioridad.
    
- Horario.
    
- Estado.
    
- Instrucciones.
    
- Restricciones.
    
- Controles aplicables.
    
- Observaciones.
    
- Historial.
    

Las referencias a PETAR, IPERC Continuo, checklist preuso, permiso de reingreso o liberación de frente deben mostrarse como controles configurables o pendientes de validación cuando no estén confirmadas.

---

## 5.5 Inicio de actividad

Implementa el siguiente flujo:

1. Abrir la orden.
    
2. Revisar instrucciones.
    
3. Confirmar ubicación.
    
4. Confirmar equipo.
    
5. Confirmar disponibilidad.
    
6. Revisar restricciones.
    
7. Revisar controles requeridos.
    
8. Iniciar actividad.
    
9. Registrar avance.
    
10. Completar o reportar desviación.
    

Antes de iniciar, muestra:

- Validaciones superadas.
    
- Advertencias.
    
- Bloqueos.
    
- Dependencias pendientes.
    
- Estado desactualizado del equipo.
    
- Controles pendientes.
    

Cuando exista un bloqueo, evita el inicio salvo que el rol tenga permiso simulado de override.

Todo override debe registrar:

- Usuario.
    
- Rol.
    
- Fecha y hora.
    
- Motivo.
    
- Regla afectada.
    
- Estado anterior.
    
- Estado posterior.
    
- Evidencia opcional.
    

---

## 5.6 Registro de avance

Permite registrar:

- Porcentaje de avance.
    
- Cantidad ejecutada.
    
- Unidad.
    
- Fecha y hora.
    
- Observación.
    
- Evidencia.
    
- Estado de la labor.
    
- Estado del equipo.
    
- Incidencia relacionada.
    
- Restricción relacionada.
    

Utiliza métricas mock según la actividad:

- Metros perforados.
    
- Número de taladros.
    
- Toneladas.
    
- Ciclos.
    
- Número de pernos.
    
- Metros cuadrados.
    
- Horas de equipo.
    

No presentes estas métricas como configuración oficial.

---

## 5.7 Incidencias y restricciones

Permite registrar desde cualquier actividad:

- Tipo.
    
- Categoría.
    
- Fecha y hora.
    
- Ubicación.
    
- Labor.
    
- Actividad.
    
- Equipo.
    
- Descripción.
    
- Severidad o impacto.
    
- Acción inmediata.
    
- Evidencia.
    
- Responsable informado.
    
- Estado.
    

Escenarios mock permitidos:

- Falla de equipo.
    
- Restricción geotécnica.
    
- Ventilación insuficiente.
    
- Acumulación de agua.
    
- Falta de personal.
    
- Falta de material.
    
- Ruta no habilitada.
    
- Condición insegura.
    
- Dependencia no completada.
    

Estados conceptuales:

- Abierta.
    
- En evaluación.
    
- Contenida.
    
- Resuelta.
    
- Transferida.
    

---

## 5.8 Reasignación y reprogramación

Para roles autorizados, permite:

- Cambiar responsable.
    
- Cambiar cuadrilla.
    
- Cambiar equipo.
    
- Cambiar hora.
    
- Cambiar prioridad.
    
- Pausar.
    
- Reprogramar.
    
- Transferir al siguiente turno.
    

Todo cambio debe requerir:

- Motivo.
    
- Impacto.
    
- Usuario.
    
- Fecha y hora.
    

Debe conservar:

- Plan original.
    
- Plan vigente.
    
- Recurso anterior.
    
- Recurso nuevo.
    
- Historial.
    

La autoridad definitiva para cada cambio es una definición pendiente. Simula permisos por rol.

---

## 5.9 Consulta de equipos

Construye una vista simple con:

- Código.
    
- Tipo.
    
- Estado oficial.
    
- Estado propuesto.
    
- Ubicación.
    
- Fuente del estado.
    
- Última actualización.
    
- Antigüedad.
    
- Nivel de confianza.
    
- Actividad asignada.
    
- Restricción.
    
- Orden de mantenimiento activa.
    

Estados conceptuales:

- Operativo.
    
- Disponible.
    
- Standby.
    
- Panne.
    
- Taller.
    
- Mantenimiento preventivo.
    
- Mantenimiento correctivo.
    
- Esperando material.
    
- Bloqueado.
    
- No habilitado.
    

Un equipo con información desactualizada debe mostrar una advertencia y no presentarse como plenamente confiable.

---

## 5.10 Cierre de actividad

Permite:

1. Confirmar resultado.
    
2. Registrar avance final.
    
3. Registrar observaciones.
    
4. Registrar evidencia.
    
5. Registrar estado final de la labor.
    
6. Registrar estado final del equipo.
    
7. Identificar pendientes.
    
8. Registrar desviaciones.
    
9. Completar.
    
10. Transferir.
    

Estados finales:

- Completada.
    
- Parcial.
    
- No ejecutada.
    
- Bloqueada.
    
- Transferida.
    

No permitas completar una actividad con desviaciones sin registrar el motivo.

---

## 5.11 Cierre de guardia

Para roles autorizados, permite revisar:

- Actividades completadas.
    
- Actividades parciales.
    
- Actividades no iniciadas.
    
- Actividades bloqueadas.
    
- Incidencias.
    
- Restricciones.
    
- Equipos no disponibles.
    
- Estado de labores.
    
- Pendientes.
    
- Desviaciones.
    
- Cambios realizados.
    

Permite:

- Completar datos faltantes.
    
- Crear notas de handover.
    
- Seleccionar pendientes transferibles.
    
- Confirmar entrega al turno siguiente.
    
- Confirmar cierre de forma simulada.
    

El cierre debe alimentar visualmente la siguiente guardia. No debe quedar únicamente como reporte histórico.

---

# 6. Espacio Mantenimiento 360

## 6.1 Navegación

Incluye como mínimo:

- Inicio.
    
- Equipos asignados.
    
- Avisos.
    
- Órdenes.
    
- Diagnóstico.
    
- Intervenciones.
    
- Materiales.
    
- Pruebas.
    
- Historial.
    
- Sincronización.
    

No incluir:

- Planificación corporativa.
    
- Gestión completa del backlog.
    
- Maestros.
    
- Gestión de usuarios.
    
- Configuración administrativa.
    
- Auditoría avanzada.
    

---

## 6.2 Inicio de Mantenimiento

Muestra:

- Guardia actual.
    
- Órdenes asignadas.
    
- Avisos nuevos.
    
- Órdenes críticas.
    
- Equipos en panne.
    
- Equipos en taller.
    
- Equipos esperando material.
    
- Órdenes pendientes de prueba.
    
- Retornos pendientes de certificación.
    
- Cambios pendientes de sincronización.
    

Acciones rápidas:

- Recibir aviso.
    
- Iniciar diagnóstico.
    
- Cambiar estado.
    
- Registrar intervención.
    
- Solicitar material.
    
- Registrar prueba.
    
- Certificar retorno.
    

---

## 6.3 Avisos

Permite:

- Consultar avisos.
    
- Filtrar.
    
- Buscar.
    
- Abrir detalle.
    
- Confirmar recepción.
    
- Clasificar.
    
- Asignar prioridad preliminar.
    
- Asociar equipo.
    
- Confirmar ubicación.
    
- Convertir en orden simulada.
    
- Devolver con motivo.
    
- Consultar historial.
    

Detalle mínimo:

- Código.
    
- Equipo.
    
- Reportado por.
    
- Fecha y hora.
    
- Ubicación.
    
- Síntoma.
    
- Descripción.
    
- Evidencia.
    
- Impacto operacional.
    
- Estado del equipo.
    
- Estado del aviso.
    

---

## 6.4 Cambio de estado de equipo

Implementa:

1. Seleccionar equipo.
    
2. Consultar estado actual.
    
3. Seleccionar evento.
    
4. Seleccionar nuevo estado.
    
5. Registrar fecha y hora.
    
6. Confirmar ubicación.
    
7. Registrar observación.
    
8. Adjuntar evidencia.
    
9. Validar permisos.
    
10. Guardar.
    
11. Confirmar estado oficial cuando corresponda.
    

Principios demostrativos:

- Las transiciones que reducen disponibilidad pueden registrarse inmediatamente.
    
- Las transiciones que aumentan disponibilidad requieren confirmación.
    
- Puede existir un estado propuesto antes del estado oficial.
    

No hardcodees responsables definitivos.

---

## 6.5 Órdenes de mantenimiento

La lista debe mostrar:

- Código.
    
- Equipo.
    
- Tipo.
    
- Prioridad.
    
- Estado.
    
- Responsable.
    
- Ubicación.
    
- Fecha planificada.
    
- Motivo.
    
- Materiales.
    
- Antigüedad.
    
- Impacto.
    

Estados preliminares:

- Nueva.
    
- Evaluada.
    
- Asignada.
    
- En diagnóstico.
    
- En ejecución.
    
- Pausada.
    
- Esperando material.
    
- Pendiente de prueba.
    
- Pendiente de certificación.
    
- Cerrada.
    
- Cancelada.
    

---

## 6.6 Diagnóstico

Permite registrar:

- Síntoma.
    
- Sistema.
    
- Componente.
    
- Hallazgo.
    
- Causa preliminar.
    
- Severidad.
    
- Acción recomendada.
    
- Tareas necesarias.
    
- Herramientas.
    
- Materiales.
    
- Duración estimada.
    
- Observaciones.
    
- Evidencias.
    

El diagnóstico puede actualizar la prioridad y el estado, dejando trazabilidad.

---

## 6.7 Intervención

Permite:

- Iniciar.
    
- Pausar.
    
- Reanudar.
    
- Marcar tareas.
    
- Registrar tiempo.
    
- Registrar mano de obra.
    
- Registrar componentes intervenidos.
    
- Registrar materiales utilizados.
    
- Registrar causa.
    
- Registrar observaciones.
    
- Adjuntar evidencias.
    
- Reportar bloqueo.
    
- Solicitar apoyo.
    
- Solicitar material.
    
- Completar.
    

Diferencia visualmente:

- Tiempo activo.
    
- Tiempo de espera.
    
- Tiempo esperando material.
    
- Tiempo esperando acceso o traslado.
    

No presentes estos tiempos como fórmula oficial de MTTR o MDT.

---

## 6.8 Materiales y repuestos

Permite:

- Agregar material.
    
- Registrar cantidad.
    
- Consultar stock simulado.
    
- Reservar de forma simulada.
    
- Solicitar de forma simulada.
    
- Registrar entrega.
    
- Registrar consumo.
    
- Marcar orden esperando material.
    
- Registrar fecha estimada.
    
- Registrar alternativa.
    

Alternativas mock:

- Canibalización.
    
- Préstamo.
    
- Compra de emergencia.
    
- Reprogramación.
    

No implementar SAP real.

---

## 6.9 Pruebas y certificación de retorno

Permite:

1. Registrar pruebas.
    
2. Registrar resultados.
    
3. Adjuntar evidencia.
    
4. Indicar conformidad.
    
5. Registrar observaciones.
    
6. Solicitar corrección si falla.
    
7. Certificar retorno.
    
8. Actualizar estado propuesto.
    
9. Confirmar estado oficial.
    
10. Hacer visible el equipo para Operaciones.
    

La certificación debe registrar:

- Usuario.
    
- Rol.
    
- Fecha y hora.
    
- Resultado.
    
- Estado anterior.
    
- Estado posterior.
    

---

## 6.10 Historial del equipo

Muestra un timeline con:

- Estados.
    
- Avisos.
    
- Órdenes.
    
- Intervenciones.
    
- Componentes.
    
- Materiales.
    
- Ubicaciones.
    
- Pruebas.
    
- Certificaciones.
    
- Usuarios responsables.
    

La información debe ser coherente entre Mantenimiento y Operaciones.

---

# 7. Operación offline simulada

Representa:

- Conectado.
    
- Sin conexión.
    
- Sincronizando.
    
- Cambios pendientes.
    
- Sincronización completada.
    
- Advertencia.
    
- Error.
    
- Conflicto.
    

El estado sin conexión debe tratarse como una condición operacional normal.

Permite simular:

- Descarga previa de guardia.
    
- Consulta de datos sincronizados.
    
- Registro offline.
    
- Guardado local.
    
- Borradores.
    
- Cola de cambios.
    
- Reintento.
    
- Sincronización manual.
    
- Sincronización automática.
    
- Confirmación visual.
    
- Conflicto de versiones.
    
- Resolución manual.
    

Cuando una acción requiera conexión o aprobación, muestra:

- Pendiente de envío.
    
- Pendiente de aprobación.
    
- Requiere conexión.
    
- Se enviará al recuperar señal.
    

No implementar persistencia ni sincronización real.

---

# 8. Roles móviles

Incluye perfiles demostrativos:

- Operador.
    
- Jefe de guardia.
    
- Jefe de sección.
    
- Supervisor de operaciones.
    
- Técnico.
    
- Mecánico.
    
- Supervisor de mantenimiento.
    
- Usuario de consulta.
    

Cambia según el rol:

- Navegación.
    
- Acciones.
    
- Campos editables.
    
- Alcance.
    
- Aprobaciones.
    
- Override.
    
- Capacidad de cierre.
    
- Visibilidad técnica.
    

No implementar seguridad real.

---

# 9. Datos mock

Incluye escenarios coherentes:

1. Guardia activa.
    
2. Actividad lista para iniciar.
    
3. Actividad bloqueada.
    
4. Actividad en ejecución.
    
5. Actividad reasignada.
    
6. Actividad parcial.
    
7. Restricción abierta.
    
8. Incidencia con evidencia.
    
9. OT recibida.
    
10. OT pendiente de recepción.
    
11. Equipo operativo.
    
12. Equipo disponible.
    
13. Equipo standby.
    
14. Equipo en panne.
    
15. Equipo en mantenimiento.
    
16. Equipo esperando material.
    
17. Equipo con estado desactualizado.
    
18. Equipo con estado propuesto.
    
19. Aviso nuevo.
    
20. Orden en diagnóstico.
    
21. Orden en ejecución.
    
22. Orden esperando material.
    
23. Orden pendiente de prueba.
    
24. Retorno certificado.
    
25. Registro offline.
    
26. Cambios pendientes.
    
27. Error de sincronización.
    
28. Conflicto.
    
29. Usuario sin permiso.
    
30. Cierre con pendientes.
    

No utilizar información sensible ni nombres reales.

---

# 10. Arquitectura frontend

Construye únicamente frontend con:

- React.
    
- TypeScript.
    
- Vite.
    
- Tailwind CSS.
    
- shadcn/ui.
    
- Lucide Icons.
    
- React Router.
    
- Zustand o equivalente.
    
- Servicios mock desacoplados.
    

Organiza el código en:

- `features/operations`
    
- `features/maintenance`
    
- `features/sync`
    
- `components`
    
- `pages`
    
- `services`
    
- `stores`
    
- `types`
    
- `mocks`
    
- `routes`
    
- `utils`
    

No implementar:

- Backend.
    
- Base de datos.
    
- Autenticación real.
    
- Integraciones reales.
    
- SAP.
    
- Entra ID.
    
- Tracking real.
    
- Sincronización real.
    
- Optimización.
    
- Inteligencia artificial.
    
- Machine learning.
    

---

# 11. Resultado esperado

Entrega una aplicación de terreno navegable que permita:

1. Validar la experiencia tablet-first.
    
2. Validar el flujo de Operaciones.
    
3. Validar el flujo de Mantenimiento.
    
4. Validar la relación entre ambos.
    
5. Simular operación offline.
    
6. Simular roles y permisos.
    
7. Simular cambios de estado.
    
8. Simular reasignaciones.
    
9. Simular cierre de guardia.
    
10. Simular retorno de equipos a servicio.
    
11. Presentar el concepto a usuarios operativos y técnicos.
    
12. Identificar reglas pendientes.
    

No construyas la plataforma web dentro de este proyecto.

Primero analiza la documentación. Después define internamente actores, procesos, entidades, estados y flujos. Finalmente construye la aplicación navegable.

La documentación es la fuente de verdad. Los benchmarks solo orientan. Los supuestos deben permanecer visibles.