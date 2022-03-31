<template>
  <div>
    <Invoice></Invoice>
    <Form :items="items" @newRecord="records.push($event)"></Form>
    <Table :records="records" @delRecord="delRecord"></Table>
  </div>
</template>

<script>
import Form from "./components/Form";
import Table from "./components/Table";
import Invoice from "./components/Invoice";
export default {
  components: {
    Form,
    Table,
    Invoice,
  },
  data() {
    return {
      items: [
        { id: 1, name: "Monitor", price: 300 },
        { id: 2, name: "Keyboard", price: 200 },
        { id: 3, name: "Mouse", price: 200 },
        { id: 4, name: "Cpu", price: 1300 },
      ],
      records: [],
    };
  },
  methods: {
    delRecord(index) {
      let filterRecord = this.records.filter((record, ind) => ind !== index);
      this.records = filterRecord;
    },
  },
};
</script>

<style lang="scss" scoped></style>
