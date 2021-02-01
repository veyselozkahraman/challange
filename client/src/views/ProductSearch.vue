<template>
  <div>
    <v-app-bar app color="primary" dark> Products </v-app-bar>
    <v-main>
      <div>
        <v-text-field
          solo
          label="Prepend"
          prepend-icon="mdi-map-marker"
        ></v-text-field>
      </div>
      <data-table v-bind:products="products" v-bind:headers="headers" />
    </v-main>
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";

export default {
  name: "ProductSearch",

  components: {
    DataTable,
  },

  data: () => ({
    headers: [
      {
        text: "ID",
        align: "center",
        value: "id",
        sortable: false,
      },
      {
        text: "Title",
        align: "center",
        value: "title",
      },
    ],
    products: [
      {
        id: "1",
        title: "Aasd",
      },
      {
        id: "2",
        title: "asdasd",
      },
    ],
  }),
};
</script>

<style>

</style>