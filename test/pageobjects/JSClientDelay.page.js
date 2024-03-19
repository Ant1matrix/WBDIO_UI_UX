import Page from "./page.js";

class JSClientDelayPage extends Page {

    open () {
        super.open('http://uitestingplayground.com/clientdelay');
    }

    get TriggerBtn () {
        return $('#ajaxButton');
    }

    get SuccessTitle () {
        return $('.bg-success');
    }
}

export default new JSClientDelayPage();