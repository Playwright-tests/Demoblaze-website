import { Given, Then, When } from "@cucumber/cucumber";
import { ICustomWorld } from "../support/customWorld";
import { URL } from "../../../enums/enums";
import { expect } from "@playwright/test";

Given('the home page is open',{timeout: 60 * 1000},async function (this: ICustomWorld) {
    
    await this.page!.goto(this.parameters.baseURL);
})

Given('a user is logged in',{timeout: 60 * 1000},async function (this: ICustomWorld) {
    
    await this.page!.goto(this.parameters.baseURL);
    await this.mainMenu?.clickLink('Log in'),
    await this.loginForm?.setUsername('username');
    await this.loginForm?.setPassword('password');
    await this.loginForm?.clickLoginButton();
})

When('user clicks the logo',async function (this: ICustomWorld) {
    
    await this.page!.locator('#nava').click();
})

Then('the dialog message should be {string}',async function (this: ICustomWorld, expectedMessage) {
    
    expect(this.getMessage()).toEqual(expectedMessage);
})