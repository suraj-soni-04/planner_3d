import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Bed3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const box = new THREE.Mesh(geometry, material);

      scene.add(box);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);

        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.dispose();
      };
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Bed3D;
