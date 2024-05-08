import React, { ReactNode } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';

interface DropTargetProps {
  onDrop: (imageUrl: string, position: { x: number; y: number }) => void;
  children: ReactNode;
}

const DropTarget: React.FC<DropTargetProps> = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'IMAGE',
    drop: (item: { type: string; imageUrl: string }, monitor: DropTargetMonitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const { x, y } = offset;
        onDrop(item.imageUrl, { x, y });
      }
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ width: '100%', height: '100%', border: isOver ? '2px solid red' : '2px dashed blue' }}>
      {children}
    </div>
  );
};

export default DropTarget;
