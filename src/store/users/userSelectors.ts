import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';
import { UsersById, User } from './userTypes';
import { getCurrentUser } from 'store/auth/authSelectors';

export const getUsersById = (state: RootState) => state.users.byId;
export const getAllUserIds = (state: RootState) => state.users.allIds;
export const getUsersLoading = (state: RootState) => state.users.loading;

export const getUser = createSelector(
  getUsersById,
  (state: RootState, userId: string) => userId,
  (usersById: UsersById, userId: string) => usersById[userId]
);

export const getUsers = createSelector(
  getUsersById,
  getAllUserIds,
  getCurrentUser,
  (state: RootState, filter: string = "") => filter,
  (usersById: UsersById, allUserIds: string[], currUser: string, filter: string) => {
    return allUserIds.reduce((acc: User[], userId: string) => {
      const user = usersById[userId];

      if (userId !== currUser && (user.name.first.toLowerCase().includes(filter.toLowerCase()) || user.name.last.toLowerCase().includes(filter.toLowerCase()))) {
        acc.push(user);
      }

      return acc;
    }, []);
  }
);

export const getUserFullName = createSelector(
  getUser,
  (user: User) => user ? `${user.name.first} ${user.name.last}` : ""
);

export const getUserFullNames = createSelector(
  getUsersById,
  (state: RootState, userIds: string[]) => userIds,
  (usersById: UsersById, userIds: string[]) => {
    return userIds.reduce((acc: string[], userId: string) => {
      if (usersById.hasOwnProperty(userId)) {
        acc.push(`${usersById[userId].name.first} ${usersById[userId].name.last}`);
      }

      return acc;
    }, []);
  }
);
