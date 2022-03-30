<template>
  <div>
    <p>Tag Cloud</p>
    <router-link :to="{ name: 'postByTag', params: { tag } }" v-for="tag in uniqueTags" :key="tag">
      <span class="badge bg-primary ms-2">{{ tag }}</span>
    </router-link>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  props: ["posts"],
  setup(props) {
    let tags = ref([]);
    props.posts.forEach((post) => post.tags.forEach((tag) => tags.value.push(tag)));
    let uniqueTags = computed(() => {
      return tags.value.filter((tag, ind, arr) => {
        return arr.indexOf(tag) == ind;
      });
    });
    return { uniqueTags };
  },
};
</script>

<style scoped></style>
