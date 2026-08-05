# Prompt maestro para Lovable

## Plataforma web de gestión — Nexo 360 Operation + Mantenimiento 360

Actúa como un **Senior Product Designer, UX Architect, Business Analyst y Frontend Engineer**, especializado en minería subterránea, planificación de guardias, Short Interval Control, mantenimiento de flota, disponibilidad de activos y plataformas empresariales industriales.

Tu objetivo es analizar toda la documentación adjunta y construir una **plataforma web frontend, desktop-first, avanzada, coherente y completamente navegable**, destinada a planificar, supervisar, administrar y analizar la información de:

1. **Nexo 360 Operation**.
2. **Mantenimiento 360**.

Este proyecto corresponde exclusivamente a la plataforma web de gestión.

No construyas dentro de este proyecto la aplicación móvil/tablet de terreno. No dupliques su navegación ni conviertas la plataforma web en una versión ampliada de la aplicación móvil.

La aplicación web debe utilizar datos mock coherentes con la aplicación de terreno, pero enfocarse en:

- Planificación.
- Supervisión.
- Administración.
- Control.
- Configuración
- Trazabilidad.
- Análisis.
- Validación de procesos.

---

# 1. Fuente de verdad

Antes de construir cualquier pantalla:
1. Lee completamente todos los archivos adjuntos.
2. Utiliza el documento de alcance y requisitos técnicos como fuente principal.
3. Utiliza los documentos de investigación, procesos y diagramas únicamente como referencia.
4. No conviertas un benchmark en un requerimiento confirmado.
5. Clasifica internamente cada elemento como:
    - Requerimiento explícito.
    - Información verbal.
    - Benchmark.
    - Supuesto de diseño.
    - Regla pendiente.
    - Dato pendiente.
    - Contradicción documental.
6. No inventes integraciones, fórmulas, campos, estados o permisos no sustentados.
7. Utiliza supuestos mínimos cuando falte información.
8. Mantén trazabilidad entre documentos, procesos, entidades, pantallas y reglas.
9. No detengas la construcción para solicitar aclaraciones.

---

# 2. Alcance del producto web
La plataforma debe permitir:

## Nexo 360 Operation
- Gestión de planes.
- Preparación de guardias.
- Reparto de guardia.
- Asignación de recursos.
- Generación e impresión de OT.
- Seguimiento intraturno.
- Reasignación y reprogramación.
    
- Cierre y handover.
    
- Gestión de labores.
    
- Gestión de restricciones.
    
- Gestión de incidencias.
    

## Mantenimiento 360

- Disponibilidad de flota.
    
- Maestro de equipos.
    
- Avisos.
    
- Órdenes de mantenimiento.
    
- Planificación preventiva y correctiva.
    
- Backlog.
    
- Materiales y repuestos.
    
- Historial de equipos.
    
- Equipos contratistas.
    
- Certificación de retorno.
    

## Funciones transversales

- Personal.
    
- Cuadrillas.
    
- Competencias.
    
- Contratistas.
    
- Datos maestros.
    
- Usuarios.
    
- Roles.
    
- Parámetros.
    
- Auditoría.
    
- Indicadores.
    
- Reportes.
    
- Integraciones simuladas.
    
- Definiciones pendientes.
    
- Trazabilidad documental.
    

---

# 3. Principios de experiencia

Diseña una experiencia:

- Desktop-first.
    
- Empresarial.
    
- Técnica.
    
- Sobria.
    
- Escalable.
    
- Basada en roles.
    
- Orientada a decisiones.
    
- Con navegación lateral.
    
- Con filtros persistentes.
    
- Con paneles de contexto.
    
- Con drill-down.
    
- Con trazabilidad.
    
- Con densidad de información controlada.
    

Prioriza:

- Búsqueda.
    
- Filtros.
    
- Tablas.
    
- Planning boards.
    
- Timelines.
    
- Kanban.
    
- Comparación plan versus ejecución.
    
- Acciones contextuales.
    
- Alertas accionables.
    
- Vistas guardadas simuladas.
    
- Exportación simulada.
    

Evita:

- Dashboards decorativos.
    
- Exceso de tarjetas.
    
- Estética futurista.
    
- Gradientes innecesarios.
    
- Mapas 3D.
    
- Gemelos digitales.
    
- Animaciones sin función.
    
- Gráficos sin relación con decisiones.
    

---

# 4. Navegación

Utiliza una barra lateral con:

## Inicio

- Dashboard.
    
- Pendientes.
    
- Alertas.
    
- Actividad reciente.
    
- Estado de guardias.
    
- Estado de flota.
    
- Estado de sincronización.
    

## Operaciones

- Planes.
    
- Guardias.
    
- Reparto.
    
- Tablero de asignación.
    
- Órdenes operativas.
    
- Seguimiento intraturno.
    
- Cierre y handover.
    
- Labores y frentes.
    
- Restricciones.
    
- Incidencias.
    

## Mantenimiento

- Disponibilidad de flota.
    
- Equipos.
    
- Avisos.
    
- Órdenes de mantenimiento.
    
- Planificación.
    
- Backlog.
    
- Materiales y repuestos.
    
- Historial.
    
- Equipos contratistas.
    

## Recursos

- Personal.
    
- Cuadrillas.
    
- Competencias.
    
- Habilitaciones.
    
- Turnos.
    
- Contratistas.
    

## Administración

- Unidades.
    
- Zonas.
    
- Secciones.
    
- Niveles.
    
- Ubicaciones.
    
- Catálogos.
    
- Usuarios.
    
- Roles.
    
- Parámetros.
    
- Integraciones.
    
- Auditoría.
    
- Definiciones pendientes.
    

No conviertas automáticamente cada opción en un módulo independiente. Utiliza pestañas y vistas subordinadas cuando corresponda.

---

# 5. Selector de contexto

Incluye en el encabezado:

- Unidad minera.
    
- Fecha.
    
- Turno.
    
- Guardia.
    
- Zona.
    
- Sección.
    
- Perfil activo.
    
- Estado de datos.
    
- Estado de sincronización.
    

Incluye un selector demostrativo de rol que cambie:

- Navegación.
    
- Dashboard.
    
- Acciones.
    
- Campos editables.
    
- Aprobaciones.
    
- Alcance de registros.
    
- Información restringida.
    

Roles preliminares:

- Jefe de guardia.
    
- Jefe de sección.
    
- Supervisor de operaciones.
    
- Planificador de mina.
    
- Despacho.
    
- Supervisor de mantenimiento.
    
- Planificador de mantenimiento.
    
- Responsable de materiales.
    
- Responsable de contratista.
    
- Administrador.
    
- Usuario de consulta.
    

---

# 6. Dashboard

Construye un dashboard accionable con filtros por:

- Fecha.
    
- Guardia.
    
- Zona.
    
- Sección.
    
- Contratista.
    
- Tipo de equipo.
    
- Estado.
    

## Operaciones

Muestra:

- Guardias en preparación.
    
- Guardias pendientes de validación.
    
- Guardias publicadas.
    
- Actividades planificadas.
    
- Actividades en ejecución.
    
- Actividades completadas.
    
- Actividades bloqueadas.
    
- Restricciones abiertas.
    
- Incidencias abiertas.
    
- OT pendientes de impresión.
    
- OT pendientes de entrega.
    
- Cumplimiento simulado.
    
- Desviaciones.
    

## Mantenimiento

Muestra:

- Equipos por estado.
    
- Equipos disponibles.
    
- Equipos no disponibles.
    
- Estados desactualizados.
    
- Avisos abiertos.
    
- Órdenes programadas.
    
- Órdenes en ejecución.
    
- Órdenes esperando material.
    
- Órdenes pendientes de prueba.
    
- Backlog por prioridad.
    
- Antigüedad del backlog.
    
- Equipos contratistas bloqueados.
    

MTBF, MTTR, MDT, disponibilidad mecánica, disponibilidad física u OEE solo pueden mostrarse como indicadores simulados con la etiqueta:

**Indicador de referencia — fórmula pendiente de validación**

---

# 7. Planes

Construye una vista para consultar:

- Plan mensual.
    
- Plan semanal.
    
- Plan diario.
    
- Plan de guardia.
    

Permite:

- Consultar versiones.
    
- Crear versión.
    
- Duplicar.
    
- Comparar.
    
- Seleccionar labores.
    
- Seleccionar actividades candidatas.
    
- Revisar dependencias.
    
- Enviar a preparación de guardia.
    
- Consultar trazabilidad.
    

No construyas un sistema completo de planificación minera de largo plazo.

La plataforma debe consumir planes como insumo y no reemplazar sistemas especializados mencionados en la documentación.

---

# 8. Guardias

## Lista

Muestra:

- Código.
    
- Fecha.
    
- Turno.
    
- Zona.
    
- Responsable.
    
- Estado.
    
- Actividades.
    
- Recursos.
    
- Restricciones.
    
- Cumplimiento.
    
- Última actualización.
    

Estados preliminares:

- Borrador.
    
- En preparación.
    
- Propuesta.
    
- Pendiente de validación.
    
- Confirmada.
    
- Publicada.
    
- En ejecución.
    
- En cierre.
    
- Cerrada.
    
- Cancelada.
    

## Detalle

Incluye pestañas:

- Resumen.
    
- Actividades.
    
- Personal.
    
- Equipos.
    
- Restricciones.
    
- OT.
    
- Seguimiento.
    
- Cambios.
    
- Cierre.
    
- Trazabilidad.
    

Permite:

- Editar.
    
- Validar.
    
- Publicar.
    
- Reabrir con motivo.
    
- Comparar versiones.
    
- Consultar plan original.
    
- Consultar plan vigente.
    
- Consultar ejecución.
    

---

# 9. Reparto de guardia

Representa el reparto como un evento coordinado, no solo como una tabla.

Incluye:

- Agenda.
    
- Áreas participantes.
    
- Seguridad.
    
- Mantenimiento.
    
- Condiciones de labores.
    
- Restricciones.
    
- Disponibilidad de personal.
    
- Disponibilidad de equipos.
    
- Decisiones.
    
- Pendientes.
    
- Responsables.
    
- Confirmación del plan.
    

Puede utilizarse como demostración una estructura de dos etapas:

1. Coordinación entre supervisores y áreas de soporte.
    
2. Reparto operativo.
    

Etiqueta esta estructura como supuesto basado en benchmark cuando no esté confirmada.

Permite:

- Registrar acuerdos.
    
- Registrar observaciones.
    
- Marcar temas resueltos.
    
- Adjuntar evidencia.
    
- Confirmar participación.
    
- Enviar actividades al tablero.
    
- Generar minuta simulada.
    

---

# 10. Tablero de asignación

Construye un planning board tipo magnet board digital.

Debe mostrar:

- Actividades.
    
- Labores.
    
- Personal.
    
- Cuadrillas.
    
- Equipos.
    
- Restricciones.
    
- Disponibilidad.
    
- Competencias.
    
- Horarios.
    
- Prioridades.
    

Permite:

- Drag-and-drop.
    
- Asignar.
    
- Desasignar.
    
- Reordenar.
    
- Filtrar.
    
- Agrupar.
    
- Buscar.
    
- Detectar conflictos.
    
- Mostrar advertencias.
    
- Mostrar bloqueos.
    
- Consultar detalle en panel lateral.
    
- Guardar borrador.
    
- Validar.
    
- Publicar.
    

La decisión final debe ser humana.

No implementar:

- Despacho autónomo.
    
- Optimización matemática real.
    
- Inteligencia artificial.
    
- Machine learning.
    
- Recomendaciones opacas.
    

Toda recomendación simulada debe indicar la regla que la originó.

---

# 11. Validación de ejecutabilidad

Antes de confirmar una asignación, evalúa visualmente:

- Estado de la labor.
    
- Restricciones.
    
- Dependencias.
    
- Disponibilidad del equipo.
    
- Frescura del dato.
    
- Estado documental.
    
- Competencia.
    
- Disponibilidad de la persona.
    
- Conflictos de horario.
    
- Conflictos de recursos.
    
- Controles de seguridad candidatos.
    

Resultados:

- Superado.
    
- Advertencia.
    
- Bloqueo.
    
- Excepción permitida.
    
- Excepción no permitida.
    
- Pendiente.
    

Todo override debe registrar:

- Regla.
    
- Usuario.
    
- Rol.
    
- Fecha y hora.
    
- Motivo.
    
- Impacto.
    
- Estado anterior.
    
- Estado posterior.
    

---

# 12. Órdenes operativas

Construye:

- Lista.
    
- Detalle.
    
- Creación desde actividades.
    
- Edición.
    
- Selección múltiple.
    
- Impresión individual simulada.
    
- Impresión masiva simulada.
    
- Distribución.
    
- Confirmación de entrega.
    
- Confirmación de recepción.
    
- Reimpresión.
    
- Anulación.
    
- Versionado.
    

Filtros:

- Guardia.
    
- Zona.
    
- Sección.
    
- Cuadrilla.
    
- Responsable.
    
- Estado.
    
- Actividad.
    
- Labor.
    

No definas:

- Número oficial de copias.
    
- Responsable definitivo.
    
- Punto de impresión.
    
- Política posterior a reprogramación.
    

Registra estos temas como definiciones pendientes.

---

# 13. Seguimiento intraturno

Construye una vista de actualización casi en tiempo real simulado.

Permite:

- Consultar avance.
    
- Consultar equipos.
    
- Consultar restricciones.
    
- Consultar incidencias.
    
- Detectar retrasos.
    
- Reasignar.
    
- Reprogramar.
    
- Cambiar prioridad.
    
- Bloquear.
    
- Cancelar.
    
- Transferir.
    
- Comparar plan y ejecución.
    

Incluye:

- Lista.
    
- Timeline.
    
- Kanban.
    
- Resumen por zona.
    
- Panel de alertas.
    

Cada modificación debe conservar:

- Estado anterior.
    
- Estado posterior.
    
- Responsable.
    
- Fecha y hora.
    
- Motivo.
    
- Impacto.
    

---

# 14. Cierre y handover

Construye un cierre estructurado con:

- Resultado por actividad.
    
- Avance.
    
- Producción o resultado.
    
- Desviaciones.
    
- Motivos.
    
- Incidencias.
    
- Restricciones.
    
- Estado de equipos.
    
- Estado de labores.
    
- Pendientes.
    
- Acciones correctivas.
    
- Observaciones.
    

Permite:

- Revisar.
    
- Completar.
    
- Validar.
    
- Transferir.
    
- Confirmar handover.
    
- Cerrar.
    
- Reabrir con permiso.
    
- Comparar plan original, vigente y ejecutado.
    

El cierre debe precargar la siguiente guardia con:

- Actividades parciales.
    
- Restricciones abiertas.
    
- Equipos no disponibles.
    
- Incidencias activas.
    
- Notas de handover.
    

---

# 15. Labores y frentes

Construye un maestro operativo con:

- Código.
    
- Zona.
    
- Sección.
    
- Nivel.
    
- Tipo.
    
- Estado.
    
- Actividad actual.
    
- Actividad siguiente.
    
- Restricciones.
    
- Dependencias.
    
- Responsable.
    
- Última actualización.
    
- Fuente.
    
- Historial.
    

Estados conceptuales:

- Disponible.
    
- En preparación.
    
- En operación.
    
- Restringida.
    
- Bloqueada.
    
- Pendiente de liberación.
    
- Cerrada.
    

No asumir taxonomía definitiva.

---

# 16. Restricciones e incidencias

## Restricciones

Incluye:

- Tipo.
    
- Labor.
    
- Impacto.
    
- Estado.
    
- Responsable.
    
- Fecha de apertura.
    
- Fecha esperada.
    
- Actividades afectadas.
    
- Acción requerida.
    

## Incidencias

Incluye:

- Tipo.
    
- Categoría.
    
- Severidad.
    
- Fecha y hora.
    
- Ubicación.
    
- Actividad.
    
- Equipo.
    
- Descripción.
    
- Acción inmediata.
    
- Evidencia.
    
- Estado.
    

Permite:

- Crear.
    
- Asignar.
    
- Escalar.
    
- Resolver.
    
- Transferir.
    
- Relacionar.
    
- Consultar impacto.
    

---

# 17. Disponibilidad de flota

Construye una vista central de fuente de verdad.

Cada equipo debe mostrar:

- Código.
    
- Tipo.
    
- Propiedad.
    
- Empresa.
    
- Responsable de mantenimiento.
    
- Estado oficial.
    
- Estado propuesto.
    
- Estado operacional.
    
- Ubicación.
    
- Fuente de ubicación.
    
- Confianza.
    
- Última actualización.
    
- Antigüedad.
    
- Fuente del estado.
    
- Responsable.
    
- Orden activa.
    
- Restricción.
    
- Documentación.
    

Permite:

- Filtrar.
    
- Agrupar.
    
- Cambiar estado con permiso.
    
- Confirmar estado propuesto.
    
- Consultar timeline.
    
- Consultar disponibilidad para asignación.
    
- Identificar datos desactualizados.
    
- Ver impacto en guardias.
    

Principios:

- Un único estado oficial vigente.
    
- Reducciones de disponibilidad pueden registrarse inmediatamente.
    
- Aumentos de disponibilidad requieren confirmación.
    
- Todo estado tiene timestamp, fuente y responsable.
    
- Los datos desactualizados deben ser visibles.
    
- Operaciones no debe consumir silenciosamente datos no confiables.
    

No definas SLA oficial. Utiliza valores mock configurables.

---

# 18. Equipos

Construye un maestro único para equipos propios y contratistas.

Incluye:

- Código.
    
- Tipo.
    
- Marca y modelo mock.
    
- Propiedad.
    
- Empresa.
    
- Responsable operacional.
    
- Responsable de mantenimiento.
    
- Criticidad.
    
- Estado.
    
- Ubicación.
    
- Horómetro mock.
    
- Documentación.
    
- Próximo mantenimiento.
    
- Historial.
    

No dupliques el modelo para equipos propios y contratistas.

Las validaciones documentales adicionales deben permanecer configurables.

---

# 19. Avisos y órdenes de mantenimiento

## Avisos

Permite:

- Crear.
    
- Consultar.
    
- Filtrar.
    
- Clasificar.
    
- Evaluar.
    
- Priorizar.
    
- Asignar.
    
- Convertir en orden.
    
- Rechazar con motivo.
    
- Relacionar con equipo.
    
- Consultar trazabilidad.
    

## Órdenes

Construye:

- Lista.
    
- Detalle.
    
- Creación.
    
- Edición.
    
- Planificación.
    
- Asignación.
    
- Diagnóstico.
    
- Tareas.
    
- Mano de obra.
    
- Tiempos.
    
- Componentes.
    
- Materiales.
    
- Pruebas.
    
- Certificación.
    
- Cierre.
    
- Historial.
    

Estados preliminares:

- Nueva.
    
- Evaluada.
    
- Planificada.
    
- Asignada.
    
- En diagnóstico.
    
- En ejecución.
    
- Pausada.
    
- Esperando material.
    
- Pendiente de prueba.
    
- Pendiente de certificación.
    
- Cerrada.
    
- Cancelada.
    

Diferencia:

- Cierre técnico.
    
- Cierre administrativo simulado.
    
- Retorno a servicio.
    

---

# 20. Planificación de mantenimiento

Construye un calendario o planning board con:

- Órdenes preventivas.
    
- Órdenes correctivas.
    
- Técnicos.
    
- Turnos.
    
- Talleres.
    
- Duraciones.
    
- Materiales.
    
- Equipos.
    
- Conflictos.
    

Permite:

- Arrastrar.
    
- Programar.
    
- Cambiar fecha.
    
- Cambiar responsable.
    
- Detectar conflicto.
    
- Consultar materiales.
    
- Guardar borrador.
    
- Publicar.
    

Los intervalos por horómetro o calendario deben ser mock y configurables.

---

# 21. Backlog

Construye una vista con:

- Orden.
    
- Equipo.
    
- Criticidad.
    
- Prioridad.
    
- Severidad.
    
- Seguridad.
    
- Impacto operacional.
    
- Antigüedad.
    
- Materiales.
    
- Mano de obra.
    
- Duración.
    
- Estado.
    
- Fecha requerida.
    
- Motivo de espera.
    

Permite:

- Filtrar.
    
- Ordenar.
    
- Cambiar prioridad.
    
- Justificar.
    
- Programar.
    
- Agrupar.
    
- Consultar historial.
    

Puede mostrarse un índice, pero debe etiquetarse como:

**Fórmula de referencia pendiente de validación**

No conviertas automáticamente `criticidad × severidad` en regla oficial.

---

# 22. Materiales y repuestos

Construye una vista conceptual, no un ERP.

Muestra:

- Material.
    
- Código.
    
- Cantidad.
    
- Stock simulado.
    
- Reserva simulada.
    
- Solicitud simulada.
    
- Estado.
    
- Fecha requerida.
    
- Fecha estimada.
    
- Orden.
    
- Impacto.
    

Estados:

- Disponible.
    
- Reservado.
    
- Solicitado.
    
- En compra.
    
- Recibido.
    
- Esperando material.
    
- Alternativa en evaluación.
    

Permite registrar:

- Canibalización.
    
- Préstamo.
    
- Compra de emergencia.
    
- Reprogramación.
    

No implementar SAP real.

---

# 23. Recursos

## Personal

- Código.
    
- Nombre mock.
    
- Empresa.
    
- Rol.
    
- Turno.
    
- Estado.
    
- Competencias.
    
- Habilitaciones.
    
- Disponibilidad.
    

## Cuadrillas

- Código.
    
- Integrantes.
    
- Responsable.
    
- Zona.
    
- Turno.
    
- Competencias.
    
- Estado.
    

## Competencias

- Tipo.
    
- Persona.
    
- Equipo o actividad.
    
- Vigencia.
    
- Estado.
    
- Fuente.
    

Las reglas de bloqueo deben ser configurables y auditables.

---

# 24. Administración

Construye vistas para:

- Unidades.
    
- Zonas.
    
- Secciones.
    
- Niveles.
    
- Labores.
    
- Frentes.
    
- Tipos de actividad.
    
- Tipos de equipo.
    
- Componentes.
    
- Estados.
    
- Prioridades.
    
- Criticidades.
    
- Tipos de mantenimiento.
    
- Tipos de falla.
    
- Causas.
    
- Tipos de restricción.
    
- Tipos de incidencia.
    
- Turnos.
    
- Contratistas.
    

Cada maestro debe soportar:

- Lista.
    
- Búsqueda.
    
- Filtros.
    
- Crear.
    
- Editar.
    
- Activar.
    
- Desactivar.
    
- Historial básico.
    
- Validaciones.
    
- Confirmaciones.
    

No inventes codificaciones oficiales.

---

# 25. Usuarios y roles

Construye:

- Lista de usuarios.
    
- Detalle.
    
- Rol.
    
- Empresa.
    
- Unidad.
    
- Zona.
    
- Estado.
    
- Último acceso mock.
    
- Permisos.
    

Incluye una matriz visual:

- Consultar.
    
- Crear.
    
- Editar.
    
- Aprobar.
    
- Cerrar.
    
- Administrar.
    

No implementar seguridad real.

---

# 26. Auditoría

Construye un log con:

- Fecha y hora.
    
- Usuario.
    
- Rol.
    
- Acción.
    
- Módulo.
    
- Entidad.
    
- Registro.
    
- Estado anterior.
    
- Estado posterior.
    
- Motivo.
    
- Fuente.
    
- Dispositivo.
    
- Estado de sincronización.
    

Permite:

- Buscar.
    
- Filtrar.
    
- Abrir detalle.
    
- Comparar cambios.
    
- Exportar de forma simulada.
    

---

# 27. Definiciones pendientes

Incluye una vista obligatoria denominada:

## Definiciones pendientes

Debe consolidar:

- Ambigüedades.
    
- Reglas no definidas.
    
- Campos pendientes.
    
- Roles no confirmados.
    
- Estados incompletos.
    
- Integraciones sin detalle.
    
- Contradicciones.
    
- Supuestos.
    
- Preguntas de validación.
    

Cada registro debe incluir:

- Código.
    
- Categoría.
    
- Bloque.
    
- Proceso.
    
- Descripción.
    
- Decisión requerida.
    
- Impacto funcional.
    
- Impacto técnico.
    
- Prioridad.
    
- Responsable esperado.
    
- Estado.
    
- Fecha objetivo.
    
- Supuesto temporal.
    
- Pantallas afectadas.
    
- Documento relacionado.
    

Registra inicialmente:

- Flujo AS-IS de guardia.
    
- Flujo AS-IS de mantenimiento.
    
- Roles oficiales.
    
- Matriz de permisos.
    
- Autoridad de reasignación.
    
- Reglas del motor.
    
- Prioridad entre labores.
    
- Competencias bloqueantes.
    
- Modelo de estados.
    
- Responsables de transición.
    
- Fórmulas de disponibilidad.
    
- SLA de frescura.
    
- Política de datos desactualizados.
    
- Política offline.
    
- Proceso de impresión.
    
- Alcance SAP PM.
    
- Alcance SAP MM.
    
- Versión SAP.
    
- Mecanismo de integración.
    
- Alcance Entra ID.
    
- Fuente maestra de personas.
    
- Fuente maestra de equipos.
    
- Fuente maestra de labores.
    
- Alcance Deswik.
    
- Alcance SCOM.
    
- Alcance del tracking.
    
- Alcance del control de campamentos.
    
- Sistema antifatiga.
    
- Retención histórica.
    
- KPIs.
    
- Criterios de aceptación.
    
- Auditoría.
    
- Ambientes.
    
- Estándar TTD-ES-001.
    
- Modelo de soporte.
    
- Expansión a otras unidades.
    

---

# 28. Trazabilidad documental

Cada módulo, pantalla, formulario, regla o indicador debe relacionarse internamente con:

- Documento.
    
- Sección.
    
- Proceso.
    
- Requerimiento.
    
- Tipo de sustento.
    
- Estado de validación.
    

Tipos:

- Confirmado.
    
- Información verbal.
    
- Benchmark.
    
- Supuesto.
    
- Pendiente.
    
- Contradicción.
    

Incluye una opción:

**Mostrar trazabilidad**

Cuando se active, muestra chips discretos sin afectar la experiencia normal.

---

# 29. Integraciones simuladas

Representa interfaces conceptuales para:

- SAP PM.
    
- SAP MM.
    
- Microsoft Entra ID.
    
- Deswik.
    
- SCOM.
    
- Sistema interno de personal.
    
- Sistema de tracking.
    
- Sistema de control de campamentos.
    
- Sistema antifatiga pendiente de aclaración.
    

Para cada integración muestra:

- Estado simulado.
    
- Dirección.
    
- Última ejecución.
    
- Registros procesados.
    
- Errores.
    
- Pendientes.
    
- Datos intercambiados.
    
- Definiciones abiertas.
    

No implementar integraciones reales.

No asumir:

- API.
    
- Archivo.
    
- Tabla.
    
- Versión.
    
- Frecuencia.
    
- Propietario.
    
- Regla de conciliación.
    

---

# 30. Datos mock

Incluye escenarios consistentes:

1. Guardia en preparación.
    
2. Guardia pendiente de validación.
    
3. Guardia publicada.
    
4. Guardia en ejecución.
    
5. Guardia cerrada.
    
6. OT pendiente de impresión.
    
7. OT impresa no entregada.
    
8. Actividad bloqueada.
    
9. Actividad reasignada.
    
10. Actividad transferida.
    
11. Frente bloqueado.
    
12. Restricción abierta.
    
13. Incidencia activa.
    
14. Equipo operativo.
    
15. Equipo disponible.
    
16. Equipo standby.
    
17. Equipo en panne.
    
18. Equipo en preventivo.
    
19. Equipo en correctivo.
    
20. Equipo esperando material.
    
21. Equipo con dato desactualizado.
    
22. Equipo con estado propuesto.
    
23. Equipo contratista bloqueado.
    
24. Aviso abierto.
    
25. Orden programada.
    
26. Orden en ejecución.
    
27. Orden pendiente de prueba.
    
28. Retorno certificado.
    
29. Backlog crítico.
    
30. Cambio de prioridad.
    
31. Registro offline.
    
32. Conflicto de sincronización.
    
33. Usuario sin permiso.
    
34. Estado vacío.
    
35. Error de carga.
    

No utilizar datos sensibles ni nombres reales.

---

# 31. Arquitectura frontend

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
    

Organiza:

- `features/operations`
    
- `features/maintenance`
    
- `features/resources`
    
- `features/admin`
    
- `features/audit`
    
- `features/pending-definitions`
    
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
    
- Servicios cloud.
    
- Inteligencia artificial.
    
- Machine learning.
    
- Optimización real.
    
- Almacenamiento productivo.
    

---

# 32. Flujos obligatorios

## Operaciones

1. Crear guardia.
    
2. Agregar actividades.
    
3. Consultar recursos.
    
4. Asignar personal.
    
5. Asignar equipos.
    
6. Detectar conflicto.
    
7. Resolver o justificar.
    
8. Validar.
    
9. Publicar.
    
10. Generar OT.
    
11. Imprimir.
    
12. Monitorear.
    
13. Registrar restricción.
    
14. Reasignar.
    
15. Cerrar.
    
16. Transferir pendientes.
    

## Mantenimiento

1. Recibir aviso.
    
2. Evaluar.
    
3. Crear orden.
    
4. Priorizar.
    
5. Programar.
    
6. Asignar técnico.
    
7. Registrar diagnóstico.
    
8. Agregar tareas.
    
9. Agregar materiales.
    
10. Marcar espera.
    
11. Registrar intervención.
    
12. Ejecutar pruebas.
    
13. Certificar retorno.
    
14. Actualizar disponibilidad.
    
15. Mostrar el equipo como asignable en Operaciones.
    

## Administración

1. Crear usuario.
    
2. Asignar rol.
    
3. Configurar catálogo.
    
4. Revisar auditoría.
    
5. Registrar una definición pendiente.
    
6. Consultar trazabilidad.
    

---

# 33. Resultado esperado

Entrega una plataforma web empresarial que permita:

1. Validar la planificación de guardias.
    
2. Validar el reparto.
    
3. Validar la asignación de recursos.
    
4. Validar el seguimiento intraturno.
    
5. Validar el cierre y handover.
    
6. Validar la disponibilidad de flota.
    
7. Validar la gestión de mantenimiento.
    
8. Validar datos maestros.
    
9. Validar roles y permisos.
    
10. Consultar auditoría.
    
11. Consultar trazabilidad.
    
12. Identificar vacíos.
    
13. Presentar el concepto a usuarios técnicos, operativos y ejecutivos.
    
14. Servir como base para el desarrollo posterior.
    

No construyas la aplicación móvil/tablet dentro de este proyecto.

Primero analiza la documentación. Después define internamente arquitectura de información, actores, procesos, entidades, estados, flujos y permisos. Finalmente construye la plataforma navegable.

La documentación es la fuente de verdad. Los benchmarks solo orientan. Los supuestos deben permanecer visibles. Las decisiones abiertas no deben presentarse como reglas confirmadas.  
:::