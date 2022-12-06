import indexPage from "../support/index";

describe('empty spec', () => {
  it('Visitar tienda Movistar', () => {
    indexPage.urlMovistar();
  });

  it('Filtro por ver mas equipos', () => {
    indexPage.verLista();
  });

  it('Filtro por cantidad de dinero asignada', () => {
    indexPage.filtrarOpciones();
    cy.get("ol").find("li").eq(5).click({force:true});
    indexPage.filtrarOpciones();
    cy.get("ol").find("li").eq(8).click({force:true});
  });
  
  Cypress.LocalStorage.clear = function(keys, ls, rs) {};
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
})
