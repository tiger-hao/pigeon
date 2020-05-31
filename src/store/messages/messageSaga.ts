import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getMessages, GetMessagesResponse } from 'services/messageService';
import { MessageActionTypes, GetMessagesRequestAction } from './messageTypes';
import { getMessagesSuccess, getMessagesFailure } from './messageActions';
import { parseError } from 'services/parseError';
import { addUsers } from 'store/users/userActions';

function* getMessagesSaga({ conversationId }: GetMessagesRequestAction) {
  try {
    const {
      entities: {
        messages,
        users
      },
      result
    }: GetMessagesResponse = yield call(getMessages, conversationId);

    yield put(getMessagesSuccess(conversationId, messages, result));
    yield put(addUsers(users));
  } catch (err) {
    const error = parseError(err);
    yield put(getMessagesFailure(error));
  }
}

export function* messageSaga() {
  yield all([
    takeLatest(MessageActionTypes.GET_MESSAGES_REQUEST, getMessagesSaga)
  ]);
}
