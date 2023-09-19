import { BeforeAll, Before, After, AfterAll, Status } from "@cucumber/cucumber"
import { Browser, BrowserContext } from "@playwright/test"
import { base } from "../helpers/basePage";
import { initialiseBrowser } from "../helpers/browsers/browserController";
import { createLogger } from "winston";
import { options } from "../helpers/util/logger";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
    browser = await initialiseBrowser();
    context = await browser.newContext();
    const page = await context.newPage();
    base.page = page;
});

Before(async ({ pickle }) => {
    base.logger = createLogger(options(pickle.name));
});

After(async function ({ pickle, result }) {
    if (result?.status == Status.FAILED) { // attached screenshot for failed tests
        const img = await base.page.screenshot({ path: `./reports/screenshots/${pickle.name}.png`, type: "png" });
        this.attach(img, "image/png");
    }

    context.clearCookies();
});


AfterAll(async () => {
    await base.page.close(); // close current tab
    await context.close(); // close all remaining tabs

    await browser.close(); // shutdown browser
    base.logger.close(); // close logger
});