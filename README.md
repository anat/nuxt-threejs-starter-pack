
# Lightweight Nuxt + Three.js boilerplate

<a href="http://nuxt-threejs-starter-pack.anat.fr/">Demo</a>

## Features
- :balloon: Only 13 files (excluding .gitignore, assets and this file)  
  
- :place_of_worship: Not another over configurated boilerplate ! It's just what you need to start you own project  
- :package: Only small packages are included, if you don't need them, it's simple to erase them  
- :art: No UI framework added by default, you could add one depending on your needs : vue-bootstrap, vuetify, vue-material  

## Packages included :  
- `eventemitter3` (minified : 1.1KB) : Event Emitter
- `tweenjs/tween.js` (minified: 3.1KB) : TWEEN for animations
- `animate.css` (minified: 5.2KB) : Fancy css animations
- `postprocessing` (minified: 91.6KB, tree shakable) : Postprocessing library for THREE.js

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
`init()` : Setup of elements inside the component   
`update()` : Called every frame   
You can find an example component here : `/components/Artwork/CubeComponent.js`   

## Hierarchy
    .
    ├── assets/css/main.scss      # main SCSS file
    ├── components
    │   ├── Artwork  
    │   │   ├── Artwork.vue       # Vue component for 3D content
    │   │   ├── AssetManager.js   # Class in charge of asset loading
    │   │   ├── CubeComponent.js  # Example 3D Component with init() & update() methods
    │   │   ├── Engine.js         # Class in charge of Three.js core features
    │   │   ├── Nav.js            # Vue component to control 3D scene
    │   └── Header.vue            # Vue component for all pages Header
    ├── layouts/default.vue       # Layout shared by all pages
    ├── pages
    │   ├── about.vue             # Page for demo "/about" route
    │   └── index.vue             # Home page
    ├── static
    │   ├── assets                # Assets : Models & Textures needed by 3D
    │   └── images                # Image needed for web pages
    ├── app.html                  # Skeleton of the page with static loader image
    ├── nuxt.config.js            # Nuxt.js configuration file
    └── package.json              # Node configuration file

## Troubleshooting
Following error "PostCSS received undefined instead of CSS string at new Input"
Can be resolved with this command :
```
npm rebuild node-sass
```

## License

MIT   
  
"Forest House" (https://skfb.ly/6QSKT) by peachyroyalty is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).
