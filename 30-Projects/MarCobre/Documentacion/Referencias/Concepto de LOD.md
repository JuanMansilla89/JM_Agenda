
## Concepto de LOD (Level of Development/Detail)

- El LOD es la forma estándar de describir qué tan desarrollado está un elemento BIM en términos de geometría y datos (qué tan preciso, cuánto detalle, qué información lleva). [inesa-tech](https://www.inesa-tech.com/blog/lod-en-metodologia-bim-nivel-de-desarrollo-y-significado-lod/)
- Se usan escalas típicas LOD 100, 200, 300, 400 y 500, donde 100 es conceptual y 500 es as built verificado en campo; cada nivel implica un grado de precisión geométrica y de información distinto. [retokommerling](https://retokommerling.com/nivel-desarrollo-lod-bim/)

## Niveles habituales y su precisión

- LOD 100–200: geometría muy simplificada (cajas, volúmenes aproximados), útil para estudios conceptuales, implantación general y simulaciones sencillas; los equipos pueden representarse como paralelepípedos que aproximan el volumen. [mydigitalbuildings](https://www.mydigitalbuildings.com/es/blog/definir-el-nivel-de-detalle-de-su-modelo-bim)
- LOD 300: geometría precisa para construcción y coordinación (dimensiones reales, ubicación exacta, componentes principales externos del equipo), suficiente para planos de detalle 1:100–1:50 y métricas fiables. [bimnd](https://www.bimnd.es/lod-la-metodologia-bim/)
- LOD 400: nivel de fabricación y montaje; incorpora detalles de fabricación, ensamblajes, modelos de proveedor y datos para prefabricación, muy usado en líneas de producción y equipos industriales cuando hace falta precisión fina. [retokommerling](https://retokommerling.com/nivel-desarrollo-lod-bim/)
- LOD 500: modelo as built verificado en campo, donde lo modelado debe ser réplica de lo construido, normalmente asociado a operación y mantenimiento (GEM) y apoyado en escaneos y evidencias de obra. [editeca](https://editeca.com/lod-nivel-de-desarrollo/)

## Cómo usar esto en tu propuesta

- Para la nube de puntos → BIM, puedes plantear paquetes de servicio según LOD: p.ej. “Modelado BIM de equipos e instalaciones a LOD 200 para layout general” vs “LOD 300–400 para coordinación y fabricación/ensamblaje”. [tecnologiaparalaindustria](https://tecnologiaparalaindustria.com/areas-de-mayor-provecho-de-la-metodologia-bim-en-plantas-industriales/)
- Cada LOD puedes ligarlo a un nivel de precisión (tolerancias), cantidad de elementos modelados y profundidad de información (tags, atributos, vínculos a documentos), de modo que el cliente entiende qué paga y tú acotas esfuerzo y costo. [bimcommunity](https://www.bimcommunity.com/es/nivel-de-detalle-vs-nivel-de-desarrollo-en-el-entorno-bim/)

---

## Dónde entra BIM y dónde entra Unity

- El modelo BIM se genera y gestiona en herramientas BIM (Revit, herramientas openBIM basadas en IFC, Blender BIM, etc.), donde se define la geometría “seria” y la información (LOD, propiedades, disciplinas). [autodesk](https://www.autodesk.com/latam/industry/bim/interoperability)
- Unity es un motor de tiempo real que importa ese modelo (Revit, IFC u otros) y lo convierte en una escena interactiva para visualización, simulación, capacitación, operaciones, digital twin, etc.; no es la fuente de verdad del BIM, sino la “ventana interactiva”. [create.unity](https://create.unity.com/aec-webinar-viatechnik-bim-workflow)

## Cómo pasan los datos BIM a Unity (en la práctica)

- Unity se integra con BIM principalmente mediante plugins como Pixyz/Unity Asset Transformer y productos como Unity Reflect, que permiten importar directamente archivos IFC o modelos de Revit, conservando estructura y metadatos BIM. [connect-prd-cdn.unity](https://connect-prd-cdn.unity.com/20191127/281f6898-abfe-47b3-b1c6-d417595e7d92/Unity%20Reflect%20Datasheet_Digital.pdf)
- Un flujo típico que muestra Unity es: Revit → exportar IFC / usar plugin → cargar en Unity con Pixyz → optimizar geometría y materiales → generar experiencia interactiva; lo mismo aplica a cualquier herramienta que exporte IFC (Tekla, Archicad, etc.). [linkedin](https://www.linkedin.com/learning/revit-to-unity-for-architecture-visualization-and-vr/export-ifc-for-bim-pipelines)

## Qué roles juegan IFC y openBIM

- IFC es el formato neutro que lleva la información BIM (tipos de elementos, propiedades, jerarquías) entre distintas herramientas; Autodesk y buildingSMART lo promueven como estándar para ecosistemas abiertos (openBIM). [buildingsmart](https://www.buildingsmart.org/architecture-engineering-construction/)
- En un pipeline BIM→Unity centrado en datos, muchas guías recomiendan exportar primero a IFC desde Revit u otra herramienta, porque así Unity (vía Pixyz o pipelines similares) puede leer mejor la estructura, filtrar elementos, aplicar reglas, etc. [create.unity](https://create.unity.com/aec-webinar-viatechnik-bim-workflow)

## Unity Reflect como ejemplo “oficial”

- Unity Reflect es (o fue) el producto de Unity específico para AEC que se conecta con Revit/BIM 360 y permite mandar modelos BIM a Unity casi “one‑click”, manteniendo un enlace vivo para que cambios en Revit se vean en tiempo real en Unity. [aecmag](https://aecmag.com/vr-mr/unity-reflect-now-supports-autodesk-bim-360/)
- Reflect se usa para revisiones de diseño, coordinación y visualización inmersiva (VR/AR) trabajando directamente sobre modelos BIM, lo que ejemplifica bien el concepto: BIM se edita en Revit, Reflect/Unity lo muestra y sincroniza para explorarlo con stakeholders. [geoweeknews](https://www.geoweeknews.com/news/unity-reflect-brings-integration-and-real-time-collaboration-to-autodesk-revit)

## Cómo encaja Blender en todo esto

- Blender por sí solo es un modelador 3D generalista, pero con el addon Blender BIM puede trabajar con IFC y funcionar como herramienta BIM/openBIM, permitiendo editar modelos IFC, añadir propiedades, etc. [cursos.frogamesformacion](https://cursos.frogamesformacion.com/pages/blog/blender-bim)
- Desde Blender puedes exportar geometría a formatos que Unity consume bien (FBX, GLTF, etc.), y si mantienes el IFC como “capa de datos”, puedes tener un flujo doble: IFC como fuente de verdad BIM y FBX/GLTF como representación optimizada para Unity. [reddit](https://www.reddit.com/r/Unity3D/comments/14ed6oy/whats_the_best_workflow_between_blender_and_unity/)

## Resumen en lenguaje de propuesta

- “Los modelos BIM se desarrollan en herramientas BIM (Revit / openBIM / Blender BIM). Estos modelos se exportan en formatos interoperables (IFC, FBX, GLTF) y se integran en Unity mediante pipelines dedicados (Pixyz/Unity Reflect), lo que permite experiencias de visualización y operación en tiempo real sobre datos BIM actualizados.” [aecmag](https://aecmag.com/news/pixyz-plug-in-brings-ifc-files-into-unity-s-real-time-engine/)
- “Unity no reemplaza la plataforma BIM, sino que la complementa como motor de visualización y simulación, conservando la estructura y metadatos del modelo BIM gracias al uso de estándares openBIM (IFC) y conectores oficiales.” [geoweeknews](https://www.geoweeknews.com/news/unity-reflect-brings-integration-and-real-time-collaboration-to-autodesk-revit)
