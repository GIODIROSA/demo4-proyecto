// https://docs.cypress.io/api/introduction/api.html

describe("Test e2e de Inicio", () => {
  it("Debe cargar el Inicio", () => {
    cy.visit("/");
    cy.wait(3000);
    cy.viewport(350, 600);
    cy.viewport(600, 960);
    cy.viewport(960, 1264);
    cy.viewport(1264, 1904);
    cy.viewport(1904, 2450);
    cy.wait(1000);
  });

  //NAVBAR

  it("Debe Testearse cada elemento de Navbar", () => {
    cy.contains("h5", "AUFIELDS");
    cy.get(".tituloEvento").click();
    cy.contains(".modificacionTituloEvento", "2021");
  });

  //INICIO TEMPLATE
  //PARALLAX

  it("Debe cargar body", () => {
    cy.contains("h1", "AUFIELDS");
    cy.contains(
      "h4",
      "CONCIERTO DE MÚSICA ELECTRÓNICA MÁS GRANDE DE SUR AMÉRICA"
    );
    cy.wait(2000);
  });

  // COMPONENTE POSTARTISTAS

  it("Debe testear el componente post artistas", () => {
    cy.contains("h1", "ARTISTAS INVITADOS");
    cy.contains(
      "h5",
      "CONCIERTO DE MÚSICA ELECTRÓNICA MÁS GRANDE DE SUR AMÉRICA"
    );
    cy.wait(1000);
    cy.contains(".NombreArtista:nth-child(1)", "Charlotte de Witte");
  });

  //COMPONENTE AREA CONCIERTO

  it("Debe testear el componente Area Concierto", () => {
    cy.wait(3000);
    cy.contains(".areaConcierto", "AREA DE CONCIERTO");
    cy.contains(".subtituloConcierto", "AREAS DE TICKET | STANTARD | GOLD");
    cy.contains(".tituloArea:nth-child(1)", "Area General");
  });

  //BANNER INICIO

  it("Debe funcionar lo btn de Inicio", () => {
    cy.wait(2000);
    cy.get(".compararticket_btn_test").click();
    cy.contains(".compararticket_btn_test", "Comprar tickets Aufields").click();

    
    //LINK DE REDES

    cy.get(".linkRedes:nth-child(1)").click;
  });

  //ENCABEZADO DE TICKETS

  it("Debe testear los componentes de tickets", () => {
    cy.wait(2000);
    cy.contains(".tituloTickets_test", "TICKETS");
    cy.contains(".subtituloTicket", "06 y 07 de NOVIEMBRE/ CLUB HÍPICO");
  });

  //MODAL NORMATIVA

  it("Debe testear los elementos dentro del Modal normativa", () => {
    cy.wait(2000);
    cy.get(".btnNormativa").click();
    cy.contains(".btnNormativa>.v-btn__content", "NORMATIVA");
    cy.contains(".tituloIdentificatoria", "Tipos identificación");
    cy.contains(".tituloEntrada", "Venta de entradas");
    cy.get(".btnCerrar_test").click();
  });

  //COMPRAR TICKET SELECCIONADO

  it("Debe testear la compra del ticket deseado por usuario", () => {
    cy.wait(2000);
    cy.get("#comprarTest").click();
    cy.get(".swal-button").click();
    cy.get(".v-input__icon > .v-icon").click();
    cy.get("#list-item-190-2").click();
    cy.contains(
      ".normativaCompraTicket",
      "Solo puedes comprar 5 entradas como número máximo"
    );
    cy.get(".btnComprarBoleta_test").click();
    cy.get(
      ".v-card__actions > .v-btn--icon > .v-btn__content > .v-icon"
    ).click();
    cy.get(".volverTicket_test").click();
    cy.get(".tituloTickets_test").click();
  });
});
