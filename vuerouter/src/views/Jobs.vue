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
      jobs: [
        { id: 1, position: "Web Designer", description: "Designs beautiful webs" },
        { id: 2, position: "Web Developer", description: "Develops high demands webs" },
        { id: 3, position: "Web Security", description: "Secure sensitive infos about webs" },
      ],
    };
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
