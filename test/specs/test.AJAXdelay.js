import AJAXdelayPage from "../pageobjects/AJAXdelay.page.js";

describe('waiting for a title to load after an AJAX request', () => {

    before(() => {
        AJAXdelayPage.open();
    });

    it('should click on a button and wait for the title to load', async () => {
        
        await AJAXdelayPage.requestButton.click();

        await browser.waitUntil(
            async function () {
                return (await AJAXdelayPage.succesTitle.isDisplayed()) === true;
            }, {timeout: 20000}
        );

        await AJAXdelayPage.succesTitle.click();

        await expect(AJAXdelayPage.succesTitle).toBeDisplayed();
    });
});