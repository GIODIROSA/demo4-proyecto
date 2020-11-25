// Testear Comentarios

describe("Test de Comentarios", () => {
  it("Debe cargar la sección Comentarios", () => {
    cy.visit("/contactus");
    cy.wait(2000);
  });

  it("Debe testear el Crud de comentarios", () => {
    cy.get(".btn_contacto_test").click();
    cy.contains(".btn_contacto_test", "CONTÁCTANOS").click;
    cy.get(".btnAgregar_test").click();
    cy.reload();
  });

//   it("Debe testear el btn de editar", () => {
//     cy.get(".btnEditar_test").click();
//   });
});
