import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/customWorld";

When('a user enters the {string} into the Name field',async function (this: ICustomWorld, name) {
    
    await this.placeOrderForm?.setName(name);
});

When('a user enters the {string} into the Country field',async function (this: ICustomWorld, country) {
    
    await this.placeOrderForm?.setCountry(country);
});

When('a user enters the {string} into the City field',async function (this: ICustomWorld, city) {
    
    await this.placeOrderForm?.setCity(city);
});

When('a user enters the {string} into the Credit card field',async function (this: ICustomWorld, creditCard) {
    
    await this.placeOrderForm?.setCreditCard(creditCard);
});

When('a user enters the {string} into the Month field',async function (this: ICustomWorld, month) {
    
    await this.placeOrderForm?.setMonth(month);
});

When('a user enters the {string} into the Year field',async function (this: ICustomWorld, year) {
    
    await this.placeOrderForm?.setYear(year);
});

Then('the Name field should be filled with the {string}', async function (this: ICustomWorld, username) {
    
    expect(await this.placeOrderForm!.getName()).toEqual(username);
});

Then('the Country field should be filled with the {string}', async function (this: ICustomWorld, country) {
    
    expect(await this.placeOrderForm!.getCountry()).toEqual(country);
})

Then('the City field should be filled with the {string}', async function (this: ICustomWorld, city) {
    
    expect(await this.placeOrderForm!.getCity()).toEqual(city);
})

Then('the Credit card field should be filled with the {string}', async function (this: ICustomWorld, creditCard) {
    
    expect(await this.placeOrderForm!.getCreditCard()).toEqual(creditCard);
})

Then('the Month field should be filled with the {string}', async function (this: ICustomWorld, month) {
    
    expect(await this.placeOrderForm!.getMonth()).toEqual(month);
})

Then('the Year field should be filled with the {string}', async function (this: ICustomWorld, year) {
    
    expect(await this.placeOrderForm!.getYear()).toEqual(year);
})
