import Chance from 'chance'


describe('Test for reqres', () => {

    // FIXTURES
    it('Positive: Create user', () => {
        cy.fixture('user').then((user) => {
            cy.request('POST', '/api/users', user).then((response) => {           // baseUrl built-in automatically
                expect(response.status).to.equal(201)
                expect(response.body).to.have.property('name', user.name)
                expect(response.body).to.have.property('job', user.job)
                expect(response.body).to.have.property('id', user.id)
            })
        })
    })


    // CHANCE
    let testDada = [
        {
            description: "Max values",
            requestData: {
                name: Chance().string({ length: 100, alpha: true }),
                job: Chance().string({ length: 100 }),
                id: Chance().integer({ min: 1000, max: 9999 })
            }
        },

        {
            description: "Min values",
            requestData: {
                name: Chance().string({ length: 1, alpha: true }),
                job: Chance().string({ length: 1 }),
                id: Chance().integer({ min: 1, max: 9 })
            }
        }
    ]

    testDada.forEach(({ description, requestData }) => {
        it(`Positive: Create user - ${description}`, () => {
            cy.request('POST', '/api/users', requestData).then((response) => {              // baseUrl built-in automatically
                expect(response.status).to.equal(201)
                expect(response.body).to.have.property('name', requestData.name)
                expect(response.body).to.have.property('job', requestData.job)
                expect(response.body).to.have.property('id', requestData.id)
            })
        })
    })


    //__________________________________________________NEGATIVE_____________________________________________________

    it('Negative: POST request - login unsuccessful', () => {
        cy.request({                                            // https://docs.cypress.io/api/commands/request#Syntax
            method: 'POST',
            url: '/api/login',                                  // baseUrl built-in automatically
            failOnStatusCode: false,
            body: { "email": "john@travolta" }
        }).then((response1) => {
            expect(response1.status).to.equal(400)
        })
    })
})