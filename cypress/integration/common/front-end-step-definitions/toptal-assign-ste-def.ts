import {
    Given
  } from "cypress-cucumber-preprocessor/steps";
  // import {praEndPoints} from "../../../fixtures/end-points/end-points"
  /// <reference types="Cypress" />
  

  function validateMultiForm(){
    cy.addForm();     

  }
  
  Given('I add the form detail in the website',validateMultiForm);