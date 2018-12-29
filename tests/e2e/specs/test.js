// https://docs.cypress.io/api/introduction/api.html

describe('Moogsoft notifications', () => {
  it('Should display the notification page', () => {
    cy.visit('/');
    cy.contains('h1', 'Notifications');
  });

  it('Should display the a list of notifications', () => {
    cy.visit('/');
    cy.get('ol')
      .children()
      .should('have.length', 15);
  });

  it('Notifications should be updated after 11s', () => {
    cy.visit('/');

    cy.wait(11000);

    cy.get('ol')
      .children()
      .should('have.length', 5);
  });

  it('Should be possible to filter read notifications', () => {
    cy.visit('/');

    cy.get('#filterUnread').click();

    cy.get('ol')
      .children()
      .should('have.length', 3);
  });
});
