import React, { useEffect } from 'react';
import * as THREE from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls';

const Chair2D: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('chair2d-container');
    container?.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(200, 200);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const square = new THREE.Mesh(geometry, material);
    scene.add(square);

    const objects = [square];

    camera.position.z = 500;

    const controls = new DragControls(objects, camera, renderer.domElement);

    controls.addEventListener('drag', (event) => {
      event.object.position.x = event.object.position.x;
      event.object.position.y = event.object.position.y;
    });

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      if (container?.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="chair2d-container" />;
};

export default Chair2D;
