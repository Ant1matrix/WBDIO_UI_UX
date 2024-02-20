import Page from "./page.js";

class HiddenLayersPage extends Page {

    open () {
        super.open('http://uitestingplayground.com/hiddenlayers');
    }

    get GreenBtn () {
        return $('#greenButton');
    }

    get BlueBtn () {
        return $ ('//*[@id="blueButton"]');
    }
}

export default new HiddenLayersPage();