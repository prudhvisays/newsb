import axios from 'axios';
import { API_URL, session, userRole, userRoleType, franchiseRole } from './ApiConstants';
const localStorage = global.window.localStorage;

const realData = {
  getOrderStatsApi(statsDate, franchiseId) {
    const StatsDate = {
      date: statsDate,
      franchise: franchiseRole(franchiseId),
      timeZone : 'Asia/Kolkata'
    };
    const GET_ORDER_STATS_API = `${API_URL}/orders/stats`;
    return axios({
      method: 'POST',
      url: GET_ORDER_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getPilotStatsApi(statsDate, franchiseId) {
    const StatsDate = {
      team: '*',
      franchise: franchiseRole(franchiseId),
    };
    const GET_PILOT_STATS_API = `${API_URL}/pilots/stats`;
    return axios({
      method: 'POST',
      url: GET_PILOT_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamsApi(franchiseId) {
    const GET_TEAMS_API = `${API_URL}/teams/list`;
    return axios({
      method: 'POST',
      url: GET_TEAMS_API,
      data: {
        franchise: franchiseRole(franchiseId),
      },
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamSalesApi(salesDate, franchiseId) {
    const GET_TEAM_SALES_API = `${API_URL}/customers/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_SALES_API,
      data: {
        fromDate: salesDate.fromDate,
        toDate: salesDate.toDate,
        franchise: franchiseRole(franchiseId),
      },
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamCustomersApi(salesDate, franchiseId) {
    const GET_TEAM_CUSTOMERS_API = `${API_URL}/customers/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_CUSTOMERS_API,
      data: {
        fromDate: salesDate.fromDate,
        toDate: salesDate.toDate,
        franchise: franchiseRole(franchiseId),
      },
      responseType: 'json',
    }).then((response) => response.data);
  },
  postAddTaskApi(data) {
    const { pickup, delivery, taskInfo, selection } = data.stateAddTask;
    const payload = {
      title: taskInfo.title,
      description: taskInfo.description,
      from_name: pickup.from_name,
      from_phone: pickup.from_phone,
      from_email: pickup.from_email,
      from_address: pickup.from_address,
      to_name: delivery.to_name,
      to_phone: delivery.to_phone,
      to_email: delivery.to_email,
      to_address: delivery.to_address,
      paymentType: 'PREPAID',
      status: 'PENDING',
      to_date_time: delivery.to_date,
      to_location: {
        coordinates: [data.dCord.dLng, data.dCord.dLat],
        type: 'Point',
      },
      from_date_time: pickup.from_date,
      from_location: {
        coordinates: [data.pCord.pLng, data.pCord.pLat],
        type: 'Point',
      },
      pilot: selection.pilots ? selection.pilots : '',
      team: selection.teamSelect ? selection.teamSelect : null,
      createdByUserRole: Object.keys(userRole())[0].toUpperCase(),
      createdBy: Object.values(userRole())[0],
      franchise: franchiseRole(),
    };
    const POST_ADD_TASK_API = `${API_URL}/orders`;
    return axios({
      method: 'POST',
      url: POST_ADD_TASK_API,
      data: payload,
      responseType: 'json',
    }).then((response) => response.data);
  },
};

export default realData;
