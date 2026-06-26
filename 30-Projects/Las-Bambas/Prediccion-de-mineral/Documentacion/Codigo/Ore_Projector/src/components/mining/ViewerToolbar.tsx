import { MousePointer, Crosshair, Mountain, Trash2, CircleDot, Sparkles, Hexagon, Drill, Filter, ScanLine } from 'lucide-react';
import type { FilterClass, FilterSource, LayerVisibility } from '@/types/mining';

interface ViewerToolbarProps {
  editMode: 'explore' | 'classify';
  projectionRun: boolean;
  blocksLoaded: boolean;
  filterClass: FilterClass;
  filterSource: FilterSource;
  onSetFilterClass: (f: FilterClass) => void;
  onSetFilterSource: (f: FilterSource) => void;
  layers: LayerVisibility;
  onToggleLayer: (l: keyof LayerVisibility) => void;
}

function Chip({ active, onClick, color, icon: Icon, label, title }: {
  active: boolean; onClick: () => void; color?: string;
  icon: React.ElementType; label: string; title?: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title || label}
      className={`flex items-center gap-1 px-2 h-7 rounded text-[10px] font-mono uppercase tracking-wider border transition-colors ${
        active
          ? 'bg-primary/10 text-primary border-primary/40'
          : 'bg-card text-muted-foreground border-border hover:text-foreground hover:bg-accent'
      }`}
    >
      {color && <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />}
      <Icon className="w-3 h-3" />
      {label}
    </button>
  );
}

export default function ViewerToolbar({
  editMode, projectionRun, blocksLoaded,
  filterClass, filterSource, onSetFilterClass, onSetFilterSource,
  layers, onToggleLayer,
}: ViewerToolbarProps) {
  const allOff = filterClass === 'all' && filterSource === 'all';

  return (
    <div className="viewer-toolbar gap-2">
      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Visor 3D</span>

      {blocksLoaded && (
        <>
          <div className="w-px h-5 bg-border" />

          {/* Quick filters: clase */}
          <div className="flex items-center gap-1">
            <Filter className="w-3 h-3 text-muted-foreground" />
            <Chip
              active={filterClass === 'mineral'}
              onClick={() => onSetFilterClass(filterClass === 'mineral' ? 'all' : 'mineral')}
              color="hsl(var(--mineral))"
              icon={Mountain}
              label="Mineral"
              title="Mostrar solo mineral"
            />
            <Chip
              active={filterClass === 'waste'}
              onClick={() => onSetFilterClass(filterClass === 'waste' ? 'all' : 'waste')}
              color="hsl(var(--waste))"
              icon={Trash2}
              label="Desmonte"
              title="Mostrar solo desmonte"
            />
          </div>

          <div className="w-px h-5 bg-border" />

          {/* Quick filters: origen */}
          <div className="flex items-center gap-1">
            <Chip
              active={filterSource === 'real'}
              onClick={() => onSetFilterSource(filterSource === 'real' ? 'all' : 'real')}
              icon={CircleDot}
              label="Real"
              title="Mostrar solo datos reales (banco conocido)"
            />
            <Chip
              active={filterSource === 'projected'}
              onClick={() => onSetFilterSource(filterSource === 'projected' ? 'all' : 'projected')}
              icon={Sparkles}
              label="Proyectado"
              title="Mostrar solo datos proyectados"
            />
          </div>

          <div className="w-px h-5 bg-border" />

          {/* Layer quick toggles */}
          <div className="flex items-center gap-1">
            <Chip
              active={layers.boundaryMineral || layers.boundaryWaste}
              onClick={() => {
                const on = layers.boundaryMineral || layers.boundaryWaste;
                if (on) {
                  if (layers.boundaryMineral) onToggleLayer('boundaryMineral');
                  if (layers.boundaryWaste) onToggleLayer('boundaryWaste');
                } else {
                  onToggleLayer('boundaryMineral');
                  onToggleLayer('boundaryWaste');
                }
              }}
              icon={Hexagon}
              label="Boundaries"
              title="Mostrar/ocultar boundaries"
            />
            <Chip
              active={layers.prodDrills || layers.diamondDrills}
              onClick={() => {
                const on = layers.prodDrills || layers.diamondDrills;
                if (on) {
                  if (layers.prodDrills) onToggleLayer('prodDrills');
                  if (layers.diamondDrills) onToggleLayer('diamondDrills');
                } else {
                  onToggleLayer('prodDrills');
                  onToggleLayer('diamondDrills');
                }
              }}
              icon={Drill}
              label="Taladros"
              title="Mostrar/ocultar taladros"
            />
            <Chip
              active={layers.dxfArea}
              onClick={() => onToggleLayer('dxfArea')}
              color="#f59e0b"
              icon={ScanLine}
              label="Área DXF"
              title="Mostrar/ocultar área de proyección (DXF)"
            />
          </div>

          {!allOff && (
            <button
              onClick={() => { onSetFilterClass('all'); onSetFilterSource('all'); }}
              className="text-[10px] font-mono text-primary hover:underline ml-1"
            >
              limpiar filtros
            </button>
          )}
        </>
      )}

      <div className="flex-1" />

      {editMode !== 'explore' && (
        <span className="flex items-center gap-1 text-[10px] font-mono text-primary font-medium">
          <Crosshair className="w-3 h-3" />
          Modo clasificación activo
        </span>
      )}
    </div>
  );
}
