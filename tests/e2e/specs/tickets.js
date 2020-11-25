// Testear tickets

describe("Test de Tickets", () => {
  it("Debe cargar el Ticket", () => {
    cy.visit("/tickets");
  });

  it("Debe cargar el body tickets", () => {
    cy.contains(".tituloTickets_test", "TICKETS");
  });

  it("Debe testear CARDTICKETS", () => {
    cy.get(".btnNormativa").click();
    cy.contains(".btnNormativa>.v-btn__content", "NORMATIVA");
    cy.contains(".subtituloTicket", "06 y 07 de NOVIEMBRE/ CLUB HÍPICO");
    cy.contains(".container>:nth-child(3)>:nth-child(1)", "Standard One Day");


    // cy.contains(
    //   ":nth-child(1)> .cartickets_test> :nth-child(3)>.nombreArtistas_test",
    //   "Amelie lens y Boris Brejcha"
    // );
    // cy.get(".comprar_test:nth-child(1)").click();
    // cy.contains(".comprar_test:nth-child(1)", "Comprar").click;
  });
});
