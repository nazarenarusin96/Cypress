describe('empty spec', () => {
  it('Visitar tienda Movistar', () => {
    cy.visit('https://www.movistar.com.ar')
  });

  it('Filtro por ver mas equipos', () => {
    cy.get('.device-carousel-title > a').click({force:true});
  });

  it('Filtro por cantidad asignada', () => {
    cy.get('#layered-filter-block > .block-title > strong').click({force:true});
    cy.get('.filter-options-content > .items > :nth-child(2) > a > :nth-child(1)').click({force:true});
  });


  it('Filtro por GB de memoria interna', () => {
    cy.get('#layered-filter-block > .block-title > strong').click({force:true});
    cy.get('[attribute="movistar_internalmemory"] > .filter-options-content > .items > :nth-child(2) > a').click({force:true});
  });
  
})
