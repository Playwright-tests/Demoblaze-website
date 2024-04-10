import { Page } from "@playwright/test";
import { MainMenu } from "../page-object/MainMenu";
import { URL } from "../enums/enums";

export async function navigateMainMenu(page: Page, link: string) {
    
    const mainMenu = new MainMenu(page);
    await mainMenu.goto(URL.HOME_PAGE);
    await mainMenu.clickLink(link);
}