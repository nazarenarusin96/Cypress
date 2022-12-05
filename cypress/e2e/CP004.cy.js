describe('empty spec', () => {
  it('Visitar tienda Movistar', () => {
    cy.visit('https://www.movistar.com.ar')
  });

  it('Visitar tienda Movistar', () => {
    cy.get('.pnt-opciones-menu-desktop > .mi-movistar-login > .btn-group > .mi-movistar-login__button > span').click({force:true});
    cy.get('.pnt-opciones-menu-desktop > .mi-movistar-login > .btn-group > .dropdown-menu > .pnt-contenedor-dropdown > :nth-child(2) > .btn').click({force:true});
    cy.get(':nth-child(1) > .f9fmg4o > .feb23nm > .fdt65p4').click({force:true});
    cy.get('.f13dbscq').click({force:true});
    cy.get('[aria-label="Seleccionado,2 o más con DNI"] > .fcaipju').click({force:true});
    cy.get('.f13dbscq').click({force:true});
  });
})

