import { After, Before, Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { MainMenu } from "../../../page-object/MainMenu";
import { initializePage } from "../../../config/browserUtils";
import { LoginForm } from "../../../page-object/LoginForm";
import { navigateMainMenu } from "../../../support/navigateMainMenu";

let page: Page;
let loginForm: LoginForm;
let expectedMaskedPassword: string;

setDefaultTimeout(30 * 60 * 1000);

Before(async () => {
    
    page = await initializePage();
    loginForm = new LoginForm(page);
})

After(async () => {
    
    await page.close();
})

Given('the Login form is open',{timeout: 30 * 60 * 1000},async function () {
    
    await navigateMainMenu(page, 'Log in')
});

When('a user enters the "{string}" into the Username field',async function (username) {
    
    await loginForm.setUsername(username);
});

When('a user enters the "{string}" into the Password field',async function (password) {
    
    expectedMaskedPassword = '*'.repeat(password.length);
    await loginForm.setPassword(password);
});

When('clicks the "Close" button',async () => {
    
    await loginForm.clickCloseButton();
})

When('clicks the "Log in" button',async () => {

    await loginForm.clickLoginButton();
})

Then('the Username field should be filled with the "{string}"', async function (username) {
    
    expect(await loginForm.getUsername()).toEqual(username);
});

Then('the Password field should be filled with password',async () => {

    expect(await loginForm.getPassword()).not.toEqual('');
})

Then('the password should be encrypted and contains * characters equal to the length of the original password',async () => {
    
    expect(await loginForm.getPassword()).toEqual(expectedMaskedPassword);
})

Then('the Login form should be closed',async () => {
    
    await expect(loginForm.getLoginButtonLocator()).not.toBeVisible();
})

Then('the name of user link on the main menu should be visible',async () => {
    
    const mainMenu = new MainMenu(page);
    await expect(mainMenu.getNameOfUserLinkLocator()).toBeVisible();
})

Then('the name of user link text should be "{string}"',async (link) => {
    
    const mainMenu = new MainMenu(page);
    await expect(mainMenu.getNameOfUserLinkLocator()).toHaveText(link);
})

Then('the Login form should be still opened',async () => {
    
    await expect(loginForm.getLoginButtonLocator()).toBeVisible();
})