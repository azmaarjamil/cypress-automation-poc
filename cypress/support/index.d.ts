/* eslint-disable no-unused-vars */
/// <reference types="cypress" />
declare namespace Cypress {


    interface FillOptions {
      overwrite ? : boolean
      prepend ? : boolean
    }
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable < Subject > {
      /* Commands */
  
      loginIntoApplication(emailAddress,password):Cypress.Chainable<void>;
      addItemToCart(itemName,totalItems):Cypress.Chainable<void>;
      clickCheckout():Cypress.Chainable<void>;
      addNewAddress(country, name, mNuber, zipCode, address, city, state):Cypress.Chainable<void>;
      searchAndVerifyProduct(productName):Cypress.Chainable<void>;
      writeDataInFile(path, nameof, value): Cypress.Chainable < void > ;
      deleteExistingItem():Cypress.Chainable<void>;
      getLengthofSearch(response):Cypress.Chainable<void>;
      deleteItems():Cypress.Chainable<void>
      addForm(): Cypress.Chainable<void>
      uploadAFile():Cypress.Chainable<void>
  
    } 
  
  }

  