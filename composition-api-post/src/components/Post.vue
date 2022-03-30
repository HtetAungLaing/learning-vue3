<template>
  <div class="card shadow my-2 shadow-sm my-3">
    <div class="card-header">
      <router-link :to="{ name: 'postById', params: { id: post.id } }" class="text-black-50 text-decoration-none card-title">
        <h3 class="">{{ post.title }}</h3>
      </router-link>
      <div>
        <router-link :to="{ name: 'postByTag', params: { tag } }" v-for="tag in post.tags" :key="tag">
          <span class="badge bg-primary ms-2">{{ tag }}</span>
        </router-link>
      </div>
    </div>
    <div class="card-body">
      <p class="">{{ shortDetail }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    let shortDetail = computed(() => props.post.detail.substring(0, 100) + "...");
    return { shortDetail };
  },
};
</script>

<style scoped></style>
