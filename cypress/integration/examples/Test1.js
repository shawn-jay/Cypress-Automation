/// <reference types="Cypress" />

//const { contains } = require("cypress/types/jquery");

describe("My First Test", function () {
  it("My First testcase", function () {
    //test step
    cy.viewport(1280, 720);
    cy.visit("https://www.newegg.com/");
    cy.get(".header2020-search-box > input").click().type("RTX 3080");
    cy.get(".header2020-search-button").click();
    cy.get('span:contains("GeForce RTX 30 Series")').click();
    //jQuery locator find ^^

    cy.get(".filter-box-apply").click();
    cy.get("select[autocomplete='off']").select("Lowest Price");
    //select
    cy.get(".item-cell:visible").should("have.length", 25);
  });

  it("My Second testcase", function () {
    //test step
  });
}); //describe takes two arguments, a description, and a function with no argument that wraps ALL it blocks
