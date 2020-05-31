import { Action } from 'redux';

export interface Message {
  id: string;
  sender: string;
  createdAt: string;
  text: string;
}

export interface MessagesById {
  [key: string]: Message
}

export enum MessageActionTypes {
  GET_MESSAGES_REQUEST = 'pigeon/messages/GET_MESSAGES_REQUEST',
  GET_MESSAGES_SUCCESS = 'pigeon/messages/GET_MESSAGES_SUCCESS',
  GET_MESSAGES_FAILURE = 'pigeon/messages/GET_MESSAGES_FAILURE',
  ADD_MESSAGE = 'pigeon/messages/ADD_MESSAGE',
  ADD_MESSAGES = 'pigeon/messages/ADD_MESSAGES'
}

export interface GetMessagesRequestAction extends Action<MessageActionTypes.GET_MESSAGES_REQUEST> {
  conversationId: string;
}

export interface GetMessagesSuccessAction extends Action<MessageActionTypes.GET_MESSAGES_SUCCESS> {
  conversationId: string;
  messagesById: MessagesById;
  allMessages: string[];
}

export interface GetMessagesFailureAction extends Action<MessageActionTypes.GET_MESSAGES_FAILURE> {
  error: string;
}

export interface AddMessageAction extends Action<MessageActionTypes.ADD_MESSAGE> {
  message: Message;
  conversationId: string;
}

export interface AddMessagesAction extends Action<MessageActionTypes.ADD_MESSAGES> {
  messagesById: MessagesById;
}

export type MessageAction = GetMessagesRequestAction | GetMessagesSuccessAction | GetMessagesFailureAction
  | AddMessageAction | AddMessagesAction;
