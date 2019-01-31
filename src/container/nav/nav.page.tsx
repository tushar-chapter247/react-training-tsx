import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import React from 'react';

interface INavProps {
  anchorEl: any;
  openProductPage: any;
  openArticlePage: any;
  openProfileMenu: any;
  openLoginPage: any;
  openSignupPage: any;
  closeProfileMenu: any;
}

const NavBar: React.FunctionComponent<INavProps> = props => {
  const profileMenu = Boolean(props.anchorEl);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React Redux
          </Typography>
          <span className="flex-spacer" />
          <Button color="inherit" onClick={props.openArticlePage}>Articles</Button>
          <Button color="inherit" onClick={props.openProductPage}>Products</Button>
          <Tooltip title="User Menu" placement="bottom">
            <IconButton
              aria-owns={profileMenu ? 'profile-menu' : undefined}
              aria-haspopup="true"
              color="inherit"
              onClick={props.openProfileMenu}
            >
              <PersonPinIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="profile-menu"
            anchorEl={props.anchorEl}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
            transformOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
            open={profileMenu}
            onClose={props.closeProfileMenu}
          >
            <MenuItem onClick={props.openLoginPage}>Login</MenuItem>
            <MenuItem onClick={props.openSignupPage}>Sign up</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
