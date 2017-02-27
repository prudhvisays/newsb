import axios from 'axios';
import { API_URL } from './ApiConstants';

const localStorage = global.window.localStorage;
const manager = JSON.parse(localStorage.getItem('sessionData'))['manager']['_id'];

const PilotApi = {
  getPilots(team) {
    const payload = {
      manager : manager,
      team: team ? team : ''
    };
    const GET_PILOTS_API = `${API_URL}/pilots/list`;
    return axios({
      method: 'POST',
      url: GET_PILOTS_API,
      data: payload,
      responseType: 'json',
    }).then((response) => response.data);
  },
  createPilot(data) {
    const payload = data;
    const ADD_PILOT_API = `${API_URL}/pilots`;
    return axios({
      method: 'POST',
      url: ADD_PILOT_API,
      data: payload,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getPilotDetails(date, id) {
    const payload = {
      date: date,
      timeZone: 'Asia/Kolkata',
    };
    const GET_PILOT_DETAILS_API = `${API_URL}/pilots/activity/${id}`;
    return axios({
      method: 'POST',
      url: GET_PILOT_DETAILS_API,
      data: payload,
      responseType: 'json',
    }).then((response) => response.data);
  },
};

export default PilotApi;
