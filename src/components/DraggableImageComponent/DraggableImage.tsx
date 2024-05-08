// DraggableImage.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import chairImage from '../../resources/chair.png';

interface DraggableImageProps {
  imageUrl: string;
}

const DraggableImage: React.FC<DraggableImageProps> = ({ imageUrl }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'IMAGE',
    item: { type: 'IMAGE', imageUrl },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', display: 'inline-block', marginRight: '10px' }}
    >
      <img src={imageUrl} alt="shape" style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default DraggableImage;
