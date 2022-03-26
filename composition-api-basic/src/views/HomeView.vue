<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="changeName">change name</button>
    <hr />
    <Posts v-if="showPost"></Posts>
    <button @click="showPost = !showPost">Toggle Post</button>
  </div>
</template>

<script>
import Posts from "./Posts";
import { ref } from "@vue/reactivity";
export default {
  components: { Posts },
  setup() {
    let name = ref("htet aung hlaing");
    let showPost = ref(true);
    let changeName = () => {
      name.value = "ko htet";
    };
    return { name, changeName, showPost };
  },
};
</script>

<style scoped></style>
