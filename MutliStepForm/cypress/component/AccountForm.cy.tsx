import { AccountForm } from '../../src/AccountForm';

describe('AccountForm – Komponententest', () => {
  it('zeigt Eingaben korrekt an', () => {
    const testData = {
      email: 'max@example.com',
      password: 'geheim123',
      confirmPassword: 'geheim123',
    };

    cy.mount(
      <AccountForm {...testData} updateFields={cy.stub().as('updateFields')} />
    );

    cy.get('input').eq(0).should('have.value', 'max@example.com');
    cy.get('input').eq(1).should('have.value', 'geheim123');
    cy.get('input').eq(2).should('have.value', 'geheim123');
  });

  it('reagiert auf neue Eingaben (email)', () => {
    const testData = {
      email: 'max@example.com',
      password: 'geheim123',
      confirmPassword: 'geheim123',
    };

    cy.mount(
      <AccountForm {...testData} updateFields={cy.stub().as('updateFields')} />
    );
  });
});