import LoadDelayPage from "../pageobjects/LoadDelay.page.js";

describe('click on a button after page loading delay', () => {
    
    before(() => {
        LoadDelayPage.open();
    });

    it('click on a link, wait for the page to load and check if finish button exists', async () => {
        
        await LoadDelayPage.LdDelayLink.click();

        await browser.waitUntil(
            async function () {
                return (await browser.getUrl()) === 'http://uitestingplayground.com/loaddelay';             
            }, {timeout: 5000}
        );

        if ((await LoadDelayPage.endButton.isDisplayed()) === true) {
            await LoadDelayPage.endButton.click();
        };

        await expect(LoadDelayPage.endButton).toExist();
    
    });

    it('should check if the button is clickable', async () => {
        
        await expect(LoadDelayPage.endButton).toBeClickable();
    
    });
});