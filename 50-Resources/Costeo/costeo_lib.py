"""
Librería compartida de costeo — usada por generar_resumen_costeo.py (CLI)
y por _templates/Quarto-Costeo-Actividades.qmd (Word).

Fuente de la metodología: 50-Resources/Costeo/Propuesta-Economica_Template.xlsx
(hoja "Propuesta Modelo"): costos indirectos y gastos administrativos se calculan
sobre el subtotal de mano de obra (no en cascada uno sobre otro); la utilidad se
calcula sobre subtotal + indirectos + administrativos. Con los porcentajes por
defecto (10/10/10) el multiplicador final es 1.32x sobre la mano de obra — el
mismo factor validado en el Excel.
"""

import re
import pandas as pd


def parse_md_table(path):
    """Extrae la primera tabla markdown del archivo (ignora el frontmatter YAML)."""
    with open(path, encoding="utf-8") as f:
        text = f.read()

    # Quitar frontmatter YAML si existe
    if text.startswith("---"):
        partes = text.split("---", 2)
        if len(partes) >= 3:
            text = partes[2]

    lineas = text.splitlines()
    bloque = []
    dentro = False
    for linea in lineas:
        es_fila_tabla = linea.strip().startswith("|")
        if es_fila_tabla:
            bloque.append(linea)
            dentro = True
        elif dentro:
            break  # primera tabla ya cerrada

    if not bloque:
        raise ValueError(f"No se encontró ninguna tabla markdown en {path}")

    filas = []
    for linea in bloque:
        celdas = [c.strip() for c in linea.strip().strip("|").split("|")]
        filas.append(celdas)

    header = filas[0]
    cuerpo = [f for f in filas[1:] if not all(re.fullmatch(r":?-+:?", c) for c in f)]
    return pd.DataFrame(cuerpo, columns=header)


def cargar_tarifario(path):
    df = parse_md_table(path)
    df = df.rename(columns={"Perfil": "perfil", "USD/HH": "tarifa_hora_usd"})
    df["tarifa_hora_usd"] = pd.to_numeric(df["tarifa_hora_usd"], errors="coerce")
    return df[["perfil", "tarifa_hora_usd"]]


def cargar_plan(path):
    df = parse_md_table(path)
    df = df.rename(columns={
        "Área": "area",
        "Actividad": "actividad",
        "Perfil": "perfil",
        "Horas/semana": "horas_semana",
        "Semanas": "semanas",
    })
    df["horas_semana"] = pd.to_numeric(df["horas_semana"], errors="coerce")
    df["semanas"] = pd.to_numeric(df["semanas"], errors="coerce")
    return df[["area", "actividad", "perfil", "horas_semana", "semanas"]]


def calcular_costos(plan_df, tarifario_df, pct_indirectos=0.10, pct_admin=0.10, pct_utilidad=0.10):
    """Replica la cascada del Excel: indirectos y admin sobre subtotal de mano de obra
    (no en cascada entre sí); utilidad sobre (subtotal + indirectos + admin)."""
    df = plan_df.merge(tarifario_df, on="perfil", how="left")
    df["hh"] = df["horas_semana"] * df["semanas"]
    df["costo_usd"] = df["hh"] * df["tarifa_hora_usd"]

    sin_tarifa = df[df["tarifa_hora_usd"].isna()]["perfil"].unique().tolist()

    subtotal_mo = df["costo_usd"].sum()
    indirectos = subtotal_mo * pct_indirectos
    administrativos = subtotal_mo * pct_admin
    subtotal2 = subtotal_mo + indirectos + administrativos
    utilidad = subtotal2 * pct_utilidad
    total = subtotal2 + utilidad

    por_area = df.groupby("area", as_index=False).agg(hh=("hh", "sum"), costo_usd=("costo_usd", "sum"))
    por_actividad = df.groupby(["area", "actividad"], as_index=False).agg(hh=("hh", "sum"), costo_usd=("costo_usd", "sum"))
    por_perfil = df.groupby("perfil", as_index=False).agg(hh=("hh", "sum"), costo_usd=("costo_usd", "sum"))

    return {
        "detalle": df,
        "por_area": por_area,
        "por_actividad": por_actividad,
        "por_perfil": por_perfil,
        "hh_total": df["hh"].sum(),
        "subtotal_mano_obra": subtotal_mo,
        "indirectos": indirectos,
        "administrativos": administrativos,
        "utilidad": utilidad,
        "total": total,
        "sin_tarifa": sin_tarifa,
    }


def df_to_md(tabla):
    """Convierte un DataFrame a tabla markdown sin depender de 'tabulate'."""
    cols = list(tabla.columns)
    header = "| " + " | ".join(cols) + " |"
    sep = "| " + " | ".join(["---"] * len(cols)) + " |"
    filas = [header, sep]
    for _, fila in tabla.iterrows():
        filas.append("| " + " | ".join(str(v) for v in fila) + " |")
    return "\n".join(filas)
