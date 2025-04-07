/// <reference types="cypress" />
import { UserForm } from '../../src/UserForm';

describe('UserForm – Komponententest', () => {
  it('zeigt Eingaben an und ruft updateFields korrekt auf', () => {
    const testData = {
      firstName: 'Max',
      secondName: 'Mustermann',
      lastName: 'Testmann',
      age: '30',
    };

    cy.mount(
      <UserForm {...testData} updateFields={cy.stub().as('updateFields')} />
    );

    // Eingaben prüfen
    cy.get('input').eq(0).should('have.value', 'Max');
    cy.get('input').eq(1).should('have.value', 'Mustermann');
    cy.get('input').eq(2).should('have.value', 'Testmann');
    cy.get('input').eq(3).should('have.value', '30');
  });
});
