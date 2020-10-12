import { Action } from 'redux';
import { Name } from 'types';

export interface User {
  id: string;
  name: Name;
}

export interface UsersById {
  [key: string]: User
}

export enum UserActionTypes {
  GET_USERS_REQUEST = 'pigeon/users/GET_USERS_REQUEST',
  GET_USERS_SUCCESS = 'pigeon/users/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'pigeon/users/GET_USERS_FAILURE',
  ADD_USERS = 'pigeon/users/ADD_USERS'
}

export interface GetUsersRequestAction extends Action<UserActionTypes.GET_USERS_REQUEST> {
  params?: Record<string, string>;
}

export interface GetUsersSuccessAction extends Action<UserActionTypes.GET_USERS_SUCCESS> {
  usersById: UsersById;
  allUsers: string[];
}

export interface GetUsersFailureAction extends Action<UserActionTypes.GET_USERS_FAILURE> {
  error: string;
}

export interface AddUsersAction extends Action<UserActionTypes.ADD_USERS> {
  usersById: UsersById;
}

export type UserAction = GetUsersRequestAction | GetUsersSuccessAction | GetUsersFailureAction | AddUsersAction;
