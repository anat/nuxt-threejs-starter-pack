<template>
  <div class="header">
    <router-link to="/">nuxt-threejs-starter-pack</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background: transparent;
}
a {
  color: #aaa;
  font-size: 18px;
  margin: 20px 20px;
}
</style>