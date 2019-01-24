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

  public openProfileMenu = (event: { currentTarget: any }) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  public closeProfileMenu = () => {
    this.setState({ anchorEl: null });
  };

  public render() {
    console.log('nav index props: ', this.props);
    return (
      <>
        <NavBar
          anchorEl={this.state.anchorEl}
          openProfileMenu={this.openProfileMenu}
          closeProfileMenu={this.closeProfileMenu}
        />
      </>
    );
  }
}

export default withRouter<INavProps>(Nav);
