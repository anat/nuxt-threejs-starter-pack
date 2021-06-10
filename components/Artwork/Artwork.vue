<template>
  <div>
    <div class="canvas-container" ref="canvascontainer"></div>
    <Nav />
  </div>
</template>

<script>
import Engine from "~/components/Artwork/Engine";
import Nav from "~/components/Artwork/Nav.vue";

export default {
  components: { Nav },
  mounted() {
    if (window.engine) {
      /**
       * Don't recreate the Canvas here but pick it from the "THREE.renderer.domElement" and put it in the page
       */
      this.$refs.canvascontainer.appendChild(window.engine.renderer.domElement);
      window.engine.onResize();
      return;
    }

    window.engine = new Engine();

    window.engine.init(this.$refs.canvas);

    this.$refs.canvascontainer.appendChild(window.engine.renderer.domElement);

    window.engine.update();
  }
};
</script>

<style>
</style>