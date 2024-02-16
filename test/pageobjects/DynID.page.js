import Page from "./page.js";

class DynIDPage extends Page {

    open () {
        super.open('http://uitestingplayground.com/dynamicid');
    }

    get DynIDBtn () {
        return $('.btn.btn-primary');
    }
}

export default new DynIDPage();