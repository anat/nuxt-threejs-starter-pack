<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  components: { Header },
  async mounted() {
    // Create the global event emitter
    var EventEmitter = require("eventemitter3");
    window.EventEmitter = new EventEmitter();

    await new Promise((r) => setTimeout(r, 1500));
    let loader = document.getElementById("loaderContainer");
    if (loader) {
      loader.parentNode.removeChild(loader);
    }
  }
};
</script>
