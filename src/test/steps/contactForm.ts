import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { ContactForm } from "../../../page-object/ContactForm";
import { initializePage } from "../../../config/browserUtils";
import { MainMenu } from "../../../page-object/MainMenu";
import { URL } from "../../../enums/enums";

let page: Page;
let mainMenu: MainMenu;
let contactForm: ContactForm;

setDefaultTimeout(30 * 60 * 1000);

Before({timeout: 60 * 1000},async () => {
    
    page = await initializePage();
    mainMenu = new MainMenu(page);
    contactForm = new ContactForm(page);
})

After(async () => {
    
    await page.close();
})

Given('the New message form is open',{timeout: 60 * 1000},async () => {
    
    await mainMenu.goto(URL.HOME_PAGE);
    await mainMenu.clickLink('Contact')
})

When('a user enters the "{string}" into the Contact Email field',{timeout: 60 * 1000},async (email) => {
    
    await contactForm.setEmail(email);
})

When('a user enters the "{string}" into the Contact Name field',{timeout: 60 * 1000},async (name) => {
    
    await contactForm.setContactName(name);
})

When('a user enters the "{string}" into the Message text area',async (message) => {
    
    await contactForm.setMessage(message);
})

Then('the Contact Email field should be filled with the "{string}"',async (email) => {
    
    expect(await contactForm.getEmail()).toEqual(email);
})

Then('the Contact Name field should be filled with the "{string}"',async (name) => {
    
    expect(await contactForm.getContactName()).toEqual(name);
})

Then('the Message text area should be filled with the "{string}"',async (message) => {
    
    expect(await contactForm.getMessage()).toEqual(message);
})