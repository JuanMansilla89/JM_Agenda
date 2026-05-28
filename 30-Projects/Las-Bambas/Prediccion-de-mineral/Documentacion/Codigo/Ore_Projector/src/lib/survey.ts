// Mining survey coordinate mapping — Las Bambas Chalcobamba
// Scene units → real-world: 1 scene unit = 5 m.
// X (scene) → East; Z (scene, drei "north") → North; bank → Elevation.
// Origin: E 786650, N 8443900 | Banco 4480 = Level 1 (z=4)

export const SURVEY = {
  east0: 786650,
  north0: 8443900,
  baseElev: 4480,
  bankHeight: 15,
  unitToMeters: 5,
};

export function eastFromScene(x: number): number {
  return SURVEY.east0 + x * SURVEY.unitToMeters;
}
export function northFromScene(z: number): number {
  return SURVEY.north0 + z * SURVEY.unitToMeters;
}
export function elevFromBank(bank: number): number {
  return SURVEY.baseElev - (bank - 1) * SURVEY.bankHeight;
}
export function fmtCoord(v: number): string {
  return v.toFixed(1);
}
