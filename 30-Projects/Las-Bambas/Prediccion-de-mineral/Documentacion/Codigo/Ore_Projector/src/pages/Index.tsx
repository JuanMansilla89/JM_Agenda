import Sidebar from '@/components/mining/Sidebar';
import Viewer3D from '@/components/mining/Viewer3D';
import ViewerToolbar from '@/components/mining/ViewerToolbar';
import EmptyState from '@/components/mining/EmptyState';
import ProjectHeader from '@/components/mining/ProjectHeader';
import BlockDetailPanel from '@/components/mining/BlockDetailPanel';
import LithologyLegend from '@/components/mining/LithologyLegend';
import ViewerControls from '@/components/mining/ViewerControls';
import CoordHUD from '@/components/mining/CoordHUD';
import { useProjectStore } from '@/hooks/useProjectStore';

export default function Index() {
  const store = useProjectStore();

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      <ProjectHeader
        projectName={store.projectName}
        projectZone={store.projectZone}
        projectionRun={store.projectionRun}
        projectionVersion={store.projectionVersion}
        changesCount={store.stats.changesCount}
        onRunProjection={store.runProjection}
        historicalLoaded={store.historicalLoaded}
      />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar
          currentStep={store.currentStep}
          blocks={store.blocks}
          drillholes={store.drillholes}
          boundaryLoaded={store.boundaryLoaded}
          historicalLoaded={store.historicalLoaded}
          projectionRun={store.projectionRun}
          changes={store.changes}
          layers={store.layers}
          stats={store.stats}
          editMode={store.editMode}
          selectedBlocksCount={store.selectedBlocks.size}
          onLoadBlockModel={store.loadBlockModel}
          onLoadProdDrills={store.loadProdDrills}
          onLoadDiamondDrills={store.loadDiamondDrills}
          onLoadBoundary={store.loadBoundary}
          onLoadHistorical={store.loadHistorical}
          onClassify={store.classifySelected}
          onUndo={store.undoLastChange}
          onToggleLayer={store.toggleLayer}
          onSetEditMode={store.setEditMode}
        />

        <main className="flex-1 flex flex-col overflow-hidden">
          <ViewerToolbar
            editMode={store.editMode}
            projectionRun={store.projectionRun}
            blocksLoaded={store.blocks.length > 0}
            filterClass={store.filterClass}
            filterSource={store.filterSource}
            onSetFilterClass={store.setFilterClass}
            onSetFilterSource={store.setFilterSource}
            layers={store.layers}
            onToggleLayer={store.toggleLayer}
          />
          <div className="flex-1 relative flex">
            <div className="flex-1 relative">
              <Viewer3D
                blocks={store.blocks}
                drillholes={store.drillholes}
                boundaryLoaded={store.boundaryLoaded}
                layers={store.layers}
                selectedBlocks={store.selectedBlocks}
                editMode={store.editMode}
                onToggleBlock={store.toggleBlockSelection}
                projectionRun={store.projectionRun}
                viewMode={store.viewMode}
                currentBank={store.currentBank}
                visibleLithologies={store.visibleLithologies}
                highlightedLithology={store.highlightedLithology}
                soloDrillholes={store.soloDrillholes}
                onToggleDrillholeSolo={store.toggleDrillholeSolo}
                polygons={store.polygons}
                selectedPolygonId={store.selectedPolygonId}
                editingPolygonId={store.editingPolygonId}
                onSelectPolygon={store.selectPolygon}
                onUpdateVertex={store.updateVertex}
                onInsertVertex={store.insertVertex}
                onRemoveVertex={store.removeVertex}
                drawing={store.drawing}
                onAddDrawingPoint={store.addDrawingPoint}
                onFinishDrawing={store.finishDrawing}
                findSnap={store.findSnap}
                onCursorChange={store.setCursor}
                filterClass={store.filterClass}
                filterSource={store.filterSource}
                cameraVersion={store.cameraVersion}
                showNeighbors={store.showNeighbors}
              />
              {store.blocks.length > 0 && (
                <>
                  <ViewerControls
                    viewMode={store.viewMode}
                    onSetViewMode={store.setViewMode}
                    currentBank={store.currentBank}
                    onBankUp={store.goBankUp}
                    onBankDown={store.goBankDown}
                    onCenterBank={store.centerBank}
                    showNeighbors={store.showNeighbors}
                    onToggleShowNeighbors={store.toggleShowNeighbors}
                    polygons={store.polygons}
                    selectedPolygonId={store.selectedPolygonId}
                    editingPolygonId={store.editingPolygonId}
                    polygonDirty={store.polygonDirty}
                    onSelectPolygon={store.selectPolygon}
                    onStartEdit={store.startEditPolygon}
                    onSaveEdit={store.saveEditPolygon}
                    onCancelEdit={store.cancelEditPolygon}
                    onDeletePolygon={store.deletePolygon}
                    onReclassify={store.reclassifyPolygon}
                    drawing={store.drawing}
                    onStartDrawing={store.startDrawing}
                    onCancelDrawing={store.cancelDrawing}
                    onFinishDrawing={store.finishDrawing}
                    snapEnabled={store.snapEnabled}
                    onToggleSnap={() => store.setSnapEnabled(!store.snapEnabled)}
                    snapTolerance={store.snapTolerance}
                    onSetSnapTolerance={store.setSnapTolerance}
                  />
                  <LithologyLegend
                    visible={store.visibleLithologies}
                    highlighted={store.highlightedLithology}
                    soloCount={store.soloDrillholes.size}
                    onToggle={store.toggleLithology}
                    onHighlight={store.toggleHighlightLithology}
                    onClearSolo={store.clearDrillholeSolo}
                  />
                  <CoordHUD
                    cursor={store.cursor}
                    currentBank={store.currentBank}
                    selectedPolygon={store.selectedPolygon}
                  />
                </>
              )}
              {store.blocks.length === 0 && <EmptyState />}
            </div>

            {store.selectedBlockData && (
              <BlockDetailPanel
                block={store.selectedBlockData}
                onClose={() => store.selectBlock('')}
                onClassify={store.classifySingleBlock}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
