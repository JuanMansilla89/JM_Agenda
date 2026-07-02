---
fecha: 2026-06-28
tipo: comunicacion
subtipo: formulario-preguntas
proyecto: BHP_Aster
remitente: ASTAY Systems
destinatarios: [Open Aster, BHP Escondida]
canal: formulario-web
tags: [bhp-aster, webinar, consultas-tecnicas, formulario]
---

# Consultas Técnicas — Formulario Previo Webinar Open Aster 2026

**Proyecto:** BHP_Aster
**Canal:** Formulario Open Aster — preguntas previas al Webinar
**De:** ASTAY Systems
**Para:** Open Aster / área usuaria Escondida | BHP
**Estado:** ⏳ Borrador — revisar antes de enviar

---

## Texto a enviar

---

### Consultas técnicas sobre el desafío "Smart Mine Traffic Management"

Con el objetivo de definir adecuadamente el alcance técnico del piloto, agradeceríamos poder aclarar los siguientes puntos:

---

#### 1. Alcance y objetivo del piloto

- ¿Cuál es el alcance esperado del piloto?
- ¿El piloto estará orientado únicamente a validar algoritmos y modelos analíticos, o se espera una solución operando sobre datos en tiempo real?
- ¿La evaluación se realizará utilizando información histórica provista por BHP (entorno de simulación), o se espera una integración con la operación en línea?

---

#### 2. Disponibilidad e integración de datos

Nuestra solución se basa en un Gemelo Digital que integra información operacional proveniente de los sistemas mina.

En el Q&A publicado se indica que el sistema Modular entrega datos principalmente en bases de datos relacionales y vistas de reportabilidad. En ese contexto, quisiéramos confirmar:

- ¿Se tendrá acceso a estas vistas o consultas directas a las bases de datos durante el piloto, o los datos serán entregados mediante extracciones periódicas coordinadas por BHP?
- ¿Existe algún mecanismo de integración en tiempo real o cercano al tiempo real habilitado sobre Modular (APIs, eventos, feeds) que pueda ser evaluado para el piloto, considerando que somos aleados tecnológicos de Modular?
- En caso de que dichas interfaces requieran coordinación con Modular, ¿BHP facilita ese proceso o ASTAY debe gestionarlo directamente?

---

#### 3. Información operacional disponible

Para que los modelos de optimización y recomendación puedan representar correctamente la operación, normalmente requerimos información como:

- Planes de corto plazo
- Estado y disponibilidad de equipos
- Ubicación y telemetría de flota
- Restricciones operacionales
- Información de carguío, descarga y rutas

Entendemos que gran parte de esta información estará disponible tras la firma del NDA. ¿Podrían confirmar cuáles de estos datos estarán disponibles durante el piloto y cuáles permanecerán restringidos incluso en esa etapa?

---

#### 4. Infraestructura de despliegue

Del Q&A publicado entendemos que el stack tecnológico corporativo de BHP es principalmente Microsoft Azure y AWS. En ese contexto:

- ¿La solución deberá desplegarse sobre infraestructura de BHP (Azure o AWS corporativo), o puede operar sobre infraestructura privada de ASTAY conectada mediante interfaces controladas durante la etapa piloto?
- ¿Existen lineamientos de arquitectura OT adicionales que debamos considerar desde esta etapa, más allá de los estándares de ciberseguridad OT de BHP ya mencionados (desacoplamiento, read-only, resiliencia)?

---

#### 5. Arquitectura de la solución

¿Se espera que durante esta fase presentemos una arquitectura de alto nivel (HLD) de la solución propuesta?

En caso afirmativo:

- ¿Cuál es el nivel de detalle esperado?
- ¿En qué etapa del proceso debe ser entregada (antes del webinar, durante la sesión con experto de pilotaje, o en el comité de selección)?

---

#### 6. Plazos del NDA y disponibilidad de información técnica

En las respuestas recibidas hasta el momento se menciona que parte de la información operacional y técnica será compartida una vez firmado el NDA. Dado que esta información es fundamental para dimensionar correctamente el piloto:

- ¿Cuándo estiman que el proceso de firma del NDA estará formalizado?
- ¿Qué información técnica y operacional estaría disponible inmediatamente tras la firma, y cuál requeriría etapas adicionales de validación?

---

#### 7. Contexto de nuestra propuesta

Nuestra propuesta se basa en un Gemelo Digital operacional que integra información proveniente de múltiples sistemas mina y utiliza técnicas de Inteligencia Artificial, Machine Learning y Reinforcement Learning para identificar patrones de congestión, evaluar escenarios y generar recomendaciones para optimizar el flujo de la flota CAEX.

Por ello, comprender el alcance del piloto y la disponibilidad de la información resulta fundamental para definir una arquitectura adecuada y estimar correctamente el esfuerzo de implementación.

---

## Notas de revisión — antes de enviar

> **Estos comentarios son internos — no forman parte del formulario.**

### Ajustes realizados respecto al borrador original

| Pregunta | Problema original | Ajuste aplicado |
|---------|------------------|-----------------|
| **2 — Integración de datos** | Preguntaba "¿qué fuentes estarán disponibles?" y si se puede acceder a APIs/WebSockets — BHP ya respondió que Módular entrega DBs relacionales y vistas, no raw real-time | Reformulada para reconocer la respuesta previa y preguntar específicamente por mecanismos de acceso (consultas directas vs. extracciones) y si existe algún canal near-real-time evaluable dado que ASTAY es partner de Modular |
| **3 — Información operacional** | Preguntaba "¿pueden confirmar qué estará disponible?" sin referenciar que ya se sabe que mucho está bajo NDA | Añadida frase que reconoce el NDA y acota la pregunta a qué datos estarán disponibles *durante* el piloto vs. qué permanece restringido incluso ahí |
| **4 — Infraestructura de despliegue** | Preguntaba "¿tienen preferencia por Azure, AWS u otra?" — BHP ya respondió que usan ambos (multi-cloud) | Reformulada para reconocer el stack ya conocido y preguntar específicamente sobre el modelo de despliegue piloto (BHP infra vs. ASTAY infra con interfaces controladas) y si hay lineamientos OT adicionales |

### Preguntas que abren territorio nuevo (alto valor)

- **P1 — Simulación vs. tiempo real:** no está respondida en el Q&A previo. Fundamental para la arquitectura.
- **P5 — HLD requerido:** completamente nueva. La respuesta define si ASTAY debe invertir en diagramas de arquitectura antes de la sesión o no.
- **P6 — Plazo del NDA:** el más crítico de todos. Sin fecha de NDA no se puede planificar el diseño del piloto.

### Pregunta 7 — consideración

El ítem 7 es un posicionamiento, no una pregunta. Funciona bien como cierre que contextualiza por qué las preguntas son relevantes. Podría fortalecerse mencionando explícitamente que la solución operará como **capa desacoplada y complementaria al Dispatch** (alineado con lo que BHP indicó que busca).

---
*Archivo: `30-Projects/BHP_Aster/Documentacion/Comunicaciones/`*
*Estado: borrador — revisar y enviar antes del webinar*
