Planta de Fundición y Refinería - Pisco — MINSUR

# Propósito

Este cuestionario forma parte de la Etapa 1 — Definición Técnica y Alcance BIM, cuyo objetivo es ordenar las definiciones necesarias para pasar de una visión general a un alcance técnico ejecutable y presupuestable con precisión.

Antes de construir la plataforma, es necesario definir:

* el estándar del modelo BIM
* el nivel de detalle y precisión esperados
* la cobertura física de la planta
* las fuentes de información disponibles
* el uso operacional que tendrá el modelo
* la arquitectura tecnológica viable
* el roadmap hacia una segunda etapa de gemelo digital

Las respuestas a este cuestionario serán la base para dimensionar correctamente el proyecto, evitar sobrecostos y asegurar que la solución responda al objetivo real de MINSUR.

# Referencia: Niveles BIM

Para alinear expectativas, compartimos la siguiente matriz conceptual de niveles BIM. Antes de responder el cuestionario, le pedimos identificar cuál nivel se acerca mejor a su expectativa para la Fase 1.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Nivel** | **Nombre** | **Uso principal** | **Precisión** | **Información asociada** |
| 1 | Modelo Visual Referencial | Navegación y presentación | Baja / media | Básica |
| 2 | Modelo Operacional por Activo | Identificación de equipos y documentación | Media | Metadata por activo |
| 3 | Modelo Técnico Coordinado | Interferencias, planos y soporte técnico | Media / alta | Metadata técnica ampliada |
| 4 | Modelo As-Built de Ingeniería | Ingeniería, mediciones y proyectos | Alta | Información técnica completa |
| 5 | Gemelo Digital Operacional | Monitoreo, datos vivos, analítica | Variable | Tags, sensores, KPIs, eventos |

**Nivel esperado para Fase 1 (MINSUR indica):**

**Nivel 3 — Modelo Técnico Coordinado.**

# Bloque A — Objetivo y Uso Esperado

1. ¿Cuál es el objetivo principal de la plataforma BIM/Gemelo Digital?

**Implementar un modelo BIM integrado de activos que consolide información técnica y habilite la evolución futura hacia un gemelo digital.**

1. ¿El modelo será usado principalmente para visualización, gestión documental, mantenimiento, ingeniería, operación o monitoreo?

**Gestión documental, mantenimiento, ingeniería y soporte a decisiones operativas.**

1. ¿Qué problema específico desean resolver en la primera etapa?

**Fragmentación de información y dependencia del conocimiento tácito.**

1. ¿Qué usuarios utilizarán la plataforma? (roles, áreas, cantidad aproximada)

**Responsables de la operación, mantenimiento, proyectos e ingeniería (8–12 usuarios iniciales).**

1. ¿Qué decisiones esperan soportar con esta solución?

**Planificación de trabajos, validación técnica y gestión de información confiable.**

1. ¿Qué consideran un resultado exitoso para la primera fase?

**Modelo BIM confiable, integrado y adoptado por usuarios.**

# Bloque B — Alcance Físico de Planta

1. ¿Qué plantas estarán incluidas en la Fase 1? (fundición, refinería, otras áreas)

**Fundición y Refinería Pisco.**

1. ¿Qué zonas específicas deben priorizarse?

**Hornos, sistemas de gases, manejo de materiales, ollas de refinería, cristalizadores y activos críticos.**

1. ¿El alcance inicial considera toda la planta o solo áreas piloto?

**Áreas piloto priorizadas: Fundición y Refinería.**

1. ¿Qué sistemas son prioritarios? (mecánico, eléctrico, instrumentación, tuberías, otros)

**Civil, mecánico, tuberías, eléctrico e instrumentación.**

1. ¿Qué activos deben ser modelados obligatoriamente en Fase 1?

**Activos críticos de proceso y mantenimiento.**

1. ¿Existen activos críticos que deban tener mayor nivel de detalle?

**Sí, como los hornos, rueda de moldeo.**

1. ¿Qué áreas pueden quedar fuera del alcance inicial?

**Áreas administrativas y algunas otras plantas no mencionadas; podrían incluirse en fases futuras.**

# Bloque C — Fuentes de Información Disponible

1. ¿Qué información técnica existe actualmente sobre la planta?

**Planos, datasheets, manuales, nube de puntos de ciertos sectores (40%).**

1. ¿Existen planos 2D actualizados?

**Sí, parcialmente actualizados.**

1. ¿Existen modelos 3D previos de la planta o áreas específicas?

**Parciales.**

1. ¿Existen archivos BIM, Revit, IFC, Navisworks, DWG, DXF, OBJ o FBX?

**DWG, IFC, Navisworks.**

1. ¿Existe una maqueta digital preliminar? (Mencionaron una en la sesión anterior)

**Sí, preliminar.**

1. ¿Qué información se considera confiable y actualizada?

**Proyectos recientes.**

1. ¿Qué información está desactualizada o en revisión?

**Ingeniería histórica.**

# Bloque D — Nube de Puntos y Levantamiento 3D

1. ¿Qué áreas ya cuentan con nube de puntos capturada?

**Áreas críticas, parcialmente.**

1. ¿Qué áreas faltan escanear o completar?

**Resto de planta.**

1. ¿Qué tecnología se usó para el levantamiento existente? (LIDAR terrestre, fotogrametría, drone, otro)

**Lasergrafía, fotogrametría, topografía.**

1. ¿Cuál es la precisión declarada del levantamiento existente?

**Centimétrica.**

1. ¿En qué formato se encuentra la nube de puntos? (E57, LAS, RCP, otro)

**RCS, DIFF, LLT, RCC.**

1. ¿La nube de puntos está georreferenciada?

**Parcial.**

1. ¿Existen puntos de control topográfico o puntos de referencia conocidos?

**Sí.**

# Bloque E — Nivel BIM / Detalle y Contenido del Modelo

1. ¿Qué nivel de detalle geométrico esperan para los activos del modelo?

**LOD 200–300.**

1. ¿El modelo debe ser solo visual o debe soportar mediciones?

**Sí, soportar mediciones.**

1. ¿El modelo debe permitir generar planos?

**Sí.**

1. ¿Se requiere detección de interferencias o colisiones?

**Sí.**

1. ¿Se requiere precisión para ingeniería?

**Sí.**

1. ¿Qué tolerancia geométrica esperan? (en mm, cm o sin tolerancia formal definida)

**Centimétrica.**

1. ¿Qué información mínima debe contener cada objeto del modelo?

**Tag, ubicación, características.**

1. ¿Se espera clasificar objetos por sistema, área, equipo o disciplina?

**Sí, por sistema y área.**

1. ¿El modelo debe representar tuberías, estructuras, equipos, bandejas de cable, instrumentación y tableros eléctricos?

**Sí, todos los principales.**

1. ¿Qué elementos deben modelarse con mayor nivel de detalle y cuáles pueden ser representaciones volumétricas?

**Mayor detalle en equipos críticos.**

# Bloque F — Activos, Taxonomía y Metadata

1. ¿Existe un catálogo maestro de activos de planta? ¿Cada activo tiene un código único?

**Sí existe un catastro de activos.**

1. ¿Qué metadatos mínimos deben visualizarse al seleccionar un activo en el portal?

**Tag, descripción, documentos.**

# Bloque G — Documentación y SharePoint

1. ¿La documentación técnica de planta está centralizada en SharePoint?

**Parcialmente. De ser necesario se incluirá según estructura.**

1. ¿Cómo está organizada la estructura documental actual?

**Por áreas y proyectos.**

1. ¿Existe estructura por planta, área, sistema o activo?

**Por sistema y área, ordenadas por ubicaciones técnicas definidas en SAP.**

1. ¿Los documentos tienen metadata cargada en SharePoint?

**Parcial.**

1. ¿Los documentos están vinculados a códigos de activo?

**Parcial.**

1. ¿Qué tipos de documentos deben abrirse desde el portal BIM? (planos, fichas técnicas, procedimientos, P&ID, manuales, otros)

**Planos, manuales, P&ID.**

1. ¿El portal debe abrir carpetas completas de SharePoint o documentos específicos?

**Documentos específicos.**

# Bloque H — Funcionalidades Esperadas en Fase 1

1. ¿Qué funcionalidades deben estar disponibles en la primera versión de la plataforma?

**Navegación, búsqueda, visualización.**

1. ¿Se requiere navegación libre por el modelo 3D?

**Sí.**

1. ¿Se requiere búsqueda de activos por nombre, código o área?

**Sí.**

1. ¿Se requiere árbol jerárquico de planta navegable?

**Sí.**

1. ¿Se requiere selección de activos mediante clic en el modelo?

**Sí.**

# Bloque I — Precisión, Medición e Ingeniería

1. ¿El modelo será utilizado como referencia visual o como base para trabajos de ingeniería?

**Ingeniería y visualización.**

1. ¿Qué precisión se necesita para realizar mediciones dentro del modelo?

**Centimétrica.**

1. ¿Qué tipo de planos esperan obtener o exportar?

**Generales y detalle.**

1. ¿Esos planos serán de uso referencial o tendrán valor técnico oficial?

**Uso técnico.**

1. ¿Se requiere trazabilidad entre la nube de puntos y el objeto modelado?

**Sí.**

# Bloque J — Arquitectura Tecnológica

1. ¿El despliegue de la plataforma será en Azure, on-premise o híbrido?

**Puede ser Azure.**

1. ¿Qué navegadores y dispositivos deben soportarse? (Chrome, Edge, Firefox; escritorio, tablet)

**Web escritorio y tablet. Chrome, Edge.**

1. ¿Cuántos usuarios concurrentes se esperan aproximadamente?

**8–12.**

# Bloque K — Integración OT y Hoja de Ruta Fase 2

1. ¿Qué sistemas operacionales podrían integrarse en una segunda etapa del proyecto?

**DCS, PI Systems.**

1. ¿Qué variables de proceso desean visualizar sobre el modelo? (temperatura, presión, flujo, nivel, estado de equipos)

**Temperatura, presión, flujo, rpm, posición, estados.**

1. ¿Qué activos tienen variables operacionales que se quieran monitorear?

**Equipos críticos.**

1. ¿Se requiere monitoreo de salud de activos o condición de equipos?

**Por el momento no, pero debe tener capacidad de análisis de estado de salud de activos para el futuro.**

1. ¿Se requieren alarmas o eventos visibles sobre el modelo?

**Sí.**

# Bloque L — Entregables y Criterios de Aceptación

1. ¿Qué formatos de entrega son requeridos? (IFC, OBJ, FBX, Revit, propietario, otro)

**IFC, Revit.**

1. ¿Cómo se validará el modelo? (inspección visual, revisión por área, protocolo técnico)

**Revisión técnica por áreas.**

1. ¿Qué criterios definirán la aceptación del entregable?

**Cumplimiento de alcance, calidad y capacitación.**
