import React from "react";
import Template from "../template/template";

export default class Kaart extends React.Component {
    /**
     * Toont een kaart met alle stations op
     * De uiteindelijke bedoeling is ook dat je op
     * de stations gaat kunnnen klikken en meer info gaat kunnen
     * zien.
     */
    render() {
        return (
            <Template titel="Kaart" geselecteerd="Kaart">
                <h2>Kaart</h2>
                <p>[Interactieve kaart komt hier]</p>
            </Template>
        );
    }
}