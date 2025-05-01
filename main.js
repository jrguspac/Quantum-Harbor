// Import Three.js core and GLTFLoader from node_modules
import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'; // Import to enable full mouse-based camera control, functions such as zoom, orbit, pan
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// Create a 3D scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Light sky blue

// Create a camera and position it
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 10, 20);

// Create a renderer and attach it to the DOM
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Create Controls to move 3d view
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // smooth movement
controls.dampingFactor = 0.05;


// Add a directional light to simulate the lighthouse
const light = new THREE.DirectionalLight(0xffd700, 1); // Golden color
light.position.set(0, 10, 5);
scene.add(light);

// Load the lighthouse model using GLTFLoader
const loader = new GLTFLoader();
loader.load(
  './assets/models/lighthouse.glb', // Adjust path if needed
  (gltf) => {
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    model.scale.set(0.5, 0.5, 0.5);
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error('Error loading the GLB model:', error);
  }
);

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // required for damping
  renderer.render(scene, camera);
}

animate();

// Camera controls (keyboard)
document.addEventListener('keydown', (e) => {
  switch (e.key.toLowerCase()) {
    case 'w':
      camera.position.z -= 1;
      break;
    case 's':
      camera.position.z += 1;
      break;
    case 'a':
      camera.position.x -= 1;
      break;
    case 'd':
      camera.position.x += 1;
      break;
  }
});
