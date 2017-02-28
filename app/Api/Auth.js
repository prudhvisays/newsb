import axios from 'axios';
import setAuthorizationToken from './Token';
const API_URL = 'https://season-boy-api.herokuapp.com/api';
let localStorage = global.window.localStorage;

const auth = {
  login(Username, Password) {
    const payload = {
      username: Username,
      password: Password,
      userRole: 'MANAGER',
    };
    const POST_AUTH_API = `${API_URL}/auth/login`;
    if (auth.loggedIn()) {
      return Promise.resolve(true);
    }
    return axios({
      method: 'POST',
      url: POST_AUTH_API,
      data: payload,
      responseType: 'json',
    }).then((response) => {
      const { data } = response;
      localStorage.token = data.token;
      setAuthorizationToken(data.token);
      const { username, manager } = data;
      localStorage.setItem('sessionData',
        JSON.stringify({
          username,
          manager,
        }));
      return Promise.resolve(true);
    });
  },
  logout() {
    return new Promise((resolve) => {
      delete localStorage.token
      localStorage.removeItem('sessionData');
      setAuthorizationToken(false);
      resolve(true);
    });
  },
  loggedIn() {
    return !!localStorage.token;
  },
};

export default auth;
