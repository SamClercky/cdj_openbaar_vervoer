// @ts-check
import React from 'react';
import Header from './header';
import Footer from './footer';
import "./template.css"
import Navigatie from './navigatie';

/**
 * Props:
 * children?: any
 */
export default class Template extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };

    this.onwilsluiten = this.onwilsluiten.bind(this);
  }

  onwilsluiten() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div className="template__wrapper">
          <Header
            titel="CDJ"
            navwilopen={this.onwilsluiten}
          />
          <Navigatie
            wilsluiten={this.onwilsluiten}
            isOpen={this.state.isNavOpen}
            geselecteerd="Home"
          />
          <main>
            {this.props.children}
          </main>
          <Footer />
      </div>
    );
  }
}
