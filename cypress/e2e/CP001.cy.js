import indexPage from "../support/index";

import "../support/commands";

describe('CP001', () => {

  it('Visitar tienda Movistar', () => {
    indexPage.urlMovistar();
  });

  it('Filtro por ver mas equipos', () => {
    indexPage.verLista();
  });

  it('Ingreso la busqueda e ingreso al equipo a52s', () => {
    indexPage.selectSearch();
  });  
  
  it('Verifica que se puede pagar en hasta 12 cuotas', () => {
    indexPage.verification();
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
}); 
