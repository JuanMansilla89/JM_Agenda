---
fecha: 2026-07-30
tipo: referencia
subtipo: documento-externo
proyecto: BHP_Aster
fuente: BHP Escondida
url:
tags: [bhp-aster, ciberseguridad, moc]
---

# Proceso de Gestión de Demanda MoC

Flujograma Gestión Demanda MoC - Tecnología Escondida

Flujograma de Solicitud de Demanda - MOC

```mermaid
flowchart LR

    A([Inicio]) --> B["Solicitud de Validación Tecnología en MOC"]
    B --> C["Se ingresa solicitud de Demanda Tecnológica en ServiceNow"]
    C --> D{"¿La MOC posee un componente de tecnología?"}

    D -- No --> Z["Se cierra validación de Tecnología en plataforma MOC"]
    Z --> FIN([Fin])

    D -- Sí --> E["Se asignan los siguientes SME de Tecnología"]

    %% Ramas
    E --> T1["SME de Technology Escondida"]
    E --> A1["SME del Panel de Arquitectura"]
    E --> C1["SME de Ciberseguridad"]

    %% Technology Escondida
    T1 --> T2{"¿Existe impacto operativo en los sistemas tecnológicos?"}

    T2 -- No --> T3["Se valida por SME Technology Escondida"]
    T2 -- Sí --> T4["Se continúa con proceso de Demanda Tecnológica"]
    T4 --> T5["Finaliza proceso de Demanda Tecnológica"]
    T5 --> T3

    %% Arquitectura
    A1 --> A2{"¿Incluye desarrollo de nuevas soluciones tecnológicas?"}

    A2 -- No<br/>Utiliza sistemas existentes --> A3["Se valida por SME del Panel de Arquitectura"]

    A2 -- Sí --> A4{"¿Existe impacto con bajo riesgo y complejidad?"}

    A4 -- No --> A5["Architecture Assessment (AAR)<br/>Technical Security Assessment (TSA)"]
    A4 -- Sí --> A6["Proceso de Aprobación de Excepción de Bajo Riesgo (LEAP)"]

    A5 --> A7["Finaliza proceso de Panel de Arquitectura"]
    A6 --> A7
    A7 --> A3

    %% Ciberseguridad
    C1 --> C2{"¿Incluye implementación con proveedores externos?"}

    C2 -- Sí --> C3["Gestión de riesgos cibernéticos de terceros (TPCRM)<br/>Data Protection Impact Assessment (DPIA)"]
    C3 --> C4["CIA Assessment"]

    C2 -- No --> C4

    C4 --> C5["Se valida por SME de Ciberseguridad"]

    %% Cierre
    T3 --> Z
    A3 --> Z
    C5 --> Z
```

![[CleanShot 2026-08-03 at 10.37.12.png]]
## Listado de Documentos

El pre-requisito es saber la aplicabilidad de los siguientes documentos de tecnología:

**Cybersecurity**
- TSA - Technical Security Assessment
- TPCRM - Third Party Cyber Risk Management
- CIA - Confidentiality, Integrity and Availability Assessment
- DPIA - Data Privacy Impact Assessment

**Architecture**
- AISA - Architecture Impact Self Assessment
- ==HLD - High Level Design==
- LLD - Low Level Design
