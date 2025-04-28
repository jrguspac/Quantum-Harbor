const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); //Sky color

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0,10,20);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Simulate the ligthhouse (Directional light)
const light = new THREE.DirectionalLight(0xFFD700, 1);
light.position.set(0,10,5);
scene.add(light)

//Animation 
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

//Movement keys
document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()){
        case 'w': camera.position.z -= 1; break;
        case 's': camera.position.z += 1; break;
        case 'a': camera.position.x -= 1; break;
        case 'd': camera.position.x += 1; break;
    }
});