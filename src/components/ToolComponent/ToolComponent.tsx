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
  onImageDrag: (imageUrl: string) => void;
}

const ToolComponent: React.FC<ToolComponentProps> = ({ setActiveComponent, onImageDrag }) => {
  return (
    <div className="rectangle-section section2">
      <div className="button-column">
        <div className="button-row">
          <DraggableImage imageUrl={bedImage} onDrag={() => onImageDrag(bedImage)}  />
          <DraggableImage imageUrl={chairImage} onDrag={() => onImageDrag(chairImage)}  />
        </div>
        <div className="button-row">
          <DraggableImage imageUrl={cupboardImage} onDrag={() => onImageDrag(cupboardImage)}  />
          <DraggableImage imageUrl={lampTableImage} onDrag={() => onImageDrag(lampTableImage)}  />
        </div>
        <div className="button-row">
          <DraggableImage imageUrl={sofaImage} onDrag={() => onImageDrag(sofaImage)}  />
          <DraggableImage imageUrl={tableImage} onDrag={() => onImageDrag(tableImage)}  />
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
