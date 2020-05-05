import axios from 'axios';
import { IName } from 'types';

export interface IUserLoginInfo {
  email: string;
  password: string;
}

export interface IUserSignupInfo {
  name: IName;
  email: string;
  password: string;
}

export interface IUserTokenResponse {
  access_token: string;
  token_type: string;
}

export interface IGetUserResponse {
  name: IName;
  email: string;
}

export function loginUser(loginInfo: IUserLoginInfo): Promise<IUserTokenResponse> {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/token`, loginInfo);
}

export function signupUser(signupInfo: IUserSignupInfo): Promise<IUserTokenResponse> {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/users`, signupInfo);
}

export function getUser(): Promise<IGetUserResponse> {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/me`);
}
