import axios from 'axios';
import { API_URL } from './ApiConstants';

const userApi = {
  getPilotsApi() {
    const GET_PILOTS_API = `${API_URL}/pilots`;
    return axios({
      method: 'GET',
      url: GET_PILOTS_API,
      responseType: 'json',
    }).then((response) => response.data);
  },
   getFranchisesApi() {
    const GET_FRANCHISES_API = `${API_URL}/franchises`;
    return axios({
      method: 'GET',
      url: GET_FRANCHISES_API,
      responseType: 'json',
    }).then((response) => response.data);
  },
  postCreateUserApi(Data, userType) {
    const POST_FRANCHISE_API = `${API_URL}/${userType}`;
    return axios({
      method: 'POST',
      url: POST_FRANCHISE_API,
      data: Data,
      responseType: 'json',
    }).then((response) => response.data);
  },
};

export default userApi;
