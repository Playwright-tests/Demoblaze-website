Feature: Main menu links

  Scenario Outline: Clicking the link triggers redirection to the desired page
    Given The page <opened> is open
    When A user clicks the <link> link
    Then The page <url> has been opened

    Examples: 
      | opened                                 | link   | url                                    |
      | "https://www.demoblaze.com/cart.html"  | "Home" | "https://www.demoblaze.com/index.html" |
      | "https://www.demoblaze.com/index.html" | "Cart" | "https://www.demoblaze.com/cart.html"  |

  Scenario: Displaying a contact form enabling the user to send a message to the owner of the online store
    Given The page "https://www.demoblaze.com/index.html" is open
    When A user clicks the <link> link
    Then The <headerName> form has been displayed

    Examples: 
      | link       | headerName    |
      | "Contact"  | "New message" |
      | "About us" | "About us"    |
      | "Log in"   | "Log in"      |
      | "Sign up"  | "Sign up"     |
