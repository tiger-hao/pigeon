import { Action } from 'redux';
import { Name } from 'types';
import { LogoutAction } from 'store/auth/authTypes';

export interface Profile {
  id: string;
  name: Name;
  email: string;
}

export interface ProfileState extends Profile {
  loading: boolean;
  error: string;
}

export enum ProfileActionTypes {
  GET_PROFILE_REQUEST = 'pigeon/profile/GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS = 'pigeon/profile/GET_PROFILE_SUCCESS',
  GET_PROFILE_FAILURE = 'pigeon/profile/GET_PROFILE_FAILURE',
  ADD_PROFILES = 'pigeon/profile/ADD_PROFILES'
}

export type GetProfileRequestAction = Action<ProfileActionTypes.GET_PROFILE_REQUEST>;

export interface GetProfileSuccessAction extends Action<ProfileActionTypes.GET_PROFILE_SUCCESS> {
  profile: Profile;
}

export interface GetProfileFailureAction extends Action<ProfileActionTypes.GET_PROFILE_FAILURE> {
  error: string;
}

export type ProfileAction = GetProfileRequestAction | GetProfileSuccessAction | GetProfileFailureAction
  | LogoutAction;
