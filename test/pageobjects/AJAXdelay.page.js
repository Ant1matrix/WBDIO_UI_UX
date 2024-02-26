import Page from "./page.js";

class AJAXdelayPage extends Page {

    open () {
        super.open('http://uitestingplayground.com/ajax');
    }

    get requestButton () {
        return $('#ajaxButton');
    }

    get succesTitle () {
        return $('#content > p');
    }
}

export default new AJAXdelayPage();