**PROPUESTA TÉCNICA – PRUEBA DE CONCEPTO (POC) DEL SISTEMA MINESTOCK®**

MINERA CHINALCO PERÚ S.A.

5 de junio de 2026

![Calle de noche con luces  Descripción generada automáticamente con confianza baja](data:image/jpeg;base64...)

Elaborado:

Juan Mansilla

Para:

Minera Chinalco Perú S.A.

Propuesta:

PT-MCP-001-2026

CONTENIDO

[1. INTRODUCCIÓN 5](#_Toc231547817)

[2. RESUMEN EJECUTIVO 5](#_Toc231547818)

[3. OBJETIVOS DE LA PLATAFORMA 6](#_Toc231547819)

[4. ALCANCE DE LA POC 6](#_Toc231547820)

[5. CONSIDERACIONES DEL POC 11](#_Toc231547821)

[6. PROCESO DE RECONCILIACIÓN DEL SISTEMA MINESTOCK® 12](#_Toc231547822)

[7. AMBIENTE TECNOLÓGICO DE LA POC 27](#_Toc231547823)

[8. ORGANIZACIÓN DE LA EJECUCIÓN 28](#_Toc231547824)

[9. CRONOGRAMA DE ACTIVIDADES 31](#_Toc231547825)

[10. CRITERIOS DE VALIDACIÓN DE LA POC 33](#_Toc231547826)

[11. ACOMPAÑAMIENTO DURANTE LA POC 35](#_Toc231547827)

[12. SIGUIENTES PASOS 36](#_Toc231547828)

[13. TÉRMINOS Y CONDICIONES 37](#_Toc231547829)

[14. EXCLUSIONES 38](#_Toc231547830)

[15. CERTIFICACIONES: 40](#_Toc231547831)

ÍNDICE DE TABLAS

[Tabla 1: Fuentes de Información 9](#_Toc231548726)

[Tabla 2: Entradas al sistema 12](#_Toc231548727)

[Tabla 3: Salida del sistema 24](#_Toc231548728)

[Tabla 4: Equipo para la ejecución de la POC 29](#_Toc231548729)

[Tabla 5: Cronograma de implementación MineStock® 31](#_Toc231548730)

ÍNDICE DE ILUSTRACIONES

[Ilustración 1: Ingreso al módulo de modelo de bloques 14](#_Toc231548518)

[Ilustración 2: Creación del modelo de bloques 15](#_Toc231548519)

[Ilustración 3: Ingreso al módulo de gestión de stocks 16](#_Toc231548520)

[Ilustración 4: Configuración del stock 17](#_Toc231548521)

[Ilustración 5: Importación de archivos de ciclos 18](#_Toc231548522)

[Ilustración 6: Importación de superficie y modelo de bloques 18](#_Toc231548523)

[Ilustración 7: Selección de stocks y periodo de cierre 19](#_Toc231548524)

[Ilustración 8: Procesamiento de entradas y salidas 19](#_Toc231548525)

[Ilustración 9: Validación y edición de puntos 20](#_Toc231548526)

[Ilustración 10: Estimación del modelo de bloques (I) 21](#_Toc231548527)

[Ilustración 11: Estimación del modelo de bloques (II) 22](#_Toc231548528)

[Ilustración 12: Cálculo de balance (I) 23](#_Toc231548529)

[Ilustración 13: Cálculo de balance oficial 23](#_Toc231548530)

[Ilustración 14: Revisión y almacenamiento 24](#_Toc231548531)

[Ilustración 15: Salida del sistema (I) 25](#_Toc231548532)

[Ilustración 16: Salida del sistema (II) 25](#_Toc231548533)

[Ilustración 17: Salida del sistema (III) 26](#_Toc231548534)

[Ilustración 18: Arquitectura POC 27](#_Toc231548535)

Lima, 5 de junio del 2026

Señores

MINERA CHINALCO PERÚ S.A.

Presente. –

**Asunto*:*** Propuesta Técnica “Prueba de Concepto (POC) del Sistema MineStock**®**”.

Estimados señores,

En base al requerimiento recibido, se adjunta la propuesta técnica **N° PT-MCP-001-2026**, correspondiente al servicio de “Prueba de Concepto (POC) del Sistema MineStock**®**”, desarrollada con el objetivo de optimizar la gestión operativa y tecnológica de sus operaciones mineras.

La presente propuesta describe el alcance técnico de la solución propuesta, incluyendo la descripción de los módulos funcionales del sistema y la estrategia de implementación considerada para su despliegue. Asimismo, se exponen los elementos técnicos que sustentan la solución y su alineamiento con los requerimientos operacionales del cliente, con el objetivo de apoyar una implementación ordenada, eficiente y acorde con las necesidades de la operación.

En ASTAY, estamos comprometidos con el cumplimiento de sus expectativas, por tanto, valoramos la sinergia empresarial, el tiempo para lograrlo con visión de largo plazo.

Atentamente,

Juan Manuel Mansilla Olivas

Gerente Técnico

Celular: +51 940 796 910

Email: jmansilla@astaysystems.com

![Imagen que contiene cuarto, casa de juegos, firmar, sostener  El contenido generado por IA puede ser incorrecto.](data:image/png;base64...)

PRopuesta técnica – prueba de concepto (poc) del sistema MineStock®

# INTRODUCCIÓN

La presente propuesta técnica establece el alcance y las condiciones para la ejecución de una Prueba de Concepto (POC) de MineStock® para Minera Chinalco Perú S.A., orientada a validar la aplicabilidad funcional de la plataforma en la gestión y conciliación de stocks mineros.

La POC será desarrollada sobre una Plataforma Base, alojada en ambientes de ASTAY, utilizando información proporcionada manualmente por el cliente. Este enfoque permitirá validar el flujo principal de la solución sin requerir integración con sistemas corporativos, despliegue en infraestructura del cliente, permisos de TI ni migraciones históricas.

El propósito de esta prueba es demostrar la utilidad de la plataforma en un escenario controlado y generar una base técnica para evaluar una eventual implementación completa posterior al licenciamiento.

# RESUMEN EJECUTIVO

La presente propuesta contempla la ejecución de una Prueba de Concepto (POC) de MineStock® para Minera Chinalco Perú S.A., orientada a validar la utilidad funcional de la plataforma en la gestión, modelamiento y conciliación de stocks mineros.

La POC considera una Plataforma Base alojada en ambientes de ASTAY, utilizando información proporcionada manualmente por el cliente. Este enfoque permite reducir dependencias tecnológicas, evitar integraciones tempranas con sistemas corporativos y concentrar la prueba en la validación del flujo principal de la solución.

La duración estimada de la POC será de dos meses: un mes destinado a la configuración e implementación de la plataforma base, y un mes destinado al uso, revisión y validación por parte del cliente.

El alcance de la prueba se limitará a casos de uso, datos, stocks y periodos previamente definidos. No se consideran dentro de esta etapa integraciones automáticas, despliegue en infraestructura del cliente, migraciones históricas, reconstrucción de stocks de años anteriores ni casuísticas avanzadas propias de una implementación completa.

Como resultado, la POC permitirá evaluar de manera objetiva el potencial de MineStock® y establecer una base técnica y funcional para una eventual implementación completa posterior al licenciamiento.

# OBJETIVOS DE LA PLATAFORMA

El objetivo de la prueba de concepto es validar la aplicabilidad funcional de MineStock® como plataforma de apoyo para la gestión, modelamiento y conciliación de stocks mineros, mediante una Prueba de Concepto acotada, ejecutada sobre una plataforma base alojada en ambientes de ASTAY y utilizando información proporcionada manualmente por Minera Chinalco Perú S.A.

Los objetivos específicos son los siguientes:

* Validar el flujo principal de operación de la plataforma, desde la carga manual de información hasta la generación de resultados para análisis de stocks.
* Verificar la capacidad de la plataforma para configurar stocks, procesar información operacional y topográfica, y generar resultados de modelamiento y conciliación.
* Evaluar la utilidad funcional de MineStock® en un escenario controlado, con datos, periodos y casos de uso previamente definidos.
* Identificar observaciones, ajustes y oportunidades de mejora que permitan sustentar una eventual implementación completa posterior al licenciamiento.
* Establecer una base técnica y funcional para evaluar futuras etapas de integración, automatización y despliegue productivo

# ALCANCE DE LA POC

La Prueba de Concepto contempla la habilitación de una plataforma base de MineStock®, orientada a validar el flujo principal de gestión, modelamiento y conciliación de stocks mineros en un escenario controlado.

El alcance estará limitado a stocks, periodos, datos y casos de uso previamente definidos entre las partes. La solución utilizará las funcionalidades actualmente disponibles en la plataforma, con foco en demostrar utilidad funcional, operatividad y generación de resultados para análisis técnico.

## Alcance funcional

La POC considera la habilitación de funcionalidades base de MineStock® orientadas a validar el flujo principal de gestión, modelamiento y conciliación de stocks mineros. Las funcionalidades incluidas se describen a continuación:

* Creación y Configuración de Stocks
  + Definición de parámetros operativos y geológicos por tipo de stock.
  + Configuración de atributos base asociados al stock, tales como tipo de material, densidad, altura de lift, rangos de leyes y criterios de clasificación, según la información proporcionada para la prueba.
  + Asociación de información de referencia del stock, incluyendo superficie topográfica y, cuando aplique, modelo de bloques disponible para el caso de uso definido.
* Conciliación de Stocks por Periodo
  + Análisis de entradas y salidas de material para el stock y periodo definido en la POC.
  + Carga de información manual operacional mediante archivos estructurados.
  + Generación de balances por fecha configurable, sobre la base de la información cargada para la prueba.
  + Registro de los resultados obtenidos durante el proceso de conciliación.
* Edición Geoespacial Interactiva
  + Visualización geoespacial 2D de puntos de descarga y carga asociados al stock en análisis.
  + Edición manual de puntos de descarga y carga sobre la vista geoespacial.
  + Corrección de coordenadas y actualización de leyes a nivel de punto o grupo de puntos.
  + Definición de contornos o polígonos de modelamiento sobre la vista 2D, para delimitar el área considerada en la estimación.
* Modelamiento por bloques
  + Estimación de atributos mediante algoritmo IDW, utilizando parámetros configurables para la prueba.
  + Configuración de radio de búsqueda, número mínimo y máximo de puntos, exponente alpha y criterios de interpolación.
  + Generación de modelos 2D de distribución de leyes, tonelajes y atributos asociados al stock definido.
  + Delimitación del área de modelamiento mediante contornos o polígonos definidos para el caso de uso de la POC.
  + Evaluación de escenarios de modelamiento acotados, según los parámetros acordados para la prueba.
* Balance, visualización y resultados del stock
  + Cálculo de balances asociados al stock y periodo analizado.
  + Comparación de resultados generados por el flujo de conciliación y modelamiento.
  + Visualización 2D de resultados dentro de la plataforma, de acuerdo con las capacidades disponibles en la Plataforma Base.
  + Registro de cierres generados durante la POC para trazabilidad de la prueba
* Reportabilidad y exportación
  + Exportación de resultados en formatos disponibles, incluyendo archivos con estructura de bloques cuando corresponda.
  + Generación de salidas para revisión técnica del cliente.
  + Visualización de conciliaciones ejecutadas durante la POC, limitada a la información procesada dentro del periodo de prueba.

## Alcance técnico

Desde el punto de vista técnico, la POC considera la habilitación de una Plataforma Base de MineStock® para la ejecución de los casos de uso definidos, bajo un entorno controlado de prueba.

El alcance técnico incluido contempla:

* Arquitectura Web Modular
* Habilitación de la plataforma en un ambiente de prueba provisto por ASTAY.
* Configuración inicial de la aplicación para los stocks y escenarios considerados en la POC.
* Configuración de usuarios y accesos básicos para los participantes definidos por el cliente.
* Parametrización inicial de variables operativas, geológicas y de modelamiento requeridas para la prueba.
* Configuración de estructuras de carga de archivos para información operacional, topográfica y parámetros asociados.
* Validación básica de formato y consistencia de los archivos cargados.
* Ejecución del flujo funcional disponible en la Plataforma Base, incluyendo carga, revisión, modelamiento, conciliación, visualización y exportación de resultados.
* Registro de información procesada y resultados generados durante el periodo de prueba.
* Soporte funcional y técnico durante la ejecución de la POC, conforme a los canales y condiciones definidos en la presente propuesta.

El alcance técnico de la POC no considera desarrollos estructurales, integraciones automáticas con sistemas del cliente, despliegue en infraestructura de Minera Chinalco Perú S.A., conexión directa a bases de datos corporativas ni modificaciones mayores sobre la arquitectura de la plataforma.

## Mínimo viable operativo

Para efectos de la POC, se entenderá por Mínimo Viable Operativo el conjunto mínimo de condiciones, datos y funcionalidades requeridas para que la plataforma pueda ser utilizada y validada en un escenario controlado.

El Mínimo Viable Operativo considera:

* Plataforma Base habilitada.
* Usuarios definidos con acceso a la plataforma.
* Al menos un stock configurado para la prueba.
* Archivos de entrada disponibles para la ejecución del flujo.
* Parámetros mínimos de configuración del stock y modelamiento.
* Ejecución del flujo principal de carga, validación, modelamiento, conciliación y visualización.
* Generación de resultados exportables para revisión.

## Stocks, periodos y casos de uso considerados

La POC será ejecutada sobre stocks, periodos y casos de uso previamente definidos entre ASTAY y Minera Chinalco Perú S.A. Estos deberán ser acotados y representativos del proceso que se busca validar.

La prueba no tendrá como objetivo reconstruir históricos extensos, regularizar información de años anteriores ni cubrir la totalidad de casuísticas operacionales de la gestión de stocks. Cualquier ampliación de stocks, periodos o casos de uso deberá ser evaluada por las partes y podrá ser considerada como parte de una implementación completa posterior.

## Datos requeridos y modalidad de carga de información

Para la ejecución de la POC, Minera Chinalco Perú S.A. deberá proporcionar la información requerida en archivos estructurados, de acuerdo con los formatos y criterios definidos por ASTAY. La carga de información se realizará de manera manual durante la prueba, sin conexión directa a sistemas corporativos ni integración automática con fuentes de datos del cliente.

Tabla : Fuentes de Información

| Tipo de información | Descripción | Modalidad de carga |
| --- | --- | --- |
| Registros de movimientos o ciclos | Información asociada a entradas y salidas de material del stock, incluyendo fechas, puntos de carga y descarga, tonelajes y atributos operacionales disponibles. | Carga manual mediante archivo estructurado. |
| Información topográfica | Superficie topográfica del stock en formato compatible, utilizada como referencia para el modelamiento y estimación de tonelajes. | Carga manual de archivo topográfico. |
| Parámetros del stock | Definición de atributos base del stock, tales como tipo de material, densidad, altura de lift, rangos de leyes y criterios de clasificación, según aplique. | Configuración en plataforma sobre la base de información entregada por el cliente. |
| Parámetros de modelamiento | Variables requeridas para ejecutar la estimación, tales como método de interpolación, radio de búsqueda, número de puntos, exponente alpha y polígono de modelamiento. | Configuración en plataforma. |
| Información geológica o atributos asociados | Leyes, variables geológicas, contaminantes u otros atributos disponibles para el stock analizado, cuando aplique. | Carga manual mediante archivo estructurado. |
| Resultados y archivos exportables | Archivos generados por la plataforma como resultado del procesamiento, modelamiento, conciliación y balance del stock. | Exportación desde la plataforma. |

La calidad, consistencia y completitud de la información proporcionada será responsabilidad del cliente. ASTAY brindará orientación sobre la estructura de los archivos requeridos para la ejecución de la prueba.

## Resultados Esperados

Como resultado de la Prueba de Concepto, se espera validar la capacidad funcional de MineStock® para ejecutar el flujo principal de gestión, modelamiento y conciliación de stocks mineros sobre un escenario controlado y previamente definido.

Los resultados esperados de la POC son los siguientes:

* Plataforma Base habilitada y disponible para el periodo de prueba.
* Stock o stocks definidos configurados en la plataforma.
* Información operacional, topográfica y de modelamiento cargada según los formatos acordados.
* Ejecución del flujo principal de conciliación para el periodo definido.
* Visualización geoespacial 2D de puntos, contornos y resultados asociados al stock.
* Generación de modelos 2D de distribución de leyes, tonelajes y atributos disponibles.
* Generación de balances y resultados exportables para revisión técnica.
* Registro de las conciliaciones ejecutadas durante el periodo de prueba.
* Identificación de observaciones, ajustes y oportunidades de mejora para una eventual implementación completa.
* Evaluación funcional de la plataforma como base para la decisión de continuidad hacia una implementación posterior al licenciamiento.

Los resultados obtenidos durante la POC estarán limitados a la información entregada, los casos de uso definidos y las condiciones acordadas para la prueba.

# CONSIDERACIONES DEL POC

La Prueba de Concepto está orientada a validar la utilidad funcional de MineStock® sobre una Plataforma Base, bajo un escenario controlado y acotado. En este sentido, el alcance de la POC se limita a las funcionalidades, datos, stocks, periodos y casos de uso definidos para la prueba, sin constituir una implementación productiva completa.

## Alcance no considerado en la prueba

La POC no considera el desarrollo de nuevas funcionalidades, nuevos módulos, personalizaciones avanzadas ni modificaciones estructurales sobre la lógica, interfaz o arquitectura de la plataforma. Cualquier requerimiento adicional que no forme parte del flujo base definido para la prueba deberá ser evaluado técnica y comercialmente como parte de una etapa posterior.

## Limitaciones sobre datos, integraciones e infraestructura

La POC no contempla integración automática con sistemas corporativos del cliente, conexión directa a bases de datos, implementación de procesos de ingesta automática, despliegue en infraestructura interna del cliente ni configuración de arquitectura corporativa.

La información requerida para la prueba será proporcionada mediante archivos estructurados y utilizada exclusivamente para los casos de uso acordados. La habilitación de integraciones, automatizaciones, ambientes productivos o despliegues en infraestructura del cliente corresponderá a una eventual implementación completa posterior al licenciamiento.

## Casuísticas especiales sujetas a evaluación posterior

No forman parte del alcance de la POC las reconstrucciones históricas de stocks, regularización de información de años anteriores, cargas masivas históricas, análisis retroactivos extensos ni casuísticas operacionales avanzadas no definidas previamente para la prueba.

Cualquier solicitud asociada a escenarios adicionales, mayor volumen de información, nuevos stocks, nuevos periodos, reglas especiales de negocio o requerimientos no contemplados en el alcance inicial deberá ser revisada por las partes y, de corresponder, incorporada en una etapa posterior mediante una evaluación técnica, económica y de plazo.

# PROCESO DE RECONCILIACIÓN DEL SISTEMA MINESTOCK®

El proceso operativo de la POC considera la ejecución del flujo principal de MineStock®, desde la preparación de la Plataforma Base hasta la generación y revisión de resultados. Este flujo será aplicado sobre los stocks, periodos y casos de uso definidos para la prueba.

## Preparación de la plataforma base

ASTAY habilitará la Plataforma Base de MineStock® para la ejecución de la POC, considerando la configuración inicial requerida para operar los casos de uso definidos.

Esta preparación contempla:

* Habilitación del ambiente de prueba.
* Configuración de usuarios definidos para la POC.
* Configuración inicial de parámetros funcionales.
* Preparación de estructuras para carga de archivos.
* Verificación inicial de disponibilidad de la plataforma.

## Entradas del sistema

Los datos que alimentarán la Plataforma Base durante la POC serán proporcionados por Minera Chinalco Perú S.A. mediante archivos estructurados, de acuerdo con los formatos definidos para la prueba. Estas entradas serán utilizadas para ejecutar el flujo principal de modelamiento, conciliación y análisis del stock definido.

Tabla : Entradas al sistema

| Tipo de Input | Descripción |
| --- | --- |
| Ciclos o movimientos de material (CSV o API) | Registros de entradas y salidas de material del stock con coordenadas GPS de puntos de carga (origen) y descarga (destino), fechas y horas, tonelajes, leyes geológicas y atributos operacionales disponibles dentro del periodo definido. |
| Información geológica o atributos asociados | Leyes metálicas (Cu total, Cu soluble), contaminantes (carbono, arsénico, etc.), QAS, clasificación del tipo de material y demás variables geológicas disponibles para el stock analizado, cuando aplique. |
| Superficie topográfica | Archivo con la superficie actual del stock (formato DXF o compatible), utilizado como referencia para el modelamiento y la estimación de tonelaje por bloque. |
| Configuración del stock | Definición del stock: tipo de material (óxido/sulfuro), categoría, densidad, altura de lift, rango de leyes y criterios de clasificación, según aplique. |
| Parámetros de modelamiento / estimación | Variables requeridas para ejecutar la estimación: tipo de interpolación (IDW), radio de búsqueda, número de puntos mínimo/máximo por bloque, exponente alpha y contorno o polígono de modelamiento. |

La calidad, consistencia y completitud de la información proporcionada será responsabilidad del cliente. ASTAY brindará orientación respecto a la estructura requerida para los archivos de entrada considerados en la POC.

## Configuración del modelo de bloques

La configuración del modelo de bloques permitirá definir la estructura base sobre la cual se realizará el modelamiento del stock considerado en la POC. Este proceso contempla la revisión de modelos existentes y, cuando corresponda, la creación de un nuevo modelo de bloque para el caso de uso definido.

El proceso considera los siguientes pasos:

**Paso 1: Ingreso al módulo de modelo de bloque**

El usuario accede al módulo de modelo de bloque, donde podrá visualizar los modelos previamente configurados en la plataforma. Esta vista permite revisar información general de cada modelo, incluyendo fecha de creación, nombre, tipo, subtipo, representación, dimensión del bloque y cantidad de ítems asociados.

![](data:image/png;base64...)

Ilustración : Ingreso al módulo de modelo de bloques

Desde este módulo, el usuario podrá seleccionar un modelo existente para revisión o edición, o iniciar la creación de un nuevo modelo de bloque para la POC.

**Paso 2: Creación del modelo de bloque**

Para crear un nuevo modelo de bloque, el usuario deberá ingresar los parámetros base requeridos por la plataforma. Esta configuración podrá considerar:

* Nombre del modelo de bloque.
* Tipo y subtipo asociado.
* Representación del modelo.
* Coordenadas mínimas y máximas en los ejes X, Y y Z.
* Tamaño de bloque por eje.
* Rotación o azimut del modelo, cuando aplique.

![](data:image/png;base64...)

Ilustración : Creación del modelo de bloques

Los parámetros configurados serán utilizados para estructurar el modelo de bloque sobre el cual se ejecutará el flujo de modelamiento y conciliación definido para la POC.

## Configuración inicial de Stocks

La configuración inicial de stocks permitirá definir los stocks que serán utilizados durante la POC, incorporando los parámetros operativos, geológicos y de modelamiento requeridos para ejecutar el proceso de reconciliación.

El proceso considera los siguientes pasos:

**Paso 1: Ingreso al módulo de gestión de stocks**

El usuario accede al módulo de gestión de stocks, donde podrá visualizar los stocks previamente configurados en la plataforma. Esta vista permite revisar información general de cada stock, incluyendo nombre, material, nivel de minado, categoría, ley, rango de ley, densidad, tamaño de bloque y altura de lift.

![](data:image/png;base64...)

Ilustración : Ingreso al módulo de gestión de stocks

Desde este módulo, el usuario podrá seleccionar un stock existente para revisión o edición, o iniciar la creación de un nuevo stock para el caso de uso definido en la POC.

**Paso 2: Creación o configuración del stock**

Para crear o configurar un stock, el usuario deberá ingresar los parámetros base requeridos por la plataforma. Esta configuración podrá considerar:

* Nombre del stock.
* Material asociado.
* Nivel de minado.
* Categoría del stock.
* Ley de referencia.
* Rango de ley.
* Densidad.
* Modelo de bloques asociado.
* Coordenadas mínimas y máximas en los ejes X, Y y Z.
* Tamaño de bloque.
* Rotación o azimut, cuando aplique.
* Altura de lift.

![](data:image/png;base64...)

Ilustración : Configuración del stock

Los parámetros configurados serán utilizados como base para la ejecución del proceso de reconciliación, modelamiento y generación de resultados durante la POC.

## Proceso de reconciliación

El proceso de reconciliación permitirá ejecutar el flujo principal de MineStock® para el stock y periodo definidos en la POC, utilizando la información cargada en la plataforma y los parámetros configurados previamente.

![](data:image/png;base64...)

Ilustración : Importación de archivos de ciclos

![](data:image/png;base64...)

Ilustración : Importación de superficie y modelo de bloques

El flujo operativo del sistema consta de los siguientes pasos:

Paso 1: Selección del stock y periodo de análisis

* El usuario selecciona un stock ya existente en el sistema.
* Define una fecha de cierre. El sistema toma automáticamente la última fecha de conciliación como punto de inicio (no editable).
* Si se desea rehacer un balance, se puede eliminar el último cierre para retroceder en el tiempo.

![](data:image/png;base64...)

Ilustración : Selección de stocks y periodo de cierre

Paso 2: Procesamiento de entradas y salidas

Se procesan los ciclos de camiones entre la fecha de inicio y fin, identificando:

* **Entradas al stock**: descargas de material desde el tajo.
* **Salidas del stock:** carguíos hacia chancadora u otros stocks.
* Los datos se agrupan por fecha, hora y ubicación.

![](data:image/png;base64...)

Ilustración : Procesamiento de entradas y salidas

Paso 3: Validación y edición de puntos

* El sistema visualiza los puntos GPS de descarga y permite:
* Editar coordenadas para corregir errores.
* Modificar leyes asociadas a un punto o grupo.
* Eliminar puntos incorrectos u obsoletos.
* Definir un contorno de modelamiento, que delimita el área a considerar para la estimación.

![](data:image/jpeg;base64...)

Ilustración : Validación y edición de puntos

Paso 4: Estimación del modelo de bloques

* Se ejecuta el algoritmo IDW (Inverso de la Distancia) para estimar leyes en cada bloque.
* El sistema realiza los siguientes subprocesos:
  + Determina bloques dentro del polígono de estimación.
  + Para cada bloque, identifica puntos cercanos según el radio y tipo de búsqueda (circular o elíptico).
  + Estima la ley promedio ponderada según distancia (alpha configurable).
  + Asigna otras variables mediante moda si son categóricas.
* Calcula el tonelaje por bloque usando:
  + Superficie topográfica cargada, o Porcentaje de volumen por bloque ingresado externamente (mediante archivo CSV).
  + Es posible generar múltiples escenarios de modelamiento (por ejemplo, Alpha 2 y Alpha 3) para comparación.

![](data:image/png;base64...)

Ilustración : Estimación del modelo de bloques (I)

![](data:image/png;base64...)

Ilustración : Estimación del modelo de bloques (II)

Paso 5: Cálculo del balance

* Se calculan dos balances:
  + **Balance Aritmético**: basado en promedios simples de entradas/salidas.
  + **Balance por Modelo de Bloques**: resultado del IDW (la cantidad de balances va a depender de los escenarios generados de acuerdo con la variación de Alpha).
* El usuario puede comparar dos tipos de balances: el balance aritmético, que se guardará como el balance oficial del stock, y el balance por modelo de bloques seleccionado, cuyo modelo de bloques se almacenará en el sistema y será adoptado como el modelo oficial.

![](data:image/png;base64...)

Ilustración : Cálculo de balance (I)

![](data:image/png;base64...)

Ilustración : Cálculo de balance oficial

Paso 6: Revisión y almacenamiento

* El usuario visualiza el modelo de bloques en un visualizador 2D filtrable.
* Puede exportar los datos y guardar el resultado como última conciliación oficial.

![](data:image/jpeg;base64...)

Ilustración : Revisión y almacenamiento

## Salida del sistema (Output)

Como resultado del proceso de reconciliación ejecutado durante la POC, la plataforma generará salidas que permitirán revisar, analizar y validar funcionalmente el comportamiento de MineStock® sobre el stock y periodo definidos para la prueba.

Tabla : Salida del sistema

|  |  |
| --- | --- |
| Tipo de Output | Descripción |
| Modelo de bloques | Resultado del modelamiento generado para el stock definido, incluyendo coordenadas, leyes, tonelaje y atributos disponibles por bloque, según la información procesada durante la POC. |
| Balance de stock | Resultado asociado al proceso de conciliación del stock para el periodo de análisis definido, considerando las entradas, salidas y parámetros configurados. |
| Resultados de modelamiento 2D | Visualización de la distribución de leyes, tonelajes y atributos disponibles dentro del área de modelamiento definida. |
| Historial de conciliaciones ejecutadas | Registro de los procesos de conciliación realizados durante la POC, incluyendo fecha, stock, periodo, parámetros utilizados y resultados generados. |
| Panel de control y estadísticas | Vista de resultados dentro de la plataforma, orientada a facilitar la revisión de información procesada, balances y variables principales del stock. |
| Archivos exportables | Archivos generados por la plataforma para revisión técnica del cliente, en los formatos disponibles dentro de la Plataforma Base. |

![](data:image/png;base64...)

Ilustración : Salida del sistema (I)

![](data:image/png;base64...)

Ilustración : Salida del sistema (II)

![](data:image/png;base64...)

Ilustración : Salida del sistema (III)

# AMBIENTE TECNOLÓGICO DE LA POC

La Prueba de Concepto será ejecutada en un ambiente tecnológico controlado, habilitado para validar el funcionamiento de la Plataforma Base de MineStock® durante el periodo definido para la prueba. Este ambiente permitirá el acceso de usuarios autorizados, la carga de información, la ejecución del flujo de reconciliación y la revisión de resultados.

## Arquitectura de la Solución POC

La arquitectura de la solución POC contempla el uso de la Plataforma Base de MineStock® en ambientes de ASTAY, con acceso vía web por parte de los usuarios definidos por Minera Chinalco Perú S.A.

Bajo este enfoque, los usuarios podrán acceder a la plataforma mediante navegador web, cargar archivos estructurados, ejecutar los flujos disponibles y revisar los resultados generados durante la prueba. La solución considera componentes de aplicación, servicios de procesamiento, base de datos, almacenamiento de archivos y salidas de resultados.

Esta arquitectura ha sido definida para fines de validación funcional y no representa la arquitectura productiva definitiva de una implementación completa.

![](data:image/png;base64...)

Ilustración : Arquitectura POC

## Alojamiento de la plataforma

La Plataforma Base será alojada en ambientes de ASTAY durante la ejecución de la POC. Este enfoque permite reducir dependencias asociadas a infraestructura del cliente, redes internas, permisos corporativos, accesos a bases de datos y procesos internos de TI.

El ambiente será habilitado exclusivamente para fines de prueba, validación funcional y demostración de valor, por lo que no deberá ser considerado como un ambiente productivo definitivo.

## Acceso de usuarios del cliente

ASTAY habilitará accesos para los usuarios definidos por Minera Chinalco Perú S.A., de acuerdo con los perfiles requeridos para la ejecución de la POC.

Los accesos permitirán utilizar la plataforma durante el periodo de prueba, ejecutar los flujos definidos, revisar resultados y registrar observaciones funcionales sobre el uso de la solución.

## Seguridad y confidencialidad de la información

La información entregada por el cliente será utilizada exclusivamente para la ejecución de la POC y será tratada bajo criterios de confidencialidad, resguardo y uso limitado al alcance de la prueba.

ASTAY aplicará medidas razonables de protección sobre el ambiente habilitado y sobre la información utilizada durante la POC, conforme a sus prácticas internas de seguridad de la información.

## Limitaciones del ambiente de prueba

El ambiente tecnológico de la POC tendrá carácter temporal y estará orientado exclusivamente a validación funcional. En consecuencia, no contempla características propias de una implementación productiva completa, tales como alta disponibilidad, integración automática con sistemas corporativos, arquitectura definitiva, políticas de respaldo del cliente, monitoreo productivo o despliegue en red interna de Minera Chinalco Perú S.A.

Cualquier requerimiento asociado a infraestructura productiva, integración corporativa, automatización de fuentes de datos, hardening, homologación, alta disponibilidad o despliegue definitivo será evaluado como parte de una implementación completa posterior al licenciamiento.

# ORGANIZACIÓN DE LA EJECUCIÓN

La ejecución de la POC será liderada por ASTAY, con participación del equipo técnico y operativo designado por Minera Chinalco Perú S.A. La organización del trabajo estará orientada a asegurar una implementación ágil de la Plataforma Base, el uso efectivo de la solución durante el periodo de prueba y la validación funcional de los resultados obtenidos.

## Equipo del proyecto

ASTAY dispondrá un equipo responsable de la configuración, habilitación, soporte y acompañamiento durante la ejecución de la POC.

Tabla : Equipo para la ejecución de la POC

|  |  |
| --- | --- |
| Rol | Responsabilidades clave |
| Project Manager / Coordinador | Coordinación general de la POC, seguimiento de actividades, gestión de compromisos y comunicación con el cliente. |
| Ingeniero de Minas / Consultor | Configuración funcional de la plataforma, acompañamiento al usuario y validación del flujo de trabajo definido para la prueba. |
| Ingeniero de Datos / Integraciones | Preparación de estructuras de carga, revisión de archivos, apoyo en parametrización y soporte a la ejecución del flujo de información. |
| Especialista QA y Validación | Revisión funcional de la plataforma, identificación de incidencias y documentación de observaciones durante la prueba. |
| Customer Success | Capacitación a usuarios, acompañamiento durante el periodo de uso, atención de consultas y seguimiento de la adopción funcional de la plataforma. |

## Coordinación con el Cliente

Minera Chinalco Perú S.A. deberá designar usuarios responsables para acompañar la ejecución de la POC, proporcionar la información requerida y validar los resultados generados por la plataforma.

La participación esperada considera:

* Un referente de TI, para validación de arquitectura, despliegue y accesos.
* Designación de usuarios funcionales para la prueba.
* Entrega de información requerida en los formatos acordados.
* Revisión de configuraciones iniciales.
* Uso de la plataforma durante el periodo de validación.
* Registro de observaciones funcionales.
* Validación de resultados y conclusiones de la POC.

## Modalidad de trabajo

La modalidad de trabajo será principalmente remota, con sesiones de coordinación y acompañamiento funcional según las necesidades de la POC. Las actividades se ejecutarán bajo un enfoque ágil, orientado a validar el flujo principal de la plataforma y obtener retroalimentación temprana por parte del cliente.

Cualquier actividad presencial, visita a sitio o requerimiento adicional no contemplado en el alcance de la POC deberá ser evaluado y acordado previamente entre las partes.

# CRONOGRAMA DE ACTIVIDADES

La Prueba de Concepto tendrá una duración estimada de dos (2) meses, considerando una primera etapa orientada a la preparación, configuración y habilitación de la Plataforma Base, y una segunda etapa destinada al uso, revisión y validación funcional por parte de Minera Chinalco Perú S.A.

El cronograma estará sujeto a la entrega oportuna de la información requerida, la disponibilidad de los usuarios definidos para la prueba y la validación de los casos de uso acordados entre las partes

Tabla : Cronograma de implementación MineStock®

![](data:image/png;base64...)

La Prueba de Concepto de MineStock® se desarrollará mediante un proceso estructurado, orientado a habilitar una Plataforma Base, ejecutar el flujo principal de reconciliación y validar su utilidad funcional en un escenario controlado de operación.

La POC considera una duración estimada de dos (2) meses. El primer mes estará enfocado en la preparación, configuración y habilitación de la plataforma, incluyendo la definición de casos de uso, revisión de información, configuración funcional y capacitación inicial. El segundo mes estará orientado al uso de la plataforma por parte de los usuarios definidos, acompañamiento funcional, revisión de resultados y cierre de conclusiones.

El cronograma contempla las principales actividades requeridas para la ejecución de la POC, incluyendo la preparación inicial, entrega y revisión de información, configuración de la Plataforma Base, configuración funcional, carga y validación inicial de datos, capacitación, uso de la plataforma, acompañamiento, revisión de resultados y cierre de la prueba.

El desarrollo de la POC contempla las siguientes etapas principales:

**Preparación inicial**

Durante esta etapa se realiza la reunión de inicio, la coordinación del alcance de la prueba y la definición de los casos de uso que serán considerados durante la POC.

**Preparación de información**

En esta fase se coordina la entrega y revisión de los archivos requeridos para la ejecución de la prueba, considerando información operacional, topográfica, parámetros de stock, modelo de bloques y demás datos necesarios para el caso de uso definido.

**Configuración de la Plataforma Base**

Durante esta etapa, ASTAY habilita el ambiente de prueba, configura los usuarios definidos y prepara las estructuras necesarias para la carga de información y ejecución del flujo funcional de MineStock®.

**Configuración funcional**

Esta fase considera la configuración del modelo de bloques, stocks, parámetros de modelamiento y criterios funcionales requeridos para ejecutar el flujo principal de reconciliación dentro del alcance definido para la POC.

**Carga y validación inicial de información**

En esta etapa se realiza la carga de archivos en la plataforma y la revisión básica de consistencia de la información, con el objetivo de asegurar que los datos se encuentren disponibles para ejecutar el proceso de reconciliación.

**Capacitación inicial**

ASTAY realizará una sesión de capacitación orientada al uso de la Plataforma Base, explicando el flujo principal de operación, la carga de información, el proceso de reconciliación, la visualización de resultados y las opciones de exportación disponibles.

**Uso de la plataforma**

Durante el segundo mes, los usuarios definidos por Minera Chinalco Perú S.A. utilizarán la plataforma para ejecutar los flujos considerados en la POC, revisar resultados y registrar observaciones funcionales.

**Acompañamiento y soporte**

ASTAY brindará acompañamiento funcional durante el periodo de uso, atendiendo consultas, apoyando la operación de la plataforma y dando seguimiento a las observaciones identificadas por el cliente.

**Revisión de resultados**

En esta fase se revisarán los resultados generados por la plataforma, incluyendo modelos, balances, visualizaciones, archivos exportables y observaciones funcionales derivadas del uso de la solución.

**Cierre de la POC**

La etapa final contempla la consolidación de observaciones, conclusiones y recomendaciones, con el objetivo de evaluar la continuidad hacia una eventual implementación completa posterior al licenciamiento.

# CRITERIOS DE VALIDACIÓN DE LA POC

La validación de la POC estará orientada a determinar si la Plataforma Base de MineStock® permite ejecutar el flujo principal de gestión, modelamiento y reconciliación de stocks mineros, generando resultados útiles para el análisis técnico y la toma de decisión respecto a una eventual implementación completa.

La POC se considerará satisfactoria en la medida que permita verificar el funcionamiento de la plataforma bajo los casos de uso, datos, stocks y periodos definidos para la prueba.

## Criterios funcionales

Los criterios funcionales consideran la validación del flujo operativo disponible en la Plataforma Base:

* Configuración satisfactoria del stock o stocks definidos para la POC.
* Carga de información requerida para la prueba en los formatos acordados.
* Configuración del modelo de bloques asociado al caso de uso definido.
* Ejecución del proceso de reconciliación para el periodo de análisis establecido.
* Visualización geoespacial 2D de puntos de carga, descarga, contornos y resultados.
* Generación de modelos 2D de distribución de leyes, tonelajes y atributos disponibles.
* Generación de balances asociados al stock analizado.
* Exportación de resultados en los formatos disponibles en la plataforma.

## Criterios técnicos

Los criterios técnicos consideran la estabilidad y operación básica de la plataforma durante la POC:

* Acceso satisfactorio de los usuarios definidos a la plataforma.
* Disponibilidad de la Plataforma Base durante el periodo de prueba.
* Correcta carga y procesamiento de los archivos considerados en el alcance.
* Registro de la información procesada y resultados generados durante la POC.
* Ejecución del flujo principal sin incidencias críticas que impidan su uso.
* Atención de consultas e incidencias dentro del periodo de acompañamiento definido.

## Criterios de utilidad para el usuario

La POC deberá permitir evaluar si la plataforma resulta útil para apoyar el proceso de análisis y reconciliación de stocks mineros.

Se considerarán como criterios de utilidad:

* Facilidad de uso del flujo principal por parte de los usuarios definidos.
* Claridad en la visualización de información cargada y resultados generados.
* Utilidad de los balances, modelos y archivos exportables para revisión técnica.
* Capacidad de la plataforma para ordenar y estructurar información asociada al stock.
* Trazabilidad de la información procesada, parámetros utilizados, conciliaciones ejecutadas y resultados generados durante la POC.
* Agilidad en la ejecución del flujo de trabajo, reduciendo esfuerzos manuales en la organización, revisión y generación de resultados para análisis.
* Identificación de oportunidades de mejora o ajustes requeridos para una implementación completa.

## Criterios de continuidad hacia implementación completa

Al cierre de la POC, ASTAY y Minera Chinalco Perú S.A. revisarán los resultados obtenidos con el objetivo de evaluar la continuidad hacia una implementación completa de MineStock®.

La continuidad podrá considerar:

* Validación funcional positiva de la Plataforma Base.
* Confirmación del valor potencial de la solución para la operación.
* Identificación de integraciones, automatizaciones o funcionalidades adicion1ales requeridas.
* Definición del alcance objetivo para una implementación completa.
* Evaluación técnica y comercial de la licencia, despliegue productivo e integración con sistemas corporativos del cliente.

# ACOMPAÑAMIENTO DURANTE LA POC

Durante el periodo de ejecución de la POC, ASTAY brindará acompañamiento funcional y soporte asociado al uso de la Plataforma Base de MineStock®, con el objetivo de facilitar la operación de la solución, atender consultas y apoyar la revisión de resultados generados durante la prueba.

## Acompañamiento funcional

ASTAY realizará acompañamiento a los usuarios definidos por Minera Chinalco Perú S.A. durante el periodo de uso de la plataforma. Este acompañamiento estará orientado a resolver consultas funcionales, guiar la ejecución del flujo principal y apoyar la interpretación general de las funcionalidades disponibles en la Plataforma Base.

## Atención de consultas e incidencias

Las consultas o incidencias identificadas durante la POC serán revisadas por ASTAY dentro del marco del alcance definido para la prueba. La atención estará enfocada en asegurar la continuidad del uso de la plataforma y resolver observaciones asociadas al flujo funcional habilitado.

No se considerarán como incidencias de la POC aquellos requerimientos que correspondan a nuevas funcionalidades, integraciones, automatizaciones, cambios estructurales de la plataforma o casuísticas no contempladas dentro del alcance definido.

## Canales de atención

Todas las solicitudes de soporte, consultas funcionales u observaciones asociadas a la POC deberán ser canalizadas a través de los siguientes correos electrónicos:

* support@astaysystems.com – Para atención técnica.
* customersuccess@astaysystems.com – Para seguimiento funcional y acompañamiento.

Se recomienda que las solicitudes estén acompañadas de la siguiente información mínima para una atención eficiente:

* Nombre del módulo o funcionalidad asociada.
* Descripción detallada de la consulta, incidencia u observación.
* Capturas de pantalla o archivos de referencia, si aplica.
* Usuario afectado y hora aproximada del evento, cuando corresponda.

# SIGUIENTES PASOS

Una vez finalizada la POC, ASTAY y Minera Chinalco Perú S.A. revisarán los resultados obtenidos, las observaciones levantadas durante el periodo de uso y las oportunidades de mejora identificadas, con el objetivo de evaluar la continuidad hacia una implementación completa de MineStock®.

**Evaluación de resultados de la POC**

Al cierre de la prueba, se realizará una revisión conjunta de los resultados generados por la Plataforma Base, considerando el cumplimiento del flujo funcional definido, la utilidad de las salidas obtenidas y la experiencia de uso por parte de los usuarios participantes.

Esta evaluación permitirá identificar el nivel de aplicabilidad de la solución y su potencial para ser escalada hacia un entorno productivo.

**Recomendaciones para la implementación completa**

Sobre la base de los resultados de la POC, ASTAY podrá proponer recomendaciones para una eventual implementación completa, considerando aspectos funcionales, técnicos y operacionales requeridos para ampliar el uso de MineStock®.

Estas recomendaciones podrán incluir ajustes de configuración, mejoras funcionales, definición de nuevos casos de uso, incorporación de stocks adicionales, automatización de procesos e integración con sistemas corporativos del cliente.

**Alcance potencial de la licencia**

En caso la POC sea validada satisfactoriamente, las partes podrán avanzar hacia la evaluación comercial y técnica de una licencia de MineStock®, considerando el alcance requerido para una operación productiva.

El alcance de la licencia deberá ser definido en una propuesta posterior, considerando usuarios, ambientes, soporte, mantenimiento, integraciones, automatizaciones, funcionalidades adicionales y condiciones de despliegue.

**Integraciones futuras y automatización de datos**

Las integraciones con sistemas corporativos, conexiones a fuentes de información, ingesta automática de datos, despliegue en infraestructura del cliente, migración histórica y automatización de procesos serán consideradas como parte de una implementación completa posterior al licenciamiento.

Estas actividades requerirán una evaluación específica de alcance, arquitectura, seguridad, accesos, plazos y costos, de acuerdo con los lineamientos técnicos y corporativos de Minera Chinalco Perú S.A.

# TÉRMINOS Y CONDICIONES

**Alcance de la POC**

La presente propuesta considera la ejecución de una Prueba de Concepto de MineStock®, orientada a validar la utilidad funcional de la Plataforma Base en un escenario controlado, con información, stocks, periodos y casos de uso previamente definidos entre las partes.

La POC no constituye una implementación productiva completa, ni implica la habilitación de integraciones automáticas, despliegue en infraestructura del cliente, migraciones históricas, reconstrucción de información de periodos anteriores o desarrollo de funcionalidades adicionales no contempladas en el alcance de la prueba.

**Responsabilidades del cliente**

Minera Chinalco Perú S.A. será responsable de proporcionar oportunamente la información requerida para la ejecución de la POC, designar a los usuarios participantes, revisar los resultados generados y entregar las observaciones funcionales que correspondan durante el periodo de prueba.

La calidad, consistencia y completitud de la información proporcionada será responsabilidad del cliente. ASTAY brindará orientación sobre los formatos y estructuras requeridas para su carga y procesamiento en la plataforma.

**Responsabilidades de ASTAY**

ASTAY será responsable de habilitar la Plataforma Base, configurar los parámetros requeridos para los casos de uso definidos, brindar capacitación inicial, acompañar el uso de la solución durante la POC y atender consultas o incidencias asociadas al funcionamiento de la plataforma dentro del alcance acordado.

ASTAY no será responsable por limitaciones, inconsistencias o resultados derivados de información incompleta, incorrecta o no validada por el cliente.

**Cambios de alcance**

Cualquier requerimiento adicional no considerado en el alcance de la POC deberá ser evaluado técnica, económica y comercialmente por ASTAY.

Se considerarán fuera del alcance de la POC, entre otros, nuevos desarrollos, integraciones con sistemas corporativos, automatización de ingesta de datos, despliegue en infraestructura del cliente, reconstrucciones históricas, carga masiva de información, nuevos stocks, nuevos periodos o casuísticas especiales no definidas previamente.

**Confidencialidad de la información**

Toda la información técnica, operacional, comercial o estratégica intercambiada entre las partes en el marco de la POC será tratada como confidencial.

ASTAY utilizará la información entregada por el cliente exclusivamente para la ejecución de la prueba, comprometiéndose a no divulgarla, transferirla ni ponerla a disposición de terceros, salvo autorización expresa del cliente o requerimiento legal aplicable.

**Continuidad posterior a la POC**

La continuidad hacia una implementación completa de MineStock® estará sujeta a la evaluación de los resultados de la POC y a la aprobación técnica y comercial correspondiente.

La implementación completa, licenciamiento, integraciones, automatizaciones, soporte productivo, despliegue definitivo y demás componentes asociados deberán ser materia de una propuesta posterior.

# EXCLUSIONES

La presente POC contempla únicamente la habilitación y validación funcional de la Plataforma Base de MineStock® bajo el alcance definido en esta propuesta. En consecuencia, se excluyen expresamente las siguientes actividades y componentes:

* Integración automática con sistemas corporativos del cliente, bases de datos, FMS, plataformas de planificación, topografía, laboratorio u otras fuentes externas.
* Despliegue de la solución en infraestructura interna, red corporativa o ambientes productivos de Minera Chinalco Perú S.A.
* Configuración de arquitectura corporativa, accesos de TI, permisos de red, servidores, VPN, bastiones, homologaciones o validaciones de ciberseguridad del cliente.
* Migración histórica de datos, reconstrucción de stocks de años anteriores, regularización de información histórica o carga masiva de periodos no definidos para la POC.
* Desarrollo de nuevas funcionalidades, nuevos módulos, automatizaciones avanzadas, personalizaciones complejas o modificaciones estructurales de la plataforma.
* Incorporación de casuísticas operacionales especiales no definidas previamente dentro del alcance de la prueba.
* Operación continua del sistema por parte de ASTAY, incluyendo carga recurrente de información, ejecución periódica de conciliaciones, validación técnica de datos del cliente o generación continua de balances.
* Implementación de reportes, dashboards, integraciones BI o visualizaciones adicionales no contempladas dentro de la Plataforma Base.
* Soporte sobre sistemas externos, infraestructura del cliente, calidad de datos de origen o procesos operacionales ajenos a la plataforma.
* Cualquier requerimiento adicional que exceda el alcance funcional, técnico, temporal o de información definido para la POC.

Los componentes excluidos podrán ser evaluados posteriormente como parte de una eventual implementación completa de MineStock®, sujeta a una propuesta técnica, económica y de plazos específica.

# CERTIFICACIONES:

Somos una empresa certificada con ISO9001 y ISO 27001, cuyos alcances se describen a continuación:

**ISO 9001:2015 –** **Sistema de Gestión de la Calidad:** Garantiza la estandarización y mejora continua de nuestros procesos, asegurando la calidad en los productos y servicios que ofrecemos, así como la satisfacción del cliente.

![](data:image/jpeg;base64...)

**ISO/IEC 27001:2022** – **Sistema de Gestión de Seguridad de la Información:** Asegura la confidencialidad, integridad y disponibilidad de la información, mediante la gestión eficaz de los riesgos asociados a la seguridad de los datos.

![](data:image/jpeg;base64...)

![](data:image/png;base64...)
