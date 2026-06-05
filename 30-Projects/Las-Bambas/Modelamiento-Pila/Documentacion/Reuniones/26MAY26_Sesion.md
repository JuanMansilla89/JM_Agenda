0:0:6.259 --> 0:0:9.739
Juan Mansilla
¿Qué tal? A ver, hay una persona más que nos está sumando.

0:0:8.979 --> 0:0:10.779
Frank Echegaray
Sí, estoy aceptando.

0:0:12.59 --> 0:0:32.219
Juan Mansilla
Ya voy a compartir mi pantalla. Hemos desarrollado una presentación en función de la propuesta que le enviamos y el objetivo de esta sesión es poder explicar un poco acerca del alcance en lo que nosotros, cómo abordamos el problema de el remodelamiento de pila.

0:0:24.99 --> 0:0:24.419
Luis Beltran
Yeah.

0:0:30.779 --> 0:0:31.139
Luis Beltran
Yeah.

0:0:32.779 --> 0:0:40.779
Juan Mansilla
¿Y se los voy a compartir, deme 1 segundo que yo no me sale, ya sí se ve la pantalla, no?

0:0:41.19 --> 0:0:42.139
Frank Echegaray
sí, se ve Juan.

0:0:42.739 --> 0:0:43.179
Luis Beltran
Sí.

0:0:42.899 --> 0:1:1.819
Juan Mansilla
genial genial igual cualquier comentario observación me pueden decir eh yo puedo compar puedo y podemos abordar no esto es el contenido es eh vamos a pasar por los objetivos el alcance que nosotros hemos definido eh

0:1:2.379 --> 0:1:12.499
Juan Mansilla
Parte del resumen, nosotros proponemos un sistema unificado donde en realidad son 2 modelos los que se despliegan ya una.

0:1:13.579 --> 0:1:14.899
Juan Mansilla
Dime porque es un.

0:1:16.899 --> 0:1:36.219
Juan Mansilla
Vamos a guardar brevemente ambos modelos y también un cronograma de desarrollo. Ya en este caso, bueno, primero el objetivo, nosotros buscamos resolver preguntas clave, ¿no? ¿Qué material es el que está actualmente en la pila? No identificar la ley, la dureza.

0:1:36.299 --> 0:1:56.619
Juan Mansilla
De asociarla con el modelo de bloques, de dónde está viniendo, cuánto ese mineral permanece en la pila. Ya, y también hay un tema de datos, no siempre el los proyectos de pila es importante tener, o sea, y esto lo vamos a ver en la presentación.

0:1:56.859 --> 0:2:0.699
Juan Mansilla
¿Se pueden trabajar con información?

0:2:3.179 --> 0:2:21.899
Juan Mansilla
eh información de los sensores pero de todas maneras es necesario tener información espacial de cómo se está comportando la la pila para tener una buena aproximación a lo que está pasando ahí no entonces lo que nosotros esperamos obtener eh luego de hacer el despliegue de de este modelo

0:2:22.299 --> 0:2:41.459
Juan Mansilla
Es una estimación dinámica de lo que está en la pila y lo que está actualmente descargando, moviéndose ahí. Tener también una trazabilidad y ya sea por delta de tiempo del material que ha sido descargado en changadora que ha pasado por el stockpay y lo que está yendo a a.

0:2:41.979 --> 0:3:2.699
Juan Mansilla
A molienda, en este caso no a través de las fajas, reducción de los supuestos fijos en general. En mi experiencia también se trabaja mucho con tiempos fijos, es decir, tiene un tiempo de permanencia de tanto en la pila y eso es lo que se se toma pues para tomar las decisiones abajo.

0:3:3.419 --> 0:3:19.179
Juan Mansilla
Ya, y también identificar qué materiales es lo que se está enviando, ¿no? O sea, en qué momento vamos a tener, por ejemplo, picos de material duro provenientes de algún frente. ¿Cuánto van a ser recibidos por?

0:3:22.619 --> 0:3:44.739
Juan Mansilla
Por los molinos, no, entonces eso para nosotros es importante. Entonces nosotros como parte de este servicio, nosotros incluimos dentro del alcance la estimación dinámica de las masas en pila, la estimación de atributos de mineral, dureza, las leyes, la humedad. Si hay información de granometría, también podemos incluirla.

0:3:44.939 --> 0:4:9.619
Juan Mansilla
La predicción en corto plazo de lo que se estaría enviando por línea, no hacia hacia los minos, una calibración progresiva de del modelo, porque seguramente, bueno, se tiene información histórica de los materiales que pueden haber sido descargados durante un periodo de un año, no, y esto también nos sirve.

0:4:9.699 --> 0:4:28.819
Juan Mansilla
a nosotros para hacer el modelo simplificado y para para ver validaciones del comportamiento de geométrico del material, no? Y de los de repente debajo están los feeders y como esto se comporta, no? Eso es algo que lo vamos a ver en el modelo en el siguiente modelo.

0:4:29.259 --> 0:4:50.139
Juan Mansilla
Y una variación operacional, no esto es importante sobre todo para ver ver la calidad del modelo ya porque en este caso este nosotros no estamos abordando esto como a través de modelos, es decir, no estamos considerando agregar sensores al material que.

0:4:50.459 --> 0:5:13.99
Juan Mansilla
hay soluciones de ese tipo nosotros nos basamos en modelos heurísticos modelos matemáticos no que buscan simular el comportamiento de la pila para justamente prevenir o identificar situaciones que se vienen más adelante no nosotros para eso trabajamos con dos modelos un modelo simplificado

0:5:13.339 --> 0:5:32.899
Juan Mansilla
Yo le digo simplificado ya que lo que busca es responder en cercano a tiempo real qué es lo que está pasando por la pila, o qué material le está cayendo en cada línea, ¿no? Y para esto nosotros trabajamos en pequeño microlotes de que eso se puede definir de.

0:5:32.979 --> 0:5:51.899
Juan Mansilla
1530 minutos, no de material, no lo que sea significativo para el proceso, que es lo que se está enviando hacia hacia chancadora. No esto de modelo simplificado, nosotros utilizamos modelos espaciales, que es un punto que quería.

0:5:52.299 --> 0:6:13.939
Juan Mansilla
Conversar también porque nosotros hemos asumido que existe de alguna manera un mapeo en 3D de la pila. No es necesario o este proyecto no abarca un sistema de monitoreo constante de la pila, pero sí necesitamos alguna información referencial sobre cómo se comporta.

0:6:14.59 --> 0:6:32.459
Juan Mansilla
¿Cómo se cómo se comporta físicamente la pila cuando por interacción de los feeders, no de las compuertas que están a están a abriendo y cerrando, no? Ese modelo nos ayuda para calibrar el modelo simplificado, que es lo que va a generar la información.

0:6:33.299 --> 0:6:52.259
Juan Mansilla
Cercana a tiempo real, ya porque estos modelos son pesados y también dependen de que haya la información completa, no ya. Entonces lo que nosotros buscamos es para las bambas estén en una mayor visibilidad del comportamiento de la pila. una.

0:6:52.379 --> 0:7:13.819
Juan Mansilla
Mejor predicción de del material que está yendo hacia molienda. También al implementar estos 2 modelos estamos teniendo una menor dependencia de recalibraciones manuales, no porque ya sea un modelo simplificado que parte en heurísticas o a un modelo de machine learning. de todas maneras.

0:7:13.899 --> 0:7:33.219
Juan Mansilla
Dar algún feedback de la situación actual de la pila, ya sea cuando esta han sido empujada y está en cero o de algún levantamiento que se haya hecho. No necesito un levantamiento completo, sino un levantamiento parcial y eso lo vamos a ver más adelante ya y bueno.

0:7:33.339 --> 0:7:52.699
Juan Mansilla
aparte de eso también una trazabilidad de los atributos no es decir si viene un material que que es muy duro o que tiene contaminantes poder saber en qué momento ya el proceso eso también suma mucho ya y se puede hacer una evolución hacia hacia mujeres aún más complejos pero hay que hay que ver el tema de

0:7:53.179 --> 0:7:55.499
Juan Mansilla
De la complejidad y del acceso a los datos, no.

0:7:57.259 --> 0:8:18.379
Juan Mansilla
En general, estos 2 modelos trabajan en conjunto, ya el modelo simplificado se ve se ve calibrado por el por el modelo espacial, que el modelo espacial al ser tan ser más complejo matemáticamente, nosotros lo que hacemos es solamente cuando sea necesario recurrir a este, no para hacer una calibración.

0:8:21.579 --> 0:8:46.419
Juan Mansilla
A ver, me pase, me pase. Entonces nosotros lo que hacemos es consumir los datos operacionales, niveles, estados, atributos de material. Hoy en día ya tenemos la información de bloques que están siendo descargados enchancadora a través de del gemelo y también te y bueno, no lo consumimos, pero también podemos tener de repente.

0:8:47.499 --> 0:9:8.99
Juan Mansilla
los feeders que están debajo de la pila no las compuertas para poder entender cómo se está distribuyendo ese material ya es esa información que es en línea en tiempo real no sirve para el modelo simplificado No ya con información de campo de topografía ya sea una nube de puntos ya sea alguna

0:9:8.259 --> 0:9:28.339
Juan Mansilla
Formación de un lidar, no nosotros podemos alimentar este modelo espacial que es 2.5 D, o sea, es una representación general de lo que está ahí. Lo que se hace es una descretización de la pila ya en bloques regulares.

0:9:28.579 --> 0:9:50.979
Juan Mansilla
Y lo que se hace es simular cómo se comporta a través de o cómo se está comportando a través de los feeders y cómo se ha desplazado el material. Se necesita la información de campo, nos da la situación actual física de la pila. El modelo simplificado nos da una estimación de lo que está pasando. Es por eso que son complementarios.

0:9:51.659 --> 0:10:10.419
Juan Mansilla
Entonces tenemos la estimación operacional del estado de pila, no de del material que está haciendo por cada feeder. Existe una correlación espacial que es lo que hace el modelo espacial, porque este modelo, valga en verdad, es demora un tiempo. De ahí al final nosotros lo que damos es como entregable.

0:10:10.979 --> 0:10:31.859
Juan Mansilla
Ya sea unos para que sea consumido a través de una API o a través de una base de datos, el material que está pasando por cada línea, ¿no? O lo que se estima que está pasando por cada línea. Ya eso es lo que nosotros tomamos. Ahora, como estaba mencionando, ¿por qué utilizamos los otros 2 modelos?

0:10:31.899 --> 0:10:50.899
Juan Mansilla
porque el modelo simplificado lo que nos da o sea es un modelo de bajo costo es decir con una infraestructura actual que tiene el gemelo nosotros podemos hacer la actualización ya y obviamente no va a demandar mucho recurso ya pero no tiene

0:10:51.59 --> 0:11:10.19
Juan Mansilla
Una representación espacial de la pila, o sea, es es una cómo decirlo, es una asunción lo que se va a ver ya y en sin embargo el modelo 2.5 de ya ahí sí nos alejamos del tiempo real porque es.

0:11:10.59 --> 0:11:28.859
Juan Mansilla
Es un modelo que para calibrar y estimar todas las pequeñas celdas o los pequeños objetos que se generan, va a recurrir un tiempo mayor de procesamiento, no alrededor de 5 o 10 minutos. Seguramente en poder trabajar con cada uno de estos bloques y hacer la simulación.

0:11:29.459 --> 0:11:47.499
Juan Mansilla
Ya esto es por eso que nosotros este modelo nosotros lo recomendamos que sea bajo demanda ya para no recurrir en una infraestructura exagerada ya que notifique de repente tener esto en tiempo real, no, entonces acá conviven los 2 modelos.

0:11:47.859 --> 0:12:10.99
Juan Mansilla
ya para y cada uno se retroalimenta para tener una mejor o sea incrementar la precisión del modelo con el modelo simplificado podemos estar por encima de del 80% o del punto 8 y con el modelo espacial y acercarnos a punto 9 no y sobre todo va a haber seguramente algunos outliers

0:12:10.499 --> 0:12:31.899
Juan Mansilla
Por ejemplo, que se limpia, se limpia totalmente la pila, no, la pila llega a cero o ese tipo de casuísticas. Entonces esa información se se se puede mapear con el modelo espacial. No sé si hasta este punto tienen algún alguna consulta, sino para.

0:12:32.499 --> 0:12:33.339
Juan Mansilla
Para seguir.

0:12:34.899 --> 0:12:41.979
Luis Beltran
Oh, de mi parte, Juan, hay una consulta al inicio, el tema de data.

0:12:37.179 --> 0:12:37.739
Juan Mansilla
Sí.

0:12:42.979 --> 0:12:56.419
Luis Beltran
¿Cómo es el consumo de la aplicación? Y también indicaron en uno de los PPTs que hay algunos valores que los asumen como fijos. ¿Qué valores serían esas 2 preguntas?

0:12:54.99 --> 0:12:54.419
Juan Mansilla
Yeah.

0:12:56.739 --> 0:13:16.179
Juan Mansilla
Ya en general no hay valores fijos como tal. Son valores que se van a autocalibrar en el modelo espacial. Seguramente la implementación sí va a ser necesario revisar el flujo. O sea, necesitamos los diagramas de la pila. Cuando digo diagramas, me estoy refiriendo al sistema de.

0:13:16.499 --> 0:13:37.939
Juan Mansilla
de de las líneas que tienen ya hay que ver qué tax tenemos porque esto tenemos que consumir de de Pay no la información ya y con esto alimentar el modelo y nosotros bueno Lo bueno es que tenemos información ya de los de mina sabemos qué cosa es lo que está siendo descargado

0:13:38.419 --> 0:13:57.179
Juan Mansilla
Nosotros asumimos esto en líneas generales que el material que se descarga en chancadora es el que se está automáticamente moliendo y aparece en pila. Es de repente la única asunción que nosotros hacemos, Luis, y después todo lo demás si son modelos matemáticos ya.

0:13:57.539 --> 0:14:20.179
Juan Mansilla
son modelos matemáticos heurísticos y DML de machine learning porque hay cosas que no la verdad es que no se pueden hacer con heurística normal lo que es que eso es el modelo simplificado y lo que es el modelo espacial acá si necesitamos información de la situación actual de la pila y esto es de repente lo que sí se tiene que ingresar de alguna manera

0:14:20.739 --> 0:14:40.539
Juan Mansilla
No, ya sea, , no digo que todos los días, pero sí, por lo menos cada cada 15 días o cada vez que hay una variación muy fuerte, porque sí necesitamos cómo retroalimentar el modelo y que este se autocalibre, pero para que este modelo 2.5 de funcione.

0:14:41.139 --> 0:14:51.819
Juan Mansilla
Sí o sí necesitamos información de geométrica de la de del cuerpo, no de la pila, no para poder hacer sus reclaraciones.

0:14:54.179 --> 0:14:57.859
Luis Beltran
Hay una consulta en lo que respecta al.

0:14:58.739 --> 0:15:21.259
Luis Beltran
Al modelo espacial, nosotros en planta cada 15 días, entonces, pero lo que indica es que cuando se tenga una un comportamiento fuerte de repente, después de una parada o antes donde hay cambios y a veces baja considerablemente, se empuja con tractores.

0:15:5.259 --> 0:15:5.699
Juan Mansilla
Sí.

0:15:20.899 --> 0:15:21.499
Juan Mansilla
Claro.

0:15:21.859 --> 0:15:41.939
Luis Beltran
Tú indicas que ahí también se debería, pero esa práctica no la tenemos y en todo caso todavía, bueno, habría que evaluar si es que se realizaría, si algún equipo lo realizaría. ¿Esto cómo impactaría al modelo? Entiendo finalmente de que es un tema de calibración, pero.

0:15:38.19 --> 0:15:38.259
Juan Mansilla
Ah.

0:15:40.579 --> 0:15:40.899
Juan Mansilla
Ajá.

0:15:42.579 --> 0:15:43.59
Juan Mansilla
Sí.

0:15:42.619 --> 0:15:46.59
Luis Beltran
Y en la práctica no se tiene que tanta desviación vamos a tener.

0:15:46.899 --> 0:16:7.979
Juan Mansilla
Sí, ya es una buena pregunta. En realidad habría que cuantificarla para cada uno. Nosotros, el modelo simplificado, como comentaba, está por encima del punto 8 de precisión, ya, pero con el modelo espacial se incrementa, ¿no? Entonces, si hay un manipuleo, habría que hacer un análisis.

0:16:8.259 --> 0:16:30.179
Juan Mansilla
crisis no para considerar algunos parámetros ya que sí serían configurables por el usuario es decir Oye sabes que el día de hoy hubo limpieza no se ha podido levantar Así que ponemos que todo está en plano o que tiene un comportamiento y atípico la pila entonces habría que considerar o hacer un análisis de esos escenarios

0:16:14.219 --> 0:16:14.899
Luis Beltran
Yeah.

0:16:25.939 --> 0:16:26.419
Luis Beltran
Thank you.

0:16:30.219 --> 0:16:51.579
Juan Mansilla
Para disminuir el error, no del modelo simplificado, porque es el que se vería afectado, porque el modelo 2.5D no funcionaría si no tiene, si no hay esa información, no, pero yo estoy seguro que se puede tipificar, no se puede tipificar algunos escenarios y con eso retroalimentar el modelo de 2.5 dy ya cuando hay información.

0:16:42.979 --> 0:16:43.219
Luis Beltran
No.

0:16:46.179 --> 0:16:49.499
Luis Beltran
37, 37, vale.

0:16:51.699 --> 0:16:54.139
Juan Mansilla
Oficial ya a terminar de calibrarlo.

0:16:55.619 --> 0:17:13.939
Luis Beltran
Okay, correcto. En lo que indicas respecto del modelo espacial, bueno, tiene una alta carga computacional y por ende los datos los entrega cada 10 minutos con la frecuencia que indicaste esa prox. ¿Qué tan robo?

0:17:2.59 --> 0:17:2.539
Juan Mansilla
Sí.

0:17:5.619 --> 0:17:6.19
Juan Mansilla
Sí.

0:17:9.459 --> 0:17:9.939
Juan Mansilla
Sí.

0:17:11.299 --> 0:17:11.779
Juan Mansilla
Sí.

0:17:13.979 --> 0:17:24.819
Luis Beltran
Justa debería de ser o qué consideraciones de hardware, tal vez a alto nivel, debería de considerarse para esta implementación a fin de que no quede corto.

0:17:20.99 --> 0:17:20.699
Juan Mansilla
Sí.

0:17:23.619 --> 0:17:23.939
Juan Mansilla
Y.

0:17:25.219 --> 0:17:46.779
Juan Mansilla
Sí, nosotros, Luis, nosotros ya hicimos por el gemelo, o sea, todo esto yo estoy considerando que puede funcionar en la infraestructura actual del gemelo. Ya ha sido dimensionado, ¿no? O sea, nosotros cuando hicimos la solicitud consideramos ahí un servidor con tarjeta gráfica, ya que es lo mejor para correr estos modelos espaciales.

0:17:43.859 --> 0:17:44.299
Luis Beltran
Sí.

0:17:48.179 --> 0:18:6.819
Juan Mansilla
Entonces porque porque en el gemelo lo que va a utilizar es esa no haber conflicto con lo que está corriendo actualmente en el gemelo ya con si se incluye un modelo más espacial no ya cosas más complejas y de repente sí no pero en este caso no no con la frecuencia

0:17:48.739 --> 0:17:48.899
Luis Beltran
Y.

0:18:6.899 --> 0:18:25.819
Juan Mansilla
Que se está estimando, que no es, que no es a cada rato, no, porque este modelo, si viene diez, 15 minutos, es cuando hay información espacial, no? O cuando el usuario dice hay que hay que calibrar porque ha habido algún cambio en la operación en las operaciones de la pila entonces.

0:18:25.939 --> 0:18:33.779
Juan Mansilla
¿Solamente ahí, no? Entonces, por esos picos, nosotros, bueno, nuestra recomendación ya tenemos, ya se tiene la infraestructura, ¿no?

0:18:29.779 --> 0:18:31.619
Luis Beltran
What do you do?

0:18:36.179 --> 0:18:39.659
Luis Beltran
Ahí consulta, justamente cambiamos la.

0:18:38.99 --> 0:18:38.379
Juan Mansilla
Mhm.

0:18:40.659 --> 0:18:52.739
Luis Beltran
La arquitectura del gemelo para darle seguridad al tema del 3 dy también al tema de conexiones, y por eso se se tiene la propuesta de hardware al gemelo.

0:18:46.979 --> 0:18:47.459
Juan Mansilla
Sí.

0:18:48.539 --> 0:18:49.139
Juan Mansilla
sí.

0:18:52.339 --> 0:18:53.579
Juan Mansilla
Mhm, sí.

0:18:54.499 --> 0:19:3.499
Luis Beltran
Incrementarle todo este procesamiento que tú indicas, si bien va a ser a demanda el uso del espacial, no lo impactaría, no habría ese riesgo.

0:19:0.339 --> 0:19:0.659
Juan Mansilla
Mhm.

0:19:2.499 --> 0:19:25.59
Juan Mansilla
No, no, no hay ese riesgo. El modelo que estaría funcionando es el modelo simplificado. Ese modelo no tiene un consumo muy alto. Ya, y el modelo espacial se utilizaría la tarjeta gráfica que solamente funciona en momentos pico, ya que es cuando se carga una topografía nueva, cuando se reprocesa una topografía nueva.

0:19:25.459 --> 0:19:40.219
Juan Mansilla
Y eso es cuando trabajamos con ortofotos o que y que todavía no. O sea, nosotros ya hemos trabajado en otros lugares y no habría problema, ¿no? O sea, está dentro de la capacidad de la infraestructura actual, no o la solicitada, no.

0:19:48.579 --> 0:20:8.219
Luis Beltran
O K, este sería posible, si bien, si bien comentabas que nosotros compartiéramos los diagramas, los PFDS y bien Iris, de repente sería posible de repente tener del lado de ustedes una lista de las señales que ustedes considerarían.

0:19:50.419 --> 0:19:51.219
Denis Zamalloa
What is your?

0:19:54.179 --> 0:19:54.659
Juan Mansilla
Thank you.

0:19:55.699 --> 0:19:56.179
Denis Zamalloa
Yeah.

0:20:9.379 --> 0:20:9.779
Juan Mansilla
Sí.

0:20:9.619 --> 0:20:11.899
Luis Beltran
Para saberlas eliminarmente.

0:20:12.979 --> 0:20:14.459
Juan Mansilla
sí.

0:20:14.859 --> 0:20:29.699
Luis Beltran
Y lo otro es, entiendo que nosotros también tendríamos una visualización en 3D de la pila. ¿Es así? Eso lo maneja, entiendo, el lado del modelo espacial, corrígeme.

0:20:29.339 --> 0:20:31.739
Juan Mansilla
sí, es correcto.

0:20:30.779 --> 0:20:34.899
Luis Beltran
Pero este este se actualizaría a demanda.

0:20:36.59 --> 0:20:44.459
Luis Beltran
No, finalmente entiendo que también podríamos decirles, sabes qué, actualízate cada media hora ya como una tarea programada.

0:20:36.379 --> 0:20:36.899
Juan Mansilla
Sí.

0:20:46.299 --> 0:20:47.979
Luis Beltran
¿Oh, no es tanto así?

0:20:48.299 --> 0:21:6.299
Juan Mansilla
No es tanto así porque en realidad la arquitectura lo que hace es que este modelo espacial calibra el modelo simplificado. Este modelo simplificado está corriendo siempre con, o sea, y esto hay que ver justamente el micro batch que se va, se va a necesitar ya.

0:21:6.779 --> 0:21:25.139
Juan Mansilla
Entonces ese micro batch puede ser espacio de cinco minutos de diez minutos de quince minutos va a depender del volumen que esté pasando por gafeeder ya eso es algo que se determina en ese momento ya y este modelo espacial dos punto cinco de si necesita información.

0:21:26.539 --> 0:21:46.219
Juan Mansilla
Topográfica. Entonces, acá la limitante siempre es eso, no se necesita algún input de la situación actual de la pila para hacer la recalibración entre los entre los modelos. Entonces, si no hay eso, no habría manera de cómo hacerlo funcionar ese modelo así nada más. No, es un modelo que realmente funciona.

0:21:44.939 --> 0:21:45.19
Luis Beltran
A.

0:21:46.459 --> 0:21:50.219
Juan Mansilla
¿Bajo demanda, relativamente poco, no?

0:21:52.539 --> 0:22:11.779
Luis Beltran
Pero hay consulta, o sea, yo le como inicialmente dije cada 15 días tenemos una un levantamiento de topografía, esa data calibra el modelo, pero no es que yo pueda pedirle, oye, no sé cada hora muéstrame en 3D, cómo está.

0:21:59.99 --> 0:21:59.459
Juan Mansilla
Sí.

0:22:4.299 --> 0:22:4.659
Juan Mansilla
Sí.

0:22:11.859 --> 0:22:15.859
Luis Beltran
La distribución de la carga en la pila, hacia eso iba.

0:22:13.139 --> 0:22:13.659
Juan Mansilla
I am.

0:22:15.99 --> 0:22:33.499
Juan Mansilla
Ya se refiere al modelo de estimación, sí, o sea, sí se puede ver, pero que el flujo del modelo vayas, el modelo simplificado y calibre, no, pero sí, oye, visiblemente quiero ver cómo está actualmente ya, eso sí es posible, no, eso sí se puede.

0:22:27.99 --> 0:22:28.459
Luis Beltran
No, claro, sí, sí.

0:22:32.779 --> 0:22:33.179
Luis Beltran
Yeah.

0:22:34.99 --> 0:22:48.299
Luis Beltran
Correcto, ahora, en cuanto al modelo simplificado, que ahí también con leía del documento que enviaron, una de las variables que bueno que me llama, además de las toneladas, es el tema de la gronometría.

0:22:49.259 --> 0:23:0.939
Luis Beltran
También la estima y entiendo que en este caso sería contrastada contra lo que es el dato del split online que tenemos por cada feeder. ¿Es así la metodología?

0:22:58.179 --> 0:22:58.539
Juan Mansilla
Sí.

0:23:1.899 --> 0:23:22.339
Juan Mansilla
Sí, en este en este caso, si ya se tiene ya sea el p o 80 p 20 se haría una aproximación de lo que se está teniendo. Eso ayuda mucho al modelo espacial, ya porque es acá es donde consideramos nosotros la distribución de partículas y ahí en el modelo simplificado es simplemente.

0:23:22.619 --> 0:23:37.459
Juan Mansilla
La extrapolación de este modelo, no, entonces sí, o sea, si se tiene la información de granometría, ya sí se puede trabajar en la predicción de este, no, o sea, para ver cómo se estaría separando.

0:23:31.179 --> 0:23:31.619
Luis Beltran
Sleep.

0:23:33.139 --> 0:23:33.819
Luis Beltran
¿Qué?

0:23:39.179 --> 0:23:40.259
Luis Beltran
Okey, correcto.

0:23:41.259 --> 0:23:47.979
Luis Beltran
Esas son mis mis consultas. No sé si vieran otras de los asistentes ahí. Gracias Juan, gracias Juan.

0:23:46.619 --> 0:24:7.659
Denis Zamalloa
Sí, lo tengo en algo, este la pila nuestra tiene una capacidad de 105 kilo toneladas métricas secas. Sí, este vale decir que este tonelaje día a día se va a priorizar y desaparecer la gestión del del corneador de sala de molinos.

0:23:47.659 --> 0:23:48.139
Juan Mansilla
Sí.

0:23:49.339 --> 0:23:49.779
Juan Mansilla
Sí.

0:23:57.579 --> 0:23:57.939
Juan Mansilla
Sí.

0:24:8.139 --> 0:24:31.99
Denis Zamalloa
Priorizando su throughput, existe la forma de hacer un cálculo para las veces que la utilización del modelo este vaya a ser útil en bajo esta, bajo esta condición de que he mencionado, la porque la otra, el otro escenario en el cual sí se utilizaría sería cuando la pila va a trabajar en situaciones.

0:24:9.859 --> 0:24:10.139
Juan Mansilla
Mhm.

0:24:31.899 --> 0:24:51.19
Denis Zamalloa
De mantenimiento de chancado primario en que si se va a necesitar el equipo auxiliar para alimentar los feeders y ahí quienes tendrían que echar mano de mayor información de esto sería el operador del equipo auxiliar, ¿no? Y bueno, también este complementado con el Rosario contra los molinos, ¿no?

0:24:38.699 --> 0:24:39.219
Juan Mansilla
This is.

0:24:54.59 --> 0:24:54.379
Juan Mansilla
A ver.

0:24:54.139 --> 0:24:59.179
Denis Zamalloa
Porque para dejarme entender, quién va a alimentar va a ser el tractor.

0:24:56.339 --> 0:24:56.779
Juan Mansilla
Sí.

0:25:0.299 --> 0:25:0.659
Juan Mansilla
Mhm.

0:25:0.339 --> 0:25:5.499
Denis Zamalloa
¿Y iba, iba a ver de qué lado este empuja la carga, pero no?

0:25:8.539 --> 0:25:27.979
Juan Mansilla
¿Es esa actividad de empujar la carga, cada cuánto lo se planea tener? Porque justo justo eso es lo que hablaba Luis, también de algunos parámetros, algo que agregar, porque eso sí es variable. Estos modelos se basan en partículas en física para.

0:25:28.59 --> 0:25:49.579
Juan Mansilla
Para simular qué material está ingresando acá a cada línea, pero si va a haber un tractor, es ahí donde sí necesitamos un modelo espacial o tener una ventana donde no, o sea, donde el modelo va a caer en precisión porque no podemos predecir cómo el operador va a trabajar, ¿no?

0:25:29.139 --> 0:25:29.459
Denis Zamalloa
Yes.

0:25:35.19 --> 0:25:35.59
Denis Zamalloa
I.

0:25:43.219 --> 0:25:43.699
Denis Zamalloa
Thank you.

0:25:50.179 --> 0:26:1.979
Juan Mansilla
Entonces eso sería importante tenerlo en claro, porque sí va a impactar, sí va a impactar. No creo que el esté siempre un tractor ahí, no esa parte sí, no la conozco, ¿no?

0:25:50.619 --> 0:25:51.579
Denis Zamalloa
\*\*\*\* you.

0:26:0.419 --> 0:26:0.779
Denis Zamalloa
Sí.

0:26:2.219 --> 0:26:21.619
Denis Zamalloa
Claro, mira, máxima va a ser el 25%, que es la diferencia de la disponibilidad del circuito charcado primario. ¿Por qué digo máximo? Porque hay situaciones en las cuales no le va a ser posible por temas de seguridad. Por ejemplo, pongan por poner un número, ejemplo, 18 20% de las veces que sea.

0:26:3.99 --> 0:26:3.139
Juan Mansilla
Y.

0:26:16.459 --> 0:26:17.19
Juan Mansilla
Claro.

0:26:21.899 --> 0:26:26.619
Denis Zamalloa
Este posible que la que el tractor así está en el alimentado de la carga, los fiers.

0:26:28.379 --> 0:26:28.659
Juan Mansilla
Mhm.

0:26:30.379 --> 0:26:31.99
Juan Mansilla
Yeah.

0:26:33.499 --> 0:26:53.99
Juan Mansilla
Ya sí, ahí habría que habría que revisarlo un poco cómo sería la participación, porque si es un 20% si es si es alto, ya yo pensé que estaba por debajo del 5. Habría que revisarlo porque habría que ver cómo, o sea, de todas maneras debería haber una especie de interfaz, algo para entender cómo se está.

0:26:53.499 --> 0:27:0.219
Juan Mansilla
Comportando, o sea, ese tractor no dentro y cómo está moviendo el material en el.

0:27:1.779 --> 0:27:21.19
Juan Mansilla
Para la entrada de los feeders, no, entonces eso sí, habría que revisarlo técnicamente. ¿Cuál sería la mejor solución y cuál sería el impacto? Porque en este proyecto, esto es yéndome un poquito más allá, sí hay una parte de Discovery, ya nosotros lo hemos.

0:27:21.59 --> 0:27:40.219
Juan Mansilla
puesto esto para 12 semanas donde justamente hay que mapear muy bien estas casuísticas históricas, no de los datos les podemos pasar ahí la lista de de de de tax o que se que se requieran ya y.

0:27:41.579 --> 0:27:59.979
Juan Mansilla
y mapear qué se puede hacer no O por lo menos qué podemos sugerir para controlar eso porque sí sí va a haber un tema de de una variación que es bien compleja para nosotros modelarla sin sin información no habría que trabajar

0:28:1.339 --> 0:28:8.699
Juan Mansilla
Con el porcentaje de feeders, consumo de energía, tendría que conversarlo con el equipo, no para ver cuál sería la alternativa, ¿no?

0:28:8.939 --> 0:28:16.219
Denis Zamalloa
Y de hecho, también va a ser importante que ustedes tengan conocimiento de cómo el apilamiento cambia de dirección de acuerdo al nivel del stock.

0:28:15.299 --> 0:28:15.739
Juan Mansilla
Sí.

0:28:18.299 --> 0:28:39.899
Juan Mansilla
Sí, justo justo es ese punto es el que tengo que ver, qué podemos hacer. O sea, en general yo había considerado que obviamente esto pasa en todas minas, en todas las minas, no donde necesitan apoyo de un tractor para empujar, pero no pensé que iba a ser tan alto. Yo pensé que iba a ser.

0:28:40.219 --> 0:28:59.59
Juan Mansilla
Algo muy puntual en el mes y después que haya esa actividad, se pone o se setea a un determinado porcentaje de la pila y continúa, no. Entonces de telas del 100% yo estimaba menos del 5% que iba a tener una buena perturbación.

0:28:59.299 --> 0:29:5.99
Juan Mansilla
Pero ya si es 20 ya sí hay que hay que revisarlo porque es regular la cantidad de horas, ¿no?

0:29:9.259 --> 0:29:18.899
Juan Mansilla
Eso sí, no sé si les puedo enviar algunas consultas para entender bien eso. Y si hay información de la pila, también nos ayudaría mucho. Sí, Javier.

0:29:28.299 --> 0:29:30.739
Juan Mansilla
Sí, no te escuchamos, era.

0:29:31.579 --> 0:29:32.459
Luis Beltran
No se te copia.

0:29:32.259 --> 0:29:32.619
Juan Mansilla
Good.

0:29:35.179 --> 0:29:36.219
Luis Beltran
No se copia aún.

0:29:37.259 --> 0:29:37.819
Juan Mansilla
No.

0:29:43.819 --> 0:29:45.659
Luis Beltran
Si no habla del mío, sí.

0:29:49.979 --> 0:29:50.459
Luis Beltran
¿Cómo?

0:30:32.299 --> 0:30:32.939
Luis Beltran
Pedro.

0:30:51.219 --> 0:30:52.59
Luis Acuña
Me es mejor.

0:30:53.19 --> 0:30:54.139
Juan Mansilla
Sí, ahora sí, Javier.

0:30:58.299 --> 0:31:5.499
Luis Acuña
Ya no, lo que estaba comentando acerca de la parte gráfica de la pila. este.

0:31:6.779 --> 0:31:27.899
Luis Acuña
Dijiste, comentaste que va a ser como una simulación o una aproximación y más no me equivoco, pero si se tiene, pero si se tiene los la nube de punto de los drones, no podría ser una virtualización más exacta tipo el gemelo digital que bueno jalas de la nube de punto, no sé de la huella del.

0:31:12.539 --> 0:31:13.499
Juan Mansilla
Sí, correcto.

0:31:27.979 --> 0:31:33.19
Luis Acuña
¿Los camiones y comienzas a dibujar la mina no sería algo partido?

0:31:33.739 --> 0:31:54.339
Juan Mansilla
Sí, en realidad lo que pasa es que esa información de topografía, según tengo entendido, no es tan frecuente, no es tan frecuente. Entonces, entre esos periodos donde no hay información, es donde nosotros utilizamos el modelo simplificado, ¿no? Y cuando hay esa información espacial es donde utilizamos el modelo.

0:31:54.699 --> 0:32:13.99
Juan Mansilla
Espacial ya, y es donde empezamos a recrear qué es lo que ha pasado o qué cosa hay que recalibrar del modelo simplificado. O sea, el tema está como no hay esa información, o sea, si habría de forma continua, o sea, en la mayoría de operaciones no hay esa información de modelo 3D en tiempo real, no lo hay.

0:32:13.499 --> 0:32:32.499
Juan Mansilla
No, porque bueno, no se tiene esos modelos en general para poder alimentar continuamente el modelo 2.5, no es por eso que nosotros lo que hacemos es de ese levantamiento que puede haber sido con dron con.

0:32:32.859 --> 0:32:51.899
Juan Mansilla
Con lidar o con estación total, no con láser, no sé, trabajarlo, trabajarlo y que sirva para recalibrar el resto de modelos. O sea, el otro modelo, mejor dicho. O sea, y dentro y en ese

0:32:52.59 --> 0:33:15.19
Juan Mansilla
espacio entre entre calibración y calibración que sí haya una representación pero va a ser una simulación de lo que está pasando. Ya se puede ver ahí a nivel de físicamente ya si tiene si tiene similitud sí o no, no tienen solamente por consulta, no tienen video de esa de la pila o si tienen como para entender el momento en que están haciendo actividades ahí.

0:33:16.779 --> 0:33:26.219
Juan Mansilla
Eso era algo que bueno, no lo no lo considero yo porque sí se vuelve más pesado, pero sí hay un tema de video, algo ahí, Luis y Javier, que se pueda ver.

0:33:27.499 --> 0:33:42.819
Luis Beltran
Habría que revisar en el CCTV que está la cámara en el en la parte final del estaque. Ahí habría que revisar para justamente los momentos en que han sido detenciones y ver el la actividad de los tractores que empujan la carga.

0:33:35.339 --> 0:33:35.659
Juan Mansilla
Yeah.

0:33:44.379 --> 0:34:7.859
Juan Mansilla
Claro, o sea, sí, yo lo que considero ahí es que se va a tener que trabajar. O sea, si hay esos videos, de todas maneras nos podrían ayudar a nosotros a construir unos casos típicos de cómo se va, cómo se va a trabajar en esos momentos donde hay un tractor empujando. Porque sí es muy aleatorio, va a depender mucho de la experiencia del operador.

0:34:8.539 --> 0:34:29.19
Juan Mansilla
Del operador no que haga esa actividad. Entonces sí, respecto a eso no podemos ofrecerles una precisión alta. No, Nosotros sí podemos hacerlo si el proceso es continuo, si es continuo y si hay información periódica que se está cargando, pero en esos intermedios donde.

0:34:29.339 --> 0:34:37.99
Juan Mansilla
¿Se realizan actividades por otros equipos o entra la participación humana y si es más complicado de modelar, no?

0:34:37.739 --> 0:34:38.299
@1
Y Juan.

0:34:38.859 --> 0:34:39.299
Juan Mansilla
Sí.

0:34:39.819 --> 0:34:50.299
@1
Juan, y pero va a generar algún tipo de dependencia dependencia en cuanto a inputs, por ejemplo, de periódicamente vas a necesitar un tema de draw que vayan a tomar los puntos.

0:34:50.939 --> 0:35:10.19
Juan Mansilla
O sea, no es necesariamente un dron. La recomendación es si cada 15 días hacen un levantamiento, cargar ese modelamiento a la plataforma, no o sea, los puntos que ya han llegado a levantar, porque ya el modelo va a estar entrenado para reconocer el comportamiento de la.

0:35:10.379 --> 0:35:28.619
Juan Mansilla
De la pila, físicamente el comportamiento de la pila ante cualquier levantamiento. No sé si se me entiende esa parte. Entonces sí es necesario, sí, porque el modelo no necesita de todas maneras un input que sea el estado actual para poder hacer una recalibración. Sí, sí, Ricardo.

0:35:31.739 --> 0:35:41.419
Ricardo Marquez
¿Qué tal? Buenos días, no sé si me permiten hacer una proyección, ya que están hablando del tema operativo que definitivamente pues va a influir en el modelamiento que se está planteando, por favor.

0:35:38.379 --> 0:35:38.739
Juan Mansilla
Sí.

0:35:41.459 --> 0:35:41.819
Juan Mansilla
Sure.

0:35:42.779 --> 0:35:43.739
Juan Mansilla
Sí, no problem.

0:35:45.819 --> 0:35:47.739
Ricardo Marquez
Ya no sé si pueden apreciar mi proyección.

0:35:48.219 --> 0:35:48.939
Juan Mansilla
sí.

0:35:49.259 --> 0:36:9.939
Ricardo Marquez
Ya mire, esta es una foto, no es un video, es una foto este de la distribución que tenemos de los alimentadores en función del stock by. Esta es una foto vacía que me ha costado conseguirla porque nosotros tenemos, Juan, este una condición bastante particular acá que creo que puede ser este de ayuda también para que ustedes puedan tener una certeza en la.

0:36:3.979 --> 0:36:4.299
Juan Mansilla
Two.

0:36:10.179 --> 0:36:26.419
Ricardo Marquez
En la digamos en la propuesta, no mira, esta es la faja cuatro, no que descarga el mineral hace este este este stoppail y este nosotros tenemos al lado que estoy ahorita pasando mi puntero, los alimentadores, los cuatro alimentadores de del SAJ uno.

0:36:24.219 --> 0:36:24.579
Juan Mansilla
Sí.

0:36:27.259 --> 0:36:51.219
Ricardo Marquez
Ya, y los que están pegados al muro de concreto son los que alimentan al SAC 2. Ya qué es lo que pasa cuando nosotros tenemos hasta 60% de nivel. Por eso va a ser también importante ver el registro de niveles y cómo está el rendimiento trayendo los molinos donde nosotros nos damos cuenta. Es que, por ejemplo, el 60% de nivel, nosotros tenemos alimentación fresca.

0:36:52.59 --> 0:36:55.99
Ricardo Marquez
Fresca, digamos, con un cono acá al solo al sajuno.

0:36:55.979 --> 0:37:20.19
Ricardo Marquez
Ya cuando tenemos menos del 60% del nivel, prácticamente no tenemos mineral fresco en la alimentación al SAR 2. Acá tenemos bastantes tractores, por eso contamos parados con estos niveles bajos. Necesitamos para que no se detenga y se quede si carga el SAR 2. Necesitamos tractores que empujen a estos alimentadores con niveles superiores a 6065 70% ya vamos viendo cómo se coberturan.

0:37:20.139 --> 0:37:25.379
Ricardo Marquez
Los 8 alimentadores y ya nos permite tener una operación un poco más estable, básicamente en esas 2.

0:37:26.139 --> 0:37:42.299
Ricardo Marquez
Ya entonces yo quería hacer esa precisión porque es algo particular que, por ejemplo, en otras operaciones sí es bastante ya este, digamos, equidistantes los alimentadores con la formación que se da naturalmente en la pila. Ya entonces, por favor, toman, tomen consideración ello.

0:37:29.179 --> 0:37:29.619
Juan Mansilla
Sí.

0:37:39.819 --> 0:37:40.179
Juan Mansilla
Good.

0:37:43.819 --> 0:38:4.379
Juan Mansilla
Sí, no hay, no hay problema. Sí, sería útil tener un video o entender bien cómo físicamente está eso. No sé si eso Luis sería posible, porque sí me llama la atención. Sí, sí me queda claro que ahí hay una restricción, o sea, necesariamente hay cuestiones operativas ahí que no son tan usuales, ¿no?

0:38:9.19 --> 0:38:13.739
Luis Beltran
Sí, podemos revisar la como indiqué CCTV y ahí gestionamos los permisos.

0:38:14.779 --> 0:38:15.299
Juan Mansilla
Yeah.

0:38:18.659 --> 0:38:23.299
Juan Mansilla
Está bien, estaba. Muchas gracias ahí por la por la aclaración de lo que.

0:38:24.59 --> 0:38:48.819
Juan Mansilla
Pasa, a ver, disculpen, voy a regresar a la presentación. Entonces nosotros lo que nosotros buscamos es siempre tener información de bueno, el modelo, en este caso simplificado, se se basa del input, los el todelaje de entrada, no de a la pila, la salida. En este caso ya nos queda claro que son.

0:38:48.939 --> 0:39:11.899
Juan Mansilla
líneas cuatro eh eh cuatro puntos o sea cuatro puntos de recepción por cada línea no eh necesitamos ver los estados eh Bueno ahí le vamos a tener que compartir la lista de información ya es importante también tener el histórico no el histórico de de la información que que tengan

0:39:12.59 --> 0:39:36.499
Juan Mansilla
ya porque si nos va a ayudar a nosotros a calibrar el modelo y ver cuánto es la precisión de este no ya con como parte de los entregables está la masa estimada en la pila la fracción activa y de baja movilidad que es lo que estaban comentando hace poco o sea que habría que ver en qué momento se va a llegar a un nivel menor a 60 y va a ser necesario un apoyo auxiliar

0:39:37.99 --> 0:39:43.579
Juan Mansilla
no la edad me estimada del material que también es importante que en este caso sí

0:39:45.339 --> 0:40:5.499
Juan Mansilla
Hay que hay que revisar, voy a tener que revisarlo bien con el equipo. Ya. La predicción de ley, dureza, humedad, que en este caso sí, sí se puede dar. En este caso estamos considerando que vamos a considerar material de los polígonos, los bloques. Y si hay algún tema de desviación o por o baja calidad.

0:40:5.659 --> 0:40:12.539
Juan Mansilla
Y ya me queda claro si está por debajo del 60% hay estos temas ya poder.

0:40:13.979 --> 0:40:33.299
Juan Mansilla
Para poder agregarlo, no ya entonces, como comentaba, bajo condiciones normales, deberías el modelo debería estar por encima del punto 8, ya, pero sí está sujeto a la calidad de los datos y bueno, a las cuestiones operativas que ya ya esté tiendo mayor claridad. no.

0:40:33.379 --> 0:40:52.699
Juan Mansilla
Ya en el modelo de 2.5 es lo que decide si es más necesario la información espacial. Ya me queda más claro. Y también seguramente este tema de las actividades de empuje, no que sí va a ser importante tenerlo mapeado ya para entender cómo.

0:40:53.59 --> 0:41:16.499
Juan Mansilla
¿Cómo se modelaría o cómo se tipificaría si es posible tipificarlo? No para nosotros es un proyecto de 12 semanas, no, donde bueno, ya cierta parte de Discovery ya lo estamos entendiendo y la parte de la geometría ya me queda más, me queda más claro ya y después ya es un tema de diseñar el modelo, determinar los ratios de alimentación.

0:41:16.819 --> 0:41:36.659
Juan Mansilla
Bueno, ver el tema de conexiones a los datos, hacer configuraciones, hacer los desarrollos ya de los de ambos modelos, no de modelos simplificado y el y el modelo de espacial y bueno, hacer los despliegues. no Esto nosotros los podemos incluir en.

0:41:36.979 --> 0:41:57.219
Juan Mansilla
Como comentaba en el gemelo, porque tenemos toda infraestructura ahí o capacidad para poder hacerlo ya sin perjudicar nada de lo de lo que se viene trabajando actualmente. Y bueno, hay todo un tema de despliegue y validaciones, ¿no? Yo creo que ese es el los ya a partir del tercer mes es lo más importante, ¿no?

0:41:57.859 --> 0:42:7.699
Juan Mansilla
¿Entender si el modelo está teniendo una buena adherencia, sí o no, y si se está pudiendo predecir para lo que se está alimentando a los a los molinos, no?

0:42:9.939 --> 0:42:17.779
Juan Mansilla
Eso sería lo que tenía que comentarles. No sé si tienes alguna consulta más ahí, sí.

0:42:13.219 --> 0:42:13.259
Luis Acuña
A.

0:42:16.89 --> 0:42:16.649
Luis Acuña
Juan.

0:42:17.779 --> 0:42:19.379
Luis Acuña
Juan para acá, Luisa cuñado.

0:42:20.379 --> 0:42:20.819
Juan Mansilla
Sí.

0:42:20.379 --> 0:42:30.659
Luis Acuña
Consulta, esto todo esto que nos has explicado ya está implementado en algún lugar, o sea, funciona en algún lado.

0:42:29.419 --> 0:42:29.939
Juan Mansilla
In.

0:42:31.59 --> 0:42:52.19
Juan Mansilla
Nosotros hemos trabajado con modelos empíricos, eso sí tenemos ya, eso sí podemos darle. Lo que no hay mucho es el es la es el modelo espacial. El modelo espacial, la mayoría de minas no tiene, no tiene información de su pila. Es por eso que el modelo espacial es algo que no tenemos.

0:42:52.979 --> 0:43:12.699
Juan Mansilla
No tenemos implementado en ningún lado. ¿Por qué? Por lo que comento, no? Entonces para nosotros sí es importante porque si no el modelo simplificado va a estar pues con algunos parámetros que se van a poner a mano dura y en este caso con esta.

0:43:12.899 --> 0:43:25.619
Juan Mansilla
Condiciones operativas sí habría que dar un replanteo, no, porque el modelo simplificado por sí solo no funcionaría al 100%. No habría que hacer unas algunos cambios, ¿no?

0:43:26.659 --> 0:43:33.459
Luis Acuña
Ya, y este modelo certificado me dices que sí tienes experiencias o están en varios lados, ¿correcto?

0:43:31.19 --> 0:43:31.419
Juan Mansilla
Sí.

0:43:34.179 --> 0:43:37.219
Juan Mansilla
Sí, esto lo hemos trabajado para 2 minas.

0:43:35.459 --> 0:43:36.99
Luis Acuña
Y.

0:43:37.779 --> 0:43:52.179
Luis Acuña
¿Y cuál? ¿Cuál es el aporte? ¿O sea, cómo los ayudas? Si bien es cierto, no necesariamente describe lo que queremos hacer, pero cómo los ayudas? ¿Cómo impacta a en estas minas?

0:43:45.59 --> 0:43:45.539
Juan Mansilla
No.

0:43:48.819 --> 0:43:49.419
Juan Mansilla
I am.

0:43:53.259 --> 0:44:12.259
Juan Mansilla
Ya en este caso, nosotros, bueno, hacer un modelo de pila en realidad es un punto intermedio entre un proyecto de My to 1000, no en poder entender cómo relacionar la información del tajo con lo que se viene viendo en el en el proceso. no?

0:44:13.219 --> 0:44:30.939
Juan Mansilla
Si uno quiere hacer, pues, una analítica más avanzada y entender el comportamiento de cierto material con lo que se ha hecho en el proceso, ya sea recuperación, ya sea a una optimización que se quiera realizar o se va a necesitar tener los tiempos de estadía, o sea.

0:44:31.139 --> 0:44:44.379
Juan Mansilla
Los tiempos en que ese material realmente ingresó en el proceso, o sea, el beneficio está en ese punto, no para que sea alimentado o para que sea de provecho. para.

0:44:45.219 --> 0:45:4.259
Juan Mansilla
para proyectos un poco más grandes Por decirlo así no para eso sirve no justo para trazabilidad no saber exactamente qué se tiene que se está procesando o cuándo va a llegar ese material bajo condiciones normales no hacia el proceso no

0:45:5.59 --> 0:45:6.739
Juan Mansilla
Es un punto intermedio.

0:45:5.539 --> 0:45:24.579
Luis Acuña
Ya, pero o sea, me refería, pues si tienes cuantificado, por ejemplo, que no sé, pues ayudó efectivamente a mejorar tiempos o respuestas en CT o no en set points, no algo tangible para medir, pues no.

0:45:16.179 --> 0:45:16.659
Juan Mansilla
I am.

0:45:23.459 --> 0:45:23.819
Juan Mansilla
Sí.

0:45:25.299 --> 0:45:40.739
Juan Mansilla
Sí, todavía no, todavía no tengo esa fase todavía, Luis, o sea, nosotros hemos hecho los despliegues, pero ya ir aguas más abajo sí hay un tema ahí de confidencialidad que no, o sea, no, ya por limitación del proyecto no llegamos a validar, no sí.

0:45:40.339 --> 0:45:56.939
Luis Acuña
Okey, y entiendo que este la propuesta con el modelo espacial es como que estarías, estaríamos siendo pioneros al tratar de plantearlo con ustedes.

0:45:54.979 --> 0:45:55.339
Juan Mansilla
Sí.

0:45:57.459 --> 0:46:4.219
Juan Mansilla
Sí, para nosotros este modelo espacial tenemos las capacidades, pero sí no lo hemos podido implementar hasta el momento.

0:46:5.139 --> 0:46:18.819
Luis Acuña
Okay, y dado esa circunstancia, cómo plantean esta alternativa de solución, no de que va a ser un aprender para todos.

0:46:20.899 --> 0:46:41.379
Juan Mansilla
A ver, lo que es modelo empírico, no hay problema. Esa parte sí está bien coberturado por el equipo. Lo que es modelo espacial, o sea, sí tenemos la capacidad, lo que no hay es los datos ya. Y si hay una casuística ahí que sí está claro que sí, que si no la hemos visto, que es esto que comenta el 60% el nivel de la pila.

0:46:41.779 --> 0:46:52.659
Juan Mansilla
También no veo que sea tan replicable porque no lo he visto en otros lados. Eso sí habría que verlo, o sea, no, ahí está donde tendría una respuesta a eso, ¿no?

0:46:57.779 --> 0:47:17.259
Luis Acuña
Okay, bueno, o sea, independientemente de ya el tema de qué tan tanto se acerca a lo real y modelo. Básicamente me refería, pues, a hacia la propuesta comercial de la alternativa, no o sea.

0:47:15.699 --> 0:47:15.979
Juan Mansilla
Mhm.

0:47:17.459 --> 0:47:24.659
Luis Acuña
¿Más que este a priori, decir cuán cuán certero es el modelo, no?

0:47:26.899 --> 0:47:37.619
Juan Mansilla
Sí, eso lo podemos ver ahí con Frank, con el equipo comercial, ya lo podemos revisar al interno y ahí lo podemos hacer llegar, ¿no?

0:47:44.339 --> 0:47:47.939
Frank Echegaray
Sí, por nuestra parte no ningún problema de revisarlo, ahí este Luis.

0:47:44.819 --> 0:47:45.739
Luis Acuña
Sí, gracias.

0:47:52.739 --> 0:48:12.19
Denis Zamalloa
para que apuntes y lo tengas en cuenta también vas a necesitar información nuestra sobre el material que retorna la planta al ser stoppail es material fino y también en algunas situaciones de mantenimientos en molinos retorna pebles dos veces al año por lo menos 72 mil toneladas

0:47:53.539 --> 0:47:54.219
Luis Acuña
Así es.

0:47:54.979 --> 0:47:55.459
Juan Mansilla
Sí.

0:48:2.59 --> 0:48:2.499
Juan Mansilla
Sí.

0:48:3.619 --> 0:48:3.699
Juan Mansilla
Uh-huh.

0:48:12.619 --> 0:48:19.899
Denis Zamalloa
En otras ocasiones a un turno que son 36000 t, eso seguramente es importante demostarlo.

0:48:21.59 --> 0:48:26.19
Juan Mansilla
Ah okay okay finos pebles 72 K retroalimentación

0:48:29.619 --> 0:48:32.739
Juan Mansilla
Ya, sí, hay esos puntos de cheque.

0:48:36.819 --> 0:48:41.19
Juan Mansilla
¿Ese porcentaje de fino, cada cuánto es? Discúlpame, igual es una vez al año.

0:48:41.539 --> 0:48:47.59
Denis Zamalloa
No, eso es diario, pero no es mucho, igual es que en el tiempo sí suma, ¿no?

0:48:48.539 --> 0:48:53.899
Juan Mansilla
Claro, claro, aproximadamente, ¿qué porcentaje es o to heladas son?

0:48:55.299 --> 0:49:0.699
Denis Zamalloa
Aproximadamente a ver por más o menos unos.

0:49:2.499 --> 0:49:5.179
Denis Zamalloa
Unas 40 t diarias aproximadamente.

0:49:6.179 --> 0:49:6.659
Juan Mansilla
Oh, yeah.

0:49:8.259 --> 0:49:8.859
Juan Mansilla
Yeah.

0:49:8.339 --> 0:49:9.619
Denis Zamalloa
O tal vez un poco menos.

0:49:10.859 --> 0:49:11.859
Denis Zamalloa
Don't exist.

0:49:12.899 --> 0:49:17.579
Juan Mansilla
Ya está bien, está bien, hay acá lo apuntado para tenerlo claro.

0:49:28.259 --> 0:49:43.99
Juan Mansilla
No sé si tienen alguna otra consulta, yo puedo hacer los ajustes a la propuesta técnica con lo que hemos comentado y se las puedo hacer llegar y ver el punto levantado por Luis también ahí con Frank.

0:49:47.379 --> 0:49:48.339
Luis Beltran
Correcto, Juan.

0:49:52.259 --> 0:49:55.779
Luis Beltran
Ahí indicas 12 semanas para el desarrollo.

0:49:56.419 --> 0:49:56.899
Juan Mansilla
Sí.

0:49:57.779 --> 0:49:58.299
Luis Beltran
Correcto.

0:49:58.899 --> 0:49:59.339
Juan Mansilla
Sí.

0:50:1.59 --> 0:50:20.419
Juan Mansilla
Sí, para nosotros son 12 semanas porque ya venimos, ya conocemos, aparte ya hay infraestructura ya desplegada, ¿no? Entonces no habría mucho inconveniente ahí en algunas otras solicitudes, no, realmente es subir los motores y más que nada es yo creo que el trabajo más fuerte es la validación.

0:50:22.659 --> 0:50:23.139
Luis Beltran
Lista.

0:50:32.819 --> 0:50:33.259
Luis Beltran
Correct.

0:50:37.139 --> 0:50:37.459
Luis Beltran
B.

0:50:37.499 --> 0:50:56.379
Juan Mansilla
Me faltó, Luis. ¿Cómo van a querer consumir el resultado del modelo? Nosotros lo dejamos una vista, una API. ¿Cómo lo quieren consumir esos datos? Porque, como comentaba, el modelamiento de pila es un puente, no? Entonces.

0:50:37.539 --> 0:50:37.659
Luis Beltran
You?

0:50:41.939 --> 0:50:43.899
Luis Beltran
I want to find it.

0:50:47.659 --> 0:50:47.939
Luis Beltran
Yo.

0:50:52.939 --> 0:50:53.219
Luis Beltran
Si.

0:50:56.819 --> 0:51:12.19
Juan Mansilla
si van a necesitar para seguramente para otros proyectos o para otros trabajos, eso sí sería bueno que de repente me lo digan, de repente no ahora, pero sí el transcurso del día porque sí va a ser importante tenerlo claro, ¿no?

0:51:6.339 --> 0:51:6.659
Luis Beltran
Yeah.

0:51:13.299 --> 0:51:13.619
Luis Beltran
Hope.

0:51:15.139 --> 0:51:34.219
Luis Beltran
Ahí, Juan, es correcto. Mira del archivo que tú nos envíes con los requerimientos de señales para nosotros hacer el check correcto. Igual también nos dices en detalle qué salidas vamos a obtener. Preliminarmente entendemos, pero igual para formalizarlo nos indicas toda la relación de lista.

0:51:16.779 --> 0:51:17.59
Juan Mansilla
Mhm.

0:51:20.19 --> 0:51:20.259
Juan Mansilla
Hmm.

0:51:31.699 --> 0:51:32.179
Juan Mansilla
Sí.

0:51:34.299 --> 0:51:47.659
Luis Beltran
De señales, disculpen, entonces nosotros a cada señal vamos a ver cómo las vamos a consumir preliminarmente. Hay varios datos que, como bien indicas, tendría que ser un consumo que nos dé la facilidad de exportarle.

0:51:40.579 --> 0:51:41.139
Juan Mansilla
Yeah.

0:51:48.979 --> 0:51:49.859
Juan Mansilla
sí.

0:51:49.379 --> 0:52:2.819
Luis Beltran
Eso de hecho, eso sí, ya de ahí como lo presentamos dentro del de toda la plataforma del ecosistema del gemelo, ahí habría que aterrizar un poquito más. ¿Con qué tipo de gráficos de esas cosas?

0:52:3.459 --> 0:52:9.819
Juan Mansilla
Sí, eso no hay problema, ya está bien, voy a trabajar en eso de la lista y se los comparto.

0:52:10.739 --> 0:52:11.739
Luis Beltran
Okey, gracias.

0:52:12.899 --> 0:52:14.499
Juan Mansilla
Muchas gracias a todos.

0:52:16.19 --> 0:52:17.539
Luis Beltran
O K, muchas gracias, buen día.

0:52:17.419 --> 0:52:19.219
Frank Echegaray
Muchas gracias, bienvenida.

0:52:19.139 --> 0:52:19.659
Juan Mansilla
So.

0:52:19.219 --> 0:52:20.99
Luis Acuña
Yes, yes.

0:52:20.819 --> 0:52:21.699
Javier Espinoza
Hola, hasta luego.