export type Classification = 'mineral' | 'waste' | 'unclassified';
export type ClassificationOrigin = 'automatic' | 'manual';
export type ConfidenceLevel = 'high' | 'medium' | 'low';

export interface Block {
  id: string;
  x: number;
  y: number;
  z: number;
  level: number; // 1=surface (known), 2-4=deeper (projected)
  classification: Classification;
  grade: number;
  confidence: ConfidenceLevel;
  origin: ClassificationOrigin;
  originalClassification: Classification;
  tonnage?: number;
  lithology?: string;
}

export type DrillColorMode = 'lithology' | 'minzone';

export interface Drillhole {
  id: string;
  type: 'production' | 'diamond';
  collar: { x: number; y: number; z: number };
  depth: number;
  intervals: DrillInterval[];
  minzone?: string;
}

export interface DrillInterval {
  from: number;
  to: number;
  grade: number;
  lithology?: string;
}

export type ChangeKind =
  | 'block-reclassify'
  | 'polygon-create'
  | 'polygon-delete'
  | 'polygon-edit-vertices'
  | 'polygon-reclassify';

export interface ChangeRecord {
  id: string;
  timestamp: Date;
  kind?: ChangeKind;
  blockIds: string[];
  from: Classification;
  to: Classification;
  reason?: string;
  user: string;
  version?: number;
  // Polygon-specific
  polygonId?: string;
  polygonLabel?: string;
  bank?: number;
  note?: string;
}

export interface ProjectSummary {
  id: string;
  name: string;
  zone: string;
  lastUpdated: Date;
  boundaryCount: number;
  prodDrillCount: number;
  diamDrillCount: number;
  projectionStatus: 'pending' | 'calculated' | 'validated';
  lastVersion: number;
  totalBlocks: number;
}

export interface ProjectState {
  name: string;
  blocks: Block[];
  drillholes: Drillhole[];
  boundaryLoaded: boolean;
  historicalLoaded: boolean;
  projectionRun: boolean;
  changes: ChangeRecord[];
}

export type WorkflowStep =
  | 'block-model'
  | 'prod-drills'
  | 'diamond-drills'
  | 'boundary'
  | 'historical'
  | 'projection'
  | 'edit'
  | 'export';

export interface LayerVisibility {
  blockModel: boolean;
  prodDrills: boolean;
  diamondDrills: boolean;
  boundaryMineral: boolean;
  boundaryWaste: boolean;
  projection: boolean;
  historical: boolean;
  dxfArea: boolean;
}

export type BoundaryKind = 'mineral' | 'waste';
export type FilterClass = 'all' | 'mineral' | 'waste';
export type FilterSource = 'all' | 'real' | 'projected';

export interface BoundaryPoly {
  id: string;
  kind: BoundaryKind;
  bank: number;
  points: [number, number][]; // closed: last === first
  version: number;
  createdAt: Date;
  label?: string;
}
