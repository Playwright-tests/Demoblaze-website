import { BrowserType, chromium, firefox, webkit } from "@playwright/test";
import { BrowserName } from "../enums/enums";

function getBrowser(browserName: string) {

    let browser: BrowserType<{}>;

    switch(browserName) {
        case BrowserName.CHROMIUM: browser = chromium; break;
        case BrowserName.FIREFOX: browser = firefox; break;
        case BrowserName.WEBKIT: browser = webkit; break;
        default: throw new Error('Could not find the "' + browserName + '" browser name');
    }

    return browser;
}

export async function initializePage() {

    const browserName = process.env.BROWSER || 'CHROMIUM';

    const browserType = getBrowser(browserName);
    const browser = await browserType.launch({headless: false});
    const context = await browser.newContext();
    return context.newPage();
}