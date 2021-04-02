describe("My First Test", function () {
  it("My First testcase", function () {
    //test step
    cy.viewport(1920, 1080);
    cy.visit("https://www.newegg.com/");
  });

  it("My Second testcase", function () {
    //test step
  });
}); //describe takes two arguments, a description, and a function with no argument that wraps ALL it blocks
