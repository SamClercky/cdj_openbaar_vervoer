import React from "react";
import Template from "../template/template";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <Template titel="Home" geselecteerd="Home">
                <h2>Hallo iedereen</h2>
                <p>[Welkom van de website]</p>
                <h3>Snelle navigatie</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/pages/kaart">Kaart</Link>
                    </li>
                    <li>
                        <Link to="/pages/hulp">Hulp</Link>
                    </li>
                    <li>
                        <Link to="/pages/overons">Over ons</Link>
                    </li>
                    <li>
                        <Link to="/pages/log">Log</Link>
                    </li>
                </ul>
            </Template>
        );
    }
}