<template>
  <nav>
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> | <router-link :to="{ name: 'contact' }">Contact</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <router-view />
</template>
// this.$router.push({name : 'route name'}) redirect // this.$router.go(1) forward // this.$router.go(-1) backward
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a {
  text-decoration: none;
  color: rgb(255, 102, 42);
}
</style>
