/*import { After, Before, Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";
import { initializePage } from "../../../config/browserUtils";
import { ProductPage } from "../../../page-object/productPage";
import { ProductData } from "../../../support/types";
import { ShoppingCart } from "../../../page-object/ShoppingCart";
import { navigateMainMenu } from "../../../support/navigateMainMenu";

let page: Page;
let productPage: ProductPage;
let productData: ProductData;
let shoppingCart: ShoppingCart;
let message: string = 'none';

setDefaultTimeout(30 * 60 * 1000);

Before({timeout: 60 * 1000},async () => {
    
    page = await initializePage();
    productPage = new ProductPage(page);
    shoppingCart = new ShoppingCart(page);

    
})

After(async () => {
    
    await page.close();
})

Given('user is on the "{string}" page',async (url) => {
    
    await productPage.goto(url);
})

When('user navigates to the "{string}" page',async (url) => {
    
    await productPage.goto(url);
})

When('user clicks the "Add to cart" link',async () => {
    
    page.once('dialog', async (dialog) => {
        message = dialog.message();
        await dialog.dismiss();
    });

    productData = await productPage.getProductData();
    await productPage.clickAddToCartLink();
    await page.waitForEvent('dialog');
    
})



When('opens the shopping cart page',async () => {
    
    await navigateMainMenu(page, 'Cart');
    
})

Then('the dialog message should be "{string}"',async (expectedMessage) => {
    
    expect(message).toEqual(expectedMessage);
})

Then('the shopping cart is not empty',async () => {
  
    await page.waitForSelector(shoppingCart.getShoppingCartTable().getBodySelector(),{timeout: 5000});
    shoppingCart.getShoppingCartTable().findRows();
    console.log(await shoppingCart.getShoppingCartTable().getRowsCount());
})*/