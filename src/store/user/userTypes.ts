import { Action } from 'redux';
import { IName } from 'types';
import { ILogoutAction } from 'store/auth/authTypes';

export interface IUserInfo {
  name: IName;
  email: string;
}

export interface IUserState extends IUserInfo {
  loading: boolean;
  error: string;
}

export enum UserActionTypes {
  GET_USER_REQUEST = "pigeon/user/GET_USER_REQUEST",
  GET_USER_SUCCESS = "pigeon/user/GET_USER_SUCCESS",
  GET_USER_FAILURE = "pigeon/user/GET_USER_FAILURE"
}

export type IGetUserRequestAction = Action<UserActionTypes.GET_USER_REQUEST>;

export interface IGetUserSuccessAction extends Action<UserActionTypes.GET_USER_SUCCESS> {
  payload: {
    user: IUserInfo;
  }
}

export interface IGetUserFailureAction extends Action<UserActionTypes.GET_USER_FAILURE> {
  payload: {
    error: string;
  }
}

export type IUserAction = IGetUserRequestAction | IGetUserSuccessAction | IGetUserFailureAction
  | ILogoutAction;
