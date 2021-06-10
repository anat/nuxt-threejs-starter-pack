import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import AssetManager from "~/components/Artwork/AssetManager";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
    EffectComposer, EffectPass, RenderPass, BlendFunction, DepthOfFieldEffect,
    DepthEffect, VignetteEffect, TextureEffect, MaskFunction
} from "postprocessing";

// Components
import CubeComponent from "./CubeComponent";

export default class Engine {
    constructor() {
        this.components = [];
        this.loadManager = new THREE.LoadingManager();

        this.assets = new AssetManager(this);
        this.assets.load();


        this.loadManager.onLoad = () => {
            // Load default cube component
            this.cubeComponent = new CubeComponent(this);
            this.cubeComponent.init();
            this.addComponent(this.cubeComponent);

            window.EventEmitter.on("showScene", (sceneName) => {
                // Remove all scene objects
                for (var i = this.container.children.length - 1; i >= 0; i--) {
                    let obj = this.container.children[i];
                    this.container.remove(obj);
                }
                if (sceneName == "cubes") {
                    this.cubeComponent = new CubeComponent(this);
                    this.cubeComponent.init();
                    this.addComponent(this.cubeComponent);
                } else if (sceneName == "forest") {
                    this.container.add(this.assets.forestHouse);
                }

            });
        };
    }
    addComponent(component) {
        this.components.push(component);
    }
    clearComponents() {
        this.components = [];
    }
    init() {
        this.clock = new THREE.Clock()
        this.animate = this.update.bind(this)
        this.camera = new THREE.PerspectiveCamera(
            30, // fov
            window.innerWidth / window.innerHeight, // aspect
            1, // near
            3000 // far
        )
        this.camera.position.y = 30;
        this.camera.position.z = 30;

        this.scene = new THREE.Scene();

        // Container for all objects
        this.container = new THREE.Object3D();
        this.scene.add(this.container);

        if (process.env.three.background !== false) {
            this.scene.background = new THREE.Color(process.env.three.background);
        }

        this.renderer = new THREE.WebGLRenderer({
            alpha: process.env.three.background === false,
            powerPreference: "high-performance",
            antialias: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0.0);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.initLights();
        this.initPostProcessings();

        window.addEventListener("resize", this.onResize);
    }

    onResize() {
        window.engine.camera.aspect = window.innerWidth / window.innerHeight;
        window.engine.camera.updateProjectionMatrix();
        window.engine.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    initPostProcessings() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));

        const depthOfFieldEffect = new DepthOfFieldEffect(this.camera, {
            focusDistance: 0.0,
            focalLength: 0.048,
            bokehScale: 2.0,
            height: 480
        });

        const maskMaterial = depthOfFieldEffect.maskPass.getFullscreenMaterial();
        maskMaterial.maskFunction = MaskFunction.MULTIPLY;

        const depthEffect = new DepthEffect({
            blendFunction: BlendFunction.SKIP
        });

        const vignetteEffect = new VignetteEffect({
            eskil: false,
            offset: 0.35,
            darkness: 0.5
        });

        const cocTextureEffect = new TextureEffect({
            blendFunction: BlendFunction.SKIP,
            texture: depthOfFieldEffect.renderTargetCoC.texture
        });

        const effectPass = new EffectPass(this.camera, depthOfFieldEffect,
            vignetteEffect,
            cocTextureEffect, depthEffect
        );

        this.composer.addPass(effectPass);
    }

    update() {
        TWEEN.update();

        this.composer.render(this.clock.getDelta());

        // Controls
        this.controls.update();

        // Components
        this.components.forEach((component) => { component.update(); });

        requestAnimationFrame(this.animate)
    }

    initLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0xffffff);
        dirLight1.position.set(1, 1, 1);
        this.scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0x002288);
        dirLight2.position.set(-1, -1, -1);
        this.scene.add(dirLight2);
    }
}