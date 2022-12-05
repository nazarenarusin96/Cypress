class indexPage{
    constructor(){

        //CP001

        this.verEquipos=".device-carousel-title > a",
        this.search="#search",
        this.seleccionarSearch="#search_mini_form",
        this.seleccionarEquipo="#qs-option-0",
        this.ingresarEquipo=".product-image-photo",
        this.verificacion=".active > .details > ul > :nth-child(1)"

        //CP003

        this.terceroLista='.js-device-caruosel-auto > .slick-list > .slick-track > [data-slick-index="2"]',
        this.opFinanciacion='#open-installments-modal',
        this.bancoCredicoop='#selectBank',
        this.tarjetaVisa='#selectCardByBank',
        this.verificaNoExist='60 Cuotas'
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
}export default new indexPage();
