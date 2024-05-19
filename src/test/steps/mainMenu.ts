import { ICustomWorld } from "../support/customWorld";
import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

setDefaultTimeout(30 * 60 * 1000);

When('a user clicks the {string} link', async function (this: ICustomWorld, link) {
  
    await this.mainMenu?.clickLink(link);
})

Then('the {string} page should be opened',{timeout: 60 * 1000},async function (this: ICustomWorld, url) {
    
    await expect(this.page!).toHaveURL(url);
})