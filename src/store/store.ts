import { createStore, applyMiddleware, PreloadedState } from 'redux';
import createSagaMiddleware from 'redux-saga';
import jwtDecode from 'jwt-decode';
import { rootReducer, RootState } from './rootReducer';
import { rootSaga } from './rootSaga';
import { getPersistedToken, persistToken } from './persistToken';

const preloadedState: PreloadedState<RootState> = {};
const token = getPersistedToken();

if (token) {
  const { user } = jwtDecode(token);
  preloadedState.auth = {
    token,
    userId: user.id,
    loading: false,
    error: ''
  };
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(persistToken);
sagaMiddleware.run(rootSaga);
