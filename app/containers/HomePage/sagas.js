import { takeLatest, takeEvery } from 'redux-saga';
import { take, call, put, select, fork, cancel, delay, race } from 'redux-saga/effects';
import realData from '../../Api';
import * as actions from './actions';
import moment from 'moment';

export function* fetchOrderStats() {
  const statsDate = moment().format('YYYYMMDD');
  yield put(actions.statsRequesting(true));
  try {
    const [orderData, pilotData] = yield [
      call(realData.getOrderStatsApi, statsDate),
      call(realData.getPilotStatsApi, statsDate),
    ];
    console.log(orderData);
    yield put(actions.getOrderStatsSuccess(orderData));
    yield put(actions.getPilotStatsSuccess(pilotData));
  } catch (err) {
    yield put(actions.getStatsFailure(err.message));
  } finally {
    yield put(actions.statsRequesting(false));
  }
}

export function* fetchOrderStatsWatch() {
  yield fork(takeLatest, 'GET_STATS', fetchOrderStats);
}

export function* fetchOrderStatsRoot() {
  const main = yield fork(fetchOrderStatsWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(main);
}
// TEAMS
export function* fetchTeams() {
  try {
    const response = yield call(realData.getTeamsApi);
    yield put(actions.getTeamsSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getTeamsFailure(error.response.data));
    }
  }
}

export function* loadTeamSales(teamsPanel) {

}
export function* fetchTeamsFlow() {
  while(true) {
    yield take('GET_TEAMS');
    yield call(fetchTeams);
  }
}
export const getProject = () => (state) => state.get('home');
export const getDate = () => {
  const nowDate = moment().format('YYYYMMDD');
  return {
    fromDate: nowDate,
    toDate: nowDate,
  };
};
export function* loadTeamSalesFlow() {
  const salesDate = getDate();
  try {
    yield take('GET_TEAMS_SUCCESS');
    const teamSales = yield call(realData.getTeamSalesApi, salesDate);
    yield put(actions.getTeamSalesSuccess(teamSales));
  } catch (error) {
    if (error.response) {
      yield put(actions.getTeamSalesFailure(error.response.data));
    }
  }
}
export function* loadTeamCustomersFlow() {
  const salesDate = getDate();
  try {
    yield take('GET_TEAM_SALES_SUCCESS');
    const teamCustomers = yield call(realData.getTeamCustomersApi, salesDate);
    yield put(actions.getTeamCustomersSuccess(teamCustomers));
  } catch (error) {
    if (error.response) {
      yield put(actions.getTeamCustomersFailure(error.response.data));
    }
  }
}

export function* fetchTeamsWatch() {
  yield fork(fetchTeamsFlow);
}
export function* loadTeamSalesWatch() {
  yield fork(takeLatest, 'GET_TEAMS', loadTeamSalesFlow);
}
export function* loadTeamCustomersWatch() {
  yield fork(takeLatest, 'GET_TEAMS', loadTeamCustomersFlow);
}

export function* fetchTeamsRoot() {
  const Teamwatcher = yield fork(fetchTeamsWatch);
  const salesWatcher = yield fork(loadTeamSalesWatch);
  const teamCustomers = yield fork(loadTeamCustomersWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(Teamwatcher);
  yield cancel(salesWatcher);
  yield cancel(teamCustomers);
}

// TEAM SALES fromDate toDate
export function* fetchTeamSales(salesDate) {
  console.info(salesDate);
  try {
    const response = yield call(realData.getTeamSalesApi, salesDate);
    yield put(actions.getTeamSalesSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getTeamSalesFailure(error.response.data));
    }
  }
}
export function* fetchTeamSalesFlow() {
  while(true) {
    const request = yield take('GET_TEAM_SALES');
    const salesDate = request.payload;
    yield call(fetchTeamSales, salesDate);
  }
}
export function* fetchTeamSalesWatch() {
  yield fork(fetchTeamSalesFlow);
}

export function* fetchTeamSalesRoot() {
  const salesRoot = yield fork(fetchTeamSalesWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(salesRoot);
}
// POST ADD TASK
export function* postAddTask(taskData) {
  yield put(actions.addingTask(true));
  try {
    const response = yield call(realData.postAddTaskApi, taskData);
    yield put(actions.postAddTaskSuccess(response));
    return response;
  } catch (error) {
    if (error.response) {
      yield put(actions.postAddTaskFailure(error.message));
    }
    return false;
  } finally {
    yield put(actions.addingTask(false));
  }
}
export function* postAddTaskFlow() {
  while(true) {
    const request = yield take('POST_ADD_TASK');
    const taskData = request.data;
    yield call(postAddTask, taskData);
  }
}
export function* postAddTaskWatch() {
  yield fork(postAddTaskFlow);
}

export function* postAddTaskRoot() {
  const postTaskWatcher = yield fork(postAddTaskWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(postTaskWatcher);
}
export default [
  fetchOrderStatsWatch,
  fetchTeamsRoot,
  fetchTeamSalesRoot,
  postAddTaskRoot,
];
