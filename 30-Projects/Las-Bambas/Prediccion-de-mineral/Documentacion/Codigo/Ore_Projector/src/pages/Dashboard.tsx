import { useNavigate } from 'react-router-dom';
import { FolderOpen, Plus, Search, CalendarDays, Layers, Drill, Diamond, ArrowRight } from 'lucide-react';
import type { ProjectSummary } from '@/types/mining';

const demoProjects: ProjectSummary[] = [
  {
    id: 'proj-1',
    name: 'Banco 3840-3825 — Zona Norte',
    zone: 'Tajo Ferrobamba · Nivel 3840',
    lastUpdated: new Date(2026, 2, 27, 14, 30),
    boundaryCount: 3,
    prodDrillCount: 24,
    diamDrillCount: 7,
    projectionStatus: 'calculated',
    lastVersion: 4,
    totalBlocks: 1296,
  },
  {
    id: 'proj-2',
    name: 'Banco 3825-3810 — Zona Sur',
    zone: 'Tajo Ferrobamba · Nivel 3825',
    lastUpdated: new Date(2026, 2, 25, 9, 15),
    boundaryCount: 2,
    prodDrillCount: 18,
    diamDrillCount: 5,
    projectionStatus: 'validated',
    lastVersion: 6,
    totalBlocks: 980,
  },
  {
    id: 'proj-3',
    name: 'Banco 3810-3795 — Zona Este',
    zone: 'Tajo Ferrobamba · Nivel 3810',
    lastUpdated: new Date(2026, 2, 22, 16, 45),
    boundaryCount: 1,
    prodDrillCount: 12,
    diamDrillCount: 3,
    projectionStatus: 'pending',
    lastVersion: 1,
    totalBlocks: 0,
  },
  {
    id: 'proj-4',
    name: 'Banco 3855-3840 — Zona Oeste',
    zone: 'Tajo Chalcobamba · Nivel 3855',
    lastUpdated: new Date(2026, 2, 20, 11, 0),
    boundaryCount: 4,
    prodDrillCount: 30,
    diamDrillCount: 9,
    projectionStatus: 'calculated',
    lastVersion: 3,
    totalBlocks: 1540,
  },
];

function statusLabel(status: ProjectSummary['projectionStatus']) {
  switch (status) {
    case 'pending': return { text: 'Pendiente', cls: 'bg-muted text-muted-foreground' };
    case 'calculated': return { text: 'Calculada', cls: 'bg-primary/10 text-primary' };
    case 'validated': return { text: 'Validada', cls: 'bg-[hsl(145,65%,38%)]/10 text-[hsl(145,65%,38%)]' };
  }
}

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Layers className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight">Proyección Mineral</h1>
              <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">Plataforma de Geología Operacional</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right mr-4">
              <div className="text-xs text-muted-foreground">Usuario</div>
              <div className="text-sm font-medium text-foreground">Geólogo Principal</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">GP</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">Proyectos de Proyección</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Gestione y acceda a sus proyecciones de mineral por banco y zona</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar proyecto..."
                className="pl-9 pr-4 py-2 text-sm bg-card border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors">
              <Plus className="w-4 h-4" />
              Nuevo Proyecto
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demoProjects.map(project => {
            const status = statusLabel(project.projectionStatus);
            return (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group"
                onClick={() => navigate('/project')}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5 font-mono">{project.zone}</p>
                  </div>
                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${status.cls}`}>
                    {status.text}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{project.prodDrillCount}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Tal. Prod.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{project.diamDrillCount}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Tal. Diam.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">{project.boundaryCount}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Boundaries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">v{project.lastVersion}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Versión</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="w-3 h-3" />
                    {project.lastUpdated.toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })}
                    {' · '}
                    {project.totalBlocks > 0 ? `${project.totalBlocks} bloques` : 'Sin datos'}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Abrir <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
