
import { AddressForm } from '../../src/AddressForm';

describe('AddressForm – Komponententest', () => {
  it('zeigt Eingaben korrekt an', () => {
    const testData = {
      address: 'Teststraße 1',
      city: 'Berlin',
      state: 'Berlin',
      PostalCode: '12345',
    };

    cy.mount(
      <AddressForm {...testData} updateFields={cy.stub().as('updateFields')} />
    );

    cy.get('input').eq(0).should('have.value', 'Teststraße 1');
    cy.get('input').eq(1).should('have.value', 'Berlin');
    cy.get('input').eq(2).should('have.value', 'Berlin');
    cy.get('input').eq(3).should('have.value', '12345');
  });
});
