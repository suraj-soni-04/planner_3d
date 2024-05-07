import React from 'react';
import './ToolComponent.css';

interface ToolComponentProps {
  setActiveComponent: (component: string) => void;
}

const ToolComponent: React.FC<ToolComponentProps> = ({ setActiveComponent }) => {
  return (
    <div className="rectangle-section section2">
      <div className="button-row">
        <button className="tool-button">
          <img src="../../resources/image.jpg" alt="Button 1" />
        </button>
        <button className="tool-button">
          <img src="image.jpg" alt="Button 2" />
        </button>
      </div>
      <div className="button-row">
        <button className="tool-button">
          <img src="image3.png" alt="Button 3" />
        </button>
        <button className="tool-button">
          <img src="image4.png" alt="Button 4" />
        </button>
      </div>
      <div className="button-row">
        <button className="tool-button">
          <img src="image5.png" alt="Button 5" />
        </button>
        <button className="tool-button">
          <img src="image6.png" alt="Button 6" />
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
