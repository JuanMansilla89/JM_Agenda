Reportes actuales y objetivo de reportabilidad integrada – Mina Cozamin

# 1. Contexto general

En Mina Cozamin existen reportes operacionales que hoy se elaboran de forma manual o semiautomatizada. Parte de la información se comunica por radio, se registra en archivos Excel matriz y desde ahí se alimentan distintos reportes por área.

El principal problema identificado es que la información no está completamente conectada. Esto genera desfases, reprocesos y diferencias entre lo que reporta mina, mantenimiento, geología y planta. Por ello, antes de avanzar hacia un gemelo digital subterráneo, se plantea primero implementar un sistema de reportabilidad integrada.

# 2. Reportes que actualmente existen

## 2.1 Reporte gerencial

Existe un reporte gerencial que se envía al final del turno. Este reporte se alimenta desde los reportes matriz y consolida información relevante para la gerencia general.

Actualmente depende de información preparada previamente por distintas áreas, por lo que su actualización no es automática ni integrada en línea.

## 2.2 Reporte de tiempos, utilización y disponibilidad

Uno de los reportes base corresponde al control de tiempos de los equipos. Desde este reporte se obtienen indicadores de utilización y disponibilidad.

La sala de control recibe información desde mina, normalmente por radio, sobre eventos como equipos inoperativos, hora de detención, motivo y hora de retorno a operación. Esa información se registra manualmente en un Excel matriz.

Mantenimiento, por su parte, utiliza la plataforma MySandvik para descargar información de equipos Sandvik. Sin embargo, esa información no conversa directamente con lo registrado por sala de control. Además, existen equipos de otros fabricantes cuya información sigue siendo manual.

Lo que se busca es integrar la información proveniente de MySandvik con los registros manuales, para generar un reporte de mantenimiento y disponibilidad más alineado entre operación y mantenimiento.

## 2.3 Reporte de acarreo y producción

El segundo reporte matriz mencionado corresponde al acarreo y la producción.

Este reporte considera producción por frentes y también producción por camión o volquete. Inicialmente se registra el tonelaje nominal del volquete. Luego, cuando el volquete descarga, se obtiene el pesaje real del material y se puede asociar ese peso al equipo que realizó el acarreo.

Con esta información se realiza una primera corrida con tonelaje nominal y una segunda corrida con tonelaje real. Este tonelaje es la base para alimentar los reportes de geología y planta.

## 2.4 Reporte de geología

El reporte de geología utiliza el tonelaje proveniente del reporte de acarreo y lo asocia con leyes de mineral. Se mencionó que trabajan con cobre, plata, plomo y zinc.

Actualmente se utilizan leyes estimadas, basadas en zonas circundantes. Estas leyes pueden presentar variabilidad frente a los valores reales. También se indicó que existen leyes oficiales de planta, pero estas llegan con desfase de 3 a 7 días.

La mina cuenta con la plataforma Acquire, donde se registran leyes reales tomadas en frentes cada 4 horas mediante un colector itinerante. Sin embargo, actualmente Acquire se usa para alimentar el modelo de bloques de corto plazo, pero no se utiliza como fuente directa para los reportes.

La intención es conectar la reportabilidad con Acquire para que el reporte de geología pueda usar información de leyes más actualizada para sus cálculos de fin de turno.

También se mencionó que geología considera humedades y que, al cierre de mes, se realiza una corrida con información de humedad entregada por planta.

## 2.5 Reporte de planta

El reporte de planta se construye con las leyes que entrega planta, las cuales pueden estar disponibles después de 2, 3 o hasta 7 días.

Con esa información se realiza un consolidado y se compara la variabilidad entre tonelajes y leyes reportadas por planta y geología.

Actualmente esta actualización requiere revisión manual, ya que el equipo debe estar pendiente de cuándo planta carga la información en su base de datos para recién actualizar los reportes.

# 3. Situación actual de la reportabilidad

Los exceles adjuntos en la ruta se completan de manera manual, y luego pasan a consolidarse en el plan de producción que está en pdf también en la ruta.

Cozamin ya cuenta con una plataforma web básica desarrollada por otra compañía, pero no se utiliza de manera efectiva porque contiene solo un reporte y muy poca información.

La expectativa del cliente es contar con una plataforma o entorno donde los reportes estén organizados por secciones, por ejemplo: reporte gerencial, mantenimiento, acarreo, geología y planta. La idea es que el usuario pueda ingresar, seleccionar el reporte correspondiente y ver información actualizada.

Durante la conversación se aclaró que la alternativa recomendada sería trabajar con Power BI y Power Automate, en lugar de desarrollar una aplicación web completa, principalmente porque permite una implementación más rápida y probablemente más eficiente en costos.

# 4. Qué se desea hacer

Se desea implementar un sistema de reportabilidad integrada que conecte las fuentes actuales de información y reduzca la dependencia de reportes manuales en Excel.

El objetivo inicial es desplegar los primeros reportes en el corto plazo, usando como base los reportes existentes. La solución debería permitir integrar información de sala de control, mantenimiento, acarreo, geología, planta y plataformas como MySandvik y Acquire, según corresponda.

La reportabilidad no se entiende como tiempo real estricto, sino más bien como una actualización programada o por lotes, por ejemplo cada cierto intervalo o al cierre de turno, dependiendo de la disponibilidad de los datos.

El cliente busca partir con cuatro o cinco reportes principales, pero dejando abierta la posibilidad de incorporar nuevos reportes de otras áreas durante un periodo de 12 meses, mediante una bolsa de horas o contrato paraguas.

Por otro lado como se va a trabajar con horario paraguas, para la primera fase (5 reportes) como se ve el tema de horas maximas? Las hay pq se entiende que las horas van ser diferenciadas entre uno y el otro? Con el detalle actual no se sabe cuanto nos demoraremos para la primera Fase, asi que hablamos de un rango. @Frank Echegaray estamos de acuerdo?

# 5. Objetivo final esperado

El objetivo de esta primera etapa es ordenar, conectar y automatizar la reportabilidad operacional de Cozamin.

Esto permitirá contar con una base de información más confiable para operación, mantenimiento, geología, planta y gerencia. Además, servirá como paso previo para una futura fase relacionada con un piloto de gemelo digital subterráneo, una vez que la conectividad de datos esté mejor resuelta.
