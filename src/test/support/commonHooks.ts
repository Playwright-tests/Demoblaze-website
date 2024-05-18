import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { ICustomWorld } from "./customWorld";
import { chromium, ChromiumBrowser, firefox, FirefoxBrowser, webkit, WebKitBrowser } from "@playwright/test";
import { browserConfig, browserOptions } from "./config";
import { MainMenu } from "../../../page-object/MainMenu";
import { LoginForm } from "../../../page-object/LoginForm";
import { ContactForm } from "../../../page-object/ContactForm";
import { ShoppingCart } from "../../../page-object/ShoppingCart";
import { ProductPage } from "../../../page-object/ProductPage";
import { PlaceOrderForm } from "../../../page-object/PlaceOrderForm";

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;

declare global {

    var browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
}

BeforeAll(async function () {
    
    switch(browserConfig.browser) {
        case 'CHROMIUM': browser = await chromium.launch(browserOptions); break;
        case 'FIREFOX': browser = await firefox.launch(browserOptions); break;
        case 'WEBKIT': browser = await webkit.launch(browserOptions); break;
    }
})

AfterAll(async function () {
    
    await browser.close();
})

Before(async function (this: ICustomWorld) {
    
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.debug = true;

    this.mainMenu = new MainMenu(this.page!);
    this.loginForm = new LoginForm(this.page!);
    this.contactForm = new ContactForm(this.page!);
    this.productPage = new ProductPage(this.page!);
    this.shoppingCart = new ShoppingCart(this.page!);
    this.placeOrderForm = new PlaceOrderForm(this.page!);
})

After(async function (this: ICustomWorld) {

    await this.page?.close();
    await this.context?.close();
})