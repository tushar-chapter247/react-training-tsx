import React, { Component } from 'react'

interface IProps {
  text: string
}

interface IStates {}

class UpperCaseFirst extends Component<IProps, IStates> {

  public jsUcFirst = (val: string): string => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  public render() {
    return (
      this.jsUcFirst(this.props.text)
    );
  }
}

export default UpperCaseFirst;
