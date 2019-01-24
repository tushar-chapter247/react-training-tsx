import React, { Component } from 'react';
import Nav from '../nav';
import LoginPage from './login.page';

class Login extends Component {
  public render() {
    return (
      <>
        <Nav />
        <LoginPage />
      </>
    );
  }
}

export default Login;
