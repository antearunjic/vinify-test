describe("Checks if registration is successful", () => {
  it("Register", () => {
    cy.visit("https://funky.dev.vinify.app/feed ");

    cy.get("button").contains("Register").click();
    cy.get('input[name="email"]').type("anteaaa.runjic@gmail.com");
    cy.get("button").contains("Continue").click();

    cy.get('input[name="fullName"]').type("Antea Antea");
    cy.get('input[name="password"]').type("AbCd12345");
    cy.get('input[name="repeatedPassword"]').type("AbCd12345");

    cy.get('div[role="button"][id="job-title-select-label"]').click();

    cy.get('ul[role="listbox"]').contains("Amateur").click();

    cy.get("button").contains("Submit").click();
  });
});
