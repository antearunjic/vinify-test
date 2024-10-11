describe("Checks if login is successful", () => {
  it("Login", () => {
    cy.visit("https://funky.dev.vinify.app/feed ");

    cy.get("button").contains("Login").click();
    cy.get('input[name="email"]').type("anteaa.runjic@gmail.com");
    cy.get('input[name="password"]').type("AbCd12345");
    cy.get("button[type='submit']").click();
  });
});
