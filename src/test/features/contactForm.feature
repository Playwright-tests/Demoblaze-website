Feature: The "New message" form

  Background:
    Given the New message form is open

  @ContactForm @Fields @Inputs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Verification of the input of the Contact Email field
    Verification of whether the "Contact" field is filled with text as expected

    When a user enters the <email> into the Contact Email field
    Then the Contact Email field should be filled with the <email>

    Examples:
      | email            |
      | "ars@gmail.com"  |
      | "ppa@domain.com" |

  @ContactForm @Fields @Inputs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Verification of the input of the Contact Name field
    Verification of whether the "Contact Name" field is filled with text as expected

    When a user enters the <name> into the Contact Name field
    Then the Contact Name field should be filled with the <name>

    Examples:
      | name     |
      | "John"   |
      | "Andrew" |
      | "Anne"   |

  @ContactForm @Fields @Inputs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Verification of the input of the Message text area
    Verification of whether the "Message" text area is filled with text as expected

    When a user enters the <message> into the Message text area
    Then the Message text area should be filled with the <message>

    Examples:
      | message                     |
      | "This message will be send" |
      | "Hello text area!!!"        |

  @ContactForm @Fields @Dialogs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Sending message using correct data
    Verification of whether the message is sent when <scenario>

    When a user enters the <email> into the Contact Email field
    And a user enters the <name> into the Contact Name field
    And a user enters the <message> into the Message text area
    And a user clicks the "Send message" button
    Then the dialog message should be <dialogMessage>

    Examples:
      | scenario                         | email             | name   | message  | dialogMessage                |
      | "data is correct"                | "john@domain.com" | "John" | "Hello!" | "Thanks for the message!!"   |
      | "email has an incorrect format"  | "example.com"     | "John" | "Hello!" | "Please enter a valid email" |
      | "email field is blank"           | ""                | "John" | "Hello!" | "Please fill out email"      |
      | "the message text area is blank" | "john@domain.com" | "John" | ""       | "Please fill out message"    |
