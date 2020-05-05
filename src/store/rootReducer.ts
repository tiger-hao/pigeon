import { combineReducers, Reducer } from 'redux';
import { authReducer } from './auth/authReducer';
import { userReducer } from './user/userReducer';
import { AuthState } from './auth/authTypes';
import { UserState } from './user/userTypes';

export interface RootState {
  auth: AuthState;
  user: UserState;
}

export const rootReducer: Reducer<RootState> = combineReducers({
  auth: authReducer,
  user: userReducer
});
