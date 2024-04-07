import { Page } from "@playwright/test";
import { ModalDialog } from "./ModalDialog";

export class ContactForm extends ModalDialog {

    constructor(page: Page) {

        super(page, 'New message');
    }
}