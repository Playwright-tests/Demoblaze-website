Feature: Login form

  Background: 
    Given the Login form is open

  @epic:E2E @severity:critical @owner:Paweł @inputs @field @LoginForm
  Scenario Outline: Verification of the input of the Username field
    Description Verification of whether the "Username" field is filled with text as expected

    When a user enters the "<username>" into the Username field
    Then the Username field should be filled with the "<username>"

    Examples: 
      | username     |
      | "username 1" |
      | "username 2" |

  @epic:E2E @severity:critical @owner:Paweł @inputs @field @LoginForm
  Scenario Outline: Verification of the input of the Password field
    Description Verification of whether the Password field is filled with text as expected

    When a user enters the "<password>" into the Password field
    Then the Password field should be filled with password
    And the password should be encrypted and contains * characters equal to the length of the original password

    Examples: 
      | password     |
      | "password_1" |
      | "pass_2"     |

  @epic:E2E @severity:critical @owner:Paweł @inputs @fields @LoginForm
  Scenario Outline: Login to account using correct credentials
    Description Verification of whether a user is logged in using correct credentials

    When a user enters the ""username"" into the Username field
    And a user enters the ""password"" into the Password field
    And clicks the "Log in" button
    Then the Login form should be closed
    And the name of user link on the main menu should be visible
    And the name of user link text should be ""Welcome axi""

  @epic:E2E @severity:critical @owner:Paweł @inputs @fields @LoginForm
  Scenario Outline: Login to account using an incorrect username
    Description Verification of whether a user is not logged in using an incorrect username

    When a user enters the "<username>" into the Username field
    And a user enters the "<password>" into the Password field
    And clicks the "Log in" button
    Then the dialog message should be "User does not exist."
    And the Login form should be still opened

    Examples: 
      | username   | password |
      | "username" | "pass"   |

  @epic:E2E @severity:critical @owner:Paweł @inputs @fields @LoginForm
  Scenario Outline: Login to account using an incorrect password
    Description Verification of whether a user is not logged in using an incorrect password

    When a user enters the "<username>" into the Username field
    And a user enters the "<password>" into the Password field
    And clicks the "Log in" button
    Then the dialog message should be "Wrong password."
    And the Login form should be still opened

    Examples: 
      | username   | password |
      | "username" | "pass"   |

  @epic:E2E @severity:critical @owner:Paweł @inputs @fields @LoginForm
  Scenario: Login to account missing an username
    Description Verification of whether a user is not logged in when the username is missing

    When a user enters the ""password"" into the Password field
    And clicks the "Log in" button
    Then the dialog message should be "Please fill out Username and Password."
    And the Login form should be still opened

  @epic:E2E @severity:critical @owner:Paweł @inputs @fields @LoginForm
  Scenario: Login to account missing a password
    Description Verification of whether a user is not logged in when the password is missing

    When a user enters the ""username"" into the Username field
    And clicks the "Log in" button
    Then the dialog message should be "Please fill out Username and Password."
    And the Login form should be still opened
