const loader = new THREE.GLTFLoader();

loader.load(
    'assets/models/ligthouse.glb',
    (glft) => {
        scene.add(glft.scene);
        glft.scene.position.set(0, 0, 0);
        glft.scene.set(0.5, 0.5, 0.5);
    }
);