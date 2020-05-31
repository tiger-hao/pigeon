import {
  Message, MessagesById, MessageActionTypes, GetMessagesRequestAction, GetMessagesSuccessAction, GetMessagesFailureAction,
  AddMessageAction, AddMessagesAction
} from './messageTypes';

export const getMessagesRequest = (conversationId: string): GetMessagesRequestAction => ({
  type: MessageActionTypes.GET_MESSAGES_REQUEST,
  conversationId
});

export const getMessagesSuccess = (conversationId: string, messagesById: MessagesById, allMessages: string[]): GetMessagesSuccessAction => ({
  type: MessageActionTypes.GET_MESSAGES_SUCCESS,
  conversationId,
  messagesById,
  allMessages
});

export const getMessagesFailure = (error: string): GetMessagesFailureAction => ({
  type: MessageActionTypes.GET_MESSAGES_FAILURE,
  error
});

export const addMessage = (message: Message, conversationId: string): AddMessageAction => ({
  type: MessageActionTypes.ADD_MESSAGE,
  message,
  conversationId
});

export const addMessages = (messagesById: MessagesById): AddMessagesAction => ({
  type: MessageActionTypes.ADD_MESSAGES,
  messagesById
});
