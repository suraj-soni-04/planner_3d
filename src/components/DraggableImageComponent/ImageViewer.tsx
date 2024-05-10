// ImageViewer.tsx

import React from 'react';
import ReactImagePanZoomRotate from 'react-image-pan-zoom-rotate';

interface ImageViewerProps {
  imageUrl: string;
  onZoom: (zoomFactor: number) => void;
  onRotate: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ imageUrl, onZoom, onRotate }) => {
  return (
    <ReactImagePanZoomRotate
      zoomStep={0.1}
      image={imageUrl}
      rotateStep={90}
      disablePan={false}
      disableZoom={false}
      disableRotate={false}
      minZoom={0.5}
      maxZoom={4}
      disableDoubleClickZoomWithToolAuto={true}
      onPan={() => console.log('Pan event')}
      onZoom={(zoomFactor: number) => onZoom(zoomFactor)}
      onRotate={() => onRotate()}
    />
  );
};

export default ImageViewer;
