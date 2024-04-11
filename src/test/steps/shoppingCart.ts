import { After, Before, Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { Page } from "@playwright/test";
import { initializePage } from "../../../config/browserUtils";
import { ProductPage } from "../../../page-object/productPage";
import { navigateMainMenu } from "../../../support/navigateMainMenu";
import { ProductData } from "../../../support/types";

let page: Page;
let productPage: ProductPage;
let productData: ProductData;

setDefaultTimeout(30 * 60 * 1000);

Before({timeout: 60 * 1000},async () => {
    
    page = await initializePage();
    productPage = new ProductPage(page);
})

After(async () => {
    
    await page.close();
})

Given('the page "{string}" is open',async (url) => {
    
    await productPage.goto(url);
})

When('user clicks the "Add to cart" link',async () => {
    
    productData = await productPage.getProductData();
    await productPage.clickAddToCartLink();
})

When('opens the shopping cart page',async () => {
    
    await navigateMainMenu(page, 'Cart');
})

Then('the shopping cart is not empty',async () => {
  
    console.log('NAME: ' + productData.productName);
    console.log('PRICE: ' + productData.productPrice);
})