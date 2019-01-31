import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import NavBar from './nav.page';

interface INavState {
  anchorEl: any;
}

interface INavProps extends RouteComponentProps<any> {}

class Nav extends Component<INavProps, INavState> {
  public state = {
    anchorEl: null,
  };

  public openProductPage = () => {
    this.props.history.push('/products');
  }

  public openArticlePage = () => {
    this.props.history.push('/article');
  }

  public openProfileMenu = (event: { currentTarget: any }) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public closeProfileMenu = () => {
    this.setState({ anchorEl: null });
  };

  public openLoginPage = () => {
    this.props.history.push('/login');
    this.closeProfileMenu();
  };

  public openSignupPage = () => {
    this.props.history.push('/signup');
    this.closeProfileMenu();
  };

  public render() {
    return (
      <>
        <NavBar
          anchorEl={this.state.anchorEl}
          openArticlePage={this.openArticlePage}
          openProductPage={this.openProductPage}
          openProfileMenu={this.openProfileMenu}
          openLoginPage={this.openLoginPage}
          openSignupPage={this.openSignupPage}
          closeProfileMenu={this.closeProfileMenu}
        />
      </>
    );
  }
}

export default withRouter<INavProps>(Nav);
