import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import * as actions from '../action-types';

interface ISignup {
  name: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

export const userSignup = (
  payload: ISignup,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>(resolve => {
      console.log('action user signup');
      if (payload) {
        dispatch({ type: actions.USER_SIGNUP_REQUEST });
        dispatch(userSignupReq(payload));
      }
      resolve();
    });
  };
};

export const userSignupReq = (
  payload: ISignup,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>(resolve => {
      console.log('action user signup req: ', payload);
      // call signup api here and dispatch actions according to response
      axios.post('https://reqres.in/api/login', {
        "email": "peter@klaven",
        "password": "cityslicka"
      })
      .then((response) => {
        dispatch(signupReqSuccess(response))
      })
      .catch((err) => {
        dispatch(signupReqError(err))
      })
      resolve();
    });
  };
};

export const signupReqSuccess = (response: any) => {
  return {
    signupResponse: response, // AS MENTIONED IN REDUCERS
    type: actions.USER_SIGNUP_SUCCESS,
  };
};

export const signupReqError = (error: any) => {
  return {
    signupError: error, // AS MENTIONED IN REDUCERS
    type: actions.USER_SIGNUP_FAILURE,
  };
};

export const userLogin = (payload: ILogin) => {
  return {
    logininPayload: payload, // AS MENTIONED IN REDUCERS
    type: actions.USER_LOGIN,
  };
};
