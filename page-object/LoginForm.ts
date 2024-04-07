import { Page } from "@playwright/test";
import { ModalDialog } from "./ModalDialog";

export class LoginForm extends ModalDialog {

    constructor(page: Page) {

        super(page, 'Log in');
    }
}