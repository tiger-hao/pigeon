import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AuthActionTypes, ILoginRequestAction, ISignupRequestAction } from './authTypes';
import { loginUser, signupUser, IUserTokenResponse } from 'services/userService';
import { loginSuccess, loginFailure, signupSuccess, signupFailure } from './authActions';
import { getUserSuccess } from 'store/user/userActions';
import { parseError } from 'services/parseError';

function* loginSaga({ payload: { loginInfo } }: ILoginRequestAction) {
  try {
    const { access_token, token_type }: IUserTokenResponse = yield call(loginUser, loginInfo);
    yield put(loginSuccess(`${token_type} ${access_token}`));
  } catch (err) {
    const error = parseError(err);
    yield put(loginFailure(error));
  }
}

function* signupSaga({ payload: { signupInfo } }: ISignupRequestAction) {
  try {
    const { access_token, token_type }: IUserTokenResponse = yield call(signupUser, signupInfo);
    yield put(signupSuccess(`${token_type} ${access_token}`));
    yield put(getUserSuccess(signupInfo));
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
