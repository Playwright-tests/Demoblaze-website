Feature: The "New message" form

  Background:
    Given the New message form is open 

  @epic:E2E
  @severity:normal
  @owner:Paweł
  @inputs @field @ContactForm
  Scenario Outline: Verification of the input of the Contact Email field
    Description Verification of whether the "Contact" field is filled with text as expected
    When a user enters the "<email>" into the Contact Email field
    Then the Contact Email field should be filled with the "<email>"

    Examples: 
      | email            |
      | "ars@gmail.com"  |
      | "ppa@domain.com" |

  @epic:E2E
  @severity:normal
  @owner:Paweł
  @inputs @field @ContactForm
  Scenario Outline: Verification of the input of the Contact Name field
    Description Verification of whether the "Contact Name" field is filled with text as expected
    When a user enters the "<name>" into the Contact Name field
    Then the Contact Name field should be filled with the "<name>"

    Examples: 
      | name     |
      | "John"   |
      | "Andrew" |
      | "Anne"   |

  @epic:E2E
  @severity:normal
  @owner:Paweł
  @inputs @textArea @ContactForm
  Scenario Outline: Verification of the input of the Message text area  
    Description Verification of whether the "Message" text area is filled with text as expected
    When a user enters the "<message>" into the Message text area
    Then the Message text area should be filled with the "<message>"

    Examples: 
      | message                     |
      | "This message will be send" |
      | "Hello text area!!!"        |
