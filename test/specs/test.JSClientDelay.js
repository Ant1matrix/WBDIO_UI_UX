import JSClientDelayPage from "../pageobjects/JSClientDelay.page.js";

describe('Check if the title is loaded after a client side JS compilnation delay', () => {
    
    before(() => {
        JSClientDelayPage.open();
    });
    
    it('should click on a button and wait for title to load', async () => {
        
        await JSClientDelayPage.TriggerBtn.click();

        await browser.waitUntil(
            async function () {
                return (await JSClientDelayPage.SuccessTitle.isDisplayed()) === true;
            }, {timeout: 20000}
        );

        await JSClientDelayPage.SuccessTitle.click();

        await expect(JSClientDelayPage.SuccessTitle).toBeDisplayed();
    });

    it('page should have a title containing required text', async () => {
        
        await expect(JSClientDelayPage.SuccessTitle).toHaveText('Data calculated on the client side.');
    });
});