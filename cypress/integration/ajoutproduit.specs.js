/// <reference types="cypress"/>
const { faker } = require("@faker-js/faker");
const name = faker.name.findName();
const country = faker.address.country();
const city = faker.address.cityName();
const carte = faker.finance.creditCardNumber();
const mois = faker.date.month();
const annee = 2022;

describe("Authentification", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("eq", Cypress.config().baseUrl);
    cy.fixture("inscription").as("insc");
  });
  it.skip("connection", () => {
    cy.get('[data-target="#logInModal"]').click();
    cy.get("@insc").then((insc) => {
      cy.get("#loginusername").type(insc.name);
      cy.wait(1000);
      cy.get("#loginpassword").type(insc.password);
      cy.wait(1000);
      cy.get("#logInModal").find('[class="btn btn-primary"]').click();
      cy.get("#nameofuser").should("be.visible");
    });
  });
  it("ajout produit et paiement", () => {
    cy.get(".hrefch").eq(0).click();
    cy.get('[class="btn btn-success btn-lg"]').click();
    cy.get('[href="cart.html"]').click();
    cy.get('[class="btn btn-success"]').click();
    cy.get("#name").type(name);
    cy.get("#country").type(country);
    cy.get("#city").type(city);
    cy.get("#card").type(carte);
    cy.get("#month").type(mois);
    cy.get("#year").type(annee);
    cy.get('[class="btn btn-primary"]').contains("Purchase").click();
    cy.get('[class="confirm btn btn-lg btn-primary"]').click();
  });
});
