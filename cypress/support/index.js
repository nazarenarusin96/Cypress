class indexPage{
    constructor(){

        //CP001

        this.verEquipos="h2",
        this.search="#search",
        this.seleccionarSearch="#search_mini_form",
        this.seleccionarEquipo="#qs-option-0",
        this.ingresarEquipo=".product-image-photo",
        this.verificacion=".active > .details > ul > :nth-child(1)",
        this.screenshotCP001="#movistar-buy-options-wrapper > .active",
        this.screenshotEquipo=".wrapper > .products"

        //CP002

        this.filtrarPor="#layered-filter-block > .block-title > strong",
        

        //CP003

        this.terceroLista='.js-device-caruosel-auto > .slick-list > .slick-track > [data-slick-index="2"]',
        this.opFinanciacion='#open-installments-modal',
        this.bancoCredicoop='#selectBank',
        this.tarjetaVisa='#selectCardByBank',
        this.verificaNoExist='#bodyTable > :nth-child(5) > :nth-child(1)',
        this.screenshotTabla="#modal-content-18"

        //CP004

        this.visitaMiMovistar="div",
        this.ingresaMimovistar=".pnt-opciones-menu-desktop > .mi-movistar-login > .btn-group > .dropdown-menu > .pnt-contenedor-dropdown > :nth-child(2) > .btn",
        this.lineaMovil=":nth-child(1) > .f9fmg4o > .feb23nm > .fdt65p4",
        this.botonSiguiente="div",
        this.opcionDni=":nth-child(3) > .fcaipju > .fddsvlq > .fkhz08q > .fodlaap",

        this.buscarInput="input",
        this.botonEnviar="#btn-enviar",
        this.revisarDatos=".invalid-feedback.npass-invalid",
        this.formLogin="form",
        this.screenshotLogin="#loginForm > .form-container"
        
    }

    //CP001

    urlMovistar() {
        cy.log("Ingresa a la pagina de Movistar");
        cy.visit('https://www.movistar.com.ar');
    }

    verLista=(element)=>{
        cy.log("Ingresa a la lista de equipos");
        cy.get(this.verEquipos).find("a").click();
    }

    selectSearch=(element)=>{
        cy.log("Ingresa a la seccion de busqueda y se selecciona el equipo A52s");
        cy.get(this.search).click({force:true}).type("a52s");
        cy.get(this.seleccionarSearch).click({force:true});
        cy.get(this.seleccionarEquipo).click({force:true});

        cy.log("Se toma una screenshot que muestra el equipo seleccionado");
        cy.get(this.screenshotEquipo).screenshot({overwrite: true});

        cy.get(this.ingresarEquipo).click({force:true});
    }

    verification=(element)=>{
        cy.log("Verifica que el equipo se pueda abonar en 12 cuotas");
        //cy.get(this.verificacion).contains("12");
        cy.get(this.verificacion).should('have.text',"Hasta  12  cuotas sin interés con tarjetas seleccionadas");

        cy.log("Se toma una screenshot que muestra que se puede pagar en 12 cuotas");
        cy.get(this.screenshotCP001).screenshot({overwrite: true});
    }

    //CP002

    filtrarOpciones=(element)=>{
        cy.log("Se ingresa al menu de filtrado");
        cy.get(this.filtrarPor).click({force:true});        
    }

    //CP003

    lista=(element)=>{
        cy.log("Ingresa a la lista de equipos y se selecciona el tercero");
        cy.get(this.terceroLista).click({force:true});
    }

    financiacion=(element)=>{
        cy.log("Ingresa a la seccion de financiacion y se selecciona el banco Credicoop y tarjeta Visa");
        cy.get(this.opFinanciacion).click({force:true});
        cy.get(this.bancoCredicoop).select("Credicoop");
        cy.get(this.tarjetaVisa).select("Visa");

        cy.log("Se toma un screenshot de la tabla de cuotas");
        cy.get(this.screenshotTabla).screenshot({overwrite: true});
    }

    validacion=(element)=>{
        cy.log("Verifica que exista 60 cuotas (aparecera un mensaje de error)");
        //cy.get(this.verificaNoExist).should('not.contain',"60").screenshot();

        cy.get(this.verificaNoExist).should($element => {
            expect($element).to.not.include.text("60");
        });

        cy.log("Se toma un screenshot de la cantidad maxima de cuotas que se puede abonar");
        cy.get(this.verificaNoExist).screenshot({overwrite: true});
    }

    //CP004

    visitMovistar=(element)=>{
        cy.log("Ingresa a la seccion de Mi Movistar para verificar el login");
        cy.get(this.visitaMiMovistar).find("button").eq(1).click({force:true});
        cy.get(this.ingresaMimovistar).click({force:true});
        cy.get(this.lineaMovil).click({force:true});
        cy.get(this.botonSiguiente).find("button").last().click({force:true});
        cy.get(this.opcionDni).click({force:true});
        cy.get(this.botonSiguiente).find("button").first().click({force:true});
    }

    ingresarLogin=(element)=>{
        cy.log("Se ingresan datos incorrectos para verificar el login y verifica que no se pueda ingresar datos no registrados");
        cy.get(this.buscarInput).filter('[type="email"]').type("emailprueba123@gmail.com");
        cy.get(this.buscarInput).filter('[type="password"]').type("contraseña123");

        cy.log("Se toma un screenshot de los datos ingresados erroneos");
        cy.get(this.screenshotLogin).screenshot({overwrite: true});

        cy.get(this.formLogin).find("button").first().click({force:true});
        cy.log("Verifica que no se pueda ingresar con datos incorrectos");
        
        //cy.get(this.revisarDatos).contains("Revisá que tus datos sean los correctos.");

        cy.get(this.revisarDatos).should("have.text","\n\t\t\t\t\t\t\tRevisá que tus datos sean los correctos.\n\t\t\t\t\t\t  ");
    }
}export default new indexPage();
