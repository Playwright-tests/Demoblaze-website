import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/customWorld";

setDefaultTimeout(30 * 60 * 1000);
let expectedMaskedPassword: string = '';

Given('the Login form is open',{timeout: 30 * 60 * 1000},async function (this: ICustomWorld) {

    await this.page!.goto(this.parameters.baseURL);
    await this.mainMenu?.clickLink('Log in');
});

When('a user enters the "{string}" into the Username field',async function (this: ICustomWorld, username) {
    
    await this.loginForm?.setUsername(username);
});

When('a user enters the "{string}" into the Password field',async function (this: ICustomWorld, password) {
    
    expectedMaskedPassword = '*'.repeat(password.length);
    await this.loginForm?.setPassword(password);
});

When('clicks the "Close" button',async function (this: ICustomWorld) {
    
    await this.loginForm?.clickCloseButton();
})

When('clicks the "Log in" button',async function (this: ICustomWorld) {
    
    await this.loginForm?.clickLoginButton();
})

Then('the Username field should be filled with the "{string}"', async function (this: ICustomWorld, username) {
    
    expect(await this.loginForm!.getUsername()).toEqual(username);
});

Then('the Password field should be filled with password',async function (this: ICustomWorld) {
    
    expect(await this.loginForm?.getPassword()).not.toEqual('');
})

Then('the password should be encrypted and contains * characters equal to the length of the original password',async function (this: ICustomWorld) {
        
    expect(await this.loginForm!.getPassword()).toEqual(expectedMaskedPassword);
})

Then('the Login form should be closed',async function (this: ICustomWorld) {
    
    await expect(this.loginForm!.getLoginButtonLocator()).not.toBeVisible();
})

Then('the name of user link on the main menu should be visible',async function () {
    
    await expect(this.mainMenu!.getNameOfUserLinkLocator()).toBeVisible();
})

Then('the name of user link text should be "{string}"',async function (this: ICustomWorld, link) {
    
    await expect(this.mainMenu!.getNameOfUserLinkLocator()).toHaveText(link);
})

Then('the Login form should be still opened',async function (this: ICustomWorld) {
    
    await expect(this.loginForm!.getLoginButtonLocator()).toBeVisible();
})