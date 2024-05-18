Feature: Place order form

  Background:
    Given a user is logged in
    And products are added to the shopping cart
    And the Place Order form is open

  @epic:E2E @severity:critical @owner:Paweł @inputs @field 
  Scenario Outline: Verification of the input of the Name field
    Description Verification of whether the Name field is filled with text as expected
    When a user enters the <name> into the Name field
    Then the Name field should be filled with the <name>

    Examples:
      | name      |
      | "George"  |
      | "Patrick" |

  Scenario Outline: Verification of the input of the Country field
    Description Verification of whether the Country field is filled with text as expected
    When a user enters the <country> into the Country field
    Then the Country field should be filled with the <country>

    Examples:
    |country|
    |"Japan"|
    |"Argentina"|

  Scenario Outline: Verification of the input of the City field
    Description Verification of whether the City field is filled with text as expected
    When a user enters the <city> into the City field
    Then the City field should be filled with the <city>

    Examples:
    |city|
    |"Madrid"|
    |"London"|    

  Scenario Outline: Verification of the input of the Credit card field
    Description Verification of whether the Credit card field is filled with text as expected
    When a user enters the <creditCard> into the Credit card field
    Then the Credit card field should be filled with the <creditCard>

    Examples:
    |creditCard|
    |"112223334"|
    |"555667774"|

  Scenario Outline: Verification of the input of the Month field
    Description Verification of whether the Month field is filled with text as expected
    When a user enters the <month> into the Month field
    Then the Month field should be filled with the <month>

    Examples:
    |month|
    |"05"|
    |"12"|

  @PlaceOrderForm
  Scenario Outline: Verification of the input of the Year field
    Description Verification of whether the Year field is filled with text as expected
    When a user enters the <year> into the Year field
    Then the Year field should be filled with the <year>

    Examples:
    |year|
    |"1984"|
    |"2009"|