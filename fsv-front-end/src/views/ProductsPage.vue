<template>
  <div id="page-wrap">
    <ProductGrid :products="products" />
  </div>
</template>
<script>
import { products } from "../fake-data";
import ProductGrid from "../components/ProductGrid.vue";
export default {
  name: "ProductsPage",
  data() {
    return {
      products,
    };
  },
  components: {
    ProductGrid,
  },
};
</script>

<style scoped>
</style>

