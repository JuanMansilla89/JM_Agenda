---
tipo: equipo
nombre: "Ingeniería & Desarrollo"
lider: "Oswaldo Aspilcueta / Elio Rodríguez"
integrantes: [Oswaldo Aspilcueta, Elio Rodríguez, César Gago, David Pino, José Tello, Jeanlyn Fernandez, Carlos Mendoza T., Enrique Quispe, José Mundaca, Pablo Quispe, Roberto Nureña, Miguel Mamami, Jherson Lopez, Bryan Luyo]
proposito: "Construir, mantener, desplegar y evolucionar técnicamente los productos ASTAY."
capacidades: [Arquitectura, Despliegue, Desarrollo de producto y nuevas features, QA]
productos_bajo_responsabilidad: ["[[DataTwin]]", "[[MarCobre]]"]
iniciativas_activas: ["[[MarCobre]]", "[[DataTwin]]", "[[GNSS_Palas]]"]
capacidad_estimada: "12 internos + 4 externos (6+6 entre los dos sub-líderes)"
riesgos: ["DataTwin cruza múltiples dominios sin governance de producto claro"]
ultima_revision: 2026-07-16
---

# Ingeniería & Desarrollo

> Fuente base: [[Equipo-ASTAY]] (40-Areas/Equipo), actualizado 2026-06-19. Dos sub-líderes con reporte directo a Gerencia Técnica.

## Propósito

Construir, mantener, desplegar y evolucionar técnicamente los productos ASTAY.

## Líder
- Oswaldo Aspilcueta Salas — Technical Lead (Arquitectura · Despliegue · IT Implementación, 6 personas)
- Elio Xavier Rodríguez Condori — Technical Lead (Producto · Nuevas Features, 6 personas)

## Integrantes

**Sub-equipo A (Oswaldo):** César Gago, David Pino, José Tello, Jeanlyn Fernandez, Carlos Mendoza T. (QA), Enrique Quispe + externos (Hamed Portillo, Alexis Luján)
**Sub-equipo B (Elio):** José Mundaca, Pablo Quispe, Roberto Nureña, Miguel Mamami, Jherson Lopez, Bryan Luyo + externos (Juan Carlos, Josue Torres)

## Capacidades

- Arquitectura y despliegue
- Implementación IT
- Desarrollo de producto y nuevas features
- QA

## Productos / sistemas bajo responsabilidad

- [[DataTwin]] (Oswaldo · Elio como tech leads)
- [[MarCobre]] (Oswaldo · Elio)
- [[GNSS_Palas]] (técnico, Antamina)

## Iniciativas activas

```dataview
TABLE estado, prioridad, horizonte, proximo_hito
FROM "30-Projects" OR "40-Planning/02-Iniciativas"
WHERE contains(lider_iniciativa, "Oswaldo") OR contains(lider_iniciativa, "Elio")
SORT prioridad DESC
```

## Riesgos

| Riesgo | Impacto | Mitigación sugerida |
|---|---|---|
| DataTwin cruza múltiples dominios sin governance de producto | 🔴 Alto | Implantar Product Owner + Tech Lead + Business Owner por módulo |

## Próximas decisiones

- [ ] Confirmar con Oswaldo y Elio la frontera implementación vs. nuevas features (pendiente desde [[Equipo-ASTAY]], 2026-06-19)
- [x] ~~Resolver ambigüedad DataTwin Las Bambas / DataTwin Quellaveco~~ — resuelto en planning 2026-07-16: Gemelo Planta Quellaveco es add-on de DataTwin, no iniciativa aparte (ver [[Gemelo-Planta-Quellaveco]])
