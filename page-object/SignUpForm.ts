import { Page } from "@playwright/test";
import { ModalDialog } from "./ModalDialog";

export class SignUpForm extends ModalDialog {

    constructor(page: Page) {

        super(page, 'Sign up');
    }
}