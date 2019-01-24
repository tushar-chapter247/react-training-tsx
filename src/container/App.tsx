import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './home';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Route path="/" exact={true} component={Home} />
      </div>
    );
  }
}

export default App;
