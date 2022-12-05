class indexPage{
    constructor(){

        //CP001

        this.verEquipos=".device-carousel-title > a",
        this.search="#search",
        this.seleccionarSearch="#search_mini_form",
        this.seleccionarEquipo="#qs-option-0",
        this.ingresarEquipo=".product-image-photo",
        this.verificacion=".active > .details > ul > :nth-child(1)"

        //CP002

        this.filtrarPor="#layered-filter-block > .block-title > strong",

        //CP003

        this.terceroLista='.js-device-caruosel-auto > .slick-list > .slick-track > [data-slick-index="2"]',
        this.opFinanciacion='#open-installments-modal',
        this.bancoCredicoop='#selectBank',
        this.tarjetaVisa='#selectCardByBank',
        this.verificaNoExist='60 Cuotas'

        //CP004

        this.visitaMiMovistar=".pnt-opciones-menu-desktop > .mi-movistar-login > .btn-group > .mi-movistar-login__button > span",
        this.ingresaMimovistar=".pnt-opciones-menu-desktop > .mi-movistar-login > .btn-group > .dropdown-menu > .pnt-contenedor-dropdown > :nth-child(2) > .btn",
        this.lineaMovil=":nth-child(1) > .f9fmg4o > .feb23nm > .fdt65p4",
        this.botonSiguiente=".f13dbscq",
        this.opcionDni=":nth-child(3) > .fcaipju > .fddsvlq > .fkhz08q > .fodlaap",

        this.ingresarEmail="#nemail",
        this.ingresarContraseña="#npass",
        this.botonEnviar="#btn-enviar",
        this.revisarDatos=":nth-child(3) > .invalid-feedback"
    }

    //CP001

    urlMovistar() {
        cy.visit('https://www.movistar.com.ar')
    }

    verLista=(element)=>{
        cy.log("Ingresa a la lista de equipos");
        cy.get(this.verEquipos).click();
    }

    selectSearch=(element)=>{
        cy.get(this.search).click({force:true}).type("a52s");
        cy.get(this.seleccionarSearch).click({force:true});
        cy.get(this.seleccionarEquipo).click({force:true});
        cy.get(this.ingresarEquipo).click({force:true});
    }

    verification=(element)=>{
        cy.get(this.verificacion).contains("12");
    }

    //CP002

    filtrarOpciones=(element)=>{
        cy.get(this.filtrarPor).click({force:true});
    }

    //CP003

    lista=(element)=>{
        cy.get(this.terceroLista).click({force:true});
    }

    financiacion=(element)=>{
        cy.get(this.opFinanciacion).click({force:true});
        cy.get(this.bancoCredicoop).select("Credicoop");
        cy.get(this.tarjetaVisa).select("Visa");
    }

    validacion=(element)=>{
        cy.contains(this.verificaNoExist).should("not.exist");
    }

    //CP004

    visitMovistar=(element)=>{
        cy.get(this.visitaMiMovistar).click({force:true});
        cy.get(this.ingresaMimovistar).click({force:true});
        cy.get(this.lineaMovil).click({force:true});
        cy.get(this.botonSiguiente).click({force:true});
        cy.get(this.opcionDni).click({force:true});
        cy.get(this.botonSiguiente).click({force:true});
    }

    ingresarLogin=(element)=>{
        cy.get(this.ingresarEmail).click({force:true}).type("emailprueba123@gmail.com");
        cy.get(this.ingresarContraseña).click({force:true}).type("contraseña123");
        cy.get(this.botonEnviar).click({force:true});
        cy.get(this.revisarDatos).contains("Revisá que tus datos sean los correctos.");
    }
}export default new indexPage();
