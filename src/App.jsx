// @ts-check
import React from 'react';
import './App.css';
import Template from './template/template';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Template>
          Hallo iedereen
        </Template>
      </div>
    );
  }
}
