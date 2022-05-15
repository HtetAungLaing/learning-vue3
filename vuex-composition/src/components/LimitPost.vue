<template>
  <div class="d-flex align-items-center">
    <p class="mb-0 me-3 text-nowrap">Show only :</p>
    <select name="" id="" class="form-select" v-model="limit" @change="changeLimit">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="50">50</option>
      <option value="all">All</option>
    </select>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();

    let limit = ref(null);

    let changeLimit = () => {
      if (limit.value == "all") {
        store.dispatch("getPosts");
      } else {
        store.dispatch("limitPosts", limit.value);
      }
    };
    return { limit, changeLimit };
  },
};
</script>

<style lang="scss" scoped></style>
