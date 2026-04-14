describe('Flujo de catálogo de productos', () => {

  it('el usuario puede filtrar productos y ver resultados', () => {

    // 1. Visitar la aplicación
    cy.visit('http://localhost:4173')

    // 2. Navegar al catálogo
    cy.contains('Ver el Catálogo').click()

    // 3. Verificar cambio de ruta
    cy.url().should('include', '/productos')

    // 4. Seleccionar categoría
    cy.contains('Celulares').click()

    // 5. Esperar carga de productos (API)
    cy.get('.v-card', { timeout: 10000 }).should('exist') // Se realiza el cambio de .producto-card a .v-card por el uso de Vuetify

    // 6. Verificar que existen productos
    cy.get('.v-card').should('exist') // Se realiza el cambio de .producto-card a .v-card por el uso de Vuetify

  })

})