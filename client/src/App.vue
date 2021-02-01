<template>
  <v-app>
    <product-search />
  </v-app>
</template>

<script>
import ProductSearch from './views/ProductSearch.vue';

export default {
  name: 'App',

  components: {
    ProductSearch
  },

  data: () => ({
  }),
};
</script>
