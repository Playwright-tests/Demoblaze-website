import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SweetAlert extends BasePage {

    readonly bodySelector: string; 

    constructor(page: Page) {

        super(page);

        this.bodySelector = '.sweet-alert'
    }

    getBodySelector(): string {

        return this.bodySelector;
    }
}