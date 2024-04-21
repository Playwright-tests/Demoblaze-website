import { Given, Then, When } from "@cucumber/cucumber";
import { ICustomWorld } from "../support/customWorld";
import { expect } from "@playwright/test";

Given('the home page is open',{timeout: 60 * 1000},async function (this: ICustomWorld) {
    
    await this.page!.goto(this.parameters.baseURL);
})

Given('a user is logged in',{timeout: 60 * 1000},async function (this: ICustomWorld) {
    
    await this.loginProcess();
})

Given('products are added to the shopping cart',async function (this: ICustomWorld) {
  
    await this.shoppingCartProcess([this.parameters.nexus6Link, this.parameters.SamsungGalaxyS6Link]);
})

Given('the shopping cart is open',async function (this: ICustomWorld) {
    
    await this.mainMenu?.clickExactLink('Cart');
})

When('user clicks the logo',async function (this: ICustomWorld) {
    
    await this.page!.locator('#nava').click();
})

Then('the dialog message should be {string}',async function (this: ICustomWorld, expectedMessage) {
    
    expect(this.getMessage()).toEqual(expectedMessage);
})