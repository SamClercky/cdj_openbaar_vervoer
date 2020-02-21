// @ts-check
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home/home';
import Kaart from './kaart/kaart';
import OverOns from './overons/overons';
import Hulp from './hulp/hulp';
import Log from './log/log';
import Socket from './server/socket';
import Gebeurtenissen from './gebeurtenissen';

// eslint-disable-next-line
const s = new Socket();
// eslint-disable-next-line
const berichten = new Gebeurtenissen();

/**
 * Dit is de starter classe. Hier begint ons programma.
 * Hier vindt je alles terug over hoe je naar een nieuwe pagina kunt gaan
 */
export default class App extends React.Component {
  render() {
    return (
      
    );
  }
}
