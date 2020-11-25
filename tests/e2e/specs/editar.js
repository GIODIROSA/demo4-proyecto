// Testear Editar

describe("Prueba de editar comentario", () => {
  it("Debe cargar la sección editar comentario", () => {
    cy.visit("/editar/:id");
    cy.wait(3000);
  });

  it("Debe editar el comentario", () => {
    cy.contains(".tituloEditarComentario", "EL COMENTARIO");
    cy.contains(
      ".subTituloEditarComentario",
      "Podrás editar el comentario y volverlo a enviar"
    );
    cy.get("#input-67").type("editar comentario test");
    cy.wait(1000);
    cy.get(".btnEditar_test > .v-icon").click();
    cy.reload();
  });
});
