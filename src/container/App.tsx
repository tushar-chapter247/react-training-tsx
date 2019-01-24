import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home';
import Login from './login';
import Signup from './signup';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>

      </div>
    );
  }
}

export default App;
