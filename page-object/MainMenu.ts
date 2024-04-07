import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    async clickLink(linkName: string): Promise<void> {

        await this.getPage().getByRole('link', {name: linkName}).click();
    }
}