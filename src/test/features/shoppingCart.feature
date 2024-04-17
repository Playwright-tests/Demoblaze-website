Feature: Shopping cart

  Background: 
    Given a user is logged in

  @this
  Scenario Outline: Dialog visibility
    When user navigates to the "<link>" page
    And user clicks the "Add to cart" link
    Then the dialog message should be "Product added"

    Examples: 
      | link             |
      | "Sony xperia z5" |

  @perform
  Scenario Outline: Checking products in the shopping cart
    When user navigates to the "<link_1>" product page
    And user clicks the "Add to cart" link
    And user clicks the logo
    And user navigates to the "<link_2>" product page
    And user clicks the "Add to cart" link
    And opens the shopping cart page
    Then the shopping cart should not be empty
    And the number of products in the shopping cart should be 2
    And the product data in the shopping cart should match the product data added to the cart

    Examples: 
      | link_1           | link_2             |
      | "Sony xperia z5" | "Nokia lumia 1520" |
