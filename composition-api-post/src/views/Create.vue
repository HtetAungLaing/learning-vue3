<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div>
          <h2 class="text-black-50">Create</h2>
          <form @submit.prevent="save">
            <div class="mb-3">
              <label for="" class="form-label">Title</label>
              <input required type="text" name="" id="" class="form-control" v-model="title" />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Details</label>
              <textarea required class="form-control" name="" id="" cols="30" rows="10" v-model="detail"></textarea>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Tags</label>
              <div class="mb-2">
                <span class="badge bg-secondary ms-2" v-for="tag in tags" :key="tag">{{ tag }}</span>
              </div>
              <input type="text" class="form-control" name="" v-model="tag" id="" @keydown.enter.prevent="addTag" />
              <p class="form-text">Press enter to add tags</p>
            </div>
            <div>
              <button class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  setup() {
    let title = ref("");
    let detail = ref("");
    let tag = ref("");
    let tags = ref([]);
    let router = useRouter();
    let addTag = () => {
      if (!tags.value.includes(tag.value)) {
        tags.value.push(tag.value);
        tag.value = "";
      }
    };
    let save = async () => {
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          detail: detail.value,
          tags: tags.value,
        }),
      });
      router.push({ name: "home" });
    };
    return { title, detail, tag, tags, addTag, save };
  },
};
</script>

<style lang="scss" scoped></style>
