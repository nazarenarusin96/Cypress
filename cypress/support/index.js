class indexPage{
    constructor(){
        this.verEquipos=".device-carousel-title > a"
    }

    search=(element)=>{
        cy.get(this.verEquipos).click({force:true});
    }
}export default new indexPage();