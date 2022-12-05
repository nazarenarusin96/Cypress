//import indexPage from "../support/index"

describe('CP001', () => {

  it('Visitar tienda Movistar', () => {
    cy.visit('https://www.movistar.com.ar')
  });

  it('Filtro por ver mas equipos', () => {
    cy.get('.device-carousel-title > a').click({force:true});
  });

  it('Selecciono search', () => {
    cy.get('#search_mini_form > .actions').click({force:true});
  });

  it('Ingreso el equipo en la busqueda', () => {
    cy.get('#search').type("a52s");
  });

  it('Selecciono el equipo en el buscador', () => {
    cy.get('#search_mini_form').click({force:true});
    cy.get('#qs-option-0').click({force:true});
  });

  it('Ingreso al equipo', () => {
    cy.get('.product-image-photo').click({force:true});
  });

  it('Verifica que se puede pagar en hasta 12 cuotas', () => {
    cy.get('.active > .details > ul > :nth-child(1)').contains("12");
  });
});
