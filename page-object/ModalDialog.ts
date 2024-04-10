import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ModalDialog extends BasePage {

    private readonly modalContentSelector: string;
    private readonly body: Locator;

    constructor(page: Page, headerText: string) {

        super(page);

        this.modalContentSelector = '.modal-content';
        this.body = page.locator(this.modalContentSelector).filter({hasText: headerText});
    }

    getBodyLocator(): Locator {

        return this.body;
    }

    getModalContentSelector(): string {

        return this.modalContentSelector;
    }
}