import { EventChannel } from 'redux-saga';
import { takeLatest, call, put, all, fork, select, take } from 'redux-saga/effects';
import { getMessages, GetMessagesResponse, sendMessage, SendMessageResponse } from 'services/messageService';
import { MessageActionTypes, GetMessagesRequestAction, SendMessageAction } from './messageTypes';
import { getMessagesSuccess, getMessagesFailure, addMessage } from './messageActions';
import { parseError } from 'services/parseError';
import { addUsers } from 'store/users/userActions';
import { getCurrentUser } from 'store/auth/authSelectors';
import { ConversationActionTypes, ConversationsById } from 'store/conversations/conversationTypes';
import { getConversationsById } from 'store/conversations/conversationSelectors';
import { connectSocket, createSocketChannel, NewMessage } from './messageSocket';
import { getConversationsRequest } from 'store/conversations/conversationActions';

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

export function* receiveMessageSaga() {
  const userId = yield select(getCurrentUser);
  const socket: SocketIOClient.Socket = yield call(connectSocket);
  const socketChannel: EventChannel<NewMessage> = yield call(createSocketChannel, socket, userId);

  while (true) {
    try {
      const { message, conversationId }: NewMessage = yield take(socketChannel);
      const conversationsById: ConversationsById = yield select(getConversationsById);

      if (!conversationsById.hasOwnProperty(conversationId)) {
        yield put(getConversationsRequest());
        yield take(ConversationActionTypes.GET_CONVERSATIONS_SUCCESS);
      }

      yield put(addMessage(message, conversationId));
    } catch (err) {
      console.error('Socket Error:', err);
      socketChannel.close();
    }
  }
}

export function* messageSaga() {
  yield all([
    takeLatest(MessageActionTypes.GET_MESSAGES_REQUEST, getMessagesSaga),
    takeLatest(MessageActionTypes.SEND_MESSAGE, sendMessageSaga),
    fork(receiveMessageSaga)
  ]);
}
