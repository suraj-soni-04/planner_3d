import React, { useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DisplayComponent from './components/DisplayComponent/DisplayComponent';
import ToolComponent from './components/ToolComponent/ToolComponent';
import PreviewComponent from './components/PreviewComponent/PreviewComponent';
import './App.css';

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = React.useState<string>('Tool');
  const [selectedComponent, setSelectedComponent] = React.useState<string | null>(null);
  const displayComponentRef = useRef<{ rotateShape: () => void; removeShape: () => void; }>(null);

  const handleRotate = () => {
    if (displayComponentRef.current) {
      displayComponentRef.current.rotateShape();
    }
  };

  const handleZoomIn = () => {
    console.log('Zoom in not implemented.');
  };

  const handleZoomOut = () => {
    console.log('Zoom out not implemented.');
  };

  const handleModify = () => {
    console.log('Modify not implemented.');
  };

  const handleDelete = () => {
    if (displayComponentRef.current) {
      displayComponentRef.current.removeShape();
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="big-rectangle">
          <DisplayComponent 
            ref={displayComponentRef} // Save reference to DisplayComponent
            setActiveComponent={setActiveComponent} 
            selectedComponent={selectedComponent}
            setSelectedComponent={setSelectedComponent}
          />
          {activeComponent === 'Tool' && (
            <ToolComponent 
              setActiveComponent={setActiveComponent} 
              onImageSelect={setSelectedComponent} 
            />
          )}
          {activeComponent === 'Preview' && (
            <PreviewComponent 
              setActiveComponent={setActiveComponent} 
              onRotate={handleRotate}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onModify={handleModify}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
