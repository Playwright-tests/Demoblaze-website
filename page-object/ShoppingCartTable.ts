import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ShoppingCartTable extends BasePage {

    private readonly bodySelector: string;
    private readonly body: Locator;
    private rows: Locator[];

    constructor(page: Page) {

        super(page);

        this.bodySelector = 'tbody';
        this.body = page.locator(this.bodySelector);
        this.rows = [];
    }

    getBodySelector(): string {

        return this.bodySelector;
    }

    async findRows(): Promise<void> {

        this.rows = await this.body.locator('tr').all();
    }

    async getCell(row: number, info: number): Promise<string | null | undefined> {

        return await (this.rows).at(row)?.locator('td').nth(info).textContent();
    }

    getRowsCount(): number {

        return this.rows.length;
    }

    async text() {

        return this.body.textContent();
    }
}