import React, { Component } from 'react';
import HomePage from './home.page';

interface IState {
  counter: number;
}

// tslint:disable-next-line:no-empty-interface
interface IProps {}

class Home extends Component<IProps, IState> {
  public state = {
    counter: 1,
  };

  public render() {
    return (
      <>
        <HomePage />
      </>
    );
  }
}

export default Home;
