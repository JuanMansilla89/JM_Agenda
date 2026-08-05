---
fecha: 2026-08-03
tipo: comunicacion
subtipo: borrador-saliente
proyecto: BHP_Aster
remitente: "ASTAY Systems (Juan Mansilla)"
destinatarios: [Equipo Technology / Ciberseguridad / Arquitectura — BHP Escondida]
canal: email
tags: [bhp-aster, ciberseguridad, moc, preguntas]
---

# Preguntas y puntos a comunicar a BHP — Piloto DataTwin (Ciberseguridad, Arquitectura y MoC)

**Proyecto:** BHP_Aster
**Canal:** email / reunión técnica
**De:** ASTAY Systems
**Para:** equipo de Technology / Ciberseguridad / Arquitectura de BHP Escondida
**Asunto:** Alineamiento técnico y de ciberseguridad para el piloto del Gemelo Digital DataTwin

---

## Puntos que ASTAY debe comunicar a BHP

1. **Naturaleza de piloto.** Entendemos y confirmamos que esta es una **prueba piloto** acotada (una flota/fase/corredor), no un despliegue productivo — lo que debería encuadrar en la ruta de menor exigencia dentro del proceso MoC, sujeto a la clasificación que BHP determine.

2. **Flexibilidad en el modelo de integración.** ASTAY puede implementar la solución de dos formas, según lo que BHP prefiera:
   - **Tiempo real**, con conexión activa a las fuentes de datos del cliente (p. ej. Módular) para recomendaciones en vivo al CIO; o
   - **Desacoplada / asíncrona**, operando sobre extractos periódicos de datos (batch), sin conexión directa y continua a los sistemas productivos, si BHP prefiere minimizar el acoplamiento durante el piloto.

3. **Despliegue dentro de la red de BHP.** ASTAY puede desplegar la aplicación completa **dentro de la red y perímetro de seguridad de BHP** (on-premise / infraestructura del cliente), y no exclusivamente en la nube de ASTAY — lo que puede simplificar el cumplimiento de los requerimientos de segregación TI/TO y acceso remoto del Estándar Global.

---

## Preguntas

### A. Proceso MoC y validación tecnológica

1. ¿Existe ya una demanda tecnológica registrada en ServiceNow para este piloto? Si no, ¿quién debe iniciarla — ASTAY o BHP?
2. ¿Qué SME de Technology Escondida, Panel de Arquitectura y Ciberseguridad serán nuestra contraparte técnica?
3. ¿DataTwin será clasificado como una **nueva solución tecnológica** o como uso de un **sistema/integración existente**?
4. Si se clasifica como nueva solución, ¿cuál es el criterio y la escala que BHP usa para calificarla como de **bajo riesgo y complejidad** (ruta LEAP) frente a la ruta AAR/TSA?

### B. Documentos y evaluaciones aplicables

5. De la siguiente lista, ¿cuáles son obligatorios para este piloto: **TSA, TPCRM, CIA Assessment, DPIA, AISA, HLD, LLD**?
6. ¿Quién debe prepararlos — ASTAY, BHP, o de forma conjunta — y quién los aprueba?
7. ¿BHP puede compartir plantillas o formatos oficiales para estos documentos?
8. Para efectos de TPCRM, ¿la relación con ASTAY (vía el proceso Open Aster) se clasifica como **proveedor nuevo o existente**, y bajo qué modalidad contractual/RFX?

### C. Arquitectura de integración y despliegue

9. Dado que podemos operar en tiempo real o de forma desacoplada (ver punto 2 arriba), ¿cuál modelo prefiere BHP para este piloto?
10. Dado que podemos desplegar la aplicación dentro de la red de BHP (ver punto 3 arriba), ¿es esta la modalidad preferida o exigida? ¿Qué necesitaríamos de parte de BHP para habilitarlo (accesos, servidores, credenciales, aprobaciones)?
11. Si se despliega dentro de la red de BHP, ¿el entorno correspondiente se clasifica como TI, TO o ambos?
12. ¿Qué método de acceso remoto debe usar el equipo ASTAY para soporte y monitoreo durante el piloto (confirmamos LTE privado por el Q&A previo) — y está ya aprobado por la Función de Tecnología?
13. ¿DataTwin debe operar sobre la infraestructura cloud de BHP (Microsoft + AWS) o la infraestructura puede ser provista y gestionada por ASTAY dentro de la red del cliente?

### D. Datos

14. ¿Qué acceso específico tendrá DataTwin sobre Módular — a qué tablas, vistas o API (confirmamos que será solo lectura)?
15. ¿Cuál es la clasificación de sensibilidad/confidencialidad esperada para estos datos, de cara a la calificación CIA?

---

## Requiere respuesta o acción

- [ ] Enviar a BHP 📅 2026-08-03
- [ ] Dar seguimiento si no hay respuesta en 5 días hábiles 📅 2026-08-10

---
*Archivo: `Documentacion/Comunicaciones/` del proyecto BHP_Aster — basado en el análisis de `Documentacion/Referencias/Ciberseguridad/ASTAY_Revisión_1.md`*
