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
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>

