//Testear NAVBAR Y CHAT

describe("Debe testear navbar y continuar con chat", () => {
  // CARGA DE INICIO
  it("Debe probar la carga de Inicio para proceder el testeo", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.viewport(350, 600);
    cy.viewport(600, 960);
    cy.viewport(960, 1264);
    cy.viewport(1264, 1904);
    cy.viewport(1904, 2450);
    cy.wait(3000);
  });

  // //   ENTRAR EN TRAVEL
  // it("Debe entrar Travel y salir", () => {
  //   cy.get(".v-app-bar__nav-icon > .v-btn__content > .v-icon").click();
  //   cy.wait(2000);
  //   cy.get(".v-list > [href='/travel']").click();
  //   cy.get(".tituloTravel").click();
  // });

  //   TESTEO DE NAVBAR

  it("Debe probar cada btn del navbar y retornar a inicio", () => {
    // PROBAR EL DESPLIEGUE DE NAVEGATION DRAWER
    cy.wait(2000);
    cy.get(".v-app-bar__nav-icon > .v-btn__content > .v-icon").click();

    //ENTRAR EN CADA COMPONENTE DE LA SFC
    // ENTRAR A LINEUP PROTEGIDO
    cy.get(".v-list > [href='/lineup']").click();
    cy.wait(2000);
    cy.contains("h1", "LOGIN");
    cy.contains("h4", "¡LOGUEATE PARA DISFRUTAR DE AUFIELDS WEB!");
    cy.contains("h3", "INICIAR SESIÓN");
    cy.get("#email_test").type("test@test.com");
    cy.get("#contrasena_test").type("test1234");
    cy.contains(".btn-iniciarSesion_test", "Iniciar Sesion").click;
    cy.get(".btn-iniciarSesion_test").click();
    cy.get(".swal-button").click();
  });

  // CARD ARTISTAS

  it("Debe testear las card de los artistas", () => {
    cy.get(".v-window__next > .v-btn > .v-btn__content > .v-icon").click();
    cy.get(3000);
    cy.get(
      ':nth-child(1) > [data-v-45547649=""] > .mx-auto > .v-card__actions > .v-btn--icon > .v-btn__content > .v-icon'
    ).click();
    cy.get(3000);
    cy.get("#notaArtista").scrollIntoView();
  });

  // ENTRAR A CHAT
  it("Debe entrar a chat", () => {
    cy.get("#btnchat_test").click();
    cy.get("#mensajeChat").type("Probando test chat");
    cy.get(".text-center > .tituloChat").click();
  });

  //   ENTRAR EN TRAVEL
  it("Debe entrar Travel y salir", () => {
    cy.get(".v-app-bar__nav-icon > .v-btn__content > .v-icon").click();
    cy.wait(2000);
    cy.get(".v-list > [href='/travel']").click();
    cy.get("#btnTravelModal").click();
    cy.get(".tituloTravel").click();
  });

  //ENTRAR EN TICKET

  it("Debe entrar a Tickets y salir del mismo", () => {
    cy.get(".v-app-bar__nav-icon > .v-btn__content > .v-icon").click();
    cy.wait(2000);
    cy.get(".v-list > [href='/tickets']").click();
  });

  //ENTRAR EN AUF2019

  it("Debe entrar a la galeria Auf2019", () => {
    cy.get(".v-app-bar__nav-icon > .v-btn__content > .v-icon").click();
    cy.wait(2000);
    cy.get(".v-list > [href='/auf2019']").click();
    cy.get("#galeriaAuf").click();
    // cy.get("#notaArtista").scrollIntoView();
    cy.wait(3000);
  });

  // DESLOGUEAR

  it("Debe desloguearse", () => {
    cy.get(".red--text > .v-btn__content > .v-icon").click();
  });
});
