import { Locator, Page } from "@playwright/test";
import { ModalDialog } from "./ModalDialog";

export class ContactForm extends ModalDialog {

    private readonly emailField: Locator;
    private readonly contactNameField: Locator;
    private readonly messageTextArea: Locator;
    private readonly sendMessageButton: Locator;

    constructor(page: Page) {

        super(page, 'New message');

        this.emailField = page.locator('#recipient-email');
        this.contactNameField = page.locator('#recipient-name');
        this.messageTextArea = page.locator('#message-text');
        this.sendMessageButton = page.getByRole('button', {name: 'Send message'});
    }

    async setEmail(email: string): Promise<void> {

        await this.emailField.fill(email);
    }

    async setContactName(contactName: string): Promise<void> {

        await this.contactNameField.fill(contactName);
    }

    async setMessage(message: string): Promise<void> {

        await this.messageTextArea.fill(message);
    }

    async clickSendMessageButton(): Promise<void> {

        await this.sendMessageButton.click();
    }

    async getEmail(): Promise<string | null> {

        return await this.emailField.inputValue();
    }

    async getContactName(): Promise<string | null> {

        return await this.contactNameField.inputValue();
    }

    async getMessage(): Promise<string | null> {

        return await this.messageTextArea.inputValue();
    }
}