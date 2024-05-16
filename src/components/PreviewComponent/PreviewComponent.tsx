import React from 'react';
import './PreviewComponent.css';

interface PreviewComponentProps {
  setActiveComponent: (component: string) => void;
  onRotate: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onModify: () => void;
  onDelete: () => void;
}

const PreviewComponent: React.FC<PreviewComponentProps> = ({ setActiveComponent, onRotate, onZoomIn, onZoomOut, onModify, onDelete }) => {
  return (
    <div className="rectangle-section2 section2">
      <button className="preview-button" onClick={() => setActiveComponent('Tool')}>
        Tool
      </button>
      <button className="preview-button" onClick={() => setActiveComponent('Preview')}>
        Preview
      </button>
      <button className="preview-button" onClick={onZoomIn}>
        Zoom In
      </button>
      <button className="preview-button" onClick={onZoomOut}>
        Zoom Out
      </button>
      <button className="preview-button" onClick={onModify}>
        Modify
      </button>
      <button className="preview-button" onClick={onRotate}>
        Rotate
      </button>
      <button className="preview-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default PreviewComponent;