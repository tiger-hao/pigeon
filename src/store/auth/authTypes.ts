import { Action } from 'redux';
import { IName } from 'types';
import { IUserLoginInfo, IUserSignupInfo } from 'services/userService';

export interface IAuthState {
  name: IName;
  email: string;
  token: string;
  loading: boolean;
  error: string;
}

export enum AuthActionTypes {
  LOGIN_REQUEST = "pigeon/auth/LOGIN_REQUEST",
  LOGIN_SUCCESS = "pigeon/auth/LOGIN_SUCCESS",
  LOGIN_FAILURE = "pigeon/auth/LOGIN_FAILURE",
  LOGOUT = "pigeon/auth/LOGOUT",
  SIGNUP_REQUEST = "pigeon/auth/SIGNUP_REQUEST",
  SIGNUP_SUCCESS = "pigeon/auth/SIGNUP_SUCCESS",
  SIGNUP_FAILURE = "pigeon/auth/SIGNUP_FAILURE"
}

export interface ILoginRequestAction extends Action<AuthActionTypes.LOGIN_REQUEST> {
  payload: {
    loginInfo: IUserLoginInfo;
  }
}

export interface ILoginSuccessAction extends Action<AuthActionTypes.LOGIN_SUCCESS> {
  payload: {
    token: string;
  }
}

export interface ILoginFailureAction extends Action<AuthActionTypes.LOGIN_FAILURE> {
  payload: {
    error: string;
  }
}

export type ILogoutAction = Action<AuthActionTypes.LOGOUT>;

export interface ISignupRequestAction extends Action<AuthActionTypes.SIGNUP_REQUEST> {
  payload: {
    signupInfo: IUserSignupInfo;
  }
}

export interface ISignupSuccessAction extends Action<AuthActionTypes.SIGNUP_SUCCESS> {
  payload: {
    token: string;
  }
}

export interface ISignupFailureAction extends Action<AuthActionTypes.SIGNUP_FAILURE> {
  payload: {
    error: string;
  }
}

export type IAuthAction = ILoginRequestAction | ILoginSuccessAction | ILoginFailureAction
  | ILogoutAction | ISignupRequestAction | ISignupSuccessAction | ISignupFailureAction;
