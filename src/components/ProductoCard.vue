<template>
  <v-card
    class="mx-auto"
    max-width="300"
    elevation="4"
    rounded="xl"
  >
    <!-- Imagen -->
    <v-img
      :src="producto.thumbnail"
      height="200"
      contain
      class="bg-grey-lighten-4"
    />

    <!-- Contenido -->
    <v-card-item>
      <v-card-title class="font-weight-bold">
        {{ producto.title }}
      </v-card-title>

      <v-card-subtitle class="text-grey">
        {{ producto.category }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div class="price text-h3 font-weight-bold mt-2">
        ${{ producto.price }}
      </div>
    </v-card-text>

    <!-- Botón -->
    <v-card-actions>
      <v-btn
        color="accent"
        variant="flat"
        block
        @click="$router.push(`/producto/${producto.id}`)"
      >
        Ver detalle
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  producto: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.price {
  font-size: 1.4rem;
}
</style>