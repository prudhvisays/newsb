const initialState = {
  userInfo: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    emailAddress: '',
    isAdmin: false,
    isFranchiseAdmin: false,
    isManager: false,
    isPilot: false,
    isMerchant: true,
    isCustomer: false,
    franchise: '',
    teams: [],
    license: '',
    transportType: '',
    name: '',
    location: {
      type: 'Point',
      coordinates: [ 78.4867, 17.3850 ]
    },
    registration_status: true
  }
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_USER_CORD':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          location: action.payload
        }
      };
    case 'ON_FORM_CHANGE':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'RESET_USER_DATA':
      return {
        ...state,
        userInfo: initialState,
      };
    default:
      return state;
  }
}

export default userReducer;
