import { Action } from 'redux';
import { GetMessagesSuccessAction, AddMessageAction, SendMessageAction } from 'store/messages/messageTypes';

export interface Conversation {
  id: string;
  name: string;
  members: string[];
  messages: string[];
}

export interface ConversationsById {
  [key: string]: Conversation
}

export enum ConversationActionTypes {
  GET_CONVERSATIONS_REQUEST = 'pigeon/conversations/GET_CONVERSATIONS_REQUEST',
  GET_CONVERSATIONS_SUCCESS = 'pigeon/conversations/GET_CONVERSATIONS_SUCCESS',
  GET_CONVERSATIONS_FAILURE = 'pigeon/conversations/GET_CONVERSATIONS_FAILURE'
}

export type GetConversationsRequestAction = Action<ConversationActionTypes.GET_CONVERSATIONS_REQUEST>;

export interface GetConversationsSuccessAction extends Action<ConversationActionTypes.GET_CONVERSATIONS_SUCCESS> {
  conversationsById: ConversationsById;
  allConversations: string[];
}

export interface GetConversationsFailureAction extends Action<ConversationActionTypes.GET_CONVERSATIONS_FAILURE> {
  error: string;
}

export type ConversationAction = GetConversationsRequestAction | GetConversationsSuccessAction
  | GetConversationsFailureAction | GetMessagesSuccessAction | AddMessageAction | SendMessageAction;
