import { combineReducers, Reducer } from 'redux';
import { userReducer } from './user/userReducer';
import { IUserState } from './user/userTypes';

export interface IRootState {
  user: IUserState;
}

export const rootReducer: Reducer<IRootState> = combineReducers({
  user: userReducer
});
