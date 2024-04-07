import { Page } from "@playwright/test";
import { ModalDialog } from "./ModalDialog";

export class AboutUsForm extends ModalDialog {

    constructor(page: Page) {

        super(page, 'About us')
    }
}