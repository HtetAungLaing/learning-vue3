<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="showModal1 = true">Show Modal 1</button>
    <button @click="showModal2 = true">Show Modal 2</button>
    <div v-if="showModal1">
      <ModelBox title="Modal One" content="Hello from modal one" theme="success" @closeModal="showModal1 = false">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veritatis hic ut saepe sed, aspernatur voluptates, optio nulla atque in ea itaque fugit facere esse inventore at ipsum. Itaque, blanditiis.</p>
        <template v-slot:extraSlot>Slot with specific name</template>
      </ModelBox>
    </div>
    <div v-if="showModal2">
      <ModelBox title="Modal two" content="hello from modal two" theme="danger" @closeModal="showModal2 = false">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus magni at aliquam et fugiat animi accusantium nemo repudiandae. Possimus ab omnis magni. Et, qui exercitationem. Sapiente cupiditate perferendis quia labore.</p>
      </ModelBox>
    </div>
  </div>
</template>

<script>
import ModelBox from "./components/ModelBox.vue";

export default {
  data() {
    return {
      name: "kimmich",
      // title: "Modal Title",
      // content: "Hello form Modal",
      showModal1: false,
      showModal2: false,
    };
  },

  components: {
    ModelBox,
  },
};
</script>

<style scoped></style>
