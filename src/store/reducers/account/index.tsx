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
  showLoading: boolean;
  signupResponse: any;
  showSuccessMessage: boolean;
  signupError: any;
  showErrorMessage: boolean;
}

const initialState: ISignup | ILogin | IActionType = {
  email: '',
  name: '',
  password: '',
  showErrorMessage: false,
  showLoading: false,
  showSuccessMessage: false,
  signupError: null,
  signupResponse: null,
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
    
    case actions.USER_SIGNUP_REQUEST:
      return {
        ...state,
        showLoading: true
      }

    case actions.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        response: action.signupResponse,
        showLoading: false,
        showSuccessMessage: true
      }

    case actions.USER_SIGNUP_FAILURE:
      return {
        ...state,
        error: action.signupError,
        showErrorMessage: true,
        showLoading: false,
      }

    default:
      return state;
  }
};

export default accountReducer;
