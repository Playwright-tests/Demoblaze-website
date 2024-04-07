import { Browser, Page, chromium } from "@playwright/test"

export class PageConfig {

    private static browser: Browser;
    private static page: Page;

    static async init(): Promise<void> {
        
        this.browser = await chromium.launch({headless: false});
        this.page = await this.browser.newPage();
    }

    static getPage(): Page {

        return this.page;
    }

    static async close(): Promise<void> {

        await this.browser.close();
    }
}