
# Lightweight Nuxt + Three.js JAM Stack boilerplate

<a href="http://nuxt-threejs-starter-pack.anat.fr/">Demo</a>

## Features
- Only 13 files (excluding .gitignore, assets and this file)
- Just what you need 
    - Only small packages are added, if you don't need them, it's simple to erase them
    - Not over configurated, it's just what you need to start you own project
- No UI framework added by default, you could add one depending on your needs : vue-bootstrap, vuetify, vue-material

## Packages included :  
- eventemitter3 (minified : 1.1KB) : Small Event Emitter
- tweenjs/tween.js (minified: 3.1KB) : TWEEN for animations
- animate.css (minified: 5.2KB) : Small and fancy css animations
- postprocessing (minified: 91.6KB, tree shakable) : Postprocessing library for THREE.js

## Requirements

- [Node.js](https://nodejs.org/) LTS version
- [VS Code](https://code.visualstudio.com/) editor with Vetur extension

## Scripts

- `npm run dev` — Start the projet in development mode
- `npm run generate` — Generate the static site ready for production (in ./dist)

## In detail

- Project is built on the assessment you need both "classic" web pages combined with pages that includes 3D
- `/components/Artwork/Engine.js` contains all the basic Three.js logic : Scene, Renderer, Camera management
- `/components/Artwork/AssetManager.js` is used to load assets in general (Textures, Models etc..)
- There is a notion of "Component" (Unity 3D way) to separate logic for specific 3D elements :  
Each component has two methods :  
`init()` : Called to create the elements inside the component   
`update()` : Called every frame with context specific code to be executed only by a component   
You can find an example component here : `/components/Artwork/CubeComponent.js`   


# Credits

"Forest House" (https://skfb.ly/6QSKT) by peachyroyalty is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).
