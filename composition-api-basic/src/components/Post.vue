<template>
  <div>
    <p>Title - {{ post.title }}</p>
    <p>Detail - {{ shortDetail }}</p>
    <hr />
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    let shortDetail = computed(() => {
      return props.post.detail.substring(0, 20) + "....";
    });
    return { shortDetail };
  },
};
</script>

<style lang="scss" scoped></style>
