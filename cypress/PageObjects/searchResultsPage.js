class SearchResultsPage {

    getProductByHref(link) {
        return cy.get(`a[href="${link}"]`)
    }
}

export default SearchResultsPage