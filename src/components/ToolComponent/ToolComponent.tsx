import React from 'react';
import './ToolComponent.css';
import bedImage from '../../resources/bed.png';
import chairImage from '../../resources/chair.png';
import cupboardImage from '../../resources/cupboard.png';
import sofaImage from '../../resources/sofa.png';
import lampTableImage from '../../resources/lamp-table.png';
import tableImage from '../../resources/table.png';

interface ToolComponentProps {
  setActiveComponent: (component: string) => void;
  onImageSelect: (component: string) => void;
}

const ToolComponent: React.FC<ToolComponentProps> = ({ setActiveComponent, onImageSelect }) => {
  const handleImageSelect = (component: string) => {
    onImageSelect(component);
    setActiveComponent('Tool');
  };

  return (
    <div className="rectangle-section2 section2">
      <div className="button-column">
        <div className="button-row">
          <button className="tool-button" onClick={() => handleImageSelect('Bed2D')}>
            <img src={bedImage} alt="Bed" />
          </button>
          <button className="tool-button" onClick={() => handleImageSelect('Chair2D')}>
            <img src={chairImage} alt="Chair" />
          </button>
        </div>
        <div className="button-row">
          <button className="tool-button" onClick={() => handleImageSelect('Cupboard2D')}>
            <img src={cupboardImage} alt="Cupboard" />
          </button>
          <button className="tool-button" onClick={() => handleImageSelect('LampTable2D')}>
            <img src={lampTableImage} alt="Lamp Table" />
          </button>
        </div>
        <div className="button-row">
          <button className="tool-button" onClick={() => handleImageSelect('Sofa2D')}>
            <img src={sofaImage} alt="Sofa" />
          </button>
          <button className="tool-button" onClick={() => handleImageSelect('Table2D')}>
            <img src={tableImage} alt="Table" />
          </button>
        </div>
      </div>
      <div style={{ marginBottom: '10px' }}></div>
      <button onClick={() => console.log('Take Screenshot')} className="save-button">
        SAVE
      </button>
      <button onClick={() => console.log('Remove Item')} className="remove-button">
        REMOVE
      </button>
    </div>
  );
};

export default ToolComponent;