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
        
    }

    render() {
        return (
            <div></div>
        );
    }
}
