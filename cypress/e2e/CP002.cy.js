import indexPage from "../support/index";

describe('CP002', () => {
  it('Visitar tienda Movistar', () => {
    indexPage.urlMovistar();
  });

  it('Filtro por ver mas equipos', () => {
    indexPage.verLista();
  });

  it('Filtro por cantidad de dinero asignada', () => {
    indexPage.filtrarOpciones({ timeout: 20000 });
    cy.contains('200').click({force:true});
  });

  it('Filtro por cantidad de memoria interna', () => {
    cy.contains('256').click({force:true});
  });

  it('Muestra los equipos que cumplan con la condicion', () => {
    cy.get('#product-item-info_12316 > .details > .product-item-name > .product-item-link > .brand').should('have.text', '\n                                        Motorola                                    ').and('not.contain', 'Samsung');
  });
  
  
  
})