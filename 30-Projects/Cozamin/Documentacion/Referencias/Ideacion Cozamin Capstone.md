## 1. Contexto general del proyecto

El proyecto corresponde a una iniciativa para desarrollar un **sistema de reportabilidad para una mina underground en México**. El cliente ha compartido inicialmente **seis reportes** que servirán como base para la digitalización, automatización y estructuración del sistema de reportabilidad.

Actualmente, el objetivo del proyecto aún no está completamente cerrado. Existen definiciones pendientes respecto a:

- Alcance funcional real.    
- Recursos disponibles por parte del cliente.
- Licencias tecnológicas existentes.
- Infraestructura disponible.
- Nivel de automatización esperado.
- Responsabilidades entre ASTAY y el cliente.
- Profundidad de la solución en esta primera etapa.

La propuesta técnico-económica deberá construirse sobre la experiencia de ASTAY en sistemas de reportabilidad minera, manteniendo un enfoque pragmático, escalable y alineado a las capacidades tecnológicas actuales del cliente.

---

## 2. Objetivo preliminar del proyecto

El objetivo preliminar es diseñar e implementar una **primera versión de un sistema de reportabilidad minera**, basado inicialmente en los seis reportes proporcionados por el cliente.

Esta primera versión deberá permitir:

- Digitalizar reportes actualmente gestionados de forma manual o semimanual.
- Automatizar flujos de carga, procesamiento y visualización de información.
- Estandarizar la presentación de reportes en Power BI.
- Definir una identidad visual corporativa para los dashboards.
- Establecer una arquitectura base que permita escalar en fases posteriores.
- Incorporar trazabilidad mínima mediante auditorías, logs y control de cambios.
- Aprovechar las licencias y herramientas Microsoft que probablemente ya posee el cliente.

---

## 3. Alcance funcional inicial

El alcance inicial deberá enfocarse en los **seis reportes entregados por el cliente**. Estos reportes serán la base para levantar requerimientos, diseñar interfaces, definir el modelo de datos y construir los dashboards correspondientes.

### Alcance considerado

Se plantea incluir:

- Levantamiento funcional de los seis reportes.
- Revisión de fuentes de datos disponibles.
- Diseño UX/UI de reportes en Power BI.
- Definición de estándar visual corporativo para reportabilidad.
- Automatización parcial o total de flujos de información.
- Implementación de dashboards en Power BI.
- Uso de SharePoint como repositorio o punto de integración documental.
- Evaluación de Power Apps y Power Automate para automatizaciones operativas.
- Definición de arquitectura híbrida, cloud/on-premise.
- Propuesta de una base de datos centralizada, preferentemente en SQL Server.
- Incorporación de criterios básicos de gobernanza de datos.
- Definición de trazabilidad mediante auditoría, logs y control operacional.

### Fuera del alcance inicial, salvo validación comercial

No se considera inicialmente incluir:

- Gestión del cambio organizacional completa.
- Transformación integral de procesos del cliente.
- Implementación de plataformas complejas fuera del ecosistema Microsoft.
- Modernización completa de la arquitectura tecnológica del cliente.
- Integraciones avanzadas no asociadas directamente a los seis reportes.
- Desarrollo de soluciones altamente customizadas sin validación previa.
- Automatización total si las fuentes siguen dependiendo de archivos Excel no estructurados.

---

## 4. Enfoque tecnológico propuesto

La solución deberá estar orientada principalmente al ecosistema **Microsoft**, dado que se asume que el cliente cuenta con licencias o capacidades relacionadas a esta suite.

### Tecnologías base consideradas

- **Power BI** para visualización y reportabilidad.
- **SharePoint** para almacenamiento, colaboración y gestión documental.
- **SQL Server** como base de datos estructurada.
- **Power Apps** para aplicaciones ligeras de captura o interacción.
- **Power Automate** para flujos de automatización.
- **Analysis Services**, sujeto a validación de licencias y arquitectura.
- Infraestructura **cloud, on-premise o híbrida**, según disponibilidad del cliente.

El criterio estratégico es no sobredimensionar la solución ni introducir tecnologías innecesariamente complejas que puedan retrasar el proyecto o generar fricción con las capacidades actuales del cliente.

---

## 5. Arquitectura conceptual propuesta

La arquitectura deberá diseñarse como una solución **base, simplificada y escalable**. Se evita plantearla como una solución “low cost”; el posicionamiento sugerido es una **arquitectura base de fase 1**, preparada para crecer en madurez tecnológica.

### Arquitectura objetivo preliminar

La arquitectura final deseada podría considerar:

1. **Fuentes de datos**
    - Archivos Excel.
    - Registros operativos.
    - Datos técnicos de mina.
    - Posibles sistemas existentes del cliente.

2. **Capa de almacenamiento**
    - SharePoint para documentos y archivos controlados.
    - SQL Server como repositorio estructurado.
    - Posible base de datos intermedia para consolidación.

3. **Capa de integración**
    - Power Automate para flujos simples.
    - ETL local o servicio intermedio para escenarios con mayor control.
    - Scripts o procesos automatizados únicamente si son necesarios y controlados.
    
4. **Capa de aplicaciones**
    - Power Apps para formularios, captura o validaciones operativas.
    - Aplicaciones ligeras si el flujo operativo lo requiere.
    
5. **Capa de visualización**
    - Power BI como herramienta principal.        
    - Dashboards alineados al estándar visual definido.
    
6. **Capa de gobierno y control**
    - Logs.
    - Auditorías.
    - Control de versiones.
    - Gestión básica de cambios en datos y reportes.
    - Lineamientos de uso y mantenimiento.

---

## 6. Alternativas de implementación

Durante la sesión se plantean dos caminos posibles para la implementación.

### Alternativa 1: Arquitectura Microsoft estructurada
Esta alternativa representa la visión más ordenada y escalable. Consiste en trabajar con SharePoint, SQL Server, Power BI, Power Apps y Power Automate como componentes principales.

Ventajas:
- Mayor alineamiento con licencias corporativas.
- Mejor mantenibilidad.
- Mayor trazabilidad.
- Menor dependencia de scripts aislados.
- Mejor escalabilidad futura.
- Mayor facilidad para gobierno de datos.

Riesgos:
- Requiere confirmar licencias.
- Requiere validar infraestructura.
- Puede necesitar mayor involucramiento de TI del cliente.
- Puede demandar mayor tiempo de levantamiento y diseño.

### Alternativa 2: Quick wins mediante solución local simplificada
Esta alternativa permitiría entregar resultados rápidos, tomando como referencia experiencias previas de ASTAY en otros proyectos, donde se automatizaron reportes mediante servicios locales, ETL y bases de datos intermedias.

El esquema podría considerar:
- Servicio local de procesamiento.
- ETL para consolidar información desde Excel u otras fuentes.
- Base de datos intermedia.
- Exposición de datos vía SQL Server.
- Consumo desde Power BI.

Ventajas:
- Mayor rapidez inicial.
- Permite mostrar valor temprano.
- Reduce dependencia inicial de arquitectura corporativa compleja.
- Útil para una fase piloto o fase 1.

Riesgos:
- Puede no representar una buena práctica de largo plazo.
- Puede generar deuda técnica si no se gobierna adecuadamente.
- Las migraciones posteriores consumirán horas adicionales.
- Debe ser presentado como solución transitoria o fase controlada.

---

## 7. Equipo propuesto para el proyecto

Se plantea un equipo multidisciplinario con capacidades funcionales técnicas, de datos y minería.

### Roles considerados

| Rol                                         | Responsabilidad principal                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| Líder técnico                               | Definir solución, arquitectura, criterios técnicos y gobierno del desarrollo. |
| Analista funcional / negocio                | Levantar requerimientos, entender reportes, traducir necesidades del cliente. |
| Especialista UX/UI                          | Diseñar estándar visual, experiencia de usuario y estructura de dashboards.   |
| DBA                                         | Diseñar y administrar base de datos, vistas, estructuras y control de datos.  |
| Ingeniero de datos                          | Desarrollar procesos de integración, transformación y carga de datos.         |
| Especialista Power BI                       | Construir dashboards, modelos semánticos y visualizaciones.                   |
| Especialista Power Apps / Power Automate    | Desarrollar automatizaciones y aplicaciones ligeras.                          |
| Especialista en minería / tecnología minera | Asegurar pertinencia operacional de los reportes y métricas.                  |
| Equipo de soporte                           | Atender estabilización, ajustes, validaciones y acompañamiento operativo.     |

---

## 8. Entregables preliminares

Los entregables deben estructurarse por fase para evitar ambigüedad y controlar expectativas.

### Entregables de fase inicial

1. **Documento de levantamiento funcional**
    - Descripción de los seis reportes.
    - Objetivo de cada reporte.
    - Usuarios responsables.
    - Fuentes de datos.
    - Frecuencia de actualización.
    - Reglas de cálculo.
    - Brechas actuales.
    
2. **Diseño UX/UI de reportabilidad**
    - Lineamientos visuales.
    - Tipografías.
    - Paleta de colores.
    - Layouts base.
    - Estructura estándar para dashboards.
    - Criterios de navegación.

3. **Arquitectura técnica propuesta**    
    - Arquitectura Microsoft recomendada.
    - Alternativa híbrida cloud/on-premise.
    - Requerimientos mínimos de infraestructura.
    - Requerimientos de licencias.
    - Componentes tecnológicos propuestos.

4. **Modelo de datos preliminar**
    - Tablas requeridas.
    - Fuentes de información.
    - Estructura de carga.
    - Reglas de transformación.
    - Vistas o datasets para Power BI.

5. **Dashboards Power BI**    
    - Digitalización de los seis reportes.
    - Visualización de indicadores.
    - Filtros.
    - Navegación.
    - Publicación o entrega según ambiente definido.

6. **Automatizaciones base**
    - Flujos con Power Automate, si aplica.
    - Formularios o aplicaciones con Power Apps, si aplica.
    - Cargas automáticas o semiautomáticas desde fuentes disponibles.

7. **Gobernanza básica**    
    - Lineamientos de actualización.
    - Control de cambios.
    - Registro de logs.
    - Responsables por fuente de datos.
    - Criterios mínimos de auditoría.

---

## 9. Supuestos principales
La propuesta deberá dejar claramente establecidos los supuestos para evitar desalineamientos contractuales.

### Supuestos técnicos
- El cliente cuenta o podrá habilitar licencias Microsoft necesarias.
- Power BI será la herramienta principal de visualización.
- SharePoint podrá ser utilizado como repositorio documental o fuente controlada.
- SQL Server estará disponible o será provisto como parte de la infraestructura.
- El cliente proporcionará acceso a archivos, fuentes y responsables de información.
- La primera fase se enfocará en seis reportes.
- Las fuentes podrían estar mayormente en Excel.
- El nivel de automatización dependerá de la calidad y disponibilidad de datos.
- ASTAY propondrá una arquitectura base escalable, no una solución integral enterprise desde el inicio.

### Supuestos operativos
- El cliente deberá validar requerimientos funcionales.
- El cliente deberá aprobar el diseño de reportes antes de su construcción final.
- Se requerirá participación de usuarios clave.
- El cliente deberá definir responsables por cada fuente de información.
- Los tiempos dependerán de la entrega oportuna de datos, accesos y licencias.    

---

## 10. Riesgos identificados

| Riesgo                                              |    Impacto | Mitigación                                                                          |
| --------------------------------------------------- | ---------: | ----------------------------------------------------------------------------------- |
| Objetivo del proyecto aún no completamente definido |       Alto | Realizar fase de descubrimiento funcional antes de comprometer entregables finales. |
| Alcance ambiguo sobre los seis reportes             |       Alto | Documentar claramente reglas, fuentes, usuarios y validaciones por reporte.         |
| Dependencia de archivos Excel                       | Medio/Alto | Definir gobierno mínimo, estructura de plantillas y proceso de carga controlado.    |
| Licencias Microsoft no confirmadas                  |       Alto | Solicitar confirmación formal de licencias disponibles antes del diseño final.      |
| Infraestructura no definida                         |       Alto | Proponer alternativas cloud, on-premise e híbridas.                                 |
| Automatizaciones complejas no dimensionadas         |      Medio | Separar quick wins de arquitectura objetivo.                                        |
| Gestión del cambio no presupuestada                 |      Medio | Dejar fuera de alcance o como opcional comercial.                                   |
| Deuda técnica por soluciones rápidas                |      Medio | Posicionar quick wins como fase transitoria y documentada.                          |
| Falta de documentación del cliente                  |       Alto | Incluir levantamiento funcional como entregable clave.                              |

---

## 11. Decisiones preliminares tomadas
Durante la sesión se definieron algunos lineamientos estratégicos:
- La solución debe orientarse principalmente a **Power BI**.
- Se debe aprovechar el ecosistema **Microsoft**.
- El proyecto debe partir de los **seis reportes entregados por el cliente**.
- La propuesta debe incluir análisis funcional, UX/UI y arquitectura.
- Se debe proponer una arquitectura **híbrida, base y escalable**.
- No se debe sobredimensionar la solución con tecnologías complejas.
- Power Apps y Power Automate deben evaluarse como herramientas de automatización.
- La gestión del cambio no debe incluirse automáticamente si no está presupuestada.
- Es necesario investigar la arquitectura Microsoft más conveniente.
- Se debe evitar vender la solución como “low cost”; debe presentarse como **fase 1 / arquitectura base / quick wins escalables**.

---

## 12. Puntos abiertos por definir
### Con el cliente
- Confirmar cuáles son exactamente los seis reportes.
- Validar objetivo de negocio de cada reporte.
- Confirmar usuarios finales y responsables.
- Identificar fuentes de datos actuales.
- Confirmar si la información está en Excel, sistemas o bases de datos.
- Confirmar licencias Microsoft disponibles.
- Confirmar infraestructura disponible: cloud, on-premise o híbrida.
- Validar si cuentan con SQL Server, SharePoint, Power BI, Power Apps y Power Automate.
- Definir frecuencia esperada de actualización de reportes.
- Definir nivel de automatización esperado.
- Confirmar criterios de seguridad y accesos.
- Confirmar si gestión del cambio será requerida.

### Internamente en ASTAY
- Definir arquitectura recomendada.
- Estimar horas por perfil.
- Definir composición final del equipo.
- Preparar propuesta técnico-económica.
- Definir si se ofrecerá fase de descubrimiento previa.
- Definir quick wins posibles.
- Preparar narrativa comercial del proyecto.
- Validar experiencia previa reutilizable de proyectos similares.
- Definir límites claros del alcance.

---

## 13. Recomendación de enfoque comercial
La propuesta debería venderse como una **fase 1 de digitalización y automatización de reportabilidad**, no como una transformación integral completa.

El mensaje recomendado al cliente:

> ASTAY propone una primera fase orientada a estructurar, digitalizar y automatizar los seis reportes priorizados por el cliente, utilizando principalmente herramientas del ecosistema Microsoft. Esta fase permitirá generar quick wins, ordenar la información, establecer una arquitectura base y dejar preparada la solución para futuras escalas funcionales y tecnológicas.

Este enfoque permite proteger el alcance, generar valor temprano y evitar comprometer una arquitectura enterprise antes de validar datos, licencias, infraestructura y procesos.

---

## 14. Próximos pasos recomendados

| Prioridad | Acción                                                    | Responsable sugerido                |
| --------- | --------------------------------------------------------- | ----------------------------------- |
| Alta      | Solicitar confirmación de licencias Microsoft disponibles | Comercial / Líder técnico           |
| Alta      | Solicitar detalle de los seis reportes                    | Equipo funcional                    |
| Alta      | Levantar fuentes de datos y responsables                  | Analista funcional / Cliente        |
| Alta      | Definir arquitectura preliminar Microsoft                 | Líder técnico / DBA / Data Engineer |
| Media     | Evaluar uso de Power Apps y Power Automate                | Especialista Microsoft              |
| Media     | Preparar estándar UX/UI para reportabilidad               | UX/UI                               |
| Media     | Dimensionar horas por perfil                              | Líder técnico / Comercial           |
| Media     | Definir fase de quick wins                                | Líder técnico                       |
| Media     | Separar alcance base vs opcionales                        | Comercial / Preventa                |
| Baja      | Evaluar gestión del cambio como servicio opcional         | Comercial                           |

---

## 15. Conclusión ejecutiva

El proyecto Capstone México debe plantearse como una **implementación inicial de reportabilidad minera basada en Power BI y tecnologías Microsoft**, con foco en seis reportes priorizados por el cliente.

El principal desafío no es técnico, sino de **definición de alcance, disponibilidad de datos, confirmación de licencias e infraestructura**. Por ello, la propuesta debe estructurarse con una fase inicial de levantamiento, diseño funcional, arquitectura base y construcción controlada de dashboards.

La recomendación es posicionar el proyecto como una **fase 1 escalable**, con quick wins claros, evitando sobreprometer automatizaciones complejas o una transformación integral que aún no está suficientemente sustentada por la información disponible.