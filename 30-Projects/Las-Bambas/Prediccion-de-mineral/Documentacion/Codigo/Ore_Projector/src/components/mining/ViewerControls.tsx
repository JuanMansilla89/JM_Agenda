import { Box, Square, ChevronUp, ChevronDown, Layers, Pencil, Mountain, Trash2, Check, X, ArrowLeftRight, Crosshair, Eye, EyeOff, Plus, Magnet, ArrowRightLeft, Filter } from 'lucide-react';
import type { ViewMode } from '@/hooks/useProjectStore';
import type { BoundaryKind, BoundaryPoly } from '@/types/mining';
import { MINZONES } from '@/lib/lithology';

interface Props {
  viewMode: ViewMode;
  onSetViewMode: (m: ViewMode) => void;
  currentBank: number;
  totalBanks?: number;
  onBankUp: () => void;
  onBankDown: () => void;
  baseElevation?: number;
  bankHeight?: number;
  onCenterBank: () => void;
  showNeighbors: boolean;
  onToggleShowNeighbors: () => void;

  // Polygons
  polygons: BoundaryPoly[];
  selectedPolygonId: string | null;
  editingPolygonId: string | null;
  polygonDirty: boolean;
  onSelectPolygon: (id: string | null) => void;
  onStartEdit: (id: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
  onDeletePolygon: (id: string) => void;
  onReclassify: (id: string, kind: BoundaryKind) => void;

  // Drawing
  drawing: { kind: BoundaryKind; bank: number; points: [number, number][] } | null;
  onStartDrawing: (kind: BoundaryKind) => void;
  onCancelDrawing: () => void;
  onFinishDrawing: () => void;

  // Snap
  snapEnabled: boolean;
  onToggleSnap: () => void;
  snapTolerance: number;
  onSetSnapTolerance: (v: number) => void;

  // Minzone filter
  filterMinzones: Set<string>;
  onToggleFilterMinzone: (code: string) => void;
  onClearFilterMinzones: () => void;
  drillsLoaded: boolean;
}

export default function ViewerControls({
  viewMode, onSetViewMode, currentBank, totalBanks = 4,
  onBankUp, onBankDown, baseElevation = 3840, bankHeight = 15,
  onCenterBank, showNeighbors, onToggleShowNeighbors,
  polygons, selectedPolygonId, editingPolygonId, polygonDirty,
  onSelectPolygon, onStartEdit, onSaveEdit, onCancelEdit,
  onDeletePolygon, onReclassify,
  drawing, onStartDrawing, onCancelDrawing, onFinishDrawing,
  snapEnabled, onToggleSnap, snapTolerance, onSetSnapTolerance,
  filterMinzones, onToggleFilterMinzone, onClearFilterMinzones, drillsLoaded,
}: Props) {
  const elevation = baseElevation - (currentBank - 1) * bankHeight;
  const isReal = currentBank === 1;
  const sourceTag = isReal ? 'REAL' : 'PROYECTADO';
  const bankPolys = polygons.filter(p => p.bank === currentBank);

  return (
    <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 items-end max-h-[calc(100vh-9rem)] overflow-y-auto">
      {/* Camera mode switch */}
      <div className="bg-card/95 backdrop-blur border border-border rounded-md shadow-md flex overflow-hidden">
        {([
          { id: '3d' as const, icon: Box, label: '3D', title: 'Perspectiva 3D' },
          { id: 'top' as const, icon: Square, label: 'Planta', title: 'Vista ortográfica en planta' },
          { id: 'side' as const, icon: ArrowLeftRight, label: 'Perfil', title: 'Vista ortográfica lateral' },
        ]).map((m, i) => {
          const Icon = m.icon;
          const active = viewMode === m.id;
          return (
            <button key={m.id} onClick={() => onSetViewMode(m.id)} title={m.title}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium transition-colors ${i > 0 ? 'border-l border-border' : ''} ${
                active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}>
              <Icon className="w-3.5 h-3.5" /> {m.label}
            </button>
          );
        })}
      </div>

      {/* Bank navigator */}
      <div className="bg-card/95 backdrop-blur border border-border rounded-md shadow-md min-w-[240px]">
        <div className="px-2.5 py-1 border-b border-border flex items-center justify-between gap-1.5">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Banco activo</span>
          </div>
          <span className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded ${isReal ? 'bg-foreground/10 text-foreground' : 'bg-primary/15 text-primary'}`}>{sourceTag}</span>
        </div>
        <div className="flex items-stretch">
          <button onClick={onBankUp} disabled={currentBank === 1}
            className="flex flex-col items-center justify-center px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed border-r border-border" title="Banco superior">
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <div className="px-3 py-1 text-center flex-1">
            <div className="text-[10px] font-mono text-muted-foreground">N{currentBank} / {totalBanks} · cota</div>
            <div className="text-[14px] font-mono font-bold text-foreground leading-tight">{elevation}</div>
          </div>
          <button onClick={onBankDown} disabled={currentBank === totalBanks}
            className="flex flex-col items-center justify-center px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed border-l border-border" title="Banco inferior">
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button onClick={onCenterBank}
            className="flex flex-col items-center justify-center px-2 py-1 text-muted-foreground hover:text-primary hover:bg-accent border-l border-border" title="Centrar banco actual">
            <Crosshair className="w-3.5 h-3.5" />
          </button>
        </div>
        <button onClick={onToggleShowNeighbors}
          className={`w-full border-t border-border px-2.5 py-1 flex items-center justify-between gap-1.5 text-[10px] font-mono uppercase tracking-wider transition-colors ${showNeighbors ? 'text-foreground hover:bg-accent' : 'text-muted-foreground hover:bg-accent'}`}>
          <span className="flex items-center gap-1.5">
            {showNeighbors ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
            Vecinos ±1
          </span>
          <span className={showNeighbors ? 'text-primary' : 'text-muted-foreground'}>{showNeighbors ? 'CONTEXTO' : 'SOLO ACTIVO'}</span>
        </button>
      </div>

      {/* Filtro MINZONE */}
      {drillsLoaded && (
        <div className="bg-card/95 backdrop-blur border border-border rounded-md shadow-md min-w-[240px] overflow-hidden">
          <div className="px-2.5 py-1 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Filter className="w-3 h-3 text-muted-foreground" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Filtro MINZONE</span>
            </div>
            {filterMinzones.size > 0 && (
              <button onClick={onClearFilterMinzones}
                className="text-[9px] font-mono text-primary hover:underline">
                limpiar
              </button>
            )}
          </div>
          <div className="p-1.5 flex flex-wrap gap-1">
            {MINZONES.map(mz => {
              const active = filterMinzones.has(mz.code);
              return (
                <button
                  key={mz.code}
                  onClick={() => onToggleFilterMinzone(mz.code)}
                  title={mz.label}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-sm text-[10px] font-mono border transition-colors"
                  style={active
                    ? { backgroundColor: mz.color, borderColor: mz.color, color: '#fff', fontWeight: 700 }
                    : { borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }
                  }
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: mz.color, opacity: active ? 1 : 0.7 }} />
                  {mz.code}
                </button>
              );
            })}
          </div>
          {filterMinzones.size > 0 && (
            <div className="px-2.5 pb-1.5 text-[9px] font-mono text-muted-foreground">
              Mostrando: {[...filterMinzones].join(', ')}
            </div>
          )}
        </div>
      )}

      {/* Polygons panel */}
      <div className="bg-card/95 backdrop-blur border border-border rounded-md shadow-md w-[260px] overflow-hidden">
        <div className="px-2.5 py-1 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Pencil className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Polígonos · N{currentBank}</span>
          </div>
          <span className="text-[9px] font-mono text-muted-foreground">{bankPolys.length}</span>
        </div>

        {/* Create new */}
        {!drawing ? (
          <div className="flex border-b border-border">
            <button onClick={() => onStartDrawing('mineral')}
              className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium text-[hsl(var(--mineral))] hover:bg-accent border-r border-border" title="Nuevo polígono mineral">
              <Plus className="w-3 h-3" /> <Mountain className="w-3 h-3" /> Mineral
            </button>
            <button onClick={() => onStartDrawing('waste')}
              className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium text-primary hover:bg-accent" title="Nuevo polígono desmonte">
              <Plus className="w-3 h-3" /> <Trash2 className="w-3 h-3" /> Desmonte
            </button>
          </div>
        ) : (
          <div className="border-b border-border bg-muted/40 px-2.5 py-1.5">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-foreground">
                Dibujando {drawing.kind === 'mineral' ? 'MINERAL' : 'DESMONTE'} · N{drawing.bank}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground">{drawing.points.length} pts</span>
            </div>
            <div className="text-[9px] font-mono text-muted-foreground leading-tight mb-1.5">
              Clic en planta para agregar · clic cerca del 1er punto cierra · ≥3 puntos para guardar
            </div>
            <div className="flex gap-1">
              <button onClick={onCancelDrawing} className="flex-1 flex items-center justify-center gap-1 px-2 py-1 text-[10px] text-muted-foreground hover:text-foreground hover:bg-accent rounded border border-border">
                <X className="w-3 h-3" /> Cancelar
              </button>
              <button onClick={onFinishDrawing} disabled={drawing.points.length < 3}
                className="flex-1 flex items-center justify-center gap-1 px-2 py-1 text-[10px] font-semibold bg-primary text-primary-foreground rounded disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90">
                <Check className="w-3 h-3" /> Guardar
              </button>
            </div>
          </div>
        )}

        {/* List */}
        <div className="max-h-[200px] overflow-y-auto">
          {bankPolys.length === 0 && (
            <div className="px-2.5 py-3 text-[10px] font-mono text-muted-foreground text-center">
              Sin polígonos en este banco
            </div>
          )}
          {bankPolys.map(p => {
            const isMin = p.kind === 'mineral';
            const isSel = selectedPolygonId === p.id;
            const isEdit = editingPolygonId === p.id;
            return (
              <div key={p.id}
                className={`px-2.5 py-1.5 border-b border-border last:border-b-0 ${isSel ? 'bg-accent/60' : 'hover:bg-accent/30'}`}>
                <div className="flex items-center justify-between gap-2">
                  <button onClick={() => onSelectPolygon(isSel ? null : p.id)} className="flex items-center gap-1.5 flex-1 min-w-0 text-left">
                    <span className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: isMin ? 'hsl(var(--mineral))' : 'hsl(var(--primary))' }} />
                    <span className="text-[11px] font-mono font-semibold text-foreground truncate">{p.label ?? p.id.slice(-6)}</span>
                    <span className="text-[9px] font-mono text-muted-foreground">v{p.version}</span>
                  </button>
                  <span className="text-[9px] font-mono text-muted-foreground">{p.points.length - 1} pts</span>
                </div>
                {isSel && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {!isEdit ? (
                      <button onClick={() => onStartEdit(p.id)}
                        className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono border border-border rounded hover:bg-accent">
                        <Pencil className="w-2.5 h-2.5" /> Editar
                      </button>
                    ) : (
                      <>
                        <button onClick={onSaveEdit} disabled={!polygonDirty}
                          className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono bg-primary text-primary-foreground rounded disabled:opacity-40 disabled:cursor-not-allowed">
                          <Check className="w-2.5 h-2.5" /> Guardar
                        </button>
                        <button onClick={onCancelEdit}
                          className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono border border-border rounded hover:bg-accent">
                          <X className="w-2.5 h-2.5" /> Cancelar
                        </button>
                      </>
                    )}
                    <button onClick={() => onReclassify(p.id, isMin ? 'waste' : 'mineral')}
                      title="Cambiar tipo mineral/desmonte"
                      className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono border border-border rounded hover:bg-accent">
                      <ArrowRightLeft className="w-2.5 h-2.5" /> → {isMin ? 'Desmonte' : 'Mineral'}
                    </button>
                    <button onClick={() => onDeletePolygon(p.id)}
                      className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono border border-border rounded text-primary hover:bg-primary/10">
                      <Trash2 className="w-2.5 h-2.5" /> Eliminar
                    </button>
                    {isEdit && polygonDirty && <span className="text-[9px] font-mono text-primary self-center">● cambios sin guardar</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Snap */}
        <div className="border-t border-border px-2.5 py-1.5 bg-muted/30">
          <div className="flex items-center justify-between gap-2 mb-1">
            <button onClick={onToggleSnap}
              className={`flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider ${snapEnabled ? 'text-primary' : 'text-muted-foreground'}`}
              title="Activar/desactivar snap a vértices">
              <Magnet className="w-3 h-3" /> Snap {snapEnabled ? 'ON' : 'OFF'}
            </button>
            <span className="text-[10px] font-mono text-foreground">{(snapTolerance * 5).toFixed(1)} m</span>
          </div>
          <input type="range" min={0.1} max={1.5} step={0.05}
            value={snapTolerance} disabled={!snapEnabled}
            onChange={(e) => onSetSnapTolerance(parseFloat(e.target.value))}
            className="w-full h-1 accent-primary" />
        </div>
      </div>
    </div>
  );
}
