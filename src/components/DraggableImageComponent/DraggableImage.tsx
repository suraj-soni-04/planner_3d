// DraggableImage.tsx
import React from 'react';
import { useDrag } from 'react-dnd';

export interface DraggableImageProps {
  imageUrl: string;
  onDrag: () => void;
  isSelected?: boolean; // Make isSelected prop optional
}

const DraggableImage: React.FC<DraggableImageProps> = ({ imageUrl, onDrag, isSelected = false }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'IMAGE',
    item: { type: 'IMAGE', imageUrl },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      {isDragging ? (
        <div ref={preview} />
      ) : (
        <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', display: 'inline-block', marginRight: '10px' }}>
          <img src={imageUrl} alt="shape" style={{ width: '100px', height: '100px', border: isSelected ? '2px solid blue' : 'none' }} />
        </div>
      )}
    </>
  );
};

export default DraggableImage;
