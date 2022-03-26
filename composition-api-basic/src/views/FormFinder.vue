<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" name="" id="" v-model="search" />
    <p>Search - {{ search }}</p>
    <div class="" v-for="name in filteredNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    let title = ref("Form Finder");
    let search = ref("");
    let names = ref(["aung aung", "ko ko", "htet aung hlaing"]);
    let filteredNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { title, search, names, filteredNames };
  },
};
</script>

<style lang="scss" scoped></style>
