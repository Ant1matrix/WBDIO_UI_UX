import Page from "./page.js";

class ClassAttrPage extends Page {

    open () {
        super.open('http://uitestingplayground.com/classattr');
    }

    get ClassAttrBtn () {
        return $('.btn-primary');
    }
}

export default new ClassAttrPage();