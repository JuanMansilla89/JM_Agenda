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
