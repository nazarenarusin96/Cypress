describe('empty spec', () => {
  it('Visitar tienda Movistar', () => {
    cy.visit('https://www.movistar.com.ar');
  });

  it('Ingresar al tercer equipo de la lista inicial', () => {
    cy.get('.js-device-caruosel-auto > .slick-list > .slick-track > [data-slick-index="2"]').click({force:true});
  });

  
  it('Ver opciones de financiacion', () => {
    cy.get('#open-installments-modal').click({force:true});
  });

  it('Elegir el banco Credicoop', () => {
    cy.get('#selectBank').select("Credicoop");
  });

  it('Elegir tarjeta VISA', () => {
    cy.get('#selectCardByBank').select("Visa");
  });

  it('Verifica que no exista el metodo de pago de 60 cuotas', () => {
    cy.contains('60 Cuotas').should("not.exist");
  });
  
});

