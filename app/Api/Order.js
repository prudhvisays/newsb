/**
 * Created by akira on 26-02-2017.
 */
import axios from 'axios';
import { API_URL } from './ApiConstants';

const localStorage = global.window.localStorage;
const manager = JSON.parse(localStorage.getItem('sessionData'))['manager']['_id'];

const orderApi = {
  getOrders(date) {
    const payload = {
      date: date,
      manager: manager,
      timeZone : 'Asia/Kolkata'
    };
    const GET_ORDERS_API = `${API_URL}/orders/list`;
    return axios({
      method: 'POST',
      url: GET_ORDERS_API,
      data: payload,
      responseType: 'json',
    }).then((response) => response.data);
  },
  getOrderDetails(id) {
     const GET_ORDER_DETAILS_API = `${API_URL}/orders/${id}`;
     return axios({
     method: 'GET',
     url: GET_ORDER_DETAILS_API,
     responseType: 'json',
   }).then((response) => response.data);
  },
};

export default orderApi;
