import { delay } from 'redux-saga';
import { take, call, put, select, fork, cancel, race, takeLatest, takeEvery, } from 'redux-saga/effects';
import * as actions from './actions';
import  realData from '../../Api';
import  userApi from '../../Api/userApi';
import * as selectors from './selectors';

export function* fetchTeams() {
  try {
    const response = yield call(realData.getTeamsApi);
    yield put(actions.getUserTeamSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getUserTeamFailure(error.message));
    }
  }
}
export function* fetchTeamsFlow() {
  while(true) {
    const request = yield take('GET_USER_TEAM');
    yield call(fetchTeams);
  }
}
export function* fetchTeamsWatch() {
  yield fork(fetchTeamsFlow);
}

export function* fetchTeamsRoot() {
  const teamsWatcher = yield fork(fetchTeamsWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(teamsWatcher);
}
export function* fetchFranchises() {
  try {
    const response = yield call(userApi.getFranchisesApi);
    yield put(actions.getFranchiseSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getFranchiseFailure(error.message));
    }
  }
}
export function* fetchFranchisesFlow() {
  while(true) {
    const request = yield take('GET_FRANCHISE');
    yield call(fetchFranchises);
  }
}
export function* fetchFranchisesWatch() {
  yield fork(fetchFranchisesFlow);
}

export function* fetchFranchisesRoot() {
  const FrachisesWatcher = yield fork(fetchFranchisesWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(FrachisesWatcher);
}
// Post Franchise || Create User
export function* postCreateUser(res, usertype) {
  console.log(res);
  yield put(actions.reqCreateuser(true));
  try {
    const response = yield call(userApi.postCreateUserApi, res, usertype);
    yield put(actions.createUserSuccess(response));
    yield put(actions.createUserStatus({ statusText: 'Successful', statusColor: 'rgb(81, 212, 255)' }));
    return response;
  } catch (error) {
    if (error.response) {
      yield put(actions.createUserFailure(error.message));
      yield put(actions.createUserStatus({ statusText: 'Unsuccessful, Please try Again', statusColor: '#f44336' }));
    }
  } finally {
    yield call(delay, 500);
    yield put(actions.reqCreateuser(false));
  }
}
export function* postCreateUserFlow() {
 const res = yield select(selectors.userInfo());
 let usertype;
 let apires;
 if(res.isFranchise){
   usertype = 'franchises';
   apires = yield call(postCreateUser, res, usertype);
 } else if(res.selectAdmin) {
   usertype = 'managers';
   apires = yield call(postCreateUser, res, usertype);
 } else if(res.isPilot) {
   usertype = 'pilots';
   apires = yield call(postCreateUser, res, usertype);
 } else if(res.isMerchant) {
   usertype = 'customers';
   apires = yield call(postCreateUser, res, usertype);
 }else if(res.isTeam) {
   usertype = 'teams';
   apires = yield call(postCreateUser, res, usertype);
 }
 if (apires) {
      yield put(actions.clearUserForm());
      yield put(actions.createUserStatus({ statusText: 'Sending', statusColor: '#6bc9c5' }));
    } else {
      yield put(actions.createUserStatus({ statusText: 'Sending', statusColor: '#6bc9c5' }));
    }
}
export function* postCreateUserWatch() {
  yield fork(takeLatest, 'CREATE_USER', postCreateUserFlow);
}
export function* postCreateUserRoot() {
  const userWatcher = yield fork(postCreateUserWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(userWatcher);
}
export default[
  fetchTeamsRoot,
  fetchFranchisesRoot,
  postCreateUserRoot,
];
