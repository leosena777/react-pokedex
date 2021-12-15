describe("Test", () => {
  it("loads successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get("button")
      .should("be.enabled")
      .should("contain.text", "Sortear outro");

    cy.wait(2000);
    cy.get("button").click();
    cy.wait(2000);
    cy.get("button").click();
    cy.wait(2000);

    cy.get("a").first().click();
  });
});
