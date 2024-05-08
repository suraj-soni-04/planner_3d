// App.tsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DisplayComponent from './components/DisplayComponent/DisplayComponent';
import ToolComponent from './components/ToolComponent/ToolComponent';
import PreviewComponent from './components/PreviewComponent/PreviewComponent';
import './App.css';

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = React.useState<string>('Tool');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <div className="big-rectangle">
          <DisplayComponent setActiveComponent={setActiveComponent} />
          {activeComponent === 'Tool' && <ToolComponent setActiveComponent={setActiveComponent} />}
          {activeComponent === 'Preview' && <PreviewComponent setActiveComponent={setActiveComponent} />}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
