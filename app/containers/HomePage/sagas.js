import { delay } from 'redux-saga';
import { take, call, put, select, fork, cancel, race, takeLatest, takeEvery, } from 'redux-saga/effects';
import moment from 'moment';
import realData from '../../Api';
import pilotApi from '../../Api/Pilot';
import orderApi from '../../Api/Order';
import userApi from '../../Api/userApi';
import * as actions from './actions';
import { orderId, pilotId, franchiseList, re_order, orderOptions, pilotInfo } from './selectors';

export function* fetchOrderStats() {
  const statsDate = moment().format('YYYYMMDD');
  const { selectedFranchise } = yield select(franchiseList());
  yield put(actions.statsRequesting(true));
  try {
    const [orderData, pilotData] = yield [
      call(realData.getOrderStatsApi, statsDate, selectedFranchise),
      call(realData.getPilotStatsApi, statsDate, selectedFranchise),
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
export function* fetchTeams(franchiseId) {
  try {
    const response = yield call(realData.getTeamsApi,franchiseId);
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
    const { selectedFranchise } = yield select(franchiseList());
    yield call(fetchTeams, selectedFranchise);
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
  const { selectedFranchise } = yield select(franchiseList());
  try {
    yield take('GET_TEAMS_SUCCESS');
    const teamCustomers = yield call(realData.getTeamCustomersApi, salesDate, selectedFranchise);
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
    const { selectedFranchise } = yield select(franchiseList());
    const teamSales = yield call(realData.getTeamSalesApi, date, selectedFranchise);
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
export function* fetchTeamCustomers(Date, franchiseId) {
  console.info(Date);
  try {
    const customers = yield call(realData.getTeamCustomersApi, Date, franchiseId);
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
    const { selectedFranchise } = yield select(franchiseList());
    yield call(fetchTeamCustomers, salesDate, selectedFranchise);
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
      yield put(actions.addTaskStatus({ statusText: 'Sending', statusColor: '#6bc9c5' }));
    } else {
      yield put(actions.addTaskStatus({ statusText: 'Sending', statusColor: '#6bc9c5' }));
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
export function* fetchPilots(team, franchiseId) {
  console.log("fecth pilots" + franchiseId);
  try {
    const response = yield call(pilotApi.getPilots, team, franchiseId);
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
   const { selectedFranchise } = yield select(franchiseList());
    yield call(fetchPilots, team, selectedFranchise);
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
// END of FETCH PILOTS

export function* fetchOrders(date, franchiseId) {
  try {
    const response = yield call(orderApi.getOrders, date, franchiseId);
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
    const { selectedFranchise } = yield select(franchiseList());
    yield call(fetchOrders, date, selectedFranchise);
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
export function* fetchPilotDetails(Date, id) {
  yield put(actions.requestPilotDetail(true));
  try {
    const response = yield call(pilotApi.getPilotDetails, Date, id);
    yield put(actions.getPilotDetailSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getPilotDetailFailure(error.message));
    }
  } finally {
    yield put(actions.requestPilotDetail(false));
  }
}
export function* fetchPilotDetailsFlow() {
  const Date = moment().format('YYYYMMDD');
  const id = yield select(pilotId());
  yield call(fetchPilotDetails, Date, id);
}

export function* fetchPilotLocation(coordinates) {
    try {
        const response = yield call(pilotApi.getPilotLocation, coordinates);
        yield put(actions.getPilotLocationSuccess(response.results[0].formatted_address));
    } catch (error) {
        if (error.response) {
            yield put(actions.getPilotLocationFailure(error.message));
        }
    }
}
export function* fetchPilotLocationFlow() {
    const pilotDetails = yield select(pilotInfo());
    console.log(pilotDetails);
    const { coordinates } = pilotDetails.pilot ? pilotDetails.pilot.location ? pilotDetails.pilot.location : '' : '';
    yield call(fetchPilotLocation, coordinates);
}
export function* fetchPilotDetailsWatch() {
  yield fork(takeLatest,'GET_PILOT_DETAILS', fetchPilotDetailsFlow);
}

export function* fetchPilotLocationWatch() {
    yield fork(takeLatest, 'GET_PILOT_DETAILS_SUCCESS', fetchPilotLocationFlow);
}
export function* fetchPilotDetailsRoot(){
  const pilotDetailWatcher = yield fork(fetchPilotDetailsWatch);
  const pilotLocationWatcher = yield fork(fetchPilotLocationWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(pilotDetailWatcher);
  yield cancel(pilotLocationWatcher);
}

// GET FRANCHISE LIST
export function* fetchFranchiseList() {
  try {
    const response = yield call(userApi.getFranchisesApi);
    yield put(actions.getFranchiseListSuccess(response));
  } catch (error) {
    if (error.response) {
      yield put(actions.getFranchiseListFailure(error.message));
    }
  }
}
export function* fetchFranchiseListFlow() {
  while(true) {
    const request = yield take('GET_FRANCHISE_LIST');
    yield call(fetchFranchiseList);
  }
}
export function* fetchFranchiseListWatch() {
  yield fork(fetchFranchiseListFlow);
}

export function* fetchFranchiseListRoot() {
  const FrachiseListWatcher = yield fork(fetchFranchiseListWatch);
  yield take('LOCATION_CHANGE');
  yield cancel(FrachiseListWatcher);
}
// END OF FRANCHISE LIST

// UPDATE ORDER
export function* updateOrderDetails(id, data, type) {
    yield put(actions.updateOrderReq(true));
    try {
        const response = yield call(orderApi.updateOrderDetails, id, data, type);
        yield put(actions.updateOrderSuccess(response));
        yield put(actions.updateOrderStatus({ statusText: 'Successful', statusColor: 'rgb(81, 212, 255)' }));
        if(type === 'PUT') {
          yield put(actions.getOrderDetail(id));
        }
        return response;
    } catch (error) {
        if (error.response) {
            yield put(actions.updateOrderFailure(error.message));
            yield put(actions.updateOrderStatus({ statusText: 'Unsuccessful, Please try Again', statusColor: '#f44336' }));
        }
    } finally {
        yield call(delay, 3000);
        yield put(actions.updateOrderReq(false));
    }
}
export function* updateOrderDetailsFlow() {
    let type;
    const id = yield select(orderId());
    const updateType = yield select(orderOptions());
    const data = yield select(re_order());
    let res;
    if(updateType.reAssign) {
        res = yield call(updateOrderDetails, id, data, type='PUT');
    } else if(updateType.delete){
        res = yield call(updateOrderDetails, id, data, type='DELETE');
    }
    if (res) {
        yield put(actions.reOrderClear());
        yield put(actions.orderAction({reAssign: false, edit: false, delete: false,}));
        yield put(actions.updateOrderStatus({ statusText: 'Sending', statusColor: '#6bc9c5' }));
    } else {
        yield put(actions.updateOrderStatus({ statusText: 'Sending', statusColor: '#6bc9c5' }));
    }
}
export function* updateOrderDetailsWatch() {
    yield fork(takeLatest,'UPDATE_ORDER', updateOrderDetailsFlow);
}
export function* updateOrderDetailsRoot(){
    const updateWatcher = yield fork(updateOrderDetailsWatch);
    yield take('LOCATION_CHANGE');
    yield cancel(updateWatcher);
}
export default [
  fetchOrderStatsWatch,
  fetchTeamsRoot,
  fetchTeamCustomersRoot,
  postAddTaskRoot,
  fetchPilotsRoot,
  fetchOrdersRoot,
  fetchOrderDetailsRoot,
  fetchPilotDetailsRoot,
  fetchFranchiseListRoot,
  updateOrderDetailsRoot,
];
