// @ts-check
import React from 'react';
import "./header.css";

/**
 * Props
 * titel: string,
 * navwilopen: () => void
 */
export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.onnavwilopen = this.onnavzalopen.bind(this);
    }

    onnavzalopen() {
        if(this.props.navwilopen) {
            this.props.navwilopen();
        }
    }

    render() {
        return (
            <header className="header__wrapper">
                <button
                    className="header__navopen"
                    onClick={this.onnavzalopen}
                >Open</button>
                <h1>{this.props.titel}</h1>
            </header>
        );
    }
}
