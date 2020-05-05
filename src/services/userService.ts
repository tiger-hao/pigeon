import axios from 'axios';
import { Name } from 'types';
import { ApiResponse } from './ApiResponse';

export interface UserLoginInfo {
  email: string;
  password: string;
}

export interface UserSignupInfo {
  name: Name;
  email: string;
  password: string;
}

export interface UserTokenResponse {
  access_token: string;
  token_type: string;
}

export interface GetUserResponse {
  name: Name;
  email: string;
}

export async function loginUser(loginInfo: UserLoginInfo): Promise<UserTokenResponse> {
  const { data: { data } } = await axios.post<ApiResponse<UserTokenResponse>>(`${process.env.REACT_APP_API_BASE_URL}/auth/token`, loginInfo);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function signupUser(signupInfo: UserSignupInfo): Promise<UserTokenResponse> {
  const { data: { data } } = await axios.post<ApiResponse<UserTokenResponse>>(`${process.env.REACT_APP_API_BASE_URL}/users`, signupInfo);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function getUser(): Promise<GetUserResponse> {
  const { data: { data } } = await axios.get<ApiResponse<GetUserResponse>>(`${process.env.REACT_APP_API_BASE_URL}/users/me`);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}
