import { store } from "./server/redux";

/**
 * Iedere keer er een gebeurtenis is, gaan we hier
 * proberen te reageren
 */
export default class Gebeurtenissen {
    constructor() {
        // Binden van alle methodes
        this.nieuweGebeurtenis = this.nieuweGebeurtenis.bind(this);

        // We vragen om te weten te komen wanneer er iets gebeurt
        store.subscribe(this.nieuweGebeurtenis);
    }

    // Als er iets gebeurt, wordt deze code uitgevoerd
    nieuweGebeurtenis() {
        // Eerst vragen we de laatste status op
        const status = store.getState();

        // We kijken of we nu wel moeten reageren
        if (status.alert === true && status.messages.length > 0) {
            // We geven het bericht aan de gebruiker
            alert(status.messages[0].msg);
        }
    }
}