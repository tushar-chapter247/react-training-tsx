import * as actions from '../../actions/action-types';

interface ISignup {
  name: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IActionType extends ISignup, ILogin {
  type: string;
  signupPayload: ISignup;
  logininPayload: ILogin;
}

const initialState: ISignup | ILogin = {
  email: '',
  name: '',
  password: '',
};

const accountReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        email: action.logininPayload.email,
        password: action.logininPayload.password,
      };

    case actions.USER_SIGNUP:
      return {
        ...state,
        email: action.signupPayload.email,
        name: action.signupPayload.name,
        password: action.signupPayload.password,
      };

    default:
      return state;
  }
};

export default accountReducer;
