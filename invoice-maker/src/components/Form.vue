<template>
  <div class="container mt-3 hideOnPrint">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <form @submit.prevent="addRecord">
          <div class="row align-items-end justify-content-center">
            <div class="col-6">
              <label for="" class="form-label">Select Item</label>
              <br />
              <select name="" required id="" v-model="selectedItemValue" class="form-select">
                <option :value="item.id" v-for="item in items" :key="item.id">{{ item.name }} - ${{ item.price }}</option>
              </select>
            </div>
            <div class="col-3">
              <label for="" class="form-label">Quantity</label>
              <br />
              <input type="number" min="1" v-model="quantity" required class="form-control" />
            </div>
            <div class="col-3">
              <button class="btn btn-primary w-100"><i class="bi bi-plus-circle"></i> Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "reRecord"],
  data() {
    return {
      quantity: "",
      selectedItemValue: "",
    };
  },
  methods: {
    addRecord() {
      let selectedItem = this.items.find((item) => item.id === this.selectedItemValue);
      let newRecord = { item: selectedItem, quantity: this.quantity, cost: selectedItem.price, cost: selectedItem.price * this.quantity };
      console.log(newRecord);
      this.quantity = "";
      this.selectedItemValue = "";
      this.$emit("newRecord", newRecord);
    },
  },
};
</script>

<style lang="scss" scoped></style>
