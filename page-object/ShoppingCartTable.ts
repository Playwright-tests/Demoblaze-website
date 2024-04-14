import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ShoppingCartTable extends BasePage {

    private readonly bodySelector: string;
    private readonly body: Locator;
    private rows: Promise<Locator[]>;

    constructor(page: Page) {

        super(page);

        this.bodySelector = 'tbody';
        this.body = page.locator(this.bodySelector);
        this.rows = Promise.resolve([]);
    }

    getBodySelector(): string {

        return this.bodySelector;
    }

    findRows(): void {

        this.rows = this.body.locator('tr').all();
    }

    async getRowsCount(): Promise<number> {

        return (await this.rows).length;
    }

    async text() {

        return this.body.textContent();
    }
}