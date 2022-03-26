describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:4200/');

    cy.contains('Motto').click();

    cy.contains('All in white')
  })
})
