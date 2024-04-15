import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage"
import { ProductData } from "../src/test/support/types";

export class ProductPage extends BasePage {

    private readonly column: Locator;
    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly addToCartLink: Locator;

    constructor(page: Page) {

        super(page);

        this.column = page.locator('#tbodyid');
        this.productName = this.column.locator('.name');
        this.productPrice = this.column.locator('.price-container');
        this.addToCartLink = page.getByRole('link', {name: 'Add to cart'});
    }

    async getProductData(): Promise<ProductData> {

        return {
            productName: await this.productName.textContent(),
            productPrice: await this.productPrice.textContent()
        }
    }

    async getProductName(): Promise<string | null> {

        return await this.productName.textContent();
    }

    async getProductPrice(): Promise<string | null> {

        return await this.productPrice.textContent();
    }

    async clickAddToCartLink(): Promise<void> {

        await this.addToCartLink.click();
    }
}