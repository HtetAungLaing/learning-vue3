<template>
  <div>
    <div class="my-3">
      <div class="btn-group">
        <button @click="changeCurrent('all')" :class="[{ active: current === 'all' }, 'btn btn-sm btn-outline-primary']">All</button>
        <button @click="changeCurrent('complete')" :class="[{ active: current === 'complete' }, 'btn btn-sm btn-outline-primary']">Complete</button>
        <button @click="changeCurrent('ongoing')" :class="[{ active: current === 'ongoing' }, 'btn btn-sm btn-outline-primary']">Ongoing</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    changeCurrent(current) {
      this.$emit("changeCurrent", current);
    },
  },
};
</script>

<style scoped></style>
