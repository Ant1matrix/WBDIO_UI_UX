import DynIDPage from "../pageobjects/DynID.page.js";

describe('Clicking and recodring a click of a button with dynamic ID', () => {

    before(() => {
        DynIDPage.open();
    });

    it('should click on a button and record click', async () => {
        await DynIDPage.DynIDBtn.click();
    });
});