import { takeLatest, call, put } from 'redux-saga/effects';
import { getUser, IGetUserResponse } from 'services/userService';
import { UserActionTypes } from './userTypes';
import { getUserSuccess, getUserFailure } from './userActions';
import { parseError } from 'services/parseError';

function* getUserSaga() {
  try {
    const user: IGetUserResponse = yield call(getUser);
    yield put(getUserSuccess(user));
  } catch (err) {
    const error = parseError(err);
    yield put(getUserFailure(error));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionTypes.GET_USER_REQUEST, getUserSaga);
}
