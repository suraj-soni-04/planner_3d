import React, { useState, useRef, useEffect } from 'react';
import './DisplayComponent.css';
import { fabric } from 'fabric';

interface DisplayComponentProps {
  setActiveComponent: (component: string) => void;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ setActiveComponent }) => {
  const [activeTab, setActiveTab] = useState<'Edit' | 'View'>('Edit');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const newCanvas = new fabric.Canvas(canvasRef.current, { width: canvasRef.current.clientWidth, height: canvasRef.current.clientHeight });
      newCanvas.isDrawingMode = true;
      newCanvas.freeDrawingBrush = new fabric.PencilBrush(newCanvas);
      newCanvas.freeDrawingBrush.width = 2;
      newCanvas.freeDrawingBrush.color = 'black';
      setCanvas(newCanvas);
    }
  }, []);

  const handleTabChange = (tab: 'Edit' | 'View') => {
    setActiveTab(tab);
    setActiveComponent(tab === 'Edit' ? 'Tool' : 'Preview');
  };

  return (
    <div className="rectangle-section section1">
      <nav className="navbar">
        <button onClick={() => handleTabChange('Edit')} className={activeTab === 'Edit' ? 'active' : ''}>
          Edit
        </button>
        <button onClick={() => handleTabChange('View')} className={activeTab === 'View' ? 'active' : ''}>
          View
        </button>
      </nav>
      {activeTab === 'Edit' ? (
        <canvas ref={canvasRef} className="canvas"></canvas>
      ) : (
        <div>
          <h2>View Section</h2>
          {/* Your view section content here */}
        </div>
      )}
    </div>
  );
};

export default DisplayComponent;