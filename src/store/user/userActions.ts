import {
  UserActionTypes, ILogoutAction,
  ILoginRequestAction, ILoginSuccessAction, ILoginFailureAction, ILoginSuccessPayload,
  ISignupRequestAction, ISignupSuccessAction, ISignupFailureAction, ISignupSuccessPayload
} from './userTypes';
import { IUserLoginInfo, IUserSignupInfo } from 'services/userService';

export const loginRequest = (loginInfo: IUserLoginInfo): ILoginRequestAction => ({
  type: UserActionTypes.LOGIN_REQUEST,
  payload: {
    loginInfo
  }
});

export const loginSuccess = (payload: ILoginSuccessPayload): ILoginSuccessAction => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload
});

export const loginFailure = (error: Error): ILoginFailureAction => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: {
    error
  }
});

export const logout = (): ILogoutAction => ({
  type: UserActionTypes.LOGOUT
});

export const signupRequest = (signupInfo: IUserSignupInfo): ISignupRequestAction => ({
  type: UserActionTypes.SIGNUP_REQUEST,
  payload: {
    signupInfo
  }
});

export const signupSuccess = (payload: ISignupSuccessPayload): ISignupSuccessAction => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload
});

export const signupFailure = (error: Error): ISignupFailureAction => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: {
    error
  }
});
