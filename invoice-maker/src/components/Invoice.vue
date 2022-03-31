<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-12">
        <div>
          <h3 class="text-center text-primary">Invoice Maker</h3>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="d-flex justify-content-between">
          <p class="mb-0 text-black-50 small">
            <small>Invoice Number</small>
            {{ invoiceNumber }}
          </p>
          <a href="" target="blank" class="btn btn-sm btn-primary">Create New Maker <i class="bi bi-file-earmark-diff"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    invoiceNumber() {
      let d = new Date();
      let dateCode = d.getDate() + "" + (d.getMonth() + 1) + "" + d.getFullYear();
      let random = Math.floor(Math.random() * 10000);
      return dateCode + "-" + random;
    },
  },
};
</script>

<style lang="scss" scoped></style>
