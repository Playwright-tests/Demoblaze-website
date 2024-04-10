Feature: Login form

  Background: 
    Given the Login form is open

  @inputs
  Scenario Outline: Verification of the input of the Username field
    Given the Login form is open
    When a user enters the "<username>" into the Username field
    Then the Username field should be filled with the "<username>"

    Examples: 
      | username     |
      | "username 1" |
      | "username 2" |

  @inputs
  Scenario Outline: Verification of the input of the Password field
    When a user enters the "<password>" into the Password field
    Then the Password field should be filled with password
    And the password should be encrypted and contains * characters equal to the length of the original password

    Examples: 
      | password     |
      | "password_1" |
      | "pass_2"     |

  @login
  Scenario Outline: Login to account using correct credentials
    When a user enters the ""username"" into the Username field
    And a user enters the ""password"" into the Password field
    And clicks the "Log in" button
    Then the Login form should be closed
    And the name of user link on the main menu should be visible
    And the name of user link text should be ""Welcome username""

  @login
  Scenario Outline: Login to account using an incorrect username
    When a user enters the "<username>" into the Username field
    And a user enters the "<password>" into the Password field
    And clicks the "Log in" button
    Then the Login form should be still opened

    Examples: 
      | username | password |
      | "usr_1"  | "pass_1" |
      | "usr_2"  | "pass_2" |
      | "usr_3"  | "pass_3" |
      | "usr_4"  | "pass_4" |
      | "usr_5"  | "pass_5" |

  @login
  Scenario Outline: Login to account using an incorrect password
    When a user enters the "<username>" into the Username field
    And a user enters the "<password>" into the Password field
    And clicks the "Log in" button
    Then the Login form should be still opened

    Examples: 
      | username | password |
      | "usr_1"  | "pass_1" |
      | "usr_2"  | "pass_2" |
      | "usr_3"  | "pass_3" |
      | "usr_4"  | "pass_4" |

  @login
  Scenario: Login to account missing an username
    When a user enters the ""password"" into the Password field
    And clicks the "Log in" button
    Then the Login form should be still opened

  @login
  Scenario: Login to account missing a password
    When a user enters the ""username"" into the Username field
    And clicks the "Log in" button
    Then the Login form should be still opened