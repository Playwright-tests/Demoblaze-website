import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/customWorld";

setDefaultTimeout(30 * 60 * 1000);

Given('the New message form is open',{timeout: 60 * 1000},async function (this: ICustomWorld) {
    
    await this.page!.goto(this.parameters.baseURL);
    await this.mainMenu?.clickLink('Contact');
})

When('a user enters the {string} into the Contact Email field',{timeout: 60 * 1000},async function (this: ICustomWorld, email) {
    
    await this.contactForm?.setEmail(email);
})

When('a user enters the {string} into the Contact Name field',{timeout: 60 * 1000},async function (this: ICustomWorld, name) {
    
    await this.contactForm?.setContactName(name);
})

When('a user enters the {string} into the Message text area',async function (this: ICustomWorld, message) {
    
    await this.contactForm?.setMessage(message);
})

When('a user clicks the "Send message" button',async function (this: ICustomWorld) {
    
    await this.handleDialogAndClickButton(async () => {
        await this.contactForm?.clickSendMessageButton();  
    }, true)
})

Then('the Contact Email field should be filled with the {string}',async function (this: ICustomWorld, email) {
    
    expect(await this.contactForm!.getEmail()).toEqual(email);
})

Then('the Contact Name field should be filled with the {string}',async function (this: ICustomWorld, name) {

    expect(await this.contactForm!.getContactName()).toEqual(name);
})

Then('the Message text area should be filled with the {string}',async function (this: ICustomWorld, message) {
    
    expect(await this.contactForm!.getMessage()).toEqual(message);
})