import { Canvas, useThree, ThreeEvent, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid, Line, OrthographicCamera, PerspectiveCamera, GizmoHelper, GizmoViewport, Html } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import type { Block, Drillhole, LayerVisibility, BoundaryKind, FilterClass, FilterSource, BoundaryPoly } from '@/types/mining';
import { lithColor } from '@/lib/lithology';
import type { ViewMode, DrawingState, CursorCoord } from '@/hooks/useProjectStore';

const MINERAL_COLOR = new THREE.Color(0x2e8b57);
const WASTE_COLOR = new THREE.Color(0x888888);
const UNCLASSIFIED_COLOR = new THREE.Color(0xbbbbbb);
const SELECTED_COLOR = new THREE.Color(0xc0392b);
const BOUNDARY_MINERAL_COLOR = new THREE.Color(0x2e8b57);
const BOUNDARY_WASTE_COLOR = new THREE.Color(0xc0392b);
const SNAP_COLOR = new THREE.Color(0xffaa00);
const PROD_COLOR = new THREE.Color(0xd4760a);
const DIAM_COLOR = new THREE.Color(0x7b4dbd);
const PRELIMINARY_COLOR = new THREE.Color(0xcccccc);

export const LEVEL_Y: Record<number, number> = { 1: 4, 2: 1, 3: -2, 4: -5 };

function bankYof(bank: number) { return LEVEL_Y[bank] ?? 4; }
function colorForKind(kind: BoundaryKind) {
  return kind === 'mineral' ? BOUNDARY_MINERAL_COLOR : BOUNDARY_WASTE_COLOR;
}

function getBlockColor(block: Block, isSelected: boolean, projectionRun: boolean): THREE.Color {
  if (isSelected) return SELECTED_COLOR;
  if (!projectionRun && block.level > 1) return PRELIMINARY_COLOR;
  switch (block.classification) {
    case 'mineral': return MINERAL_COLOR;
    case 'waste': return WASTE_COLOR;
    default: return UNCLASSIFIED_COLOR;
  }
}

function getBlockOpacity(block: Block, isSelected: boolean, projectionRun: boolean, bankDelta: number, showNeighbors: boolean, polygonMode: boolean): number {
  if (bankDelta > 1) return 0;
  if (bankDelta === 1 && !showNeighbors) return 0;
  if (bankDelta === 0) {
    if (isSelected) return polygonMode ? 0.55 : 1;
    let base: number;
    if (!projectionRun && block.level > 1) base = 0.55;
    else if (block.classification === 'mineral') base = 0.95;
    else if (block.classification === 'waste') base = 0.7;
    else base = 0.55;
    return polygonMode ? base * 0.35 : base;
  }
  const dim = polygonMode ? 0.35 : 1;
  if (block.classification === 'mineral') return 0.22 * dim;
  if (block.classification === 'waste') return 0.12 * dim;
  return 0.08 * dim;
}

function BlockModel({ blocks, selectedBlocks, editMode, onToggleBlock, projectionRun, currentBank, filterClass, filterSource, showNeighbors, polygonMode }: {
  blocks: Block[];
  selectedBlocks: Set<string>;
  editMode: string;
  onToggleBlock: (id: string) => void;
  projectionRun: boolean;
  currentBank: number;
  filterClass: FilterClass;
  filterSource: FilterSource;
  showNeighbors: boolean;
  polygonMode: boolean;
}) {
  return (
    <group>
      {blocks.map(b => {
        if (filterClass === 'mineral' && b.classification !== 'mineral') return null;
        if (filterClass === 'waste' && b.classification !== 'waste') return null;
        if (filterSource === 'real' && b.level !== 1) return null;
        if (filterSource === 'projected' && b.level === 1) return null;

        const isSelected = selectedBlocks.has(b.id);
        const bankDelta = Math.abs(b.level - currentBank);
        const opacity = getBlockOpacity(b, isSelected, projectionRun, bankDelta, showNeighbors, polygonMode);
        if (opacity <= 0) return null;
        const isActive = bankDelta === 0;
        const color = getBlockColor(b, isSelected, projectionRun);
        const isWireframe = !isActive && b.level > 1;
        // En modo polígono, los bloques NO capturan clics ni dominan visualmente.
        const interactive = isActive && !polygonMode;

        return (
          <group key={b.id} position={[b.x, b.z, b.y]}>
            <mesh
              raycast={interactive ? undefined : () => null}
              onClick={interactive ? (e) => {
                if (editMode === 'classify' || editMode === 'explore') {
                  e.stopPropagation();
                  onToggleBlock(b.id);
                }
              } : undefined}
            >
              <boxGeometry args={[2.2, 2.6, 2.2]} />
              <meshStandardMaterial color={color} transparent opacity={opacity} wireframe={isWireframe} side={THREE.DoubleSide} depthWrite={!polygonMode} />
            </mesh>
            {isActive && !polygonMode && (
              <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(2.22, 2.62, 2.22)]} />
                <lineBasicMaterial color={isSelected ? SELECTED_COLOR : new THREE.Color(0x222222)} transparent opacity={isSelected ? 1 : 0.55} />
              </lineSegments>
            )}
          </group>
        );
      })}
    </group>
  );
}

function DrillholeLines({
  drillholes, type, fallbackColor, visibleLithologies, highlightedLithology,
  soloDrillholes, onToggleSolo,
}: {
  drillholes: Drillhole[];
  type: 'production' | 'diamond';
  fallbackColor: THREE.Color;
  visibleLithologies: Set<string>;
  highlightedLithology: string | null;
  soloDrillholes: Set<string>;
  onToggleSolo: (id: string) => void;
}) {
  const tubeRadius = type === 'production' ? 0.08 : 0.12;
  const filtered = drillholes.filter(d => d.type === type);
  const soloActive = soloDrillholes.size > 0;

  return (
    <group>
      {filtered.map(d => {
        const isSolo = soloDrillholes.has(d.id);
        const dimDrill = soloActive && !isSolo;
        const trunkOpacity = dimDrill ? 0.1 : 0.55;
        return (
          <group key={d.id}>
            <Line
              points={[[d.collar.x, d.collar.z, d.collar.y], [d.collar.x, d.collar.z - d.depth, d.collar.y]]}
              color={fallbackColor} lineWidth={type === 'production' ? 1.2 : 2}
              transparent opacity={trunkOpacity}
            />
            <mesh position={[d.collar.x, d.collar.z, d.collar.y]} onClick={(e) => { e.stopPropagation(); onToggleSolo(d.id); }}>
              <cylinderGeometry args={[tubeRadius * 2.2, tubeRadius * 2.2, 0.35, 8]} />
              <meshStandardMaterial color={isSolo ? new THREE.Color(0xc0392b) : fallbackColor} transparent opacity={dimDrill ? 0.25 : 1} />
            </mesh>
            {d.intervals.map((interval, idx) => {
              const lithCode = interval.lithology;
              if (lithCode && !visibleLithologies.has(lithCode)) return null;
              const midY = d.collar.z - (interval.from + interval.to) / 2;
              const height = interval.to - interval.from;
              const segColor = new THREE.Color(lithColor(lithCode));
              const isHighlighted = highlightedLithology && lithCode === highlightedLithology;
              const isDimByHighlight = highlightedLithology && !isHighlighted;
              let opacity = 0.85;
              if (dimDrill) opacity = 0.12;
              else if (isDimByHighlight) opacity = 0.18;
              else if (isHighlighted) opacity = 1;
              const radius = isHighlighted ? tubeRadius * 1.5 : tubeRadius;
              return (
                <mesh key={idx} position={[d.collar.x, midY, d.collar.y]} onClick={(e) => { e.stopPropagation(); onToggleSolo(d.id); }}>
                  <cylinderGeometry args={[radius, radius, height, 8]} />
                  <meshStandardMaterial color={segColor} transparent opacity={opacity} />
                </mesh>
              );
            })}
          </group>
        );
      })}
    </group>
  );
}

function PolygonView({
  poly, isActive, isSelected, isEditing, polygonMode, blockMode, onSelect,
  onUpdateVertex, onInsertVertex, onRemoveVertex,
  snapPreview,
}: {
  poly: BoundaryPoly;
  isActive: boolean; // poly.bank === currentBank
  isSelected: boolean;
  isEditing: boolean;
  polygonMode: boolean;
  blockMode: boolean;
  onSelect: () => void;
  onUpdateVertex: (idx: number, x: number, z: number) => void;
  onInsertVertex: (afterIdx: number) => void;
  onRemoveVertex: (idx: number) => void;
  snapPreview: { x: number; z: number } | null;
}) {
  const y = bankYof(poly.bank);
  const color = colorForKind(poly.kind);
  const pts3 = useMemo(() =>
    poly.points.map(([x, z]) => [x, y, z] as [number, number, number]),
  [poly.points, y]);
  const isReal = poly.bank === 1;
  // Prioridad visual: en modo polígono, los del banco activo se dibujan al frente.
  const liftToFront = polygonMode && isActive;
  const lineWidth = isEditing ? 5 : isSelected ? 4 : isActive ? (polygonMode ? 3.5 : 3) : 1.2;

  return (
    <group renderOrder={liftToFront ? 20 : isActive ? 5 : 1}>
      <Line
        points={pts3}
        color={color}
        lineWidth={lineWidth}
        transparent
        opacity={isActive ? 1 : polygonMode ? 0.12 : 0.22}
        dashed={!isReal}
        dashSize={!isReal ? 0.6 : undefined}
        gapSize={!isReal ? 0.3 : undefined}
        depthTest={!liftToFront}
        renderOrder={liftToFront ? 20 : isActive ? 5 : 1}
        onClick={(e) => {
          if (!isActive) return;
          if (blockMode) return; // En modo bloques, polígonos no capturan clics.
          e.stopPropagation();
          onSelect();
        }}
      />
      {isActive && poly.points[0] && (
        <PolyLabel
          position={[poly.points[0][0], y + 0.4, poly.points[0][1]]}
          text={`${poly.label ?? (poly.kind === 'mineral' ? 'MIN' : 'DES')} · ${isReal ? 'REAL' : 'PROYECTADO'}`}
          color={color}
        />
      )}
      {isEditing && (
        <EditHandles
          points={poly.points} y={y} color={color}
          onUpdate={onUpdateVertex} onInsert={onInsertVertex} onRemove={onRemoveVertex}
        />
      )}
      {isEditing && snapPreview && (
        <mesh position={[snapPreview.x, y + 0.05, snapPreview.z]} renderOrder={25}>
          <ringGeometry args={[0.55, 0.7, 24]} />
          <meshBasicMaterial color={SNAP_COLOR} side={THREE.DoubleSide} depthTest={false} />
        </mesh>
      )}
    </group>
  );
}

function PolyLabel({ position, text, color }: { position: [number, number, number]; text: string; color: THREE.Color }) {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(255,255,255,0.94)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = `#${color.getHexString()}`;
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `#${color.getHexString()}`;
    ctx.font = 'bold 28px "JetBrains Mono", monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, [text, color]);
  return (
    <sprite position={position} scale={[4.2, 0.52, 1]}>
      <spriteMaterial map={texture} transparent depthTest={false} />
    </sprite>
  );
}

function EditHandles({ points, y, color, onUpdate, onInsert, onRemove }: {
  points: [number, number][];
  y: number;
  color: THREE.Color;
  onUpdate: (idx: number, x: number, z: number) => void;
  onInsert: (afterIdx: number) => void;
  onRemove: (idx: number) => void;
}) {
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const unique = points.slice(0, -1);
  const midpoints: { afterIdx: number; pos: [number, number, number] }[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]; const b = points[i + 1];
    midpoints.push({ afterIdx: i, pos: [(a[0] + b[0]) / 2, y, (a[1] + b[1]) / 2] });
  }
  return (
    <group renderOrder={30}>
      <mesh
        position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]} visible={false}
        onPointerMove={(e: ThreeEvent<PointerEvent>) => {
          if (dragIdx === null) return;
          e.stopPropagation();
          onUpdate(dragIdx, e.point.x, e.point.z);
        }}
        onPointerUp={(e) => {
          if (dragIdx !== null) { e.stopPropagation(); (e.target as Element)?.releasePointerCapture?.(e.pointerId); setDragIdx(null); }
        }}
      >
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>
      {unique.map(([x, z], idx) => {
        const isHover = hoverIdx === idx; const isDrag = dragIdx === idx;
        return (
          <mesh
            key={`v-${idx}`} position={[x, y, z]} renderOrder={32}
            onPointerDown={(e) => {
              e.stopPropagation();
              if ((e.nativeEvent as PointerEvent).button === 2) { onRemove(idx); return; }
              (e.target as Element)?.setPointerCapture?.(e.pointerId);
              setDragIdx(idx);
            }}
            onContextMenu={(e) => { e.nativeEvent.preventDefault(); }}
            onPointerOver={(e) => { e.stopPropagation(); setHoverIdx(idx); }}
            onPointerOut={() => setHoverIdx(prev => (prev === idx ? null : prev))}
          >
            <sphereGeometry args={[isHover || isDrag ? 0.42 : 0.32, 16, 12]} />
            <meshStandardMaterial color={isDrag ? new THREE.Color(0xffffff) : color} emissive={color} emissiveIntensity={isHover ? 0.7 : 0.4} depthTest={false} transparent />
          </mesh>
        );
      })}
      {midpoints.map(({ afterIdx, pos }) => (
        <mesh key={`m-${afterIdx}`} position={pos} renderOrder={31}
          onPointerDown={(e) => { e.stopPropagation(); onInsert(afterIdx); }}>
          <sphereGeometry args={[0.18, 10, 8]} />
          <meshStandardMaterial color={new THREE.Color(0xffffff)} emissive={color} emissiveIntensity={0.6} transparent opacity={0.95} depthTest={false} />
        </mesh>
      ))}
    </group>
  );
}

function DrawingOverlay({
  drawing, snapPreview, cursor,
}: {
  drawing: DrawingState;
  snapPreview: { x: number; z: number } | null;
  cursor: CursorCoord | null;
}) {
  const y = bankYof(drawing.bank);
  const color = colorForKind(drawing.kind);
  if (drawing.points.length === 0 && !cursor) return null;

  const livePts: [number, number, number][] = drawing.points.map(([x, z]) => [x, y, z]);
  const previewEnd: [number, number, number] | null =
    cursor ? [snapPreview ? snapPreview.x : cursor.x, y, snapPreview ? snapPreview.z : cursor.z] : null;
  const previewLinePts: [number, number, number][] = previewEnd && livePts.length > 0
    ? [livePts[livePts.length - 1], previewEnd]
    : [];

  return (
    <group>
      {livePts.length > 1 && (
        <Line points={livePts} color={color} lineWidth={3} transparent opacity={0.9} />
      )}
      {previewLinePts.length === 2 && (
        <Line points={previewLinePts} color={color} lineWidth={2} dashed dashSize={0.4} gapSize={0.25} transparent opacity={0.8} />
      )}
      {livePts.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.28, 12, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      ))}
      {previewEnd && (
        <mesh position={previewEnd}>
          <ringGeometry args={[0.4, 0.55, 24]} />
          <meshBasicMaterial color={snapPreview ? SNAP_COLOR : color} side={THREE.DoubleSide} transparent opacity={0.9} />
        </mesh>
      )}
    </group>
  );
}

// Active-bank plane: captures clicks (drawing) and cursor moves (HUD).
function ActiveBankPlane({
  bank, onCursor, onClick, drawingActive,
}: {
  bank: number;
  onCursor: (x: number, z: number) => void;
  onClick: (x: number, z: number) => void;
  drawingActive: boolean;
}) {
  const y = bankYof(bank);
  return (
    <mesh
      position={[0, y, 0]} rotation={[-Math.PI / 2, 0, 0]}
      onPointerMove={(e) => { onCursor(e.point.x, e.point.z); }}
      onPointerOut={() => onCursor(NaN, NaN)}
      onClick={(e) => { if (!drawingActive) return; e.stopPropagation(); onClick(e.point.x, e.point.z); }}
    >
      <planeGeometry args={[400, 400]} />
      <meshBasicMaterial transparent opacity={drawingActive ? 0.04 : 0} color={drawingActive ? '#c0392b' : '#000'} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Active-bank reference grid + coordinate axes triad placed at the bank Y.
function BankReferenceGrid({ bank }: { bank: number }) {
  const y = bankYof(bank);
  return (
    <group>
      <Grid
        args={[60, 60]} position={[0, y - 0.001, 0]}
        cellSize={1} cellColor="#cfd6dc"
        sectionSize={5} sectionColor="#9aa5b1"
        fadeDistance={70} infiniteGrid={false}
      />
      {/* X axis (East) */}
      <Line points={[[-14, y, 0], [14, y, 0]]} color="#c0392b" lineWidth={1.2} transparent opacity={0.5} />
      {/* Z axis (North) */}
      <Line points={[[0, y, -14], [0, y, 14]]} color="#1f6feb" lineWidth={1.2} transparent opacity={0.5} />
    </group>
  );
}

interface Viewer3DProps {
  blocks: Block[];
  drillholes: Drillhole[];
  boundaryLoaded: boolean;
  layers: LayerVisibility;
  selectedBlocks: Set<string>;
  editMode: string;
  onToggleBlock: (id: string) => void;
  projectionRun: boolean;
  viewMode: ViewMode;
  currentBank: number;
  visibleLithologies: Set<string>;
  highlightedLithology: string | null;
  soloDrillholes: Set<string>;
  onToggleDrillholeSolo: (id: string) => void;

  polygons: BoundaryPoly[];
  selectedPolygonId: string | null;
  editingPolygonId: string | null;
  onSelectPolygon: (id: string | null) => void;
  onUpdateVertex: (polyId: string, idx: number, x: number, z: number) => void;
  onInsertVertex: (polyId: string, afterIdx: number) => void;
  onRemoveVertex: (polyId: string, idx: number) => void;

  drawing: DrawingState | null;
  onAddDrawingPoint: (x: number, z: number) => void;
  onFinishDrawing: () => void;

  findSnap: (x: number, z: number, bank: number, excludePolyId?: string) => { x: number; z: number } | null;
  onCursorChange: (c: CursorCoord | null) => void;

  filterClass: FilterClass;
  filterSource: FilterSource;
  cameraVersion: number;
  showNeighbors: boolean;
}

export default function Viewer3D({
  blocks, drillholes, boundaryLoaded, layers, selectedBlocks, editMode, onToggleBlock,
  projectionRun, viewMode, currentBank, visibleLithologies, highlightedLithology,
  soloDrillholes, onToggleDrillholeSolo,
  polygons, selectedPolygonId, editingPolygonId,
  onSelectPolygon, onUpdateVertex, onInsertVertex, onRemoveVertex,
  drawing, onAddDrawingPoint, onFinishDrawing,
  findSnap, onCursorChange,
  filterClass, filterSource, cameraVersion, showNeighbors,
}: Viewer3DProps) {
  const isTop = viewMode === 'top';
  const isSide = viewMode === 'side';
  const isOrtho = isTop || isSide;
  const showDrillsBySource = filterSource !== 'projected';
  const bankY = bankYof(currentBank);

  const perspectivePos: [number, number, number] = [22, 16, 22];
  const topPos: [number, number, number] = [0, 40, 0];
  const sidePos: [number, number, number] = [0, bankY, 40];
  const target: [number, number, number] = isOrtho ? [0, bankY, 0] : [0, 0, 0];

  const [cursorXZ, setCursorXZ] = useState<{ x: number; z: number } | null>(null);

  // Snap preview for drawing/editing
  const snapPreview = useMemo(() => {
    if (drawing && cursorXZ) {
      return findSnap(cursorXZ.x, cursorXZ.z, drawing.bank) || null;
    }
    return null;
  }, [drawing, cursorXZ, findSnap]);

  const drawingActive = !!drawing;

  const handleCanvasClick = (x: number, z: number) => {
    if (!drawing) return;
    // close on click near first point
    if (drawing.points.length >= 3) {
      const [px, pz] = drawing.points[0];
      if (Math.hypot(px - x, pz - z) <= 0.6) {
        onFinishDrawing();
        return;
      }
    }
    onAddDrawingPoint(x, z);
  };

  // Modos derivados — separan claramente edición de polígonos vs bloques.
  const polygonMode = editingPolygonId !== null || drawing !== null;
  const blockMode = !polygonMode && editMode === 'classify';

  return (
    <Canvas key={viewMode} style={{ background: '#f0f0f0' }}>
      {!isOrtho && <PerspectiveCamera key={`persp-${cameraVersion}`} makeDefault position={perspectivePos} fov={42} />}
      {isTop && <OrthographicCamera key={`top-${currentBank}-${cameraVersion}`} makeDefault position={topPos} zoom={22} near={-200} far={200} up={[0, 0, -1]} />}
      {isSide && <OrthographicCamera key={`side-${currentBank}-${cameraVersion}`} makeDefault position={sidePos} zoom={22} near={-200} far={200} />}

      <ambientLight intensity={0.6} />
      <directionalLight position={[15, 25, 15]} intensity={0.7} castShadow />
      <directionalLight position={[-10, 15, -10]} intensity={0.3} />
      <hemisphereLight args={[0xffffff, 0xe0e0e0, 0.4]} />

      {layers.blockModel && blocks.length > 0 && (
        <BlockModel
          blocks={blocks} selectedBlocks={selectedBlocks} editMode={editMode}
          onToggleBlock={onToggleBlock} projectionRun={projectionRun}
          currentBank={currentBank} filterClass={filterClass} filterSource={filterSource}
          showNeighbors={showNeighbors} polygonMode={polygonMode}
        />
      )}

      {layers.prodDrills && showDrillsBySource && (
        <DrillholeLines drillholes={drillholes} type="production" fallbackColor={PROD_COLOR}
          visibleLithologies={visibleLithologies} highlightedLithology={highlightedLithology}
          soloDrillholes={soloDrillholes} onToggleSolo={onToggleDrillholeSolo} />
      )}
      {layers.diamondDrills && showDrillsBySource && (
        <DrillholeLines drillholes={drillholes} type="diamond" fallbackColor={DIAM_COLOR}
          visibleLithologies={visibleLithologies} highlightedLithology={highlightedLithology}
          soloDrillholes={soloDrillholes} onToggleSolo={onToggleDrillholeSolo} />
      )}

      {boundaryLoaded && polygons.map(p => {
        const layerOn = p.kind === 'mineral' ? layers.boundaryMineral : layers.boundaryWaste;
        if (!layerOn) return null;
        const isReal = p.bank === 1;
        if (filterSource === 'real' && !isReal) return null;
        if (filterSource === 'projected' && isReal) return null;
        if (filterClass === 'mineral' && p.kind !== 'mineral') return null;
        if (filterClass === 'waste' && p.kind !== 'waste') return null;
        const isActive = p.bank === currentBank;
        const isEditing = editingPolygonId === p.id;
        const editingSnap = isEditing && cursorXZ ? findSnap(cursorXZ.x, cursorXZ.z, p.bank, p.id) : null;
        return (
          <PolygonView
            key={p.id} poly={p}
            isActive={isActive}
            isSelected={selectedPolygonId === p.id}
            isEditing={isEditing}
            polygonMode={polygonMode}
            blockMode={blockMode}
            onSelect={() => onSelectPolygon(p.id)}
            onUpdateVertex={(idx, x, z) => onUpdateVertex(p.id, idx, x, z)}
            onInsertVertex={(idx) => onInsertVertex(p.id, idx)}
            onRemoveVertex={(idx) => onRemoveVertex(p.id, idx)}
            snapPreview={editingSnap}
          />
        );
      })}

      {drawing && (
        <DrawingOverlay
          drawing={drawing}
          snapPreview={snapPreview}
          cursor={cursorXZ ? { x: cursorXZ.x, z: cursorXZ.z, bank: drawing.bank } : null}
        />
      )}

      <ActiveBankPlane
        bank={currentBank}
        drawingActive={drawingActive}
        onCursor={(x, z) => {
          if (Number.isNaN(x)) { setCursorXZ(null); onCursorChange(null); return; }
          setCursorXZ({ x, z });
          onCursorChange({ x, z, bank: currentBank });
        }}
        onClick={handleCanvasClick}
      />

      <BankReferenceGrid bank={currentBank} />

      <Grid
        args={[60, 60]} position={[0, -7, 0]}
        cellSize={2.5} cellColor="#e0e4e8"
        sectionSize={10} sectionColor="#b8c0c8"
        fadeDistance={70}
      />

      <GizmoHelper alignment="bottom-right" margin={[64, 64]}>
        <GizmoViewport axisColors={['#c0392b', '#2c8a3c', '#1f6feb']} labelColor="#222"
          labels={['E', 'Z', 'N']} />
      </GizmoHelper>

      <OrbitControls
        enablePan enableZoom enableRotate={!isOrtho}
        enabled={editingPolygonId === null && !drawingActive}
        target={target} makeDefault
        minDistance={isOrtho ? 0.1 : 8}
        maxDistance={isOrtho ? 500 : 80}
      />
    </Canvas>
  );
}
