import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { userLogin } from '../../store/actions';
import Nav from '../nav';
import LoginPage from './login.page';

interface ILogin {
  email: string;
  password: string;
}

interface IDispatchFromProps {
  loginActionDispatch: (payload: ILogin) => void;
}

interface ILoginProps extends IDispatchFromProps {} // EXTENDS APP PROPS WITH REDUX ACTIONS

interface ILoginStates {
  email: string,
  password: string
}

class Login extends Component<ILoginProps, ILoginStates | any> {
  public state = {
    email: '',
    password: '',
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
        console.log(
          'Login Form is valid! ',
          this.state.email,
          this.state.password,
        );
        this.props.loginActionDispatch({
          email: this.state.email,
          password: this.state.password,
        }); // DISPATCH ACTION METHOD WITH PAYLOAD SO TO UPDATE IN STORE.
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

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  loginActionDispatch: (payload: ILogin) => dispatch(userLogin(payload)), // THIS FUNCTION WILL BE AVAILABLE IN PROPS
});

export default connect<null, IDispatchFromProps, void>(
  null,
  mapDispatchToProps,
)(Login);
