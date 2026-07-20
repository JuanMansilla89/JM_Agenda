---
fecha: 2026-07-13
hora: 17:22
tipo: reunion
proyecto: Agnico_Eagle
participantes: [Juan Mansilla, Frank Echegaray, Julissa Mejia, Sergio Cisneros]
modalidad: videollamada
duracion_min: 39
tags: [agnico-eagle, gemelo-planta, comercial]
---

# Reunión — 2026-07-13 — Gemelo de Planta: alcance para presentación comercial (Agnico Eagle)

**Proyecto:** Agnico_Eagle
**Participantes:** Juan Mansilla, Frank Echegaray, Julissa Mejia, Sergio Cisneros (equipo comercial ASTAY)
**Modalidad:** videollamada

---

## Contexto

No existe carpeta de proyecto previa porque **esto no es una propuesta técnica** — es una **presentación comercial** que se debe enviar al cliente (ni siquiera hay reunión comercial agendada todavía). El pedido vino directamente del sponsor del cliente (Martín Esparza), quien quiere ver los alcances de ASTAY en plataformas de datos/fuentes de planta: visualización, KPIs, qué tan atractivo. Julissa convocó a Juan para dar contexto técnico antes de armar la presentación, para evitar ofrecer algo que luego en una reunión técnica resulte no existir.

**Cliente:** Agnico Eagle, operación **Pinos Altos** (México). ~90% subterránea, ~10% tajo abierto. Produce oro y plata (barras doré); molienda convencional + lixiviación en pilas (heap leach, con cianuro). El cliente quiere soluciones para subterránea y su relación con planta — el gemelo de mina/acarreo de DataTwin **no aplica** a esta operación (está pensado para acarreo en tajo abierto).

## Temas tratados

### 1. Por qué "Gemelo de Planta" es un servicio, no el mismo producto que DataTwin

- El gemelo de mina (DataTwin) funciona porque la operación de acarreo es relativamente simple de modelar (pala, camión, ciclos, congestión). Planta es fundamentalmente distinto: depende de la planta (flotación, lixiviación, chancado, molienda), es más complejo.
- El valor real de un "gemelo" debería venir de la capacidad predictiva (correr modelos, generar escenarios, anticipar costos/pérdidas, "best case") — no de la representación visual. Juan cita teoría de sistemas de control: un panel de control industrial "bien hecho" debería ser gris/blanco y solo destacar alertas (rojo/naranja), no ser vistoso — pero reconoce que el "look and feel" sí importa comercialmente (referencia: Quellaveco, donde el 3D genera adopción entre visitantes/gente de geotecnia).
- Lo que ASTAY tiene hoy para planta es mucho más limitado que el gemelo de mina: el proyecto de referencia con **Latinoamérica** (cliente existente) tomó **5 meses solo para modelar una planta**, con un sistema de alertas básico.

### 2. Limitaciones técnicas reales

- ASTAY **no tiene experiencia administrando sistemas industriales tipo PI (OSIsoft) u OPC UA** — si el cliente pide configurar esos sistemas directamente, ASTAY tendría que buscar a alguien externo que sepa; no es parte de su forma de trabajar (no van a intervenir infraestructura del cliente).
- Lo que sí se puede ofrecer: una **plataforma de integración de datos de planta** — gobierno de datos, disponibilidad de datos, sistema de alertas configurable (basado en tags/señales), reportabilidad de KPIs — sobre la cual, si el cliente lo quiere, se pueden montar modelos de IA (desgaste de bolas, consumo energético, modelamiento M2M, etc.).
- Modelos de IA para planta requieren conocimiento profundo de metalurgia/proceso — referencia: Antamina tiene ~19 modelos de IA corriendo en paralelo/serie para generar recomendaciones de configuración de equipos por campaña de procesamiento. Ese nivel lo hacen consultoras puras (McKenzie, Hatch) — ASTAY no compite ahí ni quiere posicionarse como consultora.
- Modelo de trabajo propuesto para esa capa de IA (si aplica): el cliente pone el experto de proceso/metalurgia, ASTAY pone el científico de datos — trabajo conjunto, no ASTAY asumiendo el conocimiento de dominio.

### 3. Estrategia comercial y de costos

- Propuesta de posicionamiento: una **plataforma abierta y customizable** ("gemelo customizable") donde el cliente puede conectar sus propias reglas/modelos/bots, con sistema de alertas por defecto y una representación atractiva (no necesariamente 3D — 2D bien hecho puede ser igual o más funcional y más barato).
- Sin ningún activo gráfico reutilizable: todo lo que existe hoy está bajo NDA de Quellaveco — no se puede reutilizar directamente. Hay que generar visuales nuevos (posiblemente imagen de planta generada con IA + elementos agregados).
- Riesgo de costos: un proyecto de mayor alcance (tipo lo que se comentó de "1000/lish", ~1.5-2 años) costaría 3-4 veces un gemelo de mina estándar — podría llegar a **~2,000,000 USD**. Juan es explícito: **entre más alto el ticket, menor la probabilidad de que se cierre la venta**.
- Decisión de enfoque: la presentación inicial debe ser **conceptual, sin números**, mostrando una plataforma base con capacidad de KPIs/alertas casi en tiempo real (condicionado a que el cliente trabaje con PI/OPC UA), dejando alcance adicional "según demanda" para una segunda conversación técnica — no comprometer alcance total ni cifras en esta etapa.

### 4. Próximos pasos acordados

- Entregable inmediato: presentación comercial corta (Frank pide 2-3 slides; Juan había pensado ~10, se acepta el formato corto) mostrando "capacity" — solo alcances, sin cifras.
- Meta interna: **esta semana, de cara al viernes** (el sponsor Martín Esparza sigue en Perú y regresa a México esta semana).
- El diseño/mockup visual lo trabaja Juan directamente, usando diseños existentes de su equipo.
- Después de enviar la presentación, se agendará una **segunda reunión técnica** con el cliente — ahí sí se suma al equipo técnico completo (Carlos María, posiblemente Luis, quien ya trabaja con Goldfield en modelos predictivos y tiene experiencia relacionada).
- Frank confirma que el contacto día a día seguirá siendo a través de Julissa/Sergio; el equipo técnico completo se suma recién cuando se confirme la reunión con el cliente.

## Decisiones tomadas

| Decisión | Responsable | Fecha compromiso |
|----------|-------------|-----------------|
| Posicionar "Gemelo de Planta" como servicio de plataforma de integración (gobierno de datos + alertas + KPIs), no como simulación/gemelo completo | Juan Mansilla | Vigente |
| No incluir cifras ni compromisos de alcance total en la presentación inicial — mantenerla conceptual | Juan Mansilla / Frank Echegaray | Aplica a la presentación de esta semana |
| Representación visual no necesariamente en 3D — evaluar 2D funcional por costo | Juan Mansilla | Se define al preparar el mockup |
| Presentación corta (2-3 slides) enfocada en "capacity", sin profundidad técnica | Frank Echegaray | 📅 2026-07-17 (viernes) |
| Segunda reunión técnica (con Carlos María y posiblemente Luis) se agenda después de enviar la presentación, no ahora | Frank Echegaray | Por confirmar tras respuesta del cliente |

## Preguntas abiertas / pendientes del cliente

- ¿Qué tan madura está la instrumentación de planta del cliente? (¿PI/historian activo o datos crudos sin usar, similar al caso de Las Bambas?)
- ¿El cliente trabaja con PI (OSIsoft) u OPC UA? — condiciona si se puede ofrecer "casi tiempo real".
- ¿Cuál es la capacidad real de inversión del cliente? — Juan pide indagar esto para calibrar el ticket antes de invertir más esfuerzo.
- Confirmar si Luis se suma al esfuerzo (Juan tiene reunión con él al día siguiente para decidirlo, dado su trabajo actual con Goldfield).
- Estructura real de planta del cliente (flotación + lixiviación) — mencionada por Juan como hipótesis, no confirmada por el cliente.

## Citas textuales relevantes

> "El gemelo de planta nosotros lo tenemos como servicio... mi percepción es que este proyecto ha salido gracias a que [el cliente] ya ha querido ver sus KPIs y tener un sistema de alertas ya visualmente atractivo. Y eso es complejo... el valor está mucho más en el feeling." — Juan Mansilla

> "No es nuestra forma de trabajar... configurar el PI, no hay, ya podemos conocer a alguien que sepa, pero no son personas dentro de esta planilla." — Juan Mansilla

> "Entre más lo deslumbremos, el problema va a ser el costo... busquemos el punto de equilibrio en que le genere un caso de éxito." — Juan Mansilla

> "Nos queda claro los alcances y las limitaciones que tiene este tipo de proyectos... la idea es tener una presentación máximo 2 o 3 slides donde mostremos el capacity." — Frank Echegaray

## Acciones siguientes

- [ ] Preparar presentación comercial corta (2-3 slides, solo "capacity", sin cifras) — responsable: @Frank-Echegaray / @Juan-Mansilla (diseño/mockup) 📅 2026-07-17
- [ ] Decidir si se suma a Luis al esfuerzo (reunión de Juan con Luis el 2026-07-14) — responsable: @Juan-Mansilla 📅 2026-07-14
- [ ] Confirmar con el cliente fecha para la segunda reunión (técnica), una vez enviada la presentación — responsable: @Frank-Echegaray
- [ ] Indagar capacidad real de inversión del cliente antes de la reunión técnica — responsable: @Frank-Echegaray / @Julissa-Mejia
- [ ] Archivar grabación y transcripción en la carpeta del proyecto — ✅ hecho (este archivo + transcripción en `Documentacion/Referencias/`)

---
*Archivo: `30-Projects/Agnico_Eagle/Documentacion/Reuniones/`*
*Fuente: transcripción completa en `Documentacion/Referencias/2026-07-13-transcripcion-reunion-gemelo-planta.md`*
