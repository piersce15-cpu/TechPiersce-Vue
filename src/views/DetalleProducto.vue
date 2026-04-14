<template>
  <v-container>

    <!-- Loading -->
    <v-row v-if="productStore.loading" justify="center" class="my-10">
      <v-progress-circular indeterminate color="primary" size="60" />
      <div class="mt-4 text-subtitle-1">Cargando producto...</div>
    </v-row>

    <!-- Error -->
    <v-alert
      v-else-if="productStore.error"
      type="error"
      class="my-6"
    >
      {{ productStore.error }}
    </v-alert>

    <!-- Contenido -->
    <v-row v-else-if="productStore.product" class="mt-4" justify="center">

      <v-col cols="12" md="11" lg="10" xl="8">

        <!-- Botón volver -->
        <v-btn
          variant="text"
          color="primary"
          class="mb-6 font-weight-bold"
          @click="$router.back()"
        >
          ← Volver al catálogo
        </v-btn>

        <v-card elevation="4" rounded="xl" class="pa-4">

          <v-row>

            <!-- Imagen -->
            <v-col cols="12" md="6">
              <v-img
                :src="productStore.product.thumbnail"
                height="300"
                contain
                rounded="lg"
              />
            </v-col>

            <!-- Información -->
            <v-col cols="12" md="6" class="d-flex flex-column">

              <v-chip
                color="primary"
                variant="outlined"
                class="mb-2"                      
        
              >
                {{ productStore.product.category.toUpperCase() }}
              </v-chip>

              <h2 class="text-h3 font-weight-bold mb-4" style="line-height: 1.2;">
                {{ productStore.product.title }}
              </h2>

              <p class="text-body-1 text-grey-darken-1 mb-8">
                {{ productStore.product.description }}
              </p>

              <div class="price font-weight-black mb-6">
                ${{ productStore.product.price }}
              </div>

              <v-btn
                color="primary"
                size="large"                
                rounded="lg"
              >
                Añadir al carrito
              </v-btn>

            </v-col>

          </v-row>

        </v-card>

      </v-col>

    </v-row>

  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/productStore'

const route = useRoute()
const productStore = useProductStore()

onMounted(() => {
  const id = route.params.id
  productStore.fetchProductById(id)
})
</script>

<style scoped>
.price {
  font-size: 1.6rem;

}
</style>