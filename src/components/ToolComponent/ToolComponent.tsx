import React from 'react';
import './ToolComponent.css';
import table from '../../resources/table.png';
import lamp_table from '../../resources/lamp-table.png';
import sofa from '../../resources/sofa.png';
import cupboard from '../../resources/cupboard.png';
import bed from '../../resources/bed.png';
import chair from '../../resources/chair.png';


interface ToolComponentProps {
  setActiveComponent: (component: string) => void;
}

const ToolComponent: React.FC<ToolComponentProps> = ({ setActiveComponent }) => {
  return (
    <div className="rectangle-section section2">
      <div className="button-row">
        <button className="tool-button">
          <img src={table} alt="table" />
        </button>
        <button className="tool-button">
          <img src={chair} alt="chair" />
        </button>
      </div>
      <div className="button-row">
        <button className="tool-button">
          <img src={lamp_table} alt="lamp-table" />
        </button>
        <button className="tool-button">
          <img src={bed} alt="bed" />
        </button>
      </div>
      <div className="button-row">
        <button className="tool-button">
          <img src={sofa} alt="sofa" />
        </button>
        <button className="tool-button">
          <img src={cupboard} alt="cupboard" />
        </button>
      </div>
      <div style={{ marginBottom: '210px' }}></div>
      <button onClick={() => setActiveComponent('Preview')} className="save-button">
        SAVE
      </button>
    </div>
  );
};

export default ToolComponent;