import indexPage from "../support/index";

describe('empty spec', () => {
  it('Visitar tienda Movistar', () => {
    indexPage.urlMovistar();
  });

  it('Realiza la busqueda de login', () => {
    indexPage.visitMovistar();
    cy.get(':nth-child(3) > .invalid-feedback').contains("Revisá que tus datos sean los correctos.");
  });

  it("Ingresa datos no registrados en la base de datos de Movistar",()=>{
    indexPage.ingresarLogin();
  })
})