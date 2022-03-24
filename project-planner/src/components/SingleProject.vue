<template>
  <div class="card shadow mt-3">
    <div class="card-body" :class="[{ complete: project.complete, uncomplete: !project.complete }, 'rounded-3']">
      <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0 title" @click="showDetail = !showDetail">{{ project.title }}</p>
        <div>
          <router-link :to="{ name: 'editProject', params: { id: this.project.id } }" class="btn btn-outline-success btn-sm">
            <i class="bi bi-pen"></i>
          </router-link>
          <button class="ms-3 btn btn-outline-danger btn-sm" @click="deleteProject">
            <i class="bi bi-trash"></i>
          </button>
          <button class="ms-3 btn btn-outline-primary btn-sm" @click="toggleProject">
            <i class="bi bi-check2-circle"></i>
          </button>
        </div>
      </div>

      <p class="mb-0 mt-3 text-black-50" v-if="showDetail">{{ project.detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetail: false,
    };
  },

  methods: {
    deleteProject() {
      let deleterUrl = "http://localhost:3000/projects/" + this.project.id;
      fetch(deleterUrl, {
        method: "DELETE",
      })
        .then(() => {
          this.$emit("delete", this.project.id);
        })
        .catch((error) => console.log(error));
    },

    toggleProject() {
      let toogleUrl = "http://localhost:3000/projects/" + this.project.id;
      fetch(toogleUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          complete: !this.project.complete,
        }),
      })
        .then(() => {
          this.$emit("toggle", this.project.id);
        })
        .catch((error) => console.log(error.message));
    },
  },
};
</script>

<style lang="scss" scoped></style>
