<template>
  <div class="block" v-if="showBlock" @click="stopCount"></div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      score: null,
      countFun: null,
    };
  },
  methods: {
    startCount() {
      this.countFun = setInterval(() => {
        this.score += 50;
      }, 50);
    },
    stopCount() {
      clearInterval(this.countFun);
      this.$emit("gameEnd", this.score);
    },
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startCount();
    }, this.delay);
    console.log("mounted", this.score);
  },
  unmounted() {
    console.log("unmounted", this.score);
  },
};
</script>

<style scoped>
.block {
  width: 200px;
  padding: 200px;
  border-radius: 50%;
  background: rgb(175, 255, 199);
  margin: 2rem auto;
}
</style>
