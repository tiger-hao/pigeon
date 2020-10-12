import { takeLatest, call, put, all } from 'redux-saga/effects';
import { createConversation, CreateConversationResponse, getConversations, GetConversationsResponse } from 'services/conversationService';
import { ConversationActionTypes, CreateConversationRequestAction } from './conversationTypes';
import { getConversationsSuccess, getConversationsFailure, createConversationSuccess, createConversationFailure } from './conversationActions';
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
      result: allConversationIds
    }: GetConversationsResponse = yield call(getConversations);

    yield put(addMessages(messages));
    yield put(addUsers(users));
    yield put(getConversationsSuccess(conversations, allConversationIds));
  } catch (err) {
    const error = parseError(err);
    yield put(getConversationsFailure(error));
  }
}

function* createConversationSaga(newConversation: CreateConversationRequestAction) {
  try {
    const {
      entities: {
        conversations
      },
      result: conversationId
    }: CreateConversationResponse = yield call(createConversation, newConversation);

    yield put(createConversationSuccess(conversations[conversationId]));
  } catch (err) {
    const error = parseError(err);
    yield put(createConversationFailure(error));
  }
}

export function* conversationSaga() {
  yield all([
    takeLatest(ConversationActionTypes.GET_CONVERSATIONS_REQUEST, getConversationsSaga),
    takeLatest(ConversationActionTypes.CREATE_CONVERSATION_REQUEST, createConversationSaga)
  ]);
}
