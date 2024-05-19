import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { ICustomWorld } from "../support/customWorld";
import { expect as NHD_expect } from "../../../expect/selectorIsVisible";

setDefaultTimeout(30 * 60 * 1000);

When('a user click the Purchase button',async function (this: ICustomWorld) {
    
    await this.placeOrderForm?.clickPurchaseButton();
})

When('a user clicks the Purchase button when {string} is missing',async function (this: ICustomWorld, field: string) {
    
    this.page!.once('dialog', async (dialog) => {
        
        this.setMessage(dialog.message());
    })

    await this.placeOrderForm?.clickPurchaseButton();
})

Then('the message box about sent order should be opened',async function (this: ICustomWorld) {
    
    await NHD_expect(this.page!).selectorIsVisible(this.sweetAlert!.getBodySelector());
})