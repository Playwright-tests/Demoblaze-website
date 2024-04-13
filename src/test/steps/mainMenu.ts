import { ICustomWorld } from "../support/customWorld";
import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { objectTypes } from "../support/config";
import { ModalDialog } from "../../../page-object/ModalDialog";

objectTypes.object = ['MainMenu'];

setDefaultTimeout(30 * 60 * 1000);

When('a user clicks the "{string}" link', async function (this: ICustomWorld, link) {
  
    await this.mainMenu?.clickLink(link);
})

Then('the "{string}" page should be opened',{timeout: 60 * 1000},async function (this: ICustomWorld, url) {
    
    await expect(this.page!).toHaveURL(url);
})

Then('the "{string}" form should be displayed',async function (this: ICustomWorld, headerText) {
  
    const modaDialog = new ModalDialog(this.mainMenu!.getPage(), headerText);
    await expect(modaDialog.getBodyLocator()).toBeVisible({timeout: 3000});
})