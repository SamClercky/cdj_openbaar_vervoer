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

        this.onnavwilopen = this.onnavwilopen.bind(this);
    }

    onnavwilopen(evt) {
        if(this.props.navwilopen) {
            this.props.navwilopen();
        }
    }

    render() {
        return (
            <header className="header__wrapper">
                <button
                    className="header__navopen"
                    onClick={this.onnavwilopen}
                >Open</button>
                <h1>{this.props.titel}</h1>
            </header>
        );
    }
}
