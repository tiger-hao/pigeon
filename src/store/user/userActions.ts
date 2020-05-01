import {
  IUserLoginInfo, IUserSignupInfo, IUserState, UserActionTypes,
  ILoginRequestAction, ILoginSuccessAction, ILoginFailureAction, ILogoutAction,
  ISignupRequestAction, ISignupSuccessAction, ISignupFailureAction
} from './userTypes';

export const loginRequest = (loginInfo: IUserLoginInfo): ILoginRequestAction => ({
  type: UserActionTypes.LOGIN_REQUEST,
  payload: {
    loginInfo
  }
});

export const loginSuccess = (user: IUserState): ILoginSuccessAction => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: {
    user
  }
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

export const signupSuccess = (user: IUserState): ISignupSuccessAction => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: {
    user
  }
});

export const signupFailure = (error: Error): ISignupFailureAction => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: {
    error
  }
});