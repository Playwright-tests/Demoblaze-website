import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PlaceOrderForm extends BasePage {

    private readonly nameField: Locator;
    private readonly countryField: Locator;
    private readonly cityField: Locator;
    private readonly creditCardField: Locator;
    private readonly monthField: Locator;
    private readonly yearField: Locator;
    private readonly closeButton: Locator;
    private readonly purchaseButton: Locator;

    constructor(page: Page) {

        super(page);

        this.nameField = page.getByLabel('Total');
        this.countryField = page.getByLabel('Country');
        this.cityField = page.getByLabel('City');
        this.creditCardField = page.getByLabel('Credit card');
        this.monthField = page.getByLabel('Month');
        this.yearField = page.getByLabel('Year');
        this.closeButton = page.getByRole('button', {name: 'Close'});
        this.purchaseButton = page.getByRole('button', {name: 'Purchase'});
    }

    async setName(name: string): Promise<void> {

        await this.nameField.fill(name);
    }

    async setCountry(country: string): Promise<void> {

        await this.countryField.fill(country);
    }

    async setCity(city: string): Promise<void> {

        await this.cityField.fill(city);
    }

    async setCreditCard(creditCard: string): Promise<void> {

        await this.creditCardField.fill(creditCard);
    }

    async setMonth(month: string): Promise<void> {

        await this.monthField.fill(month);
    }

    async setYear(year: string): Promise<void> {

        await this.yearField.fill(year);
    }

    async clickCloseButton(): Promise<void> {

        await this.closeButton.click();
    }

    async clickPurchaseButton(): Promise<void> {

        await this.purchaseButton.click();
    }

    async getName(): Promise<string> {

        return await this.nameField.inputValue();
    }

    async getCountry(): Promise<string> {

        return await this.countryField.inputValue();
    }

    async getCity(): Promise<string> {

        return await this.cityField.inputValue();
    }

    async getCreditCard(): Promise<string> {

        return await this.creditCardField.inputValue();
    }

    async getMonth(): Promise<string> {

        return await this.monthField.inputValue();
    }

    async getYear(): Promise<string> {

        return await this.yearField.inputValue();
    }
}