---
tipo: referencia
tema: prompt-demo-lovable
proyecto: Agnico_Eagle
fecha: 2026-07-17
tags: [agnico-eagle, gemelo-planta, mockup, prompt-ia, lovable]
---

# Prompt — Demo Avanzada "GemeloPlanta" para Lovable

> Reemplaza al prompt de imagen estática anterior. Estructura calcada del prompt de referencia "GemeloBIM" que compartió Juan, adaptada a los dos circuitos de proceso de Agnico Eagle (Pinos Altos) discutidos en [[2026-07-13-reunion-gemelo-planta-alcance-comercial]]: **LeachPad** (lixiviación en pilas) y **Flotación** (con sus sub-procesos). Nota: el mensaje mencionaba una imagen de referencia adicional que no llegó adjunta — si la compartes después, se puede incorporar paleta/iconografía específica.
>
> Ajuste respecto al ejemplo original: la reunión comercial del 13/07 concluyó que **no hace falta 3D** para transmitir valor — un esquema 2D/isométrico bien hecho es igual o más funcional y más barato. La demo mantiene la misma estructura y ambición del ejemplo, pero la vista central se especifica como 2D/isométrica en vez de 3D completo (con opción de escalar a 3D más adelante si el caso de negocio lo justifica).

## Prompt

```
Construye una demo avanzada y moderna llamada GemeloPlanta, enfocada en representar
una planta de procesamiento minero (oro y plata) mediante un portal visual navegable,
orientado a monitoreo de activos, alertas y acceso contextual a documentación técnica.
La demo cubre dos circuitos de proceso: LeachPad (lixiviación en pilas) y Flotación.

La aplicación debe transmitir sensación de:

- plataforma industrial enterprise,
- gemelo digital moderno,
- trazabilidad operacional,
- navegación inteligente de activos,
- monitoreo de KPIs y alertas en tiempo real (simulado),
- integración documental corporativa.

La demo debe verse altamente profesional, con estética similar a:

- plataformas industriales modernas,
- dashboards enterprise,
- Bentley / Autodesk Tandem / Azure Digital Twins,
- sistemas SCADA modernos,
- plataformas mineras avanzadas.

---

Objetivo funcional de la demo

El usuario debe poder:

1. Ingresar a un portal web industrial.
2. Visualizar la planta en esquema 2D/isométrico, navegable.
3. Cambiar libremente entre los dos circuitos: LeachPad y Flotación.
4. Hacer clic sobre activos industriales de cualquiera de los dos circuitos.
5. Ver metadata contextual del activo (tags, estado, criticidad).
6. Ver KPIs y alertas simuladas asociadas a cada activo.
7. Acceder a documentos asociados (manuales, P&IDs, procedimientos, fichas técnicas).
8. Visualizar relaciones entre proceso, activos, KPIs/alertas y documentación.
9. Entender claramente la visión de "GemeloPlanta" como plataforma de integración,
   no como simulador ni gemelo predictivo.

NO implementar datos en vivo todavía.
NO implementar modelos predictivos ni de inteligencia artificial todavía.

La demo representa únicamente:

Fase 1 — Portal Visual de Planta + Monitoreo de KPIs/Alertas (simulado) + Gestión Documental.

---

Estilo visual

Usar:

- tema dark enterprise,
- iluminación industrial,
- acentos cyan / azul eléctrico / verde industrial para estado normal,
- rojo / naranja reservados exclusivamente para alertas activas,
- UI minimalista,
- tipografía moderna,
- tarjetas translúcidas,
- diseño premium tipo SaaS industrial.

Evitar:

- apariencia gaming,
- estilos caricaturescos,
- estética startup genérica,
- exceso de color fuera de las alertas.

Debe sentirse:

- corporativo,
- industrial,
- tecnológico,
- premium.

---

Arquitectura visual de la aplicación

La interfaz debe dividirse en:

1. Sidebar izquierda

Con:

- logo GemeloPlanta,
- menú de navegación,
- selector de circuito (LeachPad / Flotación),
- filtros,
- búsqueda de activos,
- árbol de áreas por circuito.

Opciones de menú:

- Overview
- LeachPad
- Flotación
- Alertas
- Documentación
- Activos Críticos
- Administración

2. Vista central (2D / isométrica)

Elemento principal.

Debe contener, según el circuito seleccionado:

LeachPad:
- chancadora primaria,
- pila de lixiviación,
- sistema de riego (goteros/aspersores),
- poza de solución rica (PLS),
- poza de solución pobre (barren),
- planta ADR / columnas de carbón activado,
- horno de fundición / refinería (barras doré).

Flotación:
- chancado primario y secundario,
- molino SAG,
- molino de bolas,
- batería de hidrociclones (clasificación),
- celdas de flotación rougher,
- celdas de flotación cleaner/scavenger,
- espesador de concentrado,
- filtro de concentrado,
- espesador de relaves,
- depósito de relaves (TSF).

Representar piping, bombas, fajas, estanques, estructuras metálicas y áreas
operacionales de cada circuito, con un toggle claro para cambiar entre LeachPad
y Flotación sin recargar la experiencia.

La navegación debe permitir:

- pan,
- zoom,
- focus asset (acercar cámara al activo seleccionado).

Agregar:

- glow sutil en activos con alerta,
- hover interactivo,
- selección de activos,
- resaltado visual.

3. Panel derecho contextual

Cuando el usuario hace clic sobre un activo, mostrar:

Información general

- nombre del activo,
- código,
- tipo,
- circuito/área (LeachPad o Flotación),
- estado,
- criticidad.

KPIs y alertas (simulados)

- KPIs asociados al activo (ej. tonelaje, ley, recuperación %, consumo energético,
  nivel de poza, humedad de pila),
- alertas activas con nivel de severidad (info / advertencia / crítico),
- histórico simulado corto (últimas horas).

Información documental

Lista de:

- manuales,
- procedimientos,
- planos / P&IDs,
- fichas técnicas,
- certificados.

Cada documento debe tener:

- ícono,
- nombre,
- fecha,
- botón "Abrir documento".

---

Activos demo sugeridos

Circuito LeachPad:

- CR-101 — Chancadora primaria
- HL-PAD-01 — Pila de lixiviación
- IRR-01 — Sistema de riego
- POND-PLS-01 — Poza de solución rica (PLS)
- POND-BAR-01 — Poza de solución pobre (barren)
- ADR-01 — Planta ADR / columnas de carbón activado
- REF-01 — Horno de fundición / refinería (barras doré)

Circuito Flotación:

- CR-201 / CR-202 — Chancado primario / secundario
- SAG-301 — Molino SAG
- BM-302 — Molino de bolas
- HC-401 — Batería de hidrociclones
- FL-R-01 — Celdas de flotación rougher
- FL-C-01 / FL-S-01 — Celdas cleaner / scavenger
- TH-501 — Espesador de concentrado
- FIL-601 — Filtro de concentrado
- TH-TAIL-01 — Espesador de relaves
- TSF-01 — Depósito de relaves

Compartidos entre circuitos:

- Sala eléctrica
- Sala de control
- Laboratorio metalúrgico

---

Comportamiento interactivo

Hover

Cuando el mouse pasa sobre un activo:

- resaltar geometría,
- mostrar tooltip con nombre + valor de tag simulado.

---

Click

Cuando el usuario selecciona un activo:

- aislar activo,
- mostrar panel contextual,
- animar cámara/zoom hacia el activo,
- mostrar alertas activas si existen.

---

Navegación

Agregar:

- reset de vista,
- focus asset,
- toggle entre circuitos (LeachPad / Flotación),
- toggle de capas (piping, instrumentación, alertas).

---

Simulación de integración documental y de datos

Crear mock visual de integración con repositorio documental (SharePoint) y con
fuente de datos de planta (PI / OPC UA, simulado, sin conexión real).

Cuando el usuario abre un documento:

- mostrar modal elegante,
- preview PDF,
- metadata documental.

Agregar badges:

- SharePoint Online
- OPC UA (simulado)
- Azure Cloud
- ASTAY Data Platform

---

Dashboard Overview

Crear una pantalla overview inicial con:

KPIs simulados

- activos modelados (total y por circuito),
- alertas activas,
- documentos asociados,
- circuitos modelados (LeachPad / Flotación).

Widgets

- mapa de activos por circuito,
- últimas alertas,
- activos críticos,
- actividad reciente / últimos documentos.

---

Tecnología visual

Usar:

- React
- Tailwind
- SVG o Canvas 2D isométrico para la vista de planta (alternativa: Three.js /
  React Three Fiber si más adelante se decide escalar a 3D)
- Framer Motion
- UI enterprise moderna

---

Experiencia deseada

La demo debe generar la sensación de:

"Esto ya parece un Gemelo Digital real"

aunque todavía no existan datos en vivo ni modelos predictivos.

La prioridad es:

- experiencia visual,
- claridad operacional,
- percepción enterprise,
- navegación intuitiva,
- impacto ejecutivo.

---

Mensaje principal de la demo

El sistema NO es solamente un visualizador de planta.

Es:

"Una Plataforma de Integración y Monitoreo Inteligente de Activos para Plantas
de Procesamiento (LeachPad + Flotación), con Alertas Configurables y Acceso
Contextual a Información Técnica."

---

Extras deseables

Agregar:

- minimapa de planta por circuito,
- breadcrumbs de navegación,
- panel de capas,
- búsqueda inteligente,
- animaciones suaves,
- loading screen industrial,
- transiciones premium,
- íconos técnicos industriales/metalúrgicos.

---

Branding

Nombre:

GemeloPlanta

Subtítulo:

Plataforma de Integración y Monitoreo para Plantas de Procesamiento — LeachPad + Flotación

Pie:

Powered by ASTAY

---

Resultado esperado

La demo debe verse lista para:

- mostrar a clientes corporativos (Agnico Eagle),
- demos comerciales,
- workshops ejecutivos,
- validación de concepto,
- roadmap hacia un Gemelo de Planta completo.
```

## Notas

- Los dos circuitos (LeachPad y Flotación) y sus equipos son una **hipótesis de proceso** basada en lo comentado por Juan en la reunión del 13/07 — pendiente de validar la configuración real de planta con el cliente (ver riesgo en [[Agnico_Eagle]]).
- Se mantiene la restricción comercial acordada: **sin datos en vivo ni modelos predictivos** en esta fase de demo — solo KPIs y alertas simuladas, consistente con la decisión de no comprometer alcance/cifras en la presentación inicial.
- Vista central especificada en 2D/isométrico en lugar de 3D completo, siguiendo la decisión de la reunión (2D es igual o más funcional y más barato); queda como opción de upgrade a Three.js/React Three Fiber si el caso de negocio lo justifica más adelante.
