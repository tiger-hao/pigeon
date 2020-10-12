import {
  ConversationsById, Conversation, ConversationActionTypes, GetConversationsRequestAction, GetConversationsSuccessAction, GetConversationsFailureAction,
  CreateConversationRequestAction, CreateConversationSuccessAction, CreateConversationFailureAction
} from './conversationTypes';

export const getConversationsRequest = (): GetConversationsRequestAction => ({
  type: ConversationActionTypes.GET_CONVERSATIONS_REQUEST,
});

export const getConversationsSuccess = (conversationsById: ConversationsById, allConversations: string[]): GetConversationsSuccessAction => ({
  type: ConversationActionTypes.GET_CONVERSATIONS_SUCCESS,
  conversationsById,
  allConversations
});

export const getConversationsFailure = (error: string): GetConversationsFailureAction => ({
  type: ConversationActionTypes.GET_CONVERSATIONS_FAILURE,
  error
});

export const createConversationRequest = (members: string[], name?: string): CreateConversationRequestAction => ({
  type: ConversationActionTypes.CREATE_CONVERSATION_REQUEST,
  members,
  name
});

export const createConversationSuccess = (conversation: Conversation): CreateConversationSuccessAction => ({
  type: ConversationActionTypes.CREATE_CONVERSATION_SUCCESS,
  conversation
});

export const createConversationFailure = (error: string): CreateConversationFailureAction => ({
  type: ConversationActionTypes.CREATE_CONVERSATION_FAILURE,
  error
});
