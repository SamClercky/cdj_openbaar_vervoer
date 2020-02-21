// @ts-check
import React from "react";
import "./navigatie.css";
import { Link } from "react-router-dom";


/**
 * Zorgt voor de navigatiebalk
 * De navigatiebalk is normaal altijd bovenaan het scherm
 * maar gaat naar de zijkant bij gsm's (gemakkelijker in gebruik)
 * 
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

    onSluit() {
        
    }

    /**
     * Toont de navigatiebalk en selecteerd de pagina waar we nu op zitten
     */
    render() {
        
        return (
            
        );
    }
}