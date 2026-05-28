import {
  Box, Drill, Diamond, Hexagon, History, Eye, EyeOff, Undo2, Check,
  FileDown, Download, ChevronDown, ChevronRight, MousePointer, Crosshair
} from 'lucide-react';
import { useState } from 'react';
import type { WorkflowStep, LayerVisibility, ChangeRecord, Classification } from '@/types/mining';

interface SidebarProps {
  currentStep: WorkflowStep;
  blocks: { length: number };
  drillholes: { type: string }[];
  boundaryLoaded: boolean;
  historicalLoaded: boolean;
  projectionRun: boolean;
  changes: ChangeRecord[];
  layers: LayerVisibility;
  stats: {
    totalBlocks: number; mineralBlocks: number; wasteBlocks: number;
    unclassifiedBlocks: number; changesCount: number;
    level1Blocks: number; level2Blocks: number; level3Blocks: number; level4Blocks: number;
  };
  editMode: 'explore' | 'classify';
  selectedBlocksCount: number;
  onLoadBlockModel: () => void;
  onLoadProdDrills: () => void;
  onLoadDiamondDrills: () => void;
  onLoadBoundary: () => void;
  onLoadHistorical: () => void;
  onClassify: (c: Classification) => void;
  onUndo: () => void;
  onToggleLayer: (l: keyof LayerVisibility) => void;
  onSetEditMode: (m: 'explore' | 'classify') => void;
}

function Section({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="mining-section-title w-full flex items-center justify-between hover:text-foreground transition-colors"
      >
        {title}
        {open ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
      </button>
      {open && <div className="px-2 pb-3 space-y-1">{children}</div>}
    </div>
  );
}

function StepButton({ icon: Icon, label, loaded, active, onClick, disabled, count }: {
  icon: React.ElementType; label: string; loaded?: boolean; active?: boolean;
  onClick: () => void; disabled?: boolean; count?: number;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`mining-btn text-xs ${active ? 'bg-primary/8 text-primary border-l-2 border-primary' : ''} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
    >
      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
      <span className="flex-1 text-left">{label}</span>
      {count != null && count > 0 && (
        <span className="text-[10px] font-mono text-muted-foreground">{count}</span>
      )}
      {loaded && <Check className="w-3 h-3 text-[hsl(var(--mineral))]" />}
    </button>
  );
}

function LayerToggle({ label, color, visible, onToggle, count }: {
  label: string; color: string; visible: boolean; onToggle: () => void; count?: number;
}) {
  return (
    <button onClick={onToggle} className="mining-layer-item w-full hover:bg-accent transition-colors">
      <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
      <span className="flex-1 text-left text-foreground/70">{label}</span>
      {count != null && <span className="text-[10px] font-mono text-muted-foreground mr-1">{count}</span>}
      {visible ? <Eye className="w-3 h-3 text-muted-foreground" /> : <EyeOff className="w-3 h-3 text-muted-foreground/40" />}
    </button>
  );
}

export default function Sidebar(props: SidebarProps) {
  const {
    currentStep, blocks, drillholes, boundaryLoaded, historicalLoaded,
    projectionRun, changes, layers, stats, editMode, selectedBlocksCount,
    onLoadBlockModel, onLoadProdDrills, onLoadDiamondDrills, onLoadBoundary,
    onLoadHistorical, onClassify, onUndo, onToggleLayer, onSetEditMode,
  } = props;

  const prodCount = drillholes.filter(d => d.type === 'production').length;
  const diamCount = drillholes.filter(d => d.type === 'diamond').length;

  return (
    <aside className="w-72 h-full bg-card border-r border-border flex flex-col overflow-hidden flex-shrink-0">
      <div className="flex-1 overflow-y-auto">
        {/* Data Loading */}
        <Section title="Datos de Entrada">
          <StepButton icon={Box} label="Modelo de bloques"
            loaded={stats.totalBlocks > 0} active={currentStep === 'block-model'}
            onClick={onLoadBlockModel} count={stats.totalBlocks} />
          <StepButton icon={Drill} label="Taladros producción"
            loaded={prodCount > 0} active={currentStep === 'prod-drills'}
            onClick={onLoadProdDrills} disabled={stats.totalBlocks === 0} count={prodCount} />
          <StepButton icon={Diamond} label="Taladros diamantinos"
            loaded={diamCount > 0} active={currentStep === 'diamond-drills'}
            onClick={onLoadDiamondDrills} disabled={prodCount === 0} count={diamCount} />
          <StepButton icon={Hexagon} label="Boundary / zona análisis"
            loaded={boundaryLoaded} active={currentStep === 'boundary'}
            onClick={onLoadBoundary} disabled={diamCount === 0} />
          <StepButton icon={History} label="Histórico proyecciones"
            loaded={historicalLoaded} active={currentStep === 'historical'}
            onClick={onLoadHistorical} disabled={!boundaryLoaded} />
        </Section>

        {/* Projection Stats */}
        {projectionRun && (
          <Section title="Proyección">
            <div className="px-2 py-2 space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                <div className="bg-[hsl(var(--mineral))]/8 rounded p-2 text-center">
                  <div className="text-sm font-bold text-[hsl(var(--mineral))]">{stats.mineralBlocks}</div>
                  <div className="text-[9px] font-mono text-muted-foreground">Mineral</div>
                </div>
                <div className="bg-muted rounded p-2 text-center">
                  <div className="text-sm font-bold text-muted-foreground">{stats.wasteBlocks}</div>
                  <div className="text-[9px] font-mono text-muted-foreground">Desmonte</div>
                </div>
                <div className="bg-[hsl(var(--unclassified))]/8 rounded p-2 text-center">
                  <div className="text-sm font-bold text-[hsl(var(--unclassified))]">{stats.unclassifiedBlocks}</div>
                  <div className="text-[9px] font-mono text-muted-foreground">S/Clasif.</div>
                </div>
              </div>
              <div className="space-y-1 pt-1">
                {[1, 2, 3, 4].map(level => {
                  const count = stats[`level${level}Blocks` as keyof typeof stats] as number;
                  return (
                    <div key={level} className="flex items-center justify-between text-[10px] font-mono px-1">
                      <span className="text-muted-foreground">
                        Nivel {level} {level === 1 ? '(conocido)' : '(proyectado)'}
                      </span>
                      <span className="text-foreground">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>
        )}

        {/* Layers */}
        <Section title="Capas">
          <LayerToggle label="Modelo bloques" color="hsl(var(--primary))" visible={layers.blockModel}
            onToggle={() => onToggleLayer('blockModel')} count={stats.totalBlocks} />
          <LayerToggle label="Taladros prod." color="hsl(var(--drillhole-prod))" visible={layers.prodDrills}
            onToggle={() => onToggleLayer('prodDrills')} count={prodCount} />
          <LayerToggle label="Taladros diam." color="hsl(var(--drillhole-diam))" visible={layers.diamondDrills}
            onToggle={() => onToggleLayer('diamondDrills')} count={diamCount} />
          <LayerToggle label="Boundary Mineral" color="hsl(var(--mineral))" visible={layers.boundaryMineral}
            onToggle={() => onToggleLayer('boundaryMineral')} />
          <LayerToggle label="Boundary Desmonte" color="hsl(var(--primary))" visible={layers.boundaryWaste}
            onToggle={() => onToggleLayer('boundaryWaste')} />
          <LayerToggle label="Proyección" color="hsl(var(--projection))" visible={layers.projection}
            onToggle={() => onToggleLayer('projection')} />
          <LayerToggle label="Histórico" color="hsl(0,0%,65%)" visible={layers.historical}
            onToggle={() => onToggleLayer('historical')} />
        </Section>

        {/* Classification Tools */}
        {projectionRun && (
          <Section title="Herramientas">
            <div className="flex gap-1 px-1">
              {(['explore', 'classify'] as const).map(mode => (
                <button key={mode} onClick={() => onSetEditMode(mode)}
                  className={`flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium py-2 rounded transition-colors ${
                    editMode === mode
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  }`}>
                  {mode === 'explore' ? <MousePointer className="w-3 h-3" /> : <Crosshair className="w-3 h-3" />}
                  {mode === 'explore' ? 'Explorar' : 'Clasificar'}
                </button>
              ))}
            </div>

            {editMode === 'classify' && selectedBlocksCount > 0 && (
              <div className="space-y-1.5 mt-2 px-1">
                <div className="text-[10px] font-mono text-primary font-medium">
                  {selectedBlocksCount} bloque{selectedBlocksCount > 1 ? 's' : ''} seleccionado{selectedBlocksCount > 1 ? 's' : ''}
                </div>
                <div className="flex gap-1">
                  <button onClick={() => onClassify('mineral')}
                    className="flex-1 text-[11px] font-medium py-2 rounded bg-[hsl(var(--mineral))]/12 text-[hsl(var(--mineral))] hover:bg-[hsl(var(--mineral))]/20 transition-colors border border-[hsl(var(--mineral))]/20">
                    Mineral
                  </button>
                  <button onClick={() => onClassify('waste')}
                    className="flex-1 text-[11px] font-medium py-2 rounded bg-muted text-muted-foreground hover:bg-muted/80 transition-colors border border-border">
                    Desmonte
                  </button>
                </div>
              </div>
            )}

            <button onClick={onUndo} disabled={changes.length === 0}
              className={`mining-btn text-xs mt-1 ${changes.length === 0 ? 'opacity-40' : ''}`}>
              <Undo2 className="w-3.5 h-3.5" /> Deshacer último cambio
            </button>
          </Section>
        )}

        {/* Change History */}
        {changes.length > 0 && (
          <Section title={`Historial (${changes.length})`} defaultOpen={false}>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {changes.slice(0, 15).map(c => (
                <div key={c.id} className="px-2 py-1.5 bg-muted rounded">
                  <div className="text-[10px] font-mono text-muted-foreground">
                    {c.timestamp.toLocaleTimeString()} — {c.user}
                  </div>
                  <div className="text-[10px] font-mono text-foreground">
                    {c.blockIds.length} bloque{c.blockIds.length > 1 ? 's' : ''}: {' '}
                    <span className={c.from === 'mineral' ? 'text-[hsl(var(--mineral))]' : 'text-muted-foreground'}>{c.from}</span>
                    {' → '}
                    <span className={c.to === 'mineral' ? 'text-[hsl(var(--mineral))]' : 'text-muted-foreground'}>{c.to}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Export */}
        <Section title="Exportar" defaultOpen={false}>
          <button disabled={!projectionRun}
            className={`mining-btn text-xs ${!projectionRun ? 'opacity-40 cursor-not-allowed' : ''}`}
            onClick={() => {
              const data = JSON.stringify({ blocks: [], changes: [], exported: new Date().toISOString() }, null, 2);
              const blob = new Blob([data], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url; a.download = 'proyeccion_resultado.json'; a.click();
            }}>
            <FileDown className="w-3.5 h-3.5" /> Exportar resultado (JSON/CSV)
          </button>
          <button disabled={!projectionRun}
            className={`mining-btn text-xs ${!projectionRun ? 'opacity-40 cursor-not-allowed' : ''}`}
            onClick={() => {
              let csv = 'x,y,z,nivel,clasificacion,ley,confianza,origen\n';
              csv += 'Demo export - cargue datos primero';
              const blob = new Blob([csv], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url; a.download = 'bloques_clasificados.csv'; a.click();
            }}>
            <Download className="w-3.5 h-3.5" /> Exportar polígono (DXF)
          </button>
        </Section>
      </div>

      {/* Footer */}
      <div className="px-3 py-2 border-t border-border bg-muted/50">
        <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
          <Box className="w-3 h-3" />
          <span>{stats.totalBlocks} bloques</span>
          <span>·</span>
          <span>{drillholes.length} taladros</span>
          <span>·</span>
          <span>{stats.changesCount} cambios</span>
        </div>
      </div>
    </aside>
  );
}
