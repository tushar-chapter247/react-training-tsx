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





// https://spin.atomicobject.com/2017/04/20/typesafe-container-components/
// https://www.valentinog.com/blog/redux/

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import uuid from 'uuid';
// import { addArticle } from '../../store/actions';
// import Nav from '../nav';
// import LoginPage from './login.page';

// interface IArticle {
//   name: string;
//   id: string;
// }

// interface IClassProps {
//   addArticles: (article: IArticle) => void;
// }

// interface IDispatchFromProps {
//   addArticle: (article: IArticle) => void;
// }

// class Login extends Component<IClassProps> {
//   public state = {
//     email: '',
//     password: '',
//   };

//   private loginFormRef = React.createRef<HTMLFormElement>() || null;

//   public handleInputs = (event: React.FormEvent<HTMLInputElement>) => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

//   public onLoginIn = (event: React.FormEvent) => {
//     const node = this.loginFormRef.current;
//     if (node) {
//       if (node.reportValidity()) {
//         event.preventDefault();
//         console.log(
//           'Login Form is valid! ',
//           this.state.email,
//           this.state.password,
//         );
//         const id = uuid();
//         const payload: IArticle = {
//           id,
//           name: 'blablabla',
//         };
//         this.props.addArticles(payload);
//       }
//     }
//   };

//   public render() {
//     return (
//       <>
//         <Nav />
//         <LoginPage
//           email={this.state.email}
//           password={this.state.password}
//           loginFormRef={this.loginFormRef}
//           onLoginIn={this.onLoginIn}
//           handleInputs={this.handleInputs}
//         />
//       </>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
//   addArticle: (article: any) => dispatch(addArticle(article)),
// });

// export default connect<null, IDispatchFromProps, void>(
//   null,
//   mapDispatchToProps,
// )(Login);
