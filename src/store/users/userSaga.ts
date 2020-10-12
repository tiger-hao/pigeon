import { takeLatest, call, put, all } from 'redux-saga/effects';
import { getUsers, GetUsersResponse } from 'services/userService';
import { GetUsersRequestAction, UserActionTypes } from './userTypes';
import { getUsersSuccess, getUsersFailure } from './userActions';
import { parseError } from 'services/parseError';

function* getUsersSaga({ params }: GetUsersRequestAction) {
  try {
    const {
      entities: {
        users
      },
      result
    }: GetUsersResponse = yield call(getUsers, params);

    yield put(getUsersSuccess(users, result));
  } catch (err) {
    const error = parseError(err);
    yield put(getUsersFailure(error));
  }
}

export function* userSaga() {
  yield all([
    takeLatest(UserActionTypes.GET_USERS_REQUEST, getUsersSaga)
  ]);
}
