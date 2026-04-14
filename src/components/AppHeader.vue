<template>
  <v-app-bar :color="themeStore.darkMode ? 'grey-darken-4' : 'grey-lighten-3'" elevation="2"><!-- Cambia el color según el modo -->

    <div class="d-flex align-center justify-space-between w-100 px-4">

      <!-- Logo -->
      <v-toolbar-title class="font-weight-bold text-truncate">
        TechPiersce
      </v-toolbar-title>

      <!-- Menú escritorio -->
      <div class="d-none d-sm-flex">
        <v-btn to="/" variant="text">Inicio</v-btn>
        <v-btn to="/productos" variant="text">Productos</v-btn>
      </div>

      <!-- Menú móvil -->
      <div class="d-flex d-sm-none">
        <v-menu>
          <template #activator="{ props }">
            <v-btn icon v-bind="props">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item to="/">
              <v-list-item-title>Inicio</v-list-item-title>
            </v-list-item>

            <v-list-item to="/productos">
              <v-list-item-title>Productos</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn icon @click="toggleTheme">
        <v-icon>
        {{ themeStore.darkMode ?  'mdi-weather-night' : 'mdi-weather-sunny' }}<!-- Cambia el icono según el modo--> 
        </v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useThemeStore } from '../stores/themeStore' // Importa el store de tema

const themeStore = useThemeStore()

const toggleTheme = () => {// Función para alternar el tema
  themeStore.toggleTheme()
}
</script>