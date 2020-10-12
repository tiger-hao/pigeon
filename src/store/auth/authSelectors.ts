import { RootState } from 'store/rootReducer';

export const getToken = (state: RootState) => state.auth.token;
export const getCurrentUser = (state: RootState) => state.auth.userId;
