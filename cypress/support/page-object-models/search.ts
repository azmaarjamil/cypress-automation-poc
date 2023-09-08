/* eslint-disable no-unused-vars */
const btnShoppingCart ='//span[text()=" Your Basket"]'
const btnCheckout ='button#checkoutButton'
const btnAddNewAddress ='button[aria-label="Add a new address"]'
const txtCountry = 'input[data-placeholder="Please provide a country."]'
const txtName = 'input[data-placeholder="Please provide a name."]'
const txtmobileNo = 'input[data-placeholder="Please provide a mobile number."]'
const txtZipCode = 'input[data-placeholder="Please provide a ZIP code."]'
const txtAddress = '[data-placeholder="Please provide an address."]'
const txtCity = '[data-placeholder="Please provide a city."]'
const txtState = '[data-placeholder="Please provide a state."]'
const btnSubmit = 'button#submitButton'
const searchBar = 'input#mat-input-0'
const btnCookieMessage = 'a[aria-label="dismiss cookie message"]'
const btnBackToHomePage = 'button[aria-label="Back to homepage"]'
const searchIcon = '//mat-icon[text()=" search "]'

/**
      * addItemToCart add items to the cart based on itemName and totalItems    
      * @param itemName     
      * @param totalItems   
   */
Cypress.Commands.add("addItemToCart", (itemName, totalItems) => {
  const btnAddBasket =`//div[text()=" ${itemName} "]/parent::div/parent::div/following-sibling::div /button`
  const txtVerifyItem =`//mat-cell[text()=" ${itemName} "]`
  const txtverifyTotalItems =`//span[text()=" ${totalItems}"]`
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalItems; i++) {
    cy.xpath(btnAddBasket).should('be.visible')
    .click()
    cy.wait(2000)
  }
   cy.xpath(btnShoppingCart)
    .click()
    cy.wait(2000)
    cy.reload()
   cy.xpath(txtVerifyItem).should('be.visible')
   cy.xpath(txtverifyTotalItems).should('be.visible')

});


// clickCheckout clicks on the checkout button    
Cypress.Commands.add("clickCheckout", () => {
  cy.get(btnCheckout).should('be.visible')
    .click()

});

// deleteExistingItem function delete all the items from the cart  
Cypress.Commands.add("deleteExistingItem", () => {
  cy.xpath(btnShoppingCart).click()
  cy.wait(3000)
  cy.get("body").then($body => {
    if ($body.find('svg[data-icon="trash-alt"]').length > 0) {  
      cy.get('svg[data-icon="trash-alt"]').click();
    }
  cy.get(btnBackToHomePage).click()
});
});

/**
      * addNewAddress adds a new address with respective parameter  
      * @param country     
      * @param name
      * @param mNuber
      * @param zipCode     
   */
Cypress.Commands.add("addNewAddress", (country, name, mNuber, zipCode
  , address, city, state) => {
    cy.get(btnCookieMessage).click()
  cy.get(btnAddNewAddress).should('be.visible')
    .click()
  cy.get(txtCountry).should('be.visible')
    .type(country)
  cy.get(txtName).should('be.visible')
    .type(name)
  cy.get(txtmobileNo).should('be.visible')
    .type(mNuber)
  cy.get(txtZipCode).should('be.visible')
    .type(zipCode)
  cy.get(txtAddress).should('be.visible')
    .type(address)
  cy.get(txtCity).should('be.visible')
    .type(city)
  cy.get(txtState).scrollIntoView().should('be.visible')
    .type(state)
  cy.get(btnSubmit).should('be.enabled')
    .click()
});

/**
      * searchAndVerifyProduct searches for a product from searchbar and verfies that
      * banana does not exist
      * @param productName         
   */
Cypress.Commands.add("searchAndVerifyProduct", (productName) => {
  cy.xpath(searchIcon).should('be.visible').click()
    cy.get(searchBar).should('be.visible')
      .type(productName)
      .type('{enter}')
    cy.contains('Banana').should('not.exist')
  });