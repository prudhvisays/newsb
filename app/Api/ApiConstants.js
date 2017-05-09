import auth from './Auth';
export const API_URL = 'https://season-boy-api.herokuapp.com/api';
export const GMAP_KEY = 'AIzaSyC2jlDRTovbD3Pfpz_MkD1wre8yNqcA7AA';
export const GEO_CODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng';
export const session = () => JSON.parse(localStorage.getItem('sessionData'));
export const franchiseRole = (franchise) => userRoleType() === 'isFranchise' ? session().manager.franchise._id : franchise !== 'All' ? franchise : null;
export const userRole = () => {
  if(auth.loggedIn()){
    if(session().manager) {
      return {manager:session()['manager']['_id']};
    }
  };
};

export const userType = () => {
  if(auth.loggedIn()) {
    const session = JSON.parse(localStorage.getItem('sessionData'));
    if(session['username'] === 'admin') {
      return true;
    } else if(session['username'] === 'merchant') {
      return false;
    }
  };
};

export const userRoleType = () => {
  if(auth.loggedIn()) {
    if (session().manager) {
      if (session().manager.isFranchiseAdmin) {
        return 'isFranchise';
      } else if (session().manager.isAdmin) {
        return 'isAdmin';
      }
    }
  }else {
      if(session().customer) {
        return 'isCustomer';
      }
    }
  }
