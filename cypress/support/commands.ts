/* eslint-disable no-unused-vars */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("getLengthofSearch", (apiResponse) => {
  const arrlength = Object.keys(apiResponse.body.data.Products).length;
  cy.log(`The value of array Lenght is ${arrlength}`)
  cy.writeDataInFile('cypress/fixtures/misc-data.json', 'length', arrlength)

});

/**
      * writeDataInFile write data in a file based on a key  
      * @param path     
      * @param nameof
      * @param value   
   */
// eslint-disable-next-line no-undef
Cypress.Commands.add("writeDataInFile", (path, nameof, value) => {
  cy.readFile(path)
    .then((obj) => {
      const myName = nameof;
      const actualObj = obj;
      actualObj[myName] = value;
      cy.writeFile(path, actualObj);
    });
});