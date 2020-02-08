// @ts-check
import React from "react";
import "./navigatie.css";
import { Link } from "react-router-dom";


/**
 * Props:
 * geselecteerd: "Home" | "Kaart" | "Hulp" | "Over ons",
 * wilsluiten?: () => void,
 * isOpen?: boolean
 */
export default class Navigatie extends React.Component {
    constructor(props) {
        super(props);
        
        this.onSluit = this.onSluit.bind(this);
    }

    onSluit(evt) {
        if(this.props.wilsluiten) {
            this.props.wilsluiten();
        }
    }

    render() {
        let geselecteerd = this.props.geselecteerd;
        let isOpen = (this.props.isOpen)? this.props.isOpen : false;
        return (
            <nav data-isopen={isOpen} className="navigatie__wrapper">
                <button onClick={this.onSluit} className="navigatie__sluit">X</button>
                <ul>
                    <li className={(geselecteerd === "Home")? "select":""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={(geselecteerd === "Kaart")? "select":""}>
                        <Link to="/pages/kaart">Kaart</Link>
                    </li>
                    <li className={(geselecteerd === "Hulp")? "select":""}>
                        <Link to="/pages/hulp">Hulp</Link>
                    </li>
                    <li className={(geselecteerd === "Over ons")? "select":""}>
                        <Link to="/pages/overons">Over ons</Link>
                    </li>
                    <li className={(geselecteerd === "Log")? "select":""}>
                        <Link to="/pages/log">Log</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}