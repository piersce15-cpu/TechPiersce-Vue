import { mount } from '@vue/test-utils'
import ProductList from '../components/ProductList.vue'
import { describe, it, expect, vi } from 'vitest'

// Mock del store completo
vi.mock('../stores/productStore', () => {
  return {
    useProductStore: () => ({
      products: [],
      loading: false,
      error: 'Error al conectar con el servidor',
      fetchProducts: vi.fn()
    })
  }
})

describe('ProductList', () => {
  it('muestra error cuando falla la API', () => {
    const wrapper = mount(ProductList)

    expect(wrapper.text()).toContain('Error al conectar con el servidor')
  })
})