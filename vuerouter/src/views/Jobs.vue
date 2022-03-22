<template>
  <div>
    <h2>Available Jobs</h2>
    <div style="">
      <p class="job-box" v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'jobDetail', params: { id: job.id } }" :description="job.description">{{ job.position }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },

  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        this.jobs = datas;
      })
      .catch((erro) => console.log(erro));
  },
};
</script>

<style scoped>
.job-box {
  padding: 1rem;
  border: 1px solid darkgreen;
  width: 20%;
  text-align: center;
  margin: 2rem auto;
}
.job-box:hover {
  cursor: pointer;
}
</style>
