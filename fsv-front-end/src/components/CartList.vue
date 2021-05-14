<template>
  <div v-if="products.length>0">
    <CarListItem v-for="product in products" :key="product.id" :product="product" />
  </div>
  <p v-else>You have not added any item into the cart</p>
</template>
<script>
import CarListItem from "./CartListItem.vue";
export default {
  name: "CarList",
  components: {
    CarListItem,
  },
  props: ["products"],
};
</script>

<style scoped>
.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
</style>