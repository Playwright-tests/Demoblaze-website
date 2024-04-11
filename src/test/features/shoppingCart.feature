Feature: Shopping cart

  Scenario Outline: Adding a product to the shopping cart
    Given the page "<url>" is open
    When user clicks the "Add to cart" link
    And opens the shopping cart page
    Then the shopping cart is not empty

    Examples: 
      | url                                           |
      | "https://www.demoblaze.com/prod.html?idp_=5#" |
