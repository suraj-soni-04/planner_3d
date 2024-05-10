// DisplayComponent.tsx

import React, { useState } from 'react';
import './DisplayComponent.css';
import DropTarget from '../DraggableImageComponent/DropTarget';
import ToolComponent from '../ToolComponent/ToolComponent';
import DraggableImage, { DraggableImageProps } from '../DraggableImageComponent/DraggableImage';
import PreviewComponent from '../PreviewComponent/PreviewComponent';
import ImageViewer from '../DraggableImageComponent/ImageViewer'; // Import ImageViewer component
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface DisplayComponentProps {
  setActiveComponent: (component: string) => void;
}

// Define new type for DraggableImageProps including isSelected
interface CustomDraggableImageProps extends DraggableImageProps {
  isSelected: boolean;
}

const DisplayComponent: React.FC<DisplayComponentProps> = ({ setActiveComponent }) => {
  const [images, setImages] = useState<{
    id: number;
    imageUrl: string;
    position: { x: number; y: number };
    width: number;
    height: number;
    rotation: number;
  }[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoomFactor, setZoomFactor] = useState<number>(1);

  const handleDrop = (imageUrl: string, position: { x: number; y: number }) => {
    const newImages = [
      ...images,
      { id: Date.now(), imageUrl, position, width: 100, height: 100, rotation: 0 },
    ];
    setImages(newImages);
  };

  const handleTabChange = (tab: 'Edit' | 'View') => {
    setActiveComponent(tab === 'Edit' ? 'Tool' : 'Preview');
  };

  const handleRotate = (id: number) => {
    const newImages = images.map(image =>
      image.id === id ? { ...image, rotation: (image.rotation + 90) % 360 } : image
    );
    setImages(newImages);
  };

  const handleZoom = (id: number, newZoomFactor: number) => {
    setZoomFactor(newZoomFactor);
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
        <div style={{ padding: '20px', position: 'relative' }}>
          {images.map((image, index) => (
            <div
              key={image.id}
              style={{
                position: 'absolute',
                left: image.position.x,
                top: image.position.y,
                transform: `rotate(${image.rotation}deg)`,
              }}
            >
              <ImageViewer
                imageUrl={image.imageUrl}
                onZoom={(newZoomFactor: number) => handleZoom(image.id, newZoomFactor)}
                onRotate={() => handleRotate(image.id)}
              />

              <button
                onClick={() => handleRotate(image.id)}
                style={{
                  position: 'absolute',
                  right: -15,
                  top: -15,
                  padding: 5,
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
              </button>
            </div>
          ))}
        </div>
      </DropTarget>
    </div>
  );
};

export default DisplayComponent;
