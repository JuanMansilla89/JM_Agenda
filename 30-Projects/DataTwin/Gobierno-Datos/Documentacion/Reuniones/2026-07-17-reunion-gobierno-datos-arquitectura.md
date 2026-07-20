---
fecha: 2026-07-17
hora: 15:04
tipo: reunion
proyecto: Gobierno-Datos
participantes: [Juan Mansilla, Elio Rodriguez, Wilber Torres, Pablo Quispe, Jose Tello]
modalidad: videollamada
duracion_min: 38
tags: [datatwin, gobierno-datos, arquitectura]
---

# Reunión — 2026-07-17 — Revisión de Arquitectura de Datos (Gobierno de Datos DataTwin)

**Proyecto:** DataTwin — Gobierno-Datos
**Participantes:** Juan Mansilla, Elio Rodriguez, Wilber Torres, Pablo Quispe, Jose Tello
**Modalidad:** videollamada

---

## Contexto

Seguimiento a un pedido que Juan había hecho a Elio ~1 semana antes: mapear el resto de funcionalidades del gemelo (más allá de lo ya revisado con Wilber). El objetivo declarado por Juan para toda esta línea de trabajo es "tener una gobernanza sobre y una claridad sobre la arquitectura de los datos del gemelo" — no solo documentar lo que existe, sino definir la arquitectura objetivo y estimar el esfuerzo de migración.

## Temas tratados

### 1. Estado de la migración de Mine Metrics (MyMetrics)

La gran mayoría de las métricas actuales de Mine Metrics son consultas SQL directas; solo ~10 métricas requieren procesamiento adicional (plots/pines). Wilber está migrando esto a una nueva arquitectura, con ~22 campos migrados hasta ahora (migración parcial, no completa).

### 2. Arquitectura en capas propuesta por Wilber

- **Espejo** de las bases de datos origen (ej. MineStar, Data Publish) — raw, tal cual está en la fuente.
- **Staging** — donde se hacen los mapeos/conversiones al **CDM** (Common Data Model): el modelo canónico común a todas las minas/clientes.
- **Marts** — reglas de negocio, cálculo de métricas, sobre el CDM ya canónico.
- **Serving** — vistas/queries de consumo final; no contiene tablas propias.
- Ventaja declarada: si una mina nueva se quiere adherir, solo cambia el mapeo en staging; Marts y Serving no cambian.
- Pablo está migrando el flujo que hoy consume Data Publish → Kafka → Unity, hacia una versión más genérica basada en la estructura de Wilber (antes era específico solo para Data Publish).

### 3. Debate real-time vs. microbatch (DBT vs. Data Capture/CDC)

- Elio preguntó si el espejo es único (todas las fuentes conglomeradas) o uno por fuente — **sin resolver**; Wilber ve viable cualquiera de las dos (un esquema único vs. un esquema por base de datos).
- El diseño actual con DBT tiene un delay de 10-20 minutos — no es tiempo real.
- Wilber y Pablo coinciden: DBT no es una opción viable si se busca tiempo real, porque el enfoque de tabla/SQL implica batch por naturaleza.
- Data Capture (CDC): cada insert/update/delete en la BD origen dispara un evento (recibido vía cola/Kafka), permitiendo reglas de filtrado y procesamiento por evento. Wilber confirma que es más eficiente que hacer "select" (polling) constante.
- Jose Tello señaló que, en la práctica, el mayor limitante para tiempo real en Mine Metrics es el propio origen: Quellaveco tiene 3-4 min de delay, Las Bambas ~7 min variable (a veces más) — por lo que un enfoque 100% tiempo real no sería tan útil para esas fuentes de todas formas.
- Conclusión de Juan: arquitectura **híbrida** — DBT/microbatch se mantiene para la mayoría de fuentes (ej. KPIs con tolerancia a delay), Data Capture se reserva para casos donde de verdad aporta (ej. GPS, que se actualiza cada 5-30 segundos en la fuente).

### 4. Fuentes de datos genéricas y restricciones de arquitectura

- Dos tipos de fuente, de forma genérica: **SQL** (Dispatch/sistemas de gestión de flota — SQL Server o PostgreSQL) y **GPS** (vía base de datos en algunos proveedores como Hexagon MineOps, vía API/webhook en otros como Modular).
- Restricción dura: **no se puede impactar las bases de producción del cliente** — antecedente de caídas de servidor en Las Bambas por sobrecarga, porque los proveedores dimensionan los servidores al mínimo necesario para su propio producto.
- Preferencia declarada: Data Capture donde sea posible (menor consumo que hacer consultas/select), consultas/vistas controladas para el resto, aceptando un delay de minutos.
- Complejidad de versiones: ej. Toquepala-Cuajone corre PostgreSQL v11 vs. v18 actual — el soporte de CDC puede variar según versión.
- Antapacay (próximo cliente) usará Dispatch vía WebSocket API y también vía base de datos — ambos canales a contemplar.
- La calidad de los datos GPS es mala en la mayoría de los casos (Juan estima ~95% en Las Bambas) — el curado de GPS que ya inició Wilber es un prerequisito antes de correr algoritmos adicionales (ej. análisis de velocidad, hecho por Pablo en Java, sin revisar aún con Wilber).
- El gemelo cruza información geoespacial (modelo de bloques), temporal (series de tiempo de planta) y relacional (Dispatch) — lo que ya construyó Leslie hace ese cruce completo, pero sin validación/documentación formal todavía.

### 5. Alcance del mapeo pendiente

- Juan exige mapeo del **100% de MyMetrics**, no un subconjunto — incluyendo **Forecasting** como consumidor (dependencia que no estaba mapeada: Forecasting usa fuentes/cálculos de MyMetrics directamente vía "select" sin validación formal, con riesgo de estar propagando datos de mala calidad del origen).
- Bryan (quien llevaba antes el mapeo a ClickUp) ya no está en el equipo — Elio asume esa responsabilidad.
- Juan pide una lista de actividades con nombre/alcance claro antes de que se cargue a ClickUp, y un cronograma de esfuerzo — reconoce que la estimación probablemente no se va a cumplir, pero necesita una referencia concreta (meta aspiracional mencionada: ~15 días) para poder responder qué tan rápido se puede insertar un cliente nuevo.

## Decisiones tomadas

| Decisión | Responsable | Fecha compromiso |
|----------|-------------|-----------------|
| Arquitectura en capas: espejo → staging (mapeo a CDM) → Marts → Serving | Wilber Torres | En desarrollo (~22 campos migrados) |
| Arquitectura híbrida: DBT/microbatch + Data Capture/CDC para fuentes de alta frecuencia (GPS) | Juan Mansilla / Wilber Torres / Pablo Quispe | Validar en sync Wilber-Pablo-José, 17/07 4pm |
| No impactar bases de producción del cliente | Juan Mansilla | Vigente, ya aplicado |
| Mapeo debe cubrir 100% de MyMetrics, incluyendo Forecasting | Juan Mansilla | Elio arma lista, reunión de validación mismo día |

## Preguntas abiertas / pendientes del cliente

- ¿El espejo es único (todas las fuentes conglomeradas) o uno por cada fuente? ¿Por esquema o por tabla?
- ¿Cómo funciona exactamente el espejo actual de Las Bambas (vista que el cliente deja disponible)? — Pablo tiene el detalle.
- ¿Cuánto se puede acercar a tiempo real con DBT/microbatch vs. cuánto realmente requiere CDC?
- ¿Wilber está tomando como fuente los datos de series de tiempo de planta que Leslie ha pedido apoyo?
- Estado real del análisis de velocidades (hecho por Pablo en Java) — sin revisar con Wilber.
- Estado del tema GPS con Oswaldo — pendiente de revisión directa por Juan.

## Citas textuales relevantes

> "El objetivo de todo esto... es primero tener una gobernanza sobre y una claridad sobre la arquitectura de los datos del gemelo." — Juan Mansilla

> "No podemos impactar a las bases de producción... para lo demás podemos hacer consultas con un pequeño delay, y de repente para ciertos KPIs trabajar con Data Capture... hagamos algo híbrido." — Juan Mansilla

> "Si es que queremos real time, DBT definitivamente no sería una opción." — Wilber Torres

> "El mayor limitante para poder hacer las métricas en tiempo real en Mine Metrics es el origen: Quellaveco tiene 3-4 minutos de delay y Bambas 7 minutos variable." — Jose Tello

> "Yo quiero tener claridad de nuestro lado, no quiero que ustedes asuman algo por defecto... necesito una visión completa de todo, es todo." — Juan Mansilla

## Acciones siguientes

- [ ] Mapear el 100% de los flujos actuales de Mine Metrics/MyMetrics, incluyendo Forecasting — responsable: @Elio-Rodriguez 📅 2026-07-17
- [ ] Sincronizar diseño del espejo (único vs. por fuente, esquema vs. tabla) — responsable: @Wilber-Torres 📅 2026-07-17 (reunión con Pablo y José, 4pm)
- [ ] Entregar cronograma/estimado de esfuerzo de la migración completa — responsable: @Elio-Rodriguez / @Wilber-Torres 📅 2026-07-24
- [ ] Revisar con Oswaldo el estado del tema GPS — responsable: @Juan-Mansilla 📅 2026-07-21
- [ ] Confirmar si la fuente de series de tiempo de planta que pide Leslie ya está contemplada — responsable: @Wilber-Torres 📅 2026-07-24
- [ ] Revisar con Pablo el estado del análisis de velocidades (Java) — responsable: @Wilber-Torres 📅 2026-07-24

---
*Archivo: `30-Projects/DataTwin/Gobierno-Datos/Documentacion/Reuniones/`*
*Fuente: grabación/transcripción en `40-Planning/03-Sesiones-Planning/Records/Revision_Arquitoria_Datos.md`*
