import { Locator } from "@playwright/test";
import { base, object } from "../basePage";


let ele: Locator;
let eleString: string;

export const getElementByString = (element: string) => {
    // search for the string of pageObject in respective files and initilise the element
    ele = null;
    [object.logInPage, object.inventoryPage].forEach((obj) => {
        if (obj.hasOwnProperty(element)) {
            eleString = obj[element];
            ele = base.page.locator(eleString);
        }
    });

    if (element.includes(":")) {
        let split = element.split(":");
        ele = split[1].includes("placeholder") ? base.page.getByPlaceholder(split[0]) : (split[1].includes("text") ? base.page.getByText(split[0]) : base.page.getByRole('button', { name: split[0] }));
    }
    base.ele = ele;
};

export const goto = async (url: string) => {
    await base.page.goto(url == "" ? process.env.BASEURL : process.env.BASEURL + url);
};

export const click = async () => {
    await ele.click();
};

export const clickByAttribute = async (text: string, att: string) => {
    const arr = await ele.all();
    for (let el of arr) {
        if (await el.getAttribute(att) == text) {
            await el.click();
            break;
        }
    }
};

export const fill = async (input: string) => {
    await ele.fill(input);
};

export const selectByValue = async (value: string) => {
    await ele.selectOption(value);
};

export const storeCookies = async () => {
    await base.page.context().storageState({ path: 'cookies.json' });
};