import { Locator, Page } from "@playwright/test";
import { Logger } from "winston";
import loginPage from "../pageObjects/loginPage";
import inventoryPage from "../pageObjects/inventoryPage";

export const base = {
    // @ts-ignore
    page: undefined as Page,
    logger: undefined as Logger,

    // WebElement's identifiers
    ele: undefined as Locator
}

export const object = {
    // pageObject's objects
    logInPage: new loginPage(),
    inventoryPage: new inventoryPage()
}