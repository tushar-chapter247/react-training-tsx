import React, { Component } from 'react';
import Nav from '../nav';
import LoginPage from './login.page';

class Login extends Component {
  private loginFormRef = React.createRef<HTMLFormElement>() || null;

  public onLoginIn = (event: Event) => {
    const node = this.loginFormRef.current;
    if (node) {
      if (node.reportValidity()) {
        event.preventDefault();
        console.log('Login Form is valid!');
      }
    }
  };

  public render() {
    return (
      <>
        <Nav />
        <LoginPage loginFormRef={this.loginFormRef} onLoginIn={this.onLoginIn} />
      </>
    );
  }
}

export default Login;
