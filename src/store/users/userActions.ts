import {
  UsersById, UserActionTypes, GetUsersRequestAction, GetUsersSuccessAction, GetUsersFailureAction, AddUsersAction
} from './userTypes';

export const getUsersRequest = (params?: Record<string, string>): GetUsersRequestAction => ({
  type: UserActionTypes.GET_USERS_REQUEST,
  params
});

export const getUsersSuccess = (usersById: UsersById, allUsers: string[]): GetUsersSuccessAction => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  usersById,
  allUsers
});

export const getUsersFailure = (error: string): GetUsersFailureAction => ({
  type: UserActionTypes.GET_USERS_FAILURE,
  error
});

export const addUsers = (usersById: UsersById): AddUsersAction => ({
  type: UserActionTypes.ADD_USERS,
  usersById
});
