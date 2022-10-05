import MainPage from "./mainPage"


class AccessoriesPage extends MainPage {

    open() {
        cy.visit(Cypress.env('storeUrl') + '/us/collection/accessories_wall?hl=en-US')
    }

    get getSearchIcon() {
        return cy.get('.gn5mEf.uFvxge')
    }

    get getSearchInput() {
        return cy.get('input[placeholder="Search Google Store"]')
    }
}

export default AccessoriesPage
