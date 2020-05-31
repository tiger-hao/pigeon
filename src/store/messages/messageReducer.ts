import { Reducer, combineReducers } from 'redux';
import { MessageActionTypes, MessagesById, MessageAction } from './messageTypes';

const messagesById: Reducer<MessagesById, MessageAction> = (state = {}, action) => {
  switch (action.type) {
    case MessageActionTypes.GET_MESSAGES_SUCCESS:
    case MessageActionTypes.ADD_MESSAGES:
      return {
        ...state,
        ...action.messagesById
      };
    case MessageActionTypes.ADD_MESSAGE:
      const { message } = action;

      return {
        ...state,
        [message.id]: message
      };
    default:
      return state;
  }
};

const loading: Reducer<boolean, MessageAction> = (state = false, action) => {
  switch (action.type) {
    case MessageActionTypes.GET_MESSAGES_REQUEST:
      return true;
    case MessageActionTypes.GET_MESSAGES_SUCCESS:
    case MessageActionTypes.GET_MESSAGES_FAILURE:
      return false;
    default:
      return state;
  }
};

const error: Reducer<string, MessageAction> = (state = '', action) => {
  switch (action.type) {
    case MessageActionTypes.GET_MESSAGES_SUCCESS:
      return '';
    case MessageActionTypes.GET_MESSAGES_FAILURE:
      return action.error;
    default:
      return state;
  }
};

export const messageReducer = combineReducers({
  byId: messagesById,
  loading,
  error
});

export type MessageState = ReturnType<typeof messageReducer>;
