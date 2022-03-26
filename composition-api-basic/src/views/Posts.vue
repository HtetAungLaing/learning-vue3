<template>
  <div>
    {{ title }}
    <Post v-for="post in posts" :post="post" :key="post.id"></Post>
  </div>
</template>

<script>
import Post from "../components/Post";
import { ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, onUnmounted } from "@vue/runtime-core";
export default {
  components: { Post },
  setup() {
    let title = ref("posts available");
    let posts = ref([
      { id: 1, title: "posts 1 title", detail: "lorem ipsum" },
      { id: 2, title: "posts 2 title", detail: "lorem ipsum" },
      { id: 3, title: "posts 2 title", detail: "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum" },
      { id: 4, title: "posts 2 title", detail: "lorem ipsum" },
    ]);

    onMounted(() => console.log("mounted"));
    onUnmounted(() => console.log("unmount"));
    onBeforeMount(() => console.log("before mount"));
    return { title, posts };
  },
};
</script>

<style lang="scss" scoped></style>
