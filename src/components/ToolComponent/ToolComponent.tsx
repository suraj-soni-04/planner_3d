// ToolComponent.tsx
import React from 'react';
import './ToolComponent.css';
import DraggableImage from '../DraggableImageComponent/DraggableImage';
import bedImage from '../../resources/bed.png';
import chairImage from '../../resources/chair.png';
import cupboardImage from '../../resources/cupboard.png';
import lampTableImage from '../../resources/lamp-table.png';
import sofaImage from '../../resources/sofa.png';
import tableImage from '../../resources/table.png';

interface ToolComponentProps {
  setActiveComponent: (component: string) => void;
}

const ToolComponent: React.FC<ToolComponentProps> = ({ setActiveComponent }) => {
  return (
    <div className="rectangle-section section2">
      <div className="button-column">
        <div className="button-row">
          <DraggableImage imageUrl={bedImage} />
          <DraggableImage imageUrl={chairImage} />
        </div>
        <div className="button-row">
          <DraggableImage imageUrl={cupboardImage} />
          <DraggableImage imageUrl={lampTableImage} />
        </div>
        <div className="button-row">
          <DraggableImage imageUrl={sofaImage} />
          <DraggableImage imageUrl={tableImage} />
        </div>
      </div>
      <div style={{ marginBottom: '136px' }}></div>
      <button onClick={() => setActiveComponent('Preview')} className="save-button">
        SAVE
      </button>
    </div>
  );
};

export default ToolComponent;
