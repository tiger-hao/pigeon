import { Reducer } from 'redux';
import { UserActionTypes, IUserState, IUserAction } from './userTypes';
import { AuthActionTypes } from 'store/auth/authTypes';

const INITIAL_STATE: IUserState = {
  name: {
    first: '',
    last: ''
  },
  email: '',
  loading: false,
  error: ''
};

export const userReducer: Reducer<IUserState, IUserAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USER_REQUEST:
      return { ...state, loading: true };
    case UserActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
        loading: false,
        error: ''
      };
    case UserActionTypes.GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    case AuthActionTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
