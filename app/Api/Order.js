/**
 * Created by akira on 26-02-2017.
 */
import axios from 'axios';
import { API_URL, userRole,userRoleType, session, franchiseRole } from './ApiConstants';

const localStorage = global.window.localStorage;

const orderApi = {
  getOrders(date, franchiseId) {
    const user = Object.keys(userRole())[0];
    const userId = Object.values(userRole())[0]
    const payload = {
      date: date,
      [user]: userId,
      franchise: franchiseRole(franchiseId),
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
  updateOrderDetails(id, data, type) {
      const UPDATE_ORDER_DETAILS_API = `${API_URL}/orders/${id}`;
      const payload = {
          ...data,
          createdByUserRole: Object.keys(userRole())[0].toUpperCase(),
          createdBy: Object.values(userRole())[0],
          franchise: franchiseRole(),
      };
      return axios({
          method: type,
          url: UPDATE_ORDER_DETAILS_API,
          data: payload,
          responseType: 'json',
      }).then((response) => response.data);
  }
};

export default orderApi;
