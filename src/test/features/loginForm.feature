Feature: Login form

  Background:
    Given the Login form is open

  @LoginForm @Fields @Inputs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Verification of the input of the Username field
    Verification of whether the "Username" field is filled with text as expected

    When a user enters the <username> into the Username field
    Then the Username field should be filled with the <username>

    Examples:
      | username     |
      | "username 1" |
      | "username 2" |

  @LoginForm @Fields @Inputs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Verification of the input of the Password field
    Verification of whether the Password field is filled with text as expected

    When a user enters the <password> into the Password field
    Then the Password field should be filled with password
    And the password should be encrypted and contains * characters equal to the length of the original password

    Examples:
      | password     |
      | "password_1" |
      | "pass_2"     |

  @LoginForm @Fields @Inputs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Login to account using correct credentials
    Verification of whether a user is logged in using correct credentials

    When a user enters the "correctUsername" into the Username field
    And a user enters the "correctPassword" into the Password field
    And clicks the "Log in" button
    Then the Login form should be closed
    And the name of user link on the main menu should be visible
    And the name of user link text should be "Welcome axi"

  @LoginForm @Fields @Inputs @epic:E2E @owner:Axi @severity:critical
  Scenario Outline: Unsuccessful login to account
    Verification of whether a user is not logged in when <case>

    When a user enters the <username> into the Username field
    And a user enters the <password> into the Password field
    And clicks the "Log in" button when <case>
    Then the dialog message should be <errorMessage>
    And the Login form should be still opened

    Examples:
      | case                          | username          | password          | errorMessage                             |
      | "using an incorrect username" | "rbreslin0"       | "correctPassword" | "User does not exist."                   |
      | "using an incorrect password" | "correctUsername" | "vO6+kXuao)r!W"   | "Wrong password."                        |
      | "missing an username"         | ""                | "correctPassword" | "Please fill out Username and Password." |
      | "missing password"            | "correctUsername" | ""                | "Please fill out Username and Password." |
