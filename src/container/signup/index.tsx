import React, { Component } from 'react';
import Nav from '../nav';
import SingupPage from './signup.page';

class Signup extends Component {
  private signupFormRef = React.createRef<HTMLFormElement>() || null;

  public onSignup = (event: Event) => {
    const node = this.signupFormRef.current;
    if (node) {
      if (node.reportValidity()) {
        event.preventDefault();
        console.log('Form is valid!');
      }
    }
  };

  public render() {
    return (
      <>
        <Nav />
        <SingupPage
          signupFormRef={this.signupFormRef}
          onSignup={this.onSignup}
        />
      </>
    );
  }
}

export default Signup;
