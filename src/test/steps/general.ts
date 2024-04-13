import { Given } from "@cucumber/cucumber";
import { ICustomWorld } from "../support/customWorld";
import { URL } from "../../../enums/enums";

Given('the home page is open',{timeout: 60 * 1000},async function (this: ICustomWorld) {
    
    const { page } = this;
    await page?.goto(URL.HOME_PAGE);
})