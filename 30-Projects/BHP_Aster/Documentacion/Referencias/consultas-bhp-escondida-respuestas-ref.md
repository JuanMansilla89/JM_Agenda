---
fecha: 2026-06-16
tipo: referencia
subtipo: qa-oficial
proyecto: BHP_Aster
fuente: Open Aster 2026 — BHP / Escondida
url: ""
tags: [bhp-aster, escondida, qa, tecnico, integracion, datos]
---

# Referencia — Q&A Oficial BHP Escondida — Open Aster 2026

**Proyecto:** BHP_Aster
**Fuente:** Open Aster 2026 — respuestas oficiales del área usuaria Escondida | BHP
**Tipo:** Q&A técnico-operacional oficial del desafío

---

## Resumen

Documento de respuestas oficiales de BHP/Escondida a consultas de postulantes del desafío "Gestión inteligente de tráfico mina". Contiene restricciones técnicas, arquitectura de datos, sistemas disponibles, alcance del piloto y condiciones de integración. Es el insumo técnico más relevante para estructurar la propuesta de piloto DataTwin.

---

## Hallazgos críticos para la propuesta

### Alcance del piloto — qué ataca

| Definición | Detalle |
|-----------|---------|
| **Foco principal** | Flota CAEX (camiones de alto tonelaje) — no vehículos livianos |
| **Fase inicial** | Flota definida de camiones en una fase/zona; luego escala al resto |
| **Meta aspiracional** | 20% de reducción en tiempos de conducción dentro de la mina |
| **Tipo de operación** | Rajo abierto (open pit) — **no hay túneles** |
| **Procesos a unificar** | Flujo de camiones CAEX en las distintas expansiones |

### Sistemas existentes

| Sistema | Estado | Relevancia para DataTwin |
|--------|--------|--------------------------|
| Módular (FMS) | En operación | Fuente principal de datos — entrega DBs relacionales y vistas de reportabilidad; datos históricos/agregados, no raw real-time |
| AHS (camiones autónomos) | En operación — sistema cerrado | No acepta inputs externos; no hay operador a bordo; si se requieren pantallas, las provee la startup |
| Dispatch / Control Mina | Activo | Gestiona rutas y prioridades; no está integrado como sistema único optimizado |
| Centro Integrado de Operaciones (CIO) | Activo — Centro de Control Remoto | **Receptor de las recomendaciones en tiempo real** |
| SAP | Corporativo | Mantenimiento, órdenes de trabajo, logística, reportabilidad |
| GPS vehículos livianos | Activo | Solo para seguridad — **no puede reutilizarse para tráfico** |
| Sistema de acceso a mina | Activo | Entradas geolocalizadas disponibles ✅ |

### Red de comunicaciones

| Aspecto | Detalle |
|---------|---------|
| Tecnología principal | **LTE privado** a lo largo de vías principales |
| Cobertura | No completamente uniforme en todo el trazado |
| Restricciones | No asumir conectividad continua ni latencia constante |
| Requisito de solución | **Mecanismos de resiliencia: procesamiento local + buffering** |
| Ciberseguridad | Estándar OT de BHP — controles, segregación de redes, gobierno tecnológico |

### Datos disponibles

| Dato | Disponibilidad | Condición |
|------|---------------|-----------|
| Datos operacionales Módular (posiciones, ciclos, estados) | Sí — DBs relacionales | Lectura, desacoplado, no raw real-time |
| Datos históricos para calibración de modelos | Sí | Requiere firma de NDA |
| Rutas en formato DXF/DWG | Existen pero no habilitados en fase inicial | Para finalistas, caso a caso |
| Reglas y procedimientos de tráfico mina | Sí | Requiere firma de NDA |
| Costo operacional por minuto de CAEX en espera | Confidencial | Requiere NDA |
| Rutinas operacionales y resultados de planificación | Sí | Requiere NDA |
| Número de movimientos por día | Confidencial | Requiere NDA (finalistas) |

### Integración técnica — restricciones clave

| Restricción | Detalle |
|-------------|---------|
| Sistemas de cabina CAEX | Cerrados — no reciben inputs externos por pantallas actuales |
| Camiones autónomos AHS | Sistema cerrado del fabricante; sin operador a bordo |
| Datos Módular | Solo lectura; acceso desacoplado; no acoplamiento a productivos |
| Infraestructura cercana a FMS/AHS/DAS/AMS/OM | Evaluable en validación — read-only, sin impacto operacional |
| Instalación de hardware/sensores | Permitida con proceso de gestión del cambio (evaluación de riesgos) |

### Inteligencia Artificial

| Aspecto | Detalle |
|---------|---------|
| ¿Se permite IA? | **Sí** — analytics avanzada, ML para apoyo, predicción y optimización |
| Restricciones | Cumplir estándares corporativos de IA y ciberseguridad OT; trazabilidad y explicabilidad de modelos |
| Proveedores IA actuales de BHP | Microsoft + AWS |
| Posicionamiento requerido | Soporte a la decisión humana — no control automático |

### Infraestructura tecnológica BHP

| Aspecto | Detalle |
|---------|---------|
| Stack principal | **Multi-cloud: Microsoft + AWS** |
| Microsoft | Power Platform, Power BI, Azure — productividad, analítica, visualización |
| AWS | Datos, analítica avanzada, IoT, data engineering |
| Open Source en piloto | **Permitido** — debe cumplir ciberseguridad, governance y licenciamiento BHP |

### Centro de Control / Torre de Tráfico

| Aspecto | Detalle |
|---------|---------|
| ¿Existe? | **Sí** — Centro Integrado de Operaciones (CIO) / Centro de Control Remoto |
| Función actual | Optimizar rutas de movimiento según necesidades de las expansiones |
| Receptor de decisiones DataTwin | **CIO es el destinatario principal** |

### Decisiones de diseño que impone el Q&A

1. **La solución debe proveer sus propias pantallas/HMI** si requiere mostrar información a operadores de CAEX (los sistemas de cabina son cerrados)
2. **Diseño resiliente:** procesar localmente y bufferizar — no depender de conectividad continua
3. **Solo lectura sobre Módular:** integración desacoplada, nunca escribir sobre sistemas productivos
4. **Posicionar como complemento al Dispatch**, no reemplazo — sin riesgos adicionales
5. **Piloto acotado:** una flota/fase/corredor, luego escalar — no comprometer mina completa en selección
6. **Receptor de recomendaciones = CIO** — no alertas en cabina

---

## Limitaciones y advertencias

- La mayoría de los datos cuantitativos (costo por minuto, número de turnos, eventos no esperados más frecuentes, OEM) están bajo NDA — no se pueden usar en propuesta sin firma previa
- Los archivos DXF/DWG de rutas no están disponibles en fase inicial — la propuesta no debe depender de ellos
- El GPS de vehículos livianos no puede reutilizarse — si se necesita tracking de livianos, hay que proveer la infraestructura
- La meta del 20% es aspiracional — el piloto debe medir indicadores intermedios verificables

---
*Archivo: `30-Projects/BHP_Aster/Documentacion/Referencias/`*
