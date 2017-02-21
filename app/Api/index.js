import axios from 'axios';
const API_URL = 'https://season-boy-api.herokuapp.com/api';

const realData = {
  getOrderStatsApi(statsDate) {
    const StatsDate = {
      date: statsDate,
    };
    const GET_ORDER_STATS_API = `${API_URL}/orders/stats`;
    return axios({
      method: 'POST',
      url: GET_ORDER_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getPilotStatsApi(statsDate) {
    const StatsDate = {
      date: statsDate,
    };
    const GET_PILOT_STATS_API = `${API_URL}/pilots/stats`;
    return axios({
      method: 'POST',
      url: GET_PILOT_STATS_API,
      data: StatsDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamsApi() {
    const GET_TEAMS_API = `${API_URL}/teams`;
    return axios({
      method: 'GET',
      url: GET_TEAMS_API,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamSalesApi(salesDate) {
    const GET_TEAM_SALES_API = `${API_URL}/teams/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_SALES_API,
      data: salesDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getTeamCustomersApi(salesDate) {
    const GET_TEAM_CUSTOMERS_API = `${API_URL}/customers/sales`;
    return axios({
      method: 'POST',
      url: GET_TEAM_CUSTOMERS_API,
      data: salesDate,
      responseType: 'json',
    }).then((response) => response.data);
  },
  postAddTaskApi(data) {
    const { pickup, delivery, taskInfo } = data.stateAddTask;
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
      status: 'ASSIGNED',
      to_date_time: delivery.from_date,
      to_location: {
        coordinates: [data.dCord.dLng, data.dCord.dLat],
        type: 'Point',
      },
      from_date_time: pickup.from_date,
      from_location: {
        coordinates: [data.pCord.pLng, data.pCord.pLat],
        type: 'Point',
      },
      pilot: '',
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
