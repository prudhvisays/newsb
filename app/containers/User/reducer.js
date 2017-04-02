import { userRoleType } from '../../Api/ApiConstants';
import { LOCATION_CHANGE } from 'react-router-redux';

export const initialState = {
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
    isTeam: false,
    isFranchise: false,
    franchise: '', // isFranchiseAdmin - true
    teams: [], // isManager - true
    license: '', // isPilot - true
    transportType: '', // isPilot - true
    name: '', // isMerchant - true
    selectAdmin: false,
    address: '',
    location: {
      type: 'Point',
      coordinates: [ 78.4867, 17.3850 ],
    },
    geo_fence: {
      type: 'MultiPolygon',
      coordinates: [[[[0,0]]]],
    },
    registration_status: true,
    isOpen: false,
  },
  teams: [],
  franchises: [],
  selectAdmin: false,
  franchise: false,
  request: false,
  createUserStatus: {
    statusText: 'Sending',
    statusColor: '#6bc9c5',
  },
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
    case 'GET_FRANCHISE_SUCCESS':
      return {
        ...state,
        franchises: action.payload,
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
          address: action.payload.address,
          location: {
            ...state.userInfo.location,
            coordinates: [action.payload.fLng, action.payload.fLat],
          },
        },
      };
    case 'USER_GEO_FENCE':
      return geoFence(state,action);
    case 'REQ_CREATE_USER':
    return {
      ...state,
      request: action.payload,
    }
    case 'CREATE_USER_STATUS':
    return {
      ...state,
      createUserStatus: action.payload,
    }
    case 'CLEAR_USER_FORM':
    return initialState;
    default:
      return state;
  }
}

function geoFence(state, action) {
  const cords = action.payload;
  let geoCords = [[[]]];
  if (cords[0] != null) {
    cords[0].map((cord) => geoCords[0][0].push([cord.lng, cord.lat]));
    geoCords[0][0].push([cords[0][0].lng, cords[0][0].lat])
    console.table(geoCords);
  } else {
    geoCords = [[[[0,0]]]];
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
