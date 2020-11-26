describe("Prueba del login", () => {
  it("Debe cargar el login", () => {
    cy.visit("/login");
  });

  it("Debe registrar un usuario", () => {
    cy.visit("/login");
    cy.contains("h1", "LOGIN");
    cy.contains("h4", "¡LOGUEATE PARA DISFRUTAR DE AUFIELDS WEB!");
    cy.contains("h3", "INICIAR SESIÓN");

    cy.get("#input-69").type("test@test.com");
    cy.get("#input-72").type("test1234");
    cy.contains(".btn-iniciarSesion_test", "Iniciar Sesion").click;
    cy.get(".btn-iniciarSesion_test").click();
    cy.contains(".btn_clear_test", "Clear").click;
    cy.get(".btn_clear_test").click();
    // cy.get(".textManeraChatear", "la mejor manera de CHATEAR");
    cy.contains(
      ".textoChatearUno",
      "Tenemos la mejor forma de comunicarse directamente con nuestros artistas y chatear con ellos."
    );
    // cy.contains(
    //   ".textoChatearDos",
    //   "Solo debes lograr por medio de ¡tu cuenta Google!"
    // );

    cy.contains(".btn_iniciarSesion_google", "INICIAR SESIÓN").click;
    cy.get(".btn_iniciarSesion_google").click;
    cy.wait(3000);
  });
});
