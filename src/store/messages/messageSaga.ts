import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getMessages, GetMessagesResponse, sendMessage, SendMessageResponse } from 'services/messageService';
import { MessageActionTypes, GetMessagesRequestAction, SendMessageAction } from './messageTypes';
import { getMessagesSuccess, getMessagesFailure, addMessage } from './messageActions';
import { parseError } from 'services/parseError';
import { addUsers } from 'store/users/userActions';

function* getMessagesSaga({ conversationId }: GetMessagesRequestAction) {
  try {
    const {
      entities: {
        messages,
        users
      },
      result: allMessageIds
    }: GetMessagesResponse = yield call(getMessages, conversationId);

    yield put(addUsers(users));
    yield put(getMessagesSuccess(conversationId, messages, allMessageIds));
  } catch (err) {
    const error = parseError(err);
    yield put(getMessagesFailure(error));
  }
}

function* sendMessageSaga({ message: messageText, conversationId }: SendMessageAction) {
  try {
    const {
      entities: {
        messages
      },
      result: messageId
    }: SendMessageResponse = yield call(sendMessage, messageText, conversationId);

    yield put(addMessage(messages[messageId], conversationId));
  } catch (err) {
    const error = parseError(err);
    yield put(getMessagesFailure(error));
  }
}

export function* messageSaga() {
  yield all([
    takeLatest(MessageActionTypes.GET_MESSAGES_REQUEST, getMessagesSaga),
    takeLatest(MessageActionTypes.SEND_MESSAGE, sendMessageSaga)
  ]);
}
