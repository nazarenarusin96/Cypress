class indexPage{
    constructor(){
        this.verEquipos=".device-carousel-title > a",
        this.search="#search",
        this.seleccionarSearch="#search_mini_form",
        this.seleccionarEquipo="#qs-option-0",
        this.ingresarEquipo=".product-image-photo",
        this.verificacion=".active > .details > ul > :nth-child(1)"
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
}export default new indexPage();