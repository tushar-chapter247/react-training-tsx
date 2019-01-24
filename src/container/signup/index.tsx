import React, { Component } from 'react'
import Nav from '../nav';
import SingupPage from './signup.page';

class Signup extends Component {
  public render () {
    return (
      <>
        <Nav />
        <SingupPage />
      </>
    )
  }
};

export default Signup;
