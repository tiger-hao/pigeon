import axios from 'axios';
import { IName } from 'types';
import { ApiResponse } from './ApiResponse';

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

export async function loginUser(loginInfo: IUserLoginInfo): Promise<IUserTokenResponse> {
  const { data: { data } } = await axios.post<ApiResponse<IUserTokenResponse>>(`${process.env.REACT_APP_API_BASE_URL}/auth/token`, loginInfo);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function signupUser(signupInfo: IUserSignupInfo): Promise<IUserTokenResponse> {
  const { data: { data } } = await axios.post<ApiResponse<IUserTokenResponse>>(`${process.env.REACT_APP_API_BASE_URL}/users`, signupInfo);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function getUser(): Promise<IGetUserResponse> {
  const { data: { data } } = await axios.get<ApiResponse<IGetUserResponse>>(`${process.env.REACT_APP_API_BASE_URL}/users/me`);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}
