<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# En mermaid todos los flujos

Aquí tienes los 9 diagramas actualizados en Mermaid, con la nomenclatura regulatoria peruana (PETAR, IPERC Continuo, checklist pre-uso, permiso de reingreso) integrada en cada nodo.

### 1. Perforación

```mermaid
flowchart TD
    A[Ingeniero corto plazo\nPlan de perforación] --> B{Frente liberado\ngeomecánica/ventilación?}
    B -->|No| C[Programar trabajos previos\nDesatado / sostenimiento / ventilación]
    B -->|Sí| D[IPERC Continuo\nde la tarea de perforación]

    D --> E[Supervisor de guardia\nVerifica IPERC y competencias]
    E --> F[Checklist pre-uso\nequipo jumbo]
    F --> G{Equipo apto?\nfrenos, hidráulica, alarmas}
    G -->|No| H[Mantenimiento / cambio\nde equipo]
    G -->|Sí| I[Autorización inicio\nde perforación]

    I --> J[Operador ejecuta patrón\nde perforación]
    J --> K{Condición insegura?\nroca, agua, gases}
    K -->|Sí| L[Detener tarea\nReportar condición insegura]
    K -->|No| M[Perforación completada\nRegistro de avance]

    M --> N[Supervisor verifica patrón\nejecutado vs. diseño]
    N --> O{Frente apto para\ncarga de explosivos?}
    O -->|No| P[Trabajos adicionales\nlimpieza / desatado]
    O -->|Sí| Q[OT perforación cerrada\nEstado: listo para carga]
```


### 2. Voladura (tronadura)

```mermaid
flowchart TD
    A[Ingeniero tronadura\nDiseño de voladura] --> B{Diseño cumple\nnorma DS 024-2016-EM?}
    B -->|No| C[Recalcular diseño\npatrón / carga explosiva]
    B -->|Sí| D[Autorización retiro\nexplosivos de polvorín]

    D --> E[PETAR de tronadura\nfirmado por supervisor y jefe de área]
    E --> F{Zona libre de personal\nno autorizado?}
    F -->|No| G[Evacuar / delimitar zona]
    F -->|Sí| H[IPERC Continuo\nde carga de explosivos]

    H --> I[Personal licenciado\ncarga taladros según diseño]
    I --> J[Checklist seguridad\ncircuito de iniciación]
    J --> K[Frente cargado\nListo para tronadura]

    K --> L[Autorización de encendido\na hora determinada]
    L --> M{Zona evacuada y\naccesos bloqueados?}
    M -->|No| N[Detener proceso\nVerificar causa]
    M -->|Sí| O[Ejecutar tronadura]

    O --> P[Tiempo de espera\npost-disparo]
    P --> Q[Ventilación y lavado\nde la zona]
    Q --> R[Medición instrumental\nde gases y estabilidad]
    R --> S{Condiciones dentro\nde rango normativo?}
    S -->|No| T[Ventilación adicional /\nrevisión geomecánica]
    S -->|Sí| U[Permiso de reingreso\nFrente habilitado]
```


### 3. Carguío

```mermaid
flowchart TD
    A[Post-tronadura\nSupervisor y seguridad] --> B[Medición de gases\ny estabilidad inicial]
    B --> C{Frente seguro para\ningreso de equipos?}
    C -->|No| D[Desatado / sostenimiento\nadicional]
    C -->|Sí| E[IPERC Continuo\nde carguío]

    E --> F[Supervisor autoriza\ningreso de LHD/pala]
    F --> G[Checklist pre-uso\nequipo de carguío]
    G --> H{Equipo apto?}
    H -->|No| I[Mantenimiento / sustitución\nde equipo]
    H -->|Sí| J[Inicio de carguío\nsegún instrucción de destino]

    J --> K[Operador carga material\nmineral / estéril]
    K --> L{Condición insegura\nen frente?}
    L -->|Sí| M[Detener carguío\nReportar condición]
    L -->|No| N[Registro de ciclos\ny toneladas por OT]

    N --> O[Supervisor revisa avance\ny condiciones del frente]
    O --> P{Requiere trabajos\nadicionales?}
    P -->|Sí| Q[Programar sostenimiento\no limpieza adicional]
    P -->|No| R[Frente listo para\nsiguiente etapa del ciclo]
```


### 4. Acarreo / Transporte

```mermaid
flowchart TD
    A[Planner/supervisor transporte\nDefine ruta y puntos de descarga] --> B[IPERC de ruta\nseñalización / piso / cruces]
    B --> C{Ruta en condición\naceptable?}
    C -->|No| D[Mantenimiento de vía\no ventilación de ruta]
    C -->|Sí| E[Habilitar circulación\npara el turno]

    E --> F[Supervisor verifica\ncompetencia del operador]
    F --> G[Checklist pre-uso\nfrenos / sistema de retardo]
    G --> H{Equipo apto?}
    H -->|No| I[Mantenimiento / cambio\nde equipo]
    H -->|Sí| J[Autorización operación\nde transporte]

    J --> K[Operador ejecuta ciclos\nCarga → Ruta → Descarga]
    K --> L{Incidente o\nnear miss?}
    L -->|Sí| M[Detener / registrar evento\nInvestigación inicial]
    L -->|No| N[Registro de toneladas\ny ciclos por OT]

    N --> O[Supervisor monitorea\navance del turno]
    O --> P{Cumple metas\nde transporte?}
    P -->|No| Q[Ajustar asignación\nde equipos/rutas]
    P -->|Sí| R[Cerrar OT transporte\nActualizar producción del turno]
```


### 5. Sostenimiento / Fortificación

```mermaid
flowchart TD
    A[Geomecánica\nDiseño de sostenimiento] --> B{Diseño aprobado\npor geomecánica?}
    B -->|No| C[Revisión / re-diseño\npatrón de sostenimiento]
    B -->|Sí| D[OT de sostenimiento\ne IPERC Continuo específico]

    D --> E{Aplica trabajo en altura\no espacio confinado?}
    E -->|Sí| F[PETAR adicional\nrequerido]
    E -->|No| G[Solo IPERC Continuo\nrequerido]

    F --> H[Supervisor asigna\ncuadrilla y equipos]
    G --> H
    H --> I[Checklist pre-uso\njumbo pernos / bomba shotcrete]
    I --> J{Equipos aptos?}
    J -->|No| K[Mantenimiento / sustitución]
    J -->|Sí| L[Ejecutar instalación\npernos / malla / shotcrete]

    L --> M[Registro de avance\nnº pernos / m² shotcrete]
    M --> N[Control de calidad\npull test / espesor]
    N --> O{Cumple criterios\ngeotécnicos?}
    O -->|No| P[OT de re-trabajo\nrefuerzo adicional]
    O -->|Sí| Q[Frente declarado estable\nLiberado para producción]
```


### 6. Ventilación

```mermaid
flowchart TD
    A[Ingeniero de ventilación\nDiseña esquema y caudales] --> B[Verificar mínimos normativos\n3-6 m3/min por persona]
    B --> C{Cambio significativo\nde circuito?}
    C -->|Sí| D[Revisión formal\ny aprobación de cambio]
    C -->|No| E[Registro operativo\nsimple]

    D --> F[IPERC Continuo\nintervención en ventilación]
    F --> G[Supervisor autoriza\nmaniobra: ventiladores/reguladores]
    G --> H[Ejecutar cambio\nde configuración]

    H --> I[Medición instrumental\nen frentes afectados]
    I --> J{Valores dentro\nde rango normativo?\ngases, polvo, temperatura}
    J -->|No| K[Ajustes adicionales\nde ventilación]
    J -->|Sí| L[Permiso de reingreso\npara frentes comprometidos]

    L --> M[Actualización de estado\nfrentes habilitados/bloqueados]
```


### 7. Drenaje

```mermaid
flowchart TD
    A[Supervisor de servicios\nDetecta acumulación de agua] --> B[Diagnóstico de causa\ny nivel de riesgo]
    B --> C[IPERC Continuo\nriesgo eléctrico / caída]
    C --> D[Plan de drenaje\nbombas / canales]

    D --> E{Requiere corte\nde energía?}
    E -->|Sí| F[PETAR eléctrico\ny bloqueo/etiquetado]
    E -->|No| G[Permiso de trabajo\nestándar de instalación]

    F --> H[Instalación y puesta\nen marcha de bombeo]
    G --> H
    H --> I[Operación de bombeo\nmonitoreo de niveles]
    I --> J{Nivel dentro de\nrango de alarma?}
    J -->|No| K[Ajustar capacidad /\nreubicar sistema]
    J -->|Sí| L[Frente/ruta declarada\nsegura para tránsito]
```


### 8. Energía y comunicaciones

```mermaid
flowchart TD
    A[Ingeniería eléctrica\nPlan de intervención] --> B[Evaluación de impacto\nen seguridad y operación]
    B --> C[IPERC Continuo\ntrabajo eléctrico]
    C --> D[PETAR eléctrico\nfirmado por supervisor y jefe de área]

    D --> E[Bloqueo y etiquetado\nLOTO - energía cero verificada]
    E --> F[Ejecutar cortes /\naislamientos necesarios]
    F --> G[Instalación de tableros,\ncables, antenas, red]

    G --> H[Pruebas de continuidad\ny aislamiento]
    H --> I{Pruebas satisfactorias?}
    I -->|No| J[Corrección / reajuste\nde instalación]
    I -->|Sí| K[Rehabilitación de energía\nRetiro de bloqueo]

    K --> L[Actualización en maestro\nde servicios\nDisponible para producción]
```


### 9. Cierre de frente / fin de turno

```mermaid
flowchart TD
    A[Supervisor de guardia\nInspección de fin de turno] --> B[Checklist de cierre\npor cada operación unitaria ejecutada]
    B --> C{Todas las condiciones\nseguras para siguiente turno?}
    C -->|No| D[Registrar restricción\nBloquear frente físico y digital]
    D --> E[Generar OT de trabajos\nprevios al reingreso]

    C -->|Sí| F[Registrar avances,\nincidentes y consumos del turno]
    F --> G[Entregar PETAR del turno\nal área de SSOMA]
    G --> H[Incluir información en\nplan del turno siguiente]
    H --> I[Cierre de guardia\ny handover estructurado]
```

Cada flujo refleja los puntos de control normativos (PETAR e IPERC Continuo) discutidos en el detalle previo, listos para que tu equipo de producto los use como base de las reglas de negocio del motor de OT/SSOMA.[^1][^2][^3][^4][^5][^6]

<div align="center">⁂</div>

[^1]: https://consitecperu.com/vocabulario-sst/petar-permiso-escrito-para-trabajos-de-alto-riesgo

[^2]: https://www.osinergmin.gob.pe/seccion/centro_documental/PlantillaMarcoLegalBusqueda/DS-024-2016-EM.pdf

[^3]: https://egcperu.com/seguridad-calidad-medio-ambiente/sector-minero-cuando-aplica-iperc-de-linea-base-iperc-continuo-y-ats/

[^4]: https://www.studocu.com/pe/document/servicio-nacional-de-adiestramiento-en-trabajo-industrial/seguridad-y-prevencion-de-riesgos/seguridad-en-la-ventilacion-de-minas/124487974

[^5]: https://resourcegovernance.org/sites/default/files/Reglamento de Seguridad Minera.pdf

[^6]: https://revistaseguridadminera.com/operaciones-mineras/ventilacion-minera-adecuada-segun-el-reglamento/

