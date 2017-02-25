export function onFormChange(data) {
  return {
    type: 'ON_FORM_CHANGE',
    payload: data,
  };
}


export function submitingRequest(data) {
  return {
    type: 'POST_REQUEST',
    payload: data,
  };
}

export function submitUserData(data) {
  return {
    type: 'SUBMIT_USER_DATA',
    payload: data,
  };
}

export function getUserResponse(data) {
  return {
    type: 'GET_USER_RESPONSE',
    payload: data,
  };
}

export function resetUserData(data) {
  return {
    type: 'RESET_USER_DATA',
    payload: data,
  };
}

export function getFranchises(data) {
  return {
    type: 'GET_USER_RESPONSE',
    payload: data,
  };
}

export function getTeams(data) {
  return {
    type: 'GET_USER_RESPONSE',
    payload: data,
  };
}
