<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    products: Array,
    headers: Array
  },
  data: () => ({
  }),
};
</script>
