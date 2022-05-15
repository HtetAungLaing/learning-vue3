<template>
  <div>
    <input type="text" placeholder="search posts" class="form-control" v-model="search" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();

    let search = ref(null);
    let searchPost = () => {
      console.log(search.value);
    };
    watch(search, () => {
      //   store.dispatch("getPosts");
      store.dispatch("searchPost", search.value);
    });
    return { search, searchPost };
  },
};
</script>

<style lang="scss" scoped></style>
