import React from "react";
import Template from "../template/template";
import { store } from "../server/redux";
import "./log.css";

export default class Log extends React.Component {

    constructor() {
        super();

        this.state = {
            msg: [],
            berichten: false,
        }

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
        const berichtKnop = (this.state.berichten === true)? "Zet berichten uit" : "Ontvang berichten";

        return (
            <Template titel="Log" geselecteerd="Log">
                <h2>Log</h2>
                <button onClick={this.wisselBerichtenOm}>{berichtKnop}</button>
                <table className="log__tabel">
                    <thead>
                        <tr>
                            <th className="log__index">ID</th>
                            <th className="log__bericht">Bericht</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.msg.map((item, index) => (
                                <tr key={index}>
                                    <td className="log__index">{this.state.msg.length - index}</td>
                                    <td className="log__bericht">{item.msg}</td>
                                </tr>)
                            )
                        }
                    </tbody>
                </table>
            </Template>
        );
    }
}