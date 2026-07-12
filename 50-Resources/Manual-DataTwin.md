# Manual — Proyecto DataTwin

**Propósito:** Convenciones, estructura y flujos de trabajo específicos del proyecto DataTwin.
**Nota de proyecto:** `30-Projects/DataTwin/`
**Tag:** `#datatwin`

---

## Qué es DataTwin

Plataforma de gemelo digital para operaciones de flota en Quellaveco. Integra datos de posición GPS, estado de equipos, eventos operacionales y modelos de bloques. Stack principal: FastAPI, Kafka, Flink, dbt, PostgreSQL/PostGIS.

**Stakeholders clave:**
- **Duane** — revisiones de arquitectura, validación de esquemas, sign-off técnico
- **Jaime** — decisiones de acceso, ambientes, prioridades de negocio

---

## Estructura de notas en 30-Projects/DataTwin/

```
30-Projects/DataTwin/
  DataTwin.md              ← Nota principal (objetivo, ADRs, riesgos)
  ADR/                     ← Una nota por decision de arquitectura
  Esquemas/                ← Definiciones de datos: Avro, JSON Schema, DDL
  Reuniones/               ← Notas de reuniones con Duane/Jaime
```

Crea estas subcarpetas la primera vez que necesites el contenido.

---

## Convenciones de nomenclatura

### Archivos de decisiones (ADR)
```
ADR-001-estrategia-kafka-topics.md
ADR-002-schema-registry-avro.md
ADR-003-particionamiento-eventos.md
```
Formato: `ADR-NNN-slug.md`. El número es secuencial, nunca se reutiliza.

### Notas de reuniones
```
2026-05-18-sync-duane-arquitectura.md
2026-05-20-review-sprint-datatwin.md
```
Formato: `YYYY-MM-DD-participante-tema.md`

### Notas de esquemas
```
schema-gps-position-v1.md
schema-equipment-event-v2.md
```
Formato: `schema-entidad-version.md`

---

## Cómo agregar una tarea al proyecto

1. Añádela a `## Tareas activas` en `DataTwin.md` con syntax Tasks:
```
- [ ] Descripción 📅 2026-05-18 ⏫ #datatwin
```
2. Si la tarea es para hoy, créala también (o referénciala) en la Daily Note del día.
3. No dupliques: la tarea vive en un solo lugar — el proyecto o la Daily, no ambos con contenido divergente.

---

## Cómo documentar una decisión de arquitectura

Cuando Duane o tú toman una decisión técnica que cambiaría el diseño si se revirtiera:

1. Añade una fila a la tabla ADR en `DataTwin.md`:
```markdown
| 2026-05-18 | Usar Avro + Schema Registry | Compatibilidad con Kafka Connect | #decision ✅ |
```
2. Si la decisión es compleja (más de 2 opciones evaluadas), crea una nota ADR completa en `ADR/`.

**Regla:** Si lo discutiste con Duane y llegaron a una conclusión → documéntalo inmediatamente. La memoria de reunión dura 48h.

---

## Entornos y accesos

| Ambiente | Responsable de acceso | Cómo solicitar |
|----------|----------------------|----------------|
| Staging MineStar | Jaime | Ticket o mensaje directo |
| Prod DataTwin API | Jaime | Solo en emergencias |
| Dev local | Tú mismo | README del repo |
| Schema Registry dev | Tú mismo | Config en `.env` del repo |

---

## Qué va en el vault vs en el código

| Aquí (vault) | En el repo |
|-------------|-----------|
| Decisiones de diseño (por qué) | Implementación (cómo) |
| Contexto de reuniones | Documentación técnica de la API |
| Riesgos y trade-offs | Tests y schemas versionados |
| Links a PRs relevantes | El código de los PRs |

---

## Checklist para cerrar un workstream de DataTwin

- [ ] Todas las tareas activas cerradas o reubicadas en Tareas completadas
- [ ] Decisiones clave documentadas en tabla ADR
- [ ] Stakeholders notificados (Duane, Jaime)
- [ ] Esquemas finales documentados en `Esquemas/`
- [ ] PRs mergeados o cerrados con justificación

---

*Ver también: [[Manual-Proyectos]]*
