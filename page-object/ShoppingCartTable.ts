import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ShoppingCartTable extends BasePage {

    private readonly bodySelector: string;
    private readonly body: Locator;
    private rows: Locator;

    constructor(page: Page) {

        super(page);

        this.bodySelector = 'tbody';
        this.body = page.locator(this.bodySelector);
        this.rows = {} as Locator;
    }

    getBodySelector(): string {

        return this.bodySelector;
    }

    findRows(): void {

        this.rows = this.body.locator('tr');//.all();
    }

    async getCell(row: number, info: number): Promise<string | null | undefined> {

        return await (this.rows).nth(row)?.locator('td').nth(info).textContent();
    }

    async clickDeleteButton(row: number) {

        await this.rows.nth(row)?.locator('td').nth(3).locator('a').click();
    }

    getRows() {

        return this.body.locator('tr');
    }

    async text() {

        return this.body.textContent();
    }
}