<template>
  <div>
    <nav>
      <h1 ref="nav">{{ navTitle }}</h1>
      <button @click="chaneNavTitle">Click Me</button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navTitle: "This's nav title",
    };
  },
  methods: {
    chaneNavTitle() {
      this.$refs.nav.textContent = "chane lite pr p";
    },
  },
};
</script>

<style scoped>
nav {
  color: lightcoral;
}
</style>
