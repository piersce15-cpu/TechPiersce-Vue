import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#0055FF',   // Un azul eléctrico más vibrante
          secondary: '#1A1A1A', // Casi negro para textos y énfasis
          accent: '#00D1B2',    // Turquesa para detalles (estilo startup)
          background: '#F8FAFC', // Gris muy claro para el fondo de la app
          surface: '#FFFFFF',
          grey: '#3a3f42', //Nav y Footer
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#00D1B2',
          background: '#121212',
          surface: '#1E1E1E',
        }
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')