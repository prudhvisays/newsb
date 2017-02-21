export function postFrancCord(data) {
  return {
    type: 'POST_FRANC_CORD',
    payload: data,
  };
}

export function postGeoFence(data) {
  return {
    type: 'POST_GEO_FENCE',
    payload: data,
  };
}

export function onFormChange(data) {
  return {
    type: 'ON_FORM_CHANGE',
    payload: data,
  };
}

export function getPilots() {
  return {
    type: 'GET_PILOTS',
  };
}

export function getPilotsSuccess(data) {
  return {
    type: 'GET_PILOTS_SUCCESS',
    payload: data,
  };
}

export function getPilotsFailure(data) {
  return {
    type: 'GET_PILOTS_FAILURE',
    payload: data,
  };
}

export function submitingRequest(data) {
  return {
    type: 'POST_REQUEST',
    payload: data,
  };
}

export function submitFranchiseData(data) {
  return {
    type: 'SUBMIT_FRANCHISE_DATA',
    payload: data,
  };
}

export function getFranchiseResponse(data) {
  return {
    type: 'GET_FRANCHISE_RESPONSE',
    payload: data,
  };
}
