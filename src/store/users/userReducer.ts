import { Reducer, combineReducers } from 'redux';
import { UserActionTypes, UsersById, UserAction } from './userTypes';

const usersById: Reducer<UsersById, UserAction> = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS:
    case UserActionTypes.ADD_USERS:
      return {
        ...state,
        ...action.usersById
      };
    default:
      return state;
  }
};

const allUsers: Reducer<string[], UserAction> = (state = [], action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS:
      return action.allUsers;
    default:
      return state;
  }
};

const loading: Reducer<boolean, UserAction> = (state = false, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_REQUEST:
      return true;
    case UserActionTypes.GET_USERS_SUCCESS:
    case UserActionTypes.GET_USERS_FAILURE:
      return false;
    default:
      return state;
  }
};

const error: Reducer<string, UserAction> = (state = '', action) => {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS:
      return '';
    case UserActionTypes.GET_USERS_FAILURE:
      return action.error;
    default:
      return state;
  }
};

export const userReducer = combineReducers({
  byId: usersById,
  allIds: allUsers,
  loading,
  error
});

export type UserState = ReturnType<typeof userReducer>;
