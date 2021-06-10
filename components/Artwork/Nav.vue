<template>
  <div class="nav">
    <a @click="showScene('cubes')" class="main-button">Cubes</a>
    <a @click="showScene('forest')" class="main-button">Forest House</a>
  </div>
</template>

<script>
export default {
  methods: {
    showScene(scene) {
      window.EventEmitter.emit("showScene", scene);
    }
  }
};
</script>

<style>
.nav {
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 10vh;
  background-color: transparent;
  text-align: center;
}
</style>