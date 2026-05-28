import { ArrowLeft, Save, Download, Clock, RefreshCw, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectHeaderProps {
  projectName: string;
  projectZone: string;
  projectionRun: boolean;
  projectionVersion: number;
  changesCount: number;
  onRunProjection: () => void;
  historicalLoaded: boolean;
}

export default function ProjectHeader({
  projectName, projectZone, projectionRun, projectionVersion,
  changesCount, onRunProjection, historicalLoaded,
}: ProjectHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="h-14 bg-card border-b border-border flex items-center px-4 gap-4 flex-shrink-0">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Proyectos</span>
      </button>

      <div className="w-px h-6 bg-border" />

      <div className="flex items-center gap-2 flex-1 min-w-0">
        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center flex-shrink-0">
          <Layers className="w-3 h-3 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <h1 className="text-sm font-semibold text-foreground truncate">{projectName}</h1>
          <p className="text-[10px] text-muted-foreground font-mono truncate">{projectZone}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {projectionRun && (
          <span className="text-[10px] font-mono text-muted-foreground hidden md:inline">
            v{projectionVersion} · {changesCount} cambio{changesCount !== 1 ? 's' : ''}
          </span>
        )}

        <button
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors"
          title="Historial"
        >
          <Clock className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Historial</span>
        </button>

        <button
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors"
          title="Guardar versión"
        >
          <Save className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Guardar</span>
        </button>

        <button
          onClick={onRunProjection}
          disabled={!historicalLoaded}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded text-xs font-semibold transition-colors ${
            historicalLoaded
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          {projectionRun ? 'Recalcular' : 'Calcular Proyección'}
        </button>
      </div>
    </header>
  );
}
