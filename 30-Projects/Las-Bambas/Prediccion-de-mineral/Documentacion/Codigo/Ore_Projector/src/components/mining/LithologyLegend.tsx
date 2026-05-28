import { Eye, EyeOff, Crosshair, X } from 'lucide-react';
import { LITHOLOGIES } from '@/lib/lithology';

interface Props {
  visible: Set<string>;
  highlighted: string | null;
  soloCount: number;
  onToggle: (code: string) => void;
  onHighlight: (code: string) => void;
  onClearSolo: () => void;
}

export default function LithologyLegend({
  visible, highlighted, soloCount, onToggle, onHighlight, onClearSolo,
}: Props) {
  return (
    <div className="absolute bottom-3 left-3 z-10 bg-card/95 backdrop-blur border border-border rounded-md shadow-md w-56 select-none">
      <div className="px-2.5 py-1.5 border-b border-border flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          Litología
        </span>
        {soloCount > 0 && (
          <button
            onClick={onClearSolo}
            className="flex items-center gap-1 text-[9px] font-mono text-primary hover:underline"
            title="Mostrar todos los taladros"
          >
            <X className="w-2.5 h-2.5" />
            Solo {soloCount}
          </button>
        )}
      </div>
      <div className="p-1">
        {LITHOLOGIES.map(l => {
          const isVisible = visible.has(l.code);
          const isHighlighted = highlighted === l.code;
          return (
            <div
              key={l.code}
              className={`flex items-center gap-1.5 px-1.5 py-1 rounded text-[11px] hover:bg-accent group ${
                isHighlighted ? 'bg-primary/8' : ''
              }`}
            >
              <span
                className="w-3 h-3 rounded-sm flex-shrink-0 border border-black/10"
                style={{ backgroundColor: l.color, opacity: isVisible ? 1 : 0.25 }}
              />
              <span className={`flex-1 font-mono ${isVisible ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                <span className="text-muted-foreground mr-1">{l.code}</span>
                {l.label}
              </span>
              <button
                onClick={() => onHighlight(l.code)}
                className={`p-0.5 rounded transition-colors ${
                  isHighlighted ? 'text-primary' : 'text-muted-foreground/40 hover:text-foreground opacity-0 group-hover:opacity-100'
                }`}
                title="Resaltar litología"
              >
                <Crosshair className="w-3 h-3" />
              </button>
              <button
                onClick={() => onToggle(l.code)}
                className="p-0.5 rounded text-muted-foreground/60 hover:text-foreground"
                title={isVisible ? 'Ocultar' : 'Mostrar'}
              >
                {isVisible ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              </button>
            </div>
          );
        })}
      </div>
      <div className="px-2.5 py-1 border-t border-border text-[9px] font-mono text-muted-foreground">
        Click taladro: aislar · {visible.size}/{LITHOLOGIES.length} visibles
      </div>
    </div>
  );
}
