import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';
import { ConversationsById } from './conversationTypes';

export const getConversationsById = (state: RootState) => state.conversations.byId;
export const getAllConversationIds = (state: RootState) => state.conversations.allIds;
export const getConversationsLoading = (state: RootState) => state.conversations.loading;

export const getConversation = createSelector(
  getConversationsById,
  (state: RootState, conversationId: string) => conversationId,
  (conversationsById: ConversationsById, conversationId: string) => conversationsById[conversationId]
);
