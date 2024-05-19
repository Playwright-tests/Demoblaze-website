Feature: Sending the order

  Background:
    Given a user is logged in
    And products are added to the shopping cart
    And the Place Order form is open

  @PlaceOrderForm, @Fields, @epic:E2E @owner:Axi, @severity:critical
  Scenario: Sending the order with correct data
  Description Verification of whether an order is sent when data is correct

    When a user enters the "John" into the Name field
    And a user enters the "Finland" into the Country field
    And a user enters the "Helsink" into the City field
    And a user enters the "111222233334" into the Credit card field
    And a user enters the "10" into the Month field
    And a user enters the "2021" into the Year field
    And a user click the Purchase button
    Then the message box about sent order should be opened

  @PlaceOrderForm, @Fields, @epic:E2E @owner:Axi, @severity:normal
  Scenario: Sending the order missing the name
  Description Verification of whether an order is sent when a name is missing

    When a user enters the "Finland" into the Country field
    And a user enters the "Helsink" into the City field
    And a user enters the "111222233334" into the Credit card field
    And a user enters the "10" into the Month field
    And a user enters the "2021" into the Year field
    And a user clicks the Purchase button when "name is missing"
    Then the dialog message should be "Please fill out Name and Creditcard."

  @PlaceOrderForm, @Fields, @epic:E2E @owner:Axi, @severity:normal
  Scenario: Sending the order missing the credit card number
  Description Verification of whether an order is sent when credit card number is missing

    When a user enters the "John" into the Name field
    And a user enters the "Finland" into the Country field
    And a user enters the "Helsinki" into the City field
    And a user enters the "10" into the Month field
    And a user enters the "2021" into the Year field
    And a user clicks the Purchase button when "credit card is missing"
    Then the dialog message should be "Please fill out Name and Creditcard."

  @PlaceOrderForm, @Fields, @epic:E2E @owner:Axi, @severity:critical
  Scenario Outline: Sending the order when the <data> is incorrect
  Description Verification of whether an order is sent when <data> is incorrect

    When a user enters the <firstName> into the Name field
    And a user enters the <country> into the Country field
    And a user enters the <city> into the City field
    And a user enters the <creditCard> into the Credit card field
    And a user enters the <month> into the Month field
    And a user enters the <year> into the Year field
    And a user clicks the Purchase button when <data>
    Then the dialog message should be <errorMessage>

    Examples:
      | data          | firstName           | country           | city            | creditCard         | month  | year   | errorMessage                                |
      | "name"        | "38_Rocky6a1hUU_Yh" | "Sweden"          | "Lordelo"       | "4000004400000000" | "10"   | "2013" | "Please enter a correct name"               |
      | "country"     | "Hewett"            | "mH9~XqoV@pQiGPF" | "Lordelo"       | "4000006200000007" | "04"   | "2022" | "Please enter a correct country"            |
      | "city"        | "Hewett"            | "Sweden"          | "cF9@CX+6)fs7$" | "4000006200000007" | "04"   | "2022" | "Please enter a correct city"               |
      | "credit card" | "Hewett"            | "Sweden"          | "Lordelo"       | "jK4.QR).RQ<k"     | "04"   | "2022" | "Please enter a correct credit card number" |
      | "month"       | "Hewett"            | "Sweden"          | "Lordelo"       | "4000004400000000" | "kD6@" | "2013" | "Please enter a correct month"              |
      | "year"        | "Hewett"            | "Sweden"          | "Lordelo"       | "4000004400000000" | "02"   | "0?no" | "Please enter a correct year"               |
