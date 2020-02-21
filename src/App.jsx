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

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pages/kaart">
            <Kaart />
          </Route>
          <Route path="/pages/overons">
            <OverOns />
          </Route>
          <Route path="/pages/hulp">
            <Hulp />
          </Route>
          <Route path="/pages/log">
            <Log />
          </Route>
        </Switch>
      </Router>
    );
  }
}
