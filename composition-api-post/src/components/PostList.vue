<template>
  <div v-for="post in posts" :key="post">
    <Post :post="post"></Post>
  </div>
</template>

<script>
import TagCloud from "./TagCloud";
import Spinner from "./Spinner";
import Post from "./Post";
import { ref } from "@vue/reactivity";
import getPosts from "../composables/getPosts";
export default {
  components: {
    TagCloud,
    Spinner,
    Post,
  },
  props: ["posts"],
  setup() {
    let title = ref("Post List");
    return { title };
  },
};
</script>

<style></style>
