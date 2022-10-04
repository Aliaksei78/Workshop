const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: '9yjz1s',                              // we got it from dashboard

  defaultCommandTimeout: 5000,                      // default = 4000, set just for practice
  pageLoadTimeout: 70000,                           // default = 60000, set just for practice
  env: {
    storeUrl: "https://store.google.com"              // url for UI tests
  },


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://reqres.in",                    // it will be our default url for tests
    specPattern: "cypress/tests"                     // cose specs not in default "cypress\e2e"
  },
});
