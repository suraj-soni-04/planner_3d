import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import './DisplayComponent.css';

interface DisplayComponentProps {
  setActiveComponent: (component: string) => void;
  selectedComponent: string | null;
  setSelectedComponent: (component: string | null) => void;
}

const DisplayComponent = forwardRef<unknown, DisplayComponentProps>(({ setActiveComponent, selectedComponent, setSelectedComponent }, ref) => {
  const [components, setComponents] = useState<string[]>([]);
  const [selectedObject, setSelectedObject] = useState<THREE.Object3D | null>(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(new THREE.OrthographicCamera(
    window.innerWidth / -2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    window.innerHeight / -2,
    0.1,
    1000
  ));
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<DragControls | null>(null);
  const objectsRef = useRef<THREE.Object3D[]>([]);

  useImperativeHandle(ref, () => ({
    rotateShape,
    removeShape
  }));

  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;

    camera.position.z = 500;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById('threejs-container');
    container?.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new DragControls(objectsRef.current, camera, renderer.domElement);
    controls.addEventListener('dragstart', event => {
      setSelectedObject(event.object);
    });
    controls.addEventListener('drag', event => {
      event.object.position.x = event.object.position.x;
      event.object.position.y = event.object.position.y;
    });
    controlsRef.current = controls;

    const animate = function () {
      if (!rendererRef.current) return;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container?.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }

      objectsRef.current.forEach(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          obj.material.dispose();
        }
        scene.remove(obj);
      });
      objectsRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (selectedComponent) {
      addComponent(selectedComponent);
      setSelectedComponent(null); // Reset selected component after adding it
    }
  }, [selectedComponent]);

  const addComponent = (component: string) => {
    const scene = sceneRef.current;
    if (component === 'Chair2D') {
      addChair(scene, objectsRef.current, handleObjectClick);
    } else if (component === 'Table2D') {
      addTable(scene, objectsRef.current, handleObjectClick);
    } else if (component === 'Bed2D') {
      addBed(scene, objectsRef.current, handleObjectClick);
    } else if (component === 'Sofa2D') {
      addSofa(scene, objectsRef.current, handleObjectClick);
    } else if (component === 'Cupboard2D') {
      addCupboard(scene, objectsRef.current, handleObjectClick);
    }
    setComponents(prevComponents => [...prevComponents, component]);
  };

  const removeShape = () => {
    if (selectedObject) {
      sceneRef.current.remove(selectedObject);
      objectsRef.current = objectsRef.current.filter(obj => obj !== selectedObject);
      if (selectedObject instanceof THREE.Mesh) {
        selectedObject.geometry.dispose();
        selectedObject.material.dispose();
      }
      setSelectedObject(null);
      setComponents(prevComponents => prevComponents.filter(c => c !== selectedObject?.name));
    }
  };

  const rotateShape = () => {
    if (selectedObject) {
      selectedObject.rotation.z += Math.PI / 2;
    }
  };

  const resizeShape = (scale: number) => {
    if (selectedObject) {
      selectedObject.scale.x *= scale;
      selectedObject.scale.y *= scale;
    }
  };

  const takeScreenshot = () => {
    const renderer = rendererRef.current;
    if (renderer) {
      const imgData = renderer.domElement.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'screenshot.png';
      link.href = imgData;
      link.click();
    }
  };

  const handleObjectClick = (object: THREE.Object3D) => {
    setSelectedObject(object);
  };

  return (
    <div className="rectangle-section section1">
      <nav className="navbar">
        <button className="tool-button" onClick={() => setActiveComponent('Tool')}>Tool</button>
        <button className="preview-button" onClick={() => setActiveComponent('Preview')}>Edit</button>
        <button className="rotate-button" onClick={rotateShape}>Rotate</button>
        <button className="increase-button" onClick={() => resizeShape(1.1)}>Increase Size</button>
        <button className="decrease-button" onClick={() => resizeShape(0.9)}>Decrease Size</button>
        <button className="remove-button" onClick={removeShape}>Remove</button>
        <button className="save-button" onClick={takeScreenshot}>Save</button>
      </nav>
      <div className="canvas">
        <div id="threejs-container" className="threejs-container"></div>
      </div>
    </div>
  );
});

const addChair = (scene: THREE.Scene, objects: THREE.Object3D[], onClick: (object: THREE.Object3D) => void) => {
  const geometry = new THREE.PlaneGeometry(200, 200);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const square = new THREE.Mesh(geometry, material);
  square.userData = { onClick };
  square.name = 'Chair2D';
  square.addEventListener('click', () => onClick(square));
  objects.push(square);
  scene.add(square);
};

const addTable = (scene: THREE.Scene, objects: THREE.Object3D[], onClick: (object: THREE.Object3D) => void) => {
  const geometry = new THREE.PlaneGeometry(300, 300);
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const square = new THREE.Mesh(geometry, material);
  square.userData = { onClick };
  square.name = 'Table2D';
  square.addEventListener('click', () => onClick(square));
  objects.push(square);
  scene.add(square);
};

const addBed = (scene: THREE.Scene, objects: THREE.Object3D[], onClick: (object: THREE.Object3D) => void) => {
  const geometry = new THREE.PlaneGeometry(400, 200);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const square = new THREE.Mesh(geometry, material);
  square.userData = { onClick };
  square.name = 'Bed2D';
  square.addEventListener('click', () => onClick(square));
  objects.push(square);
  scene.add(square);
};

const addSofa = (scene: THREE.Scene, objects: THREE.Object3D[], onClick: (object: THREE.Object3D) => void) => {
  const geometry = new THREE.PlaneGeometry(300, 150);
  const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const square = new THREE.Mesh(geometry, material);
  square.userData = { onClick };
  square.name = 'Sofa2D';
  square.addEventListener('click', () => onClick(square));
  objects.push(square);
  scene.add(square);
};

const addCupboard = (scene: THREE.Scene, objects: THREE.Object3D[], onClick: (object: THREE.Object3D) => void) => {
  const geometry = new THREE.PlaneGeometry(200, 400);
  const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
  const square = new THREE.Mesh(geometry, material);
  square.userData = { onClick };
  square.name = 'Cupboard2D';
  square.addEventListener('click', () => onClick(square));
  objects.push(square);
  scene.add(square);
};

export default DisplayComponent;
