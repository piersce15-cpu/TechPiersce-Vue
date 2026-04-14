<template>
  <v-app>
    <AppHeader />

    <v-main class="bg-grey-lighten-4" style="min-height: 100vh;">
      <v-container class="py-10">
        <RouterView />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

import { useThemeStore } from './stores/themeStore'
import { useTheme } from 'vuetify'
import { watch } from 'vue'

const themeStore = useThemeStore()
const theme = useTheme()

// Esto hace que el tema cambie automáticamente
watch(
  () => themeStore.darkMode,
  (newValue) => {
    theme.change(newValue ? 'dark' : 'light')
  },
  { immediate: true }
)
</script>
