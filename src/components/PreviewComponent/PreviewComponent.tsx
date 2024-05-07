import React from 'react';
import './PreviewComponent.css';

interface PreviewComponentProps {
  setActiveComponent: (component: string) => void;
}

const PreviewComponent: React.FC<PreviewComponentProps> = ({ setActiveComponent }) => {
  return (
    <div className="rectangle-section section3">
      <div className="button-column">
        <button className="preview-button">Rotate</button>
        <button className="preview-button">Zoom-In</button>
        <button className="preview-button">Zoom-Out</button>
      </div>
      <div style={{ marginBottom: '310px' }}></div>
      <div className="button-column">
        <button className="preview-button">Modify</button>
        <button className="preview-button">Delete</button>
      </div>
    </div>
  );
};

export default PreviewComponent;
