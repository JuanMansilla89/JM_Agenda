---
fecha: 2026-06-02
hora: "00:00"
tipo: reunion
proyecto: GNSS_Palas
participantes: [James, David Velazco, Juan Mansilla, Ignacio Uribe, Límeres, Yulisa]
modalidad: videollamada
duracion_min: 28
tags: [antamina, gnss, trazabilidad, kickoff]
---

# Reunión — 2026-06-02 — Kickoff GNSS Palas

**Proyecto:** [[GNSS_Palas]]
**Participantes:**
- **James (Erickson)** — Superintendente, Antamina (cliente)
- **David Velazco** — Líder tecnológico, Antamina
- **Juan Mansilla** — ASTAY Systems (líder)
- **Ignacio Uribe** — Gerente de Operaciones, ASTAY Systems
- **Ali Meres** — Líder Analítica, ASTAY Systems
- **Julisa** — Área Comercial, ASTAY Systems

**Modalidad:** Videollamada

---

## Contexto

Primera reunión de alineamiento entre ASTAY Systems y el equipo de Antamina (James + David Velazco) para definir el alcance del proyecto de evaluación del desempeño GPS de las palas. El proyecto se enmarca en la iniciativa mayor de **Trazabilidad de Antamina**, que busca integrar cuatro tecnologías que hoy operan en silos: sensores en palas, GeoScan en chancadora, sistema de despacho (Dispatch) y modelo dinámico de bloques.

Nota de contexto organizacional: Kim fue promovido a otra área; **Jorge Oviedo** asume la superintendencia de Trazabilidad. David Velazco continúa como líder tecnológico.

---

## Temas tratados

### 1. Visión del proyecto de Trazabilidad

El nuevo VP de Antamina tiene la visión de integrar todas las tecnologías que intervienen en el proceso minero: desde la interacción pala–modelo de bloques, el proceso de carguío y acarreo, hasta la lectura del GeoScan en la chancadora. Estas cuatro tecnologías ya existen en Antamina pero operan de forma independiente. El objetivo es que se retroalimenten cíclicamente (lo que lee la chancadora ajusta el modelo de bloques).

Tecnologías en scope de Trazabilidad:
- Sensores en palas (ore sorting)
- GeoScan en chancadora (lectura de ley y volumen)
- Dispatch / Provision / Modular Mining
- Py System (tags)
- Modelo dinámico de bloques y plan
- Stockpiles (pendiente desarrollo)

### 2. Alcance específico de GNSS_Palas

Dentro del proyecto de Trazabilidad, James lidera la evaluación del desempeño GPS de las palas. El requerimiento fue planteado a partir de una discrepancia detectada entre los datos del modelo de bloques y lo que reporta Provision.

**Cuatro dimensiones a evaluar:**

| Dimensión | Descripción | Estado actual |
|-----------|-------------|---------------|
| **Disponibilidad** | GPS operativo 24/7/365 | Desconocida — Provision reportó ~97% sin contexto histórico |
| **Visibilidad** | HDOP, PDOP, VDOP — calidad de señal | Datos en BD Komatsu, sin acceso directo aún |
| **Cobertura** | Precisión según posición en el tajo (fases altas vs. fondo) | No mapeada |
| **Confiabilidad mecánica** | Estado físico del hardware (antenas, sensores) | Sin protocolo formal |

**Precisión requerida por geología:** error de posición de la pala ≤ **50 cm** para que la baldada herede correctamente la posición respecto al frente de carguío.

**Modelos de pala:** 4100 y 4800. La 4800 tiene 2 antenas — el GPS registra el centroide del equipo y debe extrapolarse a la posición real de los dientes del balde.

**Dimensiones del modelo de bloques:** 20×20 m (general) / 5×5×15 m (frentes activos).

### 3. Modelo de colaboración ASTAY + Metatec

James propone un esquema de trabajo en conjunto entre dos empresas:
- **Mettatec** [https://mettatec.com/]: empresa peruana fabricante de GPS, certificada por la NOAA — evaluación técnica del hardware y acceso a la base de datos del receptor GPS
- **ASTAY Systems**: traducción de brechas técnicas a impacto de negocio minero (tonelaje, dilución, riesgo) — **líderes del proyecto**

Antamina quiere ser **agnóstico** respecto a Provision — no que el propio proveedor valide su hardware.

James ya tiene aprobación interna de su superintendencia y gerencia para esta iniciativa. El proyecto irá a **concurso (RFQ)**.

---

## Decisiones tomadas

| Decisión                                                                                              | Responsable   | Fecha compromiso     |
| ----------------------------------------------------------------------------------------------------- | ------------- | -------------------- |
| ASTAY lidera el proyecto como traductor de impacto de negocio; Mettatec como especialista técnico GPS | James / Juan  | 2026-06-02           |
| Próximo paso: reunión conjunta ASTAY + Mettatec + David Velazco antes de elaborar propuesta           | James         | Por definir          |
| Canal de comunicación directo James ↔ Juan Mansilla (no a través de Frank)                            | James         | 2026-06-02           |
| ASTAY prepara propuesta técnica con metodología después de la reunión con Metatec                     | Juan Mansilla | Post-reunión Metatec |

---

## Preguntas abiertas / pendientes del cliente

- ¿Cuándo puede James coordinar la reunión con Mettatec?
- ¿Cuándo estará lista la réplica de la base de datos Komatsu para que el equipo de David tenga acceso independiente?
- ¿Cuáles son exactamente los parámetros disponibles en la BD Komatsu? (James ya los solicitó a Modular — 6 parámetros, ~30 columnas incluyendo multiconstelación)
- ¿Qué variación estacional se ha observado en la disponibilidad GPS (época seca vs. lluvia)?
- ¿Hay registros de eventos de centilleo (scintillation) en Antamina?

---

## Citas textuales relevantes

> "Nosotros queremos ser agnósticos y que sea una empresa que evalúe el GPS. Después me imagino que si encontramos algo se puede extender el tema hacia camiones y otros equipos como los perforadores." — James, Antamina

> "Lo que se ha pedido es que definamos cuál es una precisión a la que se requiere, evaluar qué tenemos hoy con respecto a disponibilidad, confiabilidad y visibilidad... y cuál podría ser la hoja de ruta para reducir si es que encontráramos una brecha." — James, Antamina

> "Ustedes son los traductores de la brecha en términos de negocio. Los líderes son ustedes." — James, Antamina

---

## Acciones siguientes

- [ ] James coordina reunión conjunta ASTAY + Metatec + David Velazco 📅 2026-06-09 ⏫ #antamina #gnss
- [ ] Preparar internamente metodología preliminar y preguntas para la reunión con Metatec 📅 2026-06-07 ⏫ #antamina #gnss #arquitectura
- [ ] Actualizar propuesta técnica GNSS_Palas tras reunión con Metatec 📅 2026-06-16 🔼 #antamina #gnss

---
*Transcripción original: `Documentacion/Reuniones/02JUN26 Resumen ASTAY x Antamina GNSS Palas.txt`*
*Última actualización: 2026-06-02*
