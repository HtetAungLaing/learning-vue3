<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 mt-5">
        <div v-if="!posts.length > 0">
          <Spinner class="text-center"></Spinner>
        </div>
        <div v-else>
          Search Tag : <span class="p-2 bg-primary rounded text-light">{{ tag }}</span>
          <div v-for="post in postsByTag" :key="post">
            <Post :post="post"></Post>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import Spinner from "../components/Spinner";
import getPosts from "@/composables/getPosts";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    Post,
    Spinner,
  },
  props: ["tag"],
  setup(props) {
    let { posts, error, load } = getPosts();
    load();
    let postsByTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(props.tag));
    });
    return { posts, error, postsByTag };
  },
};
</script>

<style></style>
