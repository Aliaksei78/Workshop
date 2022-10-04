///<reference types="Cypress" />
import AccessoriesPage from '../../PageObjects/accessoriesPage'
import SearchResultsPage from '../../PageObjects/searchResultsPage'


describe('E2E test', () => {

    before(function () {                                 // it is Hook
        cy.fixture('product').then((data) => {           // take data from 'product.json' in the folder cypress/fixtures
            this.data = data                             // now this.data visible for tests BUT ARROW FUNCTIONS DO NOT
        })                                               // BE EXIST IN before() AND it() IN THIS CASE  https://docs.cypress.io/api/commands/fixture#this-context
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Search google pixel buds a-series', function () {
        const accessoriesPage = new AccessoriesPage()
        const searchResultPage = new SearchResultsPage()

        cy.log('GIVEN User is at Accessories Page:')
        accessoriesPage.open()
        cy.log('WHEN User performs search of product:')
        accessoriesPage.getSearchIcon.click()
        accessoriesPage.getSearchInput.click().type(this.data.name).type('{enter}')
        cy.log('THEN User found needed product:')
        searchResultPage.getProductByHref(this.data.href).should('be.visible')
    })
})



/* describe('E2E test', () => {

    before(() => {                                       // it is Hook
        cy.fixture('product').then((data) => {           // take data from 'product.json' in the folder cypress/fixtures
            cy.wrap(data).as('productData')              // this.product = product but in this case arrow functions do not work
        })
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('Search google pixel buds a-series', () => {
        const accessoriesPage = new AccessoriesPage()
        const searchResultPage = new SearchResultsPage()

        cy.get('@productData').then((productData) => {           // we need it because of cy.wrap(data).as('productData') above
            cy.log('GIVEN User is at Accessories Page:')
            accessoriesPage.open()
            cy.log('WHEN User performs search of product:')
            accessoriesPage.getSearchIcon.click()
            accessoriesPage.getSearchInput.click().type(productData.name).type('{enter}')
            cy.log('THEN User found needed product:')
            searchResultPage.getProductByHref(productData.href).should('be.visible')
        })
    })
}) */