import { Given, Then, When } from "@cucumber/cucumber"
import * as assert from "../helpers/wrapper/assert"
import * as wrap from "../helpers/wrapper/wrapper"

//setDefaultTimeout(60 * 1000);


Given('user is at the page {string}', async (string) => {
    await wrap.goto(string);
});

When('click on {string}', async (string) => {
    wrap.getElementByString(string);
    await wrap.click()
});

When('click on {string} for {string} by using att of {string}', async function (element, text, att) {
    wrap.getElementByString(element);
    await wrap.clickByAttribute(text, att);
});

When('enter {string} in {string}', async function (text, string) {
    wrap.getElementByString(string);
    await wrap.fill(text);
});

When('select the value as {string} from {string}', async function (value, string) {
    wrap.getElementByString(string);
    await wrap.selectByValue(value)
});

Then('assert that {string} to be visible at the page', async function (string) {
    wrap.getElementByString(string);
    await assert.assertVisible();
});

Then('assert that {string} is no more visible at the page', async function (string) {
    wrap.getElementByString(string);
    await assert.assertVisibleNot();
});

Then('assert that loaded page, contain {string} in url', async (url) => {
    await assert.assertUrl(url);
});

Then('assert that {string} activated as {string}', async function (element, text) {
    wrap.getElementByString(element);
    await assert.assertText(text);
});

Then('assert that status code is {float} for the request {string}', async function (float, string) {
    await assert.assertStatusCode(float, string);
});