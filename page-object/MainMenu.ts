import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainMenu extends BasePage {

    private readonly nameOfUserLink: Locator;

    constructor(page: Page) {

        super(page);

        this.nameOfUserLink = page.locator('#nameofuser');
    }

    async clickLink(linkName: string): Promise<void> {

        await this.getPage().getByRole('link', {name: linkName}).click();
    }

    getLinkLocator(linkName: string): Locator {

        return this.getPage().getByRole('link', {name: linkName});
    }

    getNameOfUserLinkLocator(): Locator {

        return this.nameOfUserLink;
    }
}