<template>
  <div class="grid-wrap">
    <ProductGridList v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
<script>
import ProductGridList from "./ProductGridList.vue";
export default {
  name: "ProductGrid",
  components: {
    ProductGridList,
  },
  props: ["products"],
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