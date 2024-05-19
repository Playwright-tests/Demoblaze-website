import { Given, Then, When } from "@cucumber/cucumber";
import { ICustomWorld } from "../support/customWorld";
import { expect } from "@playwright/test";
import { ModalDialog } from "../../../page-object/ModalDialog";

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

Given('the Place Order form is open',async function (this: ICustomWorld) {
    
    await this.mainMenu?.clickExactLink('Cart');
    await this.page!.getByRole('button', {name: 'Place Order'}).click();
})

When('user clicks the logo',async function (this: ICustomWorld) {
    
    await this.page!.locator('#nava').click();
})

Then('the {string} form should be displayed',async function (this: ICustomWorld, headerText) {
  
    const modaDialog = new ModalDialog(this.page!, headerText);
    await expect(modaDialog.getBodyLocator()).toBeVisible({timeout: 3000});
})

Then('the dialog message should be {string}',async function (this: ICustomWorld, expectedMessage) {
    
    expect(this.getMessage()).toEqual(expectedMessage);
})