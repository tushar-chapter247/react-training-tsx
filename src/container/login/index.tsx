import React, { Component } from 'react';
import Nav from '../nav';
import LoginPage from './login.page';

class Login extends Component {
  public state = {
    email: '',
    password: ''
  };

  private loginFormRef = React.createRef<HTMLFormElement>() || null;

  public handleInputs = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  public onLoginIn = (event: React.FormEvent) => {
    const node = this.loginFormRef.current;
    if (node) {
      if (node.reportValidity()) {
        event.preventDefault();
        console.log('Login Form is valid! ', this.state.email, this.state.password);
      }
    }
  };

  public render() {
    return (
      <>
        <Nav />
        <LoginPage
          email={this.state.email}
          password={this.state.password}
          loginFormRef={this.loginFormRef}
          onLoginIn={this.onLoginIn}
          handleInputs={this.handleInputs}
        />
      </>
    );
  }
}

export default Login;
