import { Page, expect as baseExpect } from "@playwright/test";

export const expect = baseExpect.extend({

    async selectorIsVisible(page: Page, selector: string) {

        const assertionName = 'Is selector visible';
        let pass: boolean;

        try {
            await page.waitForSelector(selector, {timeout: 2000});
            pass = true;
        } catch(e: any) {
            pass = false;
        }

        const message = pass ? () => `The selector "${selector}" is visible` :
                               () => `The selector "${selector}" is not visible`;
                               
        return {
            name: assertionName,
            pass,
            message
        }
    }
})