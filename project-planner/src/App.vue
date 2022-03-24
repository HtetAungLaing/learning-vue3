<template>
  <MainNav></MainNav>
  <router-view />
</template>
<script>
import MainNav from "./components/MainNav";
export default {
  components: { MainNav },
};
</script>
<style>
body {
  background: rgba(253, 230, 255, 0.836);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
}
</style>
