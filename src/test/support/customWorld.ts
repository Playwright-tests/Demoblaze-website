import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { BrowserContext, Page, PlaywrightTestOptions } from "@playwright/test";
import * as messages from "@cucumber/messages";
import { MainMenu } from "../../../page-object/MainMenu";
import { LoginForm } from "../../../page-object/LoginForm";
import { ContactForm } from "../../../page-object/ContactForm";
import { ShoppingCart } from "../../../page-object/ShoppingCart";
import { ProductPage } from "../../../page-object/ProductPage";
import { ProductData } from "./types";
import { credentials } from "./secret";
import { PlaceOrderForm } from "../../../page-object/PlaceOrderForm";
import { SweetAlert } from "../../../page-object/SweetAlert";

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
    placeOrderForm?: PlaceOrderForm
    sweetAlert?: SweetAlert;

    message?: string
    productData?: ProductData[]

    setMessage(given: string): void
    getMessage(): string
    loginProcess(): Promise<void>
    shoppingCartProcess(links: string[]): Promise<void>
    handleDialogAndClickButton(func: any, dimiss: boolean): Promise<void>
}

export class CustomWorld extends World implements ICustomWorld {

    constructor(options: IWorldOptions) {

        super(options);
    }

    page?: Page;
    mainMenu?: MainMenu;
    loginForm?: LoginForm;
    contactForm?: ContactForm;
    productPage?: ProductPage;
    shoppingCart?: ShoppingCart;
    placeOrderForm?: PlaceOrderForm;
    sweetAlert?: SweetAlert;

    message?: string;
    productData? = [];

    setMessage(given: string): void {
        this.message! = given;
    }

    getMessage(): string {
        return this.message!;
    }

    async loginProcess(): Promise<void> {
        
        await this.page!.goto(this.parameters.baseURL);
        await this.mainMenu?.clickLink('Log in'),
        await this.loginForm!.setCredentials(credentials);
        await this.loginForm?.clickLoginButton();
        await this.page!.waitForSelector(this.mainMenu!.getNameOfUserSelector());
    }

    async shoppingCartProcess(links: string[]): Promise<void> {

        this.page!.once('dialog',async (dialog) => {
            await dialog.dismiss();
        })

        for(const link of links) {
            
            await this.page!.getByRole('link', {name: link}).click();
            await this.productPage?.clickAddToCartLink();
            await this.page!.locator('#nava').click();
        }
    }

    async handleDialogAndClickButton(func: any, dimiss: boolean): Promise<void> {
        
        this.page!.once('dialog', async (dialog) => {
        
            this.setMessage(dialog.message());
            
            if(dimiss) {
                await dialog.dismiss();
            }
        })

        await func();
    }

    debug = false
}

setWorldConstructor(CustomWorld);


