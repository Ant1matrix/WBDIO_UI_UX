import Page from "./page.js";

class LoadDelayPage extends Page {

    open () {
        super.open('http://uitestingplayground.com/'); //opens landing page
    }

    get LdDelayLink () {
        return $('//*[@id="overview"]/div/div[1]/div[4]/h3/a');
    }

    get endButton () {
        return $('.btn.btn-primary');
    }
}

export default new LoadDelayPage();