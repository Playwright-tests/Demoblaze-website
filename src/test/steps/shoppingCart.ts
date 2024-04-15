import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/customWorld";
import { ProductData } from "../support/types";

setDefaultTimeout(30 * 60 * 1000);

let productData: ProductData = { productName: null, productPrice: null };

When('user navigates to the "{string}" page',async function (this: ICustomWorld, url) {
    
    await this.page!.goto(url);
})

When('user clicks the "Add to cart" link',async function (this: ICustomWorld) {
    
    this.page!.once('dialog', async (dialog) => {
        
        this.setMessage(dialog.message());
        await dialog.dismiss();
    });

    this.productData = await this.productPage!.getProductData();
    await this.productPage?.clickAddToCartLink();
    await this.page!.waitForTimeout(500);
})

When('opens the shopping cart page',async function (this: ICustomWorld) {
    
    await this.mainMenu?.clickExactLink('Cart');
})

Then('the shopping cart should not be empty',async function (this: ICustomWorld) {
    
    await this.page!.waitForSelector(this.shoppingCart!.getShoppingCartTable().getBodySelector(),{timeout: 5000});
    this.shoppingCart!.getShoppingCartTable().findRows();
    
    expect(await this.shoppingCart!.getShoppingCartTable().getRowsCount()).toBeGreaterThan(0);
})