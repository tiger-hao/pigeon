import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getConversations, GetConversationsResponse } from 'services/conversationService';
import { ConversationActionTypes, ConversationsById } from './conversationTypes';
import { getConversationsSuccess, getConversationsFailure } from './conversationActions';
import { parseError } from 'services/parseError';
import { addMessages } from 'store/messages/messageActions';
import { addUsers } from 'store/users/userActions';

function* getConversationsSaga() {
  try {
    const {
      entities: {
        conversations,
        messages,
        users
      },
      result
    }: GetConversationsResponse = yield call(getConversations);

    const conversationsById: ConversationsById = {};

    Object.keys(conversations).forEach((conversationId: string) => {
      const { name, members, lastMessage } = conversations[conversationId];

      conversationsById[conversationId] = {
        id: conversationId,
        name,
        members,
        messages: [lastMessage]
      };
    });

    yield put(getConversationsSuccess(conversationsById, result));
    yield put(addMessages(messages));
    yield put(addUsers(users));
  } catch (err) {
    const error = parseError(err);
    yield put(getConversationsFailure(error));
  }
}

export function* conversationSaga() {
  yield all([
    takeLatest(ConversationActionTypes.GET_CONVERSATIONS_REQUEST, getConversationsSaga)
  ]);
}
