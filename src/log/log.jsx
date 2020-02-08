import React from "react";
import Template from "../template/template";

export default class Log extends React.Component {
    render() {
        return (
            <Template titel="Log" geselecteerd="Log">
                <h2>Log</h2>
                <p>[Log van alle berichten]</p>
            </Template>
        );
    }
}