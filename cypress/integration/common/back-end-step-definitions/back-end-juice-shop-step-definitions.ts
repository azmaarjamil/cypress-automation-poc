/**
 * @author AZMAAR JAMIL <azmaarsheikh@yahoo.com>
 * @dated  15/06/22 
 *
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { faker } from '@faker-js/faker';

import {
  Given
  , When
  , Then
} from "cypress-cucumber-preprocessor/steps";
import {
  juiceShopEndPoints
} from "../../../fixtures/end-points/end-points"
/// <reference types="Cypress" />
// eslint-disable-next-line no-unused-vars
let signInPayload = "";
let accessToken = "";

Given("I send a valid payload for signin request", () => {

  // load payload
  cy.readFile("cypress/fixtures/payloads/sign-in.json")
    .then((payLoad) => {
      signInPayload = payLoad;
    });
});


When("I Post a request to signin", () => {
  const baseURL=Cypress.env("apiURL")
  const {signInMethod} = juiceShopEndPoints.endPoints;
  const signInurl = baseURL+signInMethod
  cy.log(`The value of URL is ${signInurl}`)
  cy.request({
      method: "POST"
      , url: signInurl
      , body: {
        "user": "galyna.alieksandrova+5@zazmic.com",
        "password": "TestAcc123!"
    }
      , headers: {
        "Content-Type": "application/json"
      }
    , })
    .then((response) => {
      cy.writeFile("cypress/fixtures/responses/sign-in.json", response)
    });
});

Then("The api should return response code of 200 and valid reponse data for signin", () => {
  cy.readFile("cypress/fixtures/responses/sign-in.json")
    .then((response) => {
      expect(response.status)
        .to.eq(201);
    });
});

When("I create a new user", () => {
  const randomEmail = faker.internet.email()
  cy.readFile("cypress/fixtures/responses/sign-in.json")
  .then((response1) => {
  
  

  const baseURL=Cypress.env("apiURL")
  const {createUser} = juiceShopEndPoints.endPoints;
  const createUserURL = baseURL+createUser
  cy.log(`The value of URL is ${createUserURL}`)
  cy.log(`the valoue of authorisation is failing ${response1.body.value}`)
  cy.request({
      method: "POST"
      , url: createUserURL
      , body: {
        "profileData": {
          "firstName": "Azmaar",
          "lastName": "Jamil",
          "user": `${randomEmail}`,
          "timeZone": {
              "zoneName": "Pacific Time",
              "name": "Pacific Time",
              "utcOffset": -8,
              "dst": "N"
          },
          "role": "ADMIN",
          "phone": {
              "countryCode": "+1",
              "areaCode": "240",
              "number": "31245544"
          },
          "activityStatus": "INVITED",
          "facilityGroup": "cloudhealth-stg"
      }
        
    }
      , headers: {
        "Content-Type": "application/json",
        "authorization":`Bearer ${response1.body.value}`,
        "authority":"backend-stage.clouds.health"
      }
      
    , })
    .then((response) => {
      cy.writeFile("cypress/fixtures/responses/createNewUser.json", response)
    });
  });
});



Then("The create userapi should return response code of 200 and valid reponse data for signin", () => {
  cy.readFile("cypress/fixtures/responses/createNewUser.json")
    .then((response) => {
      expect(response.status)
        .to.eq(200);
    });
});








// addItemIntoCart adds the items in the cart by calling the apis.
function addItemIntoCart(datatable) {
  datatable.hashes()
    .forEach((element) => {
      const urlAddBasket = Cypress.env("addBasketURL")
      cy.readFile("cypress/fixtures/responses/sign-in.json")
        .then((response) => {
          expect(response.status)
            .to.eq(200);
          accessToken = response.body.authentication.token
          cy.log(`The access token is ${accessToken}`)
        })
        .then(() => {
          cy.request({
            method: "POST"
            , url: urlAddBasket
            , body: {
              "ProductId": element.ProductId,
              "BasketId": element.BasketId,
              "quantity": element.quantity
            }
            , "failOnStatusCode": false
            , headers: {
              "Content-Type": "application/json"
              , "Authorization": `Bearer ${accessToken}`
            , }
          , })
        })
        .then((response) => {
          expect(response.status).to.eq(200)
          cy.writeFile("cypress/fixtures/responses/juice-shop.json", response)
        });
    })
}

// getTotalItemsInCart function returns the total number of item added in the cart
function getTotalItemsInCart(datatable) {
  datatable.hashes()
  .forEach((element) => {
      const getTotalItemsInCartURL = Cypress.env("getTotalItemsInCart")
      cy.readFile("cypress/fixtures/responses/sign-in.json")
        .then((response) => {
          expect(response.status)
            .to.eq(200);
          accessToken = response.body.authentication.token
          cy.log(`The access token is ${accessToken}`)
        })
        .then(() => {
          cy.request({
            method: "GET"
            , url: getTotalItemsInCartURL
            , "failOnStatusCode": false
            , headers: {
              "Content-Type": "application/json"
              ,"Authorization": `Bearer ${accessToken}`
            , }
          , })
        })
        .then((response) => {
          cy.writeFile("cypress/fixtures/responses/get-total-items-in-cart.json", response)
          expect(response.status).to.eq(200)
            // eslint-disable-next-line no-unused-expressions
          // response.status === 200 ?
           cy.getLengthofSearch(response) 
        });
        cy.readFile("cypress/fixtures/misc-data.json")
        .then((response) => {
          const {length} = response
          expect(length.toString())
            .to.eq(element.quantity);
        });
      })
}

// deleteBasketItem function deleted the items in the cart by calling pom methods 
function deleteBasketItem() {
      cy.readFile("cypress/fixtures/responses/get-total-items-in-cart.json")
       .then((responseBasket) => {
        const deleteItemBasketURL = Cypress.env("deleteBasketItem")+responseBasket.body.data.Products[0].BasketItem.id
      cy.readFile("cypress/fixtures/responses/sign-in.json")
        .then((response) => {
          accessToken = response.body.authentication.token
          cy.log(`The access token is ${accessToken}`)
        })
        .then(() => {
          cy.request({
            method: "DELETE"
            , url: deleteItemBasketURL
            , "failOnStatusCode": false
            , headers: {
              "Content-Type": "application/json"
              ,"Authorization": `Bearer ${accessToken}`
            , }
          , })
        })
        .then((response) => {
          expect(response.status).to.eq(200)

        });
      });    
}

When("I Add Item into the cart from Api", addItemIntoCart);
Then("I Verify the Total Items in Cart", getTotalItemsInCart);
When("I Delete the Item from the Basket", deleteBasketItem);