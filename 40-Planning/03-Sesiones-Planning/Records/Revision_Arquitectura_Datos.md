**Revision Arquitectura Datos-20260717\_100451-Meeting Recording**

17 de julio de 2026, 3:04p.m.

37 min 52 s

![](data:image/png;base64...) **Juan Mansilla** ha iniciado la transcripción

![](data:image/png;base64...) **Juan Mansilla** 0:03
Yo empiezo un poco para dar acá a William un poco de contexto y yo recuerdo que había había pedido hace ya.
Una semana, creo, un poco más de repente.
Y.
Que mapees o que revises lo que es el resto de el resto de funcionalidades, no de del gemelo. Yo no sé si llegaron a revisarlo esto con Pablo, con José. Creo que con Leslie sí me has sí me has dicho algo o sí.
Sí lo has revisado, pero sí quería ver si acá algunos comentarios de todo el equipo, ¿no? No sé si me pueden comentar algo respecto a eso.
Ahí lo dejé, no, ahí lo dejé, ya no, después de eso no seguí.

![](data:image/png;base64...) **Elio Rodriguez** 1:08
Ya después de eso, Juan nos reunimos con William y con José y Pablo para ver lo que es este los CTLS que está de My Metrics, no de Gmail.
Ya que eso también tiene bastante deuda técnica ahí.

![](data:image/png;base64...) **Juan Mansilla** 1:17
Yeah.

![](data:image/png;base64...) **Elio Rodriguez** 1:22
Y eso es lo que entiendo que Wilber va a mostrar que ha avanzado y cómo debería ser.

![](data:image/png;base64...) **Juan Mansilla** 1:29
Yeah.
ahora ya entonces ya estamos bien estamos bien Entonces hasta ese punto Wilber alguna algún si me puedes dar alguna alguna actualización

![](data:image/png;base64...) **Elio Rodriguez** 1:55
Está moteado vuelve a dar por su casa.

![](data:image/png;base64...) **Wilber Torres** 2:05
Hola, ahora sí se escucha.

![](data:image/png;base64...) **Juan Mansilla** 2:07
Sí, sí, sí, sí.

![](data:image/png;base64...) **Wilber Torres** 2:08
Todo el rato estaba hablando de ir.
Sí, la habíamos conversado sobre el tema de Mymetrix, o sea, lo que para el gemelo y en la conversación este notamos que, o sea, la gran mayoría de las métricas que se producen son este simplemente consultas SQL.
y o sea creo que una pequeña parte que existe para algunas operaciones de plots y esas cosas pins que no no estoy muy enterado de eso del detalle pero son mínimas o sea creo que son como 10 métricas algo así la gran cantidad de otras métricas sí son netamente consultas fáciles de operar con sql

![](data:image/png;base64...) **Juan Mansilla** 2:32
Ajá.

![](data:image/png;base64...) **Wilber Torres** 2:55
Entonces estábamos, este estaba viendo de poder este definir acá como una forma ya de crear unas unos espejos de la base de datos, por ejemplo, en caso de que ya ve cosas que se tiene 2 base de datos, una que es Mine Star y la otra que es este Zeta Publish.
Tenerlas como espejo, así como estas, este base de datos.
Ya, y una vez que este que se tiene esta base de datos que toma sincronizando, creo que este ya Pablo tiene un airflow. Creo que ya está, ya está hecho sobre lo del tema de MindStar. Solamente faltaría lo de data publish o al revés, pero la cosa es que una vez que se tenga eso, se se simplemente si se crea una estructura de DBT.
¿Dónde?
¿Vas a hacer por staging?
Al final este vas a tener tus tu CDM CDM ya significa que es el contrato donde esto es genérico para todos. En el staging es donde vas a hacer los mapeos, no donde vas a, o sea, coges este es el crudo porque este espejo es tal cual como está en Mind Star o está en este.
En Detapoolers en staging es donde básicamente vas a hacer los mapeos, las conversiones a CDMY el CDM significa que es el contrato ya el modelo, el el que es el canónico para todos los distintos tipos o las tintas minas. Y una vez de que ya lo tengas en canónico, ya puedes hacer tus este tus.
Tus Mars puedes calcular tus mar, que son la básicamente la de acá, donde que es pura regla de negocio, no donde como calculas tus métricas y todo eso de ahí. Una vez que ya tienes esta parte, una vez que ya tienes estas tablas calculadas, ya puedes crear que es el los temporal, no que es lo que están actualmente mandando a.

![](data:image/png;base64...) **Juan Mansilla** 4:40
Mhm.

![](data:image/png;base64...) **Wilber Torres** 4:49
Actualmente producción, no le he nombrado lo mismo, pero ya son más que nada, son vistas, no donde que ya se envía. Aquí ya no hay, no hay tablas en esta en este esquema, simplemente son.
Y.
Son vistas que o consultas queries que ya te da el resultado final de lo que estás esperando.
Es como que lo estaba hecho ya, inclusive un ejemplo, bueno, eso está aquí donde está pobre este por el que ya ve con.
Necesitas.
Esquemas.
Acá está el CDM, Mars, el serving, el staging.
No, y están sus tablas, no he hecho de no he hecho de todas. este.

![](data:image/png;base64...) **Juan Mansilla** 5:47
Mhm.

![](data:image/png;base64...) **Wilber Torres** 5:51
No he hecho de todas, hecho solamente de algunos porque, o sea, no es no, este todavía no.
No le he hecho la migración completa. He hecho una parte, un este creo que 22 campos nada más y ya, pero la idea es más o menos eso lo que estaba planteando. de Revía aún todavía no lo hemos revisado en detalle con Elio, pero eso es más o menos el segundo paso que queríamos.
Ya pues dices que alguien, por ejemplo, otra minera se quiere simplemente adherir a este punto, simplemente, o sea, hacen, crean el espejo de lo mismo de las bases de datos en ya en nuestra en nuestra network de acá de Style, la hacen el espejo y simplemente lo que cambia las cosas que cambiaría.
Son aquí, no en el staging, que son los mapeos al esquema canónico.
Y luego.

![](data:image/png;base64...) **Juan Mansilla** 6:45
Ahí yo tengo una, yo tengo una duda, discúlpame, esa parte de espejo, ¿cómo yo lo entiendo?

![](data:image/png;base64...) **Wilber Torres** 6:47
Sí.
Sí.

![](data:image/png;base64...) **Juan Mansilla** 6:54
como yo lo entiendo porque a ver nosotros hoy en día lo que hacen los chicos y esto varía de mina ya varía por mina o sea por ejemplo en algunas bases de datos como te había comentado en la otra ocasión vamos a tener que trabajar con

![](data:image/png;base64...) **Wilber Torres** 7:05
Mhm.

![](data:image/png;base64...) **Juan Mansilla** 7:17
Data capture, no es decir, instalar ahí un clic pequeño, una pequeña configuración y reenviarnos un poco de datos hacia hacia hacia nuestro gemelo.

![](data:image/png;base64...) **Wilber Torres** 7:28
Yeah.

![](data:image/png;base64...) **Juan Mansilla** 7:29
¿Ya yo entiendo que ese es el espejo, no? ¿O cómo exactamente funciona?

![](data:image/png;base64...) **Wilber Torres** 7:33
sí.
Ahí Pablo me puede dar más detalles, cómo está funcionando ese espejo actual que existe, pero se podría hacer también de como data capture. O sea, vamos, no es que vamos haciendo pool y traemos que es que 5000 o 50000 registros a la vez, sino es que la otra forma que también vamos recibiendo evento, vamos recibiendo y lo conforme vamos recibiendo lo vamos agregando a la base de datos también la otra, la otra forma también.
Funcionaría, pero el actual no sé cómo está implementado es porque ese ya estaba implementado ese espejo que se tiene.

![](data:image/png;base64...) **Juan Mansilla** 8:11
Mm.

![](data:image/png;base64...) **Wilber Torres** 8:13
Pero también.

![](data:image/png;base64...) **Juan Mansilla** 8:13
Ya, eso sería interesante. Ya, pero de repente algo funcional ¿para cuándo lo tendríamos? Porque ya con esto, y Pablo, yo no sé si existe algún caso más que tengamos que revisarlo. Lo que pasa es que yo necesito tener un cronograma de cuánto tiempo esfuerzo y seguramente no... Estoy casi seguro que no se va a cumplir ese tiempo, ese esfuerzo que estoy diciendo. Ya.

![](data:image/png;base64...) **Wilber Torres** 8:15
Mhm.

![](data:image/png;base64...) **Juan Mansilla** 8:36
Porque, en fin, no siempre, siempre nosotros tenemos varias actividades y siempre se va, se va el tiempo, pero sí me gustaría que quede claro por parte de ustedes o por de parte del equipo, cuánto tiempo nos va.
¿Cuánto esfuerzo, cuánto tiempo vamos a demorar, no? Y si está en todos los casos, porque, por ejemplo, ¿en qué quedó el tema del GPS, no? O sea, creo que tengo que ir con Oswaldo para revisar ese punto, ¿no?

![](data:image/png;base64...) **Elio Rodriguez** 9:07
En el caso de las bambas, sí, en el caso de Pablo, este ya está por concluir. Ahí Pablo si puedes dar más detalles.

![](data:image/png;base64...) **Pablo Quispe** 9:16
Sí estoy migrando lo que ya se hizo, la versión que había hecho al nuevo repo que tenía Wilber. Y bueno, aún me falta hacer un merge para ver que no haya muchas diferencias con el último commit, pero bueno, estoy en ello.

![](data:image/png;base64...) **Juan Mansilla** 9:32
Ya, pero ya ahí quiero tener una mayor calidad cuando esté, cuando tú me dices eso. ¿A qué hacemos referencia? ¿A qué estamos haciendo referencia? ¿Qué actividad es esa? Discúlpame que estoy medio perdido, ya, pero quiero tener claridad sobre a qué te refieres, Pablo.

![](data:image/png;base64...) **Pablo Quispe** 9:49
Y ya ese el servicio que actualmente consumía de que esta producción que consume data publish lo pasa por el Kafka y luego lo envía hacia el Unity ello.

![](data:image/png;base64...) **Juan Mansilla** 9:58
Yeah, yeah.
Ya estamos hablando de la información de data publish, entonces ya.

![](data:image/png;base64...) **Pablo Quispe** 10:06
Era solo de data publish, pero con la estructura que hizo Wilber, ahora debería ser más genérico. Entonces ya no se volvería a hacer solo para data publish.

![](data:image/png;base64...) **Juan Mansilla** 10:16
Ya, y eso esto, estas actividades. Elio, ¿cómo hacemos para mapearlas? Tú las mapeas, me entregas un Excel o lo hace Wilber, porque a mí me a mí me interesa, me interesa que sea.

![](data:image/png;base64...) **Elio Rodriguez** 10:27
Eso.
Eso estaba por preguntarte, porque creo que este Bryan ya no está con nosotros. o.

![](data:image/png;base64...) **Juan Mansilla** 10:31
Hey.
No, no, okay.

![](data:image/png;base64...) **Elio Rodriguez** 10:36
Porque él entendió que está llevando la activación en el clínico y todo eso, si no, yo lo veo por mi lado.

![](data:image/png;base64...) **Juan Mansilla** 10:39
Yeah.
Sí, o sea, a mí, a mí antes que le metan en el click up, yo quiero tener claridad. O sea, sabes que Juan, existe, ya yo tengo en mi cabeza varias varias tareas. Este Wolver es una, pero yo no soy primero que hay toda la lista de tareas de forma general con nombre. Ya el apellido no me interesa, ya porque el apellido ya sería en el click up, la verdad.
Pero tener claro todo eso, no sabes que ahorita tenemos las bambas, las bambas tenemos esto. ¿Qué oportunidad de mejora hay entre llevar a las bambas o hacer lo otro? Eso también me interesa saber, no me queda claro ahorita porque ya se nos viene, o sea, el objetivo de todo esto, Elio, es.
es primero tener una gobernanza sobre y una Claridad sobre la arquitectura de los datos del gemelo ya por ejemplo acá Wilber yo no sé si todavía estás tomando como Fuentes Cómo se llama la información de planta de series temporales yo no sé lo que lo que
Lo que Leslie te ha estado pidiendo apoyo.
No lo sé.

![](data:image/png;base64...) **Wilber Torres** 11:48
¿Pero eso es esa información es de tax, cierto?

![](data:image/png;base64...) **Juan Mansilla** 11:55
Claro, no es no es una información relacional, esa información es de serie de tiempo. Y yo no tengo problema si me dices, no he trabajado con eso. O sea, la verdad es que no, para mí no, eso no es tanto un inconveniente. Disculpe, me están llamando. Un momento.

![](data:image/png;base64...) **Wilber Torres** 11:59
Sí.
no, sí.
Sí, solo.

![](data:image/png;base64...) **Juan Mansilla** 12:11
Hello!
Yeah.
No, gracias.
Perdónenme perdónenme muchachos ustedes como son esto de o sea me quieren prestar plata quieren endeudar quieren hundir cada vez más
Ya, descubre muchachos, me escucha, escucha.

![](data:image/png;base64...) **Wilber Torres** 12:45
Sí.

![](data:image/png;base64...) **Juan Mansilla** 12:46
Ya, yo estoy escuchando en el otro lado. Ya eso sería importante. Si desea lo hacemos lo que lo que yo tengo en la cabeza ahorita y luego usted esto lo.

![](data:image/png;base64...) **Elio Rodriguez** 12:47
Listen.

![](data:image/png;base64...) **Juan Mansilla** 13:01
Lo pago a limpio.
Lo que estoy diciendo ya.

![](data:image/png;base64...) **Elio Rodriguez** 13:08
Yeah.

![](data:image/png;base64...) **Juan Mansilla** 13:10
Ya a ver, primero, nosotros tenemos dos tipos de fuentes de datos de forma genérica. Estos tipos de datos, a su vez, tienen sutilezas. Ya tienen sutilezas en cómo se presentan los datos. Disculpen, tengo que caminar porque ya me dio ansiedad de no tener que hacer esto.
Como le digo a mi flaca, yo parezco un hámster, le digo tanta.
Para no estresarme, estoy en mi ruedita ahí corriendo.
Valle de energía, sí, porque \*\*\*\* no, mi cabeza se se estresa ya a ver.
¿Cómo se llama? Ya a ver, tenemos 2 fuentes de datos, tenemos las fuentes de datos de SQL, información de Dispatch, no que son base en general o sistema de gestión de flota que hoy en día nosotros consumimos a través de vistas, consultas.
Y opcionalmente, nosotros vamos a tener que hacer un establecer un data capture y llevarnos los datos. Esta información por lo general es transaccional, en el caso de Killaveco, que es bueno, el caso de Killaveco es diferente, ya, pero esa es una posibilidad.
Nosotros, o sea, y esto hay que tener claridad. Ciertos proveedores de sistema de gestión de flota tienen 2 o 3 metros para exponer datos. Para la mayoría de clientes, la información como se accede es a través de consultas SQL. Todos nuestros clientes tienen eso y son 22 tipos de proveedores de o 2.
Tipos de base de datos es lo que se tiene, se tiene la información en SQL Server y Postgres SQL. Eso es así ya, y ahí en tema con data capture en Postgres porque va a depender mucho de la versión. Es existe, por ejemplo, para lo que pale y cuajone, el Postgres SQL es una versión.
11. Y actualmente estamos en la 18, creo. Entonces, hay un desfase considerable y hay matices que hay que tener en cuenta. ¿Por qué es importante estos datos? Estos datos. ¿Por qué? Porque tenemos la parte de VI. La parte de VI, que es lo que hemos estado revisando hace poco, ya.
Se modela esa información con respecto a datos cerrados. Lo ideal sería que esto esté en tiempo real, pero la verdad es que es bien difícil que lo esté. es. O sea, si hacemos consultas a cada rato, para mí no es lo ideal. Deberíamos llevarnos nosotros las tablas. ¿Por qué? Porque la mayoría de proveedores del sistema de gestión de flota.
Y.
Y hemos tenido problemas con las bambas, por ejemplo, se caen los servicios, se caen los servidores. ¿Por qué? Porque los proveedores vendieron lo mínimo para que su sistema funcione. Y si a si les preguntaba, oye, quiero un reporte, ahí está la base de datos, no, pero el producto tiene su propia plataforma de reportabilidad y tú no tendrías por qué.
Y entra por otro método, o sea, yo creo que la posición que al final definieron.
¿Por qué? Porque hacer sistemas de reportabilidad, salvo la excepción de Quillavé, cuando tuvieron una visión, yo necesito réplica de todo y tienen hasta hasta tienen duplicado o triplicado, tienen algunos sistemas ya.
Y.
Yeah.
Para las demás fuentes, lo ideal, lo ideal es un datacar. Ya. ¿Por qué? Porque si nosotros incrementamos en un 10% los recursos de esa máquina, seguramente nos votan. Porque estoy casi seguro que los proveedores de sistema de gestión de flota le han dado un margen, pues, de una locura de.
De 20% más, no creo, o sea, en cuestión de recursos y seguramente mal dimensionado. Estoy segurísimo que no ha sido bien dimensionado eso por parte de ellos o y obviamente, o sea, de repente sí bien, pero lo justo como para el que el cliente no gaste más y su y su propuesta de valor.
Pierda, no, porque si tú dices, oye, necesito un servidor de base de datos con 256 gigas de RAM, \*\*\*\*, desahogada, pues vuela en presupuesto y dicen, oye, acá está y bueno, es temas comerciales, no es el punto, pero deberíamos nosotros tener la opción.
Primero de trabajar con Data Capture, es ahí donde me hace mucho sentido el tema de espejo y de ahí hacer las consultas hacia nuestro sistema con las tablas o con consultas que nosotros tengamos. El cliente, caso las bambas, ya tiene ese espejo, que es lo que pasa en las bambas, ya donde ya hay una consulta y ellos te dejan una vista ahí.
Ya eso es diferente, ¿no? Y nosotros nos jalamos la vista y de ahí, de ahí hacemos la consulta. Es algo que hay que hay que revisar. ¿Por qué es importante esto de data capture? Porque data capture en teoría sí te permite hacer tiempo real, desde mi punto de vista, no siempre te permite hacer casi tiempo real, no es decir, se puede considerar ahí un pequeño esperador si existe algún tema de.
De complejidad en la información o cambio sustancial en la información, se vuelve a correr y ejecutar eso, no, sino simplemente se hace la agregación. Ya eso es algo que hay que modelar, o sea, hay que definir en cuestión de tiempo cada cuánto va a ser.
¿Por qué? Porque bueno, el data caption en teoría siempre está actualizando y tiene lo último, pero no vas a traer todo lo último, simplemente vas a capturar. Y esto es una definición que tenemos que tener claro todos como máximo, no sé, pues 7 días atrás o 10 días atrás, y eso se ejecuta una vez cada 24 horas.
Entonces, ahí hay que revisarlo, ¿no? Lo del turno se actualiza, bueno, si es Data Capture toma las capturas del turno nada más de la última fecha, eso me hacen ver, de repente me estoy equivocando cómo funciona Data Capture, ya, pero no tendría sentido.
Bueno, en teoría debería traer los últimos cambios. Esto de fecha no tiene mucho sentido, pero sí a nivel de procesamiento. Es decir, nuestra tampoco nuestra tabla. Una vez que los traiga, no vamos a estar ejecutando todo, no sino los baches correctos nada más en el tiempo correcto. O sea, ahí la segregación por turnos o por días es algo que tenemos que revisar.
Ahora, el gemelo digital debería poder consumir, o sea, obligatoriamente siempre la base de datos que están en SQL. ya ¿Por qué? Porque ahí está la reportabilidad, están los ciclos, está toda la información. ¿Qué cosa no está ahí? No necesariamente está ahí la información de GPS, la información de GPS.
Dependiendo del proveedor, sistema de gestión de flota, lo tenemos por cómo se llama esto, lo tenemos por.
Y.
Por data publish, por webcook, por otras interfaces. Ya esa información, esa información que tenemos, también tenemos que procesarla, ya tenemos que poder procesarla, ya curarla en la mayoría en el 95% de los casos.
Es un Es un las batmas.
La información es mala, es de baja calidad y un largo etcétera. Entonces, ahí es donde el flujo que tiene nuestro amigo Wilber, bueno, perdón, lo que se estaba trabajando con el curado de GPS debería estar ahí. Porque eso es lo que vamos a curar.
Y sobre eso, aprovechando ese curado, debería correr algunos otros algoritmos. Por ejemplo, ¿cuál? Debería poder correr el tema de análisis de velocidades. Y hasta ahorita, yo creo que, no sé si Wilber, eso tú ya lo revisaste con Pablo, porque eso lo hizo Pablo en Java. Y la verdad, yo no sé cómo quedó eso.
Porque también debería estar ahí. Toda esta información debería guardarse en todo de nuestras bases de datos. Entonces, eso es un punto muy importante. Estoy hablando solamente de una fuente, nada más, porque el gemelo en general, y esto va a lo de M to M, lo que de repente estamos viendo con Leslie.
Es cruce, información geoespaciable, con información temporal, con información de series de tiempo y con información relacional. O sea, es complejo el cruce que se hace porque lo que se quiere, bueno, ya se hizo. O sea, lo que tiene Leslie hace todo lo que estoy diciendo, no ella solita, no sé cómo lo ha hecho, pero.
Y lo que yo necesito ahí es que se le dé un check, se le dé un check y se le dé una validación diciendo, oye, esto funciona así, tiene que ser así y esto hay que migrarlo. Entonces ese análisis tenemos que revisar. Hoy en día trabajamos con Daxter o no, perdón, con Air Front, no.
Pablo, ya.

![](data:image/png;base64...) **Pablo Quispe** 22:15
\*\*\*\*.

![](data:image/png;base64...) **Juan Mansilla** 22:17
Ya, entonces tenemos información, por ejemplo, el modelo de bloques, que lo cruzamos con baldadas, yo digo baldadas, cuando la falda carga y deja un punto GPS, a eso le llamo baldadas, hacia el camión.
Deme un momento.
Fernando, te escucho.
Yeah.
Ya no hay problema, no hay problema.

![](data:image/png;base64...) **Elio Rodriguez** 23:04
Wilber, aprovechando una duda.
Ahí en ese espejo entiendo que vas a jalar la data de todas las fuentes y lo vas a conglomerar ahí.

![](data:image/png;base64...) **Wilber Torres** 23:09
Sí.
Claro.

![](data:image/png;base64...) **Elio Rodriguez** 23:14
¿O es una un espejo por cada fuente?

![](data:image/png;base64...) **Wilber Torres** 23:17
Eso es una buena pregunta, ¿podríamos usar la misma base de datos y jalar este, por ejemplo, mind está ahorita y te puedo hacer la misma base de datos?

![](data:image/png;base64...) **Elio Rodriguez** 23:25
Por esquema o por tablas.

![](data:image/png;base64...) **Wilber Torres** 23:29
Lo podemos poner en un solo esquema también para ser más céntrico, no lo podemos en 2 esquemas, también de repente un esquema por base de datos, no va.

![](data:image/png;base64...) **Elio Rodriguez** 23:40
Y.

![](data:image/png;base64...) **Jose Tello** 23:40
Hay este la en producción, ahorita se está llenando tanto de datapolish como lo de producción, lo de Mine, perdón.

![](data:image/png;base64...) **Wilber Torres** 23:49
Sí, pero en creo que en desarrollo no está así o si está también o al menos no pude encontrar.

![](data:image/png;base64...) **Jose Tello** 23:50
Season.
Yeah.
Sí, está, pero lo que pasa es que ahí como que no se está usando por la misma falta de información, pero eso viene ya del origen. Entonces se descartó, se está usando Mainstagram, pero sí se estaba guardando.

![](data:image/png;base64...) **Juan Mansilla** 24:08
Perdón, perdón, me permite. ¿Qué cosa habías consultado, William?
William, perdón, Elio, Elio, Elio.

![](data:image/png;base64...) **Elio Rodriguez** 24:13
Elio.
No, si va a ser un espejo por cada fuente o todas las fuentes van a llegar al mismo espejo.

![](data:image/png;base64...) **Juan Mansilla** 24:21
I am.

![](data:image/png;base64...) **Elio Rodriguez** 24:30
Y esto va a ser todo con DBT, no Wilber.

![](data:image/png;base64...) **Juan Mansilla** 24:31
Yeah.

![](data:image/png;base64...) **Wilber Torres** 24:34
Sí, pero o sea, ahí aclarando, no, o sea, el tiempo que estábamos la última vez que quedamos era que, o sea, de 10 a 20 minutos que tenía, o sea, de demora, no. O sea, no es cierto real time, sí que queremos más real time. Entonces tenemos que cambiar la arquitectura, DBT, definitivamente no sería una opción ahí.

![](data:image/png;base64...) **Juan Mansilla** 24:54
Así es ya.

![](data:image/png;base64...) **Elio Rodriguez** 24:55
¿Hay algunos gráficos que sí es real time, no?

![](data:image/png;base64...) **Wilber Torres** 24:58
Mhm.

![](data:image/png;base64...) **Elio Rodriguez** 25:00
Por ejemplo, el tonelaje, creo que sí es.

![](data:image/png;base64...) **Juan Mansilla** 25:00
Yeah.
Ya, claro, o sea, lo que dice Wilber tiene mucha, mucha razón. ¿Ya qué cosa sería real time en realidad?

![](data:image/png;base64...) **Elio Rodriguez** 25:06
Y.
Mm.

![](data:image/png;base64...) **Wilber Torres** 25:13
O sea, si vamos, vamos a recibir data capture, por ejemplo, este data capture. ¿Cómo funciona data capture? Es que cada insert, cada delete, cada update en la base de datos, eso lanza un evento. Entonces se lanza un evento y nosotros en nuestro sistema lo recibimos este mediante puede ser una cola, un Kafka, algo así lo recibimos como un mensaje, pero en cada cada.

![](data:image/png;base64...) **Juan Mansilla** 25:17
Ah.

![](data:image/png;base64...) **Elio Rodriguez** 25:21
Good.

![](data:image/png;base64...) **Juan Mansilla** 25:27
What?

![](data:image/png;base64...) **Wilber Torres** 25:37
Delete cada insert, cada update vamos a recibir esos mensajes con, por ejemplo, nombre de la tabla, este los campos y la operación, si es update, delete y algo así. Entonces dentro de nuestro lado nosotros podemos poner la, por ejemplo, unas unos filtros, por ejemplo, si es tabla tal, no nos importa, los ignoramos.

![](data:image/png;base64...) **Juan Mansilla** 25:41
Yeah.

![](data:image/png;base64...) **Wilber Torres** 25:56
Si está y o sea, podemos poner las reglas y ya después comenzamos a no sé hacer procesamiento con esas eventos, no porque no sé guardar una base de datos, lanzar unos procesos y cosas así. Pero cada cada inserts, cada operación de escritura en base de datos es un evento para nosotros. Así más o menos funciona el data capture que.

![](data:image/png;base64...) **Juan Mansilla** 26:14
I missed.

![](data:image/png;base64...) **Wilber Torres** 26:16
Yo tenía un buen entendido.

![](data:image/png;base64...) **Juan Mansilla** 26:18
Mhm.
¿Ya qué hacemos? Ya, pero cómo claro, o sea, así sería, pero DBT no sería una opción. ¿Y qué opción?

![](data:image/png;base64...) **Wilber Torres** 26:29
Exactamente, si es que si queremos real time, debe tener no sería una opción.

![](data:image/png;base64...) **Juan Mansilla** 26:35
¿Ya qué cosa sería una opción? O sea, DBT, ¿qué tanto podría llegar a reducir? O sea, algo que me gusta de DBT es la simplificación, no la simplificación, no. O sea, y solamente para terminar, ¿qué tanto nos podemos acercar al tiempo real? Ya eso es una cosa, porque ahorita lo que atendía Leslie.

![](data:image/png;base64...) **Wilber Torres** 26:43
Exacto.
Claro, ponlo así.

![](data:image/png;base64...) **Juan Mansilla** 26:56
De su proceso, Alex le toma 2 minutos, 3 minutos en ejecutar toda una mezcolancia de información y hay dale Pablo.

![](data:image/png;base64...) **Pablo Quispe** 27:09
Sí, nomás decir de que desde el momento que el dato viene por una tabla, entonces como que ya viene a ser menos tipo real por la misma forma como está llegando. Entonces más o menos como podría ser que DBT siempre se mantenga para un enfoque más de batch, incluso si fuera corto batch como 3 minutos y si es tiempo real ya tendría que de por sí no entrar en SQL porque si SQL no es.

![](data:image/png;base64...) **Juan Mansilla** 27:22
Ah.

![](data:image/png;base64...) **Pablo Quispe** 27:32
O sea, no sería lo adecuado para algo tipo real algo más cauca.

![](data:image/png;base64...) **Juan Mansilla** 27:35
Al ritmo, en tiempo real. Sí. Ya, eso es un punto importante. Dale, dale, José.

![](data:image/png;base64...) **Jose Tello** 27:38
La está ahí.
También, o sea, sí, Pablo tiene razón porque justamente el mayor limitate para poder hacer las métricas en tiempo real en Mine Metrics es la el origen, porque tanto Queyaveco como Bambas tienen un límite. Queyaveco tiene como 3 minutos, 4 minutos de delay y Bambas tiene como 7 minutos de actualización variable que a veces.
Puede ser mucho más y ya ha pasado ya, y entonces este por eso no es como que tan útil un enfoque tiempo real, al menos para Mainetrix, por el mismo hecho de como la las minas disponibiliza su data.

![](data:image/png;base64...) **Juan Mansilla** 28:16
Sí, o sea, yo también pienso que DBT todavía tiene que mantenerse, pero, por ejemplo, GPS, GPS es una tabla. O sea, yo creo que vas a tener que tener una arquitectura de Microbatch, que se basa en DBT, y otra basada en Data Capture.
Ya, por ejemplo, GPS. GPS, ya sea, bueno, en Modular, o ya sea, porque Modular también tiene su API, ya, con GPS, ya.
O por ejemplo, se me olvidó el nombre de este proveedor.
Se me olvidó el nombre del proveedor. Tokipala es Hexagon, ya con su Maini Ops. Eso es base de datos. Eso es base de datos. O sea, cada tantos minutos se está generando datos. Ya.
O sea, cada 30 segundos, cada 5 segundos, ellos guardan la posición de GPS en base de datos. Entonces ahí sí es un data capture, ¿no? O sea, yo creo.
Y ahí es lo que yo quiero entender un poco, Wilber.
O sea, yo de mi revisión de la literatura, data capture, si tú lo aplicas bien, tiene el menor consumo que hacer un Zlec.
Ya es como yo lo tengo entendido, ya.

![](data:image/png;base64...) **Wilber Torres** 29:47
No, obvio, obvio, sí, es mucho más eficiente que un solo.

![](data:image/png;base64...) **Juan Mansilla** 29:51
Ya, entonces es por eso que a mí me interesa trabajar con esto. Como digo, acá al principio es que no podemos, no podemos impactar a las bases de producción, impactamos a las bases de producción y nos van a odiar, nos van a matar. Y para lo demás podemos hacer consultas, no consultas, consultas en general, no? Y sabes que tiene un pequeño delays.
De 5 minutos, porque, o sea, así están las fuentes, ¿no? Y de repente, para ciertos KPIs, para ciertos KPIs, trabajar con Data Caption, ¿no? O sea, hagamos algo híbrido, porque no todo es necesario en real time, real time como tal.
Y no necesariamente todo... Oye, tengo otra sesión, ahorita a las once. Entonces, ahorita lo que a mí me interesa es licitar todas las actividades. Pablo, tú y José, ustedes conocen todo. Por favor, por mí, si ahorita tienen tiempo, háganlo ahorita, ¿ya? Pero yo quiero tener una claridad.
En un solo exe, no lo sé, ahí Elio con Wilber para empezar a listar ahí. ¿Cuánto es el esfuerzo? Porque esto ahorita siento que no sé cuándo se va a acabar, no sé cuánto tiempo, o sea, porque ya, o sea, mi problema está, el producto tiene que ser algo que vayamos a insertar rápido.
¿En nuestros siguientes clientes, cuál es el inconveniente de todo esto?
Puede ser el inconveniente que yo no sé cuándo se acaba.
¿O cuánto es el mínimo? O sea, porque con Fernando estamos queriendo optimizar ciertas interfaces para que sean consultadas rápidamente. ¿Me entiendes? O sea, es decir, o sean implementadas, perdón, rápidamente. Hay ciertas cosas que a mí me interesa que ustedes les demos la facilidad. "Oye, yo para implementar esto es un mes". ¿O sabes qué? Son 15 días.
Ya está, no 2 semanas, pero ya está tan bien pensado que obviamente no va a ser el inicio, pero tenemos que apuntar a eso. Ya, y si nos viene, se nos viene Antapacay, se nos viene Antapacay, eso sí es un hecho y eso es dispache, ya.
Y es this path vía web socket API y también vía base de datos.
Se entiende.
Too channel, de Jose.
¿Y si estamos 17 días, no? No.
Eso sería, estimados.
¿Algo que sirve?

![](data:image/png;base64...) **Elio Rodriguez** 32:35
Ya ahí, para resumir, entonces Wilber y Pablo, este José, pueden ir armándolo, porfa, y nos reunimos más tarde para validarlo y enviarlo, Juan.

![](data:image/png;base64...) **Wilber Torres** 32:49
Okay.

![](data:image/png;base64...) **Pablo Quispe** 32:50
Ahí tengo unas preguntas más o menos del alcance, o sea, se va a buscar que todos los, por ejemplo, los flujos actuales pasen a ello o hay algún específico, son MyMetrix, por ejemplo.

![](data:image/png;base64...) **Juan Mansilla** 32:53
No.
No todos, todos, o sea, que esté que esté mapeado todos. Ya después de eso nosotros vamos a priorizar, pues yo necesito todos, o sea, yo necesito una visión completa. Después no quiero decir, oye, pero esto no me han dicho ya, pues ahí me dicen, Juan, tú dijiste acá en esta fecha, esto debía ser así.

![](data:image/png;base64...) **Elio Rodriguez** 33:06
Entiendo que todos todos.

![](data:image/png;base64...) **Juan Mansilla** 33:24
O eso se hizo así, ¿no? Pero no quiero que ustedes asuman que no quiero que ustedes asuman algo por defecto. Yo prefiero.
Eh.
Kick off.
Yo quiero que esté claro de nuestro lado, no está bien.
¿Se entiende, no?

![](data:image/png;base64...) **Pablo Quispe** 33:52
Sí, más que todo lo decía, porque básicamente es literalmente todo, por ejemplo, de My Matrix.

![](data:image/png;base64...) **Juan Mansilla** 33:52
O sea.
¿Por qué?
Sí, es todo, es todo, yo sé que es todo.

![](data:image/png;base64...) **Pablo Quispe** 34:00
Forecasting también, o sea, forecasting ley, recuerdo que era Matrix.

![](data:image/png;base64...) **Juan Mansilla** 34:03
Claro, porque ya, por ejemplo, eso es algo que nosotros yo no estoy contemplando y ahorita me alcanza hacer recordar. Por eso es importante que esté escrito, pues porque también está forecasting y acá Wilber cuando lo va a ver.

![](data:image/png;base64...) **Pablo Quispe** 34:12
E.

![](data:image/png;base64...) **Juan Mansilla** 34:17
No, o sea, el forecasting también es un problema y forecasting todavía es clave. Entonces eso es algo que a mí me preocupa, pues ya.

![](data:image/png;base64...) **Elio Rodriguez** 34:28
Ahí disculpen por casting, ¿qué tiene que ver con los atentos?

![](data:image/png;base64...) **Pablo Quispe** 34:34
Yo recuerdo que leían de algunas fuentes que usábamos en My Metrix esos cálculos.

![](data:image/png;base64...) **Juan Mansilla** 34:34
No.
Claro.
Claro.

![](data:image/png;base64...) **Elio Rodriguez** 34:41
Eso no tengo mapeado vivo.

![](data:image/png;base64...) **Juan Mansilla** 34:44
Por eso, pues o sea, es por eso que ese es el problema. Nosotros necesitamos saber, por ejemplo, la asignación actual de equipos, las palas para que Forecasting funcione. Ahorita seguramente le están dando, ellos están haciendo un select nada más a la base de datos así a lo.
A lo bestia, por decirlo así, ya, y seguramente así nomás lo están dejando.
Yeah.
Pero en la práctica estoy casi seguro, estoy casi seguro que.
Yeah.
que hay información que no se está tomando bien, casi segurísimo, que no se está tomando bien y que se está disponibilizando por, o sea, no es lo correcto. Y eso eventualmente alguien va a levantar la mano y va a decir, oye, pero yo no está así mi sistema de origen, tu sistema está funcionando mal.
¿Y en ese momento, en ese momento, nos van a nos van a recriminar a nosotros, no?
¿Entiende?
La van a decir, oye, pero es que eso viene mal del origen.
¿Quién lo ha hecho mal, ya lo hemos hecho nosotros, no?
¿Estamos de acuerdo?

![](data:image/png;base64...) **Elio Rodriguez** 36:07
Mhm.

![](data:image/png;base64...) **Juan Mansilla** 36:09
Ya eso sería, eso sería muchachos. Voy a ir a la siguiente reunión porque ya me ganó la hora ya.

![](data:image/png;base64...) **Elio Rodriguez** 36:14
Ya Wilber, chicos, aquí lo agenda para verlo con nosotros.

![](data:image/png;base64...) **Juan Mansilla** 36:17
Cuídense, por favor.

![](data:image/png;base64...) **Wilber Torres** 36:26
¿Va a depender yo, pero tengo que hacer un sing de repente con Pablo, no? O sea, Pablo es el que Pablo o José, lo tenemos que hacer un sing ahí, una reunión y coordinar eso porque ajá.

![](data:image/png;base64...) **Elio Rodriguez** 36:35
Ojo.

![](data:image/png;base64...) **Pablo Quispe** 36:39
Set.

![](data:image/png;base64...) **Elio Rodriguez** 36:39
ya por eso espero más o menos lo tendríamos para las cuatro cinco

![](data:image/png;base64...) **Wilber Torres** 36:49
1 hora, no 1 hora nos demoramos ahora mismo, 1 hora será, no para hacerlo demoramos más.

![](data:image/png;base64...) **Pablo Quispe** 36:49
Creo que ahora la veo.
¿O qué piensas?
La primera versión sí sería de ahí habría que revisar. Mostramos ahí con Elio, José, para ver qué más puede faltar y llegó y salía otra versión.

![](data:image/png;base64...) **Wilber Torres** 37:02
Mhm.
Man.

![](data:image/png;base64...) **Elio Rodriguez** 37:09
Ya entonces lo pongo, yo ahorita también tengo que hacer unas cosas a las 2:00 o a las 3:00 de la mañana para ahora.

![](data:image/png;base64...) **Wilber Torres** 37:20
Estres de \*\*\*\*\*.

![](data:image/png;base64...) **Pablo Quispe** 37:20
Más tarde, creo.

![](data:image/png;base64...) **Wilber Torres** 37:22
Mhm.

![](data:image/png;base64...) **Elio Rodriguez** 37:24
A las 4:00 entonces.

![](data:image/png;base64...) **Wilber Torres** 37:27
Mhm.
Sí.

![](data:image/png;base64...) **Elio Rodriguez** 37:30
It.

![](data:image/png;base64...) **Wilber Torres** 37:31
Mhm.

![](data:image/png;base64...) **Elio Rodriguez** 37:33
Yep.
Good.
Ahí lo agenda entonces, ahí nos vemos en las cuatro.
Gracias.

![](data:image/png;base64...) **Pablo Quispe** 37:44
Yep.

![](data:image/png;base64...) **Wilber Torres** 37:45
Yep.

![](data:image/png;base64...) **Elio Rodriguez** 37:46
Go check.

![](data:image/png;base64...) **Juan Mansilla** ha detenido la transcripción
