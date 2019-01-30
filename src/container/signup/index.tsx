import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { userSignup } from '../../store/actions';
import Nav from '../nav';
import SingupPage from './signup.page';

interface IState {
  email: string;
  name: string;
  password: string;
} // Internal state for the component

interface IStateProps {
  storeData: any;
} // Props those being mapped from Store

interface IDispatchProps {
  onSignUp: (payload: any) => void;
} // Dispatchable methods (invoke our store's actions)

interface IOwnProps {} // Normal properties for the component

// combine them together
type IProps = IStateProps & IDispatchProps & IOwnProps;

class Signup extends Component<IProps, IState | any> {
  public state = {
    email: '',
    name: '',
    password: '',
  };

  private signupFormRef = React.createRef<HTMLFormElement>() || null;

  public handleInputs = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  public onSignup = (event: React.FormEvent) => {
    const node = this.signupFormRef.current;
    if (node) {
      if (node.reportValidity()) {
        event.preventDefault();
        console.log('Form is valid!');

        this.props.onSignUp({
          email: this.state.email,
          name: this.state.name,
          password: this.state.password,
        }); // DISPATCH ACTION METHOD WITH PAYLOAD SO TO UPDATE IN STORE.
      }
    }
  };

  public render() {
    return (
      <>
        <Nav />
        <SingupPage
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          signupFormRef={this.signupFormRef}
          onSignup={this.onSignup}
          handleInputs={this.handleInputs}
        />
      </>
    );
  }
}

const mapStateToProps = (states: any, ownProps: IOwnProps): IStateProps => {
  return {
    storeData: states,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>,
  ownProps: IOwnProps,
): IDispatchProps => {
  return {
    onSignUp: async (payload: any) => {
      await dispatch(userSignup(payload));
    },
  };
};

export default connect<IStateProps, IDispatchProps, IOwnProps, null>(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
