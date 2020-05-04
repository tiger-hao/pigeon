import { Action } from 'redux';
import { IName } from 'types';
import { IUserLoginInfo, IUserSignupInfo } from 'services/userService';

export interface IUserState {
  name: IName;
  email: string;
  token: string;
  error: any;
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

export interface ILoginSuccessPayload {
  email: string;
  token: string;
}

export interface ISignupSuccessPayload {
  name: IName;
  email: string;
  token: string;
}

export interface ILoginRequestAction extends Action<UserActionTypes.LOGIN_REQUEST> {
  payload: {
    loginInfo: IUserLoginInfo;
  }
}

export interface ILoginSuccessAction extends Action<UserActionTypes.LOGIN_SUCCESS> {
  payload: ILoginSuccessPayload;
}

export interface ILoginFailureAction extends Action<UserActionTypes.LOGIN_FAILURE> {
  payload: {
    error: any;
  }
}

export type ILogoutAction = Action<UserActionTypes.LOGOUT>;

export interface ISignupRequestAction extends Action<UserActionTypes.SIGNUP_REQUEST> {
  payload: {
    signupInfo: IUserSignupInfo;
  }
}

export interface ISignupSuccessAction extends Action<UserActionTypes.SIGNUP_SUCCESS> {
  payload: ISignupSuccessPayload;
}

export interface ISignupFailureAction extends Action<UserActionTypes.SIGNUP_FAILURE> {
  payload: {
    error: any;
  }
}

export type IUserAction = ILoginRequestAction | ILoginSuccessAction | ILoginFailureAction
  | ILogoutAction | ISignupRequestAction | ISignupSuccessAction | ISignupFailureAction;
