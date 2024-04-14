import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { BrowserContext, Page, PlaywrightTestOptions } from "@playwright/test";
import * as messages from "@cucumber/messages";
import { MainMenu } from "../../../page-object/MainMenu";
import { LoginForm } from "../../../page-object/LoginForm";
import { ModalDialog } from "../../../page-object/ModalDialog";
import { ContactForm } from "../../../page-object/ContactForm";

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
}

export class CustomWorld extends World implements ICustomWorld {

    constructor(options: IWorldOptions) {

        super(options);
    }

    mainMenu?: MainMenu;
    loginForm?: LoginForm;
    contactForm?: ContactForm;

    debug = false
}

setWorldConstructor(CustomWorld);


