---
fecha: 2026-05-26
tipo: reunion
proyecto: Modelamiento-Pila
participantes:
  - Juan Mansilla (ASTAY)
  - Frank Echegaray (ASTAY)
  - Luis Beltran (Las Bambas)
  - Denis Zamalloa (Las Bambas)
  - Luis Acuña (Las Bambas)
  - Ricardo Marquez (Las Bambas)
  - Javier Espinoza (Las Bambas)
modalidad: videollamada
duracion_min: 52
tags: [lasbambas, modelamiento-pila]
---

# Reunión — 2026-05-26 — Kickoff presentación propuesta Modelamiento de Pila

**Proyecto:** Modelamiento-Pila  
**Participantes:** Juan Mansilla, Frank Echegaray (ASTAY) · Luis Beltran, Denis Zamalloa, Luis Acuña, Ricardo Marquez, Javier Espinoza (Las Bambas)  
**Modalidad:** Videollamada

---

## Contexto

ASTAY presentó la propuesta técnica del sistema de Modelamiento Dinámico de Pila OS (Modelo Ligero + Modelo Espacial) al equipo técnico y operacional de Las Bambas. El objetivo fue explicar el alcance, la arquitectura de dos modelos y el cronograma de 12 semanas, y recoger feedback técnico del cliente antes de actualizar la propuesta.

---

## Temas tratados

### 1. Presentación del sistema ML + ME

Juan presentó la propuesta: dos modelos complementarios (Modelo Ligero y Modelo Espacial 2.5D) que operan sobre la infraestructura On-Premise del Gemelo Digital ya existente. El ML opera en tiempo cuasi-real con micro-batches (5–30 min); el ME es pesado y se ejecuta bajo demanda cuando hay información topográfica disponible. El ME calibra al ML. La precisión esperada es >80% con ML solo y ~90% con ML + ME calibrado.

### 2. Consultas técnicas de Luis Beltran

- **Frecuencia del modelo espacial:** aclarado que ME no se actualiza de forma continua — necesita input topográfico. Las Bambas realiza levantamientos cada 15 días, ese es el insumo para recalibrar.
- **Visualización 3D:** posible consultar el estado estimado de la pila en cualquier momento (vía modelo simplificado); no es una representación en tiempo real derivada del ME.
- **Granulometría:** Las Bambas tiene split online por feeder (P80/P20). Ese dato puede alimentar el tracking de granulometría en el modelo.
- **Lista de señales:** Luis solicitó que ASTAY envíe la lista de tags PI requeridos para que Las Bambas valide disponibilidad.
- **Lista de salidas:** Luis solicitó también el listado completo de outputs del sistema para definir cómo integrarlos al ecosistema del Gemelo Digital.

### 3. Restricción operacional crítica — uso de tractores (Ricardo Marquez + Denis Zamalloa)

Ricardo compartió imagen de la distribución física de los 8 feeders (4 para SAG 1, 4 para SAG 2, pegados al muro de concreto). Identificó una condición operacional particular:

- **Por encima del 60% de nivel:** ambos SAGs reciben mineral fresco desde el cono natural de descarga.
- **Por debajo del 60% de nivel:** el SAG 2 no recibe mineral fresco naturalmente; se requieren tractores para empujar material hacia sus alimentadores.

Denis indicó que el uso de tractores puede alcanzar hasta **18–20% del tiempo operativo** (relacionado con la disponibilidad del circuito de chancado primario, ~25% de indisponibilidad). Juan había asumido <5%, lo cual es incorrecto para Las Bambas. Este punto impacta la precisión del modelo y requiere replanteo técnico.

Denis también informó sobre materiales que retornan a la pila desde planta:
- **Finos diarios:** ~40 t/día aproximadamente (retorno desde planta)
- **Pebbles:** ~72,000 t (dos veces al año) o ~36,000 t/turno en mantenimientos de molinos

Ambos flujos de retorno deben ser modelados como entradas adicionales al sistema.

### 4. Consulta sobre referencias e implementaciones previas (Luis Acuña)

Luis Acuña preguntó si el sistema ha sido implementado en otras operaciones. Juan confirmó:
- **Modelo empírico (ML):** sí, implementado en 2 minas. Hay experiencia.
- **Modelo Espacial (ME):** no ha sido implementado aún. Las Bambas sería la primera operación. La limitante histórica ha sido la falta de datos topográficos de la pila en otras operaciones.

Luis Acuña señaló que esto convierte el ME en una propuesta pionera y solicitó que la propuesta comercial lo refleje adecuadamente. Frank Echegaray tomó el punto para revisión interna.

### 5. Infraestructura disponible en Gemelo

Juan aclaró que la infraestructura existente del Gemelo ya incluye servidor con tarjeta gráfica (solicitada en su momento), adecuada para correr el ME bajo demanda sin afectar el resto del sistema.

---

## Decisiones tomadas

| Decisión | Responsable | Fecha compromiso |
|----------|-------------|-----------------|
| ASTAY envía lista de señales PI requeridas | Juan Mansilla | A definir |
| ASTAY envía lista de outputs del sistema | Juan Mansilla | A definir |
| ASTAY actualiza propuesta técnica incorporando feedback de reunión | Juan Mansilla | A definir |
| Revisión de propuesta comercial considerando naturaleza pionera del ME | Frank Echegaray | A definir |
| Las Bambas revisa CCTV para analizar comportamiento operacional de tractores | Luis Beltran | A definir |

---

## Preguntas abiertas / pendientes del cliente

- ¿Cómo quieren consumir los outputs del sistema? (API, integración al dashboard del Gemelo, exportación) — pendiente confirmar con Luis Beltran
- ¿Cómo se tipificarán los eventos de empuje con tractor para reducir su impacto en el modelo?
- ¿Es posible acceder a registros históricos de niveles y disponibilidad del chancado para cuantificar la frecuencia real de uso de tractores?
- ¿Qué tan frecuente es el cambio de dirección de apilamiento según nivel del stock?

---

## Citas textuales relevantes

> "Cuando tenemos menos del 60% del nivel, prácticamente no tenemos mineral fresco en la alimentación al SAG 2. Acá tenemos bastantes tractores parados con estos niveles bajos." — Ricardo Marquez, Las Bambas

> "Entiendo que con el modelo espacial estaríamos siendo pioneros al tratar de plantearlo con ustedes." — Luis Acuña, Las Bambas

> "El modelo espacial, la mayoría de minas no tiene información de su pila. Es por eso que el modelo espacial es algo que no tenemos implementado en ningún lado." — Juan Mansilla, ASTAY

---

## Hallazgos técnicos clave para actualizar la propuesta

| Hallazgo | Impacto en propuesta |
|----------|---------------------|
| Uso de tractores: ~20% del tiempo (no <5% asumido) | Revisar precisión del ML en eventos de empuje; agregar como casuística de Discovery; evaluar tipificación de escenarios |
| Geometría de feeders: 4 para SAG 1, 4 para SAG 2 pegados al muro; comportamiento distinto según nivel | Incorporar en modelo la lógica de distribución por feeder según nivel de pila |
| Umbral operacional: 60% de nivel divide modo "flujo natural" vs. "requiere tractor" | Modelar explícitamente como régimen operativo diferenciado |
| Retorno de finos: ~40 t/día diarias | Agregar como flujo de entrada adicional al balance de masa |
| Retorno de pebbles: ~72,000 t (2×/año) o 36,000 t/turno | Modelar como evento periódico de entrada especial al sistema |
| ME no tiene implementación previa — es desarrollo pionero | Ajustar propuesta comercial para reflejar naturaleza exploratoria del ME |
| Infraestructura Gemelo ya cuenta con GPU | Confirmar que el ME puede desplegarse sin hardware adicional |

---

## Acciones siguientes

- [x] Preparar y enviar lista de señales PI requeridas — responsable: Juan Mansilla #lasbambas ⏫ 📅 2026-05-30 ✅ 2026-06-04
- [x] Preparar y enviar lista de outputs del sistema — responsable: Juan Mansilla #lasbambas ⏫ 📅 2026-05-30 ✅ 2026-06-04
- [ ] Actualizar propuesta técnica incorporando hallazgos de la reunión — responsable: Juan Mansilla 📅 2026-06-06 🔺 #lasbambas
- [ ] Revisar propuesta comercial (ME pionero) — responsable: Frank Echegaray 📅 2026-06-06 🔼 #lasbambas

---
*Transcripción original: `26MAY26_Sesion.md` (archivo VTT bruto — conservar por referencia)*
