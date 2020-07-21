import { createSelector } from 'reselect';
import { RootState } from 'store/rootReducer';
import { MessagesById } from './messageTypes';

export const getMessagesById = (state: RootState) => state.messages.byId;

export const getMessage = createSelector(
  getMessagesById,
  (state: RootState, messageId: string) => messageId,
  (messagesById: MessagesById, messageId: string) => messagesById[messageId]
);
