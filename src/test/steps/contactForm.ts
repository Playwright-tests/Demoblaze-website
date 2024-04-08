import { Given, When, Then, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { ContactForm } from "../../../page-object/ContactForm";
import { initializePage } from "../../../config/browserUtils";
import { MainMenu } from "../../../page-object/MainMenu";
import { BrowserName, URL } from "../../../enums/enums";

let page: Page;
let mainMenu: MainMenu;
let contactForm: ContactForm;

BeforeAll({timeout: 60 * 1000},async () => {
    
    page = await initializePage();
    mainMenu = new MainMenu(page);
    contactForm = new ContactForm(page);
})

AfterAll(async () => {
    
    await page.close();
})

Given('the New message form is open',{timeout: 60 * 1000},async () => {
    
    await mainMenu.goto(URL.HOME_PAGE);
    await mainMenu.clickLink('Contact')
})

When('a user enters the "{string}" into the Contact Email field',{timeout: 60 * 1000},async (email) => {
    
    await contactForm.setEmail(email);
})

Then('the Contact form should be filled with the "{string}"',async (email) => {
    
    expect(await contactForm.getEmail()).toEqual(email);
})