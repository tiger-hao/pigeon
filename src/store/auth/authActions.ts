import {
  AuthActionTypes, LoginRequestAction, LoginSuccessAction, LoginFailureAction,
  SignupRequestAction, SignupSuccessAction, SignupFailureAction, LogoutAction
} from './authTypes';
import { UserLoginInfo, UserSignupInfo } from 'services/userService';

export const loginRequest = (loginInfo: UserLoginInfo, setFormikErrors: Function): LoginRequestAction => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  loginInfo,
  setFormikErrors
});

export const loginSuccess = (token: string): LoginSuccessAction => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  token
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  error
});

export const logout = (): LogoutAction => ({
  type: AuthActionTypes.LOGOUT
});

export const signupRequest = (signupInfo: UserSignupInfo): SignupRequestAction => ({
  type: AuthActionTypes.SIGNUP_REQUEST,
  signupInfo
});

export const signupSuccess = (token: string): SignupSuccessAction => ({
  type: AuthActionTypes.SIGNUP_SUCCESS,
  token
});

export const signupFailure = (error: string): SignupFailureAction => ({
  type: AuthActionTypes.SIGNUP_FAILURE,
  error
});
