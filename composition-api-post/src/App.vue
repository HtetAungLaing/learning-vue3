<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-12 col-md-8 col-lg-6">
        <router-link :to="{ name: 'home' }" class="text-decoration-none text-black-50 ms-2">Home</router-link>
        <router-link :to="{ name: 'create' }" class="text-decoration-none text-black-50 ms-2">Create</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
a.router-link-active {
  color: #000000 !important;
}
</style>
