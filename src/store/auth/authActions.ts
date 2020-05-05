import {
  AuthActionTypes, ILoginRequestAction, ILoginSuccessAction, ILoginFailureAction,
  ISignupRequestAction, ISignupSuccessAction, ISignupFailureAction, ILogoutAction
} from './authTypes';
import { IUserLoginInfo, IUserSignupInfo } from 'services/userService';

export const loginRequest = (loginInfo: IUserLoginInfo): ILoginRequestAction => ({
  type: AuthActionTypes.LOGIN_REQUEST,
  payload: {
    loginInfo
  }
});

export const loginSuccess = (token: string): ILoginSuccessAction => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: {
    token
  }
});

export const loginFailure = (error: string): ILoginFailureAction => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: {
    error
  }
});

export const logout = (): ILogoutAction => ({
  type: AuthActionTypes.LOGOUT
});

export const signupRequest = (signupInfo: IUserSignupInfo): ISignupRequestAction => ({
  type: AuthActionTypes.SIGNUP_REQUEST,
  payload: {
    signupInfo
  }
});

export const signupSuccess = (token: string): ISignupSuccessAction => ({
  type: AuthActionTypes.SIGNUP_SUCCESS,
  payload: {
    token
  }
});

export const signupFailure = (error: string): ISignupFailureAction => ({
  type: AuthActionTypes.SIGNUP_FAILURE,
  payload: {
    error
  }
});
