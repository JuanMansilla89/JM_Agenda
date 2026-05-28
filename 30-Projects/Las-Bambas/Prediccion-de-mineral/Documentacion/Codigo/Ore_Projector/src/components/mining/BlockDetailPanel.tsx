import { X } from 'lucide-react';
import type { Block, Classification } from '@/types/mining';

interface BlockDetailPanelProps {
  block: Block | null;
  onClose: () => void;
  onClassify: (blockId: string, classification: Classification) => void;
}

export default function BlockDetailPanel({ block, onClose, onClassify }: BlockDetailPanelProps) {
  if (!block) return null;

  const confidenceLabel = { high: 'Alta', medium: 'Media', low: 'Baja' }[block.confidence];
  const confidenceColor = { high: 'text-[hsl(var(--mineral))]', medium: 'text-[hsl(var(--unclassified))]', low: 'text-primary' }[block.confidence];
  const originLabel = block.origin === 'manual' ? 'Manual' : 'Automática';
  const classLabel = { mineral: 'Mineral', waste: 'Desmonte', unclassified: 'Sin Clasificar' }[block.classification];

  return (
    <div className="w-72 bg-card border-l border-border flex flex-col overflow-hidden flex-shrink-0">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider font-mono">Detalle del Bloque</h3>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Classification */}
        <div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1.5">Clasificación actual</div>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium ${
            block.classification === 'mineral'
              ? 'bg-[hsl(var(--mineral))]/10 text-[hsl(var(--mineral))]'
              : block.classification === 'waste'
              ? 'bg-muted text-muted-foreground'
              : 'bg-[hsl(var(--unclassified))]/10 text-[hsl(var(--unclassified))]'
          }`}>
            <div className={`w-2.5 h-2.5 rounded-sm ${
              block.classification === 'mineral' ? 'bg-[hsl(var(--mineral))]' :
              block.classification === 'waste' ? 'bg-[hsl(var(--waste))]' : 'bg-[hsl(var(--unclassified))]'
            }`} />
            {classLabel}
          </div>
        </div>

        {/* Attributes */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Atributos</div>
          {[
            { label: 'ID', value: block.id },
            { label: 'Coordenadas', value: `${block.x}, ${block.y}, ${block.z}` },
            { label: 'Nivel', value: `${block.level} ${block.level === 1 ? '(superficie)' : '(proyectado)'}` },
            { label: 'Ley (g/t)', value: block.grade.toFixed(2) },
            { label: 'Tonelaje (t)', value: block.tonnage?.toString() || '—' },
            { label: 'Litología', value: block.lithology || '—' },
          ].map(attr => (
            <div key={attr.label} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{attr.label}</span>
              <span className="font-mono text-foreground">{attr.value}</span>
            </div>
          ))}
        </div>

        {/* Confidence & Origin */}
        <div className="space-y-2 pt-2 border-t border-border">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Confianza</span>
            <span className={`font-mono font-medium ${confidenceColor}`}>{confidenceLabel}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Origen</span>
            <span className={`font-mono ${block.origin === 'manual' ? 'text-primary' : 'text-foreground'}`}>{originLabel}</span>
          </div>
        </div>

        {/* Suggested vs actual */}
        {block.originalClassification !== block.classification && (
          <div className="bg-primary/5 border border-primary/15 rounded p-3 space-y-1">
            <div className="text-[10px] font-mono text-primary font-medium uppercase">Sugerencia del sistema</div>
            <div className="text-xs text-foreground">
              Clasificación original: <span className="font-medium">{block.originalClassification === 'mineral' ? 'Mineral' : block.originalClassification === 'waste' ? 'Desmonte' : 'Sin clasificar'}</span>
            </div>
          </div>
        )}

        {/* Manual Classification */}
        <div className="pt-2 border-t border-border">
          <div className="text-[10px] font-mono text-muted-foreground uppercase mb-2">Reclasificar manualmente</div>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={() => onClassify(block.id, 'mineral')}
              className={`text-[11px] font-medium py-2 rounded transition-colors border ${
                block.classification === 'mineral'
                  ? 'bg-[hsl(var(--mineral))]/15 text-[hsl(var(--mineral))] border-[hsl(var(--mineral))]/30'
                  : 'bg-card text-foreground/60 border-border hover:border-[hsl(var(--mineral))]/30'
              }`}
            >
              Mineral
            </button>
            <button
              onClick={() => onClassify(block.id, 'waste')}
              className={`text-[11px] font-medium py-2 rounded transition-colors border ${
                block.classification === 'waste'
                  ? 'bg-muted text-muted-foreground border-border'
                  : 'bg-card text-foreground/60 border-border hover:border-muted-foreground/30'
              }`}
            >
              Desmonte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
