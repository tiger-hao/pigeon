import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth/authSaga';
import { profileSaga } from './profile/profileSaga';
import { conversationSaga } from './conversations/conversationSaga';
import { messageSaga } from './messages/messageSaga';
import { userSaga } from './users/userSaga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(profileSaga),
    fork(conversationSaga),
    fork(messageSaga),
    fork(userSaga)
  ]);
}
