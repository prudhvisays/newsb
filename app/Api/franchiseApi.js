import axios from 'axios';
import { API_URL } from './ApiConstants';

const franchiseApi = {
  getPilotsApi() {
    const GET_PILOTS_API = `${API_URL}/pilots`;
    return axios({
      method: 'GET',
      url: GET_PILOTS_API,
      responseType: 'json',
    }).then((response) => response.data);
  },
  postFranchiseApi(data) {
    const payload = {
      name: data.newFormState.name,
      description: data.newFormState.description,
      teams: ['sdshdshlhdlsh', '3883tt28t38'],
      location: {
        type: 'Point',
        coordinates: [data.statefranchiseCord.fLng, data.statefranchiseCord.fLat],
      },
      geo_fence: {
        type: 'Polygon',
        coordinates: data.stateFranchiseGeoFence,
      },
    };
    const POST_FRANCHISE_API = `${API_URL}/franchises`;
    return axios({
      method: 'POST',
      url: POST_FRANCHISE_API,
      data: payload,
      responseType: 'json',
    }).then((response) => response.data);
  },
};

export default franchiseApi;
