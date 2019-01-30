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
import './signup.css';

interface IPropType {
  name: string;
  email: string;
  password: string;
  signupFormRef: any;
  onSignup: any;
  handleInputs: any;
}

const SingupPage = (props: IPropType) => {
  return (
    <>
      <div className="signup-main">
        <CssBaseline />
        <Paper className="signup-paper">
          <Avatar className="signup-avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className="signup-form" ref={props.signupFormRef}>
            <FormControl margin="normal" required={true} fullWidth={true}>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                autoFocus={true}
                value={props.name}
                onChange={props.handleInputs}
              />
            </FormControl>
            <FormControl margin="normal" required={true} fullWidth={true}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                value={props.email}
                onChange={props.handleInputs}
              />
            </FormControl>
            <FormControl margin="normal" required={true} fullWidth={true}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={props.password}
                onChange={props.handleInputs}
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
              onClick={props.onSignup}
              className="login-submit"
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </div>
    </>
  );
};

export default SingupPage;
