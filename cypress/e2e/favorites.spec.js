// cypress/e2e/favorites.spec.js
describe('Add Wild Robot movie on favorites', () => {
  it('Find the movie Wild Robot and add it to your favorites, then check that this movie is on your favorites page.', () => {
    cy.visit('/')
    // İlk filmi tıklıyoruz
    cy.get('a[href^="/movies/1184918"]').first().click()
    // Favori butonuna tıklıyoruz
    cy.get('button').contains('Add to Favorites').click()
    // Favoriler sayfasına gidiyoruz
    cy.visit('/favorites')
    // Filmin favorilerde olduğunu kontrol ediyoruz
    cy.get('h2').contains('The Wild Robot')
    // cy.get('a[href^="/movies/"]').should('have.length.at.least', 1)
  })
})
