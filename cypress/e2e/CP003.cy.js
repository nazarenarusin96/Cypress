import indexPage from "../support/index";

describe('empty spec', () => {
  it('Visitar tienda Movistar', () => {
    indexPage.urlMovistar();
  });

  it('Ingresar al tercer equipo de la lista inicial', () => {
    indexPage.lista();
  });

  it('Ver opciones de financiacion', () => {
    indexPage.financiacion();
  });


  it('Verifica que no exista el metodo de pago de 60 cuotas', () => {
    indexPage.validacion();
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
});

