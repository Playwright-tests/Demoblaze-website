import { Given, When, Then, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Browser, expect } from "@playwright/test";
import { MainMenu } from "../../../page-object/MainMenu";
import { ModalDialog } from "../../../page-object/ModalDialog";
import { PageConfig } from "../../../config/pageConfig";

let mainMenu: MainMenu;

BeforeAll({timeout: 60 * 1000},async () => {
    
    await PageConfig.init();
    mainMenu = new MainMenu(PageConfig.getPage());
})

AfterAll(async () => {
    
    await PageConfig.close();
})

Given('The page {string} is open',{timeout: 60 * 1000},async (url) => {
    
    await mainMenu.goto(url); 
})

When('A user clicks the {string} link', async function (link) {
    
    await mainMenu.clickLink(link);
})

Then('The page {string} has been opened',{timeout: 60 * 1000},async (url) => {
    
    await expect(mainMenu.getPage()).toHaveURL(url);
})

Then('The {string} form has been displayed',async function (headerText) {
  
    const modaDialog = new ModalDialog(mainMenu.getPage(), headerText);
    await expect(modaDialog.getBodyLocator()).toBeVisible({timeout: 3000});
})