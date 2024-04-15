Feature: Shopping cart

  @this
  Scenario Outline: Dialog visibility
    Given user navigates to the ""https://www.demoblaze.com/prod.html?idp_=5#"" page
    When user clicks the "Add to cart" link
    Then the dialog message should be "Product added"

    Examples: 
      | url                                           |
      | "https://www.demoblaze.com/prod.html?idp_=5#" |

  @perform
  Scenario Outline: Checking products in the shopping cart
    Given user navigates to the "<url_1>" page
    When user clicks the "Add to cart" link
    And opens the shopping cart page
    Then the shopping cart should not be empty

    Examples: 
      | url_1                                         | url_2                                        |
      | "https://www.demoblaze.com/prod.html?idp_=5#" | "https://www.demoblaze.com/prod.html?idp_=9" |
