import { takeLatest, call, put } from 'redux-saga/effects';
import { getUser, GetUserResponse } from 'services/userService';
import { ProfileActionTypes } from './profileTypes';
import { getProfileSuccess, getProfileFailure } from './profileActions';
import { parseError } from 'services/parseError';

function* getProfileSaga() {
  try {
    const { user }: GetUserResponse = yield call(getUser);
    yield put(getProfileSuccess(user));
  } catch (err) {
    const error = parseError(err);
    yield put(getProfileFailure(error));
  }
}

export function* profileSaga() {
  yield takeLatest(ProfileActionTypes.GET_PROFILE_REQUEST, getProfileSaga);
}
