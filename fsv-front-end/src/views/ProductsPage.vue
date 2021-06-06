<template>
  <div id="page-wrap">
    <ProductGrid :products="products" />
  </div>
</template>
<script>
import ProductGrid from "../components/ProductGrid.vue";
import axios from "axios";
export default {
  name: "ProductsPage",
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductGrid
  },
  async created() {
    const result = await axios.get("/api/products");
    const products = result.data;
    this.products = products;
  }
};
</script>

<style scoped>
</style>

