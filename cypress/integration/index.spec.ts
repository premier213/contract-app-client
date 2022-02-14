/// <reference types="Cypress" />

describe('home Page', () => {
  it('should find contract app in homepage', () => {
    cy.visit('/');
    cy.findByRole('button', { name: /connect wallet/i });
  });
});

export {};
