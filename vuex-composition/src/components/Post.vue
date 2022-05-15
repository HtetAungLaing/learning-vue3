<template>
  <div class="card shadow">
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
