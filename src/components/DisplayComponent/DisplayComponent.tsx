// DisplayComponent.tsx
import React from 'react';
import './DisplayComponent.css';
//import DraggableImage from '../DraggableImageComponent/DraggableImage';
import DropTarget from '../DraggableImageComponent/DropTarget';
import ToolComponent from '../ToolComponent/ToolComponent';

interface DisplayComponentProps {
  setActiveComponent: (component: string) => void;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ setActiveComponent }) => {
  const handleDrop = (imageUrl: string, position: { x: number; y: number }) => {
    console.log('Dropped Image:', imageUrl, 'Position:', position);
    // You can add your fabric.js code here to draw the dropped image on canvas
  };

  const handleTabChange = (tab: 'Edit' | 'View') => {
    setActiveComponent(tab === 'Edit' ? 'Tool' : 'Preview');
  };

  return (
    <div className="rectangle-section section1">
      <nav className="navbar">
        <button onClick={() => handleTabChange('Edit')} className="active">
          Edit
        </button>
        <button onClick={() => handleTabChange('View')}>View</button>
      </nav>
      <DropTarget onDrop={handleDrop}>
        <div style={{ padding: '20px' }}>
          <ToolComponent setActiveComponent={setActiveComponent} />
        </div>
      </DropTarget>
    </div>
  );
};

export default DisplayComponent;
