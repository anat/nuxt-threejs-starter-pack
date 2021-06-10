import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export default class AssetManager {
    constructor(engine) {
        this.engine = engine;
        this.forestHouse = null;
    }

    load() {
        this.loadTextures();
        this.loadModels();
    }

    loadTextures() {
        let textureLoader = new THREE.TextureLoader(this.engine.loadManager);
        // Load your textures here
    }

    loadModels() {

        let gltfLoader = new GLTFLoader(this.engine.loadManager);

        gltfLoader.load('assets/scene.gltf', (gltf) => {
            const scene = gltf.scene;
            scene.scale.set(80, 80, 80);
            scene.rotateY(-30);
            scene.translateY(-3);
            this.forestHouse = scene;
        });
    }
}