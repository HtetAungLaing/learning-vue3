<template>
  <div>
    <h6 class="more-space mb-3 text-black-50 fw-bolder">Edit</h6>
    <form @submit.prevent="editProject">
      <div class="mb-3">
        <label for="" class="form-label">Title</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Detail</label>
        <textarea type="text" class="form-control" v-model="detail"></textarea>
      </div>
      <div>
        <button class="btn btn-outline-primary">Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  methods: {
    editProject() {
      fetch("http://localhost:3000/projects/" + this.id, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          detail: this.detail,
        }),
      })
        .then(() => this.$router.push({ name: "home" }))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    fetch("http://localhost:3000/projects/" + this.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.title = data.title;
        this.detail = data.detail;
      });
  },
};
</script>

<style scoped></style>
