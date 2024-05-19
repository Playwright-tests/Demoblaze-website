import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ICustomWorld } from "../support/customWorld";
import { SHOPPING_CART_CELL } from "../../../enums/enums";

setDefaultTimeout(30 * 60 * 1000);

When('user navigates to the {string} page',async function (this: ICustomWorld, link) {
    
    await this.page!.getByRole('link', {name: link}).click();
})

When('user clicks the "Add to cart" link',async function (this: ICustomWorld) {
    
    await this.handleDialogAndClickButton(async () => {
        await this.productPage?.clickAddToCartLink(); 
    }, true)
   
    await this.page!.waitForEvent('dialog');
    this.productData?.push(await this.productPage!.getProductData());
})

When('opens the shopping cart page',async function (this: ICustomWorld) {
    
    await this.mainMenu?.clickExactLink('Cart');
})

When('user clicks the "Place Order" button',async function (this: ICustomWorld) {
    
    await this.page!.getByRole('button', {name: 'Place Order'}).click();
})

Then('the shopping cart should not be empty',async function (this: ICustomWorld) {
    
    await this.page!.waitForSelector(this.shoppingCart!.getShoppingCartTable().getBodySelector(),{timeout: 10000});
    this.shoppingCart!.getShoppingCartTable().findRows();

    expect(await this.shoppingCart!.getShoppingCartTable().getRows().count()).toBeGreaterThan(0);
})

Then('the number of products in the shopping cart should be {int}',async function (this: ICustomWorld, total) {
    
    expect(this.shoppingCart!.getShoppingCartTable().getRows()).toHaveCount(total);
})

Then('the product data in the shopping cart should match the product data added to the cart',async function (this: ICustomWorld) {
    
    for(let i = 0; i < this.productData!.length; i++) {

        expect.soft(await this.shoppingCart?.getShoppingCartTable().getCell(i, SHOPPING_CART_CELL.NAME))
            .toEqual(this.productData![i].productName);
        expect.soft(this.productData![i].productPrice)
            .toContain(await this.shoppingCart?.getShoppingCartTable().getCell(i, SHOPPING_CART_CELL.PRICE));
    }
})
