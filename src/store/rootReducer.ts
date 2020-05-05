import { combineReducers, Reducer } from 'redux';
import { authReducer } from './auth/authReducer';
import { userReducer } from './user/userReducer';
import { IAuthState } from './auth/authTypes';
import { IUserState } from './user/userTypes';

export interface IRootState {
  auth: IAuthState;
  user: IUserState;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
  auth: authReducer,
  user: userReducer
});
