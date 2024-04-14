Feature: Shopping cart

  Scenario Outline: Dialog visibility
    Given the page "<url>" is open
    When user clicks the "Add to cart" link
    And opens the shopping cart page
    Then the dialog message should be "Product added"

    Examples: 
      | url                                           |
      | "https://www.demoblaze.com/prod.html?idp_=5#" |

@perform
Scenario Outline: Checking products in the shopping cart
Given user is on the "<url_1>" page
When user clicks the "Add to cart" link
And user navigates to the "<url_2>" page
And user clicks the "Add to cart" link
And opens the shopping cart page
Then the shopping cart is not empty

Examples:
|url_1|url_2|
|"https://www.demoblaze.com/prod.html?idp_=5#"|"https://www.demoblaze.com/prod.html?idp_=9"|

