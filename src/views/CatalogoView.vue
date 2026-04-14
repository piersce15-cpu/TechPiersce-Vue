<template>
  <div class="catalog-page">
    <h2>Catálogo de Productos</h2>
    <ProductList />
  </div>
</template>

<script setup>
import ProductList from '../components/ProductList.vue'
</script>

<style scoped>
.catalog-page {
  padding: 20px;
}
</style>