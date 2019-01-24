import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home';
import Login from './login';
import Nav from './nav';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
        </Switch>

      </div>
    );
  }
}

export default App;
