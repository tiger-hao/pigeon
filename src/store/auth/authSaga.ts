import { takeLatest, call, put, all } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import { AuthActionTypes, LoginRequestAction, SignupRequestAction } from './authTypes';
import { loginUser, signupUser, UserTokenResponse } from 'services/userService';
import { loginSuccess, loginFailure, signupSuccess, signupFailure } from './authActions';
import { getProfileSuccess } from 'store/profile/profileActions';
import { parseError } from 'services/parseError';

function* loginSaga({ loginInfo, setFormikErrors }: LoginRequestAction) {
  try {
    const { access_token, token_type }: UserTokenResponse = yield call(loginUser, loginInfo);
    const token = `${token_type} ${access_token}`;
    const { user } = jwtDecode(token);

    yield put(loginSuccess(token, user.id));
  } catch (err) {
    if (err.response && err.response.data && err.response.data.data) {
      setFormikErrors(err.response.data.data);
    }

    const error = parseError(err);
    yield put(loginFailure(error));
  }
}

function* signupSaga({ signupInfo }: SignupRequestAction) {
  try {
    const { access_token, token_type }: UserTokenResponse = yield call(signupUser, signupInfo);
    const token = `${token_type} ${access_token}`;
    const { user } = jwtDecode(token);

    yield put(signupSuccess(token, user.id));
    yield put(getProfileSuccess({
      id: user.id,
      ...signupInfo
    }));
  } catch (err) {
    const error = parseError(err);
    yield put(signupFailure(error));
  }
}

export function* authSaga() {
  yield all([
    takeLatest(AuthActionTypes.LOGIN_REQUEST, loginSaga),
    takeLatest(AuthActionTypes.SIGNUP_REQUEST, signupSaga)
  ]);
}
