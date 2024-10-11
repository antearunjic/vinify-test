describe("Create a new event", () => {
  it("Event", () => {
    cy.visit("https://funky.dev.vinify.app/events ");

    cy.get("button").contains("Create the event").click();
    cy.get('input[name="title"]').type("New Event");

    cy.get('div[role="button"][id=":r6:"]').click();

    cy.get('ul[role="listbox"]').contains("Messe").click();

    cy.get('input[name="organiserName"]').type("me");
    cy.get('textarea[name="description"]').type("This is the first event.");
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Next").click();
    cy.get("button").contains("Next").click();
    cy.get(".CreateEvent_buttonCreate__sJqhx").click();
  });
});
