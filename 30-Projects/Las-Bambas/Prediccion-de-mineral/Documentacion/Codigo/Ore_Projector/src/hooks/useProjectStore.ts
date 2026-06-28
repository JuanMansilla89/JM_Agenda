import { useState, useCallback, useMemo } from 'react';
import type {
  Block, Drillhole, ChangeRecord, LayerVisibility, WorkflowStep,
  Classification, BoundaryKind, FilterClass, FilterSource, BoundaryPoly, DrillColorMode,
} from '@/types/mining';
import { LITHOLOGIES } from '@/lib/lithology';
import {
  LB_BLOCKS, LB_DRILLHOLES, LB_POLYGONS,
  LB_PROJECT_NAME, LB_PROJECT_ZONE,
} from '@/data/lasBambasDemo';

export type ViewMode = '3d' | 'top' | 'side';

export interface DrawingState {
  kind: BoundaryKind;
  bank: number;
  points: [number, number][];
}

export interface CursorCoord {
  x: number; // scene
  z: number; // scene
  bank: number;
}

function pickLith(grade: number): string {
  if (grade > 1.4) return 'OX';
  if (grade > 0.9) return 'MX';
  if (grade > 0.5) return 'SU';
  if (grade > 0.2) return 'BX';
  return 'ES';
}

const INITIAL_MINERAL: [number, number][] = [
  [-5, -4], [-1, -6], [4, -5], [6, -1], [5, 4], [1, 6], [-4, 5], [-6, 1], [-5, -4],
];
const INITIAL_WASTE: [number, number][] = [
  [-9, -8], [-5, -10], [2, -9], [8, -7], [10, -2], [9, 4], [6, 9], [1, 10],
  [-4, 9], [-8, 5], [-10, 1], [-9, -8],
];

function newId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function seedPolygons(): BoundaryPoly[] {
  return [
    { id: newId('poly'), kind: 'mineral', bank: 1, points: INITIAL_MINERAL.map(p => [...p] as [number, number]), version: 1, createdAt: new Date(), label: 'MIN-N1-A' },
    { id: newId('poly'), kind: 'waste',   bank: 1, points: INITIAL_WASTE.map(p => [...p] as [number, number]),   version: 1, createdAt: new Date(), label: 'DES-N1-A' },
  ];
}

function generateDemoBlocks(): Block[] {
  const blocks: Block[] = [];
  for (let x = -10; x <= 10; x += 2.5) {
    for (let y = -10; y <= 10; y += 2.5) {
      for (let level = 1; level <= 4; level++) {
        const z = 4 - (level - 1) * 3;
        const dist = Math.sqrt(x * x + y * y);
        const depthFactor = level * 0.15;
        const grade = Math.max(0, 2.0 - dist * 0.12 - depthFactor + (Math.random() - 0.5) * 0.6);
        const isKnown = level === 1;
        const classification: Classification = grade > 0.6 ? 'mineral' : grade > 0.2 ? 'waste' : 'unclassified';
        blocks.push({
          id: `${x}_${y}_${z}_L${level}`,
          x, y, z, level,
          classification: isKnown ? classification : 'unclassified',
          grade: Math.round(grade * 100) / 100,
          confidence: isKnown ? 'high' : 'low',
          origin: 'automatic',
          originalClassification: classification,
          tonnage: Math.round(15 + Math.random() * 10),
          lithology: pickLith(grade),
        });
      }
    }
  }
  return blocks;
}

function generateDemoDrills(): Drillhole[] {
  const drills: Drillhole[] = [];
  const prodPositions: { x: number; y: number }[] = [];
  const step = 2.8;
  for (let row = 0; row * step <= 18; row++) {
    const y = -9 + row * step;
    const offset = row % 2 === 0 ? 0 : step / 2;
    for (let col = 0; col * step + offset <= 18; col++) {
      const x = -9 + col * step + offset;
      if (x > 9 || y > 9) continue;
      prodPositions.push({
        x: x + (Math.random() - 0.5) * 0.5,
        y: y + (Math.random() - 0.5) * 0.5,
      });
    }
  }
  prodPositions.forEach((pos, i) => {
    const g1 = Math.random() * 2.2, g2 = Math.random() * 1.8, g3 = Math.random() * 1.2;
    drills.push({
      id: `prod-${i}`, type: 'production',
      collar: { x: pos.x, y: pos.y, z: 5.5 },
      depth: 3.0 + Math.random() * 0.3,
      intervals: [
        { from: 0, to: 1.0, grade: g1, lithology: pickLith(g1) },
        { from: 1.0, to: 2.0, grade: g2, lithology: pickLith(g2) },
        { from: 2.0, to: 3.0, grade: g3, lithology: pickLith(g3) },
      ],
    });
  });
  const diamPositions = [
    { x: -6, y: -6 }, { x: 6, y: 6 }, { x: -6, y: 6 }, { x: 6, y: -6 },
    { x: 0, y: 0 }, { x: 0, y: 7 }, { x: -7, y: 0 },
  ];
  diamPositions.forEach((pos, i) => {
    const g1 = Math.random() * 2, g2 = Math.random() * 1.5, g3 = Math.random() * 0.6;
    drills.push({
      id: `diam-${i}`, type: 'diamond', collar: { x: pos.x, y: pos.y, z: 5 },
      depth: 14 + Math.random() * 6,
      intervals: [
        { from: 0, to: 4, grade: g1, lithology: pickLith(g1) },
        { from: 4, to: 10, grade: g2, lithology: pickLith(g2) },
        { from: 10, to: 18, grade: g3, lithology: pickLith(g3) },
      ],
    });
  });
  return drills;
}

export function useProjectStore() {
  const [projectName] = useState(LB_PROJECT_NAME);
  const [projectZone] = useState(LB_PROJECT_ZONE);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [drillholes, setDrillholes] = useState<Drillhole[]>([]);
  const [boundaryLoaded, setBoundaryLoaded] = useState(false);
  const [historicalLoaded, setHistoricalLoaded] = useState(false);
  const [projectionRun, setProjectionRun] = useState(false);
  const [changes, setChanges] = useState<ChangeRecord[]>([]);
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('block-model');
  const [selectedBlocks, setSelectedBlocks] = useState<Set<string>>(new Set());
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [editMode, setEditMode] = useState<'explore' | 'classify'>('explore');
  const [projectionVersion, setProjectionVersion] = useState(0);
  const [layers, setLayers] = useState<LayerVisibility>({
    blockModel: true,
    prodDrills: true,
    diamondDrills: true,
    boundaryMineral: true,
    boundaryWaste: true,
    projection: true,
    historical: false,
    dxfArea: true,
  });
  const [viewMode, setViewMode] = useState<ViewMode>('3d');
  const [currentBank, setCurrentBank] = useState<number>(1);
  const [cameraVersion, setCameraVersion] = useState(0);
  const [showNeighbors, setShowNeighbors] = useState<boolean>(true);
  const toggleShowNeighbors = useCallback(() => setShowNeighbors(v => !v), []);
  const [visibleLithologies, setVisibleLithologies] = useState<Set<string>>(
    new Set(LITHOLOGIES.map(l => l.code))
  );
  const [highlightedLithology, setHighlightedLithology] = useState<string | null>(null);
  const [soloDrillholes, setSoloDrillholes] = useState<Set<string>>(new Set());

  // ───────── Polygons ─────────
  const [polygons, setPolygons] = useState<BoundaryPoly[]>([]);
  const [selectedPolygonId, setSelectedPolygonId] = useState<string | null>(null);
  const [editingPolygonId, setEditingPolygonId] = useState<string | null>(null);
  const [polygonSnapshot, setPolygonSnapshot] = useState<{ id: string; points: [number, number][] } | null>(null);
  const [polygonDirty, setPolygonDirty] = useState(false);
  const [drawing, setDrawing] = useState<DrawingState | null>(null);
  const [snapTolerance, setSnapTolerance] = useState<number>(0.6); // scene units
  const [snapEnabled, setSnapEnabled] = useState<boolean>(true);
  const [cursor, setCursor] = useState<CursorCoord | null>(null);

  // ───────── Quick filters ─────────
  const [filterClass, setFilterClass] = useState<FilterClass>('all');
  const [filterSource, setFilterSource] = useState<FilterSource>('all');
  const [drillColorMode, setDrillColorMode] = useState<DrillColorMode>('lithology');
  const [filterMinzones, setFilterMinzones] = useState<Set<string>>(new Set());
  const toggleFilterMinzone = useCallback((code: string) => {
    setFilterMinzones(prev => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code); else next.add(code);
      return next;
    });
  }, []);
  const clearFilterMinzones = useCallback(() => setFilterMinzones(new Set()), []);

  const labelFor = useCallback((kind: BoundaryKind, bank: number) => {
    const prefix = kind === 'mineral' ? 'MIN' : 'DES';
    const existing = polygons.filter(p => p.kind === kind && p.bank === bank).length;
    const suffix = String.fromCharCode(65 + existing); // A, B, C…
    return `${prefix}-N${bank}-${suffix}`;
  }, [polygons]);

  const logChange = useCallback((c: Omit<ChangeRecord, 'id' | 'timestamp' | 'user'>) => {
    setChanges(prev => [{
      id: newId('chg'),
      timestamp: new Date(),
      user: 'Geólogo Principal',
      ...c,
    }, ...prev]);
  }, []);

  // Snap: find nearest vertex from OTHER polygons on same bank within tolerance.
  const findSnap = useCallback((x: number, z: number, bank: number, excludePolyId?: string): { x: number; z: number; polyId: string; idx: number } | null => {
    if (!snapEnabled) return null;
    let best: { x: number; z: number; polyId: string; idx: number; d: number } | null = null;
    for (const poly of polygons) {
      if (poly.bank !== bank) continue;
      if (poly.id === excludePolyId) continue;
      const unique = poly.points.slice(0, -1);
      unique.forEach((p, i) => {
        const d = Math.hypot(p[0] - x, p[1] - z);
        if (d <= snapTolerance && (!best || d < best.d)) {
          best = { x: p[0], z: p[1], polyId: poly.id, idx: i, d };
        }
      });
    }
    return best;
  }, [polygons, snapEnabled, snapTolerance]);

  // ───────── Polygon actions ─────────
  const selectPolygon = useCallback((id: string | null) => {
    setSelectedPolygonId(id);
  }, []);

  const startEditPolygon = useCallback((id: string) => {
    const p = polygons.find(x => x.id === id);
    if (!p) return;
    if (p.bank !== currentBank) return; // protección: solo banco activo
    setSelectedPolygonId(id);
    setEditingPolygonId(id);
    setPolygonSnapshot({ id, points: p.points.map(pt => [...pt] as [number, number]) });
    setPolygonDirty(false);
  }, [polygons, currentBank]);

  const cancelEditPolygon = useCallback(() => {
    if (editingPolygonId && polygonSnapshot && polygonSnapshot.id === editingPolygonId) {
      setPolygons(prev => prev.map(p =>
        p.id === editingPolygonId ? { ...p, points: polygonSnapshot.points.map(pt => [...pt] as [number, number]) } : p
      ));
    }
    setEditingPolygonId(null);
    setPolygonSnapshot(null);
    setPolygonDirty(false);
  }, [editingPolygonId, polygonSnapshot]);

  const saveEditPolygon = useCallback(() => {
    if (!editingPolygonId) return;
    const p = polygons.find(x => x.id === editingPolygonId);
    if (p && polygonDirty) {
      setPolygons(prev => prev.map(pp => pp.id === editingPolygonId ? { ...pp, version: pp.version + 1 } : pp));
      logChange({
        kind: 'polygon-edit-vertices',
        blockIds: [], from: p.kind, to: p.kind,
        polygonId: p.id, polygonLabel: p.label, bank: p.bank,
        version: p.version + 1,
        note: `${p.points.length - 1} vértices`,
      });
    }
    setEditingPolygonId(null);
    setPolygonSnapshot(null);
    setPolygonDirty(false);
  }, [editingPolygonId, polygons, polygonDirty, logChange]);

  const updateVertex = useCallback((polyId: string, idx: number, x: number, z: number) => {
    // Snap
    const snap = findSnap(x, z, currentBank, polyId);
    const fx = snap ? snap.x : x;
    const fz = snap ? snap.z : z;
    setPolygons(prev => prev.map(p => {
      if (p.id !== polyId) return p;
      const next = p.points.map(pt => [...pt] as [number, number]);
      next[idx] = [fx, fz];
      if (idx === 0) next[next.length - 1] = [fx, fz];
      if (idx === next.length - 1) next[0] = [fx, fz];
      return { ...p, points: next };
    }));
    setPolygonDirty(true);
  }, [findSnap, currentBank]);

  const insertVertex = useCallback((polyId: string, afterIdx: number) => {
    setPolygons(prev => prev.map(p => {
      if (p.id !== polyId) return p;
      const a = p.points[afterIdx];
      const b = p.points[afterIdx + 1] ?? p.points[0];
      if (!a || !b) return p;
      const mid: [number, number] = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const next = p.points.map(pt => [...pt] as [number, number]);
      next.splice(afterIdx + 1, 0, mid);
      return { ...p, points: next };
    }));
    setPolygonDirty(true);
  }, []);

  const removeVertex = useCallback((polyId: string, idx: number) => {
    setPolygons(prev => prev.map(p => {
      if (p.id !== polyId) return p;
      if (p.points.length - 1 <= 3) return p;
      const next = p.points.map(pt => [...pt] as [number, number]);
      if (idx === 0 || idx === next.length - 1) {
        next.splice(0, 1);
        next[next.length - 1] = [next[0][0], next[0][1]];
      } else {
        next.splice(idx, 1);
      }
      return { ...p, points: next };
    }));
    setPolygonDirty(true);
  }, []);

  const deletePolygon = useCallback((polyId: string) => {
    const p = polygons.find(x => x.id === polyId);
    if (!p) return;
    if (p.bank !== currentBank) return;
    setPolygons(prev => prev.filter(x => x.id !== polyId));
    if (editingPolygonId === polyId) { setEditingPolygonId(null); setPolygonSnapshot(null); setPolygonDirty(false); }
    if (selectedPolygonId === polyId) setSelectedPolygonId(null);
    logChange({
      kind: 'polygon-delete',
      blockIds: [], from: p.kind, to: p.kind,
      polygonId: p.id, polygonLabel: p.label, bank: p.bank,
    });
  }, [polygons, currentBank, editingPolygonId, selectedPolygonId, logChange]);

  const reclassifyPolygon = useCallback((polyId: string, kind: BoundaryKind) => {
    const p = polygons.find(x => x.id === polyId);
    if (!p) return;
    if (p.bank !== currentBank) return;
    if (p.kind === kind) return;
    const label = `${kind === 'mineral' ? 'MIN' : 'DES'}-N${p.bank}-${(p.label?.split('-')[2]) || '?'}`;
    setPolygons(prev => prev.map(x => x.id === polyId ? { ...x, kind, label } : x));
    logChange({
      kind: 'polygon-reclassify',
      blockIds: [], from: p.kind, to: kind,
      polygonId: p.id, polygonLabel: label, bank: p.bank,
    });
  }, [polygons, currentBank, logChange]);

  // ───────── Drawing new polygon ─────────
  const startDrawing = useCallback((kind: BoundaryKind) => {
    setDrawing({ kind, bank: currentBank, points: [] });
    setEditingPolygonId(null);
    setSelectedPolygonId(null);
  }, [currentBank]);

  const cancelDrawing = useCallback(() => setDrawing(null), []);

  const addDrawingPoint = useCallback((x: number, z: number) => {
    setDrawing(prev => {
      if (!prev) return prev;
      const snap = findSnap(x, z, prev.bank);
      const fx = snap ? snap.x : x;
      const fz = snap ? snap.z : z;
      // Close if click near first point (when 3+ points already)
      if (prev.points.length >= 3) {
        const [px, pz] = prev.points[0];
        if (Math.hypot(px - fx, pz - fz) <= snapTolerance) {
          return prev; // will be finalized via finishDrawing
        }
      }
      return { ...prev, points: [...prev.points, [fx, fz]] };
    });
  }, [findSnap, snapTolerance]);

  const finishDrawing = useCallback(() => {
    setDrawing(prev => {
      if (!prev || prev.points.length < 3) return prev;
      const closed = [...prev.points, prev.points[0]] as [number, number][];
      const label = labelFor(prev.kind, prev.bank);
      const poly: BoundaryPoly = {
        id: newId('poly'), kind: prev.kind, bank: prev.bank,
        points: closed, version: 1, createdAt: new Date(), label,
      };
      setPolygons(p => [...p, poly]);
      logChange({
        kind: 'polygon-create',
        blockIds: [], from: prev.kind, to: prev.kind,
        polygonId: poly.id, polygonLabel: label, bank: prev.bank,
        note: `${closed.length - 1} vértices`,
      });
      setSelectedPolygonId(poly.id);
      return null;
    });
  }, [labelFor, logChange]);

  // ───────── Generic ─────────
  const toggleLithology = useCallback((code: string) => {
    setVisibleLithologies(prev => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code); else next.add(code);
      return next;
    });
  }, []);
  const toggleHighlightLithology = useCallback((code: string) => {
    setHighlightedLithology(prev => (prev === code ? null : code));
  }, []);
  const toggleDrillholeSolo = useCallback((id: string) => {
    setSoloDrillholes(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);
  const clearDrillholeSolo = useCallback(() => setSoloDrillholes(new Set()), []);
  const goBankUp = useCallback(() => {
    setCurrentBank(b => Math.max(1, b - 1));
    setCameraVersion(v => v + 1);
    setEditingPolygonId(null); setSelectedPolygonId(null); setDrawing(null);
  }, []);
  const goBankDown = useCallback(() => {
    setCurrentBank(b => Math.min(4, b + 1));
    setCameraVersion(v => v + 1);
    setEditingPolygonId(null); setSelectedPolygonId(null); setDrawing(null);
  }, []);
  const centerBank = useCallback(() => setCameraVersion(v => v + 1), []);

  const loadBlockModel = useCallback(() => {
    setBlocks(LB_BLOCKS.map(b => ({ ...b, createdAt: undefined })) as Block[]);
    setCurrentStep('prod-drills');
  }, []);
  const loadProdDrills = useCallback(() => {
    const prod = LB_DRILLHOLES.filter(d => d.type === 'production');
    setDrillholes(prev => [...prev.filter(d => d.type !== 'production'), ...prod]);
    setCurrentStep('diamond-drills');
  }, []);
  const loadDiamondDrills = useCallback(() => {
    const diam = LB_DRILLHOLES.filter(d => d.type === 'diamond');
    setDrillholes(prev => [...prev.filter(d => d.type !== 'diamond'), ...diam]);
    setCurrentStep('boundary');
  }, []);
  const loadBoundary = useCallback(() => {
    setBoundaryLoaded(true);
    setPolygons(prev => prev.length === 0
      ? LB_POLYGONS.map(p => ({ ...p, createdAt: new Date(p.createdAt as unknown as string) }))
      : prev);
    setCurrentStep('historical');
  }, []);
  const loadHistorical = useCallback(() => {
    setHistoricalLoaded(true);
    setCurrentStep('projection');
  }, []);

  const runProjection = useCallback(() => {
    setBlocks(prev => prev.map(b => {
      if (b.level === 1) return b;
      return {
        ...b,
        classification: b.originalClassification,
        confidence: b.level === 2 ? 'medium' : 'low',
        origin: 'automatic' as const,
      };
    }));
    setProjectionRun(true);
    setProjectionVersion(v => v + 1);
    setCurrentStep('edit');
  }, []);

  const classifySelected = useCallback((classification: Classification) => {
    if (selectedBlocks.size === 0) return;
    const blockIds = Array.from(selectedBlocks);
    const firstBlock = blocks.find(b => blockIds.includes(b.id));
    if (!firstBlock) return;
    logChange({
      kind: 'block-reclassify', blockIds,
      from: firstBlock.classification, to: classification,
      version: projectionVersion,
    });
    setBlocks(prev => prev.map(b =>
      selectedBlocks.has(b.id) ? { ...b, classification, origin: 'manual' as const, confidence: 'high' as const } : b
    ));
    setSelectedBlocks(new Set());
  }, [selectedBlocks, blocks, projectionVersion, logChange]);

  const classifySingleBlock = useCallback((blockId: string, classification: Classification) => {
    const block = blocks.find(b => b.id === blockId);
    if (!block) return;
    logChange({
      kind: 'block-reclassify', blockIds: [blockId],
      from: block.classification, to: classification, version: projectionVersion,
    });
    setBlocks(prev => prev.map(b =>
      b.id === blockId ? { ...b, classification, origin: 'manual' as const, confidence: 'high' as const } : b
    ));
  }, [blocks, projectionVersion, logChange]);

  const undoLastChange = useCallback(() => {
    if (changes.length === 0) return;
    const last = changes[0];
    if (!last.kind || last.kind === 'block-reclassify') {
      setBlocks(prev => prev.map(b =>
        last.blockIds.includes(b.id) ? { ...b, classification: last.from } : b
      ));
    }
    setChanges(prev => prev.slice(1));
  }, [changes]);

  const toggleLayer = useCallback((layer: keyof LayerVisibility) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  }, []);

  const toggleBlockSelection = useCallback((blockId: string) => {
    setSelectedBlocks(prev => {
      const next = new Set(prev);
      if (next.has(blockId)) next.delete(blockId);
      else next.add(blockId);
      return next;
    });
    setSelectedBlockId(blockId);
  }, []);

  const selectBlock = useCallback((blockId: string) => setSelectedBlockId(blockId || null), []);

  const stats = useMemo(() => ({
    totalBlocks: blocks.length,
    mineralBlocks: blocks.filter(b => b.classification === 'mineral').length,
    wasteBlocks: blocks.filter(b => b.classification === 'waste').length,
    unclassifiedBlocks: blocks.filter(b => b.classification === 'unclassified').length,
    changesCount: changes.length,
    level1Blocks: blocks.filter(b => b.level === 1).length,
    level2Blocks: blocks.filter(b => b.level === 2).length,
    level3Blocks: blocks.filter(b => b.level === 3).length,
    level4Blocks: blocks.filter(b => b.level === 4).length,
  }), [blocks, changes]);

  const selectedBlockData = useMemo(() => {
    if (!selectedBlockId) return null;
    return blocks.find(b => b.id === selectedBlockId) || null;
  }, [selectedBlockId, blocks]);

  const selectedPolygon = useMemo(() =>
    polygons.find(p => p.id === selectedPolygonId) || null,
  [polygons, selectedPolygonId]);

  return {
    projectName, projectZone,
    blocks, drillholes, boundaryLoaded, historicalLoaded, projectionRun,
    changes, currentStep, setCurrentStep,
    selectedBlocks, selectedBlockId, selectedBlockData, editMode, setEditMode, layers,
    projectionVersion,
    viewMode, setViewMode,
    currentBank, setCurrentBank, goBankUp, goBankDown, centerBank, cameraVersion,
    showNeighbors, toggleShowNeighbors,
    visibleLithologies, toggleLithology,
    highlightedLithology, toggleHighlightLithology,
    soloDrillholes, toggleDrillholeSolo, clearDrillholeSolo,

    // Polygons
    polygons, selectedPolygonId, selectedPolygon,
    editingPolygonId, polygonDirty,
    selectPolygon, startEditPolygon, cancelEditPolygon, saveEditPolygon,
    updateVertex, insertVertex, removeVertex,
    deletePolygon, reclassifyPolygon,
    drawing, startDrawing, cancelDrawing, addDrawingPoint, finishDrawing,
    snapTolerance, setSnapTolerance, snapEnabled, setSnapEnabled,
    findSnap,
    cursor, setCursor,

    filterClass, setFilterClass, filterSource, setFilterSource,
    drillColorMode, setDrillColorMode,
    filterMinzones, toggleFilterMinzone, clearFilterMinzones,
    loadBlockModel, loadProdDrills, loadDiamondDrills,
    loadBoundary, loadHistorical, runProjection,
    classifySelected, classifySingleBlock, undoLastChange, toggleLayer,
    toggleBlockSelection, selectBlock,
    stats,
  };
}
