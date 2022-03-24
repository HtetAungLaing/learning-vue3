<template>
  <div class="my-3 d-flex justify-content-center">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link class="nav-link more-space" :to="{ name: 'home' }">All Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link more-space" :to="{ name: 'createProject' }">Create Project</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
