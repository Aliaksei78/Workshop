class MainPage {

    open(targetUrl = '') {
        cy.visit(Cypress.env('storeUrl') + targetUrl)
    }

    getProductByHref(link) {
        return cy.get(`a[href="${link}"]`)
    }
}

export default MainPage