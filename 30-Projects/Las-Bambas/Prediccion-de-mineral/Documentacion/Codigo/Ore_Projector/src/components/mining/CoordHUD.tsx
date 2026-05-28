import { Compass, MapPin } from 'lucide-react';
import type { BoundaryPoly } from '@/types/mining';
import { eastFromScene, northFromScene, elevFromBank, fmtCoord } from '@/lib/survey';
import type { CursorCoord } from '@/hooks/useProjectStore';

interface Props {
  cursor: CursorCoord | null;
  currentBank: number;
  selectedPolygon: BoundaryPoly | null;
}

export default function CoordHUD({ cursor, currentBank, selectedPolygon }: Props) {
  const elev = elevFromBank(currentBank);

  return (
    <>
      {/* Compass / North indicator — top-left */}
      <div className="absolute top-3 left-3 z-10 bg-card/95 backdrop-blur border border-border rounded-md shadow-md px-2 py-1.5 flex flex-col items-center gap-0.5"
        title="Norte de mina">
        <div className="relative w-9 h-9 flex items-center justify-center">
          <Compass className="w-9 h-9 text-muted-foreground absolute" strokeWidth={1.2} />
          <div className="absolute top-0 text-[8px] font-mono font-bold text-primary leading-none">N</div>
        </div>
        <div className="text-[8px] font-mono uppercase tracking-wider text-muted-foreground">Norte</div>
      </div>

      {/* Coord HUD bar — bottom of viewer */}
      <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none flex justify-between gap-2">
        <div className="bg-card/95 backdrop-blur border border-border rounded-md shadow-md px-3 py-1.5 flex items-center gap-4 font-mono text-[10px] pointer-events-auto">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span className="uppercase tracking-wider">Cursor</span>
          </div>
          {cursor ? (
            <>
              <Coord label="E" value={fmtCoord(eastFromScene(cursor.x))} unit="m" color="text-[hsl(var(--mineral))]" />
              <Coord label="N" value={fmtCoord(northFromScene(cursor.z))} unit="m" color="text-[#1f6feb]" />
              <Coord label="Z" value={`${elev}`} unit="m" color="text-primary" />
              <span className="text-muted-foreground">· Banco <span className="text-foreground font-semibold">N{currentBank}</span></span>
            </>
          ) : (
            <span className="text-muted-foreground">— mover sobre el banco activo —</span>
          )}
        </div>

        {selectedPolygon && (
          <div className="bg-card/95 backdrop-blur border border-border rounded-md shadow-md px-3 py-1.5 flex items-center gap-3 font-mono text-[10px] pointer-events-auto">
            <span className="uppercase tracking-wider text-muted-foreground">Seleccionado</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: selectedPolygon.kind === 'mineral' ? 'hsl(var(--mineral))' : 'hsl(var(--primary))' }} />
              <span className="font-semibold text-foreground">{selectedPolygon.label}</span>
            </span>
            <span className="text-muted-foreground">{selectedPolygon.points.length - 1} vértices</span>
            <span className="text-muted-foreground">N{selectedPolygon.bank}</span>
          </div>
        )}

        {/* Scale */}
        <div className="bg-card/95 backdrop-blur border border-border rounded-md shadow-md px-2.5 py-1.5 flex items-center gap-2 font-mono text-[10px] pointer-events-auto">
          <span className="uppercase tracking-wider text-muted-foreground">Escala</span>
          <div className="flex items-center gap-0.5">
            <div className="h-1 w-6 bg-foreground" />
            <div className="h-1 w-6 bg-muted-foreground" />
            <div className="h-1 w-6 bg-foreground" />
          </div>
          <span className="text-foreground">25 m</span>
        </div>
      </div>
    </>
  );
}

function Coord({ label, value, unit, color }: { label: string; value: string; unit: string; color: string }) {
  return (
    <span className="flex items-baseline gap-1">
      <span className={`${color} font-semibold`}>{label}</span>
      <span className="text-foreground">{value}</span>
      <span className="text-muted-foreground">{unit}</span>
    </span>
  );
}
