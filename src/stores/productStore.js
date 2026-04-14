import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null, // producto individual
    loading: false,
    error: null
  }),

  actions: {
    async fetchProducts(category = 'smartphones') {
      this.loading = true
      this.error = null

      try {
        const url = `https://dummyjson.com/products/category/${category}`
        const response = await axios.get(url)
        this.products = response.data.products
      } catch (err) {
        this.error = "Error al conectar con el servidor."
      } finally {
        this.loading = false
      }
    },

    // Obtener producto por ID
    async fetchProductById(id) {
      this.loading = true
      this.error = null
      this.product = null

      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        this.product = response.data
      } catch (err) {
        this.error = "Error al cargar el producto."
      } finally {
        this.loading = false
      }
    }
  }
})