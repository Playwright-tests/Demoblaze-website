import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { MainMenu } from "../../../page-object/MainMenu";
import { URL } from "../../../enums/enums";
import { ModalDialog } from "../../../page-object/ModalDialog";
import { initializePage } from "../../../config/browserUtils";

let page: Page;
let mainMenu: MainMenu;

setDefaultTimeout(30 * 60 * 1000);

Before({timeout: 60 * 1000},async () => {
    
    page = await initializePage();
    mainMenu = new MainMenu(page);
})

After(async () => {
    
    await page.close();
})

Given('the home page is open',{timeout: 60 * 1000},async () => {
    
    await page.goto(URL.HOME_PAGE); 
})

When('a user clicks the "{string}" link', async function (link) {
    
    await mainMenu.clickLink(link);
})

Then('the "{string}" page should be opened',{timeout: 60 * 1000},async (url) => {
    
    await expect(mainMenu.getPage()).toHaveURL(url);
})

Then('the "{string}" form should be displayed',async function (headerText) {
  
    const modaDialog = new ModalDialog(mainMenu.getPage(), headerText);
    await expect(modaDialog.getBodyLocator()).toBeVisible({timeout: 3000});
})