import { takeLatest, takeEvery } from 'redux-saga';
import { take, call, put, select, fork, cancel, delay, race } from 'redux-saga/effects';
import * as actions from './actions';
import  franchiseApi from '../../Api/franchiseApi';

export function* fetchPilots(salesDate) {
  console.info(salesDate);
  try {
    const response = yield call(franchiseApi.getPilotsApi);
    yield put(actions.getPilotsSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getPilotsFailure(error.response.data));
    }
  }
}
export function* fetchPilotsFlow() {
  while(true) {
    const request = yield take('GET_PILOTS');
    const salesDate = request.payload;
    yield call(fetchPilots, salesDate);
  }
}
export function* fetchPilotsWatch() {
  yield fork(fetchPilotsFlow);
}

export function* fetchPilotsRoot() {
  const pilotsWatcher = yield fork(fetchPilotsWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(pilotsWatcher);
}
// Post Franchise
export function* postFranchise(data) {
  console.log(data);
  try {
    const response = yield call(franchiseApi.postFranchiseApi, data);
    yield put(actions.getFranchiseResponse(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getPilotsFailure(error.response.data));
    }
  }
}
export function* postFranchiseFlow() {
  while(true) {
    const request = yield take('SUBMIT_FRANCHISE_DATA');
    const { newFormState, statefranchiseCord, stateFranchiseGeoFence } = request.payload;
    yield call(postFranchise, { newFormState, stateFranchiseGeoFence, statefranchiseCord });
  }
}
export function* postFranchiseWatch() {
  yield fork(postFranchiseFlow);
}

export function* postFranchiseRoot() {
  const franchiseWatcher = yield fork(postFranchiseWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(franchiseWatcher);
}
export default[
  fetchPilotsRoot,
  postFranchiseRoot,
];
