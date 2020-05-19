import { Action } from 'redux';
import { Name } from 'types';
import { LogoutAction } from 'store/auth/authTypes';

export interface UserInfo {
  id: string;
  name: Name;
  email: string;
}

export interface UserState extends UserInfo {
  loading: boolean;
  error: string;
}

export enum UserActionTypes {
  GET_USER_REQUEST = "pigeon/user/GET_USER_REQUEST",
  GET_USER_SUCCESS = "pigeon/user/GET_USER_SUCCESS",
  GET_USER_FAILURE = "pigeon/user/GET_USER_FAILURE"
}

export type GetUserRequestAction = Action<UserActionTypes.GET_USER_REQUEST>;

export interface GetUserSuccessAction extends Action<UserActionTypes.GET_USER_SUCCESS> {
  user: UserInfo;
}

export interface GetUserFailureAction extends Action<UserActionTypes.GET_USER_FAILURE> {
  error: string;
}

export type UserAction = GetUserRequestAction | GetUserSuccessAction | GetUserFailureAction
  | LogoutAction;
