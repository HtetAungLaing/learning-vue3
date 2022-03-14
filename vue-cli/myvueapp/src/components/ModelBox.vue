<template>
  <div class="backdrop" @click.self="closeModal">
    <div :class="['box', { success: theme == 'success', danger: theme === 'danger' }]">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>

      <slot> This is defautl slot text </slot>
      <slot name="extraSlot" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "theme"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.backdrop {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
}
.box {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;
}
.success {
  background: lightgreen;
}
.danger {
  background: lightcoral;
}
</style>
