import { store } from "./server/redux";

export default class Gebeurtenissen {
    constructor() {
        this.nieuweGebeurtenis = this.nieuweGebeurtenis.bind(this);

        store.subscribe(this.nieuweGebeurtenis);
    }

    nieuweGebeurtenis() {
        const status = store.getState();

        if (status.alert === true) {
            alert(status.messages[0].msg);
        }
    }
}