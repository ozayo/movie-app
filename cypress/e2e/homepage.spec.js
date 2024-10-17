describe('Homepage', () => {
  it('Home page must load and show correct h1 content', () => {
    cy.visit('/')
    cy.contains("What's Popular")
  })
})