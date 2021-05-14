<template>
  <div class="product-container">
    <CarListItem v-for="product in products" :key="product.id" :product="product" />
  </div>
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