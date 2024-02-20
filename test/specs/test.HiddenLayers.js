import HiddenLayersPage from "../pageobjects/HiddenLayers.page.js";

describe('Only clicking on the first layer button', () => {
    
    before(() => {
        HiddenLayersPage.open();
    });

    it('should click on green button and expect blue button to exist', async () => {
        
        await HiddenLayersPage.GreenBtn.click();

        await expect(HiddenLayersPage.BlueBtn).toExist();
    });
    
});