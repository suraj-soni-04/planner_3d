// DropTarget.tsx
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

  return <div ref={drop}>{children}</div>;
};

export default DropTarget;
