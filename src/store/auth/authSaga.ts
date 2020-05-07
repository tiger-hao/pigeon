import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AuthActionTypes, LoginRequestAction, SignupRequestAction } from './authTypes';
import { loginUser, signupUser, UserTokenResponse } from 'services/userService';
import { loginSuccess, loginFailure, signupSuccess, signupFailure } from './authActions';
import { getUserSuccess } from 'store/user/userActions';
import { parseError } from 'services/parseError';

function* loginSaga({ payload: { loginInfo, setFormikErrors } }: LoginRequestAction) {
  try {
    const { access_token, token_type }: UserTokenResponse = yield call(loginUser, loginInfo);
    yield put(loginSuccess(`${token_type} ${access_token}`));
  } catch (err) {
    if (err.response && err.response.data && err.response.data.data) {
      setFormikErrors(err.response.data.data);
    }

    const error = parseError(err);
    yield put(loginFailure(error));
  }
}

function* signupSaga({ payload: { signupInfo, setFormikErrors } }: SignupRequestAction) {
  try {
    const { access_token, token_type }: UserTokenResponse = yield call(signupUser, signupInfo);
    yield put(signupSuccess(`${token_type} ${access_token}`));
    yield put(getUserSuccess(signupInfo));
  } catch (err) {
    if (err.response && err.response.data && err.response.data.data) {
      setFormikErrors(err.response.data.data);
    }

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
