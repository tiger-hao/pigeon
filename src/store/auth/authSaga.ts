import { takeLatest, call, put, all } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { AuthActionTypes, ILoginRequestAction, ISignupRequestAction } from './authTypes';
import { signupUser, IUserTokenResponse } from 'services/userService';
import { signupSuccess, signupFailure } from './authActions';
import { getUserSuccess } from 'store/user/userActions';

function* loginSaga({ payload: { loginInfo } }: ILoginRequestAction) {
}

function* signupSaga({ payload: { signupInfo } }: ISignupRequestAction) {
  try {
    const { data: { access_token, token_type } }: AxiosResponse<IUserTokenResponse> = yield call(signupUser, signupInfo);
    yield put(signupSuccess(`${token_type} ${access_token}`));
    yield put(getUserSuccess(signupInfo));
  } catch (err) {
    let error: string = err.message || "Something went wrong.";

    // get the actual API response if there's an API error
    if (err.response && err.response.data) {
      const response = err.response.data;
      error = (response.data && JSON.stringify(response.data)) || response.message;
    }

    yield put(signupFailure(error));
  }
}

export function* authSaga() {
  yield all([
    takeLatest(AuthActionTypes.LOGIN_REQUEST, loginSaga),
    takeLatest(AuthActionTypes.SIGNUP_REQUEST, signupSaga)
  ]);
}
