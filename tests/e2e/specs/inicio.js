// https://docs.cypress.io/api/introduction/api.html

describe("Test e2e de Inicio", () => {
  it("Debe cargar el Inicio", () => {
    cy.visit("/");
  });

  //INICIO TEMPLATE
  it("Debe cargar body", () => {
    //PARALLAX
    cy.contains("h1", "AUFIELDS");
    cy.contains(
      "h4",
      "CONCIERTO DE MÚSICA ELECTRÓNICA MÁS GRANDE DE SUR AMÉRICA"
    );
  });

  // COMPONENTE POSTARTISTAS

  it("Debe testear el componente POSTARTISTAS", () => {
    cy.contains("h1", "ARTISTAS INVITADOS");
    cy.contains(
      "h5",
      "CONCIERTO DE MÚSICA ELECTRÓNICA MÁS GRANDE DE SUR AMÉRICA"
    );
    // cy.get(".cardDj_test:nth-child(1)").click();
    cy.contains(".NombreArtista:nth-child(1)", "Charlotte de Witte");
  });

  //COMPONENTE AREA CONCIERTO

  it("Debe testear el componente AREACONCIERTO", () => {
    cy.contains(".areaConcierto", "AREA DE CONCIERTO");
    cy.contains(".subtituloConcierto", "AREAS DE TICKET | STANTARD | GOLD");
    cy.contains(".tituloArea:nth-child(1)", "Area General");
    cy.wait(3000);
  });

  it("Debe funcionar lo btn de Inicio", () => {
    //BANNER INICIO
    cy.get(".compararticket_btn_test").click();
    cy.contains(".compararticket_btn_test", "Comprar tickets Aufields").click();
    cy.get(".lineUp_btn_test").click();
    cy.contains(".lineUp_btn_test", "LineUp").click;

    //LINK DE REDES
    cy.get(".linkRedes:nth-child(1)").click;
  });
});
