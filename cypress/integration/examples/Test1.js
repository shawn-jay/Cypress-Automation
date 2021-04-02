/// <reference types="Cypress" />

describe("My First Test", function () {
  it("My First testcase", function () {
    //test step
    cy.viewport(1280, 720);
    cy.visit("https://www.newegg.com/");
    cy.get(".header2020-search-box > input").click().type("RTX 3080");
  });

  it("My Second testcase", function () {
    //test step
  });
}); //describe takes two arguments, a description, and a function with no argument that wraps ALL it blocks
