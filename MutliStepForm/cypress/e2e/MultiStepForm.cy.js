/// <reference types="cypress" />

describe('MultiStepForm – E2E', () => {
  it('füllt das Formular vollständig aus und klickt auf Finish', () => {
    cy.visit('/');

    // Step 1: UserForm
    cy.get('input').eq(0).type('Max');
    cy.get('input').eq(1).type('Mustermann');
    cy.get('input').eq(2).type('Testmann');
    cy.get('input').eq(3).type('30');
    cy.contains('Next').click();

    // Step 2: AddressForm
    cy.get('input').eq(0).type('Teststraße 1');
    cy.get('input').eq(1).type('Berlin');
    cy.get('input').eq(2).type('Berlin');
    cy.get('input').eq(3).type('12345');
    cy.contains('Next').click();

    // Step 3: AccountForm
    cy.get('input').eq(0).type('max@example.com');
    cy.get('input').eq(1).type('123456');
    cy.get('input').eq(2).type('123456');
    cy.contains('Finish').click();

    // Optional: Bestätigung nach Abschluss prüfen
    // z. B. cy.contains('Vielen Dank');
  });
});
