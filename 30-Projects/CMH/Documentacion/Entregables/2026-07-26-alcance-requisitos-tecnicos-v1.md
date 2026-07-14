---
fecha: 2026-07-26
tipo: entregable
proyecto: CMH
fuente: ASTAY Systems
tags: [cmh]
---

# Definición de Alcance y Requisitos Técnicos
### Nexo 360 Operation + Mantenimiento 360 — Consorcio Minero Horizonte (CMH), Unidad Parcoy

**Preparado por:** ASTAY Systems
**Fecha:** 26 de julio de 2026
**Para:** Equipo de Tecnología y Transformación Digital de CMH

---

## Objetivo de este documento

Con base en el documento de requerimientos recibido, este documento consolida las preguntas y temas necesarios para terminar de definir el alcance y los requisitos técnicos del proyecto, de cara a la reunión técnica de levantamiento. Estructura la conversación en tres partes:

1. **Antecedentes y estado de avance** — para entender qué tan avanzada está la definición interna de cada módulo y qué material ya existe.
2. **Preguntas técnicas prioritarias** — decisiones puntuales que condicionan directamente el diseño de la solución.
3. **Ejes de levantamiento funcional y técnico** — el detalle necesario, organizado por dominio, para dimensionar correctamente el proyecto.

No es necesario responder todo por escrito antes de la reunión: sirve como agenda de trabajo conjunta.

---

## 1. Antecedentes y estado de avance

### 1.1 Material de referencia existente

- ¿Existe un documento de alcance o especificación más detallada, del cual el requerimiento recibido sea un resumen?
- ¿Hay mockups, wireframes o prototipos — aunque sean internos o de baja fidelidad — de alguno de los dos bloques?
- ¿CMH evaluó o descartó alguna solución de mercado antes de optar por desarrollo a medida? ¿Qué brecha encontraron?
- ¿Existe ya un mapa del proceso actual (as-is) de cambio de guardia y de mantenimiento, o se levantaría por primera vez en la reunión técnica?
- ¿Hay benchmarks, informes o visitas a otras operaciones que hayan influido en la definición de este alcance?

### 1.2 Estado de avance por módulo

Para cada funcionalidad, nos ayudaría saber si está en fase de **idea**, ya **diseñada conceptualmente**, tiene un **piloto en curso**, o ya existe una **versión interna** (Excel avanzado, macro, sistema propio) que hoy cumple parcialmente esa función.

**Bloque A — Nexo 360 Operation**

| Funcionalidad | Estado actual |
|---|---|
| Gestión de planes (mensual/semanal/diario/guardia) | |
| Estado de frentes y maestro de labores | |
| Maestros de personal y cuadrillas | |
| Motor de asignación y turnos | |
| Órdenes de Trabajo (OT) e impresión masiva | |
| Seguimiento intraturno (SIC) y reprogramación | |
| Cierre de guardia estructurado | |

**Bloque B — Mantenimiento 360**

| Funcionalidad | Estado actual |
|---|---|
| Maestro e historial de equipos | |
| Disponibilidad dinámica de equipos | |
| Planes preventivos, correctivos y backlog | |
| Ubicación de equipos | |

### 1.3 Antecedentes del proyecto

- ¿Hace cuánto tiempo viene trabajándose esta definición dentro de CMH?
- ¿Qué área lideró la redacción del documento de requerimientos (TI, mantenimiento, planificación mina, u otra)?
- ¿Existe actualmente un equipo interno (propio o de otro proveedor) desarrollando o habiendo desarrollado algo de esto?
- ¿"Nexo 360 Operation" y "Mantenimiento 360" corresponden a una iniciativa o producto ya existente en CMH, o son los nombres definidos para este proyecto?

---

## 2. Preguntas técnicas prioritarias

### Integración SAP (PM/MM)

- ¿Versión de SAP en uso — ECC o S/4HANA?
- ¿Qué transacciones/objetos de PM y MM entran en el alcance (avisos, órdenes de mantenimiento, backlog de repuestos)?
- ¿Mecanismo de integración definido por TI de CMH: archivos planos, tablas de staging, o API REST?

### Seguridad y estándar TTD-ES-001

- ¿Podrían compartir el documento completo del estándar TTD-ES-001?
- ¿El SSO con Microsoft Entra ID debe federar también a los contratistas principales, o solo a personal CMH?

### Capacidad offline

- ¿Duración típica y peor caso de desconexión en interior mina?
- ¿Qué política se espera ante un conflicto de datos al sincronizar (último cambio prevalece, resolución manual, u otra)?

### Motor de asignación (Bloque A)

- ¿Se espera un motor basado en reglas explícitas, o algún grado de optimización automática?
- ¿Es viable un primer alcance con disponibilidad de equipos ingresada manualmente, antes de integrar Mantenimiento 360 en tiempo real?

### Datos e histórico

- ¿Tiempo de retención requerido para el histórico de guardias? ¿Existe un SLA de disponibilidad ya definido?

---

## 3. Ejes de levantamiento funcional y técnico

Para dimensionar correctamente el proyecto, proponemos profundizar en los siguientes ejes durante la reunión técnica (pueden trabajarse en más de una sesión, con los responsables correspondientes de cada área):

### 3.1 Proceso operativo actual — Bloque A
Flujo completo del cambio de guardia, formatos y medios actuales, puntos de dolor identificados, y excepciones frecuentes al flujo estándar (turnos especiales, paradas, emergencias).

### 3.2 Proceso operativo actual — Bloque B
Proceso actual de registro de disponibilidad de equipos, programación preventiva/correctiva y backlog de repuestos, y relación actual con contratistas de flota para el reporte de estado de equipos.

### 3.3 Usuarios, roles y gobierno
Matriz de roles y permisos esperados, diferenciación de acceso/datos por contratista, y propietario funcional del dato en cada bloque.

### 3.4 Datos maestros y modelo de datos
Estructura y jerarquía del maestro de labores/frentes, maestro de equipos y flota (y sistema de origen, si existe), catálogo de habilidades del personal, y volumen/frecuencia de actualización de cada maestro.

### 3.5 Reglas de negocio y lógica de asignación
Prioridades de asignación cuando compiten labores por el mismo recurso, reglas de seguridad que bloquean una asignación (ej. competencia vencida, equipo no habilitado), y reglas de reprogramación en caliente durante el turno.

### 3.6 Integraciones
Otros sistemas de la transformación digital de CMH con los que deba integrarse a futuro, además de SAP y Entra ID.

### 3.7 Infraestructura, entornos y despliegue
Ambiente de despliegue definitivo (nube privada, nube pública autorizada, on-premise), estándares de separación Dev/QA-UAT/Producción, y condiciones de red en salas de control (COM) frente a interior mina.

### 3.8 Seguridad, cumplimiento y auditoría
Nivel de detalle exigido en logs de auditoría transaccional, y proceso de gestión de vulnerabilidades / pentesting exigido antes de pasar a producción.

### 3.9 Conectividad y operación offline
Estado del proyecto de conectividad Wi-Fi de CMH (cronograma y cobertura esperada por zona), y dispositivos/navegadores objetivo en campo.

### 3.10 Reportes, KPIs y tableros de gestión
KPIs específicos esperados por rol, volumen y ventana de tiempo esperados para la impresión masiva de OTs, y necesidad de dashboards en tiempo real frente a consolidados por guardia/día.

### 3.11 Soporte, mantenimiento y evolución
Modelo de soporte esperado post-implementación, expectativa de evolución hacia otras unidades de CMH además de Parcoy, y equipo interno que dará mantenimiento o gobernanza al sistema a futuro.

### 3.12 Criterios de éxito y aceptación
Definición de éxito del proyecto desde la óptica de CMH, y criterios de aceptación por bloque y por fase, si el proyecto se entrega por etapas.

### 3.13 Restricciones de proyecto
Presupuesto de referencia o rango esperado, fecha límite u horizonte esperado de implementación, y modalidad contractual esperada (customización vs. servicio especializado).

---

## Próximos pasos

1. Coordinar la(s) sesión(es) de reunión técnica, idealmente separadas por dominio (proceso operativo, datos y reglas de negocio, arquitectura e integraciones, seguridad y conectividad, gestión y cierre) para convocar a los responsables correctos en cada una.
2. ASTAY preparará la propuesta de alto nivel / orden de magnitud una vez completado este levantamiento.

---

*Documento preparado por ASTAY Systems para Consorcio Minero Horizonte (CMH).*
