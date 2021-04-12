/// <reference types="Cypress" />

//const { contains } = require("cypress/types/jquery");

describe("My First Test", function () {
  it("My First testcase", function () {
    //test step
  });

  it("My Second testcase", function () {
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
    cy.get(".item-cell:visible").should("have.length", 25); //but we have ads

    cy.get(".item-cell").find(".item-container").should("have.length", 24); // This excludes any ads!
    //the find means look at the descendents of whatever element you got

    cy.get(".item-cell")
      .find(".item-container")
      .eq(2) //find array index of 2 from 0 - n
      .find('a[title="View Details"]')
      .contains(
        "EVGA GeForce RTX 3080 XC3 BLACK GAMING Video Card, 10G-P5-3881-KR, 10GB GDDR6X, iCX3 Cooling, ARGB LED"
      ) //this verifies the text within the a href
      .should("exist");

    cy.get(".item-cell")
      .find(".item-container")
      .each(($el, index, $list) => {
        const textGPU = $el.find('a[title="View Details"]').text();
        //cy.log(textGPU);
        textGPU.includes("EVGA GeForce RTX 3080 XC3 BLACK GAMING")
          ? cy.wrap($el).click()
          : cy.log("cannot find");
      });
  });
}); //describe takes two arguments, a description, and a function with no argument that wraps ALL it blocks
