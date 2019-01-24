import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import './login.css';

interface IPropTypes {
  loginFormRef: any;
  onLoginIn: any;
}

const LoginPage = (props: IPropTypes) => {
  return (
    <>
      <div className="login-main">
        <CssBaseline />
        <Paper className="login-paper">
          <Avatar className="login-avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="login-form" ref={props.loginFormRef}>
            <FormControl margin="normal" required={true} fullWidth={true}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus={true}
              />
            </FormControl>
            <FormControl margin="normal" required={true} fullWidth={true}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth={true}
              variant="contained"
              color="primary"
              onClick={props.onLoginIn}
              className="login-submit"
            >
              Log in
            </Button>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default LoginPage;
