import { ActionCreator } from 'redux';
import {
  IUserLoginInfo, IUserSignupInfo, IUserState, UserActionTypes,
  ILoginRequestAction, ILoginSuccessAction, ILoginFailureAction, ILogoutAction,
  ISignupRequestAction, ISignupSuccessAction, ISignupFailureAction
} from './userTypes';

export const loginRequest: ActionCreator<ILoginRequestAction> = (loginInfo: IUserLoginInfo) => ({
  type: UserActionTypes.LOGIN_REQUEST,
  payload: {
    loginInfo
  }
});

export const loginSuccess: ActionCreator<ILoginSuccessAction> = (user: IUserState) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: {
    user
  }
});

export const loginFailure: ActionCreator<ILoginFailureAction> = (error: Error) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: {
    error
  }
});

export const logout: ActionCreator<ILogoutAction> = () => ({
  type: UserActionTypes.LOGOUT
});

export const signupRequest: ActionCreator<ISignupRequestAction> = (signupInfo: IUserSignupInfo) => ({
  type: UserActionTypes.SIGNUP_REQUEST,
  payload: {
    signupInfo
  }
});

export const signupSuccess: ActionCreator<ISignupSuccessAction> = (user: IUserState) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: {
    user
  }
});

export const signupFailure: ActionCreator<ISignupFailureAction> = (error: Error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: {
    error
  }
});
