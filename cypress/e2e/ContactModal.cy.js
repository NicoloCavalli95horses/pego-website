describe('Send an email correctly', () => {
  before(() => {
    cy.visit('https://192.168.235.63:5173/');
    cy.wait(200);
    cy.get('[data-cy="btn-contattaci"]').should('exist');
  });

  it('can open the contact modal', () => {
    cy.get('[data-cy="btn-contattaci"]').first().click();
    cy.get('[data-cy="modal"]').should('exist');
  });
  it('can select the request option', () => {
    cy.get('[data-cy="opt-Riparazione"]').should('exist');
    cy.get('[data-cy="opt-Riparazione"]').click();
  });
  it('textarea should be on error', () => {
    cy.get('[data-cy="btn-avanti"]').click();
    cy.get('[data-cy="textarea').should('have.class', 'error');
  });
  it('can fill in the textarea input field', () => {
    cy.get('[data-cy="textarea').type('This is a test');
    cy.get('[data-cy="textarea').should('not.have.class', 'error');
  });
  it('can proceed to the next step of the form', () => {
    cy.get('[data-cy="btn-avanti"]').click();
  });
});