---
fecha: 2026-08-03
tipo: referencia
subtipo: documento-externo
proyecto: BHP_Aster
fuente: BHP
url:
tags: [bhp-aster, ciberseguridad, estandar-bhp]
---

# Estándar Global de Tecnología y Seguridad Informática

**TECH-GSTD-00005**

*(Descargas o copias impresas no son controladas)*

**Versión 7.0 (8 de diciembre de 2023)**

## ¿Propósito de este Estándar Global?

El propósito de este Estándar Global es establecer nuestros requerimientos de tecnología y seguridad informática para proteger la confidencialidad, la integridad y la disponibilidad de nuestros sistemas, servicios y activos digitales frente al uso indebido, los ataques, los daños, las fallas, las pérdidas o el acceso no autorizado.

## ¿A quién aplica esto?

Este Estándar Global se aplica a cualquier persona que esté utilizando procesos globales, activos digitales, sistemas y/o tecnología (que incluye servicios) de ==BHP== y que esté expuesta a riesgos de seguridad informática (que incluye amenazas internas o externas).

Este Estándar Global debe ser seguido por todos los proyectos (que incluye los proyectos de capital) que implementen soluciones tecnológicas.

Este Estándar Global debe ser seguido por cualquier persona que adquiera un producto o servicio que pueda, directa o indirectamente, introducir riesgos de ciberseguridad para BHP.

Este documento se aplica a la tecnología de la información (TI) y la tecnología operativa (OT) dentro de todos los Assets y Funciones.

Si tiene consultas acerca de este Estándar Global, por favor contacte al Dueño del Documento. Los detalles de contacto del dueño del documento pueden ser encontrados a través del Digital Workspace.

## Contenido

1. Requerimientos del Estándar Global
   1.1. Procesos de negocios globales y gobernanza de datos
   1.2. Segregación de la Tecnología de la Información (TI) / Tecnología Operativa (TO)
   1.3. Gestión de riesgos tecnológicos y de seguridad informática
   1.4. Uso de medios extraíbles
   1.5. Gestión de riesgos informáticos de terceros
2. Otros Documentos Relevantes
3. Definiciones
4. Control de Documento
5. Apéndices
   5.1. Apéndice 1: Cronograma de reevaluación periódica

## 1. Requerimientos del Estándar Global

### 1.1. Procesos de negocios globales y gobernanza de datos

Al utilizar o solicitar un cambio en un proceso de negocio global en Signavio, debe:

- Si el cambio se ajusta a las normas de diseño del sistema, solicite instrucciones de la Función de Tecnología sobre prácticas de cambio y puesta en marcha correspondientes.
- Asegúrese de que el cambio cumpla uno de los siguientes criterios:
  - reducción de la Calificación de riesgo residual (RRR) calculada de acuerdo con Estándar Global de Gestión de Riesgos; o
  - reducción de costos, mejora de la productividad o cumplimiento de un cambio legal o reglamentario respaldado por un caso de negocio.

Al acceder, consumir, crear o captar Datos mediante soluciones tecnológicas:

- Obtenga Datos directamente del sistema y utilice informes sin modificar (si están disponibles) para evaluar y analizar el desempeño.
- Aplique las mismas restricciones de acceso de usuarios que existen en el sistema ERP (Planificación de recursos empresariales) (actualmente SAP) a los Datos exportados desde allí a un sistema externo.

### 1.2. Segregación de la Tecnología de la Información (TI) / Tecnología Operativa (TO)

Al realizar actividades de Tecnología Operativa (TO) (que afectan a la seguridad, la fiabilidad y la eficiencia de la planta, la calidad del producto o el cumplimiento de las normas), se debe:

- Diseñar infraestructuras industriales de TO y aplicaciones para que todas las actividades de seguridad y productividad sigan funcionando si las infraestructuras o los servicios de la empresa y/o de TI no están disponibles.
- Mantener el nivel de segregación entre TI y TO, siempre que sea posible, de acuerdo con la segregación física.
- Utilizar métodos de conectividad de acceso remoto de terceros aprobados por la Función de Tecnología y no conectar un proveedor externo directamente a las redes de TO, en particular a las Redes de Control de Procesos (PCN) tradicionales.

### 1.3. Gestión de riesgos tecnológicos y de seguridad informática

Al solicitar o introducir cualquier tecnología de TI o TO en BHP:

- Debe contactar a la Función de Technology para coordinar todos los requerimientos tecnológicos.
- No debe realizar compras ni firmar Contratos en materia de tecnología (que incluye los servicios) directamente con los proveedores. Esto solo lo puede hacer la Función de Tecnología.
- No debe utilizar hardware ni software tecnológico no autorizado.
- Debe enviar una evaluación de la Gestión de Riesgos de Seguridad Informática de Terceros (TPCRM) para contratos nuevos o renovación de contratos existentes para poder gestionar el riesgo de la cadena de abastecimiento.
- En todo momento, debe utilizar solamente aplicaciones existentes en el Repositorio de Aplicaciones Globales (GEAR) de BHP aprobadas por la Función de Tecnología.

Al desarrollar o implementar soluciones tecnológicas, incluyendo aquellas basadas en la nube, debe:

- Enviar una Solicitud de Evaluación de Arquitectura a la Junta de Arquitectura Tecnológica (TAB - Technology Architecture Board) para su aprobación.
- Enviar una TSA (Evaluación Técnica de Seguridad) para que la Función de Tecnología pueda proporcionar instrucciones de seguridad que tengan en cuenta las normas y políticas de seguridad generales de la Función de Tecnología.
- Corregir las deficiencias detectadas antes de la implementación.
- Evaluar el riesgo y gestionar cualquier brecha que no pueda corregirse.
- Utilizar la plataforma en la nube aprobada por BHP para los requerimientos de Infraestructura como servicio (IAAS) y Plataforma como servicio (PAAS).
- Implementar la seguridad por diseño y abordar todos los riesgos de seguridad abiertos durante cada fase del ciclo de vida del desarrollo.

Al realizar la transición de una demanda o proyecto a operaciones que contienen tecnología (incluidos servicios), debe obtener la aprobación del Dueño del Servicio de Tecnología antes de realizar la transición a operaciones para que los productos y servicios cumplan con las expectativas de las partes interesadas en cuanto a calidad, costos, plazo de lanzamiento y cumplimiento.

Al gestionar la tecnología durante el ciclo de vida, debe:

- Mantener todos los activos tecnológicos (que abarcan hardware, software, bases de datos y plataformas de software) que respalden los procesos comerciales críticos en línea con el ciclo de vida respaldado por el fabricante.
- Evaluar y gestionar los riesgos que plantean los activos tecnológicos no respaldados.
- Incluir a la Función de Tecnología en la priorización de los costos operativos y de capital para que la Función de Tecnología pueda evaluar el riesgo y las opciones alternativas en materia de tecnología (incluyendo servicios).
- Asegurarse de que la Función de Tecnología se incorpore en calidad de aprobador en la gestión de los procesos de cambio para toda la tecnología (incluyendo servicios) y las decisiones relacionadas con el ciclo de vida de la tecnología.

Antes de conectar un dispositivo móvil a cualquier entorno de TI o TO, debe:

- Registrar el dispositivo móvil (IOS/Android/tableta/teléfono móvil) en una Solución de Gestión de Dispositivos Móviles (MDM) de BHP cuando se conecte al entorno de TI de BHP.
- Confirmar con Seguridad Informática antes de conectar los dispositivos móviles al entorno TO para que se activen los Controles de seguridad apropiados.

Para todos los sistemas tecnológicos, debe:

- Enviar un formulario CIA (Confidencialidad, Integridad y Disponibilidad) para la evaluación del impacto en la empresa y la calificación de criticidad.
- Implementar los Controles correspondientes para todos los sistemas tecnológicos, incluyendo TI y TO.
- Evaluar el riesgo y gestionar cualquier brecha que no pueda corregirse.
- Proporcionar acceso a sistemas tecnológicos basándose en otorgar el acceso/permisos mínimos que el usuario necesite para realizar su trabajo, y solo durante el tiempo respaldado por el requisito comercial.
- Utilizar la autenticación multifactor (MFA), que incluye contraseñas de un solo uso (OTP), para las cuentas con privilegios administrativos y para todos los accesos remotos al entorno tecnológico de BHP.
- Utilizar la siguiente tabla para determinar la frecuencia de las revisiones de acceso de los usuarios (incluidos usuarios externos) en función del nivel de gravedad CIA:

| Máximo nivel de gravedad CIA | Cuentas privilegiadas | Cuentas de usuario final |
|---|---|---|
| Máximo ≥ 4 | Trimestral | Trimestral |
| 2 ≤ Máximo ≤ 3 | Dos veces al año | Anualmente |
| Máximo = 1 | Anualmente | Anualmente |

- Habilitar el ingreso de seguridad en todos los sistemas tecnológicos para facilitar los diagnósticos y las investigaciones.
- Asegurarse de que los respaldos del sistema cumplan o superen los objetivos de continuidad de negocios acordados.
- Asegurarse de que todo el hardware o software utilizado en los entornos de TI y TO cuente con la protección de seguridad adecuada, que incluye parches y controles de malware.

### 1.4. Uso de medios extraíbles

- No debe conectar medios extraíbles (por ejemplo, unidades flash o memorias USB, discos duros USB, tarjetas digitales seguras (SD), discos duros extraíbles, medios de unidades de estado sólido o dispositivos móviles) a los sistemas que son propiedad de BHP o gestionados por ella, a menos que exista un propósito de negocios que lo justifique.
- Si existe un propósito de negocios justificado, debe:
  - Enviar una declaración mediante el formulario de Declaración de Medios Extraíbles antes de conectar los medios extraíbles.
  - Borrar los Datos de BHP del dispositivo de medios extraíbles cuando ya no sean necesarios.

### 1.5. Gestión de Riesgos Informáticos de Terceros

#### 1.5.1. Participación con terceros nuevos

- Abastecimiento (Supply) debe completar el Cuestionario de incorporación de gestión de riesgos de seguridad informática de terceros (TPCRM) en el Sistema Global de Gestión de Contratos (GCMS) durante el proceso de incorporación de proveedores. El Cuestionario de incorporación de la TPCRM está diseñado para clasificar al tercero y determinar si se requiere una evaluación de TPCRM.
- La Seguridad informática puede activar una Evaluación de Control Detallada de la TPCRM cuando sea necesario para determinar la postura de riesgo informático del tercero. Cualquier brecha se maneja de acuerdo con el Requerimiento 1.5.3 que figura a continuación.

#### 1.5.2. Participación con terceros existentes

- Los terceros existentes que participan en virtud de un contrato/Solicitud de X (RFX) deben estar sujetos a un Cuestionario de participación de TPRCM completado por Abastecimiento en el GCMS durante el proceso de RFX.
- El Cuestionario de participación de la TPCRM está diseñado para clasificar la participación y determinar si se requiere una Evaluación del TPCRM.
- Los terceros existentes que no participen bajo contrato/RFX deben estar sujetos a un Cuestionario de participación del TPCRM completado por el representante de BHP correspondiente antes de llegar a cualquier acuerdo con el tercero. El representante de BHP correspondiente debe confirmar a Seguridad informática que ha completado las preguntas en CAR (Automatización e Informes de Seguridad Informática).
- La Seguridad informática puede activar una Evaluación de Control Detallada de la TPCRM cuando sea necesario para determinar la postura de riesgo informático del tercero. Cualquier brecha se maneja de acuerdo con el Requerimiento 1.5.3 que figura a continuación.

#### 1.5.3. Resultado de la Evaluación de la TPCRM

- Cualquier brecha en la Evaluación de la TPCRM debe ser corregida por un tercero.
- Si no se pueden corregir las brechas, se deben implementar Controles de compensación para reducir el riesgo asociado con la(s) brecha(s) a un nivel aceptable.
- Seguridad informática debe verificar todas las correcciones y Controles de compensación para garantizar que el impacto de un ataque a la cadena de Abastecimiento se haya reducido a un nivel aceptable.

#### 1.5.4. Reevaluaciones periódicas

- Se debe realizar una Evaluación de la TPCRM cuando lo solicite Seguridad informática o de acuerdo con el cronograma en el Apéndice 1.

## 2. Otros Documentos Relevantes

| Nombre del Documento | Contenido | Relación con este Estándar Global |
|---|---|---|
| Estándar Global de Datos | Documento completo. | Información adicional sobre la gestión de Datos relevantes para el Requerimiento 1.1. |
| Estándar Global de Gestión de Riesgos | Documento completo. | Información adicional sobre tecnología y gestión de riesgos de seguridad informática relevante para el Requerimiento 1.3. |
| Procedimiento Global sobre la Gestión de Riesgos de Seguridad Informática de Terceros | Documento completo. | Procedimiento relacionado con el Requerimiento 1.5. |

## 3. Definiciones

**Término**
- Aprobado
- Contratos
- Controles
- Datos

**Término**
- Función
- Tecnología de la información (TI)
- Tecnología operativa (TO)
- Calificación de riesgo residual (RRR)

## 4. Control de Documento

- **Nombre del Documento:** Estándar Global de Tecnología y Seguridad Informática
- **Dueño del Documento:** Thomas Leen, Vicepresidente de Seguridad y Arquitectura de Tecnología
- **Número de Documento:** TECH-GSTD-00005
- **Aprobador del Documento:** Laura Tyler, Directora Técnica
- **Última revisión realizada por:** Andrew Denman, Jefe de Arquitectura Global
- **Fecha de la última revisión:** 20 de septiembre de 2023
- **Fecha de la siguiente revisión:** Por confirmar

Este Estándar Global debe ser revisado como mínimo cada 12 meses.

## 5. Apéndices

### 5.1. Apéndice 1 - Cronograma de reevaluación periódica

Seguridad informática determina una calificación de riesgo de participación para cada participación de terceros en función de múltiples factores, que incluyen:

- el riesgo inherente de la participación, basado en la naturaleza de los productos/servicios que se proporcionan;
- la sensibilidad y confidencialidad de cualquier información compartida o mantenida por el tercero;
- si el tercero recibe acceso directo a las redes, sistemas o datos de BHP;
- herramientas de seguimiento utilizadas por Seguridad informática para evaluar los riesgos informáticos asociados a terceros.

Los Propietarios del contrato deben responder cuando Seguridad informática se ponga en contacto con ellos para iniciar una Evaluación de la TPCRM. La falta de respuesta puede ocasionar una falla del control crítico de la TPCRM o la imposibilidad de identificar mayores riesgos informáticos asociados a terceros.

| Calificación de riesgo de participación | Se activa la evaluación de la TPCRM |
|---|---|
| Alto | Cada 12 meses |
| Medio | Cada 24 meses |
| Bajo | No obligatorio |
