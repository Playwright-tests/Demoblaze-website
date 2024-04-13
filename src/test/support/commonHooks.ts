import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { ICustomWorld } from "./customWorld";
import { chromium, ChromiumBrowser, firefox, FirefoxBrowser, webkit, WebKitBrowser } from "@playwright/test";
import { browserConfig, browserOptions, objectTypes } from "./config";
import { MainMenu } from "../../../page-object/MainMenu";
import { LoginForm } from "../../../page-object/LoginForm";

let browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;

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

    for(const obj of objectTypes.object) {
        switch(obj) {
            case 'MainMenu': this.mainMenu = new MainMenu(this.page!);
            case 'LoginForm': this.loginForm = new LoginForm(this.page!);
        }
    }
})

After(async function (this: ICustomWorld) {
    
    await this.page?.close();
    await this.context?.close();
})