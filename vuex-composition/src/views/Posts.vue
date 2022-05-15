<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>{{ appName }}</h3>
        <p class="text-muted">No of post - {{ postsCount <= 0 ? "Empty" : postsCount }}</p>
      </div>
      <div class="col-6"><LimitPost></LimitPost></div>
      <div class="col-6"><SearchPost></SearchPost></div>
      <div class="col-6 g-2" v-for="post in posts" :key="post.id">
        <Post :post="post"></Post>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPost from "../components/SearchPost";
import LimitPost from "../components/LimitPost";
import Post from "../components/Post";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    SearchPost,
    LimitPost,
    Post,
  },
  setup() {
    let store = useStore();

    let appName = store.state.posts.appName;
    let postsCount = computed(() => store.getters.postsCount);

    let getPosts = () => {
      store.dispatch("getPosts");
    };
    getPosts();

    let posts = computed(() => store.getters.GET_POSTS);

    return { appName, postsCount, posts };
  },
};
</script>

<style lang="scss" scoped></style>
