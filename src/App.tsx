import React, { useState } from 'react';
import DisplayComponent from './components/DisplayComponent/DisplayComponent';
import ToolComponent from './components/ToolComponent/ToolComponent';
import PreviewComponent from './components/PreviewComponent/PreviewComponent';
import './App.css';

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Tool');

  return (
    <div className="container">
      <div className="big-rectangle">
        <DisplayComponent setActiveComponent={setActiveComponent} />
        {activeComponent === 'Tool' && <ToolComponent setActiveComponent={setActiveComponent} />}
        {activeComponent === 'Preview' && <PreviewComponent setActiveComponent={setActiveComponent} />}
      </div>
    </div>
  );
};

export default App;
