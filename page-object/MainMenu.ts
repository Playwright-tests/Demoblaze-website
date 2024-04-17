import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainMenu extends BasePage {

    private readonly nameOfUserSelector: string;
    private readonly nameOfUserLink: Locator;

    constructor(page: Page) {

        super(page);

        this.nameOfUserSelector = '#nameofuser';
        this.nameOfUserLink = page.locator(this.nameOfUserSelector);
    }

    async clickLink(linkName: string): Promise<void> {

        await this.getPage().getByRole('link', {name: linkName}).click();
    }

    async clickExactLink(linkName: string): Promise<void> {

        await this.getPage().getByRole('link', {name: linkName, exact: true}).click();
    }

    getLinkLocator(linkName: string): Locator {

        return this.getPage().getByRole('link', {name: linkName});
    }

    getNameOfUserSelector(): string {

        return this.nameOfUserSelector;
    }

    getNameOfUserLinkLocator(): Locator {

        return this.nameOfUserLink;
    }
}