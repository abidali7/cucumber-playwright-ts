import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test"
import * as env from "../env/env";
import * as browserCloud from "../../../configs/browserCloud.json"
import * as cp from "child_process"


const launchOptions: LaunchOptions = {
    headless: true,
    slowMo: 100
};

export const initialiseBrowser = () => {
    env.getEnvVars();
    let type = process.env.npm_config_BROWSER || process.env.BROWSER;

    if (type.includes("browserCloud")) { // browserCloud option is currently not possible 
        const caps = {
            'browserstack.username': browserCloud.bcUser || process.env.BROWSERSTACK_USERNAME,
            'browserstack.accessKey': browserCloud.bcKey || process.env.BROWSERSTACK_ACCESS_KEY,
            project: browserCloud.caps.project || 'My First Project',
            build: browserCloud.caps.build || 'playwright-build-1',
            name: browserCloud.caps.name || 'My first playwright test',
            buildTag: browserCloud.caps.buildTag || process.env.npm_config_TAGS,
            'client.playwrightVersion': cp.execSync('npx playwright --version').toString().trim().split(' ')[1]
        };

        Object.assign(caps, browserCloud.extendedCaps, browserCloud.platforms[process.env.npm_config_BROWSER_CLOUD]);
        return chromium.connect({
            wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
        });

    } else {
        switch (type) {
            case ("chrome"):
                return chromium.launch(launchOptions);

            case ("firefox"):
                return firefox.launch(launchOptions);

            case ("webkit"):
                return webkit.launch(launchOptions);

            default:
                throw new Error("Please use actual browser")

        }
    }
};