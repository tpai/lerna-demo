import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AlertButton, ToggleButton } from 'shared-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Shared Buttons</h2>
        <AlertButton />&nbsp;
        <ToggleButton />
      </div>
    );
  }
}

export default App;
