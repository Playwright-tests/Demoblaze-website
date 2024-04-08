Feature: The "New message" form

Scenario Outline: Verification of the input of the Contact Email field
    Given the New message form is open
    When a user enters the "<email>" into the Contact Email field
    Then the Contact form should be filled with the "<email>"

    Examples:
    |email|
    |"ars@gmail.com"|
    |"ppa@domain.com"|