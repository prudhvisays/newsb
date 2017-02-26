import { delay } from 'redux-saga';
import { take, call, put, select, fork, cancel, race, takeLatest, takeEvery, } from 'redux-saga/effects';
import moment from 'moment';
import realData from '../../Api';
import pilotApi from '../../Api/Pilot';
import orderApi from '../../Api/Order';
import * as actions from './actions';
import { orderId } from './selectors';

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
export const getState = () => (state) => state.get('home');
export const getDate = () => {
  const nowDate = moment().format('YYYYMMDD');
  return {
    fromDate: nowDate,
    toDate: nowDate,
  };
};

export function* loadTeamCustomersFlow() {
  const salesDate = getDate();
  try {
    yield take('GET_TEAMS_SUCCESS');
    const teamCustomers = yield call(realData.getTeamCustomersApi, salesDate);
    yield put(actions.getTeamCustomersSuccess({ response: teamCustomers, date: salesDate }));
  } catch (error) {
    if (error.response) {
      yield put(actions.getTeamCustomersFailure(error.response.data));
    }
  }
}

export function* loadTeamSalesFlow() {
  try {
    yield take('GET_TEAM_CUSTOMERS_SUCCESS');
    const state = yield select(getState());
    const { date } = state.teamsPanel.teamCustomers
    const teamSales = yield call(realData.getTeamSalesApi, date);
    yield put(actions.getTeamSalesSuccess({ response: teamSales, date}));
  } catch (error) {
    if (error.response) {
      yield put(actions.getTeamSalesFailure(error.response.data));
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

// TEAM CUSTOMERS AND SALES fromDate toDate
export function* fetchTeamCustomers(Date) {
  console.info(Date);
  try {
    const customers = yield call(realData.getTeamCustomersApi, Date);
    yield put(actions.getTeamCustomersSuccess({ response: customers, date: Date }));
  } catch (error) {
    if (error.response) {
      yield put(actions.getTeamCustomersFailure(error.response.data));
    }
  }
}
export function* fetchTeamCustomersFlow() {
  while(true) {
    const request = yield take('GET_TEAM_CUSTOMERS');
    const salesDate = request.payload;
    yield call(fetchTeamCustomers, salesDate);
  }
}
export function* fetchTeamCustomersWatch() {
  yield fork(fetchTeamCustomersFlow);
}
export function* fetchTeamSalesWatch() {
  yield fork(takeLatest, 'GET_TEAM_CUSTOMERS', loadTeamSalesFlow);
}
export function* fetchTeamCustomersRoot() {
  const customersRoot = yield fork(fetchTeamCustomersWatch);
  const salesWatch = yield fork(fetchTeamSalesWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(customersRoot);
  yield cancel(salesWatch);
}
// POST ADD TASK
export function* postAddTask(taskData) {
  yield put(actions.addingTask(true));
  try {
    const response = yield call(realData.postAddTaskApi, taskData);
    yield put(actions.postAddTaskSuccess(response));
    yield put(actions.addTaskStatus({ statusText: 'Successful', statusColor: 'rgb(81, 212, 255)' }));
    return response;
  } catch (error) {
    if (error.response) {
      yield put(actions.postAddTaskFailure(error.message));
      yield put(actions.addTaskStatus({ statusText: 'Unsuccessful, Please try Again', statusColor: '#f44336' }));
    }
  } finally {
    yield call(delay, 4000);
    yield put(actions.addingTask(false));
  }
}
export function* postAddTaskFlow() {
  while (true) {
    const request = yield take('POST_ADD_TASK');
    const taskData = request.data;
    const res = yield call(postAddTask, taskData);
    if (res) {
      yield put(actions.clearForm());
      yield put(actions.addTaskStatus({ statusText: 'Sending', statusColor: '#fff' }));
    } else {
      yield put(actions.addTaskStatus({ statusText: 'Sending', statusColor: '#fff' }));
    }
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
// End of Post Add Task

// GET PILOTS
export function* fetchPilots(team) {
  console.log("fecth pilots" + team);
  try {
    const response = yield call(pilotApi.getPilots, team);
    yield put(actions.getPilotSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getPilotFailure(error.message));
    }
  }
}

export function* fetchPilotsFlow() {
  while(true){
   const req = yield take('GET_PILOT');
   const team = req.payload;
    yield call(fetchPilots, team);
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

export function* fetchOrders(date) {
  try {
    const response = yield call(orderApi.getOrders, date);
    yield put(actions.getOrderSuccess({ response, date }));
  } catch (error) {
    if (error.response) {
      yield put(actions.getOrderFailure({ error: error.message, date }));
    }
  }
}
export function* fetchOrdersFlow() {
  while (true) {
    const req = yield take('GET_ORDER');
    const date = req.payload ? req.payload : moment().format('YYYYMMDD');
    console.log(date);
    yield call(fetchOrders, date);
  }
}
export function* fetchOrdersWatch() {
  yield fork(fetchOrdersFlow);
}
export function* fetchOrdersRoot() {
  const ordersWatcher = yield fork(fetchOrdersWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(ordersWatcher);
}

export function* fetchOrderDetails(id) {
  yield put(actions.requestOrderDetail(true));
  try {
    const response = yield call(orderApi.getOrderDetails, id);
    yield put(actions.getOrderDetailSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getOrderDetailFailure(error.message));
    }
  } finally {
    yield call(delay,2000);
    yield put(actions.requestOrderDetail(false));
  }
}
export function* fetchOrderDetailsFlow() {
  const id = yield select(orderId());
  yield call(fetchOrderDetails, id);
}
export function* fetchOrderDetailsWatch() {
  yield fork(takeLatest,'GET_ORDER_DETAILS', fetchOrderDetailsFlow);
}
export function* fetchOrderDetailsRoot(){
  const detailWatcher = yield fork(fetchOrderDetailsWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(detailWatcher);
}
export default [
  fetchOrderStatsWatch,
  fetchTeamsRoot,
  fetchTeamCustomersRoot,
  postAddTaskRoot,
  fetchPilotsRoot,
  fetchOrdersRoot,
  fetchOrderDetailsRoot,
];
