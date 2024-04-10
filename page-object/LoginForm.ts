import { Locator, Page } from "@playwright/test";
import { ModalDialog } from "./ModalDialog";

export class LoginForm extends ModalDialog {

    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly closeButton: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {

        super(page, 'Log in');

        this.usernameField = page.locator('#loginusername');
        this.passwordField = page.locator('#loginpassword');
        this.closeButton = page.getByRole('button', {name: 'Close'});
        this.loginButton = page.getByRole('button', {name: 'Log in'});
    }

    async setUsername(username: string): Promise<void> {

        await this.usernameField.fill(username);
    }

    async setPassword(password: string): Promise<void> {

        await this.passwordField.fill(password);
    }

    async getUsername(): Promise<string> {

        return await this.usernameField.inputValue();
    }

    async getPassword(): Promise<string | null> {

        return await this.passwordField.inputValue();
    }

    async clickCloseButton(): Promise<void> {

        await this.closeButton.click();
    }

    async clickLoginButton(): Promise<void> {

        await this.loginButton.click();
    }

    getLoginButtonLocator(): Locator {

        return this.loginButton;
    }
}