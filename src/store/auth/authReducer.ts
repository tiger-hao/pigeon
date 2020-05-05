import { Reducer } from 'redux';
import { AuthActionTypes, IAuthState, IAuthAction } from './authTypes';

const INITIAL_STATE: IAuthState = {
  name: {
    first: '',
    last: ''
  },
  email: '',
  token: '',
  loading: false,
  error: ''
};

export const authReducer: Reducer<IAuthState, IAuthAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
    case AuthActionTypes.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        error: ''
      };
    case AuthActionTypes.LOGIN_FAILURE:
    case AuthActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case AuthActionTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
