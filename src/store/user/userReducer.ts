import { Reducer } from 'redux';
import { UserActionTypes, IUserState, IUserAction } from './userTypes';

const INITIAL_STATE: IUserState = {
  name: {
    first: '',
    last: ''
  },
  email: '',
  token: '',
  error: null
};

export const userReducer: Reducer<IUserState, IUserAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGOUT:
      return INITIAL_STATE;
    case UserActionTypes.LOGIN_SUCCESS:
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.SIGNUP_SUCCESS:
    case UserActionTypes.SIGNUP_FAILURE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
