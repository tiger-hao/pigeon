import { UserActionTypes, IUserState, IUserAction } from './userTypes';

const INITIAL_STATE: IUserState = {
  email: '',
  token: ''
}

export function userReducer(state: IUserState = INITIAL_STATE, action: IUserAction) {
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST:
    case UserActionTypes.LOGIN_SUCCESS:
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.LOGOUT:
    case UserActionTypes.SIGNUP_REQUEST:
    case UserActionTypes.SIGNUP_SUCCESS:
    case UserActionTypes.SIGNUP_FAILURE:
    default:
      return state;
  }
}
