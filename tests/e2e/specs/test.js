// https://docs.cypress.io/api/introduction/api.html

describe('Moogsoft notifications', () => {
  it('Should display the notification page', () => {
    cy.visit('/');
    cy.contains('h1', 'Notifications');
  });

  it('Should display the a list of notifications', () => {
    cy.visit('/');
    cy.get('ol > li')
      .children()
      .should('have.length', 15);
  });

  it('Notifications should be updated after 10s', () => {
    cy.visit('/');

    cy.wait(10500);

    cy.get('ol > li')
      .children()
      .should('have.length');
  });

  it('Should be possible to filter read notifications', () => {
    cy.visit('/');
    cy.get('ol > li')
      .children()
      .should('have.length', 3);
  });
});
