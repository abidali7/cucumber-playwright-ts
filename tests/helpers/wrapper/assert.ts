import { expect } from "@playwright/test";
import { base } from "../basePage";


export const assertTitle = async (title: string) => {
    expect(await base.page.title()).toContain(title);
};

export const assertUrl = async (url: string) => {
    expect(await base.page.url()).toContain(url);
};

export const assertText = async (text: string) => {
    expect(await base.ele.textContent()).toContain(text)
};

export const assertVisible = async () => {
    await expect(base.ele).toBeVisible();
};

export const assertVisibleNot = async () => {
    await expect(base.ele).not.toBeVisible()
};

export const assertStatusCode = async (code: Number, url: string) => {
    const [response] = await Promise.all([
        base.page.waitForResponse(res => {
            return res.status() == code && res.url() == url;
        })
    ]);
    await response.finished();
};

