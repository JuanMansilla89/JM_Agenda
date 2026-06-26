export interface LithologyDef {
  code: string;
  label: string;
  color: string; // hex
}

export const LITHOLOGIES: LithologyDef[] = [
  { code: 'OX',  label: 'Óxido',   color: '#d97706' },
  { code: 'MX',  label: 'Mixto',   color: '#ca8a04' },
  { code: 'SU',  label: 'Sulfuro', color: '#7c3aed' },
  { code: 'BX',  label: 'Brecha',  color: '#be123c' },
  { code: 'ES',  label: 'Estéril', color: '#6b7280' },
];

export const LITH_BY_CODE: Record<string, LithologyDef> =
  Object.fromEntries(LITHOLOGIES.map(l => [l.code, l]));

export function lithColor(code?: string): string {
  if (!code) return '#9ca3af';
  return LITH_BY_CODE[code]?.color ?? '#9ca3af';
}

// ──────────────────────────────────────────────
// Zona mineralizada (MINZONE)
// ──────────────────────────────────────────────

export interface MinzoneDef {
  code: string;
  label: string;
  color: string;
}

export const MINZONES: MinzoneDef[] = [
  { code: 'SULF',  label: 'Sulfuro económico', color: '#7c3aed' },
  { code: 'SULF1', label: 'Sulfuro tipo 1',    color: '#a855f7' },
  { code: 'M',     label: 'Marginal',          color: '#f59e0b' },
  { code: 'OXI',   label: 'Óxido',            color: '#f97316' },
  { code: 'MIX',   label: 'Mixto ox/sulf',    color: '#84cc16' },
  { code: 'D',     label: 'Desmonte',         color: '#6b7280' },
  { code: 'EST',   label: 'Estéril',          color: '#374151' },
];

export const MINZONE_BY_CODE: Record<string, MinzoneDef> =
  Object.fromEntries(MINZONES.map(m => [m.code, m]));

export function minzoneColor(code?: string): string {
  if (!code) return '#4b5563';
  return MINZONE_BY_CODE[code]?.color ?? '#4b5563';
}

export function deriveMinzone(grade: number): string {
  if (grade >= 0.60) return 'SULF';
  if (grade >= 0.30) return 'M';
  if (grade >  0.00) return 'D';
  return 'EST';
}
