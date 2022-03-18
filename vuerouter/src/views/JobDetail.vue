<template>
  <div>
    <h1>Job Detail</h1>
    <p>Job id {{ id }}</p>
    <p>{{ description }}</p>
    <!-- $route.params.id -->
  </div>
</template>

<script>
export default {
  props: ["id", "description"],
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped></style>
