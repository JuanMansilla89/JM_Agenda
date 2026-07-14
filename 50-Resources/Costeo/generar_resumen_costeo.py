#!/usr/bin/env python3
"""
Genera un resumen de costeo en markdown a partir de un plan de actividades.

Uso:
    python generar_resumen_costeo.py <plan-actividades.md> [--tarifario ruta.md] [--out resumen.md]

Por defecto usa 50-Resources/Costeo/tarifario-perfiles.md como tarifario.
Si no se pasa --out, imprime el resumen por consola.
"""

import argparse
import os
import sys
from datetime import date

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from costeo_lib import cargar_tarifario, cargar_plan, calcular_costos, df_to_md

DEFAULT_TARIFARIO = os.path.join(os.path.dirname(os.path.abspath(__file__)), "tarifario-perfiles.md")


def main():
    parser = argparse.ArgumentParser(description="Calcula el costo total de un plan de actividades.")
    parser.add_argument("plan", help="Ruta al archivo markdown del plan de actividades")
    parser.add_argument("--tarifario", default=DEFAULT_TARIFARIO, help="Ruta al tarifario markdown (por defecto: el maestro de ASTAY)")
    parser.add_argument("--out", default=None, help="Ruta de salida del resumen markdown (por defecto: imprime por consola)")
    parser.add_argument("--indirectos", type=float, default=0.10, help="Porcentaje de costos indirectos (default 0.10)")
    parser.add_argument("--admin", type=float, default=0.10, help="Porcentaje de gastos administrativos (default 0.10)")
    parser.add_argument("--utilidad", type=float, default=0.10, help="Porcentaje de utilidad (default 0.10)")
    args = parser.parse_args()

    tarifario = cargar_tarifario(args.tarifario)
    plan = cargar_plan(args.plan)
    r = calcular_costos(plan, tarifario, args.indirectos, args.admin, args.utilidad)

    lineas = []
    lineas.append(f"# Resumen de Costeo — {os.path.basename(args.plan)}")
    lineas.append("")
    lineas.append(f"*Generado: {date.today().isoformat()}*")
    lineas.append("")

    if r["sin_tarifa"]:
        lineas.append("> ⚠️ Perfiles sin tarifa cargada (revisar tarifario): " + ", ".join(r["sin_tarifa"]))
        lineas.append("")

    lineas.append("## Totales por área")
    lineas.append(df_to_md(r["por_area"]))
    lineas.append("")
    lineas.append("## Totales por actividad")
    lineas.append(df_to_md(r["por_actividad"]))
    lineas.append("")
    lineas.append("## Totales por perfil")
    lineas.append(df_to_md(r["por_perfil"]))
    lineas.append("")
    lineas.append("## Cascada de costos")
    lineas.append("| Concepto | USD |")
    lineas.append("|---|---|")
    lineas.append(f"| Subtotal mano de obra ({r['hh_total']:,.0f} HH) | {r['subtotal_mano_obra']:,.2f} |")
    lineas.append(f"| Costos indirectos ({args.indirectos:.0%}) | {r['indirectos']:,.2f} |")
    lineas.append(f"| Gastos administrativos ({args.admin:.0%}) | {r['administrativos']:,.2f} |")
    lineas.append(f"| Utilidad ({args.utilidad:.0%}) | {r['utilidad']:,.2f} |")
    lineas.append(f"| **Total** | **{r['total']:,.2f}** |")
    lineas.append("")

    salida = "\n".join(lineas)

    if args.out:
        with open(args.out, "w", encoding="utf-8") as f:
            f.write(salida)
        print(f"Resumen escrito en {args.out}")
    else:
        print(salida)


if __name__ == "__main__":
    main()
