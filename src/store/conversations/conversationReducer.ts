import { Reducer, combineReducers } from 'redux';
import { ConversationActionTypes, ConversationsById, ConversationAction } from './conversationTypes';
import { MessageActionTypes } from 'store/messages/messageTypes';

const conversationsById: Reducer<ConversationsById, ConversationAction> = (state = {}, action) => {
  switch (action.type) {
    case ConversationActionTypes.GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        ...action.conversationsById
      };
    case MessageActionTypes.GET_MESSAGES_SUCCESS: {
      const { conversationId, allMessages } = action;
      const conversation = state[conversationId];

      return {
        ...state,
        [conversationId]: {
          ...conversation,
          messages: allMessages
        }
      };
    }
    case MessageActionTypes.ADD_MESSAGE: {
      const { conversationId, message } = action;
      const conversation = state[conversationId];

      return {
        ...state,
        [conversationId]: {
          ...conversation,
          messages: conversation.messages.concat(message.id)
        }
      };
    }
    default:
      return state;
  }
};

const allConversations: Reducer<string[], ConversationAction> = (state = [], action) => {
  switch (action.type) {
    case ConversationActionTypes.GET_CONVERSATIONS_SUCCESS:
      return action.allConversations;
    default:
      return state;
  }
};

const loading: Reducer<boolean, ConversationAction> = (state = false, action) => {
  switch (action.type) {
    case ConversationActionTypes.GET_CONVERSATIONS_REQUEST:
      return true;
    case ConversationActionTypes.GET_CONVERSATIONS_SUCCESS:
    case ConversationActionTypes.GET_CONVERSATIONS_FAILURE:
      return false;
    default:
      return state;
  }
};

const error: Reducer<string, ConversationAction> = (state = '', action) => {
  switch (action.type) {
    case ConversationActionTypes.GET_CONVERSATIONS_SUCCESS:
      return '';
    case ConversationActionTypes.GET_CONVERSATIONS_FAILURE:
      return action.error;
    default:
      return state;
  }
};

export const conversationReducer = combineReducers({
  byId: conversationsById,
  allIds: allConversations,
  loading,
  error
});

export type ConversationState = ReturnType<typeof conversationReducer>;
