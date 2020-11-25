// Testear tickets

describe("Test de Tickets", () => {
  it("Debe cargar el Ticket", () => {
    cy.visit("/tickets");
    cy.wait(3000)
  });

  it("Debe cargar el body tickets", () => {
    cy.contains(".tituloTickets_test", "TICKETS");
  });

  it("Debe testear CARDTICKETS", () => {
    cy.get(".btnNormativa").click();
    cy.contains(".btnNormativa>.v-btn__content", "NORMATIVA");
    cy.contains(".subtituloTicket", "06 y 07 de NOVIEMBRE/ CLUB HÍPICO");
    cy.contains(".container>:nth-child(3)>:nth-child(1)", "Standard One Day");

  //preguntar en clase**
    // cy.get(':nth-child(1) > .cardtickets_test > :nth-child(6) > .routerLinkComprar > #comprarTest').click();
    // cy.contains(".comprar_test)", "Comprar").click;
  });

  it("Debe testear MODAL", () => {
    cy.wait(3000);
    cy.contains(".tituloNormativa", "Normativas");
    cy.contains(".tituloIdentificatoria", "Tipos identificación");
    cy.contains(".tituloEntrada", "Venta de entradas");
    cy.get(".btnCerrar_test").click();
  });
});
