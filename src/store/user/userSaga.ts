import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getUser, IGetUserResponse } from 'services/userService';
import { UserActionTypes } from './userTypes';
import { getUserSuccess, getUserFailure } from './userActions';

function* getUserSaga() {
  try {
    const { data }: AxiosResponse<IGetUserResponse> = yield call(getUser);
    yield put(getUserSuccess(data));
  } catch (err) {
    let error: string = err.message || "Something went wrong.";

    // get the actual API response if there's an API error
    if (err.response && err.response.data) {
      const response = err.response.data;
      error = (response.data && JSON.stringify(response.data)) || response.message;
    }

    yield put(getUserFailure(error));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionTypes.GET_USER_REQUEST, getUserSaga);
}
