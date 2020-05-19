import { Reducer } from 'redux';
import { UserActionTypes, UserState, UserAction } from './userTypes';
import { AuthActionTypes } from 'store/auth/authTypes';

const INITIAL_STATE: UserState = {
  name: {
    first: '',
    last: ''
  },
  email: '',
  loading: false,
  error: ''
};

export const userReducer: Reducer<UserState, UserAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USER_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.user,
        loading: false,
        error: ''
      };
    case UserActionTypes.GET_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case AuthActionTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
