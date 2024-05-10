// PreviewComponent.tsx

import React from 'react';
import './PreviewComponent.css';

interface PreviewComponentProps {
  setActiveComponent: (component: string) => void;
  onRotate: (id: number) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onModify: () => void;
  onDelete: () => void;
}

const PreviewComponent: React.FC<PreviewComponentProps> = ({ setActiveComponent, onRotate, onZoomIn, onZoomOut, onModify, onDelete }) => {
  const onButtonClicked = (action: string) => {
    switch (action) {
      case 'Rotate':
        onRotate(0);
        break;
      case 'ZoomIn':
        onZoomIn();
        break;
      case 'ZoomOut':
        onZoomOut();
        break;
      case 'Modify':
        onModify();
        break;
      case 'Delete':
        onDelete();
        break;
      default:
        break;
    }
  };

  return (
    <div className="rectangle-section section3">
      <div className="button-column">
        <button className="preview-button" onClick={() => onButtonClicked('Rotate')}>Rotate</button>
        <button className="preview-button" onClick={() => onButtonClicked('ZoomIn')}>Zoom-In</button>
        <button className="preview-button" onClick={() => onButtonClicked('ZoomOut')}>Zoom-Out</button>
      </div>
      <div style={{ marginBottom: '310px' }}></div>
      <div className="button-column">
        <button className="preview-button" onClick={() => onButtonClicked('Modify')}>Modify</button>
        <button className="preview-button" onClick={() => onButtonClicked('Delete')}>Delete</button>
      </div>
    </div>
  );
};

export default PreviewComponent;
