// @ts-check
import React from 'react';
import Header from './header';
import Footer from './footer';
import "./template.css"
import Navigatie from './navigatie';

/**
 * Deze klasse geeft ons een gemakkelijke manier om veel paginas te maken
 * 
 * Props:
 * children?: any,
 * titel: string,
 * geselecteerd: "Home" | "Kaart" | "Hulp" | "Over ons",
 */
export default class Template extends React.Component {

  // De constructor is de eerste functie die wordt aangeroepen als we Template
  // gaan gebruiken
  constructor(props) {
    // We moeten iedere keer props aan super() geven, anders werkt het niet
    super(props);

    // state (en) = status (nl)
    // this (en) = dit (nl) ==> Alles met 'this.' heeft HIER te maken met Template 
    

    // We moeten alle functies waar we 'this.' gebruiken
    // binden, anders werkt het niet
    this.onwilsluiten = this.onwilsluiten.bind(this);
  }

  /**
   * Deze methode wordt aangeroepen om het zijpaneel te sluiten of
   * te openen
   */
  onwilsluiten() {
    
  }

  /**
   * this.props.children ==> Kinderen van Template
   */
  render() {
    return (
      
    );
  }
}
