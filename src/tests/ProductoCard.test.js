import { mount } from '@vue/test-utils'
import ProductoCard from '../components/ProductoCard.vue'
import { describe, it, expect } from 'vitest'


describe('ProductoCard', () => {
  it('renderiza correctamente los datos', () => {
    const productoMock = {
      id: 1,
      title: 'iPhone',
      price: 999,
      thumbnail: 'img.jpg'
    }

    const wrapper = mount(ProductoCard, {
      props: {
        producto: productoMock
      }
    })

    expect(wrapper.text()).toContain('iPhone')
    expect(wrapper.text()).toContain('999')
  })
})