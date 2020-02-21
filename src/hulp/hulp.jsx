import React from "react";
import Template from "../template/template";

export default class Hulp extends React.Component {
    /**
     * Deze pagina geeft extra uitleg over hoe je de website moet gebruiken
     */
    render() {
        return (
            <Template titel="Hulp" geselecteerd="Hulp">
                <h2>Help</h2>
                <p>[Uitleg over hoe de site te gebruiken]</p>
            </Template>
        );
    }
}