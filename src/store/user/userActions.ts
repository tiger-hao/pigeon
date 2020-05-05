import { UserActionTypes, IUserInfo, IGetUserRequestAction, IGetUserSuccessAction, IGetUserFailureAction } from "./userTypes";

export const getUserRequest = (): IGetUserRequestAction => ({
  type: UserActionTypes.GET_USER_REQUEST,
});

export const getUserSuccess = (user: IUserInfo): IGetUserSuccessAction => ({
  type: UserActionTypes.GET_USER_SUCCESS,
  payload: {
    user
  }
});

export const getUserFailure = (error: string): IGetUserFailureAction => ({
  type: UserActionTypes.GET_USER_FAILURE,
  payload: {
    error
  }
});
