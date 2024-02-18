import ClassAttrPage from "../pageobjects/ClassAttr.page.js";

describe('should select and click the correct button using class attributes', () => {
    
    before(() => {
        ClassAttrPage.open();
    });

    it('should click on a button with class attribute and click ok on alrt msg', async () => {
        
        await ClassAttrPage.ClassAttrBtn.click();

        await browser.waitUntil (
            async function () {
                return (await browser.isAlertOpen()) === true;
            }, {timeout: 3000}
        );

        const isAlrtOpen = await browser.isAlertOpen();

        if (isAlrtOpen === true) {
            await browser.acceptAlert();
        };
    });
});