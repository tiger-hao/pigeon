import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { UserActionTypes, ILoginRequestAction, ISignupRequestAction } from './userTypes';
import { signupUser, IUserTokenResponse } from 'services/userService';
import { signupSuccess, signupFailure } from './userActions';

function* loginSaga({ payload: { loginInfo } }: ILoginRequestAction) {
}

function* signupSaga({ payload: { signupInfo } }: ISignupRequestAction) {
  try {
    const { data: { access_token, token_type } }: AxiosResponse<IUserTokenResponse> = yield call(signupUser, signupInfo);
    const payload = {
      name: signupInfo.name,
      email: signupInfo.email,
      token: `${token_type} ${access_token}`,
    };
    yield put(signupSuccess(payload));
  } catch (err) {
    // get the actual API response if there's an API error
    const error = (err.response && err.response.data) || err;
    yield put(signupFailure(error));
  }
}

export function* userSaga() {
  yield all([
    takeLatest(UserActionTypes.LOGIN_REQUEST, loginSaga),
    takeLatest(UserActionTypes.SIGNUP_REQUEST, signupSaga)
  ]);
}
