import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/TechPiersce-Vue/',
  build: {
    rollupOptions: {
      output: {
        // Esto cambia la carpeta de 'assets' a 'static' para los archivos JS
        // Así evitamos el bloqueo de GitHub sin romper el build
        chunkFileNames: 'assets/js-[name]-[hash].js',
        entryFileNames: 'assets/js-[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
