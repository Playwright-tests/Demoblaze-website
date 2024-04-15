import { Given, Then } from "@cucumber/cucumber";
import { ICustomWorld } from "../support/customWorld";
import { URL } from "../../../enums/enums";
import { expect } from "@playwright/test";

Given('the home page is open',{timeout: 60 * 1000},async function (this: ICustomWorld) {
    
    const { page } = this;
    await page?.goto(URL.HOME_PAGE);
})

Then('the dialog message should be {string}',async function (this: ICustomWorld, expectedMessage) {
    
    expect(this.getMessage()).toEqual(expectedMessage);
})