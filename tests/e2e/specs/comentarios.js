// Testear Comentarios

describe("Test de Comentarios", () => {
  //CARGAR INICIO
  it("Se debe testear el recorrido desde incio", () => {
    cy.visit("/");
    cy.wait(2000);
  });

  // TESTEAR NAVIGATION DRAWER

  it("Debe testear el funcionamiento de navigation drawer", () => {
    cy.wait(2000);
    cy.get(".v-app-bar__nav-icon > .v-btn__content > .v-icon").click();
    cy.get(".btnComentarios_test").click();
  });

  // TESTEAR CONTACTANOS

  it("Debe testear los elementos de contacto us", () => {
    cy.wait(2000);
    cy.contains("#tituloComentario_test", "COMENTARIOS");
    cy.get("#contactanos_test").click();
    cy.contains("#contactanos_test", "CONTÁCTANOS").click;
    cy.get("#btnContador_test").click();
  });

  //AGREGAR COMENTARIOS

  it("Debe testear el Created de Crud de comentarios", () => {
    cy.wait(2000);
    cy.get(".btnAgregar_test").click();
    cy.contains(".tituloAgregar", "AGREGAR");
    cy.contains(
      ".subtituloAgregar",
      "Podrás agregar un comentario para los artistas"
    );
    cy.get("#agregarComentario_test").type("testeando comentario");
    cy.wait(1000);
    cy.get(".btnAgregar_test").dblclick();
  });

  //TESTEAR EDITAR COMENTARIOS

  it("Debe testear el update de crud de comentarios", () => {
    cy.wait(2000);
    cy.get("#btnEditar_test").click();
    cy.get(".swal-button").click();
    cy.contains(".tituloEditarComentario", "EL COMENTARIO");
    cy.contains(
      ".subTituloEditarComentario",
      "Podrás editar el comentario y volverlo a enviar"
    );
    cy.get("#btnEditar_test").click();
    cy.get("#parallaxEditar").click();
    cy.get(".tituloEvento").click();
  });
});
