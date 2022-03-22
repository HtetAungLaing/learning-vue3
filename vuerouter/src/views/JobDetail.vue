<template>
  <div>
    <h1>Job Detail</h1>
    <h3 v-if="job">Job is {{ job.position }}</h3>
    <p v-else>loading</p>
    <h3 v-if="jobError">{{ jobError }}</h3>
  </div>
</template>

<script>
export default {
  props: ["id", "description"],
  data() {
    return {
      job: null,
      jobError: null,
    };
  },
  mounted() {
    console.log(this.$route.params.id);

    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => {
        if (response.status !== 200) {
          throw Error("no data");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        this.job = data;
      })
      .catch((error) => {
        this.jobError = error.message;
      });
  },
};
</script>

<style lang="scss" scoped></style>
