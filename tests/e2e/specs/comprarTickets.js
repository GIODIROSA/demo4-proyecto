//Testear ticket seleccionado

describe("Prueba de compra de tickets seleccionado", () => {
  it("Debe cargar el ticket seleccionado en vista params", () => {
    cy.visit("/tickets/:id");
    cy.wait(2000);
  });

  it("Debe testear el select de numero de entrada", () => {
    cy.get(".v-input__icon > .v-icon").click();
    cy.get(
      "#list-item-99-1 > .v-list-item__content > .v-list-item__title"
    ).click();
    cy.contains(
      ".normativaCompraTicket",
      "Solo puedes comprar 5 entradas como número máximo"
    );
    cy.get(".btnComprarBoleta_test").click();
    cy.wait(2000);
    cy.get(
      ".v-card__actions > .v-btn--icon > .v-btn__content > .v-icon"
    ).click();
    cy.reload();
  });
});
