import * as THREE from 'three';
const TWEEN = require("@tweenjs/tween.js");

export default class CubeComponent {
    constructor(engine) {
        this.engine = engine;
        this.cubes = new THREE.Object3D();
    }
    init() {
        for (let x = -2; x <= 2; x++) {
            for (let y = -2; y <= 2; y++) {
                for (let z = -2; z <= 2; z++) {
                    this.createCube(x * 2, y * 2, z * 2);
                }
            }
        }
        this.cubes.rotateY(45);
        this.engine.container.add(this.cubes);

        this.cubes.children.forEach((cube) => {
            new TWEEN.Tween(cube.position)
                .to({ x: Math.random() * 30 - 15, y: Math.random() * 30 - 15, z: Math.random() * 30 - 15 }, 5000)
                .repeat(Infinity)
                .yoyo(true)
                .easing(TWEEN.Easing.Exponential.InOut)
                .start();
        })
    }

    createCube(x, y, z) {
        const material = new THREE.MeshStandardMaterial({ color: 0x055555 + (Math.random() * 50000), 
         });
        let currentPlane = new THREE.BoxBufferGeometry(1, 1, 1, 1);
        let mesh = new THREE.Mesh(currentPlane, material);
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.position.z = z;
        this.cubes.add(mesh);
    }

    update() {
    }
}