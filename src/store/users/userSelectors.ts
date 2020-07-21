import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';
import { UsersById, User } from './userTypes';

export const getUsersById = (state: RootState) => state.users.byId;

export const getUser = createSelector(
  getUsersById,
  (state: RootState, userId: string) => userId,
  (usersById: UsersById, userId: string) => usersById[userId]
);

export const getUserFullName = createSelector(
  getUser,
  (user: User) => user ? `${user.name.first} ${user.name.last}` : ''
);
