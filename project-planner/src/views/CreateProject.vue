<template>
  <div>
    <h6 class="more-space mb-3 text-black-50 fw-bolder">CREATE</h6>
    <form @submit.prevent="createProject">
      <div class="mb-3">
        <label for="" class="form-label">Title</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Detail</label>
        <textarea type="text" class="form-control" v-model="detail"></textarea>
      </div>
      <div>
        <button class="btn btn-outline-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  methods: {
    createProject() {
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
        }),
      })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
