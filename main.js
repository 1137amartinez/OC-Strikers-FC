import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

const spaceTexture = new THREE.TextureLoader().load('/space.jpg', () => {
  console.log('Space texture loaded successfully');
}, undefined, (error) => {
  console.error('Error loading space texture', error);
});
scene.background = spaceTexture;

const moonTexture = new THREE.TextureLoader().load('/Moon.jpg', () => {
  console.log('Moon texture loaded successfully');
}, undefined, (error) => {
  console.error('Error loading moon texture', error);
});
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
  })
);

scene.add(moon);
moon.position.z = 30;
moon.position.setX(-10);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
