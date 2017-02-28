import auth from './Auth';
export const API_URL = 'https://season-boy-api.herokuapp.com/api';
export const manager = localStorage.getItem('sessionData') ? JSON.parse(localStorage.getItem('sessionData'))['manager']['_id'] : '';
