import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ShoppingCartTable } from "./ShoppingCartTable";

export class ShoppingCart extends BasePage {

    private readonly shoppingCartTable: ShoppingCartTable;

    constructor(page: Page) {

        super(page);
        this.shoppingCartTable = new ShoppingCartTable(page);
    }

    getShoppingCartTable(): ShoppingCartTable {

        return this.shoppingCartTable;
    }
}