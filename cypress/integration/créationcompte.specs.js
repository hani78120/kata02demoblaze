/// <reference types="cypress"/>

describe("Authentification", () => {
  before(() => {
    cy.visit("/");
    cy.url().should("eq", Cypress.config().baseUrl);
    cy.fixture("inscription").as("insc");
  });
  it("création d'un utilsateur", () => {
    cy.get('[data-target="#signInModal"]').click();
    cy.get("@insc").then((insc) => {
      cy.get("#sign-username").type(insc.name);
      cy.get("#sign-password").type(insc.password);
      cy.get("#signInModal").find('[class="btn btn-primary"]').click();
    });
  });
});
