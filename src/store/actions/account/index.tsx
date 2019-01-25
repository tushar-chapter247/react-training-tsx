import { USER_LOGIN, USER_SIGNUP } from '../action-types';

interface ISignup {
  name: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

export const userSignup = (payload: ISignup) => {
  return {
    payload,
    type: USER_SIGNUP,
  };
};

export const userLogin = (payload: ILogin) => {
  return {
    payload,
    type: USER_LOGIN,
  };
};
