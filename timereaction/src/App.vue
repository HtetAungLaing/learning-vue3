<template class="wrapper">
  <div class="container">
    <h1>How fast you are ?</h1>
    <button @click="gameStart" :disabled="isPlaying">Start</button>
    <div v-if="isPlaying">
      <BlockComponent :delay="delay" @gameEnd="gameEnd" />
    </div>
    <ShowScore :score="score" v-if="isEnd && !isPlaying" />
  </div>
</template>

<script>
import BlockComponent from "./components/BlockComponent.vue";
import ShowScore from "./components/ShowScore.vue";
export default {
  components: {
    BlockComponent,
    ShowScore,
  },

  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      isEnd: false,
    };
  },

  methods: {
    gameStart() {
      this.isPlaying = true;
      this.delay = 1000 + Math.random() * 3000;
    },
    gameEnd(score) {
      this.score = score;
      this.isPlaying = false;
      this.isEnd = true;
    },
  },
};
</script>

<style>
body {
  background: rgb(2, 15, 43);
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  color: wheat;
}
.container {
  text-align: center;
  margin-top: 5rem;
}
button {
  margin-top: 1rem;
  padding: 0.2rem 0.5rem;
  color: black;
  border: 2px solid wheat;
  border-radius: 20px;
}
</style>
