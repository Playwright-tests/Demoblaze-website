Feature: Sending the order

  Background:
    Given a user is logged in
    And products are added to the shopping cart
    And the Place Order form is open


  Scenario: Sending the order with correct data
    When a user enters the "John" into the Name field
    And a user enters the "Finland" into the Country field
    And a user enters the "Helsink" into the City field
    And a user enters the "111222233334" into the Credit card field
    And a user enters the "10" into the Month field
    And a user enters the "2021" into the Year field
    And a user click the Purchase button
    And the message box about sent order should be opened

  
  Scenario: Sending the order missing the name
    When a user enters the "Finland" into the Country field
    And a user enters the "Helsink" into the City field
    And a user enters the "111222233334" into the Credit card field
    And a user enters the "10" into the Month field
    And a user enters the "2021" into the Year field
    And a user clicks the Purchase button when "name" is missing
    Then the dialog message should be "Please fill out Name and Creditcard."

@PlaceOrderForm
  Scenario: Sending the order missing the credit card number
    When a user enters the "John" into the Name field
    And a user enters the "Finland" into the Country field
    And a user enters the "Helsinki" into the City field
    And a user enters the "10" into the Month field
    And a user enters the "2021" into the Year field
    And a user clicks the Purchase button when "credit card" is missing
    Then the dialog message should be "Please fill out Name and Creditcard."