import { Box } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="text-center space-y-3">
        <Box className="w-14 h-14 text-muted-foreground/25 mx-auto" />
        <div>
          <p className="text-sm font-medium text-foreground/60">Sin datos cargados</p>
          <p className="text-xs text-muted-foreground mt-1">
            Cargue el modelo de bloques desde el panel lateral para comenzar la proyección
          </p>
        </div>
      </div>
    </div>
  );
}
