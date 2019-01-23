import React, { Component } from 'react';
import NavBar from './nav.page';

interface INavState {
  anchorEl: any;
}

// tslint:disable-next-line:no-empty-interface
interface INavProps {}

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

export default Nav;
