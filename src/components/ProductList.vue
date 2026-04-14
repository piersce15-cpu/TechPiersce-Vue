<template>
  <v-container>

    <!-- Filtros -->
    <v-row class="mb-4" justify="center" gap="2">
      <v-btn color="primary" @click="productStore.fetchProducts('smartphones')">
        Celulares
      </v-btn>

      <v-btn color="primary" @click="productStore.fetchProducts('laptops')">
        Laptops
      </v-btn>

      <v-btn color="primary" @click="productStore.fetchProducts('tablets')">
        Tablets
      </v-btn>
    </v-row>

    <!-- Estado: loading -->
    <v-row
      v-if="productStore.loading"
      class="d-flex flex-column align-center my-6"
    >
      <v-progress-circular indeterminate color="primary" size="50" />

      <span class="mt-3 text-subtitle-1">
        Cargando productos...
      </span>
    </v-row>

    <!-- Estado: error -->
    <v-alert
      v-else-if="productStore.error"
      type="error"
      class="my-4"
    >
      {{ productStore.error }}
    </v-alert>

    <!-- Estado: empty -->
    <v-alert
      v-else-if="productStore.products.length === 0"
      type="info"
      class="my-4"
    >
      No encontramos productos en esta categoría.
    </v-alert>

    <!-- Productos -->
    <v-row v-else>
      <v-col
        v-for="producto in productStore.products"
        :key="producto.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ProductoCard :producto="producto" />
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useProductStore } from '../stores/productStore'
import ProductoCard from '../components/ProductoCard.vue'

const productStore = useProductStore()

// Ciclos de vida: pedimos los datos al montar el componente y mostramos un mensaje en consola para seguimiento
onMounted(() => {
  console.log('Catálogo cargado: Petición a la API iniciada.')
  productStore.fetchProducts()
})

// Ciclos de vida: limpiamos el estado al desmontar el componente
onUnmounted(() => {
  console.log('El usuario salió del catálogo: Limpiando rastro.')
})
</script>

<style scoped>

</style>