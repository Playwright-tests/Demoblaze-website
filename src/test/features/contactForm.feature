Feature: The "New message" form

  Scenario Outline: Verification of the input of the Contact Email field
    Given the New message form is open
    When a user enters the "<email>" into the Contact Email field
    Then the Contact Email field should be filled with the "<email>"

    Examples: 
      | email            |
      | "ars@gmail.com"  |
      | "ppa@domain.com" |

  Scenario Outline: Verification of the input of the Contact Name field
    Given the New message form is open
    When a user enters the "<name>" into the Contact Name field
    Then the Contact Name field should be filled with the "<name>"

    Examples: 
      | name     |
      | "John"   |
      | "Andrew" |
      | "Anne"   |

  Scenario Outline: Verification of the input of the Message text area
    Given the New message form is open
    When a user enters the "<message>" into the Message text area
    Then the Message text area should be filled with the "<message>"

    Examples: 
      | message                     |
      | "This message will be send" |
      | "Hello text area!!!"        |
