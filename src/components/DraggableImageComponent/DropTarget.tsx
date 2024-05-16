// DropTarget.tsx
import React from 'react';
import { useDrop } from 'react-dnd';

interface DropTargetProps {
  onDrop: (item: any) => void;
  children: React.ReactNode;  // Add this line
}

const DropTarget: React.FC<DropTargetProps> = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`drop-target ${isOver ? 'over' : ''}`}>
      {children}
    </div>
  );
};

export default DropTarget;
