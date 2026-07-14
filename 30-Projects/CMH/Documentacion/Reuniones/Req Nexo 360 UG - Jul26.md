Información para el proyecto "Nexo 360 Operation" y Módulo "Mantenimiento
360" de Consorcio Minero Horizonte S.R.L. (CMH)
# Información General y Objetivos
- Empresa Convocante: Consorcio Minero Horizonte S.R.L. (CMH), a través de la Gerencia Corporativa de Tecnología y Transformación Digital.
- Unidad Referencial: Unidad Minera Parcoy (operación aurífera subterránea, continua, con alta dispersión de frentes y más de 5 contratistas principales en mina).
- Objetivo Principal: Diseñar, desarrollar e implementar una plataforma web modular y multiusuario propia ("llave en mano funcional"). El sistema optimizará la planiﬁcación integrada, el seguimiento intraturno (lógica Short Interval Control - SIC), la asignación de recursos y el cierre de guardia en un entorno subterráneo.
- Propiedad Intelectual: Todo el software desarrollado, el código fuente, las bases de datos y la documentación serán de propiedad exclusiva de CMH. Queda estrictamente prohibida su comercialización o reutilización por parte del proveedor.
- Idioma: Toda la interfaz, la documentación y las interacciones de terreno operativas deben estructurarse al 100% en español.

# Magnitud Operacional del Sistema (Línea Base para Dimensionamiento)
- Personal en interior mina: ~360 personas.
- Equipos de mina (ﬂota): ~80 equipos pesados.
- Vehículos de apoyo: ~20 camionetas / utilitarios.
- Usuarios en plataforma: Mínimo 500 usuarios registrados y 100 concurrentes, sin degradación en consultas ni impresiones masivas.

# Alcance Funcional Requerido
El software se compone de dos grandes núcleos funcionales obligatorios que
operan integrados:

## Bloque A: Nexo 360 Operation (Planiﬁcación y Control de Guardia)
1.  Gestión de Planes: Carga, edición e importación masiva de planes mensuales, semanales, diarios y por guardia (vía Excel/CSV).
2.  Estado de Frentes y Maestro de Labores: ==Registro **visual** del estado== de las condiciones operativas de los frentes (disponible, bloqueado, sostenimiento, perforación, voladura, limpieza, etc.).
3.  Maestros de Personal y Cuadrillas: Administración de roles, habilidades, empresas contratistas y conformación histórica de cuadrillas.
4.  Motor de Asignación y Turnos: Sugerencia automatizada de asignación de personas y equipos a labores según prioridad, compatibilidad técnica, ubicación y seguridad.
5.  Órdenes de Trabajo (OT) e Impresión Masiva: Generación de OTs individuales o por cuadrilla con riesgos de seguridad asociados (SSOMA) y habilitación para impresión en alto volumen por zona antes de ingresar a mina.
6.  Seguimiento Intraturno (SIC) y Reprogramación: Registro de avances en intervalos cortos, control de desvíos con trazabilidad de motivos y reasignación en caliente durante la guardia.
7.  Cierre de Guardia Estructurado: Captura ﬁnal de datos del turno (avances, incidentes, consumos) para retroalimentar la planiﬁcación automática de la guardia entrante.

## Bloque B: Módulo Mantenimiento 360 (Disponibilidad y Gestión de Flota)
1.  Maestro e Historial de Equipos: Registro técnico uniﬁcado de la ﬂota propia y de contratistas principales (marcas, horómetros, criticidad, documentación de vigencia).
2.  Disponibilidad Dinámica: Control de estados de los equipos (operativo, taller, standby, panne, mantenimiento preventivo). Es mandatorio que este módulo entregue la disponibilidad real al motor de Nexo 360 antes de iniciar la programación de la guardia.
3.  Planes Preventivos, Correctivos y Backlog: Programación por horómetro/calendario de mantenimientos, gestión de solicitudes de taller de mina, órdenes de mantenimiento y control del backlog de repuestos.
4.  Ubicación de Equipos: Registro manual de posición por niveles y preparación de arquitectura para lectura automatizada en el futuro.

# Requerimientos Tecnológicos, Arquitectura e Integración
- Tecnología de la Interfaz: Aplicación Web responsive o híbrida, rápida y simpliﬁcada orientada a salas de control operativa (COM).
- Infraestructura de Despliegue: Preparada para implementarse sobre los ambientes deﬁnidos por CMH (Nube privada, nube pública autorizada u On-Premise) con clara separación de entornos (Desarrollo, QA/UAT y Producción).
- Capacidad Offline (Crítico): Soportar de manera nativa la lógica "Store & Forward" (almacenamiento local en navegador/dispositivo y sincronización automática diferida al recuperar red) para mitigar zonas de baja conectividad en interior mina.
- Integración con SAP (Obligatorio): Diseño e implementación de interfaces de exportación/importación compatible con las estructuras de SAP (módulos PM/MM). Inicialmente mediante archivos planos estructurados, tablas de staging o APIs REST según determine la arquitectura TI de CMH.

**Seguridad e Identidad:**
- Integración obligatoria con el directorio corporativo de CMH mediante Single Sign-On (SSO) utilizando Microsoft Entra ID / Azure AD bajo protocolos estándar (SAML 2.0 / OpenID Connect).
- Cumplimiento estricto del estándar corporativo TTD-ES-001 para desarrollo seguro (sin cuentas genéricas, control por roles basados en el mínimo privilegio y logs completos de auditoría transaccional).


