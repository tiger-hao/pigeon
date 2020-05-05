import { UserActionTypes, UserInfo, GetUserRequestAction, GetUserSuccessAction, GetUserFailureAction } from "./userTypes";

export const getUserRequest = (): GetUserRequestAction => ({
  type: UserActionTypes.GET_USER_REQUEST,
});

export const getUserSuccess = (user: UserInfo): GetUserSuccessAction => ({
  type: UserActionTypes.GET_USER_SUCCESS,
  payload: {
    user
  }
});

export const getUserFailure = (error: string): GetUserFailureAction => ({
  type: UserActionTypes.GET_USER_FAILURE,
  payload: {
    error
  }
});
