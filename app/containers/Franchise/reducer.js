const initialState = {
  franchiseCord: {},
  franchiseGeoFence: [],
  reqGeoFence: false,
  newFormState: {
    name: '',
    description: '',
  },
  pilots: [],
  request: false,
};

function franchiseReducer(state = initialState, action) {
  switch (action.type) {
    case 'POST_FRANC_CORD':
      return {
        ...state,
        franchiseCord: action.payload,
      };
    case 'POST_GEO_FENCE':
      return geoFence(state, action);
    case 'ON_FORM_CHANGE':
      return {
        ...state,
        newFormState: action.payload,
      };
    default:
      return state;
  }
}

function geoFence(state, action) {
  const cords = action.payload;
  let geoCords = [];
  if (cords[0] != null) {
    cords[0].map((cord) => geoCords.push([cord.lat, cord.lng]));
    console.table(geoCords);
  } else {
    geoCords = [];
  }

  return {
    ...state,
    franchiseGeoFence: geoCords,
    reqGeoFence: !state.reqGeoFence,
  };
}
export default franchiseReducer;
