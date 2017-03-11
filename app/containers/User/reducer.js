const initialState = {
  userInfo: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    emailAddress: '',
    isAdmin: false, // Dropdown - Manager
    isFranchiseAdmin: false, // Dropdown - Manager
    isManager: false, // Dropdown - Manager
    isPilot: false, // Dropdown - Pilot
    isMerchant: false, // Dropdown - Customer - isMerchant : true
    isCustomer: false, // Dropdown - Customer - isMerchant : false
    franchise: '', // isFranchiseAdmin - true
    teams: [], // isManager - true
    license: '', // isPilot - true
    transportType: '', // isPilot - true
    name: '', // isMerchant - true
    selectAdmin: false,
    location: {
      type: 'Point',
      coordinates: [ 78.4867, 17.3850 ],
    },
    geo_fence: {
      type: 'Polygon',
      coordinates: [],
    },
    registration_status: true,
    isOpen: false,
  },
  teams: [],
  selectAdmin: false,
  franchise: false,
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
    case 'GET_USER_TEAM_SUCCESS':
      return {
        ...state,
        teams: action.payload,
      };
    case 'ON_USER_FORM_CHANGE':
      return {
        ...state,
        userInfo: action.payload,
      };
    case 'USER_CORDS_CHANGE':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          location: {
            ...state.userInfo.location,
            coordinates: [action.payload.fLng, action.payload.fLat],
          },
        },
      };
    case 'USER_GEO_FENCE':
      return geoFence(state,action);
    default:
      return state;
  }
}

function geoFence(state, action) {
  const cords = action.payload;
  let geoCords = [];
  if (cords[0] != null) {
    cords[0].map((cord) => geoCords.push([cord.lng, cord.lat]));
    console.table(geoCords);
  } else {
    geoCords = [];
  }

  return {
    ...state,
    userInfo: {
      ...state.userInfo,
      geo_fence: {
        ...state.userInfo.geo_fence,
        coordinates: geoCords,
      },
    },
  };
}
export default userReducer;
