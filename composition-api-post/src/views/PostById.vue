<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-md-6">
        <h1 v-if="!post">
          <Spinner></Spinner>
        </h1>
        <div v-else>
          <Post :post="post"></Post>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import Spinner from "../components/Spinner";
import getPost from "@/composables/getPost.js";
export default {
  components: {
    Post,
    Spinner,
  },
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style scoped></style>
