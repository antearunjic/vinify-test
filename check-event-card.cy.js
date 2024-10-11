describe("Checking existing element", () => {
  it("Open existing event anc checks information", () => {
    cy.visit("https://vinify.app/events ");

    cy.get('div[data-ga-event-name="event_page"][href="/events/1236"]').click();
    cy.url().should("include", "/1236");

    cy.get("span").should("include.text", "Winemaker's dinner");
    cy.get("h1").should("include.text", "Cave Mia x Pierre Gaillard middag");
    cy.get("p").should("include.text", "18:30 - 22:00");
    cy.get("p").should("include.text", "Cave Mia, Briskebyveien, Oslo, Norge");
    cy.get("span").should("include.text", "About");
  });
});
