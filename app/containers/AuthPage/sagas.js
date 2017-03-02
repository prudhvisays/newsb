import { takeLatest, takeEvery } from 'redux-saga';
import { take, call, put, fork, race, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import auth from '../../Api/Auth';

export function* authorize({ username, password, userRole }) {
  yield put({ type: 'SENDING_REQUEST', sending: true });

  try {
    const response = yield call(auth.login, username, password, userRole);
    yield put({ type: 'USER_TYPE', userType: response.data });
    return response;
  } catch (error) {
    console.log('error bhaiya');
    if (error.response) {
      yield put({ type: 'REQUEST_ERROR', error: error.response.data });
    }
    return false;
  } finally {
    yield put({ type: 'SENDING_REQUEST', sending: false });
  }
}

export function* logout() {
  yield put({ type: 'SENDING_REQUEST', sending: true });

  try {
    let response = yield call(auth.logout);
    yield put({ type: 'SENDING_REQUEST', sending: false });
  } catch (error) {
    yield put({ type: 'REQUEST_ERROR', error: error.message });
  }
}

export function* loginFlow() {
  while (true) {
    const request = yield take('LOGIN_REQUEST');
    const { username, password, userRole } = request.data;

    const winner = yield race({
      auth: call(authorize, { username, password, userRole }),
      logout: take('LOGOUT'),
    });

    if (winner.auth) {
      yield put({ type: 'SET_AUTH', newAuthState: true });
      yield put({ type: 'CHANGE_FORM', newFormState: { username: '', password: '' } });
      const OneSignal = window.OneSignal || [];
      OneSignal.push(['sendTags', { manager: 'ADMIN' }]);
      yield put(push('/'));
    } else if (winner.logout) {
      yield put({ type: 'SET_AUTH', newAuthState: false });
      yield call(logout);
      yield put(push('/login'));
    }
  }
}

export function* logoutFlow() {
    yield call(logout);
    yield put({ type: 'SET_AUTH', newAuthState: false });
    yield put(push('/login'));
}

export function* loginRoot() {
  yield fork(loginFlow);
}

export function* logoutRoot() {
  yield fork(takeLatest,'LOGOUT', logoutFlow);
}

export default [
  loginRoot,
  logoutRoot,
];

function forwardTo(location) {
  browserHistory.push(location);
}
