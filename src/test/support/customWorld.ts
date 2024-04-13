import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { BrowserContext, Page, PlaywrightTestOptions } from "@playwright/test";
import * as messages from "@cucumber/messages";
import { MainMenu } from "../../../page-object/MainMenu";
import { LoginForm } from "../../../page-object/LoginForm";
import { ModalDialog } from "../../../page-object/ModalDialog";

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
    modalDialog?: ModalDialog
    loginForm?: LoginForm
}

export class CustomWorld extends World implements ICustomWorld {

    constructor(options: IWorldOptions) {

        super(options);
    }

    mainMenu?: MainMenu;
    loginForm?: LoginForm;

    debug = false
}

setWorldConstructor(CustomWorld);


