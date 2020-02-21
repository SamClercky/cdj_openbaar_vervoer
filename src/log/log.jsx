import React from "react";
import Template from "../template/template";
import { store } from "../server/redux";
import "./log.css";

export default class Log extends React.Component {

    constructor() {
        super();

        

        this.wisselBerichtenOm = this.wisselBerichtenOm.bind(this);
    }

    /**
     * Deze methode wordt aangeroepen net na constructor, maar is meer aangeraden
     * als je naar gebeurtenissen wil luisteren
     */
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                msg: store.getState().messages,
                berichten: store.getState().alert
            })
        })
    }

    /**
     * Als we weggaan van de log-pagina, moeten we ook zeggen dat we geen
     * gebeurtenissen meer willen ontvangen, anders kan onze computer
     * crashen
     */
    componentWillUnmount() {
        this.unsubscribe();
    }

    /**
     * Zeg tegen alles en iedereen dat we wel/niet meer berichten willen ontvangen
     */
    wisselBerichtenOm() {
        store.dispatch({ type: "TOGGLE_ALERT" });
    }

    render() {
        

        return (
            
        );
    }
}