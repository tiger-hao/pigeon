import {
  ConversationsById, ConversationActionTypes, GetConversationsRequestAction, GetConversationsSuccessAction, GetConversationsFailureAction
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
