describe('empty spec', () => {
  it('Visitar tienda Movistar', () => {
    cy.visit('https://www.movistar.com.ar')
  });

  it('Visitar tienda Movistar', () => {
    cy.get('.pnt-opciones-menu-desktop > .mi-movistar-login > .btn-group > .mi-movistar-login__button > span').click({force:true});
    cy.get('.pnt-opciones-menu-desktop > .mi-movistar-login > .btn-group > .dropdown-menu > .pnt-contenedor-dropdown > :nth-child(2) > .btn').click({force:true});
    cy.get(':nth-child(1) > .f9fmg4o > .feb23nm > .fdt65p4').click({force:true});
    cy.get('.f13dbscq').click({force:true});
    cy.get(':nth-child(3) > .fcaipju > .fddsvlq > .fkhz08q > .fodlaap').click({force:true});
    cy.get('.f13dbscq').click({force:true});
    cy.get('#nemail').click({force:true}).type("emailprueba123@gmail.com");
    cy.get('#npass').click({force:true}).type("contraseña123");
    cy.get('#btn-enviar').click({force:true});
    cy.get(':nth-child(3) > .invalid-feedback').contains("Revisá que tus datos sean los correctos.");
  });
})