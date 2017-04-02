import auth from './Auth';
export const API_URL = 'https://season-boy-api.herokuapp.com/api';
export const session = () => JSON.parse(localStorage.getItem('sessionData'));
// export const franchiseRole = () => {
//   if(userRoleType() === 'isFranchise' ? session().manager.franchise: null,
// }
export const userRole = () => {
  if(auth.loggedIn()){
    const session = JSON.parse(localStorage.getItem('sessionData'));
    if(session.manager) {
      return {manager:session['manager']['_id']};
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
