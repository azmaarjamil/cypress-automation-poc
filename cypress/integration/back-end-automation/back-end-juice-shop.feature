Feature: ADDING ITEMS TO THE CART FROM BACKEND
 

  
# @back-end-test
# Scenario: Add a Single Item to the Card and Verify that its Added to the Basket
    # Given I send a valid payload for signin request
    # When I Post a request to signin
    # Then The api should return response code of 200 and valid reponse data for signin
    # When I Add Item into the cart from Api
    #  | ProductId  |BasketId   | quantity |
    #  | 24         |8          | 1        |
    # Then I Verify the Total Items in Cart
    #  | quantity |
    #  | 1        |
    # Then I Delete the Item from the Basket

# @back-end-test
# Scenario: Add Two Items in the Card and Verify it after deleting one element that only one element exists after deletetion
#     Given I send a valid payload for signin request
#     When I Post a request to signin
#     Then The api should return response code of 200 and valid reponse data for signin
#     When I Add Item into the cart from Api
#      | ProductId  |BasketId   | quantity |
#      | 24         |8          | 1        |
#      | 1          |8          | 1        |
#     Then I Verify the Total Items in Cart
#      | quantity |
#      | 2        |
#      Then I Delete the Item from the Basket
#     Then I Verify the Total Items in Cart
#      | quantity |
#      | 1        |
#      Then I Delete the Item from the Basket



@back-end-test
Scenario: Add a Single Item to the Card and Verify that its Added to the Basket
    Given I Post a request to signin
    Then The api should return response code of 200 and valid reponse data for signin
    # Given I create a new user
    # Then The create userapi should return response code of 200 and valid reponse data for signin
    Then I upload a new file