import { all, fork } from 'redux-saga/effects';
import { authSaga } from './auth/authSaga';
import { userSaga } from './user/userSaga';

export function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(userSaga)
  ]);
}
