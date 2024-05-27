// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Create a sphere geometry for the Earth
const earthGeometry = new THREE.SphereGeometry(5, 32, 32);

// Load textures for the Earth and clouds
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('earth.jpg');
const cloudsTexture = textureLoader.load('clouds.jpg');

// Create materials with the Earth and clouds textures
const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
const cloudsMaterial = new THREE.MeshLambertMaterial({ map: cloudsTexture, transparent: true });

// Create meshes for the Earth and clouds
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const clouds = new THREE.Mesh(earthGeometry, cloudsMaterial);
earth.rotation.y = Math.PI; // Invert the Earth to match the texture orientation
clouds.rotation.y = Math.PI; // Invert the clouds to match the texture orientation

// Add meshes to the scene
scene.add(earth);
scene.add(clouds);

// Set up camera position
camera.position.z = 15;

// Function to handle window resizing
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.001; // Rotate the Earth
    clouds.rotation.y += 0.0015; // Rotate the clouds faster
    renderer.render(scene, camera);
}
animate();
