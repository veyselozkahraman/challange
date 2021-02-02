<template>
  <div>
    <v-app-bar app color="primary" dark> Products </v-app-bar>
    <v-main>
      <div class="main-container loading" v-if="loading">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
      <div class="main-container" v-if="!loading">
        <div>
          <v-text-field
            v-on:keyup.enter="onEnter"
            solo
            clearable
            @click:clear="onClearClicked"
            placeholder="Search"
            v-model="textToBeSearched"
          >
            <v-icon slot="prepend" color="rgba(158, 158, 158, 2)">mdi-feature-search-outline</v-icon>
          </v-text-field>
        </div>
        <data-table v-bind:products="productsToBeRendered" v-bind:headers="headers" />
      </div>
    </v-main>
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";
import { getProducts } from "../api/api";
import { subStringSearchForProducts, sortProductsArrayByField } from "../utils/utils";

export default {
  name: "ProductSearch",
  components: {
    DataTable,
  },
  created() {
    this.fetchData();
  },
  data: () => ({
    loading: true,
    textToBeSearched: '',
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
    products: undefined,
    productsToBeRendered: undefined
  }),
  methods: {
    async fetchData () {
      try {
        const products = await getProducts();
        const sortedProducts = sortProductsArrayByField(products, 'title');
        this.productsToBeRendered = sortedProducts
        this.products = sortedProducts;
      } catch {
        this.products = [];
      }
      this.loading = false;
    },
    onEnter() {
      if (this.textToBeSearched !== undefined && this.textToBeSearched !== null) {
        this.loading = true;
        this.productsToBeRendered = subStringSearchForProducts(this.products, 'title', this.textToBeSearched);
        this.loading = false;
      } else {
        this.productsToBeRendered = this.products;
      }
    },
    onClearClicked() {
      this.productsToBeRendered = this.products;
    }
  }
};
</script>

<style>
.main-container {
  padding: 50px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.loading {
  justify-content: center!important;
}
</style>