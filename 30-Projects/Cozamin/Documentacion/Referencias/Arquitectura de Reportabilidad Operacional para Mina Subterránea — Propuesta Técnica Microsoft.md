# Arquitectura de Reportabilidad Operacional para Mina Subterránea
### Propuesta Técnica basada en Ecosistema Microsoft
**Cliente:** Mina Subterránea, México | **Preparado por:** ASTAY | **Fecha:** Julio 2026

***

## Resumen Ejecutivo

Esta propuesta técnica define una arquitectura base, escalable y de bajo costo relativo para implementar un sistema de reportabilidad operacional para una mina subterránea en México. La solución está diseñada en dos escenarios progresivos: un **Escenario Mínimo Viable (Quick Win)** basado en Power BI, SharePoint y Power Automate sobre Microsoft 365 existente, y un **Escenario Base Escalable** que incorpora SQL Server o Azure SQL Database, Azure Data Factory y Microsoft Entra ID para mayor gobernanza y trazabilidad.

El punto de partida son seis reportes operacionales actualmente en Excel, que serán digitalizados, estructurados y automatizados progresivamente. La estrategia prioriza generar valor rápido en Fase 1 (4–6 semanas), construir una base de datos gobernada en Fase 2 (8–12 semanas) y escalar hacia automatización avanzada en Fases 3 y 4. El costo inicial estimado puede ser cercano a cero adicional si el cliente ya opera con Microsoft 365 E3 o superior, agregando únicamente licencias Power BI Pro para los usuarios que publican y consumen reportes.

**Premisa central:** No se recomienda construir una plataforma enterprise desde el inicio. La arquitectura propuesta sigue el principio de *start simple, scale smart*, minimizando riesgo técnico y maximizando adopción.

***

## A. Arquitectura Recomendada

### Diagrama Conceptual de Arquitectura — Escenario Mínimo Viable

```
┌─────────────────────────────────────────────────────────────────┐
│                    FUENTES DE DATOS                             │
│  [Excel en SharePoint]   [Forms/Listas]   [Excel Local+Gateway] │
└───────────────────┬─────────────────────────────────────────────┘
                    │ Power Automate (flujos estándar)
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│               CAPA DE ALMACENAMIENTO CONTROLADO                 │
│     SharePoint Online (repositorio de archivos Excel)           │
│     Microsoft Lists (tablas maestras / catálogos)               │
│     OneDrive for Business (zona de archivos personales)         │
└───────────────────┬─────────────────────────────────────────────┘
                    │ Conector SharePoint / Web (sin Gateway)
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│               CAPA DE MODELADO Y ANÁLISIS                       │
│    Power BI Desktop (desarrollo de modelos)                     │
│    Power BI Service (publicación y actualización)               │
│    Modelo semántico compartido (semantic model)                 │
└───────────────────┬─────────────────────────────────────────────┘
                    │ App Power BI / Teams
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CONSUMO / USUARIOS FINALES                   │
│  Supervisores  │  Jefes de Área  │  Gerencia  │  Staff Técnico  │
└─────────────────────────────────────────────────────────────────┘
```

### Diagrama Conceptual de Arquitectura — Escenario Escalable

```
┌───────────────────────────────────────────────────────────────────┐
│                      FUENTES DE DATOS                             │
│  [Excel/SharePoint]  [SQL/ERP]  [SCADA/MES]  [Archivos CSV/API]  │
└──────────────┬──────────────────────────────────────────────────┘
               │ Azure Data Factory / Power Automate Premium
               ▼
┌───────────────────────────────────────────────────────────────────┐
│              ZONA BRONZE (Datos Crudos)                           │
│  Azure Blob Storage / SharePoint / OneDrive (archivos originales) │
└──────────────┬────────────────────────────────────────────────────┘
               │ ETL / Transformaciones ADF o Dataflows
               ▼
┌───────────────────────────────────────────────────────────────────┐
│           ZONA SILVER (Datos Validados y Estructurados)           │
│  SQL Server On-Premise  ─ o ─  Azure SQL Database (PaaS)          │
│  Tablas: maestras / transaccionales / auditoría / errores         │
└──────────────┬────────────────────────────────────────────────────┘
               │ Direct Query o Import Mode
               ▼
┌───────────────────────────────────────────────────────────────────┐
│          ZONA GOLD (Modelo Semántico Gobernado)                   │
│  Power BI Semantic Model (estrella / copo de nieve)               │
│  Tablas de dimensión + tablas de hechos + KPIs calculados         │
└──────────────┬────────────────────────────────────────────────────┘
               │ Power BI Service (Workspace + App)
               ▼
┌───────────────────────────────────────────────────────────────────┐
│            CONSUMO / GOBERNANZA / SEGURIDAD                       │
│  Power BI App  │  Teams  │  Power Apps  │  Microsoft Entra ID     │
│  RLS por área  │  Audit Logs  │  Deployment Pipelines             │
└───────────────────────────────────────────────────────────────────┘
```

***

### Tabla Comparativa de Escenarios

| Criterio | Escenario 1: Quick Win | Escenario 2: Base Escalable |
|---|---|---|
| **Objetivo principal** | Ordenar reportes Excel + dashboards básicos | Base de datos gobernada + automatización robusta |
| **Componentes clave** | SharePoint, Excel, Power BI Pro, Power Automate (std) | SQL Server/Azure SQL, ADF, Power BI Service, Entra ID |
| **Tiempo de implementación** | 4–8 semanas | 12–20 semanas |
| **Costo adicional estimado** | ~$0–$140/mes (solo licencias Power BI Pro) | $200–$800/mes (Azure SQL + ADF + licencias) |
| **Trazabilidad** | Básica (historial SharePoint, versiones Excel) | Alta (tablas de auditoría, logs ADF, control de cambios) |
| **Gobernanza de datos** | Manual / ligera | Estructurada con diccionario y reglas de validación |
| **Automatización** | Flujos simples (notificaciones, mover archivos) | ETL/ELT programado, transformaciones, alertas |
| **Escalabilidad** | Media (límite: Excel/SharePoint como fuente) | Alta (integración con ERP, SCADA, nuevas fuentes) |
| **Riesgo técnico** | Bajo | Medio |
| **Capacidad mínima del cliente** | Microsoft 365 + 2–3 analistas | Microsoft 365 + IT local + presupuesto Azure |
| **Dependencia Excel** | Alta al inicio, reducible | Baja, Excel como fuente transitoria |
| **Cuándo usarlo** | Inicio del proyecto, validación con cliente | Cuando Fase 1 esté validada y madura |
| **Cómo evoluciona** | Añadir SQL Server, ADF → Escenario 2 | Añadir Fabric, Power Apps, integraciones avanzadas |

***

## B. Componentes Tecnológicos Recomendados

### Tabla de Componentes Microsoft

| Componente | Función en Arquitectura | Cuándo usar | Cuándo NO usar | Licencia requerida | Complejidad | Riesgos |
|---|---|---|---|---|---|---|
| **Power BI Desktop** | Desarrollo de reportes y modelos semánticos | Siempre, es la herramienta de desarrollo principal | No aplica para consumo masivo | Gratuito | Baja | Versiones descontroladas si no se gestiona bien |
| **Power BI Service** | Publicación, actualización programada, compartir reportes | Desde Fase 1 | No se puede distribuir sin él | Pro: $14/usr/mes[^1] | Baja-Media | Límite 8 refrescos/día en Pro[^2] |
| **Power BI Pro** | Licencia de usuario para crear y ver reportes en Service | Para todos los autores y lectores en workspaces compartidos | Si hay <5 usuarios o solo uso personal | $14/usr/mes (desde abr-2025)[^3] | N/A | Costo crece con número de usuarios |
| **Power BI PPU** | Funciones avanzadas: modelos grandes, XMLA, pipelines | Cuando modelos >1 GB o se necesita deployment pipelines | Si el equipo es pequeño y los modelos son livianos | $24/usr/mes[^1] | N/A | Todos los usuarios (creadores Y visores) necesitan PPU[^2] |
| **SharePoint Online** | Repositorio centralizado de archivos Excel controlados | Desde Fase 1 como fuente de datos para Power BI | No reemplaza base de datos para grandes volúmenes | Incluido en M365 E3/E5[^4] | Baja | Sin control de versiones robusto sin configuración |
| **OneDrive for Business** | Zona de archivos personales de analistas | Archivos de trabajo individual antes de publicar a SharePoint | No para archivos compartidos de producción | Incluido en M365[^4] | Baja | Riesgo de confusión entre OneDrive personal y SharePoint |
| **Microsoft Lists** | Tablas maestras simples (turnos, equipos, áreas) | Cuando se necesitan catálogos editables por usuarios | No para datos transaccionales de alto volumen | Incluido en M365[^4] | Baja | Límite de filas: 30M registros, pero rendimiento baja antes |
| **Power Automate (std)** | Flujos de notificación, mover archivos, alertas básicas | Fase 1: flujos con SharePoint, Teams, Forms | No para conectores premium (SQL, Dataverse) sin licencia adicional | Incluido en M365 E3/E5 (solo standard)[^5] | Media | Flujos huérfanos sin dueño claro son un riesgo de gobernanza[^6] |
| **Power Automate Premium** | Flujos con SQL Server, Dataverse, conectores externos | Fase 2 en adelante, cuando se conecta a SQL/ERP | No necesario en Fase 1 si solo se usa SharePoint | $15/usr/mes[^7] | Media | Costo adicional por usuario, evaluar Per Flow en producción |
| **Power Apps** | Formularios de ingreso de datos estructurado | Fase 3: cuando se necesita captura de datos desde campo | No en Fase 1 (complejidad innecesaria) | Incluido en M365 (std connectors); Premium: $20/usr/mes[^8] | Media-Alta | Requiere UX/UI y testing; puede sustituir Excel |
| **SQL Server (On-Premise)** | Base de datos relacional en infraestructura local de la mina | Cuando cliente tiene infraestructura propia y equipo DBA | No si no hay capacidad de administración local | Licencia perpetua (~$3,586 Standard/core) o SPLA | Alta | Requiere DBA, mantenimiento, backups, seguridad de red |
| **Azure SQL Database** | Base de datos PaaS en nube sin administrar infraestructura | Cuando no hay equipo DBA local o se prefiere PaaS | No si la mina no tiene conectividad confiable a internet | Desde ~$5/mes (Basic DTU); Serverless General Purpose desde $0.37/hr[^9] | Media | Latencia si la conexión de red es inestable |
| **Azure Data Factory** | Pipelines ETL/ELT desde Excel/SharePoint a SQL | Fase 2-3: automatización de cargas programadas | No en Fase 1 (overkill para pocos reportes) | Pay-as-you-go, primeras 5 actividades/mes gratuitas[^10] | Alta | Curva de aprendizaje, costo variable según uso[^11] |
| **Microsoft Fabric** | Plataforma unificada: ingesta, DW, BI, ciencia de datos | Fase 3-4: cuando hay múltiples fuentes y equipos analíticos | No en fases iniciales (costo y complejidad no justificados) | F2: ~$263/mes USD[^12]; F64+ para visores free[^13] | Alta | F2-F32 aún requieren Pro para consumidores[^13] |
| **Dataverse** | Base de datos para Power Apps con reglas de negocio | Fase 3: cuando Power Apps requiere lógica de negocio robusta | No si ya hay SQL Server; duplicar almacenamiento | Incluido limitado en M365; Premium con Power Apps $20/usr[^14] | Alta | Costo se acumula rápido; migración compleja desde Excel |
| **Microsoft Entra ID** | Gestión de identidades, grupos de seguridad, MFA | Desde Fase 1 para SSO y grupos de acceso | No aplica como alternativa (es el estándar de identidad) | Incluido en M365; P1 en E3, P2 en E5[^4] | Media | Sin buena configuración de grupos, permisos se vuelven caóticos |
| **On-Premises Data Gateway** | Puente entre datos on-premise y Power BI/Power Automate en nube | Cuando Excel o SQL Server están en servidores locales | No necesario si todos los datos están en SharePoint/OneDrive[^15] | Gratuito (requiere servidor dedicado)[^16] | Media | Servidor debe estar encendido 24/7; monitoreo continuo[^16] |
| **Excel como fuente controlada** | Fuente inicial de datos; plantilla estandarizada | Fase 1: punto de partida pragmático | No como fuente permanente en Fase 2+ (reemplazar por BD) | Incluido en M365 | Baja | Inconsistencias, errores de formato, falta de trazabilidad |
| **Azure Blob Storage / ADLS** | Almacenamiento de archivos crudos (zona Bronze) | Fase 2-3: cuando se implementa arquitectura medallion | No necesario si solo hay Excel y SharePoint | ~$0.018/GB/mes (LRS)[^11] | Media | Requiere gestión de ciclo de vida de archivos |

***

## C. Arquitectura de Datos

### Modelo de Zonas de Datos

La arquitectura propone tres zonas progresivas, basadas en el concepto Medallion Architecture:[^17]

#### Zona Bronze — Archivos Originales
- **Propósito:** Almacenar los archivos Excel tal como fueron entregados por los operadores, sin modificación.
- **Tecnología (Fase 1):** Biblioteca de documentos en SharePoint Online con versiones habilitadas.
- **Tecnología (Fase 2+):** Azure Blob Storage o carpeta en SharePoint con nombre de fecha (`reporte_produccion_2026-07-01.xlsx`).
- **Reglas:** Solo lectura una vez cargado. Nunca editar el archivo original. Control de versiones de SharePoint activo.
- **Nomenclatura sugerida:** `{area}_{tipo_reporte}_{YYYYMMDD}_{version}.xlsx`

#### Zona Silver — Datos Validados y Estructurados
- **Propósito:** Datos extraídos, validados y normalizados en base de datos relacional.
- **Tecnología (Fase 1):** Tablas de Power Query dentro del modelo de Power BI (sin persistencia externa).
- **Tecnología (Fase 2+):** SQL Server o Azure SQL Database con esquema estructurado.
- **Tablas propuestas:**
  - `dim_turno` (catálogo de turnos: día, tarde, noche)
  - `dim_equipo` (equipos: jumbo, scoop, dumper, ventiladores)
  - `dim_area` (niveles, frentes, zonas de la mina)
  - `dim_persona` (operadores, supervisores)
  - `fact_produccion_diaria` (toneladas, metros avanzados por frente)
  - `fact_mantenimiento` (disponibilidad mecánica, horas de falla)
  - `fact_seguridad` (incidentes, inspecciones, observaciones)
  - `audit_carga` (timestamp, usuario, archivo fuente, registros procesados, errores)
  - `audit_cambios` (tabla, campo, valor_anterior, valor_nuevo, usuario, fecha)

#### Zona Gold — Modelo Semántico Power BI
- **Propósito:** Modelo semántico publicado en Power BI Service con KPIs calculados, medidas DAX y seguridad por rol (RLS).
- **Tecnología:** Power BI Semantic Model (modo Import o Direct Query según latencia requerida).
- **KPIs mineros sugeridos:**[^18][^19]
  - Toneladas extraídas por turno/día/semana
  - Metros avanzados por frente (desarrollo y preparación)
  - Disponibilidad mecánica de equipos (OEE)
  - Horas de mantenimiento correctivo vs. preventivo
  - LTIFR (Lost Time Injury Frequency Rate)[^19]
  - Cumplimiento de plan semanal (%)
  - Costo por tonelada
  - Consumo de explosivos vs. plan

### Transición Excel → Base de Datos

| Etapa | Mecanismo | Herramienta |
|---|---|---|
| Excel libre | Plantillas no controladas | — |
| Excel estandarizado | Plantillas con tablas nombradas, hoja de metadatos, validaciones de datos | Excel + SharePoint |
| Excel → Power Query | Transformaciones en Power BI Desktop desde SharePoint | Power BI Desktop |
| Excel → SQL (ETL) | Pipeline de carga programado | Power Automate o ADF |
| Formulario → SQL | Captura directa sin Excel | Power Apps + SQL |

### Control de Versiones y Auditoría

- SharePoint versioning habilitado (mínimo 10 versiones por archivo).[^20]
- Tabla `audit_carga` en SQL registra cada carga: fuente, timestamp, usuario, filas procesadas, errores.
- Tabla `audit_cambios` captura modificaciones post-carga usando triggers de SQL o lógica en Power Automate.
- Power BI Activity Log registra quién accede a qué reporte y cuándo.

### Validaciones Mínimas de Calidad de Datos

1. **Unicidad:** No duplicar registros del mismo turno/área/fecha.
2. **Completitud:** Campos obligatorios no nulos (fecha, turno, área, valor).
3. **Rango:** Toneladas extraídas dentro de límites físicamente posibles (0–500 t/turno según equipo).
4. **Referencial:** FK contra tablas maestras (turno, equipo, área deben existir en catálogos).
5. **Temporal:** Fecha del reporte ≤ fecha de carga.
6. **Formato:** Fechas en ISO 8601 (YYYY-MM-DD), decimales con punto.

### Manejo de Errores

- Registros con errores de validación van a tabla `staging_errores` para revisión.
- Se notifica al responsable del área vía Power Automate (email o Teams).
- No se carga dato inválido al modelo productivo.
- Cada error tiene ID de carga para trazabilidad completa.

***

## D. Gobierno de Datos Básico

### Modelo de Gobernanza Ligera (Fase 1–2)

El objetivo es establecer responsabilidades claras sin burocracia excesiva. Se propone un modelo con tres niveles:[^21]

#### Nivel 1 — Dueños de Datos por Dominio

| Dominio | Dueño de Datos | Responsable Técnico |
|---|---|---|
| Producción | Jefe de Mina / Superintendente | Analista BI |
| Mantenimiento | Jefe de Mantenimiento | Analista BI |
| Seguridad | Jefe de Seguridad | Analista BI |
| Recursos Humanos | RRHH / Turno | Analista BI |
| Costos Operacionales | Controller / Finanzas | Analista BI / DBA |
| Datos Maestros | TI / Arquitecto de Solución | DBA |

#### Nivel 2 — Reglas de Gobernanza Básica

- **Catálogo de fuentes:** Documento (SharePoint o Confluence) que lista cada fuente de datos, propietario, frecuencia, formato, calidad esperada.
- **Diccionario de datos:** Tabla Excel/Lista con nombre de campo, descripción, tipo de dato, fuente, regla de validación, dueño. Mínimo un campo por cada KPI reportado.
- **Definición de KPIs:** Cada KPI debe tener fórmula, fuente, frecuencia, responsable, y nivel de tolerancia para desvíos.
- **Control de cambios:** Todo cambio a plantillas Excel, modelos Power BI o reglas de validación pasa por aprobación del dueño del dominio y se registra en log.
- **Política de acceso:** Acceso basado en roles mediante grupos de Entra ID. Sin acceso individual directo a datasets de producción.

#### Nivel 3 — Frecuencia de Actualización

| Reporte | Frecuencia | Método |
|---|---|---|
| Producción diaria | Cada turno (3x/día) | Power Automate o carga manual |
| Disponibilidad mecánica | Diario | Power Automate |
| Seguridad | Diario / semanal | Manual supervisado |
| KPIs gerenciales | Semanal | Automático post-carga |
| Reportes de cierre de mes | Mensual | ETL + validación manual |

***

## E. Seguridad, Permisos y Accesos

### Principios de Seguridad

Se aplica el principio de **mínimo privilegio** usando grupos de Microsoft Entra ID:[^22][^23]

- Nunca asignar permisos individuales directamente; siempre usar grupos.
- Separar ambientes: Desarrollo / QA / Producción.
- Habilitar MFA para todos los usuarios con acceso a datos sensibles.
- Power BI Row-Level Security (RLS) para que cada área vea solo sus datos.

### Matriz de Permisos por Componente

| Componente | Usuarios Finales | Desarrolladores | Administradores |
|---|---|---|---|
| **SharePoint (Biblioteca fuentes)** | Leer / subir (Contributor) | Leer / escribir / gestionar (Owner) | Control total (Site Admin) |
| **SharePoint (Repositorio gobernado)** | Solo lectura | Contribuir + crear versiones | Site Collection Admin |
| **Power BI Workspace** | Viewer (solo ver reportes) | Contributor (publicar reportes) | Admin (gestionar workspace) |
| **Power BI Dataset/Semantic Model** | Read (ver datos) | Build (crear reportes derivados) | Admin (gestionar permisos) |
| **Power BI Gateway** | Sin acceso | Puede usar la fuente configurada | Gateway Admin |
| **SQL Server / Azure SQL** | Sin acceso directo | `db_datareader` en esquema específico | `db_owner` o `sysadmin` (solo DBA) |
| **Power Apps** | Usuario de la app | Maker (crear apps) | Environment Admin |
| **Power Automate** | Sin acceso a flujos | Flow Maker | Environment Admin |
| **Microsoft Entra ID** | Usuario estándar | Sin rol de directorio | Global Admin / Privileged Role Admin |
| **Azure Portal** | Sin acceso | Contributor en RG específico | Owner en suscripción |
| **Microsoft Fabric** | Viewer (con Pro en F2-F32) | Contributor en workspace | Capacity Admin |

### Roles Power BI Workspace

Los cuatro roles estándar en workspaces de Power BI son:[^24][^25]
- **Admin:** Gestión completa, puede agregar/quitar admins.
- **Member:** Puede publicar apps, actualizar contenido.
- **Contributor:** Puede crear y editar reportes en el workspace.
- **Viewer:** Solo puede ver el contenido publicado (requiere Pro en capacidad compartida).[^26]

### Row-Level Security (RLS) Recomendado

```
Tabla de Seguridad: rls_usuarios_area
  UserPrincipalName | Area | Nivel_Acceso
  jperez@mina.com   | Producción | Full
  mlopez@mina.com   | Mantenimiento | Full
  gerencia@mina.com | TODOS | Consolidado

Regla DAX en Power BI:
  [UserPrincipalName] = USERPRINCIPALNAME()
  OR [Nivel_Acceso] = "TODOS"
```

### Riesgos de Seguridad y Mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Acceso no autorizado a datos de producción | Media | Alto | RLS en Power BI + grupos Entra ID[^23] |
| Excel modificado por usuario no autorizado | Alta | Alto | Permisos Contributor/Read en SharePoint |
| Credenciales del Gateway expuestas | Baja | Alto | Cuenta de servicio dedicada, sin credenciales personales[^16] |
| Flujo Power Automate sin dueño | Alta | Medio | Política: todo flujo tiene dueño + cuenta de servicio backup[^6] |
| Dataset Power BI expuesto públicamente | Baja | Alto | Deshabilitar "Publish to web" en tenant settings |

***

## F. Roles para Implementación

### Equipo Mínimo Recomendado

| Rol | Responsabilidades | Fases | Dedicación | Perfil Mínimo | Riesgo si no existe |
|---|---|---|---|---|---|
| **Líder Técnico / Arquitecto** | Diseño de arquitectura, decisiones tecnológicas, coordinación técnica | 0–4 | 50–100% | 3+ años en soluciones BI Microsoft, conocimiento Power Platform + Azure | Sin dirección técnica, el proyecto fragmenta y no escala |
| **Analista Funcional** | Levantamiento de reportes, definición de KPIs, validación con usuarios | 0–2 | 75% | Experiencia en minería o procesos industriales; capacidad de entrevistar usuarios | Los reportes no reflejan necesidades reales del negocio |
| **Especialista Power BI** | Desarrollo de modelos semánticos, reportes DAX, RLS, publicación | 1–4 | 100% en F1-F2, 50% en F3-F4 | Power BI intermediate-advanced (DAX, Power Query, Service) | Reportes de baja calidad, sin performance, sin seguridad |
| **Ingeniero de Datos / ETL** | Pipelines de datos, transformaciones, ADF, validaciones de calidad | 2–3 | 100% en F2, 50% en F3 | Python/SQL + Power Query + ADF o similar | Sin ETL, los datos no llegan limpios ni a tiempo a Power BI |
| **DBA / Administrador BD** | Diseño de esquema SQL, backups, performance, seguridad de BD | 2–4 | 50% | SQL Server o Azure SQL, diseño relacional | Base de datos sin optimización, riesgos de pérdida de datos |
| **Especialista Power Platform** | Power Automate, Power Apps, conectores, flujos de aprobación | 2–4 | 50–75% en F2-F3 | Power Automate + Power Apps intermediate | Automatización limitada, dependencia manual excesiva |
| **Especialista UX/UI Reportabilidad** | Diseño de dashboards, experiencia de usuario, prototipos | 1–2 | 50% | Diseño UX + conocimiento Power BI o Figma | Reportes difíciles de usar, baja adopción |
| **Especialista Minero (SME)** | Validación de KPIs, contexto operacional, aceptación de reportes | 0–2 | 25–50% | Ingeniero de minas con experiencia underground | KPIs incorrectos o irrelevantes para la operación |
| **Responsable de Seguridad / TI del Cliente** | Configuración Entra ID, accesos, firewall, gateway, soporte infra | 0–4 | 25% | Administrador M365 / Azure; conocimiento de red | Bloqueos de acceso, problemas de conectividad no resueltos |
| **Usuarios Clave por Área** | Validación funcional, testing, adopción, feedback | 1–4 | 25% | Supervisor o analista del área (Minas, Mantenimiento, Seguridad) | Sin adopción real, el sistema se usa incorrectamente |
| **Soporte Operativo** | Mesa de cambios, soporte nivel 1, monitoreo en operación | 4 | 25–50% | Analista BI junior + conocimiento operacional | Problemas sin resolver en producción, frustración de usuarios |

***

## G. Roadmap de Implementación

### Fase 0 — Descubrimiento y Validación (2–3 semanas)

**Objetivo:** Confirmar el estado real de los reportes, fuentes de datos, licencias e infraestructura antes de comprometer la propuesta.

**Actividades:**
- Revisión detallada de los 6 reportes Excel: estructura, origen de datos, responsable, frecuencia.
- Entrevistas con usuarios clave de cada área (Minas, Mantenimiento, Seguridad, Gerencia).
- Inventario de licencias Microsoft 365 del cliente (E3/E5/Business).
- Revisión de infraestructura TI: servidores disponibles, conectividad, políticas de firewall.
- Identificación de sistemas fuente adicionales (ERP, SCADA, controles de acceso).
- Validación de restricciones de TI: datos en nube sí/no, política de datos on-premise.

**Entregables:**
- Informe de descubrimiento técnico
- Mapa de fuentes de datos y reportes
- Inventario de licencias
- Árbol de decisión: Quick Win vs. Escalable

**Criterios de éxito:** Todos los 6 reportes documentados; licencias confirmadas; restricciones TI identificadas.

**Dependencias del cliente:** Acceso a los archivos Excel actuales; disponibilidad de usuarios clave para entrevistas; acceso al tenant de Microsoft 365.

***

### Fase 1 — Quick Wins de Reportabilidad (4–6 semanas)

**Objetivo:** Tener 6 reportes digitalizados en Power BI, publicados y accesibles para usuarios finales con actualización automatizada básica.

**Actividades:**
- Estandarización de plantillas Excel (tablas nombradas, hojas de metadatos, validaciones).
- Configuración de SharePoint como repositorio controlado (bibliotecas, permisos, versioning).
- Configuración de grupos en Microsoft Entra ID (por rol: editor, viewer, admin).
- Conexión Power BI Desktop a Excel en SharePoint (sin Gateway necesario).[^15]
- Desarrollo de 6 reportes Power BI iniciales (1 por reporte Excel).
- Publicación en Power BI Service (workspace por área operacional).
- Configuración de actualización programada (máx. 8/día en Pro).[^2]
- Flujos Power Automate para notificaciones: alertar cuando se sube nuevo archivo Excel.
- Capacitación básica a usuarios clave (cómo subir archivos, cómo ver reportes).

**Entregables:**
- 6 reportes Power BI publicados
- Plantillas Excel estandarizadas
- Repositorio SharePoint estructurado
- Manual de usuario básico (cómo subir datos y ver reportes)
- Flujos Power Automate de notificación

**Criterios de éxito:** Al menos 4 de 6 reportes validados por usuarios; actualización automática funcionando; >80% usuarios con acceso configurado.

**Riesgos:**
- Excel con estructura inconsistente → solución: estandarizar plantilla antes de conectar
- Usuario no actualiza el Excel → solución: proceso de gobernanza + recordatorio automático

***

### Fase 2 — Base de Datos y Modelo Gobernado (8–12 semanas)

**Objetivo:** Migrar de Excel como fuente de datos a SQL Server o Azure SQL; implementar ETL básico, auditoría y diccionario de datos.

**Actividades:**
- Decisión: SQL Server on-premise vs. Azure SQL Database (según conectividad y presupuesto).
- Diseño del esquema de base de datos (dimensiones, hechos, auditoría).
- Desarrollo de pipelines ETL: Excel/SharePoint → SQL (Power Automate Premium o ADF).
- Configuración de Data Gateway si se usa SQL on-premise.[^27]
- Migración de modelos Power BI: de Excel a SQL como fuente.
- Implementación de RLS en Power BI.
- Configuración de Deployment Pipelines (Dev → QA → Prod) con PPU o Fabric.
- Publicación en Power BI Service con Workspace Apps.
- Elaboración del diccionario de datos y catálogo de fuentes.
- Capacitación a analistas en modelo de datos y flujo de carga.

**Entregables:**
- Base de datos SQL con esquema productivo
- Pipelines ETL funcionando y programados
- Modelo semántico Power BI en modo Import desde SQL
- Diccionario de datos v1.0
- Catálogo de fuentes de datos
- Matriz de permisos actualizada
- Manual de operación técnica

**Criterios de éxito:** 100% de datos viniendo de SQL (no Excel directo); auditoría de cargas funcionando; tiempo de actualización < 30 min.

***

### Fase 3 — Escalamiento y Automatización (8–12 semanas adicionales)

**Objetivo:** Incorporar Power Apps para captura de datos desde campo, flujos avanzados con Power Automate, y evaluar Azure Data Factory o Fabric para mayor escala.

**Actividades:**
- Desarrollo de Power Apps para captura de datos operacionales (reemplazo de formularios Excel en campo).
- Flujos Power Automate Premium con conectores SQL y validaciones.
- Evaluación e implementación de Azure Data Factory para orquestar cargas complejas.
- Monitoreo de Power BI (Activity Log, refresh monitoring).
- Evaluación de Microsoft Fabric F2/F4 si el volumen de datos crece o se requieren funciones avanzadas.
- Integración con sistemas fuente adicionales (ERP, SCADA si existe).
- Gobierno ampliado: revisión semestral de permisos, auditorías de acceso, métricas de calidad de datos.

**Entregables:**
- 1–2 Power Apps de captura de datos
- Flujos Power Automate con SQL (Premium)
- Pipelines ADF o Dataflows Gen2 (si aplica)
- Tablero de monitoreo de datos y cargas
- Plan de gobierno v2.0

**Criterios de éxito:** Reducción de carga manual en >60%; Power Apps en uso por al menos 2 áreas; sin errores críticos en producción por 30 días consecutivos.

***

### Fase 4 — Operación y Mejora Continua (ongoing)

**Objetivo:** Sostener y mejorar la solución en producción con procesos formales de cambio, soporte y optimización.

**Actividades:**
- Mesa de cambios mensual (solicitudes de nuevos reportes / KPIs).
- Revisión trimestral de permisos y accesos.
- Monitoreo de performance de modelos Power BI y SQL.
- Incorporación de nuevos indicadores según evolución operacional.
- Evaluación anual de arquitectura y roadmap tecnológico.
- Integración progresiva con nuevas fuentes (ERP, telemetría de equipos, control de personal).

**Entregables:**
- Plan de soporte mensual
- Log de cambios semestral
- Reporte de calidad de datos trimestral
- Propuesta de roadmap para siguiente año

***

## H. Entregables Técnicos y Funcionales de la Propuesta

### Lista de Entregables Recomendados

| # | Entregable | Fase | Responsable Principal |
|---|---|---|---|
| 1 | Documento de Arquitectura (este documento + diagramas) | 0 | Arquitecto de Solución |
| 2 | Informe de Descubrimiento y Validación | 0 | Analista Funcional |
| 3 | Matriz de Fuentes de Datos | 0–1 | Analista Funcional + SME Minero |
| 4 | Plantillas Excel Estandarizadas (6 reportes) | 1 | Especialista Power BI |
| 5 | Repositorio SharePoint Configurado | 1 | Especialista Power Platform / TI |
| 6 | 6 Reportes Power BI (v1.0) | 1 | Especialista Power BI |
| 7 | Flujos Power Automate básicos (notificaciones) | 1 | Especialista Power Platform |
| 8 | Matriz de Permisos (por componente) | 1 | Arquitecto + TI Cliente |
| 9 | Matriz de Roles y Responsabilidades (RACI) | 0–1 | Líder Técnico |
| 10 | Prototipo UX/UI (mockup dashboards) | 1 | Especialista UX/UI |
| 11 | Modelo de Datos Conceptual | 1–2 | Arquitecto + DBA |
| 12 | Esquema SQL (DDL completo) | 2 | DBA / Ingeniero de Datos |
| 13 | Diccionario de Datos v1.0 | 2 | Analista Funcional + DBA |
| 14 | Documento de Gobierno Básico | 2 | Analista Funcional + Arquitecto |
| 15 | Pipelines ETL/ELT documentados | 2 | Ingeniero de Datos |
| 16 | Manual de Operación Técnica | 2–3 | Líder Técnico |
| 17 | Manual de Usuario Final | 1–3 | Analista Funcional + UX |
| 18 | Aplicaciones Power Apps (si aplica) | 3 | Especialista Power Platform |
| 19 | Plan de Soporte y Escalamiento | 4 | Líder Técnico |
| 20 | Plan de Roadmap Tecnológico (próximo año) | 4 | Arquitecto de Solución |

***

## I. Recomendación Final

### Arquitectura Recomendada para Primera Implementación: **Escenario 1 Quick Win + Puente a Escenario 2**

Se recomienda iniciar con el **Escenario Mínimo Viable** (Fase 1) y diseñar desde el inicio con la arquitectura de datos del **Escenario Escalable** (Fase 2), de forma que el trabajo de estandarización de Fase 1 sea reutilizable y no requiera ser descartado.

**Justificación por criterio:**

| Criterio | Decisión | Justificación |
|---|---|---|
| **Costo** | Quick Win primero | Si el cliente tiene M365 E3, el costo adicional es solo Power BI Pro ($14/usr/mes)[^1]; el primer valor se entrega casi sin inversión adicional |
| **Velocidad de implementación** | Quick Win | 4–8 semanas vs. 12–20 semanas del escenario completo; valor demostrable rápidamente |
| **Escalabilidad** | Diseñar para Escenario 2 desde el inicio | Usar plantillas Excel con estructura de tablas SQL, nomenclatura correcta y modelo de datos dimensional desde Fase 1 |
| **Seguridad** | Entra ID desde Fase 1 | Configurar grupos de Entra ID y RLS básico desde el inicio; no agregar seguridad "después" |
| **Gobierno de datos** | Ligero en Fase 1, estructurado en Fase 2 | Diccionario mínimo + responsables claros desde Fase 1; gobierno completo en Fase 2 |
| **Mantenibilidad** | SharePoint + Power BI (stack conocido) | El cliente y equipo probablemente ya tiene exposición a estas herramientas |
| **Alineamiento Microsoft** | Total | SharePoint, Power BI, Power Automate, Entra ID son el núcleo del ecosistema M365[^28] |
| **Capacidad realista** | Quick Win | Evitar sobreestimar la capacidad del cliente para adoptar ADF, Fabric o SQL desde el día 1 |
| **Riesgo técnico** | Bajo en Fase 1 | Sin Gateway en Fase 1 (Excel en SharePoint no requiere Gateway[^15]); complejidad mínima |
| **Facilidad de adopción** | Alta en Quick Win | Los usuarios ya conocen Excel y SharePoint; los reportes Power BI son el siguiente paso natural |

***

## Riesgos del Proyecto y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| Reportes Excel con estructura muy inconsistente | Alta | Alto | Estandarización obligatoria en Fase 1 antes de conectar a Power BI |
| Cliente no tiene licencias Power BI Pro | Media | Alto | Validar en Fase 0; si solo tiene E3, agregar Pro a 5–10 usuarios clave |
| TI del cliente bloquea acceso a SharePoint o Power BI Service | Media | Alto | Involucrar a TI desde Fase 0; mapear restricciones antes de proponer |
| Datos sensibles de nómina o costos no pueden ir a nube | Media | Alto | Arquitectura híbrida: datos sensibles en SQL on-premise + Gateway |
| Baja adopción de usuarios finales | Alta | Alto | Involucrar usuarios clave en diseño de dashboards; UX simple y orientada a operación |
| Power Automate sin licencias premium bloqueado | Media | Medio | Validar si Premium Connector se necesita; en Fase 1 solo standard connectors |
| Gateway inestable por servidor con problemas | Baja (si hay Gateway) | Alto | Servidor dedicado, monitoreo, cuenta de servicio; preferir SharePoint en nube si posible[^15] |
| Crecimiento de datos supera capacidad de Excel | Media | Medio | Este es el trigger para pasar a Fase 2 (SQL); anticiparlo desde Fase 1 |
| Falta de DBA para SQL Server | Media | Medio | Usar Azure SQL Database PaaS en Fase 2 para eliminar necesidad de DBA dedicado[^29] |
| Microsoft Fabric con costo no esperado | Baja | Medio | No comprometer Fabric hasta Fase 3; evaluar solo cuando Quick Win sea insuficiente |

***

## Checklist — Preguntas para Validar con el Cliente

### Licencias y Tecnología
- [ ] ¿Qué plan de Microsoft 365 tiene actualmente el cliente? (Business Basic / E3 / E5 / otro)
- [ ] ¿Cuántos usuarios necesitarán ver reportes de Power BI? ¿Y cuántos publicarán/crearán?
- [ ] ¿Tiene el cliente Power BI Pro o Power BI Premium Per User ya asignado?
- [ ] ¿Tiene acceso a Azure (suscripción activa)? ¿Hay presupuesto para servicios Azure?
- [ ] ¿Existe Microsoft Teams activo y en uso como canal de comunicación?

### Infraestructura y Datos
- [ ] ¿Los archivos Excel están en equipos locales, servidor de red, SharePoint u OneDrive?
- [ ] ¿Existe algún ERP, sistema de despacho, SCADA u otro sistema con datos operacionales?
- [ ] ¿Hay servidor on-premise disponible para instalar SQL Server o el Data Gateway?
- [ ] ¿Cuál es la calidad y velocidad de la conectividad a internet en la mina (subterráneo)?
- [ ] ¿Los datos de producción pueden almacenarse en la nube de Microsoft (tenant M365)?

### Procesos y Organización
- [ ] ¿Quién es el responsable actual de cada uno de los 6 reportes?
- [ ] ¿Con qué frecuencia se actualiza cada reporte hoy (diario, semanal, mensual)?
- [ ] ¿Hay un proceso de validación o aprobación de los datos antes de reportar?
- [ ] ¿Existe algún analista de datos o BI en el equipo del cliente?
- [ ] ¿Quién será el sponsor del proyecto dentro del cliente (nivel gerencial)?

### Seguridad y Gobernanza
- [ ] ¿Existe una política de TI que restrinja el uso de servicios cloud o almacenamiento fuera de la red?
- [ ] ¿Se requiere control de acceso por área o nivel jerárquico (los supervisores ven solo su área)?
- [ ] ¿Hay datos regulados o sensibles (nóminas, costos, información de personas)?
- [ ] ¿Quién administra Microsoft Entra ID / Active Directory en el cliente?
- [ ] ¿Se requiere cumplimiento con normas locales (LFPDPPP en México, ISO 27001, otro)?

***

## Checklist — Información que ASTAY Debe Solicitar al Cliente

### Documentos y Archivos
- [ ] Los 6 archivos Excel actuales (una versión reciente de cada reporte)
- [ ] Descripción de cada reporte: propósito, audiencia, frecuencia, campos principales
- [ ] Organigrama del área operacional (Minas, Mantenimiento, Seguridad, Gerencia)
- [ ] Lista de usuarios que deberán acceder a los reportes (nombre, área, rol, email corporativo)

### Accesos Técnicos (para evaluación, no producción)
- [ ] Acceso de lectura al tenant de Microsoft 365 (solo para auditar licencias y configuraciones)
- [ ] Muestra de los 6 reportes Excel con datos reales o anonimizados
- [ ] Descripción de infraestructura IT: servidores, conectividad, VPN, sistemas existentes

### Decisiones de Negocio
- [ ] Confirmación del presupuesto disponible para licencias adicionales (Power BI Pro, Azure)
- [ ] Confirmación del sponsor ejecutivo y su nivel de autorización
- [ ] Confirmación de si se requiere auditoría de accesos por norma o política interna
- [ ] Definición de los 5–10 KPIs más críticos para la operación que deben aparecer en los reportes
- [ ] Plazo esperado para ver los primeros resultados (quick wins)
- [ ] Restricciones contractuales o de TI que puedan afectar el uso de nube Microsoft

***

*Documento preparado por ASTAY como insumo para propuesta técnico-económica. Versión 1.0 — Julio 2026.*

---

## References

1. [Power BI Pro vs Premium (PPU & Fabric) in 2026: Pricing & Features](https://metricasoftware.com/power-bi-pro-vs-premium-ppu-fabric-in-2026-pricing-features/) - List price: 14 USD per user per month. Available standalone or as part of some Microsoft 365 plans (...

2. [Power BI Pro vs Premium Per User vs Fabric: Licensing Decision Tree](https://beyondtheanalytics.com/blog/power-bi-pro-vs-premium-per-user-vs-fabric-licensing-2026) - Power BI Pro vs Premium: What Changed in the April 2025 Price Increase? ; Premium Per User (PPU), $2...

3. [Power BI Price Increases in 2025 – What Does This Mean for You?](https://webdashboard.com/power-bi-price-increases/) - Microsoft has announced that the price of Power BI Pro will increase from $10 to $14 per user per mo...

4. [Microsoft 365 E3 vs E5: Which plan is right for you? - Texaport](https://texaport.ie/blog/microsoft-365-e3-vs-e5) - The E3 licence also costs less than the E5 licence. While prices can vary depending on your exact co...

5. [Microsoft 365 Power Automate Licensing: What's Included](https://microsoftnegotiations.com/blog/microsoft-365-power-automate-licensing) - Licensing Option Seeded (M365) Power Automate Premium Process Plan (Per Bot) Cost Included $15/user/...

6. [Power Automate best practices: What admins can't see and ...](https://rencore.com/en/blog/microsoft-power-automate-governance-best-practices) - Discover the biggest Power Automate risks, what admins can't control, and the governance best practi...

7. [Power Automate Pricing 2026: Every Plan Compared And ...](https://www.synapx.com/blogs/understanding-power-automate-licensing-options/) - Per User at $15, Per Flow at $500, RPA at $40 — but which plan is right for your team? This guide br...

8. [Power Apps Licensing and Pricing | Low-Code AI App Builder](https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing) - Get a free developer account to build and test unlimited apps or automation flows. Power Apps Premiu...

9. [Unlocking Azure SQL Pricing: How Much Does it Really Cost?](https://intercept.cloud/en-gb/blogs/azure-sql-pricing) - Azure SQL pricing is complex to gauge because it's very complicated due to its pricing structure (th...

10. [Data Pipeline Pricing and FAQ – Data Factory | Microsoft Azure](https://azure.microsoft.com/en-us/pricing/details/data-factory/data-pipeline/) - Azure Data Factory workflow orchestration manager ; Small (D2 v4), Up to 50 DAGs, 2, 2, 2, $0.49 ; L...

11. [Azure Data Factory Pricing - Cost Breakdown & Savings Tips](https://www.pump.co/blog/azure-data-factory-pricing/) - This blog lays out every layer of ADF costs, from basic pipeline orchestration to heavy-performance ...

12. [Microsoft Fabric Pricing 2026: What You'll Actually Pay (F2 To F128)](https://www.synapx.com/blogs/microsoft-fabric-pricing-guide-2026/) - F2, 2, ~£200, Yes (per consumer), Proof of concept, small team dashboards. F4, 4, ~£400, Yes (per co...

13. [Microsoft Fabric: Features, Capacities, and Saving on Power BI Pro ...](https://datatako.com/blog/microsoft-fabric-features-capacities-and-saving-on-power-bi-pro-licenses) - An F2 capacity costs around $260–$270/month on pay-as-you-go, while F4 would be around $520+. We'll ...

14. [Dataverse - The cheapest way to license a Power Apps Canvas App ...](https://powerappsguide.com/blog/post/cheapest-way-to-use-dataverse-with-power-apps-2025) - At present, the cost of a per-app license is $5 per user per month. The link to the PDF guide is her...

15. [How to add Excel file to a Standard data gateway in Power ...](https://community.fabric.microsoft.com/t5/Service/How-to-add-Excel-file-to-a-Standard-data-gateway-in-Power-BI/m-p/4621240) - Place your Excel files onto a OneDrive or SharePoint. Use the SharePoint Folder connector, NOT the W...

16. [Install an on-premises data gateway](https://learn.microsoft.com/en-us/data-integration/gateway/service-gateway-install) - Minimum requirements ·.NET Framework 4.8 · A 64-bit version of Windows 10 or a 64-bit version of Win...

17. [Lessons learned and best practices implementing Microsoft Fabric ...](https://www.linkedin.com/pulse/lessons-learned-best-practices-implementing-microsoft-samblancat-qkkye) - This article gives a series of best practices and recommendation to develop and implement data platf...

18. [Understanding KPIs for Mining Operations: Efficiency ...](https://www.linkedin.com/posts/sudam-behera-14759727_kpis-of-mining-operations-activity-7392235217392021504--xRw) - Key metrics include production rate, ore grade, equipment utilization, overall equipment effectivene...

19. [Mining Industry KPI Examples | Mining KPIs](https://www.spiderstrategies.com/kpi/industry/mining/) - Tracking the right KPIs can help mining companies operate efficiently, manage risks, and demonstrate...

20. [Data access governance reports for SharePoint sites](https://learn.microsoft.com/en-us/sharepoint/data-access-governance-reports) - Data access governance reports can help you govern access to SharePoint data. The reports let you di...

21. [Data Governance Frameworks: 5 Lessons From McKinsey, Microsoft ...](https://montecarlo.ai/blog-data-governance-frameworks/) - Data governance frameworks provide a systematic approach for organizations to manage, use, and prote...

22. [SharePoint Data Governance: A Guide to Avoiding Catastrophe](https://ollo.ie/blog-posts/share-point-data-governance) - Discover a practical approach to SharePoint data governance that prevents permission sprawl, migrati...

23. [Power BI Access Control: How to Manage User ...](https://thereportinghub.com/power-bi/manage-permissions-power-bi) - Permissions are granted through the Power BI Service, workspace roles, and dataset settings. You can...

24. [Roles in workspaces in Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces) - Use the Viewer role to enforce row-level security (RLS) for users who browse content in a workspace....

25. [Best Practice for Power BI Workspace Roles Setup](https://radacad.com/best-practice-for-power-bi-workspace-roles-setup/) - In this article, I'll explain all the roles in the workspace, and what is the best way to set them u...

26. [Power BI Workspaces and Security Roles](https://www.youtube.com/watch?v=-3rKgB2G4Lk) - In this video we will look at what App Workspaces are and how they should be used. assign them roles...

27. [On-premises data gateway - Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem) - Download and install the gateway on a local computer. · Configure the gateway based on your firewall...

28. [How integrating Power BI with Office 365 streamlines ...](https://ebisgroup.com/how-integrating-power-bi-with-office-365-streamlines-reporting/) - Integration of Power BI with SharePoint and OneDrive allows companies to centralize data sources and...

29. [A Cloud Architect's Guide to Azure SQL Service Selection and Pricing](https://acloudguy.com/2025/09/14/a-cloud-architects-guide-to-azure-sql-pricing-and-service-selection/) - Azure SQL Deployment Options: Architecture & Pricing Comparison ; Azure SQL Database (Single DB / El...

