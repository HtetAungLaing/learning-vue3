<template>
  <div>
    <p>
      <b v-if="score < 100">Omfg! You're god hand 😱</b>
      <b v-else-if="score > 100 && score < 500">You're normal hand 👏</b>
      <b v-else>You're literally Sloth 🦥</b>
    </p>
  </div>
</template>

<script>
export default {
  props: ["score"],
};
</script>

<style scoped>
p {
  display: block;
  margin: 1rem 0;
}
</style>
