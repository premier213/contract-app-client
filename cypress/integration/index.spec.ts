/// <reference types="Cypress" />

describe('home Page', () => {
  it('should find contract app in homepage', () => {
    cy.visit('/');
    cy.get('#test');
  });
});

export {};
