import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getUser, IGetUserResponse } from 'services/userService';
import { UserActionTypes } from './userTypes';
import { getUserSuccess, getUserFailure } from './userActions';
import { parseError } from 'utils/parseError';

function* getUserSaga() {
  try {
    const { data }: AxiosResponse<IGetUserResponse> = yield call(getUser);
    yield put(getUserSuccess(data));
  } catch (err) {
    const error = parseError(err);
    yield put(getUserFailure(error));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionTypes.GET_USER_REQUEST, getUserSaga);
}
