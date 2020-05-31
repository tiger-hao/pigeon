import { normalize, NormalizedSchema } from 'normalizr';
import { dataRequestor } from './dataRequestor';
import { Name } from 'types';
import { ApiResponse } from './ApiResponse';
import { userSchema } from './schema';

export interface User {
  id: string;
  name: Name;
}

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
  user: {
    id: User['id'];
    name: User['name'];
    email: string;
  }
}

export type GetUsersResponse = NormalizedSchema<{
  users: {
    [key: string]: User;
  };
}, string[]>;

export async function loginUser(loginInfo: UserLoginInfo): Promise<UserTokenResponse> {
  const { data: { data } } = await dataRequestor.post<ApiResponse<UserTokenResponse>>('/auth/token', loginInfo);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function signupUser(signupInfo: UserSignupInfo): Promise<UserTokenResponse> {
  const { data: { data } } = await dataRequestor.post<ApiResponse<UserTokenResponse>>('/users', signupInfo);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function getUser(userId: string = 'me'): Promise<GetUserResponse> {
  const { data: { data } } = await dataRequestor.get<ApiResponse<GetUserResponse>>(`/users/${userId}`);

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return data;
}

export async function getUsers(): Promise<GetUsersResponse> {
  const { data: { data } } = await dataRequestor.get<ApiResponse<{ users: User[] }>>('/users');

  if (!data) {
    throw Error("Data expected but not received from API response");
  }

  return normalize(data.users, [userSchema]);
}
