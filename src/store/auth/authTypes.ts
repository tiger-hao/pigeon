import { Action } from 'redux';
import { Name } from 'types';
import { UserLoginInfo, UserSignupInfo } from 'services/userService';

export interface AuthState {
  name: Name;
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

export interface LoginRequestAction extends Action<AuthActionTypes.LOGIN_REQUEST> {
  payload: {
    loginInfo: UserLoginInfo;
    setFormikErrors: Function;
  }
}

export interface LoginSuccessAction extends Action<AuthActionTypes.LOGIN_SUCCESS> {
  payload: {
    token: string;
  }
}

export interface LoginFailureAction extends Action<AuthActionTypes.LOGIN_FAILURE> {
  payload: {
    error: string;
  }
}

export type LogoutAction = Action<AuthActionTypes.LOGOUT>;

export interface SignupRequestAction extends Action<AuthActionTypes.SIGNUP_REQUEST> {
  payload: {
    signupInfo: UserSignupInfo;
  }
}

export interface SignupSuccessAction extends Action<AuthActionTypes.SIGNUP_SUCCESS> {
  payload: {
    token: string;
  }
}

export interface SignupFailureAction extends Action<AuthActionTypes.SIGNUP_FAILURE> {
  payload: {
    error: string;
  }
}

export type AuthAction = LoginRequestAction | LoginSuccessAction | LoginFailureAction
  | LogoutAction | SignupRequestAction | SignupSuccessAction | SignupFailureAction;
