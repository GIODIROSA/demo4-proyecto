// Testear Agregar

describe("Test de agregar", () => {
  it("Debe cargar la sección agregar", () => {
    cy.visit("/agregar");
    cy.wait(2000);
  });

  it("Debe testear el agregar comentario", () => {
    cy.contains(".tituloAgregar", "AGREGAR");
    cy.contains(
      ".subtituloAgregar",
      "Podrás agregar un comentario para los artistas"
    );
    cy.get("#agregarComentario_test").type("testeando comentario");
    cy.wait(1000);
    cy.get(".btnAgregar_test").click();
  });
});
