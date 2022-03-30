<template>
  <div class="container">
    <div v-if="posts.length > 0" class="row justify-content-center">
      <div class="col-12 col-md-8">
        <PostList :posts="posts"></PostList>
      </div>
      <div class="col-12 col-md-4">
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <div class="col-12">
        <Spinner></Spinner>
      </div>
    </div>
    <div class="col-12" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import TagCloud from "../components/TagCloud";
import Spinner from "../components/Spinner";
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
export default {
  components: {
    TagCloud,
    Spinner,
    PostList,
  },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style></style>
