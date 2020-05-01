import { Action } from 'redux';

export interface IUserState {
  email: string;
  token: string;
  error?: Error;
}

export interface IUserSignupInfo {
  email: string;
  password: string;
}

export interface IUserLoginInfo {
  email: string;
  password: string;
}

export enum UserActionTypes {
  LOGIN_REQUEST = "pigeon/user/LOGIN_REQUEST",
  LOGIN_SUCCESS = "pigeon/user/LOGIN_SUCCESS",
  LOGIN_FAILURE = "pigeon/user/LOGIN_FAILURE",
  LOGOUT = "pigeon/user/LOGOUT",
  SIGNUP_REQUEST = "pigeon/user/SIGNUP_REQUEST",
  SIGNUP_SUCCESS = "pigeon/user/SIGNUP_SUCCESS",
  SIGNUP_FAILURE = "pigeon/user/SIGNUP_FAILURE"
}

export interface ILoginRequestAction extends Action<UserActionTypes.LOGIN_REQUEST> {
  payload: {
    loginInfo: IUserLoginInfo;
  }
}

export interface ILoginSuccessAction extends Action<UserActionTypes.LOGIN_SUCCESS> {
  payload: {
    user: IUserState;
  }
}

export interface ILoginFailureAction extends Action<UserActionTypes.LOGIN_FAILURE> {
  payload: {
    error: Error;
  }
}

export type ILogoutAction = Action<UserActionTypes.LOGOUT>;

export interface ISignupRequestAction extends Action<UserActionTypes.SIGNUP_REQUEST> {
  payload: {
    signupInfo: IUserSignupInfo;
  }
}

export interface ISignupSuccessAction extends Action<UserActionTypes.SIGNUP_SUCCESS> {
  payload: {
    user: IUserState;
  }
}

export interface ISignupFailureAction extends Action<UserActionTypes.SIGNUP_FAILURE> {
  payload: {
    error: Error;
  }
}

export type IUserAction = ILoginRequestAction | ILoginSuccessAction | ILoginFailureAction
  | ILogoutAction | ISignupRequestAction | ISignupSuccessAction | ISignupFailureAction;
