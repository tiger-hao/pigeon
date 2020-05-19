import { Reducer } from 'redux';
import { AuthActionTypes, AuthState, AuthAction } from './authTypes';

const INITIAL_STATE: AuthState = {
  token: '',
  loading: false,
  error: ''
};

export const authReducer: Reducer<AuthState, AuthAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST:
    case AuthActionTypes.SIGNUP_REQUEST:
      return { ...state, loading: true };
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        error: ''
      };
    case AuthActionTypes.LOGIN_FAILURE:
    case AuthActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case AuthActionTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
