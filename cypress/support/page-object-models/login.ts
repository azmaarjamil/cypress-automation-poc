/* eslint-disable no-unused-vars */
const btnMEssage = "//a[text()='Messages']"
const btnLogin = 'button#navbarLoginButton'
const txtEmail = 'input#email'
const txtPassword = 'input#password'
const btnLoginMain = 'button#loginButton'
const btnCloseBanner ='button[aria-label="Close Welcome Banner"]'
const btnuploadFile = 'button.primary-button.height-medium'
const txtIntegrationName = 'input[placeholder="Enter Integration name"]'
const firstElement = 'div[title="stg-idg-nocsr"]'
const email = 'input[title="example@example.com"]'
const pass = 'input[title="Type here"]'





Cypress.Commands.add("uploadAFile",() => {
  cy.visit(Cypress.env('url'))  
  cy.get(email).should('be.visible').type("galyna.alieksandrova+5@zazmic.com")
  cy.get(pass).should('be.visible').type("TestAcc123!")
  cy.get(`button[type="submit"]`).click();

  cy.xpath(btnMEssage).should('be.visible')
    .click()
  cy.get(btnuploadFile).should('be.visible')
    .click()
  cy.get(txtIntegrationName).should('be.visible').type('stg-idg-nocsr')
  cy.get(firstElement).should('be.visible').click()
  cy.xpath("//span[text()='Browse File']")
  .attachFile('cypress/fixtures/1.2.276.0.50.192168001092.11517584.14547392.3.dcm');

});





