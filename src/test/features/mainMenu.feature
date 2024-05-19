Feature: Main menu links

  @MainMenu, @Links, @epic:E2E @owner:Axi, @severity:critical
  Scenario Outline: Clicking the link triggers redirection to the desired page
    Description The test aims to check the correct operation of the "<link>" hyperlink
    Given the home page is open
    When a user clicks the <link> link
    Then the <url> page should be opened

    Examples: 
      | opened                                 | link   | url                                    |
      | "https://www.demoblaze.com/cart.html"  | "Home" | "https://www.demoblaze.com/index.html" |
      | "https://www.demoblaze.com/index.html" | "Cart" | "https://www.demoblaze.com/cart.html"  |

  @MainMenu, @Links, @epic:E2E @owner:Axi, @severity:critical
  Scenario Outline: Displaying a specific form after clicking a link in the main menu
    Description The test aims to check the correct operation of the "<link>" hyperlink
    Given the home page is open
    When a user clicks the <link> link
    Then the <headerName> form should be displayed

    Examples: 
      | link       | headerName    |
      | "Contact"  | "New message" |
      | "About us" | "About us"    |
      | "Log in"   | "Log in"      |
      | "Sign up"  | "Sign up"     |
