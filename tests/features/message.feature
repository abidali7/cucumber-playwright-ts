@userCartJourney
Feature: user journey on shopping car

  @userCart1 @validateUser
  Scenario: Test if validation error appear upon entering the wrong credentials
    Given user is at the page ""
    And enter "standard_user" in "userName"
    And enter "secret" in "password"
    When click on "loginBtn"
    Then assert that "errorMessage" to be visible at the page

  @userCart2 @smoke
  Scenario: Test if user complete the shopping car journey
    Given user is at the page ""
    And enter "standard_user" in "userName"
    And enter "secret_sauce" in "password"
    When click on "loginBtn"
    Then assert that loaded page, contain "/inventory.html" in url
    And select the value as "Price (high to low)" from "productSortDropdown"
    Then assert that "productSortActive" activated as "Price (high to low)"
    And click on "inventoryItemImg" for "Sauce Labs Fleece Jacket" by using att of "alt"
    #Then assert that loaded page, contain "/inventory-item.html?id=5" in url
    When click on "inventoryAddToCart"
    Then assert that "inventoryAddToCart" is no more visible at the page
    Then assert that "shoppingCartLink" activated as "1"
    When click on "shoppingCartLink"
    Then assert that loaded page, contain "/cart.html" in url
    When click on "checkout"
    Then assert that loaded page, contain "/checkout-step-one.html" in url
    And enter "test 1" in "First Name:placeholder"
    And enter "test 2" in "Last Name:placeholder"
    And enter "12325" in "Zip/Postal Code:placeholder"
    When click on "Continue:button"
    Then assert that loaded page, contain "/checkout-step-two.html" in url
    Then assert that "Payment Information:text" to be visible at the page
    Then assert that "Shipping Information:text" to be visible at the page
    Then assert that "$53.99:text" to be visible at the page
    When click on "Finish:button"
    Then assert that loaded page, contain "checkout-complete.html" in url
    Then assert that "Thank you for your order!:text" to be visible at the page
    Then assert that "Back Home:button" to be visible at the page
