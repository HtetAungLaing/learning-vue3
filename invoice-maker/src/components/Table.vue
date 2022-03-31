<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <table class="table table-secondary rounded m-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in records" :key="index">
              <td class="text-center">{{ index + 1 }}</td>
              <td class="text-center">{{ record.item.name }}</td>
              <td class="text-center">{{ record.item.price }}</td>
              <td class="text-center">{{ record.quantity }}</td>
              <td class="text-center">${{ record.cost }}</td>
              <td class="text-center">
                <button @click="delRecord(index)" class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr v-if="records.length > 0">
              <td colspan="6">
                <div class="d-flex justify-content-around">
                  <h5 class="mb-0">Total</h5>
                  <div>{{ calTotal }}</div>
                </div>
              </td>
            </tr>
            <tr v-else>
              <td colspan="6">No records</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["records"],
  data() {
    return {
      total: "",
    };
  },
  computed: {
    calTotal() {
      return this.records.reduce((pv, cv) => pv + cv.cost, 0);
    },
  },
  methods: {
    delRecord(index) {
      this.$emit("delRecord", index);
    },
  },
};
</script>

<style scoped></style>
