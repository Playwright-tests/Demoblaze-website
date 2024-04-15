import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { BrowserContext, Page, PlaywrightTestOptions } from "@playwright/test";
import * as messages from "@cucumber/messages";
import { MainMenu } from "../../../page-object/MainMenu";
import { LoginForm } from "../../../page-object/LoginForm";
import { ContactForm } from "../../../page-object/ContactForm";
import { ShoppingCart } from "../../../page-object/ShoppingCart";
import { ProductPage } from "../../../page-object/productPage";
import { ProductData } from "./types";

export interface ICustomWorld extends World {

    debug: boolean
    feature?: messages.Pickle
    context?: BrowserContext
    page?: Page
    pageUrl?: string
    testName?: string
    startTime?: Date
    playwrightOptions?: PlaywrightTestOptions

    mainMenu?: MainMenu
    loginForm?: LoginForm
    contactForm?: ContactForm
    productPage?: ProductPage
    shoppingCart?: ShoppingCart

    message?: string
    productData?: ProductData

    setMessage(given: string): void
    getMessage(): string
}

export class CustomWorld extends World implements ICustomWorld {

    constructor(options: IWorldOptions) {

        super(options);
    }

    mainMenu?: MainMenu;
    loginForm?: LoginForm;
    contactForm?: ContactForm;
    productPage?: ProductPage;
    shoppingCart?: ShoppingCart;

    message?: string;
    productData?: ProductData;

    setMessage(given: string): void {
        this.message! = given;
    }

    getMessage(): string {
        return this.message!;
    }

    debug = false
}

setWorldConstructor(CustomWorld);


